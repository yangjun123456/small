## index1.html
> 添加了基本的使用方法，例如重点有save和restore方法，在需要旋转操作时可使用translate偏移画布左上顶点，旋转后使用restore方法释放原先保存的save状态，即可仅临时创造了圆心，及包括基本的使用如绘制方形，矩形，弧线，绘制文字，及保存当前画布为图片，moveTo表示移动当前画笔到指定位置，不画线

* moveTo 移动画笔当前点到指定位置
* save() 保存之前的状态   restore() 释放之前的状态 
* 以下为保存当前画布为图片 
```
var imgUrl = canvas.toDataURL('image/png');
var image = document.createElement('img');
console.log(imgUrl);
image.src = imgUrl;
document.body.appendChild(image);
```
* 以下是绘制文本
```
ctx.beginPath();
ctx.font = 'bold 34px Arial';
ctx.textAlign = 'center';
ctx.textBaseLine = 'middle';
ctx.fillText('杨', 200, 120);
ctx.closePath();

{
    // 绘制文本时自适应文字大小
    var fontSize = 100;
    ctx.font = fontSize + "px Arial";
    while (ctx.measureText("hello world!").width > 120) {
        fontSize--;
        ctx.font = fontSize + "px Arial";
    }
    ctx.fillText('Hello world!', 300, 300);
    ctx.fillText('Font size is ' + fontSize + "px", 300, 400);
}
```
* 创建临时的偏移圆心，而不偏移整个画布
```
ctx.save();
ctx.translate(500, 500);
ctx.rotate(90);
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.fillRect(0, 0, 50, 50);
ctx.closePath();
ctx.stroke();

ctx.restore(); 
```


## index2.html
> 创建一个灰度图片，获取到图片的所有数据进行设置平均值然后进行重新写入

* drawImage()   方法写入图片
```
var image = document.querySelector('#testImg');
const [imgW, imgH] = [image.offsetWidth, image.offsetHeight];
context.save();
context.drawImage(image, 0, 0, imgW, imgH);
```
* getImageData 获取图片数据
```
var imageData = context.getImageData(0, 0, imgW, imgH);
    console.log(imageData);
    var data = imageData.data,
        red = data[0],
        green = data[1],
        blue = data[2],
        alpha = data[3];
```
* putImageData(imageData,0,0)    把修改后的数据进行重新写入
```
for (var i = 0; i < data.length; i += 4) {
    red = data[i];
    green = data[i + 1];
    blue = data[i + 2];
    alpha = data[i + 3];

    average = Math.floor((red + green + blue) / 3);
    data[i] = average;
    data[i + 1] = average;
    data[i + 2] = average;
}

imageData.data = data;
context.putImageData(imageData, 0, 0);
```

## index3.html
> 调整透明度和合成方式

## index4.html
> 绘制斜线框使用定时器

## index5.html
> 绘制多边形

## index6.html
> 绘制科赫雪花❄️