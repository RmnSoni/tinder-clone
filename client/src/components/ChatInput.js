import React, { useState } from "react";

export const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);

  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Send</button>
    </div>
  );
};
