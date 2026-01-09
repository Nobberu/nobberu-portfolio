"use client";

import React from "react";

export interface ChatMessage {
  id: number | string;
  sender: "me" | "them";
  content: React.ReactNode;
}

interface ChatPanelProps {
  className?: string;
  messages: ChatMessage[];
}

const ChatPanel = ({ className, messages }: ChatPanelProps) => {
  return (
    <div
      className={`absolute ${className} flex items-center justify-center p-6 font-sans antialiased perspective-1000`}
      style={{ willChange: "transform" }}
    >
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-0.5 bg-linear-to-b from-white/20 to-transparent rounded-2xl blur-sm opacity-50 pointer-events-none"></div>

        <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-2xl border border-white/10 bg-linear-to-t from-white/5 to-white/7 rounded-2xl shadow-2xl ring-1 ring-white/5"></div>

        <div className="relative z-10 w-full overflow-hidden rounded-2xl">
          <div className="h-12 border-b border-white/5 flex items-center justify-between px-5 bg-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-[11px] font-semibold text-white/40 uppercase tracking-widest subpixel-antialiased">
              Client Chat
            </div>
            <div className="w-10"></div>
          </div>

          <div className="h-auto px-5 py-7 space-y-6 flex flex-col justify-center">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-sm text-[13px] leading-relaxed
                  ${
                    msg.sender === "me"
                      ? "bg-blue-500/80 text-white rounded-br-sm shadow-[0_4px_15px_rgba(79,70,229,0.3)]"
                      : "bg-white/10 border border-white/10 text-gray-200 rounded-bl-sm backdrop-blur-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
