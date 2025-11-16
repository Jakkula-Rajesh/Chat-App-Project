// mockData.js
// In-memory mock data store for sessions and messages.
// NOTE: This is in-memory. Restarting server resets data.

const { nanoid } = require('nanoid');

const now = () => new Date().toISOString();

const createMessage = ({ role = 'assistant', text = '', structured = null }) => ({
  id: nanoid(8),
  role,
  text,
  structured, // { columns: [...], rows: [ [...], [...], ... ] } or null
  createdAt: now(),
});

const createSession = (title = null) => {
  const id = nanoid(10);
  const session = {
    id,
    title: title || `New chat - ${new Date().toLocaleString()}`,
    createdAt: now(),
    messages: [
      // Optional initial assistant greeting
      createMessage({
        role: 'assistant',
        text: 'Hi! Ask me anything. I can return structured tabular mock data.',
      }),
    ],
  };
  return session;
};

// Initial sample sessions
const sessions = [
  (() => {
    const s = createSession('Sales summary (sample)');
    s.messages.push(
      createMessage({
        role: 'user',
        text: "Show sales by region for Q3",
      }),
      createMessage({
        role: 'assistant',
        text: 'Here is a sample sales table for Q3.',
        structured: {
          columns: ['Region', 'Sales', 'Growth%'],
          rows: [
            ['North', 23400, 12.5],
            ['South', 18750, 9.3],
            ['East', 15220, 7.1],
            ['West', 19800, 10.0],
          ],
        },
      })
    );
    return s;
  })(),
  createSession('Quick stats (sample)'),
];

module.exports = {
  createMessage,
  createSession,
  sessions,
};
