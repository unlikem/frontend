// 数据结构就是存储数据的方式
// 算法是有特定的套路的

var log = function() {
    console.log.apply(console, arguments)
}

var Queue = function() {
    this.data = []
}

Queue.prototype.enqueue = function (element) {
    this.data.push(element)
}

Queue.prototype.dequeue = function () {
    return this.data.splice(0, 1)[0]
}

Queue.prototype.length = function() {
    return this.data.length
}

Queue.prototype.empty = function() {
    this.data = []
}

var q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
log('length', q.length())
log(q.dequeue())
q.enqueue(4)
log(q.dequeue())
log(q.dequeue())
log(q.dequeue())

var Stack = function() {
    this.data = []
}

Stack.prototype.push = function(e) {
    this.data.push(e)
}

Stack.prototype.pop = function() {
    var index = this.data.length - 1
    return this.data.splice(index, 1)[0]
}

Stack.prototype.top = function() {
    var index = this.data.length - 1
    return this.data[index]
}

var s = new Stack()
s.push('hello')
s.push('world')
log(s.pop())
log(s.pop())

// 链表实现

var Node = function(e) {
    this.element = e
    this.next = null
}

var LinkedList = function() {
    this.head = new Node()
    this._length = 0
}

LinkedList.prototype.append = function(e) {
    var node = new Node(e)
    var n = this.head
    while(n.next != null) {
        n = n.next
    }
    n.next = node
    //
    this._length++
}

LinkedList.prototype.indexOf = function(e) {
    var index = -1
    var n = this.head
    var i = 0
    while(n.next != null) {
        if (e === n.element) {
            index = i
            break
        }
        n = n.next
        i++
    }
    return index
}

LinkedList.prototype.length = function() {
    return this._length
}

LinkedList.prototype.log = function() {
    var n = this.head.next
    log('遍历链表')
    while(n != null) {
        log(' > ', n.element)
        n = n.next
    }
}

var list = new LinkedList()
list.append('hello')
list.append('gua')
list.append('你好')
list.log()
log(list.length())




















