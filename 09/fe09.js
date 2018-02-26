BOM(browser object model) 是什么 有什么用
HTML5 新增的 BOM API 和新功能
单页应用(SPA(single page application))

BOM(browser object model) 包含5个东西
location    管理 URL
navigator   管理浏览器
history     管理历史记录
screen      管理屏幕
window      管理浏览器的所有东西

localtion 对象是用来管理 URL 的，下面是例子
改变 href 属性就可以跳转页面
hash: ""
host: "s.taobao.com"
hostname: "s.taobao.com"
href: 
"https://s.taobao.com/search?q=3ds&imgfile=&js=1&stats_click=search_radio_all&ie=utf8"
search: "?q=3ds&imgfile=&js=1&stats_click=search_radio_all&ie=utf8"
origin: "https://s.taobao.com"
pathname: "/search"
port: ""
portocol: "https:"
reload: 函数，刷新当前页面
replace：函数替换当前页面，有参数

navigator 对象是用来查询浏览器的信息的
比如当前的操作系统平台， 浏览器型号厂商等等

navigator.userAgent
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36"
navigator.platform
"MacIntel"

history 对象是用来处理历史记录的
在 HTML5 它增加了一些 API 使得它可以做单页应用(SPA, single page app)

history.length     // 历史列表中 url 的数量

history.back()     // 相当于点击后退按钮 
history.forward()  // 相当于点击前进按钮
history.go(-2)     // 相当于点击两次后退按钮

// 下面是 HTML5 新函数

history.pushState(null, 'title', "/profile")
三个参数分别是
    自定义对象
    新页面的标题
    新页面的地址
    
var state = {
    page: "settings"
}
history.pushState(state, "settings", "/settings")

还有一个 replaceState 函数，他的作用和 pushState 一样，只不过不生成一条历史记录

















