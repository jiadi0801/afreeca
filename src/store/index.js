import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        position: {
            x: 510,
            y: 30
        }
    },
    mutations: {
        changePosition(state, {position}) {
            console.log('in', position)
            state.position = position
            console.log('out', state.position)
        }
    }
});