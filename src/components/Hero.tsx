import { FormEvent, useState } from 'react';
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react';
import Nav from './Nav';
import VideoBackground from './VideoBackground';

const socials = [
  { label: 'Instagram', Icon: Instagram },
  { label: 'Twitter', Icon: Twitter },
  { label: 'Website', Icon: Globe },
];

export default function Hero() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <header id="top" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <VideoBackground />

      <Nav />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <form
            onSubmit={handleSubmit}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 min-w-0 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-white rounded-full p-3 text-black"
            >
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="text-white text-sm leading-relaxed px-4" role="status">
            {subscribed
              ? 'You are on the list. Thanks for subscribing!'
              : 'Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.'}
          </p>

          <div className="flex justify-center">
            <a
              href="#mission"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Manifesto
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {socials.map(({ label, Icon }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </header>
  );
}
