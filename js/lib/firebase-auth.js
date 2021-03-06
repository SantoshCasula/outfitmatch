/*! @license Firebase v3.5.2
 Build: 3.5.2-rc.1
 Terms: https://developers.google.com/terms */
(function () {
    var h, aa = aa || {}, l = this, ba = function () {
    }, ca = function () {
        throw Error("unimplemented abstract method");
    }, m = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }, da = function (a) {
        return null === a
    }, ea = function (a) {
        return "array" == m(a)
    }, fa = function (a) {
        var b = m(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, n = function (a) {
        return "string" == typeof a
    }, ga = function (a) {
        return "number" == typeof a
    }, p = function (a) {
        return "function" == m(a)
    }, ha = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, ia = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ja = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, q = function (a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return q.apply(null,
            arguments)
    }, ka = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, la = Date.now || function () {
            return +new Date
        }, r = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.Vc = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.gf = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var u = function (a) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, u); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    r(u, Error);
    u.prototype.name = "CustomError";
    var ma = function (a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
        return d + c.join("%s")
    }, na = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, oa = /&/g, pa = /</g, qa = />/g, ra = /"/g, sa = /'/g, ta = /\x00/g, va = /[\x00&<>"']/, v = function (a, b) {
        return -1 != a.indexOf(b)
    }, wa = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var xa = function (a, b) {
        b.unshift(a);
        u.call(this, ma.apply(null, b));
        b.shift()
    };
    r(xa, u);
    xa.prototype.name = "AssertionError";
    var ya = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c)var e = e + (": " + c), f = d; else a && (e += ": " + a, f = b);
        throw new xa("" + e, f || []);
    }, w = function (a, b, c) {
        a || ya("", null, b, Array.prototype.slice.call(arguments, 2))
    }, za = function (a, b) {
        throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, Aa = function (a, b, c) {
        ga(a) || ya("Expected number but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, Ba = function (a, b, c) {
        n(a) || ya("Expected string but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments,
            2))
    }, Ca = function (a, b, c) {
        p(a) || ya("Expected function but got %s: %s.", [m(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
    var Da = Array.prototype.indexOf ? function (a, b, c) {
            w(null != a.length);
            return Array.prototype.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a))return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)if (c in a && a[c] === b)return c;
            return -1
        }, Ea = Array.prototype.forEach ? function (a, b, c) {
            w(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
        }, Fa = function (a, b) {
            for (var c = n(a) ?
                a.split("") : a, d = a.length - 1; 0 <= d; --d)d in c && b.call(void 0, c[d], d, a)
        }, Ga = Array.prototype.map ? function (a, b, c) {
            w(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        }, Ha = Array.prototype.some ? function (a, b, c) {
            w(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return !0;
            return !1
        },
        Ja = function (a) {
            var b;
            a:{
                b = Ia;
                for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
                b = -1
            }
            return 0 > b ? null : n(a) ? a.charAt(b) : a[b]
        }, Ka = function (a, b) {
            return 0 <= Da(a, b)
        }, Ma = function (a, b) {
            b = Da(a, b);
            var c;
            (c = 0 <= b) && La(a, b);
            return c
        }, La = function (a, b) {
            w(null != a.length);
            return 1 == Array.prototype.splice.call(a, b, 1).length
        }, Na = function (a, b) {
            var c = 0;
            Fa(a, function (d, e) {
                b.call(void 0, d, e, a) && La(a, e) && c++
            })
        }, Oa = function (a) {
            return Array.prototype.concat.apply(Array.prototype,
                arguments)
        }, Pa = function (a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        }, Qa = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
                return c
            }
            return []
        }, Ra = function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (fa(d)) {
                    var e = a.length || 0, f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++)a[e + g] = d[g]
                } else a.push(d)
            }
        };
    var Sa = function (a, b) {
            for (var c in a)b.call(void 0, a[c], c, a)
        }, Ta = function (a) {
            var b = [], c = 0, d;
            for (d in a)b[c++] = a[d];
            return b
        }, Ua = function (a) {
            var b = [], c = 0, d;
            for (d in a)b[c++] = d;
            return b
        }, Va = function (a) {
            for (var b in a)return !1;
            return !0
        }, Wa = function (a, b) {
            for (var c in a)if (!(c in b) || a[c] !== b[c])return !1;
            for (c in b)if (!(c in a))return !1;
            return !0
        }, Xa = function (a) {
            var b = {}, c;
            for (c in a)b[c] = a[c];
            return b
        }, Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Za = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)a[c] = d[c];
                for (var f = 0; f < Ya.length; f++)c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var $a;
    a:{
        var ab = l.navigator;
        if (ab) {
            var bb = ab.userAgent;
            if (bb) {
                $a = bb;
                break a
            }
        }
        $a = ""
    }
    var x = function (a) {
        return v($a, a)
    };
    var cb = function (a) {
        cb[" "](a);
        return a
    };
    cb[" "] = ba;
    var eb = function (a, b) {
        var c = db;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var fb = x("Opera"), y = x("Trident") || x("MSIE"), gb = x("Edge"), hb = gb || y, ib = x("Gecko") && !(v($a.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"), jb = v($a.toLowerCase(), "webkit") && !x("Edge"), kb = function () {
        var a = l.document;
        return a ? a.documentMode : void 0
    }, lb;
    a:{
        var mb = "", nb = function () {
            var a = $a;
            if (ib)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (gb)return /Edge\/([\d\.]+)/.exec(a);
            if (y)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (jb)return /WebKit\/(\S+)/.exec(a);
            if (fb)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        nb && (mb = nb ? nb[1] : "");
        if (y) {
            var ob = kb();
            if (null != ob && ob > parseFloat(mb)) {
                lb = String(ob);
                break a
            }
        }
        lb = mb
    }
    var pb = lb, db = {}, z = function (a) {
        return eb(a, function () {
            for (var b = 0, c = na(String(pb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", k = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == k[0].length)break;
                    b = wa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || wa(0 == g[2].length, 0 == k[2].length) || wa(g[2], k[2]);
                    g = g[3];
                    k = k[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }, qb;
    var rb = l.document;
    qb = rb && y ? kb() || ("CSS1Compat" == rb.compatMode ? parseInt(pb, 10) : 5) : void 0;
    var sb = null, tb = null, vb = function (a) {
        var b = "";
        ub(a, function (a) {
            b += String.fromCharCode(a)
        });
        return b
    }, ub = function (a, b) {
        function c(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++), e = tb[c];
                if (null != e)return e;
                if (!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }

        wb();
        for (var d = 0; ;) {
            var e = c(-1), f = c(0), g = c(64), k = c(64);
            if (64 === k && -1 === e)break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
        }
    }, wb = function () {
        if (!sb) {
            sb = {};
            tb = {};
            for (var a = 0; 65 > a; a++)sb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                tb[sb[a]] = a, 62 <= a && (tb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };
    var xb = !y || 9 <= Number(qb), yb = y && !z("9");
    !jb || z("528");
    ib && z("1.9b") || y && z("8") || fb && z("9.5") || jb && z("528");
    ib && !z("8") || y && z("9");
    var zb = function () {
        this.Ba = this.Ba;
        this.Wb = this.Wb
    };
    zb.prototype.Ba = !1;
    zb.prototype.isDisposed = function () {
        return this.Ba
    };
    zb.prototype.Ra = function () {
        if (this.Wb)for (; this.Wb.length;)this.Wb.shift()()
    };
    var Ab = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ya = !1;
        this.Bd = !0
    };
    Ab.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.Bd = !1
    };
    var Bb = function (a, b) {
        Ab.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.ob = this.state = null;
        a && this.init(a, b)
    };
    r(Bb, Ab);
    Bb.prototype.init = function (a, b) {
        var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (ib) {
                var e;
                a:{
                    try {
                        cb(b.nodeName);
                        e = !0;
                        break a
                    } catch (f) {
                    }
                    e = !1
                }
                e || (b = null)
            }
        } else"mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        null === d ? (this.offsetX = jb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = jb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.ob = a;
        a.defaultPrevented &&
        this.preventDefault()
    };
    Bb.prototype.preventDefault = function () {
        Bb.Vc.preventDefault.call(this);
        var a = this.ob;
        if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, yb)try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
        } catch (b) {
        }
    };
    Bb.prototype.le = function () {
        return this.ob
    };
    var Cb = "closure_listenable_" + (1E6 * Math.random() | 0), Db = 0;
    var Eb = function (a, b, c, d, e) {
        this.listener = a;
        this.ac = null;
        this.src = b;
        this.type = c;
        this.Gb = !!d;
        this.Nb = e;
        this.key = ++Db;
        this.cb = this.Fb = !1
    }, Fb = function (a) {
        a.cb = !0;
        a.listener = null;
        a.ac = null;
        a.src = null;
        a.Nb = null
    };
    var Gb = function (a) {
        this.src = a;
        this.A = {};
        this.Cb = 0
    };
    Gb.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.A[f];
        a || (a = this.A[f] = [], this.Cb++);
        var g = Hb(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Fb = !1)) : (b = new Eb(b, this.src, f, !!d, e), b.Fb = c, a.push(b));
        return b
    };
    Gb.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.A))return !1;
        var e = this.A[a];
        b = Hb(e, b, c, d);
        return -1 < b ? (Fb(e[b]), La(e, b), 0 == e.length && (delete this.A[a], this.Cb--), !0) : !1
    };
    var Ib = function (a, b) {
        var c = b.type;
        c in a.A && Ma(a.A[c], b) && (Fb(b), 0 == a.A[c].length && (delete a.A[c], a.Cb--))
    };
    Gb.prototype.Ac = function (a, b, c, d) {
        a = this.A[a.toString()];
        var e = -1;
        a && (e = Hb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Hb = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.cb && f.listener == b && f.Gb == !!c && f.Nb == d)return e
        }
        return -1
    };
    var Jb = "closure_lm_" + (1E6 * Math.random() | 0), Kb = {}, Lb = 0, Mb = function (a, b, c, d, e) {
        if (ea(b))for (var f = 0; f < b.length; f++)Mb(a, b[f], c, d, e); else c = Nb(c), a && a[Cb] ? a.listen(b, c, d, e) : Ob(a, b, c, !1, d, e)
    }, Ob = function (a, b, c, d, e, f) {
        if (!b)throw Error("Invalid event type");
        var g = !!e, k = Pb(a);
        k || (a[Jb] = k = new Gb(a));
        c = k.add(b, c, d, e, f);
        if (!c.ac) {
            d = Qb();
            c.ac = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)a.addEventListener(b.toString(), d, g); else if (a.attachEvent)a.attachEvent(Rb(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
            Lb++
        }
    }, Qb = function () {
        var a = Sb, b = xb ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)return c
        };
        return b
    }, Tb = function (a, b, c, d, e) {
        if (ea(b))for (var f = 0; f < b.length; f++)Tb(a, b[f], c, d, e); else c = Nb(c), a && a[Cb] ? Ub(a, b, c, d, e) : Ob(a, b, c, !0, d, e)
    }, Vb = function (a, b, c, d, e) {
        if (ea(b))for (var f = 0; f < b.length; f++)Vb(a, b[f], c, d, e); else c = Nb(c), a && a[Cb] ? a.ba.remove(String(b), c, d, e) : a && (a = Pb(a)) && (b = a.Ac(b, c, !!d, e)) && Wb(b)
    }, Wb = function (a) {
        if (!ga(a) && a && !a.cb) {
            var b = a.src;
            if (b &&
                b[Cb])Ib(b.ba, a); else {
                var c = a.type, d = a.ac;
                b.removeEventListener ? b.removeEventListener(c, d, a.Gb) : b.detachEvent && b.detachEvent(Rb(c), d);
                Lb--;
                (c = Pb(b)) ? (Ib(c, a), 0 == c.Cb && (c.src = null, b[Jb] = null)) : Fb(a)
            }
        }
    }, Rb = function (a) {
        return a in Kb ? Kb[a] : Kb[a] = "on" + a
    }, Yb = function (a, b, c, d) {
        var e = !0;
        if (a = Pb(a))if (b = a.A[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.Gb == c && !f.cb && (f = Xb(f, d), e = e && !1 !== f)
        }
        return e
    }, Xb = function (a, b) {
        var c = a.listener, d = a.Nb || a.src;
        a.Fb && Wb(a);
        return c.call(d, b)
    }, Sb = function (a,
                      b) {
        if (a.cb)return !0;
        if (!xb) {
            if (!b)a:{
                b = ["window", "event"];
                for (var c = l, d; d = b.shift();)if (null != c[d])c = c[d]; else {
                    b = null;
                    break a
                }
                b = c
            }
            d = b;
            b = new Bb(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a:{
                    var e = !1;
                    if (0 == d.keyCode)try {
                        d.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue)d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.Ya && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = Yb(d[e], a, !0, b), c = c && f
                }
                for (e = 0; !b.Ya && e < d.length; e++)b.currentTarget =
                    d[e], f = Yb(d[e], a, !1, b), c = c && f
            }
            return c
        }
        return Xb(a, new Bb(b, this))
    }, Pb = function (a) {
        a = a[Jb];
        return a instanceof Gb ? a : null
    }, Zb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Nb = function (a) {
        w(a, "Listener can not be null.");
        if (p(a))return a;
        w(a.handleEvent, "An object listener must have handleEvent method.");
        a[Zb] || (a[Zb] = function (b) {
            return a.handleEvent(b)
        });
        return a[Zb]
    };
    var $b = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    var bc = function () {
        this.kc = "";
        this.Td = ac
    };
    bc.prototype.Qb = !0;
    bc.prototype.Lb = function () {
        return this.kc
    };
    bc.prototype.toString = function () {
        return "Const{" + this.kc + "}"
    };
    var cc = function (a) {
        if (a instanceof bc && a.constructor === bc && a.Td === ac)return a.kc;
        za("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }, ac = {}, dc = function (a) {
        var b = new bc;
        b.kc = a;
        return b
    };
    dc("");
    var fc = function () {
        this.la = "";
        this.Sd = ec
    };
    fc.prototype.Qb = !0;
    fc.prototype.Lb = function () {
        return this.la
    };
    fc.prototype.toString = function () {
        return "SafeUrl{" + this.la + "}"
    };
    var gc = function (a) {
        if (a instanceof fc && a.constructor === fc && a.Sd === ec)return a.la;
        za("expected object of type SafeUrl, got '" + a + "' of type " + m(a));
        return "type_error:SafeUrl"
    }, hc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i, jc = function (a) {
        if (a instanceof fc)return a;
        a = a.Qb ? a.Lb() : String(a);
        hc.test(a) || (a = "about:invalid#zClosurez");
        return ic(a)
    }, ec = {}, ic = function (a) {
        var b = new fc;
        b.la = a;
        return b
    };
    ic("about:blank");
    var kc = function (a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        }, lc = function (a) {
            a = String(a);
            if (kc(a))try {
                return eval("(" + a + ")")
            } catch (b) {
            }
            throw Error("Invalid JSON string: " + a);
        }, oc = function (a) {
            var b = [];
            mc(new nc, a, b);
            return b.join("")
        }, nc = function () {
            this.ec = void 0
        },
        mc = function (a, b, c) {
            if (null == b)c.push("null"); else {
                if ("object" == typeof b) {
                    if (ea(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++)c.push(e), e = d[f], mc(a, a.ec ? a.ec.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean)b = b.valueOf(); else {
                        c.push("{");
                        f = "";
                        for (d in b)Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), pc(d, c), c.push(":"), mc(a, a.ec ? a.ec.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        pc(b,
                            c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        }, qc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        }, rc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, pc = function (a, b) {
            b.push('"', a.replace(rc, function (a) {
                var b = qc[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
                    qc[a] = b);
                return b
            }), '"')
        };
    var sc = function () {
    };
    sc.prototype.Zc = null;
    sc.prototype.nb = ca;
    var tc = function (a) {
        return a.Zc || (a.Zc = a.Tb())
    };
    sc.prototype.Tb = ca;
    var uc, vc = function () {
    };
    r(vc, sc);
    vc.prototype.nb = function () {
        var a = wc(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    vc.prototype.Tb = function () {
        var a = {};
        wc(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var wc = function (a) {
        if (!a.od && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.od = d
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.od
    };
    uc = new vc;
    var xc = function () {
    };
    r(xc, sc);
    xc.prototype.nb = function () {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a)return a;
        if ("undefined" != typeof XDomainRequest)return new yc;
        throw Error("Unsupported browser");
    };
    xc.prototype.Tb = function () {
        return {}
    };
    var yc = function () {
        this.qa = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = this.responseXML = null;
        this.qa.onload = q(this.pe, this);
        this.qa.onerror = q(this.md, this);
        this.qa.onprogress = q(this.qe, this);
        this.qa.ontimeout = q(this.re, this)
    };
    h = yc.prototype;
    h.open = function (a, b, c) {
        if (null != c && !c)throw Error("Only async requests are supported.");
        this.qa.open(a, b)
    };
    h.send = function (a) {
        if (a)if ("string" == typeof a)this.qa.send(a); else throw Error("Only string data is supported"); else this.qa.send()
    };
    h.abort = function () {
        this.qa.abort()
    };
    h.setRequestHeader = function () {
    };
    h.pe = function () {
        this.status = 200;
        this.responseText = this.qa.responseText;
        zc(this, 4)
    };
    h.md = function () {
        this.status = 500;
        this.responseText = "";
        zc(this, 4)
    };
    h.re = function () {
        this.md()
    };
    h.qe = function () {
        this.status = 200;
        zc(this, 1)
    };
    var zc = function (a, b) {
        a.readyState = b;
        if (a.onreadystatechange)a.onreadystatechange()
    };
    var A = function (a, b) {
        this.h = [];
        this.g = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.h[d] = e, c = !1)
        }
    }, Ac = {}, Bc = function (a) {
        if (-128 <= a && 128 > a) {
            var b = Ac[a];
            if (b)return b
        }
        b = new A([a | 0], 0 > a ? -1 : 0);
        -128 <= a && 128 > a && (Ac[a] = b);
        return b
    }, D = function (a) {
        if (isNaN(a) || !isFinite(a))return B;
        if (0 > a)return C(D(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++)b[d] = a / c | 0, c *= 4294967296;
        return new A(b, 0)
    }, Cc = function (a, b) {
        if (0 == a.length)throw Error("number format error: empty string");
        b = b || 10;
        if (2 > b || 36 < b)throw Error("radix out of range: " +
            b);
        if ("-" == a.charAt(0))return C(Cc(a.substring(1), b));
        if (0 <= a.indexOf("-"))throw Error('number format error: interior "-" character');
        for (var c = D(Math.pow(b, 8)), d = B, e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e), g = parseInt(a.substring(e, e + f), b);
            8 > f ? (f = D(Math.pow(b, f)), d = d.multiply(f).add(D(g))) : (d = d.multiply(c), d = d.add(D(g)))
        }
        return d
    }, B = Bc(0), Dc = Bc(1), Ec = Bc(16777216), Fc = function (a) {
        if (-1 == a.g)return -Fc(C(a));
        for (var b = 0, c = 1, d = 0; d < a.h.length; d++)b += Gc(a, d) * c, c *= 4294967296;
        return b
    };
    A.prototype.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a)throw Error("radix out of range: " + a);
        if (Hc(this))return "0";
        if (-1 == this.g)return "-" + C(this).toString(a);
        for (var b = D(Math.pow(a, 6)), c = this, d = ""; ;) {
            var e = Ic(c, b), c = Jc(c, e.multiply(b)), f = ((0 < c.h.length ? c.h[0] : c.g) >>> 0).toString(a), c = e;
            if (Hc(c))return f + d;
            for (; 6 > f.length;)f = "0" + f;
            d = "" + f + d
        }
    };
    var E = function (a, b) {
        return 0 > b ? 0 : b < a.h.length ? a.h[b] : a.g
    }, Gc = function (a, b) {
        a = E(a, b);
        return 0 <= a ? a : 4294967296 + a
    }, Hc = function (a) {
        if (0 != a.g)return !1;
        for (var b = 0; b < a.h.length; b++)if (0 != a.h[b])return !1;
        return !0
    };
    A.prototype.Ib = function (a) {
        if (this.g != a.g)return !1;
        for (var b = Math.max(this.h.length, a.h.length), c = 0; c < b; c++)if (E(this, c) != E(a, c))return !1;
        return !0
    };
    A.prototype.compare = function (a) {
        a = Jc(this, a);
        return -1 == a.g ? -1 : Hc(a) ? 0 : 1
    };
    var C = function (a) {
        for (var b = a.h.length, c = [], d = 0; d < b; d++)c[d] = ~a.h[d];
        return (new A(c, ~a.g)).add(Dc)
    };
    A.prototype.add = function (a) {
        for (var b = Math.max(this.h.length, a.h.length), c = [], d = 0, e = 0; e <= b; e++) {
            var f = d + (E(this, e) & 65535) + (E(a, e) & 65535), g = (f >>> 16) + (E(this, e) >>> 16) + (E(a, e) >>> 16), d = g >>> 16, f = f & 65535, g = g & 65535;
            c[e] = g << 16 | f
        }
        return new A(c, c[c.length - 1] & -2147483648 ? -1 : 0)
    };
    var Jc = function (a, b) {
        return a.add(C(b))
    };
    A.prototype.multiply = function (a) {
        if (Hc(this) || Hc(a))return B;
        if (-1 == this.g)return -1 == a.g ? C(this).multiply(C(a)) : C(C(this).multiply(a));
        if (-1 == a.g)return C(this.multiply(C(a)));
        if (0 > this.compare(Ec) && 0 > a.compare(Ec))return D(Fc(this) * Fc(a));
        for (var b = this.h.length + a.h.length, c = [], d = 0; d < 2 * b; d++)c[d] = 0;
        for (d = 0; d < this.h.length; d++)for (var e = 0; e < a.h.length; e++) {
            var f = E(this, d) >>> 16, g = E(this, d) & 65535, k = E(a, e) >>> 16, t = E(a, e) & 65535;
            c[2 * d + 2 * e] += g * t;
            Kc(c, 2 * d + 2 * e);
            c[2 * d + 2 * e + 1] += f * t;
            Kc(c, 2 * d + 2 * e + 1);
            c[2 * d + 2 * e +
            1] += g * k;
            Kc(c, 2 * d + 2 * e + 1);
            c[2 * d + 2 * e + 2] += f * k;
            Kc(c, 2 * d + 2 * e + 2)
        }
        for (d = 0; d < b; d++)c[d] = c[2 * d + 1] << 16 | c[2 * d];
        for (d = b; d < 2 * b; d++)c[d] = 0;
        return new A(c, 0)
    };
    var Kc = function (a, b) {
        for (; (a[b] & 65535) != a[b];)a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    }, Ic = function (a, b) {
        if (Hc(b))throw Error("division by zero");
        if (Hc(a))return B;
        if (-1 == a.g)return -1 == b.g ? Ic(C(a), C(b)) : C(Ic(C(a), b));
        if (-1 == b.g)return C(Ic(a, C(b)));
        if (30 < a.h.length) {
            if (-1 == a.g || -1 == b.g)throw Error("slowDivide_ only works with positive integers.");
            for (var c = Dc; 0 >= b.compare(a);)c = c.shiftLeft(1), b = b.shiftLeft(1);
            var d = Lc(c, 1), e = Lc(b, 1), f;
            b = Lc(b, 2);
            for (c = Lc(c, 2); !Hc(b);)f = e.add(b), 0 >= f.compare(a) && (d = d.add(c),
                e = f), b = Lc(b, 1), c = Lc(c, 1);
            return d
        }
        for (c = B; 0 <= a.compare(b);) {
            d = Math.max(1, Math.floor(Fc(a) / Fc(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            f = D(d);
            for (var g = f.multiply(b); -1 == g.g || 0 < g.compare(a);)d -= e, f = D(d), g = f.multiply(b);
            Hc(f) && (f = Dc);
            c = c.add(f);
            a = Jc(a, g)
        }
        return c
    }, Mc = function (a, b) {
        for (var c = Math.max(a.h.length, b.h.length), d = [], e = 0; e < c; e++)d[e] = E(a, e) | E(b, e);
        return new A(d, a.g | b.g)
    };
    A.prototype.shiftLeft = function (a) {
        var b = a >> 5;
        a %= 32;
        for (var c = this.h.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++)d[e] = 0 < a ? E(this, e - b) << a | E(this, e - b - 1) >>> 32 - a : E(this, e - b);
        return new A(d, this.g)
    };
    var Lc = function (a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.h.length - c, e = [], f = 0; f < d; f++)e[f] = 0 < b ? E(a, f + c) >>> b | E(a, f + c + 1) << 32 - b : E(a, f + c);
        return new A(e, a.g)
    };
    var Nc = function (a, b) {
        this.sb = a;
        this.pa = b
    };
    Nc.prototype.Ib = function (a) {
        return this.pa == a.pa && this.sb.Ib(Xa(a.sb))
    };
    Nc.prototype.toString = ca;
    var Qc = function (a) {
        try {
            var b;
            if (b = 0 == a.lastIndexOf("[", 0)) {
                var c = a.length - 1;
                b = 0 <= c && a.indexOf("]", c) == c
            }
            return b ? new Oc(a.substring(1, a.length - 1)) : new Pc(a)
        } catch (d) {
            return null
        }
    }, Pc = function (a) {
        var b = B;
        if (a instanceof A) {
            if (0 != a.g || 0 > a.compare(B) || 0 < a.compare(Rc))throw Error("The address does not look like an IPv4.");
            b = Xa(a)
        } else {
            if (!Sc.test(a))throw Error(a + " does not look like an IPv4 address.");
            var c = a.split(".");
            if (4 != c.length)throw Error(a + " does not look like an IPv4 address.");
            for (var d = 0; d <
            c.length; d++) {
                var e;
                e = c[d];
                var f = Number(e);
                e = 0 == f && /^[\s\xa0]*$/.test(e) ? NaN : f;
                if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && 0 == c[d].lastIndexOf("0", 0))throw Error("In " + a + ", octet " + d + " is not valid");
                e = D(e);
                b = Mc(b.shiftLeft(8), e)
            }
        }
        Nc.call(this, b, 4)
    };
    r(Pc, Nc);
    var Sc = /^[0-9.]*$/, Rc = Jc(Dc.shiftLeft(32), Dc);
    Pc.prototype.toString = function () {
        if (this.Ea)return this.Ea;
        for (var a = Gc(this.sb, 0), b = [], c = 3; 0 <= c; c--)b[c] = String(a & 255), a >>>= 8;
        return this.Ea = b.join(".")
    };
    var Oc = function (a) {
        var b = B;
        if (a instanceof A) {
            if (0 != a.g || 0 > a.compare(B) || 0 < a.compare(Tc))throw Error("The address does not look like a valid IPv6.");
            b = Xa(a)
        } else {
            if (!Uc.test(a))throw Error(a + " is not a valid IPv6 address.");
            var c = a.split(":");
            if (-1 != c[c.length - 1].indexOf(".")) {
                a = Gc(Xa((new Pc(c[c.length - 1])).sb), 0);
                var d = [];
                d.push((a >>> 16 & 65535).toString(16));
                d.push((a & 65535).toString(16));
                La(c, c.length - 1);
                Ra(c, d);
                a = c.join(":")
            }
            d = a.split("::");
            if (2 < d.length || 1 == d.length && 8 != c.length)throw Error(a +
                " is not a valid IPv6 address.");
            if (1 < d.length) {
                c = d[0].split(":");
                d = d[1].split(":");
                1 == c.length && "" == c[0] && (c = []);
                1 == d.length && "" == d[0] && (d = []);
                var e = 8 - (c.length + d.length);
                if (1 > e)c = []; else {
                    for (var f = [], g = 0; g < e; g++)f[g] = "0";
                    c = Pa(c, f, d)
                }
            }
            if (8 != c.length)throw Error(a + " is not a valid IPv6 address");
            for (d = 0; d < c.length; d++) {
                e = Cc(c[d], 16);
                if (0 > e.compare(B) || 0 < e.compare(Vc))throw Error(c[d] + " in " + a + " is not a valid hextet.");
                b = Mc(b.shiftLeft(16), e)
            }
        }
        Nc.call(this, b, 6)
    };
    r(Oc, Nc);
    var Uc = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/, Vc = Bc(65535), Tc = Jc(Dc.shiftLeft(128), Dc);
    Oc.prototype.toString = function () {
        if (this.Ea)return this.Ea;
        for (var a = [], b = 3; 0 <= b; b--) {
            var c = Gc(this.sb, b), d = c & 65535;
            a.push((c >>> 16).toString(16));
            a.push(d.toString(16))
        }
        for (var c = b = -1, e = d = 0, f = 0; f < a.length; f++)"0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);
        0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));
        return this.Ea = a.join(":")
    };
    var Xc = function () {
        this.Zb = "";
        this.Ud = Wc
    };
    Xc.prototype.Qb = !0;
    Xc.prototype.Lb = function () {
        return this.Zb
    };
    Xc.prototype.toString = function () {
        return "TrustedResourceUrl{" + this.Zb + "}"
    };
    var Wc = {};
    var Zc = function () {
        this.la = "";
        this.Rd = Yc
    };
    Zc.prototype.Qb = !0;
    Zc.prototype.Lb = function () {
        return this.la
    };
    Zc.prototype.toString = function () {
        return "SafeHtml{" + this.la + "}"
    };
    var $c = function (a) {
        if (a instanceof Zc && a.constructor === Zc && a.Rd === Yc)return a.la;
        za("expected object of type SafeHtml, got '" + a + "' of type " + m(a));
        return "type_error:SafeHtml"
    }, Yc = {};
    Zc.prototype.ye = function (a) {
        this.la = a;
        return this
    };
    !ib && !y || y && 9 <= Number(qb) || ib && z("1.9.1");
    y && z("9");
    var bd = function (a, b) {
        Sa(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : ad.hasOwnProperty(d) ? a.setAttribute(ad[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, ad = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    var cd = function (a, b, c) {
        this.Be = c;
        this.ae = a;
        this.Ne = b;
        this.Vb = 0;
        this.Ob = null
    };
    cd.prototype.get = function () {
        var a;
        0 < this.Vb ? (this.Vb--, a = this.Ob, this.Ob = a.next, a.next = null) : a = this.ae();
        return a
    };
    cd.prototype.put = function (a) {
        this.Ne(a);
        this.Vb < this.Be && (this.Vb++, a.next = this.Ob, this.Ob = a)
    };
    var dd = function (a) {
        l.setTimeout(function () {
            throw a;
        }, 0)
    }, ed, fd = function () {
        var a = l.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function () {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = q(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c)this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var a = c.cd;
                    c.cd = null;
                    a()
                }
            };
            return function (a) {
                d.next = {cd: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
            function (a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function () {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function (a) {
            l.setTimeout(a, 0)
        }
    };
    var gd = function () {
        this.pc = this.Ma = null
    }, id = new cd(function () {
        return new hd
    }, function (a) {
        a.reset()
    }, 100);
    gd.prototype.add = function (a, b) {
        var c = id.get();
        c.set(a, b);
        this.pc ? this.pc.next = c : (w(!this.Ma), this.Ma = c);
        this.pc = c
    };
    gd.prototype.remove = function () {
        var a = null;
        this.Ma && (a = this.Ma, this.Ma = this.Ma.next, this.Ma || (this.pc = null), a.next = null);
        return a
    };
    var hd = function () {
        this.next = this.scope = this.zc = null
    };
    hd.prototype.set = function (a, b) {
        this.zc = a;
        this.scope = b;
        this.next = null
    };
    hd.prototype.reset = function () {
        this.next = this.scope = this.zc = null
    };
    var nd = function (a, b) {
        jd || kd();
        ld || (jd(), ld = !0);
        md.add(a, b)
    }, jd, kd = function () {
        var a = l.Promise;
        if (-1 != String(a).indexOf("[native code]")) {
            var b = a.resolve(void 0);
            jd = function () {
                b.then(od)
            }
        } else jd = function () {
            var a = od;
            !p(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (ed || (ed = fd()), ed(a)) : l.setImmediate(a)
        }
    }, ld = !1, md = new gd, od = function () {
        for (var a; a = md.remove();) {
            try {
                a.zc.call(a.scope)
            } catch (b) {
                dd(b)
            }
            id.put(a)
        }
        ld = !1
    };
    var pd = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    }, qd = function (a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var F = function (a, b) {
        this.J = 0;
        this.ma = void 0;
        this.Pa = this.ha = this.s = null;
        this.Mb = this.yc = !1;
        if (a != ba)try {
            var c = this;
            a.call(b, function (a) {
                rd(c, 2, a)
            }, function (a) {
                if (!(a instanceof sd))try {
                    if (a instanceof Error)throw a;
                    throw Error("Promise rejected.");
                } catch (e) {
                }
                rd(c, 3, a)
            })
        } catch (d) {
            rd(this, 3, d)
        }
    }, td = function () {
        this.next = this.context = this.Va = this.Ga = this.child = null;
        this.lb = !1
    };
    td.prototype.reset = function () {
        this.context = this.Va = this.Ga = this.child = null;
        this.lb = !1
    };
    var ud = new cd(function () {
        return new td
    }, function (a) {
        a.reset()
    }, 100), vd = function (a, b, c) {
        var d = ud.get();
        d.Ga = a;
        d.Va = b;
        d.context = c;
        return d
    }, G = function (a) {
        if (a instanceof F)return a;
        var b = new F(ba);
        rd(b, 2, a);
        return b
    }, H = function (a) {
        return new F(function (b, c) {
            c(a)
        })
    }, xd = function (a, b, c) {
        wd(a, b, c, null) || nd(ka(b, a))
    }, yd = function (a) {
        return new F(function (b) {
            var c = a.length, d = [];
            if (c)for (var e = function (a, e, f) {
                c--;
                d[a] = e ? {ke: !0, value: f} : {ke: !1, reason: f};
                0 == c && b(d)
            }, f = 0, g; f < a.length; f++)g = a[f], xd(g, ka(e, f, !0),
                ka(e, f, !1)); else b(d)
        })
    };
    F.prototype.then = function (a, b, c) {
        null != a && Ca(a, "opt_onFulfilled should be a function.");
        null != b && Ca(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return zd(this, p(a) ? a : null, p(b) ? b : null, c)
    };
    pd(F);
    var Bd = function (a, b) {
        b = vd(b, b, void 0);
        b.lb = !0;
        Ad(a, b);
        return a
    };
    F.prototype.l = function (a, b) {
        return zd(this, null, a, b)
    };
    F.prototype.cancel = function (a) {
        0 == this.J && nd(function () {
            var b = new sd(a);
            Cd(this, b)
        }, this)
    };
    var Cd = function (a, b) {
        if (0 == a.J)if (a.s) {
            var c = a.s;
            if (c.ha) {
                for (var d = 0, e = null, f = null, g = c.ha; g && (g.lb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next)e || (f = g);
                e && (0 == c.J && 1 == d ? Cd(c, b) : (f ? (d = f, w(c.ha), w(null != d), d.next == c.Pa && (c.Pa = d), d.next = d.next.next) : Dd(c), Ed(c, e, 3, b)))
            }
            a.s = null
        } else rd(a, 3, b)
    }, Ad = function (a, b) {
        a.ha || 2 != a.J && 3 != a.J || Fd(a);
        w(null != b.Ga);
        a.Pa ? a.Pa.next = b : a.ha = b;
        a.Pa = b
    }, zd = function (a, b, c, d) {
        var e = vd(null, null, null);
        e.child = new F(function (a, g) {
            e.Ga = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (ua) {
                    g(ua)
                }
            } :
                a;
            e.Va = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    void 0 === e && b instanceof sd ? g(b) : a(e)
                } catch (ua) {
                    g(ua)
                }
            } : g
        });
        e.child.s = a;
        Ad(a, e);
        return e.child
    };
    F.prototype.Xe = function (a) {
        w(1 == this.J);
        this.J = 0;
        rd(this, 2, a)
    };
    F.prototype.Ye = function (a) {
        w(1 == this.J);
        this.J = 0;
        rd(this, 3, a)
    };
    var rd = function (a, b, c) {
        0 == a.J && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.J = 1, wd(c, a.Xe, a.Ye, a) || (a.ma = c, a.J = b, a.s = null, Fd(a), 3 != b || c instanceof sd || Gd(a, c)))
    }, wd = function (a, b, c, d) {
        if (a instanceof F)return null != b && Ca(b, "opt_onFulfilled should be a function."), null != c && Ca(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Ad(a, vd(b || ba, c || null, d)), !0;
        if (qd(a))return a.then(b, c, d), !0;
        if (ha(a))try {
            var e = a.then;
            if (p(e))return Hd(a,
                e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    }, Hd = function (a, b, c, d, e) {
        var f = !1, g = function (a) {
            f || (f = !0, c.call(e, a))
        }, k = function (a) {
            f || (f = !0, d.call(e, a))
        };
        try {
            b.call(a, g, k)
        } catch (t) {
            k(t)
        }
    }, Fd = function (a) {
        a.yc || (a.yc = !0, nd(a.fe, a))
    }, Dd = function (a) {
        var b = null;
        a.ha && (b = a.ha, a.ha = b.next, b.next = null);
        a.ha || (a.Pa = null);
        null != b && w(null != b.Ga);
        return b
    };
    F.prototype.fe = function () {
        for (var a; a = Dd(this);)Ed(this, a, this.J, this.ma);
        this.yc = !1
    };
    var Ed = function (a, b, c, d) {
        if (3 == c && b.Va && !b.lb)for (; a && a.Mb; a = a.s)a.Mb = !1;
        if (b.child)b.child.s = null, Id(b, c, d); else try {
            b.lb ? b.Ga.call(b.context) : Id(b, c, d)
        } catch (e) {
            Jd.call(null, e)
        }
        ud.put(b)
    }, Id = function (a, b, c) {
        2 == b ? a.Ga.call(a.context, c) : a.Va && a.Va.call(a.context, c)
    }, Gd = function (a, b) {
        a.Mb = !0;
        nd(function () {
            a.Mb && Jd.call(null, b)
        })
    }, Jd = dd, sd = function (a) {
        u.call(this, a)
    };
    r(sd, u);
    sd.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    var Kd = function (a, b) {
        this.gc = [];
        this.ud = a;
        this.fd = b || null;
        this.qb = this.Ta = !1;
        this.ma = void 0;
        this.Tc = this.Yc = this.tc = !1;
        this.nc = 0;
        this.s = null;
        this.uc = 0
    };
    Kd.prototype.cancel = function (a) {
        if (this.Ta)this.ma instanceof Kd && this.ma.cancel(); else {
            if (this.s) {
                var b = this.s;
                delete this.s;
                a ? b.cancel(a) : (b.uc--, 0 >= b.uc && b.cancel())
            }
            this.ud ? this.ud.call(this.fd, this) : this.Tc = !0;
            this.Ta || Ld(this, new Md)
        }
    };
    Kd.prototype.dd = function (a, b) {
        this.tc = !1;
        Nd(this, a, b)
    };
    var Nd = function (a, b, c) {
        a.Ta = !0;
        a.ma = c;
        a.qb = !b;
        Od(a)
    }, Qd = function (a) {
        if (a.Ta) {
            if (!a.Tc)throw new Pd;
            a.Tc = !1
        }
    };
    Kd.prototype.callback = function (a) {
        Qd(this);
        Rd(a);
        Nd(this, !0, a)
    };
    var Ld = function (a, b) {
        Qd(a);
        Rd(b);
        Nd(a, !1, b)
    }, Rd = function (a) {
        w(!(a instanceof Kd), "An execution sequence may not be initiated with a blocking Deferred.")
    }, Vd = function (a) {
        var b = Sd("https://apis.google.com/js/client.js?onload=" + Td);
        Ud(b, null, a, void 0)
    }, Ud = function (a, b, c, d) {
        w(!a.Yc, "Blocking Deferreds can not be re-used");
        a.gc.push([b, c, d]);
        a.Ta && Od(a)
    };
    Kd.prototype.then = function (a, b, c) {
        var d, e, f = new F(function (a, b) {
            d = a;
            e = b
        });
        Ud(this, d, function (a) {
            a instanceof Md ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    pd(Kd);
    var Wd = function (a) {
        return Ha(a.gc, function (a) {
            return p(a[1])
        })
    }, Od = function (a) {
        if (a.nc && a.Ta && Wd(a)) {
            var b = a.nc, c = Xd[b];
            c && (l.clearTimeout(c.rb), delete Xd[b]);
            a.nc = 0
        }
        a.s && (a.s.uc--, delete a.s);
        for (var b = a.ma, d = c = !1; a.gc.length && !a.tc;) {
            var e = a.gc.shift(), f = e[0], g = e[1], e = e[2];
            if (f = a.qb ? g : f)try {
                var k = f.call(e || a.fd, b);
                void 0 !== k && (a.qb = a.qb && (k == b || k instanceof Error), a.ma = b = k);
                if (qd(b) || "function" === typeof l.Promise && b instanceof l.Promise)d = !0, a.tc = !0
            } catch (t) {
                b = t, a.qb = !0, Wd(a) || (c = !0)
            }
        }
        a.ma = b;
        d &&
        (k = q(a.dd, a, !0), d = q(a.dd, a, !1), b instanceof Kd ? (Ud(b, k, d), b.Yc = !0) : b.then(k, d));
        c && (b = new Yd(b), Xd[b.rb] = b, a.nc = b.rb)
    }, Pd = function () {
        u.call(this)
    };
    r(Pd, u);
    Pd.prototype.message = "Deferred has already fired";
    Pd.prototype.name = "AlreadyCalledError";
    var Md = function () {
        u.call(this)
    };
    r(Md, u);
    Md.prototype.message = "Deferred was canceled";
    Md.prototype.name = "CanceledError";
    var Yd = function (a) {
        this.rb = l.setTimeout(q(this.We, this), 0);
        this.N = a
    };
    Yd.prototype.We = function () {
        w(Xd[this.rb], "Cannot throw an error that is not scheduled.");
        delete Xd[this.rb];
        throw this.N;
    };
    var Xd = {};
    var Sd = function (a) {
        var b = new Xc;
        b.Zb = a;
        return Zd(b)
    }, Zd = function (a) {
        var b = {}, c = b.document || document, d;
        a instanceof Xc && a.constructor === Xc && a.Ud === Wc ? d = a.Zb : (za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + m(a)), d = "type_error:TrustedResourceUrl");
        var e = document.createElement("SCRIPT");
        a = {Cd: e, Bb: void 0};
        var f = new Kd($d, a), g = null, k = null != b.timeout ? b.timeout : 5E3;
        0 < k && (g = window.setTimeout(function () {
            ae(e, !0);
            Ld(f, new be(1, "Timeout reached for loading script " + d))
        }, k), a.Bb = g);
        e.onload =
            e.onreadystatechange = function () {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ae(e, b.hf || !1, g), f.callback(null))
            };
        e.onerror = function () {
            ae(e, !0, g);
            Ld(f, new be(0, "Error while loading script " + d))
        };
        a = b.attributes || {};
        Za(a, {type: "text/javascript", charset: "UTF-8", src: d});
        bd(e, a);
        ce(c).appendChild(e);
        return f
    }, ce = function (a) {
        var b;
        return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }, $d = function () {
        if (this && this.Cd) {
            var a = this.Cd;
            a && "SCRIPT" == a.tagName &&
            ae(a, !0, this.Bb)
        }
    }, ae = function (a, b, c) {
        null != c && l.clearTimeout(c);
        a.onload = ba;
        a.onerror = ba;
        a.onreadystatechange = ba;
        b && window.setTimeout(function () {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, 0)
    }, be = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        u.call(this, c);
        this.code = a
    };
    r(be, u);
    var de = function () {
        zb.call(this);
        this.ba = new Gb(this);
        this.Xd = this;
        this.Ic = null
    };
    r(de, zb);
    de.prototype[Cb] = !0;
    h = de.prototype;
    h.addEventListener = function (a, b, c, d) {
        Mb(this, a, b, c, d)
    };
    h.removeEventListener = function (a, b, c, d) {
        Vb(this, a, b, c, d)
    };
    h.dispatchEvent = function (a) {
        ee(this);
        var b, c = this.Ic;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Ic)b.push(c), w(1E3 > ++d, "infinite loop")
        }
        c = this.Xd;
        d = a.type || a;
        if (n(a))a = new Ab(a, c); else if (a instanceof Ab)a.target = a.target || c; else {
            var e = a;
            a = new Ab(d, c);
            Za(a, e)
        }
        var e = !0, f;
        if (b)for (var g = b.length - 1; !a.Ya && 0 <= g; g--)f = a.currentTarget = b[g], e = fe(f, d, !0, a) && e;
        a.Ya || (f = a.currentTarget = c, e = fe(f, d, !0, a) && e, a.Ya || (e = fe(f, d, !1, a) && e));
        if (b)for (g = 0; !a.Ya && g < b.length; g++)f = a.currentTarget = b[g], e = fe(f, d, !1, a) && e;
        return e
    };
    h.Ra = function () {
        de.Vc.Ra.call(this);
        if (this.ba) {
            var a = this.ba, b = 0, c;
            for (c in a.A) {
                for (var d = a.A[c], e = 0; e < d.length; e++)++b, Fb(d[e]);
                delete a.A[c];
                a.Cb--
            }
        }
        this.Ic = null
    };
    h.listen = function (a, b, c, d) {
        ee(this);
        return this.ba.add(String(a), b, !1, c, d)
    };
    var Ub = function (a, b, c, d, e) {
        a.ba.add(String(b), c, !0, d, e)
    }, fe = function (a, b, c, d) {
        b = a.ba.A[String(b)];
        if (!b)return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.cb && g.Gb == c) {
                var k = g.listener, t = g.Nb || g.src;
                g.Fb && Ib(a.ba, g);
                e = !1 !== k.call(t, d) && e
            }
        }
        return e && 0 != d.Bd
    };
    de.prototype.Ac = function (a, b, c, d) {
        return this.ba.Ac(String(a), b, c, d)
    };
    var ee = function (a) {
        w(a.ba, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var ge = "StopIteration" in l ? l.StopIteration : {message: "StopIteration", stack: ""}, he = function () {
    };
    he.prototype.next = function () {
        throw ge;
    };
    he.prototype.Wd = function () {
        return this
    };
    var ie = function (a, b) {
        this.ca = {};
        this.v = [];
        this.pa = this.i = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    h = ie.prototype;
    h.ld = function () {
        return this.i
    };
    h.X = function () {
        je(this);
        for (var a = [], b = 0; b < this.v.length; b++)a.push(this.ca[this.v[b]]);
        return a
    };
    h.ja = function () {
        je(this);
        return this.v.concat()
    };
    h.mb = function (a) {
        return ke(this.ca, a)
    };
    h.Ib = function (a, b) {
        if (this === a)return !0;
        if (this.i != a.ld())return !1;
        b = b || le;
        je(this);
        for (var c, d = 0; c = this.v[d]; d++)if (!b(this.get(c), a.get(c)))return !1;
        return !0
    };
    var le = function (a, b) {
        return a === b
    };
    ie.prototype.remove = function (a) {
        return ke(this.ca, a) ? (delete this.ca[a], this.i--, this.pa++, this.v.length > 2 * this.i && je(this), !0) : !1
    };
    var je = function (a) {
        if (a.i != a.v.length) {
            for (var b = 0, c = 0; b < a.v.length;) {
                var d = a.v[b];
                ke(a.ca, d) && (a.v[c++] = d);
                b++
            }
            a.v.length = c
        }
        if (a.i != a.v.length) {
            for (var e = {}, c = b = 0; b < a.v.length;)d = a.v[b], ke(e, d) || (a.v[c++] = d, e[d] = 1), b++;
            a.v.length = c
        }
    };
    h = ie.prototype;
    h.get = function (a, b) {
        return ke(this.ca, a) ? this.ca[a] : b
    };
    h.set = function (a, b) {
        ke(this.ca, a) || (this.i++, this.v.push(a), this.pa++);
        this.ca[a] = b
    };
    h.addAll = function (a) {
        var b;
        a instanceof ie ? (b = a.ja(), a = a.X()) : (b = Ua(a), a = Ta(a));
        for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
    };
    h.forEach = function (a, b) {
        for (var c = this.ja(), d = 0; d < c.length; d++) {
            var e = c[d], f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function () {
        return new ie(this)
    };
    h.Wd = function (a) {
        je(this);
        var b = 0, c = this.pa, d = this, e = new he;
        e.next = function () {
            if (c != d.pa)throw Error("The map has changed since the iterator was created");
            if (b >= d.v.length)throw ge;
            var e = d.v[b++];
            return a ? e : d.ca[e]
        };
        return e
    };
    var ke = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var me = function (a) {
        if (a.X && "function" == typeof a.X)return a.X();
        if (n(a))return a.split("");
        if (fa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return Ta(a)
    }, ne = function (a) {
        if (a.ja && "function" == typeof a.ja)return a.ja();
        if (!a.X || "function" != typeof a.X) {
            if (fa(a) || n(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)b.push(c);
                return b
            }
            return Ua(a)
        }
    }, oe = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach)a.forEach(b, void 0); else if (fa(a) || n(a))Ea(a, b, void 0); else for (var c = ne(a), d = me(a),
                                                                                                                                     e = d.length, f = 0; f < e; f++)b.call(void 0, d[f], c && c[f], a)
    };
    var pe = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    pe.prototype.hd = null;
    var qe = 0;
    pe.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || qe++;
        d || la();
        this.ub = a;
        this.Ge = b;
        delete this.hd
    };
    pe.prototype.Fd = function (a) {
        this.ub = a
    };
    var re = function (a) {
        this.He = a;
        this.nd = this.vc = this.ub = this.s = null
    }, se = function (a, b) {
        this.name = a;
        this.value = b
    };
    se.prototype.toString = function () {
        return this.name
    };
    var te = new se("SEVERE", 1E3), ue = new se("CONFIG", 700), ve = new se("FINE", 500);
    re.prototype.getParent = function () {
        return this.s
    };
    re.prototype.Fd = function (a) {
        this.ub = a
    };
    var we = function (a) {
        if (a.ub)return a.ub;
        if (a.s)return we(a.s);
        za("Root logger has no level set.");
        return null
    };
    re.prototype.log = function (a, b, c) {
        if (a.value >= we(this).value)for (p(b) && (b = b()), a = new pe(a, String(b), this.He), c && (a.hd = c), c = "log:" + a.Ge, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
            b = c;
            var d = a;
            if (b.nd)for (var e = 0, f; f = b.nd[e]; e++)f(d);
            c = c.getParent()
        }
    };
    var xe = {}, ye = null, ze = function (a) {
        ye || (ye = new re(""), xe[""] = ye, ye.Fd(ue));
        var b;
        if (!(b = xe[a])) {
            b = new re(a);
            var c = a.lastIndexOf("."), d = a.substr(c + 1), c = ze(a.substr(0, c));
            c.vc || (c.vc = {});
            c.vc[d] = b;
            b.s = c;
            xe[a] = b
        }
        return b
    };
    var I = function (a, b) {
        a && a.log(ve, b, void 0)
    };
    var Ae = function (a, b, c) {
        if (p(a))c && (a = q(a, c)); else if (a && "function" == typeof a.handleEvent)a = q(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
    }, Be = function (a) {
        var b = null;
        return (new F(function (c, d) {
            b = Ae(function () {
                c(void 0)
            }, a);
            -1 == b && d(Error("Failed to schedule timer."))
        })).l(function (a) {
            l.clearTimeout(b);
            throw a;
        })
    };
    var Ce = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/, De = function (a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="), e, f = null;
                0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
        }
    };
    var J = function (a) {
        de.call(this);
        this.headers = new ie;
        this.rc = a || null;
        this.ra = !1;
        this.qc = this.b = null;
        this.tb = this.sd = this.Ub = "";
        this.Da = this.Dc = this.Rb = this.xc = !1;
        this.ib = 0;
        this.mc = null;
        this.Ad = "";
        this.oc = this.Me = this.Nd = !1
    };
    r(J, de);
    var Ee = J.prototype, Fe = ze("goog.net.XhrIo");
    Ee.T = Fe;
    var Ge = /^https?$/i, He = ["POST", "PUT"];
    J.prototype.send = function (a, b, c, d) {
        if (this.b)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ub + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Ub = a;
        this.tb = "";
        this.sd = b;
        this.xc = !1;
        this.ra = !0;
        this.b = this.rc ? this.rc.nb() : uc.nb();
        this.qc = this.rc ? tc(this.rc) : tc(uc);
        this.b.onreadystatechange = q(this.xd, this);
        this.Me && "onprogress" in this.b && (this.b.onprogress = q(function (a) {
            this.wd(a, !0)
        }, this), this.b.upload && (this.b.upload.onprogress = q(this.wd, this)));
        try {
            I(this.T, Ie(this, "Opening Xhr")),
                this.Dc = !0, this.b.open(b, String(a), !0), this.Dc = !1
        } catch (f) {
            I(this.T, Ie(this, "Error opening Xhr: " + f.message));
            this.N(5, f);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && oe(d, function (a, b) {
            e.set(b, a)
        });
        d = Ja(e.ja());
        c = l.FormData && a instanceof l.FormData;
        !Ka(He, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.b.setRequestHeader(b, a)
        }, this);
        this.Ad && (this.b.responseType = this.Ad);
        "withCredentials" in this.b && this.b.withCredentials !== this.Nd && (this.b.withCredentials =
            this.Nd);
        try {
            Je(this), 0 < this.ib && (this.oc = Ke(this.b), I(this.T, Ie(this, "Will abort after " + this.ib + "ms if incomplete, xhr2 " + this.oc)), this.oc ? (this.b.timeout = this.ib, this.b.ontimeout = q(this.Bb, this)) : this.mc = Ae(this.Bb, this.ib, this)), I(this.T, Ie(this, "Sending request")), this.Rb = !0, this.b.send(a), this.Rb = !1
        } catch (f) {
            I(this.T, Ie(this, "Send error: " + f.message)), this.N(5, f)
        }
    };
    var Ke = function (a) {
        return y && z(9) && ga(a.timeout) && void 0 !== a.ontimeout
    }, Ia = function (a) {
        return "content-type" == a.toLowerCase()
    };
    J.prototype.Bb = function () {
        "undefined" != typeof aa && this.b && (this.tb = "Timed out after " + this.ib + "ms, aborting", I(this.T, Ie(this, this.tb)), this.dispatchEvent("timeout"), this.abort(8))
    };
    J.prototype.N = function (a, b) {
        this.ra = !1;
        this.b && (this.Da = !0, this.b.abort(), this.Da = !1);
        this.tb = b;
        Le(this);
        Me(this)
    };
    var Le = function (a) {
        a.xc || (a.xc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    J.prototype.abort = function () {
        this.b && this.ra && (I(this.T, Ie(this, "Aborting")), this.ra = !1, this.Da = !0, this.b.abort(), this.Da = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Me(this))
    };
    J.prototype.Ra = function () {
        this.b && (this.ra && (this.ra = !1, this.Da = !0, this.b.abort(), this.Da = !1), Me(this, !0));
        J.Vc.Ra.call(this)
    };
    J.prototype.xd = function () {
        this.isDisposed() || (this.Dc || this.Rb || this.Da ? Ne(this) : this.Ke())
    };
    J.prototype.Ke = function () {
        Ne(this)
    };
    var Ne = function (a) {
        if (a.ra && "undefined" != typeof aa)if (a.qc[1] && 4 == Oe(a) && 2 == Pe(a))I(a.T, Ie(a, "Local request error detected and ignored")); else if (a.Rb && 4 == Oe(a))Ae(a.xd, 0, a); else if (a.dispatchEvent("readystatechange"), 4 == Oe(a)) {
            I(a.T, Ie(a, "Request complete"));
            a.ra = !1;
            try {
                var b = Pe(a), c;
                a:switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.Ub).match(Ce)[1] || null;
                        if (!f && l.self && l.self.location)var g = l.self.location.protocol,
                            f = g.substr(0, g.length - 1);
                        e = !Ge.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d)a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
                    var k;
                    try {
                        k = 2 < Oe(a) ? a.b.statusText : ""
                    } catch (t) {
                        I(a.T, "Can not get status: " + t.message), k = ""
                    }
                    a.tb = k + " [" + Pe(a) + "]";
                    Le(a)
                }
            } finally {
                Me(a)
            }
        }
    };
    J.prototype.wd = function (a, b) {
        w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
        this.dispatchEvent(Qe(a, "progress"));
        this.dispatchEvent(Qe(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Qe = function (a, b) {
        return {type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total}
    }, Me = function (a, b) {
        if (a.b) {
            Je(a);
            var c = a.b, d = a.qc[0] ? ba : null;
            a.b = null;
            a.qc = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (a = a.T) && a.log(te, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
            }
        }
    }, Je = function (a) {
        a.b && a.oc && (a.b.ontimeout = null);
        ga(a.mc) && (l.clearTimeout(a.mc), a.mc = null)
    }, Oe = function (a) {
        return a.b ? a.b.readyState : 0
    }, Pe = function (a) {
        try {
            return 2 < Oe(a) ?
                a.b.status : -1
        } catch (b) {
            return -1
        }
    }, Re = function (a) {
        try {
            return a.b ? a.b.responseText : ""
        } catch (b) {
            return I(a.T, "Can not get responseText: " + b.message), ""
        }
    }, Ie = function (a, b) {
        return b + " [" + a.sd + " " + a.Ub + " " + Pe(a) + "]"
    };
    var Se = function (a, b) {
        this.ia = this.Ka = this.na = "";
        this.Xa = null;
        this.Ca = this.ta = "";
        this.P = this.Ae = !1;
        var c;
        a instanceof Se ? (this.P = void 0 !== b ? b : a.P, Te(this, a.na), c = a.Ka, K(this), this.Ka = c, Ue(this, a.ia), Ve(this, a.Xa), We(this, a.ta), Xe(this, a.$.clone()), a = a.Ca, K(this), this.Ca = a) : a && (c = String(a).match(Ce)) ? (this.P = !!b, Te(this, c[1] || "", !0), a = c[2] || "", K(this), this.Ka = Ye(a), Ue(this, c[3] || "", !0), Ve(this, c[4]), We(this, c[5] || "", !0), Xe(this, c[6] || "", !0), a = c[7] || "", K(this), this.Ca = Ye(a)) : (this.P = !!b, this.$ = new L(null,
            0, this.P))
    };
    Se.prototype.toString = function () {
        var a = [], b = this.na;
        b && a.push(Ze(b, $e, !0), ":");
        var c = this.ia;
        if (c || "file" == b)a.push("//"), (b = this.Ka) && a.push(Ze(b, $e, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.Xa, null != c && a.push(":", String(c));
        if (c = this.ta)this.ia && "/" != c.charAt(0) && a.push("/"), a.push(Ze(c, "/" == c.charAt(0) ? af : bf, !0));
        (c = this.$.toString()) && a.push("?", c);
        (c = this.Ca) && a.push("#", Ze(c, cf));
        return a.join("")
    };
    Se.prototype.resolve = function (a) {
        var b = this.clone(), c = !!a.na;
        c ? Te(b, a.na) : c = !!a.Ka;
        if (c) {
            var d = a.Ka;
            K(b);
            b.Ka = d
        } else c = !!a.ia;
        c ? Ue(b, a.ia) : c = null != a.Xa;
        d = a.ta;
        if (c)Ve(b, a.Xa); else if (c = !!a.ta) {
            if ("/" != d.charAt(0))if (this.ia && !this.ta)d = "/" + d; else {
                var e = b.ta.lastIndexOf("/");
                -1 != e && (d = b.ta.substr(0, e + 1) + d)
            }
            e = d;
            if (".." == e || "." == e)d = ""; else if (v(e, "./") || v(e, "/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length ||
                    1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? We(b, d) : c = "" !== a.$.toString();
        c ? Xe(b, Ye(a.$.toString())) : c = !!a.Ca;
        c && (a = a.Ca, K(b), b.Ca = a);
        return b
    };
    Se.prototype.clone = function () {
        return new Se(this)
    };
    var Te = function (a, b, c) {
        K(a);
        a.na = c ? Ye(b, !0) : b;
        a.na && (a.na = a.na.replace(/:$/, ""))
    }, Ue = function (a, b, c) {
        K(a);
        a.ia = c ? Ye(b, !0) : b
    }, Ve = function (a, b) {
        K(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
            a.Xa = b
        } else a.Xa = null
    }, We = function (a, b, c) {
        K(a);
        a.ta = c ? Ye(b, !0) : b
    }, Xe = function (a, b, c) {
        K(a);
        b instanceof L ? (a.$ = b, a.$.Sc(a.P)) : (c || (b = Ze(b, df)), a.$ = new L(b, 0, a.P))
    }, M = function (a, b, c) {
        K(a);
        a.$.set(b, c)
    }, ef = function (a, b) {
        K(a);
        a.$.remove(b)
    }, K = function (a) {
        if (a.Ae)throw Error("Tried to modify a read-only Uri");
    };
    Se.prototype.Sc = function (a) {
        this.P = a;
        this.$ && this.$.Sc(a);
        return this
    };
    var ff = function (a) {
            return a instanceof Se ? a.clone() : new Se(a, void 0)
        }, gf = function (a, b) {
            var c = new Se(null, void 0);
            Te(c, "https");
            a && Ue(c, a);
            b && We(c, b);
            return c
        }, Ye = function (a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }, Ze = function (a, b, c) {
            return n(a) ? (a = encodeURI(a).replace(b, hf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }, hf = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }, $e = /[#\/\?@]/g, bf = /[\#\?:]/g, af = /[\#\?]/g, df = /[\#\?@]/g,
        cf = /#/g, L = function (a, b, c) {
            this.i = this.j = null;
            this.M = a || null;
            this.P = !!c
        }, jf = function (a) {
            a.j || (a.j = new ie, a.i = 0, a.M && De(a.M, function (b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        }, lf = function (a) {
            var b = ne(a);
            if ("undefined" == typeof b)throw Error("Keys are undefined");
            var c = new L(null, 0, void 0);
            a = me(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d], f = a[d];
                ea(f) ? kf(c, e, f) : c.add(e, f)
            }
            return c
        };
    h = L.prototype;
    h.ld = function () {
        jf(this);
        return this.i
    };
    h.add = function (a, b) {
        jf(this);
        this.M = null;
        a = this.O(a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.i = Aa(this.i) + 1;
        return this
    };
    h.remove = function (a) {
        jf(this);
        a = this.O(a);
        return this.j.mb(a) ? (this.M = null, this.i = Aa(this.i) - this.j.get(a).length, this.j.remove(a)) : !1
    };
    h.mb = function (a) {
        jf(this);
        a = this.O(a);
        return this.j.mb(a)
    };
    h.ja = function () {
        jf(this);
        for (var a = this.j.X(), b = this.j.ja(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
        return c
    };
    h.X = function (a) {
        jf(this);
        var b = [];
        if (n(a))this.mb(a) && (b = Oa(b, this.j.get(this.O(a)))); else {
            a = this.j.X();
            for (var c = 0; c < a.length; c++)b = Oa(b, a[c])
        }
        return b
    };
    h.set = function (a, b) {
        jf(this);
        this.M = null;
        a = this.O(a);
        this.mb(a) && (this.i = Aa(this.i) - this.j.get(a).length);
        this.j.set(a, [b]);
        this.i = Aa(this.i) + 1;
        return this
    };
    h.get = function (a, b) {
        a = a ? this.X(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    var kf = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.M = null, a.j.set(a.O(b), Qa(c)), a.i = Aa(a.i) + c.length)
    };
    L.prototype.toString = function () {
        if (this.M)return this.M;
        if (!this.j)return "";
        for (var a = [], b = this.j.ja(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.X(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
        return this.M = a.join("&")
    };
    L.prototype.clone = function () {
        var a = new L;
        a.M = this.M;
        this.j && (a.j = this.j.clone(), a.i = this.i);
        return a
    };
    L.prototype.O = function (a) {
        a = String(a);
        this.P && (a = a.toLowerCase());
        return a
    };
    L.prototype.Sc = function (a) {
        a && !this.P && (jf(this), this.M = null, this.j.forEach(function (a, c) {
            var b = c.toLowerCase();
            c != b && (this.remove(c), kf(this, b, a))
        }, this));
        this.P = a
    };
    var mf = function () {
            var a = N();
            return y && !!qb && 11 == qb || /Edge\/\d+/.test(a)
        }, nf = function () {
            return l.window && l.window.location.href || ""
        }, of = function (a, b) {
            var c = [], d;
            for (d in a)d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? Wa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < of(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
            for (d in b)d in a || c.push(d);
            return c
        }, qf = function () {
            var a;
            a = N();
            a = "Chrome" != pf(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1],
                10) : null;
            return a && 30 > a ? !1 : !y || !qb || 9 < qb
        }, rf = function (a) {
            a = (a || N()).toLowerCase();
            return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1
        }, sf = function (a) {
            a = a || l.window;
            try {
                a.close()
            } catch (b) {
            }
        }, tf = function (a, b, c) {
            var d = Math.floor(1E9 * Math.random()).toString();
            b = b || 500;
            c = c || 600;
            var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b) / 2;
            b = {
                width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0,
                statusbar: !0, toolbar: !1
            };
            d && (b.target = d);
            "Firefox" == pf(N()) && (a = a || "http://localhost", b.scrollbars = !0);
            var g;
            c = a || "about:blank";
            (d = b) || (d = {});
            a = window;
            b = c instanceof fc ? c : jc("undefined" != typeof c.href ? c.href : String(c));
            c = d.target || c.target;
            e = [];
            for (g in d)switch (g) {
                case "width":
                case "height":
                case "top":
                case "left":
                    e.push(g + "=" + d[g]);
                    break;
                case "target":
                case "noreferrer":
                    break;
                default:
                    e.push(g + "=" + (d[g] ? 1 : 0))
            }
            g = e.join(",");
            (x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && a.navigator && a.navigator.standalone &&
            c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ha(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, w(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof fc ? b : jc(b), g.href = gc(b), g.setAttribute("target",
                c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = gc(b), g && (hb && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = dc("b/12014412, meta tag with sanitized URL"), va.test(d) && (-1 != d.indexOf("&") && (d = d.replace(oa, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(pa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(qa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(ra, "&quot;")), -1 !=
            d.indexOf("'") && (d = d.replace(sa, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(ta, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Ba(cc(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(cc(a)), "must provide non-empty justification"), g.document.write($c((new Zc).ye(d))), g.document.close())) : g = a.open(gc(b), c, g);
            if (g)try {
                g.focus()
            } catch (k) {
            }
            return g
        }, uf = function (a) {
            return new F(function (b) {
                var c = function () {
                    Be(2E3).then(function () {
                        if (!a || a.closed)b(); else return c()
                    })
                };
                return c()
            })
        },
        vf = function () {
            var a = null;
            return (new F(function (b) {
                "complete" == l.document.readyState ? b() : (a = function () {
                    b()
                }, Tb(window, "load", a))
            })).l(function (b) {
                Vb(window, "load", a);
                throw b;
            })
        }, O = function (a) {
            switch (a || l.navigator && l.navigator.product || "") {
                case "ReactNative":
                    return "ReactNative";
                default:
                    return "undefined" !== typeof l.process ? "Node" : "Browser"
            }
        }, wf = function () {
            var a = O();
            return "ReactNative" === a || "Node" === a
        }, pf = function (a) {
            var b = a.toLowerCase();
            if (v(b, "opera/") || v(b, "opr/") || v(b, "opios/"))return "Opera";
            if (v(b,
                    "iemobile"))return "IEMobile";
            if (v(b, "msie") || v(b, "trident/"))return "IE";
            if (v(b, "edge/"))return "Edge";
            if (v(b, "firefox/"))return "Firefox";
            if (v(b, "silk/"))return "Silk";
            if (v(b, "blackberry"))return "Blackberry";
            if (v(b, "webos"))return "Webos";
            if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android"))if (!v(b, "chrome/") && !v(b, "crios/") || v(b, "edge/")) {
                if (v(b, "android"))return "Android";
                if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length)return a[1]
            } else return "Chrome"; else return "Safari";
            return "Other"
        },
        xf = function (a) {
            var b = O(void 0);
            return ("Browser" === b ? pf(N()) : b) + "/JsCore/" + a
        }, N = function () {
            return l.navigator && l.navigator.userAgent || ""
        }, yf = function (a) {
            a = a.split(".");
            for (var b = l, c = 0; c < a.length && "object" == typeof b && null != b; c++)b = b[a[c]];
            c != a.length && (b = void 0);
            return b
        }, Af = function () {
            var a;
            if (!(a = !l.location || !l.location.protocol || "http:" != l.location.protocol && "https:" != l.location.protocol || wf())) {
                var b;
                a:{
                    try {
                        var c = l.localStorage, d = zf();
                        if (c) {
                            c.setItem(d, "1");
                            c.removeItem(d);
                            b = mf() ? !!l.indexedDB :
                                !0;
                            break a
                        }
                    } catch (e) {
                    }
                    b = !1
                }
                a = !b
            }
            return !a
        }, Bf = function (a) {
            a = a || N();
            return rf(a) || "Firefox" == pf(a) ? !1 : !0
        }, Cf = function (a) {
            return "undefined" === typeof a ? null : oc(a)
        }, Df = function (a) {
            var b = {}, c;
            for (c in a)a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
            return b
        }, Ef = function (a) {
            if (null !== a) {
                var b;
                try {
                    b = lc(a)
                } catch (c) {
                    try {
                        b = JSON.parse(a)
                    } catch (d) {
                        throw c;
                    }
                }
                return b
            }
        }, zf = function (a) {
            return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
        }, Ff = function (a) {
            a = a || N();
            return "Safari" == pf(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ?
                !1 : !0
        }, Gf = function () {
            var a = l.___jsl;
            if (a && a.H)for (var b in a.H)if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP)for (var c = 0; c < a.CP.length; c++)a.CP[c] = null
        }, Hf = function (a, b, c, d) {
            if (a > b)throw Error("Short delay should be less than long delay!");
            this.Te = a;
            this.Fe = b;
            a = d || O();
            this.ze = rf(c || N()) || "ReactNative" === a
        };
    Hf.prototype.get = function () {
        return this.ze ? this.Fe : this.Te
    };
    var If;
    try {
        var Jf = {};
        Object.defineProperty(Jf, "abcd", {configurable: !0, enumerable: !0, value: 1});
        Object.defineProperty(Jf, "abcd", {configurable: !0, enumerable: !0, value: 2});
        If = 2 == Jf.abcd
    } catch (a) {
        If = !1
    }
    var P = function (a, b, c) {
        If ? Object.defineProperty(a, b, {configurable: !0, enumerable: !0, value: c}) : a[b] = c
    }, Kf = function (a, b) {
        if (b)for (var c in b)b.hasOwnProperty(c) && P(a, c, b[c])
    }, Lf = function (a) {
        var b = {}, c;
        for (c in a)a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    }, Mf = function (a, b) {
        if (!b || !b.length)return !0;
        if (!a)return !1;
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (void 0 === d || null === d || "" === d)return !1
        }
        return !0
    }, Nf = function (a) {
        var b = a;
        if ("object" == typeof a && null != a) {
            var b = "length" in a ? [] : {}, c;
            for (c in a)P(b, c,
                Nf(a[c]))
        }
        return b
    };
    var Of = ["client_id", "response_type", "scope", "redirect_uri", "state"], Pf = {
        Od: {
            xb: 500,
            wb: 600,
            providerId: "facebook.com",
            fc: Of
        },
        Pd: {xb: 500, wb: 620, providerId: "github.com", fc: Of},
        Qd: {xb: 515, wb: 680, providerId: "google.com", fc: Of},
        Vd: {
            xb: 485,
            wb: 705,
            providerId: "twitter.com",
            fc: "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
        }
    }, Qf = function (a) {
        for (var b in Pf)if (Pf[b].providerId == a)return Pf[b];
        return null
    }, Rf = function (a) {
        return (a = Qf(a)) &&
            a.fc || []
    };
    var Q = function (a, b) {
        this.code = "auth/" + a;
        this.message = b || Sf[a] || ""
    };
    r(Q, Error);
    Q.prototype.K = function () {
        return {name: this.code, code: this.code, message: this.message}
    };
    var Sf = {
        "argument-error": "",
        "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        "cors-unsupported": "This browser is not supported.",
        "credential-already-in-use": "This credential is already associated with a different user account.",
        "custom-token-mismatch": "The custom token corresponds to a different audience.",
        "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        "email-already-in-use": "The email address is already in use by another account.",
        "expired-action-code": "The action code has expired. ",
        "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
        "internal-error": "An internal error has occurred.",
        "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
        "invalid-auth-event": "An internal error has occurred.",
        "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
        "invalid-email": "The email address is badly formatted.",
        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
        "invalid-credential": "The supplied auth credential is malformed or has expired.",
        "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        "wrong-password": "The password is invalid or the user does not have a password.",
        "missing-iframe-start": "An internal error has occurred.",
        "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        "app-deleted": "This instance of FirebaseApp has been deleted.",
        "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
        "no-auth-event": "An internal error has occurred.",
        "no-such-provider": "User was not linked to an account with the given provider.",
        "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
        "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
        "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        "provider-already-linked": "User can only be linked to one identity for the given provider.",
        timeout: "The operation has timed out.",
        "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
        "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
        "user-cancelled": "User did not grant your application the permissions it requested.",
        "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        "user-disabled": "The user account has been disabled by an administrator.",
        "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
        "user-signed-out": "",
        "weak-password": "The password must be 6 characters long or more.",
        "web-storage-unsupported": "This browser is not supported."
    };
    var Tf = function (a, b, c, d, e) {
        this.ya = a;
        this.W = b || null;
        this.kb = c || null;
        this.hc = d || null;
        this.N = e || null;
        if (this.kb || this.N) {
            if (this.kb && this.N)throw new Q("invalid-auth-event");
            if (this.kb && !this.hc)throw new Q("invalid-auth-event");
        } else throw new Q("invalid-auth-event");
    };
    Tf.prototype.getError = function () {
        return this.N
    };
    Tf.prototype.K = function () {
        return {type: this.ya, eventId: this.W, urlResponse: this.kb, sessionId: this.hc, error: this.N && this.N.K()}
    };
    var Uf = function (a) {
        var b = "unauthorized-domain", c = void 0, d = ff(a);
        a = d.ia;
        d = d.na;
        "http" != d && "https" != d ? b = "operation-not-supported-in-this-environment" : c = ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a);
        Q.call(this, b, c)
    };
    r(Uf, Q);
    var Vf = function (a) {
        this.Ee = a.sub;
        la();
        this.Hb = a.email || null
    };
    var Wf = function (a, b, c, d) {
        var e = {};
        ha(c) ? e = c : b && n(c) && n(d) ? e = {
            oauthToken: c,
            oauthTokenSecret: d
        } : !b && n(c) && (e = {accessToken: c});
        if (b || !e.idToken && !e.accessToken)if (b && e.oauthToken && e.oauthTokenSecret)P(this, "accessToken", e.oauthToken), P(this, "secret", e.oauthTokenSecret); else {
            if (b)throw new Q("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
            throw new Q("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
        } else e.idToken && P(this,
            "idToken", e.idToken), e.accessToken && P(this, "accessToken", e.accessToken);
        P(this, "provider", a)
    };
    Wf.prototype.Kb = function (a) {
        return Xf(a, Yf(this))
    };
    Wf.prototype.td = function (a, b) {
        var c = Yf(this);
        c.idToken = b;
        return Zf(a, c)
    };
    var Yf = function (a) {
        var b = {};
        a.idToken && (b.id_token = a.idToken);
        a.accessToken && (b.access_token = a.accessToken);
        a.secret && (b.oauth_token_secret = a.secret);
        b.providerId = a.provider;
        return {postBody: lf(b).toString(), requestUri: Af() ? nf() : "http://localhost"}
    };
    Wf.prototype.K = function () {
        var a = {provider: this.provider};
        this.idToken && (a.oauthIdToken = this.idToken);
        this.accessToken && (a.oauthAccessToken = this.accessToken);
        this.secret && (a.oauthTokenSecret = this.secret);
        return a
    };
    var $f = function (a, b, c) {
        var d = !!b, e = c || [];
        b = function () {
            Kf(this, {providerId: a, isOAuthProvider: !0});
            this.Rc = [];
            this.ed = {};
            "google.com" == a && this.addScope("profile")
        };
        d || (b.prototype.addScope = function (a) {
            Ka(this.Rc, a) || this.Rc.push(a)
        });
        b.prototype.setCustomParameters = function (a) {
            this.ed = Xa(a)
        };
        b.prototype.me = function () {
            var a = Df(this.ed), b;
            for (b in a)a[b] = a[b].toString();
            a = Xa(a);
            for (b = 0; b < e.length; b++) {
                var c = e[b];
                c in a && delete a[c]
            }
            return a
        };
        b.prototype.ne = function () {
            return Qa(this.Rc)
        };
        b.credential =
            function (b, c) {
                return new Wf(a, d, b, c)
            };
        Kf(b, {PROVIDER_ID: a});
        return b
    }, ag = $f("facebook.com", !1, Rf("facebook.com"));
    ag.prototype.addScope = ag.prototype.addScope || void 0;
    var bg = $f("github.com", !1, Rf("github.com"));
    bg.prototype.addScope = bg.prototype.addScope || void 0;
    var cg = $f("google.com", !1, Rf("google.com"));
    cg.prototype.addScope = cg.prototype.addScope || void 0;
    cg.credential = function (a, b) {
        if (!a && !b)throw new Q("argument-error", "credential failed: must provide the ID token and/or the access token.");
        return new Wf("google.com", !1, ha(a) ? a : {idToken: a || null, accessToken: b || null})
    };
    var dg = $f("twitter.com", !0, Rf("twitter.com")), eg = function (a, b) {
        this.Hb = a;
        this.Jc = b;
        P(this, "provider", "password")
    };
    eg.prototype.Kb = function (a) {
        return R(a, fg, {email: this.Hb, password: this.Jc})
    };
    eg.prototype.td = function (a, b) {
        return R(a, gg, {idToken: b, email: this.Hb, password: this.Jc})
    };
    eg.prototype.K = function () {
        return {email: this.Hb, password: this.Jc}
    };
    var hg = function () {
        Kf(this, {providerId: "password", isOAuthProvider: !1})
    };
    Kf(hg, {PROVIDER_ID: "password"});
    var ig = {ff: hg, Od: ag, Qd: cg, Pd: bg, Vd: dg}, jg = function (a) {
        var b = a && a.providerId;
        if (!b)return null;
        var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret;
        a = a && a.oauthIdToken;
        for (var e in ig)if (ig[e].PROVIDER_ID == b)try {
            return ig[e].credential({accessToken: c, idToken: a, oauthToken: c, oauthTokenSecret: d})
        } catch (f) {
            break
        }
        return null
    };
    var kg = function (a, b, c, d) {
        Q.call(this, a, d);
        P(this, "email", b);
        P(this, "credential", c)
    };
    r(kg, Q);
    kg.prototype.K = function () {
        var a = {code: this.code, message: this.message, email: this.email}, b = this.credential && this.credential.K();
        b && (Za(a, b), a.providerId = b.provider, delete a.provider);
        return a
    };
    var lg = function (a) {
        if (a.code) {
            var b = a.code || "";
            0 == b.indexOf("auth/") && (b = b.substring(5));
            return a.email ? new kg(b, a.email, jg(a), a.message) : new Q(b, a.message || void 0)
        }
        return null
    };
    var mg = function (a) {
        this.ef = a
    };
    r(mg, sc);
    mg.prototype.nb = function () {
        return new this.ef
    };
    mg.prototype.Tb = function () {
        return {}
    };
    var S = function (a, b, c) {
        var d;
        d = "Node" == O();
        d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
        if (!d)throw new Q("internal-error", "The XMLHttpRequest compatibility library was not found.");
        this.m = a;
        a = b || {};
        this.Pe = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
        this.Qe = a.secureTokenTimeout || ng;
        this.Dd = Xa(a.secureTokenHeaders || og);
        this.ie = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
        this.je = a.firebaseTimeout ||
            pg;
        this.kd = Xa(a.firebaseHeaders || qg);
        c && (this.kd["X-Client-Version"] = c, this.Dd["X-Client-Version"] = c);
        this.$d = new xc;
        this.df = new mg(d)
    }, rg, ng = new Hf(1E4, 3E4), og = {"Content-Type": "application/x-www-form-urlencoded"}, pg = new Hf(1E4, 3E4), qg = {"Content-Type": "application/json"}, tg = function (a, b, c, d, e, f, g) {
        qf() ? a = q(a.Se, a) : (rg || (rg = new F(function (a, b) {
            sg(a, b)
        })), a = q(a.Re, a));
        a(b, c, d, e, f, g)
    };
    S.prototype.Se = function (a, b, c, d, e, f) {
        var g = "Node" == O(), k = wf() ? g ? new J(this.df) : new J : new J(this.$d), t;
        f && (k.ib = Math.max(0, f), t = setTimeout(function () {
            k.dispatchEvent("timeout")
        }, f));
        k.listen("complete", function () {
            t && clearTimeout(t);
            var a = null;
            try {
                var c;
                c = this.b ? lc(this.b.responseText) : void 0;
                a = c || null
            } catch (fj) {
                try {
                    a = JSON.parse(Re(this)) || null
                } catch (gj) {
                    a = null
                }
            }
            b && b(a)
        });
        Ub(k, "ready", function () {
            t && clearTimeout(t);
            this.Ba || (this.Ba = !0, this.Ra())
        });
        Ub(k, "timeout", function () {
            t && clearTimeout(t);
            this.Ba ||
            (this.Ba = !0, this.Ra());
            b && b(null)
        });
        k.send(a, c, d, e)
    };
    var Td = "__fcb" + Math.floor(1E6 * Math.random()).toString(), sg = function (a, b) {
        ((window.gapi || {}).client || {}).request ? a() : (l[Td] = function () {
            ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
        }, Vd(function () {
            b(Error("CORS_UNSUPPORTED"))
        }))
    };
    S.prototype.Re = function (a, b, c, d, e) {
        var f = this;
        rg.then(function () {
            window.gapi.client.setApiKey(f.m);
            var g = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
                path: a,
                method: c,
                body: d,
                headers: e,
                authType: "none",
                callback: function (a) {
                    window.gapi.auth.setToken(g);
                    b && b(a)
                }
            })
        }).l(function (a) {
            b && b({error: {message: a && a.message || "CORS_UNSUPPORTED"}})
        })
    };
    var vg = function (a, b) {
        return new F(function (c, d) {
            "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? tg(a, a.Pe + "?key=" + encodeURIComponent(a.m), function (a) {
                a ? a.error ? d(ug(a)) : a.access_token && a.refresh_token ? c(a) : d(new Q("internal-error")) : d(new Q("network-request-failed"))
            }, "POST", lf(b).toString(), a.Dd, a.Qe.get()) : d(new Q("internal-error"))
        })
    }, wg = function (a, b, c, d, e) {
        var f = a.ie + b + "?key=" + encodeURIComponent(a.m);
        e && (f += "&cb=" + la().toString());
        return new F(function (b,
                               e) {
            tg(a, f, function (a) {
                a ? a.error ? e(ug(a)) : b(a) : e(new Q("network-request-failed"))
            }, c, oc(Df(d)), a.kd, a.je.get())
        })
    }, xg = function (a) {
        if (!$b.test(a.email))throw new Q("invalid-email");
    }, yg = function (a) {
        "email" in a && xg(a)
    }, Ag = function (a, b) {
        var c = Af() ? nf() : "http://localhost";
        return R(a, zg, {identifier: b, continueUri: c}).then(function (a) {
            return a.allProviders || []
        })
    }, Cg = function (a) {
        return R(a, Bg, {}).then(function (a) {
            return a.authorizedDomains || []
        })
    }, Dg = function (a) {
        if (!a.idToken)throw new Q("internal-error");
    };
    S.prototype.signInAnonymously = function () {
        return R(this, Eg, {})
    };
    S.prototype.updateEmail = function (a, b) {
        return R(this, Fg, {idToken: a, email: b})
    };
    S.prototype.updatePassword = function (a, b) {
        return R(this, gg, {idToken: a, password: b})
    };
    var Gg = {displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL"};
    S.prototype.updateProfile = function (a, b) {
        var c = {idToken: a}, d = [];
        Sa(Gg, function (a, f) {
            var e = b[f];
            null === e ? d.push(a) : f in b && (c[f] = e)
        });
        d.length && (c.deleteAttribute = d);
        return R(this, Fg, c)
    };
    S.prototype.sendPasswordResetEmail = function (a) {
        return R(this, Hg, {requestType: "PASSWORD_RESET", email: a})
    };
    S.prototype.sendEmailVerification = function (a) {
        return R(this, Ig, {requestType: "VERIFY_EMAIL", idToken: a})
    };
    var Kg = function (a, b, c) {
        return R(a, Jg, {idToken: b, deleteProvider: c})
    }, Lg = function (a) {
        if (!a.requestUri || !a.sessionId && !a.postBody)throw new Q("internal-error");
    }, Mg = function (a) {
        var b = null;
        a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = lg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = lg(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = lg(a));
        if (b)throw b;
        if (!a.idToken)throw new Q("internal-error");
    }, Xf = function (a,
                      b) {
        b.returnIdpCredential = !0;
        return R(a, Ng, b)
    }, Zf = function (a, b) {
        b.returnIdpCredential = !0;
        return R(a, Og, b)
    }, Pg = function (a) {
        if (!a.oobCode)throw new Q("invalid-action-code");
    };
    S.prototype.confirmPasswordReset = function (a, b) {
        return R(this, Qg, {oobCode: a, newPassword: b})
    };
    S.prototype.checkActionCode = function (a) {
        return R(this, Rg, {oobCode: a})
    };
    S.prototype.applyActionCode = function (a) {
        return R(this, Sg, {oobCode: a})
    };
    var Sg = {endpoint: "setAccountInfo", I: Pg, gb: "email"}, Rg = {
            endpoint: "resetPassword",
            I: Pg,
            wa: function (a) {
                if (!a.email || !a.requestType)throw new Q("internal-error");
            }
        }, Tg = {
            endpoint: "signupNewUser", I: function (a) {
                xg(a);
                if (!a.password)throw new Q("weak-password");
            }, wa: Dg, xa: !0
        }, zg = {endpoint: "createAuthUri"}, Ug = {
            endpoint: "deleteAccount",
            eb: ["idToken"]
        }, Jg = {
            endpoint: "setAccountInfo", eb: ["idToken", "deleteProvider"], I: function (a) {
                if (!ea(a.deleteProvider))throw new Q("internal-error");
            }
        }, Vg = {endpoint: "getAccountInfo"},
        Ig = {
            endpoint: "getOobConfirmationCode", eb: ["idToken", "requestType"], I: function (a) {
                if ("VERIFY_EMAIL" != a.requestType)throw new Q("internal-error");
            }, gb: "email"
        }, Hg = {
            endpoint: "getOobConfirmationCode", eb: ["requestType"], I: function (a) {
                if ("PASSWORD_RESET" != a.requestType)throw new Q("internal-error");
                xg(a)
            }, gb: "email"
        }, Bg = {Zd: !0, endpoint: "getProjectConfig", ue: "GET"}, Qg = {
            endpoint: "resetPassword",
            I: Pg,
            gb: "email"
        }, Fg = {endpoint: "setAccountInfo", eb: ["idToken"], I: yg, xa: !0}, gg = {
            endpoint: "setAccountInfo", eb: ["idToken"],
            I: function (a) {
                yg(a);
                if (!a.password)throw new Q("weak-password");
            }, wa: Dg, xa: !0
        }, Eg = {endpoint: "signupNewUser", wa: Dg, xa: !0}, Ng = {
            endpoint: "verifyAssertion",
            I: Lg,
            wa: Mg,
            xa: !0
        }, Og = {
            endpoint: "verifyAssertion", I: function (a) {
                Lg(a);
                if (!a.idToken)throw new Q("internal-error");
            }, wa: Mg, xa: !0
        }, Wg = {
            endpoint: "verifyCustomToken", I: function (a) {
                if (!a.token)throw new Q("invalid-custom-token");
            }, wa: Dg, xa: !0
        }, fg = {
            endpoint: "verifyPassword", I: function (a) {
                xg(a);
                if (!a.password)throw new Q("wrong-password");
            }, wa: Dg, xa: !0
        }, R =
            function (a, b, c) {
                if (!Mf(c, b.eb))return H(new Q("internal-error"));
                var d = b.ue || "POST", e;
                return G(c).then(b.I).then(function () {
                    b.xa && (c.returnSecureToken = !0);
                    return wg(a, b.endpoint, d, c, b.Zd || !1)
                }).then(function (a) {
                    return e = a
                }).then(b.wa).then(function () {
                    if (!b.gb)return e;
                    if (!(b.gb in e))throw new Q("internal-error");
                    return e[b.gb]
                })
            }, ug = function (a) {
            var b, c;
            c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
            var d = {keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized"};
            if (c = d[c] ?
                    new Q(d[c]) : null)return c;
            c = a.error && a.error.message || "";
            d = {
                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                MISSING_CUSTOM_TOKEN: "internal-error",
                INVALID_IDENTIFIER: "invalid-email",
                MISSING_CONTINUE_URI: "internal-error",
                INVALID_EMAIL: "invalid-email",
                INVALID_PASSWORD: "wrong-password",
                USER_DISABLED: "user-disabled",
                MISSING_PASSWORD: "internal-error",
                EMAIL_EXISTS: "email-already-in-use",
                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                INVALID_IDP_RESPONSE: "invalid-credential",
                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                EMAIL_NOT_FOUND: "user-not-found",
                EXPIRED_OOB_CODE: "expired-action-code",
                INVALID_OOB_CODE: "invalid-action-code",
                MISSING_OOB_CODE: "internal-error",
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                INVALID_ID_TOKEN: "invalid-user-token",
                TOKEN_EXPIRED: "user-token-expired",
                USER_NOT_FOUND: "user-token-expired",
                CORS_UNSUPPORTED: "cors-unsupported",
                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                WEAK_PASSWORD: "weak-password",
                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                USER_CANCELLED: "user-cancelled"
            };
            b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;
            for (var e in d)if (0 === c.indexOf(e))return new Q(d[e], b);
            !b && a && (b = Cf(a));
            return new Q("internal-error", b)
        };
    var Xg = function (a) {
        this.U = a
    };
    Xg.prototype.value = function () {
        return this.U
    };
    Xg.prototype.Gd = function (a) {
        this.U.style = a;
        return this
    };
    var Yg = function (a) {
        this.U = a || {}
    };
    Yg.prototype.value = function () {
        return this.U
    };
    Yg.prototype.Gd = function (a) {
        this.U.style = a;
        return this
    };
    var $g = function (a) {
        this.cf = a;
        this.Cc = null;
        this.vd = Zg(this)
    };
    $g.prototype.Hc = function () {
        return this.vd
    };
    var ah = function (a) {
        var b = new Yg;
        b.U.where = document.body;
        b.U.url = a.cf;
        b.U.messageHandlersFilter = yf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");
        b.U.attributes = b.U.attributes || {};
        (new Xg(b.U.attributes)).Gd({position: "absolute", top: "-100px", width: "1px", height: "1px"});
        b.U.dontclear = !0;
        return b
    }, Zg = function (a) {
        return bh().then(function () {
            return new F(function (b, c) {
                yf("gapi.iframes.getContext")().open(ah(a).value(), function (d) {
                    a.Cc = d;
                    a.Cc.restyle({setHideOnLeave: !1});
                    var e = setTimeout(function () {
                            c(Error("Network Error"))
                        },
                        ch.get()), f = function () {
                        clearTimeout(e);
                        b()
                    };
                    d.ping(f).then(f, function () {
                        c(Error("Network Error"))
                    })
                })
            })
        })
    }, dh = function (a, b) {
        a.vd.then(function () {
            a.Cc.register("authEvent", b, yf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        })
    }, eh = new Hf(3E3, 15E3), ch = new Hf(5E3, 15E3), bh = function () {
        return new F(function (a, b) {
            var c = function () {
                Gf();
                yf("gapi.load")("gapi.iframes", {
                    callback: a, ontimeout: function () {
                        Gf();
                        b(Error("Network Error"))
                    }, timeout: eh.get()
                })
            };
            if (yf("gapi.iframes.Iframe"))a(); else if (yf("gapi.load"))c();
            else {
                var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                l[d] = function () {
                    yf("gapi.load") ? c() : b(Error("Network Error"))
                };
                G(Sd("https://apis.google.com/js/api.js?onload=" + d)).l(function () {
                    b(Error("Network Error"))
                })
            }
        })
    };
    var fh = function (a, b, c) {
        this.C = a;
        this.m = b;
        this.F = c;
        this.La = null;
        this.u = gf(this.C, "/__/auth/iframe");
        M(this.u, "apiKey", this.m);
        M(this.u, "appName", this.F)
    };
    fh.prototype.setVersion = function (a) {
        this.La = a;
        return this
    };
    fh.prototype.toString = function () {
        this.La ? M(this.u, "v", this.La) : ef(this.u, "v");
        return this.u.toString()
    };
    var gh = function (a, b, c, d, e) {
        this.C = a;
        this.m = b;
        this.F = c;
        this.Yd = d;
        this.La = this.W = this.Pc = null;
        this.$b = e;
        this.u = gf(this.C, "/__/auth/handler");
        M(this.u, "apiKey", this.m);
        M(this.u, "appName", this.F);
        M(this.u, "authType", this.Yd)
    };
    gh.prototype.setVersion = function (a) {
        this.La = a;
        return this
    };
    gh.prototype.toString = function () {
        if (this.$b.isOAuthProvider) {
            M(this.u, "providerId", this.$b.providerId);
            var a = this.$b.ne();
            a && a.length && M(this.u, "scopes", a.join(","));
            a = this.$b.me();
            Va(a) || M(this.u, "customParameters", Cf(a))
        }
        this.Pc ? M(this.u, "redirectUrl", this.Pc) : ef(this.u, "redirectUrl");
        this.W ? M(this.u, "eventId", this.W) : ef(this.u, "eventId");
        this.La ? M(this.u, "v", this.La) : ef(this.u, "v");
        return this.u.toString()
    };
    var ih = function (a, b, c, d) {
        this.C = a;
        this.m = b;
        this.F = c;
        d = this.Aa = d || null;
        this.ve = (new fh(a, b, c)).setVersion(d).toString();
        this.pd = new $g(this.ve);
        this.Db = [];
        hh(this)
    };
    ih.prototype.Hc = function () {
        return this.pd.Hc()
    };
    var jh = function (a, b, c, d, e, f, g, k) {
        a = new gh(a, b, c, d, e);
        a.Pc = f;
        a.W = g;
        return a.setVersion(k).toString()
    }, hh = function (a) {
        dh(a.pd, function (b) {
            var c = {};
            if (b && b.authEvent) {
                var d = !1;
                b = b.authEvent || {};
                if (b.type) {
                    if (c = b.error)var e = (c = b.error) && (c.name || c.code), c = e ? new Q(e.substring(5), c.message) : null;
                    b = new Tf(b.type, b.eventId, b.urlResponse, b.sessionId, c)
                } else b = null;
                for (c = 0; c < a.Db.length; c++)d = a.Db[c](b) || d;
                c = {};
                c.status = d ? "ACK" : "ERROR";
                return G(c)
            }
            c.status = "ERROR";
            return G(c)
        })
    }, kh = function (a, b) {
        Na(a.Db, function (a) {
            return a ==
                b
        })
    };
    var lh = function (a) {
        this.w = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
        if (!this.w)throw new Q("internal-error", "The React Native compatibility library was not found.");
    };
    h = lh.prototype;
    h.get = function (a) {
        return G(this.w.getItem(a)).then(function (a) {
            return a && Ef(a)
        })
    };
    h.set = function (a, b) {
        return G(this.w.setItem(a, Cf(b)))
    };
    h.remove = function (a) {
        return G(this.w.removeItem(a))
    };
    h.Na = function () {
    };
    h.bb = function () {
    };
    var mh = function () {
        this.w = {}
    };
    h = mh.prototype;
    h.get = function (a) {
        return G(this.w[a])
    };
    h.set = function (a, b) {
        this.w[a] = b;
        return G()
    };
    h.remove = function (a) {
        delete this.w[a];
        return G()
    };
    h.Na = function () {
    };
    h.bb = function () {
    };
    var oh = function () {
        if (!nh()) {
            if ("Node" == O())throw new Q("internal-error", "The LocalStorage compatibility library was not found.");
            throw new Q("web-storage-unsupported");
        }
        this.w = l.localStorage || firebase.INTERNAL.node.localStorage
    }, nh = function () {
        var a = "Node" == O(), a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
        if (!a)return !1;
        try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
        } catch (b) {
            return !1
        }
    };
    h = oh.prototype;
    h.get = function (a) {
        var b = this;
        return G().then(function () {
            var c = b.w.getItem(a);
            return Ef(c)
        })
    };
    h.set = function (a, b) {
        var c = this;
        return G().then(function () {
            var d = Cf(b);
            null === d ? c.remove(a) : c.w.setItem(a, d)
        })
    };
    h.remove = function (a) {
        var b = this;
        return G().then(function () {
            b.w.removeItem(a)
        })
    };
    h.Na = function (a) {
        l.window && Mb(l.window, "storage", a)
    };
    h.bb = function (a) {
        l.window && Vb(l.window, "storage", a)
    };
    var ph = function () {
        this.w = {}
    };
    h = ph.prototype;
    h.get = function () {
        return G(null)
    };
    h.set = function () {
        return G()
    };
    h.remove = function () {
        return G()
    };
    h.Na = function () {
    };
    h.bb = function () {
    };
    var rh = function () {
        if (!qh()) {
            if ("Node" == O())throw new Q("internal-error", "The SessionStorage compatibility library was not found.");
            throw new Q("web-storage-unsupported");
        }
        this.w = l.sessionStorage || firebase.INTERNAL.node.sessionStorage
    }, qh = function () {
        var a = "Node" == O(), a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
        if (!a)return !1;
        try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0
        } catch (b) {
            return !1
        }
    };
    h = rh.prototype;
    h.get = function (a) {
        var b = this;
        return G().then(function () {
            var c = b.w.getItem(a);
            return Ef(c)
        })
    };
    h.set = function (a, b) {
        var c = this;
        return G().then(function () {
            var d = Cf(b);
            null === d ? c.remove(a) : c.w.setItem(a, d)
        })
    };
    h.remove = function (a) {
        var b = this;
        return G().then(function () {
            b.w.removeItem(a)
        })
    };
    h.Na = function () {
    };
    h.bb = function () {
    };
    var sh = function (a, b, c, d, e, f) {
        if (!window.indexedDB)throw new Q("web-storage-unsupported");
        this.be = a;
        this.Gc = b;
        this.wc = c;
        this.Md = d;
        this.pa = e;
        this.S = {};
        this.zb = [];
        this.vb = 0;
        this.we = f || l.indexedDB
    }, th, uh = function (a) {
        return new F(function (b, c) {
            var d = a.we.open(a.be, a.pa);
            d.onerror = function (a) {
                c(Error(a.target.errorCode))
            };
            d.onupgradeneeded = function (b) {
                b = b.target.result;
                try {
                    b.createObjectStore(a.Gc, {keyPath: a.wc})
                } catch (f) {
                    c(f)
                }
            };
            d.onsuccess = function (a) {
                b(a.target.result)
            }
        })
    }, vh = function (a) {
        a.qd || (a.qd =
            uh(a));
        return a.qd
    }, wh = function (a, b) {
        return b.objectStore(a.Gc)
    }, xh = function (a, b, c) {
        return b.transaction([a.Gc], c ? "readwrite" : "readonly")
    }, yh = function (a) {
        return new F(function (b, c) {
            a.onsuccess = function (a) {
                a && a.target ? b(a.target.result) : b()
            };
            a.onerror = function (a) {
                c(Error(a.target.errorCode))
            }
        })
    };
    h = sh.prototype;
    h.set = function (a, b) {
        var c = !1, d, e = this;
        return Bd(vh(this).then(function (b) {
            d = b;
            b = wh(e, xh(e, d, !0));
            return yh(b.get(a))
        }).then(function (f) {
            var g = wh(e, xh(e, d, !0));
            if (f)return f.value = b, yh(g.put(f));
            e.vb++;
            c = !0;
            f = {};
            f[e.wc] = a;
            f[e.Md] = b;
            return yh(g.add(f))
        }).then(function () {
            e.S[a] = b
        }), function () {
            c && e.vb--
        })
    };
    h.get = function (a) {
        var b = this;
        return vh(this).then(function (c) {
            return yh(wh(b, xh(b, c, !1)).get(a))
        }).then(function (a) {
            return a && a.value
        })
    };
    h.remove = function (a) {
        var b = !1, c = this;
        return Bd(vh(this).then(function (d) {
            b = !0;
            c.vb++;
            return yh(wh(c, xh(c, d, !0))["delete"](a))
        }).then(function () {
            delete c.S[a]
        }), function () {
            b && c.vb--
        })
    };
    h.Ve = function () {
        var a = this;
        return vh(this).then(function (b) {
            var c = wh(a, xh(a, b, !1));
            return c.getAll ? yh(c.getAll()) : new F(function (a, b) {
                var d = [], e = c.openCursor();
                e.onsuccess = function (b) {
                    (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d)
                };
                e.onerror = function (a) {
                    b(Error(a.target.errorCode))
                }
            })
        }).then(function (b) {
            var c = {}, d = [];
            if (0 == a.vb) {
                for (d = 0; d < b.length; d++)c[b[d][a.wc]] = b[d][a.Md];
                d = of(a.S, c);
                a.S = c
            }
            return d
        })
    };
    h.Na = function (a) {
        0 == this.zb.length && this.Uc();
        this.zb.push(a)
    };
    h.bb = function (a) {
        Na(this.zb, function (b) {
            return b == a
        });
        0 == this.zb.length && this.jc()
    };
    h.Uc = function () {
        var a = this;
        this.jc();
        var b = function () {
            a.Lc = Be(800).then(q(a.Ve, a)).then(function (b) {
                0 < b.length && Ea(a.zb, function (a) {
                    a(b)
                })
            }).then(b).l(function (a) {
                "STOP_EVENT" != a.message && b()
            });
            return a.Lc
        };
        b()
    };
    h.jc = function () {
        this.Lc && this.Lc.cancel("STOP_EVENT")
    };
    var Ch = function () {
        this.gd = {Browser: zh, Node: Ah, ReactNative: Bh}[O()]
    }, Dh, zh = {Z: oh, Wc: rh}, Ah = {Z: oh, Wc: rh}, Bh = {Z: lh, Wc: ph};
    var Eh = function (a) {
        var b = {}, c = a.email, d = a.newEmail;
        a = a.requestType;
        if (!c || !a)throw Error("Invalid provider user info!");
        b.fromEmail = d || null;
        b.email = c;
        P(this, "operation", a);
        P(this, "data", Nf(b))
    };
    var Fh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "), T = function (a, b) {
        return {name: a || "", fa: "a valid string", optional: !!b, ga: n}
    }, U = function (a) {
        return {name: a || "", fa: "a valid object", optional: !1, ga: ha}
    }, Gh = function (a, b) {
        return {name: a || "", fa: "a function", optional: !!b, ga: p}
    }, Hh = function () {
        return {name: "", fa: "null", optional: !1, ga: da}
    }, Ih = function () {
        return {
            name: "credential", fa: "a valid credential", optional: !1, ga: function (a) {
                return !(!a || !a.Kb)
            }
        }
    }, Jh = function () {
        return {
            name: "authProvider",
            fa: "a valid Auth provider", optional: !1, ga: function (a) {
                return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
            }
        }
    }, Kh = function (a, b, c, d) {
        return {
            name: c || "", fa: a.fa + " or " + b.fa, optional: !!d, ga: function (c) {
                return a.ga(c) || b.ga(c)
            }
        }
    };
    var Mh = function (a, b) {
        for (var c in b) {
            var d = b[c].name;
            a[d] = Lh(d, a[c], b[c].a)
        }
    }, V = function (a, b, c, d) {
        a[b] = Lh(b, c, d)
    }, Lh = function (a, b, c) {
        if (!c)return b;
        var d = Nh(a);
        a = function () {
            var a = Array.prototype.slice.call(arguments), e;
            a:{
                e = Array.prototype.slice.call(a);
                var k;
                k = 0;
                for (var t = !1, ua = 0; ua < c.length; ua++)if (c[ua].optional)t = !0; else {
                    if (t)throw new Q("internal-error", "Argument validator encountered a required argument after an optional argument.");
                    k++
                }
                t = c.length;
                if (e.length < k || t < e.length)e = "Expected " + (k ==
                    t ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + t + " arguments") + " but got " + e.length + "."; else {
                    for (k = 0; k < e.length; k++)if (t = c[k].optional && void 0 === e[k], !c[k].ga(e[k]) && !t) {
                        e = c[k];
                        if (0 > k || k >= Fh.length)throw new Q("internal-error", "Argument validator received an unsupported number of arguments.");
                        e = Fh[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.fa + ".";
                        break a
                    }
                    e = null
                }
            }
            if (e)throw new Q("argument-error", d + " failed: " + e);
            return b.apply(this, a)
        };
        for (var e in b)a[e] = b[e];
        for (e in b.prototype)a.prototype[e] =
            b.prototype[e];
        return a
    }, Nh = function (a) {
        a = a.split(".");
        return a[a.length - 1]
    };
    var Oh = function (a, b, c, d) {
        this.Ie = a;
        this.Ed = b;
        this.Oe = c;
        this.hb = d;
        this.R = {};
        Dh || (Dh = new Ch);
        a = Dh;
        try {
            var e;
            mf() ? (th || (th = new sh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = th) : e = new a.gd.Z;
            this.Wa = e
        } catch (f) {
            this.Wa = new mh, this.hb = !0
        }
        try {
            this.lc = new a.gd.Wc
        } catch (f) {
            this.lc = new mh
        }
        this.Hd = q(this.Id, this);
        this.S = {}
    }, Ph, Qh = function () {
        Ph || (Ph = new Oh("firebase", ":", !Ff(N()) && l.window && l.window != l.window.top ? !0 : !1, Bf()));
        return Ph
    };
    h = Oh.prototype;
    h.O = function (a, b) {
        return this.Ie + this.Ed + a.name + (b ? this.Ed + b : "")
    };
    h.get = function (a, b) {
        return (a.Z ? this.Wa : this.lc).get(this.O(a, b))
    };
    h.remove = function (a, b) {
        b = this.O(a, b);
        a.Z && !this.hb && (this.S[b] = null);
        return (a.Z ? this.Wa : this.lc).remove(b)
    };
    h.set = function (a, b, c) {
        var d = this.O(a, c), e = this, f = a.Z ? this.Wa : this.lc;
        return f.set(d, b).then(function () {
            return f.get(d)
        }).then(function (b) {
            a.Z && !this.hb && (e.S[d] = b)
        })
    };
    h.addListener = function (a, b, c) {
        a = this.O(a, b);
        this.hb || (this.S[a] = l.localStorage.getItem(a));
        Va(this.R) && this.Uc();
        this.R[a] || (this.R[a] = []);
        this.R[a].push(c)
    };
    h.removeListener = function (a, b, c) {
        a = this.O(a, b);
        this.R[a] && (Na(this.R[a], function (a) {
            return a == c
        }), 0 == this.R[a].length && delete this.R[a]);
        Va(this.R) && this.jc()
    };
    h.Uc = function () {
        this.Wa.Na(this.Hd);
        this.hb || Rh(this)
    };
    var Rh = function (a) {
        Sh(a);
        a.Fc = setInterval(function () {
            for (var b in a.R) {
                var c = l.localStorage.getItem(b);
                c != a.S[b] && (a.S[b] = c, c = new Bb({
                    type: "storage",
                    key: b,
                    target: window,
                    oldValue: a.S[b],
                    newValue: c
                }), a.Id(c))
            }
        }, 1E3)
    }, Sh = function (a) {
        a.Fc && (clearInterval(a.Fc), a.Fc = null)
    };
    Oh.prototype.jc = function () {
        this.Wa.bb(this.Hd);
        this.hb || Sh(this)
    };
    Oh.prototype.Id = function (a) {
        if (a && a.le) {
            var b = a.ob.key;
            if (this.Oe) {
                var c = l.localStorage.getItem(b);
                a = a.ob.newValue;
                a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b))
            }
            this.S[b] = l.localStorage.getItem(b);
            this.ad(b)
        } else Ea(a, q(this.ad, this))
    };
    Oh.prototype.ad = function (a) {
        this.R[a] && Ea(this.R[a], function (a) {
            a()
        })
    };
    var Th = function (a) {
        this.D = a;
        this.B = Qh()
    }, Uh = {name: "pendingRedirect", Z: !1}, Vh = function (a) {
        return a.B.set(Uh, "pending", a.D)
    }, Wh = function (a) {
        return a.B.remove(Uh, a.D)
    }, Xh = function (a) {
        return a.B.get(Uh, a.D).then(function (a) {
            return "pending" == a
        })
    };
    var $h = function (a, b, c) {
        var d = this, e = (this.Aa = firebase.SDK_VERSION || null) ? xf(this.Aa) : null;
        this.f = new S(b, null, e);
        this.sa = null;
        this.C = a;
        this.m = b;
        this.F = c;
        this.Ab = [];
        this.Sb = !1;
        this.Xc = q(this.oe, this);
        this.Za = new Yh(this);
        this.yd = new Zh(this);
        this.Kc = new Th(this.m + ":" + this.F);
        this.jb = {};
        this.jb.unknown = this.Za;
        this.jb.signInViaRedirect = this.Za;
        this.jb.linkViaRedirect = this.Za;
        this.jb.signInViaPopup = this.yd;
        this.jb.linkViaPopup = this.yd;
        this.dc = this.fb = null;
        this.Xb = new F(function (a, b) {
            d.fb = a;
            d.dc = b
        })
    };
    $h.prototype.reset = function () {
        var a = this;
        this.sa = null;
        this.Xb.cancel();
        this.Sb = !1;
        this.dc = this.fb = null;
        this.Pb && kh(this.Pb, this.Xc);
        this.Xb = new F(function (b, c) {
            a.fb = b;
            a.dc = c
        })
    };
    var ai = function (a) {
        var b = nf();
        return Cg(a).then(function (a) {
            a:{
                for (var c = ff(b).ia, e = 0; e < a.length; e++) {
                    var f;
                    var g = a[e];
                    f = c;
                    var k = Qc(g);
                    k ? f = (f = Qc(f)) ? k.Ib(f) : !1 : (k = g.split(".").join("\\."), f = (new RegExp("^(.+\\." + k + "|" + k + ")$", "i")).test(f));
                    if (f) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            if (!a)throw new Uf(nf());
        })
    }, bi = function (a) {
        a.Sb || (a.Sb = !0, vf().then(function () {
            a.Pb = new ih(a.C, a.m, a.F, a.Aa);
            a.Pb.Hc().l(function () {
                a.dc(new Q("network-request-failed"));
                a.reset()
            });
            a.Pb.Db.push(a.Xc)
        }));
        return a.Xb
    };
    $h.prototype.subscribe = function (a) {
        Ka(this.Ab, a) || this.Ab.push(a);
        if (!this.Sb) {
            var b = this, c = function () {
                var a = N();
                Bf(a) || Ff(a) || bi(b);
                ci(b.Za)
            };
            Xh(this.Kc).then(function (a) {
                a ? Wh(b.Kc).then(function () {
                    bi(b)
                }) : c()
            }).l(function () {
                c()
            })
        }
    };
    $h.prototype.unsubscribe = function (a) {
        Na(this.Ab, function (b) {
            return b == a
        })
    };
    $h.prototype.oe = function (a) {
        if (!a)throw new Q("invalid-auth-event");
        this.fb && (this.fb(), this.fb = null);
        for (var b = !1, c = 0; c < this.Ab.length; c++) {
            var d = this.Ab[c];
            if (d.bd(a.ya, a.W)) {
                (b = this.jb[a.ya]) && b.zd(a, d);
                b = !0;
                break
            }
        }
        ci(this.Za);
        return b
    };
    var di = new Hf(2E3, 1E4), ei = new Hf(1E4, 3E4);
    $h.prototype.getRedirectResult = function () {
        return this.Za.getRedirectResult()
    };
    var gi = function (a, b, c, d, e, f) {
            if (!b)return H(new Q("popup-blocked"));
            if (f)return bi(a), G();
            a.sa || (a.sa = ai(a.f));
            return a.sa.then(function () {
                return bi(a)
            }).then(function () {
                fi(d);
                var f = jh(a.C, a.m, a.F, c, d, null, e, a.Aa);
                (b || l.window).location.href = gc(jc(f))
            }).l(function (b) {
                "auth/network-request-failed" == b.code && (a.sa = null);
                throw b;
            })
        }, hi = function (a, b, c, d) {
            a.sa || (a.sa = ai(a.f));
            return a.sa.then(function () {
                fi(c);
                var e = jh(a.C, a.m, a.F, b, c, nf(), d, a.Aa);
                Vh(a.Kc).then(function () {
                    l.window.location.href = gc(jc(e))
                })
            })
        },
        ii = function (a, b, c, d, e) {
            var f = new Q("popup-closed-by-user");
            return a.Xb.l(function () {
            }).then(function () {
                return uf(d)
            }).then(function () {
                return Be(di.get()).then(function () {
                    b.Ja(c, null, f, e)
                })
            })
        }, fi = function (a) {
            if (!a.isOAuthProvider)throw new Q("invalid-oauth-provider");
        }, ji = {}, ki = function (a, b, c) {
            var d = b + ":" + c;
            ji[d] || (ji[d] = new $h(a, b, c));
            return ji[d]
        }, Yh = function (a) {
            this.B = a;
            this.yb = this.cc = this.$a = this.aa = null;
            this.Oc = !1
        };
    Yh.prototype.zd = function (a, b) {
        if (!a)return H(new Q("invalid-auth-event"));
        this.Oc = !0;
        var c = a.ya, d = a.W;
        "unknown" == c ? (this.aa || li(this, !1, null, null), a = G()) : a = a.N ? this.Mc(a, b) : b.pb(c, d) ? this.Nc(a, b) : H(new Q("invalid-auth-event"));
        return a
    };
    var ci = function (a) {
        a.Oc || (a.Oc = !0, li(a, !1, null, null))
    };
    Yh.prototype.Mc = function (a) {
        this.aa || li(this, !0, null, a.getError());
        return G()
    };
    Yh.prototype.Nc = function (a, b) {
        var c = this, d = a.ya;
        b = b.pb(d, a.W);
        var e = a.kb;
        a = a.hc;
        var f = "signInViaRedirect" == d || "linkViaRedirect" == d;
        if (this.aa)return G();
        this.yb && this.yb.cancel();
        return b(e, a).then(function (a) {
            c.aa || li(c, f, a, null)
        }).l(function (a) {
            c.aa || li(c, f, null, a)
        })
    };
    var li = function (a, b, c, d) {
        b ? d ? (a.aa = function () {
            return H(d)
        }, a.cc && a.cc(d)) : (a.aa = function () {
            return G(c)
        }, a.$a && a.$a(c)) : (a.aa = function () {
            return G({user: null})
        }, a.$a && a.$a({user: null}));
        a.$a = null;
        a.cc = null
    };
    Yh.prototype.getRedirectResult = function () {
        var a = this;
        this.$c || (this.$c = new F(function (b, c) {
            a.aa ? a.aa().then(b, c) : (a.$a = b, a.cc = c, mi(a))
        }));
        return this.$c
    };
    var mi = function (a) {
        var b = new Q("timeout");
        a.yb && a.yb.cancel();
        a.yb = Be(ei.get()).then(function () {
            a.aa || li(a, !0, null, b)
        })
    }, Zh = function (a) {
        this.B = a
    };
    Zh.prototype.zd = function (a, b) {
        if (!a)return H(new Q("invalid-auth-event"));
        var c = a.ya, d = a.W;
        return a.N ? this.Mc(a, b) : b.pb(c, d) ? this.Nc(a, b) : H(new Q("invalid-auth-event"))
    };
    Zh.prototype.Mc = function (a, b) {
        b.Ja(a.ya, null, a.getError(), a.W);
        return G()
    };
    Zh.prototype.Nc = function (a, b) {
        var c = a.W, d = a.ya;
        return b.pb(d, c)(a.kb, a.hc).then(function (a) {
            b.Ja(d, a, null, c)
        }).l(function (a) {
            b.Ja(d, null, a, c)
        })
    };
    var ni = function (a) {
        this.f = a;
        this.za = this.V = null;
        this.Sa = 0
    };
    ni.prototype.K = function () {
        return {apiKey: this.f.m, refreshToken: this.V, accessToken: this.za, expirationTime: this.Sa}
    };
    var pi = function (a, b) {
        var c = b.idToken, d = b.refreshToken;
        b = oi(b.expiresIn);
        a.za = c;
        a.Sa = b;
        a.V = d
    }, oi = function (a) {
        return la() + 1E3 * parseInt(a, 10)
    }, qi = function (a, b) {
        return vg(a.f, b).then(function (b) {
            a.za = b.access_token;
            a.Sa = oi(b.expires_in);
            a.V = b.refresh_token;
            return {accessToken: a.za, expirationTime: a.Sa, refreshToken: a.V}
        }).l(function (b) {
            "auth/user-token-expired" == b.code && (a.V = null);
            throw b;
        })
    }, ri = function (a) {
        return !(!a.za || a.V)
    };
    ni.prototype.getToken = function (a) {
        a = !!a;
        return ri(this) ? H(new Q("user-token-expired")) : a || !this.za || la() > this.Sa - 3E4 ? this.V ? qi(this, {
            grant_type: "refresh_token",
            refresh_token: this.V
        }) : G(null) : G({accessToken: this.za, expirationTime: this.Sa, refreshToken: this.V})
    };
    var si = function (a, b, c, d, e) {
        Kf(this, {uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b})
    }, ti = function (a, b) {
        Ab.call(this, a);
        for (var c in b)this[c] = b[c]
    };
    r(ti, Ab);
    var W = function (a, b, c) {
        this.Y = [];
        this.m = a.apiKey;
        this.F = a.appName;
        this.C = a.authDomain || null;
        a = firebase.SDK_VERSION ? xf(firebase.SDK_VERSION) : null;
        this.f = new S(this.m, null, a);
        this.ea = new ni(this.f);
        ui(this, b.idToken);
        pi(this.ea, b);
        P(this, "refreshToken", this.ea.V);
        vi(this, c || {});
        de.call(this);
        this.Yb = !1;
        this.C && Af() && (this.o = ki(this.C, this.m, this.F));
        this.ic = [];
        this.sc = G()
    };
    r(W, de);
    W.prototype.ua = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1), d = this;
        return this.sc = this.sc.then(function () {
            return a.apply(d, c)
        }, function () {
            return a.apply(d, c)
        })
    };
    var ui = function (a, b) {
        a.rd = b;
        P(a, "_lat", b)
    }, wi = function (a, b) {
        Na(a.ic, function (a) {
            return a == b
        })
    }, xi = function (a) {
        for (var b = [], c = 0; c < a.ic.length; c++)b.push(a.ic[c](a));
        return yd(b).then(function () {
            return a
        })
    }, yi = function (a) {
        a.o && !a.Yb && (a.Yb = !0, a.o.subscribe(a))
    }, vi = function (a, b) {
        Kf(a, {
            uid: b.uid,
            displayName: b.displayName || null,
            photoURL: b.photoURL || null,
            email: b.email || null,
            emailVerified: b.emailVerified || !1,
            isAnonymous: b.isAnonymous || !1,
            providerData: []
        })
    };
    P(W.prototype, "providerId", "firebase");
    var zi = function () {
    }, Ai = function (a) {
        return G().then(function () {
            if (a.de)throw new Q("app-deleted");
        })
    }, Bi = function (a) {
        return Ga(a.providerData, function (a) {
            return a.providerId
        })
    }, Di = function (a, b) {
        b && (Ci(a, b.providerId), a.providerData.push(b))
    }, Ci = function (a, b) {
        Na(a.providerData, function (a) {
            return a.providerId == b
        })
    }, Ei = function (a, b, c) {
        ("uid" != b || c) && a.hasOwnProperty(b) && P(a, b, c)
    };
    W.prototype.copy = function (a) {
        var b = this;
        b != a && (Kf(this, {
            uid: a.uid,
            displayName: a.displayName,
            photoURL: a.photoURL,
            email: a.email,
            emailVerified: a.emailVerified,
            isAnonymous: a.isAnonymous,
            providerData: []
        }), Ea(a.providerData, function (a) {
            Di(b, a)
        }), this.ea = a.ea, P(this, "refreshToken", this.ea.V))
    };
    W.prototype.reload = function () {
        var a = this;
        return Ai(this).then(function () {
            return Fi(a).then(function () {
                return xi(a)
            }).then(zi)
        })
    };
    var Fi = function (a) {
        return a.getToken().then(function (b) {
            var c = a.isAnonymous;
            return Gi(a, b).then(function () {
                c || Ei(a, "isAnonymous", !1);
                return b
            }).l(function (b) {
                "auth/user-token-expired" == b.code && (a.dispatchEvent(new ti("userDeleted")), Hi(a));
                throw b;
            })
        })
    };
    W.prototype.getToken = function (a) {
        var b = this, c = ri(this.ea);
        return Ai(this).then(function () {
            return b.ea.getToken(a)
        }).then(function (a) {
            if (!a)throw new Q("internal-error");
            a.accessToken != b.rd && (ui(b, a.accessToken), b.Fa());
            Ei(b, "refreshToken", a.refreshToken);
            return a.accessToken
        }).l(function (a) {
            if ("auth/user-token-expired" == a.code && !c)return xi(b).then(function () {
                Ei(b, "refreshToken", null);
                throw a;
            });
            throw a;
        })
    };
    var Ii = function (a, b) {
        b.idToken && a.rd != b.idToken && (pi(a.ea, b), a.Fa(), ui(a, b.idToken), Ei(a, "refreshToken", a.ea.V))
    };
    W.prototype.Fa = function () {
        this.dispatchEvent(new ti("tokenChanged"))
    };
    var Gi = function (a, b) {
        return R(a.f, Vg, {idToken: b}).then(q(a.Le, a))
    };
    W.prototype.Le = function (a) {
        a = a.users;
        if (!a || !a.length)throw new Q("internal-error");
        a = a[0];
        vi(this, {
            uid: a.localId,
            displayName: a.displayName,
            photoURL: a.photoUrl,
            email: a.email,
            emailVerified: !!a.emailVerified
        });
        for (var b = Ji(a), c = 0; c < b.length; c++)Di(this, b[c]);
        Ei(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length))
    };
    var Ji = function (a) {
        return (a = a.providerUserInfo) && a.length ? Ga(a, function (a) {
            return new si(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl)
        }) : []
    };
    W.prototype.reauthenticate = function (a) {
        var b = this;
        return this.c(a.Kb(this.f).then(function (a) {
            var c;
            a:{
                var e = a.idToken.split(".");
                if (3 == e.length) {
                    for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++)e += ".";
                    try {
                        var k = lc(vb(e));
                        if (k.sub && k.iss && k.aud && k.exp) {
                            c = new Vf(k);
                            break a
                        }
                    } catch (t) {
                    }
                }
                c = null
            }
            if (!c || b.uid != c.Ee)throw new Q("user-mismatch");
            Ii(b, a);
            return b.reload()
        }))
    };
    var Ki = function (a, b) {
        return Fi(a).then(function () {
            if (Ka(Bi(a), b))return xi(a).then(function () {
                throw new Q("provider-already-linked");
            })
        })
    };
    h = W.prototype;
    h.Ce = function (a) {
        var b = this;
        return this.c(Ki(this, a.provider).then(function () {
            return b.getToken()
        }).then(function (c) {
            return a.td(b.f, c)
        }).then(q(this.jd, this)))
    };
    h.link = function (a) {
        return this.ua(this.Ce, a)
    };
    h.jd = function (a) {
        Ii(this, a);
        var b = this;
        return this.reload().then(function () {
            return b
        })
    };
    h.$e = function (a) {
        var b = this;
        return this.c(this.getToken().then(function (c) {
            return b.f.updateEmail(c, a)
        }).then(function (a) {
            Ii(b, a);
            return b.reload()
        }))
    };
    h.updateEmail = function (a) {
        return this.ua(this.$e, a)
    };
    h.af = function (a) {
        var b = this;
        return this.c(this.getToken().then(function (c) {
            return b.f.updatePassword(c, a)
        }).then(function (a) {
            Ii(b, a);
            return b.reload()
        }))
    };
    h.updatePassword = function (a) {
        return this.ua(this.af, a)
    };
    h.bf = function (a) {
        if (void 0 === a.displayName && void 0 === a.photoURL)return Ai(this);
        var b = this;
        return this.c(this.getToken().then(function (c) {
            return b.f.updateProfile(c, {displayName: a.displayName, photoUrl: a.photoURL})
        }).then(function (a) {
            Ii(b, a);
            Ei(b, "displayName", a.displayName || null);
            Ei(b, "photoURL", a.photoUrl || null);
            return xi(b)
        }).then(zi))
    };
    h.updateProfile = function (a) {
        return this.ua(this.bf, a)
    };
    h.Ze = function (a) {
        var b = this;
        return this.c(Fi(this).then(function (c) {
            return Ka(Bi(b), a) ? Kg(b.f, c, [a]).then(function (a) {
                var c = {};
                Ea(a.providerUserInfo || [], function (a) {
                    c[a.providerId] = !0
                });
                Ea(Bi(b), function (a) {
                    c[a] || Ci(b, a)
                });
                return xi(b)
            }) : xi(b).then(function () {
                throw new Q("no-such-provider");
            })
        }))
    };
    h.unlink = function (a) {
        return this.ua(this.Ze, a)
    };
    h.ce = function () {
        var a = this;
        return this.c(this.getToken().then(function (b) {
            return R(a.f, Ug, {idToken: b})
        }).then(function () {
            a.dispatchEvent(new ti("userDeleted"))
        })).then(function () {
            Hi(a)
        })
    };
    h.delete = function () {
        return this.ua(this.ce)
    };
    h.bd = function (a, b) {
        return "linkViaPopup" == a && (this.ka || null) == b && this.da || "linkViaRedirect" == a && (this.bc || null) == b ? !0 : !1
    };
    h.Ja = function (a, b, c, d) {
        "linkViaPopup" == a && d == (this.ka || null) && (c && this.Ha ? this.Ha(c) : b && !c && this.da && this.da(b), this.G && (this.G.cancel(), this.G = null), delete this.da, delete this.Ha)
    };
    h.pb = function (a, b) {
        return "linkViaPopup" == a && b == (this.ka || null) || "linkViaRedirect" == a && (this.bc || null) == b ? q(this.ge, this) : null
    };
    h.Jb = function () {
        return zf(this.uid + ":::")
    };
    var Mi = function (a, b) {
        if (!Af())return H(new Q("operation-not-supported-in-this-environment"));
        var c = Qf(b.providerId), d = a.Jb(), e = null;
        !Bf() && a.C && b.isOAuthProvider && (e = jh(a.C, a.m, a.F, "linkViaPopup", b, null, d, firebase.SDK_VERSION || null));
        var f = tf(e, c && c.xb, c && c.wb), c = Ki(a, b.providerId).then(function () {
            return xi(a)
        }).then(function () {
            Li(a);
            return a.getToken()
        }).then(function () {
            return gi(a.o, f, "linkViaPopup", b, d, !!e)
        }).then(function () {
            return new F(function (b, c) {
                a.Ja("linkViaPopup", null, new Q("cancelled-popup-request"),
                    a.ka || null);
                a.da = b;
                a.Ha = c;
                a.ka = d;
                a.G = ii(a.o, a, "linkViaPopup", f, d)
            })
        }).then(function (a) {
            f && sf(f);
            return a
        }).l(function (a) {
            f && sf(f);
            throw a;
        });
        return a.c(c)
    };
    W.prototype.linkWithPopup = function (a) {
        var b = Mi(this, a);
        return this.ua(function () {
            return b
        })
    };
    W.prototype.De = function (a) {
        if (!Af())return H(new Q("operation-not-supported-in-this-environment"));
        var b = this, c = null, d = this.Jb(), e = Ki(this, a.providerId).then(function () {
            Li(b);
            return b.getToken()
        }).then(function () {
            b.bc = d;
            return xi(b)
        }).then(function (a) {
            b.Ia && (a = b.Ia, a = a.B.set(Ni, b.K(), a.D));
            return a
        }).then(function () {
            return hi(b.o, "linkViaRedirect", a, d)
        }).l(function (a) {
            c = a;
            if (b.Ia)return Oi(b.Ia);
            throw c;
        }).then(function () {
            if (c)throw c;
        });
        return this.c(e)
    };
    W.prototype.linkWithRedirect = function (a) {
        return this.ua(this.De, a)
    };
    var Li = function (a) {
        if (!a.o || !a.Yb) {
            if (a.o && !a.Yb)throw new Q("internal-error");
            throw new Q("auth-domain-config-required");
        }
    };
    W.prototype.ge = function (a, b) {
        var c = this;
        this.G && (this.G.cancel(), this.G = null);
        var d = null, e = this.getToken().then(function (d) {
            return Zf(c.f, {requestUri: a, sessionId: b, idToken: d})
        }).then(function (a) {
            d = jg(a);
            return c.jd(a)
        }).then(function (a) {
            return {user: a, credential: d}
        });
        return this.c(e)
    };
    W.prototype.sendEmailVerification = function () {
        var a = this;
        return this.c(this.getToken().then(function (b) {
            return a.f.sendEmailVerification(b)
        }).then(function (b) {
            if (a.email != b)return a.reload()
        }).then(function () {
        }))
    };
    var Hi = function (a) {
        for (var b = 0; b < a.Y.length; b++)a.Y[b].cancel("app-deleted");
        a.Y = [];
        a.de = !0;
        P(a, "refreshToken", null);
        a.o && a.o.unsubscribe(a)
    };
    W.prototype.c = function (a) {
        var b = this;
        this.Y.push(a);
        Bd(a, function () {
            Ma(b.Y, a)
        });
        return a
    };
    W.prototype.toJSON = function () {
        return this.K()
    };
    W.prototype.K = function () {
        var a = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            isAnonymous: this.isAnonymous,
            providerData: [],
            apiKey: this.m,
            appName: this.F,
            authDomain: this.C,
            stsTokenManager: this.ea.K(),
            redirectEventId: this.bc || null
        };
        Ea(this.providerData, function (b) {
            a.providerData.push(Lf(b))
        });
        return a
    };
    var Pi = function (a) {
        if (!a.apiKey)return null;
        var b = {apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName}, c = {};
        if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime)c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3; else return null;
        var d = new W(b, c, a);
        a.providerData && Ea(a.providerData, function (a) {
            if (a) {
                var b = {};
                Kf(b, a);
                Di(d, b)
            }
        });
        a.redirectEventId && (d.bc = a.redirectEventId);
        return d
    }, Qi = function (a, b, c) {
        var d = new W(a, b);
        c && (d.Ia = c);
        return d.reload().then(function () {
            return d
        })
    };
    var Ri = function (a) {
        this.D = a;
        this.B = Qh()
    }, Ni = {name: "redirectUser", Z: !1}, Oi = function (a) {
        return a.B.remove(Ni, a.D)
    }, Si = function (a, b) {
        return a.B.get(Ni, a.D).then(function (a) {
            a && b && (a.authDomain = b);
            return Pi(a || {})
        })
    };
    var Ti = function (a) {
        this.D = a;
        this.B = Qh()
    }, Ui = {name: "authUser", Z: !0}, Vi = function (a, b) {
        return a.B.set(Ui, b.K(), a.D)
    }, Wi = function (a) {
        return a.B.remove(Ui, a.D)
    }, Xi = function (a, b) {
        return a.B.get(Ui, a.D).then(function (a) {
            a && b && (a.authDomain = b);
            return Pi(a || {})
        })
    };
    var Y = function (a) {
        this.Qa = !1;
        P(this, "app", a);
        if (X(this).options && X(this).options.apiKey)a = firebase.SDK_VERSION ? xf(firebase.SDK_VERSION) : null, this.f = new S(X(this).options && X(this).options.apiKey, null, a); else throw new Q("invalid-api-key");
        this.Y = [];
        this.Oa = [];
        this.Je = firebase.INTERNAL.createSubscribe(q(this.xe, this));
        Yi(this, null);
        this.oa = new Ti(X(this).options.apiKey + ":" + X(this).name);
        this.ab = new Ri(X(this).options.apiKey + ":" + X(this).name);
        this.Eb = this.c(Zi(this));
        this.va = this.c($i(this));
        this.Ec = !1;
        this.Bc = q(this.Ue, this);
        this.Kd = q(this.Ua, this);
        this.Ld = q(this.te, this);
        this.Jd = q(this.se, this);
        aj(this);
        this.INTERNAL = {};
        this.INTERNAL.delete = q(this.delete, this)
    };
    Y.prototype.toJSON = function () {
        return {
            apiKey: X(this).options.apiKey,
            authDomain: X(this).options.authDomain,
            appName: X(this).name,
            currentUser: Z(this) && Z(this).K()
        }
    };
    var bj = function (a) {
        return a.ee || H(new Q("auth-domain-config-required"))
    }, aj = function (a) {
        var b = X(a).options.authDomain, c = X(a).options.apiKey;
        b && Af() && (a.ee = a.Eb.then(function () {
            if (!a.Qa)return a.o = ki(b, c, X(a).name), a.o.subscribe(a), Z(a) && yi(Z(a)), a.Qc && (yi(a.Qc), a.Qc = null), a.o
        }))
    };
    h = Y.prototype;
    h.bd = function (a, b) {
        switch (a) {
            case "unknown":
            case "signInViaRedirect":
                return !0;
            case "signInViaPopup":
                return this.ka == b && !!this.da;
            default:
                return !1
        }
    };
    h.Ja = function (a, b, c, d) {
        "signInViaPopup" == a && this.ka == d && (c && this.Ha ? this.Ha(c) : b && !c && this.da && this.da(b), this.G && (this.G.cancel(), this.G = null), delete this.da, delete this.Ha)
    };
    h.pb = function (a, b) {
        return "signInViaRedirect" == a || "signInViaPopup" == a && this.ka == b && this.da ? q(this.he, this) : null
    };
    h.he = function (a, b) {
        var c = this;
        a = {requestUri: a, sessionId: b};
        this.G && (this.G.cancel(), this.G = null);
        var d = null, e = Xf(c.f, a).then(function (a) {
            d = jg(a);
            return a
        });
        a = c.Eb.then(function () {
            return e
        }).then(function (a) {
            return cj(c, a)
        }).then(function () {
            return {user: Z(c), credential: d}
        });
        return this.c(a)
    };
    h.Jb = function () {
        return zf()
    };
    h.signInWithPopup = function (a) {
        if (!Af())return H(new Q("operation-not-supported-in-this-environment"));
        var b = this, c = Qf(a.providerId), d = this.Jb(), e = null;
        !Bf() && X(this).options.authDomain && a.isOAuthProvider && (e = jh(X(this).options.authDomain, X(this).options.apiKey, X(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));
        var f = tf(e, c && c.xb, c && c.wb), c = bj(this).then(function (b) {
            return gi(b, f, "signInViaPopup", a, d, !!e)
        }).then(function () {
            return new F(function (a, c) {
                b.Ja("signInViaPopup", null, new Q("cancelled-popup-request"),
                    b.ka);
                b.da = a;
                b.Ha = c;
                b.ka = d;
                b.G = ii(b.o, b, "signInViaPopup", f, d)
            })
        }).then(function (a) {
            f && sf(f);
            return a
        }).l(function (a) {
            f && sf(f);
            throw a;
        });
        return this.c(c)
    };
    h.signInWithRedirect = function (a) {
        if (!Af())return H(new Q("operation-not-supported-in-this-environment"));
        var b = this, c = bj(this).then(function () {
            return hi(b.o, "signInViaRedirect", a)
        });
        return this.c(c)
    };
    h.getRedirectResult = function () {
        if (!Af())return H(new Q("operation-not-supported-in-this-environment"));
        var a = this, b = bj(this).then(function () {
            return a.o.getRedirectResult()
        });
        return this.c(b)
    };
    var cj = function (a, b) {
        var c = {};
        c.apiKey = X(a).options.apiKey;
        c.authDomain = X(a).options.authDomain;
        c.appName = X(a).name;
        return a.Eb.then(function () {
            return Qi(c, b, a.ab)
        }).then(function (b) {
            if (Z(a) && b.uid == Z(a).uid)return Z(a).copy(b), a.Ua(b);
            Yi(a, b);
            yi(b);
            return a.Ua(b)
        }).then(function () {
            a.Fa()
        })
    }, Yi = function (a, b) {
        Z(a) && (wi(Z(a), a.Kd), Vb(Z(a), "tokenChanged", a.Ld), Vb(Z(a), "userDeleted", a.Jd));
        b && (b.ic.push(a.Kd), Mb(b, "tokenChanged", a.Ld), Mb(b, "userDeleted", a.Jd));
        P(a, "currentUser", b)
    };
    Y.prototype.signOut = function () {
        var a = this, b = this.va.then(function () {
            if (!Z(a))return G();
            Yi(a, null);
            return Wi(a.oa).then(function () {
                a.Fa()
            })
        });
        return this.c(b)
    };
    var dj = function (a) {
        var b = Si(a.ab, X(a).options.authDomain).then(function (b) {
            if (a.Qc = b)b.Ia = a.ab;
            return Oi(a.ab)
        });
        return a.c(b)
    }, Zi = function (a) {
        var b = X(a).options.authDomain, c = dj(a).then(function () {
            return Xi(a.oa, b)
        }).then(function (b) {
            return b ? (b.Ia = a.ab, b.reload().then(function () {
                return Vi(a.oa, b).then(function () {
                    return b
                })
            }).l(function (c) {
                return "auth/network-request-failed" == c.code ? b : Wi(a.oa)
            })) : null
        }).then(function (b) {
            Yi(a, b || null)
        });
        return a.c(c)
    }, $i = function (a) {
        return a.Eb.then(function () {
            return a.getRedirectResult()
        }).l(function () {
        }).then(function () {
            if (!a.Qa)return a.Bc()
        }).l(function () {
        }).then(function () {
            if (!a.Qa) {
                a.Ec = !0;
                var b = a.oa;
                b.B.addListener(Ui, b.D, a.Bc)
            }
        })
    };
    Y.prototype.Ue = function () {
        var a = this;
        return Xi(this.oa, X(this).options.authDomain).then(function (b) {
            if (!a.Qa) {
                var c;
                if (c = Z(a) && b) {
                    c = Z(a).uid;
                    var d = b.uid;
                    c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d
                }
                if (c)return Z(a).copy(b), Z(a).getToken();
                if (Z(a) || b)Yi(a, b), b && (yi(b), b.Ia = a.ab), a.o && a.o.subscribe(a), a.Fa()
            }
        })
    };
    Y.prototype.Ua = function (a) {
        return Vi(this.oa, a)
    };
    Y.prototype.te = function () {
        this.Fa();
        this.Ua(Z(this))
    };
    Y.prototype.se = function () {
        this.signOut()
    };
    var ej = function (a, b) {
        return a.c(b.then(function (b) {
            return cj(a, b)
        }).then(function () {
            return Z(a)
        }))
    };
    h = Y.prototype;
    h.xe = function (a) {
        var b = this;
        this.addAuthTokenListener(function () {
            a.next(Z(b))
        })
    };
    h.onAuthStateChanged = function (a, b, c) {
        var d = this;
        this.Ec && firebase.Promise.resolve().then(function () {
            p(a) ? a(Z(d)) : p(a.next) && a.next(Z(d))
        });
        return this.Je(a, b, c)
    };
    h.getToken = function (a) {
        var b = this, c = this.va.then(function () {
            return Z(b) ? Z(b).getToken(a).then(function (a) {
                return {accessToken: a}
            }) : null
        });
        return this.c(c)
    };
    h.signInWithCustomToken = function (a) {
        var b = this;
        return this.va.then(function () {
            return ej(b, R(b.f, Wg, {token: a}))
        }).then(function (a) {
            Ei(a, "isAnonymous", !1);
            return b.Ua(a)
        }).then(function () {
            return Z(b)
        })
    };
    h.signInWithEmailAndPassword = function (a, b) {
        var c = this;
        return this.va.then(function () {
            return ej(c, R(c.f, fg, {email: a, password: b}))
        })
    };
    h.createUserWithEmailAndPassword = function (a, b) {
        var c = this;
        return this.va.then(function () {
            return ej(c, R(c.f, Tg, {email: a, password: b}))
        })
    };
    h.signInWithCredential = function (a) {
        var b = this;
        return this.va.then(function () {
            return ej(b, a.Kb(b.f))
        })
    };
    h.signInAnonymously = function () {
        var a = Z(this), b = this;
        return a && a.isAnonymous ? G(a) : this.va.then(function () {
            return ej(b, b.f.signInAnonymously())
        }).then(function (a) {
            Ei(a, "isAnonymous", !0);
            return b.Ua(a)
        }).then(function () {
            return Z(b)
        })
    };
    var X = function (a) {
        return a.app
    }, Z = function (a) {
        return a.currentUser
    };
    h = Y.prototype;
    h.Fa = function () {
        if (this.Ec)for (var a = 0; a < this.Oa.length; a++)if (this.Oa[a])this.Oa[a](Z(this) && Z(this)._lat || null)
    };
    h.addAuthTokenListener = function (a) {
        var b = this;
        this.Oa.push(a);
        this.c(this.va.then(function () {
            b.Qa || Ka(b.Oa, a) && a(Z(b) && Z(b)._lat || null)
        }))
    };
    h.removeAuthTokenListener = function (a) {
        Na(this.Oa, function (b) {
            return b == a
        })
    };
    h.delete = function () {
        this.Qa = !0;
        for (var a = 0; a < this.Y.length; a++)this.Y[a].cancel("app-deleted");
        this.Y = [];
        this.oa && (a = this.oa, a.B.removeListener(Ui, a.D, this.Bc));
        this.o && this.o.unsubscribe(this);
        return firebase.Promise.resolve()
    };
    h.c = function (a) {
        var b = this;
        this.Y.push(a);
        Bd(a, function () {
            Ma(b.Y, a)
        });
        return a
    };
    h.fetchProvidersForEmail = function (a) {
        return this.c(Ag(this.f, a))
    };
    h.verifyPasswordResetCode = function (a) {
        return this.checkActionCode(a).then(function (a) {
            return a.data.email
        })
    };
    h.confirmPasswordReset = function (a, b) {
        return this.c(this.f.confirmPasswordReset(a, b).then(function () {
        }))
    };
    h.checkActionCode = function (a) {
        return this.c(this.f.checkActionCode(a).then(function (a) {
            return new Eh(a)
        }))
    };
    h.applyActionCode = function (a) {
        return this.c(this.f.applyActionCode(a).then(function () {
        }))
    };
    h.sendPasswordResetEmail = function (a) {
        return this.c(this.f.sendPasswordResetEmail(a).then(function () {
        }))
    };
    Mh(Y.prototype, {
        applyActionCode: {name: "applyActionCode", a: [T("code")]},
        checkActionCode: {name: "checkActionCode", a: [T("code")]},
        confirmPasswordReset: {name: "confirmPasswordReset", a: [T("code"), T("newPassword")]},
        createUserWithEmailAndPassword: {name: "createUserWithEmailAndPassword", a: [T("email"), T("password")]},
        fetchProvidersForEmail: {name: "fetchProvidersForEmail", a: [T("email")]},
        getRedirectResult: {name: "getRedirectResult", a: []},
        onAuthStateChanged: {
            name: "onAuthStateChanged", a: [Kh(U(), Gh(), "nextOrObserver"),
                Gh("opt_error", !0), Gh("opt_completed", !0)]
        },
        sendPasswordResetEmail: {name: "sendPasswordResetEmail", a: [T("email")]},
        signInAnonymously: {name: "signInAnonymously", a: []},
        signInWithCredential: {name: "signInWithCredential", a: [Ih()]},
        signInWithCustomToken: {name: "signInWithCustomToken", a: [T("token")]},
        signInWithEmailAndPassword: {name: "signInWithEmailAndPassword", a: [T("email"), T("password")]},
        signInWithPopup: {name: "signInWithPopup", a: [Jh()]},
        signInWithRedirect: {name: "signInWithRedirect", a: [Jh()]},
        signOut: {
            name: "signOut",
            a: []
        },
        toJSON: {name: "toJSON", a: [T(null, !0)]},
        verifyPasswordResetCode: {name: "verifyPasswordResetCode", a: [T("code")]}
    });
    Mh(W.prototype, {
        "delete": {name: "delete", a: []},
        getToken: {
            name: "getToken", a: [{
                name: "opt_forceRefresh", fa: "a boolean", optional: !0, ga: function (a) {
                    return "boolean" == typeof a
                }
            }]
        },
        link: {name: "link", a: [Ih()]},
        linkWithPopup: {name: "linkWithPopup", a: [Jh()]},
        linkWithRedirect: {name: "linkWithRedirect", a: [Jh()]},
        reauthenticate: {name: "reauthenticate", a: [Ih()]},
        reload: {name: "reload", a: []},
        sendEmailVerification: {name: "sendEmailVerification", a: []},
        toJSON: {name: "toJSON", a: [T(null, !0)]},
        unlink: {name: "unlink", a: [T("provider")]},
        updateEmail: {name: "updateEmail", a: [T("email")]},
        updatePassword: {name: "updatePassword", a: [T("password")]},
        updateProfile: {name: "updateProfile", a: [U("profile")]}
    });
    Mh(F.prototype, {l: {name: "catch"}, then: {name: "then"}});
    V(hg, "credential", function (a, b) {
        return new eg(a, b)
    }, [T("email"), T("password")]);
    Mh(ag.prototype, {
        addScope: {name: "addScope", a: [T("scope")]},
        setCustomParameters: {name: "setCustomParameters", a: [U("customOAuthParameters")]}
    });
    V(ag, "credential", ag.credential, [Kh(T(), U(), "token")]);
    Mh(bg.prototype, {
        addScope: {name: "addScope", a: [T("scope")]},
        setCustomParameters: {name: "setCustomParameters", a: [U("customOAuthParameters")]}
    });
    V(bg, "credential", bg.credential, [Kh(T(), U(), "token")]);
    Mh(cg.prototype, {
        addScope: {name: "addScope", a: [T("scope")]},
        setCustomParameters: {name: "setCustomParameters", a: [U("customOAuthParameters")]}
    });
    V(cg, "credential", cg.credential, [Kh(T(), Kh(U(), Hh()), "idToken"), Kh(T(), Hh(), "accessToken", !0)]);
    Mh(dg.prototype, {setCustomParameters: {name: "setCustomParameters", a: [U("customOAuthParameters")]}});
    V(dg, "credential", dg.credential, [Kh(T(), U(), "token"), T("secret", !0)]);
    (function () {
        if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
            var a = {Auth: Y, Error: Q};
            V(a, "EmailAuthProvider", hg, []);
            V(a, "FacebookAuthProvider", ag, []);
            V(a, "GithubAuthProvider", bg, []);
            V(a, "GoogleAuthProvider", cg, []);
            V(a, "TwitterAuthProvider", dg, []);
            firebase.INTERNAL.registerService("auth", function (a, c) {
                    a = new Y(a);
                    c({
                        INTERNAL: {
                            getToken: q(a.getToken, a),
                            addAuthTokenListener: q(a.addAuthTokenListener, a),
                            removeAuthTokenListener: q(a.removeAuthTokenListener, a)
                        }
                    });
                    return a
                },
                a, function (a, c) {
                    if ("create" === a)try {
                        c.auth()
                    } catch (d) {
                    }
                });
            firebase.INTERNAL.extendNamespace({User: W})
        } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
})();
