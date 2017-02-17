<template>
    <property-bar-basic></property-bar-basic>
    <chart-bar-basic></chart-bar-basic>
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