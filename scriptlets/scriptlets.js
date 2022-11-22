// MrBukLau's Scriptlets

/**********************/
/* Generic Scriptlets */
/**********************/
/// get-url-param.js
/// alias gup.js
(function() {
    "use strict";
    if (window.location.href.includes("?url=") || window.location.href.includes("&url=")) {
        let urlParams = new URLSearchParams(window.location.search);
        let urlReplacement = urlParams.get("url");
        if (window.location.href.match("url=http")) {
            window.location.replace(urlReplacement);
        } else {
            window.location.replace(window.location.protocol + "//" + urlReplacement);
        }
    }
})();

/// set-attr.js
/// alias sa.js
(function() {
    "use strict";
    const token = "{{1}}";
    if (token === "" || token === "{{1}}") {
        return;
    }
    const tokens = token.split(/\s*\|\s*/);
    const attrValue = "{{2}}";
    let selector = "{{3}}";
    if (selector === "" || selector === "{{3}}") {
        selector = `[${tokens.join("],[")}]`;
    }
    let timer;
    const behavior = "{{4}}";
    const setattr = () => {
        timer = undefined;
        const nodes = document.querySelectorAll(selector);
        try {
            for (const node of nodes) {
                for (const attr of tokens) {
                    if (attr !== attrValue) {
                        node.setAttribute(attr, attrValue);
                    }
                }
            }
        } catch {}
    };
    const mutationHandler = mutations => {
        if (timer !== undefined) {
            return;
        }
        let skip = true;
        for (let i = 0; i < mutations.length && skip; i++) {
            const {
                type,
                addedNodes,
                removedNodes
            } = mutations[i];
            if (type === "attributes") {
                skip = false;
            }
            for (let j = 0; j < addedNodes.length && skip; j++) {
                if (addedNodes[j].nodeType === 1) {
                    skip = false;
                    break;
                }
            }
            for (let j = 0; j < removedNodes.length && skip; j++) {
                if (removedNodes[j].nodeType === 1) {
                    skip = false;
                    break;
                }
            }
        }
        if (skip) {
            return;
        }
        timer = self.requestIdleCallback(setattr, {
            timeout: 10
        });
    };
    const start = () => {
        setattr();
        if (/\bloop\b/.test(behavior) === false) {
            return;
        }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    if (document.readyState !== "complete" && /\bcomplete\b/.test(behavior)) {
        window.addEventListener("load", start, {
            once: true
        });
    } else if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", start, {
            once: true
        });
    } else {
        start();
    }
})();

/***********************/
/* Specific Scriptlets */
/***********************/
/// apple-music-artwork-format-and-size-changer.js
/// alias amafasc.js
(function() {
    "use strict";
    if (window.location.href.includes(".mzstatic.com/image/thumb/")) {
        if (window.location.href.match("190x190") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("190x190", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("200x200") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("200x200", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("270x270") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("270x270", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("296x296") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("296x296", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("300x300") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("300x300", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("305x305") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("305x305", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("316x316") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("316x316", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("380x380") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("380x380", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("400x400") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("400x400", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("500x500") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("500x500", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("540x540") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("540x540", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("592x592") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("592x592", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("600x600") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("600x600", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("610x610") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("610x610", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("632x632") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("632x632", "2000x2000").replace(".webp", ".jpeg"));
        } else if (window.location.href.match("1000x1000") && window.location.href.match(".webp")) {
            window.location.replace(window.location.toString().replace("1000x1000", "2000x2000").replace(".webp", ".jpeg"));
        }
    }
})();

/// apple-music-japanese-to-english-album-translator.js
/// alias amjteat.js
(function() {
    "use strict";
    if (window.location.href.includes("/music.apple.com/jp/album/")) {
        let oldUrlSearch = window.location.search;
        let urlParams = new URLSearchParams(oldUrlSearch);
        if (urlParams.has("l") === false) {
            if (oldUrlSearch.indexOf("?") === -1) {
                if (!/\?l=en/.test(oldUrlSearch)) {
                    window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "?l=en" + window.location.hash);
                }
            } else {
                if (!/\&l=en/.test(oldUrlSearch)) {
                    window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname + oldUrlSearch + "&l=en" + window.location.hash);
                }
            }
        }
    }
})();

/// hikarinoakariost-bypasser.js
/// alias hnab.js
(function() {
    "use strict";
    if (window.location.href.includes("/hikarinoakari.com/out/")) {
        setTimeout(function() {
            document.querySelector("a[class='link']").click();
        }, 750);
    }
})();

/// icelz-onclick-attribute-remover.js
/// alias ioar.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        let anchor = document.querySelectorAll("a[class='channel-link'][href]");
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].removeAttribute("onclick");
        }
    });
})();

/// itdmusic-bypasser.js
/// alias itdmb.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        let firstButton = document.getElementsByClassName("btn btn-primary btn-captcha");
        if (firstButton.length > 0) {
            document.querySelector("button[class='btn btn-primary btn-captcha']").click();
        }
        let secondButton = document.getElementsByClassName("skip-ad");
        if (secondButton.length > 0) {
            let targetLink = $("a:contains('Skip Ad')");
            if (targetLink && targetLink.length) {
                setTimeout(function() {
                    let newUrl = targetLink[0].href;
                    window.location.replace(newUrl);
                }, 750);
            }
        }
    });
})();

/// nyaa-dark-mode-enabler.js
/// alias ndme.js
(function() {
    "use strict";
    window.addEventListener("DOMContentLoaded", function() {
        if (!document.body.classList.contains("dark")) {
            document.querySelector("a[id='themeToggle']").click();
        }
    });
})();

/// old-reddit-redirector.js
/// alias orr.js
(function() {
    "use strict";
    if (window.location.href.includes("/www.reddit.com/") && !window.location.href.includes("/www.reddit.com/gallery/") && !window.location.href.includes("/www.reddit.com/poll/")) {
        window.location.replace(window.location.toString().replace("/www.reddit.com/", "/old.reddit.com/"));
    }
})();

/// ouo-io-bypasser.js
/// alias oib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (document.getElementById("form-captcha") === null) {
            document.getElementsByTagName("form")[0].submit();
        }
        if (document.getElementById("form-captcha").click) {
            document.getElementsByTagName("form")[0].submit();
        }
    });
})();

/// tinyurl-is-bypasser.js
/// alias tuib.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        let targetLink = $("a:contains('Click Here to Watch')");
        if (targetLink && targetLink.length) {
            let newUrl = targetLink[0].href;
            window.location.replace(newUrl);
        }
    });
})();

/// youtube-shorts-redirector.js
/// alias ysr.js
(function() {
    "use strict";
    let oldHref = document.location.href;
    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
    }
    window.onload = function() {
        let bodyList = document.querySelector("body");
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function() {
                if (oldHref !== document.location.href) {
                    oldHref = document.location.href;
                    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
                        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
                    }
                }
            });
        });
        let config = {
            childList: true,
            subtree: true
        };
        observer.observe(bodyList, config);
    };
})();
