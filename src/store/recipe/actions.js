export default {
  setRecipes: ({ commit }, payload) => {
    commit("setRecipes", payload);
  },
  setRecipe: ({ commit }, payload) => {
    commit("setRecipe", payload);
  },
};
