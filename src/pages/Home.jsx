// @ts-check

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const containerRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  // Scroll reveal animation observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealElements = container.querySelectorAll(`.${styles.reveal}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={styles.landingHero}>
        <div className={styles.landingCopy}>
          <div className={styles.eyebrow}>A community for the age of AI</div>
          <h1 className={styles.heroTitle}>
            Build for the<br />
            <span>future of technology.</span>
          </h1>
          <p className={styles.heroCopy}>
            Learn by building real projects, collaborate with ambitious people, and turn
            your ideas into useful technology with DevGuild DG.
          </p>
          <div className={styles.landingActions}>
            <a className={styles.landingPrimary} href="#join">
              Start building for free <span className={styles.actionIcon}>↗</span>
            </a>
            <Link className={styles.landingSecondary} to="/explore">
              Explore the Guild <span className={styles.actionIcon}>→</span>
            </Link>
          </div>
          <div className={styles.landingNote}>
            Open to beginners, curious learners, and experienced builders.
          </div>
          <div className={styles.landingProof}>
            <span className={styles.proofStars}>★★★★★</span>
            <span>Learn together. Build with purpose.</span>
          </div>
        </div>

        <div className={styles.landingVisual} aria-label="DevGuild DG project illustration">
          <div className={styles.visualGlow} />
          <div className={`${styles.visualCard} ${styles.visualCardCode}`}>&lt;/&gt;</div>
          <div className={`${styles.visualCard} ${styles.visualCardAi}`}>AI</div>
          <div className={`${styles.visualCard} ${styles.visualCardBuild}`}>
            BUILD<br />
            <small>TOGETHER</small>
          </div>
          <div className={styles.visualDevice}>
            <img src="/photos/devguild-logo.png" alt="DevGuild DG" />
            <span>
              DEVGUILD<br />
              <b>DG</b>
            </span>
          </div>
        </div>
      </section>

      {/* ── PURPOSE & FOUNDATION ──────────────────────────────── */}
      <section className={`container ${styles.purposeSection}`} id="vision-mission">
        <div className={styles.eyebrow}>Our foundation</div>
        <div className={styles.sectionHeading}>
          <h2>
            Built with purpose.<br />
            <em>Designed to last.</em>
          </h2>
          <p>
            DevGuild DG develops people, practices, and technology with a long-term commitment to responsible innovation.
          </p>
        </div>

        <div className={styles.purposeIntroGrid}>
          <article className={`${styles.purposeFeature} ${styles.reveal}`}>
            <span className={styles.purposeLabel}>Vision</span>
            <h3>A forge for developers who build a better world.</h3>
            <p>
              DevGuild DG aspires to be a forge of ethical, collaborative, and technically excellent developers
              who create lasting value through technology. We seek to build a durable legacy of knowledge and
              community that equips future generations to lead with skill, integrity, and imagination.
            </p>
            <p>
              Our vision reaches beyond code. It is grounded in lifelong learning, civic responsibility, and
              the stewardship of technology as a means of advancing human flourishing.
            </p>
          </article>

          <article className={`${styles.purposeFeature} ${styles.reveal}`}>
            <span className={styles.purposeLabel}>Mission</span>
            <h3>Turning potential into meaningful contribution.</h3>
            <p>
              DevGuild DG complements academic learning by cultivating a community where students and aspiring
              developers grow into capable, responsible, and professional practitioners through mentorship,
              hands-on projects, and a shared commitment to ethical practice.
            </p>
            <p>
              We transform theoretical knowledge into practical wisdom and ensure that every member, regardless
              of starting point, has a clear pathway to contribution, confidence, and continuous growth.
            </p>
          </article>
        </div>

        <div className={styles.goalsHeading}>
          <span className={styles.purposeLabel}>Strategic goals</span>
        </div>

        <div className={styles.goalsGrid}>
          <article className={`${styles.goalCard} ${styles.reveal}`}>
            <span className={styles.goalNumber}>01</span>
            <h3>Professional and technical excellence</h3>
            <ul>
              <li>
                Bridge academic theory and industry practice through modern tools, methodologies, and
                real-world project experience.
              </li>
              <li>
                Provide a structured progression from Apprentice to Senior Developer through demonstrable
                contribution and mentorship.
              </li>
              <li>
                Make continuous feedback and reflective practice part of how we build quality, maintainable,
                and user-centered software.
              </li>
            </ul>
          </article>

          <article className={`${styles.goalCard} ${styles.reveal}`}>
            <span className={styles.goalNumber}>02</span>
            <h3>A collaborative and inclusive community</h3>
            <ul>
              <li>
                Create a safe and welcoming environment where people of every background and skill level can
                learn, teach, and collaborate.
              </li>
              <li>
                Make mentorship a core practice so knowledge and experience are actively shared.
              </li>
              <li>
                Seek diverse perspectives, encourage open dialogue, and celebrate collective and individual
                progress.
              </li>
            </ul>
          </article>

          <article className={`${styles.goalCard} ${styles.reveal}`}>
            <span className={styles.goalNumber}>03</span>
            <h3>Technology for the common good</h3>
            <ul>
              <li>
                Ensure Guild projects contribute positively to society and meet high ethical standards.
              </li>
              <li>
                Refuse to create or endorse technology that is exploitative, discriminatory, or harmful.
              </li>
              <li>
                Use transparent decision-making and regular impact reviews to remain accountable to the
                communities we serve.
              </li>
            </ul>
          </article>

          <article className={`${styles.goalCard} ${styles.reveal}`}>
            <span className={styles.goalNumber}>04</span>
            <h3>Long-term sustainability and legacy</h3>
            <ul>
              <li>
                Preserve the Guild’s knowledge, processes, and projects through a culture of documentation
                and continuity.
              </li>
              <li>
                Strengthen governance through the Council to guide growth, resolve conflict, and protect our
                core values.
              </li>
              <li>
                Invest in succession planning and institutional memory so each generation inherits a
                stronger foundation.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* ── WHY DEVGUILD DG (FEATURES) ────────────────────────── */}
      <section className={`container ${styles.featureSection}`} id="benefits">
        <div className={styles.sectionHeading}>
          <div>
            <div className={styles.eyebrow}>Why DevGuild DG</div>
            <h2>
              Less noise.<br />
              <em>More momentum.</em>
            </h2>
          </div>
          <p>Everything you need to keep learning, shipping, and finding your people.</p>
        </div>

        <div className={styles.featureGrid}>
          <article className={`${styles.featureCard} ${styles.reveal}`}>
            <span className={styles.featureNumber}>01</span>
            <h3>Learn by building</h3>
            <p>
              Short workshops, guided projects, and real feedback make every lesson useful beyond the screen.
            </p>
            <div className={styles.miniTrack}>
              <span />
              <i />
              <b />
            </div>
          </article>

          <article className={`${styles.featureCard} ${styles.reveal}`}>
            <span className={styles.featureNumber}>02</span>
            <h3>Find your people</h3>
            <p>
              Meet collaborators who are generous with context, honest about the hard parts, and ready to help.
            </p>
            <div className={styles.peopleDecor}>✦ ✦ ✦ ✦</div>
          </article>

          <article className={`${styles.featureCard} ${styles.reveal}`}>
            <span className={styles.featureNumber}>03</span>
            <h3>Ship with confidence</h3>
            <p>
              From first commit to launch day, build habits that turn unfinished ideas into durable products.
            </p>
            <div className={styles.shipLine}>
              <span>IDEA</span>
              <b>→</b>
              <span>BUILD</span>
              <b>→</b>
              <span>SHIP</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className={styles.programsSection} id="programs">
        <div className="container">
          <div className={styles.eyebrow}>Programs</div>
          <div className={styles.sectionHeading}>
            <h2>
              Choose your next <em>move.</em>
            </h2>
            <p>Meet yourself where you are, then take one useful step forward.</p>
          </div>

          <div className={styles.programList}>
            <article className={`${styles.programArticle} ${styles.reveal}`}>
              <span className={styles.programPill}>Start here</span>
              <h3>Foundations</h3>
              <p>A friendly path through web basics, Git, collaboration, and developer workflow.</p>
              <a href="#join" className={styles.programLink}>
                Explore track <span>↗</span>
              </a>
            </article>

            <article className={`${styles.programArticle} ${styles.reveal}`}>
              <span className={styles.programPill}>Make things</span>
              <h3>Build nights</h3>
              <p>Low-pressure sessions where small teams turn a prompt into a working prototype.</p>
              <a href="#join" className={styles.programLink}>
                See upcoming sessions <span>↗</span>
              </a>
            </article>

            <article className={`${styles.programArticle} ${styles.reveal}`}>
              <span className={styles.programPill}>Go further</span>
              <h3>Guild projects</h3>
              <p>Work with a cross-functional crew on products that solve problems people actually have.</p>
              <a href="#join" className={styles.programLink}>
                View project teams <span>↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className={`container ${styles.faqSection}`} id="faq">
        <div>
          <div className={styles.eyebrow}>Questions, answered</div>
          <h2>
            Frequently asked <em>questions.</em>
          </h2>
        </div>

        <div className={styles.faqList}>
          <details className={styles.faqItem} open>
            <summary className={styles.faqSummary}>Who is DevGuild DG for?</summary>
            <p>
              Anyone who wants to build with technology, from first-time learners to experienced makers looking
              for thoughtful peers.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>Do I need to be an expert?</summary>
            <p>
              No. We care more about curiosity, kindness, and a willingness to learn than a particular job
              title or toolset.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>What happens in a build night?</summary>
            <p>
              We start with a short prompt, form small teams, make a focused prototype, and share what we
              learned before we leave.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>How can I participate?</summary>
            <p>
              Join a session, offer a workshop, bring a project idea, or simply introduce yourself in the
              community.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>What is the Dev Guild?</summary>
            <p>
              A community for students and aspiring developers to learn, build, collaborate, and grow together.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>Who can join?</summary>
            <p>
              Anyone interested in technology, software development, or digital innovation. Beginners are
              welcome.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>Do I need coding experience?</summary>
            <p>
              No. You can join even as a complete beginner. A willingness to learn and participate is what
              matters.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqSummary}>What can I learn here?</summary>
            <ul className={styles.faqTopics}>
              <li>Web and mobile development</li>
              <li>Backend development and databases</li>
              <li>UI/UX design</li>
              <li>Git and GitHub</li>
              <li>Cloud technologies</li>
              <li>Artificial intelligence</li>
              <li>Cybersecurity</li>
              <li>Other technology-related topics</li>
            </ul>
          </details>
        </div>
      </section>

      {/* ── REQUIREMENTS ──────────────────────────────────────── */}
      <section className={`container ${styles.requirementsSection}`} id="requirements">
        <div className={styles.eyebrow}>Membership and requirements</div>
        <div className={styles.sectionHeading}>
          <h2>
            Ready to grow<br />
            <em>with the guild?</em>
          </h2>
          <p>From August to October, new members are expected to complete a practical learning milestone.</p>
        </div>

        <div className={styles.requirementsGrid}>
          <article className={`${styles.requirementCard} ${styles.reveal}`}>
            <span className={styles.requirementNumber}>01</span>
            <h3>5 certificates or badges</h3>
            <p>Complete at least five tech-related certificates or badges.</p>
          </article>

          <article className={`${styles.requirementCard} ${styles.reveal}`}>
            <span className={styles.requirementNumber}>02</span>
            <h3>1 learning project</h3>
            <p>Build at least one project based on what you learned.</p>
          </article>

          <article className={`${styles.requirementCard} ${styles.reveal}`}>
            <span className={styles.requirementNumber}>03</span>
            <h3>Set up GitHub</h3>
            <p>Create and properly set up your GitHub account.</p>
          </article>
        </div>

        <p className={styles.requirementsNote}>
          Certificates do not need to come from a specific platform. Online learning
          platforms and government-sponsored workshops are accepted, as long as they are technology-related.
        </p>
      </section>

      {/* ── JOIN CTA ──────────────────────────────────────────── */}
      <section className={styles.joinSection} id="join">
        <div className="container">
          <div className={styles.eyebrow}>Your next chapter starts here</div>
          <h2>
            Ready to build<br />
            <em>without limits?</em>
          </h2>
          <p>Join DevGuild DG and find a community that helps you keep moving.</p>
          <a className={styles.joinButton} href="mailto:hello@devguild.dg">
            Join the guild <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
