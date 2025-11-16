import React, { useState } from "react";
import { postChat, getSession } from "../api/api";

const ChatInput = ({ sessionId, setSessionData }) => {
  const [question, setQuestion] = useState("");

  const handleSend = async () => {
    if (!question.trim()) return;

    try {
      await postChat(sessionId, question);

      // Refresh full session
      const updated = await getSession(sessionId);
      setSessionData(updated.session);

      setQuestion("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        placeholder="Ask something..."
      />

      <button
        onClick={handleSend}
        className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
