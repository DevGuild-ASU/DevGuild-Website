// @ts-check

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import styles from './Header.module.css';

/**
 * @param {{ onToggleChatbot?: () => void }} props
 */
export default function Header({ onToggleChatbot }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (/** @type {KeyboardEvent} */ e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/explore', label: 'Explore' },
    { to: '/album', label: 'Album' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy', label: 'Privacy' },
  ];

  return (
    <header className={styles.siteHeader}>
      <NavLink
        to="/"
        className={styles.logo}
        aria-label="DevGuild DG Home"
        onClick={() => setIsMenuOpen(false)}
      >
        <img
          src="/photos/devguild-logo.png"
          alt="DevGuild DG Logo"
          className={styles.logoMark}
        />
        <span className={styles.logoText}>DevGuild DG</span>
      </NavLink>

      <div className={styles.navWrapper}>
        <nav
          className={`${styles.siteNav} ${isMenuOpen ? styles.siteNavOpen : ''}`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />

          <button
            type="button"
            className={styles.aiTrigger}
            onClick={onToggleChatbot}
            aria-label="Toggle DevGuild AI Chatbot"
          >
            <span className={styles.aiIcon}>✦</span>
            <span>AI</span>
          </button>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
