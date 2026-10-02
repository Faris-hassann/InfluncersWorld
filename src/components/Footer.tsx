import { FormEvent, useState } from 'react';

const columns = [
  {
    title: 'Monographs & Works',
    links: [
      { label: 'Curriculum Vitae', href: '#portfolio' },
      { label: 'Published Books', href: '#products' },
      { label: 'Peer-Reviewed Papers', href: '#portfolio' },
      { label: 'Keynotes & Colloquia', href: '#lectures' },
      { label: 'Syllabi & Readings', href: '#tips' },
    ],
  },
  {
    title: 'Influencer Portals',
    links: [
      { label: 'Google Scholar', href: '#portfolio' },
      { label: 'The Sterling Gazette (Substack)', href: '#dispatch' },
      { label: 'Archival Audio on Spotify', href: '#lectures' },
      { label: 'LinkedIn Academic Profile', href: '#contact' },
      { label: 'Dispatches on X', href: '#news' },
    ],
  },
];

const legal = ['Academic Freedom Disclosure', 'Press Inquiries', 'Archival Rights'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
    setEmail('');
  };

  return (
    <footer className="border-t-4 border-amber-500 bg-ink pt-1">
      <div className="container-page py-12">
        <div className="grid gap-10 border-b border-zinc-800 pb-[49px] md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-4">
            <a href="#top" className="flex items-center gap-3 pb-1">
              <span className="flex size-11 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber-500 bg-white p-1.5">
                <img src="/assets/footer-logo.jpg" alt="Influencers Planet" className="size-full object-cover" />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-xl font-extrabold leading-[25px] text-white">
                  Influencers<span className="text-amber-500">Planet</span>
                </span>
                <span className="-mt-px text-[11px] font-bold uppercase leading-[26.4px] tracking-[0.55px] text-zinc-400">
                  Prof. Arthur Sterling Folio
                </span>
              </span>
            </a>
            <p className="max-w-[384px] text-sm leading-[22.75px] text-zinc-400">
              Senior Fellow in Classical Epistemology &amp; Moral Philosophy. Dedicated to historical
              inquiry, published treatises, collegiate discourse, and impactful global civic engagement.
            </p>
            <div className="flex flex-col gap-[3.2px] pt-2">
              <p className="text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.6px] text-amber-500">
                Academic Affiliations
              </p>
              <p className="text-sm leading-[23.2px] text-zinc-400">
                Department of Philosophy &amp; Social Inquiry
                <br />
                Oxford Humanities Fellowship · Cambridge Press Editorial Council
              </p>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="flex flex-col gap-1 lg:col-span-2" aria-label={column.title}>
              <p className="pb-1 text-xs font-extrabold uppercase leading-[17.6px] tracking-[0.6px] text-amber-500">
                {column.title}
              </p>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-1">
                    <span className="text-sm leading-5 text-amber-500">•</span>
                    <a
                      href={link.href}
                      className="text-sm leading-[23.2px] text-zinc-300 transition-colors hover:text-amber-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-2 self-start rounded-3xl border-2 border-amber-500/40 bg-zinc-900 p-4 md:col-span-2 lg:col-span-4">
            <h3 className="font-display text-xl font-extrabold leading-[27.2px] text-white">
              The Sterling Tracts
            </h3>
            <p className="text-sm leading-[23.2px] text-zinc-300">
              Receive biannual long-form philosophical essays, book dispatch alerts, and symposium
              itineraries directly to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1 pt-1">
              <label
                htmlFor="footer-email"
                className="text-xs font-bold uppercase leading-[17.6px] tracking-[0.6px] text-zinc-400"
              >
                Colleague or Reader Email
              </label>
              <div className="flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="scholar@institution.edu"
                  className="min-w-0 flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-[17px] py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="btn-label press rounded-full border border-ink bg-amber-500 px-[25px] py-3"
                >
                  Join
                </button>
              </div>
              <p className="text-xs leading-4 text-zinc-400" role="status">
                {joined
                  ? 'Thank you — you are on the list.'
                  : 'Peer-respected distribution. Zero spam. Unsubscribe anytime.'}
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-4 text-xs font-bold leading-[17.6px] tracking-[0.72px] text-zinc-400 lg:flex-row lg:items-center">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2025 Prof. Arthur Sterling, Ph.D. • Influencers Planet Brand.</span>
            <span className="text-zinc-600">•</span>
            <span>Syne &amp; Plus Jakarta Sans Typeset</span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legal.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 && <span className="text-zinc-700">•</span>}
                <a href="#contact" className="transition-colors hover:text-amber-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
