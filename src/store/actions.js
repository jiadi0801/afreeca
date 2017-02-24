export default {
    addComp: function (context, payload) {
        context.commit('addCompData', payload)
        console.log('addComp')
    }
}
