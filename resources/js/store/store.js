import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from "./modules/auth";
import * as category from "./modules/category";
import * as membership from "./modules/membership";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth,
        category,
        membership

    }

});
