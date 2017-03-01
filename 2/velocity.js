/*! VelocityJS.org (1.4.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(a) {
    "use strict";
    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return a && a === a.window
        }, c.type = function(a) {
            return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; f < g && (e = c.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (a.hasOwnProperty(f) && (e = c.apply(a[f], d), e === !1)) break
            } else if (h)
                for (; f < g && (e = c.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (a.hasOwnProperty(f) && (e = c.call(a[f], f, a[f]), e === !1)) break; return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var h = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[h] = d[h] || {}, d[h][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && (b ? c.each(b, function(a, b) {
                delete f[b]
            }) : delete d[e])
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)
                if (f = arguments[i])
                    for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d)));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return a && (b(Object(a)) ? ! function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a(a) {
                    for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent;
                    return b || document
                }
                var b = this[0],
                    d = a(b),
                    e = this.offset(),
                    f = /^(?:body|html)$/i.test(d.nodeName) ? {
                        top: 0,
                        left: 0
                    } : c(d).offset();
                return e.top -= parseFloat(b.style.marginTop) || 0, e.left -= parseFloat(b.style.marginLeft) || 0, d.style && (f.top += parseFloat(d.style.borderTopWidth) || 0, f.left += parseFloat(d.style.borderLeftWidth) || 0), {
                    top: e.top - f.top,
                    left: e.left - f.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window),
function(a) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    "use strict";
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }
        function f(a) {
            return t.isWrapped(a) ? a = s.call(a) : t.isNode(a) && (a = [a]), a
        }
        function g(a) {
            var b = o.data(a, "velocity");
            return null === b ? d : b
        }
        function h(a, b) {
            var c = g(a);
            c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
        }
        function i(a, b) {
            var c = g(a);
            c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
        }
        function j(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }
        function k(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }
            function g(a, b) {
                return 3 * b - 6 * a
            }
            function h(a) {
                return 3 * a
            }
            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }
            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }
            function k(b, c) {
                for (var e = 0; e < p; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }
            function l() {
                for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d)
            }
            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }
            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
            }
            function o() {
                y = !0, a === c && d === e || l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; w < 4; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }
        function l(a, b) {
            var c = a;
            return t.isString(a) ? x.Easings[a] || (c = !1) : c = t.isArray(a) && 1 === a.length ? j.apply(null, a) : t.isArray(a) && 2 === a.length ? y.apply(null, a.concat([b])) : !(!t.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = x.Easings[x.defaults.easing] ? x.defaults.easing : w), c
        }
        function m(a) {
            if (a) {
                var b = x.timestamp && a !== !0 ? a : r.now(),
                    c = x.State.calls.length;
                c > 1e4 && (x.State.calls = e(x.State.calls), c = x.State.calls.length);
                for (var f = 0; f < c; f++)
                    if (x.State.calls[f]) {
                        var h = x.State.calls[f],
                            i = h[0],
                            j = h[2],
                            k = h[3],
                            l = !!k,
                            q = null,
                            s = h[5],
                            u = h[6];
                        if (k || (k = x.State.calls[f][3] = b - 16), s) {
                            if (s.resume !== !0) continue;
                            k = h[3] = Math.round(b - u - 16), h[5] = null
                        }
                        u = h[6] = b - k;
                        for (var v = Math.min(u / j.duration, 1), w = 0, y = i.length; w < y; w++) {
                            var A = i[w],
                                C = A.element;
                            if (g(C)) {
                                var D = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        o.each(E, function(a, b) {
                                            z.setPropertyValue(C, "display", b)
                                        })
                                    }
                                    z.setPropertyValue(C, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && z.setPropertyValue(C, "visibility", j.visibility);
                                for (var F in A)
                                    if (A.hasOwnProperty(F) && "element" !== F) {
                                        var G, H = A[F],
                                            I = t.isString(H.easing) ? x.Easings[H.easing] : H.easing;
                                        if (t.isString(H.pattern)) {
                                            var J = 1 === v ? function(a, b, c) {
                                                var d = H.endValue[b];
                                                return c ? Math.round(d) : d
                                            } : function(a, b, c) {
                                                var d = H.startValue[b],
                                                    e = H.endValue[b] - d,
                                                    f = d + e * I(v, j, e);
                                                return c ? Math.round(f) : f
                                            };
                                            G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                        } else if (1 === v) G = H.endValue;
                                        else {
                                            var K = H.endValue - H.startValue;
                                            G = H.startValue + K * I(v, j, K)
                                        }
                                        if (!l && G === H.currentValue) continue;
                                        if (H.currentValue = G, "tween" === F) q = G;
                                        else {
                                            var L;
                                            if (z.Hooks.registered[F]) {
                                                L = z.Hooks.getRoot(F);
                                                var M = g(C).rootPropertyValueCache[L];
                                                M && (H.rootPropertyValue = M)
                                            }
                                            var N = z.setPropertyValue(C, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                            z.Hooks.registered[F] && (z.Normalizations.registered[L] ? g(C).rootPropertyValueCache[L] = z.Normalizations.registered[L]("extract", null, N[1]) : g(C).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
                                        }
                                    }
                                j.mobileHA && g(C).transformCache.translate3d === d && (g(C).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && z.flushTransformCache(C)
                            }
                        }
                        j.display !== d && "none" !== j.display && (x.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (x.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                    }
            }
            x.State.isTicking && B(m)
        }
        function n(a, b) {
            if (!x.State.calls[a]) return !1;
            for (var c = x.State.calls[a][0], e = x.State.calls[a][1], f = x.State.calls[a][2], h = x.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
                var l = c[j].element;
                b || f.loop || ("none" === f.display && z.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && z.setPropertyValue(l, "visibility", f.visibility));
                var m = g(l);
                if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                    m.isAnimating = !1, m.rootPropertyValueCache = {};
                    var n = !1;
                    o.each(z.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = m.transformCache[b];
                        m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                    }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && z.flushTransformCache(l), z.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (p) {
                    setTimeout(function() {
                        throw p
                    }, 1)
                }
                h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function(a, b) {
                    if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 === 0) {
                        var c = b.startValue;
                        b.startValue = b.endValue, b.endValue = c
                    }
                    /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), x(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue !== !1 && o.dequeue(l, f.queue)
            }
            x.State.calls[a] = !1;
            for (var q = 0, r = x.State.calls.length; q < r; q++)
                if (x.State.calls[q] !== !1) {
                    i = !0;
                    break
                }
            i === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = [])
        }
        var o, p = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            q = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                        b(d + c)
                    }, c)
                }
            }(),
            r = function() {
                var a = b.performance || {};
                if (!Object.prototype.hasOwnProperty.call(a, "now")) {
                    var c = a.timing && a.timing.domComplete ? a.timing.domComplete : (new Date).getTime();
                    a.now = function() {
                        return (new Date).getTime() - c
                    }
                }
                return a
            }(),
            s = function() {
                var a = Array.prototype.slice;
                try {
                    a.call(c.documentElement)
                } catch (b) {
                    a = function() {
                        for (var a = this.length, b = []; --a > 0;) b[a] = this[a];
                        return b
                    }
                }
                return a
            }(),
            t = {
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isWrapped: function(a) {
                    return a && t.isNumber(a.length) && !t.isString(a) && !t.isFunction(a) && !t.isNode(a) && (0 === a.length || t.isNode(a[0]))
                },
                isSVG: function(a) {
                    return b.SVGElement && a instanceof b.SVGElement
                },
                isEmptyObject: function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }
            },
            u = !1;
        if (a.fn && a.fn.jquery ? (o = a, u = !0) : o = b.Velocity.Utilities, p <= 8 && !u) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400,
            w = "swing",
            x = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: b.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: c.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: o,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: {
                    queue: "",
                    duration: v,
                    easing: w,
                    begin: d,
                    complete: d,
                    progress: d,
                    display: d,
                    visibility: d,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(a) {
                    o.data(a, "velocity", {
                        isSVG: t.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 4,
                    patch: 2
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(x.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] = {
                                resume: !1
                            }
                        }
                    }), o.each(x.State.delayedElements, function(a, c) {
                        c && h(c, b)
                    })
                },
                resumeAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(x.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] && (c[5].resume = !0)
                        }
                    }), o.each(x.State.delayedElements, function(a, c) {
                        c && i(c, b)
                    })
                }
            };
        b.pageYOffset !== d ? (x.State.scrollAnchor = b, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");
        var y = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }
            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }
            function c(c, d) {
                var e = {
                        dx: c.v,
                        dv: a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
                    if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        x.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, o.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            x.Easings[b[0]] = k.apply(null, b[1])
        });
        var z = x.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < z.Lists.colors.length; a++) {
                        var b = "color" === z.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        z.Hooks.templates[z.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (p)
                        for (c in z.Hooks.templates)
                            if (z.Hooks.templates.hasOwnProperty(c)) {
                                d = z.Hooks.templates[c], e = d[0].split(" ");
                                var f = d[1].match(z.RegEx.valueSplit);
                                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), z.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                            }
                    for (c in z.Hooks.templates)
                        if (z.Hooks.templates.hasOwnProperty(c)) {
                            d = z.Hooks.templates[c], e = d[0].split(" ");
                            for (var g in e)
                                if (e.hasOwnProperty(g)) {
                                    var h = c + e[g],
                                        i = g;
                                    z.Hooks.registered[h] = [c, i]
                                }
                        }
                },
                getRoot: function(a) {
                    var b = z.Hooks.registered[a];
                    return b ? b[0] : a
                },
                getUnit: function(a, b) {
                    var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return c && z.Lists.units.indexOf(c) >= 0 ? c : ""
                },
                fixColors: function(a) {
                    return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) {
                        return z.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + z.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
                    })
                },
                cleanRootPropertyValue: function(a, b) {
                    return z.RegEx.valueUnwrap.test(b) && (b = b.match(z.RegEx.valueUnwrap)[1]), z.Values.isCSSNullValue(b) && (b = z.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = z.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = z.Hooks.cleanRootPropertyValue(d, b), b.toString().match(z.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = z.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0],
                            h = d[1];
                        return c = z.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(z.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return z.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(z.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return x.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (p <= 8) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    function a(a, b, c) {
                        var d = "border-box" === z.getPropertyValue(b, "boxSizing").toString().toLowerCase();
                        if (d === (c || !1)) {
                            var e, f, g = 0,
                                h = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                                i = ["padding" + h[0], "padding" + h[1], "border" + h[0] + "Width", "border" + h[1] + "Width"];
                            for (e = 0; e < i.length; e++) f = parseFloat(z.getPropertyValue(b, i[e])), isNaN(f) || (g += f);
                            return c ? -g : g
                        }
                        return 0
                    }
                    function b(b, c) {
                        return function(d, e, f) {
                            switch (d) {
                                case "name":
                                    return b;
                                case "extract":
                                    return parseFloat(f) + a(b, e, c);
                                case "inject":
                                    return parseFloat(f) - a(b, e, c) + "px"
                            }
                        }
                    }
                    p && !(p > 9) || x.State.isGingerbread || (z.Lists.transformsBase = z.Lists.transformsBase.concat(z.Lists.transforms3D));
                    for (var c = 0; c < z.Lists.transformsBase.length; c++) ! function() {
                        var a = z.Lists.transformsBase[c];
                        z.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (a.substr(0, a.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            x.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                            }
                        }
                    }();
                    for (var e = 0; e < z.Lists.colors.length; e++) ! function() {
                        var a = z.Lists.colors[e];
                        z.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return a;
                                case "extract":
                                    var f;
                                    if (z.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : z.RegEx.isHex.test(e) ? g = "rgb(" + z.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                                case "inject":
                                    return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    z.Normalizations.registered.innerWidth = b("width", !0), z.Normalizations.registered.innerHeight = b("height", !0), z.Normalizations.registered.outerWidth = b("width"), z.Normalizations.registered.outerHeight = b("height")
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || x.State.isAndroid && !x.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (x.State.prefixMatches[a]) return [x.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), t.isString(x.State.prefixElement.style[e])) return x.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.add(b);
                        else if (t.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c + (c ? " " : "") + b)
                    }
                },
                removeClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.remove(b);
                        else if (t.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    var e = 0;
                    if (p <= 8) e = o.css(a, c);
                    else {
                        var i = !1;
                        /^(width|height)$/.test(c) && 0 === z.getPropertyValue(a, "display") && (i = !0, z.setPropertyValue(a, "display", z.Values.getDisplayType(a)));
                        var j = function() {
                            i && z.setPropertyValue(a, "display", "none")
                        };
                        if (!f) {
                            if ("height" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(z.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingBottom")) || 0);
                                return j(), k
                            }
                            if ("width" === c && "border-box" !== z.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(z.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(z.getPropertyValue(a, "paddingRight")) || 0);
                                return j(), l
                            }
                        }
                        var m;
                        m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                    }
                    if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                        var n = h(a, "position");
                        ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                    }
                    return e
                }
                var i;
                if (z.Hooks.registered[c]) {
                    var j = c,
                        k = z.Hooks.getRoot(j);
                    e === d && (e = z.getPropertyValue(a, z.Names.prefixCheck(k)[0])), z.Normalizations.registered[k] && (e = z.Normalizations.registered[k]("extract", a, e)), i = z.Hooks.extractValue(j, e)
                } else if (z.Normalizations.registered[c]) {
                    var l, m;
                    l = z.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, z.Names.prefixCheck(l)[0]), z.Values.isCSSNullValue(m) && z.Hooks.templates[c] && (m = z.Hooks.templates[c][1])), i = z.Normalizations.registered[c]("extract", a, m)
                }
                if (!/^[\d-]/.test(i)) {
                    var n = g(a);
                    if (n && n.isSVG && z.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try {
                            i = a.getBBox()[c]
                        } catch (q) {
                            i = 0
                        } else i = a.getAttribute(c);
                        else i = h(a, z.Names.prefixCheck(c)[0])
                }
                return z.Values.isCSSNullValue(i) && (i = 0), x.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (z.Normalizations.registered[c] && "transform" === z.Normalizations.registered[c]("name", a)) z.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (z.Hooks.registered[c]) {
                        var i = c,
                            j = z.Hooks.getRoot(c);
                        e = e || z.getPropertyValue(a, j), d = z.Hooks.injectValue(i, d, e), c = j
                    }
                    if (z.Normalizations.registered[c] && (d = z.Normalizations.registered[c]("inject", a, d), c = z.Normalizations.registered[c]("name", a)), h = z.Names.prefixCheck(c)[0], p <= 8) try {
                        a.style[h] = d
                    } catch (k) {
                        x.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else {
                        var l = g(a);
                        l && l.isSVG && z.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                    }
                    x.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                var b = "",
                    c = g(a);
                if ((p || x.State.isAndroid && !x.State.isChrome) && c && c.isSVG) {
                    var d = function(b) {
                            return parseFloat(z.getPropertyValue(a, b))
                        },
                        e = {
                            translate: [d("translateX"), d("translateY")],
                            skewX: [d("skewX")],
                            skewY: [d("skewY")],
                            scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
                            rotate: [d("rotateZ"), 0, 0]
                        };
                    o.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
                    })
                } else {
                    var f, h;
                    o.each(g(a).transformCache, function(c) {
                        return f = g(a).transformCache[c], "transformPerspective" === c ? (h = f, !0) : (9 === p && "rotateZ" === c && (c = "rotate"), void(b += c + f + " "))
                    }), h && (b = "perspective" + h + " " + b)
                }
                z.setPropertyValue(a, "transform", b)
            }
        };
        z.Hooks.register(), z.Normalizations.register(), x.hook = function(a, b, c) {
            var e;
            return a = f(a), o.each(a, function(a, f) {
                if (g(f) === d && x.init(f), c === d) e === d && (e = z.getPropertyValue(f, b));
                else {
                    var h = z.setPropertyValue(f, b, c);
                    "transform" === h[0] && x.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var A = function() {
            function a() {
                return k ? y.promise || null : p
            }
            function e(a, e) {
                function f(f) {
                    var k, n;
                    if (i.begin && 0 === C) try {
                        i.begin.call(r, r)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                    if ("scroll" === F) {
                        var q, v, w, A = /^x$/i.test(i.axis) ? "Left" : "Top",
                            D = parseFloat(i.offset) || 0;
                        i.container ? t.isWrapped(i.container) || t.isNode(i.container) ? (i.container = i.container[0] || i.container, q = i.container["scroll" + A], w = q + o(a).position()[A.toLowerCase()] + D) : i.container = null : (q = x.State.scrollAnchor[x.State["scrollProperty" + A]], v = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], w = o(a).offset()[A.toLowerCase()] + D), j = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: q,
                                currentValue: q,
                                endValue: w,
                                unitType: "",
                                easing: i.easing,
                                scrollData: {
                                    container: i.container,
                                    direction: A,
                                    alternateValue: v
                                }
                            },
                            element: a
                        }, x.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                    } else if ("reverse" === F) {
                        if (k = g(a), !k) return;
                        if (!k.tweensContainer) return void o.dequeue(a, i.queue);
                        "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
                        for (var E in n)
                            if (n.hasOwnProperty(E) && "element" !== E) {
                                var G = n[E].startValue;
                                n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = G, t.isEmptyObject(u) || (n[E].easing = i.easing), x.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a)
                            }
                        j = n
                    } else if ("start" === F) {
                        k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
                        var H = function(b, c) {
                                var d, f, g;
                                return t.isFunction(b) && (b = b.call(a, e, B)), t.isArray(b) ? (d = b[0], !t.isArray(b[1]) && /^[\d-]/.test(b[1]) || t.isFunction(b[1]) || z.RegEx.isHex.test(b[1]) ? g = b[1] : t.isString(b[1]) && !z.RegEx.isHex.test(b[1]) && x.Easings[b[1]] || t.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), t.isFunction(d) && (d = d.call(a, e, B)), t.isFunction(g) && (g = g.call(a, e, B)), [d || 0, f, g]
                            },
                            I = function(e, f) {
                                var g, l = z.Hooks.getRoot(e),
                                    m = !1,
                                    p = f[0],
                                    q = f[1],
                                    r = f[2];
                                if (!(k && k.isSVG || "tween" === l || z.Names.prefixCheck(l)[1] !== !1 || z.Normalizations.registered[l] !== d)) return void(x.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
                                (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : z.Hooks.registered[e] ? r === d ? (m = z.getPropertyValue(a, l), r = z.getPropertyValue(a, e, m)) : m = z.Hooks.templates[l][1] : r === d && (r = z.getPropertyValue(a, e));
                                var s, u, v, w = !1,
                                    y = function(a, b) {
                                        var c, d;
                                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                            return c = a, ""
                                        }), c || (c = z.Values.getUnitType(a)), [d, c]
                                    };
                                if (r !== p && t.isString(r) && t.isString(p)) {
                                    g = "";
                                    var A = 0,
                                        B = 0,
                                        C = [],
                                        D = [],
                                        E = 0,
                                        F = 0,
                                        G = 0;
                                    for (r = z.Hooks.fixColors(r), p = z.Hooks.fixColors(p); A < r.length && B < p.length;) {
                                        var H = r[A],
                                            I = p[B];
                                        if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                                            for (var J = H, K = I, M = ".", N = "."; ++A < r.length;) {
                                                if (H = r[A], H === M) M = "..";
                                                else if (!/\d/.test(H)) break;
                                                J += H
                                            }
                                            for (; ++B < p.length;) {
                                                if (I = p[B], I === N) N = "..";
                                                else if (!/\d/.test(I)) break;
                                                K += I
                                            }
                                            var O = z.Hooks.getUnit(r, A),
                                                P = z.Hooks.getUnit(p, B);
                                            if (A += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
                                            else {
                                                var Q = parseFloat(J),
                                                    R = parseFloat(K);
                                                g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                            }
                                        } else {
                                            if (H !== I) {
                                                E = 0;
                                                break
                                            }
                                            g += H, A++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                        }
                                    }
                                    A === r.length && B === p.length || (x.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (x.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, u = v = "") : g = d)
                                }
                                g || (s = y(e, r), r = s[0], v = s[1], s = y(e, p), p = s[0].replace(/^([+-\/*])=/, function(a, b) {
                                    return w = b, ""
                                }), u = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, u = "em") : /^scale/.test(e) ? (p /= 100, u = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, u = "")));
                                var S = function() {
                                    var d = {
                                            myParent: a.parentNode || c.body,
                                            position: z.getPropertyValue(a, "position"),
                                            fontSize: z.getPropertyValue(a, "fontSize")
                                        },
                                        e = d.position === L.lastPosition && d.myParent === L.lastParent,
                                        f = d.fontSize === L.lastFontSize;
                                    L.lastParent = d.myParent, L.lastPosition = d.position, L.lastFontSize = d.fontSize;
                                    var g = 100,
                                        h = {};
                                    if (f && e) h.emToPx = L.lastEmToPx, h.percentToPxWidth = L.lastPercentToPxWidth, h.percentToPxHeight = L.lastPercentToPxHeight;
                                    else {
                                        var i = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                        x.init(i), d.myParent.appendChild(i), o.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                            x.CSS.setPropertyValue(i, b, "hidden")
                                        }), x.CSS.setPropertyValue(i, "position", d.position), x.CSS.setPropertyValue(i, "fontSize", d.fontSize), x.CSS.setPropertyValue(i, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                            x.CSS.setPropertyValue(i, b, g + "%")
                                        }), x.CSS.setPropertyValue(i, "paddingLeft", g + "em"), h.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(z.getPropertyValue(i, "width", null, !0)) || 1) / g, h.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(z.getPropertyValue(i, "height", null, !0)) || 1) / g, h.emToPx = L.lastEmToPx = (parseFloat(z.getPropertyValue(i, "paddingLeft")) || 1) / g, d.myParent.removeChild(i)
                                    }
                                    return null === L.remToPx && (L.remToPx = parseFloat(z.getPropertyValue(c.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(b.innerWidth) / 100, L.vhToPx = parseFloat(b.innerHeight) / 100), h.remToPx = L.remToPx, h.vwToPx = L.vwToPx, h.vhToPx = L.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(h), a), h
                                };
                                if (/[\/*]/.test(w)) u = v;
                                else if (v !== u && 0 !== r)
                                    if (0 === p) u = v;
                                    else {
                                        h = h || S();
                                        var T = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                        switch (v) {
                                            case "%":
                                                r *= "x" === T ? h.percentToPxWidth : h.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                r *= h[v + "ToPx"]
                                        }
                                        switch (u) {
                                            case "%":
                                                r *= 1 / ("x" === T ? h.percentToPxWidth : h.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                r *= 1 / h[u + "ToPx"]
                                        }
                                    }
                                switch (w) {
                                    case "+":
                                        p = r + p;
                                        break;
                                    case "-":
                                        p = r - p;
                                        break;
                                    case "*":
                                        p *= r;
                                        break;
                                    case "/":
                                        p = r / p
                                }
                                j[e] = {
                                    rootPropertyValue: m,
                                    startValue: r,
                                    currentValue: r,
                                    endValue: p,
                                    unitType: u,
                                    easing: q
                                }, g && (j[e].pattern = g), x.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                            };
                        for (var J in s)
                            if (s.hasOwnProperty(J)) {
                                var K = z.Names.camelCase(J),
                                    N = H(s[J]);
                                if (z.Lists.colors.indexOf(K) >= 0) {
                                    var O = N[0],
                                        P = N[1],
                                        Q = N[2];
                                    if (z.RegEx.isHex.test(O)) {
                                        for (var R = ["Red", "Green", "Blue"], S = z.Values.hexToRgb(O), T = Q ? z.Values.hexToRgb(Q) : d, U = 0; U < R.length; U++) {
                                            var V = [S[U]];
                                            P && V.push(P), T !== d && V.push(T[U]), I(K + R[U], V)
                                        }
                                        continue
                                    }
                                }
                                I(K, N)
                            }
                        j.element = a
                    }
                    j.element && (z.Values.addClass(a, "velocity-animating"), M.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), C === B - 1 ? (x.State.calls.push([M, r, i, null, y.resolver, null, 0]), x.State.isTicking === !1 && (x.State.isTicking = !0, m())) : C++)
                }
                var h, i = o.extend({}, x.defaults, u),
                    j = {};
                switch (g(a) === d && x.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function(b) {
                    x.velocityQueueEntryFlag = !0;
                    var c = x.State.delayedElements.count++;
                    x.State.delayedElements[c] = a;
                    var d = function(a) {
                        return function() {
                            x.State.delayedElements[a] = !1, b()
                        }
                    }(c);
                    g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                        setTimeout: setTimeout(b, parseFloat(i.delay)),
                        next: d
                    }
                }), i.duration.toString().toLowerCase()) {
                    case "fast":
                        i.duration = 200;
                        break;
                    case "normal":
                        i.duration = v;
                        break;
                    case "slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                if (x.mock !== !1 && (x.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(x.mock) || 1, i.delay *= parseFloat(x.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !t.isFunction(i.begin) && (i.begin = null), i.progress && !t.isFunction(i.progress) && (i.progress = null), i.complete && !t.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = x.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && x.State.isMobile && !x.State.isGingerbread, i.queue === !1)
                    if (i.delay) {
                        var k = x.State.delayedElements.count++;
                        x.State.delayedElements[k] = a;
                        var n = function(a) {
                            return function() {
                                x.State.delayedElements[a] = !1, f()
                            }
                        }(k);
                        g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                            setTimeout: setTimeout(f, parseFloat(i.delay)),
                            next: n
                        }
                    } else f();
                else o.queue(a, i.queue, function(a, b) {
                    return b === !0 ? (y.promise && y.resolver(r), !0) : (x.velocityQueueEntryFlag = !0, void f(a))
                });
                "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
            }
            var j, k, p, q, r, s, u, w = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || t.isString(arguments[0].properties));
            t.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = w ? arguments[0].elements || arguments[0].e : arguments[0]);
            var y = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            if (k && x.Promise && (y.promise = new x.Promise(function(a, b) {
                    y.resolver = a, y.rejecter = b
                })), w ? (s = arguments[0].properties || arguments[0].p, u = arguments[0].options || arguments[0].o) : (s = arguments[q], u = arguments[q + 1]), r = f(r), !r) return void(y.promise && (s && u && u.promiseRejectEmpty === !1 ? y.resolver() : y.rejecter()));
            var B = r.length,
                C = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(u)) {
                var D = q + 1;
                u = {};
                for (var E = D; E < arguments.length; E++) t.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? t.isString(arguments[E]) || t.isArray(arguments[E]) ? u.easing = arguments[E] : t.isFunction(arguments[E]) && (u.complete = arguments[E]) : u.duration = arguments[E]
            }
            var F;
            switch (s) {
                case "scroll":
                    F = "scroll";
                    break;
                case "reverse":
                    F = "reverse";
                    break;
                case "pause":
                    var G = (new Date).getTime();
                    return o.each(r, function(a, b) {
                        h(b, G)
                    }), o.each(x.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (o.each(r, function(a, d) {
                                if (d === e) return b[5] = {
                                    resume: !1
                                }, c = !0, !1
                            }), !c && void 0)
                        })
                    }), a();
                case "resume":
                    return o.each(r, function(a, b) {
                        i(b, G)
                    }), o.each(x.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function(a, d) {
                                if (d === e) return b[5].resume = !0, c = !0, !1
                            }), !c && void 0))
                        })
                    }), a();
                case "finish":
                case "finishAll":
                case "stop":
                    o.each(r, function(a, b) {
                        g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || u !== !0 && !t.isString(u) || (o.each(o.queue(b, t.isString(u) ? u : ""), function(a, b) {
                            t.isFunction(b) && b()
                        }), o.queue(b, t.isString(u) ? u : "", []))
                    });
                    var H = [];
                    return o.each(x.State.calls, function(a, b) {
                        b && o.each(b[1], function(c, e) {
                            var f = u === d ? "" : u;
                            return f !== !0 && b[2].queue !== f && (u !== d || b[2].queue !== !1) || void o.each(r, function(c, d) {
                                if (d === e)
                                    if ((u === !0 || t.isString(u)) && (o.each(o.queue(d, t.isString(u) ? u : ""), function(a, b) {
                                            t.isFunction(b) && b(null, !0)
                                        }), o.queue(d, t.isString(u) ? u : "", [])), "stop" === s) {
                                        var h = g(d);
                                        h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function(a, b) {
                                            b.endValue = b.currentValue
                                        }), H.push(a)
                                    } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1)
                            })
                        })
                    }), "stop" === s && (o.each(H, function(a, b) {
                        n(b, !0)
                    }), y.promise && y.resolver(r)), a();
                default:
                    if (!o.isPlainObject(s) || t.isEmptyObject(s)) {
                        if (t.isString(s) && x.Redirects[s]) {
                            j = o.extend({}, u);
                            var I = j.duration,
                                J = j.delay || 0;
                            return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function(a, b) {
                                parseFloat(j.stagger) ? j.delay = J + parseFloat(j.stagger) * a : t.isFunction(j.stagger) && (j.delay = J + j.stagger.call(b, a, B)), j.drag && (j.duration = parseFloat(I) || (/^(callout|transition)/.test(s) ? 1e3 : v), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / B : (a + 1) / B), .75 * j.duration, 200)), x.Redirects[s].call(b, b, j || {}, a, B, r, y.promise ? y : d)
                            }), a()
                        }
                        var K = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return y.promise ? y.rejecter(new Error(K)) : console.log(K), a()
                    }
                    F = "start"
            }
            var L = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                },
                M = [];
            o.each(r, function(a, b) {
                t.isNode(b) && e(b, a)
            }), j = o.extend({}, x.defaults, u), j.loop = parseInt(j.loop, 10);
            var N = 2 * j.loop - 1;
            if (j.loop)
                for (var O = 0; O < N; O++) {
                    var P = {
                        delay: j.delay,
                        progress: j.progress
                    };
                    O === N - 1 && (P.display = j.display, P.visibility = j.visibility, P.complete = j.complete), A(r, "reverse", P)
                }
            return a()
        };
        x = o.extend(A, x), x.animate = A;
        var B = b.requestAnimationFrame || q;
        if (!x.State.isMobile && c.hidden !== d) {
            var C = function() {
                c.hidden ? (B = function(a) {
                    return setTimeout(function() {
                        a(!0)
                    }, 16)
                }, m()) : B = b.requestAnimationFrame || q
            };
            C(), c.addEventListener("visibilitychange", C)
        }
        return a.Velocity = x, a !== b && (a.fn.velocity = A, a.fn.velocity.defaults = x.defaults), o.each(["Down", "Up"], function(a, b) {
            x.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {},
                    m = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                i.display === d && (i.display = "Down" === b ? "inline" === x.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    0 === e && j && j.call(g, g);
                    for (var c in m)
                        if (m.hasOwnProperty(c)) {
                            l[c] = a.style[c];
                            var d = z.getPropertyValue(a, c);
                            m[c] = "Down" === b ? [d, 0] : [0, d]
                        }
                    l.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
                    e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
                }, x(a, m, i)
            }
        }), o.each(["In", "Out"], function(a, b) {
            x.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.complete,
                    k = {
                        opacity: "In" === b ? 1 : 0
                    };
                0 !== e && (i.begin = null), e !== f - 1 ? i.complete = null : i.complete = function() {
                    j && j.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), x(this, k, i)
            }
        }), x
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
