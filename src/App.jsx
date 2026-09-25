import React from "react";

const errors = [
  ["400", "Bad Request"],
  ["401", "Unauthorized"],
  ["403", "Forbidden"],
  ["404", "Not Found"],
  ["500", "Internal Server Error"],
  ["502", "Bad Gateway"],
  ["503", "Service Unavailable"],
];

const tools = [
  "JSON Formatter",
  "Base64 Encoder",
  "URL Encoder",
  "JWT Decoder",
  "Unix Timestamp",
  "Hash Generator",
  "DNS Lookup",
  "SSL Checker",
  "HTTP Headers",
  "Port Checker",
  "IP Lookup",
  "Cron Generator",
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <div className="logoIcon">404</div>
          <div>
            <strong>404Error.online</strong>
            <small>Find the Error. Fix the Problem.</small>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#errors">HTTP Errors</a>
          <a href="#tools">Tools</a>
          <a href="#guides">Guides</a>
          <a href="#cloud">Cloud</a>
          <a href="#about">About</a>
        </nav>

        <button className="contact">Contact</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="heroContent">
            <div className="eyebrow">TROUBLESHOOT • LEARN • SOLVE</div>

            <h1>
              When Things Break,
              <br />
              <span>We Help You Fix Them.</span>
            </h1>

            <p>
              Your one-stop destination for HTTP error explanations,
              debugging tools, and step-by-step troubleshooting guides
              for Web, Cloud, DevOps and IT.
            </p>

            <div className="searchBox">
              <input
                placeholder="Search error code, issue or tool..."
              />
              <button>Search</button>
            </div>

            <div className="popular">
              Popular:
              {["404", "500", "502", "DNS", "SSL", "Kubernetes", "AWS"].map(
                (item) => (
                  <span key={item}>{item}</span>
                )
              )}
            </div>
          </div>

          <div className="heroVisual">
            <div className="screen">
              <strong>404</strong>
              <span>NOT FOUND?</span>
              <small>Don't worry...</small>
              <p>We'll help you find the solution.</p>
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>100+</strong><span>Troubleshooting Guides</span></div>
          <div><strong>25+</strong><span>Free Online Tools</span></div>
          <div><strong>10K+</strong><span>Monthly Visitors</span></div>
          <div><strong>99%</strong><span>Practical Solutions</span></div>
        </section>

        <section className="section" id="tools">
          <div className="sectionTitle">
            <div>
              <h2>Explore Our Tools</h2>
              <p>Free, fast and easy-to-use developer tools.</p>
            </div>
            <a href="#tools">View All Tools →</a>
          </div>

          <div className="toolGrid">
            {tools.map((tool, index) => (
              <div className="toolCard" key={tool}>
                <div className={`toolIcon icon${index}`}>✦</div>
                <h3>{tool}</h3>
                <p>Fast and easy online developer utility.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="errors">
          <div className="sectionTitle">
            <div>
              <h2>Common HTTP Errors</h2>
              <p>Understand common HTTP status codes and learn how to fix them.</p>
            </div>
            <a href="#errors">View All HTTP Errors →</a>
          </div>

          <div className="errorGrid">
            {errors.map(([code, title]) => (
              <div className="errorCard" key={code}>
                <strong>{code}</strong>
                <h3>{title}</h3>
                <p>Understand the problem and find practical solutions.</p>
                <a href={`#${code}`}>Learn More →</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="guides">
          <div className="sectionTitle">
            <div>
              <h2>Trending Guides</h2>
              <p>Step-by-step solutions for real-world problems.</p>
            </div>
            <a href="#guides">View All Guides →</a>
          </div>

          <div className="guideGrid">
            <article><span>AWS</span><h3>How to Fix 403 Forbidden in AWS S3</h3><p>Common causes and practical solutions.</p></article>
            <article><span>Kubernetes</span><h3>Troubleshoot Pod Pending in Kubernetes</h3><p>PVC, scheduling and node issues.</p></article>
            <article><span>Linux</span><h3>How to Check Disk Usage in Linux</h3><p>Useful commands and best practices.</p></article>
            <article><span>DevOps</span><h3>Set Up CI/CD with Jenkins</h3><p>A practical guide for beginners.</p></article>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>404Error.online</strong>
          <p>Find the Error. Fix the Problem.</p>
        </div>
        <div>Home &nbsp; Tools &nbsp; Guides &nbsp; Cloud &nbsp; About &nbsp; Contact</div>
      </footer>
    </div>
  );
}

export default App;
