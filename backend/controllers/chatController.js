// controllers/chatController.js
const { createMessage } = require('../mockData');
const { sessions } = require('../mockData');

/**
 * Very simple mock responder: returns a descriptive message and a sample table
 * derived from the incoming question text (not actually parsing).
 */
function postChat(req, res) {
  const { id } = req.params;
  const { question } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: 'Question is required in request body' });
  }

  const session = sessions.find((s) => s.id === id);
  if (!session) return res.status(404).json({ error: 'Session not found' });

  // Append user message
  const userMsg = createMessage({ role: 'user', text: question });
  session.messages.push(userMsg);

  // Build a mock structured response (simple example)
  const assistantText = `Mock answer for: "${question}". Below is a sample table.`;
  const structured = {
    columns: ['Item', 'Value', 'Notes'],
    rows: [
      ['Metric A', Math.floor(Math.random() * 1000), 'auto-generated'],
      ['Metric B', Math.floor(Math.random() * 500), 'auto-generated'],
      ['Metric C', Math.floor(Math.random() * 2000), 'auto-generated'],
    ],
  };

  const assistantMsg = createMessage({
    role: 'assistant',
    text: assistantText,
    structured,
  });

  session.messages.push(assistantMsg);

  // Return only the assistant's message (client can append)
  res.json({ message: assistantMsg, sessionId: session.id });
}

module.exports = { postChat };
