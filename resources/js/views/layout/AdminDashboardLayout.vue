<template>
    <perfect-scrollbar>
        <admin-sidebar></admin-sidebar>
        <div class="main-panel">
            <navbar></navbar>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </perfect-scrollbar>
</template>

<script>
    import AdminSidebar from '@/components/AdminSidebar';
    import Navbar from '@/components/Navbar';

    export default {
        name: "AdminDashboardLayout",

        components: {
            AdminSidebar, Navbar
        }
    }
</script>

<style scoped>

</style>
