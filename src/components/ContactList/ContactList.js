import React from "react";

const ContactList = ({ contacts, delContact }) => {
  //   console.log(contacts);
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ id, name, phoneNumber }) => (
          <li key={id}>
            <p> {`${name}: ${phoneNumber}`}</p>

            <button
              id={id}
              onClick={() => {
                delContact(id);
              }}
              type="button"
              className="btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
