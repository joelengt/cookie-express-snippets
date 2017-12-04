/* Cookies main */
var Cookies = window.Cookies || {};

/* Function Set a cookie */
function setCookie(name, value, options) {
    var expires = "";
    var path = "/"

    if(options) {
        if (options.expires) {
            var days = options.expires
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }

        if (options.path) {
            path = options.path
        }
    }

    document.cookie = name + "=" + value + expires + "; path=" + path;
}

/* Funtion Get a cookie */
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/* Function to check a cookie */
function deleteCookie(name) {
   setCookie(name, "", -1);
}

// Global namespace
Cookies.set = setCookie
Cookies.get = getCookie
Cookies.delete = deleteCookie

// Expose Global namespace
window.Cookies = Cookies
