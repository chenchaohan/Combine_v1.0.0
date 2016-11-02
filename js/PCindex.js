$imgLis = $(".alis");

// 初始化
$imgLis.each(function() {
    // 定义---初始化属性
    // 反转标志
    this.return = false;
    // 定义栈
    this.stack1 = [];
    this.stack2 = [];

    // 将图片堆栈进
    var that = this.stack1;
    $(this).find("a>img").eq(0).siblings("img").each(function() {
        that.push(this);
        $(this).css({
            "transform": "rotateX(90deg)"
        });
    });
});

// 判断图片翻转问题！应该用一个"栈"来解决.
$imgLis.on("click", function(e) {
    var e = e || window.event;
    var temp = null;
    // 判断是上翻还是下翻
    if (this.return) {
        // 对应的图片出入栈
        temp = this.stack2.shift();
        this.stack1.unshift(temp);
        $(temp).css("transform", "rotateX(90deg)")
        if (this.stack2.length == 0) { this.return = false }
    } else {
        temp = this.stack1.shift();
        this.stack2.unshift(temp);
        $(temp).css("transform", "rotateX(0deg)")
        if (this.stack1.length == 0) { this.return = true }
    }
    // 阻止事件冒泡,避免影响视频！
    e.stopPropagation()

});

// 阻止点击事件冒泡。
//$imgLis.find(".foot").on("click", function(e) {
//  var e = e || window.event;
//  e.stopPropagation();
//});

setInterval(function() {
    $imgLis[randomFn(0, 4)].click();
}, 4500);

function randomFn(min,max){
	return parseInt(Math.random()*(max -min)+min);
}

