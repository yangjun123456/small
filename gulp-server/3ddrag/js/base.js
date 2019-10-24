var ss;
window.onload = function () {
    var w = document.documentElement.clientWidth;//可见区域宽度
    var h = document.documentElement.clientHeight;//可见区域高度
    ss = document.getElementById('container');
//alert(w);
    ss.style.width = w + "px";
    ss.style.height = h + "px";
}