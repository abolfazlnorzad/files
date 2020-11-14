require('./bootstrap');
require('bootstrap-material-design');
require('./plugin/material-dashboard.min')

import PerfectScrollbarPlugin from "vue2-perfect-scrollbar";

require('vue2-perfect-scrollbar/src/style.css');
import router from "./router/router";
import store from "./store/store";
window.Vue = require('vue');
import VueMeta from "vue-meta";


const files = require.context('./components', true, /Base[A-Z]\w+\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(PerfectScrollbarPlugin);
Vue.use(VueMeta);

const app = new Vue({
    el: '#app',
    router,
    store,


});
