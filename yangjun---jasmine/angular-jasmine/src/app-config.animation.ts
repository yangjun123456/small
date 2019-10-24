const a = [
    {
        id: 'halo',
        keyframes: [
            {
                offset: 0,
                style: {
                    opacity: 0.2,
                    borderColor: '',
                    boxShadow: ''
                },
            },
            {
                offset: 1,
                style: {
                    opacity: 1, borderColor: '',
                    boxShadow: ''
                }
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 1000,
        easing: '',
        iterations: 'Infinity',
    },
    {
        id: 'grow',
        keyframes: [
            {
                offset: 0,
                style: {
                    borderColor: '#393',
                    opacity: 1,
                    boxShadow: '0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff'
                },
            },
            {
                offset: 1,
                style: {
                    borderColor: '#6f6',
                    opacity: 1,
                    boxShadow: '0 0 20px rgba(0,255,0,.7), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #fff'
                },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 800,
        easing: '',
        iterations: 'Infinity',
    },
];

const animationOn = {
    id: {
        keyframes: [],
        options: {},
    },
};

for (let v of a) {
    const keyframes = [];
    v.keyframes.forEach(element => {
        const keyframe = {};
        if (element.offset) {
            Object.assign(keyframe, {
                offset: +element.offset,
            });
        }
        Object.assign(keyframe, element.style);
        keyframes.push(keyframe);
        // console.log(keyframes)
    });
    const options = {};
    if (v.delay) {
        Object.assign(options, {
            delay: v.delay,
        });
    }
    if (v.direction) {
        Object.assign(options, {
            direction: v.direction,
        });
    }

    if (v.duration) {
        Object.assign(options, {
            duration: +v.duration,
        });
    }
    if (v.easing) {
        Object.assign(options, {
            easing: v.easing,
        });
    }
    if (v.iterations) {
        // let iterations;
        // if (v.iterations === 'Infinity') {
        //     // v.iterations = Infinity;
        // }
        Object.assign(options, {
            iterations: +v.iterations,
        });
    }

    animationOn[v.id] = {
        keyframes: keyframes,
        options: options,
    };
}

export {
    animationOn,
}
