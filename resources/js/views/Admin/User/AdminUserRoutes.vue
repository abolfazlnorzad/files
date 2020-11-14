<template>
    <component :is="componentName"></component>
</template>

<script>
    import NotFound from "@/views/errors/NotFound";

    export default {
        name: "AdminUserRoutes",

        components: {
            NotFound,
        },

        props: ['url'],

        computed: {
            componentName() {
                return [].includes(this.url) ? this.url : 'not-found'
            }
        }
    }
</script>

<style scoped>

</style>
