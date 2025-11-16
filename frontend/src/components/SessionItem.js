import React from "react";
import { useNavigate } from "react-router-dom";

const SessionItem = ({ session, open }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/chat/${session.id}`)}
      className="px-3 py-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {open ? (
        <div>
          <p className="font-medium">{session.title}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
            {session.lastMessage || "No messages yet"}
          </p>
        </div>
      ) : (
        <p className="text-lg">💬</p>
      )}
    </div>
  );
};

export default SessionItem;
