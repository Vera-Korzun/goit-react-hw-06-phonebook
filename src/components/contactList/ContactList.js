import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import { getContacts } from "../../redux/actions/formActions";

import ContactsWrapper from "./ContactsStyled";

const ContactList = ({ contacts, filter, getContacts }) => {
  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      getContacts(JSON.parse(localStorage.getItem("contacts")));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsWrapper>
      <TransitionGroup component="ul" className="contact-list">
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="my-contact-list-item"
            >
              <ContactListItem contact={contact} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactsWrapper>
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
    getContacts: (data) => {
      dispatch(getContacts(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  getContacts: PropTypes.func,
};
