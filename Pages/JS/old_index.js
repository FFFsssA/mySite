var item = document.getElementsByClassName("item");
var preBtn = document.getElementById("pre");
var nextBtn = document.getElementById("next");
var point = document.getElementsByClassName("point");

var timer = 0;
var index = 0;
//清除、用以保证每次执行的时候class都是item
var cleanIndex = function() {
    for(var i = 0; i < item.length; i++) {
        item[i].className = "item";
    }
    for(var j = 0; j < item.length; j++) {
        point[j].className = "point";
    }
}

var setIndex = function() {
    cleanIndex();
    item[index].className = "item active";
    point[index].className = "point active";
}

var goPre = function(){
    index--;
    if (index < 0 ) {
        index = (item.length - 1);  //实际长度减去1 即索引值
    }
    setIndex();
}
var goNext = function(){
    index++;
    if (index > (item.length - 1) ) {
        index = 0;  //实际长度减去1 即索引值
    }
    setIndex();
}
preBtn.addEventListener("click", function() {
    goPre();
    timer = 0;
})
nextBtn.addEventListener("click", function() {
    goNext();
    timer = 0;
})

for(i = 0; i < point.length; i++) {  // 事件监听貌似不起作用
    point[i].addEventListener("click", function() {
        var pointIndex = this.getAttribute("data-index");
        index = pointIndex;
        setIndex();
        timer = 0;
    });
}

setInterval(function() {
    timer++;
    if (timer == 50) {
        goNext();
        timer = 0;
    }
}, 100)
