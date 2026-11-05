import { useState, useEffect, type ImgHTMLAttributes } from 'react';

/**
 * Extracts a Google Drive File ID from various link formats:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?id=FILE_ID
 * - https://drive.google.com/thumbnail?id=FILE_ID
 * - https://lh3.googleusercontent.com/d/FILE_ID
 */
export function extractGoogleDriveId(url?: string | null): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();

  // Pattern: /file/d/{id}
  const fileDMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) return fileDMatch[1];

  // Pattern: id={id}
  const idParamMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch) return idParamMatch[1];

  // Pattern: googleusercontent.com/d/{id}
  const lh3Match = trimmed.match(/googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/);
  if (lh3Match) return lh3Match[1];

  return null;
}

/**
 * Converts a raw image URL (including Google Drive viewer links)
 * to a direct, browser-renderable image URL.
 */
export function resolveImageUrl(url?: string | null, size = 1200): string {
  if (!url || typeof url !== 'string') return '';
  const driveId = extractGoogleDriveId(url);
  if (driveId) {
    // Primary direct embed: high-res Google Drive thumbnail
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w${size}`;
  }
  return url.trim();
}

/**
 * Alternative Google Drive direct CDN URL for fallback.
 */
export function getGoogleDriveAlternativeUrl(url?: string | null): string | null {
  const driveId = extractGoogleDriveId(url);
  if (!driveId) return null;
  return `https://lh3.googleusercontent.com/d/${driveId}`;
}

export interface DirectImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  fallbackSrc?: string;
  driveSize?: number;
}

/**
 * Robust image component that transparently renders Google Drive links,
 * standard URLs, and provides multi-tiered error fallbacks.
 */
export function DirectImage({
  src,
  fallbackSrc = '/assets/germien-amer-book-signing.jpg',
  driveSize = 1200,
  alt = '',
  className,
  ...rest
}: DirectImageProps) {
  const initialResolved = resolveImageUrl(src, driveSize);
  const [currentSrc, setCurrentSrc] = useState(initialResolved || fallbackSrc);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  useEffect(() => {
    const resolved = resolveImageUrl(src, driveSize);
    setCurrentSrc(resolved || fallbackSrc);
    setFallbackAttempt(0);
  }, [src, driveSize, fallbackSrc]);

  const handleError = () => {
    if (fallbackAttempt === 0) {
      // Step 1: try the alternative lh3 CDN if this was a Google Drive file
      const altDrive = getGoogleDriveAlternativeUrl(src);
      if (altDrive && altDrive !== currentSrc) {
        setFallbackAttempt(1);
        setCurrentSrc(altDrive);
        return;
      }
    }
    if (fallbackAttempt <= 1 && fallbackSrc && currentSrc !== fallbackSrc) {
      // Step 2: fallback to local asset or placeholder
      setFallbackAttempt(2);
      setCurrentSrc(fallbackSrc);
      return;
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...rest}
    />
  );
}

