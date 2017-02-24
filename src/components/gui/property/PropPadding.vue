<template>
    <div class="gui-group-container">
        <span>
            <span class="datav-icon gui-group-arrow" v-on:click="testclick">{{toggleName}}</span>
            <span data-reactid="">{{name}}</span>
        </span>
        <div class="gui-group-container" v-show="toggle">
            <div>
                <span class="gui-field-name">上边距</span>
                <gui-field-number></gui-field-number>
            </div>
            <div>
                <span class="gui-field-name">下边距</span>
                <gui-field-number></gui-field-number>
            </div>
            <div>
                <span class="gui-field-name">左边距</span>
                <gui-field-number></gui-field-number>
            </div>
            <div>
                <span class="gui-field-name">右边距</span>
                <gui-field-number></gui-field-number>
            </div>
        </div>
    </div>
</template>
<script>
import GuiFieldNumber from '../base/GuiFieldNumber.vue';
export default {
    props: {
        name: String
    },
    data() {
        return {
            toggle: true
        }
    },
    computed: {
        toggleName: function () {
            return this.toggle ? '隐藏' : '展开';
        }
    },
    methods: {
        testclick: function (e) {
            console.log('test click');
            this.toggle = !this.toggle;
            console.log(this.toggle);
        }
    },
    components: {
        GuiFieldNumber
    }
}
</script>