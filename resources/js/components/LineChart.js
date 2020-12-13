import { Line   } from 'vue-chartjs';

export default {
    extends: Line  ,

    props: {
        data: {
            type: [Array, Object],
            default: null
        },
        options: {
            type: [Array, Object],
            default: null
        }
    },

    mounted() {
        this.renderChart(this.data, this.options)
    }
}
