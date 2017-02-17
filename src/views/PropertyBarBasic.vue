<template>
    <h4>条形图属性</h4>
    <prop-padding v-bind:name="'边距'"></prop-padding>
    <br>
    <prop-position></prop-position>
</template>

<script>
    import PropPadding from '../components/properties/PropPadding.vue'
    import PropPosition from '../components/properties/PropPosition.vue'
    export default {
        components: {
            PropPadding,
            PropPosition
        }
    }
</script>