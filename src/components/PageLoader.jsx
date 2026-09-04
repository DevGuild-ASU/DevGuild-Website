// @ts-check

import { useState, useEffect } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasEnteredSite = sessionStorage.getItem('devguild-site-entered') === 'true';
    return !hasEnteredSite;
  });

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('devguild-site-entered', 'true');
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800); // polite 2.8s loader

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      className={`${styles.pageLoader} ${!visible ? styles.isHidden : ''}`}
      aria-label="Loading DevGuild DG"
      aria-hidden={!visible}
    >
      <div className={styles.loaderMark}>
        <img
          src="/photos/devguild-logo.png"
          alt="DevGuild DG"
          className={styles.loaderImg}
        />
      </div>
    </div>
  );
}
