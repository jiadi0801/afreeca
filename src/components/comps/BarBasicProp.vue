<template>
    <div class="bar-basic-prop">
        <prop-position :id="id" :pos="position"></prop-position>
    </div>
</template>

<script>
    import PropPosition from '../gui/property/PropPosition.vue'

    export default {
        props: {
            compData: {
                type: Object,
                default() {return {}}
            }
        },
        computed: {
            id() {
                return this.compData.comp_id
            },
            position() {
                var attr = this.compData.attr
                console.log('attr', attr)
                return {
                    x: attr.x,
                    y: attr.y
                }
            }
        },
        components: {
            PropPosition
        }
    }
</script>