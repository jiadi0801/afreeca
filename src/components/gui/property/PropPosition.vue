<template>
    <div class="gui-prop-position">
        <div style="position: relative;">图表位置</div>
        <div style="display: inline-block;">
            <gui-field-number :number="position.x" v-on:change="updateX"></gui-field-number>
            <div>x坐标</div>
        </div>
        <div style="display: inline-block;">
            <gui-field-number :number="position.y" v-on:change="updateY"></gui-field-number>
            <div>y坐标</div>
        </div>
    </div>
</template>

<script>
    import GuiFieldNumber from '../base/GuiFieldNumber.vue'

    export default {
        props: {
            pos: {
                type: Object,
                default() {return {x:0, y: 0}}
            },
            id: String
        },
        data() {
            return {}
        },
        computed: {
            position: {
                get() {
                    return this.pos
                },
                set(val) {
                    this.$store.commit('changePosition', {comp_id: this.id, position: val})
                }
            }
        },
        methods: {
            updateX: function (num) {
                this.position = Object.assign(this.position, {x: num})
            },
            updateY: function (num) {
                this.position = Object.assign(this.position, {y: num})
            }
        },
        components: {
            GuiFieldNumber
        }
    }
</script>