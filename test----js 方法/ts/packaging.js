var Packaging = /** @class */ (function () {
    function Packaging() {
    }
    Packaging.prototype.isEquals = function (a, b) {
        return a === b;
    };
    return Packaging;
}());
var packagingFun = new Packaging();
console.log(packagingFun.isEquals(1, 2));
