const expertise = [
  { icon: '/assets/ov-economy.svg', title: 'Influencer Media & the Creator Economy', text: 'How influence is built, monetised and measured, and how audiences decide whom to trust.' },
  { icon: '/assets/ov-geopolitics.svg', title: 'Corporate & Internal Communication', text: 'Strategy, reputation, media relations and employee engagement inside large institutions.' },
  { icon: '/assets/ov-ethics.svg', title: 'Media Ethics & Child-Influencer Protection', text: 'Codes of conduct, disclosure, audience protection and the rights of children on camera.' },
  { icon: '/assets/ov-philosophy.svg', title: 'AI, Cybersecurity & Digital Literacy', text: 'Helping the public read AI-made content, spot digital fraud and stay safe online.' },
];

export default function Overview() {
  return <section id="overview" className="bg-stone-50 py-12"><div className="container-page grid items-start gap-10 lg:grid-cols-12">
    <aside className="flex flex-col gap-4 rounded-3xl border-2 border-ink bg-white p-[30px] shadow-amber-4 lg:col-span-4">
      <div className="flex flex-col items-start gap-1"><span className="eyebrow pill bg-amber-500/20">Fields of Expertise</span><h3 className="h3">Areas of Focus</h3><p className="text-sm leading-[23.2px]">Two decades of institutional practice and five years of dedicated research, organised around four disciplines.</p></div>
      <ul className="flex flex-col gap-2 pt-1">{expertise.map((item) => <li key={item.title} className="flex items-start gap-2 rounded-2xl border border-zinc-200 bg-mist p-[15px]"><img src={item.icon} alt="" /><div><h4 className="font-display text-base font-bold leading-6 text-ink">{item.title}</h4><p className="text-sm leading-[23.2px]">{item.text}</p></div></li>)}</ul>
      <a href="#portfolio" className="btn-label text-link pt-1">View the Full Career Portfolio <img src="/assets/ov-arrow.svg" alt="" /></a>
    </aside>
    <article className="flex flex-col gap-4 lg:col-span-8">
      <div className="flex flex-col items-start gap-1"><span className="eyebrow pill bg-amber-500/20">Profile</span><h2 className="h2">Where Institutional Communication Meets the Age of Influence</h2></div>
      <div className="flex flex-col gap-4 text-lg leading-[29.25px]"><p>Dr. Germien Amer is an Egyptian media and corporate communication leader, author and researcher. Since 2007 she has led corporate, internal and media communication at The United Bank, after senior roles at Commercial International Bank (CIB), Orascom Telecom and a USAID-funded export programme. She began her career as a reporter for Gulf News in Dubai.</p><p>Raised in a media family, she learned the media craft early from her father, Hassan Amer, a pioneer of Egyptian economic journalism. Since 2021 she has built a knowledgeable and informative platform on influencer communication: the economics of content creation, digital credibility, professional ethics, and the future of the influence industry in the age of artificial intelligence.</p><p>That work became Influencers Planet (كوكب المؤثرين), the first Arabic knowledge platform dedicated to the influence industry. Through it she has published seven books, more than 100 articles and over 120 blogs and vlogs, and hosted two seasons of the #Influencers_Planet podcast on Cairo Business Radio.</p></div>
    </article>
  </div></section>;
}
