import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 整个程序的数据大对象，flux模式进行状态管理
export default new Vuex.Store({
    state,
    mutations,
    actions
});
