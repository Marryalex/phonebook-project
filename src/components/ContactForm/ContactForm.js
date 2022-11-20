
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import styles from './ContactForm.module.css'



  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor={nameInputId} className={styles.label}>
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
        <label htmlFor={numberInputId} className={styles.label}>
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

