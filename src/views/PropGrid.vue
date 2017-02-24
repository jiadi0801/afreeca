<template>
    <div class="prop-grid-wrap">
        <prop-wrap v-for="comp in comps" :data="comp"></prop-wrap>
    </div>
</template>
<script>
    import PropWrap from './PropWrap.vue'

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
            PropWrap
        }
    }
</script>