<template>
    <div class="paper-grid-wrap" >
        <chart-wrap v-for="comp in comps" :data="comp"></chart-wrap>
    </div>
</template>
<script>
    import ChartWrap from './ChartWrap.vue'

    export default {
        data() {
            return {}
        },
        computed: {
            comps: {
                get() {
                    return this.$store.state.scenes[0].layout.comps;
                },
                set(newComps) {

                }
            }
        },
        components: {
            ChartWrap
        }
    }
</script>
<style>
    .paper-grid-wrap {
        position: relative;
        height: 400px;
        background: #bbb;
    }
</style>