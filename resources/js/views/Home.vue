<template>

    <div class="container mt-r5">
        <div class="row vh-100">
            <div class="col-3">
                <p>welcome</p>
            </div>
            <main-svg class="col-9"></main-svg>
        </div>
    </div>

</template>

<script>
    import MainSvg from "@/components/svg/MainSvg";

    export default {
        name: "Home",
        components: {MainSvg},
        metaInfo: {
            title: 'فروشگاه فایل | صفحه اصلی'
        },

    }
</script>
e
<style scoped>
    .mt-r5 {
        margin-top: 5rem;
    }
</style>
