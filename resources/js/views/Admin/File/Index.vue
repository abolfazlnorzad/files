<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-header-primary d-flex justify-content-between">
                <h4 class="card-title pt-2">لیست فایل های سایت</h4>
                <router-link :to="{ name: 'admin-files', params: { url: 'create' } }" class="btn btn-info"><i
                    class="fa fa-user-plus"></i> فایل جدید
                </router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead class="text-primary">
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>توضیحات</th>
                            <th>قیمت</th>
                            <th>اشتراک ویژه</th>
                            <th>تاریخ ساخت فایل</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(file, index) in files.data">
                            <th>{{ file.id }}</th>
                            <th>{{ file.name }}</th>
                            <th>{{ file.description }}</th>
                            <th>{{ file.price }}</th>
                            <th>{{ file.membership_name }}</th>
                            <th>{{ file.created_at }}</th>
                            <th>
                                <router-link :to="{ name: 'admin-file-edit', params: { url: 'edit', slug: file.slug } }"
                                             class="btn btn-info">
                                    ویرایش
                                </router-link>
                                <button class="btn btn-danger" @click="deleteFile({ slug: file.slug, index: index })">
                                    حذف
                                </button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                    <pagination :data="files" @pagination-change-page="getFiles"></pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex';

    export default {
        name: "Index",
        metaInfo: {
            title: 'لیست فایل ها'
        },

        created() {
            this.getFiles(this.$route.query.page)
        },
        computed: {...mapState('file',['files'])},

        methods: {...mapActions('file', ['getFiles','deleteFile'])},

    }
</script>

<style scoped>

</style>
