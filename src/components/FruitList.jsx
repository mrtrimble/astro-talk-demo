import React, { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState([]);

  const addFruit = (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;
    let value = e.target[0].value;

    setFruits([...fruits, value]);
    document.getElementById('react-input').value = null;
  };

  return (
    <div>
      <h2>React Fruits!</h2>
      <form onSubmit={addFruit}>
        <input type="text" id="react-input" />
        <button type="submit">Add Fruit</button>
      </form>
      <ul>
        {fruits
          .sort((a, b) => a.localeCompare(b))
          .map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
      </ul>
      <strong>Total Fruits:</strong> {fruits.length}
    </div>
  );
}

export default FruitList;
