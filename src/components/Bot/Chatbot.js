import React, { useState, useEffect, useCallback, useRef } from "react";
import namaste from "../images/namaste.jfif";

export default function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null); // Ref for auto-scrolling

  const toggleChatbotVisibility = useCallback(() => {
    setIsChatbotVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isChatbotVisible && messages.length === 0) {
      setMessages([
        { text: "Hi there! How can I help you today?", sender: "bot" },
      ]);
    }
  }, [isChatbotVisible, messages.length]);

  useEffect(() => {
    // Auto-scroll to the bottom when new messages are added
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
    if (input.trim()) {
      setIsLoading(true);
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");

      try {
        const response = await fetch("jec.edu.np/api/chatbot/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        setMessages([...newMessages, { text: data.response, sender: "bot" }]);
      } catch (error) {
        console.error("Error:", error);
        setMessages([
          ...newMessages,
          { text: "Sorry, I couldn't connect to the server.", sender: "bot" },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  }, [input, messages]);

  return (
    <>
      <div className="fixed z-50 flex flex-col items-center space-y-4 bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
        <img
          src={namaste}
          className="w-16 h-16 rounded-full shadow-lg md:w-20 md:h-20 lg:w-24 lg:h-24"
          alt="Chatbot Icon"
        />
        <button
          type="button"
          className="bg-gradient-to-r from-blue-500 to-red-500 text-white text-xs md:text-sm lg:text-base p-2 md:p-2.5 lg:p-3 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          onClick={toggleChatbotVisibility}
        >
          <span
            className="font-bold"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Janaki
          </span>
          <span
            className="block text-xs font-bold md:text-xs lg:text-sm"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Chat with Janaki
          </span>
        </button>
      </div>

      {isChatbotVisible && (
        <div
          style={{ fontFamily: "'Merriweather', serif" }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 w-[90%] max-w-xs md:max-w-md lg:max-w-[30%] h-96 md:h-96 lg:h-[460px] bg-white border-2 border-gray-300 rounded-lg shadow-xl flex flex-col"
        >
          <div className="flex items-center justify-between h-16 p-3 bg-blue-500 rounded-t-lg shadow-md">
            <h1 className="text-lg font-bold text-white md:text-lg lg:text-xl">
              Chat with Janaki
            </h1>
            <button
              type="button"
              className="w-8 h-8 text-lg font-bold text-white transition-transform transform bg-red-500 rounded-full md:w-10 md:h-10 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 hover:scale-105"
              onClick={() => setIsChatbotVisible(false)}
            >
              &times;
            </button>
          </div>

          <div className="flex-1 p-3 my-2 space-y-3 overflow-y-auto">
  <div aria-live="polite">
    {messages.map((message, index) => (
      <div
        key={index}
        className={`flex ${
          message.sender === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`p-3 my-2 rounded-lg shadow-md break-words ${
            message.sender === "user"
              ? "bg-blue-600 text-white/70"
              : "bg-gray-200 text-black/70"
          } max-w-[80%] md:max-w-[70%] lg:max-w-[60%] relative text-xs md:text-sm lg:text-base`}
        >
          {message.text}
          {isLoading && index === messages.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-600 animate-pulse"></div>
          )}
        </div>
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
</div>


          <div className="flex items-center p-3 bg-gray-100 rounded-b-lg">
            <input
              type="text"
              className="flex-grow p-2 border-2 border-gray-300 rounded-l-lg text-black/50 tt-xs md:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <button
              type="button"
              className="p-2 ml-2 text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 md:p-3"
              onClick={handleSendMessage}
            >
              <span className="text-xs font-bold md:text-sm lg:text-base">
                Send
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
