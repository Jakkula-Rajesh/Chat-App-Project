// routes/chat.js
const express = require('express');
const router = express.Router();

const { postChat } = require('../controllers/chatController');

// POST /api/chat/:id  { question: "..." }
router.post('/chat/:id', postChat);

module.exports = router;
