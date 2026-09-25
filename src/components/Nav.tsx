import { Globe } from 'lucide-react';

const links = [
  { label: 'Features', href: '#products' },
  { label: 'Pricing', href: '#consultants' },
  { label: 'About', href: '#overview' },
];

export default function Nav() {
  return (
    <nav className="relative z-20 pl-6 pr-6 py-6">
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2 text-white font-semibold text-lg">
            <Globe size={24} />
            Asme
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white text-sm font-medium">Sign Up</button>
          <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
