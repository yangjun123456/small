class TestFun {
    constructor() {}

    // 判断当前是一个什么类型的东东----------start
    ArrayIsArrayFun(param) {
        console.log('判断当前是什么类型------' + Object.prototype.toString.apply(param));
    }
    // 判断当前是一个什么类型的东东----------end

    // 计算当前开始年月日和末尾年月日的相差多少个月份-------start
    getIntervalMonth(startDate, endDate) {
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();
        const intervalMonth = (startDate.getFullYear() * 12 + startMonth) - (endDate.getFullYear() * 12 + endMonth);
        console.log('计算月份差------' + intervalMonth);
        return intervalMonth;
    };
    // 计算当前开始年月日和末尾年月日的相差多少个月份-------end

    // 获取当前的操作系统是什么系统---------start
    getCurComputerSystem() {
        console.log('判断当前的系统------' + navigator.userAgent.indexOf('Windows', 0) !== -1);
        console.log('判断当前的系统------' + navigator.userAgent.toLowerCase().indexOf('mac', 0) !== -1);
        console.log('判断当前的系统------' + navigator.userAgent.indexOf('Linux', 0) !== -1);
        console.log('判断当前的系统------' + navigator.userAgent.indexOf('X11', 0) !== -1);
    }
    // 获取当前的操作系统是什么系统---------end

    // 判断当前是一动设备还是非移动设备------start
    isMobile() {
        const mobileReg = /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/;
        if ((mobileReg.test(window.navigator.userAgent.toLowerCase()))) {
            console.log('移动设备！！！');
        } else {
            console.log('非移动设备！！！');
        }
    }
    // 判断当前是一动设备还是非移动设备------end

    // 快速排序-----start
    fastSort() {
        const fun = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }
            const pivotIndex = Math.floor(arr.length / 2);
            const pivot = arr.splice(pivotIndex, 1)[0];
            const left = [];
            const right = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            let result = fun(left).concat([pivot], fun(right));
            return result;
        }
        const arr = [19, 9, 19, 10, 2, 3, 5, 7, 1, 1, 1, 4, 5, 6, 9, 7];
        console.log('快速排序------' + fun(arr));
    }
    // 快速排序-----end

    // 阶乘--------start
    recursion() {
        const f = (num) => {
            if (num < 1) {
                return 1;
            } else {
                let result = f(num - 1) * num;
                return result;
            }
        }
        console.log('阶乘------' + f(5));

        const fibonacci = (n) => {
            const result = (n <= 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
            return result;
        }
        console.log('斐波纳兹数列------' + fibonacci(20));
    }
    // 阶乘--------end

    // filter空格-------start
    /**
     * @param {*} str  字符串
     * @param {*} type 0 去掉前后空格   1 去掉前边的空格   2 去掉后边的空格  3 去掉所有空格
     */
    filterTrim(str, type = 0) {
        const fun = {
            0: (str) => {
                console.log(str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, ''));
                return str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, '');
            },
            1: (str) => {
                console.log(str.replace(/^(\s|\u00A0)+/g, ''));
                return str.replace(/^(\s|\u00A0)+/g, '');
            },
            2: (str) => {
                console.log(str.replace(/(\s|\u00A0)+$/g, ''));
                return str.replace(/(\s|\u00A0)+$/g, '');
            },
            3: (str) => {
                console.log(str.replace(/\s/g, ''));
                return str.replace(/\s/g, '');
            }
        };
        return fun[type].call(null, str);
    }
    // filter空格-------end


    // 区分当前是在辨准模式下还是混杂模式下-------start
    differentMode() {
        let obj = {
            'CSS1Compat': '标准模式',
            'BackCompat': '混杂模式'
        }
        console.log(obj[document.compatMode]);
        return obj[document.compatMode];
    };
    // 区分当前是在辨准模式下还是混杂模式下-------end
}

const testFun = new TestFun();
testFun.ArrayIsArrayFun('asdf');
testFun.ArrayIsArrayFun(['asdf']);
testFun.ArrayIsArrayFun(123);
testFun.ArrayIsArrayFun({});
testFun.ArrayIsArrayFun(new Set());
testFun.ArrayIsArrayFun(Symbol());
testFun.ArrayIsArrayFun(null);
testFun.ArrayIsArrayFun(undefined);
testFun.ArrayIsArrayFun(function () {});
console.log('');
testFun.getIntervalMonth(new Date('2018-09-09'), new Date('2010-01-12'));
console.log('');
testFun.getCurComputerSystem();
console.log('');
testFun.isMobile();
console.log('');
testFun.fastSort();
console.log('');
testFun.recursion();
console.log('');
testFun.filterTrim('     asd fa  sdf     as df asd fa sdf   as   d    a  ', 0);
testFun.filterTrim('     asd fa  sdf     as df asd fa sdf   as   d    a  ', 1);
testFun.filterTrim('     asd fa  sdf     as df asd fa sdf   as   d    a  ', 2);
testFun.filterTrim('     asd fa  sdf     as df asd fa sdf   as   d    a  ', 3);
console.log('');
testFun.differentMode();
console.log('');