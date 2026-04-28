import React from "react";
import "../capstone.css";

const workflowSteps = [
  {
    number: "01",
    title: "Simulate park activity",
    text: "AnyLogic creates a controlled public-park environment with zones, crowd movement, and incident injections.",
  },
  {
    number: "02",
    title: "Detect meaningful signals",
    text: "The system looks for distress audio, loitering context, and crowd anomalies rather than personal identity.",
  },
  {
    number: "03",
    title: "Fuse evidence",
    text: "Signals are combined into a risk score, confidence level, explanation, and severity tier.",
  },
  {
    number: "04",
    title: "Support human review",
    text: "Alerts are displayed in a dashboard so an operator can review context before any response decision.",
  },
];

const severityLevels = [
  {
    label: "P0",
    title: "Immediate review",
    text: "Strong distress signal plus supporting context.",
  },
  {
    label: "P1",
    title: "High attention",
    text: "Sustained distress signal or high-risk pattern.",
  },
  {
    label: "P2",
    title: "Monitor closely",
    text: "Crowd or behavior anomaly that may need review.",
  },
  {
    label: "P3",
    title: "Informational",
    text: "Low-risk event kept for visibility and metrics.",
  },
];

const techTags = [
  "AnyLogic",
  "Python",
  "React",
  "Streamlit",
  "JSONL",
  "FastAPI / Flask-ready",
  "PyTorch-ready",
  "Local-first testing",
  "Human-in-the-loop review",
  "Privacy-aware design",
];

const boothQuestions = [
  "How does the system reduce false alarms?",
  "Why avoid face recognition and identity tracking?",
  "What makes the dashboard useful for an operator?",
  "How do severity tiers P0 to P3 work?",
  "What would be improved in a future version?",
];

const CapstoneApp = () => {
  return (
    <div id="capstone-main">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="capstone-hero" aria-labelledby="capstone-title">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Capstone Project • Miami Dade College</p>

            <h1 id="capstone-title">
              Context-Aware Multimodal Public Safety Detection &amp; Response
              Platform
            </h1>

            <p className="hero-lede">
              A privacy-aware prototype that uses simulation, multimodal signal
              fusion, and dashboard-based review to improve public safety
              awareness without relying on face recognition or identity tracking.
            </p>

            <div className="hero-actions" aria-label="Page sections">
              <a className="capstone-button" href="#summary">
                Start with the simple overview
              </a>
              <a className="capstone-button secondary" href="#demo-flow">
                See how it works
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-labelledby="booth-guide-title">
            <p className="card-kicker">Booth guide</p>
            <h2 id="booth-guide-title">What to know in 60 seconds</h2>

            <ul className="clean-list">
              <li>
                <strong>Goal:</strong> detect safety-relevant situations earlier.
              </li>
              <li>
                <strong>Boundary:</strong> no face recognition or identity
                tracking.
              </li>
              <li>
                <strong>Method:</strong> simulate, detect, fuse, explain, and
                review.
              </li>
              <li>
                <strong>Output:</strong> triaged alerts for a human operator.
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <main id="main-content">
        <section id="summary" className="capstone-section">
          <div className="capstone-container narrow">
            <p className="section-label">Plain-language summary</p>
            <h2>What this project does</h2>
            <p className="section-intro">
              This project explores how AI can help identify possible public
              safety concerns in a park-like environment while keeping privacy
              protections at the center. Instead of identifying people, the
              system focuses on situational signals such as distress audio,
              loitering context, crowd activity, and zone-level patterns.
            </p>
          </div>

          <div className="capstone-container">
            <div className="summary-grid">
              <article className="info-card">
                <h3>Why it matters</h3>
                <p>
                  Public spaces can become difficult to monitor during events,
                  crowding, or fast-changing situations. A structured alert
                  system can help operators notice important changes sooner.
                </p>
              </article>

              <article className="info-card">
                <h3>What makes it different</h3>
                <p>
                  The prototype is designed around context and explanation. It
                  does not try to identify individuals. It summarizes signals
                  into clear alert tiers for human review.
                </p>
              </article>

              <article className="info-card">
                <h3>What the demo shows</h3>
                <p>
                  The demo connects a simulated environment to detection logic,
                  severity scoring, JSON alert records, and an operator-style
                  dashboard.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="privacy" className="capstone-section alt">
          <div className="capstone-container two-column">
            <div>
              <p className="section-label">Ethical consideration</p>
              <h2>Privacy-aware by design</h2>
              <p>
                The system is built as a controlled prototype for learning,
                testing, and explainable review. The emphasis is on detecting
                risk patterns, not tracking identity.
              </p>
            </div>

            <div className="boundary-card" aria-label="Privacy boundaries">
              <div>
                <span className="boundary-label positive">Uses</span>
                <p>Distress signals, crowd context, zone activity, and alert metadata.</p>
              </div>

              <div>
                <span className="boundary-label caution">Avoids</span>
                <p>Face recognition, identity tracking, biometric claims, or automatic enforcement.</p>
              </div>

              <div>
                <span className="boundary-label review">Requires</span>
                <p>Human review before real-world response decisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="demo-flow" className="capstone-section">
          <div className="capstone-container narrow">
            <p className="section-label">Demo workflow</p>
            <h2>How the prototype works</h2>
            <p className="section-intro">
              The system follows a simple pipeline: simulate the environment,
              detect signals, combine evidence, and present alerts in a
              dashboard.
            </p>
          </div>

          <div className="capstone-container">
            <ol className="workflow-list">
              {workflowSteps.map((step) => (
                <li className="workflow-card" key={step.number}>
                  <span className="step-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="severity" className="capstone-section alt">
          <div className="capstone-container narrow">
            <p className="section-label">Alert triage</p>
            <h2>Severity levels are designed for quick interpretation</h2>
            <p className="section-intro">
              The goal is not to overwhelm an operator. The dashboard organizes
              alerts into clear tiers so the most important events are reviewed
              first.
            </p>
          </div>

          <div className="capstone-container">
            <div className="severity-grid">
              {severityLevels.map((level) => (
                <article className="severity-card" key={level.label}>
                  <div className={`severity-pill severity-${level.label.toLowerCase()}`}>
                    {level.label}
                  </div>
                  <h3>{level.title}</h3>
                  <p>{level.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="capstone-section">
          <div className="capstone-container two-column">
            <div>
              <p className="section-label">Dashboard view</p>
              <h2>What the operator sees</h2>
              <p>
                The dashboard is designed to show the current alert focus,
                recent alerts, zone activity, confidence levels, and rolling
                performance metrics. This keeps the review process structured
                and easier to explain.
              </p>
            </div>

            <div className="metric-panel" aria-label="Example dashboard metrics">
              <div className="metric-box">
                <span className="metric-value">Precision</span>
                <span className="metric-label">How often alerts are correct</span>
              </div>

              <div className="metric-box">
                <span className="metric-value">Recall</span>
                <span className="metric-label">How many true incidents are found</span>
              </div>

              <div className="metric-box">
                <span className="metric-value">F1</span>
                <span className="metric-label">Balance between precision and recall</span>
              </div>

              <div className="metric-box">
                <span className="metric-value">MTTD</span>
                <span className="metric-label">Mean time to detect</span>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="capstone-section alt">
          <div className="capstone-container narrow">
            <p className="section-label">Technical foundation</p>
            <h2>Core tools and concepts</h2>
            <p className="section-intro">
              The prototype combines simulation, local-first data handling,
              signal fusion, and dashboard design. The technical stack is shown
              at a high level so both technical and non-technical visitors can
              follow the project.
            </p>
          </div>

          <div className="capstone-container">
            <div className="tech-tags" aria-label="Technology stack">
              {techTags.map((tag) => (
                <span className="tech-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="questions" className="capstone-section">
          <div className="capstone-container two-column">
            <div>
              <p className="section-label">Conversation starters</p>
              <h2>Questions to ask at the booth</h2>
              <p>
                These questions are good starting points for discussing the
                system design, ethical boundaries, technical stack, and future
                improvements.
              </p>
            </div>

            <ul className="question-list">
              {boothQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="capstone-footer">
        <p>
          <strong>Michael Stamler</strong> • Bachelor of Science in Applied
          Artificial Intelligence
        </p>
        <p>Miami Dade College • Capstone Fair</p>
      </footer>
    </div>
  );
};

export default CapstoneApp;