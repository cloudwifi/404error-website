import React from "react";

const tools = [
  ["{}", "JSON Formatter", "Format, validate and beautify JSON"],
  ["</>", "Base64 Encoder", "Encode and decode Base64"],
  ["🔗", "URL Encoder", "Encode and decode URL strings"],
  ["JWT", "JWT Decoder", "Decode and inspect JWT tokens"],
  ["◷", "Unix Timestamp", "Convert Unix timestamps"],
  ["#", "Hash Generator", "Generate MD5, SHA1 and SHA256"],
  ["DNS", "DNS Lookup", "Check DNS records"],
  ["SSL", "SSL Checker", "Check SSL certificate"],
  ["HTTP", "HTTP Headers", "Inspect HTTP response headers"],
  ["PORT", "Port Checker", "Check if a port is open"],
  ["IP", "IP Lookup", "Get IP information"],
  ["CRON", "Cron Generator", "Generate cron expressions"],
];

const errors = [
  ["400", "Bad Request", "Invalid request syntax or parameters."],
  ["401", "Unauthorized", "Authentication is required."],
  ["403", "Forbidden", "You don't have permission."],
  ["404", "Not Found", "The requested resource was not found."],
  ["500", "Internal Server Error", "A generic server error occurred."],
  ["502", "Bad Gateway", "Invalid response from upstream server."],
  ["503", "Service Unavailable", "The server is temporarily unavailable."],
];

const guides = [
  ["AWS", "How to Fix 403 Forbidden in AWS S3"],
  ["Kubernetes", "Troubleshoot Pod Pending in Kubernetes"],
  ["Linux", "How to Check Disk Usage in Linux"],
  ["DevOps", "Set Up CI/CD with Jenkins"],
];

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-mark">404</div>
          <div>
            <div className="logo-name">404Error.online</div>
            <div className="logo-tagline">
              Find the Error. Fix the Problem.
            </div>
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

        <button className="contact-btn">Contact</button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">
          <div className="eyebrow">
            TROUBLESHOOT • LEARN • SOLVE
          </div>

          <h1>
            When Things Break,
            <br />
            <span>We Help You Fix Them.</span>
          </h1>

          <p>
            Your one-stop destination for HTTP error explanations,
            developer tools and step-by-step troubleshooting guides
            for Web, Cloud, DevOps and IT.
          </p>

          <div className="search-box">
            <span>⌕</span>
            <input
              placeholder="Search error code, issue or tool..."
            />
            <button>Search</button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            {["404", "500", "502", "DNS", "SSL", "Kubernetes", "AWS"].map(
              (item) => (
                <button key={item}>{item}</button>
              )
            )}
          </div>
        </div>

        <div className="hero-right">
          <div className="floating floating1">AWS</div>
          <div className="floating floating2">Kubernetes</div>
          <div className="floating floating3">Docker</div>
          <div className="floating floating4">Linux</div>
          <div className="floating floating5">DevOps</div>

          <div className="monitor">
            <div className="screen">
              <strong>404</strong>
              <span>NOT FOUND?</span>
              <small>Don't worry...</small>
              <p>We'll help you find the solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <strong>100+</strong>
          <span>Troubleshooting Guides</span>
        </div>

        <div>
          <strong>25+</strong>
          <span>Free Online Tools</span>
        </div>

        <div>
          <strong>10K+</strong>
          <span>Monthly Visitors</span>
        </div>

        <div>
          <strong>99%</strong>
          <span>Practical Solutions</span>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section" id="tools">
        <div className="section-heading">
          <div>
            <h2>Explore Our Tools</h2>
            <p>
              Free, fast and easy-to-use tools for developers,
              IT professionals and system administrators.
            </p>
          </div>

          <a href="#tools">View All Tools →</a>
        </div>

        <div className="tool-grid">
          {tools.map(([icon, title, description]) => (
            <div className="tool-card" key={title}>
              <div className="tool-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HTTP ERRORS */}
      <section className="section" id="errors">
        <div className="section-heading">
          <div>
            <h2>Common HTTP Errors</h2>
            <p>
              Understand common HTTP status codes and learn how to fix them.
            </p>
          </div>

          <a href="#errors">View All HTTP Errors →</a>
        </div>

        <div className="error-grid">
          {errors.map(([code, title, description]) => (
            <div className={`error-card error-${code}`} key={code}>
              <strong>{code}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={`#error-${code}`}>Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section className="section" id="guides">
        <div className="section-heading">
          <div>
            <h2>Trending Guides</h2>
            <p>
              Step-by-step solutions for real-world technical problems.
            </p>
          </div>

          <a href="#guides">View All Guides →</a>
        </div>

        <div className="guide-grid">
          {guides.map(([category, title]) => (
            <article className="guide-card" key={title}>
              <div className="guide-image">
                {category}
              </div>

              <div className="guide-content">
                <span>{category}</span>
                <h3>{title}</h3>
                <p>
                  Practical troubleshooting steps and solutions
                  for common technical problems.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOUD */}
      <section className="cloud-section" id="cloud">
        <div>
          <div className="eyebrow">CLOUD • DEVOPS • INFRASTRUCTURE</div>
          <h2>Practical solutions for modern infrastructure.</h2>
          <p>
            Troubleshoot AWS, Azure, Kubernetes, Docker, Linux,
            Terraform, Jenkins and more.
          </p>

          <button className="primary-btn">
            Explore Cloud Guides →
          </button>
        </div>

        <div className="cloud-box">
          <div>AWS</div>
          <div>Kubernetes</div>
          <div>Docker</div>
          <div>Terraform</div>
          <div>Jenkins</div>
          <div>Linux</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about">
        <div className="footer-main">
          <div>
            <div className="footer-logo">404Error.online</div>
            <p>Find the Error. Fix the Problem.</p>
          </div>

          <div>
            <h4>Platform</h4>
            <a href="#tools">Tools</a>
            <a href="#errors">HTTP Errors</a>
            <a href="#guides">Guides</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#cloud">Cloud</a>
            <a href="#guides">Blog</a>
            <a href="#about">About</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 404Error.online. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
