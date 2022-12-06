import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterValue } from "redux/filterSlice";
import { getFilterValue } from "redux/selectors";
import styles from './Filter.module.css'


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue)

  return(
    <label className={styles.filter_label}>
      Find contacts by name
      <input
      name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(filterValue(e.target.value.toLowerCase()))}
        className={styles.filter_input}
      />
    </label>
  );
}
  export default Filter