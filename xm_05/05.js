/*
1, 写出 HTML
2, 给按钮绑定事件
*/

var bindEventToggle = function() {
    var b = e('.gua-menu-toggle')
    bindEvent(b, 'click', function(event){
        // 找到 gua-menu-content
        var c = e('.gua-menu-content')
        // 开关 gua-hide class
        toggleClass(c, 'gua-hide')
    })
}

var bindEventtoggles = function() {
    var selector = '.gua-menu-toggle'
    bindAll(selector, 'click', function(event){
        var p = event.target.parentElement
        var c = find(p, '.gua-menu-content')
        toggleClass(c, 'gua-hide')
    })
}

// bindEventtoggles()

var bindEventlight = function() {
    var selector = '.gua-item-pic'
    bindAll(selector, 'mouseenter', function(event){
        var p = event.target.parentElement
        p.classList.add('gua-highlight')
    })
    bindAll(selector, 'mouseout', function(event){
        var p = event.target.parentElement
        p.classList.remove('gua-highlight')
    })
}

// bindEventlight()

/*
1, 写一个 div 里面有三个 img 标签
2, 只显示当前活动的 img
*/

var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event){
        // log('1')
        var slide = event.target.parentElement
        var num = parseInt(slide.dataset.imgs)
        var index = parseInt(slide.dataset.active)
        var next = (index + 1) % num
        slide.dataset.active = next
        var nextSelector = '#id-guaimage-' + String(next)
        removeClassAll('gua-active')
        var img = e(nextSelector)
        img.classList.add('gua-active')
        // log(num)
    })
}

bindEventSlide()










