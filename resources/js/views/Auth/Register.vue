<template>
    <form
        @submit.prevent="register"
        class="container d-flex flex-column card py-5 my-5 mx-auto align-items-center form-width">

        <h2 class="my-5"> فرم ثبت نام </h2>

        <base-input
            name="name"
            type="name"
            label="نام"
            v-model="form.name"
        >
        </base-input>

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

        <base-input
            name="password_confirmation"
            type="password"
            label="رمز عبور خود را مجددا وارد کنید"
            v-model="form.password_confirmation"
        >
        </base-input>
        <base-btn class="btn-block">ساخت حساب کاربری</base-btn>
    </form>
</template>
<script>
    import BaseInput from "@/components/BaseInput";
    import {Form} from "vform";
    import BaseBtn from "../../components/BaseBtn";
    import BaseCheck from "../../components/BaseCheck";

    export default {
        name: "Register",
        components: {BaseBtn, BaseCheck, BaseInput},
        data() {
            return {
                form: new Form({
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,

                }),

            }
        },

        methods: {
            register() {
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
