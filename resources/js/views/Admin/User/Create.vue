<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-header-primary d-flex justify-content-between">
                <h4 class="card-title ">ایجاد کاربر جدید</h4>
                <router-link class="btn btn-secondary" :to="{name:'admin-user'}">
                    لیست کاربران
                    <i class="fa fa-arrow-left"></i>
                </router-link>
            </div>
            <div class="card-body">

                <form class="my-5" @submit.prevent="storeUser">

                    <base-input label="نام"
                                name="name"
                                v-model="form.name"
                    />
                    <base-input label="ایمیل"
                                name="email"
                                type="email"
                                v-model="form.email"
                    />
                    <base-input label="رمز عبور"
                                name="password"
                                type="password"
                                v-model="form.password"
                    />
                    <base-check label="ادمین"
                                name="isAdmin"
                                v-model="form.isAdmin"
                    />

                    <base-btn :loading="form.busy">ایجاد حساب کاربری جدید</base-btn>

                </form>

            </div>
        </div>
    </div>
</template>


<script>
    import { Form } from 'vform';

    export default {
        name: "Create",
        metaInfo: {
            title: 'ایجاد کاربر جدید'
        },
        data() {
            return {
                form: new Form({
                    name: null,
                    email: null,
                    password: 'password',
                    isAdmin: false,
                })
            }
        },
        methods:{
            storeUser(){
                this.form.post('/api/admin/users', this.form)
                .then(()=>{
                    this.$router.push({name:'admin-user'})
                })
            }
        }
    }
</script>

<style scoped>

</style>
