import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => items.filter((item, index) => index !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
