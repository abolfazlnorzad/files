<template>
    <component :is="componentName"></component>

</template>

<script>
    import Create from "../Category/Create";
    import Edit from "../Category/Edit";
    import NotFound from "@/views/errors/NotFound";

    export default {
        name: "AdminCategoryRoutes",
        components: {
            NotFound,
            Create,
            Edit
        },
        props: ['url'],
        computed: {
            componentName() {
                return ['create', 'edit'].includes(this.url) ? this.url : 'not-found'
            }
        }
    }

</script>

<style scoped>

</style>
