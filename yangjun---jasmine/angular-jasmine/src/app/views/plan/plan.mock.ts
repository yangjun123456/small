interface Config {
    description;
    chapterArray;
    pageArray;
}
const planConfig: Config = {
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
            id: 'chapter03',
            name: '制定计划',
            description: '制定计划',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page03',
            isPass: 1,
            chapterID: 'chapter03',
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
                                filterPage: 'plan',
                                clearFaultCode: 'plan'
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
                                    height: '400',
                                    positionLeft: '0',
                                    positionTop: '86',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '120px 400px',
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
                                    content: '决策分组'
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
                                    content: '决策分组'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-shujuliubuzhou',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/01/p28_1.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '740',
                                    height: '380',
                                    positionLeft: '170',
                                    positionTop: '75',
                                    cursor: 'default',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '740px 380px'
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
                    id: 'page01-group',
                    type: 'group',
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
                                    content: '初步检查'
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
                                    content: '初步检查'
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
                                    content: '诊断帮助'
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
                                    content: '诊断帮助'
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
                                    positionTop: '350',
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
                                    content: '诊断帮助'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-component05',
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
                                    positionTop: '435',
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
                    id: 'page01-pdf',
                    type: 'pdf',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    scale: 10,
                    initialStateID: 'state02',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    positionLeft: '120',
                                    positionTop: '0',
                                    display: 'block',
                                    maxWidth: '904'
                                },
                            },
                            pdfs: [
                                {
                                    pdfSrc: './assets/pdf/3402.png',
                                },
                                {
                                    pdfSrc: './assets/pdf/3403.png',
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            isScroll: 1,
                            style: {
                                default: {
                                    positionLeft: '120',
                                    positionTop: '0',
                                    display: 'block',
                                    maxWidth: '904'
                                },
                            },
                            pdfs: [
                                {
                                    pdfSrc: './assets/pdf/3405.png',
                                },
                                {
                                    pdfSrc: './assets/pdf/3406.png',
                                }
                            ]
                        },
                        {
                            id: 'state05',
                            isScroll: 1,
                            style: {
                                default: {
                                    positionLeft: '120',
                                    positionTop: '0',
                                    display: 'block',
                                    maxWidth: '904'
                                },
                            },
                            pdfs: [
                                {
                                    pdfSrc: './assets/pdf/3432.png',
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
                    id: 'page01-circuit',
                    type: 'circuit',
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
                                    positionLeft: '120',
                                    positionTop: '0',
                                    display: 'block',
                                },
                            },
                            pdfSrc: './assets/pdf/3452.png',
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
                                    question: '蒸发箱传感器接线端子具体位置在哪里？',
                                    questionCorrectAnswer: '正确答案: C',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 驾驶员左侧',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'B: 鼓风机上部',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'C: 鼓风机左侧',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'D: 空调控制面板内',
                                            name: 'radio'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    question: '蒸发箱温度传感器分别对应控制单元哪两个端子？',
                                    questionCorrectAnswer: '正确答案: B',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: X2 20、9号端子',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'B:  X3 20、9号端子 ',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'C: X1 20、9号端子',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'D: X3 20、8号端子',
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
                    id: 'page01-guzhangma',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '250',
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
                            id: 'state01',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '250',
                                    cursor: 'default',
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
                        },
                    ],
                },
                {
                    id: 'page01-shujuliu',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '285',
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
                            id: 'state01',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '285',
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
                    id: 'page01-dianlu',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '320',
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
                                    content: '电路图'
                                }
                            ],
                        },
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '320',
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
                                    content: '电路图'
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
                    id: 'page01-zhenduan',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '355',
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
                                    content: '诊断方法'
                                }
                            ],
                        },
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '355',
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
                                    content: '诊断方法'
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
                    id: 'page01-chaizhuang',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state03',
                    src: '',
                    stateArray: [
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '390',
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
                                    content: '拆装步骤'
                                }
                            ],
                        },
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '390',
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
                                    content: '拆装步骤'
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
                    id: 'page01-prevOperator',
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
                    id: 'page01-nextOperator',
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
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/principle/yibiao.png',
                                },
                            },
                            contents: [
                                {
                                    text: '1.点火开关置于ON挡。'
                                },
                                {
                                    text: '2.打开诊断仪选择“空调控制模块”并读取故障码。'
                                },
                                {
                                    text: '3.记录故障码信息。'
                                },
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '680',
                                    height: '460',
                                    positionLeft: '200',
                                    positionTop: '0',
                                    backgroundImage: ''
                                },
                            },
                            text: '',
                            videoSrc: './assets/mp4/structure.mp4'
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
                                    positionRight: '30',
                                    positionTop: '160',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundImage: './assets/images/principle/nav_col_bg01.png',
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
                                    content: '高负荷空调压力'
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
                    id: 'page01-component10',
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
                                    positionRight: '30',
                                    positionTop: '210',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundImage: './assets/images/principle/nav_col_bg01.png',
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
                                    content: '空调请求信号开'
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
                    id: 'page01-component12',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/plan/switch_base.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '100',
                                    height: '100',
                                    positionRight: '100',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1'
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
                            id: 'state02',
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
                    id: 'page01-component17',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/plan/switch_key-kaluola.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '100',
                                    height: '100',
                                    positionRight: '100',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1'
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
                                    width: '100',
                                    height: '100',
                                    positionRight: '100',
                                    positionBottom: '10',
                                    display: 'block',
                                    opacity: '1',
                                    transform: 'rotate(90deg)'
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
                            id: 'state02',
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
                    id: 'page01-component18',
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
                                    positionLeft: '350px',
                                    positionBottom: '78px',
                                    width: '99px',
                                    height: '100px',
                                    zIndex: '25',
                                    display: 'block',
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
                            id: 'state02',
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
                    id: 'page01-component19',
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
                                    positionBottom: '89px',
                                    positionRight: '130px',
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
                {
                    id: 'page01-component11',
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
                                    positionRight: '30',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundImage: './assets/images/principle/nav_col_bg01.png',
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
                                    content: '空调请求信号关'
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
                    id: 'page01-canclose',
                    type: 'canclose',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/kt/bg.png',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '-55',
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '',
                            imgArr: [
                                {
                                    img: './assets/images/plan/dataflow1.png',
                                    style: {
                                        maxWidth: '1024px',
                                        width: '100%',
                                        height: '530px',
                                        position: 'absolute',
                                        left: '0',
                                        top: '22px'
                                    }
                                }
                            ],
                            forSpanStyle: {
                                position: 'absolute',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '30px',
                                padding: '30px',
                                maxWidth: '500px',
                                left: '50%',
                                marginLeft: '-250px',
                                top: '235px'
                            },
                            forSpanContent: [
                                {
                                    text: '怠速状态时，环境温度40度时，空调高压侧压力传感器数据流为1900千帕左右。',
                                    textStyle: {
                                        color: '#000',
                                        textIndent: '2rem',
                                        display: 'block'

                                    }
                                },
                                {
                                    text: '注意！测数据为测试状态为发动机盖打开，四门打开、鼓风机最大，制冷最大时的数据流',
                                    textStyle: {
                                        color: 'red',
                                        display: 'block',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '-55',
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '',
                            imgArr: [
                                {
                                    img: './assets/images/plan/dataflow2.png',
                                    style: {
                                        maxWidth: '1024px',
                                        width: '100%',
                                        height: '530px',
                                        position: 'absolute',
                                        left: '0',
                                        top: '22px'
                                    }
                                }
                            ],
                            forSpanStyle: {
                                position: 'absolute',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '30px',
                                padding: '30px',
                                maxWidth: '500px',
                                left: '50%',
                                marginLeft: '-250px',
                                top: '235px'
                            },
                            forSpanContent: [
                                {
                                    text: '3300转/分钟时，环境温度40度时，空调高压侧压力传感器数据流为2500千帕左右。',
                                    textStyle: {
                                        color: '#000',
                                        textIndent: '2rem',
                                        display: 'block'

                                    }
                                },
                                {
                                    text: '注意！测数据为测试状态为发动机盖打开，四门打开、鼓风机最大，制冷最大时的数据流',
                                    textStyle: {
                                        color: 'red',
                                        display: 'block',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '-55',
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '空气净化',
                            imgArr: [
                                {
                                    img: './assets/images/plan/dataflow3.png',
                                    style: {
                                        maxWidth: '1024px',
                                        width: '100%',
                                        height: '530px',
                                        position: 'absolute',
                                        left: '0',
                                        top: '22px'
                                    }
                                }
                            ],
                            forSpanStyle: {
                                position: 'absolute',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '30px',
                                padding: '30px',
                                maxWidth: '500px',
                                left: '50%',
                                marginLeft: '-250px',
                                top: '235px'
                            },
                            forSpanContent: [
                                {
                                    text: '制冷系统正常工作时，空调指示灯点亮、空调请求信号为是、空去循环指示灯点亮及鼓风机90%。',
                                    textStyle: {
                                        color: '#000',
                                        textIndent: '2rem',
                                        display: 'block'

                                    }
                                },
                            ]
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '-55',
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '空气净化',
                            imgArr: [
                                {
                                    img: './assets/images/plan/dataflow4.png',
                                    style: {
                                        maxWidth: '1024px',
                                        width: '100%',
                                        height: '530px',
                                        position: 'absolute',
                                        left: '0',
                                        top: '22px'
                                    }
                                }
                            ],
                            forSpanStyle: {
                                position: 'absolute',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '30px',
                                padding: '30px',
                                maxWidth: '500px',
                                left: '50%',
                                marginLeft: '-250px',
                                top: '235px'
                            },
                            forSpanContent: [
                                {
                                    text: '关闭制冷时和鼓风机关闭，空调指示灯否、空调请求信号关闭、空去循环指示灯关闭及鼓风机为0.',
                                    textStyle: {
                                        color: '#000',
                                        textIndent: '2rem',
                                        display: 'block'

                                    }
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
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevOperator',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-group',
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
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-circuit',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextOperator',
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
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-group',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevOperator',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
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
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1205',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-circuit',
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
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextOperator',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-group',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevOperator',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
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
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1205',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-circuit',
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
                                id: 'page01-guzhangma',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextOperator',
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
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-component05',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-group',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevOperator',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
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
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-component05',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1105',
                            component: {
                                id: 'page01-circuit',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-component01',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextOperator',
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
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-circuit',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
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
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-dianlu',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-circuit',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-zhenduan',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-circuit',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-circuit',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
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
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-chaizhuang',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-shujuliubuzhou',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-pdf',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-circuit',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-dianlu',
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
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-zhenduan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-chaizhuang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component19',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component19',
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
                        id: 'page01-nextOperator',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextOperator',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        }
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
    planConfig,
}
