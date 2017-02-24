<template>
    <div class="circle-example-chart" vue-id="id" :style="style"></div>
</template>

<script>
    // extend base-chart
    export default {
        props: {
            chartData: {
                type: Object,
                default() {return {}}
            }
        },
        computed: {
            style() {
                var r = this.chartData.circle.r
                return {
                    height: r * 2 + 'px',
                    width: r * 2 + 'px',
                    border: 'solid 1px #e00',
                    borderRadius: r + 'px'
                }
            }
        }
    }
</script>

<style>
    .circle-example-chart {
        background: #ff4;
    }
</style>