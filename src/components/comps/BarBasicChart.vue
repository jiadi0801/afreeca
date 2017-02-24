<template>
    <div class="bar-basic-chart" vue-id="id" :style="style">
    </div>
</template>
<script>
    export default {
        props: {
            chartData: {
                type: Object,
                default() {return {}}
            }
        },
        data() {
            return {}
        },
        computed: {
            id() {
                return this.chartData.comp_id
            },
            style() {
                console.log('style', this.chartData)
                return {
                    width: this.chartData.rect.w + 'px',
                    height: this.chartData.rect.h + 'px'
                }
            }
        },
        methods: {
        }
    }
</script>

<style>
    .bar-basic-chart {
        background: #3ff;
    }
</style>