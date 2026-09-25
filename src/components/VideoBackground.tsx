import { useEffect, useRef } from 'react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4';

const FADE_MS = 500;
const FADE_OUT_REMAINING_S = 0.55;
const LOOP_RESET_DELAY_MS = 100;

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const cancelFade = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // Animates opacity to `target`, starting from wherever it currently is.
  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current;
    if (!video) return;

    cancelFade();

    const from = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      video.style.opacity = String(from + (target - from) * progress);
      rafRef.current = progress < 1 ? requestAnimationFrame(step) : null;
    };

    rafRef.current = requestAnimationFrame(step);
  };

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    fadingOutRef.current = false;
    video.play().catch(() => {});
    fadeTo(1, FADE_MS);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || fadingOutRef.current || !isFinite(video.duration)) return;

    if (video.duration - video.currentTime <= FADE_OUT_REMAINING_S) {
      fadingOutRef.current = true;
      fadeTo(0, FADE_MS);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    cancelFade();
    video.style.opacity = '0';

    resetTimeoutRef.current = window.setTimeout(() => {
      video.currentTime = 0;
      startPlayback();
    }, LOOP_RESET_DELAY_MS);
  };

  useEffect(
    () => () => {
      cancelFade();
      if (resetTimeoutRef.current !== null) clearTimeout(resetTimeoutRef.current);
    },
    []
  );

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
      style={{ opacity: 0 }}
      src={VIDEO_SRC}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={startPlayback}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}
