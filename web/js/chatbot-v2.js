const chatbotTrigger = document.querySelector('.chatbot-trigger');

if (chatbotTrigger) {
  const chatbot = document.createElement('section');
  chatbot.className = 'devguild-chatbot';
  chatbot.setAttribute('aria-hidden', 'true');
  chatbot.innerHTML = `
    <div class="chatbot-heading">
      <div><span class="chatbot-kicker">DEVGUILD AI</span><strong>How can we build together?</strong></div>
      <button type="button" class="chatbot-close" aria-label="Close chatbot">×</button>
    </div>
    <div class="chatbot-messages" aria-live="polite">
      <div class="chatbot-message chatbot-message-ai">Hi! I’m the DevGuild assistant. Ask me about membership, projects, learning, or our mission.</div>
    </div>
    <div class="chatbot-prompts">
      <button type="button">Who can join?</button>
      <button type="button">What can I learn?</button>
      <button type="button">Tell me about projects</button>
    </div>
    <form class="chatbot-form">
      <input type="text" aria-label="Ask DevGuild AI" placeholder="Ask about DevGuild DG..." autocomplete="off" />
      <button type="submit" aria-label="Send message">↗</button>
    </form>
  `;
  document.body.appendChild(chatbot);

  const messages = chatbot.querySelector('.chatbot-messages');
  const input = chatbot.querySelector('input');

  const answers = [
    { keys: ['join', 'who can', 'member'], text: 'Anyone interested in technology, software development, or digital innovation can join. Beginners are welcome.' },
    { keys: ['experience', 'beginner', 'coding'], text: 'No previous coding experience is required. A willingness to learn and participate is what matters.' },
    { keys: ['learn', 'topic', 'study'], text: 'Members can explore web and mobile development, backend systems, databases, UI/UX, GitHub, cloud technologies, AI, and cybersecurity.' },
    { keys: ['requirement', 'certificate', 'badge'], text: 'From August to October, new members are expected to complete at least five tech-related certificates or badges, one learning project, and a properly set-up GitHub account.' },
    { keys: ['project', 'aquanons', 'tabang', 'handa'], text: 'DevGuild highlights community projects such as AQUANONS, TABANG, and HANDA 360. Visit Explore for project stories and Album for team moments.' },
    { keys: ['vision', 'mission', 'goal'], text: 'DevGuild aims to grow ethical, collaborative, and technically excellent developers through mentorship, practical projects, lifelong learning, and responsible technology.' },
    { keys: ['contact', 'reach', 'message'], text: 'You can reach the Guild through the Contact page linked in the header and footer.' }
  ];

  const getAnswer = (question) => {
    const normalized = question.toLowerCase();
    const match = answers.find((answer) => answer.keys.some((key) => normalized.includes(key)));
    return match?.text || 'I’m focused on DevGuild DG. Try asking about joining, learning topics, requirements, projects, our mission, or contact details.';
  };

  const addMessage = (text, type) => {
    const message = document.createElement('div');
    message.className = `chatbot-message chatbot-message-${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  const sendQuestion = async (question) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    addMessage(trimmed, 'user');
    input.value = '';
    try {
      const response = await fetch('http://127.0.0.1:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed })
      });
      const data = await response.json();
      addMessage(response.ok ? data.reply : getAnswer(trimmed), 'ai');
    } catch {
      addMessage(getAnswer(trimmed), 'ai');
    }
  };

  const closeChatbot = () => {
    chatbot.classList.remove('open');
    chatbot.setAttribute('aria-hidden', 'true');
    chatbotTrigger.setAttribute('aria-expanded', 'false');
  };

  chatbotTrigger.addEventListener('click', () => {
    const isOpen = chatbot.classList.toggle('open');
    chatbot.setAttribute('aria-hidden', String(!isOpen));
    chatbotTrigger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) input.focus();
  });
  chatbot.querySelector('.chatbot-close').addEventListener('click', closeChatbot);
  chatbot.querySelector('.chatbot-form').addEventListener('submit', (event) => {
    event.preventDefault();
    sendQuestion(input.value);
  });
  chatbot.querySelectorAll('.chatbot-prompts button').forEach((prompt) => {
    prompt.addEventListener('click', () => sendQuestion(prompt.textContent));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeChatbot();
  });
}

