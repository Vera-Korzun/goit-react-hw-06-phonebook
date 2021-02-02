import React from "react";
import { connect } from "react-redux";
import { deleteContact, setFilter } from "../../redux/actions/formActions";
import PropTypes from "prop-types";

const ContactListItem = ({
  contact,
  contacts,
  filter,
  deleteContact,
  setFilter,
}) => {
  const onHandleDelete = (e) => {
    const { id } = e.target;
    deleteContact(id);

    if (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ).length < 2
    ) {
      setFilter("");
    }
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

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch(deleteContact(id));
    },
    setFilter: (value) => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contact: PropTypes.object,
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
  setFilter: PropTypes.func,
};
