// @ts-check

import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <h2 className={styles.title}>DevGuild DG</h2>

      <div className={styles.footerSocials}>
        <a
          href="https://t.me/DevGuildDG"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.socTg}`}
          aria-label="Telegram"
        >
          <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.9 4.6l-2.7 12.8c-.2.9-.7 1.1-1.5.7l-4.1-3-2 1.9c-.2.2-.4.4-.9.4l.3-4.2 7.6-6.9c.3-.3-.1-.5-.5-.2L8.4 13.3 4.3 12c-.9-.3-.9-.9.2-1.3L20.6 3.4c.7-.3 1.4.2 1.3 1.2z" />
          </svg>
        </a>
        <a
          href="https://chat.whatsapp.com/DevGuildDG"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.socWa}`}
          aria-label="WhatsApp"
        >
          WA
        </a>
        <a
          href="https://facebook.com/DevGuildDG"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.socFb}`}
          aria-label="Facebook"
        >
          <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.6v8h3.6z" />
          </svg>
        </a>
        <a
          href="https://m.me/DevGuildDG"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.socMs}`}
          aria-label="Messenger"
        >
          <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.5 2 2.1 6.1 2.1 11.6c0 2.9 1.2 5.4 3.2 7.2v3.6l3.1-1.7c.9.3 1.9.4 2.9.4 5.5 0 9.9-4.1 9.9-9.6S17.5 2 12 2zm1.1 12.9l-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7z" />
          </svg>
        </a>
      </div>

      <p className={styles.footerNote}>
        Click the icons above if you have any issues with our website, feel free to directly contact us
        at these following platforms or directly go to the <b>contact us</b> page of our website.
      </p>

      <nav className={styles.footerNav} aria-label="Footer navigation">
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/explore" className={styles.navLink}>Explore</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
        <Link to="/privacy" className={styles.navLink}>Privacy</Link>
      </nav>

      <p className={styles.footerCopy}>© 2026 DevGuild DG — Built with curiosity.</p>
    </footer>
  );
}
