// server.js
const express = require('express');
const cors = require('cors');

const sessionsRoutes = require('./routes/sessions');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api', sessionsRoutes);
app.use('/api', chatRoutes);

// Basic health-check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
});
