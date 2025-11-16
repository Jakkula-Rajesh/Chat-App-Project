import React, { useEffect, useState } from "react";
import SessionItem from "./SessionItem";
import { getSessions, createNewChat } from "../api/api";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sessions, setSessions] = useState([]);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const res = await getSessions();
        setSessions(res.sessions || []);
      } catch (err) {
        console.error("Error fetching sessions:", err);
      }
    };
    loadSessions();
  }, []);

  const handleNewChat = async () => {
    try {
      const res = await createNewChat();
      navigate(`/chat/${res.sessionId}`);
    } catch (err) {
      console.error("Error creating new session:", err);
    }
  };

  return (
    <div
      className={`h-full bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 
        ${open ? "w-64" : "w-16"} transition-all duration-300 flex flex-col`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {open ? "<" : ">"}
      </button>

      {/* New Chat Button */}
      <button
        onClick={handleNewChat}
        className="mx-2 mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {open ? "New Chat" : "+"}
      </button>

      {/* Sessions */}
      <div className="flex-1 overflow-y-auto mt-4">
        {sessions.map((s) => (
          <SessionItem key={s.id} session={s} open={open} />
        ))}
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-gray-300 dark:border-gray-700 text-sm">
        {open ? (
          <p className="text-gray-700 dark:text-gray-300">User: Guest</p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">👤</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
