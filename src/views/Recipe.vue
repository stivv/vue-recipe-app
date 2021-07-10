<template>
  <div class="about">
    <h1>{{ recipe.name }}</h1>
    <p v-html="recipe.description"></p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const recipe = store.getters["recipe/getRecipe"];
</script>
