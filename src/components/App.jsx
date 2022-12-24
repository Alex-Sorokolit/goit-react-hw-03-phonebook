import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фільтр контактів наявних у масиві
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    // state.filter нормалізуємо один раз, а не при кожній ітерації методу filter
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // Додає дані користувача у масив
  addContacts = ({ name, number }) => {
    console.log(name, number);
    // Перевірка чи існує контакт із таким ім'ям у масиві
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    // Запис даних із інпутів у масив
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />

        <h2>Contacts</h2>

        {contacts.length > 0 && (
          <>
            <Filter value={filter} changeFilter={this.changeFilter}></Filter>
            <ContactList
              filteredContacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </>
        )}
      </div>
    );
  }
}
