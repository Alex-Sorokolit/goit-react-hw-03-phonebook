import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // Метод записує дані із інпута у стейт
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // Метод виконується при сабміті форми
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name);

    // Записуємо у пропс значення стейту (передаємо дані у App-компонент)
    this.props.addContacts(this.state);
    this.reset();
  };

  // Очистка інпутів (через очистку стейту)
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // Генератор випадкових id
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
              id={nameInputId}
            />
          </label>

          <label htmlFor={numberInputId}>
            Phone
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              id={numberInputId}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
