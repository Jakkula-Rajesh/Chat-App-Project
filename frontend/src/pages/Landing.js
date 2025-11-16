// src/pages/Landing.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewChat } from "../api/api";

const Landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNewChat = async () => {
    setError(null);
    setLoading(true);
    try {
      // Backend now returns { session: {...} }
      const res = await createNewChat();
      const session = res.session || res; // support both shapes
      if (!session || !session.id) {
        throw new Error("Invalid session returned from server");
      }

      // Navigate to chat page, pass session in navigation state to avoid immediate re-fetch
      navigate(`/chat/${session.id}`, { state: { session } });
    } catch (err) {
      console.error("Error creating chat:", err);
      setError(err.message || "Unable to create chat");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Start a New Chat
      </h1>

      <button
        onClick={handleNewChat}
        disabled={loading}
        className={`px-6 py-3 rounded-lg transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {loading ? "Creating..." : "New Chat"}
      </button>

      {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default Landing;
