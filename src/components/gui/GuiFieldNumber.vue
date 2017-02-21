<template>
    <i class="number-plus" v-on:click="plus">+</i>
    <i class="number-minus" v-on:click="minus">-</i>
    <input type="number" class="gui-input-number" v-model.number="number">
</template>

<script>
    import _ from 'lodash'
    export default {
        props: {
            number: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {}
        },
        watch: {
            number: _.debounce(function () {
                this.$emit('change', parseInt(this.number || 0, 10))
            }, 300)
        },
        methods: {
            plus: function (event) {
                this.number++
            },
            minus: function (event) {
                this.number--
            }
        }
    };
</script>