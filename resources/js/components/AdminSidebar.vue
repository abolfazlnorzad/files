<template>
    <div class="sidebar" data-color="purple" data-background-color="white">
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-dashboard' }">
                        <i class="fa fa-tachometer-alt"></i>
                        <p>داشبورد</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-user' }">
                        <i class="fa fa-users"></i>
                        <p>کاربران</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profile' }">
                        <i class="fa fa-user"></i>
                        <p>پروفایل</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-category' }">
                        <i class="fa fa-circle-notch"></i>
                        <p>دسته بندی ها</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-payments' }">
                        <i class="fa fa-"></i>
                        <p>لیست تراکنش ها</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-membership' }">
                        <i class="fa fa-user-friends"></i>
                        <p> اشتراک های ویژه </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-file' }">
                        <i class="fa fa-file-archive"></i>
                        <p> فایل ها </p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'admin-discount' }">
                        <i class="fa fa-"></i>
                        <p> کد تخفیف</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">
                        <i class="fa fa-sign-out-alt"></i>
                        <p>خروج</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashboardSideBar",
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');

                this.$router.push({ name: 'home' });
            }
        },
    }
</script>

<style scoped>

</style>
