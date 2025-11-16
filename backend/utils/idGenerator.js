// utils/idGenerator.js
// Simple id helper (wraps nanoid for consistency)
const { nanoid } = require('nanoid');

function generateId(prefix = '') {
  return prefix + nanoid(10);
}

module.exports = { generateId };
