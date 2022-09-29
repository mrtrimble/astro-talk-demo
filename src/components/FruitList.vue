<script setup>
import { ref, reactive, computed } from "vue";

const fruitToAdd = ref();

const fruits = reactive(["Apple", "Strawberry"]);

const fruitsSorted = computed(() => {
  let array = Array.from(fruits);
  return array.sort((a, b) => a.localeCompare(b));
});

const total = computed(() => {
  let total = Array.from(fruits);
  return total.length;
});

const addFruit = (e) => {
  e.preventDefault();
  if (!fruitToAdd.value) return;
  fruits.push(fruitToAdd.value);
  fruitToAdd.value = null;
};
</script>

<template>
  <section id="vue-fruits">
    <h2><span class="framework">Vue</span> Fruits</h2>
    <p>Loads immediately on page load.</p>
    <form @submit="addFruit">
      <div class="input-group">
        <label for="vue-fruit">Fruit</label>
        <input
          type="text"
          v-model="fruitToAdd"
          id="vue-fruit"
          name="vue-fruit"
        />
      </div>
      <button type="submit">Add Fruit</button>
    </form>

    <ul>
      <li v-for="(item, index) in fruitsSorted" :key="index">
        {{ item }}
      </li>
    </ul>
    <div><strong>Total Fruits:</strong> {{ total }}</div>
  </section>
</template>

<style scoped lang="scss">
</style>