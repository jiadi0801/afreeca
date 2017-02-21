<template>
    <div>
        <div style="position: relative; top: -12px;">图表位置</div>
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
    import GuiFieldNumber from '../gui/GuiFieldNumber.vue'

    export default {
        data() {
            return {}
        },
        computed: {
            position: {
                get: function () {
                    return this.$store.state.position
                },
                set: function (val) {
                    console.log('val', val)
                    this.$store.commit('changePosition', {position: val})
                }
            }
        },
        methods: {
            updateX: function (num) {
                this.position = Object.assign(this.position, {x: num})
                console.log('updateX', this.position)
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