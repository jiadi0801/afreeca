<template>
    <div id="app">
        <div>头部 公用的</div>
        <div class="columns">
            <div class="col-2">
                <toolbar></toolbar>
                <div>列表、以树状展示、以平铺展示</div>
            </div>
            <div class="col-8">
                <div class="columns">
                    <span class="col-2" >
                        <input type="text" placeholder="名称" class="form-input">
                    </span>
                    <span class="col-10">
                        <input type="text" placeholder="描述" class="form-input">
                    </span>
                </div>
                <div class="columns">
                    <span class="col-2">
                        <select type="text" placeholder="名称" class="form-select">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                        </select>
                    </span>
                    <span class="col-10">
                        <input type="text" placeholder="URL" class="form-input">
                    </span>
                </div>
                <h4>response选择列表</h4>
                <div>
                    response1 ,response2
                </div>
                <div>
                    <div class="columns">
                        <span class="col-2" >
                            <input type="text" placeholder="Response名称" class="form-input">
                        </span>
                        <span class="col-10">
                            <input type="text" placeholder="描述" class="form-input">
                        </span>
                    </div>
                    <div class="columns">
                        <div class="col-6">
                            <label class="form-label">YAML</label>
                            <textarea class="form-input"></textarea>
                        </div>
                        <div class="col-6">
                            <label class="form-label">JSON</label>
                            <textarea class="form-input"></textarea>
                        </div>
                    </div>
                    <div class="columns">
                        <span class="col-2" >
                            <input type="text" placeholder="Response2名称" class="form-input">
                        </span>
                        <span class="col-10">
                            <input type="text" placeholder="描述" class="form-input">
                        </span>
                    </div>
                    <div class="columns">
                        <div class="col-6">
                            <label class="form-label">YAML</label>
                            <textarea class="form-input"></textarea>
                        </div>
                        <div class="col-6">
                            <label class="form-label">JSON</label>
                            <textarea class="form-input"></textarea>
                        </div>
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