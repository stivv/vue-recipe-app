export default {
  setRecipes: ( state, payload ) => {
    state.recipes = [payload, ...state.recipes]
  }
}