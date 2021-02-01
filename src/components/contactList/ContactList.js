import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import ContactsWrapper from "./ContactsStyled";
import { deleteContact } from "../../redux/actions/formActions";

const ContactList = ({ contacts, filter, deleteContact }) => {
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
              <ContactListItem
                contacts={contacts}
                contact={contact}
                deleteContact={deleteContact}
                filter={filter}
              />
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
    deleteContact: (id) => {
      dispatch(deleteContact(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

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
