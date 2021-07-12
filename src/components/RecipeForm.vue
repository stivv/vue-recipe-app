<template>
  <button type="button" @click="$emit('complete')">Close</button>
  <form @submit.prevent="saveRecipe" method="post">
    <div class="mb-8">
      <label for="name">name</label><br />
      <input v-model="form.name" id="name" />
    </div>
    <div class="mb-8">
      <label for="ingredients"
        >ingredients <small>( separate with , )</small></label
      ><br />
      <textarea
        v-model="form.ingredients"
        id="ingredients"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="mb-8">
      <label for="how_to_make">how to make</label><br />
      <textarea
        v-model="form.how_to_make"
        id="how_to_make"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div>
      <button type="submit">Add recipe</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, defineEmits, defineProps, onBeforeMount } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["complete"]);

const props = defineProps(["recipe"]);

const store = useStore();

let form = reactive({
  name: "",
  ingredients: "",
  how_to_make: "",
});

const saveRecipe = () => {
  if (
    !form.name.length ||
    !form.ingredients.length ||
    !form.how_to_make.length
  ) {
    alert("complete the form");
    return;
  }
  store.dispatch("recipe/setRecipes", form);
  form = { name: "", ingredients: "", how_to_make: "" };
  emit("complete");
};

onBeforeMount(() => {
  if (Object.keys(props.recipe).length) {
    form = Object.assign(form, props.recipe);
  }
});
</script>

<style scoped>
.mb-8 {
  margin-bottom: 8px;
}
</style>
