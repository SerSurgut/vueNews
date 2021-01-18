import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news";
console.log();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    news
  }
});
