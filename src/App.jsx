import React, { useMemo, useState } from "react";

const tools=[
["{}","JSON Formatter","Format, validate and beautify JSON"],
["</>","Base64 Encoder","Encode and decode Base64"],
["↗","URL Encoder","Encode and decode URL strings"],
["JWT","JWT Decoder","Decode and inspect JWT tokens"],
["◷","Unix Timestamp","Convert Unix timestamps"],
["#","Hash Generator","Generate common hashes"],
["DNS","DNS Lookup","Check DNS records"],
["SSL","SSL Checker","Check certificate details"],
["HTTP","HTTP Headers","Inspect HTTP response headers"],
["PORT","Port Checker","Check if a port is open"],
["IP","IP Lookup","Get IP information"],
["CRON","Cron Generator","Generate cron expressions"]
];
const errors=[
["400","Bad Request","Invalid request syntax or parameters."],
["401","Unauthorized","Authentication is required."],
["403","Forbidden","You don't have permission."],
["404","Not Found","The requested resource was not found."],
["500","Internal Server Error","A generic server error occurred."],
["502","Bad Gateway","Invalid response from upstream server."],
["503","Service Unavailable","The server is temporarily unavailable."]
];
const guides=[
["AWS","How to Fix 403 Forbidden in AWS S3","Common causes and practical solutions."],
["Kubernetes","Troubleshoot Pod Pending in Kubernetes","PVC, scheduling and node issues."],
["Linux","How to Check Disk Usage in Linux","Useful commands and best practices."],
["DevOps","Set Up CI/CD with Jenkins","A practical guide for beginners."]
];

export default function App(){
 const [query,setQuery]=useState("");
 const [message,setMessage]=useState("");
 const filtered=useMemo(()=>{
   const q=query.trim().toLowerCase();
   return q?tools.filter(x=>x.join(" ").toLowerCase().includes(q)):tools;
 },[query]);
 const search=e=>{
   e.preventDefault();
   setMessage(query.trim()?`Showing tools related to "${query.trim()}".`:"Try 404, DNS, SSL, Kubernetes, JSON or Base64.");
   document.getElementById("tools")?.scrollIntoView({behavior:"smooth"});
 };
 return <div className="site">
  <header className="navbar">
   <a className="logo" href="#home"><div className="logo-mark">404</div><div><div className="logo-name">404Error.online</div><div className="logo-tagline">Find the Error. Fix the Problem.</div></div></a>
   <nav><a href="#home">Home</a><a href="#errors">HTTP Errors</a><a href="#tools">Tools</a><a href="#guides">Guides</a><a href="#cloud">Cloud</a><a href="#about">About</a></nav>
   <a className="contact-btn" href="mailto:hello@404error.online">Contact</a>
  </header>
  <main>
   <section className="hero" id="home">
    <div className="hero-left">
     <div className="eyebrow">TROUBLESHOOT • LEARN • SOLVE</div>
     <h1>When Things Break,<br/><span>We Help You Fix Them.</span></h1>
     <p>Your one-stop destination for HTTP error explanations, developer tools and step-by-step troubleshooting guides for Web, Cloud, DevOps and IT.</p>
     <form className="search-box" onSubmit={search}><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search error code, issue or tool..." aria-label="Search"/><button type="submit">Search</button></form>
     <div className="popular"><span>Popular:</span>{["404","500","502","DNS","SSL","Kubernetes","AWS"].map(x=><button type="button" key={x} onClick={()=>{setQuery(x);setMessage(`Showing tools related to "${x}".`)}}>{x}</button>)}</div>
     {message&&<div className="search-message">{message}</div>}
    </div>
    <div className="hero-right">
     <div className="floating floating1">AWS</div><div className="floating floating2">Kubernetes</div><div className="floating floating3">Docker</div><div className="floating floating4">Linux</div><div className="floating floating5">DevOps</div>
     <div className="monitor"><div className="screen"><strong>404</strong><span>NOT FOUND?</span><small>Don't worry...</small><p>We'll help you find the solution.</p></div></div>
    </div>
   </section>
   <section className="stats"><div><strong>100+</strong><span>Troubleshooting Guides</span></div><div><strong>25+</strong><span>Free Online Tools</span></div><div><strong>10K+</strong><span>Monthly Visitors</span></div><div><strong>99%</strong><span>Practical Solutions</span></div></section>
   <section className="section" id="tools">
    <div className="section-heading"><div><h2>Explore Our Tools</h2><p>Free, fast and easy-to-use tools for developers, IT professionals and system administrators.</p></div><a href="#tools">View All Tools →</a></div>
    <div className="tool-grid">{filtered.map(([icon,title,desc])=><div className="tool-card" key={title}><div className="tool-icon">{icon}</div><h3>{title}</h3><p>{desc}</p></div>)}</div>
    {!filtered.length&&<div className="empty">No matching tool found. Try another search.</div>}
   </section>
   <section className="section" id="errors">
    <div className="section-heading"><div><h2>Common HTTP Errors</h2><p>Understand common HTTP status codes and learn how to troubleshoot them.</p></div><a href="#errors">View All HTTP Errors →</a></div>
    <div className="error-grid">{errors.map(([code,title,desc])=><article className={`error-card error-${code}`} id={`error-${code}`} key={code}><strong>{code}</strong><h3>{title}</h3><p>{desc}</p><a href={`#error-${code}`}>Learn More →</a></article>)}</div>
   </section>
   <section className="section" id="guides">
    <div className="section-heading"><div><h2>Trending Guides</h2><p>Step-by-step solutions for real-world technical problems.</p></div><a href="#guides">View All Guides →</a></div>
    <div className="guide-grid">{guides.map(([cat,title,desc])=><article className="guide-card" key={title}><div className="guide-image">{cat}</div><div className="guide-content"><span>{cat}</span><h3>{title}</h3><p>{desc}</p><a href="#guides">Read Guide →</a></div></article>)}</div>
   </section>
   <section className="cloud-section" id="cloud">
    <div><div className="eyebrow">CLOUD • DEVOPS • INFRASTRUCTURE</div><h2>Practical solutions for modern infrastructure.</h2><p>Troubleshoot AWS, Azure, Kubernetes, Docker, Linux, Terraform, Jenkins and more.</p><a className="primary-btn" href="#guides">Explore Cloud Guides →</a></div>
    <div className="cloud-box">{["AWS","Kubernetes","Docker","Terraform","Jenkins","Linux"].map(x=><div key={x}>{x}</div>)}</div>
   </section>
  </main>
  <footer id="about"><div className="footer-main"><div><div className="footer-logo">404Error.online</div><p>Find the Error. Fix the Problem.</p></div><div><h4>Platform</h4><a href="#tools">Tools</a><a href="#errors">HTTP Errors</a><a href="#guides">Guides</a></div><div><h4>Resources</h4><a href="#cloud">Cloud</a><a href="#guides">Blog</a><a href="#about">About</a></div><div><h4>Legal</h4><a href="#privacy">Privacy Policy</a><a href="#terms">Terms</a><a href="#disclaimer">Disclaimer</a></div></div><div className="footer-bottom">© 2026 404Error.online. All rights reserved.</div></footer>
 </div>
}
