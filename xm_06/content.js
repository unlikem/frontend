/*
HTML5 新内容主要是以下几点
语义化标签 article footer header nav section
视频音频标签 vedio audio
本地离线储存 localStorage sessionStorage
新增表单特性如新的控件 
用于手绘的 canvas 标签
用于高新能图形的 WebGL
*/

/*
视频和音频标签和配套的 JS API 是新加入的功能
以前的话只能依赖 flash 现在有 video 和 audio
*/

<video width="300" height="200" controls="controls">
    <source src = "movie.mp4">
    <source src = "movie.ogv">
</video>

<audio id='id-audio-player' controls="controls">
    <source src = "audio.ogg">
    <source src = "yui.mp3">
</audio>

/*
localStorage 和 sessionStorage 使用方式一样
区别只在于过期时间
localStorage 没有过期事件 要用 clear remove 主动删除数据
sessionStorage 的数据在用户关闭浏览器后将被删除

boolean 值的属性只要写了属性就是 true
*/

/*
canvas 主要用途主要用途是游戏或者是高级复杂的图形效果
例如 particles.js pharser.js
*/

/*
移动网页
手机网页和电脑网页技术是一样的
区别在于屏幕尺寸和交互方式
下面列出手机开发的重点
*/

/*
1 设置 viewport
viewport 是 html 的父元素
在手机上需要用下面的语句设置它的尺寸
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

属性解释
width=device-width      宽度等于设备宽度
height=device-height    高度等于设备高度
initial-scale           初始缩放比例
minimum-scale           允许用户缩放的最小比例
maximum-scale           允许用户缩放的最大比例
user-scalable           是否允许用户缩放

2 调试页面
可以用 chrome 的开发工具调试手机页面
但是由于浏览器兼容性问题, 最终的外观
得用手机真机来检验
标签/css 的兼容性问题有很多网站可以查询
caniuse.com

3 媒体查询
媒体查询实际上是用来做响应式设计的
响应式设计就是一套 CSS 根据当前的分辨率选择不同的样式
现在已经没有前几年那么热门了, 不过我们还是过一遍

媒体查询主要用来:
- 检测媒体的类型, 比如 screen, tv等
- 检测布局视口的特性, 比如视口的宽高分辨率等

用法
@media all and (min-width: 200px) and (max-width: 300px){
    body {
        background: red;
    }
}
上面代码中, all 是媒体类型, 代表任何设备
and 是逻辑操作
意思是, 对于任何设备, 在宽度在 200-300 的范围内应用这个样式

4 Hybrid App(混合开发)
混合开发说的是, 你写的网页运行在手机程序里
本来网页能提供的功能是有限的
但是应用程序可以给页面添加函数
在这种情况下, js 就可以调用别人提供的功能
这就是混合开发的基础

比如你 js 不能实现让手机震动的功能
但是别的程序能实现这个功能, 并且把这个功能
注册为你网页中的一个 js 函数
这样 js 也就拥有这个功能了
然后你调用 vfds() 就让手机震动了

这样的效果就是原生代码(相对于 js 而言的
官方开发语言)实现功能并且提供 js 函数
js 代码用别人提供的功能写逻辑

说穿了就这么一回事, 无任何难度的普通掏粪而已
*/






