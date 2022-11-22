
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/phoneBook";
import ContactListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import styles from './ContactList.module.css'

const ContactList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
  return (
    <ul className={styles.contacts_list}>
      {contacts
      .filter(el => el.name.toLowerCase().includes(filter))
      .map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => dispatch(deleteContact({id}))}
        />
      ))}
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
    onDeleteContact: PropTypes.func.isRequired,
  };
  export default ContactList
