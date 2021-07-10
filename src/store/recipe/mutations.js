export default {
  setRecipes: (state, payload) => {
    state.recipes = [payload, ...state.recipes];
  },
  setRecipe: (state, payload) => {
    state.recipe = payload;
  },
};
