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
const MembershipDashboard = () => import( /*  webpackChunkName:"chunk/MembershipDashboard" */ "../views/Dashboard/Membership.vue");
const AdminUserRoutes = () => import( /* webpackChunkName: "js/admin-user-routes" */ '../views/Admin/User/AdminUserRoutes.vue');
const AdminCategoryRoutes = () => import( /* webpackChunkName: "js/AdminCategoryRoutes" */ '../views/Admin/Category/AdminCategoryRoutes.vue');
const AdminMembershipRoutes = () => import( /* webpackChunkName: "js/AdminMembershipRoutes" */ '../views/Admin/Membership/AdminMembershipRoutes.vue');
const AdminUserIndex = () => import( /* webpackChunkName: "js/admin-user" */ '../views/Admin/User/Index.vue');
const AdminCategoryIndex = () => import( /* webpackChunkName: "js/AdminCategoryIndex" */ '../views/Admin/Category/Index');
const AdminMembershipIndex = () => import( /* webpackChunkName: "js/AdminMembershipIndex" */ '../views/Admin/Membership/Index');
const AdminFileIndex = () => import( /* webpackChunkName: "js/AdminFileIndex" */ '../views/Admin/File/Index');
const AdminPaymentIndex = () => import( /* webpackChunkName: "js/AdminPaymentIndex" */ '../views/Admin/Payment/Index');
const AdminDiscountIndex = () => import( /* webpackChunkName: "js/AdminDiscountIndex" */ '../views/Admin/Discount/Index');
const AdminDiscountRoutes = () => import( /* webpackChunkName: "js/AdminDiscountRoutes" */ '../views/Admin/Discount/AdminDiscountRoutes');
const UserDashboardRoutes = () => import( /* webpackChunkName: "js/user-dashboard-routes" */ '../views/Dashboard/DashboardRoutes');
const AdminFileRoutes = () => import( /* webpackChunkName: "js/AdminFileRoutes" */ '../views/Admin/File/AdminFileRoutes');
const FileRoutes = () => import( /* webpackChunkName: "js/FileRoutes" */ '../views/Front/File/FileRoutes');
const FileShow = () => import( /* webpackChunkName: "js/FileShow" */ '../views/Front/File/Show');

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
                    middleware: [
                        guest
                    ]
                }
            },

            {
                path: 'file/:url',
                props: true,
                component: FileRoutes,
                meta: {
                    middleware: [
                        auth
                    ]
                },
                children: [
                    {
                        path: ':slug',
                        component: FileShow,
                        name: 'file-show',
                    }
                ]
            }


        ],
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                name: 'dashboard',
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
        meta: {
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
                path: 'payments',
                name: 'admin-payments',
                component: AdminPaymentIndex,

            },
            {
                path: 'user/:url',
                name: 'admin-users',
                component: AdminUserRoutes,
                props: true,
                children: [
                    {
                        path: ':id',
                        name: 'admin-users-edit',
                    }
                ]
            },
            {
                path: 'category',
                name: 'admin-category',
                component: AdminCategoryIndex,
                props: true,

            },
            {
                path: 'category/:url',
                name: 'admin-categories',
                component: AdminCategoryRoutes,
                props: true,
                children: [
                    {
                        path: ':slug',
                        name: 'admin-categories-edit',
                    }
                ]
            },
            {
                path: 'membership',
                name: 'admin-membership',
                component: AdminMembershipIndex
            },
            {
                path: 'membership/:url',
                name: 'admin-memberships',
                component: AdminMembershipRoutes,
                props: true,
                children: [
                    {
                        path: ':id',
                        name: 'admin-membership-edit'
                    }
                ]
            },
            {
                path: 'file',
                name: 'admin-file',
                component: AdminFileIndex
            },
            {
                path: 'file/:url',
                name: 'admin-files',
                component: AdminFileRoutes,
                props: true,
                children: [
                    {
                        path: ':slug',
                        name: 'admin-file-edit'
                    }
                ]
            },
            {
                path: 'discount',
                name: 'admin-discount',
                component: AdminDiscountIndex
            },
            {
                path: 'discount/:url',
                name: 'admin-discounts',
                props: true,
                component: AdminDiscountRoutes,
                children: [
                    {
                        path: ':code',
                        name: 'admin-discount-edit'
                    }
                ]
            },


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
