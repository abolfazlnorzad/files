<template>

</template>

<script>
    export default {
        name: "notify",
        props: {
            data: {
                default: null,
            }
        },
        created() {
            if (this.data) {
                swal.fire(
                    this.data.title,
                    this.data.text,
                    this.data.icon,
                    this.data.confirm_text
                )
            }
        }

    }
</script>

<style scoped>

</style>
