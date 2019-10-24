# 公共组件放置区
##### 与src同级videojs文件是最原始的刚下载的videojs文件

#### src/app/components/video  组件是修改video为angular2公用组件
#### 再index.html中引用了js和css文件----为<link rel="stylesheet" href="./assets/videocss/video.css">；<script src="./assets/videojs/video.min.js"></script>
#### 修改为公共组件的video.min.js文件添加浏览器判断，可分别在不同浏览器中调整样式
