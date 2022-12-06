import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import styles from './ContactForm.module.css'



export default function ContactForm() {
const dispatch = useDispatch();
const [name, setName] = useState('')
const [number, setNumber] = useState('')
const contacts = useSelector(getContacts);

const isContactInList = contactName => {
  const lowercaseName = contactName.toLowerCase();
  return contacts.find(({ name }) =>
    name.toLowerCase().includes(lowercaseName)
  );
};

const handleChange = (e) => {
  const { name, value } = e.currentTarget;
  switch (name) {
    case 'name':
        setName(value);
        break;
    
    case 'number':
        setNumber(value);
        break;
    
    default:
        return;
}
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (isContactInList(name)) {
    alert(`${name} is already in contacts.`);
    return;
  }
  dispatch(addContact({ name, number }));
  reset();
};

const reset = () => {
  setName('');
  setNumber('');
}


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <label  className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='nameInputId'
            value={name}
            onChange={handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            />
        </label>
        <label  className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            id='numberInputId'
            value={number}
            onChange={handleChange}
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



