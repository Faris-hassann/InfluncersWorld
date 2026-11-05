import { FormEvent, useState } from 'react';
import { api } from '../../lib/api';

const purposes = [
  'Keynote or Panel Invitation',
  'Media Interview or Commentary',
  'Communication Consulting',
  'Workshop or Training',
  'Books & Publishing',
];

const field =
  'w-full rounded-2xl border-2 border-zinc-200 bg-mist px-[18px] py-3.5 text-sm text-zinc-900 outline-none placeholder:text-gray-500 focus:border-amber-500 transition-colors';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purpose, setPurpose] = useState(purposes[0]);
  const [details, setDetails] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const description = `[Purpose: ${purpose}]\n${details.trim()}`;

    const res = await api.submitContact({
      firstName: firstName.trim(),
      lastName: lastName.trim() || '—',
      email: email.trim(),
      phoneNumber: phoneNumber.trim() || '+201000000000',
      description,
    });

    setSubmitting(false);
    if (res.ok) {
      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setDetails('');
    } else {
      setStatus('error');
      setErrorMessage(res.message || 'Could not send inquiry. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-amber-50/40 py-12">
      <div className="container-page flex flex-col items-center gap-12">
        <div className="flex max-w-[768px] flex-col items-center gap-1 text-center">
          <span className="eyebrow pill bg-amber-500">Invitations &amp; Media Inquiries</span>
          <h2 className="h2">Get in Touch</h2>
          <p className="lede">
            For keynote and panel invitations, media interviews, corporate communication consulting,
            workshops or publishing inquiries, send the details below.
          </p>
        </div>

        <div className="grid w-full gap-10 lg:grid-cols-12">
          <form
            onSubmit={submit}
            className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-6 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="eyebrow">First Name *</span>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g. Sara"
                  className={field}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="eyebrow">Last Name *</span>
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g. Mansour"
                  className={field}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="eyebrow">Email Address *</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organisation.com"
                  className={field}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="eyebrow">Phone Number *</span>
                <input
                  required
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+20 100 123 4567"
                  className={field}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1">
              <span className="eyebrow">Purpose of Inquiry</span>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className={field}
              >
                {purposes.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="eyebrow">Details &amp; Timeline *</span>
              <textarea
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Share the date, audience, format and scope of the engagement."
                className={field}
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-label press rounded-full border-2 border-ink bg-amber-500 px-8 py-3.5 disabled:opacity-50"
              >
                {submitting ? 'Sending…' : 'Send Inquiry'}
              </button>
              <div role="status">
                {status === 'success' && (
                  <p className="text-sm font-bold text-green-700">
                    ✓ Inquiry received — thank you! We reply within two business days.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-bold text-red-600">
                    ✕ {errorMessage}
                  </p>
                )}
                {status === 'idle' && (
                  <p className="text-xs font-bold text-zinc-600">
                    We reply within two business days.
                  </p>
                )}
              </div>
            </div>
          </form>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="rounded-3xl border-2 border-ink/15 bg-white p-[30px]">
              <span className="eyebrow pill bg-amber-500">Direct Contact</span>
              <dl className="mt-4 flex flex-col gap-3 text-sm">
                <div>
                  <dt className="font-bold text-ink">Media &amp; speaking</dt>
                  <dd className="text-zinc-600">contact@influencersplanet.com</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Influencers Planet</dt>
                  <dd className="text-zinc-600">info@influencersplanet.com</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Social</dt>
                  <dd className="text-zinc-600">
                    <a
                      href="https://www.youtube.com/@GermienAmer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-amber-600 hover:underline"
                    >
                      YouTube
                    </a>{' '}
                    · LinkedIn · Instagram · Facebook
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl border-2 border-ink/15 bg-white p-[30px]">
              <span className="eyebrow pill bg-ink !text-amber-500">Location</span>
              <h3 className="pt-2 font-display text-lg font-extrabold text-ink">Based in Cairo</h3>
              <p className="text-sm leading-[22.75px] text-zinc-600">
                Available for engagements across Egypt, the Gulf and internationally, in Arabic and English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
