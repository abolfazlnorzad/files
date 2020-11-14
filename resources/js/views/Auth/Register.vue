<template>
    <form class="d-flex flex-column align-items-center mt-5 login-width mx-auto card py-5 container"
          @submit.prevent="register"
    >
        <h3>فرم ثبت نام</h3>
        <base-input name="name"
                    type="name"
                    label="نام"
                    v-model="form.name"
        ></base-input>
        <base-input name="email"
                    type="email"
                    label="ایمیل"
                    v-model="form.email"
        ></base-input>
        <base-input name="password"
                    type="password"
                    label="رمز عبور"
                    v-model="form.password"
        ></base-input>
        <base-input name="password_confirmation"
                    type="password"
                    label="تایید رمز عبور"
                    v-model="form.password_confirmation"
        ></base-input>
        <base-btn :loading="form.busy"
                  btn="success"
                  class="btn-block mt-3"
        >ثبت نام</base-btn>
    </form>
</template>

<script>
    import { Form } from "vform";

    export default {
        name: "Register",

        metaInfo: {
            title: 'فرم ثبت نام'
        },

        data() {
            return {
                form: new Form({
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                })
            }
        },

        methods: {
            register() {
                this.$store.dispatch('auth/register',this.form)
                .then(({data})=>{

                })
            }
        },
    }
</script>

<style scoped>

    .login-width {
        width: 360px;
    }
</style>
