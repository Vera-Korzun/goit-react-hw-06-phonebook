import React from "react";
import PropTypes from "prop-types";
import FornFilter from "./FilterSryled";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <FornFilter>
      <form className="filter-form">
        <label className="filter-form__title">
          Find contact by name
          <input
            className="filter-form__imput"
            type="text"
            name="filter"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </FornFilter>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
