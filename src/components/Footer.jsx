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
          TG
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
          FB
        </a>
        <a
          href="https://m.me/DevGuildDG"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles.socMs}`}
          aria-label="Messenger"
        >
          MS
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
