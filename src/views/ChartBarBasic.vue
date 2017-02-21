<template>
    <div vue-id="adc" class="chart-wrap"
         v-bind:class="basicWrap"
         v-bind:style="style"
         v-bind:data-x="this.position.x"
         v-bind:data-y="this.position.y">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                basicWrap: 'chart-bar-basic-wrap'
            }
        },
        computed: {
            position: {
                get: function () {
                    return this.$store.state.position
                },
                set: function (val) {
                    this.$store.commit('changePosition', {position: this.position})
                }
            },
            style: function () {
                return {
                    left: this.position.x + 'px',
                    top: this.position.y + 'px'
                }
            }
        },
        methods: {
            scale: function () {
                var left = this.position.x,
                    top = this.position.y * 2
                this.position = Object.assign(this.position, {x: left, y: top});
            },

            dragMove: function (deltaPosition) {
                var x = this.position.x + deltaPosition.x,
                    y = this.position.y + deltaPosition.y
                this.position = Object.assign(this.position, {x, y})
            }
        },
        created: function () {
            var me = this;
            interact('[vue-id="adc"]')
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
        }
    }
</script>
<style>
    .chart-bar-basic-wrap {
        position: absolute;
        width: 100px;
        height: 100px;
        background: #42B983;
    }
</style>