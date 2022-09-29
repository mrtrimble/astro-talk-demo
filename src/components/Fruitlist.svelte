<script>
  let fruits = ['Honeydew', 'Watermelon'];
  let newFruit = '';

  const addFruits = (e) => {
    e.preventDefault();
    if (!newFruit) return;
    fruits = [...fruits, newFruit].sort((a, b) => a.localeCompare(b));
    newFruit = '';
  };
</script>

<section id="svelte-fruits">
  <h2><span class="framework">Svelte</span> Fruits</h2>
  <p>Loads when enters viewport.</p>
  <form on:submit={addFruits}>
    <div class="input-group">
      <label for="svelte-fruit">Fruit</label>
      <input type="text" bind:value={newFruit} id="svelte-fruit" name="svelte-fruit" />
    </div>
    <button type="submit">Add Fruit</button>
  </form>
  <ul>
    {#each fruits as fruit}
      <li>{fruit}</li>
    {/each}
  </ul>
  <div>
    <strong>Total Fruits:</strong>
    {fruits.length}
  </div>
</section>
