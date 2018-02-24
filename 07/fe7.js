HTML5 新内容主要是以下几点：
语义化标签
视频和音频标签
本地离线存储
新增表单特性如新控件
用于绘图的canvas标签
用于高性能图形的WebGL

视频和音频标签和配套的 JS API 是新加入的功能
以前只能依赖flash，现在有video和audio

不同的浏览器有不同的文件格式要求
所以用2个source标签来指定不同的视频格式

<video width="300" height="200" controls="controls">
    <source src="movie.mp4">
    <source src="movie.ogv">
</video>


<audio id='id-audio-player' controls="controls">
  <source src="audio.ogg">
  <source src="audio.mp3">
</audio >

audio 的基本操作
var a = document.querySelector('#id-audio-player')
a.play()
a.pause()
a.autoplay()
a.src
a.volume
a.duration
a.currentTime = 1


HTML5 提供两种存储方法 localStorage 与 sessionStorage
localStorage 与 sessionStorage 都是用来存储数据的
使用方式一样，区别只在于过期时间
localStorage 没有过期时间 要用 clear remove 主动删除数据
sessionStorage 的数据在用户关闭浏览器后主动删除

新增表单控件 calendar email color

boolean 值只要写了属性就是true

用于绘图的canvas标签(用于游戏等)
canvas标签提供一块画布，可以访问画布中的像素点
主要用途是游戏或者是高级复杂的图形效果
https://phaser.io/examples/v2/weapon/fire-rate

移动网页
手机网页和电脑网页的技术是一样的
区别在于屏幕尺寸和交互方式
下面只列出手机页面开发中重要的点

设置 viewport 
viewport 是 html 的父元素
在手机上需要下面的语句设置它的尺寸
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
属性解释
width = device-width    宽度等于设备宽度
height = device-height  高度等于设备高度
initial-scale           初始缩放比例
minimum-scale           允许用户缩放的最小比例
maximum-scale           允许用户缩放的最大比例
user-scalable           是否允许用户缩放

2 调试页面
可以用 chorme 的开发工具调试手机页面
但是由于浏览器兼容性问题，最终的外观
得用手机真机来检验
caniuse.com

3 媒体查询
媒体查询实际上是用来做响应式设计的
响应式设计就是一套 CSS 根据当前的分辨率选择不同的样式
现在已经没有前几年那么热门了，不过我们还是过一遍
@media all and (min-width: 200px) and (max-width: 300px){
    body {
        background: red;
    }
}

4 Hybrid App(混合开发)
混合开发说的是，你写的网页运行在手机程序里
本来网页能提供的功能是有限的
但是应用程序可以给页面添加函数
在这种情况下，js 就可以调用别人提供的功能
这就是混合开发的基础

比如你 js 不能实现让手机震动的功能
但是别的程序能实现这个功能，并别把这个功能
注册为你网页中的一个 js 函数
这样 js 也就拥有这个功能了
然后你调用 vbds() 就让手机震动了

这样的效果就是原生代码(相对于 js 而言的官方开发语言)
实现功能并且提供 js 函数
js 代码用别人提供的功能写逻辑

说穿了就是这么一回事，无任何难度的普通掏粪。












