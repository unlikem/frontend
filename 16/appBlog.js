// 引入 express 并且创建一个 express 实例赋值给 app
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

// 配置静态文件目录
app.use(express.static('static'))

// 加载 blog.js 模块
const blog = require('./blog')

var sendHtml = function(path, response) {
    var fs = require('fs')
    var options {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data) {
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

// / 是用户访问主页的路径
/*
现在可以返回这么几个页面
- 主页，返回博客列表
- 详细页面，返回某一单一的博客页面
*/
app.get('/', function(request, response) {
    var path = 'blog_index.html'
    sendHtml(path, response)
})

app.get('/blog', function(request, response) {
    console.log('query', request.query)
    var path = 'blog_detail.html'
    sendHtml(path, response)
})

app.get('/api/blog/all', function(request, response) {
    console.log(typeof blog, blog, Object.keys(blog))
    var blogs = blog.all()
    var r = JSON.stringify(blogs)
    response.send()
})

app.post('/api/blog/add', function(request, response) {
    var form = request.body
    var b = blog.new(form)
    var r = JSON.stringify(b)
    response.send(r)
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})














