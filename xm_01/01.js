// 定义log函数
var log = function() {
    console.log.apply(console, arguments);
}
// number 数字
// string 字符串
// boolean 布尔变量
// object 对象,高级一点的内容

var a
a = 1              // a 是 number
a = 1.1            // number
a = 'good'         // string

a = 10
b = true
c = 'I am good'
log('type a', typeof a)
log('type b', typeof b)
log('type c', typeof c)

// 高阶函数
// 高阶函数这个名字很唬人，实际上概念很简单——函数科以作为参数传递
// 有什么用呢?灵活性高,舒适读佳

log('string ', String(6.3))

var process = function(array, processor) {
    var l = []
    for (var i = 0; i < array.length; i++) {
        var a = array[i]
        var element = processor(a)
        l.push(element)
    }
    return l
}

var array = [1.1, -2.2, 3.3]
// 把浮点数转化成字符串
var stringList = process(array, String)
log('stringList', stringList)
// 把浮点数转化成整数
var intarray = process(array, Math.floor)
log('intarray', intarray)

// 匿名函数
var square = function(n) {
    return n * n
}

var array = [1, 2, 3]
var squareList = process(array, square)
log("square List", squareList)

var addList = process(array, function(n){
    return n + 1;
})
log('add list', addList)
















