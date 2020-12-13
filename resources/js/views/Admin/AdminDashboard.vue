<template>
    <div class="col-md-12">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6" v-for="(payment, index) in data" :key="index">
                <div class="card card-stats">
                    <div class="card-header card-header-danger card-header-icon my-3">
                        <div class="card-icon">
                            <i class="fa fa-coins"></i>
                        </div>
                        <p class="card-category">{{ payment.title }}</p>
                        <h4 class="card-title">{{ payment.price }}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <dashboard-chart v-for="(chart, index) in charts"
                             :key="index"
                             :chart="chart"
                             :index="index"
                             laoded
            ></dashboard-chart>
        </div>
    </div>
</template>

<script>
    import DashboardChart from "@/components/DashboardChart";

    export default {
        name: "AdminIndex",

        components: {
            DashboardChart
        },

        metaInfo: {
            title: 'داشبورد ادمین'
        },

        data() {
            return {
                data: {},
                charts: null,
                loaded: false,

            }
        },

        async mounted() {
            this.loaded = false;
            let {data} = await axios.get('/api/admin/charts');
            this.charts = data;
            this.loaded = true;
        },
        created() {
            this.getInfo();
        },

        methods: {
            async getInfo() {
                let {data} = await axios.get('/api/admin/dashboard');
                this.data = {
                    price: {
                        'title': 'مجوعه فروش سایت',
                        'price': data.file.price + data.membership.price
                    },
                    price_file: {
                        'title': 'مجوعه فروش فایل',
                        'price': data.file.price
                    },
                    price_membership: {
                        'title': 'مجوعه فروش اشتراک ویژه',
                        'price': data.membership.price
                    },
                    discounted_price: {
                        'title': 'مجوعه تخفیف فایل',
                        'price': data.file.discount_price
                    },
                }
            }
        },


    }
</script>

<style scoped>

</style>
