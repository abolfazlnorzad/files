import auth from "../middleware/auth";
import guest from "../middleware/guest";
import admin from "../middleware/admin";

const AppLayout = () => import( /*  webpackChunkName:"chunk/AppLayout" */ "../views/layout/AppLayout");
const DashboardLayout = () => import( /*  webpackChunkName:"chunk/DashboardLayout" */ "../views/layout/DashboardLayout");
const AdminDashboardLayout = () => import( /*  webpackChunkName:"chunk/AdminDashboardLayout" */ "../views/layout/AdminDashboardLayout");
const Home = () => import( /*  webpackChunkName:"chunk/home" */ "../views/Home");
const AuthRoutes = () => import( /*  webpackChunkName:"chunk/AuthRoutes" */ "../views/Auth/AuthRoutes");
const NotFound = () => import( /*  webpackChunkName:"chunk/NotFound" */ "../views/errors/NotFound");
const AccessDenied = () => import( /*  webpackChunkName:"chunk/AccessDenied" */ "../views/errors/AccessDenied");
const UserDashboard = () => import( /*  webpackChunkName:"chunk/UserDashboard" */ "../views/Dashboard/Index");
const Profile = () => import( /*  webpackChunkName:"chunk/Profile" */ "../views/Dashboard/Profile");
const AdminDashboard = () => import( /*  webpackChunkName:"chunk/AdminDashboard" */ "../views/Admin/AdminDashboard");
const AdminUserRoutes = () => import( /* webpackChunkName: "js/admin-user-routes" */ '../views/Admin/User/AdminUserRoutes.vue');
const AdminUserIndex = () => import( /* webpackChunkName: "js/admin-user" */ '../views/Admin/User/Index.vue');
const UserDashboardRoutes = () => import( /* webpackChunkName: "js/user-dashboard-routes" */ '../views/Dashboard/DashboardRoutes');

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
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                name:'dashboard',
                path: '',
                component: UserDashboard,
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile,
            },
            {
                path: ':url',
                name: 'dashboards',
                component: UserDashboardRoutes,
                props: true
            },
        ],
        meta:{
            middleware: [
                auth
            ]
        }
    },

    {
        path: '/admin',
        component: AdminDashboardLayout,
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: AdminDashboard,
            },
            {
                path: 'dashboard/:url',
                name: 'admin-dashboard-routes',
                component: AdminUserRoutes,
                props: true
            },
            {
                path: 'user',
                name: 'admin-user',
                component: AdminUserIndex,

            },
            {
                path: 'user/:url',
                name: 'admin-users',
                component: AdminUserRoutes,
                props: true,
                children:[
                    {
                        path:':id',
                        name: 'admin-users-edit',
                    }
                ]
            }

        ],
        meta: {
            middleware: [
                admin
            ]
        }
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
