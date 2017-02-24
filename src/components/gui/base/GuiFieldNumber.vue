<template>
    <div class="gui-input-number">
        <a href="javascript:;" v-on:click="plus">+</a>
        <a href="javascript:;" v-on:click="minus">-</a>
        <input type="number" v-model.number="num">
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        // 从父组件传递过来的数据
        props: {
            number: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                num: this.number
            }
        },

        watch: {
            num: _.debounce(function () {
                // gui/ 里不操作store，只暴露给父组件一些触发方法
                this.$emit('change', parseInt(this.num || 0, 10))
            }, 300),
            number: function () {
                this.num = this.number;
            }
        },
        methods: {
            plus: function (event) {
                this.num++
            },
            minus: function (event) {
                this.num--
            }
        }
    };
</script>
<style>
    .gui-input-number {
        display: inline-block;
    }
</style>