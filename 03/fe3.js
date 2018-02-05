var id1 = document.querySelector('#id1')
var id2 = document.querySelector('#id2')
var id3 = document.querySelector('#id3')

id1.addEventListener('click', function(){
    console.log('click id1', event);
})

id2.addEventListener('click', function(){
    console.log('click id2', event);
})

id3.addEventListener('click', function(){
    console.log('click id3', event);
})

id1.addEventListener('click', function(event){
    console.log('capture click id1', event);
}, true)

id2.addEventListener('click', function(event){
    console.log('capture click id2', event);
}, true)

id3.addEventListener('click', function(event){
    console.log('capture click id3', event);
}, true)

// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置请求方法和请求地址
r.open('GET', '/login', true)
// 注册相应函数
r.onreadystatechange = function(){
    console.log('state change', r);
}
// 发送请求
r.send()

// 创建 AJAX 对象
var r = new XMLHttpRequest()
// 设置发送的数据的格式
r.open('POST', '/login', true)
r.setRequestHeader('Content-Type', 'application/json')
// 注册响应函数
r.onreadystatechange = function() {
    if (r.readyState === 4) {
        console.log('state change', r, r.status, r.response)
        var response = JSON.parse(r.response)
        console.log('response', response)
    } else {
        console.log('change')
    }
}

var account = {
    username: 'gua',
    password: '123',
}
var data = JSON.stringify(account)
r.send(data)

var ajax = function(method, path, headers, data, reseponseCallback) {

}
















