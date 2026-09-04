// @ts-check

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (/** @type {React.FormEvent} */ e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`container ${styles.contactSection}`}>
      <div className={styles.eyebrow}>Get in touch</div>
      <h1 className={styles.title}>
        Let&apos;s build <em>together.</em>
      </h1>
      <p className={styles.intro}>
        Have questions about joining DevGuild, interested in partnering on a project, or looking to sponsor our
        hackathons? Drop us a line anytime.
      </p>

      <div className={styles.contactGrid}>
        {/* ── FORM ───────────────────────────────────────────── */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successMessage} role="alert">
              <h3>Thank you for reaching out!</h3>
              <p>
                We have received your message and will review it promptly. We acknowledge all inquiries within 3 business
                days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.formLabel}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.formLabel}>
                  Subject
                </label>
                <select
                  id="contact-subject"
                  className={styles.formSelect}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership &amp; Programs</option>
                  <option value="partnerships">Partnerships &amp; Sponsorship</option>
                  <option value="privacy">Privacy Request</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="How can we help or collaborate?"
                  className={styles.formTextarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <span>↗</span>
              </button>
            </form>
          )}
        </div>

        {/* ── INFO & CHANNELS ────────────────────────────────── */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <h3>Direct Email</h3>
            <p>For official correspondence, partnerships, or press inquiries, reach out directly:</p>
            <a href="mailto:hello@devguild.dg" className={styles.emailLink}>
              hello@devguild.dg
            </a>
          </div>

          <div className={styles.infoCard}>
            <h3>Community Channels</h3>
            <p>Connect with our members, mentors, and project crews on your favorite platform:</p>

            <div className={styles.socialGrid}>
              <a
                href="https://t.me/DevGuildDG"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialIcon} style={{ background: '#229ed9' }}>
                  TG
                </span>
                <span>Telegram</span>
              </a>

              <a
                href="https://chat.whatsapp.com/DevGuildDG"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialIcon} style={{ background: '#25d366' }}>
                  WA
                </span>
                <span>WhatsApp</span>
              </a>

              <a
                href="https://facebook.com/DevGuildDG"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialIcon} style={{ background: '#1877f2' }}>
                  FB
                </span>
                <span>Facebook</span>
              </a>

              <a
                href="https://m.me/DevGuildDG"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span
                  className={styles.socialIcon}
                  style={{ background: 'linear-gradient(135deg, #0078ff, #9b59b6)' }}
                >
                  MS
                </span>
                <span>Messenger</span>
              </a>
            </div>
          </div>

          <div className={styles.slaCard}>
            <h4>Response Commitment</h4>
            <p>
              We acknowledge inquiries within <strong>3 business days</strong> and provide substantive follow-ups within{' '}
              <strong>30 business days</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
