import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeNumber,
  formAction,
} from "../../redux/form/formAction";
import FormContact from "./ContactFormStyled";

const ContactForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form.item);
  //console.log("form", form);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(formAction({ ...form }));
  };

  return (
    <FormContact>
      <form className="contact-form" onSubmit={onHandleSubmit}>
        <label className="contact-form__title">
          Name
          <input
            className="contact-form__imput"
            type="text"
            value={form.name}
            name="name"
            onChange={(e) => dispatch(changeName(e.target.value))}
          />
        </label>
        <label className="contact-form__title">
          Number
          <input
            className="contact-form__imput"
            type="text"
            value={form.number}
            name="number"
            onChange={(e) => dispatch(changeNumber(e.target.value))}
          />
        </label>
        <button className="contact-form__btn" type="submit">
          Add contact
        </button>
      </form>
    </FormContact>
  );
};

export default ContactForm;
