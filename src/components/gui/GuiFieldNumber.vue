<template>
    <i class="number-plus" v-on:click="plus">+</i>
    <i class="number-minus" v-on:click="minus">-</i>
    <input type="text" class="gui-input-number" v-model.number="number">
</template>

<script>
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
        methods: {
            plus: function (event) {
                this.number++;
            },
            minus: function (event) {
                this.number--;
            }
        }
    };
</script>