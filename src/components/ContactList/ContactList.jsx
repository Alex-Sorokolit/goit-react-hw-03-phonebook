import React from 'react';
import './ContactList.css';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      <ul className="contact__list">
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className="contact__item">
            <p className="contact__name">
              {name}: {number}
            </p>
            <button
              className="contact__button"
              type="buttone"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
