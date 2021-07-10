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
import { useStore } from 'vuex'

const store = useStore()

const recipes = store.getters['recipe/getRecipes']

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
