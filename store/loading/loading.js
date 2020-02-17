export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    ACTION_LOADING(state, payload) {
      state.isLoading = payload; //false;
    }
  },
  actions: {
    async ACTION_LOADING(vueContext, input) {
      try {
        vueContext.commit("ACTION_LOADING", input);
        console.log("INPUT", input);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    GET_ISLOADING(state) {
      return state.isLoading;
    }
  }
}
