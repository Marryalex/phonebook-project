import React from "react";
import styles from './ContactListItem.module.css'


const ContactListItem = ({
    contactName,
    contactNumber,
    onClickDeleteContact,
  }) => {
    return (
      
      <li className={styles.contact_item}>
        <span className={styles.list_item_text}>{contactName}:</span>
        <span className={styles.list_item_text}>{contactNumber}</span>
        <button type="button" onClick={onClickDeleteContact} className={styles.delete_btn}>
          Delete
        </button>
      </li>
    );
  };
  export default ContactListItem