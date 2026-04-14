import Image from "next/image";
import PromptLine from "./_components/PromptLine";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="shell">
      <div className="topbar" aria-hidden="true">
        <div className="left">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="path">
            ~<span className="sep">/</span>lotfy
            <span className="sep">/</span>index<span className="sep">.</span>tsx
          </span>
        </div>
        <div className="status">
          <span className="hide-sm">v0.1.0</span>
          <span>
            <span className="pulse"></span>&nbsp;online
          </span>
        </div>
      </div>

      <header className="hero">
        <PromptLine />

        <h1>
          <span className="gt">&gt;</span> Mohamed Lotfy
          <span className="caret"></span>
        </h1>
        <p className="tagline">
          <strong>Tech Lead</strong> · <strong>AI-Augmented Developer</strong> — 13+ years shipping scalable web platforms, now multiplying engineering velocity with agentic coding and Spec-Driven
          Development.
        </p>
      </header>

      <section className="about">
        <div className="section-label">about</div>
        <Image className="avatar-float" src="/lotfy.jpg" alt="Mohamed Lotfy" width={120} height={120} priority />
        <p>
          Results-driven software engineer and AI advisor with 13+ years delivering <span className="hl">scalable, high-performance</span> web applications across SaaS, e-commerce, and enterprise
          platforms. Specialized in the <span className="hl">MERN stack</span>, Next.js, and NestJS a proven Tech Lead with a track record of building engineering teams, architecting APIs, and
          shipping CI/CD pipelines on Docker and Kubernetes.
        </p>
        <p>
          LinkedIn thought leader on <span className="hl">Spec-Driven Development</span>, agentic coding workflows with Claude Code, and the latest AI developer tools. I champion structured AI
          workflows over vibe coding — ensuring AI-generated code meets production quality through phase-gate reviews and specification anchoring.
        </p>

        <div className="meta" role="list">
          <div className="row" role="listitem">
            <span className="k">role</span>
            <span className="v">Tech Lead</span>
          </div>
          <div className="row" role="listitem">
            <span className="k">focus</span>
            <span className="v accent">agentic coding · SDD</span>
          </div>
          <div className="row" role="listitem">
            <span className="k">stack</span>
            <span className="v blue">React · Next · TS · Node</span>
          </div>
          <div className="row" role="listitem">
            <span className="k">status</span>
            <span className="v amber">@ Boud · remote</span>
          </div>
          <div className="row" role="listitem">
            <span className="k">based</span>
            <span className="v">Alexandria, EG</span>
          </div>
          <div className="row" role="listitem">
            <span className="k">xp</span>
            <span className="v accent">13+ years</span>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="section-label">contact</div>
        <pre className="contact-block" aria-label="contact information">
          <code>
            <span className="c-kw">const</span> <span className="c-var">contact</span> <span className="c-op">=</span> <span className="c-brace">{"{"}</span>
            {"\n  "}
            <span className="c-key">email</span>
            <span className="c-op">:</span>
            {"    "}
            <a className="c-str" href="mailto:hi@lotfy.ai">
              "hi@lotfy.ai"
            </a>
            <span className="c-op">,</span>
            {"\n  "}
            <span className="c-key">phone</span>
            <span className="c-op">:</span>
            {"    "}
            <a className="c-str" href="tel:+201080606040">
              "010 80 6060 40"
            </a>
            <span className="c-op">,</span>
            {"\n  "}
            <span className="c-key">linkedin</span>
            <span className="c-op">:</span>{" "}
            <a className="c-str" href="https://linkedin.com/in/mo-lotfy" target="_blank" rel="noopener noreferrer">
              "linkedin.com/in/mo-lotfy"
            </a>
            <span className="c-op">,</span>
            {"\n  "}
            <span className="c-key">resume</span>
            <span className="c-op">:</span>
            {"   "}
            <a className="c-str" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
              "Lotfy Resume.pdf"
            </a>
            <span className="c-op">,</span>
            {"\n  "}
            <span className="c-key">location</span>
            <span className="c-op">:</span> <span className="c-str">"Alexandria, Egypt"</span>
            {"\n"}
            <span className="c-brace">{"}"}</span>
            <span className="c-op">;</span>
          </code>
        </pre>
      </section>
      <section className="work">
        <div className="section-label">work</div>
        <ul className="work-list">
          <li>
            <span className="when">2026 — now</span>
            <span className="where">Boud</span>
            <span className="what">Tech Lead | Senior Specialist</span>
          </li>
          <li>
            <span className="when">2023 — 26</span>
            <span className="where">Boud</span>
            <span className="what">Tech Lead</span>
          </li>
          <li>
            <span className="when">2021 — 23</span>
            <span className="where">Bab Rizq</span>
            <span className="what">Tech Lead</span>
          </li>
          <li>
            <span className="when">2019 — 21</span>
            <span className="where">Affilih</span>
            <span className="what">Tech Lead</span>
          </li>
          <li>
            <span className="when">2018 — 19</span>
            <span className="where">Taqneen Solutions</span>
            <span className="what">Senior Frontend Engineer</span>
          </li>
          <li>
            <span className="when">2016 — 18</span>
            <span className="where">Talents Arena</span>
            <span className="what">Full-Stack Engineer</span>
          </li>
          <li>
            <span className="when">2013 — 16</span>
            <span className="where">Terkwaz Business Solutions</span>
            <span className="what">Backend Developer</span>
          </li>
          <li>
            <span className="when">2012 — 13</span>
            <span className="where">Freelance</span>
            <span className="what">Full-Stack Web Developer</span>
          </li>
        </ul>
      </section>

      <footer>
        <div>© {year} Mohamed Lotfy</div>
        <div className="build">
          <span>build</span>
          <span className="ok">● passing</span>
        </div>
      </footer>
    </div>
  );
}
