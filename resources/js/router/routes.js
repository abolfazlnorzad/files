import auth from "../middleware/auth";
import guest from "../middleware/guest";

const AppLayout = () => import( /*  webpackChunkName:"chunk/AppLayout" */ "../views/layout/AppLayout");
const Home = () => import( /*  webpackChunkName:"chunk/home" */ "../views/Home");
const AuthRoutes = () => import( /*  webpackChunkName:"chunk/AuthRoutes" */ "../views/Auth/AuthRoutes");
const NotFound = () => import( /*  webpackChunkName:"chunk/NotFound" */ "../views/errors/NotFound");
const AccessDenied = () => import( /*  webpackChunkName:"chunk/AccessDenied" */ "../views/errors/AccessDenied");

export default [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home',

            },
            {
                path: 'auth/:url',
                component: AuthRoutes,
                name: 'auth',
                props: true,
                meta: {
                    middleware:[
                        guest
                    ]
                }
            },

        ],
    },
    {
        path: '/404',
        component: NotFound,
        name: 'not-found'
    },
    {
        path: '/403',
        component: AccessDenied,
        name: 'access-denied'
    },

    {
        path: '*',
        component: NotFound,
        name: 'error-404'
    },

]
