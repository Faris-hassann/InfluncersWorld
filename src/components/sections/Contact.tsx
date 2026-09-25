import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionShell from '../SectionShell';

const details = [
  { Icon: Mail, label: 'Email', value: 'hello@asme.com' },
  { Icon: Phone, label: 'Phone', value: '+20 100 000 0000' },
  { Icon: MapPin, label: 'Studio', value: 'Cairo, Egypt' },
];

const fieldClass =
  'liquid-glass rounded-2xl px-5 py-3 bg-transparent outline-none text-white placeholder:text-white/40 text-base w-full';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <SectionShell
      id="contact"
      index="07"
      eyebrow="Contact us"
      title={
        <>
          Let us <em>talk.</em>
        </>
      }
      intro="Partnerships, speaking invitations, press or just a hello. We read everything."
    >
      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:col-span-2 grid gap-4 content-start">
          {details.map(({ Icon, label, value }) => (
            <div key={label} className="liquid-glass bg-white/[0.03] rounded-3xl p-5 flex items-center gap-4">
              <div className="liquid-glass rounded-full p-3 text-white/80">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-white text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-3 liquid-glass bg-white/[0.03] rounded-3xl p-6 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" aria-label="Your name" className={fieldClass} />
            <input name="email" type="email" required placeholder="Email address" aria-label="Email address" className={fieldClass} />
          </div>
          <input name="subject" placeholder="Subject" aria-label="Subject" className={fieldClass} />
          <textarea name="message" required rows={5} placeholder="How can we help?" aria-label="Message" className={`${fieldClass} resize-none`} />
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p role="status" className="text-white/60 text-sm flex items-center gap-2">
              {sent && (
                <>
                  <CheckCircle2 size={16} /> Message received. We will reply soon.
                </>
              )}
            </p>
            <button
              type="submit"
              className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium flex items-center gap-2"
            >
              Send message <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}
