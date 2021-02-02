import React from "react";
import PropTypes from "prop-types";
import MessageStyled from "./MessageStyled";

const Message = ({ message }) => {
  return (
    <MessageStyled>
      <p className="message-title">{message}</p>
    </MessageStyled>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string,
};
