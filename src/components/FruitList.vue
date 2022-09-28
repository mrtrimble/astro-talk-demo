<script setup>
import { ref, reactive, computed } from 'vue';

const fruitToAdd = ref();

const fruits = reactive([]);

const fruitsSorted = computed(() => {
  let array = Array.from(fruits);
  return array.sort((a, b) => a.localeCompare(b));
})

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
  <div>
    <h2>Vue Fruits!</h2>

    <form @submit="addFruit">
      <input type="text" v-model="fruitToAdd" />
      <button type="submit">Add Fruit</button>
    </form>

    <ul>
      <li v-for="(item, index) in fruitsSorted" :key="index">
        {{item}}
      </li>
    </ul>

    <strong>Total Fruits:</strong> {{ total }}
  </div>
</template>

<style scoped lang="scss">

</style>