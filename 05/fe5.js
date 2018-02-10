var log = function() {
    console.log.apply(console, arguments)
}

var Student = function(name, height) {
    this.name = name
    this.height = height
}

var s1 = new Student('gua', 169)

log('class, s1', s1.name, s1.height)

s1.name = 'xiaogua'
s1.height = 1.69
log('class, s1 属性', s1.name, s1.height)

var s2 = new Student()
var s3 = new Student()
s2.name = 'gua II'
s3.name = 'gua III'
log(s2.nmae, s3.name)

Student.prototype.greeting = function() {
    console.log(`hello, I'm ${this.name}`)
}

Student.prototype.update = function() {
    this.name = name
    this.age = age
}

s1.greeting()

s1.update('xiao', 169)

s1.greeting()

// 类主要的优势就是 可批量制造 object 和 可封装方法
// 其他上课要讲的杂项









