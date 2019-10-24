interface Config {
    description;
    chapterArray;
    pageArray;
}
const leadInConfig: Config = {
    description: {
        name: '原理',
        metadata: {
            schema: '', // 基于什么标准，xcj，scrom
            schemaversion: '0.1',
        },
        courseNumber: 'SK_WJZ1Q0001_2017V1',
        type: '', // 课件类型，WBT ,SBT,RM
        types: '', // wbtCourseWare，rmCourseWare，sbtCourseWare
        purpose: '',  // 目的
        require: '', // 学习课件之前需要掌握什么技术
        keyword: '', // 关键词
        language: '', // 课件语言
        version: '', // 课件自身版本号
        client: 'PC',  // 适用终端，PC、Android、iOS
        sumScore: '',  // 总分数
        passCondition: '', // 通过条件
        completeCondition: '',  // 完成条件，nub，
        entry: '', // 课件入口链接
    },
    chapterArray: [
        {
            id: 'chapter01',
            name: '案例导入',
            description: '案例导入',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page01',
            isPass: 1,
            chapterID: 'chapter01',
            componentArray: [
                {
                    id: 'page01-submitShowAnswer',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '925',
                                    positionTop: '20',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: 'rgb(171, 237, 105)',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '提交'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            textArray: [
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-component00',
                    type: 'image',

                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    display: 'block',
                                    src: ''
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    display: 'block',
                                    src: '',
                                    backgroundSize: '100%'
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    display: 'block',
                                    src: ''
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-audio',
                    type: 'audio',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-promp01',
                    type: 'promp',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/principle/leadIn_faultInformation.png'
                                },
                            },
                            contents: [
                                {
                                    text: `1.请启动发动机，等待发动机达到正常水温后.`
                                },
                                {
                                    text: '2.打开鼓风机至最大挡位，并把温度旋钮调至最低温度、'
                                },
                                {
                                    text: '3.使用温度计测量空调出风口温度。'
                                },
                                {
                                    text: '注意!正常制冷时温度应在5℃左右。当前环境温度40℃。'
                                },
                            ]
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-component01',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: './assets/images/01/case_nav_bg.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '120',
                                    height: '150',
                                    positionLeft: '0',
                                    positionTop: '86',
                                    paddingTop: '24',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: 'initial'
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-message',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: './assets/images/01/sub_menu_top.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '40',
                                    height: '25',
                                    positionLeft: '40',
                                    positionTop: '73',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '100%'
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-component02',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '110',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#7a7e7d',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '客户描述'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '110',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#abed69',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '客户描述'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-component03',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '160',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#7a7e7d',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '故障现象'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '160',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#abed69',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '故障现象'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-component04',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '210',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#7a7e7d',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '测评'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '210',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '6px',
                                    backgroundColor: '#abed69',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        display: 'block'
                                    },
                                    content: '测评'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-component05',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: './assets/images/01/p6_01.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '806',
                                    height: '387',
                                    positionLeft: '168',
                                    positionTop: '103',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-component08',
                    type: 'table',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    positionLeft: '170',
                                    positionTop: '65',
                                    display: 'block',
                                    isScroll: 'hidden'
                                },
                            },
                            textArray: [
                                {
                                    number: 1,
                                    question: '当没有打开鼓风机时，是否可以打开制冷开关？',
                                    questionCorrectAnswer: '正确答案: B',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 可以',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'B: 不可以',
                                            name: 'radio'
                                        },
                                    ]
                                },
                                {
                                    number: 2,
                                    question: '当打开空调制冷系统时，出风口温度是多少度？',
                                    questionCorrectAnswer: '正确答案: B',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 20℃',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'B: 40℃',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'C: 30℃',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'D: 5℃',
                                            name: 'a'
                                        }
                                    ]
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-prevInfo',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    fixedStyle: {
                        width: '30',
                        height: '30',
                        positionRight: '10',
                        positionTop: '260',
                        cursor: 'default',
                        display: 'block',
                        backgroundSize: '30px 30px',
                        backgroundImage: './assets/images/01/prev_gray.png',
                    },
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-nextInfo',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    fixedStyle: {
                        width: '30',
                        height: '30',
                        positionRight: '10',
                        positionTop: '200',
                        cursor: 'pointer',
                        display: 'block',
                        backgroundSize: '30px 30px',
                        backgroundImage: './assets/images/01/next_green.png',
                    },
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-dashboard',
                    type: 'dashboard',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-airwind',
                    type: 'airwind',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                            initWind: './assets/images/airwind/cool3.png',
                            windList: [
                                'cool1', 'cool2', 'cool3', 'blink'
                            ]
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-component09',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '100',
                                    height: '100',
                                    positionLeft: '600',
                                    positionTop: '200',
                                    display: 'block',
                                    transform: 'rotate(92deg)',
                                    src: './assets/images/airwind/thermometer.png',
                                    backgroundSize: '100%',
                                    opacity: '1'
                                },
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '100',
                                    height: '100',
                                    positionLeft: '590',
                                    positionTop: '150',
                                    display: 'block',
                                    transform: 'rotate(92deg)',
                                    src: './assets/images/airwind/thermomenter-half.png',
                                    backgroundSize: '100%',
                                    opacity: '1'
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-component10',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionLeft: '700',
                                    positionTop: '250',
                                    display: 'block',
                                    borderRadius: '50%',
                                    opacity: '1',
                                    cursor: 'pointer',
                                    backgroundColor: 'yellow',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionLeft: '700',
                                    positionTop: '250',
                                    display: 'block',
                                    borderRadius: '50%',
                                    opacity: '1',
                                    cursor: 'default',
                                    backgroundColor: 'yellow',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                        },
                    ],
                },
                {
                    id: 'page01-component11',
                    type: 'thermometer',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {

                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [],
                        },
                    ],
                },
                {
                    id: 'page01-component12',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '124',
                                    height: '203',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '124',
                                    height: '203',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '124',
                                    height: '203',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                    ],
                },


                {
                    id: 'page01-switch',
                    type: 'switch',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: true,
                                deg90: false,
                                deg0: false,
                                canClickStatus: true,
                                audioplay: true
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: true,
                                deg0: false,
                                canClickStatus: false,
                                audioplay: true
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: false,
                                deg0: true,
                                canClickStatus: false
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-ac',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '105',
                                    positionBottom: '15',
                                    display: 'block',
                                    opacity: '1',
                                    zIndex: '1',
                                    // transform: 'rotate(-65deg)',
                                    src: './assets/images/operator/ac-destroy.png'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '105',
                                    positionBottom: '15',
                                    display: 'block',
                                    opacity: '1',
                                    zIndex: '1',
                                    // transform: 'rotate(200deg)',
                                    src: './assets/images/operator/ac-light.png'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '105',
                                    positionBottom: '15',
                                    display: 'block',
                                    opacity: '1',
                                    zIndex: '1',
                                    // transform: 'rotate(-65deg)',
                                    src: './assets/images/operator/ac-destroy.png'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-acLine',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '105',
                                    positionBottom: '15',
                                    display: 'block',
                                    opacity: '1',
                                    src: './assets/images/kt/ac-destroy.png'
                                },
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-twyerBg',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '192',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1',
                                    src: './assets/images/operator/twyer-bg.png'
                                },
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-twyer-knob',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '192',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1',
                                    src: './assets/images/operator/twyer-knob.png',
                                    transform: 'rotate(0deg)'
                                },
                            },
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '75',
                                    height: '80',
                                    positionRight: '192',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1',
                                    src: './assets/images/operator/twyer-knob.png',
                                    transform: 'rotate(125deg)'
                                },
                            },
                        },
                        {
                            id: 'state02',
                            isScroll: 1,
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-ac-button',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    positionBottom: '32px',
                                    positionRight: '125px',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999'
                                },
                            },
                            textArray: [
                                {

                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    positionBottom: '32px',
                                    positionRight: '125px',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999'
                                },
                            },
                            textArray: [
                                {

                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    positionBottom: '32px',
                                    positionRight: '125px',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999'
                                },
                            },
                            textArray: [
                                {

                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-twyer-button',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    positionBottom: '70px',
                                    positionRight: '192px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    positionBottom: '70px',
                                    positionRight: '108px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                        },
                    ],
                },
                {
                    id: 'page01-lock-button',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    positionBottom: '60px',
                                    positionRight: '198px',
                                    width: '10px',
                                    height: '10px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-start-button',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    positionBottom: '51px',
                                    positionRight: '17px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    positionBottom: '89px',
                                    positionRight: '17px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
            ],
            publishArray: [
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component02',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-submitShowAnswer',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-acLine',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component08',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish02',
                    component: {
                        id: 'page01-component03',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-submitShowAnswer',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-acLine',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1202',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-component03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1205',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component08',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component04',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-submitShowAnswer',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-acLine',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1202',
                            component: {
                                id: 'page01-component02',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-component03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1205',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component08',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1109',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },

                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-nextInfo',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        }
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-component10',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-start-button',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-lock-button',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                // {
                //     id: 'publish05',
                //     component: {
                //         id: 'page01-ac-button',
                //         stateID: 'state03',
                //     },
                //     triggerEvent: 'click',
                //     subscribeArray: [
                //         {
                //             id: 'subscribe1108',
                //             component: {
                //                 id: 'page01-ac-button',
                //                 stateID: '',
                //             },
                //             timeOut: '0',
                //             setCurrentState: 'state02',
                //         },
                //         {
                //             id: 'subscribe1108',
                //             component: {
                //                 id: 'page01-ac-button',
                //                 stateID: '',
                //             },
                //             timeOut: '10000',
                //             setCurrentState: 'state04',
                //         },
                //         {
                //             id: 'subscribe1108',
                //             component: {
                //                 id: 'page01-ac',
                //                 stateID: '',
                //             },
                //             timeOut: '0',
                //             setCurrentState: 'state04',
                //         },
                //         {
                //             id: 'subscribe1108',
                //             component: {
                //                 id: 'page01-component12',
                //                 stateID: '',
                //             },
                //             timeOut: '0',
                //             setCurrentState: 'state04',
                //         },
                //     ],
                // },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '10000',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish010',
                    component: {
                        id: 'page01-submitShowAnswer',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-submitShowAnswer',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ]

                },
            ],
            // 页面动画,暂没此功能
            animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
            },
            backgroundImageSrc: '',
        },
    ],
};

export {
    Config,
    leadInConfig,
}
