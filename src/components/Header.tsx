import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

// `lines` mirrors the stacked labels in the design's desktop nav.
const links = [
  { lines: ['Overview'], href: '#overview' },
  { lines: ['Mission &', 'Vision'], href: '#mission' },
  { lines: ['Portfolio'], href: '#portfolio' },
  { lines: ['Books &', 'Initiatives'], href: '#products' },
  { lines: ['Podcast &', 'Talks'], href: '#lectures' },
  { lines: ['Insights'], href: '#tips' },
  { lines: ['News'], href: '#news' },
  { lines: ['Contact'], href: '#contact' },
];

const HEADER_OFFSET = 100;

// Highlights the nav link of whichever section currently sits under the header.
function useActiveSection() {
  const [active, setActive] = useState(links[0].href);

  useEffect(() => {
    const update = () => {
      let current = links[0].href;
      let currentTop = -Infinity;

      links.forEach((link) => {
        const top = document.querySelector(link.href)?.getBoundingClientRect().top;
        if (top !== undefined && top <= HEADER_OFFSET && top > currentTop) {
          current = link.href;
          currentTop = top;
        }
      });

      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return active;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-amber-500/30 bg-white/95 shadow-header backdrop-blur-[6px]">
      <div className="mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-16">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber-500 bg-white p-1 shadow-sm">
            <img src="/assets/logo.jpg" alt="Influencers Planet" className="size-full object-cover" />
          </span>
          <span className="flex flex-col">
            <span className="flex items-center gap-1.5">
              <span className="font-display text-xl font-extrabold leading-[25px] tracking-[-0.5px] text-ink">
                Influencers<span className="text-amber-500">Planet</span>
              </span>
              <span className="hidden rounded-lg bg-amber-500/20 px-1.5 text-[10px] font-extrabold uppercase leading-[26.4px] tracking-[0.5px] text-ink sm:block xl:hidden 2xl:block">
                Hub
              </span>
            </span>
            <span className="text-xs font-medium leading-[17.6px] tracking-[0.72px] text-zinc-600">
              Dr. Germien Amer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-4" aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`whitespace-nowrap border-b-2 pb-2.5 pt-2 text-sm uppercase leading-5 tracking-[0.35px] transition-colors ${
                  isActive
                    ? 'border-amber-500 font-extrabold text-ink'
                    : 'border-transparent font-bold text-zinc-600 hover:text-ink'
                }`}
              >
                {link.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href="#contact"
            className="btn-label press hidden rounded-full border-2 border-ink bg-amber-500 px-[26px] py-3 text-center shadow-ink-2 md:block xl:hidden min-[1720px]:block"
          >
            Invite Dr. Amer to Speak
          </a>
          <span className="hidden border-l-2 border-zinc-200 pl-1.5 sm:flex">
            <img
              src="/assets/logo.jpg"
              alt="Dr. Germien Amer"
              className="size-9 rounded-full object-cover shadow-[0_0_0_2px_#f59e0b,0_1px_2px_0_rgba(0,0,0,0.05)]"
            />
          </span>
          <button
            type="button"
            className="rounded-xl border-2 border-ink p-2 text-ink xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200 bg-white px-5 py-3 sm:px-8 xl:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm uppercase tracking-[0.35px] ${
                active === link.href ? 'font-extrabold text-ink' : 'font-bold text-zinc-600'
              }`}
            >
              {link.lines.join(' ')}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
