<template>
    <div :vue-id="id" class="chart-wrap" :style="style" >
        <component :is="mapping[type]" :chartData="chartData"></component>
    </div>
</template>

<script>
    import mapping from '../config/chart-type-mapping'
    import BarBasicChart from '../components/comps/BarBasicChart.vue'
    import CircleExampleChart from '../components/comps/CircleExampleChart.vue'

    export default {
        props: {
            data: {
                type: Object,
                default() {return {}}
            }
        },
        data() {
            return {
                mapping: mapping
            }
        },
        computed: {
            chartData() {
                console.log(this.data)
                return this.data
            },
            id() {
                return this.data.type + '_' + this.data.comp_id
            },
            type() {
                console.log(this.data.type)
                return this.data.type
            },
            style() {
                return {
                    left: this.data.attr.x + 'px',
                    top: this.data.attr.y + 'px',
                    zIndex: this.data.attr.zIndex + 'px'
                }
            },
            position() {
                return {
                    x: this.data.attr.x,
                    y: this.data.attr.y
                }
            }
        },
        methods: {
            dragMove: function (deltaPosition) {
                var x = this.position.x + deltaPosition.x,
                    y = this.position.y + deltaPosition.y
                this.position = Object.assign(this.position, {x, y})
                // here 触发store的commit方法（可以放在dragDown里commit）
            }
        },
        created: function () {
            var me = this;
            interact('[vue-id="'+ me.id +'"]')
                .draggable({
                    restrict: {
                        restriction: 'parent'
                    },
                    onmove: function (event) {
                        console.log(event.target)
                        var x = event.dx,
                            y = event.dy;
                        me.dragMove({x,y})
                    }
                })
                .resizable({
                    preserveAspectRatio: false,
                    edges: {left: true, right: true, bottom: true, top: true}
                })
                .on('resizemove', function (event) {
                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || 0),
                        y = (parseFloat(target.getAttribute('data-y')) || 0);

                    // update the element's style
                    target.style.width  = event.rect.width + 'px';
                    target.style.height = event.rect.height + 'px';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                    target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
                })
        },
        components: {
            BarBasicChart, CircleExampleChart
        }
    }
</script>

<style>
    .chart-wrap {
        position: absolute;
        background: #42B983;
    }
</style>