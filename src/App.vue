<template>
    <div class="paper-wrap" >
        <property-bar-basic></property-bar-basic>
        <chart-bar-basic></chart-bar-basic>
    </div>
    <div>
        没有计算resize时的坐标
    </div>
</template>

<script>
    import PropertyBarBasic from './views/PropertyBarBasic.vue'
    import ChartBarBasic from './views/ChartBarBasic.vue'
    import store from './store'
    export default {
        store,
        components: {
            PropertyBarBasic,
            ChartBarBasic
        }
    }
</script>
<style>
    .paper-wrap {
        height: 400px;
        background: #bbb;
    }
</style>