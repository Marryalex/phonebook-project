
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/phoneBook";
import ContactListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import styles from './ContactList.module.css'

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const contacts = getContacts(items, filter);

  
  return (
    <ul className={styles.contacts_list}>
      {contacts.length ? 
      contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => dispatch(deleteContact({id}))}
        />
      )) : 'No contacts' }
    </ul>
  );
  }

  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  export default ContactList
