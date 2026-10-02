import { FormEvent, useState } from 'react';

const proof = [
  { icon: '/assets/ct-subscribers.svg', label: '45k+ Subscribers' },
  { icon: '/assets/ct-star.svg', label: 'Top 1% Substack in History & Politics' },
  { icon: '/assets/ct-verified.svg', label: 'No Ads, Pure Analysis' },
];

const tracks = ['Weekly Essays & Monographs', 'Keynote & Podcast Alerts', 'Book Pre-orders & Excerpts'];

export default function Dispatch() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>(tracks.slice(0, 2));
  const [joined, setJoined] = useState(false);

  const toggle = (track: string) =>
    setSelected((current) =>
      current.includes(track) ? current.filter((item) => item !== track) : [...current, track]
    );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setEmail('');
  };

  return (
    <section id="dispatch" className="bg-stone-50 py-12">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border-2 border-amber-500 bg-ink px-6 py-[50px] shadow-amber-6 sm:px-12 lg:px-32">
          <span className="absolute -bottom-20 -right-20 size-80 rounded-full bg-amber-500/10 blur-[20px]" />
          <img src="/assets/ct-deco.svg" alt="" className="absolute -bottom-10 right-10" />

          <div className="relative mx-auto flex max-w-[896px] flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/20 px-[13px] py-[5px] text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.6px] text-amber-300">
                <img src="/assets/ct-megaphone.svg" alt="" />
                Influencers Planet Weekly Dispatch
              </span>
              <h2 className="h2 !text-white">The Inquiring Mind Dispatch</h2>
              <p className="max-w-[672px] text-lg leading-[29.25px] text-zinc-300">
                Join over 45,000+ academics, media theorists, and civic leaders receiving Dr. Germien
                Amer's weekly deep-dives on classical political economy, historical geopolitics, and
                digital discourse.
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {proof.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-[13px] py-[5px] text-xs font-bold leading-4 text-zinc-300"
                  >
                    <img src={item.icon} alt="" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full max-w-[672px] flex-col gap-2 pt-1">
              <fieldset className="flex flex-col gap-1.5">
                <legend className="mb-1.5 text-xs font-bold uppercase leading-4 tracking-[0.6px] text-zinc-400">
                  Select Digest Edition Tracks:
                </legend>
                <div className="flex flex-wrap items-center gap-2">
                  {tracks.map((track) => {
                    const checked = selected.includes(track);
                    return (
                      <label
                        key={track}
                        className="flex cursor-pointer items-center gap-[7px] rounded-2xl border border-zinc-700 bg-zinc-800 py-1.5 pl-3 pr-[13px] text-xs font-bold leading-4 text-zinc-200"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(track)}
                          className="peer sr-only"
                        />
                        <span
                          className={`flex size-[18px] items-center justify-center rounded-lg border peer-focus-visible:ring-2 peer-focus-visible:ring-amber-300 ${
                            checked ? 'border-transparent bg-amber-500' : 'border-zinc-600 bg-zinc-900'
                          }`}
                        >
                          {checked && <img src="/assets/ct-check.svg" alt="" />}
                        </span>
                        {track}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                <div className="relative flex-1">
                  <img
                    src="/assets/ct-mail.svg"
                    alt=""
                    className="pointer-events-none absolute left-[17.67px] top-1/2 -translate-y-1/2"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your institutional or personal email..."
                    aria-label="Email address"
                    className="h-full w-full rounded-full border-2 border-zinc-700 bg-zinc-900 py-4 pl-[46px] pr-[18px] text-sm text-white shadow-[inset_0_2px_4px_2px_rgba(0,0,0,0.05)] outline-none placeholder:text-zinc-500 focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-label press rounded-full border-2 border-white bg-amber-500 px-[34px] py-[15.6px] shadow-white-2"
                >
                  Join Dispatch
                </button>
              </div>

              <p className="text-center text-xs font-medium leading-4 text-zinc-400" role="status">
                {joined
                  ? 'Welcome aboard — your first dispatch arrives Thursday morning.'
                  : 'Strictly zero spam. Unsubscribe with one click anytime. Published every Thursday morning.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
