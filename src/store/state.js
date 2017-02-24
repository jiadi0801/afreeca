export default {
    scenes: [
        {
            name: '2017京东618大屏',
            layout: {
                id: 123,
                comps: [
                    {
                        comp_id: 'uuid1',
                        type: 'rect',
                        attr: {
                            x: 320,
                            y: 30,
                            zIndex: 1
                        },
                        rect: {
                            w: 100,
                            h: 100
                        }
                    }
                    ,
                    {
                        comp_id: 'uuid2',
                        type: 'circle',
                        attr: {
                            x: 100,
                            y: 60,
                            zIndex: 2
                        },
                        circle: {
                            r: 40
                        }
                    }
                ]
            }
        }
    ]
}
