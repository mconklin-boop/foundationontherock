const impact = [
  ["Family Support", "Practical care, encouragement, and next steps for families facing instability or transition."],
  ["Community Resources", "Connection to trusted local partners, churches, and support services that help meet real needs."],
  ["Faith-Based Encouragement", "Hope-filled guidance rooted in dignity, compassion, and the belief that rebuilding is possible."]
];

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-inner"><div><p className="eyebrow">Faith-centered support for real-life rebuilding</p><h1>Helping Families Rebuild on a Stronger Foundation</h1><p>Foundation on the Rock exists to bring practical support, encouragement, and lasting hope to individuals and families walking through difficult seasons.</p><div className="hero-actions"><a className="button button-gold" href="/donate">Donate Now</a><a className="button button-light" href="/get-involved">Get Involved</a></div></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Our mission</p><h2>A stable foundation for the road ahead</h2><p className="lead">To provide compassionate, faith-centered support that helps people stabilize, rebuild, and move forward with dignity.</p></div></section>
    <section className="section section-soft"><div className="container"><p className="eyebrow">How we help</p><h2>Practical care, rooted in hope</h2><div className="grid">{impact.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container split"><div><p className="eyebrow">Leadership</p><h2>Led with service and stewardship</h2><p>Foundation on the Rock is led by a board committed to service, stewardship, and community impact. Our leadership works to build trust with families, donors, churches, and partner organizations through responsible care and clear communication.</p></div><div className="card"><h3>Leadership commitments</h3><p>Compassionate service, sustainable growth, and community partnership.</p></div></div></section>
    <section className="cta"><div className="container split"><div><h2>Your support helps create real stability for families in need.</h2><p>Every gift helps Foundation on the Rock provide encouragement, practical support, and connection to resources that help people move forward.</p></div><p><a className="button button-gold" href="/donate">Donate Now</a></p></div></section>
  </>;
}
