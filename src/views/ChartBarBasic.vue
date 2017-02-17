<template>
    <div v-bind:class="basicWrap" :style="style"></div>
</template>
<script>
    export default {
        data() {
            return {
                basicWrap: 'chart-bar-basic-wrap'
            }
        },
        computed: {
            position() {
                console.log(this)
                return  this.$store.state.coor
            },
            style() {
                var left = this.position.x + 'px'
                var top = this.position.y + 'px'
                return {left, top}
            }
        }
    }
</script>
<style>
    .chart-bar-basic-wrap {
        position: absolute;
        width: 100px;
        height: 100px;
        background: #42B983;
    }
</style>