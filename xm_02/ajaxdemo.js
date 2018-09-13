// 获取登录页面
// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置请求方法和请求地址    
r.open('GET', '/login', true)
// 注册响应函数
r.onreadystatechange = function() {
    if (r.readyState == 4) {
        console.log('请求成功', r.responseText.length
        , r.responseText.slice(0, 10));
    }
}
// 发送请求
r.send()


// 发送登录数据
// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置请求方法和请求地址
r.open('POST', '/login', true)
// 设置发送的数据的格式
r.setRequestHeader('Content-Type', 'application/json')
// 注册响应函数
r.onreadystatechange = function() {
    if (r.readyState == 4) {
        console.log('state change', r, r.status, r.response)
        // var response = JSON.parse(r.response)
        // console.log('response', response)
    } else {
        console.log('change')
    }
}
// 发送请求
var account = {
    username: 'gua',
    password: '123',
}
var data = JSON.stringify(account)
r.send(data)

var ajax = function(method, path, headers, data, reseponseCallback) {
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

ajax('GET', '/', null, '', function(r){
    console.log(r.status, r.response);
})  

ajax('GET', 'https://api.douban.com/v2/book/1220562', null, '', function(r){
    // console.log(r.status, book)
    var book = JSON.parse(r.response)
    var imgUrl = book.image
    var body = document.querySelector('body')
    var img = `
        <img src=${imgUrl}>
    `
    body.insertAdjacentHTML('beforeend', img)
})

// GET /v2/movie/subject/1764796
ajax('GET', '/v2/movie/subject/1764796', null, '', function(r){
    // console.log(r.status, book)
    var movie = JSON.parse(r.response)
    console.log(movie)
    // var imgUrl = book.image
    // var body = document.querySelector('body')
    // var img = `
    //     <img src=${imgUrl}>
    // `
    // body.insertAdjacentHTML('beforeend', img)
})













