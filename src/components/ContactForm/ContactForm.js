import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import styles from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: "",
        number: "",
      };
      nameInputId = nanoid();
      numberInputId = nanoid();

      static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };

      handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        const { name, number } = this.state;
        e.preventDefault();
        this.props.onSubmit(name, number);
        this.reset();
      };

      reset() {
        this.setState({
          name: "",
          number: "",
        });
      }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='nameInputId'
            value={this.state.name}
            onChange={this.handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            />
        </label>
        <label htmlFor={this.numberInputId} className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            id='numberInputId'
            value={this.state.number}
            onChange={this.handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={styles.input}
/>
        </label>
        <button type="submit" className={styles.btn}>
          <span>Add contact</span>
        </button>
      </form>
    )
  }
}