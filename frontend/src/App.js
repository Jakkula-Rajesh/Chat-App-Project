import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat/:sessionId" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
