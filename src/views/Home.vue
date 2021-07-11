<template>
  <h1>Recipes</h1>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">
      <router-link
        :to="{ path: `/recipe/${recipe.id}` }"
        @click="setRecipe(recipe)"
      >
        {{ recipe.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const recipes = store.getters["recipe/getRecipes"];

const setRecipe = (recipe) => {
  store.dispatch("recipe/setRecipe", recipe);
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  padding: 5px 0;
}
</style>
