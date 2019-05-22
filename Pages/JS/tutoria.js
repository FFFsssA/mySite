window.onload = function() {
    function $(Class) {
        return document.getElementsByClassName(Class)[0];
    }
    var Menu1 = $("menu_1");
    var Menu2 = $("menu_2");
    var Menu3 = $("menu_3");
    var Menu4 = $("menu_4");
    var Menu5 = $("menu_5");
    var Menu6 = $("menu_6");
    // console.log(Menu6);
    var opt = document.getElementsByClassName("opt");
    
    //添加事件 进入鼠标进入显示
    opt[0].onmouseenter = function() {
        Menu1.style.display = "flex";
        Menu1.onmouseenter = function() {
            Menu1.style.display = "flex";
        }
        Menu1.onmouseleave = function() {
            Menu1.style.display = "none";
        }
    }
    opt[0].onmouseleave = function() {
        Menu1.style.display = "none";
    }

    opt[1].onmouseenter = function() {
        Menu2.style.display = "flex";
        Menu2.onmouseenter = function() {
            Menu2.style.display = "flex";
        }
        Menu2.onmouseleave = function() {
            Menu2.style.display = "none";
        }
    }
    opt[1].onmouseleave = function() {
        Menu2.style.display = "none";
    }

    opt[2].onmouseenter = function() {
        Menu3.style.display = "flex";
        Menu3.onmouseenter = function() {
            Menu3.style.display = "flex";
        }
        Menu3.onmouseleave = function() {
            Menu3.style.display = "none";
        }
    }
    opt[2].onmouseleave = function() {
        Menu3.style.display = "none";
    }
    //
    opt[3].onmouseenter = function() {
        Menu4.style.display = "flex";
        Menu4.onmouseenter = function() {
            Menu4.style.display = "flex";
        }
        Menu4.onmouseleave = function() {
            Menu4.style.display = "none";
        }
    }
    opt[3].onmouseleave = function() {
        Menu4.style.display = "none";
    }
    //
    opt[4].onmouseenter = function() {
        Menu5.style.display = "flex";
        Menu5.onmouseenter = function() {
            Menu5.style.display = "flex";
        }
        Menu5.onmouseleave = function() {
            Menu5.style.display = "none";
        }
    }
    opt[4].onmouseleave = function() {
        Menu5.style.display = "none";
    }
    //
    opt[5].onmouseenter = function() {
        Menu6.style.display = "flex";
        Menu6.onmouseenter = function() {
            Menu6.style.display = "flex";
        }
        Menu6.onmouseleave = function() {
            Menu6.style.display = "none";
        }
    }
    opt[5].onmouseleave = function() {
        Menu6.style.display = "none";
    }
}