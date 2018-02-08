var log = function() {
    console.log.apply(console, arguments);
}

var e = function(selector) {
    return document.querySelector(selector)
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var ajax = function(method, path, data, reseponseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送数据格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            reseponseCallback(r)
        }
    }
    r.send(data)
}
// 1, 往页面中添加输入框和提交按钮
var init = function() {
    var t = `
    <input id=id-input-task>
    <button id=id-button-add>add todo</button>
    `
    appendHtml(e('#id-div-todo-container'), t)
}

// 2，载入所有todos
var loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajaj(method, url, '', function(r){
        var todos = JSON.parse(r.response)
        log(todos)
        insertTodos(todos)
    })
}

var todoTemplate = function(todo) {
    var task = todo.taskId
    var id = todo.id
    var t = `
        <div id=${id}>
        <button class=button-delete>删除</button>
        <button class=button-update>更新</button>
            <span id=task-${id}>
            ${task}
            </span>
        </div>
    `
    return t
}

// 3,显示所有todos
var insertTodos = function(todos) {
    var container = e('#id-div-todo-container')
    for (var i = 0;i < todos.length; i++){
        var todo = todos[i]
        var t = todoTemplate(todo)
        appendHtml(container, t)
    }
}

var deleteTodo = function(todoId) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/delete/' + todoId
    ajax('GET', url, '', function(r){
        var t = JSON.prase(r.response)
        console.log(t)
    })
}

var updateTodo = function(todoId, task) {
    var url = 'http://vip.cocode.cc/sandbox/todo/3400711034/update/' + todoId
    var data = {
        'task': task,
    }
    data = JSON.stringify(data)
    ajax('POST', url, data, function(r){
        var t = JSON.parse(r.response)
        console.log(t)
    })
}

var bindEventDelete = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        log(target.classList)
        if(target.classList.contains('button-delete')){
            log('点到了删除')
            var todoId = target.parentElement.id
            deleteTodo(todoId)
            target.parentElement.remove()
        }
    })
}

// 添加Css
var addCss = function() {
    var style = `
    <style>
        div {
            outline: red 1px dashed;
        }
    </style>
    `
}

var bindEventUpdate = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        if (target.classList.contains('button-update')) {
            log('点到了更新')
            var todoId = target.parentElement.id
            var t = `
                <intput id=update-${todoId}>
                <button class=button-submit>提交</button>
            `
            appendHtml(target.parentElement, t)
        }
    })
}

// 点击提交按钮的时候 发送 ajax 请求到服务器
var bindEventSubmit = function() {
    var container = e('#id-div-todo-container')
    container.addEventListener('click', function(event){
        var target = event.target
        // log(target.classList)
        if(target.classList.contains('button-submit')) {
            // 这是提交按钮
            log('submit button')
            // 获取 todo id
            var todoId = target.parentElement.id
            // 点击提交按钮的时候 发送 ajax 请求到服务器
            // 1，得到 input 的值
            // input 的 id 是 update-<id>
            var inputId = 'update-' + todoId
            var selector = '#' + inputId
            var task = e(selector).value
            // 发送更新请求
            updateTodo(todoId, task)
            // 更新页面上的 todo task
            var taskId = 'task-' + todoId
            selector = '#' + taskId
            e(selector).innerHTML = task
            log('submit debug', selector, task)
        }
    })
}

var bindEvents = function() {
    bindEventDelete()
    bindEventUpdate()
    // 给提交按钮绑定事件
    bindEventSubmit()
}

var __main = function() {
    init()
    loadTodos()
    addCss()
    bindEvents()
}

__main()























