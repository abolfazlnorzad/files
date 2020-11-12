<template>
    <component :is="componentName"></component>

</template>

<script>

    import Login from "./Login";
    import Register from "./Register";
    import NotFound from "../errors/NotFound";
    export default {
        name: "AuthRoutes",
        components: {Register, Login},
        props: ['url'],
        computed: {
            componentName() {
                return ['login', 'register'].includes(this.url) ? this.url : NotFound;
            }
        }
    }
</script>

<style scoped>

</style>
