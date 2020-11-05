<template>
    <component :is="componentName"></component>

</template>

<script>

    import Login from "./Login";
    import Register from "./Register";
    export default {
        name: "AuthRoutes",
        components: {Register, Login},
        props: ['url'],
        computed: {
            componentName() {
                return ['login', 'register'].includes(this.url) ? this.url : 'home';
            }
        }
    }
</script>

<style scoped>

</style>
