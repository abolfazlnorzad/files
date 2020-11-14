<template>
    <form class="d-flex flex-column align-items-center mt-5 login-width mx-auto card py-5 container"
          @submit.prevent="login"
    >
        <h3>فرم ورود</h3>
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
        <base-check name="remember"
                    field="remember"
                    label="مرا به خاطر بسپار"
                    v-model="form.remember"
        ></base-check>
        <a href="#" class="my-2">ایا رمز عبور خود را فراموش کرده اید؟</a>
        <base-btn :loading="form.busy" class="btn-block">ورود</base-btn>
    </form>
</template>

<script>
    import {Form} from 'vform'
    import axios from "../../plugin/axios";

    export default {
        name: "Login",

        metaInfo: {
            title: 'فرم ورود'
        },

        data() {
            return {
                form: new Form({
                    email: null,
                    password: null,
                    remember: false,
                })
            }
        },

        methods: {
            login() {
                this.$store.dispatch('auth/login',this.form)
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
