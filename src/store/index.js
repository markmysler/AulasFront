import { createStore } from 'vuex'

export default createStore({
  state: {
    helloWorld:'hola',
    isAuthenticated: false,
    token: '',
    isLoading: false,
    hasCompleteProfile: false,
  },
  getters: {
  },
  mutations: {
    initializeStore(state){
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');
        state.isAuthenticated = true;
      }else{
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setIsLoading(state, status){
      state.isLoading = status;
    },
    setToken(state, token){
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
