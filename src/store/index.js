import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    
    state : {
        sideBar1:false,
        sideBar2:false,
        
    },
    getters: {
      getSideBar1(state) {
          return state.sideBar1
      },
      getSideBar2(state) {
          return state.sideBar2
      },
    },
    mutations: {
        setSideBar1(state, data) {
            state.sideBar1 = data
        },
        setSideBar2(state, data) {
            state.sideBar2 = data
        },
      
    },
    actions: {
        setAuthuser(state, data) {
            state.commit('setAuthuser', data);
         },
      
    }
})