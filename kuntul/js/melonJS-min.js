/**
 * melonJS Game Engine v4.0.0
 * http://www.melonjs.org
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT}
 * @copyright (C) 2011 - 2016, Olivier Biot, Jason Oster, Aaron McLeod
 */
 if (function() {
    function a() {
        if (!c) {
            if (!document.body) return setTimeout(a, 13);
            for (document.removeEventListener && document.removeEventListener("DOMContentLoaded", a, !1), window.removeEventListener("load", a, !1); d.length;) d.shift().call(window, []);
            c = !0, "function" == typeof define && define.amd && define("me", [], function() {
                return me
            })
        }
    }
    window.me = window.me || {};
    var b = !1,
        c = !1,
        d = [];
    window.onReady = function(e) {
        c ? e.call(window, []) : (d.push(e), b || ("complete" === document.readyState ? window.setTimeout(a, 0) : (document.addEventListener && document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1)), b = !0))
    }, me.skipAutoInit !== !0 ? window.onReady(function() {
        me.boot()
    }) : me.init = function() {
        me.boot(), a()
    }, window.throttle || (window.throttle = function(a, b, c) {
        var d, e = window.performance.now();
        return "boolean" != typeof b && (b = !1),
            function() {
                var f = window.performance.now(),
                    g = f - e,
                    h = arguments;
                return a > g ? void(b === !1 && (clearTimeout(d), d = setTimeout(function() {
                    return e = f, c.apply(null, h)
                }, g))) : (e = f, c.apply(null, h))
            }
    }), "undefined" == typeof console && (console = {
        log: function() {},
        info: function() {},
        error: function() {
            alert(Array.prototype.slice.call(arguments).join(", "))
        }
    })
}(), !Function.prototype.bind) {
var Empty = function() {};
Function.prototype.bind = function(a) {
    var b = this;
    if ("function" != typeof b) throw new TypeError("Function.prototype.bind called on incompatible " + b);
    var c = Array.prototype.slice.call(arguments, 1),
        d = function() {
            if (this instanceof d) {
                var e = b.apply(this, c.concat(Array.prototype.slice.call(arguments)));
                return Object(e) === e ? e : this
            }
            return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
        };
    return b.prototype && (Empty.prototype = b.prototype, d.prototype = new Empty, Empty.prototype = null), d
}
}
if (Function.prototype.defer = function() {
    return setTimeout(this.bind.apply(this, arguments), .01)
}, Object.defineProperty || (Object.defineProperty = function(a, b, c) {
    if (!a.__defineGetter__) throw new TypeError("Object.defineProperty not supported");
    c.get && a.__defineGetter__(b, c.get), c.set && a.__defineSetter__(b, c.set)
}), Object.create || (Object.create = function(a) {
    var b = function() {};
    return b.prototype = a, new b
}), Object.is || (Object.is = function(a, b) {
    return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b
}), Object.assign || ! function() {
    Object.assign = function(a) {
        "use strict";
        if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (void 0 !== d && null !== d)
                for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
        }
        return b
    }
}(), function() {
    function a() {
        function d() {
            return this.init.apply(this, arguments), this
        }
        for (var e = {}, f = new Array(arguments.length), g = 0; g < arguments.length; g++) f.push(arguments[g]);
        if (d.prototype = Object.create(this.prototype), f.forEach(function(a) {
                b(d, e, a.__methods__ || a)
            }), !("init" in d.prototype)) throw new TypeError("extend: Class is missing a constructor named `init`");
        return Object.defineProperty(d.prototype, "_super", {
            value: c
        }), Object.defineProperty(d, "__methods__", {
            value: e
        }), d.extend = a, d
    }

    function b(a, b, c) {
        Object.keys(c).forEach(function(d) {
            if (b[d] = c[d], "function" != typeof c[d]) throw new TypeError("extend: Method `" + d + "` is not a function");
            Object.defineProperty(a.prototype, d, {
                configurable: !0,
                value: c[d]
            })
        })
    }

    function c(a, b, c) {
        return a.prototype[b].apply(this, c)
    }
    var d = function() {
        Object.apply(this, arguments)
    };
    d.prototype = Object.create(Object.prototype), d.prototype.constructor = d, Object.defineProperty(d, "extend", {
        value: a
    }), me.Object = d
}(), me.Error = me.Object.extend.bind(Error)({
    init: function(a) {
        this.name = "me.Error", this.message = a
    }
}), Math.sign || (Math.sign = function(a) {
    return a = +a, 0 === a || isNaN(a) ? a : a > 0 ? 1 : -1
}), Number.prototype.clamp = function(a, b) {
    return a > this ? a : this > b ? b : +this
}, Number.prototype.random = function(a, b) {
    return b || (b = a, a = this), ~~(Math.random() * (b - a)) + a
}, Number.prototype.randomFloat = function(a, b) {
    return b || (b = a, a = this), Math.random() * (b - a) + a
}, Number.prototype.weightedRandom = function(a, b) {
    return b || (b = a, a = this), ~~(Math.pow(Math.random(), 2) * (b - a)) + a
}, Number.prototype.round = function(a, b) {
    a = arguments.length < 2 ? this : a;
    var c = Math.pow(10, b || a || 0);
    return ~~(.5 + a * c) / c
}, Number.prototype.toHex = function() {
    return "0123456789ABCDEF".charAt(this - this % 16 >> 4) + "0123456789ABCDEF".charAt(this % 16)
}, Number.prototype.degToRad = function(a) {
    return (a || this) / 180 * Math.PI
}, Number.prototype.radToDeg = function(a) {
    return (a || this) * (180 / Math.PI)
}, String.prototype.trim || String.prototype.trim || ! function() {
    var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
        return this.replace(a, "")
    }
}(), String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
}), String.prototype.isNumeric = function() {
    return !isNaN(this) && "" !== this.trim()
}, String.prototype.isBoolean = function() {
    var a = this.trim();
    return "true" === a || "false" === a
}, String.prototype.includes || (String.prototype.includes = function() {
    return -1 !== String.prototype.indexOf.apply(this, arguments)
}), String.prototype.toHex = function() {
    for (var a = "", b = 0; b < this.length;) a += this.charCodeAt(b++).toString(16);
    return a
}, Array.prototype.remove = function(a) {
    var b = Array.prototype.indexOf.call(this, a);
    return -1 !== b && Array.prototype.splice.call(this, b, 1), this
}, Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
    for (var c = 0, d = this.length; d--; c++) a.call(b || this, this[c], c, this)
}), Array.isArray || (Array.isArray = function(a) {
    var b;
    return b = a instanceof Array
}), Array.prototype.random = function(a) {
    return a[0..random(a.length)]
}, Array.prototype.weightedRandom = function(a) {
    return a[0..weightedRandom(a.length)]
}, me.TypedArray = function(a) {
    var b = 0;
    if (Array.isArray(a)) this.concat(a.slice());
    else {
        if (1 !== arguments.length || "number" != typeof a) throw new me.Error("TypedArray polyfill: Unsupported constructor arguments", arguments);
        for (b = 0; a > b; b++) this.push(0)
    }
}, me.TypedArray.prototype = Array.prototype, me.TypedArray.prototype.set = function(a, b) {
    if (b = b || 0, a.length + b > this.length) throw new me.Error("TypedArray pollyfill: Buffer overflow in set");
    for (var c = 0; c < a.length; c++, b++) this[b] = a[c]
}, window.Float32Array = window.Float32Array || me.TypedArray, window.Uint8Array = window.Uint8Array || me.TypedArray, window.Uint16Array = window.Uint16Array || me.TypedArray, window.Uint32Array = window.Uint32Array || me.TypedArray, "undefined" == typeof window.performance && (window.performance = {}), "undefined" == typeof Date.now && (Date.now = function() {
    return (new Date).getTime()
}), !window.performance.now) {
var timeOffset = Date.now();
window.performance.timing && window.performance.timing.navigationStart && (timeOffset = window.performance.timing.navigationStart), window.performance.now = function() {
    return Date.now() - timeOffset
}
}! function(a) {
"use strict";

function b(a, b) {
    function d(a) {
        return this && this.constructor === d ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = b, void(a && c.call(this, a))) : new d(a)
    }
    return b || t(a, "size", {
        get: q
    }), a.constructor = d, d.prototype = a, d
}

function c(a) {
    this.add ? a.forEach(this.add, this) : a.forEach(function(a) {
        this.set(a[0], a[1])
    }, this)
}

function d(a) {
    return this.has(a) && (this._keys.splice(s, 1), this._values.splice(s, 1), this._itp.forEach(function(a) {
        s < a[0] && a[0]--
    })), s > -1
}

function e(a) {
    return this.has(a) ? this._values[s] : void 0
}

function f(a, b) {
    if (this.objectOnly && b !== Object(b)) throw new TypeError("Invalid value used as weak collection key");
    if (b != b || 0 === b)
        for (s = a.length; s-- && !u(a[s], b););
    else s = a.indexOf(b);
    return s > -1
}

function g(a) {
    return f.call(this, this._values, a)
}

function h(a) {
    return f.call(this, this._keys, a)
}

function i(a, b) {
    return this.has(a) ? this._values[s] = b : this._values[this._keys.push(a) - 1] = b, this
}

function j(a) {
    return this.has(a) || this._values.push(a), this
}

function k() {
    (this._keys || 0).length = this._values.length = 0
}

function l() {
    return p(this._itp, this._keys)
}

function m() {
    return p(this._itp, this._values)
}

function n() {
    return p(this._itp, this._keys, this._values)
}

function o() {
    return p(this._itp, this._values, this._values)
}

function p(a, b, c) {
    var d = [0],
        e = !1;
    return a.push(d), {
        next: function() {
            var f, g = d[0];
            return !e && g < b.length ? (f = c ? [b[g], c[g]] : b[g], d[0]++) : (e = !0, a.splice(a.indexOf(d), 1)), {
                done: e,
                value: f
            }
        }
    }
}

function q() {
    return this._values.length
}

function r(a, b) {
    for (var c = this.entries();;) {
        var d = c.next();
        if (d.done) break;
        a.call(b, d.value[1], d.value[0], this)
    }
}
var s, t = Object.defineProperty,
    u = Object.is;
"undefined" == typeof WeakMap && (a.WeakMap = b({
    delete: d,
    clear: k,
    get: e,
    has: h,
    set: i
}, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (a.Map = b({
    delete: d,
    has: h,
    get: e,
    set: i,
    keys: l,
    values: m,
    entries: n,
    forEach: r,
    clear: k
})), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (a.Set = b({
    has: g,
    add: j,
    delete: d,
    clear: k,
    keys: m,
    values: m,
    entries: o,
    forEach: r
})), "undefined" == typeof WeakSet && (a.WeakSet = b({
    delete: d,
    add: j,
    clear: k,
    has: g
}, !0))
}("undefined" != typeof exports && "undefined" != typeof global ? global : window),
/*!
* @overview es6-promise - a tiny implementation of Promises/A+.
* @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
* @license   Licensed under MIT license
*            See https://github.com/stefanpenner/es6-promise
* @version   3.2.1
*/
function() {
"use strict";

function a(a) {
    return "function" == typeof a || "object" == typeof a && null !== a
}

function b(a) {
    return "function" == typeof a
}

function c(a) {
    S = a
}

function d(a) {
    W = a
}

function e() {
    return function() {
        process.nextTick(j)
    }
}

function f() {
    return function() {
        R(j)
    }
}

function g() {
    var a = 0,
        b = new Z(j),
        c = document.createTextNode("");
    return b.observe(c, {
            characterData: !0
        }),
        function() {
            c.data = a = ++a % 2
        }
}

function h() {
    var a = new MessageChannel;
    return a.port1.onmessage = j,
        function() {
            a.port2.postMessage(0)
        }
}

function i() {
    return function() {
        setTimeout(j, 1)
    }
}

function j() {
    for (var a = 0; V > a; a += 2) {
        var b = aa[a],
            c = aa[a + 1];
        b(c), aa[a] = void 0, aa[a + 1] = void 0
    }
    V = 0
}

function k() {
    try {
        var a = require,
            b = a("vertx");
        return R = b.runOnLoop || b.runOnContext, f()
    } catch (a) {
        return i()
    }
}

function l(a, b) {
    var c = this,
        d = new this.constructor(n);
    void 0 === d[da] && G(d);
    var e = c._state;
    if (e) {
        var f = arguments[e - 1];
        W(function() {
            D(e, d, f, c._result)
        })
    } else z(c, d, a, b);
    return d
}

function m(a) {
    var b = this;
    if (a && "object" == typeof a && a.constructor === b) return a;
    var c = new b(n);
    return v(c, a), c
}

function n() {}

function o() {
    return new TypeError("You cannot resolve a promise with itself")
}

function p() {
    return new TypeError("A promises callback cannot return that same promise.")
}

function q(a) {
    try {
        return a.then
    } catch (a) {
        return ha.error = a, ha
    }
}

function r(a, b, c, d) {
    try {
        a.call(b, c, d)
    } catch (a) {
        return a
    }
}

function s(a, b, c) {
    W(function(a) {
        var d = !1,
            e = r(c, b, function(c) {
                d || (d = !0, b !== c ? v(a, c) : x(a, c))
            }, function(b) {
                d || (d = !0, y(a, b))
            }, "Settle: " + (a._label || " unknown promise"));
        !d && e && (d = !0, y(a, e))
    }, a)
}

function t(a, b) {
    b._state === fa ? x(a, b._result) : b._state === ga ? y(a, b._result) : z(b, void 0, function(b) {
        v(a, b)
    }, function(b) {
        y(a, b)
    })
}

function u(a, c, d) {
    c.constructor === a.constructor && d === ba && constructor.resolve === ca ? t(a, c) : d === ha ? y(a, ha.error) : void 0 === d ? x(a, c) : b(d) ? s(a, c, d) : x(a, c)
}

function v(b, c) {
    b === c ? y(b, o()) : a(c) ? u(b, c, q(c)) : x(b, c)
}

function w(a) {
    a._onerror && a._onerror(a._result), A(a)
}

function x(a, b) {
    a._state === ea && (a._result = b, a._state = fa, 0 !== a._subscribers.length && W(A, a))
}

function y(a, b) {
    a._state === ea && (a._state = ga, a._result = b, W(w, a))
}

function z(a, b, c, d) {
    var e = a._subscribers,
        f = e.length;
    a._onerror = null, e[f] = b, e[f + fa] = c, e[f + ga] = d, 0 === f && a._state && W(A, a)
}

function A(a) {
    var b = a._subscribers,
        c = a._state;
    if (0 !== b.length) {
        for (var d, e, f = a._result, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? D(c, d, e, f) : e(f);
        a._subscribers.length = 0
    }
}

function B() {
    this.error = null
}

function C(a, b) {
    try {
        return a(b)
    } catch (a) {
        return ia.error = a, ia
    }
}

function D(a, c, d, e) {
    var f, g, h, i, j = b(d);
    if (j) {
        if (f = C(d, e), f === ia ? (i = !0, g = f.error, f = null) : h = !0, c === f) return void y(c, p())
    } else f = e, h = !0;
    c._state !== ea || (j && h ? v(c, f) : i ? y(c, g) : a === fa ? x(c, f) : a === ga && y(c, f))
}

function E(a, b) {
    try {
        b(function(b) {
            v(a, b)
        }, function(b) {
            y(a, b)
        })
    } catch (b) {
        y(a, b)
    }
}

function F() {
    return ja++
}

function G(a) {
    a[da] = ja++, a._state = void 0, a._result = void 0, a._subscribers = []
}

function H(a) {
    return new oa(this, a).promise
}

function I(a) {
    var b = this;
    return new b(U(a) ? function(c, d) {
        for (var e = a.length, f = 0; e > f; f++) b.resolve(a[f]).then(c, d)
    } : function(a, b) {
        b(new TypeError("You must pass an array to race."))
    })
}

function J(a) {
    var b = this,
        c = new b(n);
    return y(c, a), c
}

function K() {
    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}

function L() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}

function M(a) {
    this[da] = F(), this._result = this._state = void 0, this._subscribers = [], n !== a && ("function" != typeof a && K(), this instanceof M ? E(this, a) : L())
}

function N(a, b) {
    this._instanceConstructor = a, this.promise = new a(n), this.promise[da] || G(this.promise), Array.isArray(b) ? (this._input = b, this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : y(this.promise, O())
}

function O() {
    return new Error("Array Methods must be provided an Array")
}

function P() {
    var a;
    if ("undefined" != typeof global) a = global;
    else if ("undefined" != typeof self) a = self;
    else try {
        a = Function("return this")()
    } catch (a) {
        throw new Error("polyfill failed because global object is unavailable in this environment")
    }
    var b = a.Promise;
    b && "[object Promise]" === Object.prototype.toString.call(b.resolve()) && !b.cast || (a.Promise = na)
}
var Q;
Q = Array.isArray ? Array.isArray : function(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
};
var R, S, T, U = Q,
    V = 0,
    W = function(a, b) {
        aa[V] = a, aa[V + 1] = b, V += 2, 2 === V && (S ? S(j) : T())
    },
    X = "undefined" != typeof window ? window : void 0,
    Y = X || {},
    Z = Y.MutationObserver || Y.WebKitMutationObserver,
    $ = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
    _ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
    aa = new Array(1e3);
T = $ ? e() : Z ? g() : _ ? h() : void 0 === X && "function" == typeof require ? k() : i();
var ba = l,
    ca = m,
    da = Math.random().toString(36).substring(16),
    ea = void 0,
    fa = 1,
    ga = 2,
    ha = new B,
    ia = new B,
    ja = 0,
    ka = H,
    la = I,
    ma = J,
    na = M;
M.all = ka, M.race = la, M.resolve = ca, M.reject = ma, M._setScheduler = c, M._setAsap = d, M._asap = W, M.prototype = {
    constructor: M,
    then: ba,
    catch: function(a) {
        return this.then(null, a)
    }
};
var oa = N;
N.prototype._enumerate = function() {
    for (var a = this.length, b = this._input, c = 0; this._state === ea && a > c; c++) this._eachEntry(b[c], c)
}, N.prototype._eachEntry = function(a, b) {
    var c = this._instanceConstructor,
        d = c.resolve;
    if (d === ca) {
        var e = q(a);
        if (e === ba && a._state !== ea) this._settledAt(a._state, b, a._result);
        else if ("function" != typeof e) this._remaining--, this._result[b] = a;
        else if (c === na) {
            var f = new c(n);
            u(f, a, e), this._willSettleAt(f, b)
        } else this._willSettleAt(new c(function(b) {
            b(a)
        }), b)
    } else this._willSettleAt(d(a), b)
}, N.prototype._settledAt = function(a, b, c) {
    var d = this.promise;
    d._state === ea && (this._remaining--, a === ga ? y(d, c) : this._result[b] = c), 0 === this._remaining && x(d, this._result)
}, N.prototype._willSettleAt = function(a, b) {
    var c = this;
    z(a, void 0, function(a) {
        c._settledAt(fa, b, a)
    }, function(a) {
        c._settledAt(ga, b, a)
    })
};
var pa = P,
    qa = {
        Promise: na,
        polyfill: pa
    };
"function" == typeof define && define.amd ? define(function() {
    return qa
}) : "undefined" != typeof module && module.exports ? module.exports = qa : "undefined" != typeof this && (this.ES6Promise = qa), pa()
}.call(this),
function() {
    function a() {
        var a = {};
        return document.location.hash && document.location.hash.substr(1).split("&").filter(function(a) {
            return "" !== a
        }).forEach(function(b) {
            var c = b.split("="),
                d = c.shift(),
                e = c.join("=");
            a[d] = e || !0
        }), a
    }
    me.mod = "melonJS", me.version = "4.0.0", me.sys = {
        fps: 60,
        updatesPerSecond: 60,
        interpolation: !1,
        scale: null,
        gravity: void 0,
        stopOnAudioError: !0,
        pauseOnBlur: !0,
        resumeOnFocus: !0,
        stopOnBlur: !1,
        preRender: !1,
        checkVersion: function(a, b) {
            b = b || me.version;
            for (var c = a.split("."), d = b.split("."), e = Math.min(c.length, d.length), f = 0, g = 0; e > g && !(f = +c[g] - +d[g]); g++);
            return f ? f : c.length - d.length
        }
    };
    var b = !1;
    Object.defineProperty(me, "initialized", {
        get: function() {
            return b
        }
    }), me.boot = function() {
        b || (me.device._check(), me.save._init(), me.game.HASH = a(), me.loader.setNocache(me.game.HASH.nocache || !1), me.timer.init(), me.state.init(), me.pool.init(), me.device.isMobile === !1 && me.input._enableKeyboardEvent(), me.levelDirector.reset(), b = !0)
    }
}(),
function() {
    me.game = function() {
        var a = {},
            b = !1,
            c = !0,
            d = !1,
            e = 0,
            f = 1,
            g = 0,
            h = 0,
            i = 0,
            j = 1e3 / 60,
            k = 0,
            l = null,
            m = 0,
            n = null;
        return a.viewport = null, a.world = null, a.mergeGroup = !0, a.sortOn = "z", a.tmxRenderer = null, a.onLevelLoaded = function() {}, a.HASH = null, a.init = function(d, e) {
            b || (d = d || me.video.renderer.getWidth(), e = e || me.video.renderer.getHeight(), a.viewport = new me.Viewport(0, 0, d, e), a.world = new me.Container(0, 0, d, e), a.world.name = "rootContainer", a.world._root = !0, me.collision.init(), n = me.video.renderer, me.event.publish(me.event.GAME_INIT), me.input._translatePointerEvents(), c = !0, b = !0)
        }, a.reset = function() {
            me.collision.quadTree.clear(), a.world.destroy(), a.viewport && a.viewport.reset(), n.reset(), me.event.publish(me.event.GAME_RESET), a.updateFrameRate()
        }, a.updateFrameRate = function() {
            e = 0, f = ~~(.5 + 60 / me.sys.fps), j = 1e3 / me.sys.updatesPerSecond, g = 0, h = 10 * j, d = me.sys.fps > me.sys.updatesPerSecond
        }, a.getParentContainer = function(a) {
            return a.ancestor
        }, a.repaint = function() {
            c = !0
        }, a.update = function(b) {
            if (++e % f === 0)
                for (e = 0, me.timer.update(b), me.input._updateGamepads(), g += me.timer.getDelta(), g = Math.min(g, h), k = me.sys.interpolation ? me.timer.getDelta() : j, i = me.sys.interpolation ? k : Math.max(k, m); g >= i || me.sys.interpolation;)
                    if (l = window.performance.now(), me.collision.quadTree.clear(), me.collision.quadTree.insertContainer(a.world), c = a.world.update(k) || c, c = a.viewport.update(k) || c, me.timer.lastUpdate = window.performance.now(), m = me.timer.lastUpdate - l, g -= i, me.sys.interpolation) {
                        g = 0;
                        break
                    }
        }, a.draw = function() {
            if (c || d) {
                var b = a.viewport.pos.x + a.viewport.offset.x,
                    e = a.viewport.pos.y + a.viewport.offset.y;
                a.world.currentTransform.translate(-b, -e), me.video.renderer.clear(), a.world.draw(n, a.viewport), a.world.currentTransform.translate(b, e), a.viewport.draw(n)
            }
            c = !1, me.video.renderer.flush()
        }, a
    }()
}(),
function() {
    var a = function(a) {
        return a.substring(0, 1).toUpperCase() + a.substring(1, a.length)
    };
    me.agent = function() {
        var b = {},
            c = ["ms", "MS", "moz", "webkit", "o"];
        return b.prefixed = function(b, d) {
            if (d = d || window, b in d) return d[b];
            var e, f = a(b);
            return c.some(function(a) {
                var b = a + f;
                return e = b in d ? d[b] : void 0
            }), e
        }, b.setPrefixed = function(b, d, e) {
            if (e = e || window, b in e) return void(e[b] = d);
            var f = a(b);
            c.some(function(a) {
                var b = a + f;
                return b in e ? (e[b] = d, !0) : !1
            })
        }, b
    }()
}(),
function() {
    me.device = function() {
        function a(a) {
            a.reading ? (c.accelerationX = a.reading.accelerationX, c.accelerationY = a.reading.accelerationY, c.accelerationZ = a.reading.accelerationZ) : (c.accelerationX = a.accelerationIncludingGravity.x, c.accelerationY = a.accelerationIncludingGravity.y, c.accelerationZ = a.accelerationIncludingGravity.z)
        }

        function b(a) {
            c.gamma = a.gamma, c.beta = a.beta, c.alpha = a.alpha
        }
        var c = {},
            d = !1,
            e = !1,
            f = null;
        return c._check = function() {
            me.device._detectDevice(), me.device.isMobile && !me.device.cocoon && window.document.addEventListener("touchmove", function(a) {
                return a.preventDefault(), window.scroll(0, 0), !1
            }, !1), me.device.pointerEvent = me.agent.prefixed("PointerEvent", window), me.device.maxTouchPoints = me.agent.prefixed("maxTouchPoints", navigator) || 0, window.gesture = me.agent.prefixed("gesture"), me.device.touch = "createTouch" in document || "ontouchstart" in window || me.device.cocoon || me.device.pointerEvent && me.device.maxTouchPoints > 0, me.device.hasAccelerometer = "undefined" != typeof window.DeviceMotionEvent || "undefined" != typeof window.Windows && "function" == typeof Windows.Devices.Sensors.Accelerometer, this.hasPointerLockSupport = me.agent.prefixed("pointerLockElement", document), this.hasPointerLockSupport && (document.exitPointerLock = me.agent.prefixed("exitPointerLock", document)), window.DeviceOrientationEvent && (me.device.hasDeviceOrientation = !0), this.hasFullscreenSupport = me.agent.prefixed("fullscreenEnabled", document) || document.mozFullScreenEnabled, document.exitFullscreen = me.agent.prefixed("cancelFullScreen", document) || me.agent.prefixed("exitFullscreen", document), navigator.vibrate = me.agent.prefixed("vibrate", navigator);
            try {
                c.localStorage = !!window.localStorage
            } catch (a) {
                c.localStorage = !1
            }
            window.addEventListener("blur", function() {
                me.sys.stopOnBlur && me.state.stop(!0), me.sys.pauseOnBlur && me.state.pause(!0)
            }, !1), window.addEventListener("focus", function() {
                me.sys.stopOnBlur && me.state.restart(!0), me.sys.resumeOnFocus && me.state.resume(!0)
            }, !1);
            var a, b;
            "undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a = "msHidden", b = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange"), "string" == typeof b && document.addEventListener(b, function() {
                document[a] ? (me.sys.stopOnBlur && me.state.stop(!0), me.sys.pauseOnBlur && me.state.pause(!0)) : (me.sys.stopOnBlur && me.state.restart(!0), me.sys.resumeOnFocus && me.state.resume(!0))
            }, !1)
        }, c._detectDevice = function() {
            me.device.iOS = me.device.ua.match(/iPhone|iPad|iPod/i) || !1, me.device.android = me.device.ua.match(/Android/i) || !1, me.device.android2 = me.device.ua.match(/Android 2/i) || !1, me.device.wp = me.device.ua.match(/Windows Phone/i) || !1, me.device.BlackBerry = me.device.ua.match(/BlackBerry/i) || !1, me.device.Kindle = me.device.ua.match(/Kindle|Silk.*Mobile Safari/i) || !1, me.device.isMobile = me.device.ua.match(/Mobi/i) || me.device.iOS || me.device.android || me.device.wp || me.device.BlackBerry || me.device.Kindle || me.device.iOS || !1, me.device.ejecta = "undefined" != typeof window.ejecta, me.device.cocoon = navigator.isCocoonJS || "undefined" != typeof window.Cocoon
        }, c.ua = navigator.userAgent, c.localStorage = !1, c.hasAccelerometer = !1, c.hasDeviceOrientation = !1, c.hasFullscreenSupport = !1, c.hasPointerLockSupport = !1, c.nativeBase64 = "function" == typeof window.atob, c.maxTouchPoints = 0, c.touch = !1, c.isMobile = !1, c.iOS = !1, c.android = !1, c.android2 = !1, c.ejecta = !1, c.cocoon = !1, c.wp = !1, c.BlackBerry = !1, c.Kindle = !1, c.orientation = 0, c.accelerationX = 0, c.accelerationY = 0, c.accelerationZ = 0, c.gamma = 0, c.beta = 0, c.alpha = 0, c.language = navigator.language || navigator.browserLanguage || navigator.userLanguage || "en", c.requestFullscreen = function(a) {
            this.hasFullscreenSupport && (a = a || me.video.getWrapper(), a.requestFullscreen = me.agent.prefixed("requestFullscreen", a) || a.mozRequestFullScreen, a.requestFullscreen())
        }, c.exitFullscreen = function() {
            this.hasFullscreenSupport && document.exitFullscreen()
        }, c.getPixelRatio = function() {
            if (null === f) {
                var a;
                a = "undefined" != typeof me.video.renderer ? me.video.renderer.getScreenContext() : me.Renderer.prototype.getContext2d(document.createElement("canvas"));
                var b = window.devicePixelRatio || 1,
                    c = me.agent.prefixed("backingStorePixelRatio", a) || 1;
                f = b / c
            }
            return f
        }, c.getStorage = function(a) {
            switch (a = a || "local") {
                case "local":
                    return me.save;
                default:
                    throw new me.Error("storage type " + a + " not supported")
            }
        }, c.turnOnPointerLock = function() {
            if (this.hasPointerLockSupport) {
                var a = me.video.getWrapper();
                if (me.device.ua.match(/Firefox/i)) {
                    var b = function() {
                        (me.agent.prefixed("fullscreenElement", document) || document.mozFullScreenElement) === a && (document.removeEventListener("fullscreenchange", b), document.removeEventListener("mozfullscreenchange", b), a.requestPointerLock = me.agent.prefixed("requestPointerLock", a), a.requestPointerLock())
                    };
                    document.addEventListener("fullscreenchange", b, !1), document.addEventListener("mozfullscreenchange", b, !1), me.device.requestFullscreen()
                } else a.requestPointerLock()
            }
        }, c.turnOffPointerLock = function() {
            this.hasPointerLockSupport && document.exitPointerLock()
        }, c.watchAccelerometer = function() {
            if (me.device.hasAccelerometer) {
                if (!d) {
                    if ("undefined" == typeof Windows) window.addEventListener("devicemotion", a, !1);
                    else {
                        var b = Windows.Devices.Sensors.Accelerometer.getDefault();
                        if (b) {
                            var c = b.minimumReportInterval,
                                e = c >= 16 ? c : 25;
                            b.reportInterval = e, b.addEventListener("readingchanged", a, !1)
                        }
                    }
                    d = !0
                }
                return !0
            }
            return !1
        }, c.unwatchAccelerometer = function() {
            if (d) {
                if ("undefined" == typeof Windows) window.removeEventListener("devicemotion", a, !1);
                else {
                    var b = Windows.Device.Sensors.Accelerometer.getDefault();
                    b.removeEventListener("readingchanged", a, !1)
                }
                d = !1
            }
        }, c.watchDeviceOrientation = function() {
            return me.device.hasDeviceOrientation && !e && (window.addEventListener("deviceorientation", b, !1), e = !0), !1
        }, c.unwatchDeviceOrientation = function() {
            e && (window.removeEventListener("deviceorientation", b, !1), e = !1)
        }, c.vibrate = function(a) {
            navigator.vibrate && navigator.vibrate(a)
        }, c
    }(), Object.defineProperty(me.device, "isFullscreen", {
        get: function() {
            if (me.device.hasFullscreenSupport) {
                var a = me.agent.prefixed("fullscreenElement", document) || document.mozFullScreenElement;
                return a === me.video.getWrapper()
            }
            return !1
        }
    }), Object.defineProperty(me.device, "sound", {
        get: function() {
            return !Howler.noAudio
        }
    })
}(),
function() {
    me.timer = function() {
        var a = {},
            b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = Math.ceil(1e3 / me.sys.fps),
            h = 1e3 / me.sys.fps * 1.25,
            i = [],
            j = 0,
            k = function(a) {
                for (var b = 0, c = i.length; c > b; b++)
                    if (i[b].timerId === a) {
                        i.splice(b, 1);
                        break
                    }
            },
            l = function(a) {
                for (var b = 0, c = i.length; c > b; b++) {
                    var d = i[b];
                    d.pauseable && me.state.isPaused() || (d.elapsed += a), d.elapsed >= d.delay && (d.fn.apply(this), d.repeat === !0 ? d.elapsed -= d.delay : me.timer.clearTimeout(d.timerId))
                }
            };
        return a.tick = 1, a.fps = 0, a.lastUpdate = window.performance.now(), a.init = function() {
            a.reset(), e = d = 0
        }, a.reset = function() {
            d = e = window.performance.now(), f = 0, c = 0, b = 0
        }, a.setTimeout = function(a, b, c) {
            return i.push({
                fn: a,
                delay: b,
                elapsed: 0,
                repeat: !1,
                timerId: ++j,
                pauseable: c === !0 || !0
            }), j
        }, a.setInterval = function(a, b, c) {
            return i.push({
                fn: a,
                delay: b,
                elapsed: 0,
                repeat: !0,
                timerId: ++j,
                pauseable: c === !0 || !0
            }), j
        }, a.clearTimeout = function(a) {
            k.defer(this, a)
        }, a.clearInterval = function(a) {
            k.defer(this, a)
        }, a.getTime = function() {
            return e
        }, a.getDelta = function() {
            return f
        }, a.countFPS = function() {
            b++, c += f, b % 10 === 0 && (this.fps = (~~(1e3 * b / c)).clamp(0, me.sys.fps), c = 0, b = 0)
        }, a.update = function(b) {
            return d = e, e = b, f = e - d, a.tick = f > h && me.sys.interpolation ? f / g : 1, l(f), f
        }, a
    }()
}(),
function() {
    me.pool = function() {
        var a = {},
            b = {};
        return a.init = function() {
            a.register("me.Entity", me.Entity), a.register("me.CollectableEntity", me.CollectableEntity), a.register("me.LevelEntity", me.LevelEntity), a.register("me.Tween", me.Tween, !0), a.register("me.Color", me.Color, !0), a.register("me.Particle", me.Particle, !0), a.register("me.Sprite", me.Sprite), a.register("me.Vector2d", me.Vector2d, !0), a.register("me.Glyph", me.Glyph, !0), a.register("me.Matrix2d", me.Matrix2d, !0)
        }, a.register = function(a, c, d) {
            b[a] = {
                class: c,
                pool: d ? [] : void 0
            }
        }, a.pull = function(a) {
            for (var c = new Array(arguments.length), d = 0; d < arguments.length; d++) c[d] = arguments[d];
            var e = b[a];
            if (e) {
                var f, g = e.class,
                    h = e.pool;
                return h && (f = h.pop()) ? (c.shift(), "function" == typeof f.onResetEvent ? f.onResetEvent.apply(f, c) : f.init.apply(f, c)) : (c[0] = g, f = new(g.bind.apply(g, c)), h && (f.className = a)), f
            }
            throw new me.Error("Cannot instantiate entity of type '" + a + "'")
        }, a.purge = function() {
            for (var a in b) b[a] && (b[a].pool = [])
        }, a.push = function(a) {
            var c = a.className;
            "undefined" != typeof c && b[c] && b[c].pool.push(a)
        }, a.exists = function(a) {
            return a in b
        }, a
    }()
}(),
function() {
    me.Vector2d = me.Object.extend({
        init: function(a, b) {
            return this.set(a || 0, b || 0)
        },
        _set: function(a, b) {
            return this.x = a, this.y = b, this
        },
        set: function(a, b) {
            if (a !== +a || b !== +b) throw new me.Vector2d.Error("invalid x,y parameters (not a number)");
            return this._set(a, b)
        },
        setZero: function() {
            return this.set(0, 0)
        },
        setV: function(a) {
            return this._set(a.x, a.y)
        },
        add: function(a) {
            return this._set(this.x + a.x, this.y + a.y)
        },
        sub: function(a) {
            return this._set(this.x - a.x, this.y - a.y)
        },
        scale: function(a, b) {
            return this._set(this.x * a, this.y * ("undefined" != typeof b ? b : a))
        },
        scaleV: function(a) {
            return this._set(this.x * a.x, this.y * a.y)
        },
        div: function(a) {
            return this._set(this.x / a, this.y / a)
        },
        abs: function() {
            return this._set(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y)
        },
        clamp: function(a, b) {
            return new me.Vector2d(this.x.clamp(a, b), this.y.clamp(a, b))
        },
        clampSelf: function(a, b) {
            return this._set(this.x.clamp(a, b), this.y.clamp(a, b))
        },
        minV: function(a) {
            return this._set(this.x < a.x ? this.x : a.x, this.y < a.y ? this.y : a.y)
        },
        maxV: function(a) {
            return this._set(this.x > a.x ? this.x : a.x, this.y > a.y ? this.y : a.y)
        },
        floor: function() {
            return new me.Vector2d(Math.floor(this.x), Math.floor(this.y))
        },
        floorSelf: function() {
            return this._set(Math.floor(this.x), Math.floor(this.y))
        },
        ceil: function() {
            return new me.Vector2d(Math.ceil(this.x), Math.ceil(this.y))
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this.x), Math.ceil(this.y))
        },
        negate: function() {
            return new me.Vector2d(-this.x, -this.y)
        },
        negateSelf: function() {
            return this._set(-this.x, -this.y)
        },
        copy: function(a) {
            return this._set(a.x, a.y)
        },
        equals: function(a) {
            return this.x === a.x && this.y === a.y
        },
        normalize: function() {
            var a = this.length();
            return a > 0 ? this._set(this.x / a, this.y / a) : this
        },
        perp: function() {
            return this._set(this.y, -this.x)
        },
        rotate: function(a) {
            var b = this.x,
                c = this.y;
            return this._set(b * Math.cos(a) - c * Math.sin(a), b * Math.sin(a) + c * Math.cos(a))
        },
        dotProduct: function(a) {
            return this.x * a.x + this.y * a.y
        },
        length2: function() {
            return this.dotProduct(this)
        },
        length: function() {
            return Math.sqrt(this.length2())
        },
        distance: function(a) {
            var b = this.x - a.x,
                c = this.y - a.y;
            return Math.sqrt(b * b + c * c)
        },
        angle: function(a) {
            return Math.acos((this.dotProduct(a) / (this.length() * a.length())).clamp(-1, 1))
        },
        project: function(a) {
            return this.scale(this.dotProduct(a) / a.length2())
        },
        projectN: function(a) {
            return this.scale(this.dotProduct(a))
        },
        clone: function() {
            return new me.Vector2d(this.x, this.y)
        },
        toString: function() {
            return "x:" + this.x + ",y:" + this.y
        }
    }), me.Vector2d.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Vector2d.Error"
        }
    })
}(),
function() {
    me.Vector3d = me.Object.extend({
        init: function(a, b, c) {
            return this.set(a || 0, b || 0, c || 0)
        },
        _set: function(a, b, c) {
            return this.x = a, this.y = b, this.z = c, this
        },
        set: function(a, b, c) {
            if (a !== +a || b !== +b || c !== +c) throw new me.Vector3d.Error("invalid x, y, z parameters (not a number)");
            return this._set(a, b, c)
        },
        setZero: function() {
            return this.set(0, 0, 0)
        },
        setV: function(a) {
            return this._set(a.x, a.y, "undefined" != typeof a.z ? a.z : this.z)
        },
        add: function(a) {
            return this._set(this.x + a.x, this.y + a.y, this.z + (a.z || 0))
        },
        sub: function(a) {
            return this._set(this.x - a.x, this.y - a.y, this.z - (a.z || 0))
        },
        scale: function(a, b, c) {
            return b = "undefined" != typeof b ? b : a, c = "undefined" != typeof c ? c : a, this._set(this.x * a, this.y * b, this.z * c)
        },
        scaleV: function(a) {
            return this._set(this.x * a.x, this.y * a.y, this.z * (a.z || 1))
        },
        div: function(a) {
            return this._set(this.x / a, this.y / a, this.z / a)
        },
        abs: function() {
            return this._set(this.x < 0 ? -this.x : this.x, this.y < 0 ? -this.y : this.y, this.z < 0 ? -this.Z : this.z)
        },
        clamp: function(a, b) {
            return new me.Vector3d(this.x.clamp(a, b), this.y.clamp(a, b), this.z.clamp(a, b))
        },
        clampSelf: function(a, b) {
            return this._set(this.x.clamp(a, b), this.y.clamp(a, b), this.z.clamp(a, b))
        },
        minV: function(a) {
            var b = a.z || 0;
            return this._set(this.x < a.x ? this.x : a.x, this.y < a.y ? this.y : a.y, this.z < b ? this.z : b)
        },
        maxV: function(a) {
            var b = a.z || 0;
            return this._set(this.x > a.x ? this.x : a.x, this.y > a.y ? this.y : a.y, this.z > b ? this.z : b)
        },
        floor: function() {
            return new me.Vector3d(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
        },
        floorSelf: function() {
            return this._set(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
        },
        ceil: function() {
            return new me.Vector3d(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this.x), Math.ceil(this.y), Math.ceil(this.z))
        },
        negate: function() {
            return new me.Vector3d(-this.x, -this.y, -this.z)
        },
        negateSelf: function() {
            return this._set(-this.x, -this.y, -this.z)
        },
        copy: function(a) {
            return this._set(a.x, a.y, "undefined" != typeof a.z ? a.z : this.z)
        },
        equals: function(a) {
            return this.x === a.x && this.y === a.y && this.z === (a.z || this.z)
        },
        normalize: function() {
            var a = this.length();
            return a > 0 ? this._set(this.x / a, this.y / a, this.z / a) : this
        },
        perp: function() {
            return this._set(this.y, -this.x, this.z)
        },
        rotate: function(a) {
            var b = this.x,
                c = this.y;
            return this._set(b * Math.cos(a) - c * Math.sin(a), b * Math.sin(a) + c * Math.cos(a), this.z)
        },
        dotProduct: function(a) {
            return this.x * a.x + this.y * a.y + this.z * (a.z || 1)
        },
        length2: function() {
            return this.dotProduct(this)
        },
        length: function() {
            return Math.sqrt(this.length2())
        },
        distance: function(a) {
            var b = this.x - a.x,
                c = this.y - a.y,
                d = this.z - (a.z || 0);
            return Math.sqrt(b * b + c * c + d * d)
        },
        angle: function(a) {
            return Math.acos((this.dotProduct(a) / (this.length() * a.length())).clamp(-1, 1))
        },
        project: function(a) {
            return this.scale(this.dotProduct(a) / a.length2())
        },
        projectN: function(a) {
            return this.scale(this.dotProduct(a))
        },
        clone: function() {
            return new me.Vector3d(this.x, this.y, this.z)
        },
        toString: function() {
            return "x:" + this.x + ",y:" + this.y + ",z:" + this.z
        }
    }), me.Vector3d.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Vector3d.Error"
        }
    })
}(),
function() {
    me.ObservableVector2d = me.Vector2d.extend({
        init: function(a, b, c) {
            if (Object.defineProperty(this, "x", {
                    get: function() {
                        return this._x
                    },
                    set: function(a) {
                        this.onUpdate(a, this._y, this._x, this._y), this._x = a
                    }
                }), Object.defineProperty(this, "y", {
                    get: function() {
                        return this._y
                    },
                    set: function(a) {
                        this.onUpdate(this._x, a, this._x, this._y), this._y = a
                    }
                }), "undefined" == typeof c) throw new me.ObservableVector2d.Error("undefined `onUpdate` callback");
            this.setCallback(c.onUpdate), this._x = a || 0, this._y = b || 0
        },
        _set: function(a, b) {
            return this.onUpdate(a, b, this._x, this._y), this._x = a, this._y = b, this
        },
        setMuted: function(a, b) {
            return this._x = a, this._y = b, this
        },
        setCallback: function(a) {
            if ("function" != typeof a) throw new me.ObservableVector2d.Error("invalid `onUpdate` callback");
            return this.onUpdate = a, this
        },
        add: function(a) {
            return this._set(this._x + a.x, this._y + a.y)
        },
        sub: function(a) {
            return this._set(this._x - a.x, this._y - a.y)
        },
        scale: function(a, b) {
            return this._set(this._x * a, this._y * ("undefined" != typeof b ? b : a))
        },
        scaleV: function(a) {
            return this._set(this._x * a.x, this._y * a.y)
        },
        div: function(a) {
            return this._set(this._x / a, this._y / a)
        },
        abs: function() {
            return this._set(this._x < 0 ? -this._x : this._x, this._y < 0 ? -this._y : this._y)
        },
        clamp: function(a, b) {
            return new me.ObservableVector2d(this.x.clamp(a, b), this.y.clamp(a, b), {
                onUpdate: this.onUpdate
            })
        },
        clampSelf: function(a, b) {
            return this._set(this._x.clamp(a, b), this._y.clamp(a, b))
        },
        minV: function(a) {
            return this._set(this._x < a.x ? this._x : a.x, this._y < a.y ? this._y : a.y)
        },
        maxV: function(a) {
            return this._set(this._x > a.x ? this._x : a.x, this._y > a.y ? this._y : a.y)
        },
        floor: function() {
            return new me.ObservableVector2d(Math.floor(this._x), Math.floor(this._y), {
                onUpdate: this.onUpdate
            })
        },
        floorSelf: function() {
            return this._set(Math.floor(this._x), Math.floor(this._y))
        },
        ceil: function() {
            return new me.ObservableVector2d(Math.ceil(this._x), Math.ceil(this._y), {
                onUpdate: this.onUpdate
            })
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this._x), Math.ceil(this._y))
        },
        negate: function() {
            return new me.ObservableVector2d(-this._x, -this._y, {
                onUpdate: this.onUpdate
            })
        },
        negateSelf: function() {
            return this._set(-this._x, -this._y)
        },
        copy: function(a) {
            return this._set(a.x, a.y)
        },
        equals: function(a) {
            return this._x === a.x && this._y === a.y
        },
        normalize: function() {
            var a = this.length();
            return a > 0 ? this._set(this._x / a, this._y / a) : this
        },
        perp: function() {
            return this._set(this._y, -this._x)
        },
        rotate: function(a) {
            var b = this._x,
                c = this._y;
            return this._set(b * Math.cos(a) - c * Math.sin(a), b * Math.sin(a) + c * Math.cos(a))
        },
        dotProduct: function(a) {
            return this._x * a.x + this._y * a.y
        },
        distance: function(a) {
            return Math.sqrt((this._x - a.x) * (this._x - a.x) + (this._y - a.y) * (this._y - a.y))
        },
        clone: function() {
            return new me.ObservableVector2d(this._x, this._y, {
                onUpdate: this.onUpdate
            })
        },
        toVector2d: function() {
            return new me.Vector2d(this._x, this._y)
        },
        toString: function() {
            return "x:" + this._x + ",y:" + this._y
        }
    }), me.ObservableVector2d.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.ObservableVector2d.Error"
        }
    })
}(),
function() {
    me.ObservableVector3d = me.Vector3d.extend({
        init: function(a, b, c, d) {
            if (Object.defineProperty(this, "x", {
                    get: function() {
                        return this._x
                    },
                    set: function(a) {
                        this.onUpdate(a, this._y, this._z, this._x, this._y, this._z), this._x = a
                    }
                }), Object.defineProperty(this, "y", {
                    get: function() {
                        return this._y
                    },
                    set: function(a) {
                        this.onUpdate(this._x, a, this._z, this._x, this._y, this._z), this._y = a
                    }
                }), Object.defineProperty(this, "z", {
                    get: function() {
                        return this._z
                    },
                    set: function(a) {
                        this.onUpdate(this._x, this._y, a, this._x, this._y, this._z), this._z = a
                    }
                }), "undefined" == typeof d) throw new me.ObservableVector3d.Error("undefined `onUpdate` callback");
            this.setCallback(d.onUpdate), this._x = a || 0, this._y = b || 0, this._z = c || 0
        },
        _set: function(a, b, c) {
            return this.onUpdate(a, b, c, this._x, this._y, this._z), this._x = a, this._y = b, this._z = c, this
        },
        setMuted: function(a, b, c) {
            return this._x = a, this._y = b, this._z = c, this
        },
        setCallback: function(a) {
            if ("function" != typeof a) throw new me.ObservableVector2d.Error("invalid `onUpdate` callback");
            return this.onUpdate = a, this
        },
        add: function(a) {
            return this._set(this._x + a.x, this._y + a.y, this._z + (a.z || 0))
        },
        sub: function(a) {
            return this._set(this._x - a.x, this._y - a.y, this._z - (a.z || 0))
        },
        scale: function(a, b, c) {
            return b = "undefined" != typeof b ? b : a, c = "undefined" != typeof c ? c : a, this._set(this._x * a, this._y * b, this._z * c)
        },
        scaleV: function(a) {
            return this._set(this._x * a.x, this._y * a.y, this._z * (a.z || 1))
        },
        div: function(a) {
            return this._set(this._x / a, this._y / a, this._z / a)
        },
        abs: function() {
            return this._set(this._x < 0 ? -this._x : this._x, this._y < 0 ? -this._y : this._y, this._Z < 0 ? -this._z : this._z)
        },
        clamp: function(a, b) {
            return new me.ObservableVector3d(this._x.clamp(a, b), this._y.clamp(a, b), this._z.clamp(a, b), {
                onUpdate: this.onUpdate
            })
        },
        clampSelf: function(a, b) {
            return this._set(this._x.clamp(a, b), this._y.clamp(a, b), this._z.clamp(a, b))
        },
        minV: function(a) {
            var b = a.z || 0;
            return this._set(this._x < a.x ? this._x : a.x, this._y < a.y ? this._y : a.y, this._z < b ? this._z : b)
        },
        maxV: function(a) {
            var b = a.z || 0;
            return this._set(this._x > a.x ? this._x : a.x, this._y > a.y ? this._y : a.y, this._z > b ? this._z : b)
        },
        floor: function() {
            return new me.ObservableVector3d(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), {
                onUpdate: this.onUpdate
            })
        },
        floorSelf: function() {
            return this._set(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
        },
        ceil: function() {
            return new me.ObservableVector3d(Math.ceil(this._x), Math.ceil(this._y), Math.ceil(this._z), {
                onUpdate: this.onUpdate
            })
        },
        ceilSelf: function() {
            return this._set(Math.ceil(this._x), Math.ceil(this._y), Math.ceil(this._z))
        },
        negate: function() {
            return new me.ObservableVector3d(-this._x, -this._y, -this._z, {
                onUpdate: this.onUpdate
            })
        },
        negateSelf: function() {
            return this._set(-this._x, -this._y, -this._z)
        },
        copy: function(a) {
            return this._set(a.x, a.y, "undefined" != typeof a.z ? a.z : this._z)
        },
        equals: function(a) {
            return this._x === a.x && this._y === a.y && this._z === (a.z || this._z)
        },
        normalize: function() {
            var a = this.length();
            return a > 0 ? this._set(this._x / a, this._y / a, this._z / a) : this
        },
        perp: function() {
            return this._set(this._y, -this._x, this._z)
        },
        rotate: function(a) {
            var b = this._x,
                c = this._y;
            return this._set(b * Math.cos(a) - c * Math.sin(a), b * Math.sin(a) + c * Math.cos(a), this._z)
        },
        dotProduct: function(a) {
            return this._x * a.x + this._y * a.y + this._z * (a.z || 1)
        },
        distance: function(a) {
            var b = this._x - a.x,
                c = this._y - a.y,
                d = this._z - (a.z || 0);
            return Math.sqrt(b * b + c * c + d * d)
        },
        clone: function() {
            return new me.ObservableVector3d(this._x, this._y, this._z, {
                onUpdate: this.onUpdate
            })
        },
        toVector3d: function() {
            return new me.Vector3d(this._x, this._y, this._z)
        },
        toString: function() {
            return "x:" + this._x + ",y:" + this._y + ",z:" + this._z
        }
    }), me.ObservableVector3d.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.ObservableVector3d.Error"
        }
    })
}(),
function() {
    me.Matrix2d = me.Object.extend({
        init: function() {
            "undefined" == typeof this.val && (this.val = new Float32Array(9)), arguments.length && arguments[0] instanceof me.Matrix2d ? this.copy(arguments[0]) : arguments.length >= 6 ? this.setTransform.apply(this, arguments) : this.onResetEvent()
        },
        onResetEvent: function() {
            this.identity()
        },
        identity: function() {
            return this.setTransform(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        setTransform: function() {
            var a = this.val;
            return 9 === arguments.length ? (a[0] = arguments[0], a[1] = arguments[1], a[2] = arguments[2], a[3] = arguments[3], a[4] = arguments[4], a[5] = arguments[5], a[6] = arguments[6], a[7] = arguments[7], a[8] = arguments[8]) : 6 === arguments.length && (a[0] = arguments[0], a[1] = arguments[2], a[2] = arguments[4], a[3] = arguments[1], a[4] = arguments[3], a[5] = arguments[5], a[6] = 0, a[7] = 0, a[8] = 1), this
        },
        copy: function(a) {
            return this.val.set(a.val), this
        },
        multiply: function(a) {
            a = a.val;
            var b = this.val,
                c = b[0],
                d = b[1],
                e = b[3],
                f = b[4],
                g = a[0],
                h = a[1],
                i = a[3],
                j = a[4],
                k = a[6],
                l = a[7];
            return b[0] = c * g + e * h, b[1] = d * g + f * h, b[3] = c * i + e * j, b[4] = d * i + f * j, b[6] += c * k + e * l, b[7] += d * k + f * l, this
        },
        transpose: function() {
            var a, b = this.val;
            return a = b[1], b[1] = b[3], b[3] = a, a = b[2], b[2] = b[6], b[6] = a, a = b[5], b[5] = b[7], b[7] = a, this
        },
        invert: function() {
            var a = this.val,
                b = a[0],
                c = a[1],
                d = a[2],
                e = a[3],
                f = a[4],
                g = a[5],
                h = a[6],
                i = a[7],
                j = a[8],
                k = j * f - g * i,
                l = g * h - j * e,
                m = i * e - f * h,
                n = b * k + c * l + d * m;
            return a[0] = k / n, a[1] = (d * i - j * c) / n, a[2] = (g * c - d * f) / n, a[3] = l / n, a[4] = (j * b - d * h) / n, a[5] = (d * e - g * b) / n, a[6] = m / n, a[7] = (c * h - i * b) / n, a[8] = (f * b - c * e) / n, this
        },
        multiplyVector: function(a) {
            var b = this.val,
                c = a.x,
                d = a.y;
            return a.x = c * b[0] + d * b[3] + b[6], a.y = c * b[1] + d * b[4] + b[7], a
        },
        scale: function(a, b) {
            var c = this.val,
                d = a,
                e = "undefined" == typeof b ? d : b;
            return c[0] *= d, c[1] *= d, c[3] *= e, c[4] *= e, this
        },
        scaleV: function(a) {
            return this.scale(a.x, a.y)
        },
        scaleX: function(a) {
            return this.scale(a, 1)
        },
        scaleY: function(a) {
            return this.scale(1, a)
        },
        rotate: function(a) {
            if (0 !== a) {
                var b = this.val,
                    c = b[0],
                    d = b[1],
                    e = b[3],
                    f = b[4],
                    g = Math.sin(a),
                    h = Math.cos(a);
                b[0] = c * h + e * g, b[1] = d * h + f * g,
                    b[3] = c * -g + e * h, b[4] = d * -g + f * h
            }
            return this
        },
        translate: function(a, b) {
            var c = this.val;
            return c[6] += c[0] * a + c[3] * b, c[7] += c[1] * a + c[4] * b, this
        },
        translateV: function(a) {
            return this.translate(a.x, a.y)
        },
        isIdentity: function() {
            var a = this.val;
            return 1 === a[0] && 0 === a[1] && 0 === a[2] && 0 === a[3] && 1 === a[4] && 0 === a[5] && 0 === a[6] && 0 === a[7] && 1 === a[8]
        },
        clone: function() {
            return me.pool.pull("me.Matrix2d").copy(this)
        },
        toString: function() {
            var a = this.val;
            return "me.Matrix2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")"
        }
    })
}(),
function() {
    me.Ellipse = me.Object.extend({
        init: function(a, b, c, d) {
            this.pos = new me.Vector2d, this._bounds = void 0, this.radius = NaN, this.radiusV = new me.Vector2d, this.radiusSq = new me.Vector2d, this.ratio = new me.Vector2d, this.shapeType = "Ellipse", this.setShape(a, b, c, d)
        },
        setShape: function(a, b, c, d) {
            var e = c / 2,
                f = d / 2;
            this.pos.set(a, b), this.radius = Math.max(e, f), this.ratio.set(e / this.radius, f / this.radius), this.radiusV.set(this.radius, this.radius).scaleV(this.ratio);
            var g = this.radius * this.radius;
            return this.radiusSq.set(g, g).scaleV(this.ratio), this.updateBounds(), this
        },
        rotate: function() {
            return this
        },
        scale: function(a, b) {
            return b = "undefined" != typeof b ? b : a, this.setShape(this.pos.x, this.pos.y, 2 * this.radiusV.x * a, 2 * this.radiusV.y * b)
        },
        scaleV: function(a) {
            return this.scale(a.x, a.y)
        },
        transform: function() {
            return this
        },
        translate: function(a, b) {
            return this.pos.x += a, this.pos.y += b, this._bounds.translate(a, b), this
        },
        translateV: function(a) {
            return this.pos.add(a), this._bounds.translateV(a), this
        },
        containsPointV: function(a) {
            return this.containsPoint(a.x, a.y)
        },
        containsPoint: function(a, b) {
            return a -= this.pos.x, b -= this.pos.y, a * a / this.radiusSq.x + b * b / this.radiusSq.y <= 1
        },
        getBounds: function() {
            return this._bounds
        },
        updateBounds: function() {
            var a = this.radiusV.x,
                b = this.radiusV.y,
                c = this.pos.x - a,
                d = this.pos.y - b,
                e = 2 * a,
                f = 2 * b;
            return this._bounds ? this._bounds.setShape(c, d, e, f) : this._bounds = new me.Rect(c, d, e, f), this._bounds
        },
        clone: function() {
            return new me.Ellipse(this.pos.x, this.pos.y, 2 * this.radiusV.x, 2 * this.radiusV.y)
        }
    })
}(),
function() {
    me.Polygon = me.Object.extend({
        init: function(a, b, c) {
            this.pos = new me.Vector2d, this._bounds = void 0, this.points = null, this.shapeType = "Polygon", this.setShape(a, b, c)
        },
        setShape: function(a, b, c) {
            return this.pos.set(a, b), this.points = c, this.recalc(), this.updateBounds(), this
        },
        transform: function(a) {
            for (var b = this.points, c = b.length, d = 0; c > d; d++) a.multiplyVector(b[d]);
            return this.recalc(), this.updateBounds(), this
        },
        rotate: function(a) {
            if (0 !== a) {
                for (var b = this.points, c = b.length, d = 0; c > d; d++) b[d].rotate(a);
                this.recalc(), this.updateBounds()
            }
            return this
        },
        scale: function(a, b) {
            b = "undefined" != typeof b ? b : a;
            for (var c = this.points, d = c.length, e = 0; d > e; e++) c[e].scale(a, b);
            return this.recalc(), this.updateBounds(), this
        },
        scaleV: function(a) {
            return this.scale(a.x, a.y)
        },
        recalc: function() {
            var a, b = this.edges = [],
                c = this.normals = [],
                d = this.points,
                e = d.length;
            if (3 > e) throw new me.Polygon.Error("Requires at least 3 points");
            for (a = 0; e > a; a++) {
                var f = (new me.Vector2d).copy(d[(a + 1) % e]).sub(d[a]);
                b.push(f), c.push((new me.Vector2d).copy(f).perp().normalize())
            }
            return this
        },
        translate: function(a, b) {
            return this.pos.x += a, this.pos.y += b, this._bounds.translate(a, b), this
        },
        translateV: function(a) {
            return this.pos.add(a), this._bounds.translateV(a), this
        },
        containsPointV: function(a) {
            return this.containsPoint(a.x, a.y)
        },
        containsPoint: function(a, b) {
            for (var c = !1, d = this.pos.x, e = this.pos.y, f = this.points, g = f.length, h = 0, i = g - 1; g > h; i = h++) {
                var j = f[h].y + e,
                    k = f[h].x + d,
                    l = f[i].y + e,
                    m = f[i].x + d;
                j > b != l > b && (m - k) * (b - j) / (l - j) + k > a && (c = !c)
            }
            return c
        },
        getBounds: function() {
            return this._bounds
        },
        updateBounds: function() {
            return this._bounds || (this._bounds = new me.Rect(0, 0, 0, 0)), this._bounds.setPoints(this.points), this._bounds.translateV(this.pos), this._bounds
        },
        clone: function() {
            var a = [];
            return this.points.forEach(function(b) {
                a.push(new me.Vector2d(b.x, b.y))
            }), new me.Polygon(this.pos.x, this.pos.y, a)
        }
    }), me.Polygon.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Polygon.Error"
        }
    })
}(),
function() {
    me.Rect = me.Polygon.extend({
        init: function(a, b, c, d) {
            this.pos = new me.Vector2d, this.points = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d], this.shapeType = "Rectangle", this.setShape(a, b, c, d)
        },
        setShape: function(a, b, c, d) {
            return this.points[0].set(0, 0), this.points[1].set(c, 0), this.points[2].set(c, d), this.points[3].set(0, d), me.Polygon.prototype.setShape.apply(this, [a, b, this.points]), this._width = c, this._height = d, this
        },
        resize: function(a, b) {
            return this.width = a, this.height = b, this
        },
        getBounds: function() {
            return this
        },
        setPoints: function(a) {
            var b = 1 / 0,
                c = 1 / 0,
                d = -(1 / 0),
                e = -(1 / 0);
            return a.forEach(function(a) {
                b = Math.min(b, a.x), c = Math.min(c, a.y), d = Math.max(d, a.x), e = Math.max(e, a.y)
            }), this.setShape(b, c, d - b, e - c), this
        },
        recalc: function() {
            return me.Polygon.prototype.recalc.apply(this), this._width = this.points[2].x, this._height = this.points[2].y, this
        },
        updateBounds: function() {
            return this
        },
        clone: function() {
            return new me.Rect(this.pos.x, this.pos.y, this._width, this._height)
        },
        copy: function(a) {
            return this.setShape(a.pos.x, a.pos.y, a._width, a._height)
        },
        translate: function(a, b) {
            return this.pos.x += a, this.pos.y += b, this
        },
        translateV: function(a) {
            return this.translate(a.x, a.y)
        },
        union: function(a) {
            var b = Math.min(this.left, a.left),
                c = Math.min(this.top, a.top);
            return this.resize(Math.max(this.right, a.right) - b, Math.max(this.bottom, a.bottom) - c), this.pos.set(b, c), this
        },
        overlaps: function(a) {
            return this.left < a.right && a.left < this.right && this.top < a.bottom && a.top < this.bottom
        },
        contains: function(a) {
            return a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
        },
        containsPoint: function(a, b) {
            return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
        },
        toPolygon: function() {
            return new me.Polygon(this.pos.x, this.pos.y, this.points)
        }
    }), Object.defineProperty(me.Rect.prototype, "left", {
        get: function() {
            return this.pos.x
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "right", {
        get: function() {
            var a = this._width;
            return this.pos.x + a || a
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "top", {
        get: function() {
            return this.pos.y
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "bottom", {
        get: function() {
            var a = this._height;
            return this.pos.y + a || a
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(a) {
            this.points[1].x = this.points[2].x = a, this.recalc()
        },
        configurable: !0
    }), Object.defineProperty(me.Rect.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(a) {
            this.points[2].y = this.points[3].y = a, this.recalc()
        },
        configurable: !0
    })
}(),
function() {
    me.Line = me.Polygon.extend({
        containsPointV: function(a) {
            return this.containsPoint(a.x, a.y)
        },
        containsPoint: function(a, b) {
            a -= this.pos.x, b -= this.pos.y;
            var c = this.points[0],
                d = this.points[1];
            return (b - c.y) * (d.x - c.x) === (d.y - c.y) * (a - c.x)
        },
        recalc: function() {
            var a = this.edges = [],
                b = this.normals = [],
                c = this.points;
            if (2 !== c.length) throw new me.Line.Error("Requires exactly 2 points");
            var d = (new me.Vector2d).copy(c[1]).sub(c[0]);
            return a.push(d), b.push((new me.Vector2d).copy(d).perp().normalize()), this
        },
        clone: function() {
            var a = [];
            return this.points.forEach(function(b) {
                a.push(new me.Vector2d(b.x, b.y))
            }), new me.Line(this.pos.x, this.pos.y, a)
        }
    }), me.Line.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Line.Error"
        }
    })
}(),
function() {
    me.Body = me.Rect.extend({
        init: function(a, b) {
            this.entity = a, this.shapes = [], this.collisionMask = me.collision.types.ALL_OBJECT, this.collisionType = me.collision.types.ENEMY_OBJECT, "undefined" == typeof this.vel && (this.vel = new me.Vector2d), this.vel.set(0, 0), "undefined" == typeof this.accel && (this.accel = new me.Vector2d), this.accel.set(0, 0), "undefined" == typeof this.friction && (this.friction = new me.Vector2d), this.friction.set(0, 0), "undefined" == typeof this.maxVel && (this.maxVel = new me.Vector2d), this.maxVel.set(1e3, 1e3), this.gravity = "undefined" != typeof me.sys.gravity ? me.sys.gravity : .98, this.falling = !1, this.jumping = !1, me.Rect.prototype.init.apply(this, [0, 0, a.width, a.height]);
            for (var c = 0; c < b.length; c++) this.addShape(b[c].clone(), !0)
        },
        addShape: function(a, b) {
            return a instanceof me.Rect ? this.shapes.push(a.toPolygon()) : this.shapes.push(a), b !== !0 && this.updateBounds(), this.shapes.length
        },
        addShapesFromJSON: function(a, b, c) {
            var d;
            if (c = c || 1, "undefined" == typeof a.rigidBodies) {
                if (d = a[b], "undefined" == typeof d) throw new me.Body.Error("Identifier (" + b + ") undefined for the given PhysicsEditor JSON object)");
                for (var e = 0; e < d.length; e++) {
                    for (var f = [], g = 0; g < d[e].shape.length; g += 2) f.push(new me.Vector2d(d[e].shape[g], d[e].shape[g + 1]));
                    this.addShape(new me.Polygon(0, 0, f), !0)
                }
            } else {
                if (a.rigidBodies.forEach(function(a) {
                        a.name === b && (d = a)
                    }), "undefined" == typeof d) throw new me.Body.Error("Identifier (" + b + ") undefined for the given PhysicsEditor JSON object)");
                this.pos.set(d.origin.x, 1 - d.origin.y).scale(c);
                var h = this;
                d.polygons.forEach(function(a) {
                    var b = [];
                    a.forEach(function(a) {
                        b.push(new me.Vector2d(a.x, 1 - a.y).scale(c))
                    }), h.addShape(new me.Polygon(0, 0, b), !0)
                }), d.circles.forEach(function(a) {
                    h.addShape(new me.Ellipse(a.cx * c, (1 - a.cy) * c, 2 * a.r * c, 2 * a.r * c), !0)
                })
            }
            return this.updateBounds(), this.shapes.length
        },
        getShape: function(a) {
            return this.shapes[a || 0]
        },
        removeShape: function(a) {
            return this.shapes.remove(a), this.updateBounds(), this.shapes.length
        },
        removeShapeAt: function(a) {
            return this.removeShape(this.getShape(a))
        },
        setCollisionMask: function(a) {
            this.collisionMask = a
        },
        respondToCollision: function(a) {
            var b = a.overlapV;
            this.entity.pos.sub(b), 0 !== b.x && (this.vel.x = ~~(.5 + this.vel.x - b.x) || 0), 0 !== b.y && (this.vel.y = ~~(.5 + this.vel.y - b.y) || 0, this.falling = b.y >= 1, this.jumping = b.y <= -1)
        },
        updateBounds: function() {
            if (this.shapes.length > 0) {
                var a = this.shapes[0].getBounds();
                this.pos.setV(a.pos), this.resize(a.width, a.height);
                for (var b = 1; b < this.shapes.length; b++) this.union(this.shapes[b].getBounds())
            }
            return this.entity.onBodyUpdate(this.pos, this.width, this.height), this
        },
        setVelocity: function(a, b) {
            this.accel.x = 0 !== a ? a : this.accel.x, this.accel.y = 0 !== b ? b : this.accel.y, this.setMaxVelocity(a, b)
        },
        setMaxVelocity: function(a, b) {
            this.maxVel.x = a, this.maxVel.y = b
        },
        setFriction: function(a, b) {
            this.friction.x = a || 0, this.friction.y = b || 0
        },
        applyFriction: function(a) {
            var b = this.friction.x * me.timer.tick,
                c = a.x + b,
                d = a.x - b,
                e = this.friction.y * me.timer.tick,
                f = a.y + e,
                g = a.y - e;
            a.x = 0 > c ? c : d > 0 ? d : 0, a.y = 0 > f ? f : g > 0 ? g : 0
        },
        computeVelocity: function(a) {
            this.gravity && (a.y += this.gravity * me.timer.tick, this.falling = a.y > 0, this.jumping = this.falling ? !1 : this.jumping), (this.friction.x || this.friction.y) && this.applyFriction(a), 0 !== a.y && (a.y = a.y.clamp(-this.maxVel.y, this.maxVel.y)), 0 !== a.x && (a.x = a.x.clamp(-this.maxVel.x, this.maxVel.x))
        },
        update: function() {
            return this.computeVelocity(this.vel), this.entity.pos.add(this.vel), 0 !== this.vel.x || 0 !== this.vel.y
        },
        destroy: function() {
            this.entity = null, this.shapes = []
        }
    }), me.Body.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Body.Error"
        }
    })
}(),
function() {
    function a(a, b, c, d) {
        this.max_objects = b || 4, this.max_levels = c || 4, this.level = d || 0, this.bounds = a, this.objects = [], this.nodes = []
    }
    var b = [],
        c = function(a, c, d, e) {
            if (b.length > 0) {
                var f = b.pop();
                return f.bounds = a, f.max_objects = c || 4, f.max_levels = d || 4, f.level = e || 0, f
            }
            return new me.QuadTree(a, c, d, e)
        },
        d = function(a) {
            b.push(a)
        },
        e = new me.Vector2d;
    a.prototype.split = function() {
        var a = this.level + 1,
            b = ~~(.5 + this.bounds.width / 2),
            d = ~~(.5 + this.bounds.height / 2),
            e = ~~(.5 + this.bounds.pos.x),
            f = ~~(.5 + this.bounds.pos.y);
        this.nodes[0] = c({
            pos: {
                x: e + b,
                y: f
            },
            width: b,
            height: d
        }, this.max_objects, this.max_levels, a), this.nodes[1] = c({
            pos: {
                x: e,
                y: f
            },
            width: b,
            height: d
        }, this.max_objects, this.max_levels, a), this.nodes[2] = c({
            pos: {
                x: e,
                y: f + d
            },
            width: b,
            height: d
        }, this.max_objects, this.max_levels, a), this.nodes[3] = c({
            pos: {
                x: e + b,
                y: f + d
            },
            width: b,
            height: d
        }, this.max_objects, this.max_levels, a)
    }, a.prototype.getIndex = function(a) {
        var b = a.getBounds(),
            c = b.pos;
        (a.floating || a.ancestor && a.ancestor.floating) && (c = me.game.viewport.localToWorld(c.x, c.y, e));
        var d = -1,
            f = c.x,
            g = c.y,
            h = b.width,
            i = b.height,
            j = this.bounds.pos.x + this.bounds.width / 2,
            k = this.bounds.pos.y + this.bounds.height / 2,
            l = k > g && k > g + i,
            m = g > k;
        return j > f && j > f + h ? l ? d = 1 : m && (d = 2) : f > j && (l ? d = 0 : m && (d = 3)), d
    }, a.prototype.insertContainer = function(a) {
        for (var b, c = a.children.length; c--, b = a.children[c];) b instanceof me.Container ? ("rootContainer" !== b.name && this.insert(b), this.insertContainer(b)) : "function" == typeof b.getBounds && this.insert(b)
    }, a.prototype.insert = function(a) {
        var b = -1;
        if (this.nodes.length > 0 && (b = this.getIndex(a), -1 !== b)) return void this.nodes[b].insert(a);
        if (this.objects.push(a), this.objects.length > this.max_objects && this.level < this.max_levels) {
            0 === this.nodes.length && this.split();
            for (var c = 0; c < this.objects.length;) b = this.getIndex(this.objects[c]), -1 !== b ? this.nodes[b].insert(this.objects.splice(c, 1)[0]) : c += 1
        }
    }, a.prototype.retrieve = function(a, b) {
        var c = this.objects;
        if (this.nodes.length > 0) {
            var d = this.getIndex(a);
            if (-1 !== d) c = c.concat(this.nodes[d].retrieve(a));
            else
                for (var e = 0; e < this.nodes.length; e += 1) c = c.concat(this.nodes[e].retrieve(a))
        }
        return "function" == typeof b && c.sort(b), c
    }, a.prototype.remove = function(a) {
        var b = !1;
        if ("undefined" == typeof a.getBounds) return !1;
        if (this.nodes.length > 0) {
            var c = this.getIndex(a); - 1 !== c && (b = this.nodes[c].remove(a), b && this.nodes[c].isPrunable() && this.nodes.splice(c, 1))
        }
        return b === !1 && -1 !== this.objects.indexOf(a) && (this.objects.remove(a), b = !0), b
    }, a.prototype.isPrunable = function() {
        return !(this.hasChildren() || this.objects.length > 0)
    }, a.prototype.hasChildren = function() {
        for (var a = 0; a < this.nodes.length; a += 1) {
            var b = this.nodes[a];
            if (b.length > 0 || b.objects.length > 0) return !0
        }
        return !1
    }, a.prototype.clear = function(a) {
        this.objects.length = 0;
        for (var b = 0; b < this.nodes.length; b += 1) this.nodes[b].clear(), d(this.nodes[b]);
        this.nodes = [], "undefined" != typeof a && this.bounds.setShape(a.pos.x, a.pos.y, a.width, a.height)
    }, me.QuadTree = a
}(),
function() {
    function a(a, b, c) {
        for (var d = Number.MAX_VALUE, e = -Number.MAX_VALUE, f = a.length, g = 0; f > g; g++) {
            var h = a[g].dotProduct(b);
            d > h && (d = h), h > e && (e = h)
        }
        c[0] = d, c[1] = e
    }

    function b(b, c, d, e, f, h) {
        var j = i.pop(),
            k = i.pop(),
            l = g.pop().copy(c).sub(b),
            m = l.dotProduct(f);
        if (a(d, f, j), a(e, f, k), k[0] += m, k[1] += m, j[0] > k[1] || k[0] > j[1]) return g.push(l), i.push(j), i.push(k), !0;
        if (h) {
            var n = 0;
            if (j[0] < k[0])
                if (h.aInB = !1, j[1] < k[1]) n = j[1] - k[0], h.bInA = !1;
                else {
                    var o = j[1] - k[0],
                        p = k[1] - j[0];
                    n = p > o ? o : -p
                }
            else if (h.bInA = !1, j[1] > k[1]) n = j[0] - k[1], h.aInB = !1;
            else {
                var q = j[1] - k[0],
                    r = k[1] - j[0];
                n = r > q ? q : -r
            }
            var s = Math.abs(n);
            s < h.overlap && (h.overlap = s, h.overlapN.copy(f), 0 > n && h.overlapN.negateSelf())
        }
        return g.push(l), i.push(j), i.push(k), !1
    }

    function c(a, b) {
        var c = a.length2(),
            g = b.dotProduct(a);
        return 0 > g ? d : g > c ? f : e
    }
    for (var d = -1, e = 0, f = 1, g = [], h = 0; 10 > h; h++) g.push(new me.Vector2d);
    for (var i = [], j = 0; 5 > j; j++) i.push([]);
    me.collision = function() {
        var a = {};
        return a.quadTree = null, a.maxDepth = 4, a.maxChildren = 8, a.bounds = null, a.types = {
            NO_OBJECT: 0,
            PLAYER_OBJECT: 1,
            NPC_OBJECT: 2,
            ENEMY_OBJECT: 4,
            COLLECTABLE_OBJECT: 8,
            ACTION_OBJECT: 16,
            PROJECTILE_OBJECT: 32,
            WORLD_SHAPE: 64,
            USER: 128,
            ALL_OBJECT: 4294967295
        }, a.init = function() {
            a.bounds = me.game.viewport.clone(), a.quadTree = new me.QuadTree(a.bounds, a.maxChildren, a.maxDepth), me.event.subscribe(me.event.LEVEL_LOADED, function() {
                a.bounds = me.game.world.clone(), a.quadTree.clear(a.bounds)
            })
        }, a.ResponseObject = function() {
            this.a = null, this.b = null, this.overlapN = new me.Vector2d, this.overlapV = new me.Vector2d, this.aInB = !0, this.bInA = !0, this.indexShapeA = -1, this.indexShapeB = -1, this.overlap = Number.MAX_VALUE
        }, a.ResponseObject.prototype.clear = function() {
            return this.aInB = !0, this.bInA = !0, this.overlap = Number.MAX_VALUE, this.indexShapeA = -1, this.indexShapeB = -1, this
        }, a.response = new a.ResponseObject, a.shouldCollide = function(a, b) {
            return a.body && b.body && 0 !== (a.body.collisionMask & b.body.collisionType) && 0 !== (a.body.collisionType & b.body.collisionMask)
        }, a.check = function(b, c) {
            for (var d, e = 0, f = c || a.response, g = a.quadTree.retrieve(b), h = g.length; h--, d = g[h];)
                if (d !== b && a.shouldCollide(b, d) && b.getBounds().overlaps(d.getBounds())) {
                    var i = b.body.shapes.length,
                        j = d.body.shapes.length;
                    if (0 === i || 0 === j) continue;
                    var k = 0;
                    do {
                        var l = b.body.getShape(k),
                            m = 0;
                        do {
                            var n = d.body.getShape(m);
                            a["test" + l.shapeType + n.shapeType].call(this, b, l, d, n, f.clear()) === !0 && (e++, f.indexShapeA = k, f.indexShapeB = m, b.onCollision(f, d) !== !1 && b.body.respondToCollision.call(b.body, f), d.onCollision(f, b) !== !1 && d.body.respondToCollision.call(d.body, f)), m++
                        } while (j > m);
                        k++
                    } while (i > k)
                } return e > 0
        }, a.testPolygonPolygon = function(a, c, d, e, f) {
            var h, i = c.points,
                j = c.normals,
                k = j.length,
                l = e.points,
                m = e.normals,
                n = m.length,
                o = g.pop().copy(a.pos).add(a.ancestor._absPos).add(c.pos),
                p = g.pop().copy(d.pos).add(d.ancestor._absPos).add(e.pos);
            for (h = 0; k > h; h++)
                if (b(o, p, i, l, j[h], f)) return g.push(o), g.push(p), !1;
            for (h = 0; n > h; h++)
                if (b(o, p, i, l, m[h], f)) return g.push(o), g.push(p), !1;
            return f && (f.a = a, f.b = d, f.overlapV.copy(f.overlapN).scale(f.overlap)), g.push(o), g.push(p), !0
        }, a.testEllipseEllipse = function(a, b, c, d, e) {
            var f = g.pop().copy(c.pos).add(c.ancestor._absPos).add(d.pos).sub(a.pos).add(a.ancestor._absPos).sub(b.pos),
                h = b.radius,
                i = d.radius,
                j = h + i,
                k = j * j,
                l = f.length2();
            if (l > k) return g.push(f), !1;
            if (e) {
                var m = Math.sqrt(l);
                e.a = a, e.b = c, e.overlap = j - m, e.overlapN.copy(f.normalize()), e.overlapV.copy(f).scale(e.overlap), e.aInB = i >= h && i - h >= m, e.bInA = h >= i && h - i >= m
            }
            return g.push(f), !0
        }, a.testPolygonEllipse = function(a, b, e, h, i) {
            for (var j = g.pop().copy(e.pos).add(e.ancestor._absPos).add(h.pos).sub(a.pos).add(a.ancestor._absPos).sub(b.pos), k = h.radius, l = k * k, m = b.points, n = b.edges, o = n.length, p = g.pop(), q = g.pop(), r = g.pop(), s = 0, t = 0; o > t; t++) {
                var u = t === o - 1 ? 0 : t + 1,
                    v = 0 === t ? o - 1 : t - 1,
                    w = 0,
                    x = null;
                p.copy(n[t]), r.copy(j).sub(m[t]), i && r.length2() > l && (i.aInB = !1);
                var y = c(p, r),
                    z = !0;
                if (y === d) {
                    var A = null;
                    if (o > 1 && (p.copy(n[v]), A = g.pop().copy(j).sub(m[v]), y = c(p, A), y !== f && (z = !1)), z) {
                        if (s = r.length(), s > k) return g.push(j), g.push(p), g.push(q), g.push(r), A && g.push(A), !1;
                        i && (i.bInA = !1, x = r.normalize(), w = k - s)
                    }
                    A && g.push(A)
                } else if (y === f) {
                    if (o > 1 && (p.copy(n[u]), r.copy(j).sub(m[u]), y = c(p, r), y !== d && (z = !1)), z) {
                        if (s = r.length(), s > k) return g.push(j), g.push(p), g.push(q), g.push(r), !1;
                        i && (i.bInA = !1, x = r.normalize(), w = k - s)
                    }
                } else {
                    q.copy(b.normals[t]), s = r.dotProduct(q);
                    var B = Math.abs(s);
                    if ((1 === o || s > 0) && B > k) return g.push(j), g.push(p), g.push(q), g.push(r), !1;
                    i && (x = q, w = k - s, (s >= 0 || 2 * k > w) && (i.bInA = !1))
                }
                x && i && Math.abs(w) < Math.abs(i.overlap) && (i.overlap = w, i.overlapN.copy(x))
            }
            return i && (i.a = a, i.b = e, i.overlapV.copy(i.overlapN).scale(i.overlap)), g.push(j), g.push(p), g.push(q), g.push(r), !0
        }, a.testEllipsePolygon = function(b, c, d, e, f) {
            var g = a.testPolygonEllipse(d, e, b, c, f);
            if (g && f) {
                var h = f.a,
                    i = f.aInB;
                f.overlapN.negateSelf(), f.overlapV.negateSelf(), f.a = f.b, f.b = h, f.aInB = f.bInA, f.bInA = i
            }
            return g
        }, a
    }()
}(),
function() {
    me.Renderable = me.Rect.extend({
        init: function(a, b, c, d) {
            this.isRenderable = !0, "undefined" != typeof this.currentTransform ? this.currentTransform.identity() : this.currentTransform = me.pool.pull("me.Matrix2d"), this.GUID = void 0, this.inViewport = !1, this.alwaysUpdate = !1, this.updateWhenPaused = !1, this.isPersistent = !1, this.floating = !1, this.anchorPoint = new me.Vector2d(.5, .5), this.autoTransform = !1, this.alpha = 1, this.ancestor = void 0, this._bounds ? this._bounds.setShape(a, b, c, d) : this._bounds = new me.Rect(a, b, c, d), this._absPos ? this._absPos.set(a, b) : this._absPos = new me.Vector2d(a, b), this.pos instanceof me.ObservableVector3d ? this.pos.setMuted(a, b, 0).setCallback(this.updateBoundsPos.bind(this)) : this.pos = new me.ObservableVector3d(a, b, 0, {
                onUpdate: this.updateBoundsPos.bind(this)
            }), this._width = c, this._height = d, this.shapeType = "Rectangle", this.setOpacity(1)
        },
        getBounds: function() {
            return this._bounds
        },
        getOpacity: function() {
            return this.alpha
        },
        setOpacity: function(a) {
            "number" == typeof a && (this.alpha = a.clamp(0, 1), this.alpha !== this.alpha && (this.alpha = 1))
        },
        transform: function(a) {
            var b = this.getBounds();
            return this.currentTransform.multiply(a), b.setPoints(b.transform(a).points), b.pos.setV(this.pos), this
        },
        scale: function(a, b) {
            var c = a,
                d = "undefined" == typeof b ? c : b;
            return this.currentTransform.scale(c, d), this.getBounds().resize(this.width * c, this.height * d), this
        },
        scaleV: function(a) {
            return this.scale(a.x, a.y), this
        },
        update: function() {
            return !1
        },
        updateBoundsPos: function(a, b) {
            var c = this.getBounds();
            return c.pos.set(a, b, c.pos.z), this.ancestor && c.pos.add(this.ancestor._absPos), c
        },
        updateBounds: function() {
            return console.warn("Deprecated: me.Renderable.updateBounds"), me.Rect.prototype.updateBounds.apply(this)
        },
        draw: function() {},
        destroy: function() {
            me.pool.push(this.currentTransform), this.currentTransform = void 0, this.onDestroyEvent.apply(this, arguments)
        },
        onDestroyEvent: function() {}
    }), Object.defineProperty(me.Renderable.prototype, "width", {
        get: function() {
            return this._width
        },
        set: function(a) {
            this.getBounds().width = a, this._width = a
        },
        configurable: !0
    }), Object.defineProperty(me.Renderable.prototype, "height", {
        get: function() {
            return this._height
        },
        set: function(a) {
            this.getBounds().height = a, this._height = a
        },
        configurable: !0
    }), me.Renderable.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Renderable.Error"
        }
    })
}(),
function() {
    me.Sprite = me.Renderable.extend({
        init: function(a, b, c) {
            if (this.animationpause = !1, this.animationspeed = 100, this.anim = {}, this.resetAnim = null, this.current = {
                    offset: new me.Vector2d,
                    width: 0,
                    height: 0,
                    angle: 0
                }, this.dt = 0, this._flip = {
                    lastX: !1,
                    lastY: !1
                }, "undefined" != typeof c.flipX && this._flip.lastX(!!c.flipX), "undefined" != typeof c.flipY && this._flip.lastY(!!c.flipY), this._flicker = {
                    isFlickering: !1,
                    duration: 0,
                    callback: null,
                    state: !1
                }, this.isSprite = !0, c.image instanceof me.CanvasRenderer.prototype.Texture) {
                if (this.image = c.image.getTexture(), this.textureAtlas = c.image, "undefined" != typeof c.region) {
                    var d = c.image.getRegion(c.region);
                    if (!d) throw new me.Renderable.Error("Texture - region for " + c.region + " not found");
                    this.current.offset.setV(d.offset), this.current.angle = d.angle, c.framewidth = c.framewidth || d.width, c.frameheight = c.frameheight || d.height
                }
            } else this.image = me.utils.getImage(c.image), c.framewidth = c.framewidth || this.image.width, c.frameheight = c.frameheight || this.image.height, this.textureAtlas = me.video.renderer.cache.get(this.image, c).getAtlas();
            this.current.width = c.framewidth, this.current.height = c.frameheight, "undefined" != typeof c.atlas ? (this.textureAtlas = c.atlas, this.atlasIndices = c.atlasIndices) : this.atlasIndices = null, me.Renderable.prototype.init.apply(this, [a, b, this.current.width, this.current.height]), "undefined" != typeof c.rotation && this.currentTransform.rotate(c.rotation), c.anchorPoint && this.anchorPoint.set(c.anchorPoint.x, c.anchorPoint.y), 0 !== this.addAnimation("default", null) && this.setCurrentAnimation("default")
        },
        isFlickering: function() {
            return this._flicker.isFlickering
        },
        flicker: function(a, b) {
            this._flicker.duration = a, this._flicker.duration <= 0 ? (this._flicker.isFlickering = !1, this._flicker.callback = null) : this._flicker.isFlickering || (this._flicker.callback = b, this._flicker.isFlickering = !0)
        },
        flipX: function(a) {
            a !== this._flip.lastX && (console.warn("Deprecated: me.Sprite.flipX"), this._flip.lastX = a, this.currentTransform.scaleX(-1))
        },
        flipY: function(a) {
            a !== this._flip.lastY && (console.warn("Deprecated: me.Sprite.flipY"), this._flip.lastY = a, this.currentTransform.scaleY(-1))
        },
        addAnimation: function(a, b, c) {
            this.anim[a] = {
                name: a,
                frames: [],
                idx: 0,
                length: 0
            };
            var d = 0;
            if ("object" != typeof this.textureAtlas) return 0;
            null == b && (b = [], Object.keys(this.textureAtlas).forEach(function(a, c) {
                b[c] = c
            }));
            for (var e = 0, f = b.length; f > e; e++) {
                var g, h = b[e];
                g = "number" == typeof h || "string" == typeof h ? {
                    name: h,
                    delay: c || this.animationspeed
                } : h;
                var i = g.name;
                if ("number" == typeof i) "undefined" != typeof this.textureAtlas[i] && (this.anim[a].frames[e] = Object.assign({}, this.textureAtlas[i], g), d++);
                else {
                    if (null === this.atlasIndices) throw new me.Renderable.Error("string parameters for addAnimation are not allowed for standard spritesheet based Texture");
                    this.anim[a].frames[e] = Object.assign({}, this.textureAtlas[this.atlasIndices[i]], g), d++
                }
            }
            return this.anim[a].length = d, d
        },
        setCurrentAnimation: function(a, b, c) {
            if (!this.anim[a]) throw new me.Renderable.Error("animation id '" + a + "' not defined");
            this.current = this.anim[a], this.resetAnim = b || null, this.setAnimationFrame(this.current.idx), this.current.name = a, c || (this.dt = 0)
        },
        isCurrentAnimation: function(a) {
            return this.current.name === a
        },
        setAnimationFrame: function(a) {
            this.current.idx = (a || 0) % this.current.length;
            var b = this.getAnimationFrameObjectByIndex(this.current.idx);
            Object.assign(this.current, b), b.anchorPoint && this.anchorPoint.setV(b.anchorPoint)
        },
        getCurrentAnimationFrame: function() {
            return this.current.idx
        },
        getAnimationFrameObjectByIndex: function(a) {
            return this.current.frames[a]
        },
        update: function(a) {
            var b = !1;
            if (!this.animationpause && this.current && this.current.length > 1) {
                var c = this.getAnimationFrameObjectByIndex(this.current.idx).delay;
                for (this.dt += a; this.dt >= c;) {
                    if (b = !0, this.dt -= c, this.setAnimationFrame(this.current.idx + 1), 0 === this.current.idx && this.resetAnim)
                        if ("string" == typeof this.resetAnim) this.setCurrentAnimation(this.resetAnim, null, !0);
                        else if (this.resetAnim() === !1) {
                        this.setAnimationFrame(this.current.length - 1), this.dt %= c;
                        break
                    }
                    c = this.getAnimationFrameObjectByIndex(this.current.idx).delay
                }
            }
            return this._flicker.isFlickering && (this._flicker.duration -= a, this._flicker.duration < 0 && ("function" == typeof this._flicker.callback && this._flicker.callback(), this.flicker(-1)), b = !0), b
        },
        draw: function(a) {
            if (!this._flicker.isFlickering || (this._flicker.state = !this._flicker.state, this._flicker.state)) {
                var b = this.current,
                    c = this.pos.x,
                    d = this.pos.y,
                    e = b.width,
                    f = b.height,
                    g = b.offset;
                a.save(), a.setGlobalAlpha(a.globalAlpha() * this.getOpacity()), this.currentTransform.isIdentity() || a.transform(this.currentTransform), a.translate(-(e * this.anchorPoint.x), -(f * this.anchorPoint.y)), 0 !== b.angle && (a.translate(-c, -d), a.rotate(b.angle), c -= f, e = b.height, f = b.width), a.drawImage(this.image, g.x, g.y, e, f, c, d, e, f), a.restore()
            }
        }
    }), Object.defineProperty(me.Sprite.prototype, "offset", {
        get: function() {
            return this.current.offset
        },
        set: function(a) {
            this.current.offset.setV(a)
        },
        configurable: !0
    }), me.AnimationSheet = me.Sprite
}(),
function() {
    var a = Math.min,
        b = Math.max;
    me.Viewport = me.Renderable.extend({
        init: function(a, b, c, d) {
            me.Renderable.prototype.init.apply(this, [a, b, c - a, d - b]), this.AXIS = {
                NONE: 0,
                HORIZONTAL: 1,
                VERTICAL: 2,
                BOTH: 3
            }, this.bounds = new me.Rect(-(1 / 0), -(1 / 0), 1 / 0, 1 / 0), this.offset = new me.Vector2d, this.target = null, this.follow_axis = this.AXIS.NONE, this._shake = {
                intensity: 0,
                duration: 0,
                axis: this.AXIS.BOTH,
                onComplete: null
            }, this._fadeOut = {
                color: null,
                tween: null
            }, this._fadeIn = {
                color: null,
                tween: null
            }, this.setDeadzone(this.width / 6, this.height / 6)
        },
        _followH: function(c) {
            var d = this.pos.x;
            return c.x - this.pos.x > this.deadzone.right ? this.pos.x = a(c.x - this.deadzone.right, this.bounds.width - this.width) : c.x - this.pos.x < this.deadzone.pos.x && (this.pos.x = b(c.x - this.deadzone.pos.x, this.bounds.pos.x)), d !== this.pos.x
        },
        _followV: function(c) {
            var d = this.pos.y;
            return c.y - this.pos.y > this.deadzone.bottom ? this.pos.y = a(c.y - this.deadzone.bottom, this.bounds.height - this.height) : c.y - this.pos.y < this.deadzone.pos.y && (this.pos.y = b(c.y - this.deadzone.pos.y, this.bounds.pos.y)), d !== this.pos.y
        },
        reset: function(a, b) {
            this.pos.x = a || 0, this.pos.y = b || 0, this.target = null, this.follow_axis = null
        },
        setDeadzone: function(a, b) {
            "undefined" == typeof this.deadzone && (this.deadzone = new me.Rect(0, 0, 0, 0)), this.deadzone.pos.set(~~((this.width - a) / 2), ~~((this.height - b) / 2 - .25 * b)), this.deadzone.resize(a, b), this.updateTarget()
        },
        resize: function(a, b) {
            me.Renderable.prototype.resize.apply(this, [a, b]);
            var c = me.levelDirector.getCurrentLevel();
            return this.setBounds(0, 0, Math.max(a, c ? c.width : 0), Math.max(b, c ? c.height : 0)), this.setDeadzone(a / 6, b / 6), this.moveTo(0, 0), this.update(), me.event.publish(me.event.VIEWPORT_ONRESIZE, [this.width, this.height]), this
        },
        setBounds: function(a, b, c, d) {
            this.bounds.pos.set(a, b), this.bounds.resize(c, d), this.moveTo(this.pos.x, this.pos.y)
        },
        follow: function(a, b) {
            if (a instanceof me.Renderable) this.target = a.pos;
            else {
                if (!(a instanceof me.Vector2d || a instanceof me.Vector3d)) throw new me.Renderable.Error("invalid target for viewport.follow");
                this.target = a
            }
            this.follow_axis = "undefined" == typeof b ? this.AXIS.BOTH : b, this.updateTarget()
        },
        move: function(a, b) {
            this.moveTo(this.pos.x + a, this.pos.y + b)
        },
        moveTo: function(a, b) {
            this.pos.x = a.clamp(this.bounds.pos.x, this.bounds.width - this.width), this.pos.y = b.clamp(this.bounds.pos.y, this.bounds.height - this.height), me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos])
        },
        updateTarget: function() {
            var a = !1;
            if (this.target) switch (this.follow_axis) {
                case this.AXIS.NONE:
                    break;
                case this.AXIS.HORIZONTAL:
                    a = this._followH(this.target);
                    break;
                case this.AXIS.VERTICAL:
                    a = this._followV(this.target);
                    break;
                case this.AXIS.BOTH:
                    a = this._followH(this.target), a = this._followV(this.target) || a
            }
            return a
        },
        update: function(a) {
            var b = this.updateTarget();
            return this._shake.duration > 0 && (this._shake.duration -= a, this._shake.duration <= 0 ? (this._shake.duration = 0, this.offset.setZero(), "function" == typeof this._shake.onComplete && this._shake.onComplete()) : (this._shake.axis !== this.AXIS.BOTH && this._shake.axis !== this.AXIS.HORIZONTAL || (this.offset.x = (Math.random() - .5) * this._shake.intensity), this._shake.axis !== this.AXIS.BOTH && this._shake.axis !== this.AXIS.VERTICAL || (this.offset.y = (Math.random() - .5) * this._shake.intensity)), b = !0), b === !0 && me.event.publish(me.event.VIEWPORT_ONCHANGE, [this.pos]), null == this._fadeIn.tween && null == this._fadeOut.tween || (b = !0), b
        },
        shake: function(a, b, c, d, e) {
            0 !== this._shake.duration && e !== !0 || (this._shake.intensity = a, this._shake.duration = b, this._shake.axis = c || this.AXIS.BOTH, this._shake.onComplete = "function" == typeof d ? d : void 0)
        },
        fadeOut: function(a, b, c) {
            this._fadeOut.color = me.pool.pull("me.Color").copy(a), this._fadeOut.tween = me.pool.pull("me.Tween", this._fadeOut.color).to({
                alpha: 0
            }, b || 1e3).onComplete(c || null), this._fadeOut.tween.isPersistent = !0, this._fadeOut.tween.start()
        },
        fadeIn: function(a, b, c) {
            this._fadeIn.color = me.pool.pull("me.Color").copy(a);
            var d = this._fadeIn.color.alpha;
            this._fadeIn.color.alpha = 0, this._fadeIn.tween = me.pool.pull("me.Tween", this._fadeIn.color).to({
                alpha: d
            }, b || 1e3).onComplete(c || null), this._fadeIn.tween.isPersistent = !0, this._fadeIn.tween.start()
        },
        getWidth: function() {
            return this.width
        },
        getHeight: function() {
            return this.height
        },
        focusOn: function(a) {
            var b = a.getBounds();
            this.moveTo(a.pos.x + b.pos.x + b.width / 2, a.pos.y + b.pos.y + b.height / 2)
        },
        isVisible: function(a) {
            return a.overlaps(this)
        },
        localToWorld: function(a, b, c) {
            return c = c || new me.Vector2d, c.set(a, b).add(this.pos).sub(me.game.world.pos)
        },
        worldToLocal: function(a, b, c) {
            return c = c || new me.Vector2d, c.set(a, b).sub(this.pos).add(me.game.world.pos)
        },
        draw: function() {
            this._fadeIn.tween && (me.video.renderer.clearColor(this._fadeIn.color), 1 === this._fadeIn.color.alpha && (this._fadeIn.tween = null, me.pool.push(this._fadeIn.color), this._fadeIn.color = null)), this._fadeOut.tween && (me.video.renderer.clearColor(this._fadeOut.color), 0 === this._fadeOut.color.alpha && (this._fadeOut.tween = null, me.pool.push(this._fadeOut.color), this._fadeOut.color = null))
        }
    })
}(),
function() {
    me.GUI_Object = me.Sprite.extend({
        init: function(a, b, c) {
            this.isClickable = !0, this.holdThreshold = 250, this.isHoldable = !1, this.hover = !1, this.holdTimeout = null, this.updated = !1, this.released = !0, me.Sprite.prototype.init.apply(this, [a, b, c]), this.floating = !0
        },
        update: function() {
            return this.updated ? (this.released || (this.updated = !1), !0) : !1
        },
        clicked: function(a) {
            return (1 === a.which || me.device.touch) && this.isClickable ? (this.updated = !0, this.released = !1, this.isHoldable && (null !== this.holdTimeout && me.timer.clearTimeout(this.holdTimeout), this.holdTimeout = me.timer.setTimeout(this.hold.bind(this), this.holdThreshold, !1), this.released = !1), this.onClick(a)) : void 0
        },
        onClick: function() {
            return !1
        },
        enter: function(a) {
            return this.hover = !0, this.onOver(a)
        },
        onOver: function() {},
        leave: function(a) {
            return this.hover = !1, this.release.call(this, a), this.onOut(a)
        },
        onOut: function() {},
        release: function(a) {
            return this.released === !1 ? (this.released = !0, me.timer.clearTimeout(this.holdTimeout), this.onRelease(a)) : void 0
        },
        onRelease: function() {
            return !1
        },
        hold: function() {
            me.timer.clearTimeout(this.holdTimeout), this.released || this.onHold()
        },
        onHold: function() {},
        onActivateEvent: function() {
            me.input.registerPointerEvent("pointerdown", this, this.clicked.bind(this)), me.input.registerPointerEvent("pointerup", this, this.release.bind(this)), me.input.registerPointerEvent("pointercancel", this, this.release.bind(this)), me.input.registerPointerEvent("pointerenter", this, this.enter.bind(this)), me.input.registerPointerEvent("pointerleave", this, this.leave.bind(this));
        },
        onDeactivateEvent: function() {
            me.input.releasePointerEvent("pointerdown", this), me.input.releasePointerEvent("pointerup", this), me.input.releasePointerEvent("pointercancel", this), me.input.releasePointerEvent("pointerenter", this), me.input.releasePointerEvent("pointerleave", this), me.timer.clearTimeout(this.holdTimeout)
        }
    })
}(),
function() {
    var a = function(a, b) {
            this.removeChildNow(a, b)
        },
        b = 0;
    me.Container = me.Renderable.extend({
        init: function(a, b, c, d) {
            this.pendingSort = null, this._root = !1, me.Renderable.prototype.init.apply(this, [a || 0, b || 0, c || 1 / 0, d || 1 / 0]), this.children = [], this.sortOn = me.game.sortOn, this.autoSort = !0, this.autoDepth = !0, this.drawCount = 0, this.childBounds = this.getBounds().clone(), this.autoTransform = !1
        },
        addChild: function(a, b) {
            return a.ancestor instanceof me.Container ? a.ancestor.removeChildNow(a) : a.isRenderable && (a.GUID = me.utils.createGUID(a.id)), a.ancestor = this, this.children.push(a), "undefined" != typeof a.pos && ("number" == typeof b ? a.pos.z = b : this.autoDepth === !0 && (a.pos.z = this.children.length)), this.autoSort === !0 && this.sort(), "function" == typeof a.onActivateEvent && this.isAttachedToRoot() && a.onActivateEvent(), a
        },
        addChildAt: function(a, b) {
            if (b >= 0 && b < this.children.length) return a.ancestor instanceof me.Container ? a.ancestor.removeChildNow(a) : a.isRenderable && (a.GUID = me.utils.createGUID()), a.ancestor = this, this.children.splice(b, 0, a), "function" == typeof a.onActivateEvent && this.isAttachedToRoot() && a.onActivateEvent(), a;
            throw new me.Container.Error("Index (" + b + ") Out Of Bounds for addChildAt()")
        },
        forEach: function(a, b) {
            var c = this,
                d = 0,
                e = this.children.length;
            if ("function" != typeof a) throw new me.Container.Error(a + " is not a function");
            for (arguments.length > 1 && (c = b); e > d;) a.call(c, this.children[d], d, this.children), d++
        },
        swapChildren: function(a, b) {
            var c = this.getChildIndex(a),
                d = this.getChildIndex(b);
            if (-1 === c || -1 === d) throw new me.Container.Error(a + " Both the supplied childs must be a child of the caller " + this);
            var e = a.pos.z;
            a.pos.z = b.pos.z, b.pos.z = e, this.children[c] = b, this.children[d] = a
        },
        getChildAt: function(a) {
            if (a >= 0 && a < this.children.length) return this.children[a];
            throw new me.Container.Error("Index (" + a + ") Out Of Bounds for getChildAt()")
        },
        getChildIndex: function(a) {
            return this.children.indexOf(a)
        },
        hasChild: function(a) {
            return this === a.ancestor
        },
        getChildByProp: function(a, b) {
            function c(a, c) {
                var e = a[c];
                b instanceof RegExp && "string" == typeof e ? b.test(e) && d.push(a) : e === b && d.push(a)
            }
            for (var d = [], e = this.children.length - 1; e >= 0; e--) {
                var f = this.children[e];
                c(f, a), f instanceof me.Container && (d = d.concat(f.getChildByProp(a, b)))
            }
            return d
        },
        getChildByType: function(a) {
            for (var b = [], c = this.children.length - 1; c >= 0; c--) {
                var d = this.children[c];
                d instanceof a && b.push(d), d instanceof me.Container && (b = b.concat(d.getChildByType(a)))
            }
            return b
        },
        getChildByName: function(a) {
            return this.getChildByProp("name", a)
        },
        getChildByGUID: function(a) {
            var b = this.getChildByProp("GUID", a);
            return b.length > 0 ? b[0] : null
        },
        updateChildBounds: function() {
            this.childBounds.pos.set(1 / 0, 1 / 0), this.childBounds.resize(-(1 / 0), -(1 / 0));
            for (var a, b, c = this.children.length; c--, b = this.children[c];) b.isRenderable && (a = b instanceof me.Container ? b.childBounds : b.getBounds(), null !== a && this.childBounds.union(a));
            return this.childBounds
        },
        isAttachedToRoot: function() {
            if (this._root) return !0;
            for (var a = this.ancestor; a;) {
                if (a._root === !0) return !0;
                a = a.ancestor
            }
            return !1
        },
        updateBoundsPos: function(a, b) {
            me.Renderable.prototype.updateBoundsPos.apply(this, [a, b]), this._absPos.set(a, b), this.ancestor && this._absPos.add(this.ancestor._absPos);
            for (var c, d = this.children.length; d--, c = this.children[d];) c.isRenderable && c.updateBoundsPos(c.pos.x, c.pos.y);
            return this.getBounds()
        },
        onActivateEvent: function() {
            for (var a, b = this.children.length; b--, a = this.children[b];) "function" == typeof a.onActivateEvent && a.onActivateEvent()
        },
        removeChild: function(b, c) {
            if (!this.hasChild(b)) throw new me.Container.Error("Child is not mine.");
            a.defer(this, b, c)
        },
        removeChildNow: function(a, b) {
            if (this.hasChild(a) && this.getChildIndex(a) >= 0) {
                "function" == typeof a.onDeactivateEvent && a.onDeactivateEvent(), b || ("function" == typeof a.destroy && a.destroy(), me.pool.push(a));
                var c = this.getChildIndex(a);
                c >= 0 && (this.children.splice(c, 1), a.ancestor = void 0)
            }
        },
        setChildsProperty: function(a, b, c) {
            for (var d = this.children.length; d >= 0; d--) {
                var e = this.children[d];
                c === !0 && e instanceof me.Container && e.setChildsProperty(a, b, c), e[a] = b
            }
        },
        moveUp: function(a) {
            var b = this.getChildIndex(a);
            b - 1 >= 0 && this.swapChildren(a, this.getChildAt(b - 1))
        },
        moveDown: function(a) {
            var b = this.getChildIndex(a);
            b >= 0 && b + 1 < this.children.length && this.swapChildren(a, this.getChildAt(b + 1))
        },
        moveToTop: function(a) {
            var b = this.getChildIndex(a);
            b > 0 && (this.children.splice(0, 0, this.children.splice(b, 1)[0]), a.pos.z = this.children[1].pos.z + 1)
        },
        moveToBottom: function(a) {
            var b = this.getChildIndex(a);
            b >= 0 && b < this.children.length - 1 && (this.children.splice(this.children.length - 1, 0, this.children.splice(b, 1)[0]), a.pos.z = this.children[this.children.length - 2].pos.z - 1)
        },
        sort: function(a) {
            if (!this.pendingSort) {
                if (a === !0)
                    for (var b, c = this.children.length; c--, b = this.children[c];) b instanceof me.Container && b.sort(a);
                this.pendingSort = function(a) {
                    a.children.sort(a["_sort" + a.sortOn.toUpperCase()]), a.pendingSort = null, me.game.repaint()
                }.defer(this, this)
            }
        },
        onDeactivateEvent: function() {
            for (var a, b = this.children.length; b--, a = this.children[b];) "function" == typeof a.onDeactivateEvent && a.onDeactivateEvent()
        },
        _sortZ: function(a, b) {
            return b.pos && a.pos ? b.pos.z - a.pos.z : a.pos ? -(1 / 0) : 1 / 0
        },
        _sortReverseZ: function(a, b) {
            return a.pos && b.pos ? a.pos.z - b.pos.z : a.pos ? 1 / 0 : -(1 / 0)
        },
        _sortX: function(a, b) {
            if (!b.pos || !a.pos) return a.pos ? -(1 / 0) : 1 / 0;
            var c = b.pos.z - a.pos.z;
            return c ? c : b.pos.x - a.pos.x
        },
        _sortY: function(a, b) {
            if (!b.pos || !a.pos) return a.pos ? -(1 / 0) : 1 / 0;
            var c = b.pos.z - a.pos.z;
            return c ? c : b.pos.y - a.pos.y
        },
        destroy: function() {
            this.pendingSort && (clearTimeout(this.pendingSort), this.pendingSort = null);
            for (var a, b = this.children.length; b >= 0; a = this.children[--b]) a && !a.isPersistent && this.removeChildNow(a);
            this.currentTransform.identity()
        },
        update: function(a) {
            me.Renderable.prototype.update.apply(this, [a]);
            var c = !1,
                d = !1,
                e = me.state.isPaused(),
                f = me.game.viewport;
            this._absPos.setV(this.pos), this.ancestor && this._absPos.add(this.ancestor._absPos);
            for (var g, h = this.children.length; h--, g = this.children[h];) e && !g.updateWhenPaused || (g.isRenderable ? (d = b > 0 || g.floating, d && b++, g.inViewport = d || f.isVisible(g.getBounds()), c = (g.inViewport || g.alwaysUpdate) && g.update(a) || c, g._absPos.setV(this._absPos).add(g.pos), b > 0 && b--) : c = g.update(a) || c);
            return c
        },
        draw: function(a, b) {
            var c = !1,
                d = !1,
                e = 0,
                f = 0;
            this.drawCount = 0, a.save(), a.translate(this.pos.x, this.pos.y), this.currentTransform.isIdentity() || a.transform(this.currentTransform), a.setGlobalAlpha(a.globalAlpha() * this.getOpacity());
            for (var g, h = this.children.length; h--, g = this.children[h];)
                if (c = g.floating === !0, (g.inViewport || c) && g.isRenderable) {
                    if (d = !g.currentTransform.isIdentity(), c) a.save(), a.resetTransform();
                    else if (g.autoTransform === !0) {
                        var i = g.getBounds(),
                            j = g.anchorPoint;
                        e = i.width * j.x, f = i.height * j.y, d ? (a.save(), g.currentTransform.translate(e, f), a.transform(g.currentTransform)) : a.translate(e, f)
                    }
                    g.draw(a, b), c ? a.restore() : g.autoTransform === !0 && (d ? (g.currentTransform.translate(-e, -f), a.restore()) : a.translate(-e, -f)), this.drawCount++
                } a.restore()
        }
    }), me.Container.Error = me.Renderable.Error.extend({
        init: function(a) {
            me.Renderable.Error.prototype.init.apply(this, [a]), this.name = "me.Container.Error"
        }
    })
}(),
function() {
    me.Entity = me.Renderable.extend({
        init: function(a, b, c) {
            if (this.renderable = null, "number" != typeof c.width || "number" != typeof c.height) throw new me.Entity.Error("height and width properties are mandatory when passing settings parameters to an object entity");
            me.Renderable.prototype.init.apply(this, [a, b, c.width, c.height]), c.image && (this.renderable = new me.Sprite(0, 0, {
                image: c.image,
                framewidth: ~~(c.framewidth || c.width),
                frameheight: ~~(c.frameheight || c.height),
                spacing: ~~c.spacing,
                margin: ~~c.margin,
                anchorPoint: c.anchorPoint
            })), c.anchorPoint && this.anchorPoint.set(c.anchorPoint.x, c.anchorPoint.y), this.name = c.name || "", this.type = c.type || "", this.id = c.id || "", this.alive = !0;
            var d = Array.isArray(c.shapes) ? c.shapes : [new me.Rect(0, 0, this.width, this.height)];
            this.body ? this.body.init(this, d) : this.body = new me.Body(this, d);
            var e = this.body.updateBounds();
            if (0 === this.width && 0 === this.height && this.resize(e.width, e.height), "undefined" != typeof c.collisionMask && this.body.setCollisionMask(c.collisionMask), "undefined" != typeof c.collisionType) {
                if ("undefined" == typeof me.collision.types[c.collisionType]) throw new me.Entity.Error("Invalid value for the collisionType property");
                this.body.collisionType = me.collision.types[c.collisionType]
            }
            this.autoTransform = !1
        },
        distanceTo: function(a) {
            var b = this.getBounds(),
                c = a.getBounds(),
                d = b.pos.x + b.width / 2 - (c.pos.x + c.width / 2),
                e = b.pos.y + b.height / 2 - (c.pos.y + c.height / 2);
            return Math.sqrt(d * d + e * e)
        },
        distanceToPoint: function(a) {
            var b = this.getBounds(),
                c = b.pos.x + b.width / 2 - a.x,
                d = b.pos.y + b.height / 2 - a.y;
            return Math.sqrt(c * c + d * d)
        },
        angleTo: function(a) {
            var b = this.getBounds(),
                c = a.getBounds(),
                d = c.pos.x + c.width / 2 - (b.pos.x + b.width / 2),
                e = c.pos.y + c.height / 2 - (b.pos.y + b.height / 2);
            return Math.atan2(e, d)
        },
        angleToPoint: function(a) {
            var b = this.getBounds(),
                c = a.x - (b.pos.x + b.width / 2),
                d = a.y - (b.pos.y + b.height / 2);
            return Math.atan2(d, c)
        },
        update: function(a) {
            return this.renderable ? this.renderable.update(a) : me.Renderable.prototype.update.apply(this, [a])
        },
        updateBoundsPos: function(a, b) {
            var c = this.body.pos;
            return me.Renderable.prototype.updateBoundsPos.apply(this, [a + c.x, b + c.y]), this.getBounds()
        },
        onBodyUpdate: function(a, b, c) {
            var d = this.getBounds();
            d.pos.setV(this.pos).add(a), this.ancestor && d.pos.add(this.ancestor._absPos), d.resize(b, c)
        },
        draw: function(a) {
            var b = this.renderable;
            if (b instanceof me.Renderable) {
                var c = this.anchorPoint.x * this.body.width,
                    d = this.anchorPoint.y * this.body.height,
                    e = this.pos.x + this.body.pos.x + c,
                    f = this.pos.y + this.body.pos.y + d;
                if (a.translate(e, f), b.autoTransform !== !0 || b.currentTransform.isIdentity()) b.draw(a);
                else {
                    var g = b.getBounds(),
                        h = g.width * b.anchorPoint.x,
                        i = g.height * b.anchorPoint.y;
                    a.save(), a.translate(h, i), a.transform(b.currentTransform), a.translate(-h, -i), b.draw(a), a.restore()
                }
                a.translate(-e, -f)
            }
        },
        destroy: function() {
            this.renderable && (this.renderable.destroy.apply(this.renderable, arguments), this.renderable = null), this.body.destroy.apply(this.body, arguments), this.body = null, me.Renderable.prototype.destroy.apply(this, arguments)
        },
        onDeactivateEvent: function() {
            this.renderable && this.renderable.onDeactivateEvent && this.renderable.onDeactivateEvent()
        },
        onCollision: function() {
            return !1
        }
    }), me.Entity.Error = me.Renderable.Error.extend({
        init: function(a) {
            me.Renderable.Error.prototype.init.apply(this, [a]), this.name = "me.Entity.Error"
        }
    })
}(),
function() {
    me.ScreenObject = me.Object.extend({
            init: function() {},
            reset: function() {
                me.game.reset(), this.onResetEvent.apply(this, arguments)
            },
            destroy: function() {
                this.onDestroyEvent.apply(this, arguments)
            },
            onResetEvent: function() {},
            onDestroyEvent: function() {}
        }),
        function() {
            var a = 0,
                b = 1e3 / 60,
                c = me.agent.prefixed("requestAnimationFrame"),
                d = me.agent.prefixed("cancelAnimationFrame") || me.agent.prefixed("cancelRequestAnimationFrame");
            c && d || (c = function(c) {
                var d = window.performance.now(),
                    e = Math.max(0, b - (d - a)),
                    f = window.setTimeout(function() {
                        c(d + e)
                    }, e);
                return a = d + e, f
            }, d = function(a) {
                window.clearTimeout(a)
            }), window.requestAnimationFrame = c, window.cancelAnimationFrame = d
        }(), me.state = function() {
            function a() {
                -1 === i && -1 !== h && (me.timer.reset(), i = window.requestAnimationFrame(d))
            }

            function b() {
                j && -1 !== h && (me.timer.reset(), j = !1)
            }

            function c() {
                j = !0
            }

            function d(a) {
                me.game.update(a), me.game.draw(), -1 !== i && (i = window.requestAnimationFrame(d))
            }

            function e() {
                window.cancelAnimationFrame(i), i = -1
            }

            function f(b) {
                e(), k[h] && k[h].screen.destroy(), k[b] && (h = b, k[h].screen.reset.apply(k[h].screen, n), a(), m && m(), me.game.repaint())
            }
            var g = {},
                h = -1,
                i = -1,
                j = !1,
                k = {},
                l = {
                    color: "",
                    duration: 0
                },
                m = null,
                n = null,
                o = 0;
            return g.LOADING = 0, g.MENU = 1, g.READY = 2, g.PLAY = 3, g.GAMEOVER = 4, g.GAME_END = 5, g.SCORE = 6, g.CREDITS = 7, g.SETTINGS = 8, g.USER = 100, g.onPause = null, g.onResume = null, g.onStop = null, g.onRestart = null, g.init = function() {
                g.set(g.LOADING, new me.DefaultLoadingScreen)
            }, g.stop = function(a) {
                h !== g.LOADING && g.isRunning() && (e(), a === !0 && me.audio.pauseTrack(), o = window.performance.now(), me.event.publish(me.event.STATE_STOP), "function" == typeof g.onStop && g.onStop())
            }, g.pause = function(a) {
                h === g.LOADING || g.isPaused() || (c(), a === !0 && me.audio.pauseTrack(), o = window.performance.now(), me.event.publish(me.event.STATE_PAUSE), "function" == typeof g.onPause && g.onPause())
            }, g.restart = function(b) {
                g.isRunning() || (a(), b === !0 && me.audio.resumeTrack(), o = window.performance.now() - o, me.game.repaint(), me.event.publish(me.event.STATE_RESTART, [o]), "function" == typeof g.onRestart && g.onRestart())
            }, g.resume = function(a) {
                g.isPaused() && (b(), a === !0 && me.audio.resumeTrack(), o = window.performance.now() - o, me.event.publish(me.event.STATE_RESUME, [o]), "function" == typeof g.onResume && g.onResume())
            }, g.isRunning = function() {
                return -1 !== i
            }, g.isPaused = function() {
                return j
            }, g.set = function(a, b) {
                k[a] = {}, k[a].screen = b, k[a].transition = !0
            }, g.current = function() {
                return k[h].screen
            }, g.transition = function(a, b, c) {
                "fade" === a && (l.color = b, l.duration = c)
            }, g.setTransition = function(a, b) {
                k[a].transition = b
            }, g.change = function(a) {
                if ("undefined" == typeof k[a]) throw new me.Error("Undefined ScreenObject for state '" + a + "'");
                g.isCurrent(a) || (n = null, arguments.length > 1 && (n = Array.prototype.slice.call(arguments, 1)), l.duration && k[a].transition ? (m = function() {
                    me.game.viewport.fadeOut(l.color, l.duration)
                }, me.game.viewport.fadeIn(l.color, l.duration, function() {
                    f.defer(this, a)
                })) : f.defer(this, a))
            }, g.isCurrent = function(a) {
                return h === a
            }, g
        }()
}(),
function() {
    var a = me.Renderable.extend({
            init: function(a, b, c) {
                me.Renderable.prototype.init.apply(this, [a.x, a.y, b, c]), this.invalidate = !1, this.barHeight = 4, this.progress = 0
            },
            onProgressUpdate: function(a) {
                this.progress = ~~(a * this.width), this.invalidate = !0
            },
            update: function() {
                return this.invalidate === !0 ? (this.invalidate = !1, !0) : !1
            },
            draw: function(a) {
                a.setColor("black"), a.fillRect(0, this.height / 2 - this.barHeight / 2, this.width, this.barHeight), a.setColor("#fff"), a.fillRect(2, this.height / 2 - this.barHeight / 2, this.progress, this.barHeight), a.setColor("white")
            }
        }),
        b = me.Renderable.extend({
            init: function(a, b, c) {
                me.Renderable.prototype.init.apply(this, [b, c, 100, 85]), this.iconCanvas = a;
                var d = me.video.renderer.getContext2d(this.iconCanvas);
                d.translate(this.pos.x, this.pos.y), d.beginPath(), d.moveTo(.0, 0.0), d.bezierCurveTo(0.0, 0.0, 0.0, 0.0, 0.0, 0.0), d.bezierCurveTo(0.0, 0.0, 0.0, 0.0, 0, 0.0), d.lineTo(0, 0.0), d.bezierCurveTo(0.0, 0.0, 0.0, 0.0, 0.0, 0.0), d.bezierCurveTo(0.0, 0.0, 0.0, 0.0, .0, 0.0), d.lineTo(.0, 0.0), d.lineTo(.0, 0.0), d.closePath(), d.fillStyle = "rgb(255, 255, 255)", d.fill(), d.beginPath(), d.moveTo(0, 0), d.bezierCurveTo(0.0, 0.0, 0.0, 0.0, 0.0, 0.0), d.bezierCurveTo(0.0, 0, 0.0, 0.0, 0.0, 0.0), d.bezierCurveTo(-.0, 0.0, 0.0, 0.0, 0.0, 0.0), d.bezierCurveTo(0.0, 0.0, 0.00, -.0, 0, 0), d.lineTo(0, 0), d.closePath(), d.lineWidth = 5.3, d.strokeStyle = "rgb(255, 255, 255)", d.lineJoin = "miter", d.miterLimit = 4, d.stroke()
            },
            draw: function(a) {
                a.drawImage(this.iconCanvas, 0, 0)
            }
        }),
        c = me.Renderable.extend({
            init: function(a, b) {
                me.Renderable.prototype.init.apply(this, [0, 0, a, b]), this.logo1 = new me.Font("century gothic", 32, "white", "middle"), this.logo2 = new me.Font("century gothic", 32, "#000", "middle"), this.logo2.bold(), this.logo1.textBaseline = this.logo2.textBaseline = "alphabetic"
            },
            draw: function(a) {
                var b = this.logo1.measureText(a, "En").width,
                    c = (this.width - b - this.logo2.measureText(a, "JS").width) / 2,
                    d = this.height / 2 + this.logo2.measureText(a, "En").height;
                this.logo1.draw(a, "En", c, d), c += b, this.logo2.draw(a, "teni", c, d)
            }
        });
    me.DefaultLoadingScreen = me.ScreenObject.extend({
        onResetEvent: function() {
            me.game.world.addChild(new me.ColorLayer("background", "#0099cc", 0), 0);
            var d = new a(new me.Vector2d, me.video.renderer.getWidth(), me.video.renderer.getHeight());
            this.loaderHdlr = me.event.subscribe(me.event.LOADER_PROGRESS, d.onProgressUpdate.bind(d)), this.resizeHdlr = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, d.resize.bind(d)), me.game.world.addChild(d, 1), this.iconCanvas = me.video.createCanvas(me.game.viewport.width, me.game.viewport.height, !1);
            var e = new b(this.iconCanvas, (me.video.renderer.getWidth() - 100) / 2, me.video.renderer.getHeight() / 2 - d.barHeight / 2 - 90);
            me.game.world.addChild(e, 1), me.game.world.addChild(new c(me.video.renderer.getWidth(), me.video.renderer.getHeight()), 1)
        },
        onDestroyEvent: function() {
            me.event.unsubscribe(this.loaderHdlr), me.event.unsubscribe(this.resizeHdlr), this.loaderHdlr = this.resizeHdlr = null
        }
    })
}(),
function() {
    me.loader = function() {
        function a() {
            l === k ? f.onload ? (clearTimeout(m), setTimeout(function() {
                f.onload(), me.event.publish(me.event.LOADER_COMPLETE)
            }, 300)) : console.error("no load callback defined") : m = setTimeout(a, 100)
        }

        function b(a, b, c) {
            g[a.name] = new Image, g[a.name].onload = b, g[a.name].onerror = c, g[a.name].src = a.src + f.nocache
        }

        function c(a, b, c) {
            function d(b) {
                h[a.name] = b, "tmx" === a.type && me.levelDirector.addTMXLevel(a.name)
            }
            if (a.data) return d(a.data), void b();
            var e = new XMLHttpRequest,
                g = me.utils.getFileExtension(a.src);
            e.overrideMimeType && ("json" === g ? e.overrideMimeType("application/json") : e.overrideMimeType("text/xml")), e.open("GET", a.src + f.nocache, !0), e.ontimeout = c, e.onreadystatechange = function() {
                if (4 === e.readyState)
                    if (200 === e.status || 0 === e.status && e.responseText) {
                        var a = null;
                        switch (g) {
                            case "xml":
                            case "tmx":
                            case "tsx":
                                if (me.device.ua.match(/msie/i) || !e.responseXML) {
                                    if (!window.DOMParser) throw new f.Error("XML file format loading not supported, use the JSON file format instead");
                                    a = (new DOMParser).parseFromString(e.responseText, "text/xml")
                                } else a = e.responseXML;
                                var h = me.TMXUtils.parse(a);
                                switch (g) {
                                    case "tmx":
                                        a = h.map;
                                        break;
                                    case "tsx":
                                        a = h.tilesets[0]
                                }
                                break;
                            case "json":
                                a = JSON.parse(e.responseText);
                                break;
                            default:
                                throw new f.Error("TMX file format " + g + "not supported !")
                        }
                        d(a), b()
                    } else c()
            }, e.send(null)
        }

        function d(a, b, c) {
            var d = new XMLHttpRequest;
            d.overrideMimeType && d.overrideMimeType("application/json"), d.open("GET", a.src + f.nocache, !0), d.ontimeout = c, d.onreadystatechange = function() {
                4 === d.readyState && (200 === d.status || 0 === d.status && d.responseText ? (j[a.name] = JSON.parse(d.responseText), b()) : c())
            }, d.send(null)
        }

        function e(a, b, c) {
            var d = new XMLHttpRequest;
            d.open("GET", a.src + f.nocache, !0), d.responseType = "arraybuffer", d.onerror = c, d.onload = function() {
                var c = d.response;
                if (c) {
                    for (var e = new Uint8Array(c), f = [], g = 0; g < e.byteLength; g++) f[g] = String.fromCharCode(e[g]);
                    i[a.name] = f.join(""), b()
                }
            }, d.send()
        }
        var f = {},
            g = {},
            h = {},
            i = {},
            j = {},
            k = 0,
            l = 0,
            m = 0;
        return f.nocache = "", f.onload = void 0, f.onProgress = void 0, f.Error = me.Error.extend({
            init: function(a) {
                me.Error.prototype.init.apply(this, [a]), this.name = "me.loader.Error"
            }
        }), f.onResourceLoaded = function(a) {
            l++;
            var b = f.getLoadProgress();
            f.onProgress && f.onProgress(b, a), me.event.publish(me.event.LOADER_PROGRESS, [b, a])
        }, f.onLoadingError = function(a) {
            throw new f.Error("Failed loading resource " + a.src)
        }, f.setNocache = function(a) {
            f.nocache = a ? "?" + ~~(1e7 * Math.random()) : ""
        }, f.preload = function(b, c, d) {
            for (var e = 0; e < b.length; e++) k += f.load(b[e], f.onResourceLoaded.bind(f, b[e]), f.onLoadingError.bind(f, b[e]));
            "undefined" != typeof c && (f.onload = c), d !== !1 && me.state.change(me.state.LOADING), a()
        }, f.load = function(a, g, h) {
            switch (a.type) {
                case "binary":
                    return e.call(this, a, g, h), 1;
                case "image":
                    return b.call(this, a, g, h), 1;
                case "json":
                    return d.call(this, a, g, h), 1;
                case "tmx":
                case "tsx":
                    return c.call(this, a, g, h), 1;
                case "audio":
                    return me.audio.load(a, !!a.stream, g, h), 1;
                default:
                    throw new f.Error("load : unknown or invalid resource type : " + a.type)
            }
        }, f.unload = function(a) {
            switch (a.type) {
                case "binary":
                    return a.name in i ? (delete i[a.name], !0) : !1;
                case "image":
                    return a.name in g ? ("function" == typeof g[a.name].dispose && g[a.name].dispose(), delete g[a.name], !0) : !1;
                case "json":
                    return a.name in j ? (delete j[a.name], !0) : !1;
                case "tmx":
                case "tsx":
                    return a.name in h ? (delete h[a.name], !0) : !1;
                case "audio":
                    return me.audio.unload(a.name);
                default:
                    throw new f.Error("unload : unknown or invalid resource type : " + a.type)
            }
        }, f.unloadAll = function() {
            var a;
            for (a in i) i.hasOwnProperty(a) && f.unload({
                name: a,
                type: "binary"
            });
            for (a in g) g.hasOwnProperty(a) && f.unload({
                name: a,
                type: "image"
            });
            for (a in h) h.hasOwnProperty(a) && f.unload({
                name: a,
                type: "tmx"
            });
            for (a in j) j.hasOwnProperty(a) && f.unload({
                name: a,
                type: "json"
            });
            me.audio.unloadAll()
        }, f.getTMX = function(a) {
            return a = "" + a, a in h ? h[a] : null
        }, f.getBinary = function(a) {
            return a = "" + a, a in i ? i[a] : null
        }, f.getImage = function(a) {
            return a = "" + a, a in g ? g[a] : null
        }, f.getJSON = function(a) {
            return a = "" + a, a in j ? j[a] : null
        }, f.getLoadProgress = function() {
            return l / k
        }, f
    }()
}(),
function() {
    var a = ["ex", "em", "pt", "px"],
        b = [12, 24, .75, 1];
    me.Font = me.Renderable.extend({
        init: function(a, b, c, d) {
            this.fontSize = new me.Vector2d, this.fillStyle = (new me.Color).copy(c), this.strokeStyle = new me.Color(0, 0, 0), this.lineWidth = 1, this.textAlign = d || "left", this.textBaseline = "top", this.lineHeight = 1, me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]), this.setFont(a, b, c, d), this.gid || (this.gid = me.utils.createGUID())
        },
        bold: function() {
            this.font = "bold " + this.font
        },
        italic: function() {
            this.font = "italic " + this.font
        },
        setFont: function(c, d, e, f) {
            var g = c.split(",").map(function(a) {
                return a = a.trim(), /(^".*"$)|(^'.*'$)/.test(a) ? a : '"' + a + '"'
            });
            if ("number" == typeof d) this.fontSize.y = d, d += "px";
            else {
                var h = d.match(/([-+]?[\d.]*)(.*)/);
                this.fontSize.y = parseFloat(h[1]), h[2] ? this.fontSize.y *= b[a.indexOf(h[2])] : d += "px"
            }
            this.height = this.fontSize.y, this.font = d + " " + g.join(","), "undefined" != typeof e && this.fillStyle.copy(e), f && (this.textAlign = f)
        },
        measureText: function(a, b) {
            var c = a.fontContext2D;
            c.font = this.font, c.fillStyle = this.fillStyle.toRGBA(), c.textAlign = this.textAlign, c.textBaseline = this.textBaseline, this.height = this.width = 0;
            for (var d = ("" + b).split("\n"), e = 0; e < d.length; e++) this.width = Math.max(c.measureText(d[e].trimRight()).width, this.width), this.height += this.fontSize.y * this.lineHeight;
            return {
                width: this.width,
                height: this.height
            }
        },
        draw: function(a, b, c, d) {
            var e = a.globalAlpha();
            a.setGlobalAlpha(e * this.getOpacity()), a.drawFont(this._drawFont(a.fontContext2D, b, ~~c, ~~d, !1)), a.setGlobalAlpha(e)
        },
        drawStroke: function(a, b, c, d) {
            var e = a.globalAlpha();
            a.setGlobalAlpha(e * this.getOpacity()), a.drawFont(this._drawFont(a.fontContext2D, b, ~~c, ~~d, !0)), a.setGlobalAlpha(e)
        },
        _drawFont: function(a, b, c, d, e) {
            a.font = this.font, a.fillStyle = this.fillStyle.toRGBA(), e && (a.strokeStyle = this.strokeStyle.toRGBA(), a.lineWidth = this.lineWidth), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline;
            for (var f = ("" + b).split("\n"), g = "", h = 0, i = d, j = this.fontSize.y * this.lineHeight, k = 0; k < f.length; k++) g = f[k].trimRight(), h = Math.max(h, a.measureText(g).width), a[e ? "strokeText" : "fillText"](g, c, d), d += j;
            var l = "right" === this.textAlign ? c - h : "center" === this.textAlign ? c - ~~(h / 2) : c;
            return i = 0 === this.textBaseline.search(/^(top|hanging)$/) ? i : "middle" === this.textBaseline ? i - ~~(j / 2) : i - j, this.getBounds().setShape(~~l, ~~i, ~~(h + .5), ~~(f.length * j + .5))
        }
    })
}(),
function() {
    var a = function(a, b) {
        for (var c = b.split(""), d = 0, e = null, f = 0; f < c.length; f++) {
            var g = c[f].charCodeAt(0),
                h = a.bitmapFontData.glyphs[g],
                i = e && e.kerning ? e.getKerning(g) : 0;
            d += (h.xadvance + i) * a.fontScale.x, e = h
        }
        return d
    };
    me.BitmapFont = me.Renderable.extend({
        init: function(a, b, c, d, e) {
            this.sSize = me.pool.pull("me.Vector2d", 0, 0), this.fontImage = b, this.bitmapFontData = new me.BitmapFontData(a), this.fontScale = me.pool.pull("me.Vector2d", 1, 1), this.charCount = 0, me.Renderable.prototype.init.apply(this, [0, 0, 0, 0, 0, 0]), this.textAlign = d || "left", this.textBaseline = e || "top", this.lineHeight = 1, c && this.resize(c)
        },
        set: function(a, b) {
            this.textAlign = a, b && this.resize(b)
        },
        resize: function(a) {
            this.fontScale.set(a, a)
        },
        measureText: function(b) {
            for (var c = ("" + b).split("\n"), d = 0, e = 0, f = this.bitmapFontData.capHeight * this.lineHeight, g = 0; g < c.length; g++) d = Math.max(a(this, c[g]), d), e += f;
            return {
                width: d,
                height: e * this.fontScale.y
            }
        },
        draw: function(b, c, d, e) {
            var f = ("" + c).split("\n"),
                g = d,
                h = this.bitmapFontData.capHeight * this.lineHeight * this.fontScale.y,
                i = b.globalAlpha();
            b.setGlobalAlpha(i * this.getOpacity()), this.pos.set(d, e, this.pos.z);
            for (var j = 0; j < f.length; j++) {
                d = g;
                var k = f[j].trimRight(),
                    l = a(this, k);
                switch (this.textAlign) {
                    case "right":
                        d -= l;
                        break;
                    case "center":
                        d -= .5 * l
                }
                switch (this.textBaseline) {
                    case "middle":
                        e -= .5 * h;
                        break;
                    case "ideographic":
                    case "alphabetic":
                    case "bottom":
                        e -= h
                }
                for (var m = null, n = 0, o = k.length; o > n; n++) {
                    var p = k.charCodeAt(n),
                        q = this.bitmapFontData.glyphs[p],
                        r = m && m.kerning ? m.getKerning(p) : 0;
                    0 !== q.width && 0 !== q.height && b.drawImage(this.fontImage, q.src.x, q.src.y, q.width, q.height, d + q.offset.x, e + q.offset.y * this.fontScale.y, q.width * this.fontScale.x, q.height * this.fontScale.y), d += (q.xadvance + r) * this.fontScale.x, m = q
                }
                e += h
            }
            b.setGlobalAlpha(i)
        }
    })
}(), me.BitmapFontData = me.Object.extend({
    init: function(a) {
        this.padTop = 0, this.padRight = 0, this.padBottom = 0, this.padLeft = 0, this.lineHeight = 0, this.capHeight = 1, this.descent = 0, this.scale = new me.Vector2d, this.glyphs = {}, this.xChars = ["x", "e", "a", "o", "n", "s", "r", "c", "u", "m", "v", "w", "z"], this.capChars = ["M", "N", "B", "D", "C", "E", "F", "K", "A", "G", "H", "I", "J", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], this.parse(a)
    },
    _createSpaceGlyph: function() {
        var a = " ".charCodeAt(0),
            b = this.glyphs[a];
        b || (b = me.pool.pull("me.Glyph"), b.id = a, b.xadvance = this._getFirstGlyph().xadvance, this.glyphs[a] = b)
    },
    _getFirstGlyph: function() {
        for (var a = Object.keys(this.glyphs), b = 0; b < a.length; b++)
            if (a[b] > 32) return this.glyphs[a[b]];
        return null
    },
    _getValueFromPair: function(a, b) {
        var c = a.match(b);
        if (!c) throw "Could not find pattern " + b + " in string: " + a;
        return c[0].split("=")[1]
    },
    parse: function(a) {
        if (!a) throw "File containing font data was empty, cannot load the bitmap font.";
        var b = a.split(/\r\n|\n/),
            c = a.match(/padding\=\d+,\d+,\d+,\d+/g);
        if (!c) throw "Padding not found in first line";
        var d = c[0].split("=")[1].split(",");
        this.padTop = parseFloat(d[0]), this.padLeft = parseFloat(d[1]), this.padBottom = parseFloat(d[2]), this.padRight = parseFloat(d[3]), this.lineHeight = parseFloat(this._getValueFromPair(b[1], /lineHeight\=\d+/g));
        for (var e = parseFloat(this._getValueFromPair(b[1], /base\=\d+/g)), f = this.padTop + this.padBottom, g = null, h = 4; h < b.length; h++) {
            var i = b[h],
                j = i.split(/=|\s+/);
            if (i && !/^kernings/.test(i))
                if (/^kerning\s/.test(i)) {
                    var k = parseFloat(j[2]),
                        l = parseFloat(j[4]),
                        m = parseFloat(j[6]);
                    g = this.glyphs[k], null !== g && "undefined" != typeof g && g.setKerning(l, m)
                } else {
                    g = me.pool.pull("me.Glyph");
                    var n = parseFloat(j[2]);
                    g.id = n, g.src.set(parseFloat(j[4]), parseFloat(j[6])), g.width = parseFloat(j[8]), g.height = parseFloat(j[10]);
                    var o = parseFloat(j[14]);
                    g.offset.set(parseFloat(j[12]), o), g.xadvance = parseFloat(j[16]), g.width > 0 && g.height > 0 && (this.descent = Math.min(e + g.yoffset, this.descent)), this.glyphs[n] = g
                }
        }
        this.descent += this.padBottom, this._createSpaceGlyph();
        var p = null;
        for (h = 0; h < this.xChars.length; h++) {
            var q = this.xChars[h];
            if (p = this.glyphs[q.charCodeAt(0)]) break
        }
        p || (p = this._getFirstGlyph());
        var r = null;
        for (h = 0; h < this.capChars.length; h++) {
            var s = this.capChars[h];
            if (r = this.glyphs[s.charCodeAt(0)]) break
        }
        if (r) this.capHeight = r.height;
        else
            for (var t in this.glyphs)
                if (this.glyphs.hasOwnProperty(t)) {
                    if (g = this.glyphs[t], 0 === g.height || 0 === g.width) continue;
                    this.capHeight = Math.max(this.capHeight, g.height)
                } this.capHeight -= f
    }
}),
function() {
    var a = 9,
        b = 1 << a;
    me.Glyph = me.Object.extend({
        init: function() {
            this.src = new me.Vector2d, this.offset = new me.Vector2d, this.onResetEvent()
        },
        onResetEvent: function() {
            this.id = 0, this.src.set(0, 0), this.width = 0, this.height = 0, this.u = 0, this.v = 0, this.u2 = 0, this.v2 = 0, this.offset.set(0, 0), this.xadvance = 0, this.fixedWidth = !1
        },
        getKerning: function(c) {
            if (this.kerning) {
                var d = this.kerning[c >>> a];
                if (d) return d[c & b - 1] || 0
            }
            return 0
        },
        setKerning: function(c, d) {
            this.kerning || (this.kerning = {});
            var e = this.kerning[c >>> a];
            "undefined" == typeof e && (this.kerning[c >>> a] = {}, e = this.kerning[c >>> a]), e[c & b - 1] = d
        }
    })
}(),
function() {
    me.audio = function() {
        function a(a, d) {
            if (e++ > 3) {
                var f = "melonJS: failed loading " + a;
                if (me.sys.stopOnAudioError !== !1) throw new b.Error(f);
                me.audio.disable(), d && d(), console.log(f + ", disabling audio")
            } else c[a].load()
        }
        var b = {},
            c = {},
            d = null,
            e = 0;
        return b.Error = me.Error.extend({
            init: function(a) {
                me.Error.prototype.init.apply(this, [a]), this.name = "me.audio.Error"
            }
        }), b.init = function(a) {
            if (!me.initialized) throw new b.Error("me.audio.init() called before engine initialization.");
            return a = "string" == typeof a ? a : "mp3", this.audioFormats = a.split(","), !Howler.noAudio
        }, b.enable = function() {
            this.unmuteAll()
        }, b.disable = function() {
            this.muteAll()
        }, b.load = function(d, f, g, h) {
            var i = [];
            if ("undefined" == typeof this.audioFormats || 0 === this.audioFormats.length) throw new b.Error("target audio extension(s) should be set through me.audio.init() before calling the preloader.");
            for (var j = 0; j < this.audioFormats.length; j++) i.push(d.src + d.name + "." + this.audioFormats[j] + me.loader.nocache);
            return c[d.name] = new Howl({
                src: i,
                volume: Howler.volume(),
                html5: f === !0,
                onloaderror: function() {
                    a.call(me.audio, d.name, h)
                },
                onload: function() {
                    e = 0, g && g()
                }
            }), 1
        }, b.play = function(a, b, d, e) {
            var f = c[a];
            if (f && "undefined" != typeof f) {
                var g = f.play();
                return "boolean" == typeof b && f.loop(b, g), f.volume("number" == typeof e ? e.clamp(0, 1) : Howler.volume(), g), "function" == typeof d && (b === !0 ? f.on("end", d, g) : f.once("end", d, g)), g
            }
        }, b.fade = function(a, b, d, e, f) {
            var g = c[a];
            g && "undefined" != typeof g && g.fade(b, d, e, f)
        }, b.rate = function(a, b, d) {
            var e = c[a];
            if (e && "undefined" != typeof e) {
                var f = [];
                return "undefined" != typeof b && (f[f.length] = b), "undefined" != typeof d && (f[f.length] = d), e.rate.apply(e, f)
            }
        }, b.stop = function(a, b) {
            var d = c[a];
            d && "undefined" != typeof d && (d.stop(b), d.off("end", b))
        }, b.pause = function(a, b) {
            var d = c[a];
            d && "undefined" != typeof d && d.pause(b)
        }, b.resume = function(a, b) {
            var d = c[a];
            d && "undefined" != typeof d && d.play(b)
        }, b.playTrack = function(a, b) {
            return d = a, me.audio.play(d, !0, null, b)
        }, b.stopTrack = function() {
            null !== d && (c[d].stop(), d = null)
        }, b.pauseTrack = function() {
            null !== d && c[d].pause()
        }, b.resumeTrack = function() {
            null !== d && c[d].play()
        }, b.getCurrentTrack = function() {
            return d
        }, b.setVolume = function(a) {
            Howler.volume(a)
        }, b.getVolume = function() {
            return Howler.volume()
        }, b.mute = function(a, b, d) {
            d = "undefined" == typeof d ? !0 : !!d;
            var e = c[a];
            e && "undefined" != typeof e && e.mute(d, b)
        }, b.unmute = function(a, c) {
            b.mute(a, c, !1)
        }, b.muteAll = function() {
            Howler.mute(!0)
        }, b.unmuteAll = function() {
            Howler.mute(!1)
        }, b.unload = function(a) {
            return a in c ? (c[a].unload(), "function" == typeof c[a].dispose && c[a].dispose(), delete c[a], !0) : !1
        }, b.unloadAll = function() {
            for (var a in c) c.hasOwnProperty(a) && b.unload(a)
        }, b
    }()
}(),
function() {
    me.video = function() {
        function a(a, b, c, d) {
            try {
                return new me.WebGLRenderer(a, b, c, d)
            } catch (e) {
                return new me.CanvasRenderer(a, b, c, d)
            }
        }
        var b = {},
            c = null,
            d = 0,
            e = 1,
            f = 0,
            g = 0,
            h = 1 / 0,
            i = 1 / 0,
            j = {
                wrapper: void 0,
                renderer: 0,
                doubleBuffering: !1,
                autoScale: !1,
                scale: 1,
                scaleMethod: "fit",
                transparent: !1,
                antiAlias: !1,
                subPixel: !1,
                verbose: !1
            };
        return b.Error = me.Error.extend({
            init: function(a) {
                me.Error.prototype.init.apply(this, [a]), this.name = "me.video.Error"
            }
        }), b.CANVAS = 0, b.WEBGL = 1, b.AUTO = 2, b.init = function(d, h, i) {
            if (!me.initialized) throw new b.Error("me.video.init() called before engine initialization.");
            j = Object.assign(j, i || {}), j.doubleBuffering = !!j.doubleBuffering, j.autoScale = "auto" === j.scale || !1, 0 !== j.scaleMethod.search(/^(fill-(min|max)|fit|flex(-(width|height))?|stretch)$/) && (j.scaleMethod = "fit"), j.transparent = !!j.transparent, me.game.HASH.webgl === !0 && (j.renderer = b.WEBGL), j.scale = j.autoScale ? 1 : +j.scale || 1, me.sys.scale = new me.Vector2d(j.scale, j.scale), (j.autoScale || 1 !== j.scale) && (j.doubleBuffering = !0), e = d / h, f = d, g = h;
            var k = d * me.sys.scale.x,
                l = h * me.sys.scale.y;
            if (j.zoomX = k, j.zoomY = l, window.addEventListener("resize", throttle(100, !1, function(a) {
                    me.event.publish(me.event.WINDOW_ONRESIZE, [a])
                }), !1), window.addEventListener("orientationchange", function(a) {
                    me.event.publish(me.event.WINDOW_ONORIENTATION_CHANGE, [a])
                }, !1), me.event.subscribe(me.event.WINDOW_ONRESIZE, me.video.onresize.bind(me.video)), me.event.subscribe(me.event.WINDOW_ONORIENTATION_CHANGE, me.video.onresize.bind(me.video)), c = me.device.ejecta === !0 ? document.getElementById("canvas") : b.createCanvas(k, l, !0), i.wrapper && (j.wrapper = document.getElementById(i.wrapper)), j.wrapper || (j.wrapper = document.body), j.wrapper.appendChild(c), !c.getContext) return !1;
            switch (j.renderer) {
                case b.WEBGL:
                    this.renderer = new me.WebGLRenderer(c, d, h, j);
                    break;
                case b.AUTO:
                    this.renderer = a(c, d, h, j);
                    break;
                default:
                    this.renderer = new me.CanvasRenderer(c, d, h, j)
            }
            var m = me.device.getPixelRatio();
            if (m > 1 && (c.style.width = c.width / m + "px",
                    c.style.height = c.height / m + "px"), window.getComputedStyle) {
                var n = window.getComputedStyle(c, null);
                me.video.setMaxSize(parseInt(n.maxWidth, 10), parseInt(n.maxHeight, 10))
            }
            return me.game.init(), me.video.onresize(), !0
        }, b.getPos = function(a) {
            return a = a || this.renderer.getScreenCanvas(), a.getBoundingClientRect ? a.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }, b.setMaxSize = function(a, b) {
            h = a || 1 / 0, i = b || 1 / 0, this.onresize.defer(this)
        }, b.createCanvas = function(a, d, e) {
            if (0 === a || 0 === d) throw new b.Error("width or height was zero, Canvas could not be initialized !");
            var f = document.createElement("canvas");
            return e === !0 && me.device.cocoon && me.device.android2 !== !0 && (f.screencanvas = !0), f.width = a || c.width, f.height = d || c.height, f
        }, b.getWrapper = function() {
            return j.wrapper
        }, b.onresize = function() {
            var a = 1,
                b = 1;
            if ("undefined" != typeof window.orientation ? me.device.orientation = window.orientation : me.device.orientation = window.outerWidth > window.outerHeight ? 90 : 0, j.autoScale) {
                var c, k, l = me.video.renderer.getScreenCanvas().parentNode;
                "undefined" != typeof l && (c = l.width, k = l.height);
                var m = Math.min(h, c || window.innerWidth),
                    n = Math.min(i, k || window.innerHeight),
                    o = m / n,
                    p = 1 / 0,
                    q = 1 / 0;
                "fill-min" === j.scaleMethod && o > e || "fill-max" === j.scaleMethod && e > o || "flex-width" === j.scaleMethod ? (p = Math.min(h, g * o), a = b = m / p, p = ~~(p + .5), this.renderer.resize(p, g), me.game.viewport.resize(p, g), me.game.world.updateChildBounds()) : "fill-min" === j.scaleMethod && e > o || "fill-max" === j.scaleMethod && o > e || "flex-height" === j.scaleMethod ? (q = Math.min(i, f * (n / m)), a = b = n / q, q = ~~(q + .5), this.renderer.resize(f, q), me.game.viewport.resize(f, q), me.game.world.updateChildBounds()) : "flex" === j.scaleMethod ? (this.renderer.resize(m, n), me.game.viewport.resize(m, n), me.game.world.updateChildBounds()) : "stretch" === j.scaleMethod ? (a = m / f, b = n / g) : a = b = e > o ? m / f : n / g, a *= me.device.getPixelRatio(), b *= me.device.getPixelRatio(), d && clearTimeout(d), d = me.video.updateDisplaySize.defer(this, a, b)
            }
        }, b.updateDisplaySize = function(a, b) {
            me.sys.scale.set(a, b), this.renderer.scaleCanvas(a, b), me.game.repaint(), me.input._offset = me.video.getPos(), d = 0
        }, b
    }()
}(),
function() {
    me.Renderer = me.Object.extend({
        init: function(a, b, c, d) {
            return d = d || {}, this.transparent = !!d.transparent, this.doubleBuffering = !!d.doubleBuffering, this.antiAlias = !!d.antiAlias, this.subPixel = !!d.subPixel, this.verbose = !!d.verbose, this.gameWidthZoom = d.zoomX || b, this.gameHeightZoom = d.zoomY || c, this.canvas = this.backBufferCanvas = a, this.context = null, this.currentColor = new me.Color(255, 255, 255, 1), this.uvOffset = 0, this
        },
        applyRGBFilter: function(a, b, c) {
            var d, e, f = this.getContext2d(me.video.createCanvas(a.width, a.height, !1)),
                g = me.utils.getPixels(a),
                h = g.data;
            switch (b) {
                case "b&w":
                    for (d = 0, e = h.length; e > d; d += 4) {
                        var i = 3 * h[d] + 4 * h[d + 1] + h[d + 2] >>> 3;
                        h[d] = i, h[d + 1] = i, h[d + 2] = i
                    }
                    break;
                case "brightness":
                    var j = Math.abs(c).clamp(0, 1);
                    for (d = 0, e = h.length; e > d; d += 4) h[d] *= j, h[d + 1] *= j, h[d + 2] *= j;
                    break;
                case "transparent":
                    var k = me.pool.pull("me.Color").parseCSS(c),
                        l = me.pool.pull("me.Color");
                    for (d = 0, e = h.length; e > d; d += 4) l.setColor(h[d], h[d + 1], h[d + 2]), l.equals(k) && (h[d + 3] = 0);
                    me.pool.push(k), me.pool.push(l);
                    break;
                default:
                    return null
            }
            return f.putImageData(g, 0, 0), f
        },
        clear: function() {},
        reset: function() {
            this.resetTransform(), this.cache.reset()
        },
        getCanvas: function() {
            return this.backBufferCanvas
        },
        getScreenCanvas: function() {
            return this.canvas
        },
        getScreenContext: function() {
            return this.context
        },
        getContext2d: function(a, b) {
            if ("undefined" == typeof a || null === a) throw new me.video.Error("You must pass a canvas element in order to create a 2d context");
            if ("undefined" == typeof a.getContext) throw new me.video.Error("Your browser does not support HTML5 canvas.");
            var c;
            return c = me.device.cocoon ? a.getContext("2d", {
                antialias: this.antiAlias,
                alpha: !b
            }) : a.getContext("2d", {
                alpha: !b
            }), c.canvas || (c.canvas = a), this.setAntiAlias(c, this.antiAlias), c
        },
        getWidth: function() {
            return this.backBufferCanvas.width
        },
        getHeight: function() {
            return this.backBufferCanvas.height
        },
        getColor: function() {
            return this.currentColor
        },
        globalAlpha: function() {
            return this.currentColor.glArray[3]
        },
        resize: function(a, b) {
            this.backBufferCanvas.width = a, this.backBufferCanvas.height = b
        },
        setAntiAlias: function(a, b) {
            "undefined" != typeof a && me.agent.setPrefixed("imageSmoothingEnabled", b === !0, a);
            var c = a.canvas.style["image-rendering"];
            b !== !1 || "" !== c && "auto" !== c ? b === !0 && "pixelated" === c && (a.canvas.style["image-rendering"] = "auto") : a.canvas.style["image-rendering"] = "pixelated"
        },
        drawFont: function() {}
    })
}(),
function() {
    me.Renderer.TextureCache = me.Object.extend({
        init: function(a) {
            this.max_size = a || 1 / 0, this.reset()
        },
        reset: function() {
            this.cache = new Map, this.units = new Map, this.length = 0
        },
        validate: function() {
            if (this.length >= this.max_size) throw new me.video.Error("Texture cache overflow: " + this.max_size + " texture units available.")
        },
        get: function(a, b) {
            return this.cache.has(a) || (b || (b = me.video.renderer.Texture.prototype.createAtlas.apply(me.video.renderer.Texture.prototype, [a.width, a.height, a.src ? me.utils.getBasename(a.src) : void 0])), this.put(a, new me.video.renderer.Texture(b, a, !1))), this.cache.get(a)
        },
        put: function(a, b) {
            this.validate(), this.cache.set(a, b), this.units.set(b, this.length++)
        },
        getUnit: function(a) {
            return this.units.get(a)
        }
    })
}(),
function() {
    me.CanvasRenderer = me.Renderer.extend({
        init: function(a, b, c, d) {
            return me.Renderer.prototype.init.apply(this, [a, b, c, d]), this.context = this.getContext2d(this.canvas, !this.transparent), this.doubleBuffering ? (this.backBufferCanvas = me.video.createCanvas(b, c, !1), this.backBufferContext2D = this.getContext2d(this.backBufferCanvas), this.transparent && (this.context.globalCompositeOperation = "copy")) : (this.backBufferCanvas = this.canvas, this.backBufferContext2D = this.context), this.fontContext2D = this.backBufferContext2D, this.setColor(this.currentColor), this.cache = new me.Renderer.TextureCache, d.textureSeamFix === !1 || this.antiAlias || (this.uvOffset = 1), this
        },
        clear: function() {
            this.transparent && this.clearColor("rgba(0,0,0,0)", !0)
        },
        flush: function() {
            this.doubleBuffering && this.context.drawImage(this.backBufferCanvas, 0, 0, this.backBufferCanvas.width, this.backBufferCanvas.height, 0, 0, this.gameWidthZoom, this.gameHeightZoom)
        },
        clearColor: function(a, b) {
            var c = this.backBufferContext2D,
                d = c.canvas;
            c.save(), c.setTransform(1, 0, 0, 1, 0, 0), c.globalCompositeOperation = b ? "copy" : "source-over", c.fillStyle = a instanceof me.Color ? a.toRGBA() : a, c.fillRect(0, 0, d.width, d.height), c.restore()
        },
        clearRect: function(a, b, c, d) {
            this.backBufferContext2D.clearRect(a, b, c, d)
        },
        createPattern: function(a, b) {
            return this.backBufferContext2D.createPattern(a, b)
        },
        drawImage: function(a, b, c, d, e, f, g, h, i) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.subPixel === !1 ? ("undefined" == typeof d ? (d = h = a.width, e = i = a.height, f = b, g = c, b = 0, c = 0) : "undefined" == typeof f && (f = b, g = c, h = d, i = e, d = a.width, e = a.height, b = 0, c = 0), this.backBufferContext2D.drawImage(a, b, c, d, e, ~~f, ~~g, h, i)) : this.backBufferContext2D.drawImage.apply(this.backBufferContext2D, arguments))
        },
        drawPattern: function(a, b, c, d, e) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                var f = this.backBufferContext2D.fillStyle;
                this.backBufferContext2D.fillStyle = a, this.backBufferContext2D.fillRect(b, c, d, e), this.backBufferContext2D.fillStyle = f
            }
        },
        fillArc: function(a, b, c, d, e, f) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.translate(a + c, b + c), this.backBufferContext2D.beginPath(), this.backBufferContext2D.arc(0, 0, c, d, e, f || !1), this.backBufferContext2D.fill(), this.backBufferContext2D.closePath(), this.translate(-(a + c), -(b + c)))
        },
        fillRect: function(a, b, c, d) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || this.backBufferContext2D.fillRect(a, b, c, d)
        },
        getContext: function() {
            return this.backBufferContext2D
        },
        resetTransform: function() {
            this.backBufferContext2D.setTransform(1, 0, 0, 1, 0, 0)
        },
        scaleCanvas: function(a, b) {
            this.canvas.width = this.gameWidthZoom = this.backBufferCanvas.width * a, this.canvas.height = this.gameHeightZoom = this.backBufferCanvas.height * b, me.device.getPixelRatio() > 1 && (this.canvas.style.width = this.canvas.width / me.device.getPixelRatio() + "px", this.canvas.style.height = this.canvas.height / me.device.getPixelRatio() + "px"), this.doubleBuffering && this.transparent && (this.context.globalCompositeOperation = "copy"), this.setAntiAlias(this.context, this.antiAlias), this.flush()
        },
        save: function() {
            this.backBufferContext2D.save()
        },
        restore: function() {
            this.backBufferContext2D.restore(), this.currentColor.glArray[3] = this.backBufferContext2D.globalAlpha
        },
        rotate: function(a) {
            this.backBufferContext2D.rotate(a)
        },
        scale: function(a, b) {
            this.backBufferContext2D.scale(a, b)
        },
        setColor: function(a) {
            this.backBufferContext2D.strokeStyle = this.backBufferContext2D.fillStyle = a instanceof me.Color ? a.toRGBA() : a
        },
        setGlobalAlpha: function(a) {
            this.backBufferContext2D.globalAlpha = this.currentColor.glArray[3] = a
        },
        setLineWidth: function(a) {
            this.backBufferContext2D.lineWidth = a
        },
        strokeArc: function(a, b, c, d, e, f) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.translate(a + c, b + c), this.backBufferContext2D.beginPath(), this.backBufferContext2D.arc(0, 0, c, d, e, f || !1), this.backBufferContext2D.stroke(), this.backBufferContext2D.closePath(), this.translate(-(a + c), -(b + c)))
        },
        strokeEllipse: function(a, b, c, d) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                var e = c,
                    f = d,
                    g = a - e,
                    h = a + e,
                    i = b - f,
                    j = b + f,
                    k = .551784 * e,
                    l = .551784 * f,
                    m = a - k,
                    n = a + k,
                    o = b - l,
                    p = b + l;
                this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(a, i), this.backBufferContext2D.bezierCurveTo(n, i, h, o, h, b), this.backBufferContext2D.bezierCurveTo(h, p, n, j, a, j), this.backBufferContext2D.bezierCurveTo(m, j, g, p, g, b), this.backBufferContext2D.bezierCurveTo(g, o, m, i, a, i), this.backBufferContext2D.stroke()
            }
        },
        strokeLine: function(a, b, c, d) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || (this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(a, b), this.backBufferContext2D.lineTo(c, d), this.backBufferContext2D.stroke())
        },
        strokePolygon: function(a) {
            if (!(this.backBufferContext2D.globalAlpha < 1 / 255)) {
                this.translate(a.pos.x, a.pos.y), this.backBufferContext2D.beginPath(), this.backBufferContext2D.moveTo(a.points[0].x, a.points[0].y);
                for (var b, c = 1; c < a.points.length; c++) b = a.points[c], this.backBufferContext2D.lineTo(b.x, b.y);
                this.backBufferContext2D.lineTo(a.points[0].x, a.points[0].y), this.backBufferContext2D.stroke(), this.backBufferContext2D.closePath(), this.translate(-a.pos.x, -a.pos.y)
            }
        },
        strokeRect: function(a, b, c, d) {
            this.backBufferContext2D.globalAlpha < 1 / 255 || this.backBufferContext2D.strokeRect(a, b, c, d)
        },
        drawShape: function(a) {
            "Rectangle" === a.shapeType ? this.strokeRect(a.left, a.top, a.width, a.height) : a instanceof me.Line || a instanceof me.Polygon ? this.strokePolygon(a) : a instanceof me.Ellipse && (a.radiusV.x === a.radiusV.y ? this.strokeArc(a.pos.x - a.radius, a.pos.y - a.radius, a.radius, 0, 2 * Math.PI) : this.strokeEllipse(a.pos.x, a.pos.y, a.radiusV.x, a.radiusV.y))
        },
        setTransform: function(a) {
            this.resetTransform(), this.transform(a)
        },
        transform: function(a) {
            var b = a.val,
                c = b[6],
                d = b[7];
            this.subPixel === !1 && (c = ~~c, d = ~~d), this.backBufferContext2D.transform(b[0], b[1], b[3], b[4], c, d)
        },
        translate: function(a, b) {
            this.subPixel === !1 ? this.backBufferContext2D.translate(~~a, ~~b) : this.backBufferContext2D.translate(a, b)
        }
    })
}(),
function() {
    var a = -(Math.PI / 2);
    me.CanvasRenderer.prototype.Texture = me.Object.extend({
        init: function(a, b, c) {
            if (this.format = null, this.texture = b || null, this.atlas = null, "undefined" != typeof a)
                if ("undefined" != typeof a.meta) {
                    if (a.meta.app.includes("texturepacker")) {
                        if (this.format = "texturepacker", "undefined" == typeof b) {
                            var d = a.meta.image;
                            if (this.texture = me.utils.getImage(d), !this.texture) throw new me.video.renderer.Texture.Error("Atlas texture '" + d + "' not found")
                        }
                        this.repeat = "no-repeat"
                    } else if (a.meta.app.includes("ShoeBox")) {
                        if (!a.meta.exporter || !a.meta.exporter.includes("melonJS")) throw new me.video.renderer.Texture.Error("ShoeBox requires the JSON exporter : https://github.com/melonjs/melonJS/tree/master/media/shoebox_JSON_export.sbx");
                        this.format = "ShoeBox", this.repeat = "no-repeat"
                    } else a.meta.app.includes("melonJS") && (this.format = "melonJS", this.repeat = a.meta.repeat || "no-repeat");
                    this.atlas = this.parse(a)
                } else "undefined" != typeof a.framewidth && "undefined" != typeof a.frameheight && (this.format = "Spritesheet (fixed cell size)", void 0 !== typeof b && (a.image = b), this.atlas = this.parseFromSpriteSheet(a), this.repeat = "no-repeat");
            if (!this.atlas) throw new me.video.renderer.Texture.Error("texture atlas format not supported");
            c !== !1 && (c instanceof me.Renderer.TextureCache ? c.put(this.texture, this) : me.video.renderer.cache.put(this.texture, this))
        },
        createAtlas: function(a, b, c, d) {
            return {
                meta: {
                    app: "melonJS",
                    size: {
                        w: a,
                        h: b
                    },
                    repeat: d || "no-repeat"
                },
                frames: [{
                    filename: c || "default",
                    frame: {
                        x: 0,
                        y: 0,
                        w: a,
                        h: b
                    }
                }]
            }
        },
        parse: function(b) {
            var c = {};
            return b.frames.forEach(function(b) {
                if (b.hasOwnProperty("filename")) {
                    var d, e, f = b.frame,
                        g = b.spriteSourceSize && b.sourceSize && b.pivot;
                    g && (d = b.sourceSize.w * b.pivot.x - (b.trimmed ? b.spriteSourceSize.x : 0), e = b.sourceSize.h * b.pivot.y - (b.trimmed ? b.spriteSourceSize.y : 0)), c[b.filename] = {
                        name: b.filename,
                        offset: new me.Vector2d(f.x, f.y),
                        anchorPoint: g ? new me.Vector2d(d / f.w, e / f.h) : null,
                        width: f.w,
                        height: f.h,
                        angle: b.rotated === !0 ? a : 0
                    }
                }
            }), c
        },
        parseFromSpriteSheet: function(a) {
            var b = {},
                c = a.image,
                d = a.spacing || 0,
                e = a.margin || 0,
                f = c.width,
                g = c.height,
                h = new me.Vector2d(~~((f - e + d) / (a.framewidth + d)), ~~((g - e + d) / (a.frameheight + d)));
            f % (a.framewidth + d) === 0 && g % (a.frameheight + d) === 0 || (f = h.x * (a.framewidth + d), g = h.y * (a.frameheight + d), console.warn("Spritesheet Texture for image: " + c.src + " is not divisible by " + (a.framewidth + d) + "x" + (a.frameheight + d) + ", truncating effective size to " + f + "x" + g));
            for (var i = 0, j = h.x * h.y; j > i; i++) b["" + i] = {
                name: "" + i,
                offset: new me.Vector2d(e + (d + a.framewidth) * (i % h.x), e + (d + a.frameheight) * ~~(i / h.x)),
                anchorPoint: a.anchorPoint || null,
                width: a.framewidth,
                height: a.frameheight,
                angle: 0
            };
            return b
        },
        getAtlas: function() {
            return this.atlas
        },
        getTexture: function() {
            return this.texture
        },
        getRegion: function(a) {
            return this.atlas[a]
        },
        createSpriteFromName: function(a, b) {
            return me.pool.pull("me.Sprite", 0, 0, Object.assign({
                image: this,
                region: a
            }, b || {}))
        },
        createAnimationFromName: function(a, b) {
            for (var c, d = [], e = {}, f = 0, g = 0, h = 0; h < a.length; ++h) {
                if (c = this.getRegion(a[h]), null == c) throw new me.video.renderer.Texture.Error("Texture - region for " + a[h] + " not found");
                d[h] = c, e[a[h]] = h, f = Math.max(c.width, f), g = Math.max(c.height, g)
            }
            return new me.Sprite(0, 0, Object.assign({
                image: this,
                framewidth: f,
                frameheight: g,
                margin: 0,
                spacing: 0,
                atlas: d,
                atlasIndices: e
            }, b || {}))
        }
    }), me.CanvasRenderer.prototype.Texture.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.CanvasRenderer.Texture.Error"
        }
    })
}(),
function() {
    me.video.shader = function() {
        function a(a, b, c) {
            var d = a.createShader(b);
            if (a.shaderSource(d, c), a.compileShader(d), !a.getShaderParameter(d, a.COMPILE_STATUS)) throw new me.video.Error(a.getShaderInfoLog(d));
            return d
        }
        var b = {},
            c = {
                bool: "1i",
                int: "1i",
                float: "1f",
                vec2: "2fv",
                vec3: "3fv",
                vec4: "4fv",
                bvec2: "2iv",
                bvec3: "3iv",
                bvec4: "4iv",
                ivec2: "2iv",
                ivec3: "3iv",
                ivec4: "4iv",
                mat2: "Matrix2fv",
                mat3: "Matrix3fv",
                mat4: "Matrix4fv",
                sampler2D: "1i"
            };
        return b.createShader = function(b, d, e) {
            var f, g = {
                    attributes: {},
                    uniforms: {},
                    handle: null
                },
                h = g.handle = b.createProgram(),
                i = /attribute\s+\w+\s+(\w+)/g,
                j = /uniform\s+(\w+)\s+(\w+)/g,
                k = [],
                l = {},
                m = {},
                n = {};
            if (b.attachShader(h, a(b, b.VERTEX_SHADER, d)), b.attachShader(h, a(b, b.FRAGMENT_SHADER, e)), b.linkProgram(h), !b.getProgramParameter(h, b.LINK_STATUS)) throw new me.video.Error(b.getProgramInfoLog(h));
            for (b.useProgram(h); f = i.exec(d);) k.push(f[1]);
            return [d, e].forEach(function(a) {
                for (; f = j.exec(a);) l[f[2]] = f[1]
            }), k.forEach(function(a) {
                g.attributes[a] = b.getAttribLocation(h, a), b.enableVertexAttribArray(g.attributes[a])
            }), Object.keys(l).forEach(function(a) {
                var d = l[a];
                n[a] = b.getUniformLocation(h, a), m[a] = {
                    get: function(a) {
                        return function() {
                            return n[a]
                        }
                    }(a),
                    set: function(a, c, d) {
                        return 0 === c.indexOf("mat") ? function(c) {
                            b[d](n[a], !1, c)
                        } : function(c) {
                            var e = d;
                            c.length && "v" !== d.substr(-1) && (e += "v"), b[e](n[a], c)
                        }
                    }(a, d, "uniform" + c[d])
                }
            }), Object.defineProperties(g.uniforms, m), g
        }, b.createTexture = function(a, b, c, d, e, f, g, h) {
            e = e || "no-repeat";
            var i = a.createTexture(),
                j = 0 === e.search(/^repeat(-x)?$/) ? a.REPEAT : a.CLAMP_TO_EDGE,
                k = 0 === e.search(/^repeat(-y)?$/) ? a.REPEAT : a.CLAMP_TO_EDGE;
            return a.activeTexture(a.TEXTURE0 + b), a.bindTexture(a.TEXTURE_2D, i), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, j), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, k), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, d), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, d), f || g || h ? a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, f, g, h, a.RGBA, a.UNSIGNED_BYTE, c) : a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c), i
        }, b
    }()
}(),
function() {
    me.WebGLRenderer = me.Renderer.extend({
        init: function(a, b, c, d) {
            me.Renderer.prototype.init.apply(this, [a, b, c, d]), this.gl = this.getContextGL(a, !this.transparent), this.colorStack = [], this._matrixStack = [], this._linePoints = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d], this.currentTransform = new me.Matrix2d;
            var e = d.compositor || me.WebGLRenderer.Compositor;
            return this.compositor = new e(this), this.cache = new me.Renderer.TextureCache(this.compositor.maxTextures), this.createFillTexture(this.cache), this.createFontTexture(this.cache), this.scaleCanvas(1, 1), this
        },
        createFillTexture: function(a) {
            var b = new Uint8Array([255, 255, 255, 255]);
            this.fillTexture = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [1, 1, "fillTexture"]), b, a), this.compositor.uploadTexture(this.fillTexture, 1, 1, 0)
        },
        createFontTexture: function(a) {
            var b = me.video.createCanvas(this.backBufferCanvas.width, this.backBufferCanvas.height);
            this.fontContext2D = this.getContext2d(b), this.fontTexture = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [this.backBufferCanvas.width, this.backBufferCanvas.height, "fontTexture"]), b, a), this.compositor.uploadTexture(this.fontTexture)
        },
        createPattern: function(a, b) {
            var c = new this.Texture(this.Texture.prototype.createAtlas.apply(this.Texture.prototype, [a.width, a.height, "pattern", b]), a);
            return this.compositor.uploadTexture(c), c
        },
        flush: function() {
            this.compositor.flush()
        },
        clearColor: function(a, b) {
            var c = this.currentColor.clone(),
                d = this.currentTransform.clone();
            this.currentColor.copy(a), this.currentTransform.identity(), b ? this.compositor.clear() : this.fillRect(0, 0, this.canvas.width, this.canvas.height), this.currentTransform.copy(d), this.currentColor.copy(c), me.pool.push(c)
        },
        clearRect: function(a, b, c, d) {
            var e = this.currentColor.clone();
            this.currentColor.copy("#0000"), this.fillRect(a, b, c, d), this.currentColor.copy(e), me.pool.push(e)
        },
        drawFont: function(a) {
            this.compositor.flush(), this.compositor.uploadTexture(this.fontTexture, 0, 0, 0, !0);
            var b = a.pos.x + "," + a.pos.y + "," + a.width + "," + a.height;
            this.compositor.addQuad(this.fontTexture, b, a.pos.x, a.pos.y, a.width, a.height), this.fontContext2D.clearRect(0, 0, this.backBufferCanvas.width, this.backBufferCanvas.height)
        },
        drawImage: function(a, b, c, d, e, f, g, h, i) {
            "undefined" == typeof d ? (d = h = a.width, e = i = a.height, f = b, g = c, b = 0, c = 0) : "undefined" == typeof f && (f = b, g = c, h = d, i = e, d = a.width, e = a.height, b = 0, c = 0), this.subPixel === !1 && (f = ~~f, g = ~~g);
            var j = b + "," + c + "," + d + "," + e;
            this.compositor.addQuad(this.cache.get(a), j, f, g, h, i)
        },
        drawPattern: function(a, b, c, d, e) {
            var f = "0,0," + d + "," + e;
            this.compositor.addQuad(a, f, b, c, d, e)
        },
        fillRect: function(a, b, c, d) {
            this.compositor.addQuad(this.fillTexture, "default", a, b, c, d)
        },
        getScreenContext: function() {
            return this.gl
        },
        getContextGL: function(a, b) {
            if ("undefined" == typeof a || null === a) throw new me.video.Error("You must pass a canvas element in order to create a GL context");
            if ("undefined" == typeof a.getContext) throw new me.video.Error("Your browser does not support WebGL.");
            var c = {
                antialias: this.antiAlias,
                alpha: !b
            };
            return a.getContext("webgl", c) || a.getContext("experimental-webgl", c)
        },
        getContext: function() {
            return this.gl
        },
        resetTransform: function() {
            this.currentTransform.identity()
        },
        reset: function() {
            this.resetTransform(), this.cache.reset(), this.compositor.reset(), this.createFillTexture(), this.createFontTexture()
        },
        scaleCanvas: function(a, b) {
            var c = this.canvas.width * a,
                d = this.canvas.height * b;
            me.device.getPixelRatio() > 1 ? (this.canvas.style.width = c / me.device.getPixelRatio() + "px", this.canvas.style.height = d / me.device.getPixelRatio() + "px") : (this.canvas.style.width = c + "px", this.canvas.style.height = d + "px"), this.compositor.setProjection(this.canvas.width, this.canvas.height)
        },
        restore: function() {
            var a = this.colorStack.pop();
            me.pool.push(a), this.currentColor.copy(a), this.currentTransform.copy(this._matrixStack.pop())
        },
        rotate: function(a) {
            this.currentTransform.rotate(a)
        },
        save: function() {
            this.colorStack.push(this.currentColor.clone()), this._matrixStack.push(this.currentTransform.clone())
        },
        scale: function(a, b) {
            this.currentTransform.scale(a, b)
        },
        setAntiAlias: function(a, b) {
            me.Renderer.prototype.setAntiAlias.apply(this, [a, b])
        },
        setGlobalAlpha: function(a) {
            this.currentColor.glArray[3] = a
        },
        setColor: function(a) {
            var b = this.currentColor.glArray[3];
            this.currentColor.copy(a), this.currentColor.glArray[3] *= b
        },
        setLineWidth: function(a) {
            this.compositor.lineWidth(a)
        },
        strokeArc: function() {},
        strokeEllipse: function() {},
        strokeLine: function(a, b, c, d) {
            var e = this._linePoints.slice(0, 2);
            e[0].x = a, e[0].y = b, e[1].x = c, e[1].y = d, this.compositor.drawLine(e, !0)
        },
        strokePolygon: function(a) {
            var b, c, d = a.points.length;
            for (c = this._linePoints.length; d > c; c++) this._linePoints.push(new me.Vector2d);
            for (b = this._linePoints.slice(0, d), c = 0; d > c; c++) b[c].x = a.pos.x + a.points[c].x, b[c].y = a.pos.y + a.points[c].y;
            this.compositor.drawLine(b)
        },
        strokeRect: function(a, b, c, d) {
            var e = this._linePoints.slice(0, 4);
            e[0].x = a, e[0].y = b, e[1].x = a + c, e[1].y = b, e[2].x = a + c, e[2].y = b + d, e[3].x = a, e[3].y = b + d, this.compositor.drawLine(e)
        },
        drawShape: function(a) {
            "Rectangle" === a.shapeType ? this.strokeRect(a.left, a.top, a.width, a.height) : a instanceof me.Line || a instanceof me.Polygon ? this.strokePolygon(a) : a instanceof me.Ellipse && (a.radiusV.x === a.radiusV.y ? this.strokeArc(a.pos.x - a.radius, a.pos.y - a.radius, a.radius, 0, 2 * Math.PI) : this.strokeEllipse(a.pos.x, a.pos.y, a.radiusV.x, a.radiusV.y))
        },
        setTransform: function(a) {
            this.resetTransform(), this.transform(a)
        },
        transform: function(a) {
            if (this.currentTransform.multiply(a), this.subPixel === !1) {
                var b = this.currentTransform.val;
                b[6] = ~~b[6], b[7] = ~~b[7]
            }
        },
        translate: function(a, b) {
            this.subPixel === !1 ? this.currentTransform.translate(~~a, ~~b) : this.currentTransform.translate(a, b)
        }
    })
}(),
function() {
    me.WebGLRenderer.prototype.Texture = me.CanvasRenderer.prototype.Texture.extend({
        parse: function(a) {
            var b = a.meta.size.w,
                c = a.meta.size.h,
                d = me.CanvasRenderer.prototype.Texture.prototype.parse.apply(this, [a]);
            return this._addStMap(d, b, c)
        },
        parseFromSpriteSheet: function(a) {
            var b = a.image.width,
                c = a.image.height,
                d = me.CanvasRenderer.prototype.Texture.prototype.parseFromSpriteSheet.apply(this, [a]);
            return this._addStMap(d, b, c)
        },
        _addStMap: function(a, b, c) {
            return Object.keys(a).forEach(function(d) {
                var e = a[d].offset,
                    f = a[d].width,
                    g = a[d].height;
                a[d].stMap = new Float32Array([e.x / b, e.y / c, (e.x + f) / b, (e.y + g) / c]);
                var h = e.x + "," + e.y + "," + b + "," + c;
                a[h] = a[d]
            }), a
        },
        _insertRegion: function(a, b, c, d, e) {
            var f = this.texture.width,
                g = this.texture.height;
            return this.atlas[a] = {
                name: a,
                offset: new me.Vector2d(b, c),
                width: d,
                height: e,
                angle: 0,
                stMap: new Float32Array([b / f, c / g, (b + d) / f, (c + e) / g])
            }, this.atlas[a]
        }
    }), me.WebGLRenderer.prototype.Texture.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.WebGLRenderer.Texture.Error"
        }
    })
}(),
function() {
    var a = 2,
        b = 4,
        c = 1,
        d = 2,
        e = a + b + c + d,
        f = e * Float32Array.BYTES_PER_ELEMENT,
        g = 0,
        h = g + a,
        i = h + b,
        j = i + c,
        k = g * Float32Array.BYTES_PER_ELEMENT,
        l = h * Float32Array.BYTES_PER_ELEMENT,
        m = i * Float32Array.BYTES_PER_ELEMENT,
        n = j * Float32Array.BYTES_PER_ELEMENT,
        o = 4,
        p = 6,
        q = 16e3;
    me.WebGLRenderer.Compositor = me.Object.extend({
        init: function(g) {
            var h = g.gl;
            this.length = 0, this.units = [], this.maxTextures = Math.min(24, h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS)), this.v = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d], this.renderer = g, this.gl = g.gl, this.matrix = g.currentTransform, this.color = g.currentColor, this.uMatrix = new me.Matrix2d;
            var i = h.getShaderPrecisionFormat(h.FRAGMENT_SHADER, h.HIGH_FLOAT).precision < 16 ? "mediump" : "highp";
            this.lineShader = me.video.shader.createShader(this.gl, function(a) {
                var b = "precision highp float;attribute vec2 aVertex;uniform mat3 uMatrix;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);}";
                return b
            }(), function(a) {
                var b = "precision " + a.precision + " float;uniform vec4 uColor;void main(void){gl_FragColor=uColor;}";
                return b
            }({
                precision: i
            })), this.quadShader = me.video.shader.createShader(this.gl, function(a) {
                var b = "precision highp float;attribute vec2 aVertex;attribute vec4 aColor;attribute float aTexture;attribute vec2 aRegion;uniform mat3 uMatrix;varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){gl_Position=vec4((uMatrix*vec3(aVertex,1)).xy,0,1);vColor=vec4(aColor.rgb*aColor.a,aColor.a);vTexture=aTexture;vRegion=aRegion;}";
                return b
            }(), function(a) {
                for (var b = "precision " + a.precision + " float;uniform sampler2D uSampler[" + a.maxTextures + "];varying vec4 vColor;varying float vTexture;varying vec2 vRegion;void main(void){int texture=int(vTexture);if(texture==0){gl_FragColor=texture2D(uSampler[0],vRegion)*vColor;}", c = 1; c < a.maxTextures - 1; c++) b += "else if(texture==" + c + "){gl_FragColor=texture2D(uSampler[" + c + "],vRegion)*vColor;}";
                return b += "else{gl_FragColor=texture2D(uSampler[" + (a.maxTextures - 1) + "],vRegion)*vColor;}}"
            }({
                precision: i,
                maxTextures: this.maxTextures
            })), this.shader = this.quadShader.handle, this.sb = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, this.sb), h.bufferData(h.ARRAY_BUFFER, q * f * o, h.STREAM_DRAW), this.sbSize = 256, this.sbIndex = 0, this.stream = new Float32Array(this.sbSize * e * o), this.ib = h.createBuffer(), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, this.ib), h.bufferData(h.ELEMENT_ARRAY_BUFFER, this.createIB(), h.STATIC_DRAW), h.vertexAttribPointer(this.quadShader.attributes.aVertex, a, h.FLOAT, !1, f, k), h.vertexAttribPointer(this.quadShader.attributes.aColor, b, h.FLOAT, !1, f, l), h.vertexAttribPointer(this.quadShader.attributes.aTexture, c, h.FLOAT, !1, f, m), h.vertexAttribPointer(this.quadShader.attributes.aRegion, d, h.FLOAT, !1, f, n), this.reset(), this.setProjection(h.canvas.width, h.canvas.height), h.clearColor(0, 0, 0, 1), h.enable(h.BLEND), h.blendFunc(h.ONE, h.ONE_MINUS_SRC_ALPHA), h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1)
        },
        setProjection: function(a, b) {
            this.flush(), this.gl.viewport(0, 0, a, b), this.uMatrix.setTransform(2 / a, 0, 0, 0, -2 / b, 0, -1, 1, 1), this.quadShader.uniforms.uMatrix = this.uMatrix.val
        },
        uploadTexture: function(a, b, c, d, e) {
            var f = this.renderer.cache.getUnit(a);
            return this.units[f] && !e || (this.units[f] = !0, me.video.shader.createTexture(this.gl, f, a.texture, this.renderer.antiAlias ? this.gl.LINEAR : this.gl.NEAREST, a.repeat, b, c, d)), f
        },
        reset: function() {
            this.sbIndex = 0, this.length = 0;
            for (var a = [], b = 0; b < this.maxTextures; b++) this.units[b] = !1, a[b] = b;
            this.quadShader.uniforms.uSampler = a
        },
        createIB: function() {
            for (var a = [0, 1, 2, 2, 1, 3], b = new Array(q * p), c = 0; c < b.length; c++) b[c] = a[c % p] + ~~(c / p) * o;
            return new Uint16Array(b)
        },
        resizeSB: function() {
            this.sbSize <<= 1;
            var a = new Float32Array(this.sbSize * e * o);
            a.set(this.stream), this.stream = a
        },
        useShader: function(a) {
            this.shader !== a && (this.flush(), this.shader = a, this.gl.useProgram(this.shader))
        },
        addQuad: function(a, b, c, d, f, k) {
            var l = this.color.toGL();
            if (!(l[3] < 1 / 255)) {
                this.useShader(this.quadShader.handle), this.length >= q && this.flush(), this.length >= this.sbSize && this.resizeSB();
                var m = this.matrix,
                    n = this.v[0].set(c, d),
                    p = this.v[1].set(c + f, d),
                    r = this.v[2].set(c, d + k),
                    s = this.v[3].set(c + f, d + k);
                m.isIdentity() || (m.multiplyVector(n), m.multiplyVector(p), m.multiplyVector(r), m.multiplyVector(s));
                var t = this.sbIndex,
                    u = t + e,
                    v = u + e,
                    w = v + e;
                this.stream[t + g + 0] = n.x, this.stream[t + g + 1] = n.y, this.stream[u + g + 0] = p.x, this.stream[u + g + 1] = p.y, this.stream[v + g + 0] = r.x, this.stream[v + g + 1] = r.y, this.stream[w + g + 0] = s.x, this.stream[w + g + 1] = s.y, this.stream.set(l, t + h), this.stream.set(l, u + h), this.stream.set(l, v + h), this.stream.set(l, w + h);
                var x = this.uploadTexture(a);
                this.stream[t + i] = this.stream[u + i] = this.stream[v + i] = this.stream[w + i] = x;
                var y = a.getRegion(b);
                if ("undefined" == typeof y) {
                    me.video.renderer.verbose === !0 && console.warn("Adding texture region", b, "for texture", a);
                    var z = b.split(","),
                        A = +z[0],
                        B = +z[1],
                        C = +z[2],
                        D = +z[3];
                    y = a._insertRegion(b, A, B, C, D)
                }
                var E = y.stMap;
                this.stream[t + j + 0] = E[0], this.stream[t + j + 1] = E[1], this.stream[u + j + 0] = E[2], this.stream[u + j + 1] = E[1], this.stream[v + j + 0] = E[0], this.stream[v + j + 1] = E[3], this.stream[w + j + 0] = E[2], this.stream[w + j + 1] = E[3], this.sbIndex += e * o, this.length++
            }
        },
        flush: function() {
            if (this.length) {
                var a = this.gl,
                    b = this.length * e * o;
                a.bufferData(a.ARRAY_BUFFER, this.stream.subarray(0, b), a.STREAM_DRAW), a.drawElements(a.TRIANGLES, this.length * p, a.UNSIGNED_SHORT, 0), this.sbIndex = 0, this.length = 0
            }
        },
        drawLine: function(e, g) {
            this.useShader(this.lineShader.handle);
            for (var h = 0, i = 0; i < e.length; i++) this.matrix.isIdentity() || this.matrix.multiplyVector(e[i]), this.stream[h++] = e[i].x, this.stream[h++] = e[i].y;
            var j = this.gl;
            this.lineShader.uniforms.uMatrix = this.uMatrix.val, this.lineShader.uniforms.uColor = this.color.glArray, j.bufferData(j.ARRAY_BUFFER, this.stream.subarray(0, 2 * e.length), j.STREAM_DRAW), j.vertexAttribPointer(this.lineShader.attributes.aVertex, a, j.FLOAT, !1, 0, 0), j.drawArrays(g ? j.LINE_STRIP : j.LINE_LOOP, 0, e.length), j.vertexAttribPointer(this.quadShader.attributes.aVertex, a, j.FLOAT, !1, f, k), j.vertexAttribPointer(this.quadShader.attributes.aColor, b, j.FLOAT, !1, f, l), j.vertexAttribPointer(this.quadShader.attributes.aTexture, c, j.FLOAT, !1, f, m), j.vertexAttribPointer(this.quadShader.attributes.aRegion, d, j.FLOAT, !1, f, n)
        },
        lineWidth: function(a) {
            this.gl.lineWidth(a)
        },
        clear: function() {
            this.flush(), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        }
    })
}(),
function() {
    me.input = function() {
        var a = {};
        return a._preventDefault = function(a) {
            return a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }, a.preventDefault = !0, a
    }()
}(),
function(a) {
    a._KeyBinding = {};
    var b = {},
        c = {},
        d = {},
        e = {},
        f = {},
        g = !1;
    a._enableKeyboardEvent = function() {
        g || (window.addEventListener("keydown", a._keydown, !1), window.addEventListener("keyup", a._keyup, !1), g = !0)
    }, a._keydown = function(c, g, h) {
        g = g || c.keyCode || c.which;
        var i = a._KeyBinding[g];
        if (me.event.publish(me.event.KEYDOWN, [i, g, i ? !d[i] : !0]), i) {
            if (!d[i]) {
                var j = h ? h : g;
                e[i][j] || (b[i]++, e[i][j] = !0)
            }
            return f[g] ? a._preventDefault(c) : !0
        }
        return !0
    }, a._keyup = function(c, g, h) {
        g = g || c.keyCode || c.which;
        var i = a._KeyBinding[g];
        if (me.event.publish(me.event.KEYUP, [i, g]), i) {
            var j = h ? h : g;
            return e[i][j] = void 0, b[i] > 0 && b[i]--, d[i] = !1, f[g] ? a._preventDefault(c) : !0
        }
        return !0
    }, a.KEY = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 42,
        INSERT: 45,
        DELETE: 46,
        NUM0: 48,
        NUM1: 49,
        NUM2: 50,
        NUM3: 51,
        NUM4: 52,
        NUM5: 53,
        NUM6: 54,
        NUM7: 55,
        NUM8: 56,
        NUM9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        WINDOW_KEY: 91,
        NUMPAD0: 96,
        NUMPAD1: 97,
        NUMPAD2: 98,
        NUMPAD3: 99,
        NUMPAD4: 100,
        NUMPAD5: 101,
        NUMPAD6: 102,
        NUMPAD7: 103,
        NUMPAD8: 104,
        NUMPAD9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMICOLON: 186,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190,
        FORWAND_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRACKET: 221,
        SINGLE_QUOTE: 222
    }, a.isKeyPressed = function(a) {
        return b[a] && !d[a] ? (c[a] && (d[a] = !0), !0) : !1
    }, a.keyStatus = function(a) {
        return b[a] > 0
    }, a.triggerKeyEvent = function(b, c) {
        c ? a._keydown({}, b) : a._keyup({}, b)
    }, a.bindKey = function(g, h, i, j) {
        a._enableKeyboardEvent(), "boolean" != typeof j && (j = a.preventDefault), a._KeyBinding[g] = h, f[g] = j, b[h] = 0, c[h] = i ? i : !1, d[h] = !1, e[h] = {}
    }, a.unlockKey = function(a) {
        d[a] = !1
    }, a.unbindKey = function(d) {
        var g = a._KeyBinding[d];
        b[g] = 0, c[g] = !1, e[g] = {}, a._KeyBinding[d] = null, f[d] = null
    }
}(me.input),
function(a) {
    function b(a, b) {
        for (var c = 2; c < a.length; ++c) "undefined" != typeof a[c] && me.video.renderer.getScreenCanvas().addEventListener(a[c], b, !1)
    }

    function c() {
        n || (a._offset = me.video.getPos(), window.addEventListener("scroll", throttle(100, !1, function(b) {
                a._offset = me.video.getPos(), me.event.publish(me.event.WINDOW_ONSCROLL, [b])
            }), !1), q = window.PointerEvent ? r : window.MSPointerEvent ? s : me.device.touch && me.device.isMobile ? u : t, b(q, i), o = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel", window.addEventListener(o, g, !1), "undefined" == typeof a.throttlingInterval && (a.throttlingInterval = ~~(1e3 / me.sys.fps)),
            a.throttlingInterval < 17 ? me.video.renderer.getScreenCanvas().addEventListener(q[v], h, !1) : me.video.renderer.getScreenCanvas().addEventListener(q[v], throttle(a.throttlingInterval, !1, function(a) {
                h(a)
            }), !1), n = !0)
    }

    function d(a, b, c, d) {
        var e;
        if (a.callbacks[b]) {
            a.pointerId = d;
            for (var f = a.callbacks[b].length - 1; e = a.callbacks[b][f]; f--)
                if (e(c) === !1) return !0
        }
        return !1
    }

    function e(a) {
        var b = !1;
        for (me.game.viewport.localToWorld(0, 0, B); C.length > 0;) {
            var c = C.pop();
            if (j.push(c), "undefined" != typeof a.timeStamp) {
                if (a.timeStamp < p) continue;
                p = a.timeStamp
            }
            me.device.pointerEvent || (a.pointerId = c.id), a.gameScreenX = c.x, a.gameScreenY = c.y, a.gameWorldX = a.gameScreenX + B.x, a.gameWorldY = a.gameScreenY + B.y, m.setShape(a.gameWorldX, a.gameWorldY, a.width || 1, a.height || 1);
            var e = me.collision.quadTree.retrieve(m, me.Container.prototype._sortReverseZ);
            e.push(me.game.viewport);
            for (var f, g = e.length; g--, f = e[g];) {
                if (l.has(f)) {
                    var h = l.get(f),
                        i = h.region,
                        k = i.ancestor,
                        n = i.getBounds();
                    if (i.floating === !0 ? (a.gameX = a.gameLocalX = a.gameScreenX, a.gameY = a.gameLocalY = a.gameScreenY) : (a.gameX = a.gameLocalX = a.gameWorldX, a.gameY = a.gameLocalY = a.gameWorldY), "undefined" != typeof k) {
                        var o = k.getBounds().pos;
                        a.gameLocalX = a.gameX - o.x, a.gameLocalY = a.gameY - o.y
                    }
                    var r = n.containsPoint(a.gameX, a.gameY) && (n === i || i.containsPoint(a.gameLocalX, a.gameLocalY));
                    switch (q.indexOf(a.type)) {
                        case v:
                            if (h.pointerId !== a.pointerId || r) {
                                if (null === h.pointerId && r && d(h, q[z], a, a.pointerId)) {
                                    b = !0;
                                    break
                                }
                            } else if (d(h, q[A], a, null)) {
                                b = !0;
                                break
                            }
                            if (r && d(h, a.type, a, a.pointerId)) {
                                b = !0;
                                break
                            }
                            break;
                        case x:
                            if (h.pointerId === a.pointerId && r && d(h, a.type, a, null)) {
                                b = !0;
                                break
                            }
                            break;
                        case y:
                            if (h.pointerId === a.pointerId && d(h, a.type, a, null)) {
                                b = !0;
                                break
                            }
                            break;
                        default:
                            if (r) {
                                var s = a.type;
                                if ("wheel" === s && (s = "mousewheel"), d(h, s, a, a.pointerId)) {
                                    b = !0;
                                    break
                                }
                            }
                    }
                }
                if (b === !0) break
            }
        }
        return b
    }

    function f(b) {
        var c = j.pop();
        if (b.touches)
            for (var d = 0, e = b.changedTouches.length; e > d; d++) {
                var f = b.changedTouches[d];
                a.globalToLocal(f.clientX, f.clientY, c), c.id = f.identifier, C.push(c)
            } else a.globalToLocal(b.clientX, b.clientY, c), c.id = b.pointerId || 1, C.push(c);
        b.isPrimary !== !1 && (a.pointer.pos.set(C[0].x, C[0].y), "number" == typeof b.width && (b.width === a.pointer.width && b.height === a.pointer.height || a.pointer.resize(b.width || 1, b.height || 1)))
    }

    function g(b) {
        return b.target === me.video.renderer.getScreenCanvas() && (f(b), b.deltaMode = 1, "mousewheel" === o && (b.deltaY = -1 / 40 * b.wheelDelta, b.wheelDeltaX && (b.deltaX = -1 / 40 * b.wheelDeltaX)), e(b)) ? a._preventDefault(b) : !0
    }

    function h(b) {
        return f(b), e(b) ? a._preventDefault(b) : !0
    }

    function i(b) {
        if (f(b), e(b)) return a._preventDefault(b);
        var c = b.button || 0,
            d = a.pointer.bind[c];
        return d ? b.type === q[w] ? a._keydown(b, d, c + 1) : a._keyup(b, d, c + 1) : !0
    }
    for (var j = [], k = 0; 10 > k; k++) j.push(new me.Vector2d);
    var l = new Map,
        m = new me.Rect(0, 0, 1, 1),
        n = !1,
        o = "mousewheel",
        p = 0,
        q = null,
        r = ["mousewheel", "pointermove", "pointerdown", "pointerup", "pointercancel", "pointerenter", "pointerleave"],
        s = ["mousewheel", "MSPointerMove", "MSPointerDown", "MSPointerUp", "MSPointerCancel", "MSPointerEnter", "MSPointerLeave"],
        t = ["mousewheel", "mousemove", "mousedown", "mouseup", "mousecancel", "mouseenter", "mouseleave"],
        u = [void 0, "touchmove", "touchstart", "touchend", "touchcancel", "touchenter", "touchleave"],
        v = 1,
        w = 2,
        x = 3,
        y = 4,
        z = 5,
        A = 6,
        B = new me.Vector2d,
        C = [];
    a._offset = null, a.pointer = new me.Rect(0, 0, 1, 1), a.pointer.bind = [0, 0, 0], a.pointer.LEFT = 0, a.pointer.MIDDLE = 1, a.pointer.RIGHT = 2, a.throttlingInterval = void 0, a.globalToLocal = function(b, c, d) {
        d = d || new me.Vector2d;
        var e = a._offset,
            f = me.device.getPixelRatio();
        b -= e.left, c -= e.top;
        var g = me.sys.scale;
        return 1 === g.x && 1 === g.y || (b /= g.x, c /= g.y), d.set(b * f, c * f)
    }, a.bindPointer = function() {
        var b = arguments.length < 2 ? a.pointer.LEFT : arguments[0],
            d = arguments.length < 2 ? arguments[0] : arguments[1];
        if (c(), !a._KeyBinding[d]) throw new me.Error("no action defined for keycode " + d);
        a.pointer.bind[b] = d
    }, a.unbindPointer = function(b) {
        a.pointer.bind["undefined" == typeof b ? a.pointer.LEFT : b] = null
    }, a.registerPointerEvent = function(a, b, d) {
        if (c(), -1 === r.indexOf(a)) throw new me.Error("invalid event type : " + a);
        r !== q && (a = q[r.indexOf(a)]), l.has(b) || l.set(b, {
            region: b,
            callbacks: {},
            pointerId: null
        });
        var e = l.get(b);
        e.callbacks[a] || (e.callbacks[a] = []), e.callbacks[a].push(d)
    }, a.releasePointerEvent = function(a, b, c) {
        if (-1 === r.indexOf(a)) throw new me.Error("invalid event type : " + a);
        r !== q && (a = q[r.indexOf(a)]);
        var d = l.get(b);
        if ("undefined" == typeof c)
            for (; d.callbacks[a].length > 0;) d.callbacks[a].pop();
        else d.callbacks[a].remove(c);
        0 === Object.keys(d.callbacks).length && l.delete(b)
    }, a._translatePointerEvents = function() {
        a.registerPointerEvent("pointermove", me.game.viewport, function(a) {
            me.event.publish(me.event.POINTERMOVE, [a])
        })
    }
}(me.input),
function(a) {
    function b(a) {
        return a
    }

    function c(b, c, d) {
        return d === a.GAMEPAD.BUTTONS.L2 || d === a.GAMEPAD.BUTTONS.R2 ? (b + 1) / 2 : b
    }

    function d(b, c, d) {
        return b = b > 0 ? d === a.GAMEPAD.BUTTONS.L2 ? Math.max(0, b - 2e4) / 111070 : (b - 1) / 131070 : (65536 + b) / 131070 + .5
    }

    function e(a, c) {
        var d = a.replace(g, function(a, b, c) {
                return "000".substr(b.length - 1) + b + "-" + "000".substr(c.length - 1) + c + "-"
            }),
            e = a.replace(g, function(a, b, c) {
                return b.replace(h, "") + "-" + c.replace(h, "") + "-"
            });
        c.analog = c.analog || c.buttons.map(function() {
            return -1
        }), c.normalize_fn = c.normalize_fn || b, j.set(d, c), j.set(e, c)
    }
    var f = .1,
        g = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i,
        h = /^0+/,
        i = {},
        j = new Map;
    [
        ["45e-28e-Xbox 360 Wired Controller", {
            axes: [0, 1, 3, 4],
            buttons: [11, 12, 13, 14, 8, 9, -1, -1, 5, 4, 6, 7, 0, 1, 2, 3, 10],
            analog: [-1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            normalize_fn: c
        }],
        ["54c-268-PLAYSTATION(R)3 Controller", {
            axes: [0, 1, 2, 3],
            buttons: [14, 13, 15, 12, 10, 11, 8, 9, 0, 3, 1, 2, 4, 6, 7, 5, 16]
        }],
        ["54c-5c4-Wireless Controller", {
            axes: [0, 1, 2, 3],
            buttons: [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 12, 13]
        }],
        ["2836-1-OUYA Game Controller", {
            axes: [0, 3, 7, 9],
            buttons: [3, 6, 4, 5, 7, 8, 15, 16, -1, -1, 9, 10, 11, 12, 13, 14, -1],
            analog: [-1, -1, -1, -1, -1, -1, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            normalize_fn: d
        }],
        ["OUYA Game Controller (Vendor: 2836 Product: 0001)", {
            axes: [0, 1, 3, 4],
            buttons: [0, 3, 1, 2, 4, 5, 12, 13, -1, -1, 6, 7, 8, 9, 10, 11, -1],
            analog: [-1, -1, -1, -1, -1, -1, 2, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1],
            normalize_fn: d
        }]
    ].forEach(function(a) {
        e(a[0], a[1])
    }), window.addEventListener("gamepadconnected", function(a) {
        me.event.publish(me.event.GAMEPAD_CONNECTED, [a.gamepad])
    }, !1), window.addEventListener("gamepaddisconnected", function(a) {
        me.event.publish(me.event.GAMEPAD_DISCONNECTED, [a.gamepad])
    }, !1), a._updateGamepads = navigator.getGamepads ? function() {
        var b = navigator.getGamepads(),
            c = {};
        Object.keys(i).forEach(function(d) {
            var e = b[d];
            if (e) {
                var g = null;
                "standard" !== e.mapping && (g = j.get(e.id));
                var h = i[d];
                Object.keys(h.buttons).forEach(function(b) {
                    var i = h.buttons[b],
                        j = b,
                        k = -1;
                    if (!(g && (j = g.buttons[b], k = g.analog[b], 0 > j && 0 > k))) {
                        var l = e.buttons[j] || {};
                        if (g && k >= 0) {
                            var m = g.normalize_fn(e.axes[k], -1, +b);
                            l = {
                                value: m,
                                pressed: l.pressed || Math.abs(m) >= f
                            }
                        }
                        me.event.publish(me.event.GAMEPAD_UPDATE, [d, "buttons", +b, l]), !i.pressed && l.pressed ? a._keydown(c, i.keyCode, j + 256) : i.pressed && !l.pressed && a._keyup(c, i.keyCode, j + 256), i.value = l.value, i.pressed = l.pressed
                    }
                }), Object.keys(h.axes).forEach(function(b) {
                    var i = h.axes[b],
                        j = b;
                    if (!(g && (j = g.axes[b], 0 > j))) {
                        var k = e.axes[j];
                        if ("undefined" != typeof k) {
                            g && (k = g.normalize_fn(k, +b, -1));
                            var l = Math.sign(k) || 1;
                            if (i[l]) {
                                var m = Math.abs(k) >= f + Math.abs(i[l].threshold);
                                me.event.publish(me.event.GAMEPAD_UPDATE, [d, "axes", +b, k]), !i[l].pressed && m ? a._keydown(c, i[l].keyCode, j + 256) : (i[l].pressed || i[-l] && i[-l].pressed) && !m && (l = i[l].pressed ? l : -l, a._keyup(c, i[l].keyCode, j + 256)), i[l].value = k, i[l].pressed = m
                            }
                        }
                    }
                })
            }
        })
    } : function() {}, a.GAMEPAD = {
        AXES: {
            LX: 0,
            LY: 1,
            RX: 2,
            RY: 3,
            EXTRA_1: 4,
            EXTRA_2: 5,
            EXTRA_3: 6,
            EXTRA_4: 7
        },
        BUTTONS: {
            FACE_1: 0,
            FACE_2: 1,
            FACE_3: 2,
            FACE_4: 3,
            L1: 4,
            R1: 5,
            L2: 6,
            R2: 7,
            SELECT: 8,
            BACK: 8,
            START: 9,
            FORWARD: 9,
            L3: 10,
            R3: 11,
            UP: 12,
            DOWN: 13,
            LEFT: 14,
            RIGHT: 15,
            HOME: 16,
            EXTRA_1: 17,
            EXTRA_2: 18,
            EXTRA_3: 19,
            EXTRA_4: 20
        }
    }, a.bindGamepad = function(b, c, d) {
        if (!a._KeyBinding[d]) throw new me.Error("no action defined for keycode " + d);
        "object" != typeof c && (c = {
            type: "buttons",
            code: c
        }, console.warn("Deprecated: me.input.bindGamepad parameteres have changed")), i[b] || (i[b] = {
            axes: {},
            buttons: {}
        });
        var e = {
                keyCode: d,
                value: 0,
                pressed: !1,
                threshold: c.threshold
            },
            f = i[b][c.type];
        if ("buttons" === c.type) f[c.code] = e;
        else if ("axes" === c.type) {
            var g = Math.sign(c.threshold) || 1;
            f[c.code] || (f[c.code] = {}), f[c.code][g] = e
        }
    }, a.unbindGamepad = function(a, b) {
        if (!i[a]) throw new me.Error("no bindings for gamepad " + a);
        i[a].buttons[b] = {}
    }, a.setGamepadDeadzone = function(a) {
        f = a
    }, a.setGamepadMapping = e
}(me.input),
function() {
    var a = function() {
        var a = {},
            b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return a.decode = function(a) {
            if (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""), me.device.nativeBase64) return window.atob(a);
            for (var c, d, e, f, g, h, i, j = [], k = 0; k < a.length;) f = b.indexOf(a.charAt(k++)), g = b.indexOf(a.charAt(k++)), h = b.indexOf(a.charAt(k++)), i = b.indexOf(a.charAt(k++)), c = f << 2 | g >> 4, d = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j.push(String.fromCharCode(c)), 64 !== h && j.push(String.fromCharCode(d)), 64 !== i && j.push(String.fromCharCode(e));
            return j = j.join("")
        }, a.encode = function(a) {
            if (a = a.replace(/\r\n/g, "\n"), me.device.nativeBase64) return window.btoa(a);
            for (var c, d, e, f, g, h, i, j = [], k = 0; k < a.length;) c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64), j.push(b.charAt(f)), j.push(b.charAt(g)), j.push(b.charAt(h)), j.push(b.charAt(i));
            return j = j.join("")
        }, a
    }();
    me.utils = function() {
        var b = {},
            c = "",
            d = 0,
            e = /^.*(\\|\/|\:)/,
            f = /\.[^\.]*$/;
        return b.decodeBase64 = function(b) {
            return a.decode(b)
        }, b.encodeBase64 = function(b) {
            return a.encode(b)
        }, b.decodeBase64AsArray = function(b, c) {
            c = c || 1;
            var d, e, f, g = a.decode(b),
                h = new Uint32Array(g.length / c);
            for (d = 0, f = g.length / c; f > d; d++)
                for (h[d] = 0, e = c - 1; e >= 0; --e) h[d] += g.charCodeAt(d * c + e) << (e << 3);
            return h
        }, b.decompress = function() {
            throw new me.Error("GZIP/ZLIB compressed TMX Tile Map not supported!")
        }, b.decodeCSV = function(a) {
            for (var b = a.replace("\n", "").trim().split(","), c = [], d = 0; d < b.length; d++) c.push(+b[d]);
            return c
        }, b.getBasename = function(a) {
            return a.replace(e, "").replace(f, "")
        }, b.getFileExtension = function(a) {
            return a.substring(a.lastIndexOf(".") + 1, a.length)
        }, b.getPixels = function(a) {
            if (a instanceof HTMLImageElement) {
                var b = me.CanvasRenderer.getContext2d(me.video.createCanvas(a.width, a.height));
                return b.drawImage(a, 0, 0), b.getImageData(0, 0, a.width, a.height)
            }
            return a.getContext("2d").getImageData(0, 0, a.width, a.height)
        }, b.getImage = function(a) {
            return "string" == typeof a ? me.loader.getImage(me.utils.getBasename(a)) : a
        }, b.resetGUID = function(a, b) {
            c = a.toString().toUpperCase().toHex(), d = b || 0
        }, b.createGUID = function(a) {
            return d += a || 1, c + "-" + (a || d)
        }, b
    }()
}(),
function() {
    var a = /^rgba?\((\d+), ?(\d+), ?(\d+)(, ?([\d\.]+))?\)$/,
        b = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
        c = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
        d = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
        e = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
        f = new Map;
    [
        ["black", [0, 0, 0]],
        ["silver", [192, 192, 129]],
        ["gray", [128, 128, 128]],
        ["white", [255, 255, 255]],
        ["maroon", [128, 0, 0]],
        ["red", [255, 0, 0]],
        ["purple", [128, 0, 128]],
        ["fuchsia", [255, 0, 255]],
        ["green", [0, 128, 0]],
        ["lime", [0, 255, 0]],
        ["olive", [128, 128, 0]],
        ["yellow", [255, 255, 0]],
        ["navy", [0, 0, 128]],
        ["blue", [0, 0, 255]],
        ["teal", [0, 128, 128]],
        ["aqua", [0, 255, 255]],
        ["orange", [255, 165, 0]],
        ["aliceblue", [240, 248, 245]],
        ["antiquewhite", [250, 235, 215]],
        ["aquamarine", [127, 255, 212]],
        ["azure", [240, 255, 255]],
        ["beige", [245, 245, 220]],
        ["bisque", [255, 228, 196]],
        ["blanchedalmond", [255, 235, 205]],
        ["blueviolet", [138, 43, 226]],
        ["brown", [165, 42, 42]],
        ["burlywood", [222, 184, 35]],
        ["cadetblue", [95, 158, 160]],
        ["chartreuse", [127, 255, 0]],
        ["chocolate", [210, 105, 30]],
        ["coral", [255, 127, 80]],
        ["cornflowerblue", [100, 149, 237]],
        ["cornsilk", [255, 248, 220]],
        ["crimson", [220, 20, 60]],
        ["darkblue", [0, 0, 139]],
        ["darkcyan", [0, 139, 139]],
        ["darkgoldenrod", [184, 134, 11]],
        ["darkgray[*]", [169, 169, 169]],
        ["darkgreen", [0, 100, 0]],
        ["darkgrey[*]", [169, 169, 169]],
        ["darkkhaki", [189, 183, 107]],
        ["darkmagenta", [139, 0, 139]],
        ["darkolivegreen", [85, 107, 47]],
        ["darkorange", [255, 140, 0]],
        ["darkorchid", [153, 50, 204]],
        ["darkred", [139, 0, 0]],
        ["darksalmon", [233, 150, 122]],
        ["darkseagreen", [143, 188, 143]],
        ["darkslateblue", [72, 61, 139]],
        ["darkslategray", [47, 79, 79]],
        ["darkslategrey", [47, 79, 79]],
        ["darkturquoise", [0, 206, 209]],
        ["darkviolet", [148, 0, 211]],
        ["deeppink", [255, 20, 147]],
        ["deepskyblue", [0, 191, 255]],
        ["dimgray", [105, 105, 105]],
        ["dimgrey", [105, 105, 105]],
        ["dodgerblue", [30, 144, 255]],
        ["firebrick", [178, 34, 34]],
        ["floralwhite", [255, 250, 240]],
        ["forestgreen", [34, 139, 34]],
        ["gainsboro", [220, 220, 220]],
        ["ghostwhite", [248, 248, 255]],
        ["gold", [255, 215, 0]],
        ["goldenrod", [218, 165, 32]],
        ["greenyellow", [173, 255, 47]],
        ["grey", [128, 128, 128]],
        ["honeydew", [240, 255, 240]],
        ["hotpink", [255, 105, 180]],
        ["indianred", [205, 92, 92]],
        ["indigo", [75, 0, 130]],
        ["ivory", [255, 255, 240]],
        ["khaki", [240, 230, 140]],
        ["lavender", [230, 230, 250]],
        ["lavenderblush", [255, 240, 245]],
        ["lawngreen", [124, 252, 0]],
        ["lemonchiffon", [255, 250, 205]],
        ["lightblue", [173, 216, 230]],
        ["lightcoral", [240, 128, 128]],
        ["lightcyan", [224, 255, 255]],
        ["lightgoldenrodyellow", [250, 250, 210]],
        ["lightgray", [211, 211, 211]],
        ["lightgreen", [144, 238, 144]],
        ["lightgrey", [211, 211, 211]],
        ["lightpink", [255, 182, 193]],
        ["lightsalmon", [255, 160, 122]],
        ["lightseagreen", [32, 178, 170]],
        ["lightskyblue", [135, 206, 250]],
        ["lightslategray", [119, 136, 153]],
        ["lightslategrey", [119, 136, 153]],
        ["lightsteelblue", [176, 196, 222]],
        ["lightyellow", [255, 255, 224]],
        ["limegreen", [50, 205, 50]],
        ["linen", [250, 240, 230]],
        ["mediumaquamarine", [102, 205, 170]],
        ["mediumblue", [0, 0, 205]],
        ["mediumorchid", [186, 85, 211]],
        ["mediumpurple", [147, 112, 219]],
        ["mediumseagreen", [60, 179, 113]],
        ["mediumslateblue", [123, 104, 238]],
        ["mediumspringgreen", [0, 250, 154]],
        ["mediumturquoise", [72, 209, 204]],
        ["mediumvioletred", [199, 21, 133]],
        ["midnightblue", [25, 25, 112]],
        ["mintcream", [245, 255, 250]],
        ["mistyrose", [255, 228, 225]],
        ["moccasin", [255, 228, 181]],
        ["navajowhite", [255, 222, 173]],
        ["oldlace", [253, 245, 230]],
        ["olivedrab", [107, 142, 35]],
        ["orangered", [255, 69, 0]],
        ["orchid", [218, 112, 214]],
        ["palegoldenrod", [238, 232, 170]],
        ["palegreen", [152, 251, 152]],
        ["paleturquoise", [175, 238, 238]],
        ["palevioletred", [219, 112, 147]],
        ["papayawhip", [255, 239, 213]],
        ["peachpuff", [255, 218, 185]],
        ["peru", [205, 133, 63]],
        ["pink", [255, 192, 203]],
        ["plum", [221, 160, 221]],
        ["powderblue", [176, 224, 230]],
        ["rosybrown", [188, 143, 143]],
        ["royalblue", [65, 105, 225]],
        ["saddlebrown", [139, 69, 19]],
        ["salmon", [250, 128, 114]],
        ["sandybrown", [244, 164, 96]],
        ["seagreen", [46, 139, 87]],
        ["seashell", [255, 245, 238]],
        ["sienna", [160, 82, 45]],
        ["skyblue", [135, 206, 235]],
        ["slateblue", [106, 90, 205]],
        ["slategray", [112, 128, 144]],
        ["slategrey", [112, 128, 144]],
        ["snow", [255, 250, 250]],
        ["springgreen", [0, 255, 127]],
        ["steelblue", [70, 130, 180]],
        ["tan", [210, 180, 140]],
        ["thistle", [216, 191, 216]],
        ["tomato", [255, 99, 71]],
        ["turquoise", [64, 224, 208]],
        ["violet", [238, 130, 238]],
        ["wheat", [245, 222, 179]],
        ["whitesmoke", [245, 245, 245]],
        ["yellowgreen", [154, 205, 50]]
    ].forEach(function(a) {
        f.set(a[0], a[1])
    }), me.Color = me.Object.extend({
        init: function(a, b, c, d) {
            return "undefined" == typeof this.glArray && (this.glArray = new Float32Array([0, 0, 0, 1])), this.setColor(a, b, c, d)
        },
        setColor: function(a, b, c, d) {
            return a instanceof me.Color ? (this.glArray.set(a.glArray), a) : (this.r = a, this.g = b, this.b = c, this.alpha = d, this)
        },
        clone: function() {
            return me.pool.pull("me.Color", this)
        },
        copy: function(a) {
            return a instanceof me.Color ? (this.glArray.set(a.glArray), this) : this.parseCSS(a)
        },
        add: function(a) {
            return this.glArray[0] = (this.glArray[0] + a.glArray[0]).clamp(0, 1), this.glArray[1] = (this.glArray[1] + a.glArray[1]).clamp(0, 1), this.glArray[2] = (this.glArray[2] + a.glArray[2]).clamp(0, 1), this.glArray[3] = (this.glArray[3] + a.glArray[3]) / 2, this
        },
        darken: function(a) {
            return a = a.clamp(0, 1), this.glArray[0] *= a, this.glArray[1] *= a, this.glArray[2] *= a, this
        },
        lighten: function(a) {
            return a = a.clamp(0, 1), this.glArray[0] = (this.glArray[0] + (1 - this.glArray[0]) * a).clamp(0, 1), this.glArray[1] = (this.glArray[1] + (1 - this.glArray[1]) * a).clamp(0, 1), this.glArray[2] = (this.glArray[2] + (1 - this.glArray[2]) * a).clamp(0, 1), this
        },
        random: function() {
            return this.setColor(256 * Math.random(), 256 * Math.random(), 256 * Math.random(), this.alpha)
        },
        equals: function(a) {
            return this.glArray[0] === a.glArray[0] && this.glArray[1] === a.glArray[1] && this.glArray[2] === a.glArray[2] && this.glArray[3] === a.glArray[3]
        },
        parseCSS: function(a) {
            return f.has(a) ? this.setColor.apply(this, f.get(a)) : this.parseRGB(a)
        },
        parseRGB: function(b) {
            var c = a.exec(b);
            return c ? this.setColor(+c[1], +c[2], +c[3], +c[5]) : this.parseHex(b)
        },
        parseHex: function(a) {
            var f;
            if (f = e.exec(a)) return this.setColor(parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16), (parseInt(f[4], 16).clamp(0, 255) / 255).toFixed(1));
            if (f = d.exec(a)) return this.setColor(parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16));
            if (f = c.exec(a)) return this.setColor(parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16), (parseInt(f[4] + f[4], 16).clamp(0, 255) / 255).toFixed(1));
            if (f = b.exec(a)) return this.setColor(parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16));
            throw new me.Color.Error("invalid parameter: " + a)
        },
        toGL: function() {
            return this.glArray
        },
        toHex: function() {
            return "#" + this.r.toHex() + this.g.toHex() + this.b.toHex()
        },
        toHex8: function() {
            return "#" + this.r.toHex() + this.g.toHex() + this.b.toHex() + this.alpha.toHex()
        },
        toRGB: function() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
        },
        toRGBA: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.alpha + ")"
        }
    }), Object.defineProperty(me.Color.prototype, "r", {
        get: function() {
            return ~~(255 * this.glArray[0])
        },
        set: function(a) {
            this.glArray[0] = (~~a || 0).clamp(0, 255) / 255
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(me.Color.prototype, "g", {
        get: function() {
            return ~~(255 * this.glArray[1])
        },
        set: function(a) {
            this.glArray[1] = (~~a || 0).clamp(0, 255) / 255
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(me.Color.prototype, "b", {
        get: function() {
            return ~~(255 * this.glArray[2])
        },
        set: function(a) {
            this.glArray[2] = (~~a || 0).clamp(0, 255) / 255
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(me.Color.prototype, "alpha", {
        get: function() {
            return this.glArray[3]
        },
        set: function(a) {
            this.glArray[3] = "undefined" == typeof a ? 1 : (+a).clamp(0, 1)
        },
        enumerable: !0,
        configurable: !0
    }), me.Color.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Color.Error"
        }
    })
}(),
function() {
    me.save = function() {
        function a(a) {
            return "add" === a || "remove" === a
        }
        var b = {},
            c = {
                _init: function() {
                    if (me.device.localStorage === !0) {
                        var a = JSON.parse(localStorage.getItem("me.save")) || [];
                        a.forEach(function(a) {
                            b[a] = JSON.parse(localStorage.getItem("me.save." + a))
                        })
                    }
                },
                add: function(d) {
                    Object.keys(d).forEach(function(e) {
                        a(e) || (! function(a) {
                            Object.defineProperty(c, a, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return b[a]
                                },
                                set: function(c) {
                                    b[a] = c, me.device.localStorage === !0 && localStorage.setItem("me.save." + a, JSON.stringify(c))
                                }
                            })
                        }(e), e in b || (c[e] = d[e]))
                    }), me.device.localStorage === !0 && localStorage.setItem("me.save", JSON.stringify(Object.keys(b)))
                },
                remove: function(c) {
                    a(c) || "undefined" != typeof b[c] && (delete b[c], me.device.localStorage === !0 && (localStorage.removeItem("me.save." + c), localStorage.setItem("me.save", JSON.stringify(Object.keys(b)))))
                }
            };
        return c
    }()
}(),
function() {
    me.TMXUtils = function() {
        function a(a, b, c) {
            var d;
            if ("string" != typeof c) return c;
            switch (b) {
                case "int":
                case "float":
                    c = Number(c);
                    break;
                case "bool":
                    c = "true" === c;
                    break;
                default:
                    if (!c || c.isBoolean()) c = c ? "true" === c : !0;
                    else if (c.isNumeric()) c = Number(c);
                    else if (0 === c.search(/^json:/i)) {
                        d = c.split(/^json:/i)[1];
                        try {
                            c = JSON.parse(d)
                        } catch (a) {
                            throw new me.Error("Unable to parse JSON: " + d)
                        }
                    } else if (0 === c.search(/^eval:/i)) {
                        d = c.split(/^eval:/i)[1];
                        try {
                            c = eval(d)
                        } catch (a) {
                            throw new me.Error("Unable to evaluate: " + d)
                        }
                    } else((d = c.match(/^#([\da-fA-F])([\da-fA-F]{3})$/)) || (d = c.match(/^#([\da-fA-F]{2})([\da-fA-F]{6})$/))) && (c = "#" + d[2] + d[1]);
                    0 === a.search(/^(ratio|anchorPoint)$/) && "number" == typeof c && (c = {
                        x: c,
                        y: c
                    })
            }
            return c
        }

        function b(a, b) {
            if (b.attributes && b.attributes.length > 0)
                for (var c = 0; c < b.attributes.length; c++) {
                    var d = b.attributes.item(c);
                    "undefined" != typeof d.name ? a[d.name] = d.value : a[d.nodeName] = d.nodeValue
                }
        }
        var c = {};
        return c.decode = function(a, b, c) {
            switch (c = c || "none", b = b || "none") {
                case "csv":
                    return me.utils.decodeCSV(a);
                case "base64":
                    var d = me.utils.decodeBase64AsArray(a, 4);
                    return "none" === c ? d : me.utils.decompress(d, c);
                case "none":
                    return a;
                case "xml":
                    throw new me.Error("XML encoding is deprecated, use base64 instead");
                default:
                    throw new me.Error("Unknown layer encoding: " + b)
            }
        }, c.normalize = function(b, d) {
            var e = d.nodeName;
            switch (e) {
                case "data":
                    var f = c.parse(d);
                    f.encoding = f.encoding || "xml", b.data = c.decode(f.text, f.encoding, f.compression), b.encoding = "none";
                    break;
                case "imagelayer":
                case "layer":
                case "objectgroup":
                    var g = c.parse(d);
                    g.type = "layer" === e ? "tilelayer" : e, g.image && (g.image = g.image.source), b.layers = b.layers || [], b.layers.push(g);
                    break;
                case "animation":
                    b.animation = c.parse(d).frames;
                    break;
                case "frame":
                case "object":
                    var h = e + "s";
                    b[h] = b[h] || [], b[h].push(c.parse(d));
                    break;
                case "tile":
                    var i = c.parse(d);
                    b.tiles = b.tiles || {}, b.tiles[i.id] = i;
                    break;
                case "tileset":
                    var j = c.parse(d);
                    j.image && (j.imagewidth = j.image.width, j.imageheight = j.image.height, j.image = j.image.source), b.tilesets = b.tilesets || [], b.tilesets.push(j);
                    break;
                case "polygon":
                case "polyline":
                    b[e] = [];
                    for (var k, l = c.parse(d).points.split(" "), m = 0; m < l.length; m++) k = l[m].split(","), b[e].push({
                        x: +k[0],
                        y: +k[1]
                    });
                    break;
                case "properties":
                    b.properties = c.parse(d);
                    break;
                case "property":
                    var n = c.parse(d);
                    b[n.name] = a(n.name, n.type || "string", n.value);
                    break;
                default:
                    b[e] = c.parse(d)
            }
        }, c.parse = function(a) {
            var d = {},
                e = "";
            if (1 === a.nodeType && b(d, a), a.hasChildNodes())
                for (var f = 0; f < a.childNodes.length; f++) {
                    var g = a.childNodes.item(f);
                    switch (g.nodeType) {
                        case 1:
                            c.normalize(d, g);
                            break;
                        case 3:
                            e += g.nodeValue.trim()
                    }
                }
            return e && (d.text = e), d
        }, c.applyTMXProperties = function(b, c) {
            var d = c.properties,
                e = c.propertytypes;
            if ("undefined" != typeof d)
                for (var f in d)
                    if (d.hasOwnProperty(f)) {
                        var g = "string";
                        "undefined" != typeof e && (g = e[f]), b[f] = a(f, g, d[f])
                    }
        }, c
    }()
}(),
function() {
    me.TMXObjectGroup = me.Object.extend({
        init: function(a, b, c, d, e) {
            this.name = a, this.width = b.width, this.height = b.height, this.z = e, this.objects = [];
            var f = "undefined" != typeof b.visible ? b.visible : !0;
            this.opacity = f === !0 ? (+b.opacity || 1).clamp(0, 1) : 0, me.TMXUtils.applyTMXProperties(this, b);
            var g = b.objects;
            if (g) {
                var h = this;
                g.forEach(function(a) {
                    h.objects.push(new me.TMXObject(a, c, d, e))
                })
            }
        },
        destroy: function() {
            this.objects = null
        },
        getObjectCount: function() {
            return this.objects.length
        },
        getObjectByIndex: function(a) {
            return this.objects[a]
        }
    }), me.TMXObject = me.Object.extend({
        init: function(a, b, c, d) {
            if (this.points = void 0, this.name = a.name, this.x = +a.x, this.y = +a.y, this.z = +d, this.width = +a.width || 0, this.height = +a.height || 0, this.gid = +a.gid || null, this.type = a.type, this.rotation = Number.prototype.degToRad(+a.rotation || 0), this.id = +a.id || void 0, this.orientation = b, this.shapes = void 0, this.isEllipse = !1, this.isPolygon = !1, this.isPolyLine = !1, "number" == typeof this.gid) this.setTile(c);
            else if ("undefined" != typeof a.ellipse) this.isEllipse = !0;
            else {
                var e = a.polygon;
                if ("undefined" != typeof e ? this.isPolygon = !0 : (e = a.polyline, "undefined" != typeof e && (this.isPolyLine = !0)), "undefined" != typeof e) {
                    this.points = [];
                    var f = this;
                    e.forEach(function(a) {
                        f.points.push(new me.Vector2d(a.x, a.y))
                    })
                }
            }
            me.game.tmxRenderer.adjustPosition(this), me.TMXUtils.applyTMXProperties(this, a), this.shapes || (this.shapes = this.parseTMXShapes())
        },
        setTile: function(a) {
            var b = a.getTilesetByGid(this.gid);
            this.width = this.framewidth = b.tilewidth, this.height = this.frameheight = b.tileheight, this.tile = new me.Tile(this.x, this.y, this.gid, b)
        },
        parseTMXShapes: function() {
            var a = 0,
                b = [];
            if (this.isEllipse === !0) b.push(new me.Ellipse(this.width / 2, this.height / 2, this.width, this.height).rotate(this.rotation));
            else if (this.isPolygon === !0) b.push(new me.Polygon(0, 0, this.points).rotate(this.rotation));
            else if (this.isPolyLine === !0) {
                var c, d, e = this.points,
                    f = e.length - 1;
                for (a = 0; f > a; a++) c = e[a], d = e[a + 1].clone(), 0 !== this.rotation && (c = c.rotate(this.rotation), d = d.rotate(this.rotation)), b.push(new me.Line(0, 0, [c, d]))
            } else b.push(new me.Polygon(0, 0, [new me.Vector2d, new me.Vector2d(this.width, 0), new me.Vector2d(this.width, this.height), new me.Vector2d(0, this.height)]).rotate(this.rotation));
            if ("isometric" === this.orientation)
                for (a = 0; a < b.length; a++) b[a].rotate(Math.PI / 4).scale(Math.SQRT2, Math.SQRT1_2);
            return b
        },
        getObjectPropertyByName: function(a) {
            return this[a]
        }
    })
}(),
function() {
    var a = 2147483648,
        b = 1073741824,
        c = 536870912,
        d = 536870911;
    me.Tile = me.Rect.extend({
        init: function(e, f, g, h) {
            this.tileset = h, this.currentTransform = null, me.Rect.prototype.init.apply(this, [e * h.tilewidth, f * h.tileheight, h.tilewidth, h.tileheight]), this.col = e, this.row = f, this.tileId = g, this.flippedX = 0 !== (this.tileId & a), this.flippedY = 0 !== (this.tileId & b), this.flippedAD = 0 !== (this.tileId & c), this.flipped = this.flippedX || this.flippedY || this.flippedAD, this.flipped === !0 && this.createTransform(), this.tileId &= d
        },
        createTransform: function() {
            null === this.currentTransform ? this.currentTransform = new me.Matrix2d : this.currentTransform.identity(), this.flippedAD && (this.currentTransform.setTransform(0, 1, 0, 1, 0, 0, 0, 0, 1), this.currentTransform.translate(0, this.height - this.width)), this.flippedX && (this.currentTransform.translate(this.flippedAD ? 0 : this.width, this.flippedAD ? this.height : 0), this.currentTransform.scaleX(-1)), this.flippedY && (this.currentTransform.translate(this.flippedAD ? this.width : 0, this.flippedAD ? 0 : this.height), this.currentTransform.scaleY(-1))
        },
        getRenderable: function(a) {
            var b, c = this.tileset;
            if (c.animations.has(this.tileId)) {
                var d = [],
                    e = [];
                c.animations.get(this.tileId).frames.forEach(function(a) {
                    e.push(a.tileid), d.push({
                        name: "" + a.tileid,
                        delay: a.duration
                    })
                }), b = c.texture.createAnimationFromName(e, a), b.addAnimation(this.tileId - c.firstgid, d), b.setCurrentAnimation(this.tileId - c.firstgid)
            } else b = c.texture.createSpriteFromName(this.tileId - c.firstgid, a);
            return this.flippedX && b.currentTransform.scaleX(-1), this.flippedY && b.currentTransform.scaleY(-1), b
        }
    })
}(),
function() {
    var a = 536870911;
    me.TMXTileset = me.Object.extend({
        init: function(a) {
            var b = 0;
            if (this.TileProperties = [], this.firstgid = this.lastgid = +a.firstgid, "undefined" != typeof a.source) {
                var c = a.source,
                    d = me.utils.getFileExtension(c);
                if (("tsx" === d || "json" === d) && (a = me.loader.getTMX(me.utils.getBasename(c)), !a)) throw new me.Error(c + " external TSX/JSON tileset not found")
            }
            this.name = a.name, this.tilewidth = +a.tilewidth, this.tileheight = +a.tileheight, this.spacing = +a.spacing || 0, this.margin = +a.margin || 0, this.tileoffset = new me.Vector2d, this.isAnimated = !1, this.animations = new Map, this._lastUpdate = 0;
            var e = a.tiles;
            for (b in e) e.hasOwnProperty(b) && ("animation" in e[b] && (this.isAnimated = !0, this.animations.set(+b + this.firstgid, {
                dt: 0,
                idx: 0,
                frames: e[b].animation,
                cur: e[b].animation[0]
            })), "properties" in e[b] && this.setTileProperty(+b + this.firstgid, e[b].properties));
            var f = a.tileoffset;
            f && (this.tileoffset.x = +f.x, this.tileoffset.y = +f.y);
            var g = a.tileproperties;
            if (g)
                for (b in g) g.hasOwnProperty(b) && this.setTileProperty(+b + this.firstgid, g[b]);
            if (this.image = me.utils.getImage(a.image), !this.image) throw new me.TMXTileset.Error("melonJS: '" + a.image + "' file for tileset '" + this.name + "' not found!");
            this.texture = me.video.renderer.cache.get(this.image, {
                framewidth: this.tilewidth,
                frameheight: this.tileheight,
                margin: this.margin,
                spacing: this.spacing
            }), this.atlas = this.texture.getAtlas();
            var h = +a.columns || ~~(this.image.width / (this.tilewidth + this.spacing)),
                i = ~~(this.image.height / (this.tileheight + this.spacing));
            this.lastgid = this.firstgid + (h * i - 1 || 0), a.tilecount && this.lastgid - this.firstgid + 1 !== +a.tilecount && console.warn("Computed tilecount (" + (this.lastgid - this.firstgid + 1) + ") does not match expected tilecount (" + a.tilecount + ")")
        },
        setTileProperty: function(a, b) {
            this.TileProperties[a] = b
        },
        contains: function(a) {
            return a >= this.firstgid && a <= this.lastgid
        },
        getViewTileId: function(a) {
            return this.animations.has(a) ? a = this.animations.get(a).cur.tileid : a -= this.firstgid, a
        },
        getTileProperties: function(a) {
            return this.TileProperties[a]
        },
        update: function(a) {
            var b = 0,
                c = me.timer.getTime(),
                d = !1;
            return this._lastUpdate !== c && (this._lastUpdate = c, this.animations.forEach(function(c) {
                for (c.dt += a, b = c.cur.duration; c.dt >= b;) c.dt -= b, c.idx = (c.idx + 1) % c.frames.length, c.cur = c.frames[c.idx], b = c.cur.duration, d = !0
            })), d
        },
        drawTile: function(a, b, c, d) {
            d.flipped && (a.save(), a.translate(b, c), a.transform(d.currentTransform), b = c = 0);
            var e = this.atlas[this.getViewTileId(d.tileId)].offset;
            a.drawImage(this.image, e.x, e.y, this.tilewidth, this.tileheight, b, c, this.tilewidth + a.uvOffset, this.tileheight + a.uvOffset), d.flipped && a.restore()
        }
    }), me.TMXTilesetGroup = me.Object.extend({
        init: function() {
            this.tilesets = [], this.length = 0
        },
        add: function(a) {
            this.tilesets.push(a), this.length++
        },
        getTilesetByIndex: function(a) {
            return this.tilesets[a]
        },
        getTilesetByGid: function(b) {
            var c = -1;
            b &= a;
            for (var d = 0, e = this.tilesets.length; e > d; d++) {
                if (this.tilesets[d].contains(b)) return this.tilesets[d];
                this.tilesets[d].firstgid === this.tilesets[d].lastgid && b >= this.tilesets[d].firstgid && (c = d)
            }
            if (-1 !== c) return this.tilesets[c];
            throw new me.Error("no matching tileset found for gid " + b)
        }
    }), me.TMXTileset.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.TMXTileset.Error"
        }
    })
}(),
function() {
    var a = [{
            x: 0,
            y: 0
        }, {
            x: 1,
            y: -1
        }, {
            x: 1,
            y: 0
        }, {
            x: 2,
            y: 0
        }],
        b = [{
            x: 0,
            y: 0
        }, {
            x: -1,
            y: 1
        }, {
            x: 0,
            y: 1
        }, {
            x: 0,
            y: 2
        }];
    me.TMXRenderer = me.Object.extend({
        init: function(a, b, c, d) {
            this.cols = a, this.rows = b, this.tilewidth = c, this.tileheight = d
        },
        canRender: function(a) {
            return this.cols === a.cols && this.rows === a.rows && this.tilewidth === a.tilewidth && this.tileheight === a.tileheight
        }
    }), me.TMXOrthogonalRenderer = me.TMXRenderer.extend({
        canRender: function(a) {
            return "orthogonal" === a.orientation && me.TMXRenderer.prototype.canRender.apply(this, [a])
        },
        pixelToTileCoords: function(a, b, c) {
            var d = c || new me.Vector2d;
            return d.set(this.pixelToTileX(a), this.pixelToTileY(b))
        },
        pixelToTileX: function(a) {
            return a / this.tilewidth
        },
        pixelToTileY: function(a) {
            return a / this.tileheight
        },
        tileToPixelCoords: function(a, b, c) {
            var d = c || new me.Vector2d;
            return d.set(a * this.tilewidth, b * this.tileheight)
        },
        adjustPosition: function(a) {
            "number" == typeof a.gid && (a.y -= a.height)
        },
        drawTile: function(a, b, c, d, e) {
            e.drawTile(a, e.tileoffset.x + b * this.tilewidth, e.tileoffset.y + (c + 1) * this.tileheight - e.tileheight, d)
        },
        drawTileLayer: function(a, b, c) {
            var d = this.pixelToTileCoords(Math.max(c.pos.x - (b.maxTileSize.width - b.tilewidth), 0), Math.max(c.pos.y - (b.maxTileSize.height - b.tileheight), 0), me.pool.pull("me.Vector2d")).floorSelf(),
                e = this.pixelToTileCoords(c.pos.x + c.width + this.tilewidth, c.pos.y + c.height + this.tileheight, me.pool.pull("me.Vector2d")).ceilSelf();
            e.x = e.x > this.cols ? this.cols : e.x, e.y = e.y > this.rows ? this.rows : e.y;
            for (var f = d.y; f < e.y; f++)
                for (var g = d.x; g < e.x; g++) {
                    var h = b.layerData[g][f];
                    h && this.drawTile(a, g, f, h, h.tileset)
                }
            me.pool.push(d), me.pool.push(e)
        }
    }), me.TMXIsometricRenderer = me.TMXRenderer.extend({
        init: function(a, b, c, d) {
            me.TMXRenderer.prototype.init.apply(this, [a, b, c, d]), this.hTilewidth = c / 2, this.hTileheight = d / 2, this.originX = this.rows * this.hTilewidth
        },
        canRender: function(a) {
            return "isometric" === a.orientation && me.TMXRenderer.prototype.canRender.apply(this, [a])
        },
        pixelToTileCoords: function(a, b, c) {
            var d = c || new me.Vector2d;
            return d.set(this.pixelToTileX(a, b), this.pixelToTileY(b, a))
        },
        pixelToTileX: function(a, b) {
            return b / this.tileheight + (a - this.originX) / this.tilewidth
        },
        pixelToTileY: function(a, b) {
            return a / this.tileheight - (b - this.originX) / this.tilewidth
        },
        tileToPixelCoords: function(a, b, c) {
            var d = c || new me.Vector2d;
            return d.set((a - b) * this.hTilewidth + this.originX, (a + b) * this.hTileheight)
        },
        adjustPosition: function(a) {
            var b = a.x / this.hTilewidth,
                c = a.y / this.tileheight,
                d = this.tileToPixelCoords(b, c);
            a.x = d.x, a.y = d.y
        },
        drawTile: function(a, b, c, d, e) {
            e.drawTile(a, (this.cols - 1) * e.tilewidth + (b - c) * e.tilewidth >> 1, -e.tilewidth + (b + c) * e.tileheight >> 2, d)
        },
        drawTileLayer: function(a, b, c) {
            var d = b.tileset,
                e = d.tileoffset,
                f = this.pixelToTileCoords(c.pos.x - d.tilewidth, c.pos.y - d.tileheight, me.pool.pull("me.Vector2d")).floorSelf(),
                g = this.pixelToTileCoords(c.pos.x + c.width + d.tilewidth, c.pos.y + c.height + d.tileheight, me.pool.pull("me.Vector2d")).ceilSelf(),
                h = this.tileToPixelCoords(g.x, g.y, me.pool.pull("me.Vector2d")),
                i = this.tileToPixelCoords(f.x, f.y, me.pool.pull("me.Vector2d"));
            i.x -= this.hTilewidth, i.y += this.tileheight;
            var j = i.y - c.pos.y > this.hTileheight,
                k = c.pos.x - i.x < this.hTilewidth;
            j && (k ? (f.x--, i.x -= this.hTilewidth) : (f.y--, i.x += this.hTilewidth), i.y -= this.hTileheight);
            for (var l = j ^ k, m = f.clone(), n = 2 * i.y; n - 2 * this.tileheight < 2 * h.y; n += this.tileheight) {
                m.setV(f);
                for (var o = i.x; o < h.x; o += this.tilewidth) {
                    if (m.x >= 0 && m.y >= 0 && m.x < this.cols && m.y < this.rows) {
                        var p = b.layerData[m.x][m.y];
                        p && (d = p.tileset, e = d.tileoffset, d.drawTile(a, e.x + o, e.y + n / 2 - d.tileheight, p))
                    }
                    m.x++, m.y--
                }
                l ? (f.y++, i.x -= this.hTilewidth, l = !1) : (f.x++, i.x += this.hTilewidth, l = !0)
            }
            me.pool.push(f), me.pool.push(g), me.pool.push(h), me.pool.push(i)
        }
    }), me.TMXHexagonalRenderer = me.TMXRenderer.extend({
        init: function(a, b, c, d, e, f, g) {
            me.TMXRenderer.prototype.init.apply(this, [a, b, c, d]), this.hexsidelength = e, this.staggeraxis = f, this.staggerindex = g, this.sidelengthx = 0, this.sidelengthy = 0, "x" === f ? this.sidelengthx = e : this.sidelengthy = e, this.sideoffsetx = (this.tilewidth - this.sidelengthx) / 2, this.sideoffsety = (this.tileheight - this.sidelengthy) / 2, this.columnwidth = this.sideoffsetx + this.sidelengthx, this.rowheight = this.sideoffsety + this.sidelengthy, this.centers = [new me.Vector2d, new me.Vector2d, new me.Vector2d, new me.Vector2d]
        },
        canRender: function(a) {
            return "hexagonal" === a.orientation && me.TMXRenderer.prototype.canRender.apply(this, [a])
        },
        pixelToTileCoords: function(c, d, e) {
            var f, g, h = e || new me.Vector2d;
            "x" === this.staggeraxis ? c -= "odd" === this.staggerindex ? this.sideoffsetx : this.tilewidth : d -= "odd" === this.staggerindex ? this.sideoffsety : this.tileheight;
            var i = me.pool.pull("me.Vector2d", Math.floor(c / (2 * this.columnwidth)), Math.floor(d / (2 * this.rowheight))),
                j = me.pool.pull("me.Vector2d", c - i.x * (2 * this.columnwidth), d - i.y * (2 * this.rowheight));
            "x" === this.staggeraxis ? (i.x = 2 * i.x, "even" === this.staggerindex && ++i.x) : (i.y = 2 * i.y, "even" === this.staggerindex && ++i.y);
            var k, l, m, n;
            "x" === this.staggeraxis ? (k = this.sidelengthx / 2, m = k + this.columnwidth, n = this.tileheight / 2, this.centers[0].set(k, n), this.centers[1].set(m, n - this.rowheight), this.centers[2].set(m, n + this.rowheight), this.centers[3].set(m + this.columnwidth, n)) : (l = this.sidelengthy / 2, m = this.tilewidth / 2, n = l + this.rowheight, this.centers[0].set(m, l), this.centers[1].set(m - this.columnwidth, n), this.centers[2].set(m + this.columnwidth, n), this.centers[3].set(m, n + this.rowheight));
            for (var o, p = 0, q = Number.MAX_VALUE, r = 0; 4 > r; ++r) o = Math.pow(this.centers[r].x - j.x, 2) + Math.pow(this.centers[r].y - j.y, 2), q > o && (q = o, p = r);
            var s = "x" === this.staggeraxis ? a : b;
            return f = i.x + s[p].x, g = i.y + s[p].y, me.pool.push(i), me.pool.push(j), h.set(f, g)
        },
        pixelToTileX: function(a, b) {
            var c = me.pool.pull("me.Vector2d");
            return this.pixelToTileCoords(a, b, c), me.pool.push(c), c.x
        },
        pixelToTileY: function(a, b) {
            var c = me.pool.pull("me.Vector2d");
            return this.pixelToTileCoords(b, a, c), me.pool.push(c), c.y
        },
        tileToPixelCoords: function(a, b, c) {
            var d, e, f = c || new me.Vector2d;
            return "x" === this.staggeraxis ? (d = a * this.columnwidth, "odd" === this.staggerindex ? (e = b * (this.tileheight + this.sidelengthy), e += this.rowheight * (1 & a)) : (e = b * (this.tileheight + this.sidelengthy), e += this.rowheight * (1 - (1 & a)))) : (e = b * this.rowheight, "odd" === this.staggerindex ? (d = a * (this.tilewidth + this.sidelengthx), d += this.columnwidth * (1 & b)) : (d = a * (this.tilewidth + this.sidelengthx), d += this.columnwidth * (1 - (1 & b)))), f.set(d, e)
        },
        adjustPosition: function(a) {
            "number" == typeof a.gid && (a.y -= a.height)
        },
        drawTile: function(a, b, c, d, e) {
            var f = this.tileToPixelCoords(b, c, me.pool.pull("me.Vector2d"));
            e.drawTile(a, e.tileoffset.x + f.x, e.tileoffset.y + f.y + (this.tileheight - e.tileheight), d), me.pool.push(f)
        },
        drawTileLayer: function(a, b, c) {
            var d = this.pixelToTileCoords(c.pos.x, c.pos.y).floorSelf(),
                e = this.pixelToTileCoords(c.pos.x + c.width + this.tilewidth, c.pos.y + c.height + this.tileheight).ceilSelf();
            d.x = d.x < 0 ? 0 : d.x, d.y = d.y < 0 ? 0 : d.y, e.x = e.x > this.cols ? this.cols : e.x, e.y = e.y > this.rows ? this.rows : e.y;
            for (var f = d.y; f < e.y; f++)
                for (var g = d.x; g < e.x; g++) {
                    var h = b.layerData[g][f];
                    h && this.drawTile(a, g, f, h, h.tileset)
                }
        }
    })
}(),
function() {
    me.ColorLayer = me.Renderable.extend({
        init: function(a, b, c) {
            if (me.Renderable.prototype.init.apply(this, [0, 0, 1 / 0, 1 / 0]), this.name = a, this.pos.z = c, this.floating = !0, b instanceof me.Color) this.color = b.toRGBA();
            else {
                var d = me.pool.pull("me.Color");
                this.color = d.parseCSS(b).toRGBA(), me.pool.push(d)
            }
        },
        draw: function(a, b) {
            var c = a.globalAlpha();
            a.setGlobalAlpha(c * this.getOpacity());
            var d = me.game.viewport.pos;
            a.setColor(this.color), a.fillRect(b.left - d.x, b.top - d.y, b.width, b.height), a.setGlobalAlpha(c), a.setColor("#fff")
        }
    }), me.ImageLayer = me.Renderable.extend({
        init: function(a, b, c) {
            if (this.name = c.name || "me.ImageLayer", this.image = me.utils.getImage(c.image), !this.image) throw new me.Error(("string" == typeof c.image ? "'" + c.image + "'" : "Image") + " file for Image Layer '" + this.name + "' not found!");
            this.imagewidth = this.image.width, this.imageheight = this.image.height, me.Renderable.prototype.init.apply(this, [a, b, 1 / 0, 1 / 0]), this.floating = !0, this.pos.z = c.z || 0, this.offset = new me.Vector2d(a, b), this.ratio = new me.Vector2d(1, 1), "undefined" != typeof c.ratio && ("number" == typeof c.ratio ? this.ratio.set(c.ratio, c.ratio) : this.ratio.setV(c.ratio)), "undefined" == typeof c.anchorPoint ? this.anchorPoint.set(0, 0) : "number" == typeof c.anchorPoint ? this.anchorPoint.set(c.anchorPoint, c.anchorPoint) : this.anchorPoint.setV(c.anchorPoint), Object.defineProperty(this, "repeat", {
                get: function() {
                    return this._repeat
                },
                set: function(a) {
                    switch (this._repeat = a, this._repeat) {
                        case "no-repeat":
                            this.repeatX = !1, this.repeatY = !1;
                            break;
                        case "repeat-x":
                            this.repeatX = !0, this.repeatY = !1;
                            break;
                        case "repeat-y":
                            this.repeatX = !1, this.repeatY = !0;
                            break;
                        default:
                            this.repeatX = !0, this.repeatY = !0
                    }
                    this.resize(me.game.viewport.width, me.game.viewport.height), this.createPattern()
                }
            }), this.repeat = c.repeat || "repeat"
        },
        onActivateEvent: function() {
            var a = this.updateLayer.bind(this);
            this.vpChangeHdlr = me.event.subscribe(me.event.VIEWPORT_ONCHANGE, a), this.vpResizeHdlr = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, this.resize.bind(this)), this.vpLoadedHdlr = me.event.subscribe(me.event.LEVEL_LOADED, function() {
                a(me.game.viewport.pos)
            }), this.ancestor._root !== !0 && this.updateLayer(me.game.viewport.pos)
        },
        resize: function(a, b) {
            me.Renderable.prototype.resize.apply(this, [this.repeatX ? 1 / 0 : a, this.repeatY ? 1 / 0 : b])
        },
        createPattern: function() {
            this._pattern = me.video.renderer.createPattern(this.image, this._repeat)
        },
        updateLayer: function(a) {
            var b = this.ratio.x,
                c = this.ratio.y;
            if (b === c !== 0) {
                var d = me.game.viewport,
                    e = this.imagewidth,
                    f = this.imageheight,
                    g = d.bounds.width,
                    h = d.bounds.height,
                    i = this.anchorPoint.x,
                    j = this.anchorPoint.y,
                    k = i * (b - 1) * (g - d.width) + this.offset.x - b * a.x,
                    l = j * (c - 1) * (h - d.height) + this.offset.y - c * a.y;
                this.repeatX ? this.pos.x = k % e : this.pos.x = k, this.repeatY ? this.pos.y = l % f : this.pos.y = l
            }
        },
        draw: function(a) {
            var b = me.game.viewport,
                c = this.imagewidth,
                d = this.imageheight,
                e = b.bounds.width,
                f = b.bounds.height,
                g = this.anchorPoint.x,
                h = this.anchorPoint.y,
                i = this.pos.x,
                j = this.pos.y,
                k = a.globalAlpha();
            this.ratio.x === this.ratio.y === 0 && (i += g * (e - c), j += h * (f - d)), a.setGlobalAlpha(k * this.getOpacity()), a.translate(i, j), a.drawPattern(this._pattern, 0, 0, 2 * b.width, 2 * b.height), a.translate(-i, -j), a.setGlobalAlpha(k)
        },
        onDeactivateEvent: function() {
            me.event.unsubscribe(this.vpChangeHdlr), me.event.unsubscribe(this.vpResizeHdlr), me.event.unsubscribe(this.vpLoadedHdlr)
        }
    }), me.TMXLayer = me.Renderable.extend({
        init: function(a, b, c, d, e) {
            me.Renderable.prototype.init.apply(this, [0, 0, 0, 0]), this.tilewidth = a, this.tileheight = b, this.orientation = c, this.tilesets = d, this.tileset = this.tilesets ? this.tilesets.getTilesetByIndex(0) : null, this.maxTileSize = {
                width: 0,
                height: 0
            };
            for (var f = 0; f < this.tilesets.length; f++) {
                var g = this.tilesets.getTilesetByIndex(f);
                this.maxTileSize.width = Math.max(this.maxTileSize.width, g.tilewidth), this.maxTileSize.height = Math.max(this.maxTileSize.height, g.tileheight)
            }
            this.animatedTilesets = [], this.isAnimated = !1, this.pos.z = e, this.anchorPoint.set(0, 0)
        },
        initFromJSON: function(a) {
            this.name = a.name, this.cols = +a.width, this.rows = +a.height, this.hexsidelength = +a.hexsidelength || void 0, this.staggeraxis = a.staggeraxis, this.staggerindex = a.staggerindex;
            var b = "undefined" != typeof a.visible ? +a.visible : 1;
            this.setOpacity(b ? +a.opacity : 0), "isometric" === this.orientation ? (this.width = (this.cols + this.rows) * (this.tilewidth / 2), this.height = (this.cols + this.rows) * (this.tileheight / 2)) : (this.width = this.cols * this.tilewidth, this.height = this.rows * this.tileheight), me.TMXUtils.applyTMXProperties(this, a), "undefined" == typeof this.preRender && (this.preRender = me.sys.preRender), this.preRender === !0 && (this.canvasRenderer = new me.CanvasRenderer(me.video.createCanvas(this.width, this.height), this.width, this.height, {
                transparent: !0
            })), this.initArray(this.cols, this.rows)
        },
        onActivateEvent: function() {
            if (void 0 === this.animatedTilesets && (this.animatedTilesets = []), this.tilesets)
                for (var a = this.tilesets.tilesets, b = 0; b < a.length; b++) a[b].isAnimated && this.animatedTilesets.push(a[b]);
            this.isAnimated = this.animatedTilesets.length > 0, this.isAnimated && (this.preRender = !1), this.getBounds().resize(this.width, this.height)
        },
        onDeactivateEvent: function() {
            this.animatedTilesets = void 0
        },
        setRenderer: function(a) {
            this.renderer = a
        },
        initArray: function(a, b) {
            this.layerData = [];
            for (var c = 0; a > c; c++) {
                this.layerData[c] = [];
                for (var d = 0; b > d; d++) this.layerData[c][d] = null
            }
        },
        getTileId: function(a, b) {
            var c = this.getTile(a, b);
            return c ? c.tileId : null
        },
        getTile: function(a, b) {
            return this.layerData[~~this.renderer.pixelToTileX(a, b)][~~this.renderer.pixelToTileY(b, a)]
        },
        setTile: function(a, b, c) {
            this.tileset.contains(c) || (this.tileset = this.tilesets.getTilesetByGid(c));
            var d = this.layerData[a][b] = new me.Tile(a, b, c, this.tileset);
            return this.preRender && this.renderer.drawTile(this.canvasRenderer, a, b, d, d.tileset), d
        },
        clearTile: function(a, b) {
            this.layerData[a][b] = null, this.preRender && this.canvasRenderer.clearRect(a * this.tilewidth, b * this.tileheight, this.tilewidth, this.tileheight)
        },
        update: function(a) {
            if (this.isAnimated) {
                for (var b = !1, c = 0; c < this.animatedTilesets.length; c++) b = this.animatedTilesets[c].update(a) || b;
                return b
            }
            return !1
        },
        draw: function(a, b) {
            var c = a.globalAlpha();
            if (a.setGlobalAlpha(c * this.getOpacity()), this.preRender) {
                var d = Math.min(b.width, this.width),
                    e = Math.min(b.height, this.height);
                a.drawImage(this.canvasRenderer.getCanvas(), b.pos.x, b.pos.y, d, e, b.pos.x, b.pos.y, d, e)
            } else this.renderer.drawTileLayer(a, this, b);
            a.setGlobalAlpha(c)
        }
    })
}(),
function() {
    function a(a) {
        switch (a.orientation) {
            case "orthogonal":
                return new me.TMXOrthogonalRenderer(a.cols, a.rows, a.tilewidth, a.tileheight);
            case "isometric":
                return new me.TMXIsometricRenderer(a.cols, a.rows, a.tilewidth, a.tileheight);
            case "hexagonal":
                return new me.TMXHexagonalRenderer(a.cols, a.rows, a.tilewidth, a.tileheight, a.hexsidelength, a.staggeraxis, a.staggerindex);
            default:
                throw new me.Error(a.orientation + " type TMX Tile Map not supported!")
        }
    }

    function b(a, b) {
        for (var c = 0, d = 0; d < a.rows; d++)
            for (var e = 0; e < a.cols; e++) {
                var f = b[c++];
                0 !== f && a.setTile(e, d, f)
            }
    }

    function c(c, d, e) {
        var f = new me.TMXLayer(c.tilewidth, c.tileheight, c.orientation, c.tilesets, e);
        return f.initFromJSON(d), me.game.tmxRenderer.canRender(f) ? f.setRenderer(me.game.tmxRenderer) : f.setRenderer(a(f)), b(f, me.TMXUtils.decode(d.data, d.encoding, d.compression)), f
    }

    function d(a, b, c) {
        me.TMXUtils.applyTMXProperties(b.properties, b);
        var d = new me.ImageLayer(+b.x || 0, +b.y || 0, Object.assign({
                name: b.name,
                image: b.image,
                z: c
            }, b.properties)),
            e = "undefined" != typeof b.visible ? b.visible : !0;
        return d.setOpacity(e ? +b.opacity : 0), d
    }

    function e(a) {
        return new me.TMXTileset(a)
    }

    function f(a, b, c) {
        return new me.TMXObjectGroup(b.name, b, a.orientation, a.tilesets, c)
    }
    var g = "collision";
    me.TMXTileMap = me.Object.extend({
        init: function(b, c) {
            this.name = b, this.data = c, this.cols = +c.width, this.rows = +c.height, this.tilewidth = +c.tilewidth, this.tileheight = +c.tileheight, this.tilesets = null, this.layers = [], this.objectGroups = [], this.version = c.version, this.orientation = c.orientation, "isometric" === this.orientation ? (this.width = (this.cols + this.rows) * (this.tilewidth / 2), this.height = (this.cols + this.rows) * (this.tileheight / 2)) : (this.width = this.cols * this.tilewidth, this.height = this.rows * this.tileheight), this.z = 0, this.nextobjectid = +c.nextobjectid || void 0, this.hexsidelength = +c.hexsidelength || void 0, this.staggeraxis = c.staggeraxis, this.staggerindex = c.staggerindex, this.backgroundcolor = c.backgroundcolor, me.TMXUtils.applyTMXProperties(this, c), null !== me.game.tmxRenderer && me.game.tmxRenderer.canRender(this) || (me.game.tmxRenderer = a(this)), this.initialized = !1
        },
        readMapObjects: function(a) {
            if (this.initialized !== !0) {
                var b = this.z,
                    g = this;
                if (this.tilesets || (this.tilesets = new me.TMXTilesetGroup), "undefined" != typeof a.tilesets) {
                    var h = a.tilesets;
                    h.forEach(function(a) {
                        g.tilesets.add(e(a))
                    })
                }
                this.backgroundcolor && this.layers.push(new me.ColorLayer("background_color", this.backgroundcolor, b++)), this.background_image && this.layers.push(new me.ImageLayer(0, 0, {
                    name: "background_image",
                    image: this.background_image,
                    z: b++
                })), a.layers.forEach(function(a) {
                    switch (a.type) {
                        case "imagelayer":
                            g.layers.push(d(g, a, b++));
                            break;
                        case "tilelayer":
                            g.layers.push(c(g, a, b++));
                            break;
                        case "objectgroup":
                            g.objectGroups.push(f(g, a, b++))
                    }
                }), this.initialized = !0
            }
        },
        addTo: function(a, b) {
            var c = a.autoSort,
                d = a.autoDepth;
            a.autoSort = !1, a.autoDepth = !1, this.getLayers().forEach(function(b) {
                a.addChild(b)
            }), this.getObjects(b).forEach(function(b) {
                a.addChild(b)
            }), a.autoSort = c, a.autoDepth = d, a.sort(!0)
        },
        getObjects: function(a) {
            var b, c = [],
                d = !1;
            this.readMapObjects(this.data);
            for (var e = 0; e < this.objectGroups.length; e++) {
                var f = this.objectGroups[e];
                d = f.name.toLowerCase().includes(g), a === !1 && (b = new me.Container(0, 0, this.width, this.height), b.name = f.name, b.pos.z = f.z, b.setOpacity(f.opacity), b.autoSort = !1, b.autoDepth = !1);
                for (var h = 0; h < f.objects.length; h++) {
                    var i = f.objects[h],
                        j = me.pool.pull(i.name || "me.Entity", i.x, i.y, i);
                    if ("object" == typeof j) {
                        if ("object" == typeof i.tile && !j.renderable) switch (j.renderable = i.tile.getRenderable(i), i.rotation) {
                            case Math.PI:
                                j.translate(-j.renderable.width, j.renderable.height);
                                break;
                            case Math.PI / 2:
                                j.translate(0, j.renderable.height);
                                break;
                            case -(Math.PI / 2):
                                j.translate(-j.renderable.width, 0)
                        }
                        d && !i.name && (j.body.collisionType = me.collision.types.WORLD_SHAPE), j.pos.z = f.z, a === !0 ? (j.isRenderable === !0 && (j.setOpacity(j.getOpacity() * f.opacity), j.renderable instanceof me.Renderable && j.renderable.setOpacity(j.renderable.getOpacity() * f.opacity)), c.push(j)) : b.addChild(j)
                    }
                }
                a === !1 && b.children.length > 0 && (b.autoSort = !0, b.autoDepth = !0, c.push(b))
            }
            return c
        },
        getLayers: function() {
            return this.readMapObjects(this.data), this.layers
        },
        destroy: function() {
            this.tilesets = void 0, this.layers = [], this.objectGroups = [], this.initialized = !1
        }
    })
}(),
function() {
    me.levelDirector = function() {
        function a(a, g, h) {
            g.container.destroy(), me.video.renderer.reset(), d[c.getCurrentLevelId()] && d[c.getCurrentLevelId()].destroy(), f = e.indexOf(a), b(a, g.container, g.flatten, g.setViewportBounds), me.event.publish(me.event.LEVEL_LOADED, [a]), g.onLoaded(a), h && me.state.restart()
        }

        function b(a, b, c, e) {
            function f() {
                b.pos.set(Math.max(0, ~~((me.game.viewport.width - h.width) / 2)), Math.max(0, ~~((me.game.viewport.height - h.height) / 2)), 0)
            }
            var h = d[a],
                i = b.autoSort;
            b.autoSort = !1, e && me.game.viewport.setBounds(0, 0, Math.max(h.width, me.game.viewport.width), Math.max(h.height, me.game.viewport.height)), me.utils.resetGUID(a, h.nextobjectid), h.addTo(b, c), b.sort(!0), b.autoSort = i, b.resize(h.width, h.height), e && (f(), g && me.event.unsubscribe(g), g = me.event.subscribe(me.event.VIEWPORT_ONRESIZE, f))
        }
        var c = {},
            d = {},
            e = [],
            f = 0,
            g = null;
        return c.reset = function() {}, c.addLevel = function() {
            throw new me.Error("no level loader defined")
        }, c.addTMXLevel = function(a, b) {
            return null != d[a] ? !1 : (d[a] = new me.TMXTileMap(a, me.loader.getTMX(a)), e.push(a), b && b(), !0)
        }, c.loadLevel = function(b, c) {
            if (c = Object.assign({
                    container: me.game.world,
                    onLoaded: me.game.onLevelLoaded,
                    flatten: me.game.mergeGroup,
                    setViewportBounds: !0
                }, c || {}), "undefined" == typeof d[b]) throw new me.Error("level " + b + " not found");
            if (!(d[b] instanceof me.TMXTileMap)) throw new me.Error("no level loader defined");
            var e = me.state.isRunning();
            return e ? (me.state.stop(), a.defer(this, b, c, !0)) : a(b, c), !0
        }, c.getCurrentLevelId = function() {
            return e[f]
        }, c.getCurrentLevel = function() {
            return d[c.getCurrentLevelId()]
        }, c.reloadLevel = function(a) {
            return c.loadLevel(c.getCurrentLevelId(), a)
        }, c.nextLevel = function(a) {
            return f + 1 < e.length ? c.loadLevel(e[f + 1], a) : !1
        }, c.previousLevel = function(a) {
            return f - 1 >= 0 ? c.loadLevel(e[f - 1], a) : !1
        }, c.levelCount = function() {
            return e.length
        }, c
    }()
}(),
/**
 * @preserve Tween JS
 * https://github.com/sole/Tween.js
 */
function() {
    me.Tween = function(a) {
        var b = null,
            c = null,
            d = null,
            e = null,
            f = null,
            g = null,
            h = null,
            i = null,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null,
            o = null,
            p = null,
            q = null,
            r = null,
            s = null;
        this._resumeCallback = function(a) {
            k && (k += a)
        }, this.setProperties = function(a) {
            b = a, c = {}, d = {}, e = {}, f = 1e3, g = 0, h = !1, i = !1, j = 0, k = null, l = me.Tween.Easing.Linear.None, m = me.Tween.Interpolation.Linear, n = [], o = null, p = !1, q = null, r = null, s = me.timer.lastUpdate, this.isPersistent = !1;
            for (var t in a) "object" != typeof a && (c[t] = parseFloat(a[t], 10))
        }, this.setProperties(a), this.onResetEvent = function(a) {
            this.setProperties(a)
        }, this.onActivateEvent = function() {
            me.event.subscribe(me.event.STATE_RESUME, this._resumeCallback)
        }, this.onDeactivateEvent = function() {
            me.event.unsubscribe(me.event.STATE_RESUME, this._resumeCallback)
        }, this.to = function(a, b) {
            return void 0 !== b && (f = b), d = a, this
        }, this.start = function(a) {
            p = !1, me.game.world.addChild(this), k = ("undefined" == typeof a ? me.timer.getTime() : a) + j;
            for (var f in d) {
                if (d[f] instanceof Array) {
                    if (0 === d[f].length) continue;
                    d[f] = [b[f]].concat(d[f])
                }
                c[f] = b[f], c[f] instanceof Array == !1 && (c[f] *= 1), e[f] = c[f] || 0
            }
            return this
        }, this.stop = function() {
            return me.game.world.removeChildNow(this), this
        }, this.delay = function(a) {
            return j = a, this
        }, this.repeat = function(a) {
            return g = a, this
        }, this.yoyo = function(a) {
            return h = a, this
        }, this.easing = function(a) {
            if ("function" != typeof a) throw new me.Tween.Error("invalid easing function for me.Tween.easing()");
            return l = a, this
        }, this.interpolation = function(a) {
            return m = a, this
        }, this.chain = function() {
            return n = arguments, this
        }, this.onStart = function(a) {
            return o = a, this
        }, this.onUpdate = function(a) {
            return q = a, this
        }, this.onComplete = function(a) {
            return r = a, this
        }, this.update = function(a) {
            s = me.timer.lastUpdate > s ? me.timer.lastUpdate : s + a;
            var t, u = s;
            if (k > u) return !0;
            p === !1 && (null !== o && o.call(b), p = !0);
            var v = (u - k) / f;
            v = v > 1 ? 1 : v;
            var w = l(v);
            for (t in d) {
                var x = c[t] || 0,
                    y = d[t];
                y instanceof Array ? b[t] = m(y, w) : ("string" == typeof y && (y = x + parseFloat(y, 10)), "number" == typeof y && (b[t] = x + (y - x) * w))
            }
            if (null !== q && q.call(b, w), 1 === v) {
                if (g > 0) {
                    isFinite(g) && g--;
                    for (t in e) {
                        if ("string" == typeof d[t] && (e[t] = e[t] + parseFloat(d[t], 10)), h) {
                            var z = e[t];
                            e[t] = d[t], d[t] = z
                        }
                        c[t] = e[t]
                    }
                    return h && (i = !i), k = u + j, !0
                }
                me.game.world.removeChildNow(this), null !== r && r.call(b);
                for (var A = 0, B = n.length; B > A; A++) n[A].start(u);
                return !1
            }
            return !0
        }
    }, me.Tween.Easing = {
        Linear: {
            None: function(a) {
                return a
            }
        },
        Quadratic: {
            In: function(a) {
                return a * a
            },
            Out: function(a) {
                return a * (2 - a)
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
            }
        },
        Cubic: {
            In: function(a) {
                return a * a * a
            },
            Out: function(a) {
                return --a * a * a + 1
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            }
        },
        Quartic: {
            In: function(a) {
                return a * a * a * a
            },
            Out: function(a) {
                return 1 - --a * a * a * a
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
            }
        },
        Quintic: {
            In: function(a) {
                return a * a * a * a * a
            },
            Out: function(a) {
                return --a * a * a * a * a + 1
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            }
        },
        Sinusoidal: {
            In: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Out: function(a) {
                return Math.sin(a * Math.PI / 2)
            },
            InOut: function(a) {
                return .5 * (1 - Math.cos(Math.PI * a))
            }
        },
        Exponential: {
            In: function(a) {
                return 0 === a ? 0 : Math.pow(1024, a - 1)
            },
            Out: function(a) {
                return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
            },
            InOut: function(a) {
                return 0 === a ? 0 : 1 === a ? 1 : (a *= 2) < 1 ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2)
            }
        },
        Circular: {
            In: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Out: function(a) {
                return Math.sqrt(1 - --a * a)
            },
            InOut: function(a) {
                return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }
        },
        Elastic: {
            In: function(a) {
                var b, c = .1,
                    d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d)))
            },
            Out: function(a) {
                var b, c = .1,
                    d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), c * Math.pow(2, -10 * a) * Math.sin((a - b) * (2 * Math.PI) / d) + 1)
            },
            InOut: function(a) {
                var b, c = .1,
                    d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), (a *= 2) < 1 ? -.5 * (c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d)) : c * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - b) * (2 * Math.PI) / d) * .5 + 1)
            }
        },
        Back: {
            In: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            Out: function(a) {
                var b = 1.70158;
                return --a * a * ((b + 1) * a + b) + 1
            },
            InOut: function(a) {
                var b = 2.5949095;
                return (a *= 2) < 1 ? .5 * (a * a * ((b + 1) * a - b)) : .5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
            }
        },
        Bounce: {
            In: function(a) {
                return 1 - me.Tween.Easing.Bounce.Out(1 - a)
            },
            Out: function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            InOut: function(a) {
                return .5 > a ? .5 * me.Tween.Easing.Bounce.In(2 * a) : .5 * me.Tween.Easing.Bounce.Out(2 * a - 1) + .5
            }
        }
    }, me.Tween.Interpolation = {
        Linear: function(a, b) {
            var c = a.length - 1,
                d = c * b,
                e = Math.floor(d),
                f = me.Tween.Interpolation.Utils.Linear;
            return 0 > b ? f(a[0], a[1], d) : b > 1 ? f(a[c], a[c - 1], c - d) : f(a[e], a[e + 1 > c ? c : e + 1], d - e)
        },
        Bezier: function(a, b) {
            var c, d = 0,
                e = a.length - 1,
                f = Math.pow,
                g = me.Tween.Interpolation.Utils.Bernstein;
            for (c = 0; e >= c; c++) d += f(1 - b, e - c) * f(b, c) * a[c] * g(e, c);
            return d
        },
        CatmullRom: function(a, b) {
            var c = a.length - 1,
                d = c * b,
                e = Math.floor(d),
                f = me.Tween.Interpolation.Utils.CatmullRom;
            return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))), f(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : b > 1 ? a[c] - (f(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : f(a[e ? e - 1 : 0], a[e], a[e + 1 > c ? c : e + 1], a[e + 2 > c ? c : e + 2], d - e)
        },
        Utils: {
            Linear: function(a, b, c) {
                return (b - a) * c + a
            },
            Bernstein: function(a, b) {
                var c = me.Tween.Interpolation.Utils.Factorial;
                return c(a) / c(b) / c(a - b)
            },
            Factorial: function() {
                var a = [1];
                return function(b) {
                    var c, d = 1;
                    if (a[b]) return a[b];
                    for (c = b; c > 1; c--) d *= c;
                    return a[b] = d
                }
            }(),
            CatmullRom: function(a, b, c, d, e) {
                var f = .5 * (c - a),
                    g = .5 * (d - b),
                    h = e * e,
                    i = e * h;
                return (2 * b - 2 * c + f + g) * i + (-3 * b + 3 * c - 2 * f - g) * h + f * e + b
            }
        }
    }, me.Tween.Error = me.Error.extend({
        init: function(a) {
            me.Error.prototype.init.apply(this, [a]), this.name = "me.Tween.Error"
        }
    })
}(),
/**
 * @preserve MinPubSub
 * a micro publish/subscribe messaging framework
 * @see https://github.com/daniellmb/MinPubSub
 * @author Daniel Lamb <daniellmb.com>
 *
 * Released under the MIT License
 */
function() {
    me.event = function() {
        var a = {},
            b = {};
        return a.STATE_PAUSE = "me.state.onPause", a.STATE_RESUME = "me.state.onResume", a.STATE_STOP = "me.state.onStop", a.STATE_RESTART = "me.state.onRestart", a.GAME_INIT = "me.game.onInit", a.GAME_RESET = "me.game.onReset", a.LEVEL_LOADED = "me.game.onLevelLoaded", a.LOADER_COMPLETE = "me.loader.onload", a.LOADER_PROGRESS = "me.loader.onProgress", a.KEYDOWN = "me.input.keydown", a.KEYUP = "me.input.keyup", a.GAMEPAD_CONNECTED = "gamepad.connected", a.GAMEPAD_DISCONNECTED = "gamepad.disconnected", a.GAMEPAD_UPDATE = "gamepad.update", a.POINTERMOVE = "me.event.pointermove", a.DRAGSTART = "me.game.dragstart", a.DRAGEND = "me.game.dragend", a.WINDOW_ONRESIZE = "window.onresize", a.VIEWPORT_ONRESIZE = "viewport.onresize", a.WINDOW_ONORIENTATION_CHANGE = "window.orientationchange", a.WINDOW_ONSCROLL = "window.onscroll", a.VIEWPORT_ONCHANGE = "viewport.onchange", a.publish = function(a, c) {
            for (var d = b[a], e = d ? d.length : 0; e--;) d[e].apply(window, c || [])
        }, a.subscribe = function(a, c) {
            return b[a] || (b[a] = []), b[a].push(c), [a, c]
        }, a.unsubscribe = function(a, c) {
            var d = b[c ? a : a[0]],
                e = d ? d.length : 0;
            for (c = c || a[1]; e--;) d[e] === c && d.splice(e, 1)
        }, a
    }()
}(),
/*!
 *  howler.js v2.0.1
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function() {
    "use strict";
    var a = function() {
        this.init()
    };
    a.prototype = {
        init: function() {
            var a = this || b;
            return a._codecs = {}, a._howls = [], a._muted = !1, a._volume = 1, a._canPlayEvent = "canplaythrough", a._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, a.masterGain = null, a.noAudio = !1, a.usingWebAudio = !0, a.autoSuspend = !0, a.ctx = null, a.mobileAutoEnable = !0, a._setup(), a
        },
        volume: function(a) {
            var c = this || b;
            if (a = parseFloat(a), c.ctx || j(), "undefined" != typeof a && a >= 0 && 1 >= a) {
                if (c._volume = a, c._muted) return c;
                c.usingWebAudio && (c.masterGain.gain.value = a);
                for (var d = 0; d < c._howls.length; d++)
                    if (!c._howls[d]._webAudio)
                        for (var e = c._howls[d]._getSoundIds(), f = 0; f < e.length; f++) {
                            var g = c._howls[d]._soundById(e[f]);
                            g && g._node && (g._node.volume = g._volume * a)
                        }
                return c
            }
            return c._volume
        },
        mute: function(a) {
            var c = this || b;
            c.ctx || j(), c._muted = a, c.usingWebAudio && (c.masterGain.gain.value = a ? 0 : c._volume);
            for (var d = 0; d < c._howls.length; d++)
                if (!c._howls[d]._webAudio)
                    for (var e = c._howls[d]._getSoundIds(), f = 0; f < e.length; f++) {
                        var g = c._howls[d]._soundById(e[f]);
                        g && g._node && (g._node.muted = a ? !0 : g._muted)
                    }
            return c
        },
        unload: function() {
            for (var a = this || b, c = a._howls.length - 1; c >= 0; c--) a._howls[c].unload();
            return a.usingWebAudio && "undefined" != typeof a.ctx.close && (a.ctx.close(), a.ctx = null, j()), a
        },
        codecs: function(a) {
            return (this || b)._codecs[a.replace(/^x-/, "")]
        },
        _setup: function() {
            var a = this || b;
            return a.state = a.ctx ? a.ctx.state || "running" : "running", a._autoSuspend(), a.noAudio || a._setupCodecs(), a
        },
        _setupCodecs: function() {
            var a = this || b,
                c = "undefined" != typeof Audio ? new Audio : null;
            if (!c || "function" != typeof c.canPlayType) return a;
            var d = c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                e = a._navigator && a._navigator.userAgent.match(/OPR\/([0-6].)/g),
                f = e && parseInt(e[0].split("/")[1], 10) < 33;
            return a._codecs = {
                mp3: !(f || !d && !c.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!d,
                opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!c.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(c.canPlayType("audio/x-flac;") || c.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, a
        },
        _enableMobileAudio: function() {
            var a = this || b,
                c = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(a._navigator && a._navigator.userAgent),
                d = !!("ontouchend" in window || a._navigator && a._navigator.maxTouchPoints > 0 || a._navigator && a._navigator.msMaxTouchPoints > 0);
            if (!a._mobileEnabled && a.ctx && (c || d)) {
                a._mobileEnabled = !1, a._mobileUnloaded || 44100 === a.ctx.sampleRate || (a._mobileUnloaded = !0, a.unload()), a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
                var e = function() {
                    var b = a.ctx.createBufferSource();
                    b.buffer = a._scratchBuffer, b.connect(a.ctx.destination), "undefined" == typeof b.start ? b.noteOn(0) : b.start(0), b.onended = function() {
                        b.disconnect(0), a._mobileEnabled = !0, a.mobileAutoEnable = !1, document.removeEventListener("touchend", e, !0)
                    }
                };
                return document.addEventListener("touchend", e, !0), a
            }
        },
        _autoSuspend: function() {
            var a = this;
            if (a.autoSuspend && a.ctx && "undefined" != typeof a.ctx.suspend && b.usingWebAudio) {
                for (var c = 0; c < a._howls.length; c++)
                    if (a._howls[c]._webAudio)
                        for (var d = 0; d < a._howls[c]._sounds.length; d++)
                            if (!a._howls[c]._sounds[d]._paused) return a;
                return a._suspendTimer && clearTimeout(a._suspendTimer), a._suspendTimer = setTimeout(function() {
                    a.autoSuspend && (a._suspendTimer = null, a.state = "suspending", a.ctx.suspend().then(function() {
                        a.state = "suspended", a._resumeAfterSuspend && (delete a._resumeAfterSuspend, a._autoResume())
                    }))
                }, 3e4), a
            }
        },
        _autoResume: function() {
            var a = this;
            if (a.ctx && "undefined" != typeof a.ctx.resume && b.usingWebAudio) return "running" === a.state && a._suspendTimer ? (clearTimeout(a._suspendTimer), a._suspendTimer = null) : "suspended" === a.state ? (a.state = "resuming", a.ctx.resume().then(function() {
                a.state = "running"
            }), a._suspendTimer && (clearTimeout(a._suspendTimer), a._suspendTimer = null)) : "suspending" === a.state && (a._resumeAfterSuspend = !0), a
        }
    };
    var b = new a,
        c = function(a) {
            var b = this;
            return a.src && 0 !== a.src.length ? void b.init(a) : void console.error("An array of source files must be passed with any new Howl.")
        };
    c.prototype = {
        init: function(a) {
            var c = this;
            return b.ctx || j(), c._autoplay = a.autoplay || !1, c._format = "string" != typeof a.format ? a.format : [a.format], c._html5 = a.html5 || !1, c._muted = a.mute || !1, c._loop = a.loop || !1, c._pool = a.pool || 5, c._preload = "boolean" == typeof a.preload ? a.preload : !0, c._rate = a.rate || 1, c._sprite = a.sprite || {}, c._src = "string" != typeof a.src ? a.src : [a.src], c._volume = void 0 !== a.volume ? a.volume : 1, c._duration = 0, c._state = "unloaded", c._sounds = [], c._endTimers = {}, c._queue = [], c._onend = a.onend ? [{
                fn: a.onend
            }] : [], c._onfade = a.onfade ? [{
                fn: a.onfade
            }] : [], c._onload = a.onload ? [{
                fn: a.onload
            }] : [], c._onloaderror = a.onloaderror ? [{
                fn: a.onloaderror
            }] : [], c._onpause = a.onpause ? [{
                fn: a.onpause
            }] : [], c._onplay = a.onplay ? [{
                fn: a.onplay
            }] : [], c._onstop = a.onstop ? [{
                fn: a.onstop
            }] : [], c._onmute = a.onmute ? [{
                fn: a.onmute
            }] : [], c._onvolume = a.onvolume ? [{
                fn: a.onvolume
            }] : [], c._onrate = a.onrate ? [{
                fn: a.onrate
            }] : [], c._onseek = a.onseek ? [{
                fn: a.onseek
            }] : [], c._webAudio = b.usingWebAudio && !c._html5, "undefined" != typeof b.ctx && b.ctx && b.mobileAutoEnable && b._enableMobileAudio(), b._howls.push(c), c._preload && c.load(), c
        },
        load: function() {
            var a = this,
                c = null;
            if (b.noAudio) return void a._emit("loaderror", null, "No audio support.");
            "string" == typeof a._src && (a._src = [a._src]);
            for (var e = 0; e < a._src.length; e++) {
                var g, h;
                if (a._format && a._format[e]) g = a._format[e];
                else {
                    if (h = a._src[e], "string" != typeof h) {
                        a._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    g = /^data:audio\/([^;,]+);/i.exec(h), g || (g = /\.([^.]+)$/.exec(h.split("?", 1)[0])), g && (g = g[1].toLowerCase())
                }
                if (b.codecs(g)) {
                    c = a._src[e];
                    break
                }
            }
            return c ? (a._src = c, a._state = "loading", "https:" === window.location.protocol && "http:" === c.slice(0, 5) && (a._html5 = !0, a._webAudio = !1), new d(a), a._webAudio && f(a), a) : void a._emit("loaderror", null, "No codec support for selected audio sources.")
        },
        play: function(a, c) {
            var d = this,
                e = null;
            if ("number" == typeof a) e = a, a = null;
            else {
                if ("string" == typeof a && "loaded" === d._state && !d._sprite[a]) return null;
                if ("undefined" == typeof a) {
                    a = "__default";
                    for (var f = 0, g = 0; g < d._sounds.length; g++) d._sounds[g]._paused && !d._sounds[g]._ended && (f++, e = d._sounds[g]._id);
                    1 === f ? a = null : e = null
                }
            }
            var h = e ? d._soundById(e) : d._inactiveSound();
            if (!h) return null;
            if (e && !a && (a = h._sprite || "__default"), "loaded" !== d._state && !d._sprite[a]) return d._queue.push({
                event: "play",
                action: function() {
                    d.play(d._soundById(h._id) ? h._id : void 0)
                }
            }), h._id;
            if (e && !h._paused) return c || setTimeout(function() {
                d._emit("play", h._id)
            }, 0), h._id;
            d._webAudio && b._autoResume();
            var i = h._seek > 0 ? h._seek : d._sprite[a][0] / 1e3,
                j = (d._sprite[a][0] + d._sprite[a][1]) / 1e3 - i,
                k = 1e3 * j / Math.abs(h._rate);
            h._paused = !1, h._ended = !1, h._sprite = a, h._seek = i, h._start = d._sprite[a][0] / 1e3, h._stop = (d._sprite[a][0] + d._sprite[a][1]) / 1e3, h._loop = !(!h._loop && !d._sprite[a][2]);
            var l = h._node;
            if (d._webAudio) {
                var m = function() {
                    d._refreshBuffer(h);
                    var a = h._muted || d._muted ? 0 : h._volume;
                    l.gain.setValueAtTime(a, b.ctx.currentTime), h._playStart = b.ctx.currentTime, "undefined" == typeof l.bufferSource.start ? h._loop ? l.bufferSource.noteGrainOn(0, i, 86400) : l.bufferSource.noteGrainOn(0, i, j) : h._loop ? l.bufferSource.start(0, i, 86400) : l.bufferSource.start(0, i, j), k !== 1 / 0 && (d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k)), c || setTimeout(function() {
                        d._emit("play", h._id)
                    }, 0)
                };
                "loaded" === d._state ? m() : (d.once("load", m, h._id), d._clearTimer(h._id))
            } else {
                var n = function() {
                        l.currentTime = i, l.muted = h._muted || d._muted || b._muted || l.muted, l.volume = h._volume * b.volume(), l.playbackRate = h._rate, setTimeout(function() {
                            l.play(), k !== 1 / 0 && (d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k)), c || d._emit("play", h._id)
                        }, 0)
                    },
                    o = "loaded" === d._state && (window && window.ejecta || !l.readyState && b._navigator.isCocoonJS);
                if (4 === l.readyState || o) n();
                else {
                    var p = function() {
                        n(), l.removeEventListener(b._canPlayEvent, p, !1)
                    };
                    l.addEventListener(b._canPlayEvent, p, !1), d._clearTimer(h._id)
                }
            }
            return h._id
        },
        pause: function(a) {
            var b = this;
            if ("loaded" !== b._state) return b._queue.push({
                event: "pause",
                action: function() {
                    b.pause(a)
                }
            }), b;
            for (var c = b._getSoundIds(a), d = 0; d < c.length; d++) {
                b._clearTimer(c[d]);
                var e = b._soundById(c[d]);
                if (e && !e._paused) {
                    if (e._seek = b.seek(c[d]), e._rateSeek = 0, e._paused = !0, b._stopFade(c[d]), e._node)
                        if (b._webAudio) {
                            if (!e._node.bufferSource) return b;
                            "undefined" == typeof e._node.bufferSource.stop ? e._node.bufferSource.noteOff(0) : e._node.bufferSource.stop(0), b._cleanBuffer(e._node)
                        } else isNaN(e._node.duration) && e._node.duration !== 1 / 0 || e._node.pause();
                    arguments[1] || b._emit("pause", e._id)
                }
            }
            return b
        },
        stop: function(a, b) {
            var c = this;
            if ("loaded" !== c._state) return c._queue.push({
                event: "stop",
                action: function() {
                    c.stop(a)
                }
            }), c;
            for (var d = c._getSoundIds(a), e = 0; e < d.length; e++) {
                c._clearTimer(d[e]);
                var f = c._soundById(d[e]);
                if (f && (f._seek = f._start || 0, f._rateSeek = 0, f._paused = !0, f._ended = !0, c._stopFade(d[e]), f._node))
                    if (c._webAudio) {
                        if (!f._node.bufferSource) return b || c._emit("stop", f._id), c;
                        "undefined" == typeof f._node.bufferSource.stop ? f._node.bufferSource.noteOff(0) : f._node.bufferSource.stop(0), c._cleanBuffer(f._node)
                    } else isNaN(f._node.duration) && f._node.duration !== 1 / 0 || (f._node.currentTime = f._start || 0, f._node.pause());
                f && !b && c._emit("stop", f._id)
            }
            return c
        },
        mute: function(a, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "mute",
                action: function() {
                    d.mute(a, c)
                }
            }), d;
            if ("undefined" == typeof c) {
                if ("boolean" != typeof a) return d._muted;
                d._muted = a
            }
            for (var e = d._getSoundIds(c), f = 0; f < e.length; f++) {
                var g = d._soundById(e[f]);
                g && (g._muted = a, d._webAudio && g._node ? g._node.gain.setValueAtTime(a ? 0 : g._volume, b.ctx.currentTime) : g._node && (g._node.muted = b._muted ? !0 : a), d._emit("mute", g._id))
            }
            return d
        },
        volume: function() {
            var a, c, d = this,
                e = arguments;
            if (0 === e.length) return d._volume;
            if (1 === e.length || 2 === e.length && "undefined" == typeof e[1]) {
                var f = d._getSoundIds(),
                    g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : a = parseFloat(e[0])
            } else e.length >= 2 && (a = parseFloat(e[0]), c = parseInt(e[1], 10));
            var h;
            if (!("undefined" != typeof a && a >= 0 && 1 >= a)) return h = c ? d._soundById(c) : d._sounds[0], h ? h._volume : 0;
            if ("loaded" !== d._state) return d._queue.push({
                event: "volume",
                action: function() {
                    d.volume.apply(d, e)
                }
            }), d;
            "undefined" == typeof c && (d._volume = a), c = d._getSoundIds(c);
            for (var i = 0; i < c.length; i++) h = d._soundById(c[i]), h && (h._volume = a, e[2] || d._stopFade(c[i]), d._webAudio && h._node && !h._muted ? h._node.gain.setValueAtTime(a, b.ctx.currentTime) : h._node && !h._muted && (h._node.volume = a * b.volume()), d._emit("volume", h._id));
            return d
        },
        fade: function(a, c, d, e) {
            var f = this,
                g = Math.abs(a - c),
                h = a > c ? "out" : "in",
                i = g / .01,
                j = i > 0 ? d / i : d;
            if (4 > j && (i = Math.ceil(i / (4 / j)), j = 4), "loaded" !== f._state) return f._queue.push({
                event: "fade",
                action: function() {
                    f.fade(a, c, d, e)
                }
            }), f;
            f.volume(a, e);
            for (var k = f._getSoundIds(e), l = 0; l < k.length; l++) {
                var m = f._soundById(k[l]);
                if (m) {
                    if (e || f._stopFade(k[l]), f._webAudio && !m._muted) {
                        var n = b.ctx.currentTime,
                            o = n + d / 1e3;
                        m._volume = a, m._node.gain.setValueAtTime(a, n), m._node.gain.linearRampToValueAtTime(c, o)
                    }
                    var p = a;
                    m._interval = setInterval(function(a, b) {
                        i > 0 && (p += "in" === h ? .01 : -.01), p = Math.max(0, p), p = Math.min(1, p), p = Math.round(100 * p) / 100, f._webAudio ? ("undefined" == typeof e && (f._volume = p), b._volume = p) : f.volume(p, a, !0), p === c && (clearInterval(b._interval), b._interval = null, f.volume(p, a), f._emit("fade", a))
                    }.bind(f, k[l], m), j)
                }
            }
            return f
        },
        _stopFade: function(a) {
            var c = this,
                d = c._soundById(a);
            return d && d._interval && (c._webAudio && d._node.gain.cancelScheduledValues(b.ctx.currentTime), clearInterval(d._interval), d._interval = null, c._emit("fade", a)), c
        },
        loop: function() {
            var a, b, c, d = this,
                e = arguments;
            if (0 === e.length) return d._loop;
            if (1 === e.length) {
                if ("boolean" != typeof e[0]) return c = d._soundById(parseInt(e[0], 10)), c ? c._loop : !1;
                a = e[0], d._loop = a
            } else 2 === e.length && (a = e[0], b = parseInt(e[1], 10));
            for (var f = d._getSoundIds(b), g = 0; g < f.length; g++) c = d._soundById(f[g]), c && (c._loop = a, d._webAudio && c._node && c._node.bufferSource && (c._node.bufferSource.loop = a, a && (c._node.bufferSource.loopStart = c._start || 0, c._node.bufferSource.loopEnd = c._stop)));
            return d
        },
        rate: function() {
            var a, c, d = this,
                e = arguments;
            if (0 === e.length) c = d._sounds[0]._id;
            else if (1 === e.length) {
                var f = d._getSoundIds(),
                    g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : a = parseFloat(e[0])
            } else 2 === e.length && (a = parseFloat(e[0]), c = parseInt(e[1], 10));
            var h;
            if ("number" != typeof a) return h = d._soundById(c), h ? h._rate : d._rate;
            if ("loaded" !== d._state) return d._queue.push({
                event: "rate",
                action: function() {
                    d.rate.apply(d, e)
                }
            }), d;
            "undefined" == typeof c && (d._rate = a), c = d._getSoundIds(c);
            for (var i = 0; i < c.length; i++)
                if (h = d._soundById(c[i])) {
                    h._rateSeek = d.seek(c[i]), h._playStart = d._webAudio ? b.ctx.currentTime : h._playStart, h._rate = a, d._webAudio && h._node && h._node.bufferSource ? h._node.bufferSource.playbackRate.value = a : h._node && (h._node.playbackRate = a);
                    var j = d.seek(c[i]),
                        k = (d._sprite[h._sprite][0] + d._sprite[h._sprite][1]) / 1e3 - j,
                        l = 1e3 * k / Math.abs(h._rate);
                    !d._endTimers[c[i]] && h._paused || (d._clearTimer(c[i]), d._endTimers[c[i]] = setTimeout(d._ended.bind(d, h), l)), d._emit("rate", h._id)
                } return d
        },
        seek: function() {
            var a, c, d = this,
                e = arguments;
            if (0 === e.length) c = d._sounds[0]._id;
            else if (1 === e.length) {
                var f = d._getSoundIds(),
                    g = f.indexOf(e[0]);
                g >= 0 ? c = parseInt(e[0], 10) : (c = d._sounds[0]._id, a = parseFloat(e[0]))
            } else 2 === e.length && (a = parseFloat(e[0]), c = parseInt(e[1], 10));
            if ("undefined" == typeof c) return d;
            if ("loaded" !== d._state) return d._queue.push({
                event: "seek",
                action: function() {
                    d.seek.apply(d, e)
                }
            }), d;
            var h = d._soundById(c);
            if (h) {
                if (!("number" == typeof a && a >= 0)) {
                    if (d._webAudio) {
                        var i = d.playing(c) ? b.ctx.currentTime - h._playStart : 0,
                            j = h._rateSeek ? h._rateSeek - h._seek : 0;
                        return h._seek + (j + i * Math.abs(h._rate))
                    }
                    return h._node.currentTime
                }
                var k = d.playing(c);
                k && d.pause(c, !0), h._seek = a, h._ended = !1, d._clearTimer(c), k && d.play(c, !0), !d._webAudio && h._node && (h._node.currentTime = a), d._emit("seek", c)
            }
            return d
        },
        playing: function(a) {
            var b = this;
            if ("number" == typeof a) {
                var c = b._soundById(a);
                return c ? !c._paused : !1
            }
            for (var d = 0; d < b._sounds.length; d++)
                if (!b._sounds[d]._paused) return !0;
            return !1
        },
        duration: function(a) {
            var b = this,
                c = b._duration,
                d = b._soundById(a);
            return d && (c = b._sprite[d._sprite][1] / 1e3), c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var a = this, c = a._sounds, d = 0; d < c.length; d++) {
                c[d]._paused || (a.stop(c[d]._id), a._emit("end", c[d]._id)), a._webAudio || (c[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", c[d]._node.removeEventListener("error", c[d]._errorFn, !1), c[d]._node.removeEventListener(b._canPlayEvent, c[d]._loadFn, !1)), delete c[d]._node, a._clearTimer(c[d]._id);
                var f = b._howls.indexOf(a);
                f >= 0 && b._howls.splice(f, 1)
            }
            var g = !0;
            for (d = 0; d < b._howls.length; d++)
                if (b._howls[d]._src === a._src) {
                    g = !1;
                    break
                } return e && g && delete e[a._src], b.noAudio = !1, a._state = "unloaded", a._sounds = [], a = null, null
        },
        on: function(a, b, c, d) {
            var e = this,
                f = e["_on" + a];
            return "function" == typeof b && f.push(d ? {
                id: c,
                fn: b,
                once: d
            } : {
                id: c,
                fn: b
            }), e
        },
        off: function(a, b, c) {
            var d = this,
                e = d["_on" + a],
                f = 0;
            if (b) {
                for (f = 0; f < e.length; f++)
                    if (b === e[f].fn && c === e[f].id) {
                        e.splice(f, 1);
                        break
                    }
            } else if (a) d["_on" + a] = [];
            else {
                var g = Object.keys(d);
                for (f = 0; f < g.length; f++) 0 === g[f].indexOf("_on") && Array.isArray(d[g[f]]) && (d[g[f]] = [])
            }
            return d
        },
        once: function(a, b, c) {
            var d = this;
            return d.on(a, b, c, 1), d
        },
        _emit: function(a, b, c) {
            for (var d = this, e = d["_on" + a], f = e.length - 1; f >= 0; f--) e[f].id && e[f].id !== b && "load" !== a || (setTimeout(function(a) {
                a.call(this, b, c)
            }.bind(d, e[f].fn), 0), e[f].once && d.off(a, e[f].fn, e[f].id));
            return d
        },
        _loadQueue: function() {
            var a = this;
            if (a._queue.length > 0) {
                var b = a._queue[0];
                a.once(b.event, function() {
                    a._queue.shift(), a._loadQueue()
                }), b.action()
            }
            return a
        },
        _ended: function(a) {
            var c = this,
                d = a._sprite,
                e = !(!a._loop && !c._sprite[d][2]);
            if (c._emit("end", a._id), !c._webAudio && e && c.stop(a._id, !0).play(a._id), c._webAudio && e) {
                c._emit("play", a._id), a._seek = a._start || 0, a._rateSeek = 0, a._playStart = b.ctx.currentTime;
                var f = 1e3 * (a._stop - a._start) / Math.abs(a._rate);
                c._endTimers[a._id] = setTimeout(c._ended.bind(c, a), f)
            }
            return c._webAudio && !e && (a._paused = !0, a._ended = !0, a._seek = a._start || 0, a._rateSeek = 0, c._clearTimer(a._id), c._cleanBuffer(a._node), b._autoSuspend()), c._webAudio || e || c.stop(a._id), c
        },
        _clearTimer: function(a) {
            var b = this;
            return b._endTimers[a] && (clearTimeout(b._endTimers[a]), delete b._endTimers[a]), b
        },
        _soundById: function(a) {
            for (var b = this, c = 0; c < b._sounds.length; c++)
                if (a === b._sounds[c]._id) return b._sounds[c];
            return null
        },
        _inactiveSound: function() {
            var a = this;
            a._drain();
            for (var b = 0; b < a._sounds.length; b++)
                if (a._sounds[b]._ended) return a._sounds[b].reset();
            return new d(a)
        },
        _drain: function() {
            var a = this,
                b = a._pool,
                c = 0,
                d = 0;
            if (!(a._sounds.length < b)) {
                for (d = 0; d < a._sounds.length; d++) a._sounds[d]._ended && c++;
                for (d = a._sounds.length - 1; d >= 0; d--) {
                    if (b >= c) return;
                    a._sounds[d]._ended && (a._webAudio && a._sounds[d]._node && a._sounds[d]._node.disconnect(0), a._sounds.splice(d, 1), c--)
                }
            }
        },
        _getSoundIds: function(a) {
            var b = this;
            if ("undefined" == typeof a) {
                for (var c = [], d = 0; d < b._sounds.length; d++) c.push(b._sounds[d]._id);
                return c
            }
            return [a]
        },
        _refreshBuffer: function(a) {
            var c = this;
            return a._node.bufferSource = b.ctx.createBufferSource(), a._node.bufferSource.buffer = e[c._src], a._panner ? a._node.bufferSource.connect(a._panner) : a._node.bufferSource.connect(a._node), a._node.bufferSource.loop = a._loop, a._loop && (a._node.bufferSource.loopStart = a._start || 0, a._node.bufferSource.loopEnd = a._stop), a._node.bufferSource.playbackRate.value = a._rate, c
        },
        _cleanBuffer: function(a) {
            var b = this;
            if (b._scratchBuffer) {
                a.bufferSource.onended = null, a.bufferSource.disconnect(0);
                try {
                    a.bufferSource.buffer = b._scratchBuffer
                } catch (a) {}
            }
            return a.bufferSource = null, b
        }
    };
    var d = function(a) {
        this._parent = a, this.init()
    };
    d.prototype = {
        init: function() {
            var a = this,
                b = a._parent;
            return a._muted = b._muted, a._loop = b._loop, a._volume = b._volume, a._muted = b._muted, a._rate = b._rate, a._seek = 0, a._paused = !0, a._ended = !0, a._sprite = "__default", a._id = Math.round(Date.now() * Math.random()), b._sounds.push(a), a.create(), a
        },
        create: function() {
            var a = this,
                c = a._parent,
                d = b._muted || a._muted || a._parent._muted ? 0 : a._volume;
            return c._webAudio ? (a._node = "undefined" == typeof b.ctx.createGain ? b.ctx.createGainNode() : b.ctx.createGain(), a._node.gain.setValueAtTime(d, b.ctx.currentTime), a._node.paused = !0, a._node.connect(b.masterGain)) : (a._node = new Audio, a._errorFn = a._errorListener.bind(a), a._node.addEventListener("error", a._errorFn, !1), a._loadFn = a._loadListener.bind(a), a._node.addEventListener(b._canPlayEvent, a._loadFn, !1), a._node.src = c._src, a._node.preload = "auto", a._node.volume = d * b.volume(), a._node.load()), a
        },
        reset: function() {
            var a = this,
                b = a._parent;
            return a._muted = b._muted, a._loop = b._loop, a._volume = b._volume, a._muted = b._muted, a._rate = b._rate, a._seek = 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, a._sprite = "__default", a._id = Math.round(Date.now() * Math.random()), a
        },
        _errorListener: function() {
            var a = this;
            a._parent._emit("loaderror", a._id, a._node.error ? a._node.error.code : 0), a._node.removeEventListener("error", a._errorListener, !1)
        },
        _loadListener: function() {
            var a = this,
                c = a._parent;
            c._duration = Math.ceil(10 * a._node.duration) / 10, 0 === Object.keys(c._sprite).length && (c._sprite = {
                __default: [0, 1e3 * c._duration]
            }), "loaded" !== c._state && (c._state = "loaded", c._emit("load"), c._loadQueue()), c._autoplay && c.play(), a._node.removeEventListener(b._canPlayEvent, a._loadFn, !1)
        }
    };
    var e = {},
        f = function(a) {
            var b = a._src;
            if (e[b]) return a._duration = e[b].duration, void i(a);
            if (/^data:[^;]+;base64,/.test(b)) {
                for (var c = atob(b.split(",")[1]), d = new Uint8Array(c.length), f = 0; f < c.length; ++f) d[f] = c.charCodeAt(f);
                h(d.buffer, a)
            } else {
                var j = new XMLHttpRequest;
                j.open("GET", b, !0), j.responseType = "arraybuffer", j.onload = function() {
                    var b = (j.status + "")[0];
                    return "0" !== b && "2" !== b && "3" !== b ? void a._emit("loaderror", null, "Failed loading audio file with status: " + j.status + ".") : void h(j.response, a)
                }, j.onerror = function() {
                    a._webAudio && (a._html5 = !0, a._webAudio = !1, a._sounds = [], delete e[b], a.load())
                }, g(j)
            }
        },
        g = function(a) {
            try {
                a.send()
            } catch (b) {
                a.onerror()
            }
        },
        h = function(a, c) {
            b.ctx.decodeAudioData(a, function(a) {
                a && c._sounds.length > 0 && (e[c._src] = a, i(c, a))
            }, function() {
                c._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        i = function(a, b) {
            b && !a._duration && (a._duration = b.duration), 0 === Object.keys(a._sprite).length && (a._sprite = {
                __default: [0, 1e3 * a._duration]
            }), "loaded" !== a._state && (a._state = "loaded", a._emit("load"), a._loadQueue()), a._autoplay && a.play()
        },
        j = function() {
            b.noAudio = !1;
            try {
                "undefined" != typeof AudioContext ? b.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? b.ctx = new webkitAudioContext : b.usingWebAudio = !1
            } catch (a) {
                b.usingWebAudio = !1
            }
            if (!b.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    var a = new Audio;
                    "undefined" == typeof a.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (a) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                var a = new Audio;
                a.muted && (b.noAudio = !0)
            } catch (a) {}
            var c = /iP(hone|od|ad)/.test(b._navigator && b._navigator.platform),
                d = b._navigator && b._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = d ? parseInt(d[1], 10) : null;
            if (c && e && 9 > e) {
                var f = /safari/.test(b._navigator && b._navigator.userAgent.toLowerCase());
                (b._navigator && b._navigator.standalone && !f || b._navigator && !b._navigator.standalone && !f) && (b.usingWebAudio = !1)
            }
            b.usingWebAudio && (b.masterGain = "undefined" == typeof b.ctx.createGain ? b.ctx.createGainNode() : b.ctx.createGain(), b.masterGain.gain.value = 1, b.masterGain.connect(b.ctx.destination)), b._setup()
        };
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: b,
            Howl: c
        }
    }), "undefined" != typeof exports && (exports.Howler = b, exports.Howl = c), "undefined" != typeof window ? (window.HowlerGlobal = a, window.Howler = b, window.Howl = c, window.Sound = d) : "undefined" != typeof global && (global.HowlerGlobal = a, global.Howler = b, global.Howl = c, global.Sound = d)
}(),
function() {
    me.plugins = {}, me.plugin = function() {
        var a = {};
        return a.Base = me.Object.extend({
            init: function() {
                this.version = "4.0.0"
            }
        }), a.patch = function(a, b, c) {
            if ("undefined" != typeof a.prototype && (a = a.prototype), "function" == typeof a[b]) {
                var d = a[b];
                Object.defineProperty(a, b, {
                    configurable: !0,
                    value: function(a, b) {
                        return function() {
                            this._patched = d;
                            var a = b.apply(this, arguments);
                            return this._patched = null, a
                        }
                    }(b, c)
                })
            } else console.error(b + " is not an existing function")
        }, a.register = function(a, b) {
            me.plugin[b] && console.error("plugin " + b + " already registered");
            var c = [];
            arguments.length > 2 && (c = Array.prototype.slice.call(arguments, 1)), c[0] = a;
            var d = new(a.bind.apply(a, c));
            if (!(d && d instanceof me.plugin.Base)) throw new me.Error("Plugin should extend the me.plugin.Base Class !");
            if (me.sys.checkVersion(d.version) > 0) throw new me.Error("Plugin version mismatch, expected: " + d.version + ", got: " + me.version);
            me.plugins[b] = d
        }, a
    }()
}(), me.DraggableEntity = function(a, b, c, d) {
    "use strict";
    return a.extend({
        init: function(c, e, f) {
            a.prototype.init.apply(this, [c, e, f]), this.dragging = !1, this.dragId = null, this.grabOffset = new d(0, 0), this.onPointerEvent = b.registerPointerEvent, this.removePointerEvent = b.releasePointerEvent, this.initEvents()
        },
        initEvents: function() {
            var a = this;
            this.mouseDown = function(a) {
                this.translatePointerEvent(a, c.DRAGSTART)
            }, this.mouseUp = function(a) {
                this.translatePointerEvent(a, c.DRAGEND)
            }, this.onPointerEvent("pointerdown", this, this.mouseDown.bind(this)), this.onPointerEvent("pointerup", this, this.mouseUp.bind(this)), c.subscribe(c.POINTERMOVE, this.dragMove.bind(this)), c.subscribe(c.DRAGSTART, function(b, c) {
                c === a && a.dragStart(b)
            }), c.subscribe(c.DRAGEND, function(b, c) {
                c === a && a.dragEnd(b)
            })
        },
        translatePointerEvent: function(a, b) {
            c.publish(b, [a, this])
        },
        dragStart: function(a) {
            return this.dragging === !1 ? (this.dragging = !0, this.dragId = a.pointerId, this.grabOffset.set(a.gameX, a.gameY), this.grabOffset.sub(this.pos), !1) : void 0
        },
        dragMove: function(a) {
            this.dragging === !0 && this.dragId === a.pointerId && (this.pos.set(a.gameX, a.gameY, this.pos.z), this.pos.sub(this.grabOffset))
        },
        dragEnd: function() {
            return this.dragging === !0 ? (this.pointerId = void 0, this.dragging = !1, !1) : void 0
        },
        destroy: function() {
            c.unsubscribe(c.POINTERMOVE, this.dragMove), c.unsubscribe(c.DRAGSTART, this.dragStart), c.unsubscribe(c.DRAGEND, this.dragEnd), this.removePointerEvent("pointerdown", this), this.removePointerEvent("pointerup", this)
        }
    })
}(me.Entity, me.input, me.event, me.Vector2d), me.DroptargetEntity = function(a, b) {
    "use strict";
    return a.extend({
        init: function(c, d, e) {
            this.CHECKMETHOD_OVERLAP = "overlaps", this.CHECKMETHOD_CONTAINS = "contains", this.checkMethod = null, a.prototype.init.apply(this, [c, d, e]), b.subscribe(b.DRAGEND, this.checkOnMe.bind(this)), this.checkMethod = this[this.CHECKMETHOD_OVERLAP]
        },
        setCheckMethod: function(a) {
            "undefined" != typeof this[a] && (this.checkMethod = this[a])
        },
        checkOnMe: function(a, b) {
            b && this.checkMethod(b.getBounds()) && this.drop(b)
        },
        drop: function() {},
        destroy: function() {
            b.unsubscribe(b.DRAGEND, this.checkOnMe)
        }
    })
}(me.Entity, me.event), me.CollectableEntity = me.Entity.extend({
    init: function(a, b, c) {
        me.Entity.prototype.init.apply(this, [a, b, c]), this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT
    }
}), me.LevelEntity = me.Entity.extend({
    init: function(a, b, c) {
        me.Entity.prototype.init.apply(this, [a, b, c]), this.nextlevel = c.to, this.fade = c.fade, this.duration = c.duration, this.fading = !1, this.name = "levelEntity", this.gotolevel = c.to, this.loadLevelSettings = {}, ["container", "onLoaded", "flatten", "setViewportBounds"].forEach(function(a) {
            "undefined" != typeof c[a] && (this.loadLevelSettings[a] = c[a])
        }.bind(this)), this.body.collisionType = me.collision.types.ACTION_OBJECT
    },
    getlevelSettings: function() {
        return "string" == typeof this.loadLevelSettings.container && (this.loadLevelSettings.container = me.game.world.getChildByName(this.loadLevelSettings.container)[0]), this.loadLevelSettings
    },
    onFadeComplete: function() {
        me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings()), me.game.viewport.fadeOut(this.fade, this.duration)
    },
    goTo: function(a) {
        this.gotolevel = a || this.nextlevel, this.fade && this.duration ? this.fading || (this.fading = !0, me.game.viewport.fadeIn(this.fade, this.duration, this.onFadeComplete.bind(this))) : me.levelDirector.loadLevel(this.gotolevel, this.getlevelSettings())
    },
    onCollision: function() {
        return "levelEntity" === this.name && this.goTo.apply(this), !1
    }
}),
function() {
    var a = function() {
        var a = me.video.createCanvas(1, 1),
            b = a.getContext("2d");
        return b.fillStyle = "#fff", b.fillRect(0, 0, 1, 1), a
    }();
    me.ParticleEmitterSettings = {
        width: 0,
        height: 0,
        image: a,
        totalParticles: 50,
        angle: Math.PI / 2,
        angleVariation: 0,
        minLife: 1e3,
        maxLife: 3e3,
        speed: 2,
        speedVariation: 1,
        minRotation: 0,
        maxRotation: 0,
        minStartScale: 1,
        maxStartScale: 1,
        minEndScale: 0,
        maxEndScale: 0,
        gravity: 0,
        wind: 0,
        followTrajectory: !1,
        textureAdditive: !1,
        onlyInViewport: !0,
        floating: !1,
        maxParticles: 10,
        frequency: 100,
        duration: 1 / 0,
        framesToSkip: 0
    }, me.ParticleEmitter = me.Rect.extend({
        init: function(a, b, c) {
            this._stream = !1, this._frequencyTimer = 0, this._durationTimer = 0, this._enabled = !1, this.isRenderable = !1, me.Rect.prototype.init.apply(this, [a, b, 1 / 0, 1 / 0]), this.autoSort = !1, this.container = new me.ParticleContainer(this), Object.defineProperty(this.pos, "z", {
                get: function() {
                    return this.container.pos.z
                }.bind(this),
                set: function(a) {
                    this.container.pos.z = a
                }.bind(this),
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(this, "floating", {
                get: function() {
                    return this.container.floating
                },
                set: function(a) {
                    this.container.floating = a
                },
                enumerable: !0,
                configurable: !0
            }), this.reset(c)
        },
        onActivateEvent: function() {
            this.ancestor.addChild(this.container), this.container.pos.z = this.pos.z, this.ancestor.autoSort || this.ancestor.sort()
        },
        onDeactivateEvent: function() {
            this.ancestor.hasChild(this.container) && this.ancestor.removeChildNow(this.container)
        },
        destroy: function() {
            this.reset()
        },
        getRandomPointX: function() {
            return this.pos.x + 0..randomFloat(this.width)
        },
        getRandomPointY: function() {
            return this.pos.y + 0..randomFloat(this.height)
        },
        reset: function(a) {
            a = a || {};
            var b = me.ParticleEmitterSettings,
                c = "number" == typeof a.width ? a.width : b.width,
                d = "number" == typeof a.height ? a.height : b.height;
            this.resize(c, d), Object.assign(this, b, a), this.container.destroy()
        },
        addParticles: function(a) {
            for (var b = 0; ~~a > b; b++) {
                var c = me.pool.pull("me.Particle", this);
                this.container.addChild(c)
            }
        },
        isRunning: function() {
            return this._enabled && this._stream
        },
        streamParticles: function(a) {
            this._enabled = !0, this._stream = !0, this.frequency = Math.max(this.frequency, 1), this._durationTimer = "number" == typeof a ? a : this.duration
        },
        stopStream: function() {
            this._enabled = !1
        },
        burstParticles: function(a) {
            this._enabled = !0, this._stream = !1, this.addParticles("number" == typeof a ? a : this.totalParticles), this._enabled = !1
        },
        update: function(a) {
            if (this._enabled && this._stream) {
                if (this._durationTimer !== 1 / 0 && (this._durationTimer -= a, this._durationTimer <= 0)) return this.stopStream(), !1;
                this._frequencyTimer += a;
                var b = this.container.children.length;
                b < this.totalParticles && this._frequencyTimer >= this.frequency && (b + this.maxParticles <= this.totalParticles ? this.addParticles(this.maxParticles) : this.addParticles(this.totalParticles - b), this._frequencyTimer = 0)
            }
            return !0
        }
    })
}(),
function() {
    me.ParticleContainer = me.Container.extend({
        init: function(a) {
            this._viewport = me.game.viewport, me.Container.prototype.init.apply(this), this.autoSort = !1, this._updateCount = 0, this._dt = 0, this._emitter = a
        },
        getBounds: function() {
            return this._viewport
        },
        update: function(a) {
            if (++this._updateCount > this._emitter.framesToSkip && (this._updateCount = 0), this._updateCount > 0) return this._dt += a, !1;
            a += this._dt, this._dt = 0;
            for (var b = me.game.viewport, c = this.children.length - 1; c >= 0; --c) {
                var d = this.children[c];
                d.isRenderable = !0, d.inViewport = this.floating || d.pos.x < b.pos.x + b.width && b.pos.x < d.pos.x + d.width && d.pos.y < b.pos.y + b.height && b.pos.y < d.pos.y + d.height, d.update(a) || this.removeChildNow(d)
            }
            return !0
        },
        draw: function(a, b) {
            if (this.children.length > 0) {
                var c, d = a.getContext();
                this._emitter.textureAdditive && (c = d.globalCompositeOperation, d.globalCompositeOperation = "lighter"), me.Container.prototype.draw.apply(this, [a, b]), this._emitter.textureAdditive && (d.globalCompositeOperation = c)
            }
        }
    })
}(),
function() {
    me.Particle = me.Renderable.extend({
        init: function(a) {
            me.Renderable.prototype.init.apply(this, [a.getRandomPointX(), a.getRandomPointY(), a.image.width, a.image.height]), this.alwaysUpdate = !0, this.isRenderable = !1, this.image = a.image;
            var b = a.angle + (a.angleVariation > 0 ? (0..randomFloat(2) - 1) * a.angleVariation : 0),
                c = a.speed + (a.speedVariation > 0 ? (0..randomFloat(2) - 1) * a.speedVariation : 0);
            this.vel = new me.Vector2d(c * Math.cos(b), -c * Math.sin(b)), this.life = a.minLife.randomFloat(a.maxLife), this.startLife = this.life, this.startScale = a.minStartScale.randomFloat(a.maxStartScale).clamp(a.minStartScale, a.maxStartScale), this.endScale = a.minEndScale.randomFloat(a.maxEndScale).clamp(a.minEndScale, a.maxEndScale), this.gravity = a.gravity, this.wind = a.wind, this.followTrajectory = a.followTrajectory, this.onlyInViewport = a.onlyInViewport, this.pos.z = a.z, this._deltaInv = me.sys.fps / 1e3, a.followTrajectory || (this.angle = a.minRotation.randomFloat(a.maxRotation))
        },
        update: function(a) {
            var b = a * this._deltaInv;
            this.life = this.life > a ? this.life - a : 0;
            var c = this.life / this.startLife,
                d = this.startScale;
            this.startScale > this.endScale ? (d *= c, d = d < this.endScale ? this.endScale : d) : this.startScale < this.endScale && (d /= c, d = d > this.endScale ? this.endScale : d), this.alpha = c, this.vel.x += this.wind * b, this.vel.y += this.gravity * b;
            var e = this.followTrajectory ? Math.atan2(this.vel.y, this.vel.x) : this.angle;
            return this.pos.x += this.vel.x * b, this.pos.y += this.vel.y * b, this.currentTransform.setTransform(d, 0, 0, 0, d, 0, this.pos.x, this.pos.y, 1).rotate(e), (this.inViewport || !this.onlyInViewport) && this.life > 0
        },
        draw: function(a) {
            a.save(), a.setGlobalAlpha(a.globalAlpha() * this.alpha), a.transform(this.currentTransform);
            var b = this.width,
                c = this.height;
            a.drawImage(this.image, 0, 0, b, c, -b / 2, -c / 2, b, c), a.restore()
        }
    })
}(window);