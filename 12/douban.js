// 2016/12/31
// 
// fe12
// 
// 爬虫的原理(等上课讲解)
// 普通的爬虫(以豆瓣电影为例)
// 需要登录的爬虫(以知乎为例)
// 爬虫的奥秘(上课讲解)
// 动态内容的爬取
// 自定义模块的使用方法
// 
// 本节课讲过大量使用学过的新概念
// 稍微注意一下

// 这一行是套路，给 node.js 用的
// 如果没有这一行，就没有办法使用一些 let const 这样的特性
"use strict"

const request = require('request')
const cheerio = require('cheerio')

// 本文件需要安装两个基本的库
// request 用于下载网页
// cheerio 用于解析网页数据
// 
// 安装命令如下:
// npm install request cheerio

function Movie() {
    this.name = ''
    this.score = 0
    this.quote = ''
    this.ranking = 0
    this.coverUrl = ''
}

const log = function() {
    console.log.apply(console, arguments);
}

const movieFromDiv = function(div) {
    const movie = new Movie()
    const e = cheerio.load(div)
    movie.name = e('.title').text()
    movie.score = e('rating_num').text()
    movie.quote = e('.inq').text()
    const pic = e('.pic')
    movie.ranking = pic.find('em').text()
    movie.coverUrl = pic.find('img').attr('src')
    
    return movie
}

const saveMovie = function(movies) {
    const fs = require('fs')
    const path = 'douban.txt'
    const s = JSON.stringify(movies, null, 2);
    fs.writeFile(path, s, function(error) {
        if (error !== null) {
            log('*** 写入文件错误', error)
        } else {
            log('---保存成功')
        }
    })
}

const moviesFromUrl = function(url) {
    request(url, function(error, response, body) {
        if (error === null && response.statusCode == 200) {
            const e = cheerio.load(body)
            const movies = []
            const movieDivs = e('.item')
            for(let i = 0; i < movieDivs.length; i++){
                let element = movieDivs[i]
                const div = e(element).html()
                const m = movieFromDiv(div)
                movies.push(m)
            }
            saveMovie(movies)
        } else {
            log('*** ERROR 请求失败', error)
        }
    })
}

const __main = function() {
    // 这是主函数
    // 下载网页，解析出电影信息，保存到文件
    const url = 'https://movie.douban.com/top250'
    moviesFromUrl(url)
}

__main()

















