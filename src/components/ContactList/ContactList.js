
import { useDispatch, useSelector } from "react-redux";

import ContactListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import styles from './ContactList.module.css'
import { deleteContact } from "redux/operations";
import { getContacts, getError, getFilterValue, getIsLoading } from "redux/selectors";

const visibleContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const items = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const contacts = visibleContacts(items, filter);

  
  return (
    <ul className={styles.contacts_list}>
    {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length ? 
      contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => dispatch(deleteContact(id))}
        />
      )) : (!isLoading && <p>'No contacts'</p>)}
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
