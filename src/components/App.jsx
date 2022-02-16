import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;

    setNewItem(newValue);
  };

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
