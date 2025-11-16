import React, { useState } from "react";

const AnswerFeedback = () => {
  const [reaction, setReaction] = useState(null);

  return (
    <div className="flex gap-4 mt-2 text-xl">
      <button
        onClick={() => setReaction("like")}
        className={`p-1 rounded ${reaction === "like" ? "text-green-500" : ""}`}
      >
        👍
      </button>

      <button
        onClick={() => setReaction("dislike")}
        className={`p-1 rounded ${reaction === "dislike" ? "text-red-500" : ""}`}
      >
        👎
      </button>
    </div>
  );
};

export default AnswerFeedback;
