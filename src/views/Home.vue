<template>
  <h1>Recipes</h1>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ path: `/recipe/${recipe.id}` }">
        {{ recipe.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
const recipes = [
  { id: 1, name: "Recipe 1", description: "this is the description" },
  { id: 2, name: "Recipe 2", description: "this is the description" },
  { id: 3, name: "Recipe 3", description: "this is the description" },
  { id: 4, name: "Recipe 4", description: "this is the description" },
];
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  padding: 10px 0;
}
</style>
