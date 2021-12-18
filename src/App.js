import useLocalStorage from "../src/hooks/useLocalStorage";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const baseContacts = [
  { id: uuidv4(), name: "Rosie Simpson", phoneNumber: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", phoneNumber: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", phoneNumber: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", phoneNumber: "227-91-26" },
];

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

  const addContact = (e) => {
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

  const delContact = (dataId) => {
    setContacts((prevState) => prevState.filter(({ id }) => id !== dataId));
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
