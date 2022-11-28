import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/phoneBook";
import styles from './Filter.module.css'


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return(
    <label className={styles.filter_label}>
      Find contacts by name
      <input
      name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
        className={styles.filter_input}
      />
    </label>
  );
}
  export default Filter