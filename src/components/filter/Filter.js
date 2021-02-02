import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FornFilter from "./FilterSryled";
import { setFilter } from "../../redux/actions/formActions";

const Filter = ({ filter, setFilter }) => {
  const onChangeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  return (
    <FornFilter>
      <form className="filter-form">
        <label className="filter-form__title">
          Find contact by name
          <input
            className="filter-form__imput"
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </FornFilter>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (value) => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
