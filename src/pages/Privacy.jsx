// @ts-check

import { Link } from 'react-router-dom';
import styles from './Privacy.module.css';

export default function Privacy() {
  const tocItems = [
    { href: '#information-we-collect', num: '01', title: 'Information we collect' },
    { href: '#how-we-use', num: '02', title: 'How we use your information' },
    { href: '#cookies', num: '03', title: 'Cookies and local storage' },
    { href: '#sharing', num: '04', title: 'When we share information' },
    { href: '#data-security', num: '05', title: 'Data security' },
    { href: '#retention', num: '06', title: 'Data retention' },
    { href: '#your-rights', num: '07', title: 'Your rights and choices' },
    { href: '#children', num: '08', title: "Children's privacy" },
    { href: '#third-party', num: '09', title: 'Third-party links' },
    { href: '#changes', num: '10', title: 'Changes to this policy' },
    { href: '#contact', num: '11', title: 'Contact us' },
  ];

  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────────── */}
      <section className={`container ${styles.privacyHero}`}>
        <div className={styles.eyebrow}>Legal</div>
        <h1 className={styles.title}>
          Privacy <em>policy.</em>
        </h1>
        <p className={styles.heroCopy}>
          This policy explains what information DevGuild DG collects, how we use it, and the choices you have.
          We keep it short and plain.
        </p>
        <div className={styles.privacyMeta}>
          <span>Effective: August 18, 2026</span>
          <span className={styles.dot} />
          <span>Last updated: August 18, 2026</span>
        </div>

        {/* ── TABLE OF CONTENTS ─────────────────────────────── */}
        <nav className={styles.toc} aria-label="Policy sections">
          <div className={styles.tocTitle}>On this page</div>
          <ol className={styles.tocList}>
            {tocItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.tocLink}>
                  <span className={styles.tocNum}>{item.num}</span> {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* ── POLICY CONTENT ───────────────────────────────────── */}
      <div className={`container ${styles.policyContent}`}>
        {/* 01 — INFORMATION WE COLLECT */}
        <section className={styles.policySection} id="information-we-collect">
          <span className={styles.sectionNum}>01</span>
          <h2>
            Information we <em>collect.</em>
          </h2>
          <p>
            We collect only the information necessary to operate the DevGuild DG community, deliver our programs,
            and maintain a safe environment for every member. We do not sell personal data to third parties, and we never will.
          </p>

          <h3>Information you provide directly</h3>
          <p>When you join DevGuild DG, register for a session, submit a project, or contact us, you may provide:</p>
          <ul>
            <li>
              <strong>Identity information</strong> — your full name or chosen display name, used to identify you
              within the community and on project teams.
            </li>
            <li>
              <strong>Email address</strong> — used for account creation, membership verification, event invitations,
              and important community updates. We require a valid email to prevent duplicate and fraudulent accounts.
            </li>
            <li>
              <strong>Profile details</strong> — an optional bio, profile photo, social links (GitHub, LinkedIn, personal
              website), and skill tags you choose to display on your community profile.
            </li>
            <li>
              <strong>Membership applications</strong> — information you submit during the intake process, including
              your learning goals, technical background, and the certificates or badges you complete as part of our
              membership requirements.
            </li>
            <li>
              <strong>Project contributions</strong> — code repositories, design files, documentation, and other
              deliverables you create or share through Guild projects, build nights, or showcases.
            </li>
            <li>
              <strong>Communications</strong> — messages you send through our contact forms, email correspondence,
              feedback surveys, and any content you post in community channels (Telegram, Discord, or other platforms we use).
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <p>When you visit the DevGuild DG website, our servers may automatically record:</p>
          <ul>
            <li>
              <strong>Usage data</strong> — the pages you visit, the order in which you navigate, time spent on each
              page, scroll depth, and general interaction patterns. This data is aggregated and anonymized — it helps us
              understand which sections of the site are most useful and where the experience can be improved.
            </li>
            <li>
              <strong>Device and browser data</strong> — your browser type and version, operating system, screen
              resolution, and device type (desktop, tablet, mobile). We use this solely to ensure the site renders
              correctly and to diagnose layout issues across devices.
            </li>
            <li>
              <strong>Referrer information</strong> — the URL or search engine that brought you to our site, if available.
              This helps us understand how people discover DevGuild DG but is never tied to your identity in our analytics.
            </li>
            <li>
              <strong>IP address</strong> — recorded in server access logs for security monitoring, abuse prevention, and
              geographic aggregate analytics (e.g., &quot;40% of visitors are from Southeast Asia&quot;). IP addresses are
              not used to identify or track individual users and are rotated from logs every 90 days.
            </li>
          </ul>

          <h3>What we do not collect</h3>
          <p>We want to be transparent about what we deliberately avoid collecting:</p>
          <ul>
            <li>
              Full legal names or government-issued identification (unless required for a specific partnered event, in which
              case we ask separately and with clear consent).
            </li>
            <li>Financial information — we do not process payments, and we do not store credit card numbers or banking details.</li>
            <li>Biometric data, precise geolocation, or health information.</li>
            <li>Browsing history outside of our own website.</li>
          </ul>
        </section>

        {/* 02 — HOW WE USE YOUR INFORMATION */}
        <section className={styles.policySection} id="how-we-use">
          <span className={styles.sectionNum}>02</span>
          <h2>
            How we use <em>your information.</em>
          </h2>
          <p>
            Every piece of data we collect is tied to a specific, limited purpose. We do not use your information for
            purposes unrelated to what is described below.
          </p>

          <h3>Operating the community</h3>
          <ul>
            <li>
              <strong>Account management</strong> — creating and maintaining your member profile, tracking your membership
              tier (Apprentice, Developer, Senior Developer), and managing your participation in programs like Foundations,
              Build Nights, and Guild Projects.
            </li>
            <li>
              <strong>Event coordination</strong> — sending session invitations, RSVP confirmations, schedule reminders,
              and post-event follow-ups for workshops, hackathons (such as AQUANONS, TABANG, and Handa 360), and community meetups.
            </li>
            <li>
              <strong>Mentorship matching</strong> — pairing members with mentors based on stated learning goals, skill
              tags, and availability. Matching data is handled by council members and is not shared outside the organization.
            </li>
          </ul>

          <h3>Communication</h3>
          <ul>
            <li>
              <strong>Community updates</strong> — newsletters, project announcements, call-for-contributors posts, and
              important organizational changes delivered via email or community channels you are subscribed to.
            </li>
            <li>
              <strong>Direct correspondence</strong> — responses to your inquiries sent through the contact form, email, or
              social media messages. We retain these threads to provide continuity if you follow up later.
            </li>
            <li>
              <strong>Feedback and surveys</strong> — optional satisfaction surveys and retrospective forms shared after
              events. Participation is voluntary, and survey responses are anonymized before being used for program improvement.
            </li>
          </ul>

          <h3>Improvement and security</h3>
          <ul>
            <li>
              <strong>Site analytics</strong> — aggregate usage data (page views, session duration, device types) is
              reviewed monthly to identify broken links, underperforming pages, and accessibility gaps. No individual user
              is singled out in these reports.
            </li>
            <li>
              <strong>Security monitoring</strong> — IP addresses and access logs are reviewed to detect and block brute-force
              attacks, spam submissions, and unauthorized access attempts. We use rate limiting and firewall rules — not
              behavioral profiling — to protect the site.
            </li>
            <li>
              <strong>Legal compliance</strong> — when required by applicable law or valid legal process, we may retain or
              disclose specific data to fulfill a legal obligation (e.g., responding to a court order or government request).
            </li>
          </ul>

          <div className={styles.policyCallout}>
            <p>
              We will never use your information for automated decision-making, behavioral profiling, targeted advertising,
              or any purpose that conflicts with our mission of ethical, transparent technology practice.
            </p>
          </div>
        </section>

        {/* 03 — COOKIES AND LOCAL STORAGE */}
        <section className={styles.policySection} id="cookies">
          <span className={styles.sectionNum}>03</span>
          <h2>
            Cookies and <em>local storage.</em>
          </h2>
          <p>
            The DevGuild DG website is intentionally lightweight. We use minimal browser storage and do not rely on
            third-party cookies or tracking scripts.
          </p>

          <h3>What we store</h3>
          <ul>
            <li>
              <strong>Theme preference</strong> — your dark/light mode choice is saved in <code>localStorage</code> under the
              key <code>devguild-theme</code>. This value never leaves your device and is not transmitted to any server. It
              allows the site to remember your visual preference on return visits.
            </li>
            <li>
              <strong>Session visit state</strong> — a flag in <code>sessionStorage</code> (<code>devguild-site-entered</code>)
              tracking whether the initial welcome loader has played during your current browser session.
            </li>
          </ul>

          <h3>What we do not use</h3>
          <ul>
            <li>No advertising cookies, remarketing pixels, or conversion trackers.</li>
            <li>No third-party analytics scripts (Google Analytics, Mixpanel, Amplitude, etc.).</li>
            <li>No social media tracking widgets or embedded marketing tags.</li>
            <li>No fingerprinting techniques or canvas-based identification.</li>
          </ul>

          <p>
            If we ever introduce a cookie for a new feature (e.g., a session-based tool), we will update this section and
            request your consent before any non-essential cookie is set.
          </p>
        </section>

        {/* 04 — WHEN WE SHARE INFORMATION */}
        <section className={styles.policySection} id="sharing">
          <span className={styles.sectionNum}>04</span>
          <h2>
            When we <em>share information.</em>
          </h2>
          <p>
            DevGuild DG does not sell, rent, or trade personal data. Your information is shared only in the following narrow circumstances:
          </p>
          <ul>
            <li>
              <strong>With your explicit consent</strong> — when you ask us to introduce you to a partner organization,
              sponsor, or external mentor, we share only the information you approve (typically your name, email, and project summary).
            </li>
            <li>
              <strong>Service providers we rely on</strong> — we use a small number of trusted tools to operate the website
              and community (e.g., static hosting, transactional email delivery, cloud storage). Each provider is bound to use your
              data only to provide their service to us.
            </li>
            <li>
              <strong>Legal obligations</strong> — if required by law or valid court order, we will disclose specific requested records.
            </li>
            <li>
              <strong>Protection of rights</strong> — in emergency situations where disclosure is necessary to prevent imminent harm.
            </li>
          </ul>

          <div className={styles.policyCallout}>
            <p>
              We never share your data with advertisers, data brokers, or anyone who would use it for marketing purposes.
            </p>
          </div>
        </section>

        {/* 05 — DATA SECURITY */}
        <section className={styles.policySection} id="data-security">
          <span className={styles.sectionNum}>05</span>
          <h2>
            Data <em>security.</em>
          </h2>
          <p>We take a practical, layered approach to protecting your information:</p>

          <h3>Technical safeguards</h3>
          <ul>
            <li>
              <strong>HTTPS everywhere</strong> — all data transmitted between your browser and our servers is encrypted using
              TLS 1.2 or higher.
            </li>
            <li>
              <strong>Secure hosting</strong> — infrastructure with DDoS mitigation, automated backups, and network-level firewalls.
            </li>
            <li>
              <strong>Encrypted storage</strong> — member data at rest is stored in encrypted databases with segregated keys.
            </li>
            <li>
              <strong>Access logging</strong> — administrative access is logged, audited, and strictly limited to authorized personnel.
            </li>
          </ul>

          <h3>Organizational safeguards</h3>
          <ul>
            <li>
              <strong>Principle of least privilege</strong> — volunteers and organizers access only data essential for their assigned duties.
            </li>
            <li>
              <strong>Incident response</strong> — a documented procedure with 72-hour notification commitment in the event of an authorized access breach.
            </li>
          </ul>
        </section>

        {/* 06 — DATA RETENTION */}
        <section className={styles.policySection} id="retention">
          <span className={styles.sectionNum}>06</span>
          <h2>
            Data <em>retention.</em>
          </h2>
          <p>We do not keep data indefinitely. Retention periods are defined by purpose:</p>
          <ul>
            <li>
              <strong>Active membership data</strong> — retained while your membership is active and you participate in Guild programs.
            </li>
            <li>
              <strong>Inactive accounts</strong> — accounts with no activity for 12 consecutive months are flagged for deletion after a 30-day notice.
            </li>
            <li>
              <strong>Contact form submissions</strong> — retained for up to 24 months for conversational continuity, then automatically purged.
            </li>
            <li>
              <strong>Server access logs</strong> — rotated and permanently deleted every 90 days.
            </li>
            <li>
              <strong>Open-source deliverables</strong> — code and artifacts published with open-source licenses remain in project repositories.
            </li>
          </ul>

          <div className={styles.policyCallout}>
            <p>
              You may request immediate deletion of your personal data at any time by emailing{' '}
              <strong>hello@devguild.dg</strong>. We process all deletion requests within 14 business days.
            </p>
          </div>
        </section>

        {/* 07 — YOUR RIGHTS AND CHOICES */}
        <section className={styles.policySection} id="your-rights">
          <span className={styles.sectionNum}>07</span>
          <h2>
            Your rights <em>and choices.</em>
          </h2>
          <p>You have meaningful control over your personal data:</p>
          <ul>
            <li>
              <strong>Right to access</strong> — request a copy of the personal data we hold about you in structured JSON or CSV format.
            </li>
            <li>
              <strong>Right to correct</strong> — update or rectify inaccurate profile information at any time.
            </li>
            <li>
              <strong>Right to delete</strong> — request permanent erasure of your personal records.
            </li>
            <li>
              <strong>Right to restrict processing</strong> — ask us to limit how we use your information during disputes.
            </li>
            <li>
              <strong>Right to data portability</strong> — export your contributions and account data to another service.
            </li>
            <li>
              <strong>Right to withdraw consent</strong> — opt out of newsletters or optional communications at any moment.
            </li>
            <li>
              <strong>Right to object</strong> — object to any non-essential data processing activity.
            </li>
          </ul>
        </section>

        {/* 08 — CHILDREN'S PRIVACY */}
        <section className={styles.policySection} id="children">
          <span className={styles.sectionNum}>08</span>
          <h2>
            Children&apos;s <em>privacy.</em>
          </h2>
          <p>
            DevGuild DG is designed for students and developers who are at least 13 years old. We do not knowingly collect
            data from individuals under 13. If you believe an under-13 user has provided personal info, contact us at{' '}
            <a href="mailto:hello@devguild.dg">hello@devguild.dg</a> for immediate removal.
          </p>
        </section>

        {/* 09 — THIRD-PARTY LINKS */}
        <section className={styles.policySection} id="third-party">
          <span className={styles.sectionNum}>09</span>
          <h2>
            Third-party <em>links.</em>
          </h2>
          <p>
            Our site links to platforms like GitHub, Discord, Telegram, and educational resource sites. We encourage you to review
            their respective privacy terms, as DevGuild does not govern third-party data practices.
          </p>
        </section>

        {/* 10 — CHANGES TO THIS POLICY */}
        <section className={styles.policySection} id="changes">
          <span className={styles.sectionNum}>10</span>
          <h2>
            Changes to <em>this policy.</em>
          </h2>
          <p>
            Material updates will be preceded by at least 14 days of advance notice via our channels. Continued membership
            following the effective date represents acceptance of the revised terms.
          </p>
          <h3>Changelog</h3>
          <ul>
            <li>
              <strong>August 18, 2026</strong> — Initial privacy policy published.
            </li>
          </ul>
        </section>

        {/* 11 — CONTACT US */}
        <section className={styles.policySection} id="contact">
          <span className={styles.sectionNum}>11</span>
          <h2>
            Contact <em>us.</em>
          </h2>
          <p>We welcome any questions, feedback, or privacy rights requests:</p>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:hello@devguild.dg">hello@devguild.dg</a> (Subject: &quot;Privacy Request&quot;)
            </li>
            <li>
              <strong>Contact Page:</strong> <Link to="/contact">devguild.dg/contact</Link>
            </li>
          </ul>
          <h3>Response commitment</h3>
          <p>
            We acknowledge privacy inquiries within <strong>3 business days</strong> and deliver substantive responses within{' '}
            <strong>30 business days</strong>.
          </p>
        </section>
      </div>

      {/* ── POLICY NAVIGATION ────────────────────────────────── */}
      <div className={`container ${styles.policyNav}`}>
        <Link to="/" className={styles.navButton}>
          <span className={styles.navLabel}>← Back</span>
          <span className={styles.navTitle}>Home</span>
        </Link>
        <Link to="/contact" className={styles.navButton}>
          <span className={styles.navLabel}>Next →</span>
          <span className={styles.navTitle}>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
