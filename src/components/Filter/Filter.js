import React from "react";

const Filter = ({ filter, value }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" onChange={filter} value={value} />
      </label>
    </>
  );
};

export default Filter;
