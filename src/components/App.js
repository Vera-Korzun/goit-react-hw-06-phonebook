import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import ContactForm from "./contactForm/ContactForm";
import AppWrapper from "./AppStyled";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = ({ contacts }) => {
  return (
    <AppWrapper>
      <CSSTransition in={true} timeout={500} appear={true} classNames="logo">
        <h2 className="phonebook-title">PhoneBook</h2>
      </CSSTransition>

      <ContactForm />

      <h2 className="phonebook-title-second">Contacts</h2>
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        appear={true}
        classNames="filter"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </AppWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
