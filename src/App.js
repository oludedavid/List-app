import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setItems(items.concat(inputValue));
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add item:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
