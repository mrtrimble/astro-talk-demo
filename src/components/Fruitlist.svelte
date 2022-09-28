<script>
  const fruits = ['Banana'];

  const addFruits = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    fruits.push(e.target[0].value);
  };
</script>

<h2>Svelte Fruits!</h2>
<form on:submit={addFruits}>
  <input type="text" />
  <button type="submit">Add Fruit</button>
</form>
<ul>
  {#each fruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>
