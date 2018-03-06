// 用 node.js 开发脱离浏览器的 js 程序
// (主要用于工具或者服务器端口, 比如文件处理)
// 
// 用 express 简述后端开发的流程
// (前后和后端是配合工作的, 了解一下后端是很有好处的)
// 
// 如果时间多, 会讲一下使用 electron 开发桌面程序
// 
// node js 安装
// http://www.runoob.com/nodejs/nodejs-install-setup.html
// 
// nmp(node package manager)
// package 就是我们之前说的库, 比如 bootstrap
// 
// express 框架安装使用(他是一个流行的基于 nodejs 服务器的开发框架)
// http://www.runoob.com/nodejs/nodejs-express-framework.html

var a = 'hello'
console.log(a, ' gua')

var os = require('os')
console.log(os.uptime());

var fs = require('fs')
fs.readdir('.', function(err, files) {
    console.log('error', typeof err, err);
    if (err != null) {
        console.log(err);
    } else {
        console.log('files', files);
    }
})

// fs.writeFile('message.txt', '你好 Node.js', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(写入成功);
//     }
// })

// var file = 'message.txt'
// fs.unlink(file, (err) => {
//     if (err) {
//         console.log('error', err, err.path);
//     } else {
//         console.log(`${file} 成功删除`);
//     }
// })











