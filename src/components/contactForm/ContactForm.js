import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addNewContact } from "../../redux/actions/formActions";
import FormContact from "./ContactFormStyled";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ contacts, addContact }) => {
  const [state, setState] = useState({ ...initialState });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState("false");

  const showAlertMessage = (message) => {
    setMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: state.id, name: state.name, number: state.number };
    if (contacts.some((item) => item.name === contact.name)) {
      showAlertMessage(`${contact.name} is already in contacts`);
      return;
    }

    if (contacts.some((item) => item.number === contact.number)) {
      showAlertMessage(
        `Contact with number ${contact.number} is already in contacts`
      );
      return;
    }

    if (!contact.name.length) {
      showAlertMessage("Please, enter a name");
      return;
    }
    if (!contact.number.length) {
      showAlertMessage("Please, enter a number");
      return;
    }

    addContact(state);
    setState({ ...initialState });
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <FormContact>
      <form className="contact-form" onSubmit={onHandleSubmit}>
        <label className="contact-form__title">
          Name
          <input
            className="contact-form__imput"
            type="text"
            value={state.name}
            name="name"
            onChange={onHandleChange}
          />
        </label>
        <label className="contact-form__title">
          Number
          <input
            className="contact-form__imput"
            type="text"
            value={state.number}
            name="number"
            onChange={onHandleChange}
          />
        </label>
        <button className="contact-form__btn" type="submit">
          Add contact
        </button>
      </form>
    </FormContact>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (data) => {
      dispatch(addNewContact(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
