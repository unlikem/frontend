fe 16

阮一峰 http://www.ruanyifeng.com/blog/2009/03/css_selectors.html

// 1. 4 种基本选择器

// 2. 4 种多元素的 组合选择器

div, p      同时匹配
div div     匹配后代
div > p     匹配子元素
div + div   匹配同级下一个元素

其中 div p 与 div > p 的区别
前者匹配全部的后代元素，而后者仅匹配向下一层(子元素)

// 3. 4种属性选择器   根据某类的属性来查找选择器
E[att]
E[att=val]

// 4. 伪类选择器  实际不存在的类
E:first-child
E:link
E:lang(c)

CSS 3 中的新特性
// 应该利用CSS 3 generator生成CSS3代码(上课会讲)
border-radius     边框倒角
box text shadow   盒子阴影
transform         2D 变形
Multi Column      将文本分隔成多列
transition        动画

keyframes 动画和生成器
https://daneden.github.io/animate.css/
http://cssanimate.com/

其他 css3 生成器
http://css3generator.com/
http://www.css3generator.in/
http://css3.me/
https://www.tutorialspoint.com/css/css3_boarder_image.htm

CSS3 动画
主要用到了 3 个属性
transform 的全部函数
https://developer.mozilla.org/en-US/docs/Web/CSS/transform
transition 可动画列表
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties

animation











