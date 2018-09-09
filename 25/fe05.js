var log = function() {
    console.log.apply(console, arguments);
}

log('代码开始')

// 元素选择器
var body = document.querySelector('body')
// 类选择器
var from = document.querySelector('.lonin-from')
// id选择器
var loginbutton = document.querySelector('#id-button-login')

// log(body, from, loginbutton)
// 操作元素的默认属性
// 注意: getAttribute 只能得到默认值 而不是得到当前的值
// 当前的值可能不是默认的值
var user = document.querySelector('#id-input-username')
var userValue = user.getAttribute('value')
log('user value:', userValue)

// 设置特定的属性值
user.setAttribute('value', 'long')

// 操作元素 (创建 删除 修改)
var button = document.createElement('button')
button.innerHTML = '注册用户'

// 修改
var form = document.querySelector('.login-form')
from.appendChild(button)

// 删除
// var pwd = document.querySelector('#id-input-password')
// pwd.remove()
// from.removeChild(pwd)

// 事件
// 1.获取按钮 2.在按钮上绑上特定事件
var button = document.querySelector('#id-input-login')
button.addEventListener('click', function(event){
    log('chen')
})

// 对按钮进行批量添加
var buttons = document.querySelectorAll('button')
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('click', function(event){
        var self = event.target
        if (self.innerHTML == '注册用户') {
            log('注册按钮')
        } else {
            log('登录按钮')
        }
        log('循环批量添加click事件', self.id)
    })
}
// 切换当前被点的元素
// 匿名函数
var reds = document.querySelectorAll('.radio-button')
for (var i = 0; i < reds.length; i++) {
    var red = reds[i]
    red.addEventListener('click', function(event){
        var self = event.target
         clearActive()
         self.classList.add('active')
    })
}

var clearActive = function() {
    var active = document.querySelector('.active')
    if (active != null) {
        active.classList.remove("active")
    }
}
















