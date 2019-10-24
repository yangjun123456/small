// 自己写的test.js 测试用例
describe("test js 测试test.js", function () {
    var test;
    beforeEach(function () {
        test = new Test('yang', 108, '大工程师');

        // spyOn 监测方法的调用和方法参数的调用痕迹
        // and.callThrough-----如果在spyOn之后链式调用and.callThrough，那么Spy除了跟踪所有的函数调用外，还会直接调用函数额真实实现，因此Spy返回的值就是函数调用后实际的值了。
        // spyOn(test, 'changeName');
        spyOn(test, 'changeName').and.callThrough();
        test.changeName('yangjun');
        test.changeName('yangjunabc');
        test.changeName.and.stub(); // 调用之后保留调用and.callThrough修改的值，后边的调用不会改变值---配合and.callThrough使用
        test.changeName('yangjunab');
    }, 1000);

    it('test changeAge 测试changeAge方法', function () {
        expect('yangjuna').toBe(test.changeAge('yangjuna'));
    });

    it('test spy 函数是否被调用及参数是否传入过', function () {
        expect(test.changeName).toHaveBeenCalled(); // toHaveBeenCalled 检查function是否被调用过 
        expect(test.changeName).toHaveBeenCalledWith('yangjun'); // toHaveBeenCalledWith可以检查传入参数是否被作为参数调用过。
        expect(test.changeName).toHaveBeenCalledWith('yangjunabc'); // toHaveBeenCalledWith可以检查传入参数是否被作为参数调用过。
        console.log(test);
    });
});

// spy
// 监测方法的调用和方法参数的调用痕迹
// toHaveBeenCalled 检查function是否被调用过
// toHaveBeenCalledWith可以检查传入参数是否被作为参数调用过。

describe("A spy", function () {
    var foo, bar = null;
    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function () {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function () {
        // Spy的调用并不会影响真实的值，所以bar仍然是null。
        expect(bar).toBeNull();
    });
});


// 全局匹配谓词
describe('jasmine 全局匹配谓词', () => {
    // jasmine.any----jasmine.any的参数为一个构造函数，用于检测该参数是否与实际值所对应的构造函数相匹配。
    describe("jasmine.any", function () {
        var test;
        beforeEach(function () {
            test = new Test('yang', 108, '大工程师');
            spyOn(test, 'changeName').and.callThrough();
            test.changeName('yang');
            test.changeName('yanga');
            test.changeName.and.stub(); // 阻止.and.through()生效
            test.changeName('yangab');
            console.log(test);

        });
        it("matches any value  自己的test Demo", function () {
            expect({}).toEqual(jasmine.any(Object));
            expect(test.changeName).toHaveBeenCalledWith(jasmine.any(String)); // 检测test.changeName方法接收的是字符串，前提必须得是spy并且调用过该函数
        });

        describe("when used with a spy 网站例子", function () {
            it("is useful for comparing arguments", function () {
                var foo = jasmine.createSpy('foo');
                foo(12, function () {
                    return true;
                });
                expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
            });
        });
        describe("when used with a spy 网站例子", function () {
            it("is useful for comparing arguments", function () {
                var foo = jasmine.createSpy('foo');
                foo(12, function () {
                    return true;
                });

                expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
            });
        });
    });

    // jasmine.anything jasmine.anything用于检测实际值是否为null或undefined，如果不为null或undefined，则返回true
    describe('jasmine.anything', function () {
        it("matches anything 网站例子", function () {
            // expect(null).toEqual(jasmine.anything());
            expect(1).toEqual(jasmine.anything());
        });
    })


    // jasmine.objectContaining  用于检测实际Object值中是否存在特定key/value对。
    describe('jasmine.objectContaining', function () {
        var foo;
        beforeEach(function () {
            foo = {
                a: 1,
                b: 2,
                bar: "baz"
            };
        });

        it("matches objects with the expect key/value pairs 网站例子", function () {
            expect(foo).toEqual(jasmine.objectContaining({
                bar: "baz"
            }));
            expect(foo).not.toEqual(jasmine.objectContaining({
                c: 37
            }));
        });
    })

    // jasmine.arrayContaining  用于检测实际Array值中是否存在特定值。
    describe('jasmine.objectContaining', function () {
        var foo;
        beforeEach(function () {
            foo = [1, 2, 3, 4];
        });

        it("matches arrays with some of the values 网站例子", function () {
            expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
            expect(foo).not.toEqual(jasmine.arrayContaining([6]));
        });
    })
})

// jasmine Clock Jasmine Clock用于setTimeout和setInterval的回调控制，它使timer的回调函数同步化，不再依赖于具体的时间，而是将时间离散化，使测试人员能精确控制具体的时间点。
describe('Jasmine Clock', () => {
    // 安装与卸载start
    var timerCallback;
    beforeEach(function () {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    // 安装与卸载end

    // 模拟超时（Mocking Timeout）start ---可以调用jasmine.clock().tick(nTime)来模拟计时，一旦tick中设置的时间nTime，其累计设置的值达到setTimeout或setInterval中指定的延时时间，则触发回调函数。
    it("causes an interval to be called synchronously", function () {
        setInterval(function () {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);
        expect(timerCallback.calls.count()).toEqual(1);

        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(1);
        //tick设置的时间，累计到此201ms，因此会触发setInterval中的毁掉函数被调用2次。
        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(2);
    });
    // 模拟超时（Mocking Timeout）end


    // 异步支持（Asynchronous Support）start
    /* var value;
    // setTimeout代表一个异步操作。
    beforeEach(function (done) {
        setTimeout(function () {
            value = 0;
            // 调用done表示回调成功，否则超时。
            done();
        }, 1);
    });

    // 如果在beforeEach中的setTimeout的回调中没有调用done，最终导致下面的it因超时而失败。
    it("should support async execution of test preparation and expectations", function (done) {
        value++;
        expect(value).toBeGreaterThan(1);
        // done();
    }); */
    // 异步支持（Asynchronous Support）end

});