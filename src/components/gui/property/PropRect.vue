<template>
    <div v-bind:vue-id="id">
        <div style="position: relative;">图表大小</div>
        <div style="display: inline-block;">
            <gui-field-number :number="rect.w" v-on:change="updateW"></gui-field-number>
            <div>width宽度</div>
        </div>
        <div style="display: inline-block;">
            <gui-field-number :number="rect.h" v-on:change="updateH"></gui-field-number>
            <div>height高度</div>
        </div>
    </div>
</template>

<script>
    import GuiFieldNumber from '../base/GuiFieldNumber.vue'

    export default {
        data() {
            return {
                id: 0
            }
        },
        computed: {
            rect: {
                get: function () {

                    // 初始load时并没有rect属性，点击click才有rect属性
                    return this.$store.state.scenes[0].layout.comps[this.id].rect
                },
                set: function (val) {
                    // set 里不对val设值，应该由store或者methods更新
                    console.log('val', val)
                    this.$store.commit('changeRect', {rect: val})
                }
            }
        },
        methods: {
            updateW: function (num) {
                // 所有对象更新都用assign方法，以便vue监控到
                this.rect = Object.assign(this.rect, {w: num})
                console.log('updateW', this.rect)
            },
            updateH: function (num) {
                this.rect = Object.assign(this.rect, {h: num})
            }
        },
        components: {
            GuiFieldNumber
        }
    }
</script>