<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card card-profile">
                    <div class="card-avatar">
                        <a href="#pablo">
                            <img class="img" :src="'/' + file.image_src">
                        </a>
                    </div>
                    <div class="card-body">
                        <h6 class="card-category text-gray">
                            قیمت: {{ file.price_toman }} /
                            اشتراک ویژه: {{ file.membership_name }}
                        </h6>
                        <h4 class="card-title">{{ file.name }}</h4>
                        <p class="card-description mb-3">
                            {{ file.description }}
                        </p>
                        <div class="card-footer">
                            <form action="/buy" method="POST">
                                <input type="hidden" name="_token" :value="csrf">
                                <input type="hidden" name="file_id" :value="item.file_id">
                                <input type="hidden" name="discount_id" :value="item.discount_id">
                                <input type="hidden" name="access_token" :value="$store.state.auth.token">

                                <button class="btn btn-primary btn-round" v-show="! form.discount">خرید</button>
                            </form>

                            <base-btn v-show="form.discount"
                                      @click="applyDiscount"
                                      btn="info">اعمال کد تخفیف
                            </base-btn>
                            <p>قیمت تمام شده : {{ item.price }}</p>
                            <div class="col-md-3">
                                <base-input label="کد تخفیف"
                                            v-if="file.price && ! item.discount_id"
                                            name="discount" v-model="form.discount"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h4>فایل های مربوطه</h4>
        <div class="row mt-5" id="related_files">
            <div class="col-md-4 mt-5" v-for="item in file.related_files" :key="item.id">
                <div class="card card-profile">
                    <div class="card-avatar">
                        <a href="#">
                            <img class="img" :src="'/' + item.image_src">
                        </a>
                    </div>
                    <div class="card-body">
                        <h6 class="card-category text-gray">
                            قیمت: {{ item.price_toman }}/
                            اشتراک ویژه: {{ item.membership_name }}
                        </h6>
                        <h4 class="card-title">{{ item.name }}</h4>
                        <p class="card-description mb-3">
                            {{ item.description }}
                        </p>
                        <div class="card-footer d-flex justify-content-center">
                            <router-link :to="{ name: 'file-show', params: { url: 'show', slug: item.slug } }"
                                         class="btn btn-primary btn-round">خرید
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Form} from 'vform';

    export default {
        name: "Show",
        metaInfo() {
            return {
                title: 'فایل ' + this.slug
            }
        },
        data() {
            return {
                form: new Form({
                    discount: null,
                    price: null
                }),
                file: {},
                slug: this.$route.params.slug,
                item: {
                    price: null,
                    discount_id: null,
                    file_id: null,
                }
            }
        },
        computed: {
            csrf() {
                return window.csrf;
            }
        },
        methods: {
            applyDiscount() {
                axios.post('/api/discount', this.form)
                    .then(({data}) => {
                        this.form = {};
                        this.item.discount_id = data.id;
                        this.item.price = data.price+ '000';
                    })

            }
        },
        created() {
            axios.get(`/api/file/${this.$route.params.slug}`)
                .then(({data}) => {
                    this.file = data;
                    this.form.price = data.price;
                    this.item.price = data.price+ '000';
                    this.item.file_id = data.id;
                })
        }
    }

</script>
<style scoped>
    .card-footer {
        border-top: 1px solid #eee;
    }

    #related_files {
        border-top: 1px solid #d1d1d1;
    }
</style>
