interface Config {
    description;
    chapterArray;
    pageArray;
}
const checkConfig: Config = {
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
            id: 'chapter05',
            name: '检查评估',
            description: '检查评估',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page05',
            isPass: 1,
            chapterID: 'chapter05',
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
                    initialStateID: 'state04',
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
                                    src: './assets/images/principle/yibiao.png'
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
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    display: 'block',
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
                    initialStateID: 'state02',
                    src: './assets/images/01/case_nav_bg.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '120',
                                    height: '225',
                                    positionLeft: '0',
                                    positionTop: '86',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '120px 225px',
                                },
                            },
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '120',
                                    height: '320',
                                    positionLeft: '0',
                                    positionTop: '86',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '120px 320px',
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
                                    content: '维修质检'
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
                                    content: '维修质检'
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
                    initialStateID: 'state03',
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
                                    content: '测评'
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '255',
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
                    id: 'page01-end',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/01/p48_01.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '600',
                                    height: '228',
                                    positionLeft: '263',
                                    positionTop: '125',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '600px 228px'
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
                    id: 'page01-component04',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
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
                                    content: '评估'
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
                                    content: '评估'
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '305',
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
                                    content: '评估'
                                }
                            ],
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
                    id: 'page01-component04-2',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '260',
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
                                    content: '结束'
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
                                    positionTop: '260',
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
                                    content: '结束'
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '355',
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
                                    content: '结束'
                                }
                            ],
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
                                    isScroll: 'scroll'
                                },
                            },
                            textArray: [
                                {
                                    number: 1,
                                    question: '空调制冷打开后，当前蒸发箱温度传感器是如何变化的？',
                                    questionCorrectAnswer: '正确答案: BD',
                                },
                                {
                                    type: 'checkbox',
                                    answers: [
                                        {
                                            answer: 'A: 制冷打开时为35℃',
                                            name: 'radio1'
                                        },
                                        {
                                            answer: 'B: 制冷打开时为3℃',
                                            name: 'radio2'
                                        },
                                        {
                                            answer: 'C: 制冷打开时为0℃',
                                            name: 'radio3'
                                        },
                                        {
                                            answer: 'D: 制冷未打开时为40℃',
                                            name: 'radio4'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    question: '当制冷打开时制冷剂电磁阀占空比为多少？',
                                    questionCorrectAnswer: '正确答案: B',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 60%',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'B: 70%',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'C:  80%',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'D: 90%',
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
                    id: 'page01-shiche',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '150',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#eb7d1e'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '试车'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '150',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#fff'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#eb7d1e',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '试车'
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-guzhangma',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '180',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#eb7d1e'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '故障码'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '180',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#fff'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#eb7d1e',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '故障码'
                                }
                            ],
                        },
                        {
                            id: 'state03',
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
                    id: 'page01-shujuliu',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '215',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#eb7d1e'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '数据流'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '215',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#fff'
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#eb7d1e',
                                        fontSize: '14',
                                        textAlign: 'center',
                                        lineHeight: '32',
                                        // fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '数据流'
                                }
                            ],
                        },
                        {
                            id: 'state03',
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
                    id: 'page01-promp01',
                    type: 'promp',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                            text: '请验证空调制冷是否恢复，启动发动机、鼓风机和制冷调至最大并打开AC开关，插入温度计到出风口。观察出否口温度是否符合标准。',
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
                    id: 'page01-evaluate',
                    type: 'evaluate',
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
                    id: 'page01-dashboard',
                    type: 'dashboard',
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
                    id: 'page01-obdscan',
                    type: 'obdscan',
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
                                filterPage: 'readStream',
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            text: '0'
                        },
                        {
                            id: 'state11',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'readStream',
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            text: '1999'
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'operator',
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'operator'
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'plan',
                                lishiguzhang: true

                            },
                        },

                        {
                            id: 'state06',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'readStream'
                            },
                            obdscanContent: [
                                {
                                    content: '蓄电池电压',
                                    num: '12.6',
                                    unit: 'V',
                                }, {
                                    content: '转速',
                                    num: '0',
                                    unit: '转/分钟',
                                }, {
                                    content: '空调高压侧传感器',
                                    num: '800',
                                    unit: '千帕',
                                }, {
                                    content: '空调高压传感器电压',
                                    num: '1.2',
                                    unit: 'V',
                                }, {
                                    content: '空调请求信号',
                                    num: '否',
                                    unit: '',
                                }, {
                                    content: '制冷剂电磁阀',
                                    num: '0',
                                    unit: '%',
                                }, {
                                    content: '空调压缩机离合器',
                                    num: '关闭',
                                    unit: '',
                                }, {
                                    content: '环境温度传感器',
                                    num: '40',
                                    unit: '℃ ',
                                }, {
                                    content: '蒸发箱温度传感器',
                                    num: '35',
                                    unit: '℃ ',
                                },
                            ]
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'readStream'
                            },
                            obdscanContent: [
                                {
                                    content: '蓄电池电压',
                                    num: '14.6',
                                    unit: 'V',
                                }, {
                                    content: '转速',
                                    num: '700',
                                    unit: '转/分钟',
                                }, {
                                    content: '空调高压侧传感器',
                                    num: '800',
                                    unit: '千帕',
                                }, {
                                    content: '空调高压传感器电压',
                                    num: '1.2',
                                    unit: 'V',
                                }, {
                                    content: '空调请求信号',
                                    num: '否',
                                    unit: '',
                                }, {
                                    content: '制冷剂电磁阀',
                                    num: '0',
                                    unit: '%',
                                }, {
                                    content: '空调压缩机离合器',
                                    num: '关闭',
                                    unit: '',
                                }, {
                                    content: '环境温度传感器',
                                    num: '40',
                                    unit: '℃ ',
                                }, {
                                    content: '蒸发箱温度传感器',
                                    num: '35',
                                    unit: '℃ ',
                                },
                            ]
                        },
                        {
                            id: 'state08',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                filterPage: 'readStream'
                            },
                            obdscanContent: [
                                {
                                    content: '蓄电池电压',
                                    num: '14.6',
                                    unit: 'V',
                                }, {
                                    content: '转速',
                                    num: '800',
                                    unit: '转/分钟',
                                }, {
                                    content: '空调高压侧传感器',
                                    num: '1900',
                                    unit: '千帕',
                                }, {
                                    content: '空调高压传感器电压',
                                    num: '2.5',
                                    unit: 'V',
                                }, {
                                    content: '空调请求信号',
                                    num: '允许',
                                    unit: '',
                                }, {
                                    content: '制冷剂电磁阀',
                                    num: '90',
                                    unit: '%',
                                }, {
                                    content: '空调压缩机离合器',
                                    num: '打开',
                                    unit: '',
                                }, {
                                    content: '环境温度传感器',
                                    num: '40',
                                    unit: '℃ ',
                                }, {
                                    content: '蒸发箱温度传感器',
                                    num: '3',
                                    unit: '℃ ',
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
                    id: 'page01-switch',
                    type: 'switch',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
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
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: true,
                                deg0: false,
                                canClickStatus: true
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: true,
                                deg90: false,
                                deg0: false,
                                canClickStatus: false,
                                audioplay: true,
                            },
                        },
                        {
                            id: 'state11',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: true,
                                deg0: false,
                                canClickStatus: false,
                                audioplay: true,
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: true,
                                deg0: false,
                                canClickStatus: false
                            },
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: true,
                                deg90: false,
                                deg0: false,
                                canClickStatus: true
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
                    id: 'page01-acLine',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                    id: 'page01-ac',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                    id: 'page01-twyerBg',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                    initialStateID: 'state01',
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
                                    positionBottom: '29px',
                                    positionRight: '117px',
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
                                    positionBottom: '29px',
                                    positionRight: '117px',
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
                                    positionBottom: '29px',
                                    positionRight: '117px',
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
                            id: 'state09',
                            style: {
                                default: {
                                    positionBottom: '29px',
                                    positionRight: '117px',
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
                            id: 'state10',
                            style: {
                                default: {
                                    positionBottom: '29px',
                                    positionRight: '117px',
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
                                    positionBottom: '60px',
                                    positionRight: '200px',
                                    width: '11px',
                                    height: '11px',
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
                                    positionBottom: '60px',
                                    positionRight: '200px',
                                    width: '11px',
                                    height: '11px',
                                    zIndex: '999',
                                    cursor: 'default',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    positionBottom: '60px',
                                    positionRight: '200px',
                                    width: '11px',
                                    height: '11px',
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
                                    positionBottom: '69px',
                                    positionRight: '35px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
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
                                    positionBottom: '69px',
                                    positionRight: '35px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
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
                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    positionBottom: '69px',
                                    positionRight: '35px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
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
                    id: 'page01-start-button',
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
                                    positionBottom: '53px',
                                    positionRight: '15px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
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
                                    positionBottom: '53px',
                                    positionRight: '15px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'default',
                                    display: 'block',
                                },
                            },
                            textArray: [
                                {

                                    content: ''
                                }
                            ],
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    positionBottom: '53px',
                                    positionRight: '15px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'cursor',
                                    display: 'block',
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
                    id: 'page01-obdscan-shadow',
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
                                    positionBottom: '135px',
                                    positionRight: '607px',
                                    width: '29px',
                                    height: '37px',
                                    zIndex: '999',
                                    cursor: 'default',
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
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                            initWind: './assets/images/airwind/red3.png',
                            windList: [
                                'red1', 'red2', 'red3', 'blink'
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
                    id: 'page01-wenduji',
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
                    id: 'page01-component11',
                    type: 'thermometer',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                    id: 'page01-red',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
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
                                    height: '141',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'wendujiHeight4',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state04',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '124',
                                    height: '129',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'wendujiHeight3',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '124',
                                    height: '129',
                                    positionBottom: '187',
                                    positionRight: '69',
                                    zIndex: '1',
                                    backgroundColor: 'red',
                                    display: 'block',
                                },

                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'wendujiHeight5',
                                animationOutID: '',
                            },
                        },
                    ],
                },
                {
                    id: 'page01-yellow',
                    type: 'image',
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
                            id: 'state02',
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
                            id: 'state03',
                            isScroll: 1,
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
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-evaluate',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-end',
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
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component04-2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
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
                        id: 'page01-yellow',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-red',
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
                            timeOut: '',
                            setCurrentState: 'state03',
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
                            setCurrentState: 'state01',
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
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-evaluate',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-end',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component01',
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
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04-2',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
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
                                id: 'page01-obdscan-shadow',
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
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
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
                            setCurrentState: 'state02',
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
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-evaluate',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component01',
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
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04-2',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-end',
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
                                id: 'page01-obdscan-shadow',
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
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component04-2',
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
                            setCurrentState: 'state03',
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
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-end',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-evaluate',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component01',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-end',
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
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04-2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
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
                                id: 'page01-obdscan-shadow',
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
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-shiche',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-evaluate',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1203',
                            component: {
                                id: 'page01-end',
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
                            id: 'subscribe1103',
                            component: {
                                id: 'page01-component03',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component04-2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
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
                                id: 'page01-acLine',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-shujuliu',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            setCurrentState: 'state09',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-guzhangma',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shiche',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dashboard',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-start-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-audio',
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
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state11',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-start-button',
                        stateID: 'state09',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-start-button',
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
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state11',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state09',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-start-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-twyer-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-twyer-button',
                        stateID: 'state09',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish03',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '100',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-wenduji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-yellow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state03',
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
                            timeOut: '15000',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '100',
                            setCurrentState: 'state01',
                        },
                    ],
                },
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
                            timeOut: '15000',
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
                                id: 'page01-red',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-airwind',
                                stateID: '',
                            },
                            timeOut: '100',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state09',
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
                            timeOut: '5000',
                            setCurrentState: 'state10',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '',
                            setCurrentState: 'state08',
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
                    ],
                },
                {
                    id: 'publish05',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state10',
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
                            timeOut: '5000',
                            setCurrentState: 'state09',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '5000',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
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
    checkConfig,
}
