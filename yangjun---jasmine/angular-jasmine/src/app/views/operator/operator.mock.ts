interface Config {
    description;
    chapterArray;
    pageArray;
}
const operatorConfig: Config = {
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
            id: 'chapter04',
            name: '实际操作',
            description: '实际操作',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page04',
            isPass: 1,
            chapterID: 'chapter04',
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
                                    src: './assets/images/principle/yibiao.png'
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
                                    src: './assets/images/principle/leadIn_faultInformation.png'
                                },
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    display: 'block',
                                    src: './assets/images/operator/41.png'
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-table',
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
                                    question: '如果控制电路测量下列哪个选项说法是正确的？',
                                    questionCorrectAnswer: '正确答案: C',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A:  端对端电阻小于2欧姆说明电路一定无故障',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'B:  如果断开控制电路两端测量电压高于2V说明系统对地短路',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'C:  如果断开控制电路两端测量电压高于2V说明系统电源短路',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'D:  如果段考控制电路两端测量对地不为无穷大可能对地断路',
                                            name: 'radio'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    question: 'A至控制单元X3 9号端子为电阻无穷大可以说明什么？当前测量温度传感器插头',
                                    questionCorrectAnswer: '正确答案: B',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 电路短路',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'B: 线路断路',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'C: 对搭铁断路',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'D: 对电源短路',
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
                // {
                //     id: 'page01-obdscan',
                //     type: 'obdscan',
                //     passCondition: { event: '', state: '', },
                //     remark: '',
                //     initialStateID: 'state02',
                //     src: '',
                //     stateArray: [
                //         {
                //             id: 'state01',
                //             style: {
                //                 default: {
                //                     display: 'block',
                //                 },
                //                 filterPage: 'readStream'
                //             },
                //             animation: {
                //                 animationInID: '',
                //                 animationOnID: 'halo',
                //                 animationOutID: '',
                //             },
                //             text: '0'
                //         },
                //         {
                //             id: 'state02',
                //             style: {
                //                 default: {
                //                     display: 'none',
                //                 },
                //             },
                //         },
                //     ],
                // },
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
                                    num: '0',
                                    unit: '℃ ',
                                },
                            ]
                        },
                        {
                            id: 'state03',
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
                                    num: '0',
                                    unit: '℃ ',
                                },
                            ]
                        },
                        {
                            id: 'state04',
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
                                    num: '0',
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
                    id: 'page01-multimeter',
                    type: 'multimeter',
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
                                    red: {
                                    },
                                    black: {
                                        positionLeft: '257',
                                        positionTop: '106',
                                        d: 'M269 115 C269 115 229 35 885 395'
                                    },
                                },
                                isInVStatus: false,
                                OCanClick: true,
                                VCanClick: true,
                            },
                            hotSpotShow: 'measure01',

                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(0deg)',
                                    red: {
                                    },
                                    black: {
                                        positionLeft: '257',
                                        positionTop: '106',
                                        d: 'M269 115 C269 115 229 35 885 395'
                                    },
                                },
                                isInVStatus: true,
                                OCanClick: false,
                                VCanClick: true,

                            },
                            hotSpotShow: 'measure02',

                            // initValue: {
                            //     num: '',
                            //     unit: ''
                            // },

                        },


                        {
                            id: 'state04',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(0deg)',
                                    red: {
                                    },
                                    black: {
                                    },
                                },
                                isInVStatus: false,
                                OCanClick: true,
                                VCanClick: false,
                            },
                            hotSpotShow: 'measure03',
                            // initValue: {
                            //     num: '1.501',
                            //     unit: 'V'
                            // },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '462',
                                        positionTop: '75',
                                        d: 'M470 80 C470 80 620 37 853 375'
                                    },
                                    black: {
                                        positionLeft: '305',
                                        positionTop: '-117',
                                        d: 'M320 0 C320 0 302 -110 850 375'
                                    },
                                },
                                isInVStatus: false,

                            },
                            // initValue: {
                            //     num: '2.607',
                            //     unit: 'V'
                            // },

                        },


                        {
                            id: 'state06',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '462',
                                        positionTop: '75',
                                        d: 'M470 80 C470 80 620 37 853 375'
                                    },
                                    black: {
                                        positionLeft: '305',
                                        positionTop: '-117',
                                        d: 'M320 0 C320 0 302 -110 850 375'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '3.307',
                                unit: 'V'
                            },
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '462',
                                        positionTop: '75',
                                        d: 'M470 80 C470 80 620 37 853 375'
                                    },
                                    black: {
                                        positionLeft: '305',
                                        positionTop: '-117',
                                        d: 'M320 0 C320 0 302 -110 850 375'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '1.419',
                                unit: 'V'
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
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: true,
                                deg0: false,
                                canClickStatus: false,

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
                            id: 'state10',
                            style: {
                                default: {
                                    display: 'block',
                                },
                                deg140: false,
                                deg90: false,
                                deg0: true,
                                canClickStatus: true
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
                    id: 'page01-datie',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '31',
                                    height: '55',
                                    positionLeft: '560',
                                    positionTop: '450',
                                    display: 'block',
                                    zIndex: '999',
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
                    id: 'page01-hot1',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '1',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '214',
                                    positionTop: '288',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot2',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '2',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '212',
                                    positionTop: '310',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot3',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '3',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '211',
                                    positionTop: '333',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot4',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '4',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '194',
                                    positionTop: '287',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot6',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '6',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '188',
                                    positionTop: '329',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot11',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '11',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '588',
                                    positionTop: '314',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot12',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '12',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '608',
                                    positionTop: '317',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot13',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '13',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '627',
                                    positionTop: '320',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-prevCheck',
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
                    id: 'page01-nextCheck',
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
                    id: 'page01-hot14',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '14',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '648',
                                    positionTop: '324',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hot15',
                    type: 'hotarea',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    position: '15',
                    initialStateID: 'state01',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '12',
                                    height: '12',
                                    positionLeft: '669',
                                    positionTop: '327',
                                    display: 'block',
                                    zIndex: '999',
                                    borderRadius: '50%',
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
                                    height: '295',
                                    positionLeft: '0',
                                    positionTop: '86',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '120px 295px',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-hostpotShadow',
                    type: 'image',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '200',
                                    height: '40',
                                    positionLeft: '770',
                                    positionTop: '320',
                                    display: 'block',
                                    zIndex: '999',
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
                    id: 'page01-leftFlash',
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
                                    width: '50',
                                    height: '80',
                                    positionLeft: '360',
                                    positionTop: '235',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
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
                            style: {
                                default: {
                                    width: '80',
                                    height: '80',
                                    positionLeft: '320',
                                    positionTop: '149',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state06',
                            style: {
                                default: {
                                    width: '60',
                                    height: '60',
                                    positionLeft: '200',
                                    positionTop: '130',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    width: '60',
                                    height: '60',
                                    positionLeft: '200',
                                    positionTop: '130',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-rightFlash',
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
                                    width: '80',
                                    height: '84',
                                    positionLeft: '650',
                                    positionTop: '240',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
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
                            style: {
                                default: {
                                    width: '80',
                                    height: '50',
                                    positionLeft: '645',
                                    positionTop: '210',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state06',
                            style: {
                                default: {
                                    width: '80',
                                    height: '110',
                                    positionLeft: '522',
                                    positionTop: '212',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    width: '80',
                                    height: '110',
                                    positionLeft: '522',
                                    positionTop: '212',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '9999',
                                    border: '1px solid #f00'
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
                            style: {
                                default: {
                                    display: 'none',
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
                    id: 'page01-tishi',
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
                                    content: '安全提示'
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
                                    content: '安全提示'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-bujian',
                    type: 'button',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state05',
                    src: '',
                    stateArray: [
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    width: '175',
                                    height: '50',
                                    positionLeft: '443',
                                    positionTop: '153',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadeIn',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '20',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '空调线束已更换'
                                }
                            ],
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '175',
                                    height: '50',
                                    positionLeft: '443',
                                    positionTop: '153',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadeIn',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '20',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '请重新选择'
                                }
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '175',
                                    height: '50',
                                    positionLeft: '443',
                                    positionTop: '153',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadeOut',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '20',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '空调线束已更换'
                                }
                            ],
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '175',
                                    height: '50',
                                    positionLeft: '443',
                                    positionTop: '153',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundColor: '#000'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'fadeOut',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '20',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block'
                                    },
                                    content: '请重新选择'
                                }
                            ],
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-liucheng',
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
                                    content: '诊断流程'
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
                                    content: '诊断流程'
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
                                    content: '诊断帮助'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'weixiu',
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
                                    content: '维修'
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
                                    content: '维修'
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
                                    positionTop: '285',
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
                                    content: '维修'
                                }
                            ],
                        },
                    ],
                },
                {
                    id: 'page01-gongzuodan',
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
                                    positionTop: '330',
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
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#c7001d'
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
                                    positionTop: '200',
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
                        },
                    ],
                },
                {
                    id: 'page01-celiang',
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
                                    positionTop: '235',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    color: '#c7001d'
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
                                    content: '测量'
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
                                    positionTop: '235',
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
                                    content: '测量'
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
                                    src: './assets/images/operator/twyer-knob.png'

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
                                    positionBottom: '50px',
                                    positionRight: '192px',
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
                                    positionBottom: '50px',
                                    positionRight: '192px',
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
                                    positionBottom: '71px',
                                    positionRight: '38px',
                                    width: '15px',
                                    height: '15px',
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
                                    positionBottom: '71px',
                                    positionRight: '38px',
                                    width: '15px',
                                    height: '15px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    positionBottom: '52px',
                                    positionRight: '73px',
                                    width: '15px',
                                    height: '15px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                },
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    positionBottom: '52px',
                                    positionRight: '73px',
                                    width: '15px',
                                    height: '15px',
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
                                    positionBottom: '56px',
                                    positionRight: '17px',
                                    width: '15px',
                                    height: '15px',
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
                                    positionBottom: '54px',
                                    positionRight: '17px',
                                    width: '21px',
                                    height: '21px',
                                    zIndex: '999',
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundColor: 'blue'
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
                                    positionBottom: '140px',
                                    positionRight: '606px',
                                    width: '29px',
                                    height: '27px',
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
                    id: 'page01-next',
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
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'default',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_gray.png',
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
                    ]
                },
                {
                    id: 'page01-prev',
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
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'default',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_gray.png',
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
                    ]
                },

                {
                    id: 'page01-measure-next',
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
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state06',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'default',
                                    zIndex: '999',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_gray.png',
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
                    ]
                },
                {
                    id: 'page01-measure-prev',
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
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state06',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
                                },
                            },
                        },
                        {
                            id: 'state04',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '260',
                                    cursor: 'default',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_gray.png',
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
                    ]
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
                                    width: '800',
                                    height: '380',
                                    positionLeft: '168',
                                    positionTop: '75',
                                    backgroundImage: './assets/images/operator/operator-safe.png',
                                    backgroundSize: '100%',
                                },
                            },
                            title: '安全提示',
                            text: '',
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/operator/measure01.png'
                                },
                            },
                            contents: [
                                {
                                    text: '通过以上的测量，你应该已经可以确认故障部位，请选择正确的部件进行更换。'
                                },
                            ]
                        },
                        {
                            id: 'state04',
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
                                    text: '1.蒸发箱温度传感器位于鼓风机左侧位置。'
                                },
                                {
                                    text: '2.请您点击红框查看蒸发箱传感器。'
                                },
                            ]
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/41-1.png'
                                },
                            },
                            contents: [
                                {
                                    text: '请点击左右两侧红框，分别检查，温控执行器电机和HAVC控制模块。'
                                },
                            ]
                        },
                        {
                            id: 'state06',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/operator/41-2.png'
                                },
                            },
                            contents: [
                                {
                                    text: '请点击红框查看蒸发器传感器线束连接情况。'
                                },
                            ]
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/operator/41.png'
                                },
                            },
                            contents: [
                                {
                                    text: '1.关闭点火开关。'
                                },
                                {
                                    text: '2.断开线束连接。'
                                },
                            ]
                        },
                        {
                            id: 'state08',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42-1.png'
                                },
                            },
                            contents: [
                                {
                                    text: '请点击左右两侧红框，分别断开温控执行器电机线束和HAVC控制模块X3插头。'
                                },
                            ]
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42-2.png'
                                },
                            },
                            contents: [
                                {
                                    text: '1.关闭点火开关'
                                },
                                {
                                    text: '2.测量蒸发箱温度传感器线束端子B与搭铁之间是否存在断路或电阻过大故障。如果大于10Ω请修理线束断路或电阻过大故障。'
                                },
                            ]
                        },
                        {
                            id: 'state10',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42.png'
                                },
                            },
                            contents: [
                                {
                                    text: '首先打开点火开关，然后测量温度控制执行器控制电路是否存在对电源短路的情况。请使用万用表直流电压挡位，然后黑色表笔搭铁，红色表笔连接测量插头1、2、3、4、6号针脚。并记录测得电压。如果端子电压高于1V请修理线路对电源短路故障。'
                                },
                            ]
                        },
                        {
                            id: 'state11',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42.png'
                                },
                            },
                            contents: [
                                {
                                    text: '首先关闭点火开关，然后测量温度控制执行器控制电路是否存在对地短路的情况。请使用万用表电阻挡位，然后黑色表笔搭铁，红色表笔连接测量插头1、2、3、4、6号针脚。并记录测得电阻。如果端子电阻大于2Ω说明线路与负极线搭铁，请检修温度控制执行器控制电路对线路负极短路故障。'
                                },
                            ]
                        },
                        {
                            id: 'state12',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42.png'
                                },
                            },
                            contents: [
                                {
                                    text: '首先关闭点火开关，然后测量温度控制执行器控制电路和电源线端对端电阻。请使用万用表电阻挡位，然后黑色表笔与红色表笔本别连接控制电路两端。并记录测得电阻。如果端子电阻大于2Ω，请维修线束。'
                                },
                            ]
                        },
                        {
                            id: 'state13',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: ''
                                },
                            },
                            contents: [
                                {
                                    text: '1.点火开关置于ON挡。'
                                },
                                {
                                    text: '2.打开诊断仪选择“空调控制模块”并读取数据流。'
                                },
                                {
                                    text: '3.启动发动机'
                                },
                                {
                                    text: '4.启动鼓风机至最大'
                                },
                                {
                                    text: '5.打开空调制冷开关。'
                                },
                                {
                                    text: '6.观察蒸发箱温度传感器是否正常。'
                                },
                            ]
                        },
                        {
                            id: 'state14',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundImage: './assets/images/operator/42-2.png'
                                },
                            },
                            contents: [
                                {
                                    text: '1.打开点火开关'
                                },
                                {
                                    text: '2.测量蒸发箱温度传感器线束端子A与搭铁之间电压。'
                                },
                            ]
                        },
                        {
                            id: 'state15',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/operator/43-1.png'
                                },
                            },
                            contents: [
                                {
                                    text: '点击下一步然后继续进行测量'
                                },

                            ]
                        },
                        {
                            id: 'state16',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '1024',
                                    height: '530',
                                    positionLeft: '0',
                                    positionTop: '0',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/operator/43-2.png'
                                },
                            },
                            contents: [
                                {
                                    text: '1.点火开关已关闭。'
                                },
                                {
                                    text: '2.请测量蒸发器温度传感器控制电端子A与X3 20号端子之间电阻。'
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
                    id: 'page01-weixiu1',
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
                                    width: '160',
                                    height: '150',
                                    positionRight: '100',
                                    positionTop: '350',
                                    display: 'block',
                                    opacity: '1',
                                    backgroundSize: '160px 150px',
                                    src: './assets/images/01/p46_04.png',
                                    cursor: 'pointer'
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
                    id: 'page01-weixiu2',
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
                                    width: '160',
                                    height: '150',
                                    positionRight: '100',
                                    positionTop: '190',
                                    display: 'block',
                                    opacity: '1',
                                    backgroundSize: '160px 150px',
                                    src: './assets/images/01/p46_03.png',
                                    cursor: 'pointer'

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
                    id: 'page01-weixiu3',
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
                                    width: '160',
                                    height: '150',
                                    positionRight: '100',
                                    positionTop: '30',
                                    display: 'block',
                                    opacity: '1',
                                    backgroundSize: '160px 150px',
                                    src: './assets/images/01/p46_02.png',
                                    cursor: 'pointer'
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
                        id: 'page01-tishi',
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
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                                id: 'page01-prevCheck',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-nextCheck',
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
                                id: 'page01-hostpotShadow',
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
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-acLine',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-table',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu3',
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
                                id: 'page01-switch',
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
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-tishi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-liucheng',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'weixiu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-gongzuodan',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-celiang',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
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
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-liucheng',
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
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                                id: 'page01-prevCheck',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-nextCheck',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-table',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-weixiu1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-weixiu2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-weixiu3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-celiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state13',
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
                                id: 'page01-ac',
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
                                id: 'page01-obdscan-shadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-tishi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-liucheng',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'weixiu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-gongzuodan',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish01',
                    component: {
                        id: 'weixiu',
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
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prevCheck',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-nextCheck',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
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
                                id: 'page01-table',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state03',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu3',
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
                                id: 'page01-tishi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-liucheng',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'weixiu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-gongzuodan',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-celiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
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
                    ],
                },
                {
                    id: 'publish01',
                    component: {
                        id: 'page01-gongzuodan',
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
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                                id: 'page01-prevCheck',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-nextCheck',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
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
                                id: 'page01-table',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-weixiu3',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-tishi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-liucheng',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'weixiu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1104',
                            component: {
                                id: 'page01-gongzuodan',
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
                                id: 'page01-shujuliu',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-celiang',
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
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                                id: 'page01-audio',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-celiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state13',
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
                                id: 'page01-ac',
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
                                id: 'page01-obdscan-shadow',
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
                        id: 'page01-celiang',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state06',
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
                                id: 'page01-hostpotShadow',
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
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-rightFlash',
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
                            id: 'subscribe1102',
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
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
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
                                id: 'page01-celiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
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
                                id: 'page01-twyer-knob',
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
                    ],
                },
                {
                    id: 'publish03-dataflow01',
                    component: {
                        id: 'page01-start-button',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                            timeOut: '',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '',
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03-dataflow02',
                    component: {
                        id: 'page01-twyer-button',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyer-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                    id: 'publish03-08',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            id: 'subscribe1101',
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
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03-dataflow03',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '',
                            setCurrentState: 'state04',
                        },
                    ],
                },
                {
                    id: 'publish03-dataflow03',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-obdscan',
                                stateID: '',
                            },
                            timeOut: '',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-weixiu1',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '1000',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-weixiu1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        }
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-weixiu2',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '1000',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-weixiu3',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '500',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '1000',
                            setCurrentState: 'state05',
                        }
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-component00',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-bujian',
                        stateID: 'state06',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-bujian',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-leftFlash',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-leftFlash',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
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
                        id: 'page01-rightFlash',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
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
                            setCurrentState: 'state06',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-rightFlash',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
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
                        id: 'page01-leftFlash',
                        stateID: 'state06',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
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
                            setCurrentState: 'state08',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-leftFlash',
                        stateID: 'state07',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state10',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        }
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-rightFlash',
                        stateID: 'state06',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-leftFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
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
                            setCurrentState: 'state09',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
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
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-rightFlash',
                        stateID: 'state07',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state10',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-component00',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-rightFlash',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        }
                    ],
                },
                {
                    id: 'publish03-08',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                        id: 'page01-next',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            setCurrentState: 'state11',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-lock-button',
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
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-prev',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state10',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-next',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state12',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state05',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-lock-button',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-prev',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-hostpotShadow',
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
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state11',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-lock-button',
                                stateID: '',
                            },
                            timeOut: '10',
                            setCurrentState: 'state04',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-nextCheck',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextCheck',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        }
                    ],
                },

                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-next',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state14',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-prev',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state09',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-next',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state15',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-prev',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state14',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-next',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state16',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-measure-prev',
                        stateID: 'state06',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-measure-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state15',
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
    operatorConfig,
}
