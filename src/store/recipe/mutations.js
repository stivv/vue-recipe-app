export default {
  setRecipes: (state, payload) => {
    if (Object.prototype.hasOwnProperty.call(payload, "id")) {
      state.recipes = state.recipes.map((i) => {
        if (i.id === payload.id) i = payload;
        return i;
      });
      return;
    }
    state.recipes = [
      Object.assign(payload, { id: state.recipes.length + 1 }),
      ...state.recipes,
    ];
  },
  setRecipe: (state, payload) => {
    state.recipe = payload;
  },
  deleteRecipe: (state, payload) => {
    state.recipes = state.recipes.filter((i) => i.id !== payload.id);
  },
};
