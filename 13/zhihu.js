// 这一行是套路, 给 node.js 用的
// 如果没有这一行, 就没有办法使用一些 let const 这样的特性
"use strict"

const request = require('request')
const cheerio = require('cheerio')

function Answer() {
    this.author = ''
    this.content = ''
    this.link = ''
}

const log = function() {
    console.log.apply(console, arguments);
}

const answerFromDiv = function(div) {
    const a = new Answer()
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(div, options)
    a.author = e('.author-link').text()
    a.content = e('.zm-editable-const').html()
    
    return a
}

const answersFromBody = function(body) {
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(body, options)
    const divs = e('.zm-item-answer')
    const answers = []
    for (let i = 0; i < divs.length; i++) {
        let element = divs[i]
        const div = e(element).html()
        const m = answerFromDiv(div)
        answers.push(m)
    }
    return answers
}

const __main = function() {
    const url = 'https://www.zhihu.com/question/31515263'
    const cookie = 'd_c0="AFCCYF8KcQyPTuuNV915OchS6dFnGH2Jtcw=|1506524450"; _zap=274df9ac-f02a-4d65-a0c0-0dcb5e6f52da; z_c0=Mi4xMGQwN0FBQUFBQUFBVUlKZ1h3cHhEQmNBQUFCaEFsVk5rZm53V2dBTS05eDlWclNXbFhsOC11WlRkZTRLQWRSNVl3|1510189969|2c9b9689fa01dbabfc5e9e6ce28a002ace556e6c; __utma=51854390.1400871548.1519964389.1519964389.1519964389.1; __utmz=51854390.1519964389.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.100-1|2=registration_date=20140301=1^3=entry_date=20140301=1; q_c1=26c4b45934f64c1cba6c005bd8e3a288|1520257233000|1506524447000; aliyungf_tc=AQAAAAH58DVLuAYAUdu1J/Ye57kwPyid; _xsrf=fa5e6b2b-71bd-4dc5-bf20-55d9dbd8df42'
    const useragent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
    
    const headers = {
        'Cookie': cookie,
        'User-Agent': useragent,
    }
    
    const options = {
        url: url,
        headers: headers,
    }
    
    request(options, function(error, response, body) {
        if (error === null && response.statusCode == 200) {
            const answer = answersFromBody(body)
            const utils = require('./utils')
            const path = 'zhihu.answers.txt'
            utils.saveJSON(path, answer)
        } else {
            log('*** ERROR 请求失败 ', error)
        }
    })
}

__main()

















