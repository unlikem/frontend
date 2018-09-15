// 发送 JSON 格式字符串来创建一个 todo
var method = 'POST'
var url = ''
var data = {
    'task' : 'hahah'
}
data = JSON.stringify(data)
ajax(method, url, null, '', function(r){
    var todos = JSON.parse(r.response)
    console.log(todos);
})

// 发送 JSON 格式字符串来更新一个 todo
var todoId = '965'
var method = 'POST'
var url = '/todoId'
var data = {
    'task' : 'greate'
}
data = JSON.stringify(data)
ajax(method, url, null, '', function(r){
    var todos = JSON.parse(r.response)
    console.log(todos);
})

// 删除一个 todo
var todoId = '965'
var url = '/todoId'
var method = 'GET'

ajax(method, url, null, '', function(r){
    var t = JSON.parse(r.response)
    console.log(t);
})

/*
1, 往页面中添加输入框和提交按钮
2, 载入所有 todos
3, 显示所有todos
4, 每个 todo 要显示删除按钮
6, 每个 todo 要显示更新按钮
7, 点击更新按钮 更新
8, 添加 CSS
*/

/*
如何完成复杂程序
1, 不要慌
2, 拆分需求(以5-10分钟能完成为拆分粒度)
3, 有问题的需求先跳过，最后不做也是行的
4, 边实现需求边测试
*/

var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
    console.log("bbb")
    element.insertAdjacentHTML('beforeend',  html)
}

var ajax = function(method, path, data, reseponseCallback) {
    // 创建 AJAX 对象
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        reseponseCallback(r)
    }
    // 发送请求
    r.send(data)
}

// 1, 往页面中添加输入框和提交按钮
var init = function() {
    console.log('hhh')
    t = `
    <input id=id-input-task>
    <button id=id-button-add>add todo</button>
    `
    appendHtml(e('#id-div-todo-container'), t)
}

var baseUrl = ''

// 2, 载入所有 todos
var loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajax(method, url, '', function(r){
        var todos = JSON.prase(r.response)
        log(rodos)
        insertTodos(todos)
    })
}

var todoTemplate = function(todo) {
    var task = todo.task
    var id = todo.id
    var t = `
        <div>
            <button id=${id} class='todo-delete'>删除</button>
            <button id=${id} class='todo-updatee'>更新</button>
            ${task}
        </div>
    `
    return t
}

// 3, 显示所有 todos
var insertTodos = function() {
    var container = e('#id-div-todo-container')
    for(var i = 0; i < todos.lenth; i++) {
        var todo = todos[i]
        var t = todoTemplate(todo)
        appendHtml(container, t)
    }
}

// 4, 删除按钮可以删除掉这个todo
//    绑定删除按钮的事件
//    写出删除函数, 需要 todo
//    在事件中调用删除函数
//    删除 todo 这个div
var delteTodo = function() {
    // var todoId = '965'
    var url = '/todoId'
    var method = 'GET'
    
    ajax(method, url,'', function(r){
        var t = JSON.parse(r.response)
        console.log(t);
    })
}

var bindEventDelte = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        log(target.classList);
        if (target.classList.contains('button-delete')) {
            log('点到了删除')
            var todoId = target.id
            deleteTodo(todoId)
            target.parentElement.remove()
        }
    })
}

// 添加 Css 
var addCss = function() {
    var style = `
    <style>
        div {
            outline: red 1px dashed;
        }
    </style>
    `
    var head = e('head')
    appendHtml(head, style)
}
















