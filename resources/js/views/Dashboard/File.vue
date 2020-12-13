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
            <button @click="dlFile()" class="btn btn-info">ایجاد لینک دانلود</button>
            <a v-if="download.link" class="btn btn-default" :href="`/download-zip/${download.link}?access_token=${token}`">دانلود </a>
        </td>
    </tr>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "File",
        computed: {
            ...mapState('auth',['token'])
        },
        props: ['file'],
        data() {
            return {
                download: {}
            }
        },

        methods: {
            async dlFile() {
                let {data} = await axios.get(`/api/generate-zip/${this.file.slug}`)
                this.download = data;
                swal.fire('عملیات موفقیت آمیز بود',this.download.password,'success','ok');
            }
        },
    }
</script>

<style scoped>

</style>
