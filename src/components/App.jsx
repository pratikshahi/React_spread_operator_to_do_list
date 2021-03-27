import React, { useState } from "react";

function App() {
  const [item, addItem] = useState("");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    addItem(newValue);
  }
  function handleClick() {
    addItems((prevValue) => {
      return [...prevValue, item];
    });
    addItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
