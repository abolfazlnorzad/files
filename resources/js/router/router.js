import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import check_auth from "../middleware/check-auth";
import store from "../store/store";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes,

});


router.beforeEach((to, from, next) => {

    let childMiddleware = to.meta.middleware;
    let parentMiddleware = to.matched[0].meta.middleware;
    let middleware = [check_auth];
    if (!childMiddleware && !parentMiddleware) {
        return next();
    }
    if (childMiddleware) {
        middleware = [...middleware, ...childMiddleware];
    }
    if (parentMiddleware) {
        middleware = [...middleware, ...parentMiddleware];
    }
    let context = {
        to, from, next, store
    };

    return middleware[0]({
        ...context,pipe:middlewarePipeline(context,middleware,1)
    });
});

export default router;
