import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact, deleteContact }) => {
  const onHandleDelete = (e) => {
    const { id } = e.target;
    deleteContact(id);
  };
  return (
    <>
      <li className="contact-list__item" key="{contact.id}">
        <div className="contact-list__item-ifo">
          <span className="contact-list__item-name">{contact.name}:</span>
          <span className="contact-list__item-number">{contact.number}</span>
        </div>

        <button
          className="contact-list__item-btn"
          type="button"
          id={contact.id}
          onClick={onHandleDelete}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
