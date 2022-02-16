import React, { useState } from "react";

const InputArea = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

    setNewItem(newValue);
  };

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={newItem} />
      <button
        onClick={() => {
          props.onAdd(newItem);
          setNewItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
