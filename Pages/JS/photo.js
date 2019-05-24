window.onload = function() {  //进入页面开始加载
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    var index = 0;
    var img = document.getElementsByTagName("img")[0];  //索引值[0] 要加上
    var imgArry = ["../images/photo/girl1.jpg", "../images/photo/girl2.jpg", "../images/photo/girl3.jpg",  //图片存储的数组
    "../images/photo/horse1.jpg"
    ];
    prev.onclick = function() {
        img.src = imgArry[index];  //切换图片的src
        index--;
        if (index < 0) {
            index = imgArry.length - 1;
        }
    };
    next.onclick = function() {
        img.src = imgArry[index];
        index++;
        if (index > imgArry.length - 1) {
            index = 0;
        }
    };
};
//后面添加比较高端点的图片轮播