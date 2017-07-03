<template>
    <div id="app">
        <div>头部 公用的</div>
        <div class="row">
            <div class="col-1">
                <toolbar></toolbar>
                <div>列表、以树状展示、以平铺展示</div>
            </div>
            <div class="col-5">
                <div>名称：接口描述</div>
                <div>方法 url</div>
                <div>response选择列表</div>
                <div>
                    <div>
                        <div>response1名字：描述</div>
                        <div>response1内容</div>
                    </div>
                    <div>
                        <div>response2名字：描述</div>
                        <div>response2内容</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import store from './store'
    import Toolbar from './components/toolbar.vue'

    export default {
        store,
        methods: {

        },
        components: {
            Toolbar
        }
    }
</script>
<style>

</style>