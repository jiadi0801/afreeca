<template>
    <div id="app">
        <h1>vue</h1>
        <input type="button" value="new one" @click.once="newone">
        <div class="layout">
            <div vue-id="paper-layout-id" class="layout-right">
                <prop-grid></prop-grid>
            </div>
            <div vue-id="paper-prop-id" class="layout-auto">
                <paper-grid></paper-grid>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import store from './store'
    import PaperGrid from './views/PaperGrid.vue'
    import PropGrid from './views/PropGrid.vue'
    export default {
        store,
        methods: {
            newone: function (event) {
                console.log(event.target.attributes)
                event.target.attributes['value'].value = 'done'
                var comp = {
                    comp_id: 'uuid3',
                    type: 'rect',
                    attr: {
                        x: 600,
                        y: 90,
                        zIndex: 1
                    },
                    rect: {
                        w: 130,
                        h: 140
                    }
                }

                this.$store.dispatch('addComp', comp)
                // 在paper上增加挂载一个实例
                // 在prop上增加挂载一个实例
                // 在data上挂载一个实例

            }
        },
        components: {
            PaperGrid,
            PropGrid
        }
    }
</script>
<style>
    .layout {
        width: 100%;
        min-height: 100%;
        padding-right: 300px;
        box-sizing: border-box;
    }
    .layout-right {
        float: right;
        width: 300px;
        margin-right: -300px;
        padding: 10px 3px;
        box-sizing: border-box;
        overflow-y: auto;
    }
    .layout-auto {
        float: left;
        width: 100%;
    }
</style>