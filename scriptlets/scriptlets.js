// MrBukLau's Scriptlets

/// apple-music-album-artwork-resizer-and-english-translation.js
/// alias amaaraet.js
// Based on: https://github.com/MrBukLau/userscripts/blob/master/javascripts/apple-music-album-artwork-resizer-and-english-translation.user.js
(function() {
    'use strict';
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
})();

/// hikarinoakariost-bypasser.js
/// alias hnab.js
// Based on: https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
(function() {
    'use strict';
    if (document.location.href.includes("hikarinoakari.com/out")) {
        var delayInMilliseconds = 1000;
        setTimeout(function() {
            document.querySelector("a[class='link']").click();
        }, delayInMilliseconds);
    }
})();

/// itdmusic-bypasser.js
/// alias itdmb.js
// Based on: https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
(function() {
    'use strict';
    if (document.location.href.includes("itdmusic.top")) {
        var delayInMilliseconds = 1000;
        setTimeout(function() {
            document.querySelector("button[class='btn btn-primary btn-captcha']").click();
        }, delayInMilliseconds);
        setTimeout(function() {
            document.querySelector("a[class='btn']").click();
        }, delayInMilliseconds * 8);
    }
})();

/// old-reddit-redirection.js
/// alias orr.js
// Based on: https://greasyfork.org/en/scripts/44669-bring-back-old-reddit
(function() {
    'use strict';
    if (document.location.href.includes("www.reddit.com") && !document.location.href.includes("www.reddit.com/poll")) {
        window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
    }
})();

/// ouo-io-bypasser.js
/// alias oib.js
// Based on: https://greasyfork.org/en/scripts/419509-skipper-for-ouo-io-by-imba
(function() {
    'use strict';
    window.addEventListener('load', function() {
        if (document.location.href.includes("ouo.io") || document.location.href.includes("ouo.press")) {
            if (document.getElementById("form-captcha") === null) {
                document.getElementsByTagName("form")[0].submit();
            }
            if (document.getElementById("form-captcha").click) {
                document.getElementsByTagName("form")[0].submit();
            }
        }
    })
})();

/// tinyurl-is-bypasser.js
/// alias tuib.js
// Based on: https://stackoverflow.com/questions/6990231/how-do-i-make-greasemonkey-click-a-link-that-has-specific-text
(function() {
    'use strict';
    window.addEventListener('load', function() {
        if (document.location.href.includes("tinyurl.is")) {
            var targetLink = $("a:contains('Click Here to Watch')");
            if (targetLink && targetLink.length) {
                window.location.href = targetLink[0].href;
            }
        }
    })
})();
