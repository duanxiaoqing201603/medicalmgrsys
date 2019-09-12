/*
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
*/
import Vue from 'vue'
import Vuex from 'vuex'
import menusModule from './module/menusModule'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    isLogin:0,
    subjectId:'',
    chapterId:'',
    subjectName:'',
    localStorage:'',
    userName:''
  },
  mutations:{
    updateSubjectId(state,id){
      state.subjectId=id;
     // console.log(state.subjectId);
    },
    updateChapterId(state,id){
      state.chapterId=id;
     // console.log(state.chapterId);
    },
    updateSubjectName(state,name){
      state.subjectName=name;
    },
    updateStorage(state,storage){
      state.localStorage=storage;
    },
    updateUserName(state,userName){
      state.userName=userName;
    }
  },
  modules: {

    menusModule
  }
});
export default store;
