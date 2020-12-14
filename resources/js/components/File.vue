<template>
    <div class="card card-stats">
        <div class="card-header card-header-success card-header-icon">
            <img width="222" class ="card-icon" :src="`/${file.image_src}`" :alt="file.name">
            <p class="card-category" v-if="file.name">{{ file.price_toman }}</p>
            <p class="card-category" >{{ file.membership_name }}</p>
            <h3 class="card-title mt-2">{{ file.name }}</h3>
           <div  class="card-category mt-4">
               <p>دسته بندی ها</p>
               <router-link
                   v-for="cate in file.categories"
                   :key="cate.slug"
                   :to="{name:'tagged',params:{slug:cate.slug}}"
                   class="badge-info rounded p-1 mr-2">
{{cate.name}}
               </router-link>
           </div>
        </div>
        <div class="card-footer">
            <div class="stats w-100 d-flex justify-content-between">
                <p class="my-auto"><i class="fa fa-clock"></i> {{ moment(file.created_at).format('jYYYY/jM') }} </p>
                <router-link :to="{name:'file-show',params:{url:'show',slug:file.slug}}" class="btn btn-info">خرید</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment-jalaali';

    export default {
        name: "File",

        props: {
            file: Object
        },

        data() {
            return {
                moment: moment
            }
        },
    }
</script>

<style scoped>

</style>
