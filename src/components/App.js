import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import AppWrapper from "./AppStyled";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import Message from "./message/Message";

const App = ({ contacts }) => {
  return (
    <AppWrapper>
      <CSSTransition
        // in={showMessage}
        timeout={250}
        classNames="message"
        unmountOnExit
      >
        <Message />
      </CSSTransition>

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

//**************************************************** */

// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { CSSTransition } from "react-transition-group";
// import ContactForm from "./contactForm/ContactForm";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";
// import Message from "./message/Message";
// import AppWrapper from "./AppStyled";

// uuidv4();

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//     message: "",
//     showMessage: false,
//   };

//   componentDidMount() {
//     if (localStorage.getItem("contacts")) {
//       const contactsFromLS = JSON.parse(localStorage.getItem("contacts"));
//       this.setState({
//         contacts: [...contactsFromLS],
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   showAlertMessage = (message) => {
//     this.setState({ message: message });
//     this.setState({ showMessage: true });
//     setTimeout(() => {
//       this.setState({ showMessage: false });
//     }, 2000);
//     setTimeout(() => {
//       this.setState({ message: "" });
//     }, 2500);
//   };

//   onHandlerSubmit = (contact) => {
//     if (this.state.contacts.some((item) => item.name === contact.name)) {
//       this.showAlertMessage(`${contact.name} is already in contacts`);
//       return;
//     }

//     if (this.state.contacts.some((item) => item.number === contact.number)) {
//       this.showAlertMessage(
//         `Contact with number ${contact.number} is already in contacts`
//       );
//       return;
//     }

//     if (!contact.name.length) {
//       this.showAlertMessage("Please, enter a name");
//       return;
//     }
//     if (!contact.number.length) {
//       this.showAlertMessage("Please, enter a number");
//       return;
//     }
//     this.setState((prev) => {
//       return {
//         contacts: [...prev.contacts, contact],
//       };
//     });
//   };

//   deleteContactById = (e) => {
//     const id = e.target.dataset.id;
//     this.setState({
//       contacts: this.state.contacts.filter((contact) => contact.id !== id),
//     });
//     this.setState({ filter: "" });
//   };

//   onChangeFilter = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   render() {
//     const { contacts, filter, message, showMessage } = this.state;

//     return (
//       <AppWrapper>
//         <CSSTransition
//           in={showMessage}
//           timeout={250}
//           classNames="message"
//           unmountOnExit
//         >
//           <Message message={message} />
//         </CSSTransition>
//         <CSSTransition in={true} timeout={500} appear={true} classNames="logo">
//           <h2 className="phonebook-title">PhoneBook</h2>
//         </CSSTransition>
//         <ContactForm onHandlerSubmit={this.onHandlerSubmit} />

//         <h2 className="phonebook-title-second">Contacts</h2>
//         <CSSTransition
//           in={contacts.length > 1}
//           timeout={250}
//           appear={true}
//           classNames="filter"
//           unmountOnExit
//         >
//           <Filter value={filter} onChangeFilter={this.onChangeFilter} />
//         </CSSTransition>
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           deleteContactById={this.deleteContactById}
//         />
//       </AppWrapper>
//     );
//   }
// }

// export default App;
