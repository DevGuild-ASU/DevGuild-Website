// @ts-check

import { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

/**
 * @typedef {{ id: string, text: string, sender: 'ai' | 'user' }} ChatMessage
 */

const KNOWLEDGE_BASE = [
  {
    keys: ['join', 'who can', 'member', 'apply'],
    text: 'Anyone interested in technology, software development, or digital innovation can join. Beginners with no coding experience are welcome.'
  },
  {
    keys: ['experience', 'beginner', 'coding', 'prerequisite'],
    text: 'No previous coding experience is required. Curiosity and a willingness to learn and participate are what matter most.'
  },
  {
    keys: ['learn', 'topic', 'study', 'tracks', 'curriculum'],
    text: 'Members can explore web and mobile development, backend systems, databases, UI/UX, Git & GitHub, cloud technologies, AI, and cybersecurity.'
  },
  {
    keys: ['requirement', 'certificate', 'badge', 'milestone'],
    text: 'From August to October, new members are expected to complete at least five tech-related certificates or badges, one learning project, and a properly configured GitHub account.'
  },
  {
    keys: ['project', 'aquanons', 'tabang', 'handa'],
    text: 'DevGuild highlights community-driven projects such as AQUANONS (AI Fest 2nd Place), TABANG (Disaster readiness), and HANDA 360. Visit Explore for project stories and Album for photos.'
  },
  {
    keys: ['vision', 'mission', 'foundation', 'purpose'],
    text: 'DevGuild aims to forge ethical, collaborative, and technically excellent developers through mentorship, practical projects, lifelong learning, and technology for the common good.'
  },
  {
    keys: ['contact', 'reach', 'email', 'hello'],
    text: 'You can reach us at hello@devguild.dg or via our social channels (Telegram, WhatsApp, Facebook, Messenger) and through the Contact page.'
  }
];

function getFallbackAnswer(question) {
  const normalized = question.toLowerCase();
  const match = KNOWLEDGE_BASE.find(item =>
    item.keys.some(k => normalized.includes(k))
  );
  return match
    ? match.text
    : "I'm focused on DevGuild DG. You can ask me about joining, learning tracks, membership requirements, guild projects (AQUANONS, TABANG, HANDA 360), our mission, or contact details.";
}

let messageCounter = 0;
function getUniqueId(prefix = 'msg') {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

/**
 * @param {{ isOpen: boolean; onClose: () => void }} props
 */
export default function Chatbot({ isOpen, onClose }) {
  /** @type {[Array<{id: string, text: string, sender: 'ai' | 'user'}>, Function]} */
  const [messages, setMessages] = useState([
    {
      id: 'msg-welcome',
      text: "Hi! I'm the DevGuild assistant. Ask me about membership, projects, learning, or our mission.",
      sender: 'ai'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(/** @type {HTMLInputElement | null} */ (null));
  const messagesEndRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleKeyDown = (/** @type {KeyboardEvent} */ e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSend = async (/** @type {string} */ rawText) => {
    const trimmed = rawText.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      id: getUniqueId('user'),
      text: trimmed,
      sender: /** @type {'user'} */ ('user')
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const apiUrl = import.meta.env.VITE_CHATBOT_API_URL || '';

    if (!apiUrl) {
      // Offline fallback
      setTimeout(() => {
        const reply = getFallbackAnswer(trimmed);
        setMessages(prev => [
          ...prev,
          { id: getUniqueId('ai'), text: reply, sender: 'ai' }
        ]);
        setIsLoading(false);
      }, 400);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || getFallbackAnswer(trimmed);
      setMessages(prev => [
        ...prev,
        { id: getUniqueId('ai'), text: reply, sender: 'ai' }
      ]);
    } catch {
      const fallback = getFallbackAnswer(trimmed);
      setMessages(prev => [
        ...prev,
        { id: getUniqueId('ai'), text: fallback, sender: 'ai' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (/** @type {React.FormEvent} */ e) => {
    e.preventDefault();
    handleSend(inputText);
  };

  const quickPrompts = [
    'Who can join?',
    'What can I learn?',
    'Tell me about projects',
    'What are the requirements?'
  ];

  return (
    <section
      className={`${styles.chatbot} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
      aria-label="DevGuild AI Chat Assistant"
    >
      <div className={styles.heading}>
        <div>
          <span className={styles.kicker}>DEVGUILD AI</span>
          <strong className={styles.title}>How can we build together?</strong>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close chatbot"
        >
          ×
        </button>
      </div>

      <div className={styles.messages} aria-live="polite">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === 'ai' ? styles.messageAi : styles.messageUser
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.messageAi}`}>
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.prompts}>
        {quickPrompts.map(prompt => (
          <button
            key={prompt}
            type="button"
            className={styles.promptButton}
            onClick={() => handleSend(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          aria-label="Ask DevGuild AI"
          placeholder="Ask about DevGuild DG..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className={styles.sendButton}
          aria-label="Send message"
        >
          ↗
        </button>
      </form>
    </section>
  );
}
