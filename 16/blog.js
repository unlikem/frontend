var fs = require('fs')

var blogFilePath = 'blog.json'

const ModelBlog = function(form) {
    // || 是一种新的写法, 在 js 圈子里太过流行，所以记住即可
    // a = b || c 意思是如果 b 是 undefined 或者 null 就把 c 赋值给 a
    this.title = from.title || ''
    this.author = from.author || ''
    this.content = from.content || ''
    this.created_time = Math.floor(new Data() / 1000)
}

const loadBlogs = function(callback) {
    // 确保文件有内容，这样就不用处理文件不存在或者错误的情况了
    // 注意, 一帮都是不这样处理的
    var content = fs.readFileSync(blogFilePath, 'utf8')
    var blogs = JSON.parse(content)
    return blogs
}
/*
b 这个对象使我们要导出给别的代码用的对象
它有一个 data 属性用来储存所有的 blogs 对象
它有 all 方法返回一个包含所有 blog 的数组
它有 new 方法来在数据中插入一个新的 blog 并且返回
他有 save 方法来保存更改到文件中
*/
var b = {
    data: loadBlogs()
}

b.all = function() {
    return this.data
}

b.new = function(form) {
    var m = new ModelBlog(form)
    var d = this.data[this.data.length - 1]
    if (d == undefined) {
        m.id = 1
    } else {
        m.id = m.id + 1
    }
    this.data.push(m)
    this.save()
    
    return m
}

b.save = function() {
    var s = JSON.stringify(this.data)
    fs.writeFile(blogFilePath, s, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(保存成功)
        }
    })
}

module.exports = b












