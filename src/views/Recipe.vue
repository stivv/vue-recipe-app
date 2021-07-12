<template>
  <div class="about">
    <h1>{{ recipe.name }}</h1>
    <h4>Ingredients:</h4>
    <ul>
      <li v-for="(ingredient, idx) in recipe.ingredients.split(',')" :key="idx">
        {{ ingredient }}
      </li>
    </ul>
    <h4>How to cook:</h4>
    <p v-html="recipe.how_to_make"></p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const recipe = store.getters["recipe/getRecipe"];
</script>
