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
                            <th @click="changeSort('i')"># <i v-show="this.sortBy==='i'" class="fa "
                                                              :class="sortDirClass"></i>
                            </th>
                            <th @click="changeSort('n')">نام<i v-show="this.sortBy==='n'" class="fa "
                                                               :class="sortDirClass"></i>
                            </th>
                            <th @click="changeSort('d')">توضیحات<i v-show="this.sortBy==='d'"
                                                                   class="fa " :class="sortDirClass"></i></th>
                            <th @click="changeSort('p')">قیمت<i v-show="this.sortBy==='p'" class="fa "
                                                                :class="sortDirClass"></i>
                            </th>
                            <th @click="changeSort('m')">اشتراک ویژه<i v-show="this.sortBy==='m'"
                                                                       class="fa " :class="sortDirClass"></i></th>
                            <th @click="changeSort('ca')">تاریخ ساخت فایل<i v-show="this.sortBy==='ca'"
                                                                            class="fa " :class="sortDirClass"></i></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(file, index) in files.data">
                            <th>{{ file.id }}</th>
                            <th>{{ file.name }}</th>
                            <th>{{ file.description }}</th>
                            <th>{{ file.price }}</th>
                            <th>{{ file.membership_name }}</th>
                            <th>{{ moment(file.created_at).format('jYY/jM/jD') }}</th>
                            <th>
                                <a class="btn btn-primary"
                                   :href="`/download/${file.slug}?access_token=${$store.state.auth.token}`">دانلود</a>

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
    import moment from 'moment-jalaali';
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Index",
        metaInfo: {
            title: 'لیست فایل ها'
        },
        data() {
            return {
                moment,
                sortBy: null,
                sortDir: null,
            }
        },

        created() {
            this.sortBy = this.$route.query.sortBy ? this.$route.query.sortBy  : 'i';
            this.sortDir = this.$route.query.sortDir ? this.$route.query.sortDir : 'asc';
            this.getFiles()
        },
        computed: {
            ...mapState('file', ['files']),
            sortDirClass() {
                return this.sortDir === 'asc' ? 'fa-arrow-down' : 'fa-arrow-up'
            }
        },

        methods: {
            ...mapActions('file', ['deleteFile']),
            getFiles(page = 1) {
                let queries = this.$route.query;
                queries.page = page;
                queries.sortBy = this.sortBy;
                queries.sortDir = this.sortDir;
                this.$store.dispatch('file/getFiles', queries);
            },
            changeSort(item) {
                if (this.sortBy == item) {
                    this.sortDir = this.sortDir == 'asc' ? 'desc' : 'asc'
                }
                this.sortBy = item;
                this.getFiles(this.$route.query.page)

            }
        },

    }
</script>

<style scoped>

</style>
