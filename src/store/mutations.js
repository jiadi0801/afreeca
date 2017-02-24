export default {
    // 更新组件的x,y数据
    changePosition(state, {comp_id, position}) {
        // 这个方法需要合计合计，用于定位assign的组件的那个属性
        console.log(comp_id)
        var comps = state.scenes[0].layout.comps
        var comp = comps.find(element => {
            return element.comp_id === comp_id
        })
        comp = Object.assign(comp.attr, position)
        // state.scenes[0].layout.comps[0].attr = Object.assign(state.scenes[0].layout.comps[0].attr, position);
    },
    updateComp(state, payload) {

    },
    changeRect(state, rect) {
        state.scenes[0].layout.comps[0].rect = Object.assign(state.scenes[0].layout.comps[0].rect, rect);
    },
    addCompData(state, comp) {
        state.scenes[0].layout.comps.push(comp)
    }
}
