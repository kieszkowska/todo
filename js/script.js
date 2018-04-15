// Add item after enter key is pressed

var input = document.getElementById('input');
input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        add();
    }
});


// Set cookie index

var index = document.cookie.match('(^|;) ?' + "cookieCount" + '=([^;]*)(;|$)');
if (index) {
    var cookieCount = index[2];
} else {
    var cookieCount = 0;
}


// Add items from cookies

if (cookieCount > 0) {
    for (var i = 0; i <= cookieCount; i++) {
        var data = document.cookie.match('(^|;) ?' + "cookie"+ i + '=([^;]*)(;|$)');
        if (data) {
            var text = data[2];
            var list = document.getElementById('list');
            list.innerHTML += '<li><div class="circle"></div>' + text + '<div id="' + i + '" class="remove" onclick="remove(this)">X</div></li>';
        }
    }
}


// Add item to list

function add() {
    // Add list item
    var text = document.getElementById('input').value;
    var list = document.getElementById('list');
    list.innerHTML += '<li><div class="circle"></div>' + text + '<div id="' + cookieCount + '" class="remove" onclick="remove(this)">X</div></li>';
    document.getElementById('input').value = '';

    // Create cookie with item
    cookieCount++;
    document.cookie = "cookie" + cookieCount + "=" + text + "; expires=Thu, 27 Jan 2028 00:00:01 GMT;";
    document.cookie = "cookieCount=" + cookieCount + "; expires=Thu, 27 Jan 2028 00:00:01 GMT;";
}


// Remove item from list

function remove(item) {
    // Remove list item
    item.parentNode.parentNode.removeChild(item.parentNode);

    // Remove cookie with item
    document.cookie = "cookie" + item.id + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}