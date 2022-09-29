import React, { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState(['Mango', 'Peach']);

  const addFruit = (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;
    let value = e.target[0].value;

    setFruits([...fruits, value]);
    document.getElementById('react-fruit').value = null;
  };

  return (
    <section id="react-fruits">
      <h2>
        <span className="framework">React</span> Fruits
      </h2>
      <p>Loads when viewport is greater than 600px.</p>
      <form onSubmit={addFruit}>
        <div className="input-group">
          <label htmlFor="react-fruit">Fruit</label>
          <input type="text" id="react-fruit" name="react-fruit" />
        </div>
        <button type="submit">Add Fruit</button>
      </form>
      <ul>
        {fruits
          .sort((a, b) => a.localeCompare(b))
          .map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
      </ul>
      <div>
        <strong>Total Fruits:</strong> {fruits.length}
      </div>
    </section>
  );
}

export default FruitList;
