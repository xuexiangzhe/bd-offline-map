window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20220617"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20220617"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20220617"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20220617"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20220617"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20220617"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20220617"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20220617"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20220617"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20220617"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20220617"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "";
(function() {
    function aa(a) {
        throw a;
    }
    var l = void 0
      , q = !0
      , s = null
      , t = !1;
    function ca() {
        return function() {}
    }
    function da(a) {
        return function(b) {
            this[a] = b
        }
    }
    function u(a) {
        return function() {
            return this[a]
        }
    }
    function fa(a) {
        return function() {
            return a
        }
    }
    var ga, ha = [];
    function ia(a) {
        return function() {
            return ha[a].apply(this, arguments)
        }
    }
    function ja(a, b) {
        return ha[a] = b
    }
    var ka, x = ka = x || {
        version: "1.3.4"
    };
    x.da = "$BAIDU$";
    window[x.da] = window[x.da] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    x.U = x.U || {};
    x.U.fa = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : s
    }
    ;
    x.fa = x.Ic = x.U.fa;
    x.U.aa = function(a) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    x.aa = x.U.aa;
    x.lang = x.lang || {};
    x.lang.Fg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    x.Fg = x.lang.Fg;
    x.lang.lE = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a)
                return t;
            return q
        }
        return t
    }
    ;
    x.lE = x.lang.lE;
    x.U.$j = function(a) {
        return x.lang.Fg(a) ? document.getElementById(a) : a
    }
    ;
    x.$j = x.U.$j;
    x.U.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == s && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
            for (k = i = 0; i < f; i++)
                g.test(e[i].className) && (c[k] = e[i],
                k++)
        }
        return c
    }
    ;
    x.getElementsByClassName = x.U.getElementsByClassName;
    x.U.contains = function(a, b) {
        var c = x.U.$j
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    x.ga = x.ga || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.ga.oa = x.oa = document.documentMode || +RegExp.$1);
    var la = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > x.ga.oa ? (la["for"] = "htmlFor",
    la["class"] = "className") : (la.htmlFor = "for",
    la.className = "class");
    x.U.KG = la;
    x.U.jF = function(a, b, c) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = x.U.KG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    x.jF = x.U.jF;
    x.U.kF = function(a, b) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        for (var c in b)
            x.U.jF(a, c, b[c]);
        return a
    }
    ;
    x.kF = x.U.kF;
    x.el = x.el || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        x.el.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    }
    )();
    x.trim = x.el.trim;
    x.el.ip = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    }
    ;
    x.ip = x.el.ip;
    x.U.rc = function(a, b) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    x.rc = x.U.rc;
    x.U.Px = function(a, b, c) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        var e;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    }
    ;
    x.Px = x.U.Px;
    x.U.show = function(a) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        a.style.display = "";
        return a
    }
    ;
    x.show = x.U.show;
    x.U.FD = function(a) {
        a = x.U.fa(a);
        return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    x.U.ib = function(a, b) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++)
            f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    }
    ;
    x.ib = x.U.ib;
    x.U.EB = x.U.EB || {};
    x.U.Zl = x.U.Zl || [];
    x.U.Zl.filter = function(a, b, c) {
        for (var e = 0, f = x.U.Zl, g; g = f[e]; e++)
            if (g = g[c])
                b = g(a, b);
        return b
    }
    ;
    x.el.DO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    x.U.y0 = function(a) {
        x.U.jt(a, "expand") ? x.U.rc(a, "expand") : x.U.ib(a, "expand")
    }
    ;
    x.U.jt = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        x.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = q)
        });
        return c
    }
    ;
    x.U.Eg = function(a, b) {
        var c = x.U
          , a = c.fa(a);
        if (a === s)
            return a;
        var b = x.el.DO(b)
          , e = a.style[b];
        if (!e)
            var f = c.EB[b]
              , e = a.currentStyle || (x.ga.oa ? a.style : getComputedStyle(a, s))
              , e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.Zl)
            e = f.filter(b, e, "get");
        return e
    }
    ;
    x.Eg = x.U.Eg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ga.opera = +RegExp.$1);
    x.ga.tM = /webkit/i.test(navigator.userAgent);
    x.ga.SY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.ga.sE = "CSS1Compat" == document.compatMode;
    x.U.ma = function(a) {
        a = x.U.fa(a);
        if (a === s)
            return a;
        var b = x.U.FD(a)
          , c = x.ga
          , e = x.U.Eg;
        c.SY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        }, g;
        if (a == (c.oa && !c.sE ? b.body : b.documentElement))
            return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.oa && !c.sE) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.tM > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);
            if (c.opera > 0 || c.tM > 0 && e(a, "position") == "absolute")
                f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body; ) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR")
                    f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ga.Ye = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.ga.J2 = q);
    var ma = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ma) && !/chrome/i.test(ma) && (x.ga.zy = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ga.Nw = +RegExp.$1);
    x.oc = x.oc || {};
    x.oc.Pb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t)
                    break
            }
        return a
    }
    ;
    x.Pb = x.oc.Pb;
    x.lang.da = function() {
        return "TANGRAM__" + (window[x.da]._counter++).toString(36)
    }
    ;
    window[x.da]._counter = window[x.da]._counter || 1;
    window[x.da]._instances = window[x.da]._instances || {};
    x.lang.xt = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    x.lang.Ja = function(a) {
        this.da = a || x.lang.da();
        window[x.da]._instances[this.da] = this
    }
    ;
    window[x.da]._instances = window[x.da]._instances || {};
    x.lang.Ja.prototype.ki = ia(0);
    x.lang.Ja.prototype.toString = function() {
        return "[object " + (this.FQ || "Object") + "]"
    }
    ;
    x.lang.Ju = function(a, b) {
        this.type = a;
        this.returnValue = q;
        this.target = b || s;
        this.currentTarget = s
    }
    ;
    x.lang.Ja.prototype.addEventListener = function(a, b, c) {
        if (x.lang.xt(b)) {
            !b.pl && (b.pl = {});
            !this.Oi && (this.Oi = {});
            var e = this.Oi, f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.Fx = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.pl[a] != "object" && (b.pl[a] = {});
            f = f || x.lang.da();
            b.pl[a].Fx = f;
            e[a][f] = b
        }
    }
    ;
    x.lang.Ja.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (x.lang.xt(b)) {
            if (!b.pl || !b.pl[a])
                return;
            b = b.pl[a].Fx
        } else if (!x.lang.Fg(b))
            return;
        !this.Oi && (this.Oi = {});
        var c = this.Oi;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    x.lang.Ja.prototype.dispatchEvent = function(a, b) {
        x.lang.Fg(a) && (a = new x.lang.Ju(a));
        !this.Oi && (this.Oi = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var e = this.Oi
          , f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        x.lang.xt(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f])
                e[f][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    x.lang.xa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g)
            f[e] = g[e];
        a.prototype.constructor = a;
        a.l0 = b.prototype;
        if ("string" == typeof c)
            f.FQ = c
    }
    ;
    x.xa = x.lang.xa;
    x.lang.Tc = function(a) {
        return window[x.da]._instances[a] || s
    }
    ;
    x.platform = x.platform || {};
    x.platform.nM = /macintosh/i.test(navigator.userAgent);
    x.platform.U4 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.uM = /windows/i.test(navigator.userAgent);
    x.platform.aZ = /x11/i.test(navigator.userAgent);
    x.platform.zj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (x.platform.aC = x.aC = RegExp.$1);
    x.platform.UY = /ipad/i.test(navigator.userAgent);
    x.platform.oE = /iphone/i.test(navigator.userAgent);
    function na(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    x.lang.$w = function(a) {
        var b = window[x.da];
        b.LS && delete b.LS[a]
    }
    ;
    x.event = {};
    x.V = x.event.V = function(a, b, c) {
        if (!(a = x.fa(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    x.hd = x.event.hd = function(a, b, c) {
        if (!(a = x.fa(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    x.U.jt = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    }
    ;
    x.ZK = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.bL = this.Nk ? "touchstart" : "mousedown",
            this.mD = this.Nk ? "touchmove" : "mousemove",
            this.lD = this.Nk ? "touchend" : "mouseup",
            this.zh = t,
            this.ru = this.qu = 0,
            this.element.addEventListener(this.bL, this, t),
            ka.V(this.element, "mousedown", ca()),
            this.handleEvent(s))
        }
        a.prototype = {
            Nk: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                oa(a);
                this.zh = t;
                this.qu = this.Nk ? a.touches[0].clientX : a.clientX;
                this.ru = this.Nk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.mD, this, t);
                this.element.addEventListener(this.lD, this, t)
            },
            move: function(a) {
                pa(a);
                var c = this.Nk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Nk ? a.touches[0].clientX : a.clientX) - this.qu) || 10 < Math.abs(c - this.ru))
                    this.zh = q
            },
            end: function(a) {
                pa(a);
                this.zh || (a = document.createEvent("Event"),
                a.initEvent("tap", t, q),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.mD, this, t);
                this.element.removeEventListener(this.lD, this, t)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.bL:
                        this.start(a);
                        break;
                    case this.mD:
                        this.move(a);
                        break;
                    case this.lD:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var A = window.BMap || {};
    A.version = "3.0";
    function qa(a, b) {
        if (navigator.cookieEnabled) {
            var c = new Date;
            c.setTime(c.getTime() + 2592E6);
            document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString()
        } else
            localStorage ? localStorage.setItem(a, b) : sessionStorage && sessionStorage.setItem(a, b)
    }
    A.z2 = 0.34 > Math.random();
    0 <= A.version.indexOf("#") && (A.version = "3.1");
    A.Hr = [];
    A.ef = function(a) {
        this.Hr.push(a)
    }
    ;
    A.yr = [];
    A.Tk = function(a) {
        this.yr.push(a)
    }
    ;
    A.UU = A.apiLoad || ca();
    A.Wy = A.verify || function(a) {
        if (A.version && A.version >= 1.5) {
            var b = A.vd + "?qt=verify&ak=" + ra;
            a && (b = b + "&fromPanorama=" + a);
            sa(b, function(a) {
                if (a && a.error !== 0) {
                    A = s;
                    var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    switch (a.error) {
                    case 101:
                        b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                        break;
                    case 102:
                        b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                    }
                    alert(b);
                    if (typeof map !== "undefined" && typeof map.Sa === "function") {
                        map.Sa().innerHTML = "";
                        map.Oi = {}
                    }
                }
            })
        }
        var a = +new Date
          , c = F("script", {
            type: "text/javascript",
            async: ""
        });
        c.charset = "utf-8";
        c.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js?_t=" + a;
        c.onload = function() {
            window.___abvk && qa("SECKEY_ABVK", window.___abvk)
        }
        ;
        window.__abbaidu_2063_cb = function(a) {
            a = JSON.parse(a);
            qa("BMAP_SECKEY", a.data)
        }
        ;
        c.addEventListener ? c.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : c.attachEvent && c.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            // document.getElementsByTagName("head")[0].appendChild(c);
            c = s
        }, 1)
    }
    ;
    var ra = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = s;
    var va = window.BMap_loadScriptTime
      , wa = (new Date).getTime()
      , xa = s
      , ya = q
      , za = 5042
      , Aa = 5002
      , Ca = 5003
      , Da = "load_mapclick"
      , Ea = 5038
      , Fa = 5041
      , Ga = 5047
      , Ia = 5036
      , Ja = 5039
      , Ka = 5037
      , La = 5040
      , Ma = 5011
      , Na = 7E3;
    var Oa = 0;
    function Pa(a, b) {
        if (a = x.fa(a)) {
            var c = this;
            x.lang.Ja.call(c);
            b = b || {};
            c.M = {
                nC: 200,
                jc: q,
                fx: t,
                bD: q,
                ep: q,
                gp: b.enableWheelZoom || t,
                XK: q,
                dD: q,
                fp: q,
                Os: q,
                iD: q,
                cp: b.enable3DBuilding || t,
                Nc: 25,
                p1: 240,
                HU: 450,
                Ac: J.Ac,
                Ld: J.Ld,
                yt: !!b.yt,
                kc: Math.round(b.minZoom) || 1,
                qc: Math.round(b.maxZoom) || 19,
                Va: b.mapType || Qa,
                U5: t,
                UK: b.drawer || Oa,
                ex: q,
                dx: 500,
                PW: b.enableHighResolution !== t,
                vm: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                WF: 99,
                Ee: b.mapStyle || s,
                hZ: b.logoControl === t ? t : q,
                aV: [],
                M2: b.beforeClickIcon || s,
                zg: t,
                Ak: t,
                Xo: t,
                NE: q,
                YC: b.enableBizAuthLogo === t ? t : q,
                Ma: b.coordsType || 5,
                z6: b.touchZoomCenter || 0,
                fD: b.enablePinchDragging === t ? t : q
            };
            c.M.Ee && (this.FY(c.M.Ee.controls),
            this.jM(c.M.Ee.geotableId));
            c.M.Ee && c.M.Ee.styleId && c.n4(c.M.Ee.styleId);
            c.M.qC = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.M.Os = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.M.iD = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.M.XK = b.enableDeepZoom);
            var e = c.M.aV;
            if (K())
                for (var f = 0, g = e.length; f < g; f++)
                    if (x.ga[e[f]]) {
                        c.M.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f)
                c.M.WF = 99;
            c.cb = a;
            c.yB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.Ba());
            b.size && this.Ie(b.size);
            e = c.Cb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.Fe = c.platform.firstChild;
            c.Fe.style.width = c.width + "px";
            c.Fe.style.height = c.height + "px";
            c.de = {};
            c.he = new L(0,0);
            c.Vb = new L(0,0);
            c.Za = 3;
            c.Bc = 0;
            c.BC = s;
            c.AC = s;
            c.Ob = "";
            c.Ow = "";
            c.Ph = {};
            c.Ph.custom = {};
            c.Qi = {};
            c.$a = 0;
            b.useWebGL === t && Ra(t);
            c.W = new Sa(a,{
                Ze: "api",
                PS: q
            });
            c.W.aa();
            c.W.qF(c);
            b = b || {};
            e = c.Va = c.M.Va;
            c.Fc = e.vj();
            e && e.tF(c.M.Ma);
            e === Ta && Ua(Aa);
            e === Va && Ua(Ca);
            e = c.M;
            e.WO = Math.round(b.minZoom);
            e.VO = Math.round(b.maxZoom);
            c.bv();
            c.ba = {
                Oc: t,
                pc: 0,
                Dt: 0,
                zM: 0,
                Y4: 0,
                fC: t,
                YE: -1,
                xe: []
            };
            c.platform.style.cursor = c.M.Ac;
            for (f = 0; f < A.Hr.length; f++)
                A.Hr[f](c);
            c.ba.YE = f;
            c.ha();
            Wa.load("map", function() {
                c.ob()
            });
            c.M.vm && (setTimeout(function() {
                Ua(Da)
            }, 1E3),
            Wa.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.da] = new Xa(c)
            }, q));
            Za() && Wa.load("oppc", function() {
                c.Ru()
            });
            K() && Wa.load("opmb", function() {
                c.Ru()
            });
            a = s;
            c.MB = []
        }
    }
    x.lang.xa(Pa, x.lang.Ja, "Map");
    x.extend(Pa.prototype, {
        Ba: function() {
            var a = F("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = F("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        yB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== $a(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ha: function() {
            var a = this;
            a.Eo = function() {
                var b = a.Cb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new M(a.width,a.height)
                      , e = new O("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.rk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.Fe.style.width = (a.width = b.width) + "px";
                    a.Fe.style.height = (a.height = b.height) + "px";
                    c = new O("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.M.Os && (a.ba.jm = setInterval(a.Eo, 80))
        },
        rk: function(a, b, c, e) {
            var f = this.ya().ac(this.la())
              , g = this.Fc
              , i = q;
            if (c && (c instanceof P || c instanceof L))
                c = ab(c, this.M.Ma);
            c && P.nE(c) && (this.he = new L(c.lng,c.lat),
            i = t);
            if (c = c && e ? g.ui(c, this.Ob) : this.Vb)
                if (this.Vb = new L(c.lng + a * f,c.lat - b * f),
                (a = g.yh(this.Vb, this.Ob)) && i)
                    this.he = a
        },
        Sg: function(a, b) {
            if (bb(a) && (this.bv(),
            this.dispatchEvent(new O("onzoomstart")),
            a = this.ao(a).zoom,
            a !== this.Za)) {
                this.Bc = this.Za;
                this.Za = a;
                var c;
                b ? c = b : this.qh() && (c = this.qh().ma());
                c && (c = this.po(ab(c, this.M.Ma), this.Bc),
                this.rk(this.width / 2 - c.x, this.height / 2 - c.y, this.pg(c, this.Bc), q));
                this.dispatchEvent(new O("onzoomstartcode"))
            }
        },
        Xc: function(a) {
            this.Sg(a)
        },
        bG: function(a) {
            this.Sg(this.Za + 1, a)
        },
        cG: function(a) {
            this.Sg(this.Za - 1, a)
        },
        Ci: function(a) {
            if (a instanceof P || a instanceof L)
                a = ab(a, this.M.Ma),
                this.Vb = this.Fc.ui(a, this.Ob),
                this.he = P.nE(a) ? new L(a.lng,a.lat) : this.Fc.yh(this.Vb, this.Ob)
        },
        Lg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.rk(-a, -b)
        },
        ds: function(a) {
            a && cb(a.Ne) && (a.Ne(this),
            this.dispatchEvent(new O("onaddcontrol",a)))
        },
        JN: function(a) {
            a && cb(a.remove) && (a.remove(),
            this.dispatchEvent(new O("onremovecontrol",a)))
        },
        em: function(a) {
            a && cb(a.za) && (a.za(this),
            this.dispatchEvent(new O("onaddcontextmenu",a)))
        },
        Rp: function(a) {
            a && cb(a.remove) && (this.dispatchEvent(new O("onremovecontextmenu",a)),
            a.remove())
        },
        Ra: function(a) {
            a && cb(a.Ne) && (a.Ne(this),
            this.dispatchEvent(new O("onaddoverlay",a)))
        },
        Jb: function(a) {
            a && cb(a.remove) && (a.remove(),
            this.dispatchEvent(new O("onremoveoverlay",a)))
        },
        pK: function() {
            this.dispatchEvent(new O("onclearoverlays"))
        },
        Ve: function(a) {
            a && this.dispatchEvent(new O("onaddtilelayer",a))
        },
        cg: function(a) {
            a && this.dispatchEvent(new O("onremovetilelayer",a))
        },
        Pg: function(a) {
            if (this.Va !== a) {
                this.M.kZ && this.K_(a);
                var b = new O("onsetmaptype");
                b.L5 = this.Va;
                this.Va = this.M.Va = a;
                this.Fc = this.Va.vj();
                this.rk(0, 0, this.ov(), q);
                this.bv();
                var c = this.ao(this.la()).zoom;
                this.Sg(c);
                this.dispatchEvent(b);
                b = new O("onmaptypechange");
                b.Za = c;
                b.Va = a;
                this.dispatchEvent(b);
                a.tF(this.M.Ma);
                (a === db || a === Va) && Ua(Ca)
            }
        },
        K_: function(a) {
            a === db || a === Va ? (this.Dy(q),
            this.aO(t),
            this.M.zg = t,
            this.M.Ak = t) : (this.Dy(t),
            this.aO(q),
            this.M.zg = q,
            this.M.Ak = q)
        },
        zf: function(a) {
            var b = this;
            if (a instanceof P || a instanceof L)
                b.Ci(a, {
                    noAnimation: q
                });
            else if (eb(a))
                if (b.Va === Ta) {
                    var c = J.jC[a];
                    c && (pt = c.o,
                    b.zf(pt))
                } else {
                    var e = this.LH();
                    e.fu(function(c) {
                        0 === e.Gm() && 2 === e.Ka.result.type && (c = c.Kk(0).point,
                        c = new L(c.lng,c.lat),
                        c = fb(c, b.M.Ma),
                        b.zf(c),
                        Ta.Ek(a) && b.mF(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        xd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            A.Dq("cus.fire", "time", {
                z_loadscripttime: wa - va
            });
            var c = this;
            if (eb(a))
                if (c.Va === Ta) {
                    var e = J.jC[a];
                    e && (pt = e.o,
                    c.xd(pt, b))
                } else {
                    var f = c.LH();
                    f.fu(function(e) {
                        if (0 === f.Gm() && (2 === f.Ka.result.type || 11 === f.Ka.result.type)) {
                            var g = e.Kk(0).point
                              , e = b || gb.kx(f.Ka.content.level, c)
                              , g = new L(g.lng,g.lat);
                            c.xd(g, e);
                            Ta.Ek(a) && c.mF(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if ((a instanceof P || a instanceof L) && b) {
                b = c.ao(b).zoom;
                c.Bc = c.Za || b;
                c.Za = b;
                e = c.he;
                a = ab(a, this.M.Ma);
                c.he = new L(a.lng,a.lat);
                c.Vb = c.Fc.ui(c.he, c.Ob);
                c.BC = c.BC || c.Za;
                c.AC = c.AC || c.he;
                var g = new O("onload")
                  , i = new O("onloadcode");
                g.point = new L(a.lng,a.lat);
                g.pixel = c.po(c.he, c.Za);
                g.zoom = b;
                c.loaded || (c.loaded = q,
                c.dispatchEvent(g),
                xa || (xa = hb()));
                c.dispatchEvent(i);
                g = new O("onmoveend");
                g.Uz = "centerAndZoom";
                e.Ub(c.he) || c.dispatchEvent(g);
                c.dispatchEvent(new O("onmoveend"));
                c.Bc !== c.Za && (e = new O("onzoomend"),
                e.Uz = "centerAndZoom",
                c.dispatchEvent(e));
                c.M.cp && c.cp()
            }
        },
        LH: function() {
            this.ba.KM || (this.ba.KM = new ib(1));
            return this.ba.KM
        },
        reset: function() {
            this.xd(this.AC, this.BC, q)
        },
        enableDragging: function() {
            this.M.jc = q
        },
        disableDragging: function() {
            this.M.jc = t
        },
        enableInertialDragging: function() {
            this.M.ex = q
        },
        disableInertialDragging: function() {
            this.M.ex = t
        },
        enableScrollWheelZoom: function() {
            this.M.gp = q
        },
        disableScrollWheelZoom: function() {
            this.M.gp = t
        },
        enableContinuousZoom: function() {
            this.M.ep = q
        },
        disableContinuousZoom: function() {
            this.M.ep = t
        },
        enableDoubleClickZoom: function() {
            this.M.bD = q
        },
        disableDoubleClickZoom: function() {
            this.M.bD = t
        },
        enableKeyboard: function() {
            this.M.fx = q
        },
        disableKeyboard: function() {
            this.M.fx = t
        },
        enablePinchToZoom: function() {
            this.M.fp = q
        },
        disablePinchToZoom: function() {
            this.M.fp = t
        },
        enableAutoResize: function() {
            this.M.Os = q;
            this.Eo();
            this.ba.jm || (this.ba.jm = setInterval(this.Eo, 80))
        },
        disableAutoResize: function() {
            this.M.Os = t;
            this.ba.jm && (clearInterval(this.ba.jm),
            this.ba.jm = s)
        },
        enableBizAuthLogo: function() {
            this.M.YC = q;
            this.Mo && this.Mo.show()
        },
        disableBizAuthLogo: function() {
            this.M.YC = t;
            this.Mo && this.Mo.aa()
        },
        enableMapClick: function() {
            this.M.vm = q;
            var a = this;
            window.MPC_Mgr && window.MPC_Mgr[a.da] ? window.MPC_Mgr[a.da].open() : (setTimeout(function() {
                Ua(Da)
            }, 1E3),
            Wa.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[a.da] = new Xa(a)
            }, q))
        },
        disableMapClick: function() {
            window.MPC_Mgr && window.MPC_Mgr[this.da] && window.MPC_Mgr[this.da].close();
            this.M.vm = t
        },
        cp: function() {
            this.M.cp = q;
            this.On || (this.On = new BuildingLayer({
                v3: q
            }),
            this.Ve(this.On))
        },
        oW: function() {
            this.M.cp = t;
            this.On && (this.cg(this.On),
            this.On = s,
            delete this.On)
        },
        Cb: function() {
            return this.Bs && this.Bs instanceof M ? new M(this.Bs.width,this.Bs.height) : new M(this.cb.clientWidth,this.cb.clientHeight)
        },
        Ie: function(a) {
            a && a instanceof M ? (this.Bs = a,
            this.cb.style.width = a.width + "px",
            this.cb.style.height = a.height + "px") : this.Bs = s
        },
        Qb: function() {
            return fb(this.he, this.M.Ma)
        },
        ov: u("he"),
        la: u("Za"),
        AV: function() {
            this.Eo()
        },
        ao: function(a) {
            var b = this.M.kc
              , c = this.M.qc
              , e = t
              , a = Math.round(a);
            a < b && (e = q,
            a = b);
            a > c && (e = q,
            a = c);
            return {
                zoom: a,
                nD: e
            }
        },
        Sa: u("cb"),
        vc: function(a, b) {
            a = ab(a, this.M.Ma);
            b = b || this.la();
            return this.Fc.vc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        po: function(a, b) {
            b = b || this.la();
            return this.Fc.vc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        pg: function(a, b) {
            b = b || this.la();
            return this.Fc.cc(a, b, this.Vb, this.Cb(), this.Ob)
        },
        cc: function(a, b) {
            return fb(this.pg(a, b), this.M.Ma)
        },
        df: function(a, b) {
            if (a) {
                var a = ab(a, this.M.Ma)
                  , c = this.po(new L(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        nZ: function(a, b) {
            b = b || this.la();
            return this.Fc.oZ(a, b, this.Vb, this.Cb(), this.Ob)
        },
        mZ: function(a, b) {
            if (a) {
                var c = this.nZ(new L(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        tN: function(a, b) {
            if (a) {
                var c = new Q(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.cc(c, b)
            }
        },
        qT: function(a, b) {
            if (a) {
                var c = new Q(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.pg(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Ob;
            this.Va === Ta && c && jb.vK(a, this, b)
        },
        C5: function(a, b) {
            var c = map.Ob;
            this.Va === Ta && c && jb.uK(a, this, b)
        },
        D5: function(a, b) {
            var c = this
              , e = map.Ob;
            c.Va === Ta && e && jb.vK(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        A5: function(a, b) {
            var c = map.Ob;
            this.Va === Ta && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            jb.uK(a, this, b))
        },
        le: function(a) {
            if (!this.Sx())
                return new kb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || s
              , b = this.cc({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.cc({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new kb(b,a)
        },
        Sx: function() {
            return !!this.loaded
        },
        UR: function(a, b) {
            for (var c = this.ya(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.rf(), k = c = c.$e(); k >= i; k--) {
                var m = this.ya().ac(k);
                if (a.OF().lng / m < this.width - g && a.OF().lat / m < this.height - e)
                    break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        it: function(a, b) {
            var c = {
                center: this.Qb(),
                zoom: this.la()
            };
            if (!a || !a instanceof kb && 0 === a.length || a instanceof kb && a.Bj())
                return c;
            var e = [];
            a instanceof kb ? (e.push(a.sf()),
            e.push(a.Be())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
                var k = ab(e[g], this.M.Ma);
                f.push(this.Fc.ui(k, this.Ob))
            }
            e = new kb;
            for (g = f.length - 1; 0 <= g; g--)
                e.extend(f[g]);
            if (e.Bj())
                return c;
            c = e.Qb();
            f = this.UR(e, b);
            b.margins && (e = b.margins,
            g = (e[1] - e[3]) / 2,
            e = (e[0] - e[2]) / 2,
            i = this.ya().ac(f),
            b.offset && (g = b.offset.width,
            e = b.offset.height),
            c.lng += i * g,
            c.lat += i * e);
            c = this.Fc.yh(c, this.Ob);
            return {
                center: fb(new L(c.lng,c.lat), this.M.Ma),
                zoom: f
            }
        },
        Qg: function(a, b) {
            var c;
            c = a && a.center ? a : this.it(a, b);
            var b = b || {}
              , e = b.delay || 200;
            if (c.zoom === this.Za && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.Ci(c.center, {
                        duration: 210
                    })
                }, e)
            } else
                this.xd(c.center, c.zoom)
        },
        Wf: u("de"),
        qh: function() {
            return this.ba.wb && this.ba.wb.eb() ? this.ba.wb : s
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.Ub(b))
                    return 0;
                var c = this.M ? this.M.Ma : 5
                  , a = ab(a, c)
                  , b = ab(b, c)
                  , c = 0
                  , c = R.Gk(a, b);
                if (c === s || c === l)
                    c = 0;
                return c
            }
        },
        xx: function() {
            var a = []
              , b = this.ua
              , c = this.Ke;
            if (b)
                for (var e in b)
                    b[e]instanceof lb && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++)
                    a.push(c[e])
            }
            return a
        },
        ya: function() {
            this.Va.tF(this.M.Ma);
            return this.Va
        },
        hY: u("Id"),
        Ru: function() {
            for (var a = this.ba.YE; a < A.Hr.length; a++)
                A.Hr[a](this);
            this.ba.YE = a
        },
        mF: function(a) {
            this.Ob = Ta.Ek(a);
            this.Ow = Ta.rL(this.Ob);
            this.Va === Ta && this.Fc instanceof mb && (this.Fc.mj = this.Ob)
        },
        setDefaultCursor: function(a) {
            this.M.Ac = a;
            this.platform && (this.platform.style.cursor = this.M.Ac)
        },
        getDefaultCursor: function() {
            return this.M.Ac
        },
        setDraggingCursor: function(a) {
            this.M.Ld = a
        },
        getDraggingCursor: function() {
            return this.M.Ld
        },
        Kx: function() {
            return this.M.PW && 1.5 <= this.M.devicePixelRatio
        },
        SB: function(a, b) {
            b ? this.Ph[b] || (this.Ph[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof nb && (this.Ph[b][a.da] = a,
            a.za(this));
            var c = this;
            Wa.load("hotspot", function() {
                c.Ru()
            }, q)
        },
        h_: function(a, b) {
            b || (b = "custom");
            this.Ph[b][a.da] && delete this.Ph[b][a.da]
        },
        Qw: function(a) {
            a || (a = "custom");
            this.Ph[a] = {}
        },
        bv: function() {
            var a = this.Va.rf()
              , b = this.Va.$e()
              , c = this.M;
            c.kc = c.WO || a;
            c.qc = c.VO || b;
            c.kc < a && (c.kc = a);
            c.qc > b && (c.qc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.M.qc && (a = this.M.qc);
            this.M.WO = a;
            this.AJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.M.kc && (a = this.M.kc);
            this.M.VO = a;
            this.AJ()
        },
        AJ: function() {
            this.bv();
            var a = this.M;
            this.Za < a.kc ? this.Xc(a.kc) : this.Za > a.qc && this.Xc(a.qc);
            var b = new O("onzoomspanchange");
            b.kc = a.kc;
            b.qc = a.qc;
            this.dispatchEvent(b)
        },
        r4: u("MB"),
        getKey: function() {
            return ra
        },
        M_: function(a) {
            function b(a) {
                c.h0 = a;
                var b = A.vd + "custom/v2/mapstyle"
                  , g = "qt=custom_v2&version=4&ak=" + ra + "&"
                  , g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.HF(a, f)))
                  , a = ob(b + "?" + g)
                  , g = a.substring(a.indexOf("?") + 1);
                pb(b, g, window[e + "cb"])
            }
            var c = this
              , e = this.da;
            A.Dq("cus.fire", "count", "z_setmapstylev2count");
            this.Dy(t);
            this.M.kZ = q;
            window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
            c.M.vm = t;
            this.addEventListener("hidecopyright", function() {
                c.xk.aa();
                c.M.Xo = !!a.customEditor;
                c.M.Xo === t && c.lF(new M(1,1))
            });
            c.xk && c.xk.aa();
            this.M.Xo = !!a.customEditor;
            this.M.j6 = !!a.sharing;
            this.M.P5 = !!a.preview;
            this.M.Xo === t && this.lF(new M(1,1));
            Wa.load("hotspot", function() {
                c.Ru()
            }, q);
            window[e + "zoomRegion"] = {};
            window.U6 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.la();
            x.extend({}, a);
            window[e + "cb"] = function(a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style,
                window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style,
                c.RO(),
                c.MY())
            }
            ;
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.HX(a.styleId, g, b)
            } else
                b(a.styleJson);
            window.iconSetInfo_high || sa(A.url.proto + A.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        HX: function(a, b, c) {
            var e = this
              , f = this.da
              , g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function(a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.my(a.content.data.json));
                c && c(b)
            }
            ;
            window[f + "_cbk_si_api" + g] = function(a) {
                var b = [];
                0 === a.status && (b = a.info ? e.my(a.info.json) : e.my(a.data.json));
                c && c(b)
            }
            ;
            var i = "/apiconsole/custommap/";
            switch (b) {
            case "jsapi":
                i = A.vd + "?qt=custom_map&v=3.0";
                i += "&style_id=" + a + "&type=publish&ak=" + ra;
                i += "&callback=" + f + "_cbk_si_phpui" + g;
                break;
            case "sharing":
                i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
                break;
            case "preview":
                i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
            }
            sa(i)
        },
        hW: function() {
            Array.prototype.map || (Array.prototype.map = function(a, b) {
                var c, e, f;
                this == s && aa(new TypeError(" this is null or not defined"));
                var g = Object(this)
                  , i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i; ) {
                    var k;
                    f in g && (k = g[f],
                    k = a.call(c, k, f, g),
                    e[f] = k);
                    f++
                }
                return e
            }
            )
        },
        my: function(a) {
            if (a === s || "" === a)
                return [];
            this.hW();
            var b = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            }
              , c = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon",
                "g.tf": "geometry.fill"
            };
            return a.split(",").map(function(a) {
                var a = a.split("|").map(function(a) {
                    var e = b[a.split(":")[0]]
                      , a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                    switch (a) {
                    case "poi":
                        a = "poilabel";
                        break;
                    case "districtlabel":
                        a = "districtlabel"
                    }
                    var f = {};
                    f[e] = a;
                    return f
                })
                  , f = a[0]
                  , g = 1;
                a[1].elementType && (g = 2,
                x.extend(f, a[1]));
                for (var i = {}; g < a.length; g++)
                    x.extend(i, a[g]);
                return x.extend(f, {
                    stylers: i
                })
            })
        },
        mY: function() {
            return this.ff.lg
        },
        c4: function(a, b) {
            var c = this
              , e = this.da
              , f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function(b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.R0(b, a);
                c.RO(a);
                b = new O("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            }
            ;
            var g = A.vd + "custom/v2/mapstyle"
              , i = "qt=custom_v2&ak=" + ra + "&"
              , i = i + "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.HF(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.HF(c.h0, parseInt(a, 10))));
            i = ob(g + "?" + i);
            i = i.substring(i.indexOf("?") + 1);
            pb(g, i, window[e + "_cbk" + f])
        },
        lF: function(a, b) {
            var c = new O("oncopyrightoffsetchange",{
                DE: a,
                WV: b
            });
            this.M.zK = b;
            this.dispatchEvent(c)
        },
        cu: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
            b.M.vm = t;
            A.Dq("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.i0(a.styleJson));
                K() && x.ga.zy ? setTimeout(function() {
                    b.M.Ee = a;
                    b.dispatchEvent(new O("onsetcustomstyles",a))
                }, 50) : (this.M.Ee = a,
                this.dispatchEvent(new O("onsetcustomstyles",a)),
                this.jM(b.M.Ee.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = q);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = q);
                Ua(5050, c);
                a.style && (c = b.M.qC[a.style] ? b.M.qC[a.style].backColor : b.M.qC.normal.backColor) && (this.Sa().style.backgroundColor = c)
            }
        },
        FY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new qb,
                scaleControl: new rb,
                overviewMapControl: new sb,
                mapTypeControl: new tb
            });
            var b = this, c;
            for (c in this.controls)
                b.JN(b.controls[c]);
            a = a || [];
            x.oc.Pb(a, function(a) {
                b.ds(b.controls[a])
            })
        },
        jM: function(a) {
            a ? this.zs && this.zs.If === a || (this.cg(this.zs),
            this.zs = new ub({
                geotableId: a
            }),
            this.Ve(this.zs)) : this.cg(this.zs)
        },
        Wd: function() {
            var a = this.la() >= this.M.WF && this.ya() === Qa && 18 >= this.la()
              , b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = q
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.lh,
                code: this.hs
            }
        },
        ct: function() {
            this.W.ho();
            return this.W
        },
        JY: function(a) {
            Qa.setMaxZoom(a.maxZoom || 19);
            var b = new O("oninitindoorlayer");
            b.bf = a;
            this.dispatchEvent(b);
            this.M.zg = t
        },
        MY: function(a) {
            if (this.M.zg) {
                var b = new O("onupdatestyles");
                this.dispatchEvent(b)
            } else
                b = new O("oninitindoorlayer"),
                b.bf = a,
                this.dispatchEvent(b),
                this.M.zg = q,
                this.M.Ak = q
        },
        Dy: function(a) {
            this.M.NE = a;
            this.ff.Kb || (this.ff.Kb = this.ff.Dj[0].Kb);
            this.ff.Kb.parentElement.style.display = a ? "block" : "none"
        },
        aO: function(a) {
            this.ff.lg.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.W = a;
            this.W.qF(this)
        },
        HF: function(a, b) {
            for (var c = this.da, e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }, f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.f"
            }, g = [], i = this.Va.rf(); i <= this.Va.$e(); i++)
                window[c + "zoomFrontStyle"][i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0, k; k = a[i]; i++)
                if (!this.VY(k)) {
                    b = this.BX(k, b);
                    if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers && (!k.stylers.visibility || "off" !== k.stylers.visibility))
                        k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color);
                    "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color,
                    window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color),
                    "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                    "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
                    k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
                    "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
                    var m = {};
                    x.extend(m, k);
                    k = m.stylers;
                    delete m.stylers;
                    x.extend(m, k);
                    k = [];
                    for (var n in e)
                        if (m[n] && !this.RY(n))
                            if ("elementType" === n)
                                k.push(e[n] + ":" + f[m[n]]);
                            else {
                                switch (m[n]) {
                                case "poilabel":
                                    m[n] = "poi";
                                    break;
                                case "districtlabel":
                                    m[n] = "label"
                                }
                                k.push(e[n] + ":" + m[n])
                            }
                    2 < k.length && g.push(k.join("|"))
                }
            return g.join(",")
        },
        i0: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                x.extend(g, i);
                var i = [], k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k)
                            i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                            case "poilabel":
                                g[k] = "poi";
                                break;
                            case "districtlabel":
                                g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        BX: function(a) {
            a = a.stylers.level;
            return a === l ? "main" : parseInt(a, 10)
        },
        VY: function(a) {
            var b = {};
            x.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return x.lE(b) ? q : t
        },
        Q4: function(a, b) {
            var c = a.stylers.level;
            return c === l ? q : c === b + "" ? q : t
        },
        RY: function(a) {
            return {
                curZoomRegionId: q,
                curZoomRegion: q
            }[a] ? q : t
        },
        s4: function(a, b) {
            var c = a.stylers.level
              , e = {};
            x.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = q);
            return e
        },
        R0: function(a, b) {
            var c = this.da;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b])
                for (var e = this.Va.rf(), f = this.Va.$e(); e <= f; e++)
                    window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
        },
        RO: function() {
            var a = this.da;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
                for (var b = this.Va.rf(); b <= this.Va.$e(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor)
                for (b = this.Va.rf(); b <= this.Va.$e(); b++)
                    window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
                for (b = this.Va.rf(); b <= this.Va.$e(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
                for (b = this.Va.rf(); b <= this.Va.$e(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
                for (b = this.Va.rf(); b <= this.Va.$e(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        P2: function(a, b) {
            var c = {};
            x.extend(c, a);
            if (c[b]) {
                for (var e = this.Va.rf(), f = this.Va.$e(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = q;
                        break
                    }
                delete c[b]
            }
            return c
        },
        O4: function(a) {
            return a.wt || "0" === a.uid ? t : q
        },
        EV: function() {
            delete this.Qi.XZ
        },
        U2: function() {
            this.Qi = {}
        },
        Ho: function(a, b, c) {
            if (!this.M.Xo)
                return t;
            a = a || "sp" + this.ba.m6++;
            if (b && 0 !== b.length)
                return c = c || {},
                this.Qi[a] = this.Qi[a] || {
                    polygon: [],
                    polyline: []
                },
                this.Qi = this.Qi || {},
                this.Qi[a][c.type].push({
                    CF: b,
                    Xb: c.Xb,
                    type: c.type,
                    style: c.style
                }),
                a
        },
        h1: function(a) {
            return vb / Math.pow(2, 18 - a)
        }
    });
    var vb = 4.007545274461451E7;
    function Ua(a, b) {
        if (a) {
            var b = b || {}, c = "", e;
            for (e in b)
                c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (wb = q,
                setTimeout(function() {
                    // xb.src = A.vd + "images/blank.gif?" + a.src
                }, 50))
            }
              , g = function() {
                var a = yb.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            wb ? yb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + A.version + "&sub_product_v=" + A.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + A.version + "&sub_product_v=" + A.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            zb || (x.V(xb, "load", function() {
                wb = t;
                g()
            }),
            x.V(xb, "error", function() {
                wb = t;
                g()
            }),
            zb = q)
        }
    }
    var wb, zb, yb = [], xb = new Image;
    Ua(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    A.dM = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            other: ["api.map.baidu.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "maponline0.bdimg.com"
    };
    A.wY = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "maponline0.bdimg.com"
    };
    A.S0 = {
        "0": {
            proto: "http://",
            domain: A.wY
        },
        1: {
            proto: "https://",
            domain: A.dM
        },
        2: {
            proto: "https://",
            domain: A.dM
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    A.Bu = window.HOST_TYPE || "0";
    A.url = A.S0[A.Bu];
    A.Ip = A.url.proto + A.url.domain.baidumap + "/";
    A.vd = A.url.proto + ("2" == A.Bu ? A.url.domain.main_domain_nocdn.other : A.url.domain.main_domain_nocdn.baidu) + "/";
    // A.pa = A.url.proto + ("2" == A.Bu ? A.url.domain.main_domain_cdn.other[0] : A.url.domain.main_domain_nocdn.baidu) + "/";
    A.pa = ''
    A.jj = A.url.proto + A.url.domain.main_domain_cdn.webmap[0] + "/";
    A.uN = A.url.proto + A.url.domain.panoVerify + "/";
    A.rh = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = A.vd + b;
            break;
        case "main_domain_cdn":
            c = A.pa + b;
            break;
        default:
            e = A.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [],
            x.oc.Pb(e, function(a, e) {
                c[e] = A.url.proto + a + "/" + b
            })) : c = A.url.proto + A.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function Ab(a) {
        var b = {
            duration: 1E3,
            Nc: 30,
            $o: 0,
            fc: Bb.HM,
            Ot: ca()
        };
        this.fg = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.m = b;
        if (bb(b.$o)) {
            var e = this;
            setTimeout(function() {
                e.start()
            }, b.$o)
        } else
            b.$o != Cb && this.start()
    }
    var Cb = "INFINITE";
    Ab.prototype.start = function() {
        this.Tu = hb();
        this.Tz = this.Tu + this.m.duration;
        Db(this)
    }
    ;
    Ab.prototype.add = function(a) {
        this.fg.push(a)
    }
    ;
    function Db(a) {
        var b = hb();
        b >= a.Tz ? (cb(a.m.Ba) && a.m.Ba(a.m.fc(1)),
        cb(a.m.finish) && a.m.finish(),
        0 < a.fg.length && (b = a.fg[0],
        b.fg = [].concat(a.fg.slice(1)),
        b.start())) : (a.Ay = a.m.fc((b - a.Tu) / a.m.duration),
        cb(a.m.Ba) && a.m.Ba(a.Ay),
        a.IF || (a.Yr = setTimeout(function() {
            Db(a)
        }, 1E3 / a.m.Nc)))
    }
    Ab.prototype.stop = function(a) {
        this.IF = q;
        for (var b = 0; b < this.fg.length; b++)
            this.fg[b].stop(),
            this.fg[b] = s;
        this.fg.length = 0;
        this.Yr && (clearTimeout(this.Yr),
        this.Yr = s);
        this.m.Ot(this.Ay);
        a && (this.Tz = this.Tu,
        Db(this))
    }
    ;
    Ab.prototype.cancel = ia(1);
    var Bb = {
        HM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        WC: function(a) {
            return a * a
        },
        UC: function(a) {
            return Math.pow(a, 3)
        },
        Ms: function(a) {
            return -(a * (a - 2))
        },
        VK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        VC: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        l3: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        m3: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    Bb["ease-in"] = Bb.WC;
    Bb["ease-out"] = Bb.Ms;
    var J = {
        fG: 34,
        gG: 21,
        hG: new M(21,32),
        lP: new M(10,32),
        kP: new M(24,36),
        jP: new M(12,36),
        dG: new M(13,1),
        ta: A.pa + "images/",
        I4: "http://mapapip0.bdimg.com/images/",
        eG: A.pa + "images/markers_new.png",
        hP: 24,
        iP: 73,
        jC: {
            "\u5317\u4eac": {
                oy: "bj",
                o: new L(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                oy: "sh",
                o: new L(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                oy: "sz",
                o: new L(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                oy: "gz",
                o: new L(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    x.ga.Ye ? (x.extend(J, {
        GK: "url(" + J.ta + "ruler.cur),crosshair",
        Ac: "-moz-grab",
        Ld: "-moz-grabbing"
    }),
    x.platform.uM && (J.fontFamily = "arial,simsun,sans-serif")) : x.ga.Nw || x.ga.zy ? x.extend(J, {
        GK: "url(" + J.ta + "ruler.cur) 2 6,crosshair",
        Ac: "url(" + J.ta + "openhand.cur) 8 8,default",
        Ld: "url(" + J.ta + "closedhand.cur) 8 8,move"
    }) : x.extend(J, {
        GK: "url(" + J.ta + "ruler.cur),crosshair",
        Ac: "url(" + J.ta + "openhand.cur),default",
        Ld: "url(" + J.ta + "closedhand.cur),move"
    });
    function Eb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function Fb(a) {
        0 < x.ga.oa ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function Gb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Hb(a, b) {
        x.U.Px(a, "beforeEnd", b);
        return a.lastChild
    }
    function Ib(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function oa(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = q
    }
    function Jb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function pa(a) {
        oa(a);
        return Jb(a)
    }
    function Kb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Lb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Mb(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , e;
        for (e in a)
            c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function F(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return x.U.kF(e, b || {})
    }
    function $a(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, s)
    }
    function cb(a) {
        return "function" === typeof a
    }
    function bb(a) {
        return "number" === typeof a
    }
    function eb(a) {
        return "string" == typeof a
    }
    function Nb(a) {
        return "undefined" != typeof a
    }
    function Ob(a) {
        return "object" == typeof a
    }
    var Pb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Qb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1
              , f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e,
            f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++)
            e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++)
            e = b.substr(5 * c, 5),
            f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Rb(a) {
        var b = "", c, e, f = "", g, i = "", k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Pb.indexOf(a.charAt(k++)),
            e = Pb.indexOf(a.charAt(k++)),
            g = Pb.indexOf(a.charAt(k++)),
            i = Pb.indexOf(a.charAt(k++)),
            c = c << 2 | e >> 4,
            e = (e & 15) << 4 | g >> 2,
            f = (g & 3) << 6 | i,
            b += String.fromCharCode(c),
            64 != g && (b += String.fromCharCode(e)),
            64 != i && (b += String.fromCharCode(f));
        while (k < a.length);
        return b
    }
    var O = x.lang.Ju;
    function K() {
        return !(!x.platform.oE && !x.platform.UY && !x.platform.zj)
    }
    function Za() {
        return !(!x.platform.uM && !x.platform.nM && !x.platform.aZ)
    }
    function hb() {
        return (new Date).getTime()
    }
    function Sb(a) {
        a = a.split("//");
        if (2 <= a.length) {
            var b = a[1].split("?");
            if (1 <= b.length) {
                var c = b[0].split("/")
                  , e = 1;
                window.urlSplitBeginIndex && (e = window.urlSplitBeginIndex);
                var f = e
                  , e = b.length - 1
                  , g = "/"
                  , i = c.length;
                f || (f = 0);
                e || (e = i - 1);
                g || (g = "");
                if (f > i - 1 || e > i - 1)
                    e = "";
                else {
                    for (i = ""; f <= e; f++)
                        i = f === e ? i + c[f] : i + (c[f] + g);
                    e = i
                }
                return {
                    host: b[0],
                    origin: a[0] + "//" + c[0],
                    path: "/" + e
                }
            }
        }
        return s
    }
    function Tb() {
        var a = document.body.appendChild(F("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : q;
        a.parentNode.removeChild(a);
        return b
    }
    function Ub() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Vb() {
        return !!F("canvas").getContext
    }
    function S(a) {
        return a * Math.PI / 180
    }
    A.gZ = function() {
        var a = q
          , b = q
          , c = q
          , e = q
          , f = 0
          , g = 0
          , i = 0
          , k = 0;
        return {
            QQ: function() {
                f += 1;
                a && (a = t,
                setTimeout(function() {
                    Ua(5054, {
                        pic: f
                    });
                    a = q;
                    f = 0
                }, 1E4))
            },
            L1: function() {
                g += 1;
                b && (b = t,
                setTimeout(function() {
                    Ua(5055, {
                        move: g
                    });
                    b = q;
                    g = 0
                }, 1E4))
            },
            N1: function() {
                i += 1;
                c && (c = t,
                setTimeout(function() {
                    Ua(5056, {
                        zoom: i
                    });
                    c = q;
                    i = 0
                }, 1E4))
            },
            M1: function(a) {
                k += a;
                e && (e = t,
                setTimeout(function() {
                    Ua(5057, {
                        tile: k
                    });
                    e = q;
                    k = 0
                }, 5E3))
            }
        }
    }();
    A.vq = {
        vG: "#83a1ff",
        xq: "#808080"
    };
    function Wb(a, b, c) {
        b.GE || (b.GE = [],
        b.handle = {});
        b.GE.push({
            filter: c,
            Ss: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                Xb(b.GE, function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.Ss.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t),
        b.handle.click = q)
    }
    function Xb(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            b(c, a[c])
    }
    void function(a, b, c) {
        void function(a, b, c) {
            function i(a) {
                if (!a.Zo) {
                    for (var c = q, e = [], g = a.k_, k = 0; g && k < g.length; k++) {
                        var m = g[k]
                          , n = ea[m] = ea[m] || {};
                        if (n.Zo || n == a)
                            e.push(n.Tc);
                        else {
                            c = t;
                            if (!n.iW && (m = (Ba.get("alias") || {})[m] || m + ".js",
                            !H[m])) {
                                H[m] = q;
                                var o = b.createElement("script")
                                  , p = b.getElementsByTagName("script")[0];
                                o.async = q;
                                o.src = m;
                                p.parentNode.insertBefore(o, p)
                            }
                            n.Xy = n.Xy || {};
                            n.Xy[a.name] = a
                        }
                    }
                    if (c) {
                        a.Zo = q;
                        a.BK && (a.Tc = a.BK.apply(a, e));
                        for (var v in a.Xy)
                            i(a.Xy[v])
                    }
                }
            }
            function k(a) {
                return (a || new Date) - G
            }
            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = I);
                    try {
                        a == I ? (N[b] = N[b] || [],
                        N[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (e) {}
                }
            }
            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = I);
                    try {
                        if (a == I) {
                            var e = N[b];
                            if (e)
                                for (var f = e.length; f--; )
                                    e[f] === c && e.splice(f, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }
            function o(a) {
                var b = N[a]
                  , c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++)
                        e.push(f[g]);
                    for (g = b.length; g--; )
                        b[g].apply(this, e) && c++;
                    return c
                }
            }
            function p(a, b) {
                if (a && b) {
                    var c = new Image(1,1), e = [], f = "img_" + +new Date, g;
                    for (g in b)
                        b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    I[f] = c;
                    c.onload = c.onerror = function() {
                        I[f] = c = c.onload = c.onerror = s;
                        delete I[f]
                    }
                    ;
                    c.src = a + "?" + e.join("&")
                }
            }
            function v() {
                var a = arguments
                  , b = a[0];
                if (this.AK || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
                        c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.ZJ.push(a)
            }
            function w(a, b) {
                var c = {}, e;
                for (e in a)
                    a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b)
                    b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }
            function y(a) {
                this.name = a;
                this.Qs = {
                    protocolParameter: {
                        postUrl: s,
                        protocolParameter: s
                    }
                };
                this.ZJ = [];
                this.alog = I
            }
            function z(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [], b;
                    for (b in T)
                        a.push(T[b]);
                    return a
                }
                (b = T[a]) || (b = T[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.Zo) {
                var D = b.all && a.attachEvent
                  , G = B && B.wE || +new Date
                  , E = a.b5 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
                  , C = 0
                  , H = {}
                  , I = function(a) {
                    var b = arguments, c, e, f, g;
                    if ("define" == a || "require" == a) {
                        for (e = 1; e < b.length; e++)
                            switch (typeof b[e]) {
                            case "string":
                                c = b[e];
                                break;
                            case "object":
                                f = b[e];
                                break;
                            case "function":
                                g = b[e]
                            }
                        "require" == a && (c && !f && (f = [c]),
                        c = s);
                        c = !c ? "#" + C++ : c;
                        e = ea[c] = ea[c] || {};
                        e.Zo || (e.name = c,
                        e.k_ = f,
                        e.BK = g,
                        "define" == a && (e.iW = q),
                        i(e))
                    } else
                        "function" == typeof a ? a(I) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
                            b[0] = e;
                            v.apply(I.SF(c), b)
                        })
                }
                  , N = {}
                  , T = {}
                  , ea = {
                    C2: {
                        name: "alog",
                        Zo: q,
                        Tc: I
                    }
                };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.AK) {
                        "object" == typeof a && this.set(a);
                        this.AK = new Date;
                        for (this.Rs("create", this); a = this.ZJ.shift(); )
                            v.apply(this, a)
                    }
                }
                ;
                y.prototype.send = function(a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: E
                    }, this.Qs);
                    if ("object" == typeof b)
                        c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                        case "pageview":
                            e[1] && (c.page = e[1]);
                            e[2] && (c.title = e[2]);
                            break;
                        case "event":
                            e[1] && (c.eventCategory = e[1]);
                            e[2] && (c.eventAction = e[2]);
                            e[3] && (c.eventLabel = e[3]);
                            e[4] && (c.eventValue = e[4]);
                            break;
                        case "timing":
                            e[1] && (c.timingCategory = e[1]);
                            e[2] && (c.timingVar = e[2]);
                            e[3] && (c.timingValue = e[3]);
                            e[4] && (c.timingLabel = e[4]);
                            break;
                        case "exception":
                            e[1] && (c.exDescription = e[1]);
                            e[2] && (c.exFatal = e[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.Rs("send", c);
                    var f;
                    if (e = this.Qs.protocolParameter) {
                        var g = {};
                        for (f in c)
                            e[f] !== s && (g[e[f] || f] = c[f]);
                        f = g
                    } else
                        f = c;
                    p(this.Qs.postUrl, f)
                }
                ;
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = w({
                            postUrl: s,
                            protocolParameter: s
                        }, b)),
                        this.Qs[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                }
                ;
                y.prototype.get = function(a, b) {
                    var c = this.Qs[a];
                    "function" == typeof b && b(c);
                    return c
                }
                ;
                y.prototype.Rs = function(a, b) {
                    return I.Rs(this.name + "." + a, b)
                }
                ;
                y.prototype.V = function(a, b) {
                    I.V(this.name + "." + a, b)
                }
                ;
                y.prototype.hd = function(a, b) {
                    I.hd(this.name + "." + a, b)
                }
                ;
                I.name = "alog";
                I.Xb = E;
                I.Zo = q;
                I.timestamp = k;
                I.hd = n;
                I.V = m;
                I.Rs = o;
                I.SF = z;
                I("init");
                var ba = y.prototype;
                U(ba, {
                    start: ba.start,
                    create: ba.create,
                    send: ba.send,
                    set: ba.set,
                    get: ba.get,
                    on: ba.V,
                    un: ba.hd,
                    fire: ba.Rs
                });
                var Ba = z();
                Ba.set("protocolParameter", {
                    B2: s
                });
                if (B) {
                    ba = [].concat(B.yb || [], B.Vt || []);
                    B.yb = B.Vt = s;
                    for (var ua in I)
                        I.hasOwnProperty(ua) && (B[ua] = I[ua]);
                    I.yb = I.Vt = {
                        push: function(a) {
                            I.apply(I, a)
                        }
                    };
                    for (B = 0; B < ba.length; B++)
                        I.apply(I, ba[B])
                }
                c.alog = I;
                D && m(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ha = t;
                a.onerror = function(a, b, e, f) {
                    var i = q;
                    !b && /^script error/i.test(a) && (Ha ? i = t : Ha = q);
                    i && c.alog("exception.send", "exception", {
                        Kt: a,
                        vE: b,
                        Gt: e,
                        lj: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Kt: a.Kt,
                        vE: a.path,
                        Gt: a.Gt,
                        method: a.method,
                        fL: "catch"
                    })
                })
            }
        }(a, b, c);
        void function(a, b, c) {
            var i = "18_3";
            K() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random
              , k = k + "/tb/pms/img/st.gif"
              , n = {
                Dh: "0.1"
            }
              , o = {
                Dh: "0.1"
            }
              , p = {
                Dh: "0.1"
            }
              , v = {
                Dh: "0"
            };
            if (n && n.Dh && m() < n.Dh) {
                var w = c.alog.SF("monkey"), y, n = a.screen, z = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", z);
                c.alog("monkey.on", "create", function() {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: s
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36),
                    a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.Dh && m() < o.Dh) {
                var B = t;
                a.onerror = function(a, b, e, f) {
                    var i = q;
                    !b && /^script error/i.test(a) && (B ? i = t : B = q);
                    i && c.alog("exception.send", "exception", {
                        Kt: a,
                        vE: b,
                        Gt: e,
                        lj: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        Kt: a.Kt,
                        vE: a.path,
                        Gt: a.Gt,
                        method: a.method,
                        fL: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            p && (p.Dh && m() < p.Dh) && (c.alog("cus.on", "time", function(a) {
                var b = {}, e = t, f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a)
                        "page" == i ? b.page = a[i] : (f = parseInt(a[i]),
                        0 < f && /^z_/.test(i) && (e = q,
                        b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }),
            c.alog("cus.on", "count", function(a) {
                var b = {}
                  , e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++)
                        /^z_/.test(a[f]) ? (e = q,
                        b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }),
            c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.Dh && m() < v.Dh) {
                var D = ["Moz", "O", "ms", "Webkit"]
                  , G = ["-webkit-", "-moz-", "-o-", "-ms-"]
                  , E = function() {
                    return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                }
                  , C = E("dpFeatureTest").style
                  , H = function(a) {
                    return I(a, l, l)
                }
                  , I = function(a, b, c) {
                    var e = a.charAt(0).toUpperCase() + a.slice(1)
                      , f = (a + " " + D.join(e + " ") + e).split(" ");
                    if (typeof b === "string" || typeof b === "undefined")
                        return N(f, b);
                    f = (a + " " + D.join(e + " ") + e).split(" ");
                    a: {
                        var a = f, g;
                        for (g in a)
                            if (a[g]in b) {
                                if (c === t) {
                                    b = a[g];
                                    break a
                                }
                                g = b[a[g]];
                                b = typeof g === "function" ? fnBind(g, c || b) : g;
                                break a
                            }
                        b = t
                    }
                    return b
                }
                  , N = function(a, b) {
                    var c, e, f;
                    e = a.length;
                    for (c = 0; c < e; c++) {
                        f = a[c];
                        ~("" + f).indexOf("-") && (f = T(f));
                        if (C[f] !== l)
                            return b == "pfx" ? f : q
                    }
                    return t
                }
                  , T = function(a) {
                    return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                        return b + c.toUpperCase()
                    }).replace(/^-/, "")
                }
                  , ea = function(a, b, c) {
                    if (a.indexOf("@") === 0)
                        return atRule(a);
                    a.indexOf("-") != -1 && (a = T(a));
                    return !b ? I(a, "pfx") : I(a, b, c)
                }
                  , ba = function() {
                    var a = E("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }
                  , Ba = function() {
                    var a = E("div");
                    return "draggable"in a || "ondragstart"in a && "ondrop"in a
                }
                  , ua = function() {
                    try {
                        localStorage.setItem("localStorage", "localStorage");
                        localStorage.removeItem("localStorage");
                        return q
                    } catch (a) {
                        return t
                    }
                }
                  , Ha = function() {
                    return "content"in b.createElement("template")
                }
                  , ta = function() {
                    return "createShadowRoot"in b.createElement("a")
                }
                  , Ya = function() {
                    return "registerElement"in b
                }
                  , Le = function() {
                    return "import"in b.createElement("link")
                }
                  , ad = function() {
                    return "getItems"in b
                }
                  , xj = function() {
                    return "EventSource"in window
                }
                  , Me = function(a, b) {
                    var c = new Image;
                    c.onload = function() {
                        b(a, c.width > 0 && c.height > 0)
                    }
                    ;
                    c.onerror = function() {
                        b(a, t)
                    }
                    ;
                    c.src = "data:image/webp;base64," + {
                        e5: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        d5: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        vk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    }[a]
                }
                  , Ne = function(a, b) {
                    return cc.mi["WebP-" + a] = b
                }
                  , yj = function() {
                    return "openDatabase"in a
                }
                  , zj = function() {
                    return "performance"in a && "timing"in a.performance
                }
                  , Aj = function() {
                    return "performance"in a && "mark"in a.performance
                }
                  , Bj = function() {
                    return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                }
                  , Cj = function() {
                    return "Promise"in a && "cast"in a.yq && "resolve"in a.yq && "reject"in a.yq && "all"in a.yq && "race"in a.yq && function() {
                        var b;
                        new a.yq(function(a) {
                            b = a
                        }
                        );
                        return typeof b === "function"
                    }()
                }
                  , Dj = function() {
                    var b = !!a.x1
                      , c = a.XMLHttpRequest && "withCredentials"in new XMLHttpRequest;
                    return !!a.B1 && b && c
                }
                  , Ej = function() {
                    return "geolocation"in navigator
                }
                  , Fj = function() {
                    var b = E("canvas")
                      , c = "probablySupportsContext"in b ? "probablySupportsContext" : "supportsContext";
                    return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext"in a
                }
                  , Gj = function() {
                    return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").a3
                }
                  , Hj = function() {
                    return !!a.I1
                }
                  , Ij = function() {
                    return "WebSocket"in a && a.F1.t1 === 2
                }
                  , Jj = function() {
                    return !!b.createElement("video").canPlayType
                }
                  , Kj = function() {
                    return !!b.createElement("audio").canPlayType
                }
                  , Lj = function() {
                    return !!(a.history && "pushState"in a.history)
                }
                  , Mj = function() {
                    return !(!a.v1 || !a.w1)
                }
                  , Nj = function() {
                    return "postMessage"in window
                }
                  , Oj = function() {
                    return !!a.webkitNotifications || "Notification"in a && "permission"in a.EP && "requestPermission"in a.EP
                }
                  , Pj = function() {
                    for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f)
                        c = a[b[f] + "RequestAnimationFrame"];
                    return !!c
                }
                  , Qj = function() {
                    return "JSON"in a && "parse"in JSON && "stringify"in JSON
                }
                  , Rj = function() {
                    return !(!ea("exitFullscreen", b, t) && !ea("cancelFullScreen", b, t))
                }
                  , Sj = function() {
                    return !!ea("Intl", a)
                }
                  , Tj = function() {
                    return H("flexBasis")
                }
                  , Uj = function() {
                    return !!H("perspective")
                }
                  , Vj = function() {
                    return H("shapeOutside")
                }
                  , Wj = function() {
                    var a = E("div");
                    a.style.cssText = G.join("filter:blur(2px); ");
                    return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                }
                  , Xj = function() {
                    return "XMLHttpRequest"in a && "withCredentials"in new XMLHttpRequest
                }
                  , Yj = function() {
                    return E("progress").max !== l
                }
                  , Zj = function() {
                    return E("meter").max !== l
                }
                  , $j = function() {
                    return "sendBeacon"in navigator
                }
                  , ak = function() {
                    return H("borderRadius")
                }
                  , bk = function() {
                    return H("boxShadow")
                }
                  , ck = function() {
                    var a = E("div").style;
                    a.cssText = G.join("opacity:.55;");
                    return /^0.55$/.test(a.opacity)
                }
                  , dk = function() {
                    return N(["textShadow"], l)
                }
                  , ek = function() {
                    return H("animationName")
                }
                  , fk = function() {
                    return H("transition")
                }
                  , gk = function() {
                    return navigator.userAgent.indexOf("Android 2.") === -1 && H("transform")
                }
                  , cc = {
                    mi: {},
                    sa: function(a, b, c) {
                        this.mi[a] = b.apply(this, [].slice.call(arguments, 2))
                    },
                    Jd: function(a, b) {
                        a.apply(this, [].slice.call(arguments, 1))
                    },
                    p_: function() {
                        this.sa("bdrs", ak);
                        this.sa("bxsd", bk);
                        this.sa("opat", ck);
                        this.sa("txsd", dk);
                        this.sa("anim", ek);
                        this.sa("trsi", fk);
                        this.sa("trfm", gk);
                        this.sa("flex", Tj);
                        this.sa("3dtr", Uj);
                        this.sa("shpe", Vj);
                        this.sa("fltr", Wj);
                        this.sa("cavs", ba);
                        this.sa("dgdp", Ba);
                        this.sa("locs", ua);
                        this.sa("wctem", Ha);
                        this.sa("wcsdd", ta);
                        this.sa("wccse", Ya);
                        this.sa("wchti", Le);
                        this.Jd(Me, "lossy", Ne);
                        this.Jd(Me, "lossless", Ne);
                        this.Jd(Me, "alpha", Ne);
                        this.Jd(Me, "animation", Ne);
                        this.sa("wsql", yj);
                        this.sa("natm", zj);
                        this.sa("ustm", Aj);
                        this.sa("arra", Bj);
                        this.sa("prms", Cj);
                        this.sa("xhr2", Dj);
                        this.sa("wbgl", Fj);
                        this.sa("geol", Ej);
                        this.sa("svg", Gj);
                        this.sa("work", Hj);
                        this.sa("wbsk", Ij);
                        this.sa("vido", Jj);
                        this.sa("audo", Kj);
                        this.sa("hsty", Lj);
                        this.sa("file", Mj);
                        this.sa("psmg", Nj);
                        this.sa("wknf", Oj);
                        this.sa("rqaf", Pj);
                        this.sa("json", Qj);
                        this.sa("flsc", Rj);
                        this.sa("i18n", Sj);
                        this.sa("cors", Xj);
                        this.sa("prog", Yj);
                        this.sa("metr", Zj);
                        this.sa("becn", $j);
                        this.sa("mcrd", ad);
                        this.sa("esrc", xj)
                    }
                }
                  , w = c.alog.SF("feature");
                w.V("commit", function() {
                    cc.p_();
                    var a = setInterval(function() {
                        if ("WebP-lossy"in cc.mi && "WebP-lossless"in cc.mi && "WebP-alpha"in cc.mi && "WebP-animation"in cc.mi) {
                            for (var b in cc.mi)
                                cc.mi[b] = cc.mi[b] ? "y" : "n";
                            w.send("feature", cc.mi);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    j3: 4,
                    H5: k,
                    page: i,
                    yb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, A);
    A.Dq = A.alog || ca();
    A.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && A.alog("cus.fire", "count", "z_httpscount");
    function Yb(a) {
        var b = window.TILE_VERSION
          , c = "20190410";
        b && b.ditu && (b = b.ditu,
        b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    var Zb = [72.6892532, 0.1939743381, 136.1168614, 54.392257]
      , $b = [72.69566833, 0.1999420909, 136.1232863, 54.39791217]
      , ac = 158
      , bc = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363]
      , dc = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886]
      , ec = 95
      , fc = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171]
      , gc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128]
      , hc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687]
      , ic = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563]
      , jc = 3E3
      , kc = 2.0E-5
      , lc = 3.0E-6
      , mc = 0.0174532925194
      , nc = 0.0065
      , oc = 0.0060
      , pc = 4E4
      , qc = 0
      , rc = 3
      , sc = 1.0E-10
      , tc = 6370996.81
      , uc = 1E8;
    function vc(a, b, c) {
        for (var e = ac, f = 0; f < e; f += 2)
            if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1])
                return q;
        return t
    }
    function wc(a) {
        var b = a.lng
          , c = a.lat
          , a = Math.sqrt(b * b + c * c) + Math.sin(c * jc * mc) * kc
          , b = Math.atan2(c, b) + Math.cos(b * jc * mc) * lc;
        return {
            lng: a * Math.cos(b) + nc,
            lat: a * Math.sin(b) + oc
        }
    }
    function xc(a) {
        var b = yc
          , c = {}
          , e = a.lng
          , f = a.lat
          , g = 1
          , i = a.lng
          , k = a.lat
          , m = e - g
          , n = 0
          , o = f + g
          , p = 0
          , v = e - g
          , w = 0
          , y = f - g
          , z = 0
          , B = e + g
          , D = 0
          , G = f - g
          , E = 0
          , C = e + g
          , H = 0
          , I = f + g
          , N = 0
          , o = m = 0
          , o = zc(b, e, f)
          , m = o.lng
          , o = o.lat;
        if (1.0E-6 >= Ac(m, o, i, k))
            return c.lng = e,
            c.lat = f,
            c;
        for (; ; ) {
            m = e - g;
            o = f + g;
            v = e - g;
            y = f - g;
            B = e + g;
            G = f - g;
            C = e + g;
            I = f + g;
            e = zc(b, m, o);
            n = e.lng;
            p = e.lat;
            e = zc(b, v, y);
            w = e.lng;
            z = e.lat;
            e = zc(b, B, G);
            D = e.lng;
            E = e.lat;
            e = zc(b, C, I);
            H = e.lng;
            N = e.lat;
            e = Ac(n, p, i, k);
            n = Ac(w, z, i, k);
            w = Ac(D, E, i, k);
            H = Ac(H, N, i, k);
            if (1.0E-6 > e)
                return c.lng = m,
                c.lat = o,
                c;
            if (1.0E-6 > n)
                return c.lng = v,
                c.lat = y,
                c;
            if (1.0E-6 > w)
                return c.lng = B,
                c.lat = G,
                c;
            if (1.0E-6 > H)
                return c.lng = C,
                c.lat = I,
                c;
            D = 1 / e;
            n = 1 / n;
            w = 1 / w;
            H = 1 / H;
            e = (m * D + v * n + B * w + C * H) / (D + n + w + H);
            f = (o * D + y * n + G * w + I * H) / (D + n + w + H);
            o = zc(b, e, f);
            m = o.lng;
            o = o.lat;
            if (1.0E-6 >= Ac(m, o, i, k))
                return c.lng = e,
                c.lat = f,
                c;
            g *= 0.6;
            if (1.0E-6 > g) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
                    g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
                    i = a.lng * uc;
                    k = a.lat * uc;
                    y = 1.0E-4 * uc;
                    m = i - y;
                    o = i + y;
                    v = k - y;
                    B = k + y;
                    D = n = w = H = l;
                    C = n = y = G = w = H = 0;
                    b(a);
                    D = l;
                    for (I = 0; I <= c; I++) {
                        for (e = 0; e <= g; e++)
                            if (D = b(l),
                            H = l.lng * uc,
                            w = l.lat * uc,
                            n = D.lng * uc,
                            D = D.lat * uc,
                            !(n < m || D < v || n > o || D > B)) {
                                H -= n;
                                w -= D;
                                n = Math.sqrt((i - n) * (i - n) + (k - D) * (k - D));
                                if (1 > n) {
                                    c = {};
                                    c.lng = l.lng;
                                    c.lat = l.lat;
                                    break a
                                }
                                G += 1 * H / n;
                                y += 1 * w / n;
                                C += 1 / n
                            }
                        G /= C * uc;
                        y /= C * uc
                    }
                    b = G * uc / uc;
                    g = y * uc / uc;
                    c = {};
                    c.lng = a.lng + b;
                    c.lat = a.lat + g
                }
                return c
            }
        }
    }
    function zc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }
    function Bc(a, b, c, e) {
        var f = arguments.length;
        this.Hg = {};
        this.Og = {};
        0 !== f && 4 === f && this.normalize(a, b, c, e)
    }
    Bc.prototype.contains = function(a) {
        return a.lng > this.Hg.lng && a.lng < this.Og.lng && a.lat > this.Hg.lat && a.lat < this.Og.lat ? rc : Math.abs(a.lng - this.Hg.lng) < sc || Math.abs(a.lng - this.Og.lng) < sc || Math.abs(a.lat - this.Hg.lat) < sc || Math.abs(a.y - this.Og.lat) > sc ? 2 : qc
    }
    ;
    Bc.prototype.normalize = function(a, b, c, e) {
        a > c ? (this.Hg.lng = c,
        this.Og.lng = a) : (this.Hg.lng = a,
        this.Og.lng = c);
        b > e ? (this.Hg.lat = e,
        this.Og.lat = b) : (this.Hg.lat = b,
        this.Og.lat = e)
    }
    ;
    function Cc(a, b, c, e) {
        this.nu = {
            lng: a,
            lat: b
        };
        this.gx = {
            lng: c,
            lat: e
        };
        this.by = new Bc(a,b,c,e)
    }
    function Dc(a, b) {
        var c = a.lat * mc
          , e = b.lat * mc
          , f = c - e
          , g = a.lng * mc - b.lng * mc;
        return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2))) * tc
    }
    function Ac(a, b, c, e) {
        return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
    }
    function Ec(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }
    function yc(a) {
        var b = {};
        if (a.lng < Zb[0] - 0.4 || a.lat < Zb[1] - 0.4 || a.lng > Zb[2] + 0.4 || a.lat > Zb[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (vc(a, hc, ic))
            return b = wc(a);
        for (var b = 0, c = pc, e = 0, f = new Bc, g = 0, e = 0; e < ec; ++e)
            gc[e] <= a.lat ? gc[(e + 1) % ec] > a.lat && 0 < Ec({
                lng: fc[e],
                lat: gc[e]
            }, {
                lng: fc[(e + 1) % ec],
                lat: gc[(e + 1) % ec]
            }, a) && ++g : gc[(e + 1) % ec] <= a.lat && 0 > Ec({
                lng: fc[e],
                lat: gc[e]
            }, {
                lng: fc[(e + 1) % ec],
                lat: gc[(e + 1) % ec]
            }, a) && --g;
        if ((0 === g ? qc : rc) === qc) {
            for (g = 0; g < ec; ++g)
                if (e = new Cc(fc[g],gc[g],fc[(g + 1) % ec],gc[(g + 1) % ec]),
                f.Hg.lng = e.by.Hg.lng - 0.5,
                f.Hg.lat = e.by.Hg.lat - 0.5,
                f.Og.lng = e.by.Og.lng + 0.5,
                f.Og.lat = e.by.Og.lat + 0.5,
                f.contains(a) !== qc) {
                    var i;
                    var k = e.nu.lng
                      , m = e.nu.lat
                      , n = e.gx.lng
                      , o = e.gx.lat;
                    i = o - m;
                    var p = k - n;
                    !(Math.abs(i - 0) > sc) && !(Math.abs(p - 0) > sc) ? i = e.nu : (k = n * m - k * o,
                    m = p * a.lng - i * a.lat,
                    n = i * i - p * p,
                    i = {
                        lng: (p * m - i * k) / n,
                        lat: -(i * m + p * k) / n
                    });
                    p = 180;
                    k = 90;
                    m = -180;
                    n = -90;
                    n = e.nu;
                    o = e.gx;
                    p = n.lng < o.lng ? n.lng : o.lng;
                    k = n.lat < o.lat ? n.lat : o.lat;
                    m = n.lng < o.lng ? n.lng : o.lng;
                    n = n.lat < o.lat ? n.lat : o.lat;
                    i.lng <= m && i.lng >= p && i.lng <= n && i.lat >= k ? (e = a.lat * mc,
                    p = a.lng * mc,
                    k = i.lat * mc,
                    i = i.lng * mc,
                    m = Math.cos(e) * Math.cos(k),
                    e = m * Math.cos(p) * Math.cos(i) + m * Math.sin(p) * Math.sin(i) + Math.sin(e) * Math.sin(k),
                    -1 > e ? e = -1 : 1 < e && (e = 1),
                    e = Math.acos(e) * tc) : (i = Dc(a, e.nu),
                    e = Dc(a, e.gx),
                    e = i < e ? i : e);
                    e < c && (c = e)
                }
            c < pc && (b = (pc - c) / pc)
        } else
            b = 1;
        c = wc(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }
    function Fc(a) {
        var b = {};
        if (a.lng < $b[0] - 0.4 || a.lat < $b[1] - 0.4 || a.lng > $b[2] + 0.4 || a.lat > $b[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (vc(a, bc, dc)) {
            var b = a.lng - nc
              , c = a.lat - oc
              , a = Math.sqrt(b * b + c * c) - Math.sin(c * jc * mc) * kc
              , b = Math.atan2(c, b) - Math.cos(b * jc * mc) * lc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = yc(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng,
        b.lat = a.lat,
        b) : xc(a)
    }
    function ab(a, b) {
        if (3 === b && a instanceof P) {
            var c = yc(a);
            return new L(c.lng,c.lat)
        }
        return a
    }
    function fb(a, b) {
        if (3 === b && a instanceof L) {
            var c = Fc(a);
            return new P(c.lng,c.lat)
        }
        return 5 === b && a instanceof L ? new P(a.lng,a.lat) : a
    }
    ;function sa(a, b) {
        // if (/^http/.test(a))  return;
        if (b) {
            // var c = (1E5 * Math.random()).toFixed(0);
            // A._rd["_cbk" + c] = function(a) {
            //     b && b(a);
            //     delete A._rd["_cbk" + c]
            // }
            // ;
            // a += "&callback=BMap._rd._cbk" + c
            
            //     var a = ob(a)
            //     , e = F("script", {
            //     type: "text/javascript"
            // });
            // e.charset = "utf-8";
            // e.src = a;
            // e.addEventListener ? e.addEventListener("load", function(a) {
            //     a = a.target;
            //     a.parentNode.removeChild(a)
            // }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
            //     var a = window.event.srcElement;
            //     a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
            // });
            // setTimeout(function() {
            //     document.getElementsByTagName("head")[0].appendChild(e);
            //     e = s
            // }, 1)
        } else {
            import(a)
        }
    }
    function Gc(a) {
        if (navigator.cookieEnabled)
            return (a = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? unescape(a[2]) : -1;
        if (localStorage)
            return localStorage.getItem(a) ? localStorage.getItem(a) : -1;
        if (sessionStorage)
            return sessionStorage.getItem(a) ? localStorage.getItem(a) : -1
    }
    function ob(a) {
        var b = decodeURIComponent(a.substring(a.indexOf("?") + 1))
          , c = (new Date).getTime()
          , e = window.___abvk ? window.___abvk : Gc("SECKEY_ABVK")
          , f = Gc("BMAP_SECKEY")
          , a = a + "&v=3.0&seckey=" + encodeURIComponent(e + "," + f) + "&timeStamp=" + c
          , b = md5 && md5(md5(b + ("&v=3.0&seckey=" + e + "," + f + "&timeStamp=" + c) + "F5L2O6R6AD8990O") + "H0A9P8P7Y6ABQO0") || "";
        return a += "&sign=" + b.substring(b.length - 12)
    }
    ;var Hc = {
        map: "xprnwp",
        common: "jxck2c",
        style: "gvfq2h",
        tile: "1niyqp",
        groundoverlay: "4bwhyi",
        pointcollection: "4ia5ek",
        marker: "40e0h4",
        symbol: "ronzuk",
        canvablepath: "b5oz2u",
        vmlcontext: "s5khnx",
        markeranimation: "iv5oxj",
        poly: "yncp4i",
        draw: "1zhfng",
        drawbysvg: "dvzdu3",
        drawbyvml: "oyru1y",
        drawbycanvas: "jubxng",
        infowindow: "0c3sfa",
        oppc: "5irxfl",
        opmb: "y4t1mn",
        menu: "05snjp",
        control: "fciq2e",
        navictrl: "rwunbi",
        geoctrl: "3kdrco",
        copyrightctrl: "5pjcfq",
        citylistcontrol: "wexcd4",
        scommon: "ovsh4c",
        local: "sw0lxe",
        route: "4ya3ts",
        othersearch: "bru31r",
        mapclick: "vdls1s",
        buslinesearch: "sprrjq",
        hotspot: "1cmum2",
        autocomplete: "q3sh4l",
        coordtrans: "m204kq",
        coordtransutils: "oyoexz",
        convertor: "bke2uh",
        clayer: "w1pxos",
        pservice: "eh3cro",
        pcommon: "ihazfk",
        panorama: "u3i3vw",
        panoramaflash: "ifor2n"
    };
    x.Oy = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Hc[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , e = "localStorage"in window && c !== s && c !== l;
        return {
            WY: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--; )
                        m = c.key(k),
                        -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Hc[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Hc[f]) : t
            },
            mK: a
        }
    }();
    function Wa() {}
    x.object.extend(Wa, {
        Nj: {
            wG: -1,
            TP: 0,
            qq: 1
        },
        uL: function() {
            var a = "canvablepath";
            if (!K() || !Vb())
                Ub() || (Tb() ? a = "vmlcontext" : Vb());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        K5: {},
        nG: {
            eQ: A.pa + "getmodules?v=3.0",
            zU: 5E3
        },
        DC: t,
        Yd: {
            Gl: {},
            In: [],
            fw: []
        },
        load: function(a, b, c) {
            var e = this.qb(a);
            if (e.Te == this.Nj.qq)
                c && b();
            else {
                if (e.Te == this.Nj.wG) {
                    this.rK(a);
                    this.FN(a);
                    var f = this;
                    f.DC == t && (f.DC = q,
                    setTimeout(function() {
                        for (var a = [], b = 0, c = f.Yd.In.length; b < c; b++) {
                            var e = f.Yd.In[b]
                              , n = "";
                            ka.Oy.mK(e) ? n = ka.Oy.get(e) : (n = "",
                            a.push(e + "_" + Hc[e]));
                            f.Yd.fw.push({
                                WM: e,
                                KE: n
                            })
                        }
                        f.DC = t;
                        f.Yd.In.length = 0;
                        // 0 == a.length ? f.aL() : sa(f.nG.eQ + "&mod=" + a.join(","))
                        
                        //0 == a.length ? f.kL() : oa(f.wG.tQ + "&mod=" + a.join(","))
						// 修改 加载本地模块文件，在 modules 目录下
						// console.log(a);   //打印所需模块  
						if( a.length > 0 ){
						  for(i=0; i<a.length;i++){
							mf = './modules/'+a[i]+'.js?a=1';
							// sa( mf );
							console.log('加载模块文件:'+mf); //IE error
						  }
						} else {
                            f.aL()
						} 
                        import('./modules/autocomplete_q3sh4l')
                        import('./modules/canvablepath_b5oz2u')
                        import('./modules/common_jxck2c')
                        import('./modules/copyrightctrl_5pjcfq')
                        import('./modules/draw_1zhfng')
                        import('./modules/drawbycanvas_jubxng')
                        import('./modules/drawbysvg_dvzdu3')
                        import('./modules/drawbyvml_oyru1y')
                        import('./modules/getmodules')
                        import('./modules/infowindow_0c3sfa')
                        import('./modules/map_xprnwp')
                        import('./modules/mapclick_vdls1s')
                        import('./modules/marker_40e0h4')
                        import('./modules/markeranimation_iv5oxj')
                        import('./modules/oppc_5irxfl')
                        import('./modules/poly_yncp4i')
                        import('./modules/scommon_ovsh4c')
                        import('./modules/style_gvfq2h')
                        import('./modules/symbol_ronzuk')
                        import('./modules/tile_1niyqp')
                        // const requireContext = require.context('./modules')
                        // requireContext.keys().forEach(key => {
                        //     console.log(`import('${key}')`)
                        //     // const mod = requireContext(key)
                        //     // console.log(mod.toString())
                        // })

                    }, 1));
                    e.Te = this.Nj.TP
                }
                e.Yu.push(b)
            }
        },
        rK: function(a) {
            if (a && this.uL()[a])
                for (var a = this.uL()[a], b = 0; b < a.length; b++)
                    this.rK(a[b]),
                    this.Yd.Gl[a[b]] || this.FN(a[b])
        },
        FN: function(a) {
            for (var b = 0; b < this.Yd.In.length; b++)
                if (this.Yd.In[b] == a)
                    return;
            this.Yd.In.push(a)
        },
        o_: function(a, b) {
            var c = this.qb(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Te = this.Nj.qq;
            for (var f = 0, g = c.Yu.length; f < g; f++)
                c.Yu[f]();
            c.Yu.length = 0
        },
        mK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Yd.Gl[a].Te != c.Nj.qq ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.nG.zU)
        },
        qb: function(a) {
            this.Yd.Gl[a] || (this.Yd.Gl[a] = {},
            this.Yd.Gl[a].Te = this.Nj.wG,
            this.Yd.Gl[a].Yu = []);
            return this.Yd.Gl[a]
        },
        remove: function(a) {
            delete this.qb(a)
        },
        xV: function(a, b) {
            for (var c = this.Yd.fw, e = q, f = 0, g = c.length; f < g; f++)
                "" == c[f].KE && (c[f].WM == a ? c[f].KE = b : e = t);
            e && this.aL()
        },
        aL: function() {
            for (var a = this.Yd.fw, b = 0, c = a.length; b < c; b++)
                this.o_(a[b].WM, a[b].KE);
            this.Yd.fw.length = 0
        }
    });
    function Q(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    Q.prototype.Ub = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function M(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    M.prototype.Ub = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function pb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, q);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = ca();
        e.onreadystatechange = function() {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        }
        ;
        e.send(b)
    }
    ;(function(a) {
        function b(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }
        function c(a, c, e, f, g, i) {
            return b(b(b(c, a), b(f, i)) << g | b(b(c, a), b(f, i)) >>> 32 - g, e)
        }
        function e(a, b, e, f, g, i, k) {
            return c(b & e | ~b & f, a, b, g, i, k)
        }
        function f(a, b, e, f, g, i, k) {
            return c(b & f | e & ~f, a, b, g, i, k)
        }
        function g(a, b, e, f, g, i, k) {
            return c(e ^ (b | ~f), a, b, g, i, k)
        }
        function i(a, i) {
            a[i >> 5] |= 128 << i % 32;
            a[(i + 64 >>> 9 << 4) + 14] = i;
            var k, m, n, o, p, E = 1732584193, C = -271733879, H = -1732584194, I = 271733878;
            for (k = 0; k < a.length; k += 16)
                m = E,
                n = C,
                o = H,
                p = I,
                E = e(E, C, H, I, a[k], 7, -680876936),
                I = e(I, E, C, H, a[k + 1], 12, -389564586),
                H = e(H, I, E, C, a[k + 2], 17, 606105819),
                C = e(C, H, I, E, a[k + 3], 22, -1044525330),
                E = e(E, C, H, I, a[k + 4], 7, -176418897),
                I = e(I, E, C, H, a[k + 5], 12, 1200080426),
                H = e(H, I, E, C, a[k + 6], 17, -1473231341),
                C = e(C, H, I, E, a[k + 7], 22, -45705983),
                E = e(E, C, H, I, a[k + 8], 7, 1770035416),
                I = e(I, E, C, H, a[k + 9], 12, -1958414417),
                H = e(H, I, E, C, a[k + 10], 17, -42063),
                C = e(C, H, I, E, a[k + 11], 22, -1990404162),
                E = e(E, C, H, I, a[k + 12], 7, 1804603682),
                I = e(I, E, C, H, a[k + 13], 12, -40341101),
                H = e(H, I, E, C, a[k + 14], 17, -1502002290),
                C = e(C, H, I, E, a[k + 15], 22, 1236535329),
                E = f(E, C, H, I, a[k + 1], 5, -165796510),
                I = f(I, E, C, H, a[k + 6], 9, -1069501632),
                H = f(H, I, E, C, a[k + 11], 14, 643717713),
                C = f(C, H, I, E, a[k], 20, -373897302),
                E = f(E, C, H, I, a[k + 5], 5, -701558691),
                I = f(I, E, C, H, a[k + 10], 9, 38016083),
                H = f(H, I, E, C, a[k + 15], 14, -660478335),
                C = f(C, H, I, E, a[k + 4], 20, -405537848),
                E = f(E, C, H, I, a[k + 9], 5, 568446438),
                I = f(I, E, C, H, a[k + 14], 9, -1019803690),
                H = f(H, I, E, C, a[k + 3], 14, -187363961),
                C = f(C, H, I, E, a[k + 8], 20, 1163531501),
                E = f(E, C, H, I, a[k + 13], 5, -1444681467),
                I = f(I, E, C, H, a[k + 2], 9, -51403784),
                H = f(H, I, E, C, a[k + 7], 14, 1735328473),
                C = f(C, H, I, E, a[k + 12], 20, -1926607734),
                E = c(C ^ H ^ I, E, C, a[k + 5], 4, -378558),
                I = c(E ^ C ^ H, I, E, a[k + 8], 11, -2022574463),
                H = c(I ^ E ^ C, H, I, a[k + 11], 16, 1839030562),
                C = c(H ^ I ^ E, C, H, a[k + 14], 23, -35309556),
                E = c(C ^ H ^ I, E, C, a[k + 1], 4, -1530992060),
                I = c(E ^ C ^ H, I, E, a[k + 4], 11, 1272893353),
                H = c(I ^ E ^ C, H, I, a[k + 7], 16, -155497632),
                C = c(H ^ I ^ E, C, H, a[k + 10], 23, -1094730640),
                E = c(C ^ H ^ I, E, C, a[k + 13], 4, 681279174),
                I = c(E ^ C ^ H, I, E, a[k], 11, -358537222),
                H = c(I ^ E ^ C, H, I, a[k + 3], 16, -722521979),
                C = c(H ^ I ^ E, C, H, a[k + 6], 23, 76029189),
                E = c(C ^ H ^ I, E, C, a[k + 9], 4, -640364487),
                I = c(E ^ C ^ H, I, E, a[k + 12], 11, -421815835),
                H = c(I ^ E ^ C, H, I, a[k + 15], 16, 530742520),
                C = c(H ^ I ^ E, C, H, a[k + 2], 23, -995338651),
                E = g(E, C, H, I, a[k], 6, -198630844),
                I = g(I, E, C, H, a[k + 7], 10, 1126891415),
                H = g(H, I, E, C, a[k + 14], 15, -1416354905),
                C = g(C, H, I, E, a[k + 5], 21, -57434055),
                E = g(E, C, H, I, a[k + 12], 6, 1700485571),
                I = g(I, E, C, H, a[k + 3], 10, -1894986606),
                H = g(H, I, E, C, a[k + 10], 15, -1051523),
                C = g(C, H, I, E, a[k + 1], 21, -2054922799),
                E = g(E, C, H, I, a[k + 8], 6, 1873313359),
                I = g(I, E, C, H, a[k + 15], 10, -30611744),
                H = g(H, I, E, C, a[k + 6], 15, -1560198380),
                C = g(C, H, I, E, a[k + 13], 21, 1309151649),
                E = g(E, C, H, I, a[k + 4], 6, -145523070),
                I = g(I, E, C, H, a[k + 11], 10, -1120210379),
                H = g(H, I, E, C, a[k + 2], 15, 718787259),
                C = g(C, H, I, E, a[k + 9], 21, -343485551),
                E = b(E, m),
                C = b(C, n),
                H = b(H, o),
                I = b(I, p);
            return [E, C, H, I]
        }
        function k(a) {
            var b, c = "", e = 32 * a.length;
            for (b = 0; b < e; b += 8)
                c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return c
        }
        function m(a) {
            var b, c = [];
            c[(a.length >> 2) - 1] = l;
            for (b = 0; b < c.length; b += 1)
                c[b] = 0;
            var e = 8 * a.length;
            for (b = 0; b < e; b += 8)
                c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
            return c
        }
        function n(a) {
            var b = "", c, e;
            for (e = 0; e < a.length; e += 1)
                c = a.charCodeAt(e),
                b += "0123456789abcdef".charAt(c >>> 4 & 15) + "0123456789abcdef".charAt(c & 15);
            return b
        }
        function o(a, b) {
            var c = unescape(encodeURIComponent(a))
              , e = unescape(encodeURIComponent(b))
              , f = m(c)
              , g = []
              , n = [];
            g[15] = n[15] = l;
            16 < f.length && (f = i(f, 8 * c.length));
            for (c = 0; 16 > c; c += 1)
                g[c] = f[c] ^ 909522486,
                n[c] = f[c] ^ 1549556828;
            e = i(g.concat(m(e)), 512 + 8 * e.length);
            return k(i(n.concat(e), 640))
        }
        function p(a, b, c) {
            return !b ? !c ? n(k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length))) : k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length)) : !c ? n(o(b, a)) : o(b, a)
        }
        "function" === typeof define && define.D2 ? define(function() {
            return p
        }) : "object" === typeof module && module.WW ? module.WW = p : a.md5 = p
    }
    )(this);
    for (var Ic = function(a, b) {
        function c(a) {
            return f(a, function(a) {
                return e(a)
            })
        }
        function e(a) {
            return g.ihxee(a, "")[g.ealca][g.ihxee(g.ihxee(m, "Char"), k)](a)
        }
        function f(a, b) {
            for (var c = "dhi"; g.xdexd(c, "aehx"); )
                switch (c) {
                case g.xecme:
                    var e = []
                      , c = "ahi";
                    break;
                case "alh":
                    return e;
                case g.adcch:
                    var f = a.length
                      , c = g.xecme;
                    break;
                case "ahi":
                    for (c = 0; c < f; c++) {
                        var i = b(a[c]);
                        e.push(i)
                    }
                    c = g.alxic
                }
        }
        var g = {
            xdexd: function(a, b) {
                return a !== b
            },
            xecme: "lel",
            adcch: "dhi",
            alxic: "alh",
            ihxee: function(a, b) {
                return a + b
            },
            ealca: "constructor",
            axdie: function(a, b) {
                return a(b)
            },
            mxemm: "1.1.2",
            ahhil: function(a, b) {
                return a + b
            },
            xlall: function(a, b) {
                return a < b
            },
            cmcmh: function(a, b, c) {
                return a(b, c)
            },
            icail: function(a, b, c) {
                return a(b, c)
            }
        }, i, k, m, n = decodeURIComponent;
        i = "de";
        m = g.ahhil("fr", "o") + "m";
        k = g.ahhil("Co", i);
        var o = c.call(e, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
        i = f([28782, 27702, 26416, 25167, 24183], function(a) {
            return n(a)
        });
        var p = c.call(i, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430])
          , v = {};
        i = c(i);
        var w = RegExp(i.join("|"));
        for (i = 0; g.xlall(i, o.length); i++)
            v[p[i]] = o[i];
        b = g.cmcmh(f, b.split(""), function(a) {
            return v[a] || a
        }).join("");
        return g.icail(f, b.split(w), function(a) {
            return g.axdie(n, a)
        })
    }(this, "\u545a\u5ef2\u5ef2\u5e77\u545a\u5ef2\u545a\u5ef2\u6c36\u545al\u735c\u5e77\u5ef2\u56c4\u545a\u5e77\u545a\u735c\u58a0h\u706eh\u545al\u624f\u735c\u545ah\u6c36\u5ef2\u735ci\u56c4i\u6730hl\u56c4\u735cl\u5e77il\u56c4\u545al\u624f\u545a\u58a0\u5ef2\u706eh\u59c8\u545a\u5ef2\u58a0\u6c36\u5ef2l\u58a0\u624fli\u59c8h\u545a\u6730\u5ef2\u735ci\u56c4\u5ef2\u624f\u58a0\u545a\u545a\u735cl\u6730il\u5ef2\u545a\u545a\u6c36\u545a\u56c4\u5ef2\u735c\u545a\u706e\u5ef2\u5ef2\u5ef2\u59c8\u545a\u706e\u5f5f\u66f0\u6c19\u59c8\u7313\u72b8su\u735c\u545a\u5f5f\u6b31\u6b9b\u624f\u5ef2\u56c4\u5ef2\u56c4l\u706e\u5ef2\u5ef2\u59c8\u545a\u5ef2\u5e77ii\u58a0hi\u5e77\u59c8l\u735c\u5ef2\u735c\u6c36P\u6256NOR\u6256M\u6256\u6730\u545all\u735c\u56c4\u5e77l\u545a\u545al\u58a0\u706e\u58a0\u545a\u5ef2\u706eSJv\u6a4aY\u72bah\u6b31\u692dZ\u6b9bh\u72ba\u735aHS\u624fil\u56c4\u6730h\u735c\u5ef2\u6c36\u56c4\u5ef2\u56c4\u6730l\u5ef2\u56c4\u5e77\u5ef2i\u545a\u624fih\u5ef2\u5e77\u56c4\u58a0\u59c8\u5e77ll\u545a\u5e77\u56c4\u735c\u5ef2\u59c8\u545a\u624f\u58a0\u59c8l\u735cl\u624fh\u5ef2\u56c4\u6730i\u58a0\u59c8\u59c8\u5ef2\u6730hl\u59c8\u545a\u545a\u624f\u59c8\u59c8\u56c4\u56c4\u59c8\u624f\u545al\u58a0\u5e77\u56c4hh\u5e77\u58a0\u59c8\u5ef2hh\u5e77\u735c\u5ef2\u5ef2\u5ef2\u5ef2\u6730\u735a\u5ef2rs\u545a\u624f\u58a0\u545al\u545a\u545a\u706e\u545a\u59c8\u59c8\u58a0\u56c4\u5e77\u5ef2\u56c4\u58a0\u56c4\u56c4\u706e\u59c8\u545a\u58a0\u735c\u58a0\u6c36\u5ef2\u56c4\u735c\u6c36h\u56c4\u59c8\u6730\u545a\u59c8\u735c\u59c8\u735c\u624f\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u545a\u72b8try\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u5e77\u5a32u\u72b8\u59c8ti\u7313\u72b8\u6730\u5f5f\u66f0\u6c19\u59c8\u5ef2ll\u5c2b\u5ef2\u59c8k\u5f5f\u6b31\u6b9b\u6c36\u735cili\u5ef2\u706e\u5ef2\u5ef2h\u735c\u56c4\u624f\u545a\u5ef2h\u5ef2\u5ef2\u5e77\u5f5f\u66f0\u6c19\u5ef2k\u5f5f\u6b31\u6b9b\u6c36h\u58a0\u56c4\u59c8\u5ef2\u5e77\u56c4hi\u735cl\u706e\u5f5f\u6a4a\u6c19\u5f5f\u62a1\u66f0\u5f5f\u6256\u62a1\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u645a\u5f5f\u62a1\u5e52\u5f5f\u6a4a\u62a1\u5f5f\u6256\u6c19\u5f5f\u62a1\u5fb4\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u63cb\u6b31\u5f5f\u6a4a\u62a1\u5f5f\u6256\u7209\u5f5f\u63cb\u692d\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u72ba\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u5f6e\u5f5f\u6256\u7209\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u645a\u5f5f\u63cb\u5e52\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u63cb\u5f5f\u63cb\u6a4a\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u645a\u5f5f\u62a1\u6b9b\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u6256\u5f5f\u6256\u5fb4\u5f5f\u6a4a\u7074\u5f5f\u63cb\u6b9b\u5f5f\u63cb\u7209\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u6b9b\u5f5f\u62a1\u6b31\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u5f6e\u5f5f\u5f6e\u5e52\u624f\u735c\u735c\u5ef2\u5ef2\u56c4\u6c36\u545arr\u7313r\u6730\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u59c8\u7313u\u72b8t\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b"), Jc = 406, Kc = ++Jc; --Kc; )
        Ic.push(Ic.shift());
    function V(a) {
        return Ic[a - 0]
    }
    var Nc = function(a) {
        for (var b = {
            amida: V("0x0"),
            xeeml: function(a, b) {
                return a === b
            },
            ilaee: "PANORAMA",
            aeaha: function(a, b) {
                return a + b
            },
            edame: function(a, b) {
                return a + b
            },
            aaace: V("0x1"),
            lchmm: V("0x2"),
            hldml: function(a, b) {
                return a !== b
            },
            liche: function(a, b, c) {
                return a(b, c)
            },
            ellmd: V("0x3"),
            leelx: V("0x4"),
            amidi: V("0x5"),
            aehhe: V("0x6"),
            ildel: V("0x7"),
            hceax: V("0x8")
        }, c = b[V("0x9")]; b[V("0xa")](c, b.aehhe); )
            switch (c) {
            case b[V("0xb")]:
                var e = a ? a : 5E3
                  , c = V("0xc");
                break;
            case b[V("0xd")]:
                var f = 0
                  , c = V("0x7");
                break;
            case V("0x5"):
                var g = s
                  , c = b[V("0xd")];
                break;
            case "exa":
                return function(a) {
                    for (var c = b.lchmm; b[V("0xa")](c, V("0x3")); )
                        switch (c) {
                        case V("0xe"):
                            g = b[V("0xf")](setTimeout, function() {
                                var a = {
                                    adadl: b[V("0x10")],
                                    dxadx: function(a, c) {
                                        return b[V("0x11")](a, c)
                                    },
                                    aacea: b[V("0x12")]
                                }
                                  , c = b.aeaha(b[V("0x13")](A.uN + b[V("0x14")] + A.version, "&ak="), ra) + V("0x15") + f;
                                sa(c, function(b) {
                                    var c = {
                                        iixhi: a[V("0x16")],
                                        clmam: function(a, b) {
                                            return a !== b
                                        }
                                    };
                                    (!b || a.dxadx(b[V("0x0")], l) || 0 !== b[V("0x0")]) && Lc(a[V("0x17")], function(a) {
                                        (!a || a[c[V("0x18")]] === l || c[V("0x19")](a[c[V("0x18")]], 0)) && Mc(V("0x1a"))
                                    })
                                });
                                f = 0;
                                g = s
                            }, e);
                            c = b[V("0x1b")];
                            break;
                        case V("0x2"):
                            f += a;
                            c = V("0x4");
                            break;
                        case b[V("0x1c")]:
                            if (!g) {
                                c = "alx";
                                break
                            }
                            c = V("0x3")
                        }
                }
            }
    }();
    function Oc(a, b) {
        for (var c = {
            ceiad: function(a, b) {
                return a !== b
            },
            dmace: "daam",
            xclml: "eih",
            ixcca: function(a, b) {
                return a + b
            },
            hlcee: function(a, b) {
                return a + b
            },
            ccddc: function(a, b) {
                return a + b
            },
            axadl: V("0x1d"),
            xxdxl: V("0x1e"),
            xcahh: V("0x1f"),
            maaaa: V("0x20"),
            xelee: V("0x21"),
            adxdd: V("0x22"),
            eccxd: V("0x23"),
            cexmx: V("0x24"),
            caeii: function(a, b) {
                return a(b)
            },
            ahala: "elx",
            ecmmh: V("0x25"),
            ecmcm: V("0x26")
        }, e = "adm"; c.ceiad(e, c[V("0x27")]); )
            switch (e) {
            case c[V("0x28")]:
                o = b.QV ? b.QV : 1;
                e = V("0x29");
                break;
            case V("0x26"):
                var f = c[V("0x2a")](c[V("0x2a")](c[V("0x2b")](c[V("0x2c")](c[V("0x2c")](a, "-") + c.ccddc(v, m), "-"), i) + "-" + ra, "-"), g)
                  , e = V("0x24");
                break;
            case c.axadl:
                p && Nc(o);
                e = V("0x2d");
                break;
            case "lad":
                var g = c.xxdxl
                  , e = V("0x2e");
                break;
            case "hdc":
                e = !b ? c[V("0x2f")] : c[V("0x28")];
                break;
            case c[V("0x30")]:
                var i = Date[V("0x31")](new Date)
                  , e = V("0x25");
                break;
            case V("0x1f"):
                o = 1;
                e = c[V("0x32")];
                break;
            case c[V("0x32")]:
                p = q;
                e = c.adxdd;
                break;
            case c[V("0x33")]:
                var k = c[V("0x2c")](c[V("0x2c")](c[V("0x2c")](c[V("0x2c")](c[V("0x2c")]("auth_key=", c[V("0x2c")](v, m)), "-"), i) + "-", ra), "-") + n
                  , e = "xea";
                break;
            case V("0x29"):
                p = b.Bp === t ? t : q;
                e = c[V("0x34")];
                break;
            case V("0x2e"):
                var m = 1800
                  , e = c[V("0x30")];
                break;
            case c[V("0x35")]:
                var n = c.caeii(md5, f)
                  , e = c[V("0x33")];
                break;
            case c.ahala:
                return k;
            case V("0x36"):
                var o, p, e = V("0x37");
                break;
            case c.ecmmh:
                var v = i / 1E3
                  , e = c[V("0x38")]
            }
    }
    function Lc(a, b) {
        var c = {
            milia: function(a, b) {
                return a + b
            },
            aahmd: function(a, b) {
                return a + b
            },
            eahaa: V("0x39"),
            cxhah: function(a, b) {
                return a === b
            },
            hxdca: V("0x3a"),
            dhiml: V("0x3b")
        };
        switch (a) {
        case V("0x1a"):
            var e = c[V("0x3c")](c[V("0x3d")](c.aahmd(A.uN, c[V("0x3e")]), A.version) + V("0x3f"), ra);
            c.cxhah(typeof b, c[V("0x40")]) ? sa(e, b) : sa(c[V("0x3d")](c[V("0x3d")](e, c[V("0x41")]), b))
        }
    }
    function Mc(a) {
        var b = {
            cxihl: function(a, b) {
                return a(b)
            },
            mmaad: V("0x42")
        };
        switch (a) {
        case V("0x1a"):
            b.cxihl(alert, b[V("0x43")])
        }
    }
    ;function nb(a, b) {
        a && (this.Mb = a,
        this.da = "spot" + nb.da++,
        b = b || {},
        this.ih = b.text || "",
        this.Lv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.KB = b.userData || s,
        this.Rh = b.minZoom || s,
        this.Nf = b.maxZoom || s)
    }
    nb.da = 0;
    x.extend(nb.prototype, {
        za: function(a) {
            this.Rh == s && (this.Rh = a.M.kc);
            this.Nf == s && (this.Nf = a.M.qc)
        },
        va: function(a) {
            if (a instanceof P || a instanceof L)
                this.Mb = a
        },
        ma: u("Mb"),
        gu: da("ih"),
        UD: u("ih"),
        setUserData: da("KB"),
        getUserData: u("KB")
    });
    function Pc() {
        this.P = s;
        this.Nb = "control";
        this.Xa = this.dK = q
    }
    x.lang.xa(Pc, x.lang.Ja, "Control");
    x.extend(Pc.prototype, {
        initialize: function(a) {
            this.P = a;
            if (this.R)
                return a.cb.appendChild(this.R),
                this.R
        },
        Ne: function(a) {
            !this.R && (this.initialize && cb(this.initialize)) && (this.R = this.initialize(a));
            this.m = this.m || {
                Ng: t
            };
            this.yB();
            this.Or();
            this.R && (this.R.qr = this)
        },
        yB: function() {
            var a = this.R;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Vu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Ng || x.U.ib(a, "BMap_noprint");
                K() || x.V(a, "contextmenu", pa)
            }
        },
        remove: function() {
            this.P = s;
            this.R && (this.R.parentNode && this.R.parentNode.removeChild(this.R),
            this.R = this.R.qr = s)
        },
        Ha: function() {
            this.R = Hb(this.P.cb, "<div unselectable='on'></div>");
            this.Xa == t && x.U.aa(this.R);
            return this.R
        },
        Or: function() {
            this.wc(this.m.anchor)
        },
        wc: function(a) {
            if (this.E2 || !bb(a) || isNaN(a) || a < Qc || 3 < a)
                a = this.defaultAnchor;
            this.m = this.m || {
                Ng: t
            };
            this.m.Ga = this.m.Ga || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.R) {
                var c = this.R
                  , e = this.m.Ga.width
                  , f = this.m.Ga.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case Qc:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case Rc:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case Sc:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                x.U.rc(this.R, "anchor" + c[b]);
                x.U.ib(this.R, "anchor" + c[a])
            }
        },
        xD: function() {
            return this.m.anchor
        },
        getContainer: u("R"),
        Sd: function(a) {
            a instanceof M && (this.m = this.m || {
                Ng: t
            },
            this.m.Ga = new M(a.width,a.height),
            this.R && this.wc(this.m.anchor))
        },
        tj: function() {
            return this.m.Ga
        },
        dd: u("R"),
        show: function() {
            this.Xa != q && (this.Xa = q,
            this.R && x.U.show(this.R))
        },
        aa: function() {
            this.Xa != t && (this.Xa = t,
            this.R && x.U.aa(this.R))
        },
        isPrintable: function() {
            return !!this.m.Ng
        },
        Uc: function() {
            return !this.R && !this.P ? t : !!this.Xa
        }
    });
    var Qc = 0
      , Rc = 1
      , Sc = 2;
    function qb(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            Ng: t,
            AF: a.showZoomInfo || q,
            anchor: a.anchor,
            Ga: a.offset,
            type: a.type,
            OW: a.enableGeolocation || t
        };
        this.defaultAnchor = K() ? 3 : Qc;
        this.defaultOffset = new M(10,10);
        this.wc(a.anchor);
        this.mn(a.type);
        this.Ef()
    }
    x.lang.xa(qb, Pc, "NavigationControl");
    x.extend(qb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        mn: function(a) {
            this.m.type = bb(a) && 0 <= a && 3 >= a ? a : 0
        },
        vp: function() {
            return this.m.type
        },
        Ef: function() {
            var a = this;
            Wa.load("navictrl", function() {
                a.Df()
            })
        }
    });
    function Tc(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || Sc,
            Ga: a.offset || new M(10,30),
            Y_: a.showAddressBar !== t,
            o3: a.enableAutoLocation || t,
            OM: a.locationIcon || s
        };
        var b = this;
        this.Vu = 1200;
        b.V0 = [];
        this.ue = [];
        Wa.load("geoctrl", function() {
            (function e() {
                if (0 !== b.ue.length) {
                    var a = b.ue.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            }
            )();
            b.dQ()
        });
        Ua(Na)
    }
    x.lang.xa(Tc, Pc, "GeolocationControl");
    x.extend(Tc.prototype, {
        location: function() {
            this.ue.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: fa(s)
    });
    function Uc(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            Ng: t,
            anchor: a.anchor,
            Ga: a.offset
        };
        this.hc = [];
        this.defaultAnchor = Sc;
        this.defaultOffset = new M(5,2);
        this.wc(a.anchor);
        this.dK = t;
        this.Ef()
    }
    x.lang.xa(Uc, Pc, "CopyrightControl");
    x.object.extend(Uc.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Dw: function(a) {
            if (a && bb(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: s,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.zm(a.id))
                    for (var e in b)
                        a[e] = b[e];
                else
                    this.hc.push(b)
            }
        },
        zm: function(a) {
            for (var b = 0, c = this.hc.length; b < c; b++)
                if (this.hc[b].id == a)
                    return this.hc[b]
        },
        ED: u("hc"),
        ZE: function(a) {
            for (var b = 0, c = this.hc.length; b < c; b++)
                this.hc[b].id == a && (r = this.hc.splice(b, 1),
                b--,
                c = this.hc.length)
        },
        Ef: function() {
            var a = this;
            Wa.load("copyrightctrl", function() {
                a.Df()
            })
        }
    });
    function sb(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            Ng: t,
            size: a.size || new M(150,150),
            padding: 5,
            eb: a.isOpen === q ? q : t,
            n1: 4,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new M(0,0);
        this.Iq = this.Jq = 13;
        this.wc(a.anchor);
        this.Ie(this.m.size);
        this.Ef()
    }
    x.lang.xa(sb, Pc, "OverviewMapControl");
    x.extend(sb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        wc: function(a) {
            Pc.prototype.wc.call(this, a)
        },
        ve: function() {
            this.ve.so = q;
            this.m.eb = !this.m.eb;
            this.R || (this.ve.so = t)
        },
        Ie: function(a) {
            a instanceof M || (a = new M(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        Cb: function() {
            return this.m.size
        },
        eb: function() {
            return this.m.eb
        },
        Ef: function() {
            var a = this;
            Wa.load("control", function() {
                a.Df()
            })
        }
    });
    function Vc(a) {
        Pc.call(this);
        a = a || {};
        this.defaultAnchor = Qc;
        this.vV = a.canCheckSize === t ? t : q;
        this.mj = "";
        this.defaultOffset = new M(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Ng: t,
            Ga: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && cb(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && cb(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && cb(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.wc(a.anchor);
        this.Ef()
    }
    x.lang.xa(Vc, Pc, "CityListControl");
    x.object.extend(Vc.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Ef: function() {
            var a = this;
            Wa.load("citylistcontrol", function() {
                a.Df()
            }, q)
        }
    });
    function rb(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            Ng: t,
            color: "black",
            jd: "metric",
            Ga: a.offset
        };
        this.defaultAnchor = Sc;
        this.defaultOffset = new M(81,18);
        this.wc(a.anchor);
        this.bi = {
            metric: {
                name: "metric",
                tK: 1,
                iM: 1E3,
                PO: "\u7c73",
                QO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                tK: 3.2808,
                iM: 5280,
                PO: "\u82f1\u5c3a",
                QO: "\u82f1\u91cc"
            }
        };
        this.bi[this.m.jd] || (this.m.jd = "metric");
        this.WI = s;
        this.rI = {};
        this.Ef()
    }
    x.lang.xa(rb, Pc, "ScaleControl");
    x.object.extend(rb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Yk: function(a) {
            this.m.color = a + ""
        },
        K3: function() {
            return this.m.color
        },
        wF: function(a) {
            this.m.jd = this.bi[a] && this.bi[a].name || this.m.jd
        },
        lY: function() {
            return this.m.jd
        },
        Ef: function() {
            var a = this;
            Wa.load("control", function() {
                a.Df()
            })
        }
    });
    var Wc = 0;
    function tb(a) {
        Pc.call(this);
        a = a || {};
        this.defaultAnchor = Rc;
        this.defaultOffset = new M(10,10);
        this.m = {
            Ng: t,
            wh: [Qa, db, Va, Ta],
            gW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Wc,
            Ga: a.offset || this.defaultOffset,
            SW: q
        };
        this.wc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.wh = a.mapTypes.slice(0));
        this.Ef()
    }
    x.lang.xa(tb, Pc, "MapTypeControl");
    x.object.extend(tb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Py: function(a) {
            this.P.eo = a
        },
        Ef: function() {
            var a = this;
            Wa.load("control", function() {
                a.Df()
            }, q)
        }
    });
    function Xc(a) {
        Pc.call(this);
        a = a || {};
        this.m = {
            Ng: t,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.Zi = t;
        this.kw = s;
        this.BI = new Yc({
            Ze: "api"
        });
        this.CI = new Zc(s,{
            Ze: "api"
        });
        this.defaultAnchor = Rc;
        this.defaultOffset = new M(10,10);
        this.wc(a.anchor);
        this.Ef();
        Ua(za)
    }
    x.lang.xa(Xc, Pc, "PanoramaControl");
    x.extend(Xc.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Ef: function() {
            var a = this;
            Wa.load("control", function() {
                a.Df()
            })
        }
    });
    function $c(a) {
        x.lang.Ja.call(this);
        this.m = {
            cb: s,
            cursor: "default"
        };
        this.m = x.extend(this.m, a);
        this.Nb = "contextmenu";
        this.P = s;
        this.Da = [];
        this.Pf = [];
        this.Le = [];
        this.Xw = this.vs = s;
        this.Qh = t;
        var b = this;
        Wa.load("menu", function() {
            b.ob()
        })
    }
    x.lang.xa($c, x.lang.Ja, "ContextMenu");
    x.object.extend($c.prototype, {
        za: function(a, b) {
            this.P = a;
            this.Ll = b || s
        },
        remove: function() {
            this.P = this.Ll = s
        },
        es: function(a) {
            if (a && !("menuitem" != a.Nb || "" == a.ih || 0 >= a.gj)) {
                for (var b = 0, c = this.Da.length; b < c; b++)
                    if (this.Da[b] === a)
                        return;
                this.Da.push(a);
                this.Pf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Nb) {
                for (var b = 0, c = this.Da.length; b < c; b++)
                    this.Da[b] === a && (this.Da[b].remove(),
                    this.Da.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.Pf.length; b < c; b++)
                    this.Pf[b] === a && (this.Pf[b].remove(),
                    this.Pf.splice(b, 1),
                    c--)
            }
        },
        VB: function() {
            this.Da.push({
                Nb: "divider",
                Vj: this.Le.length
            });
            this.Le.push({
                U: s
            })
        },
        bF: function(a) {
            if (this.Le[a]) {
                for (var b = 0, c = this.Da.length; b < c; b++)
                    this.Da[b] && ("divider" == this.Da[b].Nb && this.Da[b].Vj == a) && (this.Da.splice(b, 1),
                    c--),
                    this.Da[b] && ("divider" == this.Da[b].Nb && this.Da[b].Vj > a) && this.Da[b].Vj--;
                this.Le.splice(a, 1)
            }
        },
        dd: u("R"),
        show: function() {
            this.Qh != q && (this.Qh = q)
        },
        aa: function() {
            this.Qh != t && (this.Qh = t)
        },
        D_: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.Pf[a]
        }
    });
    var bd = J.ta + "menu_zoom_in.png"
      , cd = J.ta + "menu_zoom_out.png";
    function dd(a, b, c) {
        if (a && cb(b)) {
            x.lang.Ja.call(this);
            this.m = {
                width: 100,
                id: "",
                Mm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.Mm = c.iconUrl ? c.iconUrl : "";
            this.ih = a + "";
            this.zz = b;
            this.P = s;
            this.Nb = "menuitem";
            this.Vr = this.Av = this.R = this.Lh = s;
            this.Oh = q;
            var e = this;
            Wa.load("menu", function() {
                e.ob()
            })
        }
    }
    x.lang.xa(dd, x.lang.Ja, "MenuItem");
    x.object.extend(dd.prototype, {
        za: function(a, b) {
            this.P = a;
            this.Lh = b
        },
        remove: function() {
            this.P = this.Lh = s
        },
        gu: function(a) {
            a && (this.ih = a + "")
        },
        Wb: function(a) {
            a && (this.m.Mm = a)
        },
        dd: u("R"),
        enable: function() {
            this.Oh = q
        },
        disable: function() {
            this.Oh = t
        }
    });
    function kb(a, b) {
        a && !b && (b = a);
        this.Oe = this.ce = this.Ue = this.ee = this.$l = this.Jl = s;
        a && (this.$l = new P(a.lng,a.lat),
        this.Jl = new P(b.lng,b.lat),
        this.Ue = a.lng,
        this.ee = a.lat,
        this.Oe = b.lng,
        this.ce = b.lat)
    }
    x.object.extend(kb.prototype, {
        Bj: function() {
            return !this.$l || !this.Jl
        },
        Ub: function(a) {
            return !(a instanceof kb) || this.Bj() ? t : this.Be().Ub(a.Be()) && this.sf().Ub(a.sf())
        },
        Be: u("$l"),
        sf: u("Jl"),
        MV: function(a) {
            return !(a instanceof kb) || this.Bj() || a.Bj() ? t : a.Ue > this.Ue && a.Oe < this.Oe && a.ee > this.ee && a.ce < this.ce
        },
        Qb: function() {
            return this.Bj() ? s : new P((this.Ue + this.Oe) / 2,(this.ee + this.ce) / 2)
        },
        ut: function(a) {
            if (!(a instanceof kb) || Math.max(a.Ue, a.Oe) < Math.min(this.Ue, this.Oe) || Math.min(a.Ue, a.Oe) > Math.max(this.Ue, this.Oe) || Math.max(a.ee, a.ce) < Math.min(this.ee, this.ce) || Math.min(a.ee, a.ce) > Math.max(this.ee, this.ce))
                return s;
            var b = Math.max(this.Ue, a.Ue)
              , c = Math.min(this.Oe, a.Oe)
              , e = Math.max(this.ee, a.ee)
              , a = Math.min(this.ce, a.ce);
            return new kb(new P(b,e),new P(c,a))
        },
        os: function(a) {
            return !(a instanceof P || a instanceof L) || this.Bj() ? t : a.lng >= this.Ue && a.lng <= this.Oe && a.lat >= this.ee && a.lat <= this.ce
        },
        extend: function(a) {
            if (a instanceof P || a instanceof L) {
                var b = a.lng
                  , a = a.lat;
                this.$l || (this.$l = new P(0,0));
                this.Jl || (this.Jl = new P(0,0));
                if (!this.Ue || this.Ue > b)
                    this.$l.lng = this.Ue = b;
                if (!this.Oe || this.Oe < b)
                    this.Jl.lng = this.Oe = b;
                if (!this.ee || this.ee > a)
                    this.$l.lat = this.ee = a;
                if (!this.ce || this.ce < a)
                    this.Jl.lat = this.ce = a
            }
        },
        OF: function() {
            return this.Bj() ? new P(0,0) : new P(Math.abs(this.Oe - this.Ue),Math.abs(this.ce - this.ee))
        }
    });
    function P(a, b) {
        isNaN(a) && (a = Rb(a),
        a = isNaN(a) ? 0 : a);
        eb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Rb(b),
        b = isNaN(b) ? 0 : b);
        eb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    P.nE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    P.prototype.Ub = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function L(a, b) {
        isNaN(a) && (a = Rb(a),
        a = isNaN(a) ? 0 : a);
        eb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Rb(b),
        b = isNaN(b) ? 0 : b);
        eb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.Ze = "inner"
    }
    L.nE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    L.prototype.Ub = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function ed() {}
    ed.prototype.Ig = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    ed.prototype.Fj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function fd() {}
    ;var jb = {
        vK: function(a, b, c) {
            Wa.load("coordtransutils", function() {
                jb.XU(a, b, c)
            }, q)
        },
        uK: function(a, b, c) {
            Wa.load("coordtransutils", function() {
                jb.WU(a, b, c)
            }, q)
        }
    };
    function gd() {
        this.Qa = [];
        var a = this;
        Wa.load("convertor", function() {
            a.bQ()
        })
    }
    x.xa(gd, x.lang.Ja, "Convertor");
    x.extend(gd.prototype, {
        translate: function(a, b, c, e) {
            this.Qa.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    U(gd.prototype, {
        translate: gd.prototype.translate
    });
    function R() {}
    R.prototype = new ed;
    x.extend(R, {
        vP: 6370996.81,
        AG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Mu: [86, 60, 45, 30, 15, 0],
        BP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        xG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        Q3: function(a, b) {
            if (!a || !b)
                return 0;
            var c, e, a = this.Yb(a);
            if (!a)
                return 0;
            c = this.gl(a.lng);
            e = this.gl(a.lat);
            b = this.Yb(b);
            return !b ? 0 : this.Nd(c, this.gl(b.lng), e, this.gl(b.lat))
        },
        Gk: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.LD(a.lng, -180, 180);
            a.lat = this.QD(a.lat, -80, 84);
            b.lng = this.LD(b.lng, -180, 180);
            b.lat = this.QD(b.lat, -80, 84);
            return this.Nd(this.gl(a.lng), this.gl(b.lng), this.gl(a.lat), this.gl(b.lat))
        },
        Yb: function(a) {
            if (a === s || a === l)
                return new L(0,0);
            var b, c;
            b = new L(Math.abs(a.lng),Math.abs(a.lat));
            for (var e = 0; e < this.AG.length; e++)
                if (b.lat >= this.AG[e]) {
                    c = this.BP[e];
                    break
                }
            a = this.wK(a, c);
            return a = new L(a.lng,a.lat)
        },
        Ua: function(a) {
            if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new L(0,0);
            var b, c;
            a.lng = this.LD(a.lng, -180, 180);
            a.lat = this.QD(a.lat, -85, 85);
            b = new L(a.lng,a.lat);
            for (var e = 0; e < this.Mu.length; e++)
                if (b.lat >= this.Mu[e]) {
                    c = this.xG[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.Mu.length; e++)
                    if (b.lat <= -this.Mu[e]) {
                        c = this.xG[e];
                        break
                    }
            a = this.wK(a, c);
            return a = new L(a.lng,a.lat)
        },
        wK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , e = Math.abs(a.lat) / b[9]
                  , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
                  , c = c * (0 > a.lng ? -1 : 1)
                  , e = e * (0 > a.lat ? -1 : 1);
                return new L(c,e)
            }
        },
        Nd: function(a, b, c, e) {
            return this.vP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        gl: function(a) {
            return Math.PI * a / 180
        },
        t6: function(a) {
            return 180 * a / Math.PI
        },
        QD: function(a, b, c) {
            b != s && (a = Math.max(a, b));
            c != s && (a = Math.min(a, c));
            return a
        },
        LD: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    x.extend(R.prototype, {
        ui: function(a) {
            return R.Ua(a)
        },
        Ig: function(a) {
            a = R.Ua(a);
            return new Q(a.lng,a.lat)
        },
        yh: function(a) {
            return R.Yb(a)
        },
        Fj: function(a) {
            a = new L(a.x,a.y);
            a = R.Yb(a);
            return new P(a.lng,a.lat)
        },
        vc: function(a, b, c, e, f) {
            if (a)
                return a = this.ui(a, f),
                b = this.ac(b),
                new Q(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        oZ: function(a, b, c, e) {
            if (a)
                return b = this.ac(b),
                new Q(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        cc: function(a, b, c, e, f) {
            if (a)
                return b = this.ac(b),
                this.yh(new L(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
        },
        ac: function(a) {
            return Math.pow(2, 18 - a)
        },
        ZN: da("Ma")
    });
    function mb() {
        this.mj = "bj"
    }
    mb.prototype = new R;
    x.extend(mb.prototype, {
        ui: function(a, b) {
            return this.NQ(b, R.Ua(a))
        },
        yh: function(a, b) {
            return R.Yb(this.OQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , e = R.Ua(a);
            Wa.load("coordtrans", function() {
                var a = fd.OD(c.mj || "bj", e)
                  , a = new Q(a.x,a.y);
                b && b(a)
            }, q)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , e = new P(a.x,a.y);
            Wa.load("coordtrans", function() {
                var a = fd.MD(c.mj || "bj", e)
                  , a = new P(a.lng,a.lat)
                  , a = R.Yb(a);
                b && b(a)
            }, q)
        },
        NQ: function(a, b) {
            if (Wa.qb("coordtrans").Te == Wa.Nj.qq) {
                var c = fd.OD(a || "bj", b);
                return new P(c.x,c.y)
            }
            Wa.load("coordtrans", ca());
            return new P(0,0)
        },
        OQ: function(a, b) {
            if (Wa.qb("coordtrans").Te == Wa.Nj.qq) {
                var c = fd.MD(a || "bj", b);
                return new P(c.lng,c.lat)
            }
            Wa.load("coordtrans", ca());
            return new P(0,0)
        },
        ac: function(a) {
            return Math.pow(2, 20 - a)
        },
        ZN: da("Ma")
    });
    function hd() {
        this.Nb = "overlay"
    }
    x.lang.xa(hd, x.lang.Ja, "Overlay");
    hd.Mk = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    }
    ;
    x.extend(hd.prototype, {
        Ne: function(a) {
            if (!this.ca && cb(this.initialize) && (this.ca = this.initialize(a)))
                this.ca.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
            this.ca = s;
            this.dispatchEvent(new O("onremove"))
        },
        aa: function() {
            this.ca && x.U.aa(this.ca)
        },
        show: function() {
            this.ca && x.U.show(this.ca)
        },
        Uc: function() {
            return !this.ca || "none" == this.ca.style.display || "hidden" == this.ca.style.visibility ? t : q
        }
    });
    A.ef(function(a) {
        function b(a, b) {
            var c = F("div")
              , i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.ba;
        c.Wc = a.Wc = b(a.platform, 200);
        a.de.qD = b(c.Wc, 800);
        a.de.FE = b(c.Wc, 700);
        a.de.gL = b(c.Wc, 600);
        a.de.xE = b(c.Wc, 500);
        a.de.SM = b(c.Wc, 400);
        a.de.TM = b(c.Wc, 300);
        a.de.aP = b(c.Wc, 201);
        a.de.Ht = b(c.Wc, 200)
    });
    function lb() {
        x.lang.Ja.call(this);
        hd.call(this);
        this.map = s;
        this.Xa = q;
        this.Fb = s;
        this.mH = 0
    }
    x.lang.xa(lb, hd, "OverlayInternal");
    x.extend(lb.prototype, {
        initialize: function(a) {
            this.map = a;
            x.lang.Ja.call(this, this.da);
            return s
        },
        ux: u("map"),
        draw: ca(),
        Pj: ca(),
        remove: function() {
            this.map = s;
            x.lang.$w(this.da);
            hd.prototype.remove.call(this)
        },
        aa: function() {
            this.Xa !== t && (this.Xa = t)
        },
        show: function() {
            this.Xa !== q && (this.Xa = q)
        },
        Uc: function() {
            return !this.ca ? t : !!this.Xa
        },
        Sa: u("ca"),
        YN: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.K[b] = a[b]
        },
        dq: da("zIndex"),
        rj: function() {
            this.K.rj = q
        },
        qW: function() {
            this.K.rj = t
        },
        em: da("og"),
        Rp: function() {
            this.og = s
        }
    });
    function id() {
        this.map = s;
        this.ua = {};
        this.Ke = []
    }
    A.ef(function(a) {
        var b = new id;
        b.map = a;
        a.ua = b.ua;
        a.Ke = b.Ke;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        x.ga.oa && 8 > x.ga.oa || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof lb)
                b.ua[a.da] || (b.ua[a.da] = a);
            else {
                for (var e = t, f = 0, g = b.Ke.length; f < g; f++)
                    if (b.Ke[f] === a) {
                        e = q;
                        break
                    }
                e || b.Ke.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof lb)
                delete b.ua[a.da];
            else
                for (var e = 0, f = b.Ke.length; e < f; e++)
                    if (b.Ke[e] === a) {
                        b.Ke.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Mc();
            for (var a in b.ua)
                b.ua[a].K.rj && (b.ua[a].remove(),
                delete b.ua[a]);
            a = 0;
            for (var e = b.Ke.length; a < e; a++)
                b.Ke[a].enableMassClear !== t && (b.Ke[a].remove(),
                b.Ke[a] = s,
                b.Ke.splice(a, 1),
                a--,
                e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Fb;
            a && (x.U.aa(a.Cc),
            x.U.aa(a.dc))
        });
        a.addEventListener("movestart", function() {
            this.qh() && this.qh().cJ()
        });
        a.addEventListener("moveend", function() {
            this.qh() && this.qh().RI()
        })
    });
    id.prototype.draw = function(a) {
        if (A.uq) {
            var b = A.uq.Ys(this.map);
            "canvas" === b.Nb && b.canvas && b.IQ(b.canvas.getContext("2d"))
        }
        for (var c in this.ua)
            this.ua[c].draw(a);
        x.oc.Pb(this.Ke, function(a) {
            a.draw()
        });
        this.map.ba.wb && this.map.ba.wb.va();
        A.uq && b.sF()
    }
    ;
    function jd(a) {
        lb.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            tc: a.strokeWeight || 5,
            Ad: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            rj: a.enableMassClear === t ? t : q,
            Jk: s,
            Em: s,
            ze: a.enableEditing === q ? q : t,
            XM: 5,
            T0: t,
            nf: a.enableClicking === t ? t : q,
            ri: a.icons && 0 < a.icons.length ? a.icons : s,
            mX: a.geodesic === q ? q : t,
            BE: a.linkRight === q ? q : t
        };
        0 >= this.K.tc && (this.K.tc = 5);
        if (0 > this.K.Ad || 1 < this.K.Ad)
            this.K.Ad = 0.65;
        if (0 > this.K.Ag || 1 < this.K.Ag)
            this.K.Ag = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ca = s;
        this.Uu = new kb(0,0);
        this.lf = [];
        this.uc = [];
        this.Ya = {}
    }
    x.lang.xa(jd, lb, "Graph");
    jd.px = function(a) {
        var b = [];
        if (!a)
            return b;
        eb(a) && x.oc.Pb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new P(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    jd.QE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(jd.prototype, {
        initialize: function(a) {
            this.map = a;
            return s
        },
        draw: ca(),
        Nr: function(a) {
            this.lf.length = 0;
            this.ja = jd.px(a).slice(0);
            this.Ih()
        },
        Td: function(a) {
            this.Nr(a)
        },
        Ih: function() {
            if (this.ja) {
                var a = this;
                a.Uu = new kb;
                x.oc.Pb(this.ja, function(b) {
                    a.Uu.extend(b)
                })
            }
        },
        af: u("ja"),
        ln: function(a, b) {
            b && this.ja[a] && (this.lf.length = 0,
            this.ja[a] = new P(b.lng,b.lat),
            this.Ih())
        },
        setStrokeColor: function(a) {
            this.K.strokeColor = a
        },
        dY: function() {
            return this.K.strokeColor
        },
        cq: function(a) {
            0 < a && (this.K.tc = a)
        },
        KL: function() {
            return this.K.tc
        },
        aq: function(a) {
            a == l || (1 < a || 0 > a) || (this.K.Ad = a)
        },
        eY: function() {
            return this.K.Ad
        },
        au: function(a) {
            1 < a || 0 > a || (this.K.Ag = a)
        },
        zX: function() {
            return this.K.Ag
        },
        bq: function(a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        JL: function() {
            return this.K.strokeStyle
        },
        setFillColor: function(a) {
            this.K.fillColor = a || ""
        },
        yX: function() {
            return this.K.fillColor
        },
        le: u("Uu"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.xv);
            lb.prototype.remove.call(this);
            this.lf.length = 0
        },
        ze: function() {
            if (!(2 > this.ja.length)) {
                this.K.ze = q;
                var a = this;
                Wa.load("poly", function() {
                    a.uk()
                }, q)
            }
        },
        pW: function() {
            this.K.ze = t;
            var a = this;
            Wa.load("poly", function() {
                a.gi()
            }, q)
        },
        vX: function() {
            return this.K.ze
        },
        CX: function() {
            for (var a = [], b = 0; b < this.ja.length - 1; b++)
                var c = this.qV(this.ja[b], this.ja[b + 1])
                  , a = a.concat(c);
            return a = a.concat(this.ja[this.ja.length - 1])
        },
        qV: function(a, b) {
            if (a.Ub(b))
                return [a];
            var c = R.Nd(S(a.lng), S(a.lat), S(b.lng), S(b.lat))
              , c = R.Gk(a, b);
            if (25E4 > c)
                return [a];
            var e = []
              , c = Math.round(c / 15E4)
              , f = this.gK(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.hK(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        hK: function(a, b, c, e) {
            var f = S(a.lat)
              , g = S(b.lat)
              , a = S(a.lng)
              , i = S(b.lng)
              , b = Math.sin((1 - c) * e) / Math.sin(e)
              , c = Math.sin(c * e) / Math.sin(e)
              , e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i)
              , a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new P(180 * (Math.atan2(a, e) / Math.PI),180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        gK: function(a, b) {
            var c = S(a.lat)
              , e = S(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(S(b.lng) - S(a.lng))))
        }
    });
    function kd(a) {
        lb.call(this);
        this.ca = this.map = s;
        this.K = {
            width: 0,
            height: 0,
            Ga: new M(0,0),
            opacity: 1,
            background: "transparent",
            Xx: 1,
            FM: "#000",
            fZ: "solid",
            point: s
        };
        this.YN(a);
        this.point = this.K.point
    }
    x.lang.xa(kd, lb, "Division");
    x.extend(kd.prototype, {
        Pj: function() {
            var a = this.K
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Xx + "px " + a.fZ + " " + a.FM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ca = Hb(this.map.Wf().FE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Pj();
            this.ca && x.V(this.ca, K() ? "touchstart" : "mousedown", function(a) {
                oa(a)
            });
            return this.ca
        },
        draw: function() {
            var a = this.map.df(this.K.point);
            this.K.Ga = new M(-Math.round(this.K.width / 2) - Math.round(this.K.Xx),-Math.round(this.K.height / 2) - Math.round(this.K.Xx));
            this.ca.style.left = a.x + this.K.Ga.width + "px";
            this.ca.style.top = a.y + this.K.Ga.height + "px"
        },
        ma: function() {
            return this.K.point
        },
        d2: function() {
            return this.map.po(this.ma())
        },
        va: function(a) {
            this.K.point = a;
            this.draw()
        },
        E_: function(a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ca && (this.ca.style.width = this.K.width + "px",
            this.ca.style.height = this.K.height + "px",
            this.draw())
        }
    });
    function ld(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new M(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new M(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    x.extend(ld.prototype, {
        $N: function(a) {
            a && (this.imageUrl = a)
        },
        V_: function(a) {
            a && (this.printImageUrl = a)
        },
        Ie: function(a) {
            a && (this.size = new M(a.width,a.height))
        },
        wc: function(a) {
            a && (this.anchor = new M(a.width,a.height))
        },
        bu: function(a) {
            a && (this.imageOffset = new M(a.width,a.height))
        },
        J_: function(a) {
            a && (this.infoWindowAnchor = new M(a.width,a.height))
        },
        G_: function(a) {
            a && (this.imageSize = new M(a.width,a.height))
        },
        toString: fa("Icon")
    });
    function md(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new M(0,0),
                fillColor: b.fillColor || "#000",
                Ag: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                Ad: b.strokeOpacity || 1,
                tc: b.strokeWeight
            };
            this.Nb = "number" === typeof a ? a : "UserDefined";
            this.Pi = this.style.anchor;
            this.vr = new M(0,0);
            this.anchor = s;
            this.kB = a;
            var c = this;
            Wa.load("symbol", function() {
                c.Nn()
            }, q)
        }
    }
    x.extend(md.prototype, {
        setPath: da("kB"),
        setAnchor: function(a) {
            this.Pi = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.tc = a
        },
        setStrokeColor: function(a) {
            a = x.ls.tC(a, this.style.Ad);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.Ad = a
        },
        setFillOpacity: function(a) {
            this.style.Ag = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function nd(a, b, c, e) {
        a && (this.Qv = {},
        this.eL = e ? !!e : t,
        this.ad = [],
        this.m0 = a instanceof md ? a : s,
        this.HI = b === l ? q : !!(b.indexOf("%") + 1),
        this.kk = isNaN(parseFloat(b)) ? 1 : this.HI ? parseFloat(b) / 100 : parseFloat(b),
        this.II = !!(c.indexOf("%") + 1),
        this.repeat = c != l ? this.II ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function od(a, b) {
        x.lang.Ja.call(this);
        this.content = a;
        this.map = s;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Ga: b.offset || new M(0,0),
            title: b.title || "",
            HE: b.maxContent || "",
            oh: b.enableMaximize || t,
            Ns: b.enableAutoPan === t ? t : q,
            $C: b.enableCloseOnClick === t ? t : q,
            margin: b.margin || [10, 10, 40, 10],
            pC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            zY: t,
            EZ: b.onClosing || fa(q),
            YK: t,
            eD: b.enableParano === q ? q : t,
            message: b.message,
            hD: b.enableSearchTool === q ? q : t,
            Gx: b.headerContent || "",
            aD: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220),
        730 < this.K.width))
            this.K.width = 730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60),
        650 < this.K.height))
            this.K.height = 650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220),
        730 < this.K.maxWidth))
            this.K.maxWidth = 730;
        this.me = t;
        this.Ki = J.ta;
        this.xb = s;
        var c = this;
        Wa.load("infowindow", function() {
            c.ob()
        })
    }
    x.lang.xa(od, x.lang.Ja, "InfoWindow");
    x.extend(od.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.K.height = a)
        },
        dO: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.maxWidth = a)
        },
        Hc: function(a) {
            this.K.title = a
        },
        getTitle: function() {
            return this.K.title
        },
        Pc: da("content"),
        Fk: u("content"),
        du: function(a) {
            this.K.HE = a + ""
        },
        re: ca(),
        Ns: function() {
            this.K.Ns = q
        },
        disableAutoPan: function() {
            this.K.Ns = t
        },
        enableCloseOnClick: function() {
            this.K.$C = q
        },
        disableCloseOnClick: function() {
            this.K.$C = t
        },
        oh: function() {
            this.K.oh = q
        },
        bx: function() {
            this.K.oh = t
        },
        show: function() {
            this.Xa = q
        },
        aa: function() {
            this.Xa = t
        },
        close: function() {
            this.aa()
        },
        ay: function() {
            this.me = q
        },
        restore: function() {
            this.me = t
        },
        Uc: function() {
            return this.eb()
        },
        eb: fa(t),
        ma: function() {
            if (this.xb && this.xb.ma)
                return this.xb.ma()
        },
        tj: function() {
            return this.K.Ga
        }
    });
    Pa.prototype.Vc = function(a, b) {
        if (a instanceof od && (b instanceof P || b instanceof L)) {
            var c = this.ba;
            c.Qm ? c.Qm.va(b) : (c.Qm = new W(b,{
                icon: new ld(J.ta + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new M(0,0),
                clickable: t
            }),
            c.Qm.IR = 1);
            this.Ra(c.Qm);
            c.Qm.Vc(a)
        }
    }
    ;
    Pa.prototype.Mc = function() {
        var a = this.ba.wb || this.ba.Al;
        a && a.xb && a.xb.Mc()
    }
    ;
    lb.prototype.Vc = function(a) {
        this.map && (this.map.Mc(),
        a.Xa = q,
        this.map.ba.Al = a,
        a.xb = this,
        x.lang.Ja.call(a, a.da))
    }
    ;
    lb.prototype.Mc = function() {
        this.map && this.map.ba.Al && (this.map.ba.Al.Xa = t,
        x.lang.$w(this.map.ba.Al.da),
        this.map.ba.Al = s)
    }
    ;
    function pd(a, b) {
        lb.call(this);
        this.content = a;
        this.ca = this.map = s;
        b = b || {};
        this.K = {
            width: 0,
            Ga: b.offset || new M(0,0),
            iq: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + J.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || s,
            rj: b.enableMassClear === t ? t : q,
            nf: q
        };
        0 > this.K.width && (this.K.width = 0);
        Nb(b.enableClicking) && (this.K.nf = b.enableClicking);
        this.point = this.K.position;
        var c = this;
        Wa.load("marker", function() {
            c.ob()
        })
    }
    x.lang.xa(pd, lb, "Label");
    x.extend(pd.prototype, {
        ma: function() {
            return this.jo ? this.jo.ma() : this.map ? fb(this.point, this.map.M.Ma) : this.point
        },
        ck: function() {
            return this.jo ? this.jo.ck() : this.point
        },
        va: function(a) {
            if ((a instanceof P || a instanceof L) && !this.vx())
                this.point = this.K.position = new P(a.lng,a.lat)
        },
        Pc: da("content"),
        rF: function(a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Sd: function(a) {
            a instanceof M && (this.K.Ga = new M(a.width,a.height))
        },
        tj: function() {
            return this.K.Ga
        },
        Ud: function(a) {
            a = a || {};
            this.K.iq = x.extend(this.K.iq, a)
        },
        Fi: function(a) {
            return this.Ud(a)
        },
        Hc: function(a) {
            this.K.title = a || ""
        },
        getTitle: function() {
            return this.K.title
        },
        cO: function(a) {
            this.point = (this.jo = a) ? this.K.position = a.ck() : this.K.position = s
        },
        vx: function() {
            return this.jo || s
        },
        Fk: u("content")
    });
    function qd(a, b) {
        if (0 !== arguments.length) {
            lb.apply(this, arguments);
            b = b || {};
            this.K = {
                jb: a,
                opacity: b.opacity || 1,
                zp: b.imageURL || "",
                Es: b.displayOnMinLevel || 1,
                rj: b.enableMassClear === t ? t : q,
                Ds: b.displayOnMaxLevel || 19,
                g0: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            var c = this;
            Wa.load("groundoverlay", function() {
                c.ob()
            })
        }
    }
    x.lang.xa(qd, lb, "GroundOverlay");
    x.extend(qd.prototype, {
        setBounds: function(a) {
            this.K.jb = a
        },
        getBounds: function() {
            return this.K.jb
        },
        setOpacity: function(a) {
            this.K.opacity = a
        },
        getOpacity: function() {
            return this.K.opacity
        },
        setImageURL: function(a) {
            this.K.zp = a
        },
        getImageURL: function() {
            return this.K.zp
        },
        setDisplayOnMinLevel: function(a) {
            this.K.Es = a
        },
        getDisplayOnMinLevel: function() {
            return this.K.Es
        },
        setDisplayOnMaxLevel: function(a) {
            this.K.Ds = a
        },
        getDisplayOnMaxLevel: function() {
            return this.K.Ds
        }
    });
    var rd = 3
      , sd = 4;
    function td() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function ud(a, b) {
        var c = this;
        td() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        lb.apply(c, arguments),
        c.ia = {
            ja: a
        },
        c.K = {
            shape: b.shape || rd,
            size: b.size || sd,
            color: b.color || "#fa937e",
            rj: q
        },
        this.hB = [],
        this.ue = [],
        Wa.load("pointcollection", function() {
            for (var a = 0, b; b = c.hB[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.ue[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    x.lang.xa(ud, lb, "PointCollection");
    x.extend(ud.prototype, {
        initialize: function(a) {
            this.hB && this.hB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.ue && this.ue.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.ue && this.ue.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.ue && this.ue.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.ue && this.ue.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var vd = new ld(J.ta + "marker_red_sprite.png",new M(19,25),{
        anchor: new M(10,25),
        infoWindowAnchor: new M(10,0)
    })
      , wd = new ld(J.ta + "marker_red_sprite.png",new M(20,11),{
        anchor: new M(6,11),
        imageOffset: new M(-19,-13)
    });
    function W(a, b) {
        lb.call(this);
        b = b || {};
        this.point = a;
        this.Ma = (this.Fq = this.map = s) ? this.map.M.Ma : 5;
        this.K = {
            Ga: b.offset || new M(0,0),
            Ce: b.icon || vd,
            $k: wd,
            title: b.title || "",
            label: s,
            bK: b.baseZIndex || 0,
            nf: q,
            T6: t,
            tE: t,
            rj: b.enableMassClear === t ? t : q,
            jc: t,
            HN: b.raiseOnDrag === q ? q : t,
            ON: t,
            Ld: b.draggingCursor || J.Ld,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.K.$k = s);
        b.enableDragging && (this.K.jc = b.enableDragging);
        Nb(b.enableClicking) && (this.K.nf = b.enableClicking);
        var c = this;
        Wa.load("marker", function() {
            c.ob()
        })
    }
    W.Pu = hd.Mk(-90) + 1E6;
    W.rG = W.Pu + 1E6;
    x.lang.xa(W, lb, "Marker");
    x.extend(W.prototype, {
        Wb: function(a) {
            if (a instanceof ld || a instanceof md)
                this.K.Ce = a
        },
        mp: function() {
            return this.K.Ce
        },
        Hy: function(a) {
            a instanceof ld && (this.K.$k = a)
        },
        getShadow: function() {
            return this.K.$k
        },
        Gj: function(a) {
            this.K.label = a || s
        },
        Zs: function() {
            return this.K.label
        },
        jc: function() {
            this.K.jc = q
        },
        Cs: function() {
            this.K.jc = t
        },
        ck: u("point"),
        ma: function() {
            return this.point instanceof P || this.point instanceof L ? this.map ? fb(this.point, this.map.M.Ma) : new P(this.point.lng,this.point.lat) : this.point
        },
        va: function(a) {
            if (a instanceof P || a instanceof L)
                this.point = this.map ? ab(a, this.map.M.Ma) : new L(a.lng,a.lat)
        },
        Gi: function(a, b) {
            this.K.tE = !!a;
            a && (this.PG = b || 0)
        },
        Hc: function(a) {
            this.K.title = a + ""
        },
        getTitle: function() {
            return this.K.title
        },
        Sd: function(a) {
            a instanceof M && (this.K.Ga = a)
        },
        tj: function() {
            return this.K.Ga
        },
        gn: da("Fq"),
        Fy: function(a) {
            this.K.rotation = a
        },
        HL: function() {
            return this.K.rotation
        }
    });
    function xd(a) {
        this.options = a || {};
        this.IZ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.NV = this.options.contextType || "2d"
    }
    xd.prototype = new hd;
    xd.prototype.initialize = function(a) {
        this.P = a;
        var b = this.canvas = document.createElement("canvas")
          , c = this.canvas.getContext(this.NV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        yd(this);
        zd(c);
        a.getPanes()[this.IZ].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            yd(e);
            zd(c);
            e.ob()
        });
        return this.canvas
    }
    ;
    function yd(a) {
        var b = a.P.Cb()
          , a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function zd(a) {
        var b = (window.devicePixelRatio || 1) / (a.$U || a.O6 || a.l5 || a.m5 || a.q5 || a.$U || 1)
          , c = a.canvas.width
          , e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    xd.prototype.draw = function() {
        var a = this
          , b = arguments;
        clearTimeout(a.v0);
        a.v0 = setTimeout(function() {
            a.ob.apply(a, b)
        }, 15)
    }
    ;
    ga = xd.prototype;
    ga.ob = function() {
        var a = this.P;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    }
    ;
    ga.Sa = u("canvas");
    ga.show = function() {
        this.canvas || this.P.Ra(this);
        this.canvas.style.display = "block"
    }
    ;
    ga.aa = function() {
        this.canvas.style.display = "none"
    }
    ;
    ga.dq = function(a) {
        this.canvas.style.zIndex = a
    }
    ;
    ga.Mk = u("zIndex");
    function Ad(a, b) {
        jd.call(this, b);
        b = b || {};
        this.K.Ag = b.fillOpacity ? b.fillOpacity : 0.65;
        this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.Td(a);
        var c = this;
        Wa.load("poly", function() {
            c.ob()
        })
    }
    x.lang.xa(Ad, jd, "Polygon");
    x.extend(Ad.prototype, {
        Td: function(a, b) {
            this.Co = jd.px(a).slice(0);
            var c = jd.px(a).slice(0);
            1 < c.length && c.push(new P(c[0].lng,c[0].lat));
            jd.prototype.Td.call(this, c, b)
        },
        ln: function(a, b) {
            this.Co[a] && (this.Co[a] = new P(b.lng,b.lat),
            this.ja[a] = new P(b.lng,b.lat),
            0 == a && !this.ja[0].Ub(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new P(b.lng,b.lat)),
            this.Ih())
        },
        af: function() {
            var a = this.Co;
            0 == a.length && (a = this.ja);
            return a
        }
    });
    function Bd(a, b) {
        jd.call(this, b);
        this.Nr(a);
        var c = this;
        Wa.load("poly", function() {
            c.ob()
        })
    }
    x.lang.xa(Bd, jd, "Polyline");
    function Cd(a, b, c) {
        this.point = a;
        this.Fa = Math.abs(b);
        Ad.call(this, [], c)
    }
    Cd.QE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.xa(Cd, Ad, "Circle");
    x.extend(Cd.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ja = this.rv(this.point, this.Fa);
            this.Ih();
            return s
        },
        Qb: function() {
            return this.map ? fb(this.point, this.map.M.Ma) : this.point
        },
        ov: u("point"),
        zf: function(a) {
            a && (this.point = a)
        },
        FL: u("Fa"),
        Af: function(a) {
            this.Fa = Math.abs(a)
        },
        rv: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i
                  , m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k))
                  , k = new P(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new P(e.lng,e.lat));
            return c
        }
    });
    var Dd = {};
    function Ed(a) {
        this.map = a;
        this.Dj = [];
        this.dg = [];
        this.Rg = [];
        this.oV = 300;
        this.WE = 0;
        this.Jg = {};
        this.kj = {};
        this.Qk = 0;
        this.mE = q;
        this.dW = {};
        this.io = this.Pq(1);
        this.ug = this.Pq(2);
        this.Kl = this.Pq(3);
        this.lg = this.Pq(4);
        a.platform.appendChild(this.io);
        a.platform.appendChild(this.ug);
        a.platform.appendChild(this.Kl);
        a.platform.appendChild(this.lg);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = R.Ua(new L(180,0)).lng
          , c = c - a
          , b = -3 * b
          , e = R.Ua(new L(-180,0)).lng;
        this.Fv = a;
        this.RA = e;
        this.OA = c + (e - b);
        this.lI = a - e
    }
    A.ef(function(a) {
        var b = new Ed(a);
        b.za();
        a.ff = b
    });
    x.extend(Ed.prototype, {
        za: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.Hp()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Ve(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.cg(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Pg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Rc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.cu(b.target);
                a.ag(q)
            });
            b.addEventListener("initindoorlayer", function(b) {
                a.iE(b)
            })
        },
        Hp: function() {
            var a = this;
            if (x.ga.oa)
                try {
                    document.execCommand("BackgroundImageCache", t, q)
                } catch (b) {}
            this.loaded || a.Nx();
            a.ag();
            this.loaded || (this.loaded = q,
            Wa.load("tile", function() {
                a.cQ()
            }))
        },
        iE: function(a) {
            this.Cu = new Fd(this);
            this.Cu.Ve(new Gd(this.map,this.Cu,a.bf))
        },
        Nx: function() {
            for (var a = this.map.ya().kf, b = 0; b < a.length; b++) {
                var c = new Hd;
                x.extend(c, a[b]);
                this.Dj.push(c);
                c.za(this.map, this.io)
            }
            this.cu()
        },
        Pq: function(a) {
            var b = F("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        Ff: function() {
            this.Qk--;
            var a = this;
            this.mE && (this.map.dispatchEvent(new O("onfirsttileloaded")),
            this.mE = t);
            0 == this.Qk && (this.Ui && (clearTimeout(this.Ui),
            this.Ui = s),
            this.Ui = setTimeout(function() {
                if (a.Qk == 0) {
                    a.map.dispatchEvent(new O("ontilesloaded"));
                    a.mE = q
                }
                a.Ui = s
            }, 80))
        },
        VD: function(a, b) {
            return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Jx: function(a) {
            var b = a.Hb;
            b && Gb(b) && b.parentNode.removeChild(b);
            delete this.Jg[a.name];
            a.loaded || (Id(a),
            a.Hb = s,
            a.Rm = s)
        },
        PL: function(a, b, c) {
            var e = this.map
              , f = e.ya()
              , g = e.Za
              , i = e.Vb
              , k = f.ac(g)
              , m = this.sX()
              , n = m[0]
              , o = m[1]
              , p = m[2]
              , v = m[3]
              , w = m[4]
              , c = "undefined" != typeof c ? c : 0
              , f = f.Od()
              , m = e.da.replace(/^TANGRAM_/, "");
            for (this.Je ? this.Je.length = 0 : this.Je = []; n < p; n++)
                for (var y = o; y < v; y++) {
                    var z = n
                      , B = y;
                    this.Je.push([z, B]);
                    z = m + "_" + b + "_" + z + "_" + B + "_" + g;
                    this.dW[z] = z
                }
            this.Je.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.We ? this.We.length = 0 : this.We = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++)
                y = a.childNodes[n],
                y.nr = t,
                this.We.push(y);
            if (n = this.Vm)
                for (var D in n)
                    delete n[D];
            else
                this.Vm = {};
            this.Xe ? this.Xe.length = 0 : this.Xe = [];
            n = 0;
            for (e = this.Je.length; n < e; n++) {
                D = this.Je[n][0];
                k = this.Je[n][1];
                y = 0;
                for (o = this.We.length; y < o; y++)
                    if (p = this.We[y],
                    p.id == m + "_" + b + "_" + D + "_" + k + "_" + g) {
                        p.nr = q;
                        this.Vm[p.id] = p;
                        break
                    }
            }
            n = 0;
            for (e = this.We.length; n < e; n++)
                p = this.We[n],
                p.nr || this.Xe.push(p);
            this.LF = [];
            y = (f + c) * this.map.M.devicePixelRatio;
            n = 0;
            for (e = this.Je.length; n < e; n++)
                D = this.Je[n][0],
                k = this.Je[n][1],
                v = D * f + i[0] - c / 2,
                w = (-1 - k) * f + i[1] - c / 2,
                z = m + "_" + b + "_" + D + "_" + k + "_" + g,
                o = this.Vm[z],
                p = s,
                o ? (p = o.style,
                p.left = v + "px",
                p.top = w + "px",
                o.Vn || this.LF.push([D, k, o])) : (0 < this.Xe.length ? (o = this.Xe.shift(),
                o.getContext("2d").clearRect(-c / 2, -c / 2, y, y),
                p = o.style) : (o = document.createElement("canvas"),
                p = o.style,
                p.position = "absolute",
                p.width = f + c + "px",
                p.height = f + c + "px",
                this.ZY() && (p.WebkitTransform = "scale(1.001)"),
                o.setAttribute("width", y),
                o.setAttribute("height", y),
                a.appendChild(o)),
                o.id = z,
                p.left = v + "px",
                p.top = w + "px",
                -1 < z.indexOf("bg") && (v = "#F3F1EC",
                this.map.M.YU && (v = this.map.M.YU),
                p.background = v ? v : ""),
                this.LF.push([D, k, o])),
                o.style.visibility = "";
            n = 0;
            for (e = this.Xe.length; n < e; n++)
                this.Xe[n].style.visibility = "hidden";
            return this.LF
        },
        ZY: function() {
            return /M040/i.test(navigator.userAgent)
        },
        sX: function() {
            var a = this.map
              , b = a.ya()
              , c = b.UL(a.Za)
              , e = a.Vb
              , f = Math.ceil(e.lng / c)
              , g = Math.ceil(e.lat / c)
              , b = b.Od()
              , c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        a0: function(a, b, c, e) {
            var f = this;
            f.S2 = b;
            var g = this.map.ya()
              , i = f.VD(a, c)
              , k = g.Od()
              , b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]]
              , m = this.Jg[i];
            if (this.map.ya() !== db && this.map.ya() !== Va) {
                var n = this.is(a[0], a[2]).offsetX;
                b[0] += n;
                b.k2 = n
            }
            m && m.Hb ? (Eb(m.Hb, b),
            e && (e = new Q(a[0],a[1]),
            g = this.map.M.Ee ? this.map.M.Ee.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Jd(m, e)),
            m.loaded ? this.Ff() : Kd(m, function() {
                f.Ff()
            })) : (m = this.kj[i]) && m.Hb ? (c.Kb.insertBefore(m.Hb, c.Kb.lastChild),
            this.Jg[i] = m,
            Eb(m.Hb, b),
            e && (e = new Q(a[0],a[1]),
            g = this.map.M.Ee ? this.map.M.Ee.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            Jd(m, e)),
            m.loaded ? this.Ff() : Kd(m, function() {
                f.Ff()
            })) : (m = k * Math.pow(2, g.$e() - a[2]),
            new L(a[0] * m,a[1] * m),
            e = new Q(a[0],a[1]),
            g = this.map.M.Ee ? this.map.M.Ee.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m = new Ld(this,e,b,a,c),
            Kd(m, function() {
                f.Ff()
            }),
            m.ho(),
            this.Jg[i] = m)
        },
        Ff: function() {
            this.Qk--;
            var a = this;
            0 == this.Qk && (this.Ui && (clearTimeout(this.Ui),
            this.Ui = s),
            this.Ui = setTimeout(function() {
                if (a.Qk == 0) {
                    a.map.dispatchEvent(new O("ontilesloaded"));
                    if (ya) {
                        if (va && wa && xa) {
                            var b = hb()
                              , c = a.map.Cb();
                            setTimeout(function() {
                                Ua(5030, {
                                    load_script_time: wa - va,
                                    load_tiles_time: b - xa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            A.Dq("cus.fire", "time", {
                                z_imgfirstloaded: b - xa
                            })
                        }
                        ya = t
                    }
                }
                a.Ui = s
            }, 80))
        },
        VD: function(a, b) {
            return this.map.ya() === Ta ? "TILE-" + b.da + "-" + this.map.Ow + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Jx: function(a) {
            var b = a.Hb;
            b && (Md(b),
            Gb(b) && b.parentNode.removeChild(b));
            delete this.Jg[a.name];
            a.loaded || (Md(b),
            Id(a),
            a.Hb = s,
            a.Rm = s)
        },
        is: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
                a -= e,
                c -= this.OA;
            for (; a < g; )
                a += e,
                c += this.OA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                lj: a
            }
        },
        sV: function(a) {
            for (var b = a.lng; b > this.Fv; )
                b -= this.lI;
            for (; b < this.RA; )
                b += this.lI;
            a.lng = b;
            return a
        },
        tV: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.Fv / c), f = Math.floor(this.RA / c), c = Math.floor(this.OA / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i]
                  , m = k[0]
                  , k = k[1];
                if (m >= e) {
                    var m = m + c
                      , n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = q,
                    g.push([m, k]))
                } else
                    m <= f && (m -= c,
                    n = "id_" + m + "_" + k + "_" + b,
                    a[n] || (a[n] = q,
                    g.push([m, k])))
            }
            for (i = 0; i < g.length; i++)
                a.push(g[i]);
            return a
        },
        ag: function(a) {
            if (!this.map.M.zg) {
                var b = this;
                if (b.map.ya() == Ta)
                    Wa.load("coordtrans", function() {
                        b.map.Ob || (b.map.Ob = Ta.Ek(b.map.lh),
                        b.map.Ow = Ta.rL(b.map.Ob));
                        b.nI()
                    }, q);
                else {
                    if (a && a)
                        for (var c in this.kj)
                            delete this.kj[c];
                    b.nI(a)
                }
            }
        },
        nI: function(a) {
            var b = this.Dj.concat(this.dg)
              , c = b.length
              , e = this.map
              , f = e.ya()
              , g = e.Vb
              , i = e.width
              , i = e.ya().ac(e.Za) * i
              , k = g.lng + i / 2
              , i = this.PY(g.lng - i / 2, k);
            this.map.ya() !== db && this.map.ya() !== Va && (g = this.sV(g));
            for (var m = 0; m < c; m++) {
                var n = b[m];
                if (n.kc && e.Za < n.kc)
                    break;
                if (n.Jw) {
                    k = this.Kb = n.Kb;
                    if (a) {
                        var o = k;
                        if (o && o.childNodes)
                            for (var p = o.childNodes.length, v = p - 1; 0 <= v; v--)
                                p = o.childNodes[v],
                                o.removeChild(p),
                                p = s
                    }
                    if (this.map.Wd()) {
                        this.ug.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new O("vectorchanged"), {
                            isvector: q
                        });
                        continue
                    } else
                        k.style.display = "block",
                        this.ug.style.display = "none",
                        this.map.dispatchEvent(new O("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!n.j2 && !(n.Tx && !this.map.Wd() || n.sM && this.map.Wd())) {
                    e = this.map;
                    f = e.ya();
                    p = f.vj();
                    k = e.Za;
                    g = e.Vb;
                    f == Ta && g.Ub(new L(0,0)) && (g = e.Vb = p.ui(e.he, e.Ob));
                    var w = f.ac(k)
                      , p = f.UL(k)
                      , o = Math.ceil(g.lng / p)
                      , y = Math.ceil(g.lat / p)
                      , z = f.Od()
                      , p = [o, y, (g.lng - o * p) / p * z, (g.lat - y * p) / p * z]
                      , y = i ? 1.5 * (e.width / 2) : e.width / 2
                      , v = p[0] - Math.ceil((y - p[2]) / z)
                      , o = p[1] - Math.ceil((e.height / 2 - p[3]) / z)
                      , y = p[0] + Math.ceil((y + p[2]) / z)
                      , B = 0;
                    f === Ta && 15 == e.la() && (B = 1);
                    f = p[1] + Math.ceil((e.height / 2 + p[3]) / z) + B;
                    this.XJ = new L(g.lng,g.lat);
                    var D = this.Jg, z = -this.XJ.lng / w, B = this.XJ.lat / w, g = [Math.ceil(z), Math.ceil(B)], w = e.la(), G;
                    for (G in D) {
                        var E = D[G]
                          , C = E.info;
                        (C[2] != w || C[2] == w && (v > C[0] || y <= C[0] || o > C[1] || f <= C[1])) && this.Jx(E)
                    }
                    D = -e.offsetX + e.width / 2;
                    E = -e.offsetY + e.height / 2;
                    n.Kb && (n.Kb.style.left = Math.ceil(z + D) - g[0] + "px",
                    n.Kb.style.top = Math.ceil(B + E) - g[1] + "px",
                    n.Kb.style.WebkitTransform = "translate3d(0,0,0)");
                    z = [];
                    for (e.MB = []; v < y; v++)
                        for (B = o; B < f; B++)
                            z.push([v, B]),
                            e.MB.push({
                                x: v,
                                y: B
                            });
                    this.map.ya() !== db && this.map.ya() !== Va && (z = this.tV(z, k));
                    z.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([p[0] - 1, p[1] - 1]));
                    k = Math.ceil(this.Fv / (256 * Math.pow(2, 18 - w)));
                    p = z.length;
                    this.Qk += p;
                    for (v = 0; v < p; v++) {
                        if (n.mO === q && (o = this.is(z[v][0], w),
                        o.lj > k - 1 || o.lj < -k))
                            continue;
                        this.a0([z[v][0], z[v][1], w], g, n, a)
                    }
                }
            }
        },
        PY: function(a, b) {
            return a < this.RA || b > this.Fv
        },
        Ve: function(a) {
            var b = this
              , c = a.target;
            b.map.Wd();
            c.xn && this.map.Ve(c.xn);
            if (c.Tx) {
                for (a = 0; a < b.Rg.length; a++)
                    if (b.Rg[a] == c)
                        return;
                Wa.load("vector", function() {
                    c.za(b.map, b.ug);
                    b.Rg.push(c)
                }, q)
            } else {
                for (a = 0; a < b.dg.length; a++)
                    if (b.dg[a] == c)
                        return;
                c.za(this.map, this.Kl);
                b.dg.push(c)
            }
        },
        cg: function(a) {
            a = a.target;
            this.map.Wd();
            a.xn && this.map.cg(a.xn);
            if (a.Tx)
                for (var b = 0, c = this.Rg.length; b < c; b++)
                    a == this.Rg[b] && this.Rg.splice(b, 1);
            else {
                b = 0;
                for (c = this.dg.length; b < c; b++)
                    a == this.dg[b] && this.dg.splice(b, 1)
            }
            a.remove()
        },
        Pg: function() {
            for (var a = this.Dj, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Kb;
            this.Dj = [];
            this.kj = this.Jg = {};
            this.Nx();
            this.ag()
        },
        Rc: function() {
            var a = this;
            a.Cd && x.U.aa(a.Cd);
            setTimeout(function() {
                a.ag();
                a.map.dispatchEvent(new O("onzoomend"))
            }, 10)
        },
        H6: ca(),
        cu: function(a) {
            var b = this.map.ya();
            if (!this.map.Wd() && (a ? this.map.M.j0 = a : a = this.map.M.j0,
            a))
                for (var c = s, c = "2" == A.Bu ? [A.url.proto + A.url.domain.main_domain_cdn.other[0] + "/"] : [A.url.proto + A.url.domain.main_domain_cdn.baidu[0] + "/", A.url.proto + A.url.domain.main_domain_cdn.baidu[1] + "/", A.url.proto + A.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.Dj[e]; e++)
                    if (f.mO == q) {
                        b.m.qc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x
                              , f = this.map.ff.is(f, e).lj
                              , m = b.y
                              , n = Yb("normal")
                              , o = 1;
                            this.map.Kx() && (o = 2);
                            n = "customimage/tile?qt=customimage&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + ra;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            n = c[Math.abs(f + m) % c.length] + n;
                            return n = ob(n)
                        }
                        ;
                        break
                    }
        }
    });
    function Ld(a, b, c, e, f) {
        this.Rm = a;
        this.position = c;
        this.$u = [];
        this.name = a.VD(e, f);
        this.info = e;
        this.zJ = f.Bt();
        e = F("img");
        Fb(e);
        e.kL = t;
        var g = e.style
          , a = a.map.ya();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Od() + "px";
        g.height = a.Od() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Hb = e;
        this.src = b;
        Nd && (this.Hb.style.opacity = 0);
        var i = this;
        this.Hb.onload = function() {
            A.gZ.QQ();
            i.loaded = q;
            if (i.Rm) {
                var a = i.Rm
                  , b = a.kj;
                if (!b[i.name]) {
                    a.WE++;
                    b[i.name] = i
                }
                if (i.Hb && !Gb(i.Hb) && f.Kb) {
                    f.Kb.appendChild(i.Hb);
                    if (x.ga.oa <= 6 && x.ga.oa > 0 && i.zJ)
                        i.Hb.style.cssText = i.Hb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.WE - a.oV, e;
                for (e in b) {
                    if (c <= 0)
                        break;
                    if (!a.Jg[e]) {
                        b[e].Rm = s;
                        var g = b[e].Hb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Md(g)
                        }
                        g = s;
                        b[e].Hb = s;
                        delete b[e];
                        a.WE--;
                        c--
                    }
                }
                Nd && new Ab({
                    Nc: 20,
                    duration: 200,
                    Ba: function(a) {
                        if (i.Hb && i.Hb.style)
                            i.Hb.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Hb && i.Hb.style && delete i.Hb.style.opacity
                    }
                });
                Id(i)
            }
        }
        ;
        this.Hb.onerror = function() {
            Id(i);
            if (i.Rm) {
                var a = i.Rm.map.ya();
                if (a.m.kD) {
                    i.error = q;
                    i.Hb.src = a.m.kD;
                    i.Hb && !Gb(i.Hb) && f.Kb.appendChild(i.Hb)
                }
            }
        }
        ;
        e = s
    }
    function Kd(a, b) {
        a.$u.push(b)
    }
    Ld.prototype.ho = function() {
        this.Hb.src = 0 < x.ga.oa && 6 >= x.ga.oa && this.zJ ? J.ta + "blank.gif" : "" !== this.src && this.Hb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function Id(a) {
        for (var b = 0; b < a.$u.length; b++)
            a.$u[b]();
        a.$u.length = 0
    }
    function Md(a) {
        if (a) {
            a.onload = a.onerror = s;
            var b = a.attributes, c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    f = b[c].name,
                    cb(a[f]) && (a[f] = s)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    Md(a.children[c])
            }
        }
    }
    function Jd(a, b) {
        a.src = b;
        a.ho()
    }
    var Nd = !x.ga.oa || 8 < x.ga.oa;
    function Hd(a) {
        this.bf = a || {};
        this.PV = this.bf.copyright || s;
        this.N0 = this.bf.transparentPng || t;
        this.Jw = this.bf.baseLayer || t;
        this.zIndex = this.bf.zIndex || 0;
        this.da = Hd.zS++
    }
    Hd.zS = 0;
    x.lang.xa(Hd, x.lang.Ja, "TileLayer");
    x.extend(Hd.prototype, {
        za: function(a, b) {
            this.Jw && (this.zIndex = -100);
            this.map = a;
            if (!this.Kb) {
                var c = F("div")
                  , e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Kb = c
            }
        },
        remove: function() {
            this.Kb && this.Kb.parentNode && (this.Kb.innerHTML = "",
            this.Kb.parentNode.removeChild(this.Kb));
            delete this.Kb
        },
        Bt: u("N0"),
        getTilesUrl: function(a, b) {
            if (this.map.ya() !== db && this.map.ya() !== Va)
                var c = this.map.ff.is(a.x, b).lj;
            var e = "";
            this.bf.tileUrlTemplate && (e = this.bf.tileUrlTemplate.replace(/\{X\}/, c),
            e = e.replace(/\{Y\}/, a.y),
            e = e.replace(/\{Z\}/, b));
            return e
        },
        zm: u("PV"),
        ya: function() {
            return this.Va || Qa
        }
    });
    function Od(a) {
        Hd.call(this, a);
        this.m = a || {};
        this.sM = q;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday)
                this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour)
                this.m.predictDate.hour = 0
        }
        this.yU = A.url.proto + A.url.domain.traffic + "/traffic/"
    }
    Od.prototype = new Hd;
    Od.prototype.za = function(a, b) {
        Hd.prototype.za.call(this, a, b);
        this.P = a
    }
    ;
    Od.prototype.Bt = fa(q);
    Od.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
        var c = this.yU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
          , e = 1;
        this.P.Kx() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Pd = [A.url.proto + A.url.domain.TILES_YUN_HOST[0] + "/georender/gss", A.url.proto + A.url.domain.TILES_YUN_HOST[1] + "/georender/gss", A.url.proto + A.url.domain.TILES_YUN_HOST[2] + "/georender/gss", A.url.proto + A.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Qd = A.url.proto + A.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Rd = 100;
    function ub(a, b) {
        Hd.call(this);
        var c = this;
        this.sM = q;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Ob(a) ? b = a || {} : (c.Tn = a,
        b = b || {});
        b.geotableId && (c.If = b.geotableId);
        b.databoxId && (c.Tn = b.databoxId);
        var f = A.vd + "geosearch";
        c.fb = {
            BN: b.pointDensity || Rd,
            uY: f + "/detail/",
            vY: f + "/v2/detail/",
            UJ: b.age || 36E5,
            Vt: b.q || "",
            u0: "png",
            F4: [5, 5, 5, 5],
            cZ: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            $B: b.ak || ra,
            yO: b.tags || "",
            filter: b.filter || "",
            pO: b.sortby || "",
            aE: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            VF: q
        };
        Wa.load("clayer", function() {
            c.Ed()
        })
    }
    ub.prototype = new Hd;
    ub.prototype.za = function(a, b) {
        Hd.prototype.za.call(this, a, b);
        this.P = a
    }
    ;
    ub.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = this.fb
          , c = Pd[Math.abs(c + e) % Pd.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.Vt + "&tags=" + f.yO + "&filter=" + f.filter + "&sortby=" + f.pO + "&ak=" + this.fb.$B + "&age=" + f.UJ + "&page_size=" + f.BN + "&format=" + f.u0;
        f.VF || (f = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + f);
        this.If ? c += "&geotable_id=" + this.If : this.Tn && (c += "&databox_id=" + this.Tn);
        return c
    }
    ;
    ub.prototype.enableUseCache = function() {
        this.fb.VF = q
    }
    ;
    ub.prototype.disableUseCache = function() {
        this.fb.VF = t
    }
    ;
    ub.XT = /^point\(|\)$/ig;
    ub.YT = /\s+/;
    ub.$T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Sd = {};
    function Td(a, b) {
        this.od = a;
        this.fQ = 18;
        this.m = {
            Sy: 256,
            Fc: new R
        };
        x.extend(this.m, b || {})
    }
    var Ud = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0]
      , Vd = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608]
      , Wd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19]
      , Xd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Td.prototype = {
        getName: u("od"),
        Od: function(a) {
            return "na" === this.od ? Xd[a] : this.m.Sy
        },
        Xs: function(a) {
            return "na" === this.od ? Wd[a] : a
        },
        vj: function() {
            return this.m.Fc
        },
        ac: function(a) {
            return Math.pow(2, this.fQ - a)
        },
        ND: function(a) {
            return "na" === this.od ? Vd[Ud[a]] : this.ac(a) * this.Od(a)
        }
    };
    var Yd = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0]
                      , n = f.xj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], p = 0; p < o.length; p++) {
                            var v = o[p][1];
                            f.Uc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.Xm(v[1], c, e, a)),
                            v = v["cache" + c],
                            f.P.Ho(b.canvas.id, v, {
                                type: "polygon",
                                Xb: m,
                                style: n
                            }),
                            this.JW(b, v, n, c))
                        }
                }
        },
        JW: function(a, b, c, e) {
            c = c[0];
            if (!c.Xb || !(6 < e && (71013 === c.Xb || 71012 === c.Xb || 71011 === c.Xb) || 6 === e && (71011 === c.Xb || 71012 === c.Xb) || 5 === e && (71011 === c.Xb || 71013 === c.Xb) || 5 > e && (71012 === c.Xb || 71013 === c.Xb))) {
                a.fillStyle = c.jx;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2)
                    a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.No,
                a.lineWidth = c.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.xj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][1];
                            f.Uc(p[0], c) && (p["cache" + c] || (p["cache" + c] = f.Xm(p[1], c, e, a)),
                            p = p["cache" + c],
                            f.P.Ho(b.canvas.id, p, {
                                type: "polygon",
                                Xb: k,
                                style: m
                            }),
                            this.LW(b, p, m))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.xj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][1];
                            f.Uc(p[0], c) && (p["cache" + c] || (p["cache" + c] = f.Xm(p[1], c, e, a)),
                            p = p["cache" + c],
                            f.P.Ho(b.canvas.id, p, {
                                type: "polygon",
                                Xb: k,
                                style: m
                            }),
                            this.MW(b, p, m))
                        }
                }
        },
        LW: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.No;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        MW: function(a, b, c) {
            a.fillStyle = c[0].jx;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var Zd = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.Xm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Uc(a[i], c)) {
                        var k = e[4 * i]
                          , m = e[4 * i + 1]
                          , n = e[4 * i + 2]
                          , o = e[4 * i + 3]
                          , p = (k + n) / 2
                          , v = (m + o) / 2
                          , n = (k - n) / f
                          , o = (m - o) / f
                          , k = p + n / 2
                          , n = p - n / 2
                          , m = v + o / 2
                          , o = v - o / 2;
                        this.AW(b, k, m, n, o)
                    }
            }
        },
        AW: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.pV([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        pV: function(a, b) {
            var c = b[0] - a[0]
              , e = b[1] - a[1]
              , f = 1.8 * Math.sqrt(c * c + e * e)
              , g = b[0] + 4.8410665352790705 * (c / f)
              , f = b[1] + 4.8410665352790705 * (e / f)
              , c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var $d = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.xj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var p = n[o][2];
                            if (f.Uc(p[0], c)) {
                                var v = p[2];
                                p["cache" + c] || (p["cache" + c] = f.Xm(p[1], c, e, a));
                                p = p["cache" + c];
                                f.P.Ho(b.canvas.id, p, {
                                    type: "polygon",
                                    Xb: k,
                                    style: m
                                });
                                this.KW(b, p, v, m)
                            }
                        }
                }
        },
        KW: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.bX;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.No,
                a.lineWidth = e.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        }
    };
    var ae = {
        parse: function(a, b, c, e, f) {
            for (var g = e.P, i = g.la(), k = Math.pow(2, 18 - i), m = g.Fc.ui(g.Qb()), n = m.lng, o = m.lat, m = g.Cb(), p = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = []
                  , z = a[w].s0;
                y.x = z[0];
                y.y = z[1];
                y.S6 = z[2];
                for (var B = (z[0] * c * k - n) / k + p / 2, D = (o - (z[1] + 1) * c * k) / k + v / 2, G = 0; G < a[w].length; G++)
                    a[w][G].yM ? this.xN(a[w][G].yM, z, e, b, c, B, D, i, k, p, v, y) : a[w][G].BY ? this.xN(a[w][G].BY, z, e, b, c, B, D, i, k, p, v, y, q, window.J4) : this.OZ(a[w][G].dZ, z, e, b, c, B, D, i, k, p, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (G = 0; G < m[w].length; G++)
                        a.push(m[w][G])
            } else
                a = this.b_(m, e.P.la());
            g.EV();
            for (w = 0; w < a.length; w++)
                if (c = a[w],
                !c.wt)
                    if (G = [c.Zf, c.$f, c.Zf, c.yi, c.xi, c.yi, c.xi, c.$f, c.Zf, c.$f],
                    c.style && g.Ho("poi", G, {
                        type: "polygon",
                        Xb: c.style.Xb,
                        style: c.style
                    }),
                    "fixed" === c.type) {
                        G = t;
                        c.Ce && (c.style && 4 === c.direction) && (G = q);
                        if (c.Ce)
                            if (G) {
                                var E = this;
                                this.Ls(b, c, e, G, function(a) {
                                    for (var c = 0; c < a.Bf.length; c++)
                                        E.RK(b, a.Bf[c].ie, a.Bf[c].je, a.Bf[c].text, a.style, e)
                                })
                            } else
                                this.Ls(b, c, e);
                        if (c.style && !G)
                            for (G = 0; G < c.Bf.length; G++)
                                this.RK(b, c.Bf[G].ie, c.Bf[G].je, c.Bf[G].text, c.style, e)
                    } else if ("line" === c.type)
                        for (G = 0; G < c.fP.length; G++)
                            f = c.fP[G],
                            ae.EW(b, f.ie, f.je, f.TU, f.dP, f.width, f.height, c.style, e);
            return m
        },
        xN: function(a, b, c, e, f, g, i, k, m, n, o, p, v, w) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var y = a[b]
                      , z = y[0]
                      , B = c.xj(z, "point", k, w)
                      , z = c.xj(z, "pointText", k, w)
                      , y = y[1]
                      , D = s
                      , G = 100
                      , E = 0
                      , C = 0;
                    B && B[0] && (B = B[0],
                    D = B.Ce,
                    G = B.zoom || 100);
                    z = z && z[0] ? z[0] : s;
                    for (B = 0; B < y.length; B++) {
                        var H = y[B][4];
                        if (H && c.Uc(H[2], k)) {
                            var I = Math.round(H[0] / 100) / m + g
                              , N = f - Math.round(H[1] / 100) / m + i;
                            if (v || !(-50 > I || -50 > N || I > n + 50 || N > o + 50)) {
                                var T = H[7] || ""
                                  , ea = {
                                    type: "fixed",
                                    uid: H[3] || "",
                                    name: T,
                                    wy: H[4],
                                    mt: s,
                                    Bf: [],
                                    iy: [I, N],
                                    style: z
                                };
                                if (D) {
                                    var ba = window.iconSetInfo_high[D] || window.iconSetInfo_high["MapRes/" + D];
                                    if (!ba) {
                                        var Ba = D.charCodeAt(0);
                                        48 <= Ba && 57 >= Ba && (ba = window.iconSetInfo_high["_" + D])
                                    }
                                    ba && (E = ba[2],
                                    C = ba[3],
                                    E = E / 2 * G / 100,
                                    C = C / 2 * G / 100,
                                    ea.mt = {
                                        ie: I - E / 2,
                                        je: N - C / 2,
                                        width: E,
                                        height: C
                                    },
                                    ea.Ce = D)
                                }
                                if (z) {
                                    H = H[5];
                                    "number" !== typeof H && (H = 0);
                                    var ua = ba = 0
                                      , Ba = (z.fontSize || 12) / 2
                                      , Ha = 0.2 * Ba;
                                    e.font = ae.ox(z, c);
                                    var T = T.split("\\")
                                      , ta = T.length;
                                    ea.direction = H;
                                    for (var Ya = 0; Ya < ta; Ya++) {
                                        var Le = T[Ya]
                                          , ad = e.measureText(Le).width;
                                        switch (H) {
                                        case 3:
                                            ua = N - Ba / 2 * ta - Ha * (ta - 1) / 2;
                                            ba = I - ad - E / 2;
                                            ua = ua + Ba * Ya + Ha * Ya;
                                            break;
                                        case 1:
                                            ua = N - Ba / 2 * ta - Ha * (ta - 1) / 2;
                                            ba = I + E / 2;
                                            ua = ua + Ba * Ya + Ha * Ya;
                                            break;
                                        case 2:
                                            ua = N - C / 2 - Ba * ta - Ha * (ta - 1) - Ha;
                                            ba = I - ad / 2;
                                            ua = ua + Ba * Ya + Ha * Ya;
                                            break;
                                        case 0:
                                            ua = N + C / 2 + Ha / 2;
                                            ba = I - ad / 2;
                                            ua = ua + Ba * Ya + Ha * Ya;
                                            break;
                                        case 4:
                                            ua = N - Ba / 2 * ta - Ha * (ta - 1) / 2,
                                            ba = I - ad / 2,
                                            ua = ua + Ba * Ya + Ha * Ya
                                        }
                                        ea.Bf.push({
                                            ie: ba,
                                            je: ua,
                                            width: ad,
                                            height: Ba,
                                            text: Le
                                        })
                                    }
                                }
                                p.push(ea)
                            }
                        }
                    }
                }
        },
        OZ: function(a, b, c, e, f, g, i, k, m, n, o, p, v) {
            b = a[7].length;
            if ((n = c.xj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = ae.ox(n, c);
                var o = n.fontSize / 2
                  , w = a[1]
                  , y = a[2];
                if (y) {
                    for (var z = y.split("").length, B = a[4], D = B.slice(0, 2), G = 2; G < B.length; G += 2)
                        D[G] = D[G - 2] + B[G],
                        D[G + 1] = D[G - 1] + B[G + 1];
                    for (G = 2; G < B.length; G += 2)
                        0 === G % (2 * z) || 1 === G % (2 * z) || (D[G] = D[G - 2] + B[G] / v,
                        D[G + 1] = D[G - 1] + B[G + 1] / v);
                    for (v = 0; v < b; v++)
                        if (c.Uc(a[7][v], k)) {
                            var G = []
                              , E = l
                              , C = l
                              , H = l
                              , I = l
                              , N = y.split("");
                            a[6][v] && N.reverse();
                            for (var B = 2 * v * z, B = D.slice(B, B + 2 * z), T = 0; T < z; T++) {
                                var ea = a[5][z * v + T]
                                  , ba = B[2 * T] / 100 / m + g
                                  , Ba = f - B[2 * T + 1] / 100 / m + i
                                  , ua = N[T]
                                  , Ha = e.measureText(ua).width;
                                if (E === l)
                                    E = ba - Ha / 2,
                                    C = Ba - o / 2,
                                    H = E + Ha,
                                    I = C + o;
                                else {
                                    var ta = ba - Ha / 2
                                      , Ya = Ba - o / 2;
                                    ta < E && (E = ta);
                                    Ya < C && (C = Ya);
                                    ta + Ha > H && (H = ta + Ha);
                                    Ya + o > I && (I = Ya + o)
                                }
                                G.push({
                                    dP: ua,
                                    ie: ba,
                                    je: Ba,
                                    TU: ea,
                                    width: Ha,
                                    height: o
                                })
                            }
                            p.push({
                                type: "line",
                                wy: w,
                                style: n,
                                fP: G,
                                Zf: E,
                                $f: C,
                                xi: H,
                                yi: I
                            })
                        }
                }
            }
        },
        Ls: function(a, b, c, e, f) {
            var g = b.Ce;
            if ("lanche" !== g)
                if (ae.Lx[g])
                    this.OK(a, b, ae.Lx[g], e, f);
                else if (c = c.yL(g)) {
                    var i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function() {
                        ae.Lx[g] = this;
                        k.OK(a, b, this, e, f);
                        i.onload = s
                    }
                    ;
                    i.src = c
                }
        },
        OK: function(a, b, c, e, f) {
            var g = b.mt
              , i = g.ie
              , k = g.je
              , m = s
              , n = s
              , o = q
              , p = b.style ? b.style.Xb : s;
            if (b.style && 62203 === p) {
                for (var v = n = m = 0; v < b.Bf.length; v++)
                    m < b.Bf[v].width && (m = b.Bf[v].width),
                    n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === p && (o = t);
            m !== s && n !== s ? this.IW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.Bf[0].width) + 6,
            this.zW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        IW: function(a, b, c, e, f, g) {
            var i = b.iy[0] - f / 2
              , b = b.iy[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        zW: function(a, b, c, e, f, g) {
            var i = b.iy[0] - f / 2
              , b = b.iy[1] - g / 2
              , g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        EW: function(a, b, c, e, f, g, i, k, m) {
            a.font = ae.ox(k, m);
            a.fillStyle = k.hL;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.Dx && (a.lineWidth = k.Dx,
            a.strokeStyle = k.ZL,
            a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        RK: function(a, b, c, e, f, g) {
            a.font = ae.ox(f, g);
            a.fillStyle = f.hL;
            0 < f.Dx && (a.lineWidth = f.Dx,
            a.strokeStyle = f.ZL,
            a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        ox: function(a, b) {
            var c = a.fontSize / 2
              , e = 10 * a.fontWeight;
            return e = b.oE ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        b_: function(a, b) {
            var c = []
              , e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k]
                      , o = l
                      , p = l
                      , v = l
                      , w = l;
                    if ("fixed" === n.type) {
                        var y = n.mt
                          , z = n.Bf;
                        y && (o = y.ie,
                        p = y.je,
                        v = y.ie + y.width,
                        w = y.je + y.height);
                        for (y = 0; y < z.length; y++) {
                            var B = z[y];
                            o !== l ? (B.ie < o && (o = B.ie),
                            B.je < p && (p = B.je),
                            B.ie + B.width > v && (v = B.ie + B.width),
                            B.je + B.height > w && (w = B.je + B.height)) : (o = B.ie,
                            p = B.je,
                            v = B.ie + B.width,
                            w = B.je + B.height)
                        }
                    } else
                        "line" === n.type ? (o = n.Zf,
                        p = n.$f,
                        v = n.xi,
                        w = n.yi) : "biaopai" === n.type && (w = n.G5,
                        o = w.ie,
                        p = w.je,
                        v = w.ie + w.width,
                        w = w.je + w.height);
                    o !== l && (n.Zf = o,
                    n.$f = p,
                    n.xi = v,
                    n.yi = w,
                    c.push(n))
                }
            c.sort(function(a, b) {
                return b.wy - a.wy || b.Zf - a.Zf || b.$f - a.$f
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.wt = t;
                m.$J = [];
                for (k = f + 1; k < g; k++)
                    i = c[k],
                    m.xi - e < i.Zf || (m.Zf > i.xi - e || m.yi - e < i.$f || m.$f > i.yi - e) || m.$J.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f],
                k.wt === t) {
                    e = k.$J;
                    k = 0;
                    for (m = e.length; k < m; k++)
                        c[e[k]].wt = q
                }
            return c
        },
        Lx: {}
    };
    var be = ["round", "butt", "square"]
      , ce = ["miter", "round", "bevel"]
      , de = {
        daojiao: [{
            stroke: "#FF6600",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        daojiao_bai: [{
            stroke: "#f5f3f0",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        junhuoxian: [],
        lundu: [{
            stroke: "#5c91c5",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [10, 11]
        }],
        shengjie: [],
        weidingguojie: [{
            stroke: "#aea08a",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        weidingguojie_guowai: [{
            stroke: "#a29e96",
            tb: 2,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        weidingguojie_guonei: [],
        weidingshengjie_guowai: []
    }
      , ee = {
        weidingshengjie_guowai: [{
            stroke: "#737373",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        junhuoxian: [{
            stroke: "#DB7093",
            tb: 1.5,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        shengjie: [{
            stroke: "#737373",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [10, 4, 5, 4]
        }],
        weidingguojie_guonei: [{
            stroke: "#b2a471",
            tb: 2,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }]
    }
      , fe = {};
    function ge(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility)
                return [];
            var e = "#ffffff"
              , f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b)
                return [{
                    stroke: e,
                    tb: 1.5,
                    rb: "butt",
                    sb: "round",
                    Zc: [10, 11]
                }, {
                    stroke: f,
                    tb: 2,
                    rb: "round",
                    sb: "round"
                }];
            if (17 <= b && 18 >= b)
                return [{
                    stroke: e,
                    tb: 2.5,
                    rb: "butt",
                    sb: "round",
                    Zc: [15, 16]
                }, {
                    stroke: f,
                    tb: 5,
                    rb: "round",
                    sb: "round"
                }];
            if (19 <= b && 20 >= b)
                return [{
                    stroke: e,
                    tb: 4.5,
                    rb: "butt",
                    sb: "round",
                    Zc: [25, 26]
                }, {
                    stroke: f,
                    tb: 5,
                    rb: "round",
                    sb: "round"
                }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b)
                return [{
                    stroke: "#868686",
                    tb: 1,
                    rb: "round",
                    sb: "round",
                    Zc: [7, 4]
                }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b)
                return [{
                    stroke: "#6e6e6e",
                    tb: 1,
                    rb: "round",
                    sb: "round",
                    Zc: [7, 4]
                }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 4,
                    rb: "square",
                    sb: "round"
                }, {
                    stroke: "#a8a8a8",
                    tb: 6,
                    rb: "square",
                    sb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 6,
                    rb: "square",
                    sb: "round"
                }, {
                    stroke: "#a8a8a8",
                    tb: 8,
                    rb: "square",
                    sb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 8,
                    rb: "square",
                    sb: "round"
                }, {
                    stroke: "#a8a8a8",
                    tb: 10,
                    rb: "square",
                    sb: "round"
                }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 4,
                    rb: "butt",
                    sb: "round",
                    Zc: [2, 1]
                }, {
                    stroke: "#bebebe",
                    tb: 6,
                    rb: "butt",
                    sb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 6,
                    rb: "butt",
                    sb: "round",
                    Zc: [3, 1]
                }, {
                    stroke: "#bebebe",
                    tb: 8,
                    rb: "butt",
                    sb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    tb: 8,
                    rb: "butt",
                    sb: "round",
                    Zc: [4, 2]
                }, {
                    stroke: "#bebebe",
                    tb: 10,
                    rb: "butt",
                    sb: "round"
                }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
            return 18 === b ? [{
                stroke: "#ffffff",
                tb: 6,
                rb: "butt",
                sb: "round",
                Zc: [4, 2]
            }, {
                stroke: "#bebebe",
                tb: 8,
                rb: "butt",
                sb: "round"
            }] : [{
                stroke: "#ffffff",
                tb: 8,
                rb: "butt",
                sb: "round",
                Zc: [4, 2]
            }, {
                stroke: "#bebebe",
                tb: 10,
                rb: "butt",
                sb: "round"
            }];
        return de[a] || de[a.replace("MapRes/", "")]
    }
    var he = {
        drawLink: function(a, b, c, e, f) {
            this.da = f.P.da;
            var g = a[1];
            g && (a = a[6],
            this.OO(g, c, e, b, a, f, q),
            this.OO(g, c, e, b, a, f, t))
        },
        OO: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0]
                  , n = g.xj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].xm || ge(n[0].xm, b, this.da))
                        for (var o = a[k][1], p = 0; p < o.length; p++) {
                            var v = o[p][3];
                            g.Uc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.Xm(v[1], b, c, f)),
                            v = v["cache" + b],
                            g.P.Ho(e.canvas.id, v, {
                                type: "polyline",
                                Xb: m,
                                style: n
                            }),
                            this.FW(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.xj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Uc(o[0], c)) {
                                var p;
                                o["cache" + c] || (o["cache" + c] = f.Xm(o[1], c, e, a));
                                p = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.m1[c].Sc);
                                this.GW(b, p, k, o, f)
                            }
                        }
                }
        },
        GW: function(a, b, c, e, f) {
            var g = c[0].xm
              , i = this;
            if (fe[g])
                i.Ls(b, e, a, fe[g]);
            else if (c = f.yL(g)) {
                var k = new Image;
                k.onload = function() {
                    fe[g] = k;
                    i.Ls(b, e, a, k);
                    k.onload = s
                }
                ;
                k.src = c
            }
        },
        Ls: function(a, b, c, e) {
            var f = [a[0], a[1]]
              , g = [a[2], a[3]]
              , a = g[0] - f[0]
              , g = g[1] - f[1]
              , f = [f[0] + a / 2, f[1] + g / 2]
              , i = Math.sqrt(a * a + g * g)
              , b = b / 10
              , a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        FW: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.xm) {
                var f = ge(c.xm, f, this.da)
                  , g = ee[c.xm] || ee[c.xm.replace("MapRes/", "")];
                if (g) {
                    this.SK(a, b, c, g, q);
                    return
                }
                if (f) {
                    this.SK(a, b, c, f, t);
                    return
                }
            }
            a.beginPath();
            a.moveTo(b[0], b[1]);
            f = 2;
            for (g = b.length; f < g; f += 2)
                a.lineTo(b[f], b[f + 1]);
            c.borderWidth && e ? (a.strokeStyle = c.No,
            a.lineCap = be[c.iV],
            a.lineJoin = ce[1],
            a.lineWidth = c.borderWidth / 2,
            a.stroke()) : e || (a.strokeStyle = c.jx,
            a.lineCap = be[c.aX],
            a.lineJoin = ce[1],
            a.lineWidth = c.dL / 2,
            a.stroke())
        },
        SK: function(a, b, c, e, f) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.rb;
                a.lineJoin = c.sb;
                a.lineWidth = c.tb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, g = b.length; c < g; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.Zc)
                    f ? this.HW(a, b, e) : this.DW(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.rb;
                    a.lineJoin = e.sb;
                    a.lineWidth = e.tb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (g = b.length; c < g; c += 2)
                        a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        HW: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            a.setLineDash(c.Zc);
            a.beginPath();
            for (c = 0; c < b.length - 2; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.stroke();
            a.setLineDash([])
        },
        DW: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            var e = q
              , c = c.Zc[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f]
                  , i = b[f + 1]
                  , k = b[f + 2] - g
                  , m = b[f + 3] - i
                  , n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15
                  , m = Math.sqrt(k * k + m * m)
                  , o = c;
                for (a.moveTo(g, i); 0.1 <= m; ) {
                    o > m && (o = m);
                    var p = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (p = -p);
                    g += p;
                    i += n * p;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var ie = 3, je = 4, ke = 7, le = 8, ne = 15, oe = 16, pe = {}, qe = {}, re = {}, se, te = {
        3: {
            start: 3,
            Sc: 3
        },
        4: {
            start: 4,
            Sc: 5
        },
        5: {
            start: 4,
            Sc: 5
        },
        6: {
            start: 6,
            Sc: 7
        },
        7: {
            start: 6,
            Sc: 7
        },
        8: {
            start: 8,
            Sc: 9
        },
        9: {
            start: 8,
            Sc: 9
        },
        10: {
            start: 10,
            Sc: 10
        },
        11: {
            start: 11,
            Sc: 12
        },
        12: {
            start: 11,
            Sc: 12
        },
        13: {
            start: 11,
            Sc: 12
        },
        14: {
            start: 14,
            Sc: 15
        },
        15: {
            start: 14,
            Sc: 15
        },
        16: {
            start: 16,
            Sc: 17
        },
        17: {
            start: 16,
            Sc: 17
        },
        18: {
            start: 18,
            Sc: 19
        },
        19: {
            start: 18,
            Sc: 19
        },
        20: {
            start: 18,
            Sc: 19
        },
        21: {
            start: 18,
            Sc: 19
        }
    };
    function ue(a) {
        this.P = a;
        this.Lc = a.M.devicePixelRatio;
        this.m1 = te
    }
    ue.prototype = {
        QC: function(a, b, c, e, f, g, i, k, m) {
            this.P.tO = {};
            var n = this
              , o = n.P.da;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m)
                setTimeout(function() {
                    n.QC(a, b, c, e, f, g, i, k, m + 1)
                }, 100);
            else {
                se || (se = k);
                var p = b.getContext("2d")
                  , v = b.parentNode;
                v.removeChild(b);
                p.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Lc;
                1 < v && !b._scale && (p.scale(v, v),
                b._scale = q);
                p.fillStyle = this.wN("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (p.fillStyle = this.wN(window[o + "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o;
                p.fillRect(0, 0, g, g);
                if (a[0])
                    for (o = 0; o < a[0].length; o++)
                        v = a[0][o],
                        v[0] === ke && Yd.drawPoly(v, p, f, g, this);
                17 <= this.P.la() ? (n.QK(a, p, f, g, i, c, e),
                b.Vn = q) : setTimeout(function() {
                    if (!b.qH) {
                        n.QK(a, p, f, g, i, c, e);
                        b.Vn = q
                    }
                }, 1)
            }
        },
        QK: function(a, b, c, e) {
            var f = this.P.da;
            if (a[0])
                for (var g = 0; g < a[0].length; g++) {
                    var i = a[0][g]
                      , k = i[0];
                    k === je ? he.drawLink(i, b, c, e, this) : k === oe ? he.drawLink(i, b, c, e, this) : k === ne ? (Yd.drawGaoqingRoadBorder(i, b, c, e, this),
                    Yd.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && Zd.drawArrow(i, b, c, e, Math.pow(2, c - te[c].Sc), this) : k === le ? $d.drawHregion(i, b, c, e, this) : 19 === k && he.drawSingleTexture(i, b, c, e, this)
                }
        },
        PK: function(a, b, c, e, f, g, i) {
            var k = this
              , m = k.P.da;
            i || (i = 0);
            !window[m + "StyleBody"] && 100 > i ? setTimeout(function() {
                k.PK(a, b, c, e, f, g, i + 1)
            }, 100) : (se || (se = b),
            a.VZ = ae.parse(a, c, e, this, f))
        },
        xj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e)
                return pe[f] || (pe[f] = this.Eg(a, b, c, e)),
                pe[f];
            this.P.tO[f] = this.Eg(a, b, c);
            return this.P.tO[f]
        },
        Eg: function(a, b, c, e) {
            var f = this.P.da, g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b)
                return this.KZ(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            var i = []
              , c = g[1][c - 1][0][a];
            if (!c)
                return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                    case "polygon":
                        k = this.TZ(k, a);
                        break;
                    case "line":
                        k = this.PZ(k, a);
                        break;
                    case "pointText":
                        k = this.RZ(k, a);
                        break;
                    case "point":
                        k = this.QZ(k, a);
                        break;
                    case "polygon3d":
                        k = this.SZ(k, a)
                    }
                    k.n6 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        RZ: function(a, b) {
            return {
                Xb: b,
                hL: this.Mg(a[0]),
                ZL: this.Mg(a[1]),
                I2: this.Mg(a[2]),
                fontSize: a[3],
                Dx: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                lW: a[7]
            }
        },
        QZ: function(a, b) {
            return {
                Xb: b,
                wy: a[0],
                F6: a[1],
                Ce: a[2],
                xY: a[3],
                o5: a[4],
                lW: a[5],
                zoom: a[6]
            }
        },
        PZ: function(a, b) {
            return {
                Xb: b,
                No: this.Mg(a[0]),
                jx: this.Mg(a[1]),
                borderWidth: a[2],
                dL: a[3],
                iV: a[4],
                aX: a[5],
                x4: a[6],
                y4: a[7],
                z4: a[8],
                R4: a[9],
                S4: a[10],
                jV: a[11],
                xm: a[12],
                kV: a[13],
                u3: a[14],
                P4: a[15],
                v4: a[16],
                n5: a[17],
                S5: a[18]
            }
        },
        TZ: function(a, b) {
            return {
                Xb: b,
                jx: this.Mg(a[0]),
                No: this.Mg(a[1]),
                borderWidth: a[2],
                jV: a[3],
                kV: a[4],
                N6: a[5],
                u4: a[6],
                r6: a[7],
                s6: this.Mg(a[8])
            }
        },
        SZ: function(a, b) {
            return {
                Xb: b,
                filter: a[0],
                IN: a[1],
                w4: a[2],
                borderWidth: a[3],
                No: this.Mg(a[4]),
                bX: this.Mg(a[5]),
                t3: this.Mg(a[6]),
                E5: a[7]
            }
        },
        KZ: function(a) {
            for (var b in a)
                return a = a[b],
                {
                    color: this.Mg(a[0]),
                    xY: a[1],
                    Ce: a[2]
                }
        },
        Mg: function(a) {
            var b = a;
            if (re[b])
                return re[b];
            a >>>= 0;
            re[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return re[b]
        },
        wN: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2)
                b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Uc: function(a, b) {
            var c;
            qe[a] || (c = a.toString(2),
            8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
            qe[a] = c);
            c = qe[a];
            return "1" === c[b - te[b].start]
        },
        Xm: function(a, b, c) {
            var e = []
              , b = Math.pow(2, b - te[b].Sc) / 100
              , f = a[0] * b
              , g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2)
                f += a[i] * b,
                g += a[i + 1] * b,
                e[e.length] = f,
                e[e.length] = c - g;
            return e
        },
        yL: function(a) {
            if (a) {
                var b = a.length % se.length
                  , c = this.EX();
                return se[b] + a + ".png?v=" + c.XF + "&udt=" + c.TF
            }
        },
        EX: function() {
            if (this.dE)
                return this.dE;
            var a = "undefined" !== typeof MSV ? MSV.g5 : {};
            return this.dE = {
                XF: a.version ? a.version : "001",
                TF: a.O0 ? a.O0 : "20150621"
            }
        }
    };
    O = x.lang.Ju;
    ie = 3;
    je = 4;
    ke = 7;
    le = 8;
    ne = 15;
    oe = 16;
    function Gd(a, b, c) {
        c = c || {};
        this.P = a;
        this.sw = b;
        this.Lc = b.IN;
        this.fb = {
            t0: "na",
            zIndex: 0,
            AO: c.tileUrls || {
                http: ["http://maponline0.bdimg.com/pvd/?qt=vtile", "http://maponline1.bdimg.com/pvd/?qt=vtile", "http://maponline2.bdimg.com/pvd/?qt=vtile", "http://maponline3.bdimg.com/pvd/?qt=vtile", "http://maponline0.bdimg.com/pvd/?qt=vtile"],
                https: ["https://maponline0.bdimg.com/pvd/?qt=vtile", "https://maponline1.bdimg.com/pvd/?qt=vtile", "https://maponline2.bdimg.com/pvd/?qt=vtile", "https://maponline3.bdimg.com/pvd/?qt=vtile", "https://maponline0.bdimg.com/pvd/?qt=vtile"]
            },
            cE: c.iconUrls || ["https://maponline0.bdimg.com/sty/map_icons2x/", "https://maponline1.bdimg.com/sty/map_icons2x/"],
            yF: q
        };
        this.JB = "";
        this.WS = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        }, e;
        for (e in c)
            c.hasOwnProperty(e) && (this.JB = this.JB + "&" + e + "=" + c[e]);
        this.nh = {};
        this.ws = [];
        this.Ct = 0;
        this.Rx = t;
        this.Lx = {};
        a = this.fb.t0;
        Sd[a] ? a = Sd[a] : (b = new Td(a,l),
        a = Sd[a] = b);
        this.Id = a;
        this.P.Id = this.Id
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    ga = Gd.prototype;
    ga.za = function() {
        var a = this.P
          , b = a.ff;
        if (!this.Do) {
            var c = b.Pq(this.fb.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Do = c
        }
        b.lg.appendChild(this.Do);
        b.K4 = c;
        if (this.fb.yF) {
            ve(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY
                      , k = e.ws.VZ;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o],
                                !a.wt && a.mt && b > a.Zf && b < a.xi && c > a.$f && c < a.yi) {
                                    b = a.mt;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.ie + b.width / 2,
                                            y: b.je + 6
                                        }
                                    };
                                    break a
                                }
                    b = s
                }
                b && (a = new O("onvectorclick"),
                a.G4 = b,
                a.Ze = "base",
                this.dispatchEvent(a))
            })
        }
    }
    ;
    function ve(a) {
        var b = a.P
          , c = b.ff
          , e = a.Lc
          , f = b.Cb()
          , g = f.width
          , f = f.height
          , i = F("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.Vx = i;
        a.Ep = i.getContext("2d");
        a.Ep.scale(e, e);
        a.Ep.textBaseline = "top";
        c.lg.appendChild(i);
        b.GS = i
    }
    ga.hY = u("Id");
    ga.update = function(a, b) {
        b = b || {};
        this.UF = b.UF;
        b.wm && (this.P0 = b.wm);
        if (this.fb.yF && (b.nm && this.nm(),
        b.b0)) {
            var c = this.Lc
              , e = this.P.Cb()
              , f = e.width
              , e = e.height
              , g = this.Vx
              , i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Ep.scale(c, c);
            this.Ep.textBaseline = "top"
        }
        if (b.I6) {
            c = this.Do;
            f = 0;
            for (e = c.childNodes.length; f < e; f++)
                c.childNodes[f].Vn = t
        }
        this.Yw = a;
        this.Hp(a)
    }
    ;
    ga.Hp = function(a) {
        this.ws = [];
        var b = this.P
          , c = b.la()
          , e = b.Fc.ui(b.he)
          , f = this.Id.ac(c)
          , e = [Math.round(-e.lng / f), Math.round(e.lat / f)]
          , f = this.Id.Od(c)
          , g = b.da.replace(/^TANGRAM_/, "")
          , i = this.Id.Xs(c)
          , b = this.P
          , k = -b.offsetY + b.height / 2
          , m = this.Do;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.We ? this.We.length = 0 : this.We = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.nr = t;
            this.We.push(n)
        }
        if (b = this.Vm)
            for (var o in b)
                delete b[o];
        else
            this.Vm = {};
        this.Xe ? this.Xe.length = 0 : this.Xe = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , p = a[b][1];
            o = 0;
            for (var v = this.We.length; o < v; o++) {
                var w = this.We[o];
                if (w.id === g + "_" + n + "_" + p + "_" + i + "_" + c) {
                    w.nr = q;
                    this.Vm[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.We.length; b < k; b++)
            w = this.We[b],
            w.nr || (w.NB = s,
            delete w.NB,
            w.Vn = t,
            this.Xe.push(w));
        o = [];
        v = f * this.Lc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , p = a[b][1]
              , w = n * f + e[0]
              , y = (-1 - p) * f + e[1]
              , z = g + "_" + n + "_" + p + "_" + i + "_" + c
              , B = this.Vm[z]
              , D = s;
            if (B)
                D = B.style,
                D.left = w + "px",
                D.top = y + "px",
                D.width = f + "px",
                D.height = f + "px",
                B.Vn ? B.KF && B.KF && this.ws.push(B.KF) : (B.qH = q,
                B.NB = s,
                delete B.NB,
                o.push([n, p, B]));
            else {
                if (0 < this.Xe.length) {
                    var B = this.Xe.shift()
                      , G = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    D = B.style;
                    D.width = f + "px";
                    D.height = f + "px";
                    G.clearRect(0, 0, v, v)
                } else
                    B = document.createElement("canvas"),
                    D = B.style,
                    D.position = "absolute",
                    this.fb.backgroundColor && (D.background = this.fb.backgroundColor),
                    D.width = f + "px",
                    D.height = f + "px",
                    B.setAttribute("width", v),
                    B.setAttribute("height", v),
                    m.appendChild(B);
                B.id = z;
                D.left = w + "px";
                D.top = y + "px";
                o.push([n, p, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Xe.length; b < k; b++)
            this.Xe[b].style.visibility = "hidden";
        if (0 === o.length) {
            we(this);
            a = this.P.da.replace(/^TANGRAM_/, "");
            c = this.P.la();
            e = this.Id.Xs(c);
            f = {};
            for (g = 0; g < this.Yw.length; g++)
                i = this.Yw[g],
                i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
                this.nh[i] && (f[i] = this.nh[i],
                this.UF && this.sw.RC.QC(this.nh[i].b1, this.nh[i].r0, this.nh[i].lj, this.nh[i].dn, this.nh[i].EE, this.Id.Od(this.nh[i].EE), this.Id.ND(this.nh[i].EE), this.fb.cE));
            this.nh = f
        } else {
            this.Ct = o.length;
            this.Rx = t;
            c = this.Id.Xs(this.P.la());
            for (e = 0; e < a.length; e++)
                a[e][3] = c;
            for (e = 0; e < o.length; e++)
                a = o[e][2],
                f = o[e][0],
                g = o[e][1],
                o[e][3] = c,
                a.Vn = t,
                a.qH = t,
                xe(this, f, g, c, a)
        }
    }
    ;
    function xe(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e
          , i = a.WS;
        if (i[g]) {
            if ("loading" === i[g].status)
                return
        } else
            i[g] = {
                status: "init",
                PN: 0
            };
        var k = a
          , m = k.P
          , n = []
          , n = "0" === A.Bu ? k.fb.AO.http : k.fb.AO.https
          , o = Math.abs(b + c) % n.length
          , p = "x=" + b + "&y=" + c + "&z=" + e
          , v = ye(a.sw)
          , w = v.XF
          , v = v.TF
          , y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36)
          , p = p + a.JB + "v=" + w + "&udt=" + v + "&fn=window." + y
          , w = n[o] + "&" + p
          , w = n[o] + "&param=" + window.encodeURIComponent(Qb(p));
        window[y] = function(a) {
            clearTimeout(i[g].fl);
            i[g] = s;
            if (a) {
                var n = m.la(), o;
                a: {
                    for (o = 0; o < k.Yw.length; o++) {
                        var p = k.Yw[o];
                        if (p[0] === b && p[1] === c && p[3] === e) {
                            o = q;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new O("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Lc
                    });
                    m.dispatchEvent(o);
                    if (m.M.Ak) {
                        if (k.nh[f.id] = {
                            b1: a,
                            r0: f,
                            lj: b,
                            dn: c,
                            EE: n
                        },
                        k.sw.RC.QC(a, f, b, c, n, k.Id.Od(n), k.Id.ND(n), k.fb.cE),
                        k.fb.yF) {
                            n = [];
                            n.s0 = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++)
                                    a[0][o][0] === ie && n.push({
                                        yM: a[0][o]
                                    });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++)
                                    n.push({
                                        dZ: a[2][o]
                                    });
                            f.KF = n;
                            k.ws.push(n);
                            k.Rx === t && k.Ct--;
                            (0 === k.Ct || k.Rx === q) && we(k)
                        }
                    } else
                        k.Ct--,
                        (0 === k.Ct || k.Rx === q) && we(k);
                    delete window[y]
                }
            }
        }
        ;
        sa(w);
        i[g].status = "loading";
        k = a;
        i[g].fl = setTimeout(function() {
            3 > i[g].PN ? (i[g].PN++,
            i[g].status = "init",
            xe(k, b, c, e, f)) : i[g] = s
        }, 4E3)
    }
    function we(a) {
        if (a.Vx) {
            var b = a.P;
            a.Vx.style.left = -b.offsetX + "px";
            a.Vx.style.top = -b.offsetY + "px";
            var c = new O("updateindoorlabel");
            c.labelCanvasDom = b.GS;
            b.dispatchEvent(c);
            if (b.M.Ak) {
                a.nm();
                var c = a.Id
                  , e = b.la()
                  , f = c.Xs(b.la());
                a.sw.RC.PK(a.ws, a.fb.cE, a.Ep, c.Od(e), Math.pow(2, e - f), e);
                "moving" !== a.P0 && b.dispatchEvent(new O("ontilesloaded"))
            }
        }
    }
    ga.nm = function() {
        var a = this.P.Cb()
          , b = this.Lc;
        this.Ep.clearRect(0, 0, a.width * b, a.height * b)
    }
    ;
    ga.remove = function() {
        var a = this.P.ff;
        this.Do && a.lg.removeChild(this.Do)
    }
    ;
    function Fd(a) {
        this.P = a.map;
        this.kf = [];
        this.Xr = {};
        this.IN = this.P.M.devicePixelRatio;
        this.RC = new ue(this.P);
        this.za()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    ga = Fd.prototype;
    ga.za = function() {
        var a = this
          , b = this.P;
        b.addEventListener("addtilelayer", function(b) {
            a.Ve(b.target)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.cg(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) {
                "centerAndZoom" !== b.Uz && a.update({
                    wm: "moveend"
                })
            });
            b.addEventListener("onmoving", function() {
                a.update({
                    wm: "moving"
                })
            });
            b.addEventListener("onzoomend", function(b) {
                "centerAndZoom" !== b.Uz && a.update({
                    nm: q,
                    wm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function() {
                a.update({
                    nm: q,
                    wm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function() {
                a.update({
                    nm: q,
                    UF: q,
                    wm: "updatestyles"
                });
                a.P.zf(a.P.Qb());
                setTimeout(function() {
                    a.P.dispatchEvent(new O("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function(b) {
                b.Va === Qa && a.update({
                    nm: q,
                    wm: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", ca());
        b.addEventListener("onresize", function() {
            a.update({
                b0: q
            })
        });
        a.update()
    }
    ;
    ga.Ve = function(a) {
        if (a instanceof Gd) {
            for (var b = 0; b < this.kf.length; b++)
                if (this.kf[b] === a)
                    return;
            this.kf.push(a);
            a.za();
            this.P.loaded && this.update()
        }
    }
    ;
    ga.cg = function(a) {
        if (a instanceof Gd) {
            for (var b = 0; b < this.kf.length; b++)
                if (this.kf[b] === a) {
                    this.kf.splice(b, 1);
                    break
                }
            a.remove()
        }
    }
    ;
    ga.PL = function(a) {
        var b = a.getName();
        if (this.Xr[b])
            return this.Xr[b];
        var c = this.P
          , e = c.la()
          , f = c.Vb
          , g = a.ND(e);
        c.da.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g)
          , k = Math.ceil(f.lat / g)
          , a = a.Od(e)
          , m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a]
          , e = m[0] - Math.ceil((c.width / 2 - m[2]) / a)
          , f = m[1] - Math.ceil((c.height / 2 - m[3]) / a)
          , g = m[0] + Math.ceil((c.width / 2 + m[2]) / a)
          , c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.Je ? this.Je.length = 0 : this.Je = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++)
                this.Je.push([a, e]);
        this.Je.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.Xr[b] = this.Je.slice(0);
        return this.Xr[b]
    }
    ;
    function ye(a) {
        if (a.YF)
            return a.YF;
        a.YF = {
            XF: "001",
            TF: Yb("normal")
        };
        return a.YF
    }
    ga.update = function(a) {
        this.Xr = {};
        for (var b = 0; b < this.kf.length; b++) {
            var c = this.kf[b]
              , e = this.PL(c.Id);
            c.update(e, a)
        }
    }
    ;
    function ze(a, b, c) {
        this.od = a;
        this.kf = b instanceof Hd ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            w0: c.tips || "",
            yE: "",
            kc: c.minZoom || 4,
            qc: c.maxZoom || 18,
            E4: c.minZoom || 4,
            D4: c.maxZoom || 18,
            Sy: 256,
            JF: c.textColor || "black",
            kD: c.errorImageUrl || "",
            jb: new kb(new P(-21364736,-16023552),new P(23855104,19431424)),
            Fc: c.projection || new R
        };
        1 <= this.kf.length && (this.kf[0].Jw = q);
        x.extend(this.m, c)
    }
    x.extend(ze.prototype, {
        getName: u("od"),
        gt: function() {
            return this.m.w0
        },
        Y3: function() {
            return this.m.yE
        },
        gY: function() {
            return this.kf[0]
        },
        o4: u("kf"),
        Od: function() {
            return this.m.Sy
        },
        rf: function() {
            return this.m.kc
        },
        $e: function() {
            return this.m.qc
        },
        setMaxZoom: function(a) {
            this.m.qc = a
        },
        Im: function() {
            return this.m.JF
        },
        vj: function() {
            return this.m.Fc
        },
        R3: function() {
            return this.m.kD
        },
        Od: function() {
            return this.m.Sy
        },
        ac: function(a) {
            return Math.pow(2, 18 - a)
        },
        UL: function(a) {
            return this.ac(a) * this.Od()
        },
        tF: function(a) {
            this.vj().ZN(a)
        }
    });
    var Ae = [A.url.proto + A.url.domain.TILE_BASE_URLS[0], A.url.proto + A.url.domain.TILE_BASE_URLS[1], A.url.proto + A.url.domain.TILE_BASE_URLS[2], A.url.proto + A.url.domain.TILE_BASE_URLS[3]]
      , Be = [A.url.proto + A.url.domain.TILE_ONLINE_URLS[0] + "/tile/", A.url.proto + A.url.domain.TILE_ONLINE_URLS[1] + "/tile/", A.url.proto + A.url.domain.TILE_ONLINE_URLS[2] + "/tile/", A.url.proto + A.url.domain.TILE_ONLINE_URLS[3] + "/tile/"]
      , Ce = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , De = new Hd;
    De.mO = q;
    De.getTilesUrl = function(a, b, c) {
        // console.log(a,b,c)
        var e = a.x
          , a = a.y
          , f = Yb("normal")
          , g = 1
          , c = Ce[c];
        // this.map.Kx() && (g = 2);
        // e = this.map.ff.is(e, b).lj;
        // return (Be[Math.abs(e + a) % Be.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == x.ga.oa ? "&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
        var tdir = window.tdir //'bmap/file'
        return tdir + "/" + b + "/" + e + "/" + a + '.png'
    }
    ;
    var Qa = new ze("\u5730\u56fe",De,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , Ee = new Hd;
    Ee.zO = [A.url.proto + A.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", A.url.proto + A.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", A.url.proto + A.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", A.url.proto + A.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Ee.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = 256 * Math.pow(2, 20 - b)
          , e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.zO[Math.abs(c + e) % this.zO.length] + this.map.Ob + "/" + this.map.Ow + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    }
    ;
    var Ta = new ze("\u4e09\u7ef4",Ee,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new mb
    });
    Ta.ac = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Ta.Ek = function(a) {
        if (!a)
            return "";
        var b = J.jC, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].oy;
        return ""
    }
    ;
    Ta.rL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var Fe = new Hd({
        Jw: q
    });
    Fe.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y;
        return (Ae[Math.abs(c + e) % Ae.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Yb("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var db = new ze("\u536b\u661f",Fe,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    })
      , Ge = new Hd({
        transparentPng: q
    });
    Ge.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = Yb("satelliteStreet");
        return (Be[Math.abs(c + e) % Be.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.ga.oa ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Va = new ze("\u6df7\u5408",[Fe, Ge],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var He = 1
      , X = {};
    window.q1 = X;
    function Y(a, b) {
        x.lang.Ja.call(this);
        this.nd = {};
        this.hn(a);
        b = b || {};
        b.na = b.renderOptions || {};
        this.m = {
            na: {
                Aa: b.na.panel || s,
                map: b.na.map || s,
                wg: b.na.autoViewport || q,
                Zt: b.na.selectFirstResult,
                Km: b.na.highlightMode,
                jc: b.na.enableDragging || t
            },
            Nt: b.onSearchComplete || ca(),
            lN: b.onMarkersSet || ca(),
            kN: b.onInfoHtmlSet || ca(),
            nN: b.onResultsHtmlSet || ca(),
            jN: b.onGetBusListComplete || ca(),
            iN: b.onGetBusLineComplete || ca(),
            gN: b.onBusListHtmlSet || ca(),
            fN: b.onBusLineHtmlSet || ca(),
            OE: b.onPolylinesSet || ca(),
            Sp: b.reqFrom || ""
        };
        this.m.na.wg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : q;
        this.m.na.Aa = x.Ic(this.m.na.Aa)
    }
    x.xa(Y, x.lang.Ja);
    x.extend(Y.prototype, {
        getResults: function() {
            return this.Kc ? this.Ri : this.ka
        },
        enableAutoViewport: function() {
            this.m.na.wg = q
        },
        disableAutoViewport: function() {
            this.m.na.wg = t
        },
        hn: function(a) {
            a && (this.nd.src = a)
        },
        fu: function(a) {
            this.m.Nt = a || ca()
        },
        setMarkersSetCallback: function(a) {
            this.m.lN = a || ca()
        },
        setPolylinesSetCallback: function(a) {
            this.m.OE = a || ca()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.kN = a || ca()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.nN = a || ca()
        },
        Gm: u("Te")
    });
    var Ie = {
        CG: A.vd,
        lb: function(a, b, c, e, f) {
            this.e_(b);
            var g = (1E5 * Math.random()).toFixed(0);
            A._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                a && a(b, c),
                delete A._rd["_cbk" + g])
            }
            ;
            e = e || "";
            b = c && c.U0 ? Mb(b, encodeURI) : Mb(b, encodeURIComponent);
            this.CG = c && c.$K ? c.NN ? c.NN : A.Ip : A.vd;
            e = this.CG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e += "&ak=" + ra;
            sa(e + ("&callback=BMap._rd._cbk" + g))
        },
        e_: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && A.alog("cus.fire", "count", b)
            }
        }
    };
    window.E1 = Ie;
    A._rd = {};
    var gb = {};
    window.D1 = gb;
    gb.$E = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    gb.LZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    gb.MZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var Je = 2
      , Ke = 6
      , Oe = 8
      , Pe = 2
      , Qe = 3
      , Re = 6
      , Se = 0
      , Te = "bt"
      , Ue = "nav"
      , Ve = "walk"
      , We = "bl"
      , Xe = "bsl"
      , Ye = "ride"
      , Ze = 15
      , $e = 18;
    A.I = window.Instance = x.lang.Tc;
    function af(a, b, c) {
        x.lang.Ja.call(this);
        if (a) {
            this.cb = "object" == typeof a ? a : x.Ic(a);
            this.page = 1;
            this.Pd = 100;
            this.YJ = "pg";
            this.bg = 4;
            this.iK = b;
            this.update = q;
            a = {
                page: 1,
                x6: 100,
                Pd: 100,
                bg: 4,
                YJ: "pg",
                update: q
            };
            c || (c = a);
            for (var e in c)
                "undefined" != typeof c[e] && (this[e] = c[e]);
            this.Ba()
        }
    }
    x.extend(af.prototype, {
        Ba: function() {
            this.za()
        },
        za: function() {
            this.zV();
            this.cb.innerHTML = this.ZV()
        },
        zV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Pd)) && (this.Pd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Pd && (this.Pd = 1);
            this.page > this.Pd && (this.page = this.Pd);
            this.page = parseInt(this.page);
            this.Pd = parseInt(this.Pd)
        },
        f4: function() {
            location.search.match(RegExp("[?&]?" + this.YJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        ZV: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.bg) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.da + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.da + "').toPage(" + b + ");"))
            }
            if (this.page < this.bg)
                e = 0 == this.page % this.bg ? this.page - this.bg - 1 : this.page - this.page % this.bg + 1,
                b = e + this.bg - 1;
            else {
                e = Math.floor(this.bg / 2);
                var f = this.bg % 2 - 1
                  , b = this.Pd > this.page + e ? this.page + e : this.Pd;
                e = this.page - e - f
            }
            this.page > this.Pd - this.bg && this.page >= this.bg && (e = this.Pd - this.bg + 1,
            b = this.Pd);
            for (f = e; f <= b; f++)
                0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Pd && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>",
                a.push(e.replace("{temp3}", "BMap.I('" + this.da + "').toPage(" + f + ");"))));
            c > this.Pd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.da + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.iK && (this.iK(a),
            this.page = a);
            this.update && this.Ba()
        }
    });
    function ib(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.jn(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.JC() : this.cD();
        this.ua = [];
        this.Cf = [];
        this.La = -1;
        this.Qa = [];
        var c = this;
        Wa.load("local", function() {
            c.Cz()
        }, q)
    }
    x.xa(ib, Y, "LocalSearch");
    ib.tq = 10;
    ib.z1 = 1;
    ib.Fn = 100;
    ib.qG = 2E3;
    ib.zG = 1E5;
    x.extend(ib.prototype, {
        search: function(a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        fn: function(a, b, c) {
            this.Qa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Yp: function(a, b, c, e) {
            this.Qa.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        we: function() {
            delete this.Ka;
            delete this.Te;
            delete this.ka;
            delete this.ra;
            this.La = -1;
            this.Wa();
            this.m.na.Aa && (this.m.na.Aa.innerHTML = "")
        },
        Jm: ca(),
        cD: function() {
            this.m.na.Zt = q
        },
        JC: function() {
            this.m.na.Zt = t
        },
        jn: function(a) {
            this.m.Sk = "number" == typeof a && !isNaN(a) ? 1 > a ? ib.tq : a > ib.Fn ? ib.tq : a : ib.tq
        },
        tf: function() {
            return this.m.Sk
        },
        toString: fa("LocalSearch")
    });
    var bf = ib.prototype;
    U(bf, {
        clearResults: bf.we,
        setPageCapacity: bf.jn,
        getPageCapacity: bf.tf,
        gotoPage: bf.Jm,
        searchNearby: bf.Yp,
        searchInBounds: bf.fn,
        search: bf.search,
        enableFirstResultSelection: bf.cD,
        disableFirstResultSelection: bf.JC
    });
    function cf(a, b) {
        Y.call(this, a, b)
    }
    x.xa(cf, Y, "BaseRoute");
    x.extend(cf.prototype, {
        we: ca()
    });
    function df(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.kn(b.policy);
        this.pF(b.intercityPolicy);
        this.uF(b.transitTypePolicy);
        this.jn(b.pageCapacity);
        this.Eb = Te;
        this.Gn = He;
        this.ua = [];
        this.La = -1;
        this.m.ul = b.enableTraffic || t;
        this.Qa = [];
        var c = this;
        Wa.load("route", function() {
            c.Ed()
        })
    }
    df.Fn = 100;
    df.wP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    df.xP = [0, 3, 4, 0, 0, 0, 5];
    x.xa(df, cf, "TransitRoute");
    x.extend(df.prototype, {
        kn: function(a) {
            this.m.Qd = 0 <= a && 5 >= a ? a : 0
        },
        pF: function(a) {
            this.m.Om = 0 <= a && 2 >= a ? a : 0
        },
        uF: function(a) {
            this.m.tn = 0 <= a && 2 >= a ? a : 0
        },
        BA: function(a, b) {
            this.Qa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        jn: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.m.Sk = df.Fn;
                return
            }
            this.m.Sk = "number" !== typeof a ? df.Fn : 1 <= a && a <= df.Fn ? Math.round(a) : df.Fn
        },
        toString: fa("TransitRoute"),
        s2: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var ef = df.prototype;
    U(ef, {
        _internalSearch: ef.BA
    });
    function ff(a, b) {
        Y.call(this, a, b);
        this.ua = [];
        this.La = -1;
        this.Qa = [];
        var c = this
          , e = this.m.na;
        1 !== e.Km && 2 !== e.Km && (e.Km = 1);
        this.Xn = this.m.na.jc ? q : t;
        Wa.load("route", function() {
            c.Ed()
        });
        this.Ox && this.Ox()
    }
    ff.MP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.xa(ff, cf, "DWRoute");
    x.extend(ff.prototype, {
        search: function(a, b, c) {
            this.Qa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function gf(a, b) {
        ff.call(this, a, b);
        b = b || {};
        this.m.ul = b.enableTraffic || t;
        this.kn(b.policy);
        this.Eb = Ue;
        this.Gn = Qe
    }
    x.xa(gf, ff, "DrivingRoute");
    gf.prototype.kn = function(a) {
        this.m.Qd = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function hf(a, b) {
        ff.call(this, a, b);
        this.Eb = Ve;
        this.Gn = Pe;
        this.Xn = t
    }
    x.xa(hf, ff, "WalkingRoute");
    function jf(a, b) {
        ff.call(this, a, b);
        b = b || {};
        this.m.ul = b.enableTraffic || t;
        this.RS = b.renderOptions.lineType || 0;
        this.Eb = Ue;
        this.Gn = Qe
    }
    x.xa(jf, ff, "TruckRoute");
    jf.prototype.kn = function(a) {
        this.m.Qd = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function kf(a, b) {
        ff.call(this, a, b);
        this.Eb = Ye;
        this.Gn = Re;
        this.Xn = t
    }
    x.xa(kf, ff, "RidingRoute");
    function lf(a, b) {
        x.lang.Ja.call(this);
        this.Yf = [];
        this.Uk = [];
        this.m = b;
        this.Cj = a;
        this.map = this.m.na.map || s;
        this.VN = this.m.VN;
        this.Fb = s;
        this.yk = 0;
        this.GF = "";
        this.qf = 1;
        this.jD = "";
        this.Tp = [0, 0, 0, 0, 0, 0, 0];
        this.JM = [];
        this.ss = [1, 1, 1, 1, 1, 1, 1];
        this.HO = [1, 1, 1, 1, 1, 1, 1];
        this.Up = [0, 0, 0, 0, 0, 0, 0];
        this.bn = [0, 0, 0, 0, 0, 0, 0];
        this.Ib = [{
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }, {
            B: "",
            Jd: 0,
            vn: 0,
            x: 0,
            y: 0,
            sa: -1
        }];
        this.ji = -1;
        this.wu = [];
        this.RF = [];
        Wa.load("route", ca())
    }
    x.lang.xa(lf, x.lang.Ja, "RouteAddr");
    var mf = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(mf);
    var nf = /android/i.test(mf);
    function of(a) {
        this.bf = a || {}
    }
    x.extend(of.prototype, {
        UN: function(a, b, c) {
            var e = this;
            Wa.load("route", function() {
                e.Ed(a, b, c)
            })
        }
    });
    function pf(a) {
        this.m = {};
        x.extend(this.m, a);
        this.Qa = [];
        var b = this;
        Wa.load("othersearch", function() {
            b.Ed()
        })
    }
    x.xa(pf, x.lang.Ja, "Geocoder");
    x.extend(pf.prototype, {
        Fm: function(a, b, c) {
            this.Qa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Cm: function(a, b, c) {
            this.Qa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: fa("Geocoder")
    });
    var qf = pf.prototype;
    U(qf, {
        getPoint: qf.Fm,
        getLocation: qf.Cm
    });
    function Geolocation(a) {
        a = a || {};
        this.M = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            Li: a.SDKLocation || t
        };
        this.ue = [];
        var b = this;
        Wa.load("othersearch", function() {
            for (var a = 0, e; e = b.ue[a]; a++)
                b[e.method].apply(b, e.arguments)
        })
    }
    x.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.ue.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return Je
        },
        enableSDKLocation: function() {
            K() && (this.M.Li = q)
        },
        disableSDKLocation: function() {
            this.M.Li = t
        }
    });
    function rf(a) {
        a = a || {};
        a.na = a.renderOptions || {};
        this.m = {
            na: {
                map: a.na.map || s
            }
        };
        this.Qa = [];
        var b = this;
        Wa.load("othersearch", function() {
            b.Ed()
        })
    }
    x.xa(rf, x.lang.Ja, "LocalCity");
    x.extend(rf.prototype, {
        get: function(a) {
            this.Qa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: fa("LocalCity")
    });
    function sf() {
        this.Qa = [];
        var a = this;
        Wa.load("othersearch", function() {
            a.Ed()
        })
    }
    x.xa(sf, x.lang.Ja, "Boundary");
    x.extend(sf.prototype, {
        get: function(a, b) {
            this.Qa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: fa("Boundary")
    });
    function tf(a, b) {
        Y.call(this, a, b);
        this.JP = We;
        this.LP = Ze;
        this.IP = Xe;
        this.KP = $e;
        this.Qa = [];
        var c = this;
        Wa.load("buslinesearch", function() {
            c.Ed()
        })
    }
    tf.Bv = J.ta + "iw_plus.gif";
    tf.FS = J.ta + "iw_minus.gif";
    tf.uU = J.ta + "stop_icon.png";
    x.xa(tf, Y);
    x.extend(tf.prototype, {
        getBusList: function(a) {
            this.Qa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Qa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.jN = a || ca()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.iN = a || ca()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.gN = a || ca()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.fN = a || ca()
        },
        setPolylinesSetCallback: function(a) {
            this.m.OE = a || ca()
        }
    });
    function uf(a) {
        Y.call(this, a);
        a = a || {};
        this.fb = {
            input: a.input || s,
            cC: a.baseDom || s,
            types: a.types || [],
            Nt: a.onSearchComplete || ca()
        };
        this.nd.src = a.location || "\u5168\u56fd";
        this.hj = "";
        this.tg = s;
        this.YH = "";
        this.Yi();
        Ua(Ma);
        var b = this;
        Wa.load("autocomplete", function() {
            b.Ed()
        })
    }
    x.xa(uf, Y, "Autocomplete");
    x.extend(uf.prototype, {
        Yi: ca(),
        show: ca(),
        aa: ca(),
        vF: function(a) {
            this.fb.types = a
        },
        hn: function(a) {
            this.nd.src = a
        },
        search: da("hj"),
        Cy: da("YH"),
        fu: function(a) {
            this.fb.Nt = a
        }
    });
    var Xa;
    function Sa(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Qe && Za() && f.m.haveBreakId && f.m.indoorExitControl === q ? x.U.show(f.kr) : x.U.aa(f.kr),
            this.ud && this.m.closeControl && this.Gf && this.P && this.P.Sa() === this.R ? x.U.show(f.Gf) : x.U.aa(f.Gf),
            this.m.forceCloseControl && x.U.show(f.Gf)) : (x.U.aa(f.Gf),
            x.U.aa(f.kr))
        }
        this.R = "string" == typeof a ? x.fa(a) : a;
        this.da = vf++;
        this.m = {
            enableScrollWheelZoom: q,
            panoramaRenderer: Ra() ? "javascript" : "flash",
            swfSrc: A.rh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: q,
            indoorExitControl: q,
            indoorFloorControl: t,
            linksControl: q,
            clickOnRoad: q,
            navigationControl: q,
            closeControl: q,
            indoorSceneSwitchControl: q,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {}, e;
        for (e in b)
            this.m[e] = b[e];
        b.closeControl === q && (this.m.forceCloseControl = q);
        b.useWebGL === t && Ra(t);
        this.Oa = {
            heading: 0,
            pitch: 0
        };
        this.fo = [];
        this.Mb = this.hb = s;
        this.nk = this.hr();
        this.ua = [];
        this.Rc = 1;
        this.Qe = this.bT = this.Xg = "";
        this.Pe = {};
        this.Sf = s;
        this.fh = [];
        this.Ar = [];
        "cvsRender" == this.nk || Ra() ? (this.gk = 90,
        this.ik = -90) : "cssRender" == this.nk && (this.gk = 45,
        this.ik = -45);
        this.Er = t;
        var f = this
          , g = (1E5 * Math.random()).toFixed(0);
        A._rd = A._rd || {};
        A._rd["_cbk" + g] = function(a) {
            if (!a || a.error === l || a.error !== 0)
                Mc("PANORAMA");
            else {
                this.nk === "flashRender" ? Wa.load("panoramaflash", function() {
                    f.Yi()
                }, q) : Wa.load("panorama", function() {
                    f.ob()
                }, q);
                b.Ze == "api" ? Ua(Ia) : Ua(Ja)
            }
            delete A._rd["_cbk" + g]
        }
        ;
        this.ho = function() {
            Lc("PANORAMA", "BMap._rd._cbk" + g);
            this.ho = ca()
        }
        ;
        this.m.PS !== q && (this.ho(),
        A.Dq("cus.fire", "count", "z_loadpanoramacount"));
        this.HT(this.R);
        this.addEventListener("id_changed", function() {
            Ua(Ga, {
                from: b.Ze
            })
        });
        this.YP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var wf = 4
      , xf = 1
      , yf = 5
      , vf = 0;
    x.lang.xa(Sa, x.lang.Ja, "Panorama");
    x.extend(Sa.prototype, {
        YP: function() {
            var a = this
              , b = this.Gf = F("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.aa()
            }
            ;
            this.R.appendChild(b);
            var c = this.kr = F("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.hp()
            }
            ;
            this.R.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        hp: ca(),
        HT: function(a) {
            var b, c;
            b = a.style;
            c = $a(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = $a(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        JX: u("fo"),
        $b: u("hb"),
        iY: u("lw"),
        kO: u("lw"),
        ma: u("Mb"),
        Na: u("Oa"),
        la: u("Rc"),
        Cg: u("Xg"),
        h4: function() {
            return this.o2 || []
        },
        a4: u("bT"),
        ft: u("Qe"),
        Gy: function(a) {
            a !== this.Qe && (this.Qe = a,
            this.dispatchEvent(new O("onscene_type_changed")))
        },
        jO: function(a) {
            a !== yf && (yf = a)
        },
        eO: function(a) {
            a !== wf && (wf = a)
        },
        Gc: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = l);
            a != this.hb && (this.Dl = this.hb,
            this.El = this.Mb,
            this.hb = a,
            this.Qe = b || "street",
            this.Mb = s,
            c && c.pov && this.zd(c.pov))
        },
        va: function(a) {
            a.Ub(this.Mb) || (this.Dl = this.hb,
            this.El = this.Mb,
            this.Mb = a,
            this.hb = s)
        },
        zd: function(a) {
            if (a) {
                var a = this.Oa.pitch
                  , b = this.Oa.heading
                  , b = this.CC(b);
                a > this.gk ? a = this.gk : a < this.ik && (a = this.ik);
                this.Er = q;
                this.Oa.pitch = a;
                this.Oa.heading = b
            }
        },
        S_: function(a, b) {
            this.ik = 0 <= a ? 0 : a;
            this.gk = 0 >= b ? 0 : b
        },
        CC: function(a) {
            return a - 360 * Math.floor(a / 360)
        },
        Xc: function(a) {
            a != this.Rc && (a > wf && (a = wf),
            a < xf && (a = xf),
            a != this.Rc && (this.Rc = a),
            "cssRender" === this.nk && this.zd(this.Oa))
        },
        wB: function() {
            if (this.P)
                for (var a = this.P.xx(), b = 0; b < a.length; b++)
                    (a[b]instanceof W || a[b]instanceof pd) && a[b].point && this.ua.push(a[b])
        },
        qF: da("P"),
        eu: function(a) {
            this.Sf = a || "none"
        },
        Hj: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.m[b][c] = a[b][c];
                else
                    this.m[b] = a[b];
                a.closeControl === q && (this.m.forceCloseControl = q);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new O("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new O("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new O("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new O("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new O("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new O("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new O("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new O("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new O("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new O("onindoorfloor_options_changed"))
                }
            }
        },
        Ok: function() {
            this.Ml.style.visibility = "hidden"
        },
        Ky: function() {
            this.Ml.style.visibility = "visible"
        },
        RW: function() {
            this.m.enableScrollWheelZoom = q
        },
        rW: function() {
            this.m.enableScrollWheelZoom = t
        },
        show: function() {
            this.m.visible = q
        },
        aa: function() {
            this.m.visible = t
        },
        hr: function() {
            return Za() && !K() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !K() && Vb() ? "cvsRender" : "cssRender"
        },
        Ra: function(a) {
            this.Pe[a.qd] = a
        },
        Jb: function(a) {
            delete this.Pe[a]
        },
        Cx: function() {
            return this.m.visible
        },
        ph: function() {
            return new M(this.R.clientWidth,this.R.clientHeight)
        },
        Sa: u("R"),
        oL: function() {
            var a = A.rh("baidumap", "?")
              , b = this.$b();
            if (b) {
                var b = {
                    panotype: this.ft(),
                    heading: this.Na().heading,
                    pitch: this.Na().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Hx: function() {
            this.Hj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        zF: function() {
            this.Hj({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        UB: function(a) {
            function b(a, b) {
                return function() {
                    a.Ar.push({
                        VM: b,
                        UM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
                e = c[f],
                this[e] = b(this, e);
            this.fh.push(a)
        },
        aF: function(a) {
            for (var b = this.fh.length; b--; )
                this.fh[b] === a && this.fh.splice(b, 1)
        },
        oF: ca()
    });
    var zf = Sa.prototype;
    U(zf, {
        setId: zf.Gc,
        setPosition: zf.va,
        setPov: zf.zd,
        setZoom: zf.Xc,
        setOptions: zf.Hj,
        getId: zf.$b,
        getPosition: zf.ma,
        getPov: zf.Na,
        getZoom: zf.la,
        getLinks: zf.JX,
        getBaiduMapUrl: zf.oL,
        hideMapLogo: zf.Hx,
        showMapLogo: zf.zF,
        enableDoubleClickZoom: zf.q3,
        disableDoubleClickZoom: zf.h3,
        enableScrollWheelZoom: zf.RW,
        disableScrollWheelZoom: zf.rW,
        show: zf.show,
        hide: zf.aa,
        addPlugin: zf.UB,
        removePlugin: zf.aF,
        getVisible: zf.Cx,
        addOverlay: zf.Ra,
        removeOverlay: zf.Jb,
        getSceneType: zf.ft,
        setPanoramaPOIType: zf.eu,
        exitInter: zf.hp,
        setInteractiveState: zf.oF
    });
    U(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Af() {
        x.lang.Ja.call(this);
        this.qd = "PanoramaOverlay_" + this.da;
        this.W = s;
        this.Xa = q
    }
    x.lang.xa(Af, x.lang.Ja, "PanoramaOverlayBase");
    x.extend(Af.prototype, {
        d4: u("qd"),
        za: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Rf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Bf(a, b) {
        Af.call(this);
        var c = {
            position: s,
            altitude: 2,
            displayDistance: q
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Mb = c.position;
        this.Tj = a;
        this.Eq = c.altitude;
        this.kR = c.displayDistance;
        this.JF = c.color;
        this.bM = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.aK = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.eK = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.eE = c.imageUrl;
        this.size = c.size;
        this.De = c.image;
        this.width = c.width;
        this.height = c.height;
        this.AY = c.imageData;
        this.borderWidth = c.borderWidth
    }
    x.lang.xa(Bf, Af, "PanoramaLabel");
    x.extend(Bf.prototype, {
        G3: u("borderWidth"),
        getImageData: u("AY"),
        Im: u("JF"),
        V3: u("bM"),
        C3: u("backgroundColor"),
        D3: u("aK"),
        E3: u("borderColor"),
        F3: u("eK"),
        T3: u("fontSize"),
        e4: u("padding"),
        W3: u("eE"),
        Cb: u("size"),
        qx: u("De"),
        va: function(a) {
            this.Mb = a;
            this.Rf("position", a)
        },
        ma: u("Mb"),
        Pc: function(a) {
            this.Tj = a;
            this.Rf("content", a)
        },
        Fk: u("Tj"),
        iF: function(a) {
            this.Eq = a;
            this.Rf("altitude", a)
        },
        kp: u("Eq"),
        Na: function() {
            var a = this.ma()
              , b = s
              , c = s;
            this.W && (c = this.W.ma());
            if (a && c)
                if (a.Ub(c))
                    b = this.W.Na();
                else {
                    b = {};
                    b.heading = Cf(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.kp()
                      , e = this.$n();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        $n: function() {
            var a = 0, b, c;
            this.W && (b = this.W.ma(),
            (c = this.ma()) && !c.Ub(b) && (a = R.Gk(b, c)));
            return a
        },
        aa: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Rf: ca()
    });
    var Df = Bf.prototype;
    U(Df, {
        setPosition: Df.va,
        getPosition: Df.ma,
        setContent: Df.Pc,
        getContent: Df.Fk,
        setAltitude: Df.iF,
        getAltitude: Df.kp,
        getPov: Df.Na,
        show: Df.show,
        hide: Df.aa
    });
    function Ef(a, b) {
        Af.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: s,
            altitude: 2
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Mb = a;
        this.VH = c.icon;
        this.uJ = c.title;
        this.Eq = c.altitude;
        this.tT = c.panoInfo;
        this.Oa = {
            heading: 0,
            pitch: 0
        }
    }
    x.lang.xa(Ef, Af, "PanoramaMarker");
    x.extend(Ef.prototype, {
        va: function(a) {
            this.Mb = a;
            this.Rf("position", a)
        },
        ma: u("Mb"),
        Hc: function(a) {
            this.uJ = a;
            this.Rf("title", a)
        },
        sp: u("uJ"),
        Wb: function(a) {
            this.VH = icon;
            this.Rf("icon", a)
        },
        mp: u("VH"),
        iF: function(a) {
            this.Eq = a;
            this.Rf("altitude", a)
        },
        kp: u("Eq"),
        PD: u("tT"),
        Na: function() {
            var a = s;
            if (this.W) {
                var a = this.W.ma()
                  , b = this.ma()
                  , a = Cf(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Oa;
            return a
        },
        Rf: ca()
    });
    var Ff = Ef.prototype;
    U(Ff, {
        setPosition: Ff.va,
        getPosition: Ff.ma,
        setTitle: Ff.Hc,
        getTitle: Ff.sp,
        setAltitude: Ff.iF,
        getAltitude: Ff.kp,
        getPanoInfo: Ff.PD,
        getIcon: Ff.mp,
        setIcon: Ff.Wb,
        getPov: Ff.Na
    });
    function Cf(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Ra(a) {
        if ("boolean" === typeof Gf)
            return Gf;
        if (a === t || !window.WebGLRenderingContext)
            return Gf = t;
        if (x.platform.zj) {
            a = 0;
            try {
                var b = s
                  , c = navigator.userAgent.toLowerCase();
                0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                b = parseInt(b.split(".")[0], 10));
                a = b
            } catch (e) {
                console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
            }
            if (5 > a)
                return Gf = t
        }
        c = document.createElement("canvas");
        a = s;
        try {
            a = c.getContext("webgl")
        } catch (f) {
            Gf = t
        }
        return Gf = a === s ? t : q
    }
    var Gf;
    function Hf() {
        if ("boolean" === typeof If)
            return If;
        If = q;
        if (x.platform.oE)
            return q;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? q : If = t
    }
    var If;
    function Zc(a, b) {
        this.W = a || s;
        var c = this;
        c.W && c.ha();
        Wa.load("pservice", function() {
            c.DQ()
        });
        "api" == (b || {}).Ze ? Ua(Ka) : Ua(La);
        this.Dd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    A.Tk(function(a) {
        "flashRender" !== a.hr() && new Zc(a,{
            Ze: "api"
        })
    });
    x.extend(Zc.prototype, {
        ha: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.lw) {
                        b.kO(a.id);
                        b.ia = a;
                        Hf() || b.dispatchEvent(new O("onthumbnail_complete"));
                        b.hb != s && (b.El = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Mb = a[c];
                                    break;
                                case "id":
                                    b.hb = a[c];
                                    break;
                                case "links":
                                    b.fo = a[c];
                                    break;
                                case "zoom":
                                    b.Rc = a[c]
                                }
                        if (b.El) {
                            var g = b.El
                              , i = b._position;
                            c = g.lat;
                            var k = i.lat
                              , m = S(k - c)
                              , g = S(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(S(c)) * Math.cos(S(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.nH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new O("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new O("onposition_changed"));
                        b.dispatchEvent(new O("onlinks_changed"));
                        b.dispatchEvent(new O("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.lm ? (b.Hj({
                            haveBreakId: q
                        }),
                        Za() && b.m.closeControl && x.U.show(b.kr)) : x.U.aa(b.kr)
                    }
                } else
                    b.hb = b.Dl,
                    b.Mb = b.El,
                    b.dispatchEvent(new O("onnoresult"))
            }
            var b = this.W
              , c = this;
            b.addEventListener("id_changed", function() {
                A.Wy("y");
                c.qp(b.$b(), a)
            });
            b.addEventListener("iid_changed", function() {
                A.Wy("y");
                c.sg(Zc.ol + "qt=idata&iid=" + b.rA + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , f = {};
                        f.lm = b.BreakID;
                        for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.qp(f.id, a, f)
                    }
                }, q)
            });
            b.addEventListener("position_changed_inner", function() {
                A.Wy("y");
                c.uj(b.ma(), a)
            })
        },
        qp: function(a, b) {
            this.Dd.getPanoramaById.push(arguments)
        },
        uj: function(a, b, c) {
            this.Dd.getPanoramaByLocation.push(arguments)
        },
        ZD: function(a, b, c, e) {
            this.Dd.getVisiblePOIs.push(arguments)
        },
        Ax: function(a, b) {
            this.Dd.getRecommendPanosById.push(arguments)
        },
        zx: function(a) {
            this.Dd.getPanoramaVersions.push(arguments)
        },
        hC: function(a, b) {
            this.Dd.checkPanoSupportByCityCode.push(arguments)
        },
        yx: function(a, b) {
            this.Dd.getPanoramaByPOIId.push(arguments)
        },
        sL: function(a) {
            this.Dd.getCopyrightProviders.push(arguments)
        }
    });
    var Jf = Zc.prototype;
    U(Jf, {
        getPanoramaById: Jf.qp,
        getPanoramaByLocation: Jf.uj,
        getPanoramaByPOIId: Jf.yx
    });
    function Yc(a) {
        Hd.call(this);
        "api" == (a || {}).Ze ? Ua(Ea) : Ua(Fa)
    }
    Yc.HG = A.rh("pano", "");
    Yc.prototype = new Hd;
    Yc.prototype.getTilesUrl = function(a, b) {
        var c = Yc.HG[(a.x + a.y) % Yc.HG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        x.ga.oa && 6 >= x.ga.oa && (c += "&color_dep=32");
        var e = Sb(c);
        e ? (e = Oc(e.path, {
            Bp: t
        }),
        c += "&" + e) : c = s;
        return c
    }
    ;
    Yc.prototype.Bt = fa(q);
    Kf.be = new R;
    function Kf() {}
    x.extend(Kf, {
        sW: function(a, b, c) {
            c = x.lang.Tc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Kf.be.Fj(new Q(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new O("on" + a), b)
        }
    });
    var Lf = Kf;
    U(Lf, {
        dispatchFlashEvent: Lf.sW
    });
    var Mf = {
        zP: 50
    };
    Mf.Nu = A.rh("pano")[0];
    Mf.Lu = {
        width: 220,
        height: 60
    };
    x.extend(Mf, {
        kM: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                e();
            else {
                this.oo === l && (this.oo = new Zc(s,{
                    Ze: "api"
                }));
                var f = this;
                this.oo.hC(b, function(b) {
                    b ? f.oo.uj(c.lngLat, Mf.zP, function(b) {
                        if (b && b.id) {
                            var g = b.id
                              , m = b.Ah
                              , b = b.Bh
                              , n = Zc.be.Ig(c.lngLat)
                              , o = f.hS(n, {
                                x: m,
                                y: b
                            })
                              , m = f.DL(g, o, 0, Mf.Lu.width, Mf.Lu.height);
                            a.content = f.iS(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ka.V(x.Ic("infoWndPano"), "click", function() {
                                    c.panoInstance.Gc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.zd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        iS: function(a, b, c, e) {
            var c = c || "", f;
            !e || !a.split(e)[0] ? (e = a,
            a = "") : (e = a.split(e)[0],
            f = e.lastIndexOf("<"),
            e = a.substring(0, f),
            a = a.substring(f));
            f = [];
            var g = Mf.Lu.width
              , i = Mf.Lu.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        hS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        DL: function(a, b, c, e, f) {
            var g = Mf.Nu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}"
              , i = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            }
              , g = g.replace(/\{(.*?)\}/g, function(a, b) {
                return i[b]
            });
            return (a = Sb(g)) ? (a = Oc(a.path, {
                Bp: t
            }),
            g + ("&" + a)) : s
        }
    });
    var Nf = document, Of = Math, Pf = Nf.createElement("div").style, Qf;
    a: {
        for (var Rf = ["t", "webkitT", "MozT", "msT", "OT"], Sf, Tf = 0, Uf = Rf.length; Tf < Uf; Tf++)
            if (Sf = Rf[Tf] + "ransform",
            Sf in Pf) {
                Qf = Rf[Tf].substr(0, Rf[Tf].length - 1);
                break a
            }
        Qf = t
    }
    var Vf = Qf ? "-" + Qf.toLowerCase() + "-" : ""
      , Xf = Wf("transform")
      , Yf = Wf("transitionProperty")
      , Zf = Wf("transitionDuration")
      , $f = Wf("transformOrigin")
      , ag = Wf("transitionTimingFunction")
      , cg = Wf("transitionDelay")
      , nf = /android/gi.test(navigator.appVersion)
      , dg = /iphone|ipad/gi.test(navigator.appVersion)
      , eg = /hp-tablet/gi.test(navigator.appVersion)
      , fg = Wf("perspective")in Pf
      , gg = "ontouchstart"in window && !eg
      , hg = Qf !== t
      , ig = Wf("transition")in Pf
      , jg = "onorientationchange"in window ? "orientationchange" : "resize"
      , kg = gg ? "touchstart" : "mousedown"
      , lg = gg ? "touchmove" : "mousemove"
      , mg = gg ? "touchend" : "mouseup"
      , ng = gg ? "touchcancel" : "mouseup"
      , og = Qf === t ? t : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[Qf]
      , pg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , qg = window.cancelRequestAnimationFrame || window.P6 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , rg = fg ? " translateZ(0)" : "";
    function sg(a, b) {
        var c = this, e;
        c.An = "object" == typeof a ? a : Nf.getElementById(a);
        c.An.style.overflow = "hidden";
        c.Rb = c.An.children[0];
        c.options = {
            xp: q,
            wn: q,
            x: 0,
            y: 0,
            Oo: q,
            lV: t,
            dy: q,
            CE: q,
            hl: q,
            Ii: t,
            B0: 0,
            Mw: t,
            Ex: q,
            qi: q,
            Ji: q,
            pD: nf,
            Ix: dg,
            $W: dg && fg,
            fF: "",
            zoom: t,
            jl: 1,
            nq: 4,
            uW: 2,
            eP: "scroll",
            mu: t,
            Ny: 1,
            mN: s,
            eN: function(a) {
                a.preventDefault()
            },
            pN: s,
            dN: s,
            oN: s,
            cN: s,
            hy: s,
            qN: s,
            hN: s,
            Np: s,
            rN: s,
            Mp: s
        };
        for (e in b)
            c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.hl = hg && c.options.hl;
        c.options.qi = c.options.xp && c.options.qi;
        c.options.Ji = c.options.wn && c.options.Ji;
        c.options.zoom = c.options.hl && c.options.zoom;
        c.options.Ii = ig && c.options.Ii;
        c.options.zoom && nf && (rg = "");
        c.Rb.style[Yf] = c.options.hl ? Vf + "transform" : "top left";
        c.Rb.style[Zf] = "0";
        c.Rb.style[$f] = "0 0";
        c.options.Ii && (c.Rb.style[ag] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.hl ? c.Rb.style[Xf] = "translate(" + c.x + "px," + c.y + "px)" + rg : c.Rb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Ii && (c.options.pD = q);
        c.refresh();
        c.ha(jg, window);
        c.ha(kg);
        !gg && "none" != c.options.eP && (c.ha("DOMMouseScroll"),
        c.ha("mousewheel"));
        c.options.Mw && (c.yV = setInterval(function() {
            c.BQ()
        }, 500));
        this.options.Ex && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.aM || b, c) : e.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.aM || (b.aM = function(a) {
                a.d_ || b(a)
            }
            ), c) : e.call(document.body, a, b, c)
        }
        ),
        c.ha("click", document.body, q))
    }
    sg.prototype = {
        enabled: q,
        x: 0,
        y: 0,
        Ij: [],
        scale: 1,
        xC: 0,
        yC: 0,
        cf: [],
        xf: [],
        bC: s,
        Yy: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case kg:
                if (!gg && 0 !== a.button)
                    break;
                this.cw(a);
                break;
            case lg:
                this.dT(a);
                break;
            case mg:
            case ng:
                this.kv(a);
                break;
            case jg:
                this.pB();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.FU(a);
                break;
            case og:
                this.CU(a);
                break;
            case "click":
                this.LQ(a)
            }
        },
        BQ: function() {
            !this.zh && (!this.kl && !(this.im || this.By == this.Rb.offsetWidth * this.scale && this.Xp == this.Rb.offsetHeight * this.scale)) && this.refresh()
        },
        Uv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Nf.createElement("div"),
            this.options.fF ? b.className = this.options.fF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Ji ? "7" : "2") + "px" : "width:7px;bottom:" + (this.qi ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + Vf + "transition-property:opacity;" + Vf + "transition-duration:" + (this.options.$W ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Ix ? "0" : "1"),
            this.An.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = Nf.createElement("div"),
            this.options.fF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Vf + "background-clip:padding-box;" + Vf + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Vf + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + Vf + "transition-property:" + Vf + "transform;" + Vf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Vf + "transition-duration:0;" + Vf + "transform: translate(0,0)" + rg,
            this.options.Ii && (b.style.cssText += ";" + Vf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.XL = this.YL.clientWidth,
            this.sY = Of.max(Of.round(this.XL * this.XL / this.By), 8),
            this.rY.style.width = this.sY + "px") : (this.XO = this.YO.clientHeight,
            this.Y0 = Of.max(Of.round(this.XO * this.XO / this.Xp), 8),
            this.X0.style.height = this.Y0 + "px"),
            this.qB(a, q)) : this[a + "ScrollbarWrapper"] && (hg && (this[a + "ScrollbarIndicator"].style[Xf] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = s,
            this[a + "ScrollbarIndicator"] = s)
        },
        pB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, nf ? 200 : 0)
        },
        Dr: function(a, b) {
            this.kl || (a = this.xp ? a : 0,
            b = this.wn ? b : 0,
            this.options.hl ? this.Rb.style[Xf] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + rg : (a = Of.round(a),
            b = Of.round(b),
            this.Rb.style.left = a + "px",
            this.Rb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.qB("h"),
            this.qB("v"))
        },
        qB: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.pD || (c = this[a + "ScrollbarIndicatorSize"] + Of.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.pD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Of.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[cg] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Ix ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[Xf] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + rg)
        },
        LQ: function(a) {
            if (a.DR === q)
                return this.QB = a.target,
                this.ix = Date.now(),
                q;
            if (this.QB && this.ix) {
                if (600 < Date.now() - this.ix)
                    return this.ix = this.QB = s,
                    q
            } else {
                for (var b = a.target; b != this.Rb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return q
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.d_ = q,
                a.stopPropagation(),
                a.preventDefault(),
                this.ix = this.QB = s,
                t
        },
        cw: function(a) {
            var b = gg ? a.touches[0] : a, c, e;
            if (this.enabled) {
                this.options.eN && this.options.eN.call(this, a);
                (this.options.Ii || this.options.zoom) && this.yJ(0);
                this.kl = this.im = this.zh = t;
                this.HC = this.GC = this.yw = this.xw = this.MC = this.LC = 0;
                this.options.zoom && (gg && 1 < a.touches.length) && (e = Of.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = Of.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.D0 = Of.sqrt(e * e + c * c),
                this.jy = Of.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.$F) / 2 - this.x,
                this.ky = Of.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.aG) / 2 - this.y,
                this.options.Np && this.options.Np.call(this, a));
                if (this.options.dy && (this.options.hl ? (c = getComputedStyle(this.Rb, s)[Xf].replace(/[^0-9\-.,]/g, "").split(","),
                e = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Rb, s).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Rb, s).top.replace(/[^0-9-]/g, "")),
                e != this.x || c != this.y))
                    this.options.Ii ? this.fe(og) : qg(this.bC),
                    this.Ij = [],
                    this.Dr(e, c),
                    this.options.hy && this.options.hy.call(this);
                this.zw = this.x;
                this.Aw = this.y;
                this.qu = this.x;
                this.ru = this.y;
                this.Ah = b.pageX;
                this.Bh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.pN && this.options.pN.call(this, a);
                this.ha(lg, window);
                this.ha(mg, window);
                this.ha(ng, window)
            }
        },
        dT: function(a) {
            var b = gg ? a.touches[0] : a
              , c = b.pageX - this.Ah
              , e = b.pageY - this.Bh
              , f = this.x + c
              , g = this.y + e
              , i = a.timeStamp || Date.now();
            this.options.dN && this.options.dN.call(this, a);
            if (this.options.zoom && gg && 1 < a.touches.length)
                f = Of.abs(a.touches[0].pageX - a.touches[1].pageX),
                g = Of.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.C0 = Of.sqrt(f * f + g * g),
                this.kl = q,
                b = 1 / this.D0 * this.C0 * this.scale,
                b < this.options.jl ? b = 0.5 * this.options.jl * Math.pow(2, b / this.options.jl) : b > this.options.nq && (b = 2 * this.options.nq * Math.pow(0.5, this.options.nq / b)),
                this.Fp = b / this.scale,
                f = this.jy - this.jy * this.Fp + this.x,
                g = this.ky - this.ky * this.Fp + this.y,
                this.Rb.style[Xf] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + rg,
                this.options.rN && this.options.rN.call(this, a);
            else {
                this.Ah = b.pageX;
                this.Bh = b.pageY;
                if (0 < f || f < this.qe)
                    f = this.options.Oo ? this.x + c / 2 : 0 <= f || 0 <= this.qe ? 0 : this.qe;
                if (g > this.vf || g < this.yd)
                    g = this.options.Oo ? this.y + e / 2 : g >= this.vf || 0 <= this.yd ? this.vf : this.yd;
                this.LC += c;
                this.MC += e;
                this.xw = Of.abs(this.LC);
                this.yw = Of.abs(this.MC);
                6 > this.xw && 6 > this.yw || (this.options.CE && (this.xw > this.yw + 5 ? (g = this.y,
                e = 0) : this.yw > this.xw + 5 && (f = this.x,
                c = 0)),
                this.zh = q,
                this.Dr(f, g),
                this.GC = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.HC = 0 < e ? -1 : 0 > e ? 1 : 0,
                300 < i - this.startTime && (this.startTime = i,
                this.qu = this.x,
                this.ru = this.y),
                this.options.oN && this.options.oN.call(this, a))
            }
        },
        kv: function(a) {
            if (!(gg && 0 !== a.touches.length)) {
                var b = this, c = gg ? a.changedTouches[0] : a, e, f, g = {
                    Ia: 0,
                    time: 0
                }, i = {
                    Ia: 0,
                    time: 0
                }, k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.fe(lg, window);
                b.fe(mg, window);
                b.fe(ng, window);
                b.options.cN && b.options.cN.call(b, a);
                if (b.kl)
                    e = b.scale * b.Fp,
                    e = Math.max(b.options.jl, e),
                    e = Math.min(b.options.nq, e),
                    b.Fp = e / b.scale,
                    b.scale = e,
                    b.x = b.jy - b.jy * b.Fp + b.x,
                    b.y = b.ky - b.ky * b.Fp + b.y,
                    b.Rb.style[Zf] = "200ms",
                    b.Rb.style[Xf] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + rg,
                    b.kl = t,
                    b.refresh(),
                    b.options.Mp && b.options.Mp.call(b, a);
                else {
                    if (b.zh) {
                        if (300 > k && b.options.dy) {
                            g = e ? b.mI(e - b.qu, k, -b.x, b.By - b.Eu + b.x, b.options.Oo ? b.Eu : 0) : g;
                            i = f ? b.mI(f - b.ru, k, -b.y, 0 > b.yd ? b.Xp - b.Bn + b.y - b.vf : 0, b.options.Oo ? b.Bn : 0) : i;
                            e = b.x + g.Ia;
                            f = b.y + i.Ia;
                            if (0 < b.x && 0 < e || b.x < b.qe && e < b.qe)
                                g = {
                                    Ia: 0,
                                    time: 0
                                };
                            if (b.y > b.vf && f > b.vf || b.y < b.yd && f < b.yd)
                                i = {
                                    Ia: 0,
                                    time: 0
                                }
                        }
                        g.Ia || i.Ia ? (c = Of.max(Of.max(g.time, i.time), 10),
                        b.options.mu && (g = e - b.zw,
                        i = f - b.Aw,
                        Of.abs(g) < b.options.Ny && Of.abs(i) < b.options.Ny ? b.scrollTo(b.zw, b.Aw, 200) : (g = b.lJ(e, f),
                        e = g.x,
                        f = g.y,
                        c = Of.max(g.time, c))),
                        b.scrollTo(Of.round(e), Of.round(f), c)) : b.options.mu ? (g = e - b.zw,
                        i = f - b.Aw,
                        Of.abs(g) < b.options.Ny && Of.abs(i) < b.options.Ny ? b.scrollTo(b.zw, b.Aw, 200) : (g = b.lJ(b.x, b.y),
                        (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.ro(200)
                    } else {
                        if (gg)
                            if (b.IK && b.options.zoom)
                                clearTimeout(b.IK),
                                b.IK = s,
                                b.options.Np && b.options.Np.call(b, a),
                                b.zoom(b.Ah, b.Bh, 1 == b.scale ? b.options.uW : 1),
                                b.options.Mp && setTimeout(function() {
                                    b.options.Mp.call(b, a)
                                }, 200);
                            else if (this.options.Ex) {
                                for (e = c.target; 1 != e.nodeType; )
                                    e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = Nf.createEvent("MouseEvents"),
                                f.initMouseEvent("click", q, q, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, s),
                                f.DR = q,
                                e.dispatchEvent(f)) : e.focus()
                            }
                        b.ro(400)
                    }
                    b.options.qN && b.options.qN.call(b, a)
                }
            }
        },
        ro: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.qe ? this.qe : this.x
              , c = this.y >= this.vf || 0 < this.yd ? this.vf : this.y < this.yd ? this.yd : this.y;
            if (b == this.x && c == this.y) {
                if (this.zh && (this.zh = t,
                this.options.hy && this.options.hy.call(this)),
                this.qi && this.options.Ix && ("webkit" == Qf && (this.YL.style[cg] = "300ms"),
                this.YL.style.opacity = "0"),
                this.Ji && this.options.Ix)
                    "webkit" == Qf && (this.YO.style[cg] = "300ms"),
                    this.YO.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        FU: function(a) {
            var b = this, c, e;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                e = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = e = a.wheelDelta / 12;
            else if ("detail"in a)
                c = e = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.eP) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)),
                e < b.options.jl && (e = b.options.jl),
                e > b.options.nq && (e = b.options.nq),
                e != b.scale)
                    !b.Yy && b.options.Np && b.options.Np.call(b, a),
                    b.Yy++,
                    b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function() {
                        b.Yy--;
                        !b.Yy && b.options.Mp && b.options.Mp.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                e = b.y + e,
                0 < c ? c = 0 : c < b.qe && (c = b.qe),
                e > b.vf ? e = b.vf : e < b.yd && (e = b.yd),
                0 > b.yd && b.scrollTo(c, e, 0)
        },
        CU: function(a) {
            a.target == this.Rb && (this.fe(og),
            this.CB())
        },
        CB: function() {
            var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
            a.im || (a.Ij.length ? (f = a.Ij.shift(),
            f.x == b && f.y == c && (f.time = 0),
            a.im = q,
            a.zh = q,
            a.options.Ii) ? (a.yJ(f.time),
            a.Dr(f.x, f.y),
            a.im = t,
            f.time ? a.ha(og) : a.ro(0)) : (i = function() {
                var k = Date.now(), m;
                if (k >= e + f.time) {
                    a.Dr(f.x, f.y);
                    a.im = t;
                    a.options.DZ && a.options.DZ.call(a);
                    a.CB()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Of.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Dr(k, m);
                    if (a.im)
                        a.bC = pg(i)
                }
            }
            ,
            i()) : a.ro(400))
        },
        yJ: function(a) {
            a += "ms";
            this.Rb.style[Zf] = a;
            this.qi && (this.rY.style[Zf] = a);
            this.Ji && (this.X0.style[Zf] = a)
        },
        mI: function(a, b, c, e, f) {
            var b = Of.abs(a) / b
              , g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))),
            b = b * c / g,
            g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))),
            b = b * e / g,
            g = e);
            return {
                Ia: g * (0 > a ? -1 : 1),
                time: Of.round(b / 6.0E-4)
            }
        },
        kk: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.An && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        lJ: function(a, b) {
            var c, e, f;
            f = this.cf.length - 1;
            c = 0;
            for (e = this.cf.length; c < e; c++)
                if (a >= this.cf[c]) {
                    f = c;
                    break
                }
            f == this.xC && (0 < f && 0 > this.GC) && f--;
            a = this.cf[f];
            e = (e = Of.abs(a - this.cf[this.xC])) ? 500 * (Of.abs(this.x - a) / e) : 0;
            this.xC = f;
            f = this.xf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.xf[c]) {
                    f = c;
                    break
                }
            f == this.yC && (0 < f && 0 > this.HC) && f--;
            b = this.xf[f];
            c = (c = Of.abs(b - this.xf[this.yC])) ? 500 * (Of.abs(this.y - b) / c) : 0;
            this.yC = f;
            f = Of.round(Of.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ha: function(a, b, c) {
            (b || this.Rb).addEventListener(a, this, !!c)
        },
        fe: function(a, b, c) {
            (b || this.Rb).removeEventListener(a, this, !!c)
        },
        EC: ia(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.jl && (this.scale = this.options.jl);
            this.Eu = this.An.clientWidth || 1;
            this.Bn = this.An.clientHeight || 1;
            this.vf = -this.options.B0 || 0;
            this.By = Of.round(this.Rb.offsetWidth * this.scale);
            this.Xp = Of.round((this.Rb.offsetHeight + this.vf) * this.scale);
            this.qe = this.Eu - this.By;
            this.yd = this.Bn - this.Xp + this.vf;
            this.HC = this.GC = 0;
            this.options.mN && this.options.mN.call(this);
            this.xp = this.options.xp && 0 > this.qe;
            this.wn = this.options.wn && (!this.options.lV && !this.xp || this.Xp > this.Bn);
            this.qi = this.xp && this.options.qi;
            this.Ji = this.wn && this.options.Ji && this.Xp > this.Bn;
            a = this.kk(this.An);
            this.$F = -a.left;
            this.aG = -a.top;
            if ("string" == typeof this.options.mu) {
                this.cf = [];
                this.xf = [];
                c = this.Rb.querySelectorAll(this.options.mu);
                a = 0;
                for (b = c.length; a < b; a++)
                    e = this.kk(c[a]),
                    e.left += this.$F,
                    e.top += this.aG,
                    this.cf[a] = e.left < this.qe ? this.qe : e.left * this.scale,
                    this.xf[a] = e.top < this.yd ? this.yd : e.top * this.scale
            } else if (this.options.mu) {
                for (this.cf = []; e >= this.qe; )
                    this.cf[b] = e,
                    e -= this.Eu,
                    b++;
                this.qe % this.Eu && (this.cf[this.cf.length] = this.qe - this.cf[this.cf.length - 1] + this.cf[this.cf.length - 1]);
                b = e = 0;
                for (this.xf = []; e >= this.yd; )
                    this.xf[b] = e,
                    e -= this.Bn,
                    b++;
                this.yd % this.Bn && (this.xf[this.xf.length] = this.yd - this.xf[this.xf.length - 1] + this.xf[this.xf.length - 1])
            }
            this.Uv("h");
            this.Uv("v");
            this.kl || (this.Rb.style[Zf] = "0",
            this.ro(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                f_: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++)
                f[a].f_ && (f[a].x = this.x - f[a].x,
                f[a].y = this.y - f[a].y),
                this.Ij.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.CB()
        },
        disable: function() {
            this.stop();
            this.ro(0);
            this.enabled = t;
            this.fe(lg, window);
            this.fe(mg, window);
            this.fe(ng, window)
        },
        enable: function() {
            this.enabled = q
        },
        stop: function() {
            this.options.Ii ? this.fe(og) : qg(this.bC);
            this.Ij = [];
            this.im = this.zh = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.hl && (this.kl = q,
            e = e === l ? 200 : e,
            a = a - this.$F - this.x,
            b = b - this.aG - this.y,
            this.x = a - a * f + this.x,
            this.y = b - b * f + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.qe ? this.qe : this.x,
            this.y = this.y > this.vf ? this.vf : this.y < this.yd ? this.yd : this.y,
            this.Rb.style[Zf] = e + "ms",
            this.Rb.style[Xf] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + rg,
            this.kl = t)
        }
    };
    function Wf(a) {
        if ("" === Qf)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Qf + a
    }
    Pf = s;
    function tg(a) {
        this.m = {
            anchor: Sc,
            offset: new M(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.m[b] = a[b];
        this.Xl = new Zc(s,{
            Ze: "api"
        });
        this.lk = [];
        this.W = s;
        this.kg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * ug
        };
        this.Yc = this.rB = this.lm = this.cd = s
    }
    var vg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , wg = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    A.Tk(function(a) {
        var b = s;
        a.addEventListener("position_changed", function() {
            a.m.visible && a.m.albumsControl === q && (b ? b.xy(a.$b()) : (b = new tg(a.m.albumsControlOptions),
            b.za(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.m.albumsControl === q ? (b ? b.xy(a.$b()) : (b = new tg(a.m.albumsControlOptions),
            b.za(a)),
            b.show()) : b.aa()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.Hj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.Cx() ? a.m.albumsControl === q && (b.R.style.visibility = "visible") : b.R.style.visibility = "hidden")
        })
    });
    var ug = 1.8;
    K() && (ug = 1);
    x.extend(tg.prototype, {
        Hj: function(a) {
            for (var b in a)
                this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.wc(this.m.anchor);
            this.R.style.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
            this.R.style.height = a;
            this.pk.style.height = a;
            this.Yh.style.height = a;
            this.kg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * ug
            };
            this.ok.style.height = this.kg.height - 6 + "px";
            this.ok.style.width = this.kg.width - 6 + "px";
            this.xy(this.W.$b(), q)
        },
        za: function(a) {
            this.W = a;
            this.rs();
            this.jQ();
            this.IY();
            this.xy(a.$b())
        },
        rs: function() {
            var a = this.m.imageHeight + "px";
            this.R = F("div");
            var b = this.R.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.pk = F("div");
            b = this.pk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Yh = F("div");
            b = this.Yh.style;
            b.height = a;
            this.pk.appendChild(this.Yh);
            this.R.appendChild(this.pk);
            this.W.R.appendChild(this.R);
            this.ok = F("div", {
                "class": "pano_photo_item_seleted"
            });
            this.ok.style.height = this.kg.height - 6 + "px";
            this.ok.style.width = this.kg.width - 6 + "px";
            this.wc(this.m.anchor)
        },
        GH: function(a) {
            for (var b = this.lk, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        xy: function(a, b) {
            if (b || !this.lk[this.cd] || !(this.lk[this.cd].panoId == a && 3 !== this.lk[this.cd].recoType)) {
                var c = this
                  , e = this.GH(a);
                !b && -1 !== e && this.lk[e] && 3 !== this.lk[e].recoType ? this.$p(e) : this.YX(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, p = a.length; o < p; o++)
                        e = a[o].catlog,
                        k = a[o].floor,
                        l !== e && ("" === e && l !== k ? (m = q,
                        b[k] || (b[k] = []),
                        b[k].push(a[o])) : (b[vg[e]] || (b[vg[e]] = []),
                        b[vg[e]].push(a[o])));
                    for (var v in b)
                        m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: wg[v],
                            index: v
                        });
                    c.bH = b;
                    c.Wi = n;
                    c.dj(a);
                    0 == a.length ? c.aa() : c.show()
                })
            }
        },
        $V: function() {
            if (!this.Ti) {
                var a = this.MX(this.Wi)
                  , b = F("div");
                b.style.cssText = ["width:" + 134 * this.Wi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = F("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new sg(a,{
                    Oo: t,
                    dy: q,
                    qi: t,
                    Ji: t,
                    wn: t,
                    CE: q,
                    Mw: q,
                    Ex: q
                });
                this.R.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f],
                    x.V(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.dj(c.bH[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++)
                                e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Ti = a
            }
        },
        XV: function() {
            if (this.Ti)
                a = this.qL(this.Wi),
                this.zQ.innerHTML = a;
            else {
                var a = this.qL(this.Wi)
                  , b = F("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                x.V(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.dj(c.bH[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
                            e[f].childNodes[0].getAttribute("dataindex") === a ? x.U.ib(e[f], "pano_catlogLiActive") : x.U.rc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = F("div")
                  , e = F("a")
                  , f = F("span")
                  , g = F("a")
                  , i = F("span")
                  , k = ["background:url(" + J.ta + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                x.V(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new Ab({
                        Nc: 60,
                        fc: Bb.Ms,
                        duration: 300,
                        Ba: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                x.V(e, "mouseout", function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                x.V(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new Ab({
                            Nc: 60,
                            fc: Bb.Ms,
                            duration: 300,
                            Ba: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                x.V(g, "mouseout", function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = F("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Ti = e;
                this.zQ = b;
                this.R.appendChild(e)
            }
        },
        YV: function() {
            if (this.Wi && !(0 >= this.Wi.length)) {
                var a = F("div");
                a.innerHTML = this.Vz;
                a.style.cssText = "position:absolute;background:#252525";
                this.R.appendChild(a);
                this.Ps = a;
                this.Yc.mg.style.left = this.kg.width + 8 + "px";
                this.Ti && (this.Ti.style.left = parseInt(this.Ti.style.left, 10) + this.kg.width + 8 + "px");
                var b = this;
                x.V(a, "click", function() {
                    b.W.Gc(b.VW)
                })
            }
        },
        dj: function(a) {
            this.lk = a;
            this.m.showCatalog && (0 < this.Wi.length ? (Za() ? this.XV() : this.$V(),
            this.Yc.offsetLeft = 60) : (this.Ps && (this.R.removeChild(this.Ps),
            this.Ps = s,
            this.Yc.mg.style.left = "0px"),
            this.Ti && (this.R.removeChild(this.Ti),
            this.Ti = s),
            this.Yc.offsetLeft = 0));
            var b = this.GX(a);
            Za() && (this.Wi && 0 < this.Wi.length && this.m.showExit && this.Vz) && (this.Yc.offsetLeft += this.kg.width + 8,
            this.Ps ? this.Ps.innerHTML = this.Vz : this.YV());
            this.Yh.innerHTML = b;
            this.Yh.style.width = (this.kg.width + 8) * a.length + 8 + "px";
            a = this.R.offsetWidth;
            b = this.Yh.offsetWidth;
            this.Yc.Ws && (b += this.Yc.Ws());
            b < a - 2 * this.Yc.Mi - this.Yc.offsetLeft ? this.R.style.width = b + this.Yc.offsetLeft + "px" : (this.R.style.width = isNaN(Number(this.m.maxWidth)) === q ? this.m.maxWidth : this.m.maxWidth + "px",
            b < this.R.offsetWidth - 2 * this.Yc.Mi - this.Yc.offsetLeft && (this.R.style.width = b + this.Yc.offsetLeft + "px"));
            this.Yc.refresh();
            this.rB = this.Yh.children;
            this.Yh.appendChild(this.ok);
            this.ok.style.left = "-100000px";
            a = this.GH(this.W.$b(), this.r2);
            -1 !== a && this.$p(a)
        },
        MX: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
                b += c;
            return b
        },
        qL: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
                b += c;
            return b
        },
        GX: function(a) {
            for (var b, c, e, f, g = [], i = this.kg.height, k = this.kg.width, m = 0; m < a.length; m++)
                b = a[m],
                recoType = b.recoType,
                e = b.panoId,
                f = b.name,
                c = b.heading,
                b = b.pitch,
                c = Mf.DL(e, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
                3 === recoType ? Za() ? (this.Vz = b,
                this.VW = e,
                a.splice(m, 1),
                m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + J.ta + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
                g.push(b)) : g.push(b);
            return g.join("")
        },
        YX: function(a) {
            var b = this
              , c = this.W.$b();
            c && this.Xl.Ax(c, function(e) {
                b.W.$b() === c && a(e)
            })
        },
        wc: function(a) {
            if (!bb(a) || isNaN(a) || a < Qc || 3 < a)
                a = this.defaultAnchor;
            var b = this.R
              , c = this.m.offset.width
              , e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case Qc:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case Rc:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case Sc:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        jQ: function() {
            this.hQ()
        },
        hQ: function() {
            var a = this;
            x.V(this.R, "touchstart", function(a) {
                a.stopPropagation()
            });
            x.V(this.pk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.cd)
                    a.$p(b),
                    a.W.Gc(a.lk[b].panoId)
            });
            x.V(this.Yh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== s && a.sK(b, q)
            });
            this.W.addEventListener("size_changed", function() {
                isNaN(Number(a.m.maxWidth)) && a.Hj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        $p: function(a) {
            this.ok.style.left = this.rB[a].offsetLeft + 8 + "px";
            this.ok.setAttribute("data-index", this.rB[a].getAttribute("data-index"));
            this.cd = a;
            this.sK(a)
        },
        sK: function(a, b) {
            var c = this.kg.width + 8
              , e = 0;
            this.Yc.Ws && (e = this.Yc.Ws() / 2);
            var f = this.pk.offsetWidth - 2 * e
              , g = this.Yh.offsetLeft || this.Yc.x
              , g = g - e
              , i = -a * c;
            i > g && this.Yc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Yc.scrollTo(c + f + e)
        },
        IY: function() {
            this.Yc = K() ? new sg(this.pk,{
                Oo: t,
                dy: q,
                qi: t,
                Ji: t,
                wn: t,
                CE: q,
                Mw: q,
                Ex: q
            }) : new xg(this.pk)
        },
        aa: function() {
            this.R.style.visibility = "hidden"
        },
        show: function() {
            this.R.style.visibility = "visible"
        }
    });
    function xg(a) {
        this.R = a;
        this.hh = a.children[0];
        this.Qr = s;
        this.Mi = 20;
        this.offsetLeft = 0;
        this.za()
    }
    xg.prototype = {
        za: function() {
            this.hh.style.position = "relative";
            this.refresh();
            this.rs();
            this.dC()
        },
        refresh: function() {
            this.mo = this.R.offsetWidth - this.Ws();
            this.QA = -(this.hh.offsetWidth - this.mo - this.Mi);
            this.Gv = this.Mi + this.offsetLeft;
            this.hh.style.left = this.Gv + "px";
            this.hh.children[0] && (this.Qr = this.hh.children[0].offsetWidth);
            this.mg && (this.mg.children[0].style.marginTop = this.Jr.children[0].style.marginTop = this.mg.offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px")
        },
        Ws: function() {
            return 2 * this.Mi
        },
        rs: function() {
            this.Vv = F("div");
            this.Vv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.mg = this.Vv.children[0];
            this.Jr = this.Vv.children[1];
            this.R.appendChild(this.Vv);
            this.mg.children[0].style.marginTop = this.Jr.children[0].style.marginTop = this.mg.offsetHeight / 2 - this.mg.children[0].offsetHeight / 2 + "px"
        },
        dC: function() {
            var a = this;
            x.V(this.mg, "click", function() {
                a.scrollTo(a.hh.offsetLeft + a.mo)
            });
            x.V(this.Jr, "click", function() {
                a.scrollTo(a.hh.offsetLeft - a.mo)
            })
        },
        DU: function() {
            x.U.rc(this.mg, "pano_arrow_disable");
            x.U.rc(this.Jr, "pano_arrow_disable");
            var a = this.hh.offsetLeft;
            a >= this.Gv && x.U.ib(this.mg, "pano_arrow_disable");
            a - this.mo <= this.QA && x.U.ib(this.Jr, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.hh.offsetLeft ? Math.ceil((a - this.Mi - this.mo) / this.Qr) * this.Qr + this.mo + this.Mi - 8 : Math.ceil((a - this.Mi) / this.Qr) * this.Qr + this.Mi;
            a < this.QA ? a = this.QA : a > this.Gv && (a = this.Gv);
            var b = this.hh.offsetLeft
              , c = this;
            new Ab({
                Nc: 60,
                fc: Bb.Ms,
                duration: 300,
                Ba: function(e) {
                    c.hh.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.DU()
                }
            })
        }
    };
    A.Map = Pa;
    A.Hotspot = nb;
    A.MapType = ze;
    A.Point = P;
    A.Pixel = Q;
    A.Size = M;
    A.Bounds = kb;
    A.TileLayer = Hd;
    A.Projection = ed;
    A.MercatorProjection = R;
    A.PerspectiveProjection = mb;
    A.Copyright = function(a, b, c) {
        this.id = a;
        this.jb = b;
        this.content = c
    }
    ;
    A.Overlay = hd;
    A.Label = pd;
    A.GroundOverlay = qd;
    A.PointCollection = ud;
    A.Marker = W;
    A.CanvasLayer = xd;
    A.Icon = ld;
    A.IconSequence = nd;
    A.Symbol = md;
    A.Polyline = Bd;
    A.Polygon = Ad;
    A.InfoWindow = od;
    A.Circle = Cd;
    A.Control = Pc;
    A.NavigationControl = qb;
    A.GeolocationControl = Tc;
    A.OverviewMapControl = sb;
    A.CopyrightControl = Uc;
    A.ScaleControl = rb;
    A.MapTypeControl = tb;
    A.CityListControl = Vc;
    A.PanoramaControl = Xc;
    A.TrafficLayer = Od;
    A.CustomLayer = ub;
    A.ContextMenu = $c;
    A.MenuItem = dd;
    A.LocalSearch = ib;
    A.TransitRoute = df;
    A.DrivingRoute = gf;
    A.TruckRoute = jf;
    A.WalkingRoute = hf;
    A.RidingRoute = kf;
    A.Autocomplete = uf;
    A.RouteSearch = of;
    A.Geocoder = pf;
    A.LocalCity = rf;
    A.Geolocation = Geolocation;
    A.Convertor = gd;
    A.BusLineSearch = tf;
    A.Boundary = sf;
    A.Panorama = Sa;
    A.PanoramaLabel = Bf;
    A.PanoramaService = Zc;
    A.PanoramaCoverageLayer = Yc;
    A.PanoramaFlashInterface = Kf;
    function U(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    U(window, {
        BMap: A,
        _jsload2: function(a, b) {
            ka.Oy.WY && ka.Oy.set(a, b);
            Wa.xV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var yg = Pa.prototype;
    U(yg, {
        getBounds: yg.le,
        getCenter: yg.Qb,
        getMapType: yg.ya,
        getSize: yg.Cb,
        setSize: yg.Ie,
        getViewport: yg.it,
        getZoom: yg.la,
        centerAndZoom: yg.xd,
        panTo: yg.Ci,
        panBy: yg.Lg,
        setCenter: yg.zf,
        setCurrentCity: yg.mF,
        setMapType: yg.Pg,
        setViewport: yg.Qg,
        setZoom: yg.Xc,
        highResolutionEnabled: yg.Kx,
        zoomTo: yg.Sg,
        zoomIn: yg.bG,
        zoomOut: yg.cG,
        addHotspot: yg.SB,
        removeHotspot: yg.h_,
        clearHotspots: yg.Qw,
        checkResize: yg.AV,
        addControl: yg.ds,
        removeControl: yg.JN,
        getContainer: yg.Sa,
        addContextMenu: yg.em,
        removeContextMenu: yg.Rp,
        addOverlay: yg.Ra,
        removeOverlay: yg.Jb,
        clearOverlays: yg.pK,
        openInfoWindow: yg.Vc,
        closeInfoWindow: yg.Mc,
        pointToOverlayPixel: yg.df,
        overlayPixelToPoint: yg.tN,
        getInfoWindow: yg.qh,
        getOverlays: yg.xx,
        getPanes: function() {
            return {
                floatPane: this.de.qD,
                markerMouseTarget: this.de.FE,
                floatShadow: this.de.gL,
                labelPane: this.de.xE,
                markerPane: this.de.SM,
                markerShadow: this.de.TM,
                mapPane: this.de.Ht,
                vertexPane: this.de.aP
            }
        },
        addTileLayer: yg.Ve,
        removeTileLayer: yg.cg,
        pixelToPoint: yg.cc,
        pointToPixel: yg.vc,
        setFeatureStyle: yg.g6,
        selectBaseElement: yg.Z5,
        setMapStyle: yg.cu,
        enable3DBuilding: yg.cp,
        disable3DBuilding: yg.oW,
        getPanorama: yg.ct,
        initIndoorLayer: yg.JY,
        setNormalMapDisplay: yg.Dy,
        setMapStyleV2: yg.M_,
        setBMapCopyrightOffset: yg.lF,
        getVectorContainer: yg.mY
    });
    U(window, {
        BMAP_COORD_BD09: 5,
        BMAP_COORD_GCJ02: 3
    });
    var zg = ze.prototype;
    U(zg, {
        getTileLayer: zg.gY,
        getMinZoom: zg.rf,
        getMaxZoom: zg.$e,
        getProjection: zg.vj,
        getTextColor: zg.Im,
        getTips: zg.gt
    });
    U(window, {
        BMAP_NORMAL_MAP: Qa,
        BMAP_PERSPECTIVE_MAP: Ta,
        BMAP_SATELLITE_MAP: db,
        BMAP_HYBRID_MAP: Va
    });
    var Ag = R.prototype;
    U(Ag, {
        lngLatToPoint: Ag.Ig,
        pointToLngLat: Ag.Fj
    });
    var Bg = mb.prototype;
    U(Bg, {
        lngLatToPoint: Bg.Ig,
        pointToLngLat: Bg.Fj
    });
    var Cg = kb.prototype;
    U(Cg, {
        equals: Cg.Ub,
        containsPoint: Cg.os,
        containsBounds: Cg.MV,
        intersects: Cg.ut,
        extend: Cg.extend,
        getCenter: Cg.Qb,
        isEmpty: Cg.Bj,
        getSouthWest: Cg.Be,
        getNorthEast: Cg.sf,
        toSpan: Cg.OF
    });
    var Dg = hd.prototype;
    U(Dg, {
        isVisible: Dg.Uc,
        show: Dg.show,
        hide: Dg.aa
    });
    hd.getZIndex = hd.Mk;
    var Eg = lb.prototype;
    U(Eg, {
        openInfoWindow: Eg.Vc,
        closeInfoWindow: Eg.Mc,
        enableMassClear: Eg.rj,
        disableMassClear: Eg.qW,
        show: Eg.show,
        hide: Eg.aa,
        getMap: Eg.ux,
        addContextMenu: Eg.em,
        removeContextMenu: Eg.Rp
    });
    var Fg = W.prototype;
    U(Fg, {
        setIcon: Fg.Wb,
        getIcon: Fg.mp,
        setPosition: Fg.va,
        getPosition: Fg.ma,
        setOffset: Fg.Sd,
        getOffset: Fg.tj,
        getLabel: Fg.Zs,
        setLabel: Fg.Gj,
        setTitle: Fg.Hc,
        setTop: Fg.Gi,
        enableDragging: Fg.jc,
        disableDragging: Fg.Cs,
        setZIndex: Fg.dq,
        getMap: Fg.ux,
        setAnimation: Fg.gn,
        setShadow: Fg.Hy,
        hide: Fg.aa,
        setRotation: Fg.Fy,
        getRotation: Fg.HL
    });
    U(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Gg = pd.prototype;
    U(Gg, {
        setStyle: Gg.Ud,
        setStyles: Gg.Fi,
        setContent: Gg.Pc,
        setPosition: Gg.va,
        getPosition: Gg.ma,
        setOffset: Gg.Sd,
        getOffset: Gg.tj,
        setTitle: Gg.Hc,
        setZIndex: Gg.dq,
        getMap: Gg.ux,
        getContent: Gg.Fk
    });
    var Hg = ld.prototype;
    U(Hg, {
        setImageUrl: Hg.$N,
        setSize: Hg.Ie,
        setAnchor: Hg.wc,
        setImageOffset: Hg.bu,
        setImageSize: Hg.G_,
        setInfoWindowAnchor: Hg.J_,
        setPrintImageUrl: Hg.V_
    });
    var Ig = od.prototype;
    U(Ig, {
        redraw: Ig.re,
        setTitle: Ig.Hc,
        setContent: Ig.Pc,
        getContent: Ig.Fk,
        getPosition: Ig.ma,
        enableMaximize: Ig.oh,
        disableMaximize: Ig.bx,
        isOpen: Ig.eb,
        setMaxContent: Ig.du,
        maximize: Ig.ay,
        enableAutoPan: Ig.Ns
    });
    var Jg = jd.prototype;
    U(Jg, {
        getPath: Jg.af,
        setPath: Jg.Td,
        setPositionAt: Jg.ln,
        getStrokeColor: Jg.dY,
        setStrokeWeight: Jg.cq,
        getStrokeWeight: Jg.KL,
        setStrokeOpacity: Jg.aq,
        getStrokeOpacity: Jg.eY,
        setFillOpacity: Jg.au,
        getFillOpacity: Jg.zX,
        setStrokeStyle: Jg.bq,
        getStrokeStyle: Jg.JL,
        getFillColor: Jg.yX,
        getBounds: Jg.le,
        enableEditing: Jg.ze,
        disableEditing: Jg.pW,
        getEditing: Jg.vX,
        getGeodesicPath: Jg.CX
    });
    var Kg = Cd.prototype;
    U(Kg, {
        setCenter: Kg.zf,
        getCenter: Kg.Qb,
        getRadius: Kg.FL,
        setRadius: Kg.Af
    });
    var Lg = Ad.prototype;
    U(Lg, {
        getPath: Lg.af,
        setPath: Lg.Td,
        setPositionAt: Lg.ln
    });
    var Mg = nb.prototype;
    U(Mg, {
        getPosition: Mg.ma,
        setPosition: Mg.va,
        getText: Mg.UD,
        setText: Mg.gu
    });
    P.prototype.equals = P.prototype.Ub;
    Q.prototype.equals = Q.prototype.Ub;
    M.prototype.equals = M.prototype.Ub;
    U(window, {
        BMAP_ANCHOR_TOP_LEFT: Qc,
        BMAP_ANCHOR_TOP_RIGHT: Rc,
        BMAP_ANCHOR_BOTTOM_LEFT: Sc,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Ng = Pc.prototype;
    U(Ng, {
        setAnchor: Ng.wc,
        getAnchor: Ng.xD,
        setOffset: Ng.Sd,
        getOffset: Ng.tj,
        show: Ng.show,
        hide: Ng.aa,
        isVisible: Ng.Uc,
        toString: Ng.toString
    });
    var Og = qb.prototype;
    U(Og, {
        getType: Og.vp,
        setType: Og.mn
    });
    U(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Pg = sb.prototype;
    U(Pg, {
        changeView: Pg.ve,
        setSize: Pg.Ie,
        getSize: Pg.Cb
    });
    var Qg = rb.prototype;
    U(Qg, {
        getUnit: Qg.lY,
        setUnit: Qg.wF
    });
    U(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Rg = Uc.prototype;
    U(Rg, {
        addCopyright: Rg.Dw,
        removeCopyright: Rg.ZE,
        getCopyright: Rg.zm,
        getCopyrightCollection: Rg.ED
    });
    U(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Wc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Sg = Hd.prototype;
    U(Sg, {
        getMapType: Sg.ya,
        getCopyright: Sg.zm,
        isTransparentPng: Sg.Bt
    });
    var Tg = $c.prototype;
    U(Tg, {
        addItem: Tg.es,
        addSeparator: Tg.VB,
        removeSeparator: Tg.bF
    });
    var Ug = dd.prototype;
    U(Ug, {
        setText: Ug.gu
    });
    var Vg = Y.prototype;
    U(Vg, {
        getStatus: Vg.Gm,
        setSearchCompleteCallback: Vg.fu,
        getPageCapacity: Vg.tf,
        setPageCapacity: Vg.jn,
        setLocation: Vg.hn,
        disableFirstResultSelection: Vg.JC,
        enableFirstResultSelection: Vg.cD,
        gotoPage: Vg.Jm,
        searchNearby: Vg.Yp,
        searchInBounds: Vg.fn,
        search: Vg.search
    });
    U(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: Je,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: Ke,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: Oe
    });
    U(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    U(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    U(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    U(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    U(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Wg = cf.prototype;
    U(Wg, {
        clearResults: Wg.we
    });
    ef = df.prototype;
    U(ef, {
        setPolicy: ef.kn,
        toString: ef.toString,
        setPageCapacity: ef.jn,
        setIntercityPolicy: ef.pF,
        setTransitTypePolicy: ef.uF
    });
    U(jf.prototype, {
        setPolicy: jf.kn,
        toString: jf.toString,
        setPageCapacity: jf.jn,
        setIntercityPolicy: jf.pF,
        setTransitTypePolicy: jf.uF
    });
    U(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    U(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var Xg = of.prototype;
    U(Xg, {
        routeCall: Xg.UN
    });
    U(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    U(window, {
        BMAP_ROUTE_TYPE_DRIVING: Qe,
        BMAP_ROUTE_TYPE_WALKING: Pe,
        BMAP_ROUTE_TYPE_RIDING: Re
    });
    U(window, {
        BMAP_ROUTE_STATUS_NORMAL: Se,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var Yg = gf.prototype;
    U(Yg, {
        setPolicy: Yg.kn
    });
    var Zg = uf.prototype;
    U(Zg, {
        show: Zg.show,
        hide: Zg.aa,
        setTypes: Zg.vF,
        setLocation: Zg.hn,
        search: Zg.search,
        setInputValue: Zg.Cy
    });
    U(ub.prototype, {});
    var $g = sf.prototype;
    U($g, {
        get: $g.get
    });
    U(Yc.prototype, {});
    U(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Rd,
        BMAP_POINT_DENSITY_LOW: 50
    });
    U(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: rd,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: sd,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: bd,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: cd
    });
    U(window, {
        BMAP_SYS_DRAWER: Oa,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    A.UU();
    A.Wy();
}
)()
