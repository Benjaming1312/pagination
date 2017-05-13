jQuery.fn.bcpagein = function (options){

    // jQuery設定
    var settings = jQuery.extend({
        userlimt: 6,
        animate: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    },options)


    var usertag = $(this)

    if (settings.animate != false){
        var InClass = settings.animateIn
        var OutClass = settings.animateOut
        var firstHidden = 'animated phidden'
    }else{
        var InClass = 'ptrans-in'
        var OutClass = 'ptrans-out'
        var firstHidden = 'phidden'
    }
    // 一次顯示幾則新聞
    var pagelimt = settings.userlimt

    // 頁數控制項
    var pagelistshow = 5

    // 總頁數
    var currentpage = Math.ceil($(this).children('li').length / pagelimt)

    var pagination = $('<div class="pagination-wrapper"></div>')
    $(this).after(pagination)
    $(pagination).append('<a href="#" class="prev">prev</a> <ul class="pagination list-inline"></ul> <a href="#" class="next">next</a>')
    // 頁數的數字
    for (i = 0; i < currentpage; i++) {
        $('ul.pagination').append('<li>' + '<a style="cursor: pointer;" data-pages='+ (i + 1) + '>' + (i + 1) + '</a>' + '</li>')
    }

    usertag.children('li').addClass(firstHidden)
    for (n = 1; n < (pagelimt + 1); n++) {
        usertag.children('li:nth-child(' + n + ')').addClass('pshow').addClass(InClass).removeClass('phidden')
    }

    // 頁數列表
    $('ul.list-inline li').hide()
    for (l = 1; l < (pagelistshow + 1); l++) {
        $('ul.list-inline li:nth-child(' + l + ')').show()
    }

    // 下一組頁數
    $('.next').click(function () {
        $('ul.list-inline li').hide()

        // 頁數列表第一個自動點擊
        var showa = pagelistshow + 1
        $('ul.list-inline li:nth-child(' + showa + ') a').click()

        pagelistshow = parseInt(pagelistshow) + 5
        // 當頁數切換過頭，鎖定在最後一頁
        if (pagelistshow >= currentpage) {
            pagelistshow = Math.ceil((currentpage / 5)) * 5
            for (l = (pagelistshow - 5) + 1; l < ((pagelistshow)); l++) {
                $('ul.list-inline li:nth-child(' + l + ')').show()
            }
        } else {
            pagelistshow = pagelistshow
            for (l = (pagelistshow - 5) + 1; l < ((pagelistshow) + 1); l++) {
                $('ul.list-inline li:nth-child(' + l + ')').show()
            }
        }

    })

    // 上一組頁數
    $('.prev').click(function () {
        $('ul.list-inline li').hide()

        pagelistshow = parseInt(pagelistshow) - 5

        // 頁數列表第一個自動點擊
        var showa = pagelistshow
        console.log(showa)
        $('ul.list-inline li:nth-child(' + showa + ') a').click()

        // 頁數切換過頭，鎖定在第一頁
        if (pagelistshow <= 5) {
            pagelistshow = 5
            for (l = 0; l < ((pagelistshow) + 1); l++) {
                $('ul.list-inline li:nth-child(' + l + ')').show()
            }
        } else {
            for (l = (pagelistshow - 5) + 1; l < ((pagelistshow) + 1); l++) {
                $('ul.list-inline li:nth-child(' + l + ')').show()
            }
        }
    })

    // 頁數被點擊後的動作
    $('ul.list-inline li a').click(function (e) {

        $('ul.list-inline li').removeClass('active')
        // 點擊的上色
        $(this).parent('li').addClass('active')

        if (settings.animate != false){
            var clickIn = settings.animateIn
            var clickOut = settings.animateOut
        }else{
            var clickIn = 'ptrans-in'
            var clickOut = 'ptrans-out'
        }


        // 全部列表先隱藏起來
        usertag.children('li').addClass(clickOut).removeClass('pshow').removeClass(clickIn)

        setTimeout(function(){
            usertag.children('li').addClass('phidden')
        },100)
        // 取得數字
        var targetnum = $(this).attr('data-pages')

        // 取得頁數範圍
        if (targetnum == 1) {
            var pagestart = 1
        } else {
            var pagestart = (parseInt(targetnum) - 1) * pagelimt + 1
        }

        // 顯示內容
        setTimeout(function () {
            for (n = pagestart; n < (pagestart + pagelimt); n++) {
                usertag.children('li:nth-child(' + n + ')').removeClass('phidden').removeClass(clickOut).addClass(clickIn)
            }
        }, 100)
        setTimeout(function(){
            $('.'+ clickIn).addClass('pshow')
        },300)
    })
}