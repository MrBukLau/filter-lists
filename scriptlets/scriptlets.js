// MrBukLau's Scriptlets

/// apple-music-album-artwork-resizer.js
/// alias amaar.js
// Based on: https://greasyfork.org/en/discussions/requests/55817-replace-string-in-an-url
(function() {
    'use strict';
    if (document.location.href.includes("mzstatic.com/image/thumb")) {
        if (location.href.match("600x600bb.webp")) {
            location.href = location.href.replace("600x600bb.webp", "2000x2000.jpeg");
        } else if (location.href.match("600x600bf.webp")) {
            location.href = location.href.replace("600x600bf.webp", "2000x2000.jpeg");
        } else if (location.href.match("1000x1000bb.webp")) {
            location.href = location.href.replace("1000x1000bb.webp", "2000x2000.jpeg");
        }
    }
})();

/// apple-music-english-translation.js
/// alias amet.js
// Based on: https://stackoverflow.com/questions/16065937/changing-a-pages-url-parameters
(function() {
    'use strict';
    if (document.location.href.includes("music.apple.com")) {
        var oldUrlSearch = window.location.search;
        if (window.location.href.indexOf("?i=") > -1) {
            if (!/\&l=en$/.test(oldUrlSearch)) {
                var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash;
                window.location.replace(newUrl);
            }
        } else {
            if (!/\?l=en$/.test(oldUrlSearch)) {
                var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash;
                window.location.replace(newUrl);
            }
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
        }, delayInMilliseconds);
    }
})();

/// old-reddit-outbound-click-tracking-blocker.js
/// alias oroctb.js
// Based on: https://reddit.com/r/privacy/comments/4aqdg0/reddit_started_tracking_the_links_we_click_heres/
(function() {
    'use strict';
    window.addEventListener('load', function() {
        if (document.location.href.includes("old.reddit.com")) {
            var aCol = document.getElementsByTagName('a');
            var a, actualUrl;
            for (var i = 0; i < aCol.length; i++) {
                a = aCol[i];
                actualUrl = a.getAttribute('data-href-url');
                if (actualUrl) {
                    a.setAttribute('data-outbound-url', actualUrl);
                }
            }
        }
    })
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
