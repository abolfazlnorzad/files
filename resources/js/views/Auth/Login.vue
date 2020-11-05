<template>
    <form
        @submit.prevent="login"
        class="container d-flex flex-column card py-5 my-5 mx-auto align-items-center form-width">

        <h2 class="my-5"> فرم ورود </h2>

        <base-input
            name="email"
            type="email"
            label="ایمیل"
            v-model="form.email"
        >
        </base-input>

        <base-input
            name="password"
            type="password"
            label="رمز عبور"
            v-model="form.password"
        >
        </base-input>
        <base-check
            name="remember"
            field="checkbox"
            label="مرا بخاطر بسپار"
            v-model="form.remember"
        >
        </base-check>
        <a href="#" class="my-4"> آیا رمز عبور خود را فراموش کرده اید ؟ </a>
        <base-btn class="btn-block">ورود به حساب کاربری</base-btn>
    </form>
</template>

<script>
    import BaseInput from "@/components/BaseInput";
    import {Form} from "vform";
    import BaseCheck from "../../components/BaseCheck";
    import BaseBtn from "../../components/BaseBtn";


    export default {
        name: "Login",
        components: {BaseBtn, BaseCheck, BaseInput},
        data() {
            return {
                form: new Form({
                    email: null,
                    password: null,
                    remember: false,
                }),

            }
        },

        methods: {
            login() {
                //
            }
        }

    }
</script>

<style scoped>
    .form-width {
        width: 400px !important;
    }
</style>
