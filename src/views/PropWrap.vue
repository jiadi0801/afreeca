<template>
    <div class="prop-wrap">
        <h3>{{id}}</h3>
        <component :is="mapping[type]" :compData="compData"></component>
    </div>
</template>

<script>
    import mapping from '../config/prop-type-mapping'
    import BarBasicProp from '../components/comps/BarBasicProp.vue'
    import CircleExampleProp from '../components/comps/CircleExampleProp.vue'

    export default {
        props: {
            data: {
                type: Object,
                default() {return {}}
            }
        },
        data() {
            return {
                mapping: mapping
            }
        },
        computed: {
            id() {
                return this.data.comp_id
            },
            type() {
                return this.data.type
            },
            compData: {
                get() {
                    return this.data
                },
                set(val) {
                    // commit 一个comp对象，然后附加一些id信息定位到state里
                }
            }
        },
        components: {
            BarBasicProp, CircleExampleProp
        }
    }
</script>