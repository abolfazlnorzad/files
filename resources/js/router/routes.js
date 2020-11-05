const AppLayout = () => import( /*  webpackChunkName:"chunk/AppLayout" */ "../views/layout/AppLayout");
const Home = () => import( /*  webpackChunkName:"chunk/home" */ "../views/Home");
const AuthRoutes = () => import( /*  webpackChunkName:"chunk/AuthRoutes" */ "../views/Auth/AuthRoutes");

export default [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: 'auth/:url',
                component: AuthRoutes,
                name: 'auth',
                props: true,
            },

        ]
    },

]
