import React from "react";
import TableResponse from "./TableResponse";
import AnswerFeedback from "./AnswerFeedback";

const ChatWindow = ({ messages }) => {
  return (
    <div className="p-4 space-y-6">
      {messages.map((msg) => (
        <div key={msg.id} className="w-full">
          <div
            className={`p-3 rounded-lg max-w-3xl ${
              msg.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {msg.text}
          </div>

          {/* Table Response */}
          {msg.structured && (
            <div className="mt-2">
              <TableResponse structured={msg.structured} />
              <AnswerFeedback />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
