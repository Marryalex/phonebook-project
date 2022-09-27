import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );

  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  export default ContactList
