import { FormEvent, useState } from 'react';

const purposes = [
  'University Keynote / Lecture Invitation',
  'Academic Symposium',
  'Media Commentary',
  'Literary Rights Consultation',
];

const representation = [
  {
    role: 'Literary Agency (Global Rights):',
    name: 'Sterling & Blackwell Literary Associates, London',
    email: 'rights@sterlingblackwell.co.uk',
  },
  {
    role: 'Public Keynote Bureau:',
    name: 'Wellington Academic Speaker Bureau, New York',
    email: 'lectures@wellingtonspeakers.org',
  },
  {
    role: 'University Secretariat:',
    name: 'Department of History & Diplomatic Studies',
    email: 'office.sterling@cambridge-inst.ac.uk',
  },
];

const label = 'eyebrow block';
const field =
  'w-full rounded-2xl border-2 border-zinc-200 bg-mist px-[18px] py-3.5 text-sm text-zinc-900 outline-none placeholder:text-gray-500 focus:border-amber-500';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-amber-50/40 py-12">
      <div className="container-page flex flex-col items-center gap-12">
        <div className="flex max-w-[768px] flex-col items-center gap-[3.2px] pt-0.5 text-center">
          <span className="eyebrow pill bg-amber-500">Official Inquiries &amp; Representation</span>
          <h2 className="h2">
            The Correspondence
            <br />
            Desk
          </h2>
          <p className="lede">
            For university lecture invitations, academic symposiums, media commentary, or literary rights
            consultations.
          </p>
        </div>

        <div className="grid w-full items-stretch gap-10 lg:grid-cols-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-6 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className={label}>Full Name &amp; Academic Title</span>
                <input name="name" required placeholder="e.g. Dr. Julian Croft" className={field} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={label}>Institution / Organization</span>
                <input name="institution" placeholder="e.g. Stanford University / BBC" className={field} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={label}>Official Email Address</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="scholar@institution.edu"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className={label}>Purpose of Inquiry</span>
                <select
                  name="purpose"
                  className={`${field} appearance-none bg-[url('/assets/ct-chevron.svg')] bg-[position:right_10px_center] bg-no-repeat pr-9`}
                >
                  {purposes.map((purpose) => (
                    <option key={purpose}>{purpose}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1 pb-[7.4px]">
              <span className={label}>Proposed Details &amp; Timeline</span>
              <textarea
                name="details"
                rows={4}
                placeholder="Please state dates, institutional context, honorarium provisions, and scope of engagement..."
                className={`${field} resize-y leading-[23.2px]`}
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                className="btn-label press rounded-full border-2 border-ink bg-amber-500 px-[34px] py-3.5 shadow-ink-3"
              >
                Transmit Dispatch
              </button>
              <p className="text-xs font-bold leading-4 text-zinc-600" role="status">
                {sent ? 'Dispatch received — thank you.' : 'Answered within 48 business hours.'}
              </p>
            </div>
          </form>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex flex-col items-start gap-[7px] rounded-3xl border-2 border-ink/15 bg-white px-[30px] pb-[30px] pt-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <span className="eyebrow pill bg-amber-500">Direct Representation</span>
              <dl className="flex flex-col gap-[7px]">
                {representation.map((contact) => (
                  <div key={contact.email}>
                    <dt className="text-sm font-bold leading-[23.2px] text-ink">{contact.role}</dt>
                    <dd className="flex flex-col items-start gap-1.5">
                      <span className="text-sm font-medium leading-[23.2px]">{contact.name}</span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="break-all font-mono text-xs font-bold leading-4 text-ink hover:text-amber-600"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-1 flex-col items-start gap-[3.3px] rounded-3xl border-2 border-ink/15 bg-white px-[30px] pb-[30px] pt-8 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <span className="eyebrow pill bg-ink !text-amber-500">Collegiate Chambers</span>
              <h4 className="font-display text-lg font-extrabold leading-7 text-ink">
                Chambers &amp; Postal Address
              </h4>
              <address className="text-sm not-italic leading-[22.75px]">
                Room 402, South Quadrangle, Institute for Advanced Research
                <br />
                St. Jude’s Passage, Cambridge CB2 1TJ, United Kingdom
              </address>
              <p className="pt-[4.7px] text-xs font-extrabold leading-[17.6px] tracking-[0.72px] text-ink">
                Michaelmas &amp; Lent Term Office Hours:
              </p>
              <p className="text-xs font-medium leading-4">
                Tuesdays &amp; Thursdays: 14:00 — 16:30 GMT (By prior collegiate appointment only)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
