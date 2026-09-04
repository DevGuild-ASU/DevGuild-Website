// @ts-check

import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={`container ${styles.aboutSection}`}>
      <div className={styles.eyebrow}>Who we are</div>
      <h1 className={styles.title}>
        Built with purpose.<br />
        <em>Designed to last.</em>
      </h1>
      <p className={styles.intro}>
        DevGuild DG is a student developer community at Aklan State University (ASU). We develop people,
        practices, and technology with a long-term commitment to responsible innovation, mentorship, and practical craftsmanship.
      </p>

      {/* ── VISION & MISSION ─────────────────────────────────── */}
      <div className={styles.visionMissionGrid}>
        <article className={styles.card}>
          <span className={styles.cardBadge}>Vision</span>
          <h3>A forge for developers who build a better world.</h3>
          <p>
            DevGuild DG aspires to be a forge of ethical, collaborative, and technically excellent developers who
            create lasting value through technology. We seek to build a durable legacy of knowledge and community
            that equips future generations to lead with skill, integrity, and imagination.
          </p>
          <p>
            Our vision reaches beyond code. It is grounded in lifelong learning, civic responsibility, and the
            stewardship of technology as a means of advancing human flourishing.
          </p>
        </article>

        <article className={styles.card}>
          <span className={styles.cardBadge}>Mission</span>
          <h3>Turning potential into meaningful contribution.</h3>
          <p>
            DevGuild DG complements academic learning by cultivating a community where students and aspiring
            developers grow into capable, responsible, and professional practitioners through mentorship, hands-on
            projects, and a shared commitment to ethical practice.
          </p>
          <p>
            We transform theoretical knowledge into practical wisdom and ensure that every member, regardless of
            starting point, has a clear pathway to contribution, confidence, and continuous growth.
          </p>
        </article>
      </div>

      {/* ── STRATEGIC GOALS ──────────────────────────────────── */}
      <div className={styles.goalsHeading}>
        <span className={styles.cardBadge}>Strategic goals</span>
      </div>

      <div className={styles.goalsGrid}>
        <article className={styles.goalCard}>
          <span className={styles.goalNum}>01</span>
          <h3>Professional and technical excellence</h3>
          <ul>
            <li>
              Bridge academic theory and industry practice through modern tools, methodologies, and real-world project
              experience.
            </li>
            <li>
              Provide a structured progression from Apprentice to Senior Developer through demonstrable contribution
              and mentorship.
            </li>
            <li>
              Make continuous feedback and reflective practice part of how we build quality, maintainable, and
              user-centered software.
            </li>
          </ul>
        </article>

        <article className={styles.goalCard}>
          <span className={styles.goalNum}>02</span>
          <h3>A collaborative and inclusive community</h3>
          <ul>
            <li>
              Create a safe and welcoming environment where people of every background and skill level can learn, teach,
              and collaborate.
            </li>
            <li>Make mentorship a core practice so knowledge and experience are actively shared.</li>
            <li>Seek diverse perspectives, encourage open dialogue, and celebrate collective and individual progress.</li>
          </ul>
        </article>

        <article className={styles.goalCard}>
          <span className={styles.goalNum}>03</span>
          <h3>Technology for the common good</h3>
          <ul>
            <li>Ensure Guild projects contribute positively to society and meet high ethical standards.</li>
            <li>Refuse to create or endorse technology that is exploitative, discriminatory, or harmful.</li>
            <li>
              Use transparent decision-making and regular impact reviews to remain accountable to the communities we serve.
            </li>
          </ul>
        </article>

        <article className={styles.goalCard}>
          <span className={styles.goalNum}>04</span>
          <h3>Long-term sustainability and legacy</h3>
          <ul>
            <li>
              Preserve the Guild’s knowledge, processes, and projects through a culture of documentation and continuity.
            </li>
            <li>
              Strengthen governance through the Council to guide growth, resolve conflict, and protect our core values.
            </li>
            <li>
              Invest in succession planning and institutional memory so each generation inherits a stronger foundation.
            </li>
          </ul>
        </article>
      </div>

      {/* ── CTA BOX ──────────────────────────────────────────── */}
      <div className={styles.ctaBox}>
        <h2>Ready to build with us?</h2>
        <p>Explore our projects, join upcoming build sessions, or connect with our community organizers.</p>
        <div className={styles.ctaActions}>
          <Link to="/explore" className={styles.btnPrimary}>
            Explore Projects <span>↗</span>
          </Link>
          <Link to="/contact" className={styles.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}