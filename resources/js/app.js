require('./bootstrap');
require('bootstrap-material-design');
require('./plugin/material-dashboard.min')

import PerfectScrollbarPlugin from "vue2-perfect-scrollbar";

require('vue2-perfect-scrollbar/src/style.css');
import router from "./router/router";
window.Vue = require('vue');

const files = require.context('./components', true, /Base[A-Z]\w+\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(PerfectScrollbarPlugin);

const app = new Vue({
    el: '#app',
    router,

});
