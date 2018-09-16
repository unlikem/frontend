// 类与面向对象
// js 的大坑 this 关键字
// 更好的封装(用 object 当参数,用OO的方式来封装 todo)
// 更好的封装 ajax

// 一些语言中会有 class 关键字来声明 类
// 但是 js 的处理方式并不是 class 而是下面这种
// 虽然看上去很怪异 但是无非是个套路而已

var Student = function(name, height) {
    this.name = name
    this.height = height 
}

var stu_1 = new Student('gua', '170')

// 可以给类增加一些方法(函数)
// 给类增加定义(想想标注库中 String 类的 legth)
// prototype 在这里就是一个套路‘’

Student.prototype.greeting = function() {
    console.log(`hello, I am ${this.name}`);
}   

console.log('stu_1', stu_1)

Student.prototype.update = function(name, age) {
    this.name = name
    this.age = age
}

stu_1.update('xiao', 18)
console.log('stu_1', stu_1)

// 封装
// 封装是说把一些操作做好，对外部来说只要简单调用即可

// 类的主要优势就是 可批量制造 Object 和可封装方法
 
 
































