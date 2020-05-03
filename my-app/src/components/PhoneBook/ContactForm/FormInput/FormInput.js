import React from 'react';
import PropTypes from 'prop-types';

function FormInput({
  handleChange,
  options: { name, placeholder, type },
  value,
}) {
  return (
    <input
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      required
    />
  );
}

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
