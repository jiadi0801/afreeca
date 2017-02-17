<template>
    <div>
        <span style="position: relative; top: -12px;">图表位置</span>
        <div style="display: inline-block;">
            <gui-field-number :number="coor.x"></gui-field-number>
            <div>x坐标</div>
        </div>
        <div style="display: inline-block;">
            <gui-field-number :number="coor.y"></gui-field-number>
            <div>y坐标</div>
        </div>
    </div>
</template>

<script>
    import GuiFieldNumber from '../gui/GuiFieldNumber.vue'

    export default {
        data() {
            return {
            }
        },
        computed: {
            coor() {
                return this.$store.state.coor;
            }
        },
        components: {
            GuiFieldNumber
        }
    }
</script>