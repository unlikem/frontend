/*
1, 写一个 div 里面有 3 个 img 标签
2，只显示当前 img 标签

*/

var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event){
        console.log('click next')
        // 找到 slide div
        var slide = event.target.parentElement
        // 得到图片总数和当前图片下标
        var numberOfImgs = parseInt(slide.dataset.imgs)
        var activeIndex = parseInt(slide.dataset.active)
        // 求出下一张图片的 id
        var nextIndex = (activeIndex + 1) % numberOfImgs
        slide.dataset.active = nextIndex
        var nextSelector = '#id-guaimage-' + String(nextIndex)
        var className = 'gua-active'
        removeClassAll(className)
        var img = e(nextSelector)
        img.classList.add(className)
    })
}

bindEventSlide()