// controllers/sessionsController.js
const { sessions, createSession } = require('../mockData');

function listSessions(req, res) {
  const list = sessions.map((s) => ({
    id: s.id,
    title: s.title,
    createdAt: s.createdAt,
    lastMessage: s.messages.length ? s.messages[s.messages.length - 1].text : null,
  }));
  res.json({ sessions: list });
}

function newChat(req, res) {
  const newS = createSession(); // returns a session object with id + initial greeting
  // push into in-memory store
  sessions.unshift(newS);

  // Return full session object so frontend can prefill UI
  res.json({ session: newS });
}

function getSession(req, res) {
  const { id } = req.params;
  const s = sessions.find((x) => x.id === id);
  if (!s) return res.status(404).json({ error: 'Session not found' });
  res.json({ session: s });
}

module.exports = {
  listSessions,
  newChat,
  getSession,
};
