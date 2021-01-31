import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./ContactListItem";
import ContactsWrapper from "./ContactsStyled";

const ContactList = () => {
  const form = useSelector((state) => state.form.list);
  console.log("form", form);

  return (
    <ContactsWrapper>
      <TransitionGroup component="ul" className="contact-list">
        {form.map((contact) => (
          <CSSTransition
            key={uuidv4()}
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

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContactById: PropTypes.func,
};

//************************************************* */

// import React from "react";
// import PropTypes from "prop-types";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import ContactListItem from "./ContactListItem";
// import ContactsWrapper from "./ContactsStyled";

// const ContactList = ({ contacts, filter, deleteContactById }) => {
//   return (
//     <ContactsWrapper>
//       <TransitionGroup component="ul" className="contact-list">
//         {contacts
//           .filter((contact) =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//           )
//           .map((contact) => (
//             <CSSTransition
//               key={contact.id}
//               timeout={250}
//               classNames="my-contact-list-item"
//             >
//               <ContactListItem
//                 contact={contact}
//                 deleteContactById={deleteContactById}
//               />
//             </CSSTransition>
//           ))}
//       </TransitionGroup>
//     </ContactsWrapper>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   filter: PropTypes.string,
//   deleteContactById: PropTypes.func,
// };
