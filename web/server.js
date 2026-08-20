import http from 'node:http';

const port = Number(process.env.PORT || 3000);
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:8765';
const instructions = `You are DevGuild AI, a friendly assistant for DevGuild DG. Answer naturally and helpfully. Use the following verified organization context when relevant: DevGuild DG is a community for students and aspiring developers to learn, build, collaborate, and grow. Beginners are welcome. Topics include web and mobile development, backend and databases, UI/UX, Git and GitHub, cloud, artificial intelligence, and cybersecurity. New members from August to October are expected to complete at least five technology-related certificates or badges, one learning project, and a properly set-up GitHub account. Projects include AQUANONS, TABANG, and HANDA 360. If a question is unrelated to DevGuild DG, answer briefly but guide the conversation back to the Guild. Do not invent official details. Keep responses clear and conversational.`;

const localReply = (message) => {
  const question = message.toLowerCase();
  if (question.includes('who can') || question.includes('join') || question.includes('member')) {
    return 'Anyone interested in technology, software development, or digital innovation can join DevGuild DG. Beginners are welcome, and a willingness to learn and participate is what matters.';
  }
  if (question.includes('experience') || question.includes('beginner') || question.includes('coding')) {
    return 'No previous coding experience is required. DevGuild DG is designed to help beginners learn through mentorship, practical activities, and collaboration.';
  }
  if (question.includes('learn') || question.includes('topic') || question.includes('study')) {
    return 'Members can explore web and mobile development, backend systems, databases, UI/UX design, Git and GitHub, cloud technologies, artificial intelligence, cybersecurity, and other technology-related topics.';
  }
  if (question.includes('requirement') || question.includes('certificate') || question.includes('badge')) {
    return 'From August to October, new members are expected to complete at least five technology-related certificates or badges, one learning project, and a properly set-up GitHub account. Certificates may come from online platforms or government-sponsored workshops.';
  }
  if (question.includes('aquanons')) {
    return 'AQUANONS is a DevGuild project focused on an AI-driven solution developed by the team for real-world challenges. Visit the AQUANONS project story to read the full details and view the team album.';
  }
  if (question.includes('tabang')) {
    return 'TABANG is a DevGuild project created around technology, collaboration, and community impact. Visit the TABANG project story and album section for more details.';
  }
  if (question.includes('handa')) {
    return 'HANDA 360 is a DevGuild project focused on disaster preparedness and practical technology solutions. Visit the HANDA 360 project story and album section for more details.';
  }
  if (question.includes('project')) {
    return 'DevGuild DG features projects such as AQUANONS, TABANG, and HANDA 360. Explore the project stories to learn what each team built, why it matters, and who contributed.';
  }
  if (question.includes('vision') || question.includes('mission') || question.includes('goal')) {
    return 'DevGuild DG aims to cultivate ethical, collaborative, and technically excellent developers through mentorship, hands-on projects, lifelong learning, and responsible technology.';
  }
  if (question.includes('contact') || question.includes('reach')) {
    return 'You can reach DevGuild DG through the Contact page linked in the website header and footer.';
  }
  return 'I’m the DevGuild DG assistant. Ask me about joining, coding experience, learning topics, membership requirements, AQUANONS, TABANG, HANDA 360, our mission, or projects.';
};

const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  });
  response.end(JSON.stringify(body));
};

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    });
    response.end();
    return;
  }

  if (request.method !== 'POST' || request.url !== '/api/chat') {
    sendJson(response, 404, { error: 'Not found' });
    return;
  }

  let rawBody = '';
  for await (const chunk of request) rawBody += chunk;

  let message = '';
  try {
    ({ message } = JSON.parse(rawBody));
    if (!message || typeof message !== 'string' || message.length > 2000) {
      sendJson(response, 400, { error: 'Please provide a valid message.' });
      return;
    }

    if (!process.env.OPENAI_API_KEY) {
      sendJson(response, 200, { reply: localReply(message), offline: true });
      return;
    }

    const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model: 'gpt-5', instructions, input: message })
    });
    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      sendJson(response, 200, { reply: localReply(message), offline: true });
      return;
    }

    sendJson(response, 200, { reply: data.output_text || 'I could not generate a response.' });
  } catch (error) {
    console.error('DevGuild AI request failed:', error instanceof Error ? error.message : error);
    sendJson(response, 200, { reply: localReply(JSON.parse(rawBody).message), offline: true });
  }
});

server.listen(port, () => console.log(`DevGuild AI backend listening on http://127.0.0.1:${port}`));
