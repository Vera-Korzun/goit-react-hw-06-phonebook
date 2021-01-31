import React from "react";
import MessageStyled from "./MessageStyled";

const Message = ({ message }) => {
  return (
    <MessageStyled>
      <p className="message-title">{message}</p>
    </MessageStyled>
  );
};

export default Message;
