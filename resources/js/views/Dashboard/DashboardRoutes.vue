<template>
    <component :is="componentName"></component>
</template>

<script>
    import NotFound from "@/views/errors/NotFound";
    import Membership from "./Membership";
    import MyFiles from "./MyFiles";
    export default {
        name: "DashboardRoutes",

        components: {
            NotFound,
            Membership,
            MyFiles
        },

        props: ['url'],

        computed: {
            componentName() {
                return ['membership','my-files'].includes(this.url) ? this.url : 'not-found'
            }
        }
    }
</script>

<style scoped>

</style>
