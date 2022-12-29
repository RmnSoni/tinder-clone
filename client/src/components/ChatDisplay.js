import React from "react";
import { Chat } from "./Chat";
import { ChatInput } from "./ChatInput";

export const ChatDisplay = () => {
  return (
    <div className="chat-display-region">
      Isme lists aayegi
      <Chat />
      <ChatInput />
    </div>
  );
};
