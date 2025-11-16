const BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

async function safeFetch(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    let body = null;
    try { body = JSON.parse(text); } catch (e) { body = text; }
    throw new Error(body?.error || res.statusText || body);
  }
  return res.json();
}

export async function getSessions() {
  return safeFetch(`${BASE}/sessions`);
}

export async function createNewChat() {
  // backend uses GET /new-chat to create a new session
  return safeFetch(`${BASE}/new-chat`);
}

export async function getSession(sessionId) {
  if (!sessionId) throw new Error("sessionId is required");
  return safeFetch(`${BASE}/session/${sessionId}`);
}

export async function postChat(sessionId, question) {
  if (!sessionId) throw new Error("sessionId is required");
  return safeFetch(`${BASE}/chat/${sessionId}`, {
    method: "POST",
    body: JSON.stringify({ question }),
  });
}
