// routes/sessions.js
const express = require('express');
const router = express.Router();

const {
  listSessions,
  newChat,
  getSession,
} = require('../controllers/sessionsController');

// GET /api/sessions
router.get('/sessions', listSessions);

// GET /api/new-chat
router.get('/new-chat', newChat);

// GET /api/session/:id
router.get('/session/:id', getSession);

module.exports = router;
