<template>
    <component :is="componentName"></component>
</template>

<script>
    import NotFound from "@/views/errors/NotFound";
    import Create from "./Create";
    import Edit from "./Edit";


    export default {
        name: "AdminUserRoutes",
        components: {
            NotFound,
            Create,
            Edit
        },

        props: ['url'],

        computed: {
            componentName() {
                return ['create','edit'].includes(this.url) ? this.url : 'not-found'
            }
        }
    }
</script>

<style scoped>

</style>
