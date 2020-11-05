<template>
<div>
    <navbar> </navbar>
    <router-view :key="$route.fullpath"></router-view>
</div>
</template>

<script>
    import Navbar from "../../components/Navbar";
    export default {
        name: "AppLayout",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
