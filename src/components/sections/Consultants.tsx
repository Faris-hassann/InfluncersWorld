import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionShell from '../SectionShell';

interface Consultant {
  id: string;
  name: string;
  niche: string;
  online: boolean;
  greeting: string;
  replies: string[];
}

interface Message {
  from: 'me' | 'them';
  text: string;
}

const consultants: Consultant[] = [
  {
    id: 'layla',
    name: 'Layla Haddad',
    niche: 'Audience growth',
    online: true,
    greeting: 'Hi! I help creators find their first 10,000 true fans. What are you working on?',
    replies: [
      'Good question. Start by picking one platform and one content format for the next 30 days.',
      'Consistency beats intensity. What does your posting schedule look like right now?',
      'Tell me more about who you are making this for. The clearer that is, the faster you grow.',
    ],
  },
  {
    id: 'omar',
    name: 'Omar Nasser',
    niche: 'Brand partnerships',
    online: true,
    greeting: 'Hello! Ready to talk deals, rates and pitching. What is your current audience size?',
    replies: [
      'Brands pay for outcomes. Can you share a result from a past post, like clicks or saves?',
      'Build a one-page media kit first. I can walk you through what to include.',
      'Never quote a price on the first message. Ask about their goals and budget first.',
    ],
  },
  {
    id: 'sara',
    name: 'Sara Idris',
    niche: 'Monetization',
    online: false,
    greeting: 'I am away right now, but leave a message and I will reply within 24 hours.',
    replies: [
      'Thanks for your message! I will get back to you as soon as I am online.',
    ],
  },
];

export default function Consultants() {
  const [activeId, setActiveId] = useState(consultants[0].id);
  const [threads, setThreads] = useState<Record<string, Message[]>>(() =>
    Object.fromEntries(consultants.map((c) => [c.id, [{ from: 'them', text: c.greeting } as Message]]))
  );
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const active = consultants.find((c) => c.id === activeId)!;
  const messages = threads[activeId];

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, activeId]);

  useEffect(() => () => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
  }, []);

  const select = (id: string) => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    setTyping(false);
    setActiveId(id);
  };

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const target = active;
    const sent = threads[target.id].filter((m) => m.from === 'me').length;
    setThreads((t) => ({ ...t, [target.id]: [...t[target.id], { from: 'me', text }] }));
    setDraft('');
    setTyping(true);

    timerRef.current = window.setTimeout(() => {
      const reply = target.replies[sent % target.replies.length];
      setThreads((t) => ({ ...t, [target.id]: [...t[target.id], { from: 'them', text: reply }] }));
      setTyping(false);
    }, 1200);
  };

  return (
    <SectionShell
      id="consultants"
      index="08"
      eyebrow="Chat with influencer consultants"
      title={
        <>
          Ask someone who <em>has been there.</em>
        </>
      }
      intro="Pick a consultant and start a conversation. This is a demo chat with scripted replies; connect it to your messaging backend to go live."
    >
      <div className="liquid-glass bg-white/[0.03] rounded-3xl grid md:grid-cols-3 md:h-[480px]">
        <ul className="border-b md:border-b-0 md:border-r border-white/10 p-3 flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
          {consultants.map((c) => (
            <li key={c.id} className="shrink-0">
              <button
                onClick={() => select(c.id)}
                aria-pressed={c.id === activeId}
                className={`w-full text-left rounded-2xl p-3 flex items-center gap-3 transition-colors ${
                  c.id === activeId ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <span className="relative bg-gradient-to-br from-white/25 to-white/5 rounded-full w-10 h-10 flex items-center justify-center text-white text-sm font-medium shrink-0">
                  {c.name[0]}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black ${
                      c.online ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-white text-sm font-medium whitespace-nowrap">{c.name}</span>
                  <span className="block text-white/50 text-xs whitespace-nowrap">{c.niche}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="md:col-span-2 flex flex-col min-h-[360px] md:min-h-0 md:h-full">
          <div className="px-6 py-4 border-b border-white/10">
            <p className="text-white font-medium">{active.name}</p>
            <p className="text-white/50 text-xs">
              {active.niche} · {active.online ? 'Online' : 'Away'}
            </p>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-3 max-h-80 md:max-h-none" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    m.from === 'me' ? 'bg-white text-black' : 'bg-white/10 text-white'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && <p className="text-white/40 text-xs">{active.name} is typing…</p>}
          </div>

          <form onSubmit={send} className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 m-4">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Message ${active.name.split(' ')[0]}`}
              aria-label="Message"
              className="flex-1 min-w-0 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
            />
            <button type="submit" aria-label="Send message" className="bg-white rounded-full p-3 text-black">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
