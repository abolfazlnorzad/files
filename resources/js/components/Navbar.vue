<template>
    <div class="w-100" id="bg-navbar">
        <div class="container">
            <nav class="row navbar navbar-expand-lg navbar-light">
                <router-link class="navbar-brand" :to="{ name: 'home' }">وب آموز</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ name: 'home' }">صفحه اصلی</router-link>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <template v-if="! isLoggedIn">
                            <router-link :to="{ name: 'auth', params: { url: 'register' } }">
                                <base-btn class="my-2 my-sm-0 mr-2" btn="success">ثبت نام</base-btn>
                            </router-link>
                            <router-link :to="{ name: 'auth', params: { url: 'login'} }">
                                <base-btn class="my-2 my-sm-0 mr-2">ورود</base-btn>
                            </router-link>
                        </template>
                        <template v-else>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle"
                                        @click="dropDownShow = dropDownShow ?  null : 'show'">
                                    {{user.name }}
                                </button>
                                <div class="dropdown-menu" :class="dropDownShow">
                                    <router-link class="dropdown-item" :to="{name:'dashboards',params:{url:'profile'}}">پروفایل</router-link>
                                    <router-link
                                        :to="{name:'admin-dashboard'}"
                                        v-if="user.isAdmin==true"
                                        class="dropdown-item" >پنل مدیریت</router-link>
                                    <router-link
                                        :to="{name:'dashboard'}"

                                        class="dropdown-item" >داشبورد</router-link>
                                    <a class="dropdown-item" href="#" @click="logout">خروج</a>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Navbar",
        data() {
            return {
                dropDownShow: null
            }
        },
        computed: {
            ...mapGetters('auth', ['user', 'isLoggedIn'])
        },
        methods: {
            logout() {
                this.$store.dispatch('auth/logout')
                .then(()=>{
                    this.$router.push({name: 'home'})
                })


            }
        }
    }
</script>

<style scoped>
    #bg-navbar {
        background-color: #fff;
    }
</style>
