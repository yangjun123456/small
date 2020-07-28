class Packaging {
    constructor() { }
    isEquals(a, b) {
        return a === b;
    }
}

var packagingFun = new Packaging();
console.log(packagingFun.isEquals(1, 2));