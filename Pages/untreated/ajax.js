function ajax(ul, fn) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", ul, true);  //表述异步处理
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fn && fn(xhr.responseText);
            }
        }
}