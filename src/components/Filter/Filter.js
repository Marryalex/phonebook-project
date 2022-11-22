import React from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/phoneBook";
import styles from './Filter.module.css'


const Filter = () => {
  const dispatch = useDispatch();

  return(
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        type="text"
        // value={value}
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
        className={styles.filter_input}
      />
    </label>
  );
}
  export default Filter