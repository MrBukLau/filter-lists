// MrBukLau's Scriptlets

/// apple-music-album-artwork-resizer-and-english-translation.js
/// alias amaaraet.js
// Based on: https://github.com/MrBukLau/userscripts/blob/master/javascripts/apple-music-album-artwork-resizer-and-english-translation.user.js
if (document.location.href.includes("music.apple.com")) {
    var oldUrlSearch = window.location.search;
    if (window.location.href.indexOf("?i=") > -1) {
        if (!/\&l=en$/.test(oldUrlSearch)) {
            var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash;
            window.location.replace(newURL);
        }
    } else {
        if (!/\?l=en$/.test(oldUrlSearch)) {
            var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash;
            window.location.replace(newURL);
        }
    }
} else if (document.location.href.includes("mzstatic.com/image/thumb")) {
    if (location.href.match("600x600bb.webp")) {
        location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
    } else if (location.href.match("600x600bf.webp")) {
        location.href = location.href.replace("600x600bf.webp", "2000x2000.jpeg");
    } else if (location.href.match("1000x1000bb.webp")) {
        location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
    }
}

/// old-reddit-redirection.js
/// alias orr.js
// Based on: https://greasyfork.org/en/scripts/44669-bring-back-old-reddit
if (document.location.href.includes("www.reddit.com") && !document.location.href.includes("www.reddit.com/poll")) {
    window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
}

/// tinyurl-is-bypasser.js
/// alias tuib.js
// Based on: https://greasyfork.org/en/discussions/development/55607-help-i-try-to-make-a-userscript-that-automatically-click-on-a-button-when-the-button-show-up
if (document.location.href.includes("tinyurl.is")) {
    document.querySelector("a[id='skip-btn']").click();
}
