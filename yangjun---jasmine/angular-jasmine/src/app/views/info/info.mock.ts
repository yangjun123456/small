interface Config {
    description;
    chapterArray;
    pageArray;
}
const infoConfig: Config = {
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
            name: '信息资讯',
            description: '信息资讯',
            childChapterArray: [],
        },
    ],
    pageArray: [
        {
            id: 'page02',
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
                    id: 'page01-canclose',
                    type: 'canclose',
                    passCondition: { event: '', state: '', },
                    remark: '',
                    initialStateID: 'state02',
                    src: './assets/images/kt/bg.png',
                    stateArray: [
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '机械式手动空调控制系统',
                            imgArr: [
                                {
                                    img: './assets/images/kt/fenlei1_1.png',
                                    style: {
                                        right: '510px',
                                        width: '400px',
                                        top: '100px',
                                        height: '300px'
                                    }
                                },
                                {
                                    img: './assets/images/kt/fenlei1_2.png',
                                    style: {
                                        right: '50px',
                                        width: '400px',
                                        top: '100px',
                                        height: '300px'
                                    }
                                }
                            ],
                            content: [
                                {
                                    text: `机械式手动空调控制系统，其在切换循环模式、出风模式及温度控制方面采用机械结构，
                                    通常采用拉线结构，尽可能减少电子元件和传感器的介入。鼓风机一般采用电阻控制或经过功率放大器控制转速，
                                    而制冷开关采用电子开关控制压缩机离合器的吸合与关闭。在系统保护方面采用压力保护开关或热熔塞保护系统安全。
                                    其结构简单成本低，但其机械结构容易出问题，已经逐渐被电子控制方式代替。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state08',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '真空式控制系统',
                            imgArr: [
                                {
                                    img: './assets/images/kt/fenlei2_1.png',
                                    style: {
                                        right: '560px',
                                        top: '100px',
                                        width: '400px',
                                        height: '300px'
                                    }
                                },
                                {
                                    img: './assets/images/kt/fenlei2_2.png',
                                    style: {
                                        right: '50px',
                                        top: '100px',
                                        width: '400px',
                                        height: '300px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `通过真空度的改变进行机械动作用于控制风门和热水阀。真空度由发动机或电动真空泵提供并利用真空罐存储。执行机构一般为真空膜片式执行器。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px'
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state09',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '电子式手动控制系统',
                            imgArr: [
                                {
                                    img: './assets/images/kt/fenlei3_1.png',
                                    style: {
                                        top: '200px',
                                        right: '50px',
                                        width: '850px',
                                        height: '353px',
                                    }
                                },
                            ],
                            img: './assets/images/kt/8.png',
                            content: [
                                {
                                    text: `纯粹的机械控制系统在汽车手动空调中逐渐淘汰，电子式手动控制系统是现在的主流控制系统，虽然其系统中不具有AUTO功能，但其控制系统操作面板采用集成制，并与空调控制单元连接，其温度、循环模式、出风模式等都采用步进电机控制，其运行工况通过压力传感器、温度传感器并通过发动机相关参数进行综合考量再进行控制。`
                                    , style: {
                                        position: 'absolute',
                                        top: '61px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state16',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '整体式空调模块',
                            imgArr: [
                                {
                                    img: './assets/images/kt/17.png',
                                    style: {
                                        width: '850px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `暖风水箱也置于整体空调模块内，它把加热器和蒸发器装在一个箱体内，共用一台风扇。这样可以使结构更加紧凑。`
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state17',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '暖风水箱',
                            imgArr: [
                                {
                                    img: './assets/images/kt/18.png',
                                    style: {
                                        right: '135px',
                                        top: '190px',
                                        width: '700px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `暖风水箱一般采用铝材，其目的是为了增加散热效率，其内部设置有蜿蜒的管路为了增加冷却液流过的距离和时间，管路周围有曲折的散热薄片是为了增大散热面积，通过这种两方法可以把流经的冷却液中的热量充分散发到周边空气。`
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state18',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '水阀',
                            imgArr: [
                                {
                                    img: './assets/images/kt/19.png',
                                    style: {
                                        top: '190px',
                                        width: '850px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `暖风水阀是汽车暖风机的暖风开关，汽车暖风水箱通过进/出管路与发动机循环水连接，水阀是切断暖风水箱的开关。此外还有一些车辆暖风系统装有真空式冷却液控制阀，当发动机启动时使用真空力开启冷却液通道。`
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state27',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '暖风系统的基本原理',
                            videoSrc: './assets/mp4/AGM.mp4'
                        },
                        {
                            id: 'state28',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '空调配气系统系统示意图',
                            imgArr: [
                                {
                                    img: './assets/images/kt/34-1.png',
                                    style: {
                                        right: '18px',
                                        top: '65px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: '1.',
                                    style: {
                                        float: 'left'
                                    }
                                },
                                {
                                    text: '进口阶段',
                                    style: {
                                        float: 'left',
                                        color: '#f00',
                                        marginLeft: '3px'
                                    }
                                },
                                {
                                    text: '主要是指控制新鲜空气和室内循环阶段。主要通过内外循环风门进行控制。控制方式分为手动和自动。',
                                    style: {
                                        maxWidth: '400px'
                                    }
                                },
                                {
                                    text: '2.',
                                    style: {
                                        float: 'left',
                                    }
                                },
                                {
                                    text: '温度控制阶段',
                                    style: {
                                        float: 'left',
                                        color: '#f00',
                                        marginLeft: '3px'
                                    }
                                },
                                {
                                    text: '，在此阶段通过控制风门开闭，决定打开制冷管道或制热管道。在默认情况下一般制热管道为关闭状态，气流通过蒸发器。当温度控制旋钮调整到制暖时，温控风门根据温度设置旋转至指定角度，此时气流流经暖风交换器，使空气加热，当暖风开启到最大挡位时，温控风门开启到最大位置。',
                                    style: {
                                        maxWidth: '400px'
                                    }
                                },
                                {
                                    text: '3.配气系统的最后阶段为',
                                    style: {
                                        float: 'left',
                                    }
                                },
                                {
                                    text: '出风口模式阶段',
                                    style: {
                                        float: 'left',
                                        color: '#f00',
                                        marginLeft: '3px'
                                    }
                                },
                                {
                                    text: '，在此阶段被加热或冷却的气流通过不同的翻板动作，选择不同的风道，从而达到不同位置出风口出风。',
                                    style: {
                                        maxWidth: '400px'
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state29',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '配气系统电机',
                            imgArr: [
                                {
                                    img: './assets/images/kt/35.png',
                                    style: {
                                        right: '18px',
                                        top: '170px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `配气系统的模式转换需要通过控制翻板的角度转换来实现，所以每个翻板都有相应的执行元件。此执行元件就是翻板电机，它一般采用步进电机进行控制，通过电机旋转改变翻板角度，最终使进气口横截面积改变从而控制气流大小和混合程度，最终实现温度的控制，步进电机的控制由空调控制单元决定。
                                `
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state41',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '暖风水阀故障',
                            imgArr: [
                                {
                                    img: './assets/images/kt/43.png',
                                    style: {
                                        top: '20px',
                                        right: '42px',
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `对于
                                `
                                    , style: {
                                        float: 'left',
                                        marginTop: '275px',
                                        fontSize: '18px'
                                    }
                                },
                                {
                                    text: `真空阀式暖风水阀
                                `
                                    , style: {
                                        float: 'left',
                                        color: '#f00',
                                        fontSize: '18px',
                                        marginTop: '275px',
                                        marginLeft: '0'
                                    }
                                },
                                {
                                    text: `，应首先检查真空管是否松脱或破裂导致真空力不足而无法开启阀门。如果真空力正常且管路无松脱和破损，请确定是否真空阀本体是否损坏。在测试时可以使用
                                `
                                    , style: {
                                        float: 'left',
                                        maxWidth: '265px',
                                        marginTop: '275px',
                                        fontSize: '18px',
                                        marginLeft: '-182px',
                                        textIndent: '180px'
                                    }
                                },
                                {
                                    text: `手动真
                                `
                                    , style: {
                                        float: 'left',
                                        color: '#f00',
                                        fontSize: '18px',
                                        marginTop: '400px',
                                        marginLeft: '-67px'
                                    }
                                },
                                {
                                    text: `空泵
                                `
                                    , style: {
                                        float: 'left',
                                        color: '#f00',
                                        fontSize: '18px',
                                        marginTop: '424px',
                                        marginLeft: '-265px'
                                    }
                                },
                                {
                                    text: `连接真口，在达到标准真空力时，可以水阀入口吹气，然后观察出口是否有气流。如不出风或阻力过大，更换真空阀。
                                `
                                    , style: {
                                        maxWidth: '265px',
                                        marginTop: '424px',
                                        fontSize: '18px',
                                        marginLeft: '-266px',
                                        textIndent: '39px',
                                        float: 'left'
                                    }
                                },
                                {
                                    text: `拉线式水阀
                                `
                                    , style: {
                                        marginTop: '275px',
                                        fontSize: '18px',
                                        color: '#f00',
                                        marginLeft: '384px'
                                    }
                                },
                                {
                                    text: `的操纵机构使用钢丝连接，当搬动温控开关制暖时，通过钢丝拉动水阀，此时应检查钢丝是否松脱，如钢丝松脱请连接。如果钢丝连接完好，可手动扳至打开状态，然后从入口吹气，看是否存在气阻或不通，如果气阻过大或不通请更换水阀。
                                `
                                    , style: {
                                        maxWidth: '265px',
                                        marginTop: '-25px',
                                        float: 'left',
                                        fontSize: '18px',
                                        textIndent: '91px',
                                        marginLeft: '55px'
                                    }
                                },
                                {
                                    text: `对于使用
                                `
                                    , style: {
                                        marginTop: '-25px',
                                        fontSize: '18px',
                                        marginLeft: '704px'
                                    }
                                },
                                {
                                    text: `电磁阀控制的水阀
                                `
                                    , style: {
                                        maxWidth: '265px',
                                        marginTop: '-25px',
                                        float: 'left',
                                        fontSize: '18px',
                                        color: '#f00',
                                        marginLeft: '129px'
                                    }
                                },
                                {
                                    text: `，首先应确定电路方面问题，如电磁阀供电及搭铁是否存电断路及短路情况，如果线路正常使用万用表测量电磁阀线圈，如果电阻过大更换电磁阀。以上都正常请检查内部是否堵塞或电磁阀卡滞。
                                `
                                    , style: {
                                        maxWidth: '265px',
                                        marginTop: '-25px',
                                        fontSize: '18px',
                                        float: 'left',
                                        textIndent: '212px',
                                        marginLeft: '55px'
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state42',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '管路气阻或堵塞',
                            imgArr: [
                                {
                                    img: './assets/images/kt/62.png',
                                    style: {
                                        right: '45px',
                                        top: '245px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `1.排出发动机冷却液，并观察是否含有杂质如水垢。注意！冷却液有毒不能皮肤碰触、不得直接排入下水道。
                                `
                                    , style: {
                                    }
                                },
                                {
                                    text: `2.断开暖风水箱进口和出口管路，利用高压空气吹出内部杂质，必要时清洗。
                                `
                                    , style: {
                                    }
                                },
                                {
                                    text: `3.使用冷却液加注设备对冷却系统重新加注冷却液。注意不能混入空气。
                                `
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state43',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '温控翻板电机故障',
                            imgArr: [
                                {
                                    img: './assets/images/kt/63.png',
                                    style: {
                                        right: '160px',
                                        top: '245px'
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `
                                  1.通常情况温控翻板不工作时，应停留在暖风关闭的状态。如果空调不制暖。可以把温控开关置于最高温度，然后打开AC，如果此时出冷风且温度达到标准，说明温控翻板未打开。
                                  `
                                    , style: {
                                    }
                                },
                                {
                                    text: `
                                  2.确定温控翻板电机位置，断开插头，检查电机是否有供电，然后检测其它线路是否存在断路和短路，最后检查电机线圈阻值，也可以使用蓄电池连接电机供电及搭铁，直接观察电机是否动作。如一切正产尝试更换控制单元。
                                  `
                                    , style: {
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state44',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '手动和自动空调控制面板区别',
                            imgArr: [
                                {
                                    img: './assets/images/kt/qubie01.png',
                                    style: {
                                        right: '50px',
                                        top: '100px',
                                        width: '900px',
                                        height: '300px',

                                    }
                                },
                                {
                                    // img: './assets/images/kt/qubie02.png',
                                    img: '',
                                    style: {
                                        left: '150px',
                                        top: '231px',
                                        width: '100px',
                                        height: '40px',
                                        border: '2px solid red',
                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `
                                  手动空调的温度控制、循环模式和出风模式都是由人通过机械式面板或电子按键控制，而自动空调面板上都有AUTO按键，当设置好温度后，空调系统自动控制车内的温度和循环模式，所以自动空调控制系统比手动空调控制更加复杂成本也更高。
                                  `
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state45',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '空调面板的操作',
                            imgArr: [
                                {
                                    img: './assets/images/kt/caozuo01.png',
                                    style: {
                                        right: '37px',
                                        top: '82px',
                                        width: '950px',
                                        height: '480px',

                                    }
                                },

                            ],
                            content: [
                                {
                                    text: ``
                                    , style: {

                                    }
                                },
                            ]
                        },
                        {
                            id: 'state46',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '手动空调控制面板',
                            imgArr: [
                                {
                                    img: './assets/images/kt/jiegou01.png',
                                    style: {
                                        right: '50px',
                                        top: '100px',
                                        width: '945px',
                                        height: '350px',

                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `
                                  1.控制面板是发送空调控制指令的控制元件，其控制方式分为两种，机械控制面板旋钮通过拉线控制翻板的开启和角度，其它其它功能通过电子开关经过空调控制单元或放大器控制压缩机和鼓风机。而电子式控制面板集成有电子控制模块，其发动指令到空调控制单元，有空调控制单元控制空调系统其它元件的工作。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state47',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '鼓风机控制方式',
                            imgArr: [
                                {
                                    img: './assets/images/kt/jiegou02.png',
                                    style: {
                                        right: '114px',
                                        top: '81px',
                                        width: '777px',
                                        height: '295px',

                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `1.通过改变开关与鼓风机调速电阻的接通方式令鼓风机以不同转速工作。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '112px',
                                    }
                                },
                                {
                                    text: `2.晶体管调速：调速原理是利用晶体管对电流的放大作用，当调速开关或空调控制器送给晶体管控制极一个较小电流时，晶体管就会按照一定放大倍数将控制电流放大，流过鼓风机的电流是就晶体管对控制电流放大后的电流。其特点是对鼓风机电机转速实时连续调节，晶体管调速模块比电阻式调速复杂。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state48',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '出风模式、内外循环和温控步进电机',
                            imgArr: [
                                {
                                    img: './assets/images/kt/jiegou02.png',
                                    style: {
                                        right: '50px',
                                        top: '100px',
                                        width: '800px',
                                        height: '350px',

                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `步进电机为直流电机它由位置传感器和传动减速机构组成，步进电机工作电压多为5-12V，控制单元通过控制步进电机导通电路，控制电机旋转角度。如上图所示。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state49',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '温度和空调压力传感器',
                            imgArr: [
                                {
                                    img: './assets/images/kt/jiegou04.png',
                                    style: {
                                        right: '150px',
                                        top: '61px',
                                        width: '720px',
                                        height: '304px',

                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `在空调系统中更具空调系统的复杂程度具有多个温度传感器，包括环境温度传感器、
                                    蒸发箱温度传感器、车内温度传感器。温度传感器参数是空调控制模块采集的重要参数之一。
                                    它决定了空调压缩机离合器是否结合，电磁占空比控制，热水阀的开启角度等。
                                    大多数情况下当蒸发器温度传感器失效后，可能造成压缩机不工作，
                                    除非系统能够采用其它温度传感器数值补偿如车内温度传感器。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                        width: '450px',
                                        left: '50px'
                                    }
                                },
                                {
                                    text: `空调压力传感器用于检测高压端的压力，压力参考值用于保护系统过压或欠压并修正空调电磁阀占空比的作用。如果压力过低可能代表系统泄漏、压力过高可能代表散热故障、堵塞和电磁故障。它是空调系统中重要的传感器之一。`
                                    , style: {
                                        position: 'absolute',
                                        bottom: '40px',
                                        width: '300px',
                                        left: '550px'
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state50',
                            style: {
                                default: {
                                    paddingTop: '52',
                                    display: 'block',
                                    zIndex: '9999',
                                },
                            },
                            title: '空调控制单元',
                            imgArr: [
                                {
                                    img: './assets/images/kt/jiegou05.png',
                                    style: {
                                        left: '50px',
                                        top: '100px',
                                        width: '400px',
                                        height: '350px',

                                    }
                                },
                            ],
                            content: [
                                {
                                    text: `空调控制单元是空调系统的大脑，在手动空调系统中，它根据驾驶员的意愿控制空调系统个元件的运行状态，
                                    并调节温度和气流。在机械式空调系统中，控制单元的作用被大大降低，可能由功率放大模块替换，
                                    不过此种技术已经逐渐淘汰，空调控制单元可以通过发动机工况、温度、
                                    压力传感器数值和冷却风扇的状态控制空调系统运行状态，当出现故障时控制系统进入保护模式并记录故障码。
`
                                    , style: {
                                        position: 'absolute',
                                        top: '100px',
                                        width: '300px',
                                        right: '50px'
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
                {
                    id: 'page01-reshui',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '90',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '机械拉线式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '90',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '机械拉线式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-paiqi',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '190',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '真空式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '190',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '真空式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-duli',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '290',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '电子式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '290',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '电子式控制系统',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-kongtiaoqi',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '整体式空调器',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '整体式空调器',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-shuixiang',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风水箱',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风水箱',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-shuifa',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '240',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '水阀',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '240',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '水阀',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-shuifayuanli',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风和水阀原理',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00F',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风和水阀原理',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-peiqiyuanli',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '配气系统原理',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '配气系统原理',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-fanbandianji',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '240',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '翻板电机',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '780',
                                    positionTop: '240',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '翻板电机',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-shuifaguzhang',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '90',
                                    display: 'none',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风水阀故障',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '90',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '暖风水阀故障',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-qizuhuoduse',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '190',
                                    display: 'none',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '管路气阻或堵塞',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '190',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '管路气阻或堵塞',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-fanbandianjiguzhang',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '290',
                                    display: 'none',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '温控翻板电机故障',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '425',
                                    positionTop: '290',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '3.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '温控翻板电机故障',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '120',
                                    height: '390',
                                    positionLeft: '0',
                                    positionTop: '75',
                                    paddingTop: '24',
                                    display: 'block',
                                    zIndex: '999',
                                    backgroundSize: '120px 390px',
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
                                    content: '可能原因'
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
                                    content: '可能原因'
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
                                    content: '相关知识'
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
                                    content: '相关知识'
                                }
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
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '90',
                                    height: '32',
                                    positionLeft: '15',
                                    positionTop: '420',
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
                    src: './assets/images/01/p9_1.png',
                    stateArray: [
                        {
                            id: 'state01',
                            isScroll: 1,
                            style: {
                                default: {
                                    width: '740',
                                    height: '350',
                                    positionLeft: '230',
                                    positionTop: '83',
                                    display: 'block',
                                    backgroundSize: '740px 350px'
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
                                    question: '关于手动空调下面描述正确的是哪项？',
                                    questionCorrectAnswer: '正确答案: C',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 手动空调温度传感器数量少于自动空调',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'B: 手动空调系统中不具有空调控制单元',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'C: 手动空调系统中鼓风机转速不能自动调节',
                                            name: 'radio'
                                        },
                                        {
                                            answer: 'D: 手动空调中压缩机都为定排量压缩机',
                                            name: 'radio'
                                        }
                                    ]
                                },
                                {
                                    number: 2,
                                    question: '关于空调压力传感器下列说法正确的是哪项？',
                                    questionCorrectAnswer: '正确答案: BD',
                                },
                                {
                                    type: 'radio',
                                    answers: [
                                        {
                                            answer: 'A: 空调压力传感器输出电压随压力增高而减小',
                                            name: 'a'
                                        },
                                        {
                                            answer: 'B: 空调压力传感器输出电压随压力增高而减增加',
                                            name: 'b'
                                        },
                                        {
                                            answer: 'C: 空调压力传感器为3线制',
                                            name: 'c'
                                        },
                                        {
                                            answer: 'D: 空调压力传感器为2线制',
                                            name: 'd'
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
                    id: 'page01-component09',
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
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#64961e',
                                    borderRadius: '6px',
                                    positionLeft: '356',
                                    positionTop: '40',
                                    animation: 'glow 800ms ease-out infinite alternate',
                                    boxShadow: '0 0 5px rgba(0,255,0,.3), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'grow',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '压缩机故障'
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#7f7f7f',
                                    borderRadius: '6px',
                                    positionLeft: '356',
                                    positionTop: '40',
                                    cursor: 'default',
                                    display: 'block',
                                    zIndex: '999',
                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                        cursor: 'default'

                                    },
                                    content: '压缩机故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        display: 'block',
                                        textIndent: '-35',
                                        positionLeft: '-105',
                                        positionTop: '15',
                                        position: 'relative'
                                    },
                                    content: '机械故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '-35',
                                        display: 'block',
                                        positionLeft: '-76',
                                        positionTop: '18',
                                        position: 'relative'
                                    },
                                    content: '电磁阀故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '-35',
                                        display: 'block',
                                        positionLeft: '-46',
                                        positionTop: '20',
                                        position: 'relative'
                                    },
                                    content: '电磁离合器'
                                },
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
                    id: 'page01-component10',
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
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#64961e',
                                    borderRadius: '6px',
                                    positionLeft: '586',
                                    positionTop: '40',
                                    animation: 'glow 800ms ease-out infinite alternate',
                                    boxShadow: '0 0 5px rgba(0,255,0,.3), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'grow',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '控制系统故障'
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#7f7f7f',
                                    borderRadius: '6px',
                                    positionLeft: '586',
                                    positionTop: '40',
                                    cursor: 'default',
                                    display: 'block',
                                    zIndex: '999',

                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                        cursor: 'default'
                                    },
                                    content: '控制系统故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        display: 'block',
                                        textIndent: '-35',
                                        positionLeft: '-102',
                                        positionTop: '15',
                                        position: 'relative'
                                    },
                                    content: '蒸发箱温度传感器'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '-35',
                                        display: 'block',
                                        positionLeft: '-83',
                                        positionTop: '20',
                                        position: 'relative'
                                    },
                                    content: '压力传感器'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3_left.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '35',
                                        display: 'block',
                                        positionLeft: '128',
                                        positionTop: '-8',
                                        position: 'relative',
                                        // transform: 'rotate(180deg)',
                                    },
                                    content: '鼓风机故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3_left.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '35',
                                        display: 'block',
                                        positionLeft: '104',
                                        positionTop: '-100',
                                        position: 'relative',
                                        // transform: 'rotate(180deg)',
                                    },
                                    content: '控制单元及电路故障'
                                },
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
                    id: 'page01-component11',
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
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#64961e',
                                    borderRadius: '6px',
                                    positionLeft: '266',
                                    positionTop: '425',
                                    animation: 'glow 800ms ease-out infinite alternate',
                                    boxShadow: '0 0 5px rgba(0,255,0,.3), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'grow',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '冷却系统故障'
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#7f7f7f',
                                    borderRadius: '6px',
                                    positionLeft: '266',
                                    positionTop: '425',
                                    // cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    cursor: 'default'

                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '冷却系统故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        display: 'block',
                                        textIndent: '-35',
                                        positionLeft: '-77',
                                        positionTop: '-160',
                                        position: 'relative'
                                    },
                                    content: '冷却风扇故障'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '-35',
                                        display: 'block',
                                        positionLeft: '-107',
                                        positionTop: '-152',
                                        position: 'relative'
                                    },
                                    content: '发动机水温高'
                                },
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
                    id: 'page01-component12',
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
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#64961e',
                                    borderRadius: '6px',
                                    positionLeft: '540',
                                    positionTop: '425',
                                    animation: 'glow 800ms ease-out infinite alternate',
                                    boxShadow: '0 0 5px rgba(0,255,0,.3), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #fff',
                                    cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'grow',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '高低压管路'
                                },
                            ],
                        },
                        {
                            id: 'state02',
                            style: {
                                default: {
                                    width: '156',
                                    height: '50',
                                    backgroundColor: '#7f7f7f',
                                    borderRadius: '6px',
                                    positionLeft: '540',
                                    positionTop: '425',
                                    // cursor: 'pointer',
                                    display: 'block',
                                    zIndex: '999',
                                    cursor: 'default'

                                },
                            },
                            textArray: [
                                {
                                    style: {
                                        color: '#fff',
                                        fontSize: '18',
                                        textAlign: 'center',
                                        lineHeight: '50',
                                        fontWeight: '700',
                                        display: 'block',
                                    },
                                    content: '高低压管路'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        display: 'block',
                                        textIndent: '-35',
                                        positionLeft: '-104',
                                        positionTop: '-179',
                                        position: 'relative'
                                    },
                                    content: '管路堵塞'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '-35',
                                        display: 'block',
                                        positionLeft: '-133',
                                        positionTop: '-152',
                                        position: 'relative'
                                    },
                                    content: '制冷剂泄漏'
                                },
                                {
                                    style: {
                                        color: '#000',
                                        fontSize: '16',
                                        width: '200',
                                        height: '40',
                                        backgroundImage: './assets/images/01/p9_2_2_3_left.png',
                                        backgroundSize: '200px 40px',
                                        textAlign: 'center',
                                        lineHeight: '40',
                                        textIndent: '35',
                                        display: 'block',
                                        positionLeft: '85',
                                        positionTop: '-225',
                                        position: 'relative',
                                        // transform: 'rotate(180deg)'
                                    },
                                    content: '冷凝器堵塞'
                                },
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
                    id: 'page01-component13',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '200',
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
                                    content: '功能'
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
                                    content: '功能'
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
                    id: 'page01-component14',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '270',
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
                                    content: '结构'
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
                                    positionTop: '270',
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
                                    content: '结构'
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
                    id: 'page01-component15',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '305',
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
                                    content: '原理'
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
                                    positionTop: '305',
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
                                    content: '原理'
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
                    id: 'page01-component16',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '235',
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
                                    content: '分类'
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
                                    content: '分类'
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
                    id: 'page01-component17',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '340',
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
                                    content: '检测'
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
                                    positionTop: '340',
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
                                    content: '检测'
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
                    id: 'page01-component18',
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
                                    width: '105',
                                    height: '32',
                                    positionLeft: '8',
                                    positionTop: '375',
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
                                    content: '拓展'
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
                                    positionTop: '375',
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
                                    content: '拓展'
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
                    id: 'page01-nextPlan',
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
                    ]
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
                            id: 'state00',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '540',
                                    height: '431',
                                    positionLeft: '213',
                                    positionTop: '65',
                                    backgroundImage: './assets/images/kt/gongneng.png'
                                },
                            },
                            title: '手动空调控制系统',
                            contents: [
                                {
                                    // tslint:disable-next-line:max-line-length
                                    text: `手动空调控制系统的概念是相对于自动空调的，在手动空调系统中不具有温度自动调整的功能（AUTO）,也就是说在系统中不具有温度控制的相关执行机构和控制程序。在比较简单的手动空调系统中，温度控制、出风模式、循环模式都只能在人为的干预下才能改变。手动空调系统结构简单，故障率和成本都较自动空调低，但其操作相对繁琐，对温度控制不够精确。一般在低配置车上多采用手动空调。`
                                },
                            ]
                        },
                        {
                            id: 'state01',
                            style: {
                                default: {
                                    display: 'block',
                                },
                            },
                            title: '手动空调控制系统分类',
                            contents: [
                                {
                                    text: '在手动空调控制系统中，根据控制方式主要分为三大类，分别为：机械拉线式、真空式和电子控制式，其中电子控制式应用最多。'
                                },
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '800',
                                    height: '400',
                                    positionLeft: '170',
                                    positionTop: '90',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/kt/jiegou.png'
                                },
                            },
                            title: '手动空调控制系统结构',
                            text: '以电子式空调控制系统为例，其只要结构包括、控制面板、空调控制单元或功率放大器、鼓风机、风门和温度控制机构、传感器。',
                        },
                        {
                            id: 'state07',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '820',
                                    height: '300',
                                    positionLeft: '145',
                                    positionTop: '110',
                                    backgroundImage: './assets/images/kt/zhuyi.png'
                                },
                            },
                            title: '使用注意',
                            text: '由于采用热水取暖的暖风系统使用发动机冷却液散热，所以在暖风开启时会增加发动机上升到正常温度所需的时间，尤其是在冬天的时候，过早的使用暖风会延长发动机预热时间，在这段时间内发动机将增加怠速、延长喷油脉宽使混合气变浓，这导致油耗增加同时使碳氢化合物的污染增加。所以建议暖风应等到发动机到达正常工作温度后在适当开启暖风。',
                        },
                        {
                            id: 'state19',
                            style: {
                                default: {
                                    display: 'table-cell',
                                    verticalAlign: 'middle',
                                    width: '634',
                                    height: '411',
                                    positionLeft: '114',
                                    positionTop: '60',
                                    backgroundImage: './assets/images/kt/yingyong.png'
                                },
                            },
                            title: '压缩机电磁离合器检测',
                            scrollStyle: {
                                overflowY: 'scroll',
                                display: 'table-cell',
                                verticalAlign: 'middle',
                            },
                            contents: [
                                {
                                    text: '使用万用表电阻挡位测量压缩机电磁离合器信号端子至搭铁电路，其电阻不应大于5欧姆。',
                                    style: {
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state25',
                            style: {
                                default: {
                                    display: 'block',
                                    width: '663',
                                    height: '410',
                                    positionLeft: '195',
                                    positionTop: '85',
                                    backgroundImage: './assets/images/kt/yingyong.png'
                                },
                            },
                            title: 'PTC（温控陶瓷）制暖的应用',
                            scrollStyle: {
                                overflowY: 'scroll'
                            },
                            contents: [
                                {
                                    text: 'PTC是Positive Temperature Coefficient 的缩写，正温度系数。电阻值会随着热敏电阻本体温度的变化呈现出阶跃性的变化。'
                                },
                                {
                                    text: '随着新能源汽车尤其是电动汽车的逐渐普所以采用电制热PTC方式也制暖形式也逐渐被接受。其主要原因由于电动车系统内不具有传统内燃发动机，无法采用传统类型的制暖系统。而PTC制暖有着得天独厚的优势。'
                                },
                                {
                                    text: 'PTC加热由PTC陶瓷发热元件与铝管组成。该类型PTC发热体有热阻小、换热效率高的优点，是一种自动恒温、省电的电加热器。突出特点在于安全性能上，任何应用情况下均不会产生如电热管类加热器的表面“发红”现象，从而引起烫伤，火灾等安全隐患。'
                                },
                            ]
                        },
                        {
                            id: 'state26',
                            style: {
                                default: {
                                    height: '334px',
                                    width: '592px',
                                    positionLeft: '7px',
                                    positionTop: '10px',
                                    zIndex: '1',
                                },
                            },
                            title: '手动空调原理视频',
                            scrollStyle: {
                                overflowY: 'scroll'
                            },
                            videoSrc: './assets/mp4/kongtiaoyuanlidianlu.mp4',
                            contents: [
                                {
                                    text: '仔细观察手动空调系统中，各个传感器和执行元件和控制单元间的控制关系和逻辑，观察发动机启动后空调系统正常工作时的系统运行状态，如冷媒的循环流程，和模式风的转换原理。'
                                },
                            ]
                        },
                        {
                            id: 'state27',
                            style: {
                                default: {
                                    height: '334px',
                                    width: '592px',
                                    positionLeft: '7px',
                                    positionTop: '10px',
                                    zIndex: '1',

                                },
                            },
                            title: '  手动空调电路原理视频',
                            scrollStyle: {
                                overflowY: 'scroll'
                            },
                            videoSrc: './assets/mp4/kongtiaoyuanlidianlu.mp4',
                            contents: [
                                {
                                    text: '观察手动空调控制系统的典型电路原理，当操控空调面板时，电路中的继电器、开关和信号是如何运行的。'
                                },
                            ]
                        },
                        {
                            id: 'state28',
                            style: {
                                default: {
                                    height: '371px',
                                    width: '736px',
                                    positionLeft: '122px',
                                    positionTop: '64px',
                                    zIndex: '1',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/01/jiance-tong.png'
                                },
                            },
                            title: '空调压力传感器测量',
                            scrollStyle: {
                                overflowY: 'scroll',
                                display: 'table-cell',
                                verticalAlign: 'middle',

                            },
                            // videoSrc: './assets/mp4/AGM.mp4',
                            contents: [
                                {
                                    text: '空调压力传感器输出电压，随着管路内压力的升高而升高。请通过AC按键的开关查看压力传感器输出电压的变化范围。',
                                    style: {
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state31',
                            style: {
                                default: {
                                    height: '371px',
                                    width: '736px',
                                    positionLeft: '122px',
                                    positionTop: '64px',
                                    zIndex: '1',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/01/jiance-duan.png'
                                },
                            },
                            title: '空调压力传感器测量',
                            scrollStyle: {
                                overflowY: 'scroll',
                                display: 'table-cell',
                                verticalAlign: 'middle',
                            },
                            // videoSrc: './assets/mp4/AGM.mp4',
                            contents: [
                                {
                                    text: '空调压力传感器输出电压，随着管路内压力的升高而升高。请通过AC按键的开关查看压力传感器输出电压的变化范围。',
                                    style: {
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state29',
                            style: {
                                default: {
                                    height: '371px',
                                    width: '736px',
                                    positionLeft: '122px',
                                    positionTop: '64px',
                                    zIndex: '1',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/01/jiance-tong.png'
                                },
                            },
                            title: '温度传感器测量',
                            scrollStyle: {
                                overflowY: 'scroll',
                                display: 'table-cell',
                                verticalAlign: 'middle',
                            },
                            // videoSrc: './assets/mp4/AGM.mp4',
                            contents: [
                                {
                                    text: '空调温度传感器一般为负温度系数传感器，当温度变高时输出电压减小，反之则增加，请打开和关闭AC开关观察电压数值变化。',
                                    style: {
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }
                                },
                            ]
                        },
                        {
                            id: 'state32',
                            style: {
                                default: {
                                    height: '371px',
                                    width: '736px',
                                    positionLeft: '122px',
                                    positionTop: '64px',
                                    zIndex: '1',
                                    backgroundSize: '100%',
                                    backgroundImage: './assets/images/01/jiance-duan.png'
                                },
                            },
                            title: '温度传感器测量',
                            scrollStyle: {
                                overflowY: 'scroll'
                            },
                            // videoSrc: './assets/mp4/AGM.mp4',
                            contents: [
                                {
                                    text: '空调温度传感器一般为负温度系数传感器，当温度变高时输出电压减小，反之则增加，请打开和关闭AC开关观察电压数值变化。'
                                },
                            ]
                        },
                        {
                            id: 'state30',
                            style: {
                                default: {
                                    height: '345px',
                                    width: '800px',
                                    positionLeft: '129px',
                                    positionTop: '100px',
                                    zIndex: '1',
                                    backgroundImage: './assets/images/kt/info-tuozhan.png',
                                    backgroundSize: '100%'
                                },
                            },
                            title: '温度传感器试验(热敏电阻式)',
                            scrollStyle: {
                                overflowY: 'scroll',
                                display: 'table-cell',
                                verticalAlign: 'middle',
                            },
                            // videoSrc: './assets/mp4/AGM.mp4',
                            contents: [
                                {
                                    text: '热敏温度传感器在25℃时其电阻为1500Ω，在试验时将热敏电阻置于不同温度的水中，并使用温度计记录当时水温，并使用万用表测量其阻值，然后根据温度和阻值绘制曲线。观察曲线的变化特点',
                                    style: {
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
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
                                    cursor: 'default',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_gray.png',
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
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/next_green.png',
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
                                    cursor: 'default',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_gray.png',
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
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_green.png',
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
                    id: 'page01-info-next',
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
                                    cursor: 'default',
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
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
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
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
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
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
                                    backgroundImage: './assets/images/01/next_green.png',
                                },
                            },
                        },
                        {
                            id: 'state099',
                            style: {
                                default: {
                                    width: '30',
                                    height: '30',
                                    positionRight: '10',
                                    positionTop: '200',
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
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
                    ],
                },
                {
                    id: 'page01-info-prev',
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
                                    cursor: 'default',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    backgroundImage: './assets/images/01/prev_gray.png',
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
                                    cursor: 'pointer',
                                    display: 'block',
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
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
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
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
                                    backgroundSize: '30px 30px',
                                    zIndex: '100',
                                    backgroundImage: './assets/images/01/prev_green.png',
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
                    id: 'page01-qubie',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '775',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '区别',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '775',
                                    positionTop: '80',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '1.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '区别',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-caozuo',
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
                                    width: '230',
                                    height: '40',
                                    positionLeft: '775',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: 'halo',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '操作',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
                            ]
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    width: '230',
                                    height: '40',
                                    positionLeft: '775',
                                    positionTop: '160',
                                    display: 'block',
                                    zIndex: '999',
                                    // backgroundColor: '#000',
                                    backgroundImage: './assets/images/01/sign.png',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    lineHeight: '40',
                                    color: '#fff',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
                                },
                            },
                            animation: {
                                animationInID: '',
                                animationOnID: '',
                                animationOutID: '',
                            },
                            textArray: [
                                {
                                    content: '2.',
                                    style: {
                                        position: 'relative',
                                        left: '-3',
                                        display: 'inline-block',
                                        width: '40',
                                    }
                                },
                                {
                                    content: '操作',
                                    style: {
                                        position: 'relative',
                                        left: '0',
                                        display: 'inline-block',
                                        width: '180',
                                    }
                                }
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
                    id: 'page01-jiegou1',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '224',
                                    positionTop: '85',
                                    backgroundColor: '#ff0',
                                    borderRadius: '50%',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '224',
                                    positionTop: '85',
                                    backgroundColor: '#ff0',
                                    borderRadius: '50%',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-jiegou2',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '241',
                                    positionTop: '276',
                                    borderRadius: '50%',
                                    display: 'block',
                                    backgroundColor: '#ff0',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '241',
                                    positionTop: '276',
                                    display: 'block',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    zIndex: '999',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-jiegou3',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '805',
                                    positionTop: '377',
                                    borderRadius: '50%',
                                    display: 'block',
                                    backgroundColor: '#ff0',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '805',
                                    positionTop: '377',
                                    display: 'block',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    zIndex: '999',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-jiegou4',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '871',
                                    positionTop: '177',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '871',
                                    positionTop: '177',

                                    borderRadius: '50%',
                                    display: 'block',
                                    backgroundColor: '#ff0',
                                    zIndex: '999',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-jiegou5',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '493',
                                    positionTop: '197',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer'
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '493',
                                    positionTop: '197',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #00f',
                                    cursor: 'pointer'
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
                                        positionLeft: '575',
                                        positionTop: '49',
                                        d: 'M590 50 C590 50 550 -30 910 330'
                                    },
                                    black: {
                                        positionLeft: '480',
                                        positionTop: '0',
                                        d: 'M490 0 C520 0 502 -110 850 375'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '',
                                unit: ''
                            },
                        },
                        {
                            id: 'state03',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(90deg)',
                                    red: {
                                        positionLeft: '575',
                                        positionTop: '49',
                                        d: 'M590 50 C590 50 550 -30 910 330'
                                    },
                                    black: {
                                        positionLeft: '480',
                                        positionTop: '0',
                                        d: 'M490 0 C520 0 502 -110 850 375'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '3.6',
                                unit: 'Ω'
                            },

                        },


                        {
                            id: 'state04',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '419',
                                        positionTop: '106',
                                        d: 'M433 108 C433 108 393 28 910 330'
                                    },
                                    black: {
                                        positionLeft: '447',
                                        positionTop: '105',
                                        d: 'M457 112 C457 112 417 32 885 395'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '1.501',
                                unit: 'V'
                            },
                        },
                        {
                            id: 'state05',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '419',
                                        positionTop: '106',
                                        d: 'M433 108 C433 108 393 28 910 330'
                                    },
                                    black: {
                                        positionLeft: '447',
                                        positionTop: '105',
                                        d: 'M457 112 C457 112 417 32 885 395'
                                    },
                                },
                                isInVStatus: false,

                            },
                            initValue: {
                                num: '2.607',
                                unit: 'V'
                            },

                        },


                        {
                            id: 'state06',
                            style: {
                                default: {
                                    display: 'block',
                                    transform: 'rotate(43deg)',
                                    red: {
                                        positionLeft: '505',
                                        positionTop: '103',
                                        d: 'M516 110 C516 110 476 30 885 395'
                                    },
                                    black: {
                                        positionLeft: '505',
                                        positionTop: '138',
                                        d: 'M515 143 C515 143 475 63 885 395'
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
                                        positionLeft: '505',
                                        positionTop: '103',
                                        d: 'M516 110 C516 110 476 30 885 395'
                                    },
                                    black: {
                                        positionLeft: '505',
                                        positionTop: '138',
                                        d: 'M515 143 C515 143 475 63 885 395'
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
                    id: 'page01-multimeter-k',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '863',
                                    positionTop: '242',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer',
                                    opacity: '0',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '863',
                                    positionTop: '242',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer',
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
                            style: {
                                default: {
                                    display: 'none',
                                },
                            },
                        },
                    ],
                },
                {
                    id: 'page01-multimeter-k-twinkle',
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
                                    width: '20',
                                    height: '20',
                                    positionLeft: '863',
                                    positionTop: '217',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer',
                                    opacity: '0',
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
                            style: {
                                default: {
                                    width: '20',
                                    height: '20',
                                    positionLeft: '863',
                                    positionTop: '217',
                                    borderRadius: '50%',
                                    backgroundColor: '#ff0',
                                    display: 'block',
                                    zIndex: '999',
                                    border: '1px solid #f00',
                                    cursor: 'pointer',
                                    opacity: '0',
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
                                canClickStatus: false
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
                                canClickStatus: false
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
                            id: 'state05',
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
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },



                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-prevInfo',
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
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1206',
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
                                id: 'page01-component01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextPlan',
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
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
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
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-prevInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1204',
                            component: {
                                id: 'page01-component04',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
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
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
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
                                id: 'page01-nextPlan',
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
                            setCurrentState: 'state00',
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
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },

                        {
                            id: 'subscribe1101',
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
                                id: 'page01-prevInfo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
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
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component09',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component10',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component11',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component12',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextPlan',
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
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component09',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component09',
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
                        id: 'page01-component10',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component10',
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
                        id: 'page01-component11',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component11',
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
                        id: 'page01-component12',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1206',
                            component: {
                                id: 'page01-component12',
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
                        id: 'page01-component13',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
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
                            setCurrentState: 'state00',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-next',
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
                        id: 'page01-component14',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        // {
                        //     id: 'subscribe1108',
                        //     component: {
                        //         id: 'page01-kongtiaoqi',
                        //         stateID: '',
                        //     },
                        //     timeOut: '0',
                        //     setCurrentState: 'state01',
                        // },
                        // {
                        //     id: 'subscribe1108',
                        //     component: {
                        //         id: 'page01-shuixiang',
                        //         stateID: '',
                        //     },
                        //     timeOut: '0',
                        //     setCurrentState: 'state01',
                        // },
                        // {
                        //     id: 'subscribe1108',
                        //     component: {
                        //         id: 'page01-shuifa',
                        //         stateID: '',
                        //     },
                        //     timeOut: '0',
                        //     setCurrentState: 'state01',
                        // },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
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
                                id: 'page01-promp01',
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
                            setCurrentState: 'state02',
                        }
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component15',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [

                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
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
                            setCurrentState: 'state26',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-next',
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
                        id: 'page01-component16',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-next',
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
                            setCurrentState: 'state01',
                        },
                    ],
                },
                {
                    id: 'publish03',
                    component: {
                        id: 'page01-component17',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
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
                            setCurrentState: 'state19',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-next',
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
                        id: 'page01-component18',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-info-prev',
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
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
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
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component13',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1102',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component14',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component15',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component16',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component17',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-component18',
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
                            setCurrentState: 'state30',
                        },
                        {
                            id: 'subscribe1201',
                            component: {
                                id: 'page01-next',
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
                        id: 'page01-nextPlan',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-nextPlan',
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
                        id: 'page01-next',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                            setCurrentState: 'state03',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state25',
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-prev',
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
                        id: 'page01-reshui',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-reshui',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state07',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-paiqi',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-paiqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
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
                        id: 'page01-duli',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-duli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
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
                        id: 'page01-kongtiaoqi',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-kongtiaoqi',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
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
                        id: 'page01-shuixiang',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuixiang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state17',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-shuifa',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifa',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state18',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-shuifayuanli',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifayuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state27',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-peiqiyuanli',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-peiqiyuanli',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state28',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-fanbandianji',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-fanbandianji',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state29',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-shuifaguzhang',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-shuifaguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state41',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-qizuhuoduse',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-qizuhuoduse',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state42',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-fanbandianjiguzhang',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-fanbandianjiguzhang',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state43',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-qubie',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-qubie',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state44',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-caozuo',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-caozuo',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state45',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-jiegou1',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-jiegou1',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state46',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-jiegou2',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-jiegou2',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state47',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-jiegou3',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-jiegou3',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state48',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-jiegou4',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-jiegou4',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state49',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-jiegou5',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-jiegou5',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-canclose',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state50',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-info-next',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state27',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state099',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-info-prev',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state26',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
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
                        id: 'page01-info-next',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state28',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state02',
                        },


                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-acLine',
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
                        id: 'page01-info-prev',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state19',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state04',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },

                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
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
                                id: 'page01-ac',
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
                            setCurrentState: 'state02',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-acLine',
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
                        id: 'page01-info-next',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state29',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state099',
                        },


                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyer-knob',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
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
                            id: 'subscribe1101',
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
                                id: 'page01-multimeter',
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
                        id: 'page01-info-prev',
                        stateID: 'state06',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state28',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-prev',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-info-next',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-twyerBg',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
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
                                id: 'page01-switch',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1101',
                            component: {
                                id: 'page01-acLine',
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
                        id: 'page01-multimeter-k',
                        stateID: '',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-multimeter-k-twinkle',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state03',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state01',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state03',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state31',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state03',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-multimeter',
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
                            setCurrentState: 'state01',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state28',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state04',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state07',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state05',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-promp01',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state32',
                        },
                    ],
                },
                {
                    id: 'publish04',
                    component: {
                        id: 'page01-ac-button',
                        stateID: 'state05',
                    },
                    triggerEvent: 'click',
                    subscribeArray: [
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
                                id: 'page01-multimeter',
                                stateID: '',
                            },
                            timeOut: '0',
                            setCurrentState: 'state06',
                        },
                        {
                            id: 'subscribe1108',
                            component: {
                                id: 'page01-ac-button',
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
                            setCurrentState: 'state29',
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
    infoConfig,
}
