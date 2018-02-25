js 的历史现状和未来
什么是 ES6 有什么新东西
CSS 最基础的套路

JS已经有了 20 年了
现状是各家在瞎搞
typescript
xxscript
jsx

最重要的还是编程能力
    简化问题的能力
    快速开发的能力
    解决别人不能解决的问题的能力
    
ES6 的新东西

ES6 (ECMAScript 6) 是 JavaScript 的第 6 个版本
为什么要叫 ES6 不叫 Js6
因为你没有资格给它取名字

let
cosnt
模版字符串
Set 类型(类型)
Map 类型
...
类似 Python 的解包
函数默认参数
可变参数
箭头函数(这就是垃圾)

var 是以函数为单位限制作用于的修饰符号
var foo = function() {
    if (true) {
        var foo1 = 1
        let foo2 = 2
    }
    log('foo1', foo1)
    log('foo2', foo2)
}

log(foo1)

let
let 就是限制作用领在{}内的var
for(let i = 0; i < 3; i++) {
    log(i)
}
log(i)

for(var i = 0; i < 3; i++) {
    log(i)
}

const 
const 用来声明一个不可赋值的变量
变量的值只能在声明的时候赋予
const a = 1
a = 2 // 错误

const arr = [1, 2]
arr.push(3)

set
Set 在其他语言里面称为集合
是一种和 Array 相似的数据结构
不同之处在于, Set中的元素都是不重复的
用法如下

var s = new Set()

// add 方法添加元素，和push一样
s.add(1)
s.add(2)
// has 方法检查元素是否在 set 中
s.has(1)
s.has(3)
// size 属性相当于 length
s.size // 2
// delete 方法删除一个元素
s.delete(1)
s.has(1)

s.size // 1

set类型的主要作用是去重，在我们作业中
做过的 union 等函数都是 set 的标配函数
不过在 js 中需要手动实现那些函数

Map
Map 和 Object 很相似
在其他语言中 通常会有 dict 和 object 两种数据结构
现在 js 也有独立的 dict 那就是 Map 

var m = new Map()

m.get('name')

let o = {}
o.name = 'gua'
o.name

... 
... 叫扩展符号，作用是把数组解开成独立的元素

var a1 = [1, 2, 3]
var a2 = [...a1, 4]
// 结果是 [1, 2, 3, 4]

...可以用来传参数
var a1 = [1, 2, 3]
log(...a1)
// 相当于 log(1, 2, 3)
// 类似于 log.apply(window, a1)

解包
解包是其他语言(Python)中学来的特性，见下方例子

var arr = [1, 2]
var a = arr[0]
var b = arr[1]

[a, b] = [b, a]




















