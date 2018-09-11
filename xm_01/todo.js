// 1. 什么是事件委托
// 2. 为什么需要事件委托
// 3. 如何实现事件委托

// 时间操作
// content editable (标签的可编辑属性)
// LocalStorage(本地存储) 和 JSON 数据格式
var log = function() {
    console.log.apply(console, arguments);
}

var e = function(selector) {
    return document.querySelector(selector)
}

var addButton = e('#id-button-add')
addButton.addEventListener('click', function(){
    var todoInput = e('#id-input-todo')
    var todo = todoInput.value
    insertTodo(todo, false)
    saveTodos()
})

var insertTodo = function(todo, done) {
    var todoContainer = e('#id-div-container')
    var t = templateTodo(todo, done)
    // 一个插入 HTML 的套路
    todoContainer.insertAdjacentHTML('beforeend', t)
    // 添加之后 保存 todos
}

var templateTodo = function(todo, done) {
    var status = ''
    if (done) {
        status = 'done'
    }
    var t = `
    <div class='todo-cell ${status}'>
        <button class='todo-done'>完成</button>
        <button class="todo-delete">删除</button>
        <span class='todo-content' contenteditable="true">${todo}</span>
    </div>
    `
    return t
}

// 事件委托
// 问题在于, todo 都是运行时添加的元素
// 对于这样的元素，我们没有办法实现绑定事件
// 我们可以把 click 事件绑定在事先存在的父元素上
// 然后我们运行的时候检查被点击的对象(通过 event.target 属性)
// 是否是我们需要的对象, 这个概念就是事件委托

var todoContainer = e('#id-div-container')

todoContainer.addEventListener('click', function(event) {
    log('container click', event, event.target)
    var target = event.target
    if (target.classList.contains('todo-done')) {
        log('done')
        var todoDiv = target.parentElement
        toggleClass(todoDiv, 'done')
        // 改变 todo 完成状态之后 保存 todos
        saveTodos()
    } else if (target.classList.contains('todo-delete')) {
        log('delet')
        var todoDiv = target.parentElement
        todoDiv.remove()
        // 删除之后 保存 todos
        saveTodos()
    }
})

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// LocalStorage 是浏览器自带的功能
// LocalStorage 可以用来存储字符串，在浏览器关闭时依然存在
// 但是不同页面对应了不同的LocalStorage
localStorage.name = 'gua'
// 关闭浏览器,再次打开,依然能获得到这个值
// Log('关闭浏览器', LocalStorage.name)
// 利用 localStorage 就可以存储todo
// 但是 todo 存在array中
// 而 LocalStorage 只能存储 string 数据
// 所以没有办法直接存储
//
// 可行的办法如下
// 在存储的时候把 array 转换成字符串
// 在读取的时候把字符串转化为 array
//
// 在 js 中，序列化使用 json 数据格式
// 全称 JavaScript Object Notation (js对象标记)
// 这个格式已经是现在用于互联网数据交换的事实标准格式了

var s = JSON.stringify([1, 2, 3, 4])
log('序列化后的字符串', typeof s, s)
var a = JSON.parse(s)
log('序列化后的数组', typeof a, a)

// 定义一个函数 用于把数组写入 LocalStorage
var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.todos = s
}

// 定义一个函数 读取 LocalStorage 中的数据并解析返回
var load = function() {
    var s = localStorage.todos
    return JSON.parse(s)
}

// 定义一个函数 把页面上所有的 todo 用 save 保存
var saveTodos = function() {
    // 1. 选出所有的 content 标签
    // 2. 取出 todo
    // 3. 添加到一个数组中
    // 4. 保存数组
    log('saveTodos')
    var contents = document.querySelectorAll('.todo-content')
    var todos = []
    for (var i = 0; i < contents.length; i++) {
        var c = contents[i]
        var done = c.parentElement.classList.contains('done')
        var todo = {
            done: done,
            content: c.innerHTML,
        } 
        todos.push(todo)
    }
    save(todos)
}

var loadTodos = function() {
    var todos = load()
    log('load todos', todos)
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i]
        insertTodo(todo.content, todo.done)
    }
}

loadTodos()

// 标准时间库

var now = function() {
    var d = new Data()
    var nm = d.getFullYear()
    var yt = d.getMouth() + 1
    var ri = d.getDate()
    var ui = d.getHours()
    var ff = d.getMinutes()
    var mc = d.getSecond()
    
    return `${nm}/${yt}/${ri}/${ui}/${ff}/${mc}`
}




  






