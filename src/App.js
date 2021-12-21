import useLocalStorage from "../src/hooks/useLocalStorage";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import baseContacts from "./components/ContactList/baseContacts";
import "./App.css";
// import { connect } from "react-redux";
// import { addContact, delContact } from "./redux/contacts/actions";

export default function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useLocalStorage("contacts", [
    ...baseContacts,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setPhoneNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = () => {
    if (
      contacts.find((contact) => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts!`);
    } else {
      const newContact = {
        id: uuidv4(),
        name,
        phoneNumber,
      };
      setContacts([newContact, ...contacts]);
    }
  };

  const delContact = (dataId) => {
    setContacts((prevState) => prevState.filter(({ id }) => id !== dataId));
  };

  // console.log(delContact);

  const getFilteredElems = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((elem) =>
      elem.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getFilteredElems();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <ContactForm
        addContact={addContact}
        nameChange={handleChange}
        phoneChange={handleChange}
      />

      {contacts.length > 0 && (
        <>
          <Filter filter={handleFilterChange} value={filter} />
          <ContactList contacts={filteredContact} delContact={delContact} />
        </>
      )}
    </div>
  );
}

// const mapStateToProps = (state) => {
// 	return {
// 		contactsList: state.contacts,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onAdd: (contact) => dispatch(addContact(contact)),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
