import React from "react";
import styles from './Filter.module.css'


const Filter = ({ value, onChange }) => (
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.filter_input}
      />
    </label>
  );
  export default Filter