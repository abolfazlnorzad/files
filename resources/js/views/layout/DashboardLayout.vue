<template>
    <perfect-scrollbar>
        <dashboard-side-bar></dashboard-side-bar>
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
    import Navbar from "@/components/Navbar";
    import DashboardSideBar from "@/components/DashboardSideBar";

    export default {
        name: "DashboardLayout",

        components: {
            Navbar,
            DashboardSideBar
        }
    }
</script>

<style scoped>

</style>
