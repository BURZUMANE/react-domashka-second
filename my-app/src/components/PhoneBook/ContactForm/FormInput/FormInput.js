import React from "react";

export default function FormInput({
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
    >
    </input>
  );
}
