// @ts-check

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      gap: '1.25rem'
    }}>
      <span style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-primary, #118b36)' }}>404</span>
      <h1 style={{ fontSize: '2rem', margin: 0, fontFamily: 'Oswald, sans-serif' }}>Page Not Found</h1>
      <p style={{ maxWidth: '480px', color: 'var(--color-muted, #888)' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--color-primary, #118b36)',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 600,
          marginTop: '0.5rem'
        }}
      >
        Return Home &rarr;
      </Link>
    </section>
  );
}
