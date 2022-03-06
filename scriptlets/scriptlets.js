// MrBukLau's Scriptlets

/// apple-music-artwork-format-changer.js
/// alias amafc.js
(function() {
    "use strict";
    if (document.location.href.includes(".mzstatic.com/image/thumb/")) {
        if (location.href.match(".webp")) {
            location.href = location.href.replace(".webp", ".jpeg");
        }
    }
})();

/// apple-music-artwork-size-changer.js
/// alias amasc.js
(function() {
    "use strict";
    if (document.location.href.includes(".mzstatic.com/image/thumb/")) {
        if (location.href.match("190x190")) {
            location.href = location.href.replace("190x190", "2000x2000");
        } else if (location.href.match("200x200")) {
            location.href = location.href.replace("200x200", "2000x2000");
        } else if (location.href.match("270x270")) {
            location.href = location.href.replace("270x270", "2000x2000");
        } else if (location.href.match("300x300")) {
            location.href = location.href.replace("300x300", "2000x2000");
        } else if (location.href.match("305x305")) {
            location.href = location.href.replace("305x305", "2000x2000");
        } else if (location.href.match("380x380")) {
            location.href = location.href.replace("380x380", "2000x2000");
        } else if (location.href.match("400x400")) {
            location.href = location.href.replace("400x400", "2000x2000");
        } else if (location.href.match("500x500")) {
            location.href = location.href.replace("500x500", "2000x2000");
        } else if (location.href.match("540x540")) {
            location.href = location.href.replace("540x540", "2000x2000");
        } else if (location.href.match("600x600")) {
            location.href = location.href.replace("600x600", "2000x2000");
        } else if (location.href.match("610x610")) {
            location.href = location.href.replace("610x610", "2000x2000");
        } else if (location.href.match("1000x1000")) {
            location.href = location.href.replace("1000x1000", "2000x2000");
        }
    }
})();

/// apple-music-english-translation-enabler.js
/// alias amete.js
(function() {
    "use strict";
    if (document.location.href.includes("/music.apple.com/")) {
        let oldUrlSearch = window.location.search;
        if ((oldUrlSearch.indexOf("?") > -1) && (oldUrlSearch.indexOf("?l=") === -1)) {
            if (!/\&l=en$/.test(oldUrlSearch)) {
                let newUrlWithAddedParameter = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash;
                window.location.replace(newUrlWithAddedParameter);
            }
        } else {
            if (!/\?l=en$/.test(oldUrlSearch)) {
                let newUrlWithNewParameter = window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash;
                window.location.replace(newUrlWithNewParameter);
            }
        }
    }
})();

/// hikarinoakariost-bypasser.js
/// alias hnab.js
(function() {
    "use strict";
    if (document.location.href.includes("/hikarinoakari.com/out/")) {
        let delayInMilliseconds = 1000;
        setTimeout(function() {
            document.querySelector("a[class='link']").click();
        }, delayInMilliseconds);
    }
})();

/// itdmusic-bypasser.js
/// alias itdmb.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (document.location.href.includes("/itdmusic.top/")) {
            let firstButton = document.getElementsByClassName("btn btn-primary btn-captcha");
            if (firstButton.length > 0) {
                document.querySelector("button[class='btn btn-primary btn-captcha']").click();
            }
            let secondButton = document.getElementsByClassName("skip-ad");
            if (secondButton.length > 0) {
                let targetLink = $("a:contains('Skip Ad')");
                if (targetLink && targetLink.length) {
                    let delayInMilliseconds = 1000;
                    setTimeout(function() {
                        window.location.href = targetLink[0].href;
                    }, delayInMilliseconds);
                }
            }
        }
    });
})();

/// old-reddit-outbound-click-tracking-blocker.js
/// alias oroctb.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (document.location.href.includes("/old.reddit.com/")) {
            let aCol = document.getElementsByTagName("a");
            let a, actualUrl;
            for (let i = 0; i < aCol.length; i++) {
                a = aCol[i];
                actualUrl = a.getAttribute("data-href-url");
                if (actualUrl) {
                    a.setAttribute("data-outbound-url", actualUrl);
                }
            }
        }
    });
})();

/// old-reddit-redirection-enabler.js
/// alias orre.js
(function() {
    "use strict";
    if (document.location.href.includes("/www.reddit.com/") && !document.location.href.includes("/www.reddit.com/poll/")) {
        window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
    }
})();

/// ouo-io-bypasser.js
/// alias oib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (document.location.href.includes("/ouo.io/") || document.location.href.includes("/ouo.press/")) {
            if (document.getElementById("form-captcha") === null) {
                document.getElementsByTagName("form")[0].submit();
            }
            if (document.getElementById("form-captcha").click) {
                document.getElementsByTagName("form")[0].submit();
            }
        }
    });
})();

/// rentry-links-in-new-tabs-forcer.js
/// alias rlintf.js
(function() {
    "use strict";
    if (document.location.href.includes("/rentry.org/")) {
        let anchor = document.getElementsByTagName("a");
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].setAttribute("target", "_blank");
        }
    }
})();

/// tinyurl-is-bypasser.js
/// alias tuib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (document.location.href.includes("/tinyurl.is/")) {
            let targetLink = $("a:contains('Click Here to Watch')");
            if (targetLink && targetLink.length) {
                window.location.href = targetLink[0].href;
            }
        }
    });
})();
