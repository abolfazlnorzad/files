<template>
    <component :is="componentName"></component>
</template>

<script>
    import NotFound from "@/views/errors/NotFound";
    import Membership from "./Membership";
    import MyFiles from "./MyFiles";
    import Profile from "./Profile";
    export default {
        name: "DashboardRoutes",

        components: {
            NotFound,
            Membership,
            MyFiles,
            Profile
        },

        props: ['url'],

        computed: {
            componentName() {
                return ['membership','my-files','profile'].includes(this.url) ? this.url : 'not-found'
            }
        }
    }
</script>

<style scoped>

</style>
