<template>
<tr>
    <td>
        <img :src="'/' + file.image_src" :alt="file.name" width="77">

    </td>
    <td>
        {{ file.name }}
    </td>
    <td>
        {{ file.price_toman }}
    </td>
    <td>
        <button class="btn btn-info">دانلود</button>
    </td>
</tr>
</template>

<script>
    export default {
        name: "File",

        props: ['file']
    }
</script>

<style scoped>

</style>
