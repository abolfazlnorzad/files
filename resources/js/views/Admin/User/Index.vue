<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-header-primary d-flex justify-content-between">
                <h4 class="card-title ">لیست کاربران سایت</h4>
                <router-link class="btn btn-info" :to="{name:'admin-users',params:{url:'create'}}">
                    <i class="fa fa-user-plus"></i>
                    ساخت کاربر جدید
                </router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead class=" text-primary">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                نام
                            </th>
                            <th>
                                ایمیل
                            </th>
                            <th>
                                نوع حساب کاربری
                            </th>
                            <th>
                                تاریخ ساخت حساب
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(user,index) in users.data" :key="user.id">
                            <td>
                                {{ user.id }}
                            </td>
                            <td>
                                {{ user.name }}
                            </td>
                            <td>
                                {{ user.email }}
                            </td>
                            <td>
                                {{ user.type }}

                            </td>
                            <td>
                                {{ moment(user.created_at ).format('jYY/jM/jD')}}
                            </td>
                            <td>
                                <router-link
                                    :to="{name:'admin-users-edit',params:{url:'edit',id:user.id}}"
                                    class="btn btn-info">ویرایش
                                </router-link>
                                <button
                                    @click="deleteUser(user.id,index)"
                                    class="btn btn-danger">حذف
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <pagination :data="users" @pagination-change-page="getUsers"></pagination>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment  from 'moment-jalaali';

    import axios from "@/plugin/axios";

    export default {
        name: "Index",

        metaInfo: {
            title: 'لیست کاربران'
        },

        data() {
            return {
                moment,
                users: {}
            }
        },

        created() {
            this.getUsers(this.$route.query.page)
        },
        methods: {
            deleteUser(id, index) {
                axios.delete(`/api/admin/users/${id}`)
                    .then(() => {
                        this.users.data.splice(index, 1)
                    })
            },
            getUsers(page = 1) {
                axios.get(`/api/admin/users?page=${page}`)
                    .then(({data}) => {
                        this.users = data;
                        window.history.replaceState('User','User',`/admin/user?page=${page}`)
                    })
            }
        },
    }
</script>

<style scoped>

</style>
