<template>
    <div class="card card-stats">
        <div class="card-header card-header-success card-header-icon">
            <div class="card-icon">
                <i class="fa fa-file"></i>
            </div>
            <p class="card-category" v-if="file.name">{{ file.price_toman }}</p>
            <p class="card-category" v-if="file.membership_id">{{ file.membership_name }}</p>
            <h3 class="card-title mt-2">{{ file.name }}</h3>
            <p class="card-category mt-4">دسته بندی ها</p>
        </div>
        <div class="card-footer">
            <div class="stats w-100 d-flex justify-content-between">
                <p class="my-auto"><i class="fa fa-clock"></i> {{ moment(file.created_at).format('jYYYY/jM') }} </p>
                <button class="btn btn-info">خرید</button>
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
