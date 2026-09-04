// @ts-check

import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chatbot from './Chatbot.jsx';
import PageLoader from './PageLoader.jsx';

export default function Layout() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const location = useLocation();

  // Scroll to top or scroll to hash on route / hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <PageLoader />

      <Header onToggleChatbot={() => setChatbotOpen(prev => !prev)} />

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />

      <Chatbot
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
      />
    </>
  );
}
