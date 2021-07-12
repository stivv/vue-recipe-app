<template>
  <h1>Recipes</h1>
  <recipe-form
    v-if="recipe_form"
    :recipe="savedRecipe"
    @complete="recipe_form = false"
  />
  <div v-if="!recipe_form">
    <button type="button" @click="recipe_form = true">Add recipe</button>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link
          :to="{ path: `/recipe/${recipe.id}` }"
          @click="setRecipe(recipe)"
        >
          {{ recipe.name }}
        </router-link>
        <button
          style="margin-left: 5px"
          type="button"
          @click="editRecipe(recipe)"
        >
          Edit
        </button>
        <button type="button" @click="deleteRecipe(recipe)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import RecipeForm from "@/components/RecipeForm";

const store = useStore();

const recipes = computed(() => store.getters["recipe/getRecipes"]);

let savedRecipe = ref({});

const recipe_form = ref(false);

const setRecipe = (recipe) => {
  store.dispatch("recipe/setRecipe", recipe);
};
const editRecipe = (recipe) => {
  savedRecipe.value = recipe;
  recipe_form.value = true;
};
const deleteRecipe = (recipe) => {
  store.dispatch("recipe/deleteRecipe", recipe);
};
</script>

<style>
ul {
  list-style: none;
  margin: 15px 0 0;
  padding: 0;
}
ul li {
  padding: 8px 0;
}
</style>
