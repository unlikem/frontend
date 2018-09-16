Api.prototype.ajax = function(method, path, data, reseponseCallback) {
   // 创建 AJAX 对象
   var r = new XMLHttpRequest()
   // 设置请求方法和请求地址
   var url = this.baseUrl + path
   r.open(method, path, true)
   // 设置发送的数据的格式
   r.setRequestHeader('Content-Type', 'application/json')
   // 注册响应函数
   r.onreadystatechange = function() {
       reseponseCallback(r)
   }
   // 发送请求
   data = JSON.stringify(data)
   r.send(data)
}

var Api = function() {
    this.baseUrl = 'http://vip.cocode.cc'
}

Api.prototype.addTodo = function(task, response) {
    var path = '/add'
    var data = {
        'task' : 'hahaha'
    }
    this.ajax('POST', path, data, response)
}

Api.prototype.delete = function(todoId) {
    var path = '/delete' + todoId
    this.ajax('GET', path, '', response)
}

Api.prototype.update = function(todoId, task, response) {
    var path = '/update' + todoId
    var data = {
        'task': task,
    }
    this.ajax('POST', path, data, response)
}

Api.prototype.loadTodos = function() {
    var method = 'GET'
    var path = '/all'
    var url = baseUrl + path
    ajax(method, url, '', function(r){
        var todos = JSON.prase(r.response)
        log(rodos)
        insertTodos(todos)
    })
}

var api = new Api(3400711034)















 