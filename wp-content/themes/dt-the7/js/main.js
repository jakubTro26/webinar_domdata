function Layzr(a) {
    (this._lastScroll = 0),
        (this._ticking = !1),
        (a = a || {}),
        (this._optionsContainer = document.querySelector(a.container) || window),
        (this._optionsSelector = a.selector || "[data-layzr]"),
        (this._optionsAttr = a.attr || "data-layzr"),
        (this._optionsAttrSrcSet = a.attrSrcSet || "data-layzr-srcset"),
        (this._optionsAttrRetina = a.retinaAttr || "data-layzr-retina"),
        (this._optionsAttrBg = a.bgAttr || "data-layzr-bg"),
        (this._optionsAttrHidden = a.hiddenAttr || "data-layzr-hidden"),
        (this._optionsThreshold = a.threshold || 0),
        (this._optionsBefore = a.before || null),
        (this._optionsAfter = a.after || null),
        (this._optionsCallback = a.callback || null),
        (this._retina = window.devicePixelRatio > 1),
        (this._srcAttr = this._retina ? this._optionsAttrRetina : this._optionsAttr),
        (this._nodes = document.querySelectorAll(this._optionsSelector)),
        (this._handlerBind = this._requestScroll.bind(this)),
        this._create();
}
function simple_tooltip(a, b) {
    jQuery(a).each(function (a) {
        jQuery("body").append("<div class='" + b + "' id='" + b + a + "'>" + jQuery(this).find("span.tooltip-c").html() + "</div>");
        var c = jQuery("#" + b + a);
        jQuery(this)
            .removeAttr("title")
            .mouseover(function () {
                c.css({ opacity: 1, display: "none" }).fadeIn(400);
            })
            .mousemove(function (a) {
                var b,
                    d,
                    e = jQuery(window).scrollTop(),
                    f = jQuery(window).width(),
                    g = 15;
                (b = f - 30 >= c.width() + a.pageX ? a.pageX + g : f - c.width() - g), (d = e + 30 >= a.pageY - c.height() ? e + g : a.pageY - c.height() - 33), c.css({ left: b, top: d });
            })
            .mouseout(function () {
                c.css({ left: "-9999px" });
            });
    });
}
(jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
        },
        easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c;
        },
        easeOutQuad: function (a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c;
        },
        easeInOutQuad: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c;
        },
        easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c;
        },
        easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c;
        },
        easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b + c : (d / 2) * ((b -= 2) * b * b + 2) + c;
        },
        easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c;
        },
        easeOutQuart: function (a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c;
        },
        easeInOutQuart: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b + c : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
        },
        easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c;
        },
        easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
        },
        easeInOutQuint: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b * b + c : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
        },
        easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
        },
        easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin((b / e) * (Math.PI / 2)) + c;
        },
        easeInOutSine: function (a, b, c, d, e) {
            return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
        },
        easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
        },
        easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (1 - Math.pow(2, (-10 * b) / e)) + c;
        },
        easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c : (d / 2) * (2 - Math.pow(2, -10 * --b)) + c;
        },
        easeInCirc: function (a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
        },
        easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
        },
        easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
        },
        easeInElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if ((g || (g = 0.3 * e), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return -h * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g) + c;
        },
        easeOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if ((g || (g = 0.3 * e), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((2 * (b * e - f) * Math.PI) / g) + d + c;
        },
        easeInOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if ((g || (g = 0.3 * e * 1.5), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return b < 1 ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g) * 0.5 + d + c;
        },
        easeInBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
        },
        easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
        },
        easeInOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? (d / 2) * b * b * ((1 + (f *= 1.525)) * b - f) + c : (d / 2) * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c;
        },
        easeInBounce: function (a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
        },
        easeOutBounce: function (a, b, c, d, e) {
            return (b /= e) < 1 / 2.75
                ? 7.5625 * d * b * b + c
                : b < 2 / 2.75
                ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
                : b < 2.5 / 2.75
                ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
                : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
        },
        easeInOutBounce: function (a, b, c, d, e) {
            return b < e / 2 ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + 0.5 * d + c;
        },
    }),
    (function () {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
            (window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"]), (window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (b, c) {
                var d = new Date().getTime(),
                    e = Math.max(0, 16 - (d - a)),
                    f = window.setTimeout(function () {
                        b(d + e);
                    }, e);
                return (a = d + e), f;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (a) {
                    clearTimeout(a);
                });
    })(),
    (Layzr.prototype._requestScroll = function () {
        this._optionsContainer === window ? (this._lastScroll = window.pageYOffset) : (this._lastScroll = this._optionsContainer.scrollTop + this._getOffset(this._optionsContainer)), this._requestTick();
    }),
    (Layzr.prototype._requestTick = function () {
        this._ticking || (requestAnimationFrame(this.update.bind(this)), (this._ticking = !0));
    }),
    (Layzr.prototype._getOffset = function (a) {
        if (a.hasAttribute("data-src"))
            var b = a.getAttribute("data-src"),
                c = b.substring(b.lastIndexOf(".") + 1);
        return "png" == c && a.parentNode.classList.add("layzr-bg-transparent"), a.getBoundingClientRect().top + window.pageYOffset;
    }),
    (Layzr.prototype._getContainerHeight = function () {
        return this._optionsContainer.innerHeight || this._optionsContainer.offsetHeight;
    }),
    (Layzr.prototype._create = function () {
        this._handlerBind(), this._optionsContainer.addEventListener("scroll", this._handlerBind, !1), this._optionsContainer.addEventListener("resize", this._handlerBind, !1);
    }),
    (Layzr.prototype._destroy = function () {
        this._optionsContainer.removeEventListener("scroll", this._handlerBind, !1), this._optionsContainer.removeEventListener("resize", this._handlerBind, !1);
    }),
    (Layzr.prototype._inViewport = function (a) {
        var b = this._lastScroll,
            c = b + this._getContainerHeight(),
            d = this._getOffset(a),
            e = d + this._getContainerHeight(),
            f = (this._optionsThreshold / 100) * window.innerHeight;
        return e >= b - f && d <= c + f && !a.hasAttribute(this._optionsAttrHidden);
    }),
    (Layzr.prototype._reveal = function (a) {
        var b = a.getAttribute(this._srcAttr) || a.getAttribute(this._optionsAttr),
            c = this;
        if ("function" == typeof this._optionsCallback) {
            a.addEventListener
                ? a.addEventListener("load", function () {
                      c._optionsCallback.call(a);
                  })
                : a.attachEvent("onload", function () {
                      c._optionsCallback.call(a);
                  });
        }
        "function" == typeof this._optionsBefore && this._optionsBefore.call(a),
            a.hasAttribute(this._optionsAttrBg) ? (a.style.backgroundImage = "url(" + b + ")") : (b && a.setAttribute("src", b), a.hasAttribute(this._optionsAttrSrcSet) && a.setAttribute("srcset", a.getAttribute(this._optionsAttrSrcSet))),
            "function" == typeof this._optionsAfter && this._optionsAfter.call(a),
            a.removeAttribute(this._optionsAttr),
            a.removeAttribute(this._optionsAttrSrcSet),
            a.removeAttribute(this._optionsAttrRetina),
            a.removeAttribute(this._optionsAttrBg),
            a.removeAttribute(this._optionsAttrHidden);
    }),
    (Layzr.prototype.updateSelector = function () {
        this._nodes = document.querySelectorAll(this._optionsSelector);
    }),
    (Layzr.prototype.update = function () {
        for (var a = this._nodes.length, b = 0; b < a; b++) {
            var c = this._nodes[b];
            (c.hasAttribute(this._optionsAttr) || c.hasAttribute(this._optionsAttrSrcSet) || c.hasAttribute(this._optionsAttrRetina)) && this._inViewport(c) && this._reveal(c);
        }
        this._ticking = !1;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? (module.exports = b()) : (a.PhotoSwipe = b());
    })(this, function () {
        "use strict";
        return function (a, b, c, d) {
            var e = {
                features: null,
                bind: function (a, b, c, d) {
                    var e = (d ? "remove" : "add") + "EventListener";
                    b = b.split(" ");
                    for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
                },
                isArray: function (a) {
                    return a instanceof Array;
                },
                createEl: function (a, b) {
                    var c = document.createElement(b || "div");
                    return a && (c.className = a), c;
                },
                getScrollY: function () {
                    var a = window.pageYOffset;
                    return void 0 !== a ? a : document.documentElement.scrollTop;
                },
                unbind: function (a, b, c) {
                    e.bind(a, b, c, !0);
                },
                removeClass: function (a, b) {
                    var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                    a.className = a.className
                        .replace(c, " ")
                        .replace(/^\s\s*/, "")
                        .replace(/\s\s*$/, "");
                },
                addClass: function (a, b) {
                    e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
                },
                hasClass: function (a, b) {
                    return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
                },
                getChildByClass: function (a, b) {
                    for (var c = a.firstChild; c; ) {
                        if (e.hasClass(c, b)) return c;
                        c = c.nextSibling;
                    }
                },
                arraySearch: function (a, b, c) {
                    for (var d = a.length; d--; ) if (a[d][c] === b) return d;
                    return -1;
                },
                extend: function (a, b, c) {
                    for (var d in b)
                        if (b.hasOwnProperty(d)) {
                            if (c && a.hasOwnProperty(d)) continue;
                            a[d] = b[d];
                        }
                },
                easing: {
                    sine: {
                        out: function (a) {
                            return Math.sin(a * (Math.PI / 2));
                        },
                        inOut: function (a) {
                            return -(Math.cos(Math.PI * a) - 1) / 2;
                        },
                    },
                    cubic: {
                        out: function (a) {
                            return --a * a * a + 1;
                        },
                    },
                },
                detectFeatures: function () {
                    if (e.features) return e.features;
                    var a = e.createEl(),
                        b = a.style,
                        c = "",
                        d = {};
                    if (
                        ((d.oldIE = document.all && !document.addEventListener),
                        (d.touch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                        window.requestAnimationFrame && ((d.raf = window.requestAnimationFrame), (d.caf = window.cancelAnimationFrame)),
                        (d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled),
                        !d.pointerEvent)
                    ) {
                        var f = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            g && g.length > 0 && (g = parseInt(g[1], 10)) >= 1 && g < 8 && (d.isOldIOSPhone = !0);
                        }
                        var h = f.match(/Android\s([0-9\.]*)/),
                            i = h ? h[1] : 0;
                        (i = parseFloat(i)), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), (d.androidVersion = i)), (d.isMobileOpera = /opera mini|opera mobi/i.test(f));
                    }
                    for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
                        c = m[n];
                        for (var o = 0; o < 3; o++) (j = l[o]), (k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j)), !d[j] && k in b && (d[j] = k);
                        c && !d.raf && ((c = c.toLowerCase()), (d.raf = window[c + "RequestAnimationFrame"]), d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]));
                    }
                    if (!d.raf) {
                        var p = 0;
                        (d.raf = function (a) {
                            var b = new Date().getTime(),
                                c = Math.max(0, 16 - (b - p)),
                                d = window.setTimeout(function () {
                                    a(b + c);
                                }, c);
                            return (p = b + c), d;
                        }),
                            (d.caf = function (a) {
                                clearTimeout(a);
                            });
                    }
                    return (d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), (e.features = d), d;
                },
            };
            e.detectFeatures(),
                e.features.oldIE &&
                    (e.bind = function (a, b, c, d) {
                        b = b.split(" ");
                        for (
                            var e,
                                f = (d ? "detach" : "attach") + "Event",
                                g = function () {
                                    c.handleEvent.call(c);
                                },
                                h = 0;
                            h < b.length;
                            h++
                        )
                            if ((e = b[h]))
                                if ("object" == typeof c && c.handleEvent) {
                                    if (d) {
                                        if (!c["oldIE" + e]) return !1;
                                    } else c["oldIE" + e] = g;
                                    a[f]("on" + e, c["oldIE" + e]);
                                } else a[f]("on" + e, c);
                    });
            var f = this,
                g = {
                    allowPanToNext: !0,
                    spacing: 0.12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: 0.75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: 0.35,
                    panEndFriction: 0.35,
                    isClickableElement: function (a) {
                        return "A" === a.tagName;
                    },
                    getDoubleTapZoom: function (a, b) {
                        return a ? 1 : b.initialZoomLevel < 0.7 ? 1 : 1.33;
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit",
                };
            e.extend(g, d);
            var h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z,
                A,
                B,
                C,
                D,
                E,
                F,
                G,
                H,
                I,
                J,
                K,
                L,
                M,
                N,
                O,
                P,
                Q,
                R,
                S,
                T,
                U,
                V,
                W,
                X,
                Y,
                Z,
                $,
                _,
                aa,
                ba,
                ca,
                da,
                ea,
                fa,
                ga,
                ha,
                ia,
                ja,
                ka = function () {
                    return { x: 0, y: 0 };
                },
                la = ka(),
                ma = ka(),
                na = ka(),
                oa = {},
                pa = 0,
                qa = {},
                ra = ka(),
                sa = 0,
                ta = !0,
                ua = [],
                va = {},
                wa = !1,
                xa = function (a, b) {
                    e.extend(f, b.publicMethods), ua.push(a);
                },
                ya = function (a) {
                    var b = Yb();
                    return a > b - 1 ? a - b : a < 0 ? b + a : a;
                },
                za = {},
                Aa = function (a, b) {
                    return za[a] || (za[a] = []), za[a].push(b);
                },
                Ba = function (a) {
                    var b = za[a];
                    if (b) {
                        var c = Array.prototype.slice.call(arguments);
                        c.shift();
                        for (var d = 0; d < b.length; d++) b[d].apply(f, c);
                    }
                },
                Ca = function () {
                    return new Date().getTime();
                },
                Da = function (a) {
                    (ha = a), (f.bg.style.opacity = a * g.bgOpacity);
                },
                Ea = function (a, b, c, d, e) {
                    (!wa || (e && e !== f.currItem)) && (d /= e ? e.fitRatio : f.currItem.fitRatio), (a[C] = s + b + "px, " + c + "px" + t + " scale(" + d + ")");
                },
                Fa = function (a) {
                    ca && (a && (q > f.currItem.fitRatio ? wa || (ic(f.currItem, !1, !0), (wa = !0)) : wa && (ic(f.currItem), (wa = !1))), Ea(ca, na.x, na.y, q));
                },
                Ga = function (a) {
                    a.container && Ea(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a);
                },
                Ha = function (a, b) {
                    b[C] = s + a + "px, 0px" + t;
                },
                Ia = function (a, b) {
                    if (!g.loop && b) {
                        var c = k + (ra.x * pa - a) / ra.x,
                            d = Math.round(a - pb.x);
                        ((c < 0 && d > 0) || (c >= Yb() - 1 && d < 0)) && (a = pb.x + d * g.mainScrollEndFriction);
                    }
                    (pb.x = a), Ha(a, l);
                },
                Ja = function (a, b) {
                    var c = qb[a] - qa[a];
                    return ma[a] + la[a] + c - c * (b / r);
                },
                Ka = function (a, b) {
                    (a.x = b.x), (a.y = b.y), b.id && (a.id = b.id);
                },
                La = function (a) {
                    (a.x = Math.round(a.x)), (a.y = Math.round(a.y));
                },
                Ma = null,
                Na = function () {
                    Ma && (e.unbind(document, "mousemove", Na), e.addClass(a, "pswp--has_mouse"), (g.mouseUsed = !0), Ba("mouseUsed")),
                        (Ma = setTimeout(function () {
                            Ma = null;
                        }, 100));
                },
                Oa = function () {
                    e.bind(document, "keydown", f), L.transform && e.bind(f.scrollWrap, "click", f), g.mouseUsed || e.bind(document, "mousemove", Na), e.bind(window, "resize scroll orientationchange", f), Ba("bindEvents");
                },
                Pa = function () {
                    e.unbind(window, "resize scroll orientationchange", f),
                        e.unbind(window, "scroll", p.scroll),
                        e.unbind(document, "keydown", f),
                        e.unbind(document, "mousemove", Na),
                        L.transform && e.unbind(f.scrollWrap, "click", f),
                        T && e.unbind(window, n, f),
                        clearTimeout(M),
                        Ba("unbindEvents");
                },
                Qa = function (a, b) {
                    var c = ec(f.currItem, oa, a);
                    return b && (ba = c), c;
                },
                Ra = function (a) {
                    return a || (a = f.currItem), a.initialZoomLevel;
                },
                Sa = function (a) {
                    return a || (a = f.currItem), a.w > 0 ? g.maxSpreadZoom : 1;
                },
                Ta = function (a, b, c, d) {
                    return d === f.currItem.initialZoomLevel ? ((c[a] = f.currItem.initialPosition[a]), !0) : ((c[a] = Ja(a, d)), c[a] > b.min[a] ? ((c[a] = b.min[a]), !0) : c[a] < b.max[a] && ((c[a] = b.max[a]), !0));
                },
                Ua = function () {
                    if (C) {
                        var b = L.perspective && !E;
                        return (s = "translate" + (b ? "3d(" : "(")), void (t = L.perspective ? ", 0px)" : ")");
                    }
                    (C = "left"),
                        e.addClass(a, "pswp--ie"),
                        (Ha = function (a, b) {
                            b.left = a + "px";
                        }),
                        (Ga = function (a) {
                            var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                                c = a.container.style,
                                d = b * a.w,
                                e = b * a.h;
                            (c.width = d + "px"), (c.height = e + "px"), (c.left = a.initialPosition.x + "px"), (c.top = a.initialPosition.y + "px");
                        }),
                        (Fa = function () {
                            if (ca) {
                                var a = ca,
                                    b = f.currItem,
                                    c = b.fitRatio > 1 ? 1 : b.fitRatio,
                                    d = c * b.w,
                                    e = c * b.h;
                                (a.width = d + "px"), (a.height = e + "px"), (a.left = na.x + "px"), (a.top = na.y + "px");
                            }
                        });
                },
                Va = function (a) {
                    var b = "";
                    g.escKey && 27 === a.keyCode ? (b = "close") : g.arrowKeys && (37 === a.keyCode ? (b = "prev") : 39 === a.keyCode && (b = "next")),
                        b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1), f[b]()));
                },
                Wa = function (a) {
                    a && (W || V || da || R) && (a.preventDefault(), a.stopPropagation());
                },
                Xa = function () {
                    f.setScrollOffset(0, e.getScrollY());
                },
                Ya = {},
                Za = 0,
                $a = function (a) {
                    Ya[a] && (Ya[a].raf && G(Ya[a].raf), Za--, delete Ya[a]);
                },
                _a = function (a) {
                    Ya[a] && $a(a), Ya[a] || (Za++, (Ya[a] = {}));
                },
                ab = function () {
                    for (var a in Ya) Ya.hasOwnProperty(a) && $a(a);
                },
                bb = function (a, b, c, d, e, f, g) {
                    var h,
                        i = Ca();
                    _a(a);
                    var j = function () {
                        if (Ya[a]) {
                            if ((h = Ca() - i) >= d) return $a(a), f(c), void (g && g());
                            f((c - b) * e(h / d) + b), (Ya[a].raf = F(j));
                        }
                    };
                    j();
                },
                cb = {
                    shout: Ba,
                    listen: Aa,
                    viewportSize: oa,
                    options: g,
                    isMainScrollAnimating: function () {
                        return da;
                    },
                    getZoomLevel: function () {
                        return q;
                    },
                    getCurrentIndex: function () {
                        return k;
                    },
                    isDragging: function () {
                        return T;
                    },
                    isZooming: function () {
                        return $;
                    },
                    setScrollOffset: function (a, b) {
                        (qa.x = a), (K = qa.y = b), Ba("updateScrollOffset", qa);
                    },
                    applyZoomPan: function (a, b, c, d) {
                        (na.x = b), (na.y = c), (q = a), Fa(d);
                    },
                    init: function () {
                        if (!h && !i) {
                            var c;
                            (f.framework = e),
                                (f.template = a),
                                (f.bg = e.getChildByClass(a, "pswp__bg")),
                                (H = a.className),
                                (h = !0),
                                (L = e.detectFeatures()),
                                (F = L.raf),
                                (G = L.caf),
                                (C = L.transform),
                                (J = L.oldIE),
                                (f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap")),
                                (f.container = e.getChildByClass(f.scrollWrap, "pswp__container")),
                                (l = f.container.style),
                                (f.itemHolders = w = [
                                    { el: f.container.children[0], wrap: 0, index: -1 },
                                    { el: f.container.children[1], wrap: 0, index: -1 },
                                    { el: f.container.children[2], wrap: 0, index: -1 },
                                ]),
                                (w[0].el.style.display = w[2].el.style.display = "none"),
                                Ua(),
                                (p = {
                                    resize: f.updateSize,
                                    orientationchange: function () {
                                        clearTimeout(M),
                                            (M = setTimeout(function () {
                                                oa.x !== f.scrollWrap.clientWidth && f.updateSize();
                                            }, 500));
                                    },
                                    scroll: Xa,
                                    keydown: Va,
                                    click: Wa,
                                });
                            var d = L.isOldIOSPhone || L.isOldAndroid || L.isMobileOpera;
                            for ((L.animationName && L.transform && !d) || (g.showAnimationDuration = g.hideAnimationDuration = 0), c = 0; c < ua.length; c++) f["init" + ua[c]]();
                            if (b) {
                                (f.ui = new b(f, e)).init();
                            }
                            Ba("firstUpdate"),
                                (k = k || g.index || 0),
                                (isNaN(k) || k < 0 || k >= Yb()) && (k = 0),
                                (f.currItem = Xb(k)),
                                (L.isOldIOSPhone || L.isOldAndroid) && (ta = !1),
                                a.setAttribute("aria-hidden", "false"),
                                g.modal && (ta ? (a.style.position = "fixed") : ((a.style.position = "absolute"), (a.style.top = e.getScrollY() + "px"))),
                                void 0 === K && (Ba("initialLayout"), (K = I = e.getScrollY()));
                            var j = "pswp--open ";
                            for (
                                g.mainClass && (j += g.mainClass + " "),
                                    g.showHideOpacity && (j += "pswp--animate_opacity "),
                                    j += E ? "pswp--touch" : "pswp--notouch",
                                    j += L.animationName ? " pswp--css_animation" : "",
                                    j += L.svg ? " pswp--svg" : "",
                                    e.addClass(a, j),
                                    f.updateSize(),
                                    m = -1,
                                    sa = null,
                                    c = 0;
                                c < 3;
                                c++
                            )
                                Ha((c + m) * ra.x, w[c].el.style);
                            J || e.bind(f.scrollWrap, o, f),
                                Aa("initialZoomInEnd", function () {
                                    f.setContent(w[0], k - 1), f.setContent(w[2], k + 1), (w[0].el.style.display = w[2].el.style.display = "block"), g.focus && a.focus(), Oa();
                                }),
                                f.setContent(w[1], k),
                                f.updateCurrItem(),
                                Ba("afterInit"),
                                ta ||
                                    (u = setInterval(function () {
                                        Za || T || $ || q !== f.currItem.initialZoomLevel || f.updateSize();
                                    }, 1e3)),
                                e.addClass(a, "pswp--visible");
                        }
                    },
                    close: function () {
                        h && ((h = !1), (i = !0), Ba("close"), Pa(), $b(f.currItem, null, !0, f.destroy));
                    },
                    destroy: function () {
                        Ba("destroy"), Tb && clearTimeout(Tb), a.setAttribute("aria-hidden", "true"), (a.className = H), u && clearInterval(u), e.unbind(f.scrollWrap, o, f), e.unbind(window, "scroll", f), vb(), ab(), (za = null);
                    },
                    panTo: function (a, b, c) {
                        c || (a > ba.min.x ? (a = ba.min.x) : a < ba.max.x && (a = ba.max.x), b > ba.min.y ? (b = ba.min.y) : b < ba.max.y && (b = ba.max.y)), (na.x = a), (na.y = b), Fa();
                    },
                    handleEvent: function (a) {
                        (a = a || window.event), p[a.type] && p[a.type](a);
                    },
                    goTo: function (a) {
                        a = ya(a);
                        var b = a - k;
                        (sa = b), (k = a), (f.currItem = Xb(k)), (pa -= b), Ia(ra.x * pa), ab(), (da = !1), f.updateCurrItem();
                    },
                    next: function () {
                        f.goTo(k + 1);
                    },
                    prev: function () {
                        f.goTo(k - 1);
                    },
                    updateCurrZoomItem: function (a) {
                        if ((a && Ba("beforeChange", 0), w[1].el.children.length)) {
                            var b = w[1].el.children[0];
                            ca = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
                        } else ca = null;
                        (ba = f.currItem.bounds), (r = q = f.currItem.initialZoomLevel), (na.x = ba.center.x), (na.y = ba.center.y), a && Ba("afterChange");
                    },
                    invalidateCurrItems: function () {
                        v = !0;
                        for (var a = 0; a < 3; a++) w[a].item && (w[a].item.needsUpdate = !0);
                    },
                    updateCurrItem: function (a) {
                        if (0 !== sa) {
                            var b,
                                c = Math.abs(sa);
                            if (!(a && c < 2)) {
                                (f.currItem = Xb(k)), (wa = !1), Ba("beforeChange", sa), c >= 3 && ((m += sa + (sa > 0 ? -3 : 3)), (c = 3));
                                for (var d = 0; d < c; d++)
                                    sa > 0
                                        ? ((b = w.shift()), (w[2] = b), m++, Ha((m + 2) * ra.x, b.el.style), f.setContent(b, k - c + d + 1 + 1))
                                        : ((b = w.pop()), w.unshift(b), m--, Ha(m * ra.x, b.el.style), f.setContent(b, k + c - d - 1 - 1));
                                if (ca && 1 === Math.abs(sa)) {
                                    var e = Xb(x);
                                    e.initialZoomLevel !== q && (ec(e, oa), ic(e), Ga(e));
                                }
                                (sa = 0), f.updateCurrZoomItem(), (x = k), Ba("afterChange");
                            }
                        }
                    },
                    updateSize: function (b) {
                        if (!ta && g.modal) {
                            var c = e.getScrollY();
                            if ((K !== c && ((a.style.top = c + "px"), (K = c)), !b && va.x === window.innerWidth && va.y === window.innerHeight)) return;
                            (va.x = window.innerWidth), (va.y = window.innerHeight), (a.style.height = va.y + "px");
                        }
                        if (((oa.x = f.scrollWrap.clientWidth), (oa.y = f.scrollWrap.clientHeight), Xa(), (ra.x = oa.x + Math.round(oa.x * g.spacing)), (ra.y = oa.y), Ia(ra.x * pa), Ba("beforeResize"), void 0 !== m)) {
                            for (var d, h, i, j = 0; j < 3; j++)
                                (d = w[j]),
                                    Ha((j + m) * ra.x, d.el.style),
                                    (i = k + j - 1),
                                    g.loop && Yb() > 2 && (i = ya(i)),
                                    (h = Xb(i)),
                                    h && (v || h.needsUpdate || !h.bounds)
                                        ? (f.cleanSlide(h), f.setContent(d, i), 1 === j && ((f.currItem = h), f.updateCurrZoomItem(!0)), (h.needsUpdate = !1))
                                        : -1 === d.index && i >= 0 && f.setContent(d, i),
                                    h && h.container && (ec(h, oa), ic(h), Ga(h));
                            v = !1;
                        }
                        (r = q = f.currItem.initialZoomLevel), (ba = f.currItem.bounds), ba && ((na.x = ba.center.x), (na.y = ba.center.y), Fa(!0)), Ba("resize");
                    },
                    zoomTo: function (a, b, c, d, f) {
                        b && ((r = q), (qb.x = Math.abs(b.x) - na.x), (qb.y = Math.abs(b.y) - na.y), Ka(ma, na));
                        var g = Qa(a, !1),
                            h = {};
                        Ta("x", g, h, a), Ta("y", g, h, a);
                        var i = q,
                            j = { x: na.x, y: na.y };
                        La(h);
                        var k = function (b) {
                            1 === b ? ((q = a), (na.x = h.x), (na.y = h.y)) : ((q = (a - i) * b + i), (na.x = (h.x - j.x) * b + j.x), (na.y = (h.y - j.y) * b + j.y)), f && f(b), Fa(1 === b);
                        };
                        c ? bb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
                    },
                },
                db = {},
                eb = {},
                fb = {},
                gb = {},
                hb = {},
                ib = [],
                jb = {},
                kb = [],
                lb = {},
                mb = 0,
                nb = ka(),
                ob = 0,
                pb = ka(),
                qb = ka(),
                rb = ka(),
                sb = function (a, b) {
                    return a.x === b.x && a.y === b.y;
                },
                tb = function (a, b) {
                    return Math.abs(a.x - b.x) < 25 && Math.abs(a.y - b.y) < 25;
                },
                ub = function (a, b) {
                    return (lb.x = Math.abs(a.x - b.x)), (lb.y = Math.abs(a.y - b.y)), Math.sqrt(lb.x * lb.x + lb.y * lb.y);
                },
                vb = function () {
                    X && (G(X), (X = null));
                },
                wb = function () {
                    T && ((X = F(wb)), Mb());
                },
                xb = function () {
                    return !("fit" === g.scaleMode && q === f.currItem.initialZoomLevel);
                },
                yb = function (a, b) {
                    return !(!a || a === document) && !(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : yb(a.parentNode, b));
                },
                zb = {},
                Ab = function (a, b) {
                    return (zb.prevent = !yb(a.target, g.isClickableElement)), Ba("preventDragEvent", a, b, zb), zb.prevent;
                },
                Bb = function (a, b) {
                    return (b.x = a.pageX), (b.y = a.pageY), (b.id = a.identifier), b;
                },
                Cb = function (a, b, c) {
                    (c.x = 0.5 * (a.x + b.x)), (c.y = 0.5 * (a.y + b.y));
                },
                Db = function (a, b, c) {
                    if (a - O > 50) {
                        var d = kb.length > 2 ? kb.shift() : {};
                        (d.x = b), (d.y = c), kb.push(d), (O = a);
                    }
                },
                Eb = function () {
                    var a = na.y - f.currItem.initialPosition.y;
                    return 1 - Math.abs(a / (oa.y / 2));
                },
                Fb = {},
                Gb = {},
                Hb = [],
                Ib = function (a) {
                    for (; Hb.length > 0; ) Hb.pop();
                    return (
                        D
                            ? ((ja = 0),
                              ib.forEach(function (a) {
                                  0 === ja ? (Hb[0] = a) : 1 === ja && (Hb[1] = a), ja++;
                              }))
                            : a.type.indexOf("touch") > -1
                            ? a.touches && a.touches.length > 0 && ((Hb[0] = Bb(a.touches[0], Fb)), a.touches.length > 1 && (Hb[1] = Bb(a.touches[1], Gb)))
                            : ((Fb.x = a.pageX), (Fb.y = a.pageY), (Fb.id = ""), (Hb[0] = Fb)),
                        Hb
                    );
                },
                Jb = function (a, b) {
                    var c,
                        d,
                        e,
                        h,
                        i = na[a] + b[a],
                        j = b[a] > 0,
                        k = pb.x + b.x,
                        l = pb.x - jb.x;
                    return (
                        (c = i > ba.min[a] || i < ba.max[a] ? g.panEndFriction : 1),
                        (i = na[a] + b[a] * c),
                        (!g.allowPanToNext && q !== f.currItem.initialZoomLevel) ||
                        (ca
                            ? "h" !== ea ||
                              "x" !== a ||
                              V ||
                              (j
                                  ? (i > ba.min[a] && ((c = g.panEndFriction), ba.min[a] - i, (d = ba.min[a] - ma[a])), (d <= 0 || l < 0) && Yb() > 1 ? ((h = k), l < 0 && k > jb.x && (h = jb.x)) : ba.min.x !== ba.max.x && (e = i))
                                  : (i < ba.max[a] && ((c = g.panEndFriction), i - ba.max[a], (d = ma[a] - ba.max[a])), (d <= 0 || l > 0) && Yb() > 1 ? ((h = k), l > 0 && k < jb.x && (h = jb.x)) : ba.min.x !== ba.max.x && (e = i)))
                            : (h = k),
                        "x" !== a)
                            ? void (da || Y || (q > f.currItem.fitRatio && (na[a] += b[a] * c)))
                            : (void 0 !== h && (Ia(h, !0), (Y = h !== jb.x)), ba.min.x !== ba.max.x && (void 0 !== e ? (na.x = e) : Y || (na.x += b.x * c)), void 0 !== h)
                    );
                },
                Kb = function (a) {
                    if (!("mousedown" === a.type && a.button > 0)) {
                        if (Wb) return void a.preventDefault();
                        if (!S || "mousedown" !== a.type) {
                            if ((Ab(a, !0) && a.preventDefault(), Ba("pointerDown"), D)) {
                                var b = e.arraySearch(ib, a.pointerId, "id");
                                b < 0 && (b = ib.length), (ib[b] = { x: a.pageX, y: a.pageY, id: a.pointerId });
                            }
                            var c = Ib(a),
                                d = c.length;
                            (Z = null),
                                ab(),
                                (T && 1 !== d) ||
                                    ((T = fa = !0),
                                    e.bind(window, n, f),
                                    (Q = ia = ga = R = Y = W = U = V = !1),
                                    (ea = null),
                                    Ba("firstTouchStart", c),
                                    Ka(ma, na),
                                    (la.x = la.y = 0),
                                    Ka(gb, c[0]),
                                    Ka(hb, gb),
                                    (jb.x = ra.x * pa),
                                    (kb = [{ x: gb.x, y: gb.y }]),
                                    (O = N = Ca()),
                                    Qa(q, !0),
                                    vb(),
                                    wb()),
                                !$ &&
                                    d > 1 &&
                                    !da &&
                                    !Y &&
                                    ((r = q), (V = !1), ($ = U = !0), (la.y = la.x = 0), Ka(ma, na), Ka(db, c[0]), Ka(eb, c[1]), Cb(db, eb, rb), (qb.x = Math.abs(rb.x) - na.x), (qb.y = Math.abs(rb.y) - na.y), (_ = aa = ub(db, eb)));
                        }
                    }
                },
                Lb = function (a) {
                    if ((a.preventDefault(), D)) {
                        var b = e.arraySearch(ib, a.pointerId, "id");
                        if (b > -1) {
                            var c = ib[b];
                            (c.x = a.pageX), (c.y = a.pageY);
                        }
                    }
                    if (T) {
                        var d = Ib(a);
                        if (ea || W || $) Z = d;
                        else if (pb.x !== ra.x * pa) ea = "h";
                        else {
                            var f = Math.abs(d[0].x - gb.x) - Math.abs(d[0].y - gb.y);
                            Math.abs(f) >= 10 && ((ea = f > 0 ? "h" : "v"), (Z = d));
                        }
                    }
                },
                Mb = function () {
                    if (Z) {
                        var a = Z.length;
                        if (0 !== a)
                            if ((Ka(db, Z[0]), (fb.x = db.x - gb.x), (fb.y = db.y - gb.y), $ && a > 1)) {
                                if (((gb.x = db.x), (gb.y = db.y), !fb.x && !fb.y && sb(Z[1], eb))) return;
                                Ka(eb, Z[1]), V || ((V = !0), Ba("zoomGestureStarted"));
                                var b = ub(db, eb),
                                    c = Rb(b);
                                c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ia = !0);
                                var d = 1,
                                    e = Ra(),
                                    h = Sa();
                                if (c < e)
                                    if (g.pinchToClose && !ia && r <= f.currItem.initialZoomLevel) {
                                        var i = e - c,
                                            j = 1 - i / (e / 1.2);
                                        Da(j), Ba("onPinchClose", j), (ga = !0);
                                    } else (d = (e - c) / e), d > 1 && (d = 1), (c = e - d * (e / 3));
                                else c > h && ((d = (c - h) / (6 * e)), d > 1 && (d = 1), (c = h + d * e));
                                d < 0 && (d = 0), (_ = b), Cb(db, eb, nb), (la.x += nb.x - rb.x), (la.y += nb.y - rb.y), Ka(rb, nb), (na.x = Ja("x", c)), (na.y = Ja("y", c)), (Q = c > q), (q = c), Fa();
                            } else {
                                if (!ea) return;
                                if ((fa && ((fa = !1), Math.abs(fb.x) >= 10 && (fb.x -= Z[0].x - hb.x), Math.abs(fb.y) >= 10 && (fb.y -= Z[0].y - hb.y)), (gb.x = db.x), (gb.y = db.y), 0 === fb.x && 0 === fb.y)) return;
                                if ("v" === ea && g.closeOnVerticalDrag && !xb()) {
                                    (la.y += fb.y), (na.y += fb.y);
                                    var k = Eb();
                                    return (R = !0), Ba("onVerticalDrag", k), Da(k), void Fa();
                                }
                                Db(Ca(), db.x, db.y), (W = !0), (ba = f.currItem.bounds);
                                var l = Jb("x", fb);
                                l || (Jb("y", fb), La(na), Fa());
                            }
                    }
                },
                Nb = function (a) {
                    if (L.isOldAndroid) {
                        if (S && "mouseup" === a.type) return;
                        a.type.indexOf("touch") > -1 &&
                            (clearTimeout(S),
                            (S = setTimeout(function () {
                                S = 0;
                            }, 600)));
                    }
                    Ba("pointerUp"), Ab(a, !1) && a.preventDefault();
                    var b;
                    if (D) {
                        var c = e.arraySearch(ib, a.pointerId, "id");
                        if (c > -1)
                            if (((b = ib.splice(c, 1)[0]), navigator.pointerEnabled)) b.type = a.pointerType || "mouse";
                            else {
                                var d = { 4: "mouse", 2: "touch", 3: "pen" };
                                (b.type = d[a.pointerType]), b.type || (b.type = a.pointerType || "mouse");
                            }
                    }
                    var h,
                        i = Ib(a),
                        j = i.length;
                    if (("mouseup" === a.type && (j = 0), 2 === j)) return (Z = null), !0;
                    1 === j && Ka(hb, i[0]),
                        0 !== j ||
                            ea ||
                            da ||
                            (b || ("mouseup" === a.type ? (b = { x: a.pageX, y: a.pageY, type: "mouse" }) : a.changedTouches && a.changedTouches[0] && (b = { x: a.changedTouches[0].pageX, y: a.changedTouches[0].pageY, type: "touch" })),
                            Ba("touchRelease", a, b));
                    var k = -1;
                    if (
                        (0 === j && ((T = !1), e.unbind(window, n, f), vb(), $ ? (k = 0) : -1 !== ob && (k = Ca() - ob)),
                        (ob = 1 === j ? Ca() : -1),
                        (h = -1 !== k && k < 150 ? "zoom" : "swipe"),
                        $ && j < 2 && (($ = !1), 1 === j && (h = "zoomPointerUp"), Ba("zoomGestureEnded")),
                        (Z = null),
                        W || V || da || R)
                    )
                        if ((ab(), P || (P = Ob()), P.calculateSwipeSpeed("x"), R)) {
                            var l = Eb();
                            if (l < g.verticalDragRange) f.close();
                            else {
                                var m = na.y,
                                    o = ha;
                                bb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                                    (na.y = (f.currItem.initialPosition.y - m) * a + m), Da((1 - o) * a + o), Fa();
                                }),
                                    Ba("onVerticalDrag", 1);
                            }
                        } else {
                            if ((Y || da) && 0 === j) {
                                var p = Qb(h, P);
                                if (p) return;
                                h = "zoomPointerUp";
                            }
                            if (!da) return "swipe" !== h ? void Sb() : void (!Y && q > f.currItem.fitRatio && Pb(P));
                        }
                },
                Ob = function () {
                    var a,
                        b,
                        c = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio: {},
                            slowDownRatioReverse: {},
                            speedDecelerationRatio: {},
                            speedDecelerationRatioAbs: {},
                            distanceOffset: {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function (d) {
                                kb.length > 1 ? ((a = Ca() - O + 50), (b = kb[kb.length - 2][d])) : ((a = Ca() - N), (b = hb[d])),
                                    (c.lastFlickOffset[d] = gb[d] - b),
                                    (c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d])),
                                    c.lastFlickDist[d] > 20 ? (c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a) : (c.lastFlickSpeed[d] = 0),
                                    Math.abs(c.lastFlickSpeed[d]) < 0.1 && (c.lastFlickSpeed[d] = 0),
                                    (c.slowDownRatio[d] = 0.95),
                                    (c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d]),
                                    (c.speedDecelerationRatio[d] = 1);
                            },
                            calculateOverBoundsAnimOffset: function (a, b) {
                                c.backAnimStarted[a] ||
                                    (na[a] > ba.min[a] ? (c.backAnimDestination[a] = ba.min[a]) : na[a] < ba.max[a] && (c.backAnimDestination[a] = ba.max[a]),
                                    void 0 !== c.backAnimDestination[a] &&
                                        ((c.slowDownRatio[a] = 0.7),
                                        (c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a]),
                                        c.speedDecelerationRatioAbs[a] < 0.05 &&
                                            ((c.lastFlickSpeed[a] = 0),
                                            (c.backAnimStarted[a] = !0),
                                            bb("bounceZoomPan" + a, na[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
                                                (na[a] = b), Fa();
                                            }))));
                            },
                            calculateAnimOffset: function (a) {
                                c.backAnimStarted[a] ||
                                    ((c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - (c.slowDownRatioReverse[a] * c.timeDiff) / 10)),
                                    (c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a])),
                                    (c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff),
                                    (na[a] += c.distanceOffset[a]));
                            },
                            panAnimLoop: function () {
                                if (
                                    Ya.zoomPan &&
                                    ((Ya.zoomPan.raf = F(c.panAnimLoop)),
                                    (c.now = Ca()),
                                    (c.timeDiff = c.now - c.lastNow),
                                    (c.lastNow = c.now),
                                    c.calculateAnimOffset("x"),
                                    c.calculateAnimOffset("y"),
                                    Fa(),
                                    c.calculateOverBoundsAnimOffset("x"),
                                    c.calculateOverBoundsAnimOffset("y"),
                                    c.speedDecelerationRatioAbs.x < 0.05 && c.speedDecelerationRatioAbs.y < 0.05)
                                )
                                    return (na.x = Math.round(na.x)), (na.y = Math.round(na.y)), Fa(), void $a("zoomPan");
                            },
                        };
                    return c;
                },
                Pb = function (a) {
                    return (
                        a.calculateSwipeSpeed("y"),
                        (ba = f.currItem.bounds),
                        (a.backAnimDestination = {}),
                        (a.backAnimStarted = {}),
                        Math.abs(a.lastFlickSpeed.x) <= 0.05 && Math.abs(a.lastFlickSpeed.y) <= 0.05
                            ? ((a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0), a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0)
                            : (_a("zoomPan"), (a.lastNow = Ca()), void a.panAnimLoop())
                    );
                },
                Qb = function (a, b) {
                    var c;
                    da || (mb = k);
                    var d;
                    if ("swipe" === a) {
                        var h = gb.x - hb.x,
                            i = b.lastFlickDist.x < 10;
                        h > 30 && (i || b.lastFlickOffset.x > 20) ? (d = -1) : h < -30 && (i || b.lastFlickOffset.x < -20) && (d = 1);
                    }
                    var j;
                    d && ((k += d), k < 0 ? ((k = g.loop ? Yb() - 1 : 0), (j = !0)) : k >= Yb() && ((k = g.loop ? 0 : Yb() - 1), (j = !0)), (j && !g.loop) || ((sa += d), (pa -= d), (c = !0)));
                    var l,
                        m = ra.x * pa,
                        n = Math.abs(m - pb.x);
                    return (
                        c || m > pb.x == b.lastFlickSpeed.x > 0 ? ((l = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333), (l = Math.min(l, 400)), (l = Math.max(l, 250))) : (l = 333),
                        mb === k && (c = !1),
                        (da = !0),
                        Ba("mainScrollAnimStart"),
                        bb("mainScroll", pb.x, m, l, e.easing.cubic.out, Ia, function () {
                            ab(), (da = !1), (mb = -1), (c || mb !== k) && f.updateCurrItem(), Ba("mainScrollAnimComplete");
                        }),
                        c && f.updateCurrItem(!0),
                        c
                    );
                },
                Rb = function (a) {
                    return (1 / aa) * a * r;
                },
                Sb = function () {
                    var a = q,
                        b = Ra(),
                        c = Sa();
                    q < b ? (a = b) : q > c && (a = c);
                    var d,
                        g = ha;
                    return ga && !Q && !ia && q < b
                        ? (f.close(), !0)
                        : (ga &&
                              (d = function (a) {
                                  Da((1 - g) * a + g);
                              }),
                          f.zoomTo(a, 0, 200, e.easing.cubic.out, d),
                          !0);
                };
            xa("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var a = function (a, b, c, d, e) {
                            (y = a + b), (z = a + c), (A = a + d), (B = e ? a + e : "");
                        };
                        (D = L.pointerEvent),
                            D && L.touch && (L.touch = !1),
                            D
                                ? navigator.pointerEnabled
                                    ? a("pointer", "down", "move", "up", "cancel")
                                    : a("MSPointer", "Down", "Move", "Up", "Cancel")
                                : L.touch
                                ? (a("touch", "start", "move", "end", "cancel"), (E = !0))
                                : a("mouse", "down", "move", "up"),
                            (n = z + " " + A + " " + B),
                            (o = y),
                            D && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                            (f.likelyTouchDevice = E),
                            (p[y] = Kb),
                            (p[z] = Lb),
                            (p[A] = Nb),
                            B && (p[B] = p[A]),
                            L.touch && ((o += " mousedown"), (n += " mousemove mouseup"), (p.mousedown = p[y]), (p.mousemove = p[z]), (p.mouseup = p[A])),
                            E || (g.allowPanToNext = !1);
                    },
                },
            });
            var Tb,
                Ub,
                Vb,
                Wb,
                Xb,
                Yb,
                Zb,
                $b = function (b, c, d, h) {
                    Tb && clearTimeout(Tb), (Wb = !0), (Vb = !0);
                    var i;
                    b.initialLayout ? ((i = b.initialLayout), (b.initialLayout = null)) : (i = g.getThumbBoundsFn && g.getThumbBoundsFn(k));
                    var l = d ? g.hideAnimationDuration : g.showAnimationDuration,
                        m = function () {
                            $a("initialZoom"),
                                d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Da(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ba("initialZoom" + (d ? "OutEnd" : "InEnd"))),
                                h && h(),
                                (Wb = !1);
                        };
                    if (!l || !i || void 0 === i.x)
                        return (
                            Ba("initialZoom" + (d ? "Out" : "In")),
                            (q = b.initialZoomLevel),
                            Ka(na, b.initialPosition),
                            Fa(),
                            (a.style.opacity = d ? 0 : 1),
                            Da(1),
                            void (l
                                ? setTimeout(function () {
                                      m();
                                  }, l)
                                : m())
                        );
                    !(function () {
                        var c = j,
                            h = !f.currItem.src || f.currItem.loadError || g.showHideOpacity;
                        b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"),
                            d || ((q = i.w / b.w), (na.x = i.x), (na.y = i.y - I), (f[h ? "template" : "bg"].style.opacity = 0.001), Fa()),
                            _a("initialZoom"),
                            d && !c && e.removeClass(a, "pswp--animated-in"),
                            h &&
                                (d
                                    ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity")
                                    : setTimeout(function () {
                                          e.addClass(a, "pswp--animate_opacity");
                                      }, 30)),
                            (Tb = setTimeout(
                                function () {
                                    if ((Ba("initialZoom" + (d ? "Out" : "In")), d)) {
                                        var f = i.w / b.w,
                                            g = { x: na.x, y: na.y },
                                            j = q,
                                            k = ha,
                                            n = function (b) {
                                                1 === b ? ((q = f), (na.x = i.x), (na.y = i.y - K)) : ((q = (f - j) * b + j), (na.x = (i.x - g.x) * b + g.x), (na.y = (i.y - K - g.y) * b + g.y)),
                                                    Fa(),
                                                    h ? (a.style.opacity = 1 - b) : Da(k - b * k);
                                            };
                                        c ? bb("initialZoom", 0, 1, l, e.easing.cubic.out, n, m) : (n(1), (Tb = setTimeout(m, l + 20)));
                                    } else (q = b.initialZoomLevel), Ka(na, b.initialPosition), Fa(), Da(1), h ? (a.style.opacity = 1) : Da(1), (Tb = setTimeout(m, l + 20));
                                },
                                d ? 25 : 90
                            ));
                    })();
                },
                _b = {},
                ac = [],
                bc = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function () {
                        return Ub.length;
                    },
                },
                cc = function () {
                    return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } };
                },
                dc = function (a, b, c) {
                    var d = a.bounds;
                    (d.center.x = Math.round((_b.x - b) / 2)),
                        (d.center.y = Math.round((_b.y - c) / 2) + a.vGap.top),
                        (d.max.x = b > _b.x ? Math.round(_b.x - b) : d.center.x),
                        (d.max.y = c > _b.y ? Math.round(_b.y - c) + a.vGap.top : d.center.y),
                        (d.min.x = b > _b.x ? 0 : d.center.x),
                        (d.min.y = c > _b.y ? a.vGap.top : d.center.y);
                },
                ec = function (a, b, c) {
                    if (a.src && !a.loadError) {
                        var d = !c;
                        if ((d && (a.vGap || (a.vGap = { top: 0, bottom: 0 }), Ba("parseVerticalMargin", a)), (_b.x = b.x), (_b.y = b.y - a.vGap.top - a.vGap.bottom), d)) {
                            var e = _b.x / a.w,
                                f = _b.y / a.h;
                            a.fitRatio = e < f ? e : f;
                            var h = g.scaleMode;
                            "orig" === h ? (c = 1) : "fit" === h && (c = a.fitRatio), c > 1 && (c = 1), (a.initialZoomLevel = c), a.bounds || (a.bounds = cc());
                        }
                        if (!c) return;
                        return dc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds;
                    }
                    return (a.w = a.h = 0), (a.initialZoomLevel = a.fitRatio = 1), (a.bounds = cc()), (a.initialPosition = a.bounds.center), a.bounds;
                },
                fc = function (a, b, c, d, e, g) {
                    b.loadError ||
                        (d &&
                            ((b.imageAppended = !0),
                            ic(b, d, b === f.currItem && wa),
                            c.appendChild(d),
                            g &&
                                setTimeout(function () {
                                    b && b.loaded && b.placeholder && ((b.placeholder.style.display = "none"), (b.placeholder = null));
                                }, 500)));
                },
                gc = function (a) {
                    (a.loading = !0), (a.loaded = !1);
                    var b = (a.img = e.createEl("pswp__img", "img")),
                        c = function () {
                            (a.loading = !1), (a.loaded = !0), a.loadComplete ? a.loadComplete(a) : (a.img = null), (b.onload = b.onerror = null), (b = null);
                        };
                    return (
                        (b.onload = c),
                        (b.onerror = function () {
                            (a.loadError = !0), c();
                        }),
                        (b.src = a.src),
                        b
                    );
                },
                hc = function (a, b) {
                    if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), (a.container.innerHTML = g.errorMsg.replace("%url%", a.src)), !0;
                },
                ic = function (a, b, c) {
                    if (a.src) {
                        b || (b = a.container.lastChild);
                        var d = c ? a.w : Math.round(a.w * a.fitRatio),
                            e = c ? a.h : Math.round(a.h * a.fitRatio);
                        a.placeholder && !a.loaded && ((a.placeholder.style.width = d + "px"), (a.placeholder.style.height = e + "px")), (b.style.width = d + "px"), (b.style.height = e + "px");
                    }
                },
                jc = function () {
                    if (ac.length) {
                        for (var a, b = 0; b < ac.length; b++) (a = ac[b]), a.holder.index === a.index && fc(a.index, a.item, a.baseDiv, a.img, 0, a.clearPlaceholder);
                        ac = [];
                    }
                };
            xa("Controller", {
                publicMethods: {
                    lazyLoadItem: function (a) {
                        a = ya(a);
                        var b = Xb(a);
                        b && ((!b.loaded && !b.loading) || v) && (Ba("gettingData", a, b), b.src && gc(b));
                    },
                    initController: function () {
                        e.extend(g, bc, !0),
                            (f.items = Ub = c),
                            (Xb = f.getItemAt),
                            (Yb = g.getNumItemsFn),
                            (Zb = g.loop),
                            Yb() < 3 && (g.loop = !1),
                            Aa("beforeChange", function (a) {
                                var b,
                                    c = g.preload,
                                    d = null === a || a >= 0,
                                    e = Math.min(c[0], Yb()),
                                    h = Math.min(c[1], Yb());
                                for (b = 1; b <= (d ? h : e); b++) f.lazyLoadItem(k + b);
                                for (b = 1; b <= (d ? e : h); b++) f.lazyLoadItem(k - b);
                            }),
                            Aa("initialLayout", function () {
                                f.currItem.initialLayout = g.getThumbBoundsFn && g.getThumbBoundsFn(k);
                            }),
                            Aa("mainScrollAnimComplete", jc),
                            Aa("initialZoomInEnd", jc),
                            Aa("destroy", function () {
                                for (var a, b = 0; b < Ub.length; b++)
                                    (a = Ub[b]), a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                                ac = null;
                            });
                    },
                    getItemAt: function (a) {
                        return a >= 0 && void 0 !== Ub[a] && Ub[a];
                    },
                    allowProgressiveImg: function () {
                        return g.forceProgressiveLoading || !E || g.mouseUsed || screen.width > 1200;
                    },
                    setContent: function (a, b) {
                        g.loop && (b = ya(b));
                        var c = f.getItemAt(a.index);
                        c && (c.container = null);
                        var d,
                            i = f.getItemAt(b);
                        if (!i) return void (a.el.innerHTML = "");
                        Ba("gettingData", b, i), (a.index = b), (a.item = i);
                        var j = (i.container = e.createEl("pswp__zoom-wrap"));
                        if ((!i.src && i.html && (i.html.tagName ? j.appendChild(i.html) : (j.innerHTML = i.html)), hc(i), ec(i, oa), !i.src || i.loadError || i.loaded))
                            i.src && !i.loadError && ((d = e.createEl("pswp__img", "img")), (d.style.opacity = 1), (d.src = i.src), ic(i, d), fc(0, i, j, d));
                        else {
                            if (
                                ((i.loadComplete = function (c) {
                                    if (h) {
                                        if (a && a.index === b) {
                                            if (hc(c, !0)) return (c.loadComplete = c.img = null), ec(c, oa), Ga(c), void (a.index === k && f.updateCurrZoomItem());
                                            c.imageAppended
                                                ? !Wb && c.placeholder && ((c.placeholder.style.display = "none"), (c.placeholder = null))
                                                : L.transform && (da || Wb)
                                                ? ac.push({ item: c, baseDiv: j, img: c.img, index: b, holder: a, clearPlaceholder: !0 })
                                                : fc(0, c, j, c.img, 0, !0);
                                        }
                                        (c.loadComplete = null), (c.img = null), Ba("imageLoadComplete", b, c);
                                    }
                                }),
                                e.features.transform)
                            ) {
                                var l = "pswp__img pswp__img--placeholder";
                                l += i.msrc ? "" : " pswp__img--placeholder--blank";
                                var m = e.createEl(l, i.msrc ? "img" : "");
                                i.msrc && (m.src = i.msrc), ic(i, m), j.appendChild(m), (i.placeholder = m);
                            }
                            i.loading || gc(i), f.allowProgressiveImg() && (!Vb && L.transform ? ac.push({ item: i, baseDiv: j, img: i.img, index: b, holder: a }) : fc(0, i, j, i.img, 0, !0));
                        }
                        Vb || b !== k ? Ga(i) : ((ca = j.style), $b(i, d || i.img)), (a.el.innerHTML = ""), a.el.appendChild(j);
                    },
                    cleanSlide: function (a) {
                        a.img && (a.img.onload = a.img.onerror = null), (a.loaded = a.loading = a.img = a.imageAppended = !1);
                    },
                },
            });
            var kc,
                lc = {},
                mc = function (a, b, c) {
                    var d = document.createEvent("CustomEvent"),
                        e = { origEvent: a, target: a.target, releasePoint: b, pointerType: c || "touch" };
                    d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
                };
            xa("Tap", {
                publicMethods: {
                    initTap: function () {
                        Aa("firstTouchStart", f.onTapStart),
                            Aa("touchRelease", f.onTapRelease),
                            Aa("destroy", function () {
                                (lc = {}), (kc = null);
                            });
                    },
                    onTapStart: function (a) {
                        a.length > 1 && (clearTimeout(kc), (kc = null));
                    },
                    onTapRelease: function (a, b) {
                        if (b && !W && !U && !Za) {
                            var c = b;
                            if (kc && (clearTimeout(kc), (kc = null), tb(c, lc))) return void Ba("doubleTap", c);
                            if ("mouse" === b.type) return void mc(a, b, "mouse");
                            if ("BUTTON" === a.target.tagName.toUpperCase() || e.hasClass(a.target, "pswp__single-tap")) return void mc(a, b);
                            Ka(lc, c),
                                (kc = setTimeout(function () {
                                    mc(a, b), (kc = null);
                                }, 300));
                        }
                    },
                },
            });
            var nc;
            xa("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function () {
                        J ||
                            (E
                                ? Aa("mouseUsed", function () {
                                      f.setupDesktopZoom();
                                  })
                                : f.setupDesktopZoom(!0));
                    },
                    setupDesktopZoom: function (b) {
                        nc = {};
                        var c = "wheel mousewheel DOMMouseScroll";
                        Aa("bindEvents", function () {
                            e.bind(a, c, f.handleMouseWheel);
                        }),
                            Aa("unbindEvents", function () {
                                nc && e.unbind(a, c, f.handleMouseWheel);
                            }),
                            (f.mouseZoomedIn = !1);
                        var d,
                            g = function () {
                                f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), (f.mouseZoomedIn = !1)), q < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h();
                            },
                            h = function () {
                                d && (e.removeClass(a, "pswp--dragging"), (d = !1));
                            };
                        Aa("resize", g),
                            Aa("afterChange", g),
                            Aa("pointerDown", function () {
                                f.mouseZoomedIn && ((d = !0), e.addClass(a, "pswp--dragging"));
                            }),
                            Aa("pointerUp", h),
                            b || g();
                    },
                    handleMouseWheel: function (a) {
                        if (q <= f.currItem.fitRatio) return g.modal && (!g.closeOnScroll || Za || T ? a.preventDefault() : C && Math.abs(a.deltaY) > 2 && ((j = !0), f.close())), !0;
                        if ((a.stopPropagation(), (nc.x = 0), "deltaX" in a)) 1 === a.deltaMode ? ((nc.x = 18 * a.deltaX), (nc.y = 18 * a.deltaY)) : ((nc.x = a.deltaX), (nc.y = a.deltaY));
                        else if ("wheelDelta" in a) a.wheelDeltaX && (nc.x = -0.16 * a.wheelDeltaX), a.wheelDeltaY ? (nc.y = -0.16 * a.wheelDeltaY) : (nc.y = -0.16 * a.wheelDelta);
                        else {
                            if (!("detail" in a)) return;
                            nc.y = a.detail;
                        }
                        Qa(q, !0);
                        var b = na.x - nc.x,
                            c = na.y - nc.y;
                        (g.modal || (b <= ba.min.x && b >= ba.max.x && c <= ba.min.y && c >= ba.max.y)) && a.preventDefault(), f.panTo(b, c);
                    },
                    toggleDesktopZoom: function (b) {
                        b = b || { x: oa.x / 2 + qa.x, y: oa.y / 2 + qa.y };
                        var c = g.getDoubleTapZoom(!0, f.currItem),
                            d = q === c;
                        (f.mouseZoomedIn = !d), f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
                    },
                },
            });
            var oc,
                pc,
                qc,
                rc,
                sc,
                tc,
                uc,
                vc,
                wc,
                xc,
                yc,
                zc,
                Ac = { history: !0, galleryUID: 1 },
                Bc = function () {
                    return yc.hash.substring(1);
                },
                Cc = function () {
                    oc && clearTimeout(oc), qc && clearTimeout(qc);
                },
                Dc = function () {
                    var a = Bc(),
                        b = {};
                    if (a.length < 5) return b;
                    var c,
                        d = a.split("&");
                    for (c = 0; c < d.length; c++)
                        if (d[c]) {
                            var e = d[c].split("=");
                            e.length < 2 || (b[e[0]] = e[1]);
                        }
                    if (g.galleryPIDs) {
                        var f = b.pid;
                        for (b.pid = 0, c = 0; c < Ub.length; c++)
                            if (Ub[c].pid === f) {
                                b.pid = c;
                                break;
                            }
                    } else b.pid = parseInt(b.pid, 10) - 1;
                    return b.pid < 0 && (b.pid = 0), b;
                },
                Ec = function () {
                    if ((qc && clearTimeout(qc), Za || T)) return void (qc = setTimeout(Ec, 500));
                    rc ? clearTimeout(pc) : (rc = !0);
                    var a = k + 1,
                        b = Xb(k);
                    b.hasOwnProperty("pid") && (a = b.pid);
                    var c = uc + "&gid=" + g.galleryUID + "&pid=" + a;
                    vc || (-1 === yc.hash.indexOf(c) && (xc = !0));
                    var d = yc.href.split("#")[0] + "#" + c;
                    zc ? "#" + c !== window.location.hash && history[vc ? "replaceState" : "pushState"]("", document.title, d) : vc ? yc.replace(d) : (yc.hash = c),
                        (vc = !0),
                        (pc = setTimeout(function () {
                            rc = !1;
                        }, 60));
                };
            xa("History", {
                publicMethods: {
                    initHistory: function () {
                        if ((e.extend(g, Ac, !0), g.history)) {
                            (yc = window.location),
                                (xc = !1),
                                (wc = !1),
                                (vc = !1),
                                (uc = Bc()),
                                (zc = "pushState" in history),
                                uc.indexOf("gid=") > -1 && ((uc = uc.split("&gid=")[0]), (uc = uc.split("?gid=")[0])),
                                Aa("afterChange", f.updateURL),
                                Aa("unbindEvents", function () {
                                    e.unbind(window, "hashchange", f.onHashChange);
                                });
                            var a = function () {
                                (tc = !0), wc || (xc ? history.back() : uc ? (yc.hash = uc) : zc ? history.pushState("", document.title, yc.pathname + yc.search) : (yc.hash = "")), Cc();
                            };
                            Aa("unbindEvents", function () {
                                j && a();
                            }),
                                Aa("destroy", function () {
                                    tc || a();
                                }),
                                Aa("firstUpdate", function () {
                                    k = Dc().pid;
                                });
                            var b = uc.indexOf("pid=");
                            b > -1 && ((uc = uc.substring(0, b)), "&" === uc.slice(-1) && (uc = uc.slice(0, -1))),
                                setTimeout(function () {
                                    h && e.bind(window, "hashchange", f.onHashChange);
                                }, 40);
                        }
                    },
                    onHashChange: function () {
                        return Bc() === uc ? ((wc = !0), void f.close()) : void (rc || ((sc = !0), f.goTo(Dc().pid), (sc = !1)));
                    },
                    updateURL: function () {
                        Cc(), sc || (vc ? (oc = setTimeout(Ec, 800)) : Ec());
                    },
                },
            }),
                e.extend(f, cb);
        };
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? (module.exports = b()) : (a.PhotoSwipeUI_Default = b());
    })(this, function () {
        "use strict";
        return function (a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v = this,
                w = !1,
                x = !0,
                y = !0,
                z = {
                    barsSize: { top: 44, bottom: "auto" },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function (a, b) {
                        return a.title ? ((b.children[0].innerHTML = a.title), !0) : ((b.children[0].innerHTML = ""), !1);
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [
                        { id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" },
                        { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" },
                        { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" },
                        { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 },
                    ],
                    getImageURLForShare: function () {
                        return a.currItem.src || "";
                    },
                    getPageURLForShare: function () {
                        return window.location.href;
                    },
                    getTextForShare: function () {
                        return a.currItem.title || "";
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200,
                },
                A = function (a) {
                    if (r) return !0;
                    (a = a || window.event), q.timeToIdle && q.mouseUsed && !k && K();
                    for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) (c = S[g]), c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), (d = !0));
                    if (d) {
                        a.stopPropagation && a.stopPropagation(), (r = !0);
                        var h = b.features.isOldAndroid ? 600 : 30;
                        s = setTimeout(function () {
                            r = !1;
                        }, h);
                    }
                },
                B = function () {
                    return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth;
                },
                C = function (a, c, d) {
                    b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
                },
                D = function () {
                    var a = 1 === q.getNumItemsFn();
                    a !== p && (C(d, "ui--one-slide", a), (p = a));
                },
                E = function () {
                    C(i, "share-modal--hidden", y);
                },
                F = function () {
                    return (
                        (y = !y),
                        y
                            ? (b.removeClass(i, "pswp__share-modal--fade-in"),
                              setTimeout(function () {
                                  y && E();
                              }, 300))
                            : (E(),
                              setTimeout(function () {
                                  y || b.addClass(i, "pswp__share-modal--fade-in");
                              }, 30)),
                        y || H(),
                        !1
                    );
                },
                G = function (b) {
                    b = b || window.event;
                    var c = b.target || b.srcElement;
                    return (
                        a.shout("shareLinkClick", b, c),
                        !(
                            !c.href ||
                            (!c.hasAttribute("download") &&
                                (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), 1))
                        )
                    );
                },
                H = function () {
                    for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)
                        (a = q.shareButtons[g]),
                            (c = q.getImageURLForShare(a)),
                            (d = q.getPageURLForShare(a)),
                            (e = q.getTextForShare(a)),
                            (b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e))),
                            (f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>"),
                            q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                    (i.children[0].innerHTML = f), (i.children[0].onclick = G);
                },
                I = function (a) {
                    for (var c = 0; c < q.closeElClasses.length; c++) if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
                },
                J = 0,
                K = function () {
                    clearTimeout(u), (J = 0), k && v.setIdle(!1);
                },
                L = function (a) {
                    a = a || window.event;
                    var b = a.relatedTarget || a.toElement;
                    (b && "HTML" !== b.nodeName) ||
                        (clearTimeout(u),
                        (u = setTimeout(function () {
                            v.setIdle(!0);
                        }, q.timeToIdleOutside)));
                },
                M = function () {
                    q.fullscreenEl &&
                        !b.features.isOldAndroid &&
                        (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"));
                },
                N = function () {
                    q.preloaderEl &&
                        (O(!0),
                        l("beforeChange", function () {
                            clearTimeout(o),
                                (o = setTimeout(function () {
                                    a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || (a.currItem.img && !a.currItem.img.naturalWidth)) && O(!1) : O(!0);
                                }, q.loadingIndicatorDelay));
                        }),
                        l("imageLoadComplete", function (b, c) {
                            a.currItem === c && O(!0);
                        }));
                },
                O = function (a) {
                    n !== a && (C(m, "preloader--active", !a), (n = a));
                },
                P = function (a) {
                    var c = a.vGap;
                    if (B()) {
                        var g = q.barsSize;
                        if (q.captionEl && "auto" === g.bottom)
                            if ((f || ((f = b.createEl("pswp__caption pswp__caption--fake")), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0))) {
                                var h = f.clientHeight;
                                c.bottom = parseInt(h, 10) || 44;
                            } else c.bottom = g.top;
                        else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                        c.top = g.top;
                    } else c.top = c.bottom = 0;
                },
                Q = function () {
                    q.timeToIdle &&
                        l("mouseUsed", function () {
                            b.bind(document, "mousemove", K),
                                b.bind(document, "mouseout", L),
                                (t = setInterval(function () {
                                    2 === ++J && v.setIdle(!0);
                                }, q.timeToIdle / 2));
                        });
                },
                R = function () {
                    l("onVerticalDrag", function (a) {
                        x && a < 0.95 ? v.hideControls() : !x && a >= 0.95 && v.showControls();
                    });
                    var a;
                    l("onPinchClose", function (b) {
                        x && b < 0.9 ? (v.hideControls(), (a = !0)) : a && !x && b > 0.9 && v.showControls();
                    }),
                        l("zoomGestureEnded", function () {
                            (a = !1) && !x && v.showControls();
                        });
                },
                S = [
                    {
                        name: "caption",
                        option: "captionEl",
                        onInit: function (a) {
                            e = a;
                        },
                    },
                    {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function (a) {
                            i = a;
                        },
                        onTap: function () {
                            F();
                        },
                    },
                    {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function (a) {
                            h = a;
                        },
                        onTap: function () {
                            F();
                        },
                    },
                    { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom },
                    {
                        name: "counter",
                        option: "counterEl",
                        onInit: function (a) {
                            g = a;
                        },
                    },
                    { name: "button--close", option: "closeEl", onTap: a.close },
                    { name: "button--arrow--left", option: "arrowEl", onTap: a.prev },
                    { name: "button--arrow--right", option: "arrowEl", onTap: a.next },
                    {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function () {
                            c.isFullscreen() ? c.exit() : c.enter();
                        },
                    },
                    {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function (a) {
                            m = a;
                        },
                    },
                ],
                T = function () {
                    var a,
                        c,
                        e,
                        f = function (d) {
                            if (d)
                                for (var f = d.length, g = 0; g < f; g++) {
                                    (a = d[g]), (c = a.className);
                                    for (var h = 0; h < S.length; h++)
                                        (e = S[h]), c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"));
                                }
                        };
                    f(d.children);
                    var g = b.getChildByClass(d, "pswp__top-bar");
                    g && f(g.children);
                };
            (v.init = function () {
                b.extend(a.options, z, !0),
                    (q = a.options),
                    (d = b.getChildByClass(a.scrollWrap, "pswp__ui")),
                    (l = a.listen),
                    R(),
                    l("beforeChange", v.update),
                    l("doubleTap", function (b) {
                        var c = a.currItem.initialZoomLevel;
                        a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
                    }),
                    l("preventDragEvent", function (a, b, c) {
                        var d = a.target || a.srcElement;
                        d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1);
                    }),
                    l("bindEvents", function () {
                        b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
                    }),
                    l("unbindEvents", function () {
                        y || F(),
                            t && clearInterval(t),
                            b.unbind(document, "mouseout", L),
                            b.unbind(document, "mousemove", K),
                            b.unbind(d, "pswpTap click", A),
                            b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap),
                            b.unbind(a.scrollWrap, "mouseover", v.onMouseOver),
                            c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && ((q.hideAnimationDuration = 0), c.exit()), (c = null));
                    }),
                    l("destroy", function () {
                        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1);
                    }),
                    q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"),
                    l("initialZoomIn", function () {
                        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
                    }),
                    l("initialZoomOut", function () {
                        b.addClass(d, "pswp__ui--hidden");
                    }),
                    l("parseVerticalMargin", P),
                    T(),
                    q.shareEl && h && i && (y = !0),
                    D(),
                    Q(),
                    M(),
                    N();
            }),
                (v.setIdle = function (a) {
                    (k = a), C(d, "ui--idle", a);
                }),
                (v.update = function () {
                    x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), (w = !0)) : (w = !1), y || F(), D();
                }),
                (v.updateFullscreen = function (d) {
                    d &&
                        setTimeout(function () {
                            a.setScrollOffset(0, b.getScrollY());
                        }, 50),
                        b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs");
                }),
                (v.updateIndexIndicator = function () {
                    q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
                }),
                (v.onGlobalTap = function (c) {
                    c = c || window.event;
                    var d = c.target || c.srcElement;
                    if (!r)
                        if (c.detail && "mouse" === c.detail.pointerType) {
                            if (I(d)) return void a.close();
                            b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint));
                        } else if ((q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))) return void a.close();
                }),
                (v.onMouseOver = function (a) {
                    a = a || window.event;
                    var b = a.target || a.srcElement;
                    C(d, "ui--over-close", I(b));
                }),
                (v.hideControls = function () {
                    b.addClass(d, "pswp__ui--hidden"), (x = !1);
                }),
                (v.showControls = function () {
                    (x = !0), w || v.update(), b.removeClass(d, "pswp__ui--hidden");
                }),
                (v.supportsFullscreen = function () {
                    var a = document;
                    return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
                }),
                (v.getFullscreenAPI = function () {
                    var b,
                        c = document.documentElement,
                        d = "fullscreenchange";
                    return (
                        c.requestFullscreen
                            ? (b = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: d })
                            : c.mozRequestFullScreen
                            ? (b = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + d })
                            : c.webkitRequestFullscreen
                            ? (b = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + d })
                            : c.msRequestFullscreen && (b = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }),
                        b &&
                            ((b.enter = function () {
                                return (j = q.closeOnScroll), (q.closeOnScroll = !1), "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                            }),
                            (b.exit = function () {
                                return (q.closeOnScroll = j), document[this.exitK]();
                            }),
                            (b.isFullscreen = function () {
                                return document[this.elementK];
                            })),
                        b
                    );
                });
        };
    }),
    jQuery(document).ready(function (a) {
        a(".twentytwenty-container").length > 0 &&
            (a.fn.twentytwenty = function (b) {
                var b = a.extend({ default_offset_pct: 0.5, orientation: "horizontal", navigation_follow: !1 }, b);
                return this.each(function () {
                    var c = b.default_offset_pct,
                        d = a(this),
                        e = b.orientation,
                        f = "vertical" === e ? "down" : "left",
                        g = "vertical" === e ? "up" : "right",
                        h = b.navigation_follow;
                    d.wrap("<div class='twentytwenty-wrapper twentytwenty-" + e + "'></div>");
                    var i = d.find("img:first"),
                        j = d.find("img:last"),
                        k = i.attr("title"),
                        l = j.attr("title");
                    d.append("<div class='twentytwenty-handle'></div>");
                    var m = d.find(".twentytwenty-handle");
                    m.append("<span class='twentytwenty-" + f + "-arrow'></span>"),
                        m.append("<span class='twentytwenty-" + g + "-arrow'></span>"),
                        d.addClass("twentytwenty-container"),
                        i.addClass("twentytwenty-before"),
                        j.addClass("twentytwenty-after"),
                        void 0 !== k && k && k.length > 0 && d.append("<div class='twentytwenty-before-label'>" + k + "</div>"),
                        void 0 !== l && l && l.length > 0 && d.append("<div class='twentytwenty-after-label'>" + l + "</div>");
                    var n = function (a) {
                            var b = i.width(),
                                c = i.height();
                            return { w: b + "px", h: c + "px", cw: a * b + "px", ch: a * c + "px" };
                        },
                        o = function (a) {
                            "vertical" === e ? i.css("clip", "rect(0," + a.w + "," + a.ch + ",0)") : i.css("clip", "rect(0," + a.cw + "," + a.h + ",0)"), d.css("height", a.h);
                        },
                        p = function (a) {
                            var b = n(a);
                            m.css("vertical" === e ? "top" : "left", "vertical" === e ? b.ch : b.cw), o(b);
                        };
                    a(window).on("resize.twentytwenty", function (a) {
                        p(c);
                    });
                    var q = 0,
                        r = 0;
                    m.on("movestart", function (a) {
                        ((a.distX > a.distY && a.distX < -a.distY) || (a.distX < a.distY && a.distX > -a.distY)) && "vertical" !== e
                            ? a.preventDefault()
                            : ((a.distX < a.distY && a.distX < -a.distY) || (a.distX > a.distY && a.distX > -a.distY)) && "vertical" === e && a.preventDefault(),
                            d.addClass("active"),
                            d.removeClass("active-click"),
                            (q = d.offset().left),
                            (offsetY = d.offset().top),
                            (r = i.width()),
                            (imgHeight = i.height());
                    }),
                        m.on("moveend", function (a) {
                            d.removeClass("active");
                        }),
                        m.on("move", function (a) {
                            d.hasClass("active") && ((c = "vertical" === e ? (a.pageY - offsetY) / imgHeight : (a.pageX - q) / r), c < 0 && (c = 0), c > 1 && (c = 1), p(c));
                        }),
                        h ||
                            d.hasClass("active") ||
                            (d.on("mouseup", function (a) {
                                d.removeClass("active-click");
                            }),
                            d.on("mousedown", function (a) {
                                d.addClass("active-click"),
                                    (q = d.offset().left),
                                    (offsetY = d.offset().top),
                                    (r = i.width()),
                                    (imgHeight = i.height()),
                                    (c = "vertical" === e ? (a.pageY - offsetY) / imgHeight : (a.pageX - q) / r),
                                    c < 0 && (c = 0),
                                    c > 1 && (c = 1),
                                    p(c);
                            })),
                        d.find("img").on("mousedown", function (a) {
                            a.preventDefault();
                        }),
                        h &&
                            (d.on("mouseenter", function (a) {
                                d.addClass("active"), (q = d.offset().left), (offsetY = d.offset().top), (r = i.width()), (imgHeight = i.height());
                            }),
                            d.on("mouseleave", function (a) {
                                d.removeClass("active");
                            }),
                            d.on("mousemove", function (a) {
                                d.hasClass("active") && ((c = "vertical" === e ? (a.pageY - offsetY) / imgHeight : (a.pageX - q) / r), c < 0 && (c = 0), c > 1 && (c = 1), p(c));
                            })),
                        a(window).trigger("resize.twentytwenty");
                });
            });
    }),
    jQuery(document).ready(function (a) {
        "ontouchstart" in window || !("on" == dtLocal.themeSettings.smoothScroll || ("on_parallax" == dtLocal.themeSettings.smoothScroll && a(".stripe-parallax-bg").length > 0)) || a("body").css({ "scroll-behavior": "smooth" });
    }),
    jQuery(document).ready(function (a) {
        var b = a(window),
            c = b.height();
        b.on("resize", function () {
            c = b.height();
        }),
            (a.fn.parallax = function (d, e, f) {
                function g() {
                    var b = dtGlobals.winScrollTop;
                    k.each(function () {
                        var f = a(this),
                            g = f.offset().top;
                        g + h(f) < b || g > b + c || k.css("backgroundPosition", d + " " + Math.round((g - b) * e) + "px");
                    });
                }
                var h,
                    i,
                    j,
                    k = a(this);
                k.each(function () {
                    i = k.offset().top;
                }),
                    (h = f
                        ? function (a) {
                              return a.outerHeight(!0);
                          }
                        : function (a) {
                              return a.height();
                          }),
                    (arguments.length < 1 || null === d) && (d = "50%"),
                    (arguments.length < 2 || null === e) && (e = 0.1),
                    (arguments.length < 3 || null === f) && (f = !0),
                    b
                        .bind("scroll", g)
                        .on("resize", function () {
                            g();
                        })
                        .bind("debouncedresize", function () {
                            clearTimeout(j),
                                (j = setTimeout(function () {
                                    g();
                                }, 20));
                        }),
                    g();
            });
    }),
    jQuery(document).ready(function (a) {
        a.fn.extend({
            customSelect: function (b) {
                if (void 0 === document.body.style.maxHeight) return this;
                var c = { customClass: "customSelect", mapClass: !0, mapStyle: !0 },
                    b = a.extend(c, b),
                    d = b.customClass,
                    e = function (b, c) {
                        var d = b.find(":selected"),
                            e = c.children(":first"),
                            g = d.html() || "&nbsp;";
                        e.html(g),
                            d.attr("disabled") ? c.addClass(f("DisabledOption")) : c.removeClass(f("DisabledOption")),
                            setTimeout(function () {
                                c.removeClass(f("Open")), a(document).off("mouseup." + f("Open"));
                            }, 60);
                    },
                    f = function (a) {
                        return d + a;
                    };
                return this.each(function () {
                    var c = a(this),
                        g = a("<span />").addClass(f("Inner")),
                        h = a("<span />");
                    c.after(h.append(g)),
                        h.addClass(d),
                        b.mapClass && h.addClass(c.attr("class")),
                        b.mapStyle && h.attr("style", c.attr("style")),
                        c
                            .addClass("hasCustomSelect")
                            .on("update", function () {
                                e(c, h);
                                var a = parseInt(c.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                                h.css({ display: "inline-block" });
                                var b = h.outerHeight();
                                c.attr("disabled") ? h.addClass(f("Disabled")) : h.removeClass(f("Disabled")),
                                    g.css({ width: a, display: "inline-block" }),
                                    c.css({ "-webkit-appearance": "menulist-button", width: h.outerWidth(), position: "absolute", opacity: 0, height: b, fontSize: h.css("font-size") });
                            })
                            .on("change", function () {
                                h.addClass(f("Changed")), e(c, h);
                            })
                            .on("keyup", function (a) {
                                h.hasClass(f("Open")) ? (13 != a.which && 27 != a.which) || e(c, h) : (c.blur(), c.focus());
                            })
                            .on("mousedown", function (a) {
                                h.removeClass(f("Changed"));
                            })
                            .on("mouseup", function (b) {
                                h.hasClass(f("Open")) ||
                                    (a("." + f("Open")).not(h).length > 0 && "undefined" != typeof InstallTrigger
                                        ? c.focus()
                                        : (h.addClass(f("Open")),
                                          b.stopPropagation(),
                                          a(document).one("mouseup." + f("Open"), function (b) {
                                              b.target != c.get(0) && a.inArray(b.target, c.find("*").get()) < 0 ? c.blur() : e(c, h);
                                          })));
                            })
                            .focus(function () {
                                h.removeClass(f("Changed")).addClass(f("Focus"));
                            })
                            .blur(function () {
                                h.removeClass(f("Focus") + " " + f("Open"));
                            })
                            .hover(
                                function () {
                                    h.addClass(f("Hover"));
                                },
                                function () {
                                    h.removeClass(f("Hover"));
                                }
                            )
                            .trigger("update");
                });
            },
        });
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (c) {
                  b(a, c);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(a, require("jquery")))
            : (a.jQueryBridget = b(a, a.jQuery));
    })(window, function (a, b) {
        "use strict";
        function c(c, f, h) {
            function i(a, b, d) {
                var e,
                    f = "$()." + c + '("' + b + '")';
                return (
                    a.each(function (a, i) {
                        var j = h.data(i, c);
                        if (!j) return void g(c + " not initialized. Cannot call methods, i.e. " + f);
                        var k = j[b];
                        if (!k || "_" == b.charAt(0)) return void g(f + " is not a valid method");
                        var l = k.apply(j, d);
                        e = void 0 === e ? l : e;
                    }),
                    void 0 !== e ? e : a
                );
            }
            function j(a, b) {
                a.each(function (a, d) {
                    var e = h.data(d, c);
                    e ? (e.option(b), e._init()) : ((e = new f(d, b)), h.data(d, c, e));
                });
            }
            (h = h || b || a.jQuery) &&
                (f.prototype.option ||
                    (f.prototype.option = function (a) {
                        h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a));
                    }),
                (h.fn[c] = function (a) {
                    if ("string" == typeof a) {
                        return i(this, a, e.call(arguments, 1));
                    }
                    return j(this, a), this;
                }),
                d(h));
        }
        function d(a) {
            !a || (a && a.bridget) || (a.bridget = c);
        }
        var e = Array.prototype.slice,
            f = a.console,
            g =
                void 0 === f
                    ? function () {}
                    : function (a) {
                          f.error(a);
                      };
        return d(b || a.jQuery), c;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? (module.exports = b()) : (a.EvEmitter = b());
    })(this, function () {
        function a() {}
        var b = a.prototype;
        return (
            (b.on = function (a, b) {
                if (a && b) {
                    var c = (this._events = this._events || {}),
                        d = (c[a] = c[a] || []);
                    return -1 == d.indexOf(b) && d.push(b), this;
                }
            }),
            (b.once = function (a, b) {
                if (a && b) {
                    this.on(a, b);
                    var c = (this._onceEvents = this._onceEvents || {});
                    return ((c[a] = c[a] || {})[b] = !0), this;
                }
            }),
            (b.off = function (a, b) {
                var c = this._events && this._events[a];
                if (c && c.length) {
                    var d = c.indexOf(b);
                    return -1 != d && c.splice(d, 1), this;
                }
            }),
            (b.emitEvent = function (a, b) {
                var c = this._events && this._events[a];
                if (c && c.length) {
                    var d = 0,
                        e = c[d];
                    b = b || [];
                    for (var f = this._onceEvents && this._onceEvents[a]; e; ) {
                        var g = f && f[e];
                        g && (this.off(a, e), delete f[e]), e.apply(this, b), (d += g ? 0 : 1), (e = c[d]);
                    }
                    return this;
                }
            }),
            a
        );
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                  return b();
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b())
            : (a.getSize = b());
    })(window, function () {
        "use strict";
        function a(a) {
            var b = parseFloat(a);
            return -1 == a.indexOf("%") && !isNaN(b) && b;
        }
        function b() {}
        function c() {
            for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0; b < j; b++) {
                a[i[b]] = 0;
            }
            return a;
        }
        function d(a) {
            var b = getComputedStyle(a);
            return b || h("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), b;
        }
        function e() {
            if (!k) {
                k = !0;
                var b = document.createElement("div");
                (b.style.width = "200px"), (b.style.padding = "1px 2px 3px 4px"), (b.style.borderStyle = "solid"), (b.style.borderWidth = "1px 2px 3px 4px"), (b.style.boxSizing = "border-box");
                var c = document.body || document.documentElement;
                c.appendChild(b);
                var e = d(b);
                (f.isBoxSizeOuter = g = 200 == a(e.width)), c.removeChild(b);
            }
        }
        function f(b) {
            if ((e(), "string" == typeof b && (b = document.querySelector(b)), b && "object" == typeof b && b.nodeType)) {
                var f = d(b);
                if ("none" == f.display) return c();
                var h = {};
                (h.width = b.offsetWidth), (h.height = b.offsetHeight);
                for (var k = (h.isBorderBox = "border-box" == f.boxSizing), l = 0; l < j; l++) {
                    var m = i[l],
                        n = f[m],
                        o = parseFloat(n);
                    h[m] = isNaN(o) ? 0 : o;
                }
                var p = h.paddingLeft + h.paddingRight,
                    q = h.paddingTop + h.paddingBottom,
                    r = h.marginLeft + h.marginRight,
                    s = h.marginTop + h.marginBottom,
                    t = h.borderLeftWidth + h.borderRightWidth,
                    u = h.borderTopWidth + h.borderBottomWidth,
                    v = k && g,
                    w = a(f.width);
                !1 !== w && (h.width = w + (v ? 0 : p + t));
                var x = a(f.height);
                return !1 !== x && (h.height = x + (v ? 0 : q + u)), (h.innerWidth = h.width - (p + t)), (h.innerHeight = h.height - (q + u)), (h.outerWidth = h.width + r), (h.outerHeight = h.height + s), h;
            }
        }
        var g,
            h =
                "undefined" == typeof console
                    ? b
                    : function (a) {
                          console.error(a);
                      },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            j = i.length,
            k = !1;
        return f;
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", b) : "object" == typeof module && module.exports ? (module.exports = b()) : (a.matchesSelector = b());
    })(window, function () {
        "use strict";
        var a = (function () {
            var a = Element.prototype;
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d + "MatchesSelector";
                if (a[e]) return e;
            }
        })();
        return function (b, c) {
            return b[a](c);
        };
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (c) {
                  return b(a, c);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(a, require("desandro-matches-selector")))
            : (a.fizzyUIUtils = b(a, a.matchesSelector));
    })(window, function (a, b) {
        var c = {};
        (c.extend = function (a, b) {
            for (var c in b) a[c] = b[c];
            return a;
        }),
            (c.modulo = function (a, b) {
                return ((a % b) + b) % b;
            }),
            (c.makeArray = function (a) {
                var b = [];
                if (Array.isArray(a)) b = a;
                else if (a && "number" == typeof a.length) for (var c = 0; c < a.length; c++) b.push(a[c]);
                else b.push(a);
                return b;
            }),
            (c.removeFrom = function (a, b) {
                var c = a.indexOf(b);
                -1 != c && a.splice(c, 1);
            }),
            (c.getParent = function (a, c) {
                for (; a != document.body; ) if (((a = a.parentNode), b(a, c))) return a;
            }),
            (c.getQueryElement = function (a) {
                return "string" == typeof a ? document.querySelector(a) : a;
            }),
            (c.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (c.filterFindElements = function (a, d) {
                a = c.makeArray(a);
                var e = [],
                    f = function (a) {
                        return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName;
                    };
                return (
                    a.forEach(function (a) {
                        if (f(a)) {
                            if (!d) return void e.push(a);
                            b(a, d) && e.push(a);
                            for (var c = a.querySelectorAll(d), g = 0; g < c.length; g++) e.push(c[g]);
                        }
                    }),
                    e
                );
            }),
            (c.debounceMethod = function (a, b, c) {
                var d = a.prototype[b],
                    e = b + "Timeout";
                a.prototype[b] = function () {
                    var a = this[e];
                    a && clearTimeout(a);
                    var b = arguments,
                        f = this;
                    this[e] = setTimeout(function () {
                        d.apply(f, b), delete f[e];
                    }, c || 100);
                };
            }),
            (c.docReady = function (a) {
                "complete" == document.readyState ? a() : document.addEventListener("DOMContentLoaded", a);
            }),
            (c.toDashed = function (a) {
                return a
                    .replace(/(.)([A-Z])/g, function (a, b, c) {
                        return b + "-" + c;
                    })
                    .toLowerCase();
            });
        var d = a.console;
        return (
            (c.htmlInit = function (b, e) {
                c.docReady(function () {
                    var f = c.toDashed(e),
                        g = "data-" + f,
                        h = document.querySelectorAll("[" + g + "]"),
                        i = document.querySelectorAll(".js-" + f),
                        j = c.makeArray(h).concat(c.makeArray(i)),
                        k = g + "-options",
                        l = a.jQuery;
                    j.forEach(function (a) {
                        var c,
                            f = a.getAttribute(g) || a.getAttribute(k);
                        try {
                            c = f && JSON.parse(f);
                        } catch (b) {
                            return void (d && d.error("Error parsing " + g + " on " + a.className + ": " + b));
                        }
                        var h = new b(a, c);
                        l && l.data(a, e, h);
                    });
                });
            }),
            c
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("ev-emitter"), require("get-size")))
            : ((a.Outlayer = {}), (a.Outlayer.Item = b(a.EvEmitter, a.getSize)));
    })(window, function (a, b) {
        "use strict";
        function c(a) {
            for (var b in a) return !1;
            return null, !0;
        }
        function d(a, b) {
            a && ((this.element = a), (this.layout = b), (this.position = { x: 0, y: 0 }), this._create());
        }
        var e = document.documentElement.style,
            f = "string" == typeof e.transition ? "transition" : "WebkitTransition",
            g = "string" == typeof e.transform ? "transform" : "WebkitTransform",
            h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[f],
            i = { transform: g, transition: f, transitionDuration: f + "Duration", transitionProperty: f + "Property", transitionDelay: f + "Delay" },
            j = (d.prototype = Object.create(a.prototype));
        (j.constructor = d),
            (j._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (j.handleEvent = function (a) {
                var b = "on" + a.type;
                this[b] && this[b](a);
            }),
            (j.getSize = function () {
                this.size = b(this.element);
            }),
            (j.css = function (a) {
                var b = this.element.style;
                for (var c in a) {
                    b[i[c] || c] = a[c];
                }
            }),
            (j.getPosition = function () {
                var a = getComputedStyle(this.element),
                    b = this.layout._getOption("originLeft"),
                    c = this.layout._getOption("originTop"),
                    d = a[b ? "left" : "right"],
                    e = a[c ? "top" : "bottom"],
                    f = this.layout.size,
                    g = -1 != d.indexOf("%") ? (parseFloat(d) / 100) * f.width : parseInt(d, 10),
                    h = -1 != e.indexOf("%") ? (parseFloat(e) / 100) * f.height : parseInt(e, 10);
                (g = isNaN(g) ? 0 : g), (h = isNaN(h) ? 0 : h), (g -= b ? f.paddingLeft : f.paddingRight), (h -= c ? f.paddingTop : f.paddingBottom), (this.position.x = g), (this.position.y = h);
            }),
            (j.layoutPosition = function () {
                var a = this.layout.size,
                    b = {},
                    c = this.layout._getOption("originLeft"),
                    d = this.layout._getOption("originTop"),
                    e = c ? "paddingLeft" : "paddingRight",
                    f = c ? "left" : "right",
                    g = c ? "right" : "left",
                    h = this.position.x + a[e];
                (b[f] = this.getXValue(h)), (b[g] = "");
                var i = d ? "paddingTop" : "paddingBottom",
                    j = d ? "top" : "bottom",
                    k = d ? "bottom" : "top",
                    l = this.position.y + a[i];
                (b[j] = this.getYValue(l)), (b[k] = ""), this.css(b), this.emitEvent("layout", [this]);
            }),
            (j.getXValue = function (a) {
                var b = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !b ? (a / this.layout.size.width) * 100 + "%" : a + "px";
            }),
            (j.getYValue = function (a) {
                var b = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && b ? (a / this.layout.size.height) * 100 + "%" : a + "px";
            }),
            (j._transitionTo = function (a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if ((this.setPosition(a, b), g && !this.isTransitioning)) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {};
                (j.transform = this.getTranslate(h, i)), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (j.getTranslate = function (a, b) {
                var c = this.layout._getOption("originLeft"),
                    d = this.layout._getOption("originTop");
                return (a = c ? a : -a), (b = d ? b : -b), "translate3d(" + a + "px, " + b + "px, 0)";
            }),
            (j.goTo = function (a, b) {
                this.setPosition(a, b), this.layoutPosition();
            }),
            (j.moveTo = j._transitionTo),
            (j.setPosition = function (a, b) {
                (this.position.x = parseInt(a, 10)), (this.position.y = parseInt(b, 10));
            }),
            (j._nonTransition = function (a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
            }),
            (j.transition = function (a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    this.element.offsetHeight;
                    null;
                }
                this.enableTransition(a.to), this.css(a.to), (this.isTransitioning = !0);
            });
        var k =
            "opacity," +
            (function (a) {
                return a.replace(/([A-Z])/g, function (a) {
                    return "-" + a.toLowerCase();
                });
            })(g);
        (j.enableTransition = function () {
            if (!this.isTransitioning) {
                var a = this.layout.options.transitionDuration;
                (a = "number" == typeof a ? a + "ms" : a), this.css({ transitionProperty: k, transitionDuration: a, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1);
            }
        }),
            (j.onwebkitTransitionEnd = function (a) {
                this.ontransitionend(a);
            }),
            (j.onotransitionend = function (a) {
                this.ontransitionend(a);
            });
        var l = { "-webkit-transform": "transform" };
        (j.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                    d = l[a.propertyName] || a.propertyName;
                if ((delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && ((this.element.style[a.propertyName] = ""), delete b.clean[d]), d in b.onEnd)) {
                    b.onEnd[d].call(this), delete b.onEnd[d];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (j.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), (this.isTransitioning = !1);
            }),
            (j._removeStyles = function (a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b);
            });
        var m = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (j.removeTransitionStyles = function () {
                this.css(m);
            }),
            (j.stagger = function (a) {
                (a = isNaN(a) ? 0 : a), (this.staggerDelay = a + "ms");
            }),
            (j.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (j.remove = function () {
                if (!f || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                this.once("transitionEnd", function () {
                    this.removeElem();
                }),
                    this.hide();
            }),
            (j.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var a = this.layout.options,
                    b = {};
                (b[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b });
            }),
            (j.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (j.getHideRevealTransitionEndProperty = function (a) {
                var b = this.layout.options[a];
                if (b.opacity) return "opacity";
                for (var c in b) return c;
            }),
            (j.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var a = this.layout.options,
                    b = {};
                (b[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b });
            }),
            (j.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (j.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            d
        );
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f) {
                  return b(a, c, d, e, f);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (a.Outlayer = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item));
    })(window, function (a, b, c, d, e) {
        "use strict";
        function f(a, b) {
            var c = d.getQueryElement(a);
            if (!c) return void (i && i.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            (this.element = c), j && (this.$element = j(this.element)), (this.options = d.extend({}, this.constructor.defaults)), this.option(b);
            var e = ++l;
            (this.element.outlayerGUID = e), (m[e] = this), this._create(), this._getOption("initLayout") && this.layout();
        }
        function g(a) {
            function b() {
                a.apply(this, arguments);
            }
            return (b.prototype = Object.create(a.prototype)), (b.prototype.constructor = b), b;
        }
        function h(a) {
            if ("number" == typeof a) return a;
            var b = a.match(/(^\d*\.?\d*)(\w*)/),
                c = b && b[1],
                d = b && b[2];
            return c.length ? (c = parseFloat(c)) * (o[d] || 1) : 0;
        }
        var i = a.console,
            j = a.jQuery,
            k = function () {},
            l = 0,
            m = {};
        (f.namespace = "outlayer"),
            (f.Item = e),
            (f.defaults = {
                customSorters: {},
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                equalheight: !1,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var n = f.prototype;
        d.extend(n, b.prototype),
            (n.option = function (a) {
                d.extend(this.options, a);
            }),
            (n._getOption = function (a) {
                var b = this.constructor.compatOptions[a];
                return b && void 0 !== this.options[b] ? this.options[b] : this.options[a];
            }),
            (f.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (n._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), d.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (n.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (n._itemize = function (a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0; e < b.length; e++) {
                    var f = b[e],
                        g = new c(f, this);
                    d.push(g);
                }
                return d;
            }),
            (n._filterFindItemElements = function (a) {
                return d.filterFindElements(a, this.options.itemSelector);
            }),
            (n.getItemElements = function () {
                return this.items.map(function (a) {
                    return a.element;
                });
            }),
            (n.layout = function () {
                this._resetLayout(), this._manageStamps();
                var a = this._getOption("layoutInstant"),
                    b = void 0 !== a ? a : !this._isLayoutInited;
                this.layoutItems(this.items, b), (this._isLayoutInited = !0);
            }),
            (n._init = n.layout),
            (n._resetLayout = function () {
                this.getSize();
            }),
            (n.getSize = function () {
                this.size = c(this.element);
            }),
            (n._getMeasurement = function (a, b) {
                var d,
                    e = this.options[a];
                e ? ("string" == typeof e ? (d = this.element.querySelector(e)) : e instanceof HTMLElement && (d = e), (this[a] = d ? c(d)[b] : e)) : (this[a] = 0);
            }),
            (n.layoutItems = function (a, b) {
                (a = this._getItemsForLayout(a)), this._layoutItems(a, b), this._postLayout();
            }),
            (n._getItemsForLayout = function (a) {
                return a.filter(function (a) {
                    return !a.isIgnored;
                });
            }),
            (n._layoutItems = function (a, b) {
                if ((this._emitCompleteOnItems("layout", a), a && a.length)) {
                    var c = [];
                    a.forEach(function (a) {
                        var d = this._getItemLayoutPosition(a);
                        (d.item = a), (d.isInstant = b || a.isLayoutInstant), c.push(d);
                    }, this),
                        this._processLayoutQueue(c);
                }
            }),
            (n._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (n._processLayoutQueue = function (a) {
                this.updateStagger(),
                    a.forEach(function (a, b) {
                        this._positionItem(a.item, a.x, a.y, a.isInstant, b);
                    }, this);
            }),
            (n.updateStagger = function () {
                var a = this.options.stagger;
                return null === a || void 0 === a ? void (this.stagger = 0) : ((this.stagger = h(a)), this.stagger);
            }),
            (n._positionItem = function (a, b, c, d, e) {
                d ? a.goTo(b, c) : (a.stagger(e * this.stagger), a.moveTo(b, c));
            }),
            (n._postLayout = function () {
                this.resizeContainer();
            }),
            (n.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var a = this._getContainerSize();
                    a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1));
                }
            }),
            (n._getContainerSize = k),
            (n._setContainerMeasure = function (a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
                        (a = Math.max(a, 0)),
                        (this.element.style[b ? "width" : "height"] = a + "px");
                }
            }),
            (n._emitCompleteOnItems = function (a, b) {
                function c() {
                    e.dispatchEvent(a + "Complete", null, [b]);
                }
                function d() {
                    ++g == f && c();
                }
                var e = this,
                    f = b.length;
                if (!b || !f) return void c();
                var g = 0;
                b.forEach(function (b) {
                    b.once(a, d);
                });
            }),
            (n.dispatchEvent = function (a, b, c) {
                var d = b ? [b].concat(c) : c;
                if ((this.emitEvent(a, d), j))
                    if (((this.$element = this.$element || j(this.element)), b)) {
                        var e = j.Event(b);
                        (e.type = a), this.$element.trigger(e, c);
                    } else this.$element.trigger(a, c);
            }),
            (n.ignore = function (a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0);
            }),
            (n.unignore = function (a) {
                var b = this.getItem(a);
                b && delete b.isIgnored;
            }),
            (n.stamp = function (a) {
                (a = this._find(a)) && ((this.stamps = this.stamps.concat(a)), a.forEach(this.ignore, this));
            }),
            (n.unstamp = function (a) {
                (a = this._find(a)) &&
                    a.forEach(function (a) {
                        d.removeFrom(this.stamps, a), this.unignore(a);
                    }, this);
            }),
            (n._find = function (a) {
                if (a) return "string" == typeof a && (a = this.element.querySelectorAll(a)), (a = d.makeArray(a));
            }),
            (n._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (n._getBoundingRect = function () {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
                };
            }),
            (n._manageStamp = k),
            (n._getElementOffset = function (a) {
                var b = a.getBoundingClientRect(),
                    d = this._boundingRect,
                    e = c(a);
                return { left: b.left - d.left - e.marginLeft, top: b.top - d.top - e.marginTop, right: d.right - b.right - e.marginRight, bottom: d.bottom - b.bottom - e.marginBottom };
            }),
            (n.handleEvent = d.handleEvent),
            (n.bindResize = function () {
                a.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (n.unbindResize = function () {
                a.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (n.onresize = function () {
                this.resize();
            }),
            d.debounceMethod(f, "onresize", 100),
            (n.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (n.needsResizeLayout = function () {
                var a = c(this.element);
                return this.size && a && a.innerWidth !== this.size.innerWidth;
            }),
            (n.addItems = function (a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b;
            }),
            (n.appended = function (a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b));
            }),
            (n.prepended = function (a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    (this.items = b.concat(c)), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c);
                }
            }),
            (n.reveal = function (a) {
                if ((this._emitCompleteOnItems("reveal", a), a && a.length)) {
                    var b = this.updateStagger();
                    a.forEach(function (a, c) {
                        a.stagger(c * b), a.reveal();
                    });
                }
            }),
            (n.hide = function (a) {
                if ((this._emitCompleteOnItems("hide", a), a && a.length)) {
                    var b = this.updateStagger();
                    a.forEach(function (a, c) {
                        a.stagger(c * b), a.hide();
                    });
                }
            }),
            (n.revealItemElements = function (a) {
                var b = this.getItems(a);
                this.reveal(b);
            }),
            (n.hideItemElements = function (a) {
                var b = this.getItems(a);
                this.hide(b);
            }),
            (n.getItem = function (a) {
                for (var b = 0; b < this.items.length; b++) {
                    var c = this.items[b];
                    if (c.element == a) return c;
                }
            }),
            (n.getItems = function (a) {
                a = d.makeArray(a);
                var b = [];
                return (
                    a.forEach(function (a) {
                        var c = this.getItem(a);
                        c && b.push(c);
                    }, this),
                    b
                );
            }),
            (n.remove = function (a) {
                var b = this.getItems(a);
                this._emitCompleteOnItems("remove", b),
                    b &&
                        b.length &&
                        b.forEach(function (a) {
                            a.remove(), d.removeFrom(this.items, a);
                        }, this);
            }),
            (n.destroy = function () {
                var a = this.element.style;
                (a.height = ""),
                    (a.position = ""),
                    (a.width = ""),
                    this.items.forEach(function (a) {
                        a.destroy();
                    }),
                    this.unbindResize();
                var b = this.element.outlayerGUID;
                delete m[b], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace);
            }),
            (f.data = function (a) {
                a = d.getQueryElement(a);
                var b = a && a.outlayerGUID;
                return b && m[b];
            }),
            (f.create = function (a, b) {
                var c = g(f);
                return (
                    (c.defaults = d.extend({}, f.defaults)),
                    d.extend(c.defaults, b),
                    (c.compatOptions = d.extend({}, f.compatOptions)),
                    (c.namespace = a),
                    (c.data = f.data),
                    (c.Item = g(e)),
                    d.htmlInit(c, a),
                    j && j.bridget && j.bridget(a, c),
                    c
                );
            });
        var o = { ms: 1, s: 1e3 };
        return (f.Item = e), f;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("isotope/item", ["outlayer/outlayer"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("outlayer")))
            : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
    })(window, function (a) {
        "use strict";
        function b() {
            a.Item.apply(this, arguments);
        }
        var c = (b.prototype = Object.create(a.Item.prototype)),
            d = c._create;
        (c._create = function () {
            (this.id = this.layout.itemGUID++), d.call(this), (this.sortData = {});
        }),
            (c.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var a = this.layout.options.getSortData,
                        b = this.layout._sorters;
                    for (var c in a) {
                        var d = b[c];
                        this.sortData[c] = d(this.element, this);
                    }
                }
            });
        var e = c.destroy;
        return (
            (c.destroy = function () {
                e.apply(this, arguments), this.css({ display: "" });
            }),
            b
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("get-size"), require("outlayer")))
            : ((a.Isotope = a.Isotope || {}), (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
    })(window, function (a, b) {
        "use strict";
        function c(a) {
            (this.isotope = a), a && ((this.options = a.options[this.namespace]), (this.element = a.element), (this.items = a.filteredItems), (this.size = a.size));
        }
        var d = c.prototype;
        return (
            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (a) {
                d[a] = function () {
                    return b.prototype[a].apply(this.isotope, arguments);
                };
            }),
            (d.needsVerticalResizeLayout = function () {
                var b = a(this.isotope.element);
                return this.isotope.size && b && b.innerHeight != this.isotope.size.innerHeight;
            }),
            (d._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (d.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (d.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (d.getSegmentSize = function (a, b) {
                var c = a + b,
                    d = "outer" + b;
                if ((this._getMeasurement(c, d), !this[c])) {
                    var e = this.getFirstItemSize();
                    this[c] = (e && e[d]) || this.isotope.size["inner" + b];
                }
            }),
            (d.getFirstItemSize = function () {
                var b = this.isotope.filteredItems[0];
                return b && b.element && a(b.element);
            }),
            (d.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (d.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (c.modes = {}),
            (c.create = function (a, b) {
                function e() {
                    c.apply(this, arguments);
                }
                return (e.prototype = Object.create(d)), (e.prototype.constructor = e), b && (e.options = b), (e.prototype.namespace = a), (c.modes[a] = e), e;
            }),
            c
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("outlayer"), require("get-size")))
            : (a.Masonry = b(a.Outlayer, a.getSize));
    })(window, function (a, b) {
        var c = a.create("masonry");
        return (
            (c.compatOptions.fitWidth = "isFitWidth"),
            (c.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var a = 0; a < this.cols; a++) this.colYs.push(0);
                this.maxY = 0;
            }),
            (c.prototype.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
                }
                var d = (this.columnWidth += this.gutter),
                    e = this.containerWidth + this.gutter,
                    f = e / d,
                    g = d - (e % d),
                    h = g && g < 1 ? "round" : "floor";
                (f = Math[h](f)), (this.cols = Math.max(f, 1));
            }),
            (c.prototype.getContainerWidth = function () {
                var a = this._getOption("fitWidth"),
                    c = a ? this.element.parentNode : this.element,
                    d = b(c);
                this.containerWidth = d && d.innerWidth;
            }),
            (c.prototype._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    c = b && b < 1 ? "round" : "ceil",
                    d = Math[c](a.size.outerWidth / this.columnWidth);
                d = Math.min(d, this.cols);
                for (var e = this._getColGroup(d), f = Math.min.apply(Math, e), g = e.indexOf(f), h = { x: this.columnWidth * g, y: f }, i = f + a.size.outerHeight, j = this.cols + 1 - e.length, k = 0; k < j; k++) this.colYs[g + k] = i;
                return h;
            }),
            (c.prototype._getColGroup = function (a) {
                if (a < 2) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; d < c; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e);
                }
                return b;
            }),
            (c.prototype._manageStamp = function (a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this._getOption("originLeft"),
                    f = e ? d.left : d.right,
                    g = f + c.outerWidth,
                    h = Math.floor(f / this.columnWidth);
                h = Math.max(0, h);
                var i = Math.floor(g / this.columnWidth);
                (i -= g % this.columnWidth ? 0 : 1), (i = Math.min(this.cols - 1, i));
                for (var j = this._getOption("originTop"), k = (j ? d.top : d.bottom) + c.outerHeight, l = h; l <= i; l++) this.colYs[l] = Math.max(k, this.colYs[l]);
            }),
            (c.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = { height: this.maxY };
                return this._getOption("fitWidth") && (a.width = this._getContainerFitWidth()), a;
            }),
            (c.prototype._getContainerFitWidth = function () {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
                return (this.cols - a) * this.columnWidth - this.gutter;
            }),
            (c.prototype.needsResizeLayout = function () {
                var a = this.containerWidth;
                return this.getContainerWidth(), a != this.containerWidth;
            }),
            c
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b)
            : "object" == typeof module && module.exports
            ? (module.exports = b(require("../layout-mode"), require("masonry-layout")))
            : b(a.Isotope.LayoutMode, a.Masonry);
    })(window, function (a, b) {
        "use strict";
        var c = a.create("masonry"),
            d = c.prototype,
            e = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
        var g = d.measureColumns;
        d.measureColumns = function () {
            (this.items = this.isotope.filteredItems), g.call(this);
        };
        var h = d._getOption;
        return (
            (d._getOption = function (a) {
                return "fitWidth" == a ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : h.apply(this.isotope, arguments);
            }),
            c
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? (module.exports = b(require("../layout-mode"))) : b(a.Isotope.LayoutMode);
    })(window, function (a) {
        "use strict";
        var b = a.create("fitRows"),
            c = b.prototype;
        return (
            (c._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (c._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = a.size.outerWidth + this.gutter,
                    c = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
                var d = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)), (this.x += b), d;
            }),
            (c._getContainerSize = function () {
                return { height: this.maxY };
            }),
            b
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof module && module.exports ? (module.exports = b(require("../layout-mode"))) : b(a.Isotope.LayoutMode);
    })(window, function (a) {
        "use strict";
        var b = a.create("vertical", { horizontalAlignment: 0 }),
            c = b.prototype;
        return (
            (c._resetLayout = function () {
                this.y = 0;
            }),
            (c._getItemLayoutPosition = function (a) {
                a.getSize();
                var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                    c = this.y;
                return (this.y += a.size.outerHeight), { x: b, y: c };
            }),
            (c._getContainerSize = function () {
                return { height: this.y };
            }),
            b
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "./item",
                  "./layout-mode",
                  "./layout-modes/masonry",
                  "./layout-modes/fit-rows",
                  "./layout-modes/vertical",
              ], function (c, d, e, f, g, h) {
                  return b(a, c, d, e, f, g, h);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = b(
                  a,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("./item"),
                  require("./layout-mode"),
                  require("./layout-modes/masonry"),
                  require("./layout-modes/fit-rows"),
                  require("./layout-modes/vertical")
              ))
            : (a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode));
    })(window, function (a, b, c, d, e, f, g) {
        function h(a, b) {
            return function (c, d) {
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = c.sortData[f],
                        h = d.sortData[f],
                        i = 0;
                    if ((c.layout.options.customSorters[f] instanceof Function ? (i = c.layout.options.customSorters[f].call(this, g, h)) : g !== h && (i = g > h ? 1 : -1), 0 !== i)) {
                        return i * ((void 0 !== b[f] ? b[f] : b) ? 1 : -1);
                    }
                }
                return 0;
            };
        }
        function i(a) {
            var b = a.create("fitRows");
            return (
                (b.prototype._resetLayout = function () {
                    if (((this.x = 0), (this.y = 0), (this.maxY = 0), (this.row = 0), (this.rows = []), this._getMeasurement("gutter", "outerWidth"), this.isotope.options.equalheight))
                        for (var a = 0; a < this.isotope.items.length; a++) this.isotope.items[a].css({ height: "auto" });
                }),
                (b.prototype._getItemLayoutPosition = function (a) {
                    a.getSize();
                    var b = a.size.outerWidth,
                        c = Math.ceil(this.isotope.size.innerWidth + 1);
                    0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY)), 0 == this.x && 0 != this.y && this.row++;
                    var d = { x: this.x, y: this.y };
                    return (
                        (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)),
                        (this.x += b),
                        void 0 === this.rows[this.row] ? ((this.rows[this.row] = []), (this.rows[this.row].start = this.y), (this.rows[this.row].end = this.maxY)) : (this.rows[this.row].end = Math.max(this.rows[this.row].end, this.maxY)),
                        (a.row = this.row),
                        d
                    );
                }),
                (b.prototype._equalHeight = function () {
                    for (var a = 0; a < this.isotope.items.length; a++) {
                        var b = this.isotope.items[a].row,
                            c = this.rows[b];
                        if (c) {
                            var d = c.end - c.start;
                            (d -= this.isotope.items[a].size.borderTopWidth + this.isotope.items[a].size.borderBottomWidth),
                                (d -= this.isotope.items[a].size.marginTop + this.isotope.items[a].size.marginBottom),
                                (d -= this.gutter.height || 0),
                                0 == this.isotope.items[a].size.isBorderBox && (d -= this.isotope.items[a].size.paddingTop + this.isotope.items[a].size.paddingBottom),
                                (this.isotope.items[a].size.height = d),
                                this.isotope.items[a].css({ height: d.toString() + "px" });
                        }
                    }
                }),
                (b.prototype._getContainerSize = function () {
                    return this.isotope.options.equalheight && this._equalHeight(), { height: this.maxY };
                }),
                b
            );
        }
        var j = a.jQuery,
            k = String.prototype.trim
                ? function (a) {
                      return a.trim();
                  }
                : function (a) {
                      return a.replace(/^\s+|\s+$/g, "");
                  },
            l = b.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (l.Item = f), (l.LayoutMode = g);
        var m = l.prototype;
        (m._create = function () {
            (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), b.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
            for (var a in g.modes) this._initLayoutMode(a);
        }),
            (m.reloadItems = function () {
                (this.itemGUID = 0), b.prototype.reloadItems.call(this);
            }),
            (m._itemize = function () {
                for (var a = b.prototype._itemize.apply(this, arguments), c = 0; c < a.length; c++) {
                    a[c].id = this.itemGUID++;
                }
                return this._updateItemsSortData(a), a;
            }),
            (m._initLayoutMode = function (a) {
                var b = g.modes[a],
                    c = this.options[a] || {};
                (this.options[a] = b.options ? e.extend(b.options, c) : c), (this.modes[a] = new b(this));
            }),
            (m.layout = function () {
                if (!this._isLayoutInited && this._getOption("initLayout")) return void this.arrange();
                this._layout();
            }),
            (m._layout = function () {
                var a = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), (this._isLayoutInited = !0);
            }),
            (m.arrange = function (a) {
                this.option(a), this._getIsInstant();
                var b = this._filter(this.items);
                (this.filteredItems = b.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [b]) : this._hideReveal(b), this._sort(), this._layout();
            }),
            (m._init = m.arrange),
            (m._hideReveal = function (a) {
                this.reveal(a.needReveal), this.hide(a.needHide);
            }),
            (m._getIsInstant = function () {
                var a = this._getOption("layoutInstant"),
                    b = void 0 !== a ? a : !this._isLayoutInited;
                return (this._isInstant = b), b;
            }),
            (m._bindArrangeComplete = function () {
                function a() {
                    b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems]);
                }
                var b,
                    c,
                    d,
                    e = this;
                this.once("layoutComplete", function () {
                    (b = !0), a();
                }),
                    this.once("hideComplete", function () {
                        (c = !0), a();
                    }),
                    this.once("revealComplete", function () {
                        (d = !0), a();
                    });
            }),
            (m._filter = function (a) {
                var b = this.options.filter;
                b = b || "*";
                for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0; g < a.length; g++) {
                    var h = a[g];
                    if (!h.isIgnored) {
                        var i = f(h);
                        i && c.push(h), i && h.isHidden ? d.push(h) : i || h.isHidden || e.push(h);
                    }
                }
                return { matches: c, needReveal: d, needHide: e };
            }),
            (m._getFilterTest = function (a) {
                return j && this.options.isJQueryFiltering
                    ? function (b) {
                          return j(b.element).is(a);
                      }
                    : "function" == typeof a
                    ? function (b) {
                          return a(b.element);
                      }
                    : function (b) {
                          return d(b.element, a);
                      };
            }),
            (m.updateSortData = function (a) {
                var b;
                a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items), this._getSorters(), this._updateItemsSortData(b);
            }),
            (m._getSorters = function () {
                var a = this.options.getSortData;
                for (var b in a) {
                    var c = a[b];
                    this._sorters[b] = n(c);
                }
            }),
            (m._updateItemsSortData = function (a) {
                for (var b = a && a.length, c = 0; b && c < b; c++) {
                    a[c].updateSortData();
                }
            });
        var n = (function () {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = k(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = l.sortDataParsers[c[1]];
                return (a = h
                    ? function (a) {
                          return a && h(g(a));
                      }
                    : function (a) {
                          return a && g(a);
                      });
            }
            function b(a, b) {
                return a
                    ? function (b) {
                          return b.getAttribute(a);
                      }
                    : function (a) {
                          var c = a.querySelector(b);
                          return c && c.textContent;
                      };
            }
            return a;
        })();
        (l.sortDataParsers = {
            parseInt: function (a) {
                return parseInt(a, 10);
            },
            parseFloat: function (a) {
                return parseFloat(a);
            },
        }),
            (m._sort = function () {
                var a = this.options.sortBy;
                if (a) {
                    var b = [].concat.apply(a, this.sortHistory),
                        c = h(b, this.options.sortAscending);
                    this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a);
                }
            }),
            (m._mode = function () {
                var a = this.options.layoutMode,
                    b = this.modes[a];
                if (!b) throw new Error("No layout mode: " + a);
                return (b.options = this.options[a]), b;
            }),
            (m._resetLayout = function () {
                b.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (m._getItemLayoutPosition = function (a) {
                return this._mode()._getItemLayoutPosition(a);
            }),
            (m._manageStamp = function (a) {
                this._mode()._manageStamp(a);
            }),
            (m._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (m.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (m.appended = function (a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c = this._filterRevealAdded(b);
                    this.filteredItems = this.filteredItems.concat(c);
                }
            }),
            (m.prepended = function (a) {
                var b = this._itemize(a);
                if (b.length) {
                    this._resetLayout(), this._manageStamps();
                    var c = this._filterRevealAdded(b);
                    this.layoutItems(this.filteredItems), (this.filteredItems = c.concat(this.filteredItems)), (this.items = b.concat(this.items));
                }
            }),
            (m._filterRevealAdded = function (a) {
                var b = this._filter(a);
                return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches;
            }),
            (m.insert = function (a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c,
                        d,
                        e = b.length;
                    for (c = 0; c < e; c++) (d = b[c]), this.element.appendChild(d.element);
                    var f = this._filter(b).matches;
                    for (c = 0; c < e; c++) b[c].isLayoutInstant = !0;
                    for (this.arrange(), c = 0; c < e; c++) delete b[c].isLayoutInstant;
                    this.reveal(f);
                }
            });
        var o = m.remove;
        return (
            (m.remove = function (a) {
                a = e.makeArray(a);
                var b = this.getItems(a);
                o.call(this, a);
                for (var c = b && b.length, d = 0; c && d < c; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f);
                }
            }),
            (m.shuffle = function () {
                for (var a = 0; a < this.items.length; a++) {
                    this.items[a].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (m._noTransition = function (a, b) {
                var c = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var d = a.apply(this, b);
                return (this.options.transitionDuration = c), d;
            }),
            (m.getFilteredItemElements = function () {
                return this.filteredItems.map(function (a) {
                    return a.element;
                });
            }),
            "function" == typeof define && define.amd ? define(["../layout-mode"], i) : "object" == typeof exports ? (module.exports = i(require("../layout-mode"))) : i(a.Isotope.LayoutMode),
            l
        );
    }),
    (function (a, b, c, d) {
        var e = (a(c), a(b));
        a.fn.Filterade = function (b) {
            var c, d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
            (i = {
                useFilters: !1,
                useSorting: !1,
                filterControls: ".filter-controls",
                sortControls: ".sort-controls",
                orderControls: ".order-controls",
                controlsSelecter: "input",
                controlsSelecterChecked: 'input[checked="checked"]',
                defaultFilter: "all",
                defaultSort: "date",
                defaultOrder: "desc",
                selectAll: "all",
                paginationMode: "pages",
                pageLimit: 15,
                pageControls: ".page-controls",
                previousButtonClass: "nav-prev",
                previousButtonLabel: '<i class="dt-icon-the7-arrow-0-42" aria-hidden="true"></i>',
                nextButtonClass: "nav-next",
                nextButtonLabel: '<i class="dt-icon-the7-arrow-0-41" aria-hidden="true"></i>',
                loadMoreButtonClass: "button-load-more",
                loadMoreButtonLabel: "Load more",
                pagerClass: "page",
                activeClass: "act",
                log: !1,
            }),
                (h = a(this)),
                (y = b.customSorters || {}),
                (r = b.paginationMode || i.paginationMode),
                (s = a(b.pageControls || i.pageControls)),
                (j = a(b.filterControls || i.filterControls)),
                (k = a(b.sortControls || i.sortControls)),
                (l = a(b.orderControls || i.orderControls)),
                (m = b.controlsSelecter || i.controlsSelecter),
                (n = b.controlsSelecterChecked || i.controlsSelecterChecked),
                (d = 1),
                (x = h.parent().hasClass("show-all-pages") ? 999 : 5);
            var A = a(".phantom-sticky").exists(),
                B = a(".sticky-top-line").exists(),
                C = a(".phantom-fade").exists(),
                D = a(".phantom-slide").exists();
            a(".split-header").exists();
            if (A || B) var E = a(".masthead").height();
            else if (C || D) var E = a("#phantom").height();
            else var E = 0;
            return (
                (q = a([])),
                (q.$nodesCache = a([])),
                h.find("> article, .wf-cell").each(function () {
                    var b = a(this);
                    q.push({ node: this, $node: b, name: b.attr("data-name"), date: new Date(b.attr("data-date")) }), q.$nodesCache.push(this);
                }),
                (t = Math.ceil(q.length / b.pageLimit)),
                (p = function () {
                    var a;
                    ("pages" !== r && "load-more" !== r) ||
                        ((a = 0),
                        q.each(function () {
                            if (this.$node.hasClass("visible")) return a++;
                        }),
                        (t = Math.ceil(a / (b.pageLimit || i.pageLimit))));
                }),
                (u = function () {
                    if ("pages" === r) {
                        var c, e;
                        if ((s.empty(), s.addClass("hidden"), t > 1)) {
                            s.removeClass("hidden"), 1 !== d && s.prepend('<a href="#" class="' + (b.previousButtonClass || i.previousButtonClass) + '">' + (b.previousButtonLabel || i.previousButtonLabel) + "</a>");
                            var f = x - 1,
                                g = Math.floor(f / 2),
                                j = Math.ceil(f / 2),
                                k = Math.max(d - g, 1),
                                l = d + j;
                            k <= g && (l = k + f), l > t && ((k = Math.max(t - f, 1)), (l = t));
                            var m = '<a href="javascript:void(0);" class="dots">…</a>',
                                n = a('<div style="display: none;"></div>'),
                                o = a('<div style="display: none;"></div>');
                            for (c = e = 1; 1 <= t ? e <= t : e >= t; c = 1 <= t ? ++e : --e)
                                c < k && 1 != c
                                    ? n.append('<a href="#" class="' + (b.pagerClass || i.pagerClass) + '" data-page="' + +c + '">' + c + "</a>")
                                    : (c == k && n.children().length && s.append(n).append(a(m)),
                                      c > l && c != t
                                          ? o.append('<a href="#" class="' + (b.pagerClass || i.pagerClass) + '" data-page="' + +c + '">' + c + "</a>")
                                          : (c == t && o.children().length && s.append(o).append(a(m)), s.append('<a href="#" class="' + (b.pagerClass || i.pagerClass) + '" data-page="' + +c + '">' + c + "</a>")));
                            d < t && s.append('<a href="#" class="' + (b.nextButtonClass || i.nextButtonClass) + '">' + (b.nextButtonLabel || i.nextButtonLabel) + "</a>"),
                                s.find('a[data-page="' + d + '"]').addClass(b.activeClass || i.activeClass);
                            var p = b.pagerClass || i.pagerClass;
                            return (
                                (p = p.trim().replace(" ", ".")),
                                s.find("a.dots").click(function (b) {
                                    s.find("div:hidden a").unwrap(), a(this).remove();
                                }),
                                s.find("a." + p).click(function (c) {
                                    c.preventDefault(), (d = parseInt(a(this).attr("data-page")));
                                    var e = h.parent().attr("data-scroll-offset") ? parseInt(h.parent().attr("data-scroll-offset")) : 0;
                                    if ((s.find("a." + (b.activeClass || i.activeClass)).removeClass(b.activeClass || i.activeClass), s.find('a[data-page="' + d + '"]').addClass(b.activeClass || i.activeClass), h.hasClass("dt-css-grid")))
                                        var f = h.parent().offset().top - 40;
                                    else var f = h.offset().top - 40;
                                    return (!h.parent().hasClass("enable-pagination-scroll") && h.parent().hasClass("the7-elementor-widget")) || a("html, body").animate({ scrollTop: f - E + e }, 400), w();
                                }),
                                s.find("a." + (b.previousButtonClass || i.previousButtonClass)).click(function (b) {
                                    b.preventDefault(), d--;
                                    var c = h.parent().attr("data-scroll-offset") ? parseInt(h.parent().attr("data-scroll-offset")) : 0;
                                    if (h.hasClass("dt-css-grid")) var e = h.parent().offset().top - 40;
                                    else var e = h.offset().top - 40;
                                    return (!h.parent().hasClass("enable-pagination-scroll") && h.parent().hasClass("the7-elementor-widget")) || a("html, body").animate({ scrollTop: e - E + c }, 400), w();
                                }),
                                s.find("a." + (b.nextButtonClass || i.nextButtonClass)).click(function (b) {
                                    b.preventDefault(), d++;
                                    var c = h.parent().attr("data-scroll-offset") ? parseInt(h.parent().attr("data-scroll-offset")) : 0;
                                    if (h.hasClass("dt-css-grid")) var e = h.parent().offset().top - 40;
                                    else var e = h.offset().top - 40;
                                    return (!h.parent().hasClass("enable-pagination-scroll") && h.parent().hasClass("the7-elementor-widget")) || a("html, body").animate({ scrollTop: e - E + c }, 400), w();
                                })
                            );
                        }
                    } else if ("load-more" === r && (s.addClass("hidden"), t > 1)) {
                        d < t && s.removeClass("hidden");
                        var q = b.loadMoreButtonClass || i.loadMoreButtonClass;
                        return (
                            (q = q.trim().replace(" ", ".")),
                            s.find("a:not(.filtrade-ready)." + q).click(function (b) {
                                return b.preventDefault(), a(this).addClass("filtrade-ready"), !(d >= t) && (d++, w());
                            })
                        );
                    }
                }),
                (v = function () {
                    const c = h.attr("data-columns") ? JSON.parse(h.attr("data-columns")) : {};
                    if ("pages" === r || "load-more" === r) {
                        var e = 0,
                            f = a([]),
                            g = a([]);
                        q.each(function (a) {
                            this.$node.hasClass("visible") &&
                                (e++,
                                "pages" === r && e > d * (b.pageLimit || i.pageLimit) - (b.pageLimit || i.pageLimit) && e <= (b.pageLimit || i.pageLimit) * d
                                    ? g.push(this.node)
                                    : "load-more" === r && e <= (b.pageLimit || i.pageLimit) * d
                                    ? g.push(this.node)
                                    : f.push(this.node));
                        }),
                            f.removeClass("visible").addClass("hidden"),
                            g.removeClass("hidden").addClass("visible"),
                            g.removeClass("first"),
                            g.first().addClass("first"),
                            c.d && g.slice(0, c.d).addClass("d-hide-divider"),
                            c.t && g.slice(0, c.t).addClass("t-hide-divider"),
                            c.p && g.slice(0, c.p).addClass("m-hide-divider"),
                            c.wd && g.slice(0, c.wd).addClass("wd-hide-divider"),
                            h.trigger("updateReady");
                    }
                }),
                (o = function () {
                    var d = a([]),
                        e = a([]);
                    b.useFilters || i.useFilters
                        ? c === (b.selectAll || i.selectAll)
                            ? (e = q.$nodesCache)
                            : q.each(function (a) {
                                  this.$node.hasClass(c.replace(/^\./, "")) ? e.push(this.node) : d.push(this.node);
                              })
                        : (e = q.$nodesCache),
                        d.removeClass("visible").addClass("hidden"),
                        e.removeClass("hidden").addClass("visible");
                }),
                (z = function () {
                    var b = "asc" === g ? 1 : -1;
                    y[f] instanceof Function
                        ? q.sort(function (a, c) {
                              return b * y[f].call(this, a, c);
                          })
                        : "date" === f
                        ? q.sort(function (a, c) {
                              return b * (a.date - c.date);
                          })
                        : "name" === f &&
                          q.sort(function (a, c) {
                              var d = a.name.toLowerCase(),
                                  e = c.name.toLowerCase(),
                                  f = 0;
                              return d !== e && (f = d > e ? 1 : -1), b * f;
                          }),
                        (q.$nodesCache = a([])),
                        q.each(function () {
                            q.$nodesCache.push(this.node);
                        }),
                        h.find(".paginator").length > 0 ? q.$nodesCache.detach().insertBefore(h.find(".paginator")) : q.$nodesCache.detach().appendTo(h);
                }),
                (w = function () {
                    if ((o(), p(), v(), u(), h.hasClass("lazy-loading-mode"))) {
                        var b = h.find(".button-load-more").offset();
                        b && dtGlobals.winScrollTop > (b.top - e.height()) / 2 && h.find(".button-load-more").trigger("click");
                    }
                    a(".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible:not(.shown)").layzrBlogInitialisation(),
                        a(".layzr-loading-on .jquery-filter.dt-css-grid-wrap .wf-cell.visible").layzrBlogInitialisation(),
                        h.trigger("updateReady");
                }),
                (function () {
                    return (
                        (b.useFilters || i.useFilters) &&
                            ((c = j.find(n).attr("data-filter") || b.defaultFilter || i.defaultFilter),
                            j.find(m).click(function (b) {
                                (c = a(this).attr("data-filter")), (d = 1), w();
                            })),
                        (b.useSorting || i.useSorting) &&
                            ((f = k.find(n).attr("data-by") || b.defaultSort || i.defaultSort),
                            (g = l.find(n).attr("data-sort") || b.defaultOrder || i.defaultOrder),
                            k.find(m).click(function (a) {
                                (f = "date" === this.getAttribute("data-by") ? "date" : "name"), z(), (d = 1), w();
                            }),
                            l.find(m).click(function (a) {
                                (g = "desc" === this.getAttribute("data-sort") ? "desc" : "asc"), z(), (d = 1), w();
                            })),
                        w()
                    );
                })()
            );
        };
    })(jQuery, window, document),
    (function (a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? (module.exports = b()) : (a.ResizeSensor = b());
    })("undefined" != typeof window ? window : this, function () {
        function a(a, b) {
            var c = Object.prototype.toString.call(a),
                d =
                    "[object Array]" === c ||
                    "[object NodeList]" === c ||
                    "[object HTMLCollection]" === c ||
                    "[object Object]" === c ||
                    ("undefined" != typeof jQuery && a instanceof jQuery) ||
                    ("undefined" != typeof Elements && a instanceof Elements),
                e = 0,
                f = a.length;
            if (d) for (; e < f; e++) b(a[e]);
            else b(a);
        }
        function b(a) {
            if (!a.getBoundingClientRect) return { width: a.offsetWidth, height: a.offsetHeight };
            var b = a.getBoundingClientRect();
            return { width: Math.round(b.width), height: Math.round(b.height) };
        }
        if ("undefined" == typeof window) return null;
        var c =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (a) {
                    return window.setTimeout(a, 20);
                },
            d = function (e, f) {
                function g() {
                    var a = [];
                    this.add = function (b) {
                        a.push(b);
                    };
                    var b, c;
                    (this.call = function (d) {
                        for (b = 0, c = a.length; b < c; b++) a[b].call(this, d);
                    }),
                        (this.remove = function (d) {
                            var e = [];
                            for (b = 0, c = a.length; b < c; b++) a[b] !== d && e.push(a[b]);
                            a = e;
                        }),
                        (this.length = function () {
                            return a.length;
                        });
                }
                function h(a, d) {
                    if (a) {
                        if (a.resizedAttached) return void a.resizedAttached.add(d);
                        (a.resizedAttached = new g()), a.resizedAttached.add(d), (a.resizeSensor = document.createElement("div")), (a.resizeSensor.dir = "ltr"), (a.resizeSensor.className = "resize-sensor");
                        var e = "pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;",
                            f = "position: absolute; left: 0; top: 0; transition: 0s;";
                        (a.resizeSensor.style.cssText = e),
                            (a.resizeSensor.innerHTML =
                                '<div class="resize-sensor-expand" style="' + e + '"><div style="' + f + '"></div></div><div class="resize-sensor-shrink" style="' + e + '"><div style="' + f + ' width: 200%; height: 200%"></div></div>'),
                            a.appendChild(a.resizeSensor);
                        var h = window.getComputedStyle(a),
                            i = h ? h.getPropertyValue("position") : null;
                        "absolute" !== i && "relative" !== i && "fixed" !== i && (a.style.position = "relative");
                        var j,
                            k,
                            l = a.resizeSensor.childNodes[0],
                            m = l.childNodes[0],
                            n = a.resizeSensor.childNodes[1],
                            o = b(a),
                            p = o.width,
                            q = o.height,
                            r = !0,
                            s = 0,
                            t = function () {
                                var b = a.offsetWidth,
                                    c = a.offsetHeight;
                                (m.style.width = b + 10 + "px"), (m.style.height = c + 10 + "px"), (l.scrollLeft = b + 10), (l.scrollTop = c + 10), (n.scrollLeft = b + 10), (n.scrollTop = c + 10);
                            },
                            u = function () {
                                if (r) {
                                    if (0 === a.offsetWidth && 0 === a.offsetHeight)
                                        return void (
                                            s ||
                                            (s = c(function () {
                                                (s = 0), u();
                                            }))
                                        );
                                    r = !1;
                                }
                                t();
                            };
                        a.resizeSensor.resetSensor = u;
                        var v = function () {
                                (k = 0), j && ((p = o.width), (q = o.height), a.resizedAttached && a.resizedAttached.call(o));
                            },
                            w = function () {
                                (o = b(a)), (j = o.width !== p || o.height !== q), j && !k && (k = c(v)), u();
                            },
                            x = function (a, b, c) {
                                a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c);
                            };
                        x(l, "scroll", w), x(n, "scroll", w), c(u);
                    }
                }
                a(e, function (a) {
                    h(a, f);
                }),
                    (this.detach = function (a) {
                        d.detach(e, a);
                    }),
                    (this.reset = function () {
                        e.resizeSensor.resetSensor();
                    });
            };
        if (
            ((d.reset = function (b) {
                a(b, function (a) {
                    a.resizeSensor.resetSensor();
                });
            }),
            (d.detach = function (b, c) {
                a(b, function (a) {
                    a &&
                        ((a.resizedAttached && "function" == typeof c && (a.resizedAttached.remove(c), a.resizedAttached.length())) ||
                            (a.resizeSensor && (a.contains(a.resizeSensor) && a.removeChild(a.resizeSensor), delete a.resizeSensor, delete a.resizedAttached)));
                });
            }),
            "undefined" != typeof MutationObserver)
        ) {
            var e = new MutationObserver(function (a) {
                for (var b in a) if (a.hasOwnProperty(b)) for (var c = a[b].addedNodes, e = 0; e < c.length; e++) c[e].resizeSensor && d.reset(c[e]);
            });
            document.addEventListener("DOMContentLoaded", function (a) {
                e.observe(document.body, { childList: !0, subtree: !0 });
            });
        }
        return d;
    }),
    (function (a, b) {
        "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b((a.StickySidebar = {}));
    })(this, function (a) {
        "use strict";
        "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var b,
            c,
            d =
                ((function (a, b) {
                    !(function (a) {
                        Object.defineProperty(a, "__esModule", { value: !0 });
                        var b,
                            c,
                            d = (function () {
                                function a(a, b) {
                                    for (var c = 0; c < b.length; c++) {
                                        var d = b[c];
                                        (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                                    }
                                }
                                return function (b, c, d) {
                                    return c && a(b.prototype, c), d && a(b, d), b;
                                };
                            })(),
                            e =
                                ((b = ".stickySidebar"),
                                (c = { topSpacing: 0, bottomSpacing: 0, containerSelector: !1, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: !0, minWidth: !1 }),
                                (function () {
                                    function a(b) {
                                        var d = this,
                                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (
                                            ((function (a, b) {
                                                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                                            })(this, a),
                                            (this.options = a.extend(c, e)),
                                            (this.sidebar = "string" == typeof b ? document.querySelector(b) : b),
                                            void 0 === this.sidebar)
                                        )
                                            throw new Error("There is no specific sidebar element.");
                                        (this.sidebarInner = !1),
                                            (this.container = this.sidebar.parentElement),
                                            (this.affixedType = "STATIC"),
                                            (this.direction = "down"),
                                            (this.support = { transform: !1, transform3d: !1 }),
                                            (this._initialized = !1),
                                            (this._reStyle = !1),
                                            (this._breakpoint = !1),
                                            (this.dimensions = {
                                                translateY: 0,
                                                maxTranslateY: 0,
                                                topSpacing: 0,
                                                lastTopSpacing: 0,
                                                bottomSpacing: 0,
                                                lastBottomSpacing: 0,
                                                sidebarHeight: 0,
                                                sidebarWidth: 0,
                                                containerTop: 0,
                                                containerHeight: 0,
                                                viewportHeight: 0,
                                                viewportTop: 0,
                                                lastViewportTop: 0,
                                            }),
                                            ["handleEvent"].forEach(function (a) {
                                                d[a] = d[a].bind(d);
                                            }),
                                            this.initialize();
                                    }
                                    return (
                                        d(
                                            a,
                                            [
                                                {
                                                    key: "initialize",
                                                    value: function () {
                                                        var a = this;
                                                        if (
                                                            (this._setSupportFeatures(),
                                                            this.options.innerWrapperSelector && ((this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector)), null === this.sidebarInner && (this.sidebarInner = !1)),
                                                            !this.sidebarInner)
                                                        ) {
                                                            var b = document.createElement("div");
                                                            for (b.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(b); this.sidebar.firstChild != b; ) b.appendChild(this.sidebar.firstChild);
                                                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky");
                                                        }
                                                        if (this.options.containerSelector) {
                                                            var c = document.querySelectorAll(this.options.containerSelector);
                                                            if (
                                                                ((c = Array.prototype.slice.call(c)).forEach(function (b, c) {
                                                                    b.contains(a.sidebar) && (a.container = b);
                                                                }),
                                                                !c.length)
                                                            )
                                                                throw new Error("The container does not contains on the sidebar.");
                                                        }
                                                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0),
                                                            "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0),
                                                            this._widthBreakpoint(),
                                                            this.calcDimensions(),
                                                            this.stickyPosition(),
                                                            this.bindEvents(),
                                                            (this._initialized = !0);
                                                    },
                                                },
                                                {
                                                    key: "bindEvents",
                                                    value: function () {
                                                        window.addEventListener("resize", this, { passive: !0, capture: !1 }),
                                                            window.addEventListener("scroll", this, { passive: !0, capture: !1 }),
                                                            this.sidebar.addEventListener("update" + b, this),
                                                            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent));
                                                    },
                                                },
                                                {
                                                    key: "handleEvent",
                                                    value: function (a) {
                                                        this.updateSticky(a);
                                                    },
                                                },
                                                {
                                                    key: "calcDimensions",
                                                    value: function () {
                                                        if (!this._breakpoint) {
                                                            var b = this.dimensions;
                                                            (b.containerTop = a.offsetRelative(this.container).top),
                                                                (b.containerHeight = this.container.clientHeight),
                                                                (b.containerBottom = b.containerTop + b.containerHeight),
                                                                (b.sidebarHeight = this.sidebarInner.offsetHeight),
                                                                (b.sidebarWidth = this.sidebarInner.offsetWidth),
                                                                (b.viewportHeight = window.innerHeight),
                                                                (b.maxTranslateY = b.containerHeight - b.sidebarHeight),
                                                                this._calcDimensionsWithScroll();
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "_calcDimensionsWithScroll",
                                                    value: function () {
                                                        var b = this.dimensions;
                                                        (b.sidebarLeft = a.offsetRelative(this.sidebar).left),
                                                            (b.viewportTop = document.documentElement.scrollTop || document.body.scrollTop),
                                                            (b.viewportBottom = b.viewportTop + b.viewportHeight),
                                                            (b.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft),
                                                            (b.topSpacing = this.options.topSpacing),
                                                            (b.bottomSpacing = this.options.bottomSpacing),
                                                            "function" == typeof b.topSpacing && (b.topSpacing = parseInt(b.topSpacing(this.sidebar)) || 0),
                                                            "function" == typeof b.bottomSpacing && (b.bottomSpacing = parseInt(b.bottomSpacing(this.sidebar)) || 0),
                                                            "VIEWPORT-TOP" === this.affixedType
                                                                ? b.topSpacing < b.lastTopSpacing && ((b.translateY += b.lastTopSpacing - b.topSpacing), (this._reStyle = !0))
                                                                : "VIEWPORT-BOTTOM" === this.affixedType && b.bottomSpacing < b.lastBottomSpacing && ((b.translateY += b.lastBottomSpacing - b.bottomSpacing), (this._reStyle = !0)),
                                                            (b.lastTopSpacing = b.topSpacing),
                                                            (b.lastBottomSpacing = b.bottomSpacing);
                                                    },
                                                },
                                                {
                                                    key: "isSidebarFitsViewport",
                                                    value: function () {
                                                        var a = this.dimensions,
                                                            b = "down" === this.scrollDirection ? a.lastBottomSpacing : a.lastTopSpacing;
                                                        return this.dimensions.sidebarHeight + b < this.dimensions.viewportHeight;
                                                    },
                                                },
                                                {
                                                    key: "observeScrollDir",
                                                    value: function () {
                                                        var a = this.dimensions;
                                                        if (a.lastViewportTop !== a.viewportTop) {
                                                            var b = "down" === this.direction ? Math.min : Math.max;
                                                            a.viewportTop === b(a.viewportTop, a.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down");
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "getAffixType",
                                                    value: function () {
                                                        this._calcDimensionsWithScroll();
                                                        var a = this.dimensions,
                                                            b = a.viewportTop + a.topSpacing,
                                                            c = this.affixedType;
                                                        return (
                                                            b <= a.containerTop || a.containerHeight <= a.sidebarHeight
                                                                ? ((a.translateY = 0), (c = "STATIC"))
                                                                : (c = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown()),
                                                            (a.translateY = Math.max(0, a.translateY)),
                                                            (a.translateY = Math.min(a.containerHeight, a.translateY)),
                                                            (a.translateY = Math.round(a.translateY)),
                                                            (a.lastViewportTop = a.viewportTop),
                                                            c
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getAffixTypeScrollingDown",
                                                    value: function () {
                                                        var a = this.dimensions,
                                                            b = a.sidebarHeight + a.containerTop,
                                                            c = a.viewportTop + a.topSpacing,
                                                            d = a.viewportBottom - a.bottomSpacing,
                                                            e = this.affixedType;
                                                        return (
                                                            this.isSidebarFitsViewport()
                                                                ? a.sidebarHeight + c >= a.containerBottom
                                                                    ? ((a.translateY = a.containerBottom - b), (e = "CONTAINER-BOTTOM"))
                                                                    : c >= a.containerTop && ((a.translateY = c - a.containerTop), (e = "VIEWPORT-TOP"))
                                                                : a.containerBottom <= d
                                                                ? ((a.translateY = a.containerBottom - b), (e = "CONTAINER-BOTTOM"))
                                                                : b + a.translateY <= d
                                                                ? ((a.translateY = d - b), (e = "VIEWPORT-BOTTOM"))
                                                                : a.containerTop + a.translateY <= c && 0 !== a.translateY && a.maxTranslateY !== a.translateY && (e = "VIEWPORT-UNBOTTOM"),
                                                            e
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getAffixTypeScrollingUp",
                                                    value: function () {
                                                        var a = this.dimensions,
                                                            b = a.sidebarHeight + a.containerTop,
                                                            c = a.viewportTop + a.topSpacing,
                                                            d = a.viewportBottom - a.bottomSpacing,
                                                            e = this.affixedType;
                                                        return (
                                                            c <= a.translateY + a.containerTop
                                                                ? ((a.translateY = c - a.containerTop), (e = "VIEWPORT-TOP"))
                                                                : a.containerBottom <= d
                                                                ? ((a.translateY = a.containerBottom - b), (e = "CONTAINER-BOTTOM"))
                                                                : this.isSidebarFitsViewport() || (a.containerTop <= c && 0 !== a.translateY && a.maxTranslateY !== a.translateY && (e = "VIEWPORT-UNBOTTOM")),
                                                            e
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "_getStyle",
                                                    value: function (b) {
                                                        if (void 0 !== b) {
                                                            var c = { inner: {}, outer: {} },
                                                                d = this.dimensions;
                                                            switch (b) {
                                                                case "VIEWPORT-TOP":
                                                                    c.inner = { position: "fixed", top: d.topSpacing, left: d.sidebarLeft - d.viewportLeft, width: d.sidebarWidth };
                                                                    break;
                                                                case "VIEWPORT-BOTTOM":
                                                                    c.inner = { position: "fixed", top: "auto", left: d.sidebarLeft, bottom: d.bottomSpacing, width: d.sidebarWidth };
                                                                    break;
                                                                case "CONTAINER-BOTTOM":
                                                                case "VIEWPORT-UNBOTTOM":
                                                                    var e = this._getTranslate(0, d.translateY + "px");
                                                                    c.inner = e ? { transform: e } : { position: "absolute", top: d.translateY, width: d.sidebarWidth };
                                                            }
                                                            switch (b) {
                                                                case "VIEWPORT-TOP":
                                                                case "VIEWPORT-BOTTOM":
                                                                case "VIEWPORT-UNBOTTOM":
                                                                case "CONTAINER-BOTTOM":
                                                                    c.outer = { height: d.sidebarHeight, position: "relative" };
                                                            }
                                                            return (
                                                                (c.outer = a.extend({ height: "", position: "" }, c.outer)), (c.inner = a.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: "" }, c.inner)), c
                                                            );
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "stickyPosition",
                                                    value: function (c) {
                                                        if (!this._breakpoint) {
                                                            (c = this._reStyle || c || !1), this.options.topSpacing, this.options.bottomSpacing;
                                                            var d = this.getAffixType(),
                                                                e = this._getStyle(d);
                                                            if ((this.affixedType != d || c) && d) {
                                                                var f = "affix." + d.toLowerCase().replace("viewport-", "") + b;
                                                                for (var g in (a.eventTrigger(this.sidebar, f),
                                                                "STATIC" === d ? a.removeClass(this.sidebar, this.options.stickyClass) : a.addClass(this.sidebar, this.options.stickyClass),
                                                                e.outer)) {
                                                                    var h = "number" == typeof e.outer[g] ? "px" : "";
                                                                    this.sidebar.style[g] = e.outer[g] + h;
                                                                }
                                                                for (var i in e.inner) {
                                                                    var j = "number" == typeof e.inner[i] ? "px" : "";
                                                                    this.sidebarInner.style[i] = e.inner[i] + j;
                                                                }
                                                                var k = "affixed." + d.toLowerCase().replace("viewport-", "") + b;
                                                                a.eventTrigger(this.sidebar, k);
                                                            } else this._initialized && (this.sidebarInner.style.left = e.inner.left);
                                                            this.affixedType = d;
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "_widthBreakpoint",
                                                    value: function () {
                                                        window.innerWidth <= this.options.minWidth
                                                            ? ((this._breakpoint = !0),
                                                              (this.affixedType = "STATIC"),
                                                              this.sidebar.removeAttribute("style"),
                                                              a.removeClass(this.sidebar, this.options.stickyClass),
                                                              this.sidebarInner.removeAttribute("style"))
                                                            : (this._breakpoint = !1);
                                                    },
                                                },
                                                {
                                                    key: "updateSticky",
                                                    value: function () {
                                                        var a,
                                                            b = this,
                                                            c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                                        this._running ||
                                                            ((this._running = !0),
                                                            (a = c.type),
                                                            requestAnimationFrame(function () {
                                                                switch (a) {
                                                                    case "scroll":
                                                                        b._calcDimensionsWithScroll(), b.observeScrollDir(), b.stickyPosition();
                                                                        break;
                                                                    case "resize":
                                                                    default:
                                                                        b._widthBreakpoint(), b.calcDimensions(), b.stickyPosition(!0);
                                                                }
                                                                b._running = !1;
                                                            }));
                                                    },
                                                },
                                                {
                                                    key: "_setSupportFeatures",
                                                    value: function () {
                                                        var b = this.support;
                                                        (b.transform = a.supportTransform()), (b.transform3d = a.supportTransform(!0));
                                                    },
                                                },
                                                {
                                                    key: "_getTranslate",
                                                    value: function () {
                                                        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                                            b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                                                            c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                                        return this.support.transform3d ? "translate3d(" + a + ", " + b + ", " + c + ")" : !!this.support.translate && "translate(" + a + ", " + b + ")";
                                                    },
                                                },
                                                {
                                                    key: "destroy",
                                                    value: function () {
                                                        window.removeEventListener("resize", this, { capture: !1 }),
                                                            window.removeEventListener("scroll", this, { capture: !1 }),
                                                            this.sidebar.classList.remove(this.options.stickyClass),
                                                            (this.sidebar.style.minHeight = ""),
                                                            this.sidebar.removeEventListener("update" + b, this);
                                                        var a = { inner: {}, outer: {} };
                                                        for (var c in ((a.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }), (a.outer = { height: "", position: "" }), a.outer))
                                                            this.sidebar.style[c] = a.outer[c];
                                                        for (var d in a.inner) this.sidebarInner.style[d] = a.inner[d];
                                                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent));
                                                    },
                                                },
                                            ],
                                            [
                                                {
                                                    key: "supportTransform",
                                                    value: function (a) {
                                                        var b = !1,
                                                            c = a ? "perspective" : "transform",
                                                            d = c.charAt(0).toUpperCase() + c.slice(1),
                                                            e = document.createElement("support").style;
                                                        return (
                                                            (c + " " + ["Webkit", "Moz", "O", "ms"].join(d + " ") + d).split(" ").forEach(function (a, c) {
                                                                if (void 0 !== e[a]) return (b = a), !1;
                                                            }),
                                                            b
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "eventTrigger",
                                                    value: function (a, b, c) {
                                                        try {
                                                            var d = new CustomEvent(b, { detail: c });
                                                        } catch (a) {
                                                            (d = document.createEvent("CustomEvent")).initCustomEvent(b, !0, !0, c);
                                                        }
                                                        a.dispatchEvent(d);
                                                    },
                                                },
                                                {
                                                    key: "extend",
                                                    value: function (a, b) {
                                                        var c = {};
                                                        for (var d in a) void 0 !== b[d] ? (c[d] = b[d]) : (c[d] = a[d]);
                                                        return c;
                                                    },
                                                },
                                                {
                                                    key: "offsetRelative",
                                                    value: function (a) {
                                                        var b = { left: 0, top: 0 };
                                                        do {
                                                            var c = a.offsetTop,
                                                                d = a.offsetLeft;
                                                            isNaN(c) || (b.top += c), isNaN(d) || (b.left += d), (a = "BODY" === a.tagName ? a.parentElement : a.offsetParent);
                                                        } while (a);
                                                        return b;
                                                    },
                                                },
                                                {
                                                    key: "addClass",
                                                    value: function (b, c) {
                                                        a.hasClass(b, c) || (b.classList ? b.classList.add(c) : (b.className += " " + c));
                                                    },
                                                },
                                                {
                                                    key: "removeClass",
                                                    value: function (b, c) {
                                                        a.hasClass(b, c) && (b.classList ? b.classList.remove(c) : (b.className = b.className.replace(new RegExp("(^|\\b)" + c.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
                                                    },
                                                },
                                                {
                                                    key: "hasClass",
                                                    value: function (a, b) {
                                                        return a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className);
                                                    },
                                                },
                                                {
                                                    key: "defaults",
                                                    get: function () {
                                                        return c;
                                                    },
                                                },
                                            ]
                                        ),
                                        a
                                    );
                                })());
                        (a.default = e), (window.StickySidebar = e);
                    })(b);
                })((b = { exports: {} }), b.exports),
                b.exports),
            e = (c = d) && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
        (a.default = e), (a.__moduleExports = d), Object.defineProperty(a, "__esModule", { value: !0 });
    });
var the7Utils = {};
(the7Utils.parseIntParam = function (a, b) {
    return (b = void 0 !== b ? b : 0), a ? parseInt(a) : b;
}),
    (the7Utils.parseFloatParam = function (a, b) {
        return (b = void 0 !== b ? b : 0), a ? parseFloat(a) : b;
    }),
    (the7Utils.parseParam = function (a, b) {
        return (b = void 0 !== b ? b : ""), void 0 !== a ? a : b;
    }),
    (the7Utils.isFunction = function (a) {
        return "function" == typeof a;
    }),
    (function (a) {
        (a.fn.exists = function () {
            return a(this).length > 0;
        }),
            (a.fn.loaded = function (b, c, d) {
                var e = this.length;
                return e > 0
                    ? this.each(function () {
                          var d = this,
                              f = a(d);
                          f.on("load.dt", function (d) {
                              a(this).off("load.dt"), "function" == typeof b && b.call(this), --e <= 0 && "function" == typeof c && c.call(this);
                          }),
                              d.complete && void 0 !== d.complete && f.trigger("load.dt");
                      })
                    : d
                    ? ("function" == typeof c && c.call(this), this)
                    : void 0;
            }),
            (dtGlobals.isInViewport = function (b) {
                var c = a(window),
                    d = b,
                    e = c.scrollTop(),
                    f = c.scrollTop() + c.height(),
                    g = d.offset().top + 20;
                return f >= g && e <= g;
            }),
            (a.fn.layzrInitialisation = function (b) {
                return this.each(function () {
                    a(this),
                        new Layzr({
                            container: b,
                            selector: ".lazy-load",
                            attr: "data-src",
                            attrSrcSet: "data-srcset",
                            retinaAttr: "data-src-retina",
                            hiddenAttr: "data-src-hidden",
                            threshold: 0,
                            before: function () {
                                (this.style.willChange = "opacity"),
                                    a(this).parents(".blog-shortcode.mode-list").length > 0 || a(this).parents(".blog-media").length > 0
                                        ? this.setAttribute("sizes", this.width + "px")
                                        : a(this).parents(".woocom-project").length > 0 && this.setAttribute("sizes", "(max-width:" + a(this).attr("width") + "px) 100vw," + a(this).attr("width") + "px");
                            },
                            callback: function () {
                                this.classList.add("is-loaded");
                                var b = a(this);
                                b.parents(".fancy-media-wrap.photoswipe-wrapper").initPhotoswipe(),
                                    setTimeout(function () {
                                        b.parents().removeClass("layzr-bg"), b.css("will-change", "auto");
                                    }, 350);
                            },
                            after: function () {
                                var b = a(this);
                                this.complete &&
                                    !b.hasClass("is-loaded") &&
                                    (this.classList.add("is-loaded"),
                                    setTimeout(function () {
                                        var b = a(this);
                                        b.parents().removeClass("layzr-bg"), b.css("will-change", "auto");
                                    }, 350));
                            },
                        });
                });
            }),
            (dtGlobals.addOnloadEvent = function (b) {
                if (("object" == typeof a.ready || "function" == typeof a.ready) && "function" == typeof a.ready.then)
                    return void a.ready.then(function () {
                        b();
                    });
                if (void 0 !== window.addEventListener) window.addEventListener("load", b, !1);
                else if (void 0 !== window.attachEvent) window.attachEvent("onload", b);
                else if (null != window.onload) {
                    var c = window.onload;
                    window.onload = function (a) {
                        c(a), window[b]();
                    };
                } else window.onload = b;
            }),
            (a.fn.the7ImageRatio = function (b) {
                var c = {
                        isIE: function () {
                            return !((void 0 !== Modernizr.objectfit && Modernizr.objectfit) || void 0 === Modernizr.objectfit);
                        },
                    },
                    d = {
                        init: function () {
                            return c.isIE()
                                ? this.each(function () {
                                      var b = a(this),
                                          c = b.parent(),
                                          d = b.prop("src");
                                      d && !b.hasClass("compat-object-fit") && c.css("backgroundImage", "url(" + d + ")").addClass("compat-object-fit");
                                  })
                                : this;
                        },
                        update: function (b) {
                            var d = c.isIE();
                            return this.each(function () {
                                var c = a(this),
                                    e = c.find("img").first();
                                if (!d) {
                                    var f = { width: "", height: "" };
                                    if (b) {
                                        var g = c.width(),
                                            h = c.height(),
                                            i = e.width(),
                                            j = e.height(),
                                            k = i / j,
                                            l = g / h;
                                        (f = { width: "auto", height: "auto" }), k < l ? (f.height = "100%") : k > l && (f.width = "100%");
                                    }
                                    e.css(f);
                                }
                            });
                        },
                    };
                return d[b] ? d[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void 0 : d.init.apply(this, arguments);
            }),
            (a.fn.the7WidgetImageRatio = function (b) {
                var c = a(this),
                    d = c.find(".img-ratio-wrapper"),
                    e = {
                        init: function () {
                            d.find("img").the7ImageRatio(),
                                e.refresh(),
                                a(window).on("debouncedresize", function () {
                                    e.refresh();
                                });
                        },
                        refresh: function () {
                            var a = c.hasClass("preserve-img-ratio-y");
                            d.the7ImageRatio("update", a);
                        },
                    };
                return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : ("object" != typeof b && b) || e.init.apply(this, arguments), c;
            }),
            (window.the7ApplyWidgetImageRatio = function (a) {
                a.the7WidgetImageRatio();
            }),
            (window.the7GetHiddenHeight = function (a, b) {
                if (!a.length) return 0;
                var c = a.attr("style");
                a.css({ visibility: "hidden", display: "block" });
                var d = a;
                "" !== b && (d = a.find(b));
                var e = d.height();
                return a.attr("style", c || ""), e;
            }),
            (window.the7LocaleSensitiveStringsCompare = function (a, b) {
                return new Intl.Collator(document.documentElement.lang, { sensitivity: "base" }).compare(a, b);
            });
    })(jQuery),
    jQuery(function (a) {
        function b() {
            clearTimeout(t),
                (t = setTimeout(function () {
                    a(window).trigger("debouncedresize"), a(window).trigger("the7_widget_resize");
                }, 200));
        }
        function c() {
            z = new Layzr({
                selector: ".owl-thumb-lazy-load-show",
                attr: "data-src",
                attrSrcSet: "data-srcset",
                retinaAttr: "data-src-retina",
                hiddenAttr: "data-src-hidden",
                threshold: 30,
                before: function () {
                    this.setAttribute("sizes", a(this).attr("width") + "px"), (this.style.willChange = "opacity");
                },
                callback: function () {
                    var b = a(this);
                    this.classList.add("is-loaded"),
                        setTimeout(function () {
                            b.parent().removeClass("layzr-bg"), b.css("will-change", "auto");
                        }, 350);
                },
            });
        }
        function d() {
            if (dtGlobals.isMobile) a(".skills").length > 0 && "undefined" != typeof animateSkills && the7Utils.isFunction(animateSkills) && a(".skills").animateSkills();
            else if (a(".animation-at-the-same-time").length > 0 || a(".animate-element").length > 0) {
                var b = -1;
                a(".animation-at-the-same-time:in-viewport").each(function () {
                    var b = a(this);
                    b.find(".animate-element").addClass("animation-triggered"), b.find(".animate-element:not(.start-animation)").addClass("start-animation");
                }),
                    a(".animate-element:not(.start-animation):in-viewport").each(function () {
                        var c = a(this);
                        !c.parents(".animation-at-the-same-time").length > 0 &&
                            (c.hasClass("start-animation") ||
                                c.hasClass("animation-triggered") ||
                                (c.addClass("animation-triggered"),
                                b++,
                                setTimeout(function () {
                                    c.addClass("start-animation"), c.hasClass("skills") && c.animateSkills();
                                }, 200 * b)));
                    });
            }
        }
        function e(b) {
            for (var c in b) {
                var d = b[c],
                    e = a(".pswp__share-tooltip");
                switch (d) {
                    case "facebook":
                        e.addClass("show-share-fb");
                        break;
                    case "twitter":
                        e.addClass("show-share-tw");
                        break;
                    case "pinterest":
                        e.addClass("show-share-pin");
                        break;
                    case "linkedin":
                        e.addClass("show-share-in");
                        break;
                    case "whatsapp":
                        e.addClass("show-share-wp");
                        break;
                    case "download":
                        e.addClass("show-share-d");
                        break;
                    default:
                        e.removeClass("show-share-in show-share-pin show-share-tw show-share-fb show-share-g show-share-wp");
                }
            }
        }
        function f(b, c) {
            var d = [],
                f = b;
            f = a.extend({ target: ".dt-pswp-item", embedType: "" }, f);
            var g = function (b, c, g) {
                var h = document.querySelectorAll(".pswp")[0],
                    i = d[b - 1].items,
                    j = {
                        index: c,
                        galleryUID: b,
                        shareEl: !0,
                        closeOnScroll: !1,
                        history: !1,
                        shareButtons: C,
                        getImageURLForShare: function (a) {
                            return l.currItem.src || "";
                        },
                        getPageURLForShare: function (a) {
                            return l.currItem.shareLink || window.location.href;
                        },
                        getTextForShare: function (a) {
                            var b = l.currItem.title;
                            return (void 0 !== b ? b.replace(/<[^>]+>/g, "") : "") || "";
                        },
                        parseShareButtonOut: function (a, b) {
                            return b;
                        },
                    },
                    k = "";
                void 0 !== a(g).next(".dt-gallery-container").attr("data-pretty-share") && (k = a(g).next(".dt-gallery-container").attr("data-pretty-share").split(",")),
                    void 0 !== a(g).parents(".dt-gallery-container").attr("data-pretty-share")
                        ? (k = a(g).parents(".dt-gallery-container").attr("data-pretty-share").split(","))
                        : void 0 !== a(g).parents(".shortcode-single-image-wrap").attr("data-pretty-share")
                        ? (k = a(g).parents(".shortcode-single-image-wrap").attr("data-pretty-share").split(","))
                        : void 0 !== a(g).attr("data-pretty-share") && (k = a(g).attr("data-pretty-share").split(",")),
                    k.length <= 0 || void 0 === k ? a(".pswp__scroll-wrap").addClass("hide-pspw-share") : k.push("download"),
                    e(k),
                    a.extend(j, f);
                var l = new PhotoSwipe(h, PhotoSwipeUI_Default, i, j);
                l.init(), a(".pswp__video").removeClass("active");
                var m = a(l.currItem.container);
                m.find(".pswp__video").length > 0 && m.parents(".pswp").addClass("video-active"), a(".pswp__zoom-wrap").removeClass("active-item"), m.addClass("active-item");
                var n = m.find(".pswp__video");
                if (n.length > 0)
                    if ((n.addClass("active"), m.parents(".pswp").addClass("video-active"), "hosted" == n.parents(".pswp-video-wrap ").attr("data-type"))) n.get(0).play();
                    else {
                        var o = n.prop("src");
                        (o += "?autoplay=1"), n.prop("src", o);
                    }
                l.listen("beforeChange", function () {
                    var b = a(l.currItem.container);
                    a(".pswp__zoom-wrap").removeClass("active-item"), b.addClass("active-item"), a(".pswp__video").removeClass("active"), a(".pswp").removeClass("video-active");
                    b.find(".pswp__video").addClass("active");
                    b.find(".pswp__video").length > 0 && b.parents(".pswp").addClass("video-active"),
                        a(".pswp__video").each(function () {
                            var b = a(this);
                            if (b.hasClass("active")) "hosted" == b.parents(".pswp-video-wrap ").attr("data-type") && b.get(0).play();
                            else if ("hosted" == b.parents(".pswp-video-wrap ").attr("data-type")) b.get(0).pause();
                            else {
                                var c = b.prop("src");
                                (c = c.replace("?autoplay=1", "?enablejsapi=1")), b.prop("src", ""), b.prop("src", c), a(".pswp__video").removeClass("active");
                                var d = a(this)[0].contentWindow;
                                b.hasClass("active") ? (func = "playVideo") : (func = "pauseVideo"), d.postMessage('{"event":"command","func":"' + func + '","args":""}', "*");
                            }
                        });
                });
                var p, q;
                l.listen("close", function () {
                    a(".pswp__video").each(function () {
                        var b = a(this);
                        if ("hosted" == b.parents(".pswp-video-wrap ").attr("data-type")) b.get(0).pause();
                        else {
                            b.attr("src", b.attr("src"));
                            var c = b.prop("src");
                            (c = c.replace("?autoplay=1", "?enablejsapi=1")), b.prop("src", ""), b.prop("src", c), a(".pswp__video").removeClass("active");
                            var d = a(this)[0].contentWindow;
                            b.hasClass("active") ? (func = "playVideo") : (func = "stopVideo"), d.postMessage('{"event":"command","func":"' + func + '","args":""}', "*");
                        }
                        clearTimeout(p),
                            (p = setTimeout(function () {
                                a(".pswp-video-wrap").remove();
                            }, 200));
                    });
                }),
                    l.listen("destroy", function () {
                        clearTimeout(q),
                            (q = setTimeout(function () {
                                a(".pswp").removeClass().addClass("pswp");
                            }, 100));
                    });
            };
            !(function (b, c) {
                (d = []),
                    b.each(function (b, c) {
                        d.push({ id: b, items: [] }),
                            a(c)
                                .find(f.target)
                                .each(function (c, e) {
                                    var g = a(e),
                                        h = g.attr("data-large_image_width"),
                                        i = void 0 !== h && h.length > 0 && "" != h && 0 != h ? h : g.find("img").attr("width"),
                                        j = g.attr("data-large_image_height"),
                                        k = void 0 !== j && j.length > 0 && "" != j && 0 != j ? j : g.find("img").attr("height"),
                                        l = void 0 !== g.attr("title") && g.attr("title").length > 0 ? "<h5>" + g.attr("title") + "</h5>" : "",
                                        m = void 0 !== g.attr("data-dt-img-description") ? g.attr("data-dt-img-description") : "",
                                        n = l + m || "";
                                    if ((g.data("gallery-id", b + 1), g.data("photo-id", c), void 0 === i && (i = g.find("img").width()), void 0 === k && (k = g.find("img").height()), a(e).hasClass("pswp-video"))) {
                                        var o = e.href,
                                            p = f.embedType;
                                        a.each(D, function () {
                                            if (o.indexOf(this.index) > -1)
                                                return (
                                                    this.id && ((o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), (p = this.type)), (o = this.src.replace("%id%", o)), !1
                                                );
                                        });
                                        var q = {
                                            html: '<div class="pswp-video-wrap " data-type="' + p + '"><div class="video-wrapper"><iframe class="pswp__video"src="' + o + ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                            title: n,
                                            shareLink: g.attr("data-dt-location") || g.parents(".fancy-media-wrap").find("img").attr("data-dt-location") || "",
                                        };
                                        "hosted" == p && (q.html = '<div class="pswp-video-wrap " data-type="' + p + '"><div class="video-wrapper"><video controls class="pswp__video" src="' + o + '" type="video/mp4"</video ></div></div>');
                                    } else var q = { src: e.href, w: i, h: k, title: n, shareLink: g.attr("data-dt-location") || g.find("img").attr("data-dt-location") || "" };
                                    d[b].items.push(q);
                                }),
                            a(c).prev().hasClass("dt-gallery-pswp")
                                ? a(c)
                                      .prev(".dt-gallery-pswp")
                                      .on("click", function (b) {
                                          b.preventDefault();
                                          var d = a(this),
                                              e = a(this).next(a(c)).find(f.target),
                                              h = e.data("gallery-id"),
                                              i = e.data("photo-id");
                                          d.parents(".ts-wrap").hasClass("ts-interceptClicks") || g(h, i, d);
                                      })
                                : a(c).on("click", f.target, function (b) {
                                      var c = a(this);
                                      b.preventDefault();
                                      var d = a(this).data("gallery-id"),
                                          e = a(this).data("photo-id");
                                      c.parents(".ts-wrap").hasClass("ts-interceptClicks") || g(d, e, c);
                                  });
                    });
            })(c);
            var h = B();
            return h.pid > 0 && h.gid > 0 && g(h.gid, h.pid), this;
        }
        function g(b, c) {
            if (void 0 !== a.fn[c])
                return b.each(function () {
                    a(this)[c]({ bgOpacity: dtShare.overlayOpacity / 100, loop: !0, showHideOpacity: !0 });
                });
        }
        function h(b) {
            const c = b.attr("data-autoplay_speed") ? parseInt(b.attr("data-autoplay_speed")) : 6e3;
            b.hasClass("refreshed") || (b.addClass("refreshed"), b.trigger("refresh.owl.carousel")),
                b.hasClass("content-rollover-layout-list") && !b.hasClass("disable-layout-hover") && b.find(".post-entry-wrapper").clickOverlayGradient(),
                clearTimeout(H),
                (H = setTimeout(function () {
                    a(".dt-owl-item.cloned .animate-element.animation-triggered:not(.start-animation)").addClass("start-animation");
                }, 50)),
                dtGlobals.isInViewport(b) || "true" !== b.attr("data-autoplay") ? dtGlobals.isInViewport(b) && "true" === b.attr("data-autoplay") && b.trigger("play.owl.autoplay", [c]) : b.trigger("stop.owl.autoplay");
        }
        function i() {
            var b = v.width(),
                c = (b - y.innerWidth()) / 2,
                d = a(".side-header-menu-icon").length > 0;
            if ((b - y.innerWidth()) / 2 > 0) var c = (b - y.innerWidth()) / 2;
            else var c = "";
            if ((x.hasClass("header-side-right") && y.hasClass("boxed") && !M.length > 0 && P.css({ right: c }), navigator.userAgent.match(/Trident.*rv\:11\./) && R && Q)) {
                K.insertAfter(O);
                var e = K.attr("style");
                K.not(".sticky-on").attr("style", e + "; top:" + O.height() + "px !important;");
            }
            a(".floating-menu-icon-right").length > 0 && y.hasClass("boxed") && (V.css({ right: c }), a(".branding").css({ left: c })),
                y.hasClass("boxed") && d && !a(".floating-menu-icon-right").length > 0 && (a(".floating-logo .branding").css({ right: c }), V.css({ left: c })),
                L.length > 0 && d && y.hasClass("boxed") && (V.css({ right: c }), a(".floating-logo .branding").css({ left: c }));
        }
        function j() {
            if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) return !1;
            var a = dtGlobals.winScrollTop;
            if (a > Na + 1 && !Oa && !dtGlobals.isHovering) {
                if (
                    (M.removeClass("sticky-off").addClass("sticky-on"),
                    Q || Qa.removeClass("sticky-space-off").addClass("sticky-space-on"),
                    x.hasClass("floating-top-bar") ? M.css({ top: Ka }) : M.css({ top: Ka - ga }),
                    (Oa = !0),
                    va && Q && (M.css({ transform: "translateY(0)" }), navigator.userAgent.match(/Trident.*rv\:11\./)))
                ) {
                    var b = M.attr("style");
                    M.attr("style", b + "; top:" + ga + "px !important;");
                }
            } else if (
                a <= Na + 1 &&
                Oa &&
                (M.removeClass("sticky-on").addClass("sticky-off"),
                Q || Qa.removeClass("sticky-space-on").addClass("sticky-space-off"),
                M.css({ top: 0 }),
                (Oa = !1),
                va && Q && (M.css({ transform: "translateY(-100%)" }), navigator.userAgent.match(/Trident.*rv\:11\./)))
            ) {
                var b = M.attr("style");
                M.not(".sticky-on").attr("style", b + "; top:" + O.height() + "px !important;");
            }
            a > Na + 1 && a <= Na + 1 + Ma - dtLocal.themeSettings.floatingHeader.height
                ? ((Pa = "changing"), Ia.css({ transition: "none", height: Na + Ma - a }))
                : a > Na + 1 + dtLocal.themeSettings.floatingHeader.height && "end" !== Pa
                ? ((Pa = "end"), Ia.css({ height: dtLocal.themeSettings.floatingHeader.height, transition: "all 0.3s ease" }))
                : a <= Na + 1 && "start" !== Pa && ((Pa = "start"), Ia.css({ height: Ma, transition: "all 0.1s ease" }));
        }
        function k() {
            a(".full-width-wrap").length > 0 &&
                a(".full-width-wrap").each(function () {
                    var b,
                        c,
                        d = a(this),
                        e = window.innerWidth,
                        f = v.width(),
                        g = a(".content").width();
                    if (a(".boxed").length > 0) b = (parseInt(a("#main").width()) - parseInt(g)) / 2;
                    else if ((a(".side-header-v-stroke").length && e > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) || (a(".side-header-v-stroke").length && x.hasClass("responsive-off"))) {
                        var h = e <= parseInt(g) ? parseInt(g) : f - a(".side-header-v-stroke").width();
                        b = Math.ceil((h - parseInt(g)) / 2);
                    } else if (
                        (a(".sticky-header .side-header").length && e > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) ||
                        (a(".sticky-header .side-header").length && x.hasClass("responsive-off"))
                    ) {
                        var h = f <= parseInt(g) ? parseInt(g) : f;
                        b = Math.ceil((f - parseInt(g)) / 2);
                    } else if (((a(".header-side-left").length && e) || (a(".header-side-right").length && e)) > dtLocal.themeSettings.mobileHeader.firstSwitchPoint) {
                        var h = e <= parseInt(g) ? parseInt(g) : f - a(".side-header").width();
                        b = Math.ceil((h - parseInt(g)) / 2);
                    } else {
                        var h = f <= parseInt(g) ? parseInt(g) : f;
                        b = Math.ceil((f - parseInt(g)) / 2);
                    }
                    a(".sidebar-left").length > 0 || a(".sidebar-right").length > 0 ? ((c = a(".content").width()), (b = 0)) : (c = a("#main").innerWidth());
                    var i = x.hasClass("rtl") ? "margin-right" : "margin-left";
                    d.css({ width: c, opacity: 1 }),
                        d.css(i, -b),
                        d.find(".full-width-wrap").css({ width: "", opacity: 1, "padding-left": b }),
                        d.find(".full-width-wrap").css(i, ""),
                        d.find(".ts-wrap").each(function () {
                            var b = a(this).data("thePhotoSlider");
                            void 0 !== b && b.update();
                        });
                });
        }
        function l() {
            a(".album-share-overlay, .project-share-overlay:not(.allways-visible-icons)").each(function () {
                var b = a(this);
                b.find(".share-button").on("click", function (a) {
                    a.preventDefault();
                }),
                    b.on("mouseover tap", function (b) {
                        "tap" == b.type && b.stopPropagation();
                        var c = a(this);
                        c.addClass("dt-hovered"),
                            clearTimeout(tb),
                            clearTimeout(ub),
                            (tb = setTimeout(function () {
                                c.hasClass("dt-hovered") && (c.find(".soc-ico a").css("display", "inline-block"), c.find(".soc-ico").stop().css("visibility", "visible").animate({ opacity: 1 }, 200));
                            }, 100));
                    }),
                    b.on("mouseleave ", function (b) {
                        var c = a(this);
                        c.removeClass("dt-hovered"),
                            clearTimeout(tb),
                            clearTimeout(ub),
                            (ub = setTimeout(function () {
                                c.hasClass("dt-hovered") ||
                                    c
                                        .find(".soc-ico")
                                        .stop()
                                        .animate({ opacity: 0 }, 150, function () {
                                            c.find(".soc-ico a").css("display", "none"), a(this).css("visibility", "hidden");
                                        });
                            }, 50));
                    });
            });
        }
        function m() {
            a(".preload-me").loaded(
                null,
                function () {
                    var b = a(".floating-content"),
                        c = xb.siblings(".project-wide-col").height(),
                        d = xb.height();
                    if (a(".floating-content").length > 0) {
                        var e = b.offset();
                        if (J.length > 0 && a(".phantom-sticky").length > 0) var f = J.height();
                        else var f = 0;
                        var g = a(".project-post").offset();
                        v.on("scroll", function () {
                            window.innerWidth > 1050
                                ? dtGlobals.winScrollTop + ab.height() > e.top
                                    ? dtGlobals.winScrollTop + ab.height() + d + 40 < g.top + c
                                        ? b.css("transform", "translateY(" + (dtGlobals.winScrollTop - e.top + ab.height() + 5 - f) + "px)")
                                        : b.css("transform", "translateY(" + (c - d - 40 - f) + "px)")
                                    : b.css("transform", "translateY(0px)")
                                : b.css({ transform: "translateY(0)" });
                        });
                    }
                },
                !0
            );
        }
        function n(b, c, d, e) {
            var f = !0;
            return b.each(function () {
                a(this).find(d).addClass(e),
                    new Layzr({
                        container: c,
                        selector: "." + e,
                        attr: "data-src",
                        attrSrcSet: "data-srcset",
                        retinaAttr: "data-src-retina",
                        threshold: 30,
                        before: function () {
                            "png" ==
                                a(this)
                                    .attr("data-src")
                                    .substring(a(this).attr("data-src").lastIndexOf(".") + 1) && a(this).parent().addClass("layzr-bg-transparent"),
                                a(this).one("load", function () {
                                    a(this).parents(".woocom-project").length > 0
                                        ? this.setAttribute("sizes", "(max-width:" + a(this).attr("width") + "px) 100vw," + a(this).attr("width") + "px")
                                        : this.setAttribute("sizes", this.width + "px"),
                                        (this.style.willChange = "opacity");
                                });
                        },
                        callback: function () {
                            this.classList.add("iso-layzr-loaded");
                            var b = a(this);
                            b.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (a) {
                                setTimeout(function () {
                                    b.parent().removeClass("layzr-bg"), b.css("will-change", "auto");
                                }, 200);
                            }),
                                b.parents(".dt-isotope").length > 0 && f && (b.parents(".dt-isotope").isotope("layout"), (f = !1));
                        },
                    });
            });
        }
        function o() {
            window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")
                ? Sb && (ab = a(".masthead-mobile-header"))
                : (ab = a(Tb ? ".masthead" : Sb && !a(".mobile-false").length > 0 ? ".masthead-mobile-header" : "#phantom"));
            var b = a(".mobile-header-bar");
            b.length > 0 && "none" != b.css("display")
                ? ((Gb = b),
                  Rb && (Gb = a(".sticky-top-line.masthead-mobile-header .mobile-header-bar")),
                  (Ga || Rb) && (ab = a(".sticky-header .masthead.side-header").length > 0 || a(".overlay-navigation .masthead.side-header").length > 0 ? b.parent(".masthead:not(.side-header)") : b.parent()))
                : ((Gb = a(".masthead:not(.side-header):not(.side-header-v-stroke)")), x.hasClass("floating-top-bar") || (Gb = Gb.find(".header-bar")));
        }
        function p() {
            var b = a(".dt-isotope"),
                c = a(".iso-grid .wf-cell:not(.shown), .dt-css-grid .wf-cell:not(.shown)");
            if ((c.exists() && q(c), b.exists())) {
                var d = 0;
                b.each(function () {
                    d++;
                    var b = a(this).find(".wf-cell");
                    b.exists() && q(b, function () {});
                });
            } else {
                var e = a(".iso-item:not(.shown)");
                if (!e.exists()) return;
                q(e);
            }
        }
        function q(b, c) {
            var d = 0;
            b.each(function () {
                var b = a(this);
                a(".mobile-true").length > 0 || b.parents(".loading-effect-none").length > 0
                    ? b.hasClass("shown") ||
                      b.hasClass("animation-triggered") ||
                      (b.addClass("animation-triggered"),
                      setTimeout(function () {
                          b.hasClass("animation-triggered") && b.removeClass("animation-triggered").addClass("shown");
                      }, 200))
                    : b.hasClass("shown") ||
                      b.hasClass("animation-triggered") ||
                      !dtGlobals.isInViewport(b) ||
                      b.hasClass("hidden") ||
                      (b.addClass("animation-triggered"),
                      d++,
                      setTimeout(function () {
                          b.hasClass("animation-triggered") && b.removeClass("animation-triggered").addClass("shown");
                      }, 100 * d)),
                    "function" == typeof c && c.call(this);
            });
        }
        function r(b) {
            var c = b.find(".filter.with-ajax").first(),
                d = b.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
                e = c.find(".filter-categories a.act"),
                f = c.find(".filter-by a.act"),
                g = c.find(".filter-sorting a.act"),
                h = parseInt(d.attr("data-cur-page")),
                i = new Array(),
                j = e.length > 0 ? e.attr("data-filter").replace(".category-", "").replace("*", "") : "";
            return (
                "0" == j && (j = "none"),
                d.hasClass("dt-isotope") &&
                    a(".wf-cell", d).each(function () {
                        i.push(a(this).attr("data-post-id"));
                    }),
                {
                    visibleItems: i,
                    postID: dtLocal.postID,
                    paged: h,
                    term: j,
                    orderBy: f.length > 0 ? f.attr("data-by") : "",
                    order: g.length > 0 ? g.attr("data-sort") : "",
                    ajaxurl: dtLocal.ajaxurl,
                    nonce: dtLocal.ajaxNonce,
                    pageData: dtLocal.pageData,
                    layout: dtLocal.pageData.layout,
                    targetContainer: d,
                    isPhone: dtGlobals.isPhone,
                }
            );
        }
        function s() {
            if (dtGlobals.loadMoreButton && dtGlobals.loadMoreButton.exists()) {
                var a = dtGlobals.loadMoreButton.offset();
                a && v.scrollTop() > (a.top - v.height()) / 2 && !dtGlobals.loadMoreButton.hasClass("animate-load") && dtGlobals.loadMoreButton.trigger("click");
            }
        }
        var t,
            u = a(document),
            v = a(window),
            w = a("html"),
            x = a("body"),
            y = a("#page");
        !dtGlobals.isMobile || dtGlobals.isWindowsPhone || dtGlobals.isAndroid
            ? v.on("resize", function () {
                  b();
              })
            : v.bind("orientationchange", function () {
                  b();
              }),
            v.trigger("debouncedresize");
        var z;
        (a.fn.layzrCarouselUpdate = function () {
            var b = a(this),
                c = "owl-thumb-lazy-load-show",
                d = !1,
                e = b.last().next().find("img").not(".owl-thumb-lazy-load-show");
            e.length && (e.addClass(c), (d = !0)),
                (e = b.first().prev().find("img").not(".owl-thumb-lazy-load-show")),
                e.length && (e.addClass(c), (d = !0)),
                (e = b.find("img").not(".owl-thumb-lazy-load-show")),
                e.length && (e.addClass(c), (d = !0)),
                d && (z.updateSelector(), z.update());
        }),
            a(".layzr-loading-on, .vc_single_image-img").layzrInitialisation(),
            (a.fn.layzrBlogInitialisation = function (b) {
                return this.each(function () {
                    a(this).find("img").addClass("blog-thumb-lazy-load-show");
                    new Layzr({
                        container: b,
                        selector: ".blog-thumb-lazy-load-show",
                        attr: "data-src",
                        attrSrcSet: "data-srcset",
                        retinaAttr: "data-src-retina",
                        hiddenAttr: "data-src-hidden",
                        threshold: 30,
                        before: function () {
                            this.setAttribute("sizes", this.width + "px"),
                                (this.style.willChange = "opacity"),
                                a(this).parents(".woocom-project").length > 0 && this.setAttribute("sizes", "(max-width:" + a(this).attr("width") + "px) 100vw," + a(this).attr("width") + "px");
                        },
                        callback: function () {
                            if (a(this).parents(".post").first().hasClass("visible")) {
                                this.classList.add("is-loaded");
                                var b = a(this);
                                setTimeout(function () {
                                    b.parent().removeClass("layzr-bg"), b.css("will-change", "auto");
                                }, 350);
                            }
                        },
                    });
                });
            }),
            a(".layzr-loading-on .blog-shortcode.jquery-filter.mode-list .visible").layzrBlogInitialisation(),
            (window.vc_rowBehaviour = function () {
                function a() {
                    c('[data-vc-full-width="true"]').each(function () {
                        var a,
                            b,
                            d = c(this),
                            e = d.next(".vc_row-full-width"),
                            f = d.parent(),
                            g = parseInt(d.css("margin-left"), 10),
                            h = parseInt(d.css("margin-right"), 10),
                            i = window.innerWidth,
                            j = v.width(),
                            k = c("#content").width(),
                            l = i > dtLocal.themeSettings.mobileHeader.firstSwitchPoint,
                            m = Math.max(k, j),
                            n = c("#main > .wf-wrap"),
                            o = parseInt(n.css("width")),
                            p = parseInt(n.css("padding-left")),
                            q = x.hasClass("responsive-off"),
                            r = x.hasClass("sticky-header"),
                            s = x.hasClass("header-side-left"),
                            t = x.hasClass("header-side-right"),
                            u = "rtl" === jQuery(document).attr("dir") ? "right" : "left";
                        if ((d.addClass("vc_hidden"), e.length || (e = d.closest(".vc_ie-flexbox-fixer").next(".vc_row-full-width")), e.length)) {
                            f.hasClass("vc_section") && ((g = parseInt(f.css("margin-left"), 10)), (h = parseInt(f.css("margin-right"), 10))),
                                c(".boxed").length > 0
                                    ? (m = c("#main").width())
                                    : q || (l && c(".side-header-v-stroke").length && "none" !== c(".side-header-v-stroke").css("display"))
                                    ? (m = i <= k ? k : j - c(".side-header-v-stroke").width())
                                    : !r && (s || t) && l && c(".side-header").length && "none" !== c(".side-header").css("display") && (m = i <= k ? k : j - c(".side-header").width()),
                                (a = Math.ceil((m - o + 2 * p) / 2)),
                                c(".sidebar-left").length > 0 || c(".sidebar-right").length > 0 ? ((b = c("#content").width()), (a = 0)) : (b = c("#main").innerWidth());
                            var w = 0 - a - g;
                            if ((d.css(u, w), d.css({ position: "relative", "box-sizing": "border-box", width: b }), !d.data("vcStretchContent"))) {
                                var y = -1 * w;
                                0 > y && (y = 0);
                                var z = b - y - e.width() + g + h;
                                0 > z && (z = 0), d.css({ "padding-left": y + "px", "padding-right": z + "px" });
                            }
                            d.data("vcStretchContent") &&
                                d.find(".upb_row_bg").length > 0 &&
                                d.find(".upb_row_bg").each(function () {
                                    var a = c(this);
                                    "full" === a.data("bg-override") && (a.css({ "min-width": b + "px" }), a.css(u, 0));
                                }),
                                d.attr("data-vc-full-width-init", "true"),
                                d.removeClass("vc_hidden"),
                                d.find(".ts-wrap").each(function () {
                                    var a = c(this).data("thePhotoSlider");
                                    void 0 !== a && a.update();
                                });
                        }
                    });
                }
                function b() {
                    c(".vc_row-o-full-height:first").each(function () {
                        var a, b, d, e;
                        (a = c(window)), (b = a.height()), (d = c(this).offset().top), b > d && ((e = 100 - d / (b / 100)), c(this).css("min-height", e + "vh"));
                    });
                }
                var c = window.jQuery;
                c(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", a).on("resize.vcRowBehaviour", b),
                    a(),
                    b(),
                    (function () {
                        (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
                            c(".vc_row-o-full-height").each(function () {
                                var a = c(this);
                                a.data("the7VCRowFixedInIE") || "flex" !== a.css("display") || (a.wrap('<div class="vc_ie-flexbox-fixer"></div>'), a.data("the7VCRowFixedInIE", !0));
                            });
                    })(),
                    vc_initVideoBackgrounds(),
                    (function () {
                        var a,
                            b = !1;
                        window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
                            c(".vc_parallax-inner").remove(),
                            c("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),
                            c("[data-vc-parallax]").each(function () {
                                var a, d, e, f, g, h, i;
                                (b = !0),
                                    "on" === c(this).data("vcParallaxOFade") && c(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"),
                                    (d = 100 * c(this).data("vcParallax")),
                                    (g = c("<div />").addClass("vc_parallax-inner").appendTo(c(this))),
                                    g.height(d + "%"),
                                    (h = c(this).data("vcParallaxImage")),
                                    (i = vcExtractYoutubeId(h)),
                                    i ? insertYoutubeVideoAsBackground(g, i) : void 0 !== h && g.css("background-image", "url(" + h + ")"),
                                    (a = d - 100),
                                    (e = -a),
                                    (f = 0),
                                    g.attr("data-bottom-top", "top: " + e + "%;").attr("data-top-bottom", "top: " + f + "%;");
                            }),
                            !(!b || !window.skrollr) &&
                                ((a = {
                                    forceHeight: !1,
                                    smoothScrolling: !1,
                                    mobileCheck: function () {
                                        return !1;
                                    },
                                }),
                                (window.vcParallaxSkroll = skrollr.init(a)),
                                window.vcParallaxSkroll);
                    })();
            }),
            a('div[data-vc-full-width="true"][data-vc-full-width-init="false"]').length > 0 && vc_rowBehaviour(),
            (a.fn.clickOverlayGradient = function () {
                return this.each(function () {
                    var b = a(this),
                        c = 0,
                        d = b.find(".entry-excerpt"),
                        e = b.find(".post-details, .box-button");
                    d.exists() && (c += d.height()),
                        e.exists() && (c += e.innerHeight()),
                        b.data("the7OverlayLayoutContentOffset", c),
                        b.css({ transform: "translateY(" + c + "px)" }),
                        b.data("overlayLayoutEventsWasAdded") ||
                            dtGlobals.isMobile ||
                            (b.data("overlayLayoutEventsWasAdded", !0),
                            b
                                .parents(".post")
                                .first()
                                .on("mouseenter tap", function () {
                                    b.css("transform", "translateY(0px)");
                                })
                                .on("mouseleave tap", function () {
                                    b.css("transform", "translateY(" + b.data("the7OverlayLayoutContentOffset") + "px)");
                                }));
                });
            }),
            dtGlobals.addOnloadEvent(function () {
                a(".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper").clickOverlayGradient();
            }),
            (dtGlobals.touches = {}),
            (dtGlobals.touches.touching = !1),
            (dtGlobals.touches.touch = !1),
            (dtGlobals.touches.currX = 0),
            (dtGlobals.touches.currY = 0),
            (dtGlobals.touches.cachedX = 0),
            (dtGlobals.touches.cachedY = 0),
            (dtGlobals.touches.count = 0),
            (dtGlobals.resizeCounter = 0),
            u.on("touchstart", function (b) {
                1 == b.originalEvent.touches.length &&
                    ((dtGlobals.touches.touch = b.originalEvent.touches[0]),
                    (dtGlobals.touches.cachedX = dtGlobals.touches.touch.pageX),
                    (dtGlobals.touches.cachedY = dtGlobals.touches.touch.pageY),
                    (dtGlobals.touches.touching = !0),
                    setTimeout(function () {
                        (dtGlobals.touches.currX = dtGlobals.touches.touch.pageX),
                            (dtGlobals.touches.currY = dtGlobals.touches.touch.pageY),
                            dtGlobals.touches.cachedX !== dtGlobals.touches.currX || dtGlobals.touches.touching || dtGlobals.touches.cachedY !== dtGlobals.touches.currY || (dtGlobals.touches.count++, a(b.target).trigger("tap"));
                    }, 200));
            }),
            u.on("touchend touchcancel", function (a) {
                dtGlobals.touches.touching = !1;
            }),
            u.on("touchmove", function (a) {
                (dtGlobals.touches.touch = a.originalEvent.touches[0]), dtGlobals.touches.touching;
            }),
            u.on("tap", function (b) {
                a(".dt-hovered").trigger("mouseout");
            }),
            (function (a) {
                "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
            })(function (a, b) {
                function c(a) {
                    function b(a) {
                        d ? (c(), M(b), (e = !0), (d = !1)) : (e = !1);
                    }
                    var c = a,
                        d = !1,
                        e = !1;
                    (this.kick = function (a) {
                        (d = !0), e || b();
                    }),
                        (this.end = function (a) {
                            var b = c;
                            a &&
                                (e
                                    ? ((c = d
                                          ? function () {
                                                b(), a();
                                            }
                                          : a),
                                      (d = !0))
                                    : a());
                        });
                }
                function d() {
                    return !0;
                }
                function e() {
                    return !1;
                }
                function f(a) {
                    a.preventDefault();
                }
                function g(a) {
                    N[a.target.tagName.toLowerCase()] || a.preventDefault();
                }
                function h(a) {
                    return 1 === a.which && !a.ctrlKey && !a.altKey;
                }
                function i(a, b) {
                    var c, d;
                    if (a.identifiedTouch) return a.identifiedTouch(b);
                    for (c = -1, d = a.length; ++c < d; ) if (a[c].identifier === b) return a[c];
                }
                function j(a, b) {
                    var c = i(a.changedTouches, b.identifier);
                    if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c;
                }
                function k(a) {
                    var b;
                    h(a) && ((b = { target: a.target, startX: a.pageX, startY: a.pageY, timeStamp: a.timeStamp }), J(document, O.move, l, b), J(document, O.cancel, m, b));
                }
                function l(a) {
                    s(a, a.data, a, n);
                }
                function m(a) {
                    n();
                }
                function n() {
                    K(document, O.move, l), K(document, O.cancel, m);
                }
                function o(a) {
                    var b, c;
                    N[a.target.tagName.toLowerCase()] ||
                        ((b = a.changedTouches[0]),
                        (c = { target: b.target, startX: b.pageX, startY: b.pageY, timeStamp: a.timeStamp, identifier: b.identifier }),
                        J(document, P.move + "." + b.identifier, p, c),
                        J(document, P.cancel + "." + b.identifier, q, c));
                }
                function p(a) {
                    var b = a.data,
                        c = j(a, b);
                    c && s(a, b, c, r);
                }
                function q(a) {
                    var b = a.data;
                    i(a.changedTouches, b.identifier) && r(b.identifier);
                }
                function r(a) {
                    K(document, "." + a, p), K(document, "." + a, q);
                }
                function s(a, b, c, d) {
                    var e = c.pageX - b.startX,
                        f = c.pageY - b.startY;
                    e * e + f * f < I * I || v(a, b, c, e, f, d);
                }
                function t() {
                    return (this._handled = d), !1;
                }
                function u(a) {
                    a._handled();
                }
                function v(a, b, c, d, e, f) {
                    var g, h;
                    b.target;
                    (g = a.targetTouches),
                        (h = a.timeStamp - b.timeStamp),
                        (b.type = "movestart"),
                        (b.distX = d),
                        (b.distY = e),
                        (b.deltaX = d),
                        (b.deltaY = e),
                        (b.pageX = c.pageX),
                        (b.pageY = c.pageY),
                        (b.velocityX = d / h),
                        (b.velocityY = e / h),
                        (b.targetTouches = g),
                        (b.finger = g ? g.length : 1),
                        (b._handled = t),
                        (b._preventTouchmoveDefault = function () {
                            a.preventDefault();
                        }),
                        L(b.target, b),
                        f(b.identifier);
                }
                function w(a) {
                    var b = a.data.timer;
                    (a.data.touch = a), (a.data.timeStamp = a.timeStamp), b.kick();
                }
                function x(a) {
                    var b = a.data.event,
                        c = a.data.timer;
                    y(),
                        D(b, c, function () {
                            setTimeout(function () {
                                K(b.target, "click", e);
                            }, 0);
                        });
                }
                function y(a) {
                    K(document, O.move, w), K(document, O.end, x);
                }
                function z(a) {
                    var b = a.data.event,
                        c = a.data.timer,
                        d = j(a, b);
                    d && (a.preventDefault(), (b.targetTouches = a.targetTouches), (a.data.touch = d), (a.data.timeStamp = a.timeStamp), c.kick());
                }
                function A(a) {
                    var b = a.data.event,
                        c = a.data.timer;
                    i(a.changedTouches, b.identifier) && (B(b), D(b, c));
                }
                function B(a) {
                    K(document, "." + a.identifier, z), K(document, "." + a.identifier, A);
                }
                function C(a, b, c, d) {
                    var e = c - a.timeStamp;
                    (a.type = "move"),
                        (a.distX = b.pageX - a.startX),
                        (a.distY = b.pageY - a.startY),
                        (a.deltaX = b.pageX - a.pageX),
                        (a.deltaY = b.pageY - a.pageY),
                        (a.velocityX = 0.3 * a.velocityX + (0.7 * a.deltaX) / e),
                        (a.velocityY = 0.3 * a.velocityY + (0.7 * a.deltaY) / e),
                        (a.pageX = b.pageX),
                        (a.pageY = b.pageY);
                }
                function D(a, b, c) {
                    b.end(function () {
                        return (a.type = "moveend"), L(a.target, a), c && c();
                    });
                }
                function E(a, b, c) {
                    return J(this, "movestart.move", u), !0;
                }
                function F(a) {
                    return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0;
                }
                function G(a) {
                    "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector));
                }
                function H(a) {
                    "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid));
                }
                var I = 6,
                    J = a.event.add,
                    K = a.event.remove,
                    L = function (b, c, d) {
                        a.event.trigger(c, d, b);
                    },
                    M = (function () {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (a, b) {
                                return window.setTimeout(function () {
                                    a();
                                }, 25);
                            }
                        );
                    })(),
                    N = { textarea: !0, input: !0, select: !0, button: !0 },
                    O = { move: "mousemove", cancel: "mouseup dragstart", end: "mouseup" },
                    P = { move: "touchmove", cancel: "touchend", end: "touchend" };
                (a.event.special.movestart = {
                    setup: E,
                    teardown: F,
                    add: G,
                    remove: H,
                    _default: function (a) {
                        function d(b) {
                            C(f, g.touch, g.timeStamp), L(a.target, f);
                        }
                        var f, g;
                        a._handled() &&
                            ((f = {
                                target: a.target,
                                startX: a.startX,
                                startY: a.startY,
                                pageX: a.pageX,
                                pageY: a.pageY,
                                distX: a.distX,
                                distY: a.distY,
                                deltaX: a.deltaX,
                                deltaY: a.deltaY,
                                velocityX: a.velocityX,
                                velocityY: a.velocityY,
                                timeStamp: a.timeStamp,
                                identifier: a.identifier,
                                targetTouches: a.targetTouches,
                                finger: a.finger,
                            }),
                            (g = { event: f, timer: new c(d), touch: b, timeStamp: b }),
                            a.identifier === b
                                ? (J(a.target, "click", e), J(document, O.move, w, g), J(document, O.end, x, g))
                                : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, g), J(document, P.end + "." + a.identifier, A, g)));
                    },
                }),
                    (a.event.special.move = {
                        setup: function () {
                            J(this, "movestart.move", a.noop);
                        },
                        teardown: function () {
                            K(this, "movestart.move", a.noop);
                        },
                    }),
                    (a.event.special.moveend = {
                        setup: function () {
                            J(this, "movestart.moveend", a.noop);
                        },
                        teardown: function () {
                            K(this, "movestart.moveend", a.noop);
                        },
                    }),
                    J(document, "mousedown.move", k),
                    J(document, "touchstart.move", o),
                    "function" == typeof Array.prototype.indexOf &&
                        (function (a, b) {
                            for (var c = ["changedTouches", "targetTouches"], d = c.length; d--; ) -1 === a.event.props.indexOf(c[d]) && a.event.props.push(c[d]);
                        })(a);
            }),
            (a.belowthefold = function (b, c) {
                return v.height() + v.scrollTop() <= a(b).offset().top - c.threshold;
            }),
            (a.abovethetop = function (b, c) {
                return v.scrollTop() >= a(b).offset().top + a(b).height() - c.threshold;
            }),
            (a.rightofscreen = function (b, c) {
                return v.width() + v.scrollLeft() <= a(b).offset().left - c.threshold;
            }),
            (a.leftofscreen = function (b, c) {
                return v.scrollLeft() >= a(b).offset().left + a(b).width() - c.threshold;
            }),
            (a.inviewport = function (b, c) {
                return !(a.rightofscreen(b, c) || a.leftofscreen(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c));
            }),
            a.extend(a.expr.pseudos, {
                "below-the-fold": function (b, c, d) {
                    return a.belowthefold(b, { threshold: 0 });
                },
                "above-the-top": function (b, c, d) {
                    return a.abovethetop(b, { threshold: 0 });
                },
                "left-of-screen": function (b, c, d) {
                    return a.leftofscreen(b, { threshold: 0 });
                },
                "right-of-screen": function (b, c, d) {
                    return a.rightofscreen(b, { threshold: 0 });
                },
                "in-viewport": function (b, c, d) {
                    return a.inviewport(b, { threshold: -30 });
                },
            }),
            (a.fn.checkInViewport = function () {
                if (!dtGlobals.isMobile) {
                    var b = -1;
                    return this.each(function () {
                        var c = a(this);
                        c.hasClass("animation-ready") ||
                            (c.parents(".animation-at-the-same-time").length > 0
                                ? (($thisElem = c.find(".animate-element")), $thisElem.addClass("animation-triggered"), c.find(".animate-element:not(.start-animation)").addClass("start-animation"))
                                : c.hasClass("start-animation") ||
                                  c.hasClass("animation-triggered") ||
                                  (c.addClass("animation-triggered"),
                                  b++,
                                  setTimeout(function () {
                                      c.addClass("start-animation"), c.hasClass("skills") && c.animateSkills();
                                  }, 200 * b)),
                            c.addClass("animation-ready"));
                    });
                }
                "undefined" != typeof animateSkills && the7Utils.isFunction(animateSkills) && a(".skills").animateSkills();
            });
        var A;
        clearTimeout(A),
            (A = setTimeout(function () {
                d();
            }, 50)),
            dtGlobals.isMobile ||
                v.on("scroll", function () {
                    d();
                }),
            v.on("scroll", function () {
                a(".dt-owl-carousel-call, .related-projects").each(function () {
                    var b = a(this),
                        c = "true" === b.attr("data-autoplay"),
                        d = b.attr("data-autoplay_speed") ? parseInt(b.attr("data-autoplay_speed")) : 6e3;
                    !dtGlobals.isInViewport(b) && c ? b.trigger("stop.owl.autoplay") : dtGlobals.isInViewport(b) && c && b.trigger("play.owl.autoplay", [d]);
                });
            }),
            (a.fn.addPhotoswipeWrap = function () {
                return this.each(function (b, c) {
                    var d = a(this);
                    d.on("click", function (a) {
                        a.preventDefault();
                    }),
                        d.parents("figure").first().addClass("photoswipe-item"),
                        d.hasClass("pspw-wrap-ready") || (d.parents().hasClass("dt-gallery-container") || d.parent().addClass("photoswipe-wrapper"), d.addClass("pspw-wrap-ready"));
                });
            }),
            a(".dt-pswp-item, figure .dt-gallery-container a").addPhotoswipeWrap();
        var B = function () {
                var a = window.location.hash.substring(1),
                    b = {};
                if (a.length < 5) return b;
                for (var c = a.split("&"), d = 0; d < c.length; d++)
                    if (c[d]) {
                        var e = c[d].split("=");
                        e.length < 2 || (b[e[0]] = e[1]);
                    }
                return b.gid && (b.gid = parseInt(b.gid, 10)), b.hasOwnProperty("pid") ? ((b.pid = parseInt(b.pid, 10)), b) : b;
            },
            C = [
                {
                    id: "facebook",
                    label: '<i class="icomoon-the7-font-facebook" aria-hidden="true"></i> ' + dtShare.shareButtonText.facebook,
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}&picture={{raw_image_url}}&description={{text}}",
                },
                { id: "twitter", label: '<i class="icomoon-the7-font-twitter" aria-hidden="true"></i> ' + dtShare.shareButtonText.twitter, url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" },
                {
                    id: "pinterest",
                    label: '<i class="icomoon-the7-font-pinterest" aria-hidden="true"></i> ' + dtShare.shareButtonText.pinterest,
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
                },
                { id: "linkedin", label: '<i class="icomoon-the7-font-linkedin" aria-hidden="true"></i> ' + dtShare.shareButtonText.linkedin, url: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{text}}" },
                { id: "whatsapp", label: '<i class="icomoon-the7-font-whatsapp" aria-hidden="true"></i> ' + dtShare.shareButtonText.whatsapp, url: "whatsapp://send?text={{url}}" },
            ];
        dtShare.shareButtonText.download && C.push({ id: "download", label: '<i class="dt-icon-the7-misc-006-244" aria-hidden="true"></i> ' + dtShare.shareButtonText.download, url: "{{raw_image_url}}", download: !0 });
        var D = {
            youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%", type: "youtube" },
            vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%", type: "vimeo" },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        };
        if (
            ((a.fn.photoswipeGallery = function (b) {
                function c(a, b) {
                    return (" " + a.className + " ").indexOf(" " + b + " ") > -1;
                }
                for (
                    var d = function (b) {
                            for (var c, d, e, f = a(b).find(".photoswipe-item").get(), g = f.length, h = [], i = 0; i < g; i++)
                                if (((c = f[i]), 1 === c.nodeType)) {
                                    d = c.children[0];
                                    var j =
                                            void 0 !== a(d).attr("data-large_image_width") && a(d).attr("data-large_image_width").length > 0 && "" != a(d).attr("data-large_image_width")
                                                ? a(d).attr("data-large_image_width")
                                                : a(d).find("img").attr("width"),
                                        k =
                                            void 0 !== a(d).attr("data-large_image_height") && a(d).attr("data-large_image_height").length > 0 && "" != a(d).attr("data-large_image_height")
                                                ? a(d).attr("data-large_image_height")
                                                : a(d).find("img").attr("height"),
                                        l = void 0 !== a(d).attr("title") && a(d).attr("title").length > 0 ? "<h5>" + a(d).attr("title") + "</h5>\n" : "",
                                        m = void 0 !== a(d).attr("data-dt-img-description") ? a(d).attr("data-dt-img-description") : "",
                                        n = l + m || "";
                                    if (a(d).hasClass("pswp-video")) {
                                        var o,
                                            p = d.href;
                                        a.each(D, function () {
                                            if (p.indexOf(this.index) > -1)
                                                return (
                                                    this.id && ((p = "string" == typeof this.id ? p.substr(p.lastIndexOf(this.id) + this.id.length, p.length) : this.id.call(this, p)), (o = this.type)), (p = this.src.replace("%id%", p)), !1
                                                );
                                        });
                                        var e = {
                                            html: '<div class="pswp-video-wrap " data-type="' + o + '"><div class="video-wrapper"><iframe class="pswp__video"src=" ' + p + ' " frameborder="0" allowfullscreen></iframe></div></div>',
                                            title: n,
                                        };
                                    } else var e = { src: d.getAttribute("href"), w: j, h: k, title: n };
                                    d.children.length > 0 && (e.msrc = d.children[0].getAttribute("src")), (e.el = c), h.push(e);
                                }
                            return h;
                        },
                        f = function a(b, c) {
                            return b && (c(b) ? b : a(b.parentNode, c));
                        },
                        g = function (b) {
                            var d = b.target || b.srcElement,
                                e = f(d, function (a) {
                                    return c(a, "photoswipe-item");
                                });
                            if (e) {
                                for (var g, i = a(e).closest(".dt-gallery-container")[0], j = a(a(e).closest(".dt-gallery-container")[0]).find(".photoswipe-item").get(), k = j.length, l = 0, m = 0; m < k; m++)
                                    if (1 === j[m].nodeType) {
                                        if (j[m] === e) {
                                            g = l;
                                            break;
                                        }
                                        l++;
                                    }
                                return g >= 0 && h(g, i), !1;
                            }
                        },
                        h = function (b, c, f, g) {
                            var h,
                                i,
                                j,
                                k = document.querySelectorAll(".pswp")[0];
                            j = d(c);
                            var l = a(c).attr("data-pretty-share") ? a(c).attr("data-pretty-share").split(",") : new Array();
                            if (
                                (l.length <= 0 || void 0 === l ? a(".pswp__scroll-wrap").addClass("hide-pspw-share") : l.push("download"),
                                e(l),
                                (i = {
                                    closeOnScroll: !1,
                                    galleryUID: c.getAttribute("data-pswp-uid"),
                                    bgOpacity: dtShare.overlayOpacity / 100,
                                    loop: !0,
                                    history: !1,
                                    showHideOpacity: !0,
                                    showAnimationDuration: 0,
                                    shareButtons: C,
                                    getImageURLForShare: function (b) {
                                        return h.currItem.src || a(h.currItem.el).find("a").attr("data-dt-location") || "";
                                    },
                                    getPageURLForShare: function (b) {
                                        return a(h.currItem.el).find("a").attr("data-dt-location") || window.location.href;
                                    },
                                    getTextForShare: function (a) {
                                        var b = h.currItem.title;
                                        return (void 0 !== b ? b.replace(/<[^>]+>/g, "") : "") || "";
                                    },
                                    parseShareButtonOut: function (a, b) {
                                        return b;
                                    },
                                }),
                                g)
                            )
                                if (i.galleryPIDs) {
                                    for (var m = 0; m < j.length; m++)
                                        if (j[m].pid == b) {
                                            i.index = m;
                                            break;
                                        }
                                } else i.index = parseInt(b, 10) - 1;
                            else i.index = parseInt(b, 10);
                            if (!isNaN(i.index)) {
                                f && (i.showAnimationDuration = 0), (h = new PhotoSwipe(k, PhotoSwipeUI_Default, j, i)), h.init(), a(".pswp__zoom-wrap").removeClass("active-item"), a(".pswp__video").removeClass("active");
                                var n = a(h.currItem.container);
                                if ((n.addClass("active-item"), n.find(".pswp__video").length > 0)) {
                                    n.find(".pswp__video").addClass("active"), n.parents(".pswp").addClass("video-active");
                                    var o = n.find(".pswp__video").prop("src");
                                    (o += "?autoplay=1"), n.find(".pswp__video").prop("src", o);
                                }
                                h.listen("beforeChange", function () {
                                    var b = a(h.currItem.container);
                                    a(".pswp__zoom-wrap").removeClass("active-item"), b.addClass("active-item"), a(".pswp__video").removeClass("active"), a(".pswp").removeClass("video-active"), b.find(".pswp__video").addClass("active");
                                    b.find(".pswp__video");
                                    b.find(".pswp__video").length > 0 && (b.parents(".pswp").addClass("video-active"), ($runVideo = 0)),
                                        a(".pswp__video").each(function () {
                                            var b = a(this);
                                            if (!b.hasClass("active")) {
                                                var c = b.prop("src");
                                                (c =
                                                    "youtube" == b.parents(".pswp-video-wrap ").attr("data-type") || "vimeo" == b.parents(".pswp-video-wrap ").attr("data-type")
                                                        ? c.replace("?autoplay=1", "?enablejsapi=1")
                                                        : c.replace("?autoplay=1", "")),
                                                    b.prop("src", ""),
                                                    b.prop("src", c);
                                                var d = b[0].contentWindow;
                                                b.hasClass("active") ? (func = "playVideo") : (func = "pauseVideo"), d.postMessage('{"event":"command","func":"' + func + '","args":""}', "*");
                                            }
                                        });
                                });
                                var p, q;
                                h.listen("close", function () {
                                    a(".pswp__video").each(function () {
                                        var b = a(this);
                                        b.attr("src", a(this).attr("src"));
                                        var c = b.prop("src");
                                        (c =
                                            "youtube" == b.parents(".pswp-video-wrap ").attr("data-type") || "vimeo" == b.parents(".pswp-video-wrap ").attr("data-type")
                                                ? c.replace("?autoplay=1", "?enablejsapi=1")
                                                : c.replace("?autoplay=1", "")),
                                            b.prop("src", ""),
                                            b.prop("src", c),
                                            a(".pswp__video").removeClass("active");
                                        var d = b[0].contentWindow;
                                        a(this).hasClass("active") ? (func = "playVideo") : (func = "pauseVideo"),
                                            d.postMessage('{"event":"command","func":"' + func + '","args":""}', "*"),
                                            clearTimeout(p),
                                            (p = setTimeout(function () {
                                                a(".pswp-video-wrap").remove();
                                            }, 200));
                                    });
                                }),
                                    h.listen("destroy", function () {
                                        clearTimeout(q),
                                            (q = setTimeout(function () {
                                                a(".pswp").removeClass().addClass("pswp");
                                            }, 100));
                                    });
                            }
                        },
                        i = document.querySelectorAll(b),
                        j = 0,
                        k = i.length;
                    j < k;
                    j++
                )
                    i[j].setAttribute("data-pswp-uid", j + 1), (i[j].onclick = g);
                var l = (function () {
                    var a = window.location.hash.substring(1),
                        b = {};
                    if (a.length < 5) return b;
                    for (var c = a.split("&"), d = 0; d < c.length; d++)
                        if (c[d]) {
                            var e = c[d].split("=");
                            e.length < 2 || (b[e[0]] = e[1]);
                        }
                    return b.gid && (b.gid = parseInt(b.gid, 10)), b;
                })();
                l.pid && l.gid && h(l.pid, i[l.gid - 1], !0, !0);
            }),
            a(".dt-gallery-container.wf-container").photoswipeGallery(".dt-gallery-container.wf-container"),
            (a.fn.photoswipe = function (a) {
                return (a.embedType = "hosted"), f(a, this);
            }),
            dtGlobals.addOnloadEvent(function () {
                a(
                    ".photoswipe-wrapper, .photoswipe-item .dt-gallery-container, .shortcode-gallery.dt-gallery-container:not(.owl-carousel), .dt-gallery-container.gallery:not(.gallery-size-the7_mphb_gallery_image_size), .instagram-photos.dt-gallery-container, .images-container .dt-gallery-container, .shortcode-instagram.dt-gallery-container, .gallery-shortcode:not(.owl-carousel)"
                ).initPhotoswipe();
            }),
            (a.fn.photoswipeCarousel = function (a) {
                return (a.target = ".dt-owl-item.cloned .dt-pswp-item"), f(a, this);
            }),
            (a.fn.initCarouselClonedPhotoswipe = function () {
                return g(this, "photoswipeCarousel");
            }),
            (a.fn.initPhotoswipe = function () {
                return g(this, "photoswipe");
            }),
            a(".shortcode-gallery.dt-gallery-container:not(.owl-loaded), .gallery-shortcode:not(.owl-loaded)").initPhotoswipe(),
            a(".dt-trigger-first-pswp")
                .addClass("pspw-ready")
                .on("click", function (b) {
                    var c = a(this),
                        d = c.parents("article.post").first();
                    if (!c.parents(".ts-wrap").hasClass("ts-interceptClicks")) {
                        if (d.length > 0) {
                            var e;
                            (e = d.find(".dt-gallery-container").length > 0 ? d.find(".dt-gallery-container a.dt-pswp-item") : d.find("a.dt-pswp-item")), e.length > 0 && d.find(".rollover-click-target").trigger("click");
                        }
                        return !1;
                    }
                }),
            a(".dt-owl-carousel-call").length > 0 || a(".slider-content").length > 0 || a(".dt-owl-carousel-init").length > 0 || a("body").is('[class*="elementor-page"]'))
        ) {
            var E = a.fn.owlCarousel;
            !(function (a, b, c, d) {
                function e(b, c) {
                    (this.settings = null),
                        (this.options = a.extend({}, e.Defaults, c)),
                        (this.$element = a(b)),
                        (this._handlers = {}),
                        (this._plugins = {}),
                        (this._supress = {}),
                        (this._current = null),
                        (this._speed = null),
                        (this._coordinates = []),
                        (this._breakpoint = null),
                        (this._width = null),
                        (this._items = []),
                        (this._clones = []),
                        (this._mergers = []),
                        (this._widths = []),
                        (this._invalidated = {}),
                        (this._pipe = []),
                        (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                        (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                        a.each(
                            ["onResize", "onThrottledResize"],
                            a.proxy(function (b, c) {
                                this._handlers[c] = a.proxy(this[c], this);
                            }, this)
                        ),
                        a.each(
                            e.Plugins,
                            a.proxy(function (a, b) {
                                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                            }, this)
                        ),
                        a.each(
                            e.Workers,
                            a.proxy(function (b, c) {
                                this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                            }, this)
                        ),
                        this.setup(),
                        this.initialize();
                }
                (e.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: b,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "dt-owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab",
                }),
                    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
                    (e.Type = { Event: "event", State: "state" }),
                    (e.Plugins = {}),
                    (e.Workers = [
                        {
                            filter: ["width", "settings"],
                            run: function () {
                                this._width = this.$element.width();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (a) {
                                a.current = this._items && this._items[this.relative(this._current)];
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                this.$stage.children(".cloned").remove();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (a) {
                                var b = this.settings.margin || "",
                                    c = !this.settings.autoWidth,
                                    d = this.settings.rtl,
                                    e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                                !c && this.$stage.children().css(e), (a.css = e);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (a) {
                                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                                    c = null,
                                    d = this._items.length,
                                    e = !this.settings.autoWidth,
                                    f = [];
                                for (a.items = { merge: !1, width: b }; d--; )
                                    (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                                this._widths = f;
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                var b = [],
                                    c = this._items,
                                    d = this.settings,
                                    e = Math.max(2 * d.items, 4),
                                    f = 2 * Math.ceil(c.length / 2),
                                    g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                                    h = "",
                                    i = "";
                                for (g /= 2; g > 0; )
                                    b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                                (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                                    (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                                this._coordinates = f;
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                var a = this.settings.stagePadding,
                                    b = this._coordinates,
                                    c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                                this.$stage.css(c);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (a) {
                                var b = this._coordinates.length,
                                    c = !this.settings.autoWidth,
                                    d = this.$stage.children();
                                if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                                else c && ((a.css.width = a.items.width), d.css(a.css));
                            },
                        },
                        {
                            filter: ["items"],
                            run: function () {
                                this._coordinates.length < 1 && this.$stage.removeAttr("style");
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (a) {
                                (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                            },
                        },
                        {
                            filter: ["position"],
                            run: function () {
                                this.animate(this.coordinates(this._current));
                            },
                        },
                        {
                            filter: ["width", "position", "items", "settings"],
                            run: function () {
                                var a,
                                    b,
                                    c,
                                    d,
                                    e = this.settings.rtl ? 1 : -1,
                                    f = 2 * this.settings.stagePadding,
                                    g = this.coordinates(this.current()) + f,
                                    h = g + this.width() * e,
                                    i = [];
                                for (c = 0, d = this._coordinates.length; c < d; c++)
                                    (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                                this.$stage.children(".active").removeClass("active"),
                                    this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                                    this.$stage.children(".center").removeClass("center"),
                                    this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                            },
                        },
                    ]),
                    (e.prototype.initializeStage = function () {
                        (this.$stage = this.$element.find("." + this.settings.stageClass)),
                            this.$stage.length ||
                                (this.$element.addClass(this.options.loadingClass),
                                (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                                this.$element.append(this.$stage.parent()));
                    }),
                    (e.prototype.initializeItems = function () {
                        var b = this.$element.find(".dt-owl-item");
                        if (b.length)
                            return (
                                (this._items = b.get().map(function (b) {
                                    return a(b);
                                })),
                                (this._mergers = this._items.map(function () {
                                    return 1;
                                })),
                                void this.refresh()
                            );
                        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
                    }),
                    (e.prototype.initialize = function () {
                        if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                            var a, b, c;
                            (a = this.$element.find("img")),
                                (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0),
                                (c = this.$element.children(b).width()),
                                a.length && c <= 0 && this.preloadAutoWidthImages(a);
                        }
                        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
                    }),
                    (e.prototype.isVisible = function () {
                        return !this.settings.checkVisibility || this.$element.is(":visible");
                    }),
                    (e.prototype.setup = function () {
                        var b = this.viewport(),
                            c = this.options.responsive,
                            d = -1,
                            e = null;
                        c
                            ? (a.each(c, function (a) {
                                  a <= b && a > d && (d = Number(a));
                              }),
                              (e = a.extend({}, this.options, c[d])),
                              "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                              delete e.responsive,
                              e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                            : (e = a.extend({}, this.options)),
                            this.trigger("change", { property: { name: "settings", value: e } }),
                            (this._breakpoint = d),
                            (this.settings = e),
                            this.invalidate("settings"),
                            this.trigger("changed", { property: { name: "settings", value: this.settings } });
                    }),
                    (e.prototype.optionsLogic = function () {
                        this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
                    }),
                    (e.prototype.prepare = function (b) {
                        var c = this.trigger("prepare", { content: b });
                        return (
                            c.data ||
                                (c.data = a("<" + this.settings.itemElement + "/>")
                                    .addClass(this.options.itemClass)
                                    .append(b)),
                            this.trigger("prepared", { content: c.data }),
                            c.data
                        );
                    }),
                    (e.prototype.update = function () {
                        for (
                            var b = 0,
                                c = this._pipe.length,
                                d = a.proxy(function (a) {
                                    return this[a];
                                }, this._invalidated),
                                e = {};
                            b < c;

                        )
                            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
                        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
                    }),
                    (e.prototype.width = function (a) {
                        switch ((a = a || e.Width.Default)) {
                            case e.Width.Inner:
                            case e.Width.Outer:
                                return this._width;
                            default:
                                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                        }
                    }),
                    (e.prototype.refresh = function () {
                        this.enter("refreshing"),
                            this.trigger("refresh"),
                            this.setup(),
                            this.optionsLogic(),
                            this.$element.addClass(this.options.refreshClass),
                            this.update(),
                            this.$element.removeClass(this.options.refreshClass),
                            this.leave("refreshing"),
                            this.trigger("refreshed");
                    }),
                    (e.prototype.onThrottledResize = function () {
                        b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
                    }),
                    (e.prototype.onResize = function () {
                        return (
                            !!this._items.length &&
                            this._width !== this.$element.width() &&
                            !!this.isVisible() &&
                            (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                        );
                    }),
                    (e.prototype.registerEventHandlers = function () {
                        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                            !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
                            this.settings.mouseDrag &&
                                (this.$element.addClass(this.options.dragClass),
                                this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                                this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                                    return !1;
                                })),
                            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
                    }),
                    (e.prototype.onDragStart = function (b) {
                        var d = null;
                        3 !== b.which &&
                            (a.support.transform
                                ? ((d = this.$stage
                                      .css("transform")
                                      .replace(/.*\(|\)| /g, "")
                                      .split(",")),
                                  (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                                : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                            this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                            this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                            this.speed(0),
                            (this._drag.time = new Date().getTime()),
                            (this._drag.target = a(b.target)),
                            (this._drag.stage.start = d),
                            (this._drag.stage.current = d),
                            (this._drag.pointer = this.pointer(b)),
                            a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                            a(c).one(
                                "mousemove.owl.core touchmove.owl.core",
                                a.proxy(function (b) {
                                    var d = this.difference(this._drag.pointer, this.pointer(b));
                                    a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                                }, this)
                            ));
                    }),
                    (e.prototype.onDragMove = function (a) {
                        var b = null,
                            c = null,
                            d = null,
                            e = this.difference(this._drag.pointer, this.pointer(a)),
                            f = this.difference(this._drag.stage.start, e);
                        this.is("dragging") &&
                            (a.preventDefault(),
                            this.settings.loop
                                ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                                : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                                  (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                                  (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                                  (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                            (this._drag.stage.current = f),
                            this.animate(f.x));
                    }),
                    (e.prototype.onDragEnd = function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b)),
                            e = this._drag.stage.current,
                            f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
                        a(c).off(".owl.core"),
                            this.$element.removeClass(this.options.grabClass),
                            ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                                (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                                this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                                this.invalidate("position"),
                                this.update(),
                                (this._drag.direction = f),
                                (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                                    this._drag.target.one("click.owl.core", function () {
                                        return !1;
                                    })),
                            this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
                    }),
                    (e.prototype.closest = function (b, c) {
                        var d = -1,
                            e = this.width(),
                            f = this.coordinates();
                        return (
                            this.settings.freeDrag ||
                                a.each(
                                    f,
                                    a.proxy(function (a, g) {
                                        return (
                                            "left" === c && b > g - 30 && b < g + 30
                                                ? (d = a)
                                                : "right" === c && b > g - e - 30 && b < g - e + 30
                                                ? (d = a + 1)
                                                : this.op(b, "<", g) && this.op(b, ">", void 0 !== f[a + 1] ? f[a + 1] : g - e) && (d = "left" === c ? a + 1 : a),
                                            -1 === d
                                        );
                                    }, this)
                                ),
                            this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? (d = b = this.minimum()) : this.op(b, "<", f[this.maximum()]) && (d = b = this.maximum())),
                            d
                        );
                    }),
                    (e.prototype.animate = function (b) {
                        var c = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(),
                            c && (this.enter("animating"), this.trigger("translate")),
                            a.support.transform3d && a.support.transition
                                ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                                : c
                                ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                                : this.$stage.css({ left: b + "px" });
                    }),
                    (e.prototype.is = function (a) {
                        return this._states.current[a] && this._states.current[a] > 0;
                    }),
                    (e.prototype.current = function (a) {
                        if (void 0 === a) return this._current;
                        if (0 !== this._items.length) {
                            if (((a = this.normalize(a)), this._current !== a)) {
                                var b = this.trigger("change", { property: { name: "position", value: a } });
                                void 0 !== b.data && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                            }
                            return this._current;
                        }
                    }),
                    (e.prototype.invalidate = function (b) {
                        return (
                            "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                            a.map(this._invalidated, function (a, b) {
                                return b;
                            })
                        );
                    }),
                    (e.prototype.reset = function (a) {
                        void 0 !== (a = this.normalize(a)) && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
                    }),
                    (e.prototype.normalize = function (a, b) {
                        var c = this._items.length,
                            d = b ? 0 : this._clones.length;
                        return !this.isNumeric(a) || c < 1 ? (a = void 0) : (a < 0 || a >= c + d) && (a = ((((a - d / 2) % c) + c) % c) + d / 2), a;
                    }),
                    (e.prototype.relative = function (a) {
                        return (a -= this._clones.length / 2), this.normalize(a, !0);
                    }),
                    (e.prototype.maximum = function (a) {
                        var b,
                            c,
                            d,
                            e = this.settings,
                            f = this._coordinates.length;
                        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
                        else if (e.autoWidth || e.merge) {
                            if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
                            f = b + 1;
                        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
                        return a && (f -= this._clones.length / 2), Math.max(f, 0);
                    }),
                    (e.prototype.minimum = function (a) {
                        return a ? 0 : this._clones.length / 2;
                    }),
                    (e.prototype.items = function (a) {
                        return void 0 === a ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
                    }),
                    (e.prototype.mergers = function (a) {
                        return void 0 === a ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
                    }),
                    (e.prototype.clones = function (b) {
                        var c = this._clones.length / 2,
                            d = c + this._items.length,
                            e = function (a) {
                                return a % 2 == 0 ? d + a / 2 : c - (a + 1) / 2;
                            };
                        return void 0 === b
                            ? a.map(this._clones, function (a, b) {
                                  return e(b);
                              })
                            : a.map(this._clones, function (a, c) {
                                  return a === b ? e(c) : null;
                              });
                    }),
                    (e.prototype.speed = function (a) {
                        return void 0 !== a && (this._speed = a), this._speed;
                    }),
                    (e.prototype.coordinates = function (b) {
                        var c,
                            d = 1,
                            e = b - 1;
                        return void 0 === b
                            ? a.map(
                                  this._coordinates,
                                  a.proxy(function (a, b) {
                                      return this.coordinates(b);
                                  }, this)
                              )
                            : (this.settings.center ? (this.settings.rtl && ((d = -1), (e = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[e] || 0)) / 2) * d)) : (c = this._coordinates[e] || 0),
                              (c = Math.ceil(c)));
                    }),
                    (e.prototype.duration = function (a, b, c) {
                        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
                    }),
                    (e.prototype.to = function (a, b) {
                        var c = this.current(),
                            d = null,
                            e = a - this.relative(c),
                            f = (e > 0) - (e < 0),
                            g = this._items.length,
                            h = this.minimum(),
                            i = this.maximum();
                        this.settings.loop
                            ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                            : this.settings.rewind
                            ? ((i += 1), (a = ((a % i) + i) % i))
                            : (a = Math.max(h, Math.min(i, a))),
                            this.speed(this.duration(c, a, b)),
                            this.current(a),
                            this.isVisible() && this.update();
                    }),
                    (e.prototype.next = function (a) {
                        (a = a || !1), this.to(this.relative(this.current()) + 1, a);
                    }),
                    (e.prototype.prev = function (a) {
                        (a = a || !1), this.to(this.relative(this.current()) - 1, a);
                    }),
                    (e.prototype.onTransitionEnd = function (a) {
                        if (void 0 !== a && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
                        this.leave("animating"), this.trigger("translated");
                    }),
                    (e.prototype.viewport = function () {
                        var d;
                        return (
                            this.options.responsiveBaseElement !== b
                                ? (d = a(this.options.responsiveBaseElement).width())
                                : b.innerWidth
                                ? (d = b.innerWidth)
                                : c.documentElement && c.documentElement.clientWidth
                                ? (d = c.documentElement.clientWidth)
                                : console.warn("Can not detect viewport width."),
                            d
                        );
                    }),
                    (e.prototype.replace = function (b) {
                        this.$stage.empty(),
                            (this._items = []),
                            b && (b = b instanceof jQuery ? b : a(b)),
                            this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                            b
                                .filter(function () {
                                    return 1 === this.nodeType;
                                })
                                .each(
                                    a.proxy(function (a, b) {
                                        (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                                    }, this)
                                ),
                            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                            this.invalidate("items");
                    }),
                    (e.prototype.add = function (b, c) {
                        var d = this.relative(this._current);
                        (c = void 0 === c ? this._items.length : this.normalize(c, !0)),
                            (b = b instanceof jQuery ? b : a(b)),
                            this.trigger("add", { content: b, position: c }),
                            (b = this.prepare(b)),
                            0 === this._items.length || c === this._items.length
                                ? (0 === this._items.length && this.$stage.append(b),
                                  0 !== this._items.length && this._items[c - 1].after(b),
                                  this._items.push(b),
                                  this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                                : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                            this._items[d] && this.reset(this._items[d].index()),
                            this.invalidate("items"),
                            this.trigger("added", { content: b, position: c });
                    }),
                    (e.prototype.remove = function (a) {
                        void 0 !== (a = this.normalize(a, !0)) &&
                            (this.trigger("remove", { content: this._items[a], position: a }),
                            this._items[a].remove(),
                            this._items.splice(a, 1),
                            this._mergers.splice(a, 1),
                            this.invalidate("items"),
                            this.trigger("removed", { content: null, position: a }));
                    }),
                    (e.prototype.preloadAutoWidthImages = function (b) {
                        b.each(
                            a.proxy(function (b, c) {
                                this.enter("pre-loading"),
                                    (c = a(c)),
                                    a(new Image())
                                        .one(
                                            "load",
                                            a.proxy(function (a) {
                                                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                            }, this)
                                        )
                                        .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                            }, this)
                        );
                    }),
                    (e.prototype.destroy = function () {
                        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
                        for (var d in this._plugins) this._plugins[d].destroy();
                        this.$stage.children(".cloned").remove(),
                            this.$stage.unwrap(),
                            this.$stage.children().contents().unwrap(),
                            this.$stage.children().unwrap(),
                            this.$stage.remove(),
                            this.$element
                                .removeClass(this.options.refreshClass)
                                .removeClass(this.options.loadingClass)
                                .removeClass(this.options.loadedClass)
                                .removeClass(this.options.rtlClass)
                                .removeClass(this.options.dragClass)
                                .removeClass(this.options.grabClass)
                                .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                                .removeData("owl.carousel");
                    }),
                    (e.prototype.op = function (a, b, c) {
                        var d = this.settings.rtl;
                        switch (b) {
                            case "<":
                                return d ? a > c : a < c;
                            case ">":
                                return d ? a < c : a > c;
                            case ">=":
                                return d ? a <= c : a >= c;
                            case "<=":
                                return d ? a >= c : a <= c;
                        }
                    }),
                    (e.prototype.on = function (a, b, c, d) {
                        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
                    }),
                    (e.prototype.off = function (a, b, c, d) {
                        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
                    }),
                    (e.prototype.trigger = function (b, c, d, f, g) {
                        var h = { item: { count: this._items.length, index: this.current() } },
                            i = a.camelCase(
                                a
                                    .grep(["on", b, d], function (a) {
                                        return a;
                                    })
                                    .join("-")
                                    .toLowerCase()
                            ),
                            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
                        return (
                            this._supress[b] ||
                                (a.each(this._plugins, function (a, b) {
                                    b.onTrigger && b.onTrigger(j);
                                }),
                                this.register({ type: e.Type.Event, name: b }),
                                this.$element.trigger(j),
                                this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                            j
                        );
                    }),
                    (e.prototype.enter = function (b) {
                        a.each(
                            [b].concat(this._states.tags[b] || []),
                            a.proxy(function (a, b) {
                                void 0 === this._states.current[b] && (this._states.current[b] = 0), this._states.current[b]++;
                            }, this)
                        );
                    }),
                    (e.prototype.leave = function (b) {
                        a.each(
                            [b].concat(this._states.tags[b] || []),
                            a.proxy(function (a, b) {
                                this._states.current[b]--;
                            }, this)
                        );
                    }),
                    (e.prototype.register = function (b) {
                        if (b.type === e.Type.Event) {
                            if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                                var c = a.event.special[b.name]._default;
                                (a.event.special[b.name]._default = function (a) {
                                    return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                                }),
                                    (a.event.special[b.name].owl = !0);
                            }
                        } else
                            b.type === e.Type.State &&
                                (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                                (this._states.tags[b.name] = a.grep(
                                    this._states.tags[b.name],
                                    a.proxy(function (c, d) {
                                        return a.inArray(c, this._states.tags[b.name]) === d;
                                    }, this)
                                )));
                    }),
                    (e.prototype.suppress = function (b) {
                        a.each(
                            b,
                            a.proxy(function (a, b) {
                                this._supress[b] = !0;
                            }, this)
                        );
                    }),
                    (e.prototype.release = function (b) {
                        a.each(
                            b,
                            a.proxy(function (a, b) {
                                delete this._supress[b];
                            }, this)
                        );
                    }),
                    (e.prototype.pointer = function (a) {
                        var c = { x: null, y: null };
                        return (
                            (a = a.originalEvent || a || b.event),
                            (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                            a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                            c
                        );
                    }),
                    (e.prototype.isNumeric = function (a) {
                        return !isNaN(parseFloat(a));
                    }),
                    (e.prototype.difference = function (a, b) {
                        return { x: a.x - b.x, y: a.y - b.y };
                    }),
                    (a.fn.owlCarousel = function (b) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var d = a(this),
                                f = d.data("owl.carousel");
                            f ||
                                ((f = new e(this, "object" == typeof b && b)),
                                d.data("owl.carousel", f),
                                a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                                    f.register({ type: e.Type.Event, name: c }),
                                        f.$element.on(
                                            c + ".owl.carousel.core",
                                            a.proxy(function (a) {
                                                a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                            }, f)
                                        );
                                })),
                                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
                        });
                    }),
                    (a.fn.owlCarousel.Constructor = e);
            })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (b) {
                        (this._core = b),
                            (this._interval = null),
                            (this._visible = null),
                            (this._handlers = {
                                "initialized.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.autoRefresh && this.watch();
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers);
                    };
                    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                        (e.prototype.watch = function () {
                            this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
                        }),
                        (e.prototype.refresh = function () {
                            this._core.isVisible() !== this._visible &&
                                ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
                        }),
                        (e.prototype.destroy = function () {
                            var a, c;
                            b.clearInterval(this._interval);
                            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (b) {
                        (this._core = b),
                            (this._loaded = []),
                            (this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                                        var c = this._core.settings,
                                            d = (c.center && Math.ceil(c.items / 2)) || c.items,
                                            e = (c.center && -1 * d) || 0,
                                            f = (b.property && void 0 !== b.property.value ? b.property.value : this._core.current()) + e,
                                            g = this._core.clones().length,
                                            h = a.proxy(function (a, b) {
                                                this.load(b);
                                            }, this);
                                        for (c.lazyLoadEager > 0 && ((d += c.lazyLoadEager), c.loop && ((f -= c.lazyLoadEager), d++)); e++ < d; )
                                            this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++;
                                    }
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers);
                    };
                    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (e.prototype.load = function (c) {
                            var d = this._core.$stage.children().eq(c),
                                e = d && d.find(".owl-lazy");
                            !e ||
                                a.inArray(d.get(0), this._loaded) > -1 ||
                                (e.each(
                                    a.proxy(function (c, d) {
                                        var e,
                                            f = a(d),
                                            g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                                        this._core.trigger("load", { element: f, url: g }, "lazy"),
                                            f.is("img")
                                                ? f
                                                      .one(
                                                          "load.owl.lazy",
                                                          a.proxy(function () {
                                                              f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                                          }, this)
                                                      )
                                                      .attr("src", g)
                                                : f.is("source")
                                                ? f
                                                      .one(
                                                          "load.owl.lazy",
                                                          a.proxy(function () {
                                                              this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                                          }, this)
                                                      )
                                                      .attr("srcset", g)
                                                : ((e = new Image()),
                                                  (e.onload = a.proxy(function () {
                                                      f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                                  }, this)),
                                                  (e.src = g));
                                    }, this)
                                ),
                                this._loaded.push(d.get(0)));
                        }),
                        (e.prototype.destroy = function () {
                            var a, b;
                            for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (c) {
                        (this._core = c),
                            (this._previousHeight = null),
                            (this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.autoHeight && this.update();
                                }, this),
                                "changed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
                                }, this),
                                "loaded.owl.lazy": a.proxy(function (a) {
                                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers),
                            (this._intervalId = null);
                        var d = this;
                        a(b).on("load", function () {
                            d._core.settings.autoHeight && d.update();
                        }),
                            a(b).on("resize", function () {
                                d._core.settings.autoHeight &&
                                    (null != d._intervalId && clearTimeout(d._intervalId),
                                    (d._intervalId = setTimeout(function () {
                                        d.update();
                                    }, 250)));
                            });
                    };
                    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
                        (e.prototype.update = function () {
                            var b = this._core._current,
                                c = b + this._core.settings.items,
                                d = this._core.settings.lazyLoad,
                                e = this._core.$stage.children().toArray().slice(b, c),
                                f = [],
                                g = 0;
                            a.each(e, function (b, c) {
                                f.push(a(c).height());
                            }),
                                (g = Math.max.apply(null, f)),
                                g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                                (this._previousHeight = g),
                                this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
                        }),
                        (e.prototype.destroy = function () {
                            var a, b;
                            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (b) {
                        (this._core = b),
                            (this._videos = {}),
                            (this._playing = null),
                            (this._handlers = {
                                "initialized.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                                }, this),
                                "resize.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                                }, this),
                                "refreshed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                                }, this),
                                "changed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && "position" === a.property.name && this._playing && this.stop();
                                }, this),
                                "prepared.owl.carousel": a.proxy(function (b) {
                                    if (b.namespace) {
                                        var c = a(b.content).find(".owl-video");
                                        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                                    }
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers),
                            this._core.$element.on(
                                "click.owl.video",
                                ".owl-video-play-icon",
                                a.proxy(function (a) {
                                    this.play(a);
                                }, this)
                            );
                    };
                    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                        (e.prototype.fetch = function (a, b) {
                            var c = (function () {
                                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                                })(),
                                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                                e = a.attr("data-width") || this._core.settings.videoWidth,
                                f = a.attr("data-height") || this._core.settings.videoHeight,
                                g = a.attr("href");
                            if (!g) throw new Error("Missing video URL.");
                            if (
                                ((d = g.match(
                                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                )),
                                d[3].indexOf("youtu") > -1)
                            )
                                c = "youtube";
                            else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                            else {
                                if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                                c = "vzaar";
                            }
                            (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
                        }),
                        (e.prototype.thumbnail = function (b, c) {
                            var d,
                                e,
                                f,
                                g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                                h = b.find("img"),
                                i = "src",
                                j = "",
                                k = this._core.settings,
                                l = function (c) {
                                    (e = '<div class="owl-video-play-icon"></div>'),
                                        (d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
                                        b.after(d),
                                        b.after(e);
                                };
                            if ((b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                            "youtube" === c.type
                                ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                                : "vimeo" === c.type
                                ? a.ajax({
                                      type: "GET",
                                      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (a) {
                                          (f = a[0].thumbnail_large), l(f);
                                      },
                                  })
                                : "vzaar" === c.type &&
                                  a.ajax({
                                      type: "GET",
                                      url: "//vzaar.com/api/videos/" + c.id + ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (a) {
                                          (f = a.framegrab_url), l(f);
                                      },
                                  });
                        }),
                        (e.prototype.stop = function () {
                            this._core.trigger("stop", null, "video"),
                                this._playing.find(".owl-video-frame").remove(),
                                this._playing.removeClass("owl-video-playing"),
                                (this._playing = null),
                                this._core.leave("playing"),
                                this._core.trigger("stopped", null, "video");
                        }),
                        (e.prototype.play = function (b) {
                            var c,
                                d = a(b.target),
                                e = d.closest("." + this._core.settings.itemClass),
                                f = this._videos[e.attr("data-video")],
                                g = f.width || "100%",
                                h = f.height || this._core.$stage.height();
                            this._playing ||
                                (this._core.enter("playing"),
                                this._core.trigger("play", null, "video"),
                                (e = this._core.items(this._core.relative(e.index()))),
                                this._core.reset(e.index()),
                                (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                                c.attr("height", h),
                                c.attr("width", g),
                                "youtube" === f.type
                                    ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
                                    : "vimeo" === f.type
                                    ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                                    : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                                a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                                (this._playing = e.addClass("owl-video-playing")));
                        }),
                        (e.prototype.isInFullScreen = function () {
                            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                            return b && a(b).parent().hasClass("owl-video-frame");
                        }),
                        (e.prototype.destroy = function () {
                            var a, b;
                            this._core.$element.off("click.owl.video");
                            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Video = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (b) {
                        (this.core = b),
                            (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                            (this.swapping = !0),
                            (this.previous = void 0),
                            (this.next = void 0),
                            (this.handlers = {
                                "change.owl.carousel": a.proxy(function (a) {
                                    a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                                }, this),
                                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                                    a.namespace && (this.swapping = "translated" == a.type);
                                }, this),
                                "translate.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                                }, this),
                            }),
                            this.core.$element.on(this.handlers);
                    };
                    (e.Defaults = { animateOut: !1, animateIn: !1 }),
                        (e.prototype.swap = function () {
                            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                                this.core.speed(0);
                                var b,
                                    c = a.proxy(this.clear, this),
                                    d = this.core.$stage.children().eq(this.previous),
                                    e = this.core.$stage.children().eq(this.next),
                                    f = this.core.settings.animateIn,
                                    g = this.core.settings.animateOut;
                                this.core.current() !== this.previous &&
                                    (g &&
                                        ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                                        d
                                            .one(a.support.animation.end, c)
                                            .css({ left: b + "px" })
                                            .addClass("animated owl-animated-out")
                                            .addClass(g)),
                                    f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                            }
                        }),
                        (e.prototype.clear = function (b) {
                            a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
                        }),
                        (e.prototype.destroy = function () {
                            var a, b;
                            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    var e = function (b) {
                        (this._core = b),
                            (this._call = null),
                            (this._time = 0),
                            (this._timeout = 0),
                            (this._paused = !0),
                            (this._handlers = {
                                "changed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
                                }, this),
                                "initialized.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.autoplay && this.play();
                                }, this),
                                "play.owl.autoplay": a.proxy(function (a, b, c) {
                                    a.namespace && this.play(b, c);
                                }, this),
                                "stop.owl.autoplay": a.proxy(function (a) {
                                    a.namespace && this.stop();
                                }, this),
                                "mouseover.owl.autoplay": a.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                }, this),
                                "mouseleave.owl.autoplay": a.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                                }, this),
                                "touchstart.owl.core": a.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                }, this),
                                "touchend.owl.core": a.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this.play();
                                }, this),
                            }),
                            this._core.$element.on(this._handlers),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options));
                    };
                    (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
                        (e.prototype._next = function (d) {
                            (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                                this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
                        }),
                        (e.prototype.read = function () {
                            return new Date().getTime() - this._time;
                        }),
                        (e.prototype.play = function (c, d) {
                            var e;
                            this._core.is("rotating") || this._core.enter("rotating"),
                                (c = c || this._core.settings.autoplayTimeout),
                                (e = Math.min(this._time % (this._timeout || c), c)),
                                this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
                                (this._time += (this.read() % c) - e),
                                (this._timeout = c),
                                (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
                        }),
                        (e.prototype.stop = function () {
                            this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
                        }),
                        (e.prototype.pause = function () {
                            this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
                        }),
                        (e.prototype.destroy = function () {
                            var a, b;
                            this.stop();
                            for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    "use strict";
                    var e = function (b) {
                        (this._core = b),
                            (this._initialized = !1),
                            (this._pages = []),
                            (this._controls = {}),
                            (this._templates = []),
                            (this.$element = this._core.$element),
                            (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                            (this._handlers = {
                                "prepared.owl.carousel": a.proxy(function (b) {
                                    b.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                                }, this),
                                "added.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                                }, this),
                                "remove.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                                }, this),
                                "changed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && "position" == a.property.name && this.draw();
                                }, this),
                                "initialized.owl.carousel": a.proxy(function (a) {
                                    a.namespace &&
                                        !this._initialized &&
                                        (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                                }, this),
                                "refreshed.owl.carousel": a.proxy(function (a) {
                                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this.$element.on(this._handlers);
                    };
                    (e.Defaults = {
                        nav: !1,
                        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1,
                    }),
                        (e.prototype.initialize = function () {
                            var b,
                                c = this._core.settings;
                            (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                                (this._controls.$previous = a("<" + c.navElement + ">")
                                    .addClass(c.navClass[0])
                                    .html(c.navText[0])
                                    .prependTo(this._controls.$relative)
                                    .on(
                                        "click",
                                        a.proxy(function (a) {
                                            this.prev(c.navSpeed);
                                        }, this)
                                    )),
                                (this._controls.$next = a("<" + c.navElement + ">")
                                    .addClass(c.navClass[1])
                                    .html(c.navText[1])
                                    .appendTo(this._controls.$relative)
                                    .on(
                                        "click",
                                        a.proxy(function (a) {
                                            this.next(c.navSpeed);
                                        }, this)
                                    )),
                                c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                                (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                                this._controls.$absolute.on(
                                    "click",
                                    "button",
                                    a.proxy(function (b) {
                                        var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                                        b.preventDefault(), this.to(d, c.dotsSpeed);
                                    }, this)
                                );
                            for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
                        }),
                        (e.prototype.destroy = function () {
                            var a, b, c, d, e;
                            e = this._core.settings;
                            for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                            for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
                            for (d in this.overides) this._core[d] = this._overrides[d];
                            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
                        }),
                        (e.prototype.update = function () {
                            var a,
                                b,
                                c,
                                d = this._core.clones().length / 2,
                                e = d + this._core.items().length,
                                f = this._core.maximum(!0),
                                g = this._core.settings,
                                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                            if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                                for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                                    if (b >= h || 0 === b) {
                                        if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                                        (b = 0), ++c;
                                    }
                                    b += this._core.mergers(this._core.relative(a));
                                }
                        }),
                        (e.prototype.draw = function () {
                            var b,
                                c = this._core.settings,
                                d = this._core.items().length <= c.items,
                                e = this._core.relative(this._core.current()),
                                f = c.loop || c.rewind;
                            this._controls.$relative.toggleClass("disabled", !c.nav || d),
                                c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                                this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                                c.dots &&
                                    ((b = this._pages.length - this._controls.$absolute.children().length),
                                    c.dotsData && 0 !== b
                                        ? this._controls.$absolute.html(this._templates.join(""))
                                        : b > 0
                                        ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                                        : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                                    this._controls.$absolute.find(".active").removeClass("active"),
                                    this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
                        }),
                        (e.prototype.onTrigger = function (b) {
                            var c = this._core.settings;
                            b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
                        }),
                        (e.prototype.current = function () {
                            var b = this._core.relative(this._core.current());
                            return a
                                .grep(
                                    this._pages,
                                    a.proxy(function (a, c) {
                                        return a.start <= b && a.end >= b;
                                    }, this)
                                )
                                .pop();
                        }),
                        (e.prototype.getPosition = function (b) {
                            var c,
                                d,
                                e = this._core.settings;
                            return (
                                "page" == e.slideBy
                                    ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                                    : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                                c
                            );
                        }),
                        (e.prototype.next = function (b) {
                            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
                        }),
                        (e.prototype.prev = function (b) {
                            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
                        }),
                        (e.prototype.to = function (b, c, d) {
                            var e;
                            !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    "use strict";
                    var e = function (c) {
                        (this._core = c),
                            (this._hashes = {}),
                            (this.$element = this._core.$element),
                            (this._handlers = {
                                "initialized.owl.carousel": a.proxy(function (c) {
                                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                                }, this),
                                "prepared.owl.carousel": a.proxy(function (b) {
                                    if (b.namespace) {
                                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                        if (!c) return;
                                        this._hashes[c] = b.content;
                                    }
                                }, this),
                                "changed.owl.carousel": a.proxy(function (c) {
                                    if (c.namespace && "position" === c.property.name) {
                                        var d = this._core.items(this._core.relative(this._core.current())),
                                            e = a
                                                .map(this._hashes, function (a, b) {
                                                    return a === d ? b : null;
                                                })
                                                .join();
                                        if (!e || b.location.hash.slice(1) === e) return;
                                        b.location.hash = e;
                                    }
                                }, this),
                            }),
                            (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                            this.$element.on(this._handlers),
                            a(b).on(
                                "hashchange.owl.navigation",
                                a.proxy(function (a) {
                                    var c = b.location.hash.substring(1),
                                        d = this._core.$stage.children(),
                                        e = this._hashes[c] && d.index(this._hashes[c]);
                                    void 0 !== e && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0);
                                }, this)
                            );
                    };
                    (e.Defaults = { URLhashListener: !1 }),
                        (e.prototype.destroy = function () {
                            var c, d;
                            a(b).off("hashchange.owl.navigation");
                            for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
                        }),
                        (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
                })(window.Zepto || window.jQuery, window, document),
                (function (a, b, c, d) {
                    function e(b, c) {
                        var e = !1,
                            f = b.charAt(0).toUpperCase() + b.slice(1);
                        return (
                            a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                                if (g[b] !== d) return (e = !c || b), !1;
                            }),
                            e
                        );
                    }
                    function f(a) {
                        return e(a, !0);
                    }
                    var g = a("<support>").get(0).style,
                        h = "Webkit Moz O ms".split(" "),
                        i = {
                            transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                            animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
                        },
                        j = {
                            csstransforms: function () {
                                return !!e("transform");
                            },
                            csstransforms3d: function () {
                                return !!e("perspective");
                            },
                            csstransitions: function () {
                                return !!e("transition");
                            },
                            cssanimations: function () {
                                return !!e("animation");
                            },
                        };
                    j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
                        j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
                        j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
                })(window.Zepto || window.jQuery, window, document);
        }
        (a.fn.scrollerSlideSize = function () {
            return this.each(function () {
                var b = a(this),
                    c = b.find("img").eq(0),
                    d = parseInt(c.attr("width")),
                    e = b.parents(".slider-wrapper"),
                    f = e.width(),
                    g = e.attr("data-max-width"),
                    h = parseInt(e.attr("data-padding-side")),
                    i = parseInt(c.parents(".wf-td").eq(0).css("paddingLeft")),
                    j = parseInt(c.parents(".wf-td").eq(0).css("paddingRight")),
                    k = 0;
                if ((i > 0 && j > 0 && (k = i + j), void 0 !== g)) var l = (f * parseFloat(g)) / 100 - k - h;
                if (d > l) var m = l;
                else {
                    var m = parseInt(c.attr("width"));
                    c.exists() || (m = 280);
                }
                b.parents(".slider-wrapper").attr("data-width", m + k), b.css({ width: m + k });
            });
        }),
            a(".slider-wrapper.description-under-image:not(.related-projects) article").scrollerSlideSize();
        var F = a(".slider-wrapper.owl-carousel:not(.related-projects)");
        F.each(function () {
            function b(a) {
                var b = parseInt(e.attr("data-max-width")),
                    c = (F.width() * parseFloat(b)) / 100 - f,
                    d = parseInt(e.find("img").attr("width")),
                    g = parseInt(e.find("img").attr("height"));
                b && c < d && (e.find("article").css({ "max-width": c + "px" }), e.find("img").css({ "max-width": c + "px", height: (c * g) / d }));
            }
            function c(a) {
                var b = e.find(".owl-stage"),
                    c = b.width(),
                    d = e.find(".dt-owl-item"),
                    f = 0;
                (f = (d.width() + parseInt(d.css("margin-right"))) * a.item.count) > c && b.width(f);
            }
            var d,
                e = a(this),
                f = e.attr("data-padding-side") ? parseInt(e.attr("data-padding-side")) : 0,
                g = "true" === e.attr("data-autoslide"),
                h = e.attr("data-delay") ? parseInt(e.attr("data-delay")) : 6e3,
                i = "true" === e.attr("data-arrows"),
                j = e.attr("data-width") ? F.width() / parseInt(e.attr("data-width")) : F.width() / F.find("article img").attr("width"),
                k = "rtl" == jQuery(document).attr("dir"),
                l = e.attr("data-next-icon") ? e.attr("data-next-icon") : "icon-ar-018-r",
                m = e.attr("data-prev-icon") ? e.attr("data-prev-icon") : "icon-ar-018-l";
            (j = e.attr("data-width") ? F.width() / parseInt(e.attr("data-width")) : e.attr("data-max-width") ? F.width() / parseInt(e.attr("data-max-width")) : F.width() / F.find("article img").attr("width")),
                e
                    .owlCarousel({
                        rtl: k,
                        items: j,
                        autoHeight: !1,
                        margin: f,
                        loadedClass: "owl-loaded",
                        slideBy: "page",
                        loop: !1,
                        smartSpeed: 600,
                        merge: !0,
                        autoWidth: !0,
                        responsive: { 678: { mergeFit: !0 }, 1e3: { mergeFit: !1 } },
                        autoplay: g,
                        autoplayTimeout: h,
                        nav: i,
                        navElement: "a",
                        navText: ['<i class="' + m + '"></i>', '<i class="' + l + '"></i>'],
                        dots: !1,
                        onInitialize: b,
                        onInitialized: c,
                        onRefreshed: c,
                    })
                    .trigger("refresh.owl.carousel"),
                e.on("drag.owl.carousel translate.owl.carousel", function (a) {
                    e.addClass("ts-interceptClicks");
                }),
                e.on("dragged.owl.carousel translated.owl.carousel", function (a) {
                    clearTimeout(d),
                        (d = setTimeout(function () {
                            e.removeClass("ts-interceptClicks");
                        }, 400));
                }),
                e.on("changed.owl.carousel", function (b) {
                    a(".dt-owl-item.cloned .is-loaded", e).parents().hasClass("layzr-bg") && a(".dt-owl-item.cloned .is-loaded", e).parents().removeClass("layzr-bg"),
                        a(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", e).initPhotoswipe(),
                        a(".animate-element:not(.start-animation):in-viewport", e).checkInViewport();
                }),
                e.find(".dt-owl-item").on("mouseenter", function (a) {
                    g && e.trigger("stop.owl.autoplay");
                }),
                e.find(".dt-owl-item").on("mouseleave", function (a) {
                    g && e.trigger("play.owl.autoplay", [h]);
                }),
                e.find(".owl-nav a").on("mouseenter", function (a) {
                    g && e.trigger("stop.owl.autoplay");
                }),
                e.find(".owl-nav a").on("mouseleave", function (a) {
                    g && e.trigger("play.owl.autoplay", [h]);
                }),
                e.on("mouseenter", function (a) {
                    e.addClass("show-arrows");
                }),
                e.on("mouseleave", function (a) {
                    e.removeClass("show-arrows");
                });
        }),
            (a.fn.postTypeScroller = function () {
                var b = a(this),
                    c = "rtl" == jQuery(document).attr("dir"),
                    d = b.attr("data-next-icon") ? b.attr("data-next-icon") : "icon-ar-018-r",
                    e = b.attr("data-prev-icon") ? b.attr("data-prev-icon") : "icon-ar-018-l",
                    f = (b.attr("data-padding-side") && parseInt(b.attr("data-padding-side")), "true" != b.attr("data-paused") && void 0 !== b.attr("data-autoslide")),
                    g = (b.attr("data-paused"), b.attr("data-autoslide") && parseInt(b.attr("data-autoslide")) > 999 ? parseInt(b.attr("data-autoslide")) : 5e3),
                    h = (b.attr("data-autoslide"), b.attr("data-width") ? parseInt(b.attr("data-width")) : 800),
                    i = b.attr("data-height") ? parseInt(b.attr("data-height")) : 400,
                    j = b.attr("data-img-mode") ? b.attr("data-img-mode") : "fill";
                b.owlCarousel({
                    rtl: c,
                    items: 1,
                    autoHeight: !1,
                    center: !1,
                    margin: 0,
                    loadedClass: "owl-loaded",
                    slideBy: 1,
                    loop: !0,
                    smartSpeed: 600,
                    autoplay: f,
                    autoplayTimeout: g,
                    nav: !0,
                    navElement: "a",
                    navText: ['<i class="' + e + '"></i>', '<i class="' + d + '"></i>'],
                    dots: !1,
                }),
                    v.on("debouncedresize", function () {
                        b.find(".dt-owl-item").each(function (c) {
                            var d = a(this),
                                e = d.find("img");
                            if ((e.css({ opacity: 0 }), !e)) return !1;
                            var f = 1;
                            (f = i / h), "fit" == j ? d.css({ height: f * d.width() }) : d.css({ height: f * b.width() });
                            var g,
                                k,
                                l,
                                m,
                                n,
                                o = parseInt(e.attr("width")),
                                p = parseInt(e.attr("height")),
                                q = d.width(),
                                r = f * d.width(),
                                s = {};
                            (g = q / o),
                                (k = r / p),
                                (l = "fill" == b.attr("data-img-mode") ? (g > k ? g : k) : "fit" == b.attr("data-img-mode") ? (g < k ? g : k) : g > k ? g : k),
                                (m = Math.ceil(o * l, 10)),
                                (n = Math.ceil(p * l, 10)),
                                (s.width = m),
                                (s.height = n),
                                (s.opacity = 1),
                                e.css(s);
                        });
                    }),
                    void 0 !== b.attr("data-autoslide") && a('<div class="psPlay"></div>').appendTo(b),
                    "true" === b.attr("data-paused") && (a(".psPlay", b).addClass("paused"), b.trigger("stop.owl.autoplay")),
                    a(".psPlay", b).on("click", function (b) {
                        b.preventDefault();
                        var c = a(this);
                        c.hasClass("paused") ? (c.removeClass("paused"), (f = !0), c.trigger("play.owl.autoplay", [g, 600])) : (c.addClass("paused"), c.trigger("stop.owl.autoplay"));
                    });
            }),
            a(".slider-simple:not(.slider-masonry)").each(function () {
                a(this).postTypeScroller();
            });
        var G = a(
            "#main .slider-content, #footer .slider-content, .side-header:not(.sub-downwards) .mega-full-width > .dt-mega-menu-wrap  .slider-content, .side-header:not(.sub-downwards) .mega-auto-width > .dt-mega-menu-wrap  .slider-content"
        );
        (a.fn.widgetScroller = function () {
            return this.each(function () {
                var b = a(this),
                    c = void 0 !== b.attr("data-autoslide"),
                    d = b.attr("data-autoslide") ? parseInt(b.attr("data-autoslide")) : 6e3,
                    e = "rtl" == jQuery(document).attr("dir");
                b.owlCarousel({
                    rtl: e,
                    items: 1,
                    autoHeight: !0,
                    margin: 0,
                    loadedClass: "owl-loaded",
                    slideBy: "page",
                    loop: b.children().length > 1,
                    smartSpeed: 600,
                    autoplay: c,
                    autoplayTimeout: d,
                    autoplayHoverPause: !1,
                    nav: !1,
                    dots: !0,
                    dotsEach: !0,
                });
            });
        }),
            G.widgetScroller().css("visibility", "visible");
        var H;
        (a.fn.the7OwlCarousel = function () {
            var b = a(this);
            if (b.length) {
                var d,
                    e = b.attr("data-col-gap") ? parseInt(b.attr("data-col-gap")) : 0,
                    f = "true" === b.attr("data-auto-height"),
                    g = b.attr("data-speed") ? parseInt(b.attr("data-speed")) : 600,
                    i = "true" === b.attr("data-autoplay"),
                    j = b.attr("data-autoplay_speed") ? parseInt(b.attr("data-autoplay_speed")) : 6e3,
                    k = "true" === b.attr("data-arrows"),
                    l = "true" === b.attr("data-bullet"),
                    m = b.attr("data-wide-col-num") ? parseInt(b.attr("data-wide-col-num")) : 3,
                    n = b.attr("data-col-num") ? parseInt(b.attr("data-col-num")) : 3,
                    o = b.attr("data-laptop-col") ? parseInt(b.attr("data-laptop-col")) : 3,
                    p = b.attr("data-h-tablet-columns-num") ? parseInt(b.attr("data-h-tablet-columns-num")) : 3,
                    q = b.attr("data-v-tablet-columns-num") ? parseInt(b.attr("data-v-tablet-columns-num")) : 2,
                    r = b.attr("data-phone-columns-num") ? parseInt(b.attr("data-phone-columns-num")) : 1,
                    s = "rtl" == jQuery(document).attr("dir"),
                    t = "1" == b.attr("data-scroll-mode") ? parseInt(b.attr("data-scroll-mode")) : "page",
                    u = b.attr("data-next-icon") ? b.attr("data-next-icon") : "icon-ar-002-r",
                    v = b.attr("data-prev-icon") ? b.attr("data-prev-icon") : "icon-ar-001-l",
                    w = !("1" != b.attr("data-scroll-mode") || !l);
                if (void 0 !== b.attr("data-stage-padding")) var x = b.hasClass("enable-img-shadow") ? parseInt(b.attr("data-stage-padding")) + parseInt(b.attr("data-col-gap")) / 2 : parseInt(b.attr("data-stage-padding"));
                else var x = 0;
                (e = b.attr("data-col-gap") ? parseInt(b.attr("data-col-gap")) : b.attr("data-padding-side") ? parseInt(b.attr("data-padding-side")) : 0),
                    b.on("initialize.owl.carousel", function (d) {
                        a(b[0])
                            .find("script, style")
                            .each(function () {
                                var b = a(this);
                                b.siblings().first();
                                a(b).prev().length > 0 ? a(b).prev().addBack().wrapAll("<div class='carousel-item-wrap' />") : a(b).next().length > 0 && a(b).next().addBack().wrapAll("<div class='carousel-item-wrap' />");
                            }),
                            c();
                    });
                var y = {};
                a(this).hasClass("products-carousel-shortcode") && b.parent(".elementor-widget-container").length && elementorFrontendConfig
                    ? ((y[0] = { items: r, loop: b.children().length > r, stagePadding: 0 }),
                      (y[elementorFrontendConfig.breakpoints.md] = { loop: b.children().length > p, items: p, stagePadding: 0 }),
                      (y[elementorFrontendConfig.breakpoints.lg] = { loop: b.children().length > n, items: n }))
                    : (y = {
                          0: { items: r, loop: b.children().length > r, stagePadding: 0 },
                          481: { loop: b.children().length > q, items: q, stagePadding: 0 },
                          769: { loop: b.children().length > p, items: p, stagePadding: 0 },
                          992: { loop: b.children().length > o, items: o },
                          1199: { loop: b.children().length > n, items: n },
                          1450: { loop: b.children().length > m, items: m },
                      }),
                    b.owlCarousel({
                        rtl: s,
                        items: m,
                        autoHeight: f,
                        margin: e,
                        stagePadding: x,
                        loadedClass: "owl-loaded",
                        slideBy: t,
                        loop: !0,
                        smartSpeed: g,
                        responsive: y,
                        autoplay: i,
                        autoplayTimeout: j,
                        nav: k,
                        navElement: "a",
                        navText: ['<i class="' + v + '" ></i>', '<i class="' + u + '"></i>'],
                        dots: l,
                        dotsEach: w,
                    }),
                    b.hasClass("content-rollover-layout-list") && !b.hasClass("disable-layout-hover") && b.find(".post-entry-wrapper").clickOverlayGradient(),
                    dtGlobals.addOnloadEvent(function () {
                        h(b);
                    }),
                    b.on("changed.owl.carousel", function (c) {
                        a(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", b).initPhotoswipe(),
                            the7Utils.isFunction(a.fn.triggerClonedHoverClick) && a(" .dt-owl-item.cloned .buttons-on-img:not(.rollover-active) .rollover-content", b).triggerClonedHoverClick(),
                            a(".animate-element:not(.start-animation):in-viewport", b).checkInViewport();
                        var d = a(" .dt-owl-item.cloned .post-thumbnail-wrap", b);
                        b.hasClass("albums-shortcode") &&
                            (b.hasClass("gradient-overlay-layout-list") || b.hasClass("content-rollover-layout-list")
                                ? the7Utils.isFunction(a.fn.triggerClonedOverlayAlbumsClick) && a(" .dt-owl-item.cloned .post-entry-content", b).triggerClonedOverlayAlbumsClick()
                                : the7Utils.isFunction(a.fn.triggerClonedAlbumsClick) && d.triggerClonedAlbumsClick()),
                            b.hasClass("gallery-shortcode") && a(b).initCarouselClonedPhotoswipe();
                    }),
                    b.on("change.owl.carousel", function (c) {
                        clearTimeout(d),
                            (d = setTimeout(function () {
                                b.find(".dt-owl-item.active").layzrCarouselUpdate(), a(".dt-owl-item.cloned .lazy-load", b).parent().removeClass("layzr-bg");
                            }, 20));
                    }),
                    b.on("resized.owl.carousel", function (a) {
                        b.hasClass("content-rollover-layout-list") && !b.hasClass("disable-layout-hover") && b.find(".post-entry-wrapper").clickOverlayGradient();
                    }),
                    b.find(".dt-owl-item").on("mouseenter", function (a) {
                        i && b.trigger("stop.owl.autoplay");
                    }),
                    b.find(".dt-owl-item").on("mouseleave", function (a) {
                        i && b.trigger("play.owl.autoplay", [j]);
                    }),
                    b.find(".owl-nav a").on("mouseenter", function (a) {
                        i && b.trigger("stop.owl.autoplay");
                    }),
                    b.find(".owl-nav a").on("mouseleave", function (a) {
                        i && b.trigger("play.owl.autoplay", [j]);
                    });
            }
        }),
            a(".dt-owl-carousel-call, .related-projects").each(function () {
                a(this).the7OwlCarousel();
            }),
            (a.fn.the7ElementorOwlCarousel = function () {
                var b = a(this);
                if (b.length) {
                    var d,
                        e,
                        f = b.attr("data-col-gap") ? parseInt(b.attr("data-col-gap")) : 0,
                        g = b.attr("data-col-gap-tablet") ? parseInt(b.attr("data-col-gap-tablet")) : f,
                        i = b.attr("data-col-gap-mobile") ? parseInt(b.attr("data-col-gap-mobile")) : g,
                        j = "true" === b.attr("data-auto-height"),
                        k = b.attr("data-speed") ? parseInt(b.attr("data-speed")) : 600,
                        l = "true" === b.attr("data-autoplay"),
                        m = b.attr("data-autoplay_speed") ? parseInt(b.attr("data-autoplay_speed")) : 6e3,
                        n = "true" === b.attr("data-arrows"),
                        o = "true" === b.attr("data-arrows_tablet"),
                        p = "true" === b.attr("data-arrows_mobile"),
                        q = "true" === b.attr("data-bullet"),
                        r = "true" === b.attr("data-bullet_tablet"),
                        s = "true" === b.attr("data-bullet_mobile"),
                        t = void 0 !== elementorFrontendConfig.breakpoints.md ? elementorFrontendConfig.breakpoints.md : 481,
                        u = void 0 !== elementorFrontendConfig.breakpoints.lg ? elementorFrontendConfig.breakpoints.lg : 769,
                        v = void 0 !== dtLocal.elementor.settings.container_width ? dtLocal.elementor.settings.container_width + 1 : 1450,
                        w = b.attr("data-col-num") ? parseInt(b.attr("data-col-num")) : 3,
                        x = b.attr("data-wide-col-num") ? parseInt(b.attr("data-wide-col-num")) : w,
                        y = (b.attr("data-laptop-col") && parseInt(b.attr("data-laptop-col")), b.attr("data-h-tablet-columns-num") ? parseInt(b.attr("data-h-tablet-columns-num")) : 3),
                        z = (b.attr("data-v-tablet-columns-num") && parseInt(b.attr("data-v-tablet-columns-num")), b.attr("data-phone-columns-num") ? parseInt(b.attr("data-phone-columns-num")) : 1),
                        A = "rtl" == jQuery(document).attr("dir"),
                        B = "1" == b.attr("data-scroll-mode") ? parseInt(b.attr("data-scroll-mode")) : "page",
                        C = (b.attr("data-next-icon") && b.attr("data-next-icon"), b.attr("data-prev-icon") && b.attr("data-prev-icon"), !("1" != b.attr("data-scroll-mode") || !q));
                    (e = b.hasClass("enable-img-shadow") ? parseInt(b.attr("data-stage-padding")) + parseInt(b.attr("data-col-gap")) / 2 : parseInt(b.attr("data-stage-padding"))), e || (e = 0);
                    var D = b.next(".owl-nav").find(".owl-prev").html(),
                        E = b.next(".owl-nav").find(".owl-next").html();
                    void 0 === b.attr("data-arrows_tablet") && (o = n),
                        void 0 === b.attr("data-arrows_mobile") && (p = n),
                        b.on("initialize.owl.carousel", function (a) {
                            c();
                        });
                    var F = {};
                    (F[0] = { items: z, loop: b.children().length > z, stagePadding: 0, nav: p, dots: s, margin: i }),
                        (F[t] = { loop: b.children().length > y, items: y, stagePadding: 0, nav: o, dots: r, margin: g }),
                        (F[u] = { loop: b.children().length > w, items: w, nav: n, dots: q, margin: f }),
                        (F[v] = { loop: b.children().length > x, items: x, nav: n, dots: q, margin: f }),
                        b.owlCarousel({
                            rtl: A,
                            items: x,
                            autoHeight: j,
                            margin: f,
                            stagePadding: e,
                            loadedClass: "owl-loaded",
                            slideBy: B,
                            loop: !0,
                            smartSpeed: k,
                            autoplay: l,
                            autoplayTimeout: m,
                            responsive: F,
                            navElement: "a",
                            navText: [D, E],
                            dots: q,
                            dotsEach: C,
                        }),
                        b.hasClass("content-rollover-layout-list") && !b.hasClass("disable-layout-hover") && b.find(".post-entry-wrapper").clickOverlayGradient(),
                        dtGlobals.addOnloadEvent(function () {
                            h(b);
                        }),
                        b.on("changed.owl.carousel", function (c) {
                            a(".dt-owl-item.cloned .photoswipe-wrapper, .dt-owl-item.cloned .photoswipe-item .dt-gallery-container", b).initPhotoswipe(), a(".animate-element:not(.start-animation):in-viewport", b).checkInViewport();
                            var d = a(" .dt-owl-item.cloned .post-thumbnail-wrap", b);
                            b.hasClass("albums-shortcode") &&
                                (b.hasClass("gradient-overlay-layout-list") || b.hasClass("content-rollover-layout-list")
                                    ? the7Utils.isFunction(a.fn.triggerClonedOverlayAlbumsClick) && a(" .dt-owl-item.cloned .post-entry-content", b).triggerClonedOverlayAlbumsClick()
                                    : the7Utils.isFunction(a.fn.triggerClonedAlbumsClick) && d.triggerClonedAlbumsClick()),
                                b.hasClass("gallery-shortcode") && a(b).initCarouselClonedPhotoswipe();
                        }),
                        b.on("change.owl.carousel", function (c) {
                            clearTimeout(d),
                                (d = setTimeout(function () {
                                    b.find(".dt-owl-item.active").layzrCarouselUpdate(), a(".dt-owl-item.cloned .lazy-load", b).parent().removeClass("layzr-bg");
                                }, 20));
                        }),
                        b.on("resized.owl.carousel", function (a) {
                            b.hasClass("content-rollover-layout-list") && !b.hasClass("disable-layout-hover") && b.find(".post-entry-wrapper").clickOverlayGradient();
                        }),
                        b.find(".dt-owl-item").on("mouseenter", function (a) {
                            l && b.trigger("stop.owl.autoplay");
                        }),
                        b.find(".dt-owl-item").on("mouseleave", function (a) {
                            l && b.trigger("play.owl.autoplay", [m]);
                        }),
                        b.find(".owl-nav a").on("mouseenter", function (a) {
                            l && b.trigger("stop.owl.autoplay");
                        }),
                        b.find(".owl-nav a").on("mouseleave", function (a) {
                            l && b.trigger("play.owl.autoplay", [m]);
                        });
                }
            }),
            a(".elementor-owl-carousel-call").each(function () {
                a(this).the7ElementorOwlCarousel();
            });
        var I;
        dtGlobals.isMobile && !dtGlobals.isWindowsPhone
            ? v.bind("orientationchange", function (b) {
                  clearTimeout(I),
                      (I = setTimeout(function () {
                          a(".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects").trigger("refresh.owl.carousel"), a(".slider-simple:not(.slider-masonry)").trigger("refresh.owl.carousel");
                      }, 200));
              })
            : dtGlobals.isAndroid &&
              v.bind("debouncedresize", function (b) {
                  clearTimeout(I),
                      (I = setTimeout(function () {
                          a(".dt-owl-carousel-call, .elementor-owl-carousel-call, .related-projects").trigger("refresh.owl.carousel"), a(".slider-simple:not(.slider-masonry)").trigger("refresh.owl.carousel");
                      }, 200));
              });
        var J = a(".top-bar"),
            K = a(".masthead"),
            L = a(".overlay-navigation"),
            M = a(".sticky-header"),
            N = a(".sticky-top-line"),
            O = a("#main-slideshow, .photo-scroller"),
            P =
                (a(".header-side-left").length,
                a(".header-side-right").length,
                a("#main, #main-slideshow, .photo-scroller, .page-title, .fancy-header, .footer"),
                a(".floating-logo.side-header-menu-icon .branding, .side-header-h-stroke, #phantom"),
                a(".side-header")),
            Q = (a(".page-template-template-microsite").length, x.hasClass("transparent")),
            R = a(".floating-navigation-below-slider").exists();
        if (a(".side-header-v-stroke").length > 0) {
            P.width(), a(".side-header-v-stroke").width();
        } else {
            P.width();
        }
        if (
            ((a.closeSideHeader = function () {
                y.removeClass("show-header"), y.addClass("closed-header"), a(".sticky-header-overlay").removeClass("active");
            }),
            (a.closeMobileHeader = function () {
                y.removeClass("show-mobile-header"),
                    y.addClass("closed-mobile-header"),
                    x.removeClass("show-sticky-mobile-header show-overlay-mobile-header").addClass("closed-overlay-mobile-header"),
                    a(".mobile-sticky-header-overlay, .dt-mobile-menu-icon, .menu-toggle, .menu-close-toggle").removeClass("active");
            }),
            M.length > 0 || L.length > 0)
        ) {
            a('<div class="lines-button x"><span class="menu-line"></span><span class="menu-line"></span><span class="menu-line"></span></div>').appendTo(".menu-toggle");
            var S = dtLocal.themeSettings.ToggleCaptionEnabled;
            (ToggleCaption = "disabled" != S ? "<span class='menu-toggle-caption'>" + dtLocal.themeSettings.ToggleCaption + "</span>" : ""), M.length > 0 && x.append('<div class="sticky-header-overlay"></div>');
            var T = a(".menu-toggle"),
                U = a(".menu-close-toggle"),
                V = a(".menu-toggle:not(.active), .menu-close-toggle:not(.active)"),
                W = a(".sticky-header-overlay");
            T.on("click", function () {
                if (!a(".header-under-side-line").length > 0) var b = a(".side-header .menu-toggle");
                else var b = a(".menu-toggle");
                b.hasClass("active")
                    ? (b.removeClass("active"), y.removeClass("show-header").addClass("closed-header"), W.removeClass("active"), a(".hide-overlay").removeClass("active"))
                    : (V.removeClass("active"), b.addClass("active").css({ left: "", right: "" }), y.addClass("show-header").removeClass("closed-header"), U.addClass("active"), W.addClass("active"), a(".hide-overlay").addClass("active"));
            }),
                U.on("click", function () {
                    var b = a(this);
                    b.hasClass("active")
                        ? (b.removeClass("active"), y.removeClass("show-header").addClass("closed-header"), W.removeClass("active"), a(".hide-overlay").removeClass("active"))
                        : (V.removeClass("active"), b.addClass("active").css({ left: "", right: "" }), y.addClass("show-header").removeClass("closed-header"), W.addClass("active"), a(".hide-overlay").addClass("active"));
                }),
                W.on("click", function () {
                    a(this).hasClass("active") && (V.removeClass("active"), y.removeClass("show-header").addClass("closed-header"), W.removeClass("active"));
                }),
                a(".hide-overlay").on("click", function () {
                    a(this).hasClass("active") && (V.removeClass("active"), y.removeClass("show-header"), y.addClass("closed-header"), W.removeClass("active"));
                });
        }
        if (
            (i(),
            v.on("resize", function () {
                i();
            }),
            R && x.hasClass("footer-overlap") && K.insertAfter(O),
            navigator.userAgent.match(/Trident.*rv\:11\./) && R && Q)
        ) {
            K.insertAfter(O);
            var X = K.attr("style");
            K.attr("style", X + "; top:" + O.height() + "px !important;");
        }
        if (a(".mixed-header").length > 0) var Y = a(".mixed-header");
        else var Y = K;
        if (
            (a(".side-header .header-bar").wrap("<div class='header-scrollbar-wrap'></div>"),
            P.length > 0 &&
                "function" == typeof a.fn.mCustomScrollbar &&
                !dtGlobals.isMobile &&
                (a(".header-scrollbar-wrap").mCustomScrollbar({
                    scrollInertia: 150,
                    callbacks: {
                        whileScrolling: function () {
                            a(".header-scrollbar-wrap").layzrInitialisation();
                        },
                    },
                }),
                a(".sub-downwards .main-nav").find(".slider-content").widgetScroller().css("visibility", "visible")),
            P.length > 0 && !a(".mCSB_container").length > 0 && a(".side-header .header-scrollbar-wrap .header-bar").wrap("<div class='mCSB_container'></div>"),
            !x.hasClass("responsive-off"))
        ) {
            var Z = a(".mixed-header"),
                $ = a(".masthead .near-logo-first-switch").clone(!0).addClass("show-on-first-switch"),
                _ = a(".masthead .near-logo-second-switch").clone(!0).addClass("show-on-second-switch"),
                aa = K.find(".in-menu-first-switch").clone(!0).addClass("hide-on-desktop hide-on-second-switch show-on-first-switch"),
                ba = K.find(".in-menu-second-switch").clone(!0).addClass("hide-on-desktop hide-on-first-switch show-on-second-switch"),
                ca = K.find(".in-top-bar").clone(!0).addClass("hide-on-desktop hide-on-first-switch show-on-second-switch"),
                da = K.find(".in-top-bar-left").clone(!0).addClass("hide-on-desktop show-on-first-switch"),
                ea = K.find(".in-top-bar-right").clone(!0).addClass("hide-on-desktop  show-on-first-switch");
            if (Z.length > 0)
                var fa = Z.find(".branding > a, .branding > img").clone(!0),
                    Y = Z;
            else
                var fa = a(".masthead:not(.mixed-header)").find(".branding > a, .branding > img").clone(!0),
                    Y = K;
            if (J.length > 0 && "none" != J.css("display")) var ga = J.innerHeight();
            else var ga = 0;
            var ha = dtLocal.themeSettings.mobileHeader.mobileToggleCaptionEnabled;
            (mobileToggleCaption = "disabled" != ha ? "<span class='menu-toggle-caption'>" + dtLocal.themeSettings.mobileHeader.mobileToggleCaption + "</span>" : ""),
                a("<div class='mobile-header-bar'><div class='mobile-navigation'></div><div class='mobile-mini-widgets'></div><div class='mobile-branding'></div></div>").appendTo(".masthead"),
                a(".mobile-header-bar .mobile-navigation").append(
                    "<a href='#' class='dt-mobile-menu-icon' aria-label='Mobile menu icon'>" +
                        mobileToggleCaption +
                        "<div class='lines-button '><span class='menu-line'></span><span class='menu-line'></span><span class='menu-line'></span></div></a>"
                ),
                a($).appendTo(".mobile-header-bar .mobile-mini-widgets"),
                a(_).appendTo(".mobile-header-bar .mobile-mini-widgets"),
                a(".left-widgets", J).append(ca),
                a(".left-widgets", J).append(da),
                a(".right-widgets", J).append(ea).removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"),
                a(".right-widgets", J).append(ea).removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"),
                a(aa).appendTo(".mobile-mini-widgets-in-menu"),
                a(ba).appendTo(".mobile-mini-widgets-in-menu"),
                aa.removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"),
                ba.removeClass("select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"),
                a(".mobile-header-bar .mobile-branding").append(fa);
            var ia = a(".dt-mobile-header");
            if (
                (ia.siblings().hasClass("dt-parent-menu-clickable") && ia.addClass("dt-parent-menu-clickable"),
                !a(".mobile-mini-widgets-in-menu").find(".in-menu-first-switch ").length > 0 && a(".mobile-mini-widgets-in-menu").addClass("first-switch-no-widgets"),
                !a(".mobile-mini-widgets-in-menu").find(".in-menu-second-switch ").length > 0 && a(".mobile-mini-widgets-in-menu").addClass("second-switch-no-widgets"),
                $.removeClass("select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch"),
                _.removeClass("select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch"),
                ca.removeClass("show-on-desktop select-type-menu list-type-menu select-type-menu-first-switch list-type-menu-first-switch in-top-bar-left").addClass("hide-on-desktop hide-on-first-switch"),
                da.removeClass("show-on-desktop select-type-menu list-type-menu select-type-menu-second-switch list-type-menu-second-switch in-top-bar").addClass("hide-on-desktop hide-on-second-switch"),
                ea.removeClass("show-on-desktop select-type-menu list-type-menu  select-type-menu-second-switch list-type-menu-second-switch").addClass("hide-on-desktop"),
                a(".header-bar .mini-widgets > .mini-nav ").removeClass("select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"),
                a(".mini-nav.show-on-desktop:not(.show-on-first-switch):not(.show-on-second-switch)", J).removeClass("select-type-menu-second-switch list-type-menu-second-switch select-type-menu-first-switch list-type-menu-first-switch"),
                a(".masthead .hide-on-desktop").addClass("display-none"),
                a(".mobile-main-nav ")
                    .find("li")
                    .each(function () {
                        var b = a(this),
                            c = b.find(" > .dt-mega-menu-wrap > .sub-nav");
                        if (b.hasClass("new-column")) {
                            var d = b.prev().find(" > .sub-nav");
                            a(" > .sub-nav > *", b).appendTo(d);
                        }
                        c.unwrap();
                    })
                    .removeClass("dt-mega-menu dt-mega-parent hide-mega-title")
                    .find(" > .sub-nav")
                    .removeClass(" hover-style-bg"),
                ia.length > 0)
            ) {
                dtGlobals.mobileMenuPoint = 50;
                var ja = a(".dt-mobile-menu-icon"),
                    ka = !1,
                    la = Y.offset().top;
                if (!a(".floating-btn").length > 0 && a(".floating-mobile-menu-icon").length > 0) {
                    ja.first().clone(!0).insertBefore(ja).addClass("floating-btn");
                }
                var ma = a(".floating-btn");
                v.scroll(function () {
                    (dtGlobals.mobileMenuPoint = la + Y.height() + 50),
                        dtGlobals.winScrollTop > dtGlobals.mobileMenuPoint && !1 === ka
                            ? (ma.parents(".masthead").addClass("show-floating-icon"), (ka = !0))
                            : dtGlobals.winScrollTop <= dtGlobals.mobileMenuPoint && !0 === ka && (ma.parents(".masthead").removeClass("show-floating-icon"), (ka = !1));
                });
                var ja = a(".dt-mobile-menu-icon");
                !a(".mobile-sticky-header-overlay").length > 0 && x.append('<div class="mobile-sticky-header-overlay"></div>');
                var na = a(".mobile-sticky-header-overlay");
                ja.on("click", function (b) {
                    b.preventDefault();
                    var c = a(this);
                    c.hasClass("active")
                        ? (c.removeClass("active"),
                          y.removeClass("show-mobile-header").addClass("closed-mobile-header"),
                          x.removeClass("show-mobile-overlay-header").addClass("closed-overlay-mobile-header"),
                          c.parents("body").removeClass("show-sticky-mobile-header"),
                          na.removeClass("active"))
                        : (ja.removeClass("active"),
                          c.addClass("active"),
                          y.addClass("show-mobile-header").removeClass("closed-mobile-header"),
                          x.removeClass("closed-overlay-mobile-header").addClass("show-overlay-mobile-header"),
                          na.removeClass("active"),
                          c.parents("body").addClass("show-sticky-mobile-header"),
                          na.addClass("active"));
                }),
                    na.on("click", function () {
                        a(this).hasClass("active") &&
                            (ja.removeClass("active"),
                            y.removeClass("show-mobile-header").addClass("closed-mobile-header"),
                            x.removeClass("show-sticky-mobile-header").addClass("closed-overlay-mobile-header").addClass("closed-overlay-mobile-header"),
                            na.removeClass("active"),
                            y.removeClass("show-mobile-sidebar"));
                    }),
                    a(".dt-close-mobile-menu-icon").on("click", function () {
                        y.removeClass("show-mobile-header"),
                            y.addClass("closed-mobile-header"),
                            x.removeClass("show-sticky-mobile-header"),
                            x.removeClass("show-overlay-mobile-header").addClass("closed-overlay-mobile-header"),
                            na.removeClass("active"),
                            ja.removeClass("active");
                    }),
                    a(".dt-mobile-header").wrapInner("<div class='mobile-header-scrollbar-wrap'></div>"),
                    ia.on("scroll", function () {
                        a(".mobile-header-scrollbar-wrap").layzrInitialisation();
                    }),
                    ia.find(".slider-content").widgetScroller().css("visibility", "visible"),
                    !a(".touchevents").length > 0 &&
                        (ia.on("mouseenter", function (a) {
                            ia.css("overflow-y", "auto");
                        }),
                        ia.on("mouseleave", function (a) {
                            ia.css("overflow-y", "hidden");
                        }));
            }
        }
        a(".l-to-r-line > li:not(.menu-item-language) > a > span:last-child").not(".l-to-r-line > li > a > span.mega-icon").append("<i class='underline'></i>"),
            a(".not-clickable-item").on("click", function (a) {
                a.preventDefault(), a.stopPropagation();
            }),
            (a(".active-line-decoration").length > 0 || a(".hover-line-decoration").length > 0) && a(".main-nav > .menu-item > a").append("<span class='decoration-line'></span>");
        var oa = a(".main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"),
            pa = a(".masthead:not(.sub-downwards) .main-nav, .mini-nav, .mini-wpml .wpml-ls-item-legacy-dropdown"),
            qa = a(".main-nav"),
            P = a(".side-header");
        a(".menu-item-language").each(function () {
            var b = a(this);
            b.children(".submenu-languages").length > 0 && b.addClass("has-children");
        });
        qa.clone(), a(".mini-nav").clone();
        a(".mini-nav select").change(function () {
            window.location.href = a(this).val();
        }),
            (dtGlobals.isHovering = !1),
            a(".main-nav li", P).each(function () {
                var b = a(this);
                if (b.hasClass("new-column")) {
                    var c = b.prev().find(" > .sub-nav");
                    a(" > .sub-nav > *", b).appendTo(c);
                }
            }),
            a(".sub-downwards .main-nav > li").each(function () {
                a(this).find(" > .dt-mega-menu-wrap > .sub-nav").unwrap();
            });
        var ra = a(".select-type-menu, .select-type-menu-first-switch, .select-type-menu-second-switch, .mini-wpml .wpml-ls-item-legacy-dropdown");
        ra.find("> ul").addClass("mini-sub-nav"),
            a(".mini-wpml .wpml-ls-item-legacy-dropdown").find("> ul").addClass("mini-sub-nav"),
            pa.each(function () {
                var b = a(this);
                a(".act", b).parents("li").addClass("act"),
                    a(" li.has-children ", b).each(function () {
                        function b(b) {
                            if (b.parent("li").length > 0)
                                var c = b.parent(),
                                    d = b.siblings("div.dt-mega-menu-wrap, ul");
                            else
                                var c = b,
                                    e = b.find("> a"),
                                    d = e.siblings("div.dt-mega-menu-wrap, ul");
                            var h = b.offset().left,
                                e = b.offset().left,
                                i = b.parents(".masthead");
                            if (
                                (c.addClass("dt-hovered"),
                                c.hasClass("dt-mega-menu") && c.addClass("show-mega-menu"),
                                (dtGlobals.isHovering = !0),
                                d.length > 0 &&
                                    (y.width() - (d.offset().left - y.offset().left) - d.width() < 0 && d.addClass("right-overflow"),
                                    v.height() - (d.offset().top - dtGlobals.winScrollTop) - d.innerHeight() < 0 && !d.parents().hasClass("sub-sideways") && d.addClass("bottom-overflow"),
                                    v.height() - (d.offset().top - dtGlobals.winScrollTop) - d.innerHeight() < 0 && !c.hasClass("dt-mega-menu") && d.addClass("bottom-overflow")),
                                (c.find(".dt-mega-menu-wrap").length > 0 && c.find(".dt-mega-menu-wrap").offset().top + c.find(".dt-mega-menu-wrap").innerHeight()) > v.height() &&
                                    d.parents().hasClass("sub-sideways") &&
                                    c.hasClass("dt-mega-menu") &&
                                    (b.find(".dt-mega-menu-wrap").height() <= v.height()
                                        ? c.find(".dt-mega-menu-wrap").css({ top: -(c.position().top + c.height() + b.find(".dt-mega-menu-wrap").height() - v.height()) })
                                        : c.find(".dt-mega-menu-wrap").css({ top: -(b.position().top - 5) })),
                                !P.length > 0 && d.not(".right-overflow").css({ left: e - h }),
                                b.parents(".dt-mobile-header").length > 0 && d.css({ top: b.position().top - 13 - d.height() }),
                                c.hasClass("mega-auto-width"))
                            ) {
                                var j = (c.width(), i.offset().left),
                                    k = c.offset().left;
                                if ((($_this_parents_ofs = c.offset().left - j), !P.length)) {
                                    var l = y.width();
                                    if (a(".boxed").length > 0) {
                                        var k = c.position().left;
                                        d.innerWidth() > l - c.position().left && d.css({ left: -(d.innerWidth() - (l - k) + 20) });
                                    } else {
                                        var k = c.offset().left;
                                        d.innerWidth() > l - c.offset().left && d.css({ left: -(d.innerWidth() - (l - k) + 20) });
                                    }
                                    d.innerWidth() > l && (a(".boxed").length > 0 ? d.css({ width: i.width() - 40, left: -(c.position().left + 20) }) : d.css({ width: i.width() - 40, left: -(k - j + 20) }));
                                }
                                void 0 != typeof d.find(".slider-content") && d.find(".slider-content").widgetScroller().css("visibility", "visible"), d.layzrInitialisation();
                            }
                            if (c.hasClass("mega-full-width")) {
                                var k = c.offset().left;
                                if (b.parents(".header-bar").length > 0)
                                    if (b.parents(".masthead").hasClass("full-width"))
                                        var m = b.parents(".header-bar").innerWidth() - 40,
                                            j = b.parents(".header-bar").offset().left + 20;
                                    else
                                        var m = b.parents(".header-bar").innerWidth(),
                                            j = b.parents(".header-bar").offset().left;
                                else if (b.parents(".masthead").hasClass("full-width"))
                                    var m = b.parents(".ph-wrap").innerWidth() - 40,
                                        j = b.parents(".ph-wrap").offset().left + 20;
                                else
                                    var m = b.parents(".ph-wrap").innerWidth(),
                                        j = b.parents(".ph-wrap").offset().left;
                                !P.length > 0 && d.css({ width: m, left: -(k - j) }), void 0 != typeof d.find(".slider-content") && d.find(".slider-content").widgetScroller().css("visibility", "visible"), d.layzrInitialisation();
                            }
                            clearTimeout(f),
                                clearTimeout(g),
                                (f = setTimeout(function () {
                                    c.hasClass("dt-hovered") &&
                                        (d
                                            .stop()
                                            .css("visibility", "visible")
                                            .animate({ opacity: 1 }, 150, function () {
                                                c.addClass("show-mega-menu-content");
                                            }),
                                        a(".searchform .submit", ob).removeClass("act"),
                                        a(".mini-search").removeClass("act"),
                                        a(".mini-search.popup-search .popup-search-wrap", ob)
                                            .stop()
                                            .animate({ opacity: 0 }, 150, function () {
                                                a(this).css("visibility", "hidden");
                                            }));
                                }, 100));
                        }
                        function c(b) {
                            var c = b.find("> a"),
                                d = c.siblings("div.dt-mega-menu-wrap, ul");
                            b.removeClass("dt-hovered"),
                                (dtGlobals.isHovering = !1),
                                clearTimeout(f),
                                clearTimeout(g),
                                (g = setTimeout(function () {
                                    b.hasClass("dt-hovered") ||
                                        (d.stop().animate({ opacity: 0 }, 150, function () {
                                            a(this).css("visibility", "hidden");
                                        }),
                                        b.removeClass("show-mega-menu"),
                                        b.removeClass("show-mega-menu-content"),
                                        setTimeout(function () {
                                            b.hasClass("dt-hovered") ||
                                                (d.removeClass("right-overflow"), d.removeClass("bottom-overflow"), b.find(".dt-mega-menu-wrap").css({ top: "" }), b.hasClass("mega-auto-width") && d.css({ width: "", left: "" }));
                                        }, 400));
                                }, 150)),
                                b.find("> a").removeClass("dt-clicked");
                        }
                        var d = a(this),
                            e = d.find("> a");
                        if (d.parent().hasClass("main-nav") && !d.parents().hasClass("side-header") && a(".masthead").hasClass("show-sub-menu-on-hover")) var e = d.find("> a");
                        else if (d.parent().hasClass("main-nav") && d.parents().hasClass("side-header") && a(".masthead").hasClass("show-sub-menu-on-hover")) var e = d;
                        else if ((d.parent().hasClass("sub-nav") || d.parents().hasClass("mini-nav")) && a(".masthead").hasClass("show-sub-menu-on-hover")) var e = d;
                        (dtGlobals.isMobile || dtGlobals.isWindowsPhone) &&
                            d.find("> a").on("click", function (b) {
                                a(this).hasClass("dt-clicked") ? b.stopPropagation() : (b.preventDefault(), oa.find(".dt-clicked").removeClass("dt-clicked"), a(this).addClass("dt-clicked"));
                            });
                        var f, g;
                        if (oa.parents().hasClass("full-width") && d.hasClass("mega-full-width")) {
                            if (oa.parents(".header-bar").length > 0) var h = oa.parents(".header-bar").innerWidth();
                            else var h = oa.parents(".ph-wrap").innerWidth();
                            !P.length > 0 && d.find(".sub-nav-widgets").css({ width: h });
                        }
                        d.find("> a").on("focus", function (c) {
                            "tap" == c.type && c.stopPropagation();
                            var d = a(this);
                            b(d),
                                a(" li.has-children").removeClass("parent-clicked"),
                                d.parent().addClass("parent-clicked"),
                                a(c.target).parents().hasClass("sub-nav") || (a(" li.has-children").removeClass("dt-hovered"), d.parent().addClass("dt-hovered")),
                                a(".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        a(this).css("visibility", "hidden");
                                    }),
                                a(" .main-nav .sub-nav li:not(.parent-clicked) .sub-nav")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        a(this).css("visibility", "hidden");
                                    });
                        }),
                            d.find("> a").on("focusout", function (b) {
                                var c = a(this),
                                    d = a("this"),
                                    e = d.siblings("div.dt-mega-menu-wrap, ul");
                                (dtGlobals.isHovering = !1),
                                    clearTimeout(f),
                                    clearTimeout(g),
                                    (g = setTimeout(function () {
                                        c.parent().hasClass("dt-hovered") ||
                                            (e.stop().animate({ opacity: 0 }, 150, function () {
                                                a(this).css("visibility", "hidden");
                                            }),
                                            c.parent().removeClass("show-mega-menu"),
                                            c.parent().removeClass("show-mega-menu-content"),
                                            setTimeout(function () {
                                                c.parent().hasClass("dt-hovered") ||
                                                    (e.removeClass("right-overflow"),
                                                    e.removeClass("bottom-overflow"),
                                                    c.parent().find(".dt-mega-menu-wrap").css({ top: "" }),
                                                    c.parent().hasClass("mega-auto-width") && e.css({ width: "", left: "" }));
                                            }, 400));
                                    }, 150)),
                                    c.parent().removeClass("parent-clicked");
                            }),
                            a(".masthead").hasClass("show-sub-menu-on-hover")
                                ? (e.on("mouseenter tap", function (c) {
                                      "tap" == c.type && c.stopPropagation(), b(a(this));
                                  }),
                                  d.on("mouseleave", function (b) {
                                      c(a(this));
                                  }))
                                : (x.on("click", function (b) {
                                      (a(b.target).hasClass("sub-nav") && a(b.target).hasClass("dt-mega-menu-wrap")) ||
                                          (a(" #primary-menu li.dt-hovered:not(.dt-mega-menu) > .sub-nav").animate({ opacity: 0 }, 100, function () {
                                              a(this).css("visibility", "hidden");
                                          }),
                                          a(" #primary-menu li.dt-mega-menu > .is-clicked")
                                              .siblings(" .dt-mega-menu-wrap")
                                              .animate({ opacity: 0 }, 100, function () {
                                                  a(this).css("visibility", "hidden");
                                              }),
                                          a(" li.has-children").removeClass("dt-hovered"),
                                          a(" li.has-children > a").removeClass("is-clicked"));
                                  }),
                                  e.on("click", function (d) {
                                      if (!a(this).parents().hasClass("mobile-main-nav")) {
                                          "tap" == d.type && d.stopPropagation();
                                          var e = a(this),
                                              f = e.parent("li");
                                          if (!e.hasClass("is-clicked"))
                                              return (
                                                  b(e),
                                                  a(" li.has-children > a").removeClass("is-clicked"),
                                                  a(" li.has-children").removeClass("parent-clicked"),
                                                  e.parent().addClass("parent-clicked"),
                                                  a(d.target).parents().hasClass("sub-nav") || (a(" li.has-children").removeClass("dt-hovered"), e.parent().addClass("dt-hovered")),
                                                  a(".main-nav > li:not(.dt-hovered) > .sub-nav, .main-nav >  li:not(.dt-hovered) > .dt-mega-menu-wrap")
                                                      .stop()
                                                      .animate({ opacity: 0 }, 150, function () {
                                                          a(this).css("visibility", "hidden");
                                                      }),
                                                  a(".main-nav .sub-nav li:not(.parent-clicked) .sub-nav")
                                                      .stop()
                                                      .animate({ opacity: 0 }, 150, function () {
                                                          a(this).css("visibility", "hidden");
                                                      }),
                                                  e.addClass("is-clicked"),
                                                  !1
                                              );
                                          c(f), e.removeClass("is-clicked"), e.parent().removeClass("parent-clicked");
                                      }
                                  }));
                    });
            }),
            (a.fn.touchMenuItem = function () {
                return this.each(function () {
                    var b = a(this);
                    if (!b.hasClass("item-ready")) {
                        x.on("touchend", function (b) {
                            a(".mobile-true .has-children > a").removeClass("is-clicked");
                        });
                        var c = a(this),
                            d = c.attr("target") ? c.attr("target") : "_self";
                        c.on("touchstart", function (a) {
                            (origY = a.originalEvent.touches[0].pageY), (origX = a.originalEvent.touches[0].pageX);
                        }),
                            c.on("touchend", function (b) {
                                var e = b.originalEvent.changedTouches[0].pageX,
                                    f = b.originalEvent.changedTouches[0].pageY;
                                if (origY == f || origX == e)
                                    if (c.hasClass("is-clicked"));
                                    else if (c.parent().hasClass("dt-hovered")) return b.preventDefault(), a(".mobile-true .has-children > a").removeClass("is-clicked"), c.addClass("is-clicked"), window.open(c.attr("href"), d), !1;
                            }),
                            b.addClass("item-ready");
                    }
                });
            }),
            a(".mobile-true .has-children > a").touchMenuItem();
        var sa, ta;
        ra.on("mouseenter tap", function (b) {
            "tap" == b.type && b.stopPropagation();
            var c = a(this);
            c.addClass("dt-hovered"),
                y.width() - (c.children(".mini-sub-nav").offset().left - y.offset().left) - c.find(" > .mini-sub-nav").width() < 0 && c.children(".mini-sub-nav").addClass("right-overflow"),
                v.height() - (c.children(".mini-sub-nav").offset().top - dtGlobals.winScrollTop) - c.children(".mini-sub-nav").height() < 0 &&
                    !c.parents(".dt-mobile-header").length > 0 &&
                    c.children(".mini-sub-nav").addClass("bottom-overflow"),
                c.parents(".dt-mobile-header").length > 0 && c.children(".mini-sub-nav").css({ top: c.position().top - 13 - c.children(".mini-sub-nav").height() }),
                (dtGlobals.isHovering = !0),
                clearTimeout(sa),
                clearTimeout(ta),
                (sa = setTimeout(function () {
                    c.hasClass("dt-hovered") &&
                        (a(".mini-sub-nav")
                            .stop()
                            .animate({ opacity: 0 }, 50, function () {
                                a(this).css("visibility", "hidden");
                            }),
                        c.children(".mini-sub-nav").stop().css("visibility", "visible").animate({ opacity: 1 }, 150));
                }, 100));
        }),
            ra.on("mouseleave", function (b) {
                var c = a(this);
                c.removeClass("dt-hovered"),
                    (dtGlobals.isHovering = !1),
                    clearTimeout(sa),
                    clearTimeout(ta),
                    (ta = setTimeout(function () {
                        c.hasClass("dt-hovered") ||
                            (c.parents().hasClass("dt-mega-menu") ||
                                c
                                    .children(".mini-sub-nav")
                                    .stop()
                                    .animate({ opacity: 0 }, 150, function () {
                                        a(this).css("visibility", "hidden");
                                    }),
                            setTimeout(function () {
                                c.hasClass("dt-hovered") || (c.children(".mini-sub-nav").removeClass("right-overflow"), c.children(".mini-sub-nav").removeClass("bottom-overflow"));
                            }, 400));
                    }, 150));
            }),
            (dtGlobals.desktopProcessed = !1),
            (dtGlobals.mobileProcessed = !1);
        var ua = a(".sticky-mobile-header").exists();
        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !x.hasClass("responsive-off") &&
            (a(".masthead:not(.side-header):not(#phantom)").addClass("masthead-mobile-header"),
            a("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("masthead-mobile-header").addClass("desktop-side-header")),
            window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !x.hasClass("responsive-off")
                ? a(".left-widgets", J).find(".in-top-bar-left").length > 0 || a(".right-widgets", J).find(".in-top-bar-right").length > 0
                    ? J.removeClass("top-bar-empty")
                    : J.addClass("top-bar-empty")
                : window.innerWidth <= dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !x.hasClass("responsive-off")
                ? a(".left-widgets", J).find(".in-top-bar").length > 0
                    ? J.removeClass("top-bar-empty")
                    : J.addClass("top-bar-empty")
                : !a(".mini-widgets", J).find(".show-on-desktop").length > 0
                ? J.addClass("top-bar-empty")
                : J.removeClass("top-bar-empty");
        var va = a(".floating-navigation-below-slider").exists();
        if (a(".sticky-mobile-header").exists() && !x.hasClass("responsive-off")) {
            var wa = a(".masthead:not(.side-header):not(#phantom), body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)"),
                xa = wa.find(".mobile-header-bar");
            ($stickyMobileLogo = wa.find(".mobile-branding")),
                (mobileLogoURL = a(".mobile-branding a").attr("href")),
                a(".sticky-mobile-logo-first-switch").exists() ||
                    (dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html &&
                        (void 0 == mobileLogoURL
                            ? a(dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html).addClass("sticky-mobile-logo-first-switch").prependTo($stickyMobileLogo)
                            : a('<a class="sticky-mobile-logo-first-switch" href="' + mobileLogoURL + '">' + dtLocal.themeSettings.stickyMobileHeaderFirstSwitch.logo.html + " </a>").prependTo($stickyMobileLogo))),
                a(".sticky-mobile-logo-second-switch").exists() ||
                    (dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html &&
                        (void 0 == mobileLogoURL
                            ? a(dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html).addClass("sticky-mobile-logo-second-switch").prependTo($stickyMobileLogo)
                            : a('<a class="sticky-mobile-logo-second-switch" href="' + mobileLogoURL + '">' + dtLocal.themeSettings.stickyMobileHeaderSecondSwitch.logo.html + " </a>").prependTo($stickyMobileLogo)));
            var ya = 0,
                za = 0,
                Aa = O.height(),
                Ba = 0,
                Ca = 0,
                Da = 0,
                Ea = !1;
            if (!Q) {
                a("<div class='mobile-header-space'></div>").insertBefore(wa);
                var Fa = a(".mobile-header-space");
            }
            a(".no-cssgridlegacy.no-cssgrid").length > 0 && va && (Q ? (wa.css({ top: Aa }), Fa.css({ top: Aa })) : (Fa.insertAfter(O), wa.insertAfter(O))),
                (dtGlobals.resetMobileSizes = function (b) {
                    if (window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint)
                        return a(".is-safari").length > 0 && wa.css({ width: "", "max-width": "" }), wa.removeClass("sticky-mobile-off sticky-mobile-on"), (Ea = !1), !1;
                    (za = a("#wpadminbar").exists() && !Modernizr.mq("only screen and (max-width:600px)") ? a("#wpadminbar").height() : 0),
                        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !x.hasClass("responsive-off")
                            ? a(".left-widgets", J).find(".in-top-bar-left").length > 0 || a(".top-bar .right-widgets").find(".in-top-bar-right").length > 0
                                ? J.removeClass("top-bar-empty")
                                : J.addClass("top-bar-empty")
                            : a(".left-widgets", J).find(".in-top-bar").length > 0
                            ? J.removeClass("top-bar-empty")
                            : J.addClass("top-bar-empty"),
                        (ya = !J.exists() || J.is(":hidden") || J.hasClass("top-bar-empty") || J.hasClass("hide-top-bar") ? 0 : J.innerHeight()),
                        window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint
                            ? ((Ba = dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight + ya), (Ca = dtLocal.themeSettings.mobileHeader.firstSwitchPointHeight))
                            : ((Ba = dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight + ya), (Ca = dtLocal.themeSettings.mobileHeader.secondSwitchPointHeight)),
                        va ? (va && !Q ? (Da = b) : va && Q ? (Da = b - Ba + ya) : xa.offset().top) : (Da = ya),
                        wa.hasClass("sticky-mobile-on") && wa.css({ top: za - ya }),
                        Q || (Fa.css({ height: Ba }), Fa.css({ top: b })),
                        a(".is-safari").length > 0 && wa.css({ width: document.documentElement.clientWidth, "max-width": document.documentElement.clientWidth });
                }),
                dtGlobals.resetMobileSizes(O.height()),
                v.on("resize debouncedresize", function () {
                    dtGlobals.resetMobileSizes(O.height());
                }),
                v.on("scroll", function () {
                    if (window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint) return !1;
                    var b = dtGlobals.winScrollTop;
                    b > Da && !Ea && a(document).height() > a(window).height()
                        ? (wa.removeClass("sticky-mobile-off").addClass("sticky-mobile-on"), R && ua && wa.addClass("fixed-mobile-header"), wa.css({ top: za - ya }), (Ea = !0))
                        : b <= Da &&
                          Ea &&
                          (wa.removeClass("sticky-mobile-on").addClass("sticky-mobile-off"),
                          R && ua && wa.removeClass("fixed-mobile-header"),
                          wa.css({ top: 0 }),
                          a(".no-cssgridlegacy.no-cssgrid").length > 0 && va && wa.css({ top: Aa }),
                          (Ea = !1));
                });
        }
        dtGlobals.isMobile &&
            window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
            !dtGlobals.isiPad &&
            !x.hasClass("responsive-off") &&
            (dtLocal.themeSettings.floatingHeader.showMenu && a(".phantom-sticky").exists() && Q && K.addClass("fixed-masthead"), (dtLocal.themeSettings.floatingHeader.showMenu = !1));
        var Q = x.hasClass("transparent"),
            Ga = a(".phantom-sticky").exists();
        a(".side-header").exists();
        if (dtLocal.themeSettings.floatingHeader.showMenu && Ga) {
            var Ha = a(".branding a", K).attr("href"),
                M = K,
                Ia = M.find(".header-bar"),
                Ja = M.find(".branding");
            Ja.find("img");
            Ja.find("a.same-logo").length > 0 ||
                a(".sticky-logo").exists() ||
                (dtLocal.themeSettings.floatingHeader.logo.html &&
                    dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                    (void 0 == Ha
                        ? a(dtLocal.themeSettings.floatingHeader.logo.html).addClass("sticky-logo").prependTo(Ja)
                        : a('<a class="sticky-logo" href="' + Ha + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>").prependTo(Ja)));
            var ga = 0,
                Ka = 0,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = !1,
                Pa = "";
            if (!Q) {
                a("<div class='header-space'></div>").insertAfter(M);
                var Qa = a(".header-space");
            }
            M.addClass("sticky-off fixed-masthead");
            var Ra = !1;
            (dtGlobals.resetSizes = function (b) {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off"))
                    return (
                        Ra ||
                            ((Ra = !0),
                            M.removeClass("sticky-off sticky-on"),
                            Q || Qa.removeClass("sticky-space-off sticky-space-on"),
                            M.css({ top: "", transform: "" }),
                            (Oa = !1),
                            (Pa = ""),
                            a(".is-safari").length > 0 && M.css({ width: "", "max-width": "" })),
                        !1
                    );
                Ra && (Ra = !1),
                    Oa || "" !== Pa || (M.addClass("sticky-off"), Q || Qa.addClass("sticky-space-off")),
                    (Ka = a("#wpadminbar").exists() ? a("#wpadminbar").height() : 0),
                    (ga = !J.exists() || J.is(":hidden") || J.hasClass("top-bar-empty") || J.hasClass("hide-top-bar") ? 0 : J.innerHeight()),
                    (La = dtLocal.themeSettings.desktopHeader.height + ga),
                    (Ma = dtLocal.themeSettings.desktopHeader.height),
                    va ? (va && !Q ? (Na = x.hasClass("floating-top-bar") ? b - ga : b) : va && Q ? (Na = x.hasClass("floating-top-bar") ? b - Ma - ga : b - Ma) : Ia.offset().top) : (Na = x.hasClass("floating-top-bar") ? 0 : ga),
                    Q || Qa.css({ height: La }),
                    a(".is-safari").length > 0 && (y.hasClass("boxed") ? M.css({ width: y.width(), "max-width": y.width() }) : M.css({ width: document.documentElement.clientWidth, "max-width": document.documentElement.clientWidth }));
            }),
                dtGlobals.resetSizes(O.height()),
                v.on(" debouncedresize", function () {
                    dtGlobals.resetSizes(O.height());
                }),
                j(),
                v.on("scroll", function () {
                    j();
                });
        }
        if (N.exists()) {
            var Sa = 0,
                Ka = 0,
                ga = 0,
                Ta = !1;
            N.addClass("sticky-top-line-off"), a(".top-line-space").exists() || Q || a("<div class='top-line-space'></div>").insertBefore(N);
            var Ha = a(".branding a", N).attr("href"),
                Ja = N.find(".branding");
            Ja.find("img");
            Ja.find("a.same-logo").length > 0 ||
                a(".sticky-logo").exists() ||
                (dtLocal.themeSettings.topLine.floatingTopLine.logo.html &&
                    dtLocal.themeSettings.topLine.floatingTopLine.logo.showLogo &&
                    (void 0 == Ha
                        ? a(dtLocal.themeSettings.topLine.floatingTopLine.logo.html).addClass("sticky-logo").prependTo(Ja)
                        : a('<a class="sticky-logo" href="' + Ha + '">' + dtLocal.themeSettings.topLine.floatingTopLine.logo.html + " </a>").prependTo(Ja)));
            var Ra = !1;
            (dtGlobals.resetTopLineSizes = function (b) {
                if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) return Ra || ((Ra = !0), N.removeClass("sticky-top-line-on"), N.css({ top: "" }), (Ta = !1)), !1;
                Ra && (Ra = !1),
                    (Ka = a("#wpadminbar").exists() ? a("#wpadminbar").height() : 0),
                    (ga = !J.exists() || J.is(":hidden") || J.hasClass("top-bar-empty") || J.hasClass("hide-top-bar") ? 0 : J.innerHeight()),
                    (Sa = N.find(".header-bar").height() + ga),
                    a(".top-line-space").css({ height: Sa }),
                    a(".is-safari").length > 0 && (y.hasClass("boxed") ? N.css({ width: y.width(), "max-width": y.width() }) : N.css({ width: document.documentElement.clientWidth, "max-width": document.documentElement.clientWidth }));
            }),
                dtGlobals.resetTopLineSizes(O.height()),
                v.on("resize debouncedresize", function () {
                    dtGlobals.resetTopLineSizes(O.height());
                }),
                v.on("scroll", function () {
                    if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) return !1;
                    var a = dtGlobals.winScrollTop,
                        b = N.height(),
                        c = a > b;
                    c && !Ta
                        ? (N.removeClass("sticky-top-line-off").addClass("sticky-top-line-on"), N.hasClass("mixed-floating-top-bar") ? N.css({ top: Ka }) : N.css({ top: Ka - ga }), (Ta = !0))
                        : !c && Ta && (N.removeClass("sticky-top-line-on").addClass("sticky-top-line-off"), N.css({ top: Ka }), (Ta = !1));
                });
        }
        if (dtLocal.themeSettings.floatingHeader.showMenu && dtLocal.themeSettings.floatingHeader.showMenu && !Ga) {
            var Ua = a(".phantom-fade").exists(),
                Va = a(".phantom-slide").exists(),
                Wa = a(".split-header").exists();
            if (Ua || Va) {
                var Xa = a(".masthead:not(#phantom) .main-nav").clone(!0).removeAttr("id"),
                    Ha = a(".branding a", K).attr("href"),
                    Ya = x.hasClass("floating-top-bar") ? a(".masthead:not(#phantom) .top-bar").clone(!0) : "",
                    Za = !1;
                if (Wa) {
                    var $a = K.attr("class"),
                        _a = a(".side-header-h-stroke, .split-header"),
                        ab = a('<div id="phantom" class="' + $a + '"><div class="ph-wrap"></div></div>').appendTo("body"),
                        bb = ab.find(".ph-wrap"),
                        cb = ab.find(".widget-box"),
                        db = Xa.find(".mini-widgets"),
                        eb = _a.find(".branding");
                    a(".phantom-custom-logo-on").length > 0 &&
                        dtLocal.themeSettings.floatingHeader.logo.html &&
                        dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                        (void 0 == Ha ? a(dtLocal.themeSettings.floatingHeader.logo.html).prependTo(eb) : a('<a class="phantom-top-line-logo" href="' + Ha + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>").prependTo(eb));
                    var Xa = a(".split-header .header-bar").clone(!0);
                    Xa.appendTo(bb).find(".main-nav").removeAttr("id"), x.hasClass("floating-top-bar") && Ya.insertBefore(bb);
                } else {
                    var $a = K.attr("class"),
                        ab = a('<div id="phantom" class="' + $a + '"><div class="ph-wrap"><div class="logo-box"></div><div class="menu-box"></div><div class="widget-box"></div></div></div>').appendTo("body"),
                        bb = ab.find(".menu-box"),
                        cb = ab.find(".widget-box");
                    if (a(".classic-header").length > 0) var db = a(".header-bar .navigation .mini-widgets").clone(!0);
                    else if (Wa);
                    else var db = a(".header-bar .mini-widgets").clone(!0);
                    Xa.appendTo(bb),
                        db.appendTo(cb),
                        x.hasClass("floating-top-bar") && Ya.prependTo(ab),
                        dtLocal.themeSettings.floatingHeader.logo.html &&
                            dtLocal.themeSettings.floatingHeader.logo.showLogo &&
                            (ab.find(".ph-wrap").addClass("with-logo"),
                            void 0 == Ha
                                ? ab.find(".logo-box").html('<a href="' + dtLocal.themeSettings.floatingHeader.logo.url + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>")
                                : ab.find(".logo-box").html('<a href="' + Ha + '">' + dtLocal.themeSettings.floatingHeader.logo.html + " </a>"));
                }
                var fb = a("#phantom");
                y.hasClass("boxed") && ab.addClass("boxed").find(".ph-wrap").addClass("boxed");
                var gb;
                fb.removeClass("show-phantom").addClass("hide-phantom").css("visibility", "hidden"),
                    dtGlobals.addOnloadEvent(function () {
                        clearTimeout(gb),
                            (gb = setTimeout(function () {
                                fb.css("visibility", "");
                            }, 150));
                    }),
                    bb.layzrInitialisation();
                var hb = !1,
                    ib = dtGlobals.winScrollTop,
                    Aa = O.height(),
                    jb = K.height();
                if (va && Q);
                else if (va);
                else {
                    dtLocal.themeSettings.floatingHeader.showAfter;
                }
                v.on("scroll", function () {
                    if (window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) return !1;
                    var a = dtGlobals.winScrollTop,
                        b = O.height(),
                        c = K.height();
                    if (va && Q)
                        var d = a > b && !1 === Za,
                            e = a <= b && !0 === Za;
                    else if (va)
                        var d = a > b + c && !1 === Za,
                            e = a <= b + c && !0 === Za;
                    else
                        var d = a > dtLocal.themeSettings.floatingHeader.showAfter && !1 === Za,
                            e = a <= dtLocal.themeSettings.floatingHeader.showAfter && !0 === Za;
                    d
                        ? w.hasClass("menu-open") || dtGlobals.isHovering || hb || ((hb = !0), fb.removeClass("hide-phantom").addClass("show-phantom"), (Za = !0))
                        : e && hb && (w.hasClass("menu-open") || ((hb = !1), fb.removeClass("show-phantom").addClass("hide-phantom"), (Za = !1)));
                });
            }
        }
        var kb = a(".main-nav li.has-children > a:not(.not-clickable-item), .level-arrows-on > li.has-children > a, .mobile-main-nav li.has-children > a");
        a("<i class='next-level-button'></i>").insertAfter(kb),
            a(".sub-downwards .main-nav li.has-children, .mobile-main-nav li.has-children").each(function () {
                var b = a(this),
                    c = b.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                b.find(".sub-nav li, .sub-menu li, .vertical-sub-nav li").hasClass("act") && b.addClass("active"),
                    b.find(".sub-nav li.act, .sub-menu li.act").hasClass("act") && (b.addClass("open-sub"), c.stop(!0, !0).slideDown(100), c.layzrInitialisation()),
                    b.find(".vertical-sub-nav li.act").hasClass("act") && (b.addClass("open-sub"), c.stop(!0, !0).slideDown({ start: function () {} }, 100), c.layzrInitialisation()),
                    b.find(" > .next-level-button").on("click", function (b) {
                        var d = a(this).parent();
                        d.hasClass("active")
                            ? (c.stop(!0, !0).slideUp(500, function () {
                                  a(" .main-nav").layzrInitialisation();
                              }),
                              d.removeClass("active"),
                              d.removeClass("open-sub"),
                              d.find("a").removeClass("act"))
                            : (d.siblings().find(" .sub-nav, .dt-mega-menu-wrap, .sub-menu").stop(!0, !0).slideUp(400),
                              c.stop(!0, !0).slideDown(500),
                              d.siblings().removeClass("active"),
                              d.addClass("active"),
                              d.siblings().removeClass("open-sub"),
                              d.addClass("open-sub"),
                              d.siblings().find("> a").removeClass("act"),
                              d.find("a").addClass("act"),
                              a(" .main-nav").layzrInitialisation());
                    });
            }),
            a(".dt-sub-menu-display-on_click, .dt-sub-menu-display-on_item_click").css("visibility", "visible"),
            a(".dt-nav-menu").each(function () {
                a(this).find(" li.act:last > a").addClass("active-item"), a(this).find(".vertical-sub-nav").length <= 0 && a(this).parent().addClass("indicator-off");
            }),
            !a(".elementor-editor-active").length > 0 &&
                ((a.fn.the7ElementorMenu = function () {
                    var b = a(this);
                    if (b.length) {
                        var c = b.find("> a");
                        ($this_sub = b.find(" > .dt-mega-menu-wrap > .vertical-sub-nav")), $this_sub.unwrap();
                        var d = b.find(" > .vertical-sub-nav");
                        if (
                            (b.hasClass("act") && (b.addClass("open-sub"), b.find("> a").addClass("active")),
                            b.find(".vertical-sub-nav li").hasClass("act") &&
                                (b.addClass("open-sub"),
                                c.addClass("active"),
                                d
                                    .css("opacity", "0")
                                    .stop(!0, !0)
                                    .slideDown({ start: function () {} }, 250)
                                    .animate({ opacity: 1 }, { queue: !1, duration: 150 }),
                                d.layzrInitialisation()),
                            c.hasClass("not-clickable-item") && b.parents("nav").hasClass("dt-sub-menu-display-on_item_click"))
                        )
                            var e = c;
                        else var e = c.find(" > .next-level-button");
                        e.on("click", function (b) {
                            if ((b.stop, c.hasClass("not-clickable-item") && c.parents("nav").hasClass("dt-sub-menu-display-on_item_click"))) var e = a(this);
                            else var e = a(this).parent();
                            if (((b = window.event || b), !a(b.target).parent().hasClass("next-level-button") && c.parents("nav").hasClass("dt-sub-menu-display-on_click"))) return !0;
                            b.stopPropagation(),
                                b.preventDefault(),
                                e.hasClass("active")
                                    ? (d
                                          .css("opacity", "0")
                                          .stop(!0, !0)
                                          .slideUp(250, function () {
                                              a(" .dt-nav-menu").layzrInitialisation(), d.find("li").removeClass("open-sub"), d.find("a").removeClass("active");
                                          }),
                                      e.removeClass("active"),
                                      e.parent().removeClass("open-sub"))
                                    : (e.parent().siblings().find(" .vertical-sub-nav").css("opacity", "0").stop(!0, !0).slideUp(250),
                                      d
                                          .css("opacity", "0")
                                          .stop(!0, !0)
                                          .slideDown({ start: function () {} }, 250)
                                          .animate({ opacity: 1 }, { queue: !1, duration: 150 }),
                                      e.siblings().removeClass("active"),
                                      e.addClass("active"),
                                      e.parent().siblings().removeClass("open-sub"),
                                      e.parent().siblings().find("a").removeClass("active"),
                                      e.parent().addClass("open-sub"),
                                      a(" .dt-nav-menu").layzrInitialisation());
                        });
                    }
                }),
                a(".dt-sub-menu-display-on_click li.has-children, .dt-sub-menu-display-on_item_click li.has-children").each(function () {
                    a(this).the7ElementorMenu();
                })),
            !a(".dt-parent-menu-clickable").length > 0 &&
                a(".sub-downwards .main-nav li > a, .mobile-main-nav li.has-children > a").each(function () {
                    var b = a(this);
                    b.parent("li").find(".sub-nav li, .sub-menu li").hasClass("act") && b.addClass("act"),
                        b.parent("li").find(".sub-nav li.act, .sub-menu li.act").hasClass("act") &&
                            (b.parent("li").addClass("open-sub"),
                            b
                                .siblings(".sub-nav, .sub-menu")
                                .stop(!0, !0)
                                .slideDown(100, function () {
                                    b.siblings(".sub-nav, .sub-menu").layzrInitialisation();
                                })),
                        b.on("click", function (c) {
                            ($menuItem = b.parent()),
                                $menuItem.hasClass("has-children menu-item-language") && c.preventDefault(),
                                b.hasClass("act")
                                    ? (b.siblings(".sub-nav, .sub-menu").stop(!0, !0).slideUp(500), b.removeClass("act"), b.parent("li").removeClass("open-sub"))
                                    : (b.parent().siblings().find(".sub-nav, .dt-mega-menu-wrap, .sub-menu").stop(!0, !0).slideUp(400),
                                      b.siblings(".sub-nav, .sub-menu").stop(!0, !0).slideDown(500),
                                      b.parent().siblings().find("> a").removeClass("act"),
                                      b.addClass("act"),
                                      b.parent("li").siblings().removeClass("open-sub active"),
                                      b.parent("li").addClass("open-sub active")),
                                "function" == typeof a.fn.mCustomScrollbar && a(".header-bar").mCustomScrollbar("update");
                        });
                }),
            a(".custom-nav > li > a").click(function (b) {
                var c = a(this).parent(),
                    d = a(this);
                c.hasClass("has-children") && b.preventDefault(),
                    d.hasClass("active")
                        ? (d.next().stop(!0).slideUp(500), d.removeClass("active"))
                        : (a(".custom-nav > li > ul").stop(!0).slideUp(400), d.next().stop(!0).slideDown(500), a(".custom-nav > li > a").removeClass("active"), d.addClass("active")),
                    c.siblings().removeClass("act"),
                    c.addClass("act");
            }),
            a(".custom-nav > li > ul").each(function () {
                clearTimeout(void 0),
                    ($this = a(this)),
                    ($thisChildren = $this.find("li")),
                    $thisChildren.hasClass("act") && ($this.prev().addClass("active"), $this.parent().siblings().removeClass("act"), $this.parent().addClass("act"), $this.slideDown(500));
            }),
            (window.the7ApplyGeneralFilterHandlers = function (b) {
                b.exists() &&
                    b.find("> a").on("click", function (b) {
                        var c = a(this);
                        if (void 0 === arguments.callee.dtPreventD) {
                            var d = c.parents(".filter").first();
                            (arguments.callee.dtPreventD = !0), d.hasClass("without-isotope") && (arguments.callee.dtPreventD = d.hasClass("with-ajax"));
                        }
                        b.preventDefault(),
                            c.trigger("mouseleave"),
                            c.hasClass("act") && !c.hasClass("show-all")
                                ? (b.stopImmediatePropagation(), c.removeClass("act"), c.siblings("a.show-all").trigger("click"))
                                : (c.siblings().removeClass("act"), c.addClass("act"), arguments.callee.dtPreventD || (window.location.href = c.attr("href")));
                    });
            }),
            (window.the7ApplyGeneralOrderingSwitchHandlers = function (a) {
                if (a.exists()) {
                    a.prev(".act").length > 0 ? a.addClass("left-act") : a.next(".act").length > 0 ? a.addClass("right-act") : (a.removeClass("right-act"), a.removeClass("left-act"));
                    var b = a.parents(".filter").first();
                    a.on("click", function () {
                        b.hasClass("without-isotope")
                            ? a.hasClass("right-act")
                                ? a.prev("a")[0].click()
                                : a.hasClass("left-act") && a.next("a")[0].click()
                            : a.hasClass("right-act")
                            ? a.prev("a").trigger("click")
                            : a.hasClass("left-act") && a.next("a").trigger("click");
                    });
                }
            }),
            (window.the7ApplyGeneralOrderingSwitchEffects = function (b) {
                if (b.exists()) {
                    var c = a(".filter-switch", b);
                    c.append("<span class='filter-switch-toggle'></span>"),
                        c.each(function () {
                            the7ApplyGeneralOrderingSwitchHandlers(a(this));
                        }),
                        a(".filter-switch .filter-switch-toggle", b).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (b) {
                            a(this).parent().removeClass("pressed");
                        }),
                        a(".filter-extras a", b).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (b) {
                            a(this).removeClass("pressed");
                        }),
                        Modernizr.touch
                            ? (c.on("touchstart", function (b) {
                                  a(".filter-switch").removeClass("pressed"), a(this).addClass("pressed");
                              }),
                              a(".filter-extras a", b).on("touchstart", function (b) {
                                  a(".filter-extras").removeClass("pressed"), a(this).parent(".filter-extras").addClass("pressed");
                              }))
                            : (c.on("mousedown", function (b) {
                                  a(".filter-switch").removeClass("pressed"),
                                      a(this).addClass("pressed"),
                                      setTimeout(function () {
                                          a(this).removeClass("pressed");
                                      }, 600);
                              }),
                              a(".filter-extras a", b).each(function () {
                                  a(this).on("mousedown", function (b) {
                                      a(".filter-extras").removeClass("pressed"),
                                          a(this).addClass("pressed"),
                                          setTimeout(function () {
                                              a(this).removeClass("pressed");
                                          }, 600);
                                  });
                              })),
                        a(".filter-extras a", b).on("click", function (b) {
                            var d = a(this);
                            if (void 0 === arguments.callee.dtPreventD) {
                                var e = d.parents(".filter").first();
                                (arguments.callee.dtPreventD = !0), e.hasClass("without-isotope") && (arguments.callee.dtPreventD = e.hasClass("with-ajax"));
                            }
                            arguments.callee.dtPreventD && b.preventDefault(),
                                d.siblings().removeClass("act"),
                                d.addClass("act"),
                                c.each(function () {
                                    var b = a(this);
                                    b.prev(d).hasClass("act")
                                        ? (b.addClass("left-act"), b.removeClass("right-act"))
                                        : b.next(d).hasClass("act")
                                        ? (b.addClass("right-act"), b.removeClass("left-act"))
                                        : (b.removeClass("right-act"), b.removeClass("left-act"));
                                });
                        });
                }
            }),
            a(".filter-categories").each(function () {
                the7ApplyGeneralFilterHandlers(a(this));
            }),
            a(".filter").each(function () {
                the7ApplyGeneralOrderingSwitchEffects(a(this));
            }),
            a(".mode-list .filter-categories > a:not(.show-all), .dt-css-grid-wrap .filter-categories > a:not(.show-all)").each(function () {
                ($this = a(this)), ($dataFiltr = $this.attr("data-filter")), ($newDataFilter = $dataFiltr.substring(1, $dataFiltr.length)), $this.attr("data-filter", $newDataFilter), $this.parents().removeClass("iso-filter");
            }),
            (window.the7ShortcodesFilterConfig = function (a) {
                var b = {},
                    c = a;
                return (
                    a.hasClass("dt-css-grid") && (c = a.parent()),
                    (b.filterControls = c.find(".filter-categories")),
                    (b.pageControls = c.find(".paginator")),
                    (b.sortControls = c.find(".filter-by")),
                    (b.orderControls = c.find(".filter-sorting")),
                    (b.defaultSort = c.find(".filter-by .act").attr("data-by")),
                    (b.defaultOrder = c.find(".filter-sorting .act").attr("data-sort")),
                    (b.paginationMode = c.attr("data-pagination-mode")),
                    (b.pageLimit = c.attr("data-post-limit")),
                    (b.useFilters = !0),
                    (b.useSorting = !0),
                    (b.controlsSelecter = "a"),
                    (b.controlsSelecterChecked = "a.act"),
                    (b.defaultFilter = "*"),
                    (b.selectAll = "*"),
                    (b.loadMoreButtonLabel = dtLocal.moreButtonText.loadMore),
                    (b.customSorters = {
                        name: function (a, b) {
                            return window.the7LocaleSensitiveStringsCompare(a.name.toLowerCase(), b.name.toLowerCase());
                        },
                    }),
                    b
                );
            }),
            (a.fn.shortcodesFilter = function (b) {
                function c() {
                    if ((d.hasClass("dt-css-grid") ? ($element = d.parent()) : ($element = d), $element.length && $element.hasClass("lazy-loading-mode"))) {
                        var a = $element.find(".button-load-more"),
                            b = a.offset();
                        b && v.scrollTop() + v.height() > b.top - 2 * v.height() && a.trigger("click");
                    }
                }
                var d = a(this);
                d.Filterade(b),
                    d.on("updateReady", function () {
                        p(), d.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient();
                    }),
                    v.on("scroll", function () {
                        c();
                    }),
                    c();
            }),
            a(".blog-shortcode.mode-list.jquery-filter, .jquery-filter .dt-css-grid:not(.custom-pagination-handler)").each(function () {
                var b = a(this);
                b.shortcodesFilter(the7ShortcodesFilterConfig(b));
            }),
            (window.the7ApplyMasonryWidgetCSSGridFiltering = function (a) {
                var b;
                a &&
                    a.length &&
                    ((b = the7ShortcodesFilterConfig(a)),
                    (b.pagerClass = "page-numbers filter-item"),
                    (b.previousButtonLabel = '<i class="dt-icon-the7-arrow-35-1" aria-hidden="true"></i>'),
                    (b.nextButtonLabel = '<i class="dt-icon-the7-arrow-35-2" aria-hidden="true"></i>'),
                    a.shortcodesFilter(b));
            }),
            (a.HoverDir = function (b, c) {
                (this.$el = a(c)), this._init(b);
            }),
            (a.HoverDir.defaults = { speed: 300, easing: "ease", hoverDelay: 0, inverse: !1 }),
            (a.HoverDir.prototype = {
                _init: function (b) {
                    (this.options = a.extend(!0, {}, a.HoverDir.defaults, b)), (this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing), (this.support = Modernizr.csstransitions), this._loadEvents();
                },
                _loadEvents: function () {
                    var b = this;
                    this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function (c) {
                        var d = a(this),
                            e = d.find(".rollover-content, .gallery-rollover, .post-entry-content"),
                            f = b._getDir(d, { x: c.pageX, y: c.pageY }),
                            g = b._getStyle(f);
                        "mouseenter" === c.type
                            ? (e.hide().css(g.from),
                              clearTimeout(b.tmhover),
                              (b.tmhover = setTimeout(function () {
                                  e.show(0, function () {
                                      var c = a(this);
                                      b.support && c.css("transition", b.transitionProp), b._applyAnimation(c, g.to, b.options.speed);
                                  });
                              }, b.options.hoverDelay)))
                            : (b.support && e.css("transition", b.transitionProp), clearTimeout(b.tmhover), b._applyAnimation(e, g.from, b.options.speed));
                    });
                },
                _getDir: function (a, b) {
                    var c = a.width(),
                        d = a.height(),
                        e = (b.x - a.offset().left - c / 2) * (c > d ? d / c : 1),
                        f = (b.y - a.offset().top - d / 2) * (d > c ? c / d : 1);
                    return Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4;
                },
                _getStyle: function (a) {
                    var b,
                        c,
                        d = { left: "0px", top: "-100%" },
                        e = { left: "0px", top: "100%" },
                        f = { left: "-100%", top: "0px" },
                        g = { left: "100%", top: "0px" },
                        h = { top: "0px" },
                        i = { left: "0px" };
                    switch (a) {
                        case 0:
                            (b = this.options.inverse ? e : d), (c = h);
                            break;
                        case 1:
                            (b = this.options.inverse ? f : g), (c = i);
                            break;
                        case 2:
                            (b = this.options.inverse ? d : e), (c = h);
                            break;
                        case 3:
                            (b = this.options.inverse ? g : f), (c = i);
                    }
                    return { from: b, to: c };
                },
                _applyAnimation: function (b, c, d) {
                    (a.fn.applyStyle = this.support ? a.fn.css : a.fn.animate), b.stop().applyStyle(c, a.extend(!0, [], { duration: d + "ms" }));
                },
            });
        var lb = function (a) {
            window.console && window.console.error(a);
        };
        (a.fn.hoverdir = function (b) {
            var c = a.data(this, "hoverdir");
            if ("string" == typeof b) {
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    return c
                        ? the7Utils.isFunction(c[b]) && "_" !== b.charAt(0)
                            ? void c[b].apply(c, d)
                            : void lb("no such method '" + b + "' for hoverdir instance")
                        : void lb("cannot call methods on hoverdir prior to initialization; attempted to call method '" + b + "'");
                });
            } else
                this.each(function () {
                    c ? c._init() : (c = a.data(this, "hoverdir", new a.HoverDir(b, this)));
                });
            return c;
        }),
            (a.fn.addRollover = function () {
                return this.each(function () {
                    var b = a(this);
                    b.hasClass("this-ready") ||
                        (b.append("<i></i>"), b.find(".rollover-thumbnails").length && b.addClass("rollover-thumbnails-on"), b.parent().find(".links-container").length && b.addClass("rollover-buttons-on"), b.addClass("this-ready"));
                });
            }),
            (a.fn.scaleInHover = function () {
                return this.each(function () {
                    var b = a(this);
                    if (!b.hasClass("scale-ready")) {
                        var c = b.find("img.preload-me"),
                            d = parseInt(c.attr("width")),
                            e = parseInt(c.attr("height")),
                            f = d / e;
                        f < 2 && f >= 1.5
                            ? b.addClass("ratio_3-2")
                            : f < 1.5 && f >= 1
                            ? b.addClass("ratio_4-3")
                            : f < 1 && f >= 0.75
                            ? b.addClass("ratio_3-4")
                            : f < 0.75 && f >= 0.6
                            ? b.addClass("ratio_2-3")
                            : b.removeClass("ratio_2-3").removeClass("ratio_3-2").removeClass("ratio-2").removeClass("ratio_4-3").removeClass("ratio_3-4"),
                            f >= 2 && b.addClass("ratio-2"),
                            0.5 == f && b.addClass("ratio_0-5"),
                            1 == f && b.removeClass("ratio_2-3").removeClass("ratio-2").removeClass("ratio_3-2").removeClass("ratio_4-3").removeClass("ratio_3-4"),
                            b.addClass("scale-ready");
                    }
                });
            }),
            (a.fn.touchNewHover = function () {
                return this.each(function () {
                    var b = a(this);
                    b.hasClass("this-ready") ||
                        (a(".rollover-content", this).length > 0 &&
                            (x.on("touchend", function (b) {
                                a(".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-project").removeClass("is-clicked");
                            }),
                            b.on("touchstart", function (a) {
                                (origY = a.originalEvent.touches[0].pageY), (origX = a.originalEvent.touches[0].pageX);
                            }),
                            b.on("touchend", function (c) {
                                var d = c.originalEvent.changedTouches[0].pageX,
                                    e = c.originalEvent.changedTouches[0].pageY;
                                if (origY == e || origX == d) {
                                    if (!b.hasClass("is-clicked"))
                                        return (
                                            a(".links-container > a", b).on("touchend", function (a) {
                                                a.stopPropagation(), b.addClass("is-clicked");
                                            }),
                                            c.preventDefault(),
                                            a(".mobile-true .rollover-content, .mobile-true .rollover-project,.mobile-true .woocom-project").removeClass("is-clicked"),
                                            b.addClass("is-clicked"),
                                            b.find(".rollover-content").addClass("is-clicked"),
                                            !1
                                        );
                                    if (
                                        (b.find(".dt-gallery-container").length > 0 &&
                                            b.find(".rollover-content").on("click.dtAlbums", function (c) {
                                                b.find(".rollover-content").off("click.dtAlbums"), a(this).find("a.dt-gallery-pspw, .dt-trigger-first-pspw, .dt-pswp-item").first().trigger("click");
                                            }),
                                        a(this).find(".rollover-click-target.go-to").length > 0)
                                    )
                                        window.location.href = a(this).find(".rollover-click-target.go-to").attr("href");
                                    else if (a(this).hasClass("woocom-project")) {
                                        if (a(c.target).is(".add_to_cart_button")) return !0;
                                        window.location.href = a(this).find(" > a").attr("href");
                                    }
                                }
                            })),
                        b.addClass("this-ready"));
                });
            }),
            (a.fn.triggerPostClick = function () {
                return this.each(function () {
                    var b = a(this);
                    if (!b.hasClass("post-ready")) {
                        var c = b.find(".post-thumbnail-rollover").first(),
                            d = b.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                        if (c.length > 0) {
                            c.on("click", function (a) {
                                a.preventDefault(), a.stopPropagation(), c.parents(".ts-wrap").hasClass("ts-interceptClicks");
                            });
                            var e = !1;
                            b.on("click", function () {
                                if (!b.parents(".ts-wrap").hasClass("ts-interceptClicks")) return e || ((e = !0), (window.location.href = c.attr("href")), (e = !1)), !1;
                            }),
                                b.find(d).click(function (a) {
                                    a.stopPropagation(), (window.location.href = d.attr("href"));
                                });
                        }
                        b.addClass("post-ready");
                    }
                });
            }),
            (a.fn.touchTriggerPostClick = function () {
                return this.each(function () {
                    var b = a(this);
                    if (!b.hasClass("touch-post-ready")) {
                        var c = b.find(".post-thumbnail-rollover").first();
                        b.find(".entry-meta a, .fancy-date a, .fancy-categories a"), b.find(".entry-excerpt").height(), b.find(".post-details").height();
                        x.on("touchend", function (b) {
                            a(".mobile-true .post").removeClass("is-clicked");
                        }),
                            b.on("touchstart", function (a) {
                                (origY = a.originalEvent.touches[0].pageY), (origX = a.originalEvent.touches[0].pageX);
                            }),
                            b.on("touchend", function (d) {
                                var e = d.originalEvent.changedTouches[0].pageX,
                                    f = d.originalEvent.changedTouches[0].pageY;
                                if (origY == f || origX == e)
                                    if (b.parents().hasClass("disable-layout-hover")) "a" === d.target.tagName.toLowerCase() ? a(d.target).trigger("click") : (window.location.href = c.attr("href"));
                                    else {
                                        if (!b.hasClass("is-clicked"))
                                            return (
                                                d.preventDefault(),
                                                "a" === d.target.tagName.toLowerCase() && a(d.target).trigger("click"),
                                                a(".mobile-ture .post").removeClass("is-clicked"),
                                                b.addClass("is-clicked"),
                                                b.parent().siblings().find(".post").removeClass("is-clicked"),
                                                !1
                                            );
                                        window.location.href = c.attr("href");
                                    }
                            }),
                            b.addClass("touch-post-ready");
                    }
                });
            }),
            (a.fn.triggerPostClickOnBefore = function () {
                return this.each(function () {
                    var b = a(this),
                        c = b.parents(".post");
                    if (!b.hasClass("post-before-ready")) {
                        var d = c.find(".post-thumbnail-rollover").first(),
                            e = c.find(".entry-meta a, .fancy-date a, .fancy-categories a");
                        if (d.length > 0) {
                            d.on("click", function (a) {
                                d.parents(".ts-wrap").hasClass("ts-interceptClicks");
                            });
                            var f = !1;
                            b.on("mouseenter mousemove", function (a) {
                                var d = b.offset().top,
                                    e = a.pageY;
                                d - 10 <= e && d + 125 >= e ? c.hasClass("on-hover") || c.addClass("on-hover") : c.removeClass("on-hover");
                            }),
                                b.on("mouseleave", function (a) {
                                    b.offset().top, a.pageY;
                                    c.removeClass("on-hover");
                                }),
                                b.on("click", function () {
                                    if (c.hasClass("on-hover")) return f || ((f = !0), (window.location.href = d.attr("href")), (f = !1)), !1;
                                }),
                                b.find(e).click(function (a) {
                                    c.hasClass("on-hover") && (a.stopPropagation(), (window.location.href = e.attr("href")));
                                });
                        }
                        b.addClass("post-before-ready");
                    }
                });
            }),
            (a.fn.forwardToPost = function () {
                return this.each(function () {
                    var b = a(this);
                    b.hasClass("this-ready") ||
                        (b.on("click tap", function () {
                            var b = a(this),
                                c = b.find("a").first(),
                                d = c.attr("href");
                            if (!b.parents(".ts-wrap").hasClass("ts-interceptClicks")) return "_blank" === c.attr("target") ? (window.open(d, "_blank"), !1) : ((window.location.href = d), !1);
                        }),
                        b.addClass("this-ready"));
                });
            }),
            (window.the7AddHovers = function (b) {
                a(".rollover, .rollover-video, .post-rollover, .rollover-project .show-content, .vc-item .vc-inner > a", b).addRollover(),
                    a(".filter-grayscale .slider-masonry", b).on("mouseenter tap", function (b) {
                        "tap" == b.type && b.stopPropagation(), a(this).addClass("dt-hovered");
                    }),
                    a(".filter-grayscale .slider-masonry", b).on("mouseleave", function (b) {
                        a(this).removeClass("dt-hovered");
                    }),
                    a(".hover-scale .rollover-project, .hover-scale .post", b).scaleInHover();
            }),
            (window.the7AddMobileHovers = function (b) {
                a(".rollover-project, .woocom-project", b).touchNewHover(),
                    a(".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post", b).touchTriggerPostClick();
            }),
            (window.the7AddDesktopHovers = function (b) {
                a(".hover-grid.gallery-shortcode figure, .hover-grid .rollover-project, .hover-grid.portfolio-shortcode .post", b).each(function () {
                    a(this).hoverdir();
                }),
                    a(".hover-grid-reverse.gallery-shortcode figure, .hover-grid-reverse .rollover-project, .hover-grid-reverse.portfolio-shortcode .post", b).each(function () {
                        a(this).hoverdir({ inverse: !0 });
                    }),
                    a(".albums .rollover-content a:not(.portfolio-categories a), .media .rollover-content, .dt-gallery-container .rollover-content", b).on("click", function (b) {
                        if (a(b.target).is("a")) return !0;
                        a(this).siblings("a.dt-pswp-item").first().click();
                    }),
                    a(".content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post", b).triggerPostClick(),
                    a(".gradient-overlap-layout-list:not(.portfolio-shortcode):not(.albums-shortcode)  .post-entry-content", b).triggerPostClickOnBefore(),
                    a(".the7-elementor-widget .forward-post", b).forwardToPost();
            }),
            the7AddMobileHovers(a("html.mobile-true")),
            the7AddDesktopHovers(a("html.mobile-false")),
            the7AddHovers(document);
        var mb = a("#commentform");
        mb.on("click", "a.clear-form", function (a) {
            return a.preventDefault(), mb.find('input[type="text"], textarea').val(""), !1;
        }),
            mb.on("click", " a.dt-btn.dt-btn-m", function (a) {
                return a.preventDefault(), mb.find("#submit").trigger("click"), !1;
            }),
            a(".full-width-wrap").length > 0 &&
                (dtGlobals.isiOS
                    ? v
                          .bind("orientationchange", function () {
                              k();
                          })
                          .trigger("orientationchange")
                    : (v.on("resize", function () {
                          k();
                      }),
                      k())),
            v.trigger("dt.removeLoading");
        var nb = a("#main-slideshow");
        !nb.find("> div").length > 0 && nb.addClass("empty-slider"),
            nb.is(":parent") || nb.siblings(".masthead").addClass("no-slider"),
            a(".rev_slider_wrapper").length > 0 &&
                (nb.find("> .rev_slider_wrapper") && nb.addClass("fix rv-slider"), (a(".rev_slider_wrapper").hasClass("fullscreen-container") || a(".rev_slider_wrapper").hasClass("fullwidthbanner-container")) && nb.removeClass("fix"));
        var ob = a(".masthead, .dt-mobile-header"),
            pb = a(".popup-search", ob);
        if (
            (pb.length > 0 &&
                (x.on("click", function (b) {
                    a(b.target).is(".field", pb) ||
                        (a(".searchform .submit", ob).removeClass("act"),
                        pb.removeClass("act"),
                        a(".popup-search-wrap", pb)
                            .stop()
                            .animate({ opacity: 0 }, 150, function () {
                                a(this).css("visibility", "hidden");
                            }),
                        setTimeout(function () {
                            a(".popup-search-wrap", pb).removeClass("right-overflow bottom-overflow left-overflow").css({ right: "", left: "", "max-width": "" });
                        }, 400));
                }),
                a(".searchform .submit", ob).on("click", function (b) {
                    b.preventDefault(), b.stopPropagation();
                    var c = a(this);
                    c.hasClass("act")
                        ? (c.removeClass("act"),
                          c.parents(".mini-search").removeClass("act"),
                          c
                              .siblings(".popup-search-wrap")
                              .stop()
                              .animate({ opacity: 0 }, 150, function () {
                                  a(this).css("visibility", "hidden");
                              }),
                          setTimeout(function () {
                              c.siblings(".popup-search-wrap").removeClass("right-overflow bottom-overflow left-overflow").css({ right: "", left: "", "max-width": "" });
                          }, 400))
                        : (c.addClass("act"),
                          c.parents(".mini-search").addClass("act"),
                          c.parents(".dt-mobile-header").length > 0 && c.siblings(".popup-search-wrap").css({ top: c.parents(".mini-search").position().top - c.siblings(".popup-search-wrap").innerHeight() }),
                          c.parents(".searchform").offset().left - c.siblings(".popup-search-wrap").innerWidth() < 0 && c.siblings(".popup-search-wrap").addClass("left-overflow"),
                          y.width() - (c.parents(".searchform").offset().left - y.offset().left) - c.siblings(".popup-search-wrap").innerWidth() < 0 &&
                              (c.siblings(".popup-search-wrap").addClass("right-overflow"), c.siblings(".popup-search-wrap").removeClass("left-overflow")),
                          y.width() - (c.parents(".searchform").offset().left - y.offset().left) - c.siblings(".popup-search-wrap").innerWidth() < 0 &&
                              c.parents(".searchform").offset().left - c.siblings(".popup-search-wrap").innerWidth() < 0 &&
                              c.siblings(".popup-search-wrap").css({ "max-width": c.parents(".searchform").offset().left }),
                          v.height() - (c.siblings(".popup-search-wrap").offset().top - dtGlobals.winScrollTop) - c.siblings(".popup-search-wrap").innerHeight() < 0 && c.siblings(".popup-search-wrap").addClass("bottom-overflow"),
                          c.siblings(".popup-search-wrap").stop().css("visibility", "visible").animate({ opacity: 1 }, 150),
                          c.siblings(".popup-search-wrap").find("input.searchform-s").focus());
                })),
            a(".overlay-search").length > 0)
        ) {
            var qb = a(".overlay-search .searchform").first(),
                rb = qb.clone();
            a("body").append("<div class='overlay-search-microwidget'><i class='overlay-close icomoon-the7-font-the7-cross-01'></i></div>");
            var sb = a(".overlay-search-microwidget");
            sb.append(rb),
                a(".overlay-search").hasClass("default-icon") && sb.addClass("default-icon"),
                a(".mini-search .submit").on("click", function (b) {
                    b.preventDefault(), sb.addClass("open"), a("#page").addClass("overlay-open"), sb.find("input.searchform-s").focus();
                }),
                a(".overlay-close", sb).on("click", function () {
                    a("#page").removeClass("overlay-open"), a(this).parent(sb).removeClass("open");
                });
        }
        if (
            (a(".twentytwenty-container .preload-me").loaded(
                null,
                function () {
                    a(".twentytwenty-container").each(function () {
                        var b = a(this),
                            c = b.attr("data-orientation").length > 0 ? b.attr("data-orientation") : "horizontal",
                            d = void 0 !== b.attr("data-offset") && b.attr("data-offset").length > 0 ? b.attr("data-offset") : 0.5,
                            e = !!b.attr("data-navigation");
                        b.twentytwenty({ default_offset_pct: d, orientation: c, navigation_follow: e });
                    });
                },
                !0
            ),
            a(".wpb_tabs .iso-container").length > 0)
        ) {
            a(".wpb_tour_tabs_wrapper").each(function () {
                var b = a(this),
                    c = b.parents(".wpb_tabs").find(".iso-container");
                b.tabs({
                    activate: function (a, b) {
                        c.isotope("layout");
                    },
                }),
                    b.find("li").each(function () {
                        a(this).on("click", function () {
                            clearTimeout(void 0), v.trigger("debouncedresize"), a(this).parents(".wpb_tabs").find(".iso-container").isotope("layout");
                        });
                    });
            });
        }
        (a.fn.calcPics = function () {
            return (
                !(a(".instagram-photos").length < 1) &&
                this.each(function () {
                    var b = b || parseInt(a(this).attr("data-image-max-width"));
                    parseInt(a(this).find("> a").css("margin-left")), a(this).find(" > a").css({ "max-width": b, opacity: 1 });
                    var c = a(this),
                        d = c.width(),
                        e = 100 / Math.ceil(d / b);
                    c.find("a").css({ width: e + "%" });
                })
            );
        }),
            a(".instagram-photos").calcPics(),
            a(".st-accordion").each(function () {
                var b = a(this);
                b.find("ul > li > a").on("click", function (c) {
                    c.preventDefault();
                    var d = a(this),
                        e = d.next();
                    a(".st-content", b).not(e).slideUp("fast"), e.slideToggle("fast");
                });
            }),
            simple_tooltip(".shortcode-tooltip", "shortcode-tooltip-content"),
            a(".widget .searchform .submit, .search-icon, form.searchform:not(.mini-widget-searchform) .submit").on("click", function (b) {
                return b.preventDefault(), a(this).closest("form").find("input.searchsubmit").click(), !1;
            }),
            (a.fn.animateSkills = function () {
                a(".skill-value", this).each(function () {
                    var b = a(this),
                        c = b.data("width");
                    b.css({ width: c + "%" });
                });
            }),
            (function () {
                dtGlobals.isMobile && a(".skills").animateSkills();
            })();
        var tb, ub;
        a(".project-share-overlay.allways-visible-icons .share-button").on("click", function (a) {
            a.preventDefault();
        }),
            dtGlobals.addOnloadEvent(function () {
                l();
            });
        var vb,
            wb,
            xb = a(".floating-content");
        a(".project-post");
        m();
        var yb = a(".transparent #fancy-header").exists(),
            zb = a(".transparent .page-title").exists();
        a(".transparent .checkout-page-title").exists();
        a.fancyFeaderCalc = function () {
            a(".branding .preload-me").loaded(
                null,
                function () {
                    yb && a(".transparent #fancy-header").css({ "padding-top": a(".masthead:not(.side-header)").height() }),
                        zb && (a(".transparent .page-title").css({ "padding-top": a(".masthead:not(.side-header)").height() }), a(".transparent .page-title").css("visibility", "visible"));
                },
                !0
            );
        };
        var Ab = a('.paginator[role="navigation"]'),
            Bb = Ab.find("a.dots");
        Bb.on("click", function () {
            Ab.find("div:hidden").show().find("a").unwrap(), Bb.remove();
        }),
            a(".share-buttons a.pinit-marklet").click(function (b) {
                b.preventDefault(), a("#pinmarklet").remove();
                var c = document.createElement("script");
                c.setAttribute("type", "text/javascript"),
                    c.setAttribute("charset", "UTF-8"),
                    c.setAttribute("id", "pinmarklet"),
                    c.setAttribute("async", "async"),
                    c.setAttribute("defer", "defer"),
                    c.setAttribute("src", "//assets.pinterest.com/js/pinmarklet.js?r=" + 99999999 * Math.random()),
                    document.body.appendChild(c);
            }),
            v.on("debouncedresize", function () {
                (window.innerWidth > dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")) || x.hasClass("responsive-off")
                    ? a(".masthead:not(.side-header):not(.mixed-header)").length > 0
                        ? (dtGlobals.showTopBtn = a(".masthead:not(.side-header):not(.mixed-header)").height() + 150)
                        : a(".masthead.side-header-h-stroke").length > 0
                        ? (dtGlobals.showTopBtn = a(".side-header-h-stroke").height() + 150)
                        : (dtGlobals.showTopBtn = 500)
                    : (dtGlobals.showTopBtn = 500);
            }),
            v.scroll(function () {
                dtGlobals.winScrollTop > dtGlobals.showTopBtn ? a(".scroll-top").removeClass("off").addClass("on") : a(".scroll-top").removeClass("on").addClass("off");
            }),
            a(".scroll-top").click(function (b) {
                return b.preventDefault(), a("html, body").animate({ scrollTop: 0 }, "slow"), !1;
            });
        var Cb = a(".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout");
        !Cb.length && a("form.checkout").exists() && (Cb = a("form.checkout").parents(".content").offset().top),
            a(document.body).on("checkout_error", function () {
                a("html, body").animate({ scrollTop: Cb - ab.height() }, "slow");
            }),
            a('<select aria-label="Dropdown menu"/>').prependTo("#bottom-bar .mini-nav .menu-select"),
            a("<option />", { selected: "selected", value: "", text: "———" }).appendTo(".mini-nav .menu-select select"),
            a("#bottom-bar .mini-nav").each(function () {
                var b = a(this),
                    c = b.find("select");
                a("a", b).each(function () {
                    var b = a(this);
                    a("<option />", { value: b.attr("href"), text: b.text(), "data-level": b.attr("data-level") }).appendTo(c);
                });
            }),
            a(".mini-nav select").change(function () {
                window.location = a(this).find("option:selected").val();
            }),
            a(".mini-nav select option").each(function () {
                var b = a(this),
                    c = window.location.href;
                b.attr("value") == c && b.attr("selected", "selected");
            }),
            a(" #bottom-bar .mini-nav select").each(function () {
                a(this).customSelect();
            }),
            a(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible"),
            a(".mini-nav option").each(function () {
                var b = a(this),
                    c = b.text(),
                    d = "";
                switch (parseInt(b.attr("data-level"))) {
                    case 1:
                        d = "";
                        break;
                    case 2:
                        d = "— ";
                        break;
                    case 3:
                        d = "—— ";
                        break;
                    case 4:
                        d = "——— ";
                        break;
                    case 5:
                        d = "———— ";
                }
                b.text(d + c);
            });
        var Db = navigator.userAgent,
            Eb = Db.match(/iPhone/i) ? "touchstart" : "click";
        if (
            (a(".project-navigation a, .mobile-sticky-header-overlay").bind(Eb, function (a) {}),
            a(function () {
                (a.fn.clickMaterialEffect = function () {
                    return this.each(function () {
                        var b,
                            c,
                            d,
                            e,
                            f = a(this);
                        0 === f.find(".ink").length && f.prepend("<span class='ink'></span>"),
                            f.addClass("ripplelink"),
                            (b = f.find(".ink")),
                            b.removeClass("animate"),
                            b.height() || b.width() || ((c = Math.max(a(this).outerWidth(), f.outerHeight())), b.css({ height: c, width: c })),
                            f.bind("mousedown", function (a) {
                                clearTimeout(null), (d = a.pageX - f.offset().left - b.width() / 2), (e = a.pageY - f.offset().top - b.height() / 2), b.css({ top: e + "px", left: d + "px" }).addClass("animate");
                            }),
                            f.bind("mouseup mouseleave", function (a) {
                                clearTimeout(null),
                                    clearTimeout(null),
                                    (f._timer = setTimeout(function () {
                                        b.removeClass("animate");
                                    }, 400));
                            });
                    });
                }),
                    a(".rollover.material-click-effect, .post-rollover.material-click-effect, .rollover-video.material-click-effect").clickMaterialEffect();
            }),
            !dtGlobals.isMobile)
        ) {
            a(".stripe-parallax-bg, .fancy-parallax-bg, .page-title-parallax-bg").each(function () {
                var b = a(this),
                    c = b.data("prlx-speed");
                b.parallax("50%", c), b.addClass("parallax-bg-done"), b.css("opacity", "1");
            });
            var Fb = -1;
            a("#fancy-header .fancy-title:not(.start-animation), #fancy-header .fancy-subtitle:not(.start-animation), #fancy-header .breadcrumbs:not(.start-animation)").each(function () {
                var b = a(this);
                b.hasClass("start-animation") ||
                    b.hasClass("start-animation-done") ||
                    (b.addClass("start-animation-done"),
                    Fb++,
                    setTimeout(function () {
                        b.addClass("start-animation");
                    }, 300 * Fb));
            });
        }
        if (
            (jQuery(".wpcf7").each(function () {
                var b = a(this);
                b.on("wpcf7submit", function (a) {
                    b.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>").addClass("run-animation"),
                        setTimeout(function () {
                            b.find(".wpcf7-response-output").removeClass("run-animation");
                        }, 12e3);
                }),
                    b.on("wpcf7invalid", function (a) {
                        setTimeout(function () {
                            b.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>");
                        }, 100);
                    }),
                    b.on("wpcf7mailsent", function (a) {
                        setTimeout(function () {
                            b.find(".wpcf7-response-output").wrapInner("<div class='wpcf7-valid-tip-text'></div>").addClass("wpcf7-mail-sent-ok");
                        }, 100),
                            setTimeout(function () {
                                b.find(".wpcf7-response-output").removeClass("wpcf7-mail-sent-ok");
                            }, 12e3);
                    }),
                    b.on("invalid.wpcf7", function (a) {
                        setTimeout(function () {
                            b.find(".wpcf7-validation-errors").wrapInner("<div class='wpcf7-not-valid-tip-text'></div>");
                        }, 100);
                    }),
                    b.on("mailsent.wpcf7", function (a) {
                        setTimeout(function () {
                            b.find(".wpcf7-mail-sent-ok").wrapInner("<div class='wpcf7-valid-tip-text'></div>");
                        }, 100);
                    });
            }),
            a(".dt-sticky-sidebar").length > 0)
        ) {
            if (Oa) var Gb = a(".sticky-on");
            else var Gb = a(".masthead:not(.side-header):not(.side-header-v-stroke) .header-bar");
            if (((ga = !J.exists() || J.is(":hidden") || J.hasClass("top-bar-empty") || J.hasClass("hide-top-bar") ? 0 : J.innerHeight()), Ua || Va)) var Hb = a(ab).height() + 20;
            else if (dtLocal.themeSettings.floatingHeader.showMenu && Ga)
                if (x.hasClass("floating-top-bar")) var Hb = dtLocal.themeSettings.floatingHeader.height + ga + 20;
                else var Hb = dtLocal.themeSettings.floatingHeader.height + 20;
            else if (N.exists()) var Hb = N.find(".header-bar").height() + ga + 20;
            else var Hb = 0;
            new StickySidebar("#sidebar", { topSpacing: Hb, bottomSpacing: 20, viewportTop: 0, containerSelector: ".wf-container-main", innerWrapperSelector: ".sidebar-content", minWidth: dtLocal.themeSettings.sidebar.switchPoint });
        }
        a("#mphb-booking-details").find(".mphb-booking-details-title, .mphb-check-in-date, .mphb-check-out-date").wrapAll('<div class="mphb-details-sidebar"></div>'),
            a("#mphb-price-details").appendTo(".mphb-details-sidebar"),
            !a(".footer .widget").length > 0 && a(".footer").addClass("empty-footer"),
            dtGlobals.addOnloadEvent(function () {
                a(".the7-elementor-widget:not(.the7-elementor-product-comments)").each(function () {
                    var b = a(this),
                        c = b.find(".stars a");
                    c.length
                        ? (c.length > 5 && (c.slice(5, c.length).remove(), (c = b.find(".stars a"))), b.find(".stars span").append(c.get().reverse()))
                        : b
                              .find("#rating")
                              .hide()
                              .before(
                                  '<p class="stars">                            <span>                                <a class="star-5" href="#">5</a>                                <a class="star-4" href="#">4</a>                                <a class="star-3" href="#">3</a>                                <a class="star-2" href="#">2</a>                                <a class="star-1" href="#">1</a>                            </span>                        </p>'
                              ),
                        c.on("click", function () {
                            var b = a(this),
                                c = a(this).closest("#respond").find("#rating"),
                                d = a(this).closest(".stars");
                            return c.val(b.text()), b.siblings("a").removeClass("active"), b.addClass("active"), d.addClass("selected"), !1;
                        });
                }),
                    a(".dt-tab-accordion-title").each(function () {
                        var b = a(this);
                        b.parents().hasClass("hide-tab-description") && !b.parents().hasClass("hide-tab-additional")
                            ? a("#tab-title-additional_information.dt-tab-accordion-title").addClass("first")
                            : (b.parents().hasClass("hide-tab-additional") && !b.parents().hasClass("hide-tab-description")) || (b.parents().hasClass("hide-tab-additional") && b.parents().hasClass("hide-tab-description"))
                            ? a("#tab-title-reviews.dt-tab-accordion-title").addClass("first")
                            : a("#tab-title-description.dt-tab-accordion-title").addClass("first"),
                            a(".dt-tab-accordion-title.first").next().css("display", "block"),
                            b.on("click", function (b) {
                                var c = a(this),
                                    d = c.next(),
                                    e = Wb(c.parent());
                                a(".dt-tab-accordion-title").removeClass("active"),
                                    c.hasClass("active")
                                        ? a(".woocommerce-Tabs-panel").slideUp("fast")
                                        : (c.addClass("active"),
                                          a(".woocommerce-Tabs-panel").not(d).hide(),
                                          Ub(e, 0, function () {
                                              d.slideDown("fast");
                                          }));
                            });
                    }),
                    a(".the7-elementor-widget.elementor-widget-tabs").each(function () {
                        var b = a(this),
                            c = b.find(".wc-tabs li:visible").first().attr("aria-controls");
                        b.find(".wc-tabs li").removeClass("active"),
                            b.find(".wc-tabs li:visible").first().addClass("active"),
                            "none" !== b.find(".wc-tabs").css("display") && (b.find(".panel").css("display", "none"), b.find("#" + c).css("display", "block")),
                            window.location.hash &&
                                !a(".hide-tab-eviews").length > 0 &&
                                (b.find(".wc-tabs li").removeClass("active"),
                                b.find(".wc-tabs li.reviews_tab").addClass("active"),
                                b.find(".panel").css("display", "none"),
                                b.find(".woocommerce-Tabs-panel--reviews").css("display", "block")),
                            b.find(".comment-form-rating .stars").length > 1 && b.find(".comment-respond .stars").not(":first").remove(),
                            b.find(".wc-tabs li").on("click", function () {
                                var c = a(this).attr("aria-controls");
                                a(this).siblings().removeClass("active"), a(this).addClass("active"), b.find("> .woocommerce-tabs > .panel").css("display", "none"), b.find("#" + c).css("display", "block");
                            });
                    });
            });
        var Ib = a(".elementor-popup-modal .dialog-message");
        u.on("elementor/popup/show", Ib, function (b, c, d) {
            var e = a("#elementor-popup-modal-" + c + " .elementor-location-popup");
            "function" != typeof a.fn.mCustomScrollbar || dtGlobals.isMobile || e.mCustomScrollbar({ advanced: { autoUpdateTimeout: 1e3 }, scrollbarPosition: "outside" }),
                a(document.body).trigger("init_price_filter"),
                d.$element.find(" .dt-sub-menu-display-on_click li.has-children, .dt-sub-menu-display-on_item_click li.has-children").each(function () {
                    a(this).the7ElementorMenu();
                }),
                d.$element.find(".dt-css-grid .wf-cell img").each(function () {
                    var b = a(this);
                    b.attr("data-src") && b.prop("src", b.attr("data-src")),
                        b.attr("data-srcset") && b.prop("srcset", b.attr("data-srcset")),
                        b.removeAttr("data-src"),
                        b.removeAttr("data-srcset"),
                        b.removeClass("lazy-load"),
                        setTimeout(function () {
                            b.parent().removeClass("layzr-bg"), b.css("will-change", "auto");
                        }, 200);
                });
        }),
            (window.the7GetMasonryColumnsConfig = function (a) {
                var b = a.parent().hasClass("mode-masonry") ? a.parent() : a,
                    c = a.width() - 1,
                    d = {
                        mobile: parseInt(b.attr("data-phone-columns-num")),
                        desktop: parseInt(b.attr("data-desktop-columns-num")),
                        tabletV: parseInt(b.attr("data-v-tablet-columns-num")),
                        tabletH: parseInt(b.attr("data-h-tablet-columns-num")),
                    };
                return (
                    Modernizr.mq("only screen and (max-width:767px)")
                        ? ((singleWidth = Math.floor(c / d.mobile) + "px"), (doubleWidth = 2 * Math.floor(c / d.mobile) + "px"), (columnsNum = d.mobile))
                        : Modernizr.mq("(min-width:768px) and (max-width:991px)")
                        ? ((singleWidth = Math.floor(c / d.tabletV) + "px"), (doubleWidth = 2 * Math.floor(c / d.tabletV) + "px"), (columnsNum = d.tabletV))
                        : Modernizr.mq("(min-width:992px) and (max-width:1199px)")
                        ? ((singleWidth = Math.floor(c / d.tabletH) + "px"), (doubleWidth = 2 * Math.floor(c / d.tabletH) + "px"), (columnsNum = d.tabletH))
                        : ((singleWidth = Math.floor(c / d.desktop) + "px"), (doubleWidth = 2 * Math.floor(c / d.desktop) + "px"), (columnsNum = d.desktop)),
                    { singleWidth: singleWidth, doubleWidth: doubleWidth, columnsNum: columnsNum }
                );
            }),
            (window.the7GetElementorMasonryColumnsConfig = function (a) {
                var b = a.parent().hasClass("mode-masonry") ? a.parent() : a,
                    c = "data-tablet-columns-num",
                    d = "data-mobile-columns-num";
                b.hasClass("products-shortcode") && ((c = "data-v-tablet-columns-num"), (d = "data-phone-columns-num"));
                var e = a.width() - 1,
                    f = elementorFrontend.config.breakpoints,
                    g = "",
                    h = "",
                    i = "";
                return Modernizr.mq("all and (min-width:" + (dtLocal.elementor.settings.container_width + 1) + "px)")
                    ? ((g = parseInt(b.attr("data-wide-desktop-columns-num"))), { singleWidth: Math.floor(e / g) + "px", doubleWidth: 2 * Math.floor(e / g) + "px", columnsNum: g })
                    : ([
                          { breakpoint: f.xl, columns: parseInt(b.attr("data-desktop-columns-num")) },
                          { breakpoint: f.lg, columns: parseInt(b.attr(c)) },
                          { breakpoint: f.md, columns: parseInt(b.attr(d)) },
                      ].forEach(function (a) {
                          if (Modernizr.mq("all and (max-width:" + (a.breakpoint - 1) + "px)")) return (g = a.columns), (h = Math.floor(e / g) + "px"), (i = 2 * Math.floor(e / g) + "px"), !1;
                      }),
                      { singleWidth: h, doubleWidth: i, columnsNum: g });
            }),
            (a.fn.simpleCalculateColumns = function (a, b, c) {
                var d = parseInt(a.attr("data-width")),
                    e = parseInt(a.attr("data-columns")),
                    f = parseInt(a.attr("data-padding"));
                void 0 === c && (c = "px"), this.calculateColumns(d, e, f, null, null, null, null, c, b);
            }),
            (a.fn.calculateColumns = function (b, c, d, e, f, g, h, i, j) {
                return this.each(function () {
                    var e,
                        f,
                        g,
                        h,
                        k,
                        l = "",
                        m = a(this),
                        n = m,
                        o = m.attr("data-cont-id"),
                        p = a(".cont-id-" + o),
                        q = !1 !== d ? d : 20,
                        r = -q,
                        s = q - 10,
                        t = q - 5;
                    q < 10 && ((s = 0), (t = 0)), 0 === q && (r = 0), m.parent().hasClass("products-shortcode") && (s = q), m.parent().hasClass("mode-masonry") && ((n = n.parent()), (p = p.parent()));
                    var u = p.not(".bg-under-post, .content-bg-on").hasClass("description-under-image");
                    if (a("#col-style-id-" + o).exists()) var v = document.getElementById("col-style-id-" + o);
                    else {
                        var v = document.createElement("style");
                        (v.id = "col-style-id-" + o), v.appendChild(document.createTextNode("")), document.head.appendChild(v);
                    }
                    var w = a("#col-style-id-" + o);
                    if (
                        ((l = u
                            ? " \t\t\t\t\t\t\t.cont-id-" + o + " { margin: -" + t + "px  -" + q + "px -" + s + "px ; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" + o + " { margin: " + -t + "px " + q + "px " + -s + "px ; }"
                            : " \t\t\t\t\t\t\t.cont-id-" + o + " { margin: -" + q + "px; } \t\t\t\t\t\t\t.full-width-wrap .cont-id-" + o + " { margin: " + r + "px  " + q + "px; } \t\t\t\t\t\t"),
                        w.html(l),
                        n.hasClass("resize-by-browser-width"))
                    )
                        void 0 === j && (j = the7GetMasonryColumnsConfig), (e = j.call(this, m)), (g = e.singleWidth), (h = e.doubleWidth), (k = e.columnsNum);
                    else {
                        for (f = m.width() - 1, b = b || 200, c = c || 6; Math.floor(f / c) < b && !(--c <= 1); );
                        "px" === i ? ((g = Math.floor(f / c) + "px"), (h = 2 * Math.floor(f / c) + "px"), (k = c)) : ((g = Math.floor(1e5 / c) / 1e3 + "%"), (h = (2 * Math.floor(1e5 / c)) / 1e3 + "%"));
                    }
                    (l += u
                        ? k > 1
                            ? " \t\t\t\t\t\t\t.cont-id-" + o + "  .wf-cell { width: " + g + "; padding: " + t + "px " + q + "px " + s + "px; } \t\t\t\t\t\t\t.cont-id-" + o + "  .wf-cell.double-width { width: " + h + "; } \t\t\t\t\t\t"
                            : " \t\t\t\t\t\t\t.cont-id-" + o + "  .wf-cell { width: " + g + "; padding: " + t + "px " + s + "px " + q + "px; } \t\t\t\t\t\t"
                        : k > 1
                        ? " \t\t\t\t\t\t\t.cont-id-" + o + " .wf-cell { width: " + g + ";  padding: " + q + "px; } \t\t\t\t\t\t\t.cont-id-" + o + " .wf-cell.double-width { width: " + h + "; } \t\t\t\t\t\t"
                        : " \t\t\t\t\t\t\t.cont-id-" + o + " .wf-cell { width: " + g + "; padding: " + q + "px; } \t\t\t\t\t\t"),
                        w.html(l);
                    var x = v.sheet.cssRules.length;
                    v.sheet.insertRule(".webkit-hack { }", x), v.sheet.deleteRule(x), m.trigger("columnsReady");
                });
            }),
            (a.fn.initSlider = function () {
                return this.each(function () {
                    var b = a(this);
                    b.data("width"), b.data("height");
                    b.hasClass("royalReady") || (b.postTypeScroller(), b.addClass("royalReady"));
                });
            });
        var Jb = Isotope.prototype._positionItem;
        (Isotope.prototype._positionItem = function (a, b, c, d) {
            Jb(a, b, c, !0);
        }),
            (a.fn.IsoLayzrInitialisation = function (a) {
                return n(this, a, "img[class*=iso-]", "iso-item-lazy-load");
            }),
            (a.fn.IsoLayzrJqInitialisation = function (a) {
                return n(this, a, "img", "thumb-lazy-load-show");
            });
        var Kb = a(".iso-container"),
            Lb = a(".iso-grid:not(.jg-container, .iso-container), .blog.layout-grid .wf-container.description-under-image:not(.jg-container, .iso-container), .grid-masonry:not(.iso-container), .shortcode-blog-posts.iso-grid"),
            Mb = Kb.add(Lb),
            Nb = (dtGlobals.isoPreloader = a('<div class="iso-preloader dt-posts-preload dt-posts-preload-active"><div class="dt-posts-preload-activity"></div></div>').appendTo("body").hide());
        Mb.not(".blog-grid-shortcode").addClass("dt-isotope"),
            (window.the7ApplyColumns = function (a, b, c) {
                var d, e;
                b &&
                    b.length &&
                    ((a = a || 0),
                    (d = b.parent().hasClass("mode-masonry") ? b.parent() : b),
                    (e = parseInt(d.attr("data-padding"))),
                    b.addClass("cont-id-" + a).attr("data-cont-id", a),
                    b.simpleCalculateColumns(d, c),
                    e > 10 && b.addClass("mobile-paddings"),
                    v.on("debouncedresize", function () {
                        b.simpleCalculateColumns(d, c), e > 10 && b.addClass("mobile-paddings");
                    }));
            }),
            Mb.exists() &&
                Mb.not(".custom-iso-columns").each(function (b) {
                    the7ApplyColumns(b, a(this), the7GetMasonryColumnsConfig);
                }),
            (a.fn.heightHack = function () {
                return this.each(function () {
                    var b,
                        c,
                        d,
                        e = a(this).not(".back-image");
                    e.exists() &&
                        (e.hasClass("height-ready") ||
                            e.parents(".testimonial-thumb").exists() ||
                            e.parents(".post-rollover").exists() ||
                            e.parents(".slider-masonry").exists() ||
                            e.parents(".rollover-thumbnails").exists() ||
                            ((b = parseInt(e.attr("width"))),
                            (c = parseInt(e.attr("height"))),
                            (d = b / c),
                            e.parents(".testimonial-vcard, .dt-format-gallery, .shortcode-blog-posts.iso-grid ").exists() && e.wrap("<div />"),
                            isNaN(d) && e[0] && (d = e[0].naturalWidth / e[0].naturalHeight),
                            e
                                .parent()
                                .not(".img-ratio-wrapper")
                                .css({ "padding-bottom": 100 / d + "%", height: 0, display: "block" }),
                            e.parents(".dt-team-masonry-shortcode").exists() && "none" !== e.parent().css("max-width") && e.parents(".team-media").addClass("apply-max-width"),
                            e.attr("data-ratio", d).addClass("height-ready")));
                });
            }),
            (a.fn.IsoInitialisation = function (b, c, d, e) {
                return this.each(function () {
                    var d = a(this);
                    d.hasClass("iso-item-ready") ||
                        (d.isotope({
                            itemSelector: b,
                            layoutMode: c,
                            stagger: 30,
                            resize: !1,
                            transitionDuration: 0,
                            equalheight: e,
                            hiddenStyle: { opacity: 0 },
                            visibleStyle: { opacity: 1 },
                            masonry: { columnWidth: 1 },
                            getSortData: {
                                date: function (b) {
                                    return a(b).attr("data-date");
                                },
                                name: function (b) {
                                    return a(b).attr("data-name");
                                },
                            },
                            customSorters: { name: window.the7LocaleSensitiveStringsCompare },
                        }),
                        d.addClass("iso-item-ready"));
                });
            }),
            a(".iso-container, .portfolio-grid").each(function () {
                if (a(this).parent().hasClass("mode-masonry")) var b = null;
                else var b = a(this);
                a(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-categories a").on("click.presscorFilterCategories", function (c) {
                    var d = a(this).attr("data-filter");
                    return null != b && b.isotope({ filter: d }), !1;
                }),
                    a(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-by a").on("click", function (c) {
                        var d = a(this).attr("data-by"),
                            e = a(this).parents(".filter-extras").find(".filter-sorting > a.act").first().attr("data-sort");
                        return null != b && b.isotope({ sortBy: d, sortAscending: "asc" == e }), !1;
                    }),
                    a(".filter:not(.iso-filter):not(.without-isotope):not(.with-ajax) .filter-extras .filter-sorting a").on("click", function (c) {
                        var d = a(this).attr("data-sort"),
                            e = a(this).parents(".filter-extras").find(".filter-by > a.act").first().attr("data-by");
                        return null != b && b.isotope({ sortBy: e, sortAscending: "asc" == d }), !1;
                    });
            }),
            a(".dt-css-grid .wf-cell.visible").IsoLayzrJqInitialisation(),
            (Kb.exists() || Lb.exists()) &&
                (Nb.fadeIn(50),
                Mb.not(".blog-grid-shortcode").each(function () {
                    var b = a(this),
                        c = b;
                    b.hasClass("mode-masonry") && (c = b.find(".dt-isotope")),
                        a(".preload-me", c).heightHack(),
                        a(".slider-masonry", c).initSlider(),
                        c.one("columnsReady", function () {
                            if (c.hasClass("iso-container")) c.IsoInitialisation(".iso-item", "masonry", 400);
                            else {
                                var b = !0;
                                (c.parent().hasClass("gradient-overlay-layout-list") || c.parent().hasClass("content-rollover-layout-list")) && (b = !1), c.IsoInitialisation(".wf-cell", "fitRows", 400, b);
                            }
                            c.isotope("on", "layoutComplete", function (b) {
                                for (var d = 0; d < b.length; d++) {
                                    b[d], a(this);
                                    c.trigger("IsoReady");
                                }
                            }),
                                c.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient(),
                                c.one("IsoReady", function () {
                                    var a = c;
                                    c.parent().hasClass("jquery-filter") && "none" != c.parent().attr("data-pagination-mode") && (a = c.find(".wf-cell.visible")),
                                        a.IsoLayzrJqInitialisation(),
                                        setTimeout(function () {
                                            c.isotope("layout");
                                        }, 350);
                                });
                        }),
                        c.on("columnsReady", function () {
                            a(".slider-masonry", c).hasClass("royalReady") &&
                                a(".slider-masonry", c).each(function () {
                                    var b = a(this).parents(".ts-wrap").data("thePhotoSlider");
                                    void 0 !== b && b.update();
                                }),
                                c.parent(".content-rollover-layout-list:not(.disable-layout-hover)").find(".post-entry-wrapper").clickOverlayGradient(),
                                c.isotope("layout");
                        });
                }),
                Nb.stop().fadeOut(300)),
            v
                .on("debouncedresize", function (b) {
                    if ((dtGlobals.resizeCounter++, the7Utils.isFunction(a.fn.calcPics) && a(".instagram-photos").calcPics(), y.hasClass("boxed"))) {
                        var c = y.css("maxWidth"),
                            d = c.indexOf("px") >= 0,
                            e = c.indexOf("%") >= 0;
                        d && (K.addClass("width-in-pixel"), void 0 !== ab && ab.addClass("width-in-pixel")),
                            e &&
                                (a(".masthead.full-width:not(.side-header)").css({ width: y.width() }),
                                void 0 !== ab && ab.find(".top-bar-bg").length > 0 && ab.find(".top-bar-bg").css({ width: y.width() }),
                                x.hasClass("phantom-sticky") && a(".top-bar-bg").length > 0 && a(".top-bar-bg").css({ width: y.width() }));
                    }
                    if (
                        (a(".content-rollover-layout-list:not(.disable-layout-hover) .dt-css-grid .post-entry-wrapper").clickOverlayGradient(),
                        window.innerWidth >= dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                            (y.removeClass("show-mobile-header"),
                            y.addClass("closed-mobile-header"),
                            x.removeClass("show-sticky-mobile-header"),
                            x.removeClass("show-overlay-mobile-header").addClass("closed-overlay-mobile-header"),
                            a(".mobile-sticky-header-overlay").removeClass("active"),
                            a(".dt-mobile-menu-icon").removeClass("active"),
                            w.removeClass("menu-open")),
                        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && !x.hasClass("responsive-off")
                            ? (a(".masthead").hasClass("masthead-mobile") || a(".masthead:not(.mixed-header):not(#phantom)").addClass("masthead-mobile"),
                              a(".masthead").hasClass("masthead-mobile-header") ||
                                  (a(".masthead:not(.side-header):not(#phantom)").addClass("masthead-mobile-header"), a("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("masthead-mobile-header")),
                              N.exists() && (N.removeClass("sticky-top-line-on sticky-top-line-on"), (Ta = !1)),
                              a(".mobile-header-scrollbar-wrap").css({ "max-width": a(".dt-mobile-header ").width() - 13 }))
                            : (a(".masthead:not(.mixed-header):not(#phantom)").removeClass("masthead-mobile"),
                              a(".masthead:not(.side-header):not(#phantom)").removeClass("masthead-mobile-header"),
                              a("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").removeClass("masthead-mobile-header"),
                              a(".masthead").hasClass("desktop-side-header") || a("body:not(.overlay-navigation):not(.sticky-header) .side-header:not(#phantom)").addClass("desktop-side-header")),
                        window.innerWidth <= dtLocal.themeSettings.mobileHeader.firstSwitchPoint && window.innerWidth > dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !x.hasClass("responsive-off")
                            ? a(".left-widgets", J).find(".in-top-bar-left").length > 0 || a(".top-bar .right-widgets").find(".in-top-bar-right").length > 0
                                ? J.removeClass("top-bar-empty")
                                : J.addClass("top-bar-empty")
                            : window.innerWidth <= dtLocal.themeSettings.mobileHeader.secondSwitchPoint && !x.hasClass("responsive-off")
                            ? a(".left-widgets", J).find(".in-top-bar").length > 0
                                ? J.removeClass("top-bar-empty")
                                : J.addClass("top-bar-empty")
                            : !a(".mini-widgets", J).find(".show-on-desktop").length > 0
                            ? J.addClass("top-bar-empty")
                            : J.removeClass("top-bar-empty"),
                        J.exists() && (topBarMobH = J.innerHeight()),
                        a(".mini-nav select").trigger("render"),
                        a.fancyFeaderCalc(),
                        a(".dt-default").each(function () {
                            var b = a(this),
                                c = b.attr("data-min-height");
                            a.isNumeric(c) ? b.css({ minHeight: c + "px" }) : c ? (c.search("%") > 0 ? b.css({ minHeight: v.height() * (parseInt(c) / 100) + "px" }) : b.css({ minHeight: c })) : b.css({ minHeight: 0 });
                        }),
                        (vb = xb.siblings(".project-wide-col").height()),
                        (wb = xb.height()),
                        m(),
                        a(".boxed").length > 0)
                    ) {
                        var f = a(".boxed");
                        a(".header-side-left.footer-overlap:not(.sticky-header) .boxed .footer, .left-side-line.footer-overlap .boxed .footer").css({ right: v.width() - (f.offset().left + f.outerWidth()) });
                    }
                    a(".footer-overlap .footer").css({ opacity: 1 }),
                        a(".mobile-false .footer-overlap .page-inner").css({ "min-height": window.innerHeight - a(".footer").innerHeight(), "margin-bottom": a(".footer").innerHeight() }),
                        a(".mobile-false .footer-overlap .footer").css({ bottom: parseInt(x.css("padding-bottom")) + parseInt(x.css("margin-bottom")) });
                })
                .trigger("debouncedresize"),
            a(window).trigger("the7_widget_resize");
        var Ob = a("html, body"),
            Pb = a(".phantom-sticky"),
            Qb = a(".sticky-top-line"),
            Ga = Pb.exists(),
            Rb = Qb.exists(),
            Sb = a(".sticky-mobile-header").exists(),
            Tb = Ga || Rb,
            ab = null,
            Gb = null;
        o();
        var Ub = function (a, b, c) {
                Ob.stop().animate({ scrollTop: a }, { duration: b, easing: "swing", complete: c });
            },
            Vb = function (a, b, c) {
                a.one("animationend", function () {
                    var d = c(a);
                    d !== b && Ub(d);
                });
            },
            Wb = function (b) {
                var c = null,
                    d = 0,
                    e = x.hasClass("overlay-navigation");
                window.innerWidth < dtLocal.themeSettings.mobileHeader.firstSwitchPoint &&
                    !x.hasClass("responsive-off") &&
                    Sb &&
                    (Ea ? (c = a(".masthead-mobile-header .mobile-header-bar")) : Ta ? (c = Qb) : ((c = a(Gb, ab)), Tb && "solid" === ab.css("border-bottom-style") && (d = ab.css("border-bottom-width")))),
                    e
                        ? null == c && Rb && (c = Qb)
                        : null == c && (c = Ga && Oa ? a(x.hasClass("floating-top-bar") ? ".masthead" : ".header-bar") : Rb ? (a(".masthead").hasClass("mixed-floating-top-bar") ? Qb : Qb.find(".header-bar")) : ab);
                var f = 0;
                return c && c.length && (f = c.height()), b.offset().top + 1 - f + d;
            },
            Xb = function (b, c, d) {
                if (b) {
                    var e = a("#" + b),
                        f = !1;
                    if (("up" !== b || e.length || (f = !0), !e.length && !f)) return !1;
                    void 0 !== c && (location.hash = c), o();
                    var g = 650,
                        h = 0,
                        i = x.hasClass("overlay-navigation");
                    if ((f || (h = Wb(e)), void 0 !== d && !f)) {
                        var j = d.offset().top,
                            k = e.offset().top,
                            l = Math.abs(k - j);
                        g = 150 * Math.log(1.022 ^ l);
                    }
                    return (
                        a.closeMobileHeader(),
                        i && a.closeSideHeader(),
                        Ub(h, g, function () {
                            if (
                                (i ||
                                    setTimeout(function () {
                                        a.closeSideHeader();
                                    }, 50),
                                "up" === b)
                            )
                                return !0;
                            var c = Wb(e);
                            h !== c && (Ub(c), Vb(e, c, Wb));
                        }),
                        !0
                    );
                }
                return !1;
            },
            Yb = function (a) {
                return a.match("^#!") ? a.substring(3) : a.match("^#") ? a.substring(1) : a.substring(a.indexOf("#")).substring(3);
            };
        dtGlobals.addOnloadEvent(function () {
            var b = window.location.hash,
                c = Yb(b);
            setTimeout(function () {
                if (!c) {
                    var d = a(".menu-item > a[href='#!/up']");
                    return void (d.length > 0 && d.parent("li").addClass("act"));
                }
                a(".menu-item a").parent("li").removeClass("act");
                var e = a(".menu-item a[href='" + b + "']");
                e.parent("li").addClass("act"),
                    a(".menu-item a[href*='" + b + "']")
                        .parent("li")
                        .addClass("act");
                var f = e.parents("li");
                if (f.find(".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act").length) {
                    var g = f.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
                    f.addClass("open-sub"), g.stop(!0, !0).slideDown(100);
                }
                setTimeout(function () {
                    Xb(c);
                }, 300);
            }, 300);
        }),
            jQuery(window).on("resize", function () {
                o();
            }),
            (window.clickAnchorLink = function (b) {
                var c = b.attr("href"),
                    d = Yb(c),
                    e = Xb(d, c, b);
                return a(".menu-item a").parent("li").removeClass("act"), b.parents("li.menu-item ").addClass("act"), e;
            }),
            x.on(
                "click",
                '.anchor-link[href^="#!"], .anchor-link a[href^="#!"], .logo-box a[href^="#!"], .branding a[href^="#!"], #branding-bottom a[href^="#!"], .mobile-branding a[href^="#!"],  .woocommerce-product-rating a.woocommerce-review-link[href^="#"]',
                function (b) {
                    if (clickAnchorLink(a(this))) return b.preventDefault(), !1;
                }
            ),
            a('.menu-item > a[href*="#!"]').on("click", function (b) {
                if (!a(b.target).parent().hasClass("next-level-button") && clickAnchorLink(a(this))) return b.preventDefault(), !1;
            });
        var Zb = null;
        v.scroll(function (b) {
            if (!x.hasClass("is-scroll")) {
                var c,
                    d = null;
                (d = Za && "solid" == ab.css("border-bottom-style") ? ab.height() + 1 : Za ? ab.height() : Gb.height()), a(".masthead.side-header").length > 0 && null == d && (d = 0), null == d && (d = 0);
                var e = a(".one-page-row div[data-anchor^='#']"),
                    f = a(".one-page-row .vc_row[id], .one-page-row .vc_section[id], .elementor-element[id], .elementor-menu-anchor[id]");
                if (
                    (a.merge(e, f).each(function () {
                        var b = a(this),
                            e = b.attr("id");
                        b.hasClass("wpb_animate_when_almost_visible") &&
                            b.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function (f) {
                                b.is(":visible") && dtGlobals.winScrollTop >= Math.floor(b.offset().top - d) && (c = "#!/" + e),
                                    a('.menu-item a[href^="#!"]').parents("li").removeClass("act"),
                                    a('.menu-item a[href="' + c + '"]')
                                        .parents("li")
                                        .addClass("act");
                            }),
                            b.is(":visible") && dtGlobals.winScrollTop >= Math.floor(b.offset().top - d) && (c = "#!/" + e);
                    }),
                    c !== Zb)
                ) {
                    (Zb = c), a('.menu-item a[href^="#!"]').parents("li").removeClass("act");
                    a('.menu-item a[href="' + c + '"]')
                        .parents("li")
                        .addClass("act");
                }
                var g = a('.menu-item > a[href="#!/up"]');
                if (g.length > 0) {
                    var h = null;
                    e.length > 0 ? (h = e) : f.length > 0 && (h = f), null !== h && dtGlobals.winScrollTop < h.first().offset().top - d && g.parents("li").addClass("act");
                }
            }
        }),
            (a.fn.resetEffects = function (b) {
                return this.each(function () {
                    a(this).find(".iso-item.shown, .wf-cell.shown").removeClass("start-animation").removeClass("animation-triggered").removeClass("shown");
                });
            }),
            (window.the7ProcessEffects = q);
        var $b = {
            xhr: !1,
            settings: !1,
            launch: function (b) {
                var c = this;
                b && (this.settings = b), this.xhr && this.xhr.abort();
                this.xhr = a.post(
                    b.ajaxurl,
                    {
                        action: "presscore_template_ajax",
                        postID: b.postID,
                        paged: b.paged,
                        targetPage: b.targetPage,
                        term: b.term,
                        orderby: b.orderBy,
                        order: b.order,
                        nonce: b.nonce,
                        visibleItems: b.visibleItems,
                        contentType: b.contentType,
                        pageData: b.pageData,
                        sender: b.sender,
                    },
                    function (d) {
                        if (d.success) {
                            var e = jQuery(d.html),
                                f = b.targetContainer;
                            parseInt(f.attr("data-width")), parseInt(f.attr("data-max-width")), parseInt(f.attr("data-padding"));
                            if (
                                ((isIsotope = "grid" == b.layout || "masonry" == b.layout),
                                (itemsToDeleteLength = 0),
                                (trashItems = new Array()),
                                (sortBy = d.orderby.replace("title", "name")),
                                (sortAscending = "asc" == d.order.toString()),
                                d.newNonce && (dtLocal.ajaxNonce = d.newNonce),
                                void 0 !== d.itemsToDelete && (itemsToDeleteLength = d.itemsToDelete.length),
                                isIsotope && itemsToDeleteLength > 0)
                            ) {
                                for (var g = 0; g < d.itemsToDelete.length; g++) trashItems.push('.wf-cell[data-post-id="' + d.itemsToDelete[g] + '"]');
                                f.isotope("remove", f.find(trashItems.join(",")));
                            } else isIsotope || ("filter" != b.sender && "paginator" != b.sender) || f.find(".wf-cell, article").remove();
                            e.length > 0
                                ? (f.append(e),
                                  (dtGlobals.ajaxContainerItems = f.find("div.wf-cell, .project-even, .project-odd").not(".animation-triggered")),
                                  isIsotope
                                      ? (a(".preload-me", f).heightHack(),
                                        a(".slider-masonry", f).initSlider(),
                                        a(".slider-masonry", f).css("visibility", "visible"),
                                        f.isotope("addItems", e),
                                        "media" != b.contentType ? f.isotope({ sortBy: sortBy, sortAscending: sortAscending }) : f.isotope({ sortBy: "original-order" }),
                                        f.isotope("layout"),
                                        c.init(),
                                        f.layzrInitialisation(),
                                        f.IsoLayzrInitialisation())
                                      : (a(".slider-masonry", f).initSlider(),
                                        a("ul.photoSlider:not(.slider-masonry)").each(function () {
                                            a(this).postTypeScroller();
                                        }),
                                        a("ul.photoSlider").css("visibility", "visible"),
                                        "jgrid" == b.layout && f.collagePlus(dtGlobals.jGrid),
                                        c.init(),
                                        f.layzrInitialisation(),
                                        f.IsoLayzrInitialisation(".mobile-true")),
                                  void 0 !== b.afterSuccessInit && b.afterSuccessInit(d),
                                  v.trigger("dt.ajax.content.appended"))
                                : isIsotope && f.isotope({ sortBy: sortBy, sortAscending: sortAscending });
                        }
                        void 0 !== b.afterResponce && b.afterResponce(d), p();
                    }
                );
            },
            init: function () {
                switch (this.settings.contentType) {
                    case "portfolio":
                        this.initPortfolio();
                        break;
                    case "albums":
                        this.initAlbums();
                        break;
                    case "media":
                        this.initMedia();
                        break;
                    case "blog":
                    case "testimonials":
                        this.basicInit();
                }
            },
            initPortfolio: function () {
                this.basicInit();
            },
            initAlbums: function () {
                this.basicInit();
            },
            initMedia: function () {
                this.basicInit();
            },
            basicInit: function () {
                var b = this.settings.targetContainer;
                a(".dt-pswp-item, .dt-gallery-container a", b).addPhotoswipeWrap(),
                    a(".dt-gallery-container", b).initPhotoswipe(),
                    a(".photoswipe-wrapper", b).initPhotoswipe(),
                    b.photoswipeGallery(".dt-gallery-container.wf-container"),
                    a(".rollover, .rollover-video, .post-rollover, .rollover-project .show-content", b).addRollover(),
                    the7Utils.isFunction(a.fn.hoverdir) &&
                        (a(".mobile-false .hover-grid .rollover-project").each(function () {
                            a(this).hoverdir();
                        }),
                        a(".mobile-false .hover-grid-reverse .rollover-project ").each(function () {
                            a(this).hoverdir({ inverse: !0 });
                        })),
                    a(
                        ".mobile-true .rollover-project a.link.show-content, .hover-style-one article:not(.description-off) .rollover-project > a, .hover-style-two article:not(.description-off) .rollover-project > a, .hover-style-three article:not(.description-off) .rollover-project > a"
                    ).on("click", function (a) {
                        a.preventDefault();
                    }),
                    a(".dt-trigger-first-pswp", b)
                        .not(".pspw-ready")
                        .on("click", function () {
                            var b = a(this),
                                c = b.parents("article.post");
                            if (c.length > 0) {
                                var d = c.find("a.dt-pswp-item");
                                d.length > 0 && d.first().trigger("click");
                            }
                            return !1;
                        })
                        .addClass("mfp-ready"),
                    a(".mobile-true .rollover-project").touchNewHover(),
                    the7Utils.isFunction(a.fn.triggerHoverClick) && a(".mobile-false .rollover-project:not(.rollover-active) .rollover-content, .buttons-on-img:not(.rollover-active) .rollover-content").triggerHoverClick(),
                    the7Utils.isFunction(a.fn.triggerHoverClick) && a(".mobile-false .rollover-project.forward-post").triggerHoverClick(),
                    the7Utils.isFunction(a.fn.triggerHoverClick) && a(".mobile-false .rollover-project.rollover-active, .mobile-false .buttons-on-img.rollover-active").followCurentLink(),
                    the7Utils.isFunction(a.fn.triggerAlbumsClick) && a(".mobile-false .albums .rollover-project, .mobile-false .albums .buttons-on-img, .mobile-false .archive .type-dt_gallery .buttons-on-img").triggerAlbumsClick(),
                    the7Utils.isFunction(a.fn.triggerAlbumsTouch) && a(".mobile-true .albums .rollover-project, .mobile-true .albums .buttons-on-img, .mobile-true .archive .type-dt_gallery .buttons-on-img").triggerAlbumsTouch(),
                    the7Utils.isFunction(a.fn.triggerPostClick) &&
                        a(
                            ".mobile-false .content-rollover-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post, .mobile-false .gradient-overlay-layout-list:not(.portfolio-shortcode):not(.albums-shortcode) .post"
                        ).triggerPostClick(),
                    the7Utils.isFunction(a.fn.touchforwardToPost) && a(".mobile-true .rollover-project.forward-post").touchforwardToPost(),
                    the7Utils.isFunction(a.fn.touchHoverImage) && a(".mobile-true .buttons-on-img").touchHoverImage(),
                    a(".hover-scale .rollover-project").scaleInHover(),
                    the7Utils.isFunction(a.fn.addIconToLinks) && a(".links-container a").addIconToLinks();
            },
        };
        a("#content").on("click", ".paginator.with-ajax a", function (b) {
            if ((b.preventDefault(), !a(b.target).hasClass("dots") && !a(b.target).hasClass("disabled"))) {
                var c = a(this),
                    d = c.closest(".paginator"),
                    e = d.parent(),
                    f = e.find(".wf-container.with-ajax, .articles-list.with-ajax").first(),
                    g = a(".button-load-more"),
                    h = g.find(".button-caption").text(),
                    i = d.hasClass("paginator-more-button") ? "more" : "paginator",
                    j = "more" == i,
                    k = r(e),
                    l = j ? k.paged + 1 : c.attr("data-page-num"),
                    m = dtGlobals.isoPreloader;
                if ((g.addClass("animate-load").find(".button-caption").text(dtLocal.moreButtonText.loading), m && !a(".paginator-more-button").length && dtGlobals.isoPreloader.fadeIn(50), j)) a("html, body").scrollTop(v.scrollTop() + 1);
                else {
                    var n = e.find(".filter.with-ajax").first(),
                        o = 44;
                    n.exists() || ((n = f), (o = 50)), a("html, body").animate({ scrollTop: n.offset().top - a("#phantom").height() - o }, 400);
                }
                $b.launch(
                    a.extend({}, k, {
                        contentType: k.pageData.template,
                        targetPage: l,
                        sender: i,
                        visibleItems: j ? new Array() : k.visibleItems,
                        afterResponce: function (b) {
                            d.length > 0
                                ? (b.paginationHtml ? d.html(a(b.paginationHtml).html()).show() : d.html("").hide(),
                                  setTimeout(function () {
                                      a(".button-load-more").removeClass("animate-load").find(".button-caption").text(h);
                                  }, 200))
                                : b.paginationHtml && f.parent().append(a(b.paginationHtml)),
                                d.find(".dots").on("click", function () {
                                    d.find("div:hidden").show().find("a").unwrap(), a(this).remove();
                                }),
                                f.attr("data-cur-page", b.currentPage),
                                dtGlobals.isoPreloader.stop().fadeOut(300),
                                (dtGlobals.loadMoreButton = a(".button-load-more"));
                        },
                    })
                );
            }
        }),
            a(".filter.with-ajax .filter-categories a, .filter.with-ajax .filter-extras a").on("click", function (b) {
                b.preventDefault();
                var c = a(this),
                    d = c.closest(".filter"),
                    e = d.parent(),
                    f = e.find(".wf-container.with-ajax").first(),
                    g = e.find(".paginator").first(),
                    h = r(e),
                    i = dtGlobals.isoPreloader;
                f.resetEffects(),
                    i && dtGlobals.isoPreloader.fadeIn(50),
                    $b.launch(
                        a.extend({}, h, {
                            contentType: h.pageData.template,
                            targetPage: 1,
                            paged: 1,
                            sender: "filter",
                            afterResponce: function (b) {
                                g.length > 0 ? (b.paginationHtml ? g.html(a(b.paginationHtml).html()).show() : g.html("").hide()) : b.paginationHtml && f.parent().append(a(b.paginationHtml)),
                                    g.find(".dots").on("click", function () {
                                        g.find("div:hidden").show().find("a").unwrap(), a(this).remove();
                                    }),
                                    f.attr("data-cur-page", b.currentPage),
                                    dtGlobals.isoPreloader.stop().fadeOut(300),
                                    (dtGlobals.loadMoreButton = a(".button-load-more"));
                            },
                        })
                    );
            }),
            void 0 !== dtLocal.themeSettings.lazyLoading &&
                dtLocal.themeSettings.lazyLoading &&
                ((dtGlobals.loadMoreButton = a(".button-load-more")),
                v.on("scroll", function () {
                    s();
                }),
                s());
        var _b = (function () {
            var a = {};
            return function (b, c, d) {
                d || (d = "Don't call this twice without a uniqueId"), a[d] && clearTimeout(a[d]), (a[d] = setTimeout(b, c));
            };
        })();
        v.on("resize", function () {
            a(".iso-item, .iso-grid .wf-cell").addClass("animate-position"),
                _b(
                    function () {
                        a(".iso-item, .iso-grid .wf-cell").removeClass("animate-position");
                    },
                    2500,
                    ""
                );
        });
        var ac = a(".dt-isotope"),
            bc = a(".iso-item:not(.shown):not(.is-visible)"),
            cc = a(".iso-grid .wf-cell:not(.shown):not(.is-visible), .dt-css-grid .wf-cell:not(.shown):not(.is-visible)");
        (ac.exists() || bc.exists() || cc.exists()) &&
            (setTimeout(function () {
                p();
            }, 100),
            v.on("scroll", function () {
                p();
            }));
        var dc = (function () {
                function b(b) {
                    var c = { paginatorContainer: null, postLimit: 1, curPage: 1, items: [], filter: null, onPaginate: function () {} };
                    this.config = a.extend(c, b);
                }
                return (
                    (b.prototype.setCurPage = function (a) {
                        this.config.curPage = parseInt(a);
                    }),
                    (b.prototype.getCurPage = function () {
                        return this.config.curPage;
                    }),
                    (b.prototype.reset = function (a) {
                        (this.config.items = a), this.setCurPage(1), this.appendControls(), this._filterByCurPage();
                    }),
                    (b.prototype.appendControls = function () {}),
                    (b.prototype._filterByCurPage = function () {
                        this.showItem(this.config.items);
                    }),
                    (b.prototype.hideItem = function (a) {
                        a.removeClass("visible").addClass("hidden").hide();
                    }),
                    (b.prototype.showItem = function (a) {
                        a.addClass("visible").removeClass("hidden").show();
                    }),
                    (b.prototype.applyLoadingEffects = function () {
                        this.lazyLoadImages(), p();
                    }),
                    (b.prototype.lazyLoadImages = function () {
                        this.config.items && this.config.items.filter(".visible").IsoLayzrJqInitialisation();
                    }),
                    (b.prototype.layoutItems = function () {
                        this._filterByCurPage(), this.config.filter && "function" == typeof this.config.filter.layoutItems && this.config.filter.layoutItems();
                    }),
                    b
                );
            })(),
            ec = (function () {
                function b(b) {
                    dc.call(this, b);
                    var c = { previousButtonClass: "", previousButtonLabel: "", pagerClass: "", nextButtonClass: "", nextButtonLabel: "", activeClass: "act", pagesToShow: 5 };
                    (this.config = a.extend(c, this.config)), this.appendControls(), a("a.act", this.config.paginatorContainer).trigger("click.dtPostsPaginationFilter", { onSetup: !0 });
                }
                return (
                    (b.prototype = new dc()),
                    (b.prototype.addEvents = function () {
                        var b = this;
                        a("a", this.config.paginatorContainer)
                            .not(".dots")
                            .on("click.dtPostsPaginationFilter", { self: this }, function (a, c) {
                                b.config.onPaginate.call(this, a, c);
                            }),
                            a("a.dots", this.config.paginatorContainer).on("click.dtPostsPaginationDots", { self: this }, function (a) {
                                a.preventDefault(), a.data.self.config.paginatorContainer.find("div:hidden a").unwrap(), a.data.self.config.paginatorContainer.find("a.dots").remove();
                            });
                    }),
                    (b.prototype.appendControls = function () {
                        var b = this.config.paginatorContainer,
                            c = Math.ceil(this.config.items.length / this.config.postLimit),
                            d = this.config.curPage;
                        if ((b.empty(), c <= 1)) return void b.addClass("hidden");
                        b.removeClass("hidden");
                        var e, f;
                        1 !== d && b.prepend('<a href="#" class="' + this.config.previousButtonClass + '" data-page-num="' + (d - 1) + '">' + this.config.previousButtonLabel + "</a>");
                        var g = 5 | this.config.pagesToShow,
                            h = g - 1,
                            i = Math.floor(h / 2),
                            j = Math.ceil(h / 2),
                            k = Math.max(d - i, 1),
                            l = d + j;
                        k <= i && (l = k + h), l > c && ((k = Math.max(c - h, 1)), (l = c));
                        var m = '<a href="javascript:void(0);" class="dots">…</a>',
                            n = a('<div style="display: none;"></div>'),
                            o = a('<div style="display: none;"></div>');
                        for (e = f = 1; 1 <= c ? f <= c : f >= c; e = 1 <= c ? ++f : --f)
                            e < k && 1 != e
                                ? n.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +e + '">' + e + "</a>")
                                : (e == k && n.children().length && b.append(n).append(a(m)),
                                  e > l && e != c
                                      ? o.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +e + '">' + e + "</a>")
                                      : (e == c && o.children().length && b.append(o).append(a(m)), b.append('<a href="#" class="' + this.config.pagerClass + '" data-page-num="' + +e + '">' + e + "</a>")));
                        d < c && b.append('<a href="#" class="' + this.config.nextButtonClass + '" data-page-num="' + (d + 1) + '">' + this.config.nextButtonLabel + "</a>"),
                            b.find('a[data-page-num="' + d + '"]').addClass(this.config.activeClass),
                            this.addEvents();
                    }),
                    (b.prototype._filterByCurPage = function () {
                        var b = this;
                        this.config.items.get().map(function (c, d) {
                            b._showOnCurPage(d + 1) ? b.showItem(a(c)) : b.hideItem(a(c));
                        });
                    }),
                    (b.prototype._showOnCurPage = function (a) {
                        return this.config.postLimit <= 0 || (this.config.postLimit * (this.getCurPage() - 1) < a && a <= this.config.postLimit * this.getCurPage());
                    }),
                    (b.prototype._setAsActive = function (a) {
                        a.addClass("act").siblings().removeClass("act");
                    }),
                    b
                );
            })(),
            fc = (function () {
                function b(a) {
                    dc.call(this, a), this.appendControls(), this.addEvents(), this.layoutItems(), this.applyLoadingEffects();
                }
                return (
                    (b.prototype = new dc()),
                    (b.prototype.addEvents = function () {
                        a("a", this.config.paginatorContainer).on("click.dtPostsPaginationFilter", { self: this }, this.config.onPaginate);
                    }),
                    (b.prototype.appendControls = function () {
                        var a = this.config.paginatorContainer,
                            b = Math.ceil(this.config.items.length / this.config.postLimit);
                        this.config.curPage < b ? a.removeClass("hidden") : a.addClass("hidden");
                    }),
                    (b.prototype._filterByCurPage = function () {
                        var b = this,
                            c = b.getCurPage() * b.config.postLimit;
                        this.config.items.get().map(function (d, e) {
                            e < c ? b.showItem(a(d)) : b.hideItem(a(d));
                        });
                    }),
                    b
                );
            })(),
            gc = (function () {
                function b(b) {
                    var c = {
                        onCategoryFilter: function () {},
                        onOrderFilter: function () {},
                        onOrderByFilter: function () {},
                        categoryContainer: null,
                        orderContainer: null,
                        orderByContainer: null,
                        postsContainer: null,
                        order: "desc",
                        orderBy: "date",
                        curCategory: "*",
                        filterByUrl: !1,
                    };
                    (this.config = a.extend(c, b)), this.addEvents(), this.config.filterByUrl && "*" !== this.config.curCategory && this._filterPosts();
                }
                return (
                    (b.prototype.addEvents = function () {
                        var b = this;
                        this.config.categoryContainer &&
                            a("a", this.config.categoryContainer).on("click.dtPostsCategoryFilter", { self: this }, function (a) {
                                b.config.onCategoryFilter.call(this, a);
                            }),
                            this.config.orderContainer &&
                                a("a", this.config.orderContainer).on("click.dtPostsOrderFilter", { self: this }, function (a) {
                                    b.config.onOrderFilter.call(this, a);
                                }),
                            this.config.orderByContainer &&
                                a("a", this.config.orderByContainer).on("click.dtPostsOrderByFilter", { self: this }, function (a) {
                                    b.config.onOrderByFilter.call(this, a);
                                });
                    }),
                    (b.prototype.setOrder = function (a) {
                        this.config.order = a;
                    }),
                    (b.prototype.setOrderBy = function (a) {
                        this.config.orderBy = a;
                    }),
                    (b.prototype.setCurCategory = function (a) {
                        this.config.curCategory = a;
                    }),
                    (b.prototype.getFilteredItems = function () {
                        return a(this.config.postsContainer.isotope("getFilteredItemElements"));
                    }),
                    (b.prototype.getItems = function () {
                        return a(this.config.postsContainer.isotope("getItemElements"));
                    }),
                    (b.prototype.layoutItems = function () {
                        this.layout(), this.config.postsContainer.trigger("updateReady");
                    }),
                    (b.prototype.layout = function () {
                        this.config.postsContainer.isotope("layout");
                    }),
                    (b.prototype.scrollToTopOfContainer = function (b, c) {
                        var d = this.config.postsContainer.parent(),
                            e = a(".phantom-sticky").exists(),
                            f = a(".sticky-top-line").exists(),
                            g = d.attr("data-scroll-offset") ? parseInt(d.attr("data-scroll-offset")) : 0;
                        if (e || f) var h = a(".masthead:not(.side-header)").height();
                        else if (a(".phantom-fade").exists() || a(".phantom-slide").exists()) var h = a("#phantom").height();
                        else var h = 0;
                        (!d.hasClass("enable-pagination-scroll") && d.hasClass("the7-elementor-widget")) || a("html, body").animate({ scrollTop: d.offset().top - h - 50 + g }, 400, b ? b.bind(c | this) : void 0);
                    }),
                    (b.prototype._filterPosts = function () {
                        this.config.postsContainer && this.config.postsContainer.isotope({ filter: this.config.curCategory, sortAscending: "asc" == this.config.order, sortBy: this.config.orderBy });
                    }),
                    (b.prototype._setAsActive = function (a) {
                        a.addClass("act").siblings().removeClass("act");
                    }),
                    b
                );
            })(),
            hc = (function () {
                function b(b) {
                    gc.call(this, b);
                    var c = { showOnCurPage: function () {} };
                    (this.config = a.extend(c, this.config)), (this.items = this.config.postsContainer.find(".wf-cell")), (this.filteredItems = this.items);
                }
                return (
                    (b.prototype = new gc()),
                    (b.prototype.getFilteredItems = function () {
                        return this.filteredItems;
                    }),
                    (b.prototype.getItems = function () {
                        return this.items;
                    }),
                    (b.prototype.layout = function () {
                        var b = this;
                        b.items.css("display", "none");
                        var c = 0,
                            d = [];
                        b.filteredItems.each(function () {
                            b.config.showOnCurPage(++c) && (a(this).css("display", "block"), d.push(this));
                        }),
                            (d = a(d)),
                            b.config.postsContainer.data("visibleItems", d),
                            b.config.postsContainer.collage({ images: d });
                    }),
                    (b.prototype._filterPosts = function () {
                        var a = this;
                        a.filteredItems = a.items.filter(a.config.curCategory);
                    }),
                    b
                );
            })();
        !(function () {
            function b(a) {
                gc.call(this, a), (this.items = this.config.postsContainer.find(".wf-cell")), (this.filteredItems = this.items);
            }
            (b.prototype = new gc()),
                (b.prototype.getFilteredItems = function () {
                    return this.filteredItems;
                }),
                (b.prototype.getItems = function () {
                    return this.items;
                }),
                (b.prototype.layout = function () {}),
                (b.prototype._filterPosts = function () {
                    this.items.hide(), (this.filteredItems = this._sortItems(this.items.filter(this.config.curCategory))), this.filteredItems.detach().prependTo(this.config.postsContainer), this.filteredItems.show();
                }),
                (b.prototype._sortItems = function (b) {
                    var c = this.config.orderBy,
                        d = this.config.order,
                        e = a([]);
                    return (
                        (e.$nodesCache = a([])),
                        b.each(function () {
                            var b = a(this);
                            e.push({ node: this, $node: b, name: b.attr("data-name"), date: new Date(b.attr("data-date")) });
                        }),
                        "date" === c && "desc" === d
                            ? e.sort(function (a, b) {
                                  return b.date - a.date;
                              })
                            : "date" === c && "asc" === d
                            ? e.sort(function (a, b) {
                                  return a.date - b.date;
                              })
                            : "name" === c && "desc" === d
                            ? e.sort(function (a, b) {
                                  var c = a.name.toLowerCase(),
                                      d = b.name.toLowerCase();
                                  return c > d ? -1 : c < d ? 1 : 0;
                              })
                            : "name" === c &&
                              "asc" === d &&
                              e.sort(function (a, b) {
                                  var c = a.name.toLowerCase(),
                                      d = b.name.toLowerCase();
                                  return c < d ? -1 : c > d ? 1 : 0;
                              }),
                        e.each(function () {
                            e.$nodesCache.push(this.node);
                        }),
                        e.$nodesCache
                    );
                });
        })();
        a(".dt-shortcode.with-isotope").each(function () {
            var b = a(this),
                c = b.find(".iso-grid, .iso-container"),
                d = c.hasClass("dt-isotope"),
                e = { postsContainer: c, categoryContainer: b.find(".filter-categories"), curCategory: b.find(".filter-categories a.act").attr("data-filter") };
            if (d) {
                var f = b.find(".filter-extras .filter-sorting a.act").attr("data-sort");
                f || (f = b.find(".filter-categories").attr("data-default-order"));
                var g = b.find(".filter-extras .filter-by a.act").attr("data-by");
                g || (g = b.find(".filter-categories").attr("data-default-orderby")),
                    a.extend(e, {
                        order: f,
                        orderBy: g,
                        orderByContainer: b.find(".filter-extras .filter-by"),
                        orderContainer: b.find(".filter-extras .filter-sorting"),
                        onCategoryFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setCurCategory(c.attr("data-filter")),
                                d._filterPosts(),
                                i.hideItem(d.getItems()),
                                i.reset(d.getFilteredItems()),
                                d.layout(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                s(),
                                p();
                        },
                        onOrderFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setOrder(c.attr("data-sort")),
                                d._filterPosts(),
                                i.hideItem(d.getItems()),
                                i.reset(d.getFilteredItems()),
                                d.layout(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                s(),
                                p();
                        },
                        onOrderByFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setOrderBy(c.attr("data-by")),
                                d._filterPosts(),
                                i.hideItem(d.getItems()),
                                i.reset(d.getFilteredItems()),
                                d.layout(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                s(),
                                p();
                        },
                    });
                var h = new gc(e),
                    i = new ec({
                        previousButtonClass: "nav-prev",
                        previousButtonLabel: '<i class="dt-icon-the7-arrow-0-42" aria-hidden="true"></i>',
                        nextButtonClass: "nav-next",
                        nextButtonLabel: '<i class="dt-icon-the7-arrow-0-41" aria-hidden="true"></i>',
                        postLimit: c.attr("data-posts-per-page"),
                        curPage: 1,
                        pagesToShow: c.hasClass("show-all-pages") ? 999 : 5,
                        items: h.getFilteredItems(),
                        paginatorContainer: b.find(".paginator"),
                        onPaginate: function (b, c) {
                            b.preventDefault();
                            var d = a(this),
                                e = b.data.self;
                            e._setAsActive(d), e.setCurPage(d.attr("data-page-num")), e._filterByCurPage(), h.layout(), c || (e.appendControls(), h.scrollToTopOfContainer());
                        },
                    });
            } else {
                var h = new hc(e),
                    i = new ec({
                        previousButtonClass: "nav-prev",
                        previousButtonLabel: '<i class="dt-icon-the7-arrow-0-42" aria-hidden="true"></i>',
                        nextButtonClass: "nav-next",
                        nextButtonLabel: '<i class="dt-icon-the7-arrow-0-41" aria-hidden="true"></i>',
                        postLimit: c.attr("data-posts-per-page"),
                        curPage: 1,
                        pagesToShow: c.hasClass("show-all-pages") ? 999 : 5,
                        items: h.getFilteredItems(),
                        paginatorContainer: b.find(".paginator"),
                    });
                (h.config.onCategoryFilter = function (b) {
                    b.preventDefault();
                    var c = a(this),
                        d = b.data.self;
                    d.config.postsContainer.resetEffects(), d._setAsActive(c), d.setCurCategory(c.attr("data-filter")), d._filterPosts(), i.hideItem(d.getItems()), i.reset(d.getFilteredItems()), d.layout(), s(), p();
                }),
                    (h.config.showOnCurPage = function (a) {
                        return i._showOnCurPage(a);
                    }),
                    (i.config.onPaginate = function (b, c) {
                        b.preventDefault();
                        var d = a(this),
                            e = b.data.self;
                        e._setAsActive(d), e.setCurPage(d.attr("data-page-num")), e._filterByCurPage(), h.layout(), c || (e.appendControls(), h.scrollToTopOfContainer());
                    }),
                    a("a.act", i.config.paginatorContainer).trigger("click.dtPostsPaginationFilter", { onSetup: !0 });
            }
        }),
            (window.the7ApplyMasonryJsFiltering = function (b) {
                function c() {
                    var a = g.find(".button-load-more"),
                        b = a.offset();
                    g.hasClass("hidden") && d(), b && v.scrollTop() > (b.top - v.height()) / 2 && a.trigger("click");
                }
                function d() {
                    v.off("scroll", c);
                }
                function e() {
                    h && (d(), v.on("scroll", c), c());
                }
                var f = b.find(".iso-grid, .iso-container"),
                    g = b.find(".paginator"),
                    h = b.hasClass("lazy-loading-mode"),
                    i = b.find(".filter-extras .filter-sorting a.act").attr("data-sort");
                i || (i = b.find(".filter-categories").attr("data-default-order"));
                var j = b.find(".filter-extras .filter-by a.act").attr("data-by");
                j || (j = b.find(".filter-categories").attr("data-default-orderby")),
                    b.is(".content-rollover-layout-list:not(.disable-layout-hover)") &&
                        f.on("updateReady", function () {
                            a(this).find(".wf-cell.visible .post-entry-wrapper").clickOverlayGradient();
                        });
                var k = {
                        order: i,
                        orderBy: j,
                        curCategory: b.find(".filter-categories a.act").attr("data-filter"),
                        postsContainer: f,
                        categoryContainer: b.find(".filter-categories"),
                        orderByContainer: b.find(".filter-extras .filter-by"),
                        orderContainer: b.find(".filter-extras .filter-sorting"),
                        filterByUrl: !!b.find(".filter.allow-navigation-by-url").length,
                        onCategoryFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setCurCategory(c.attr("data-filter")),
                                d._filterPosts(),
                                m.hideItem(d.getItems()),
                                m.reset(d.getFilteredItems()),
                                d.layoutItems(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                e(),
                                p();
                        },
                        onOrderFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setOrder(c.attr("data-sort")),
                                d._filterPosts(),
                                m.hideItem(d.getItems()),
                                m.reset(d.getFilteredItems()),
                                d.layoutItems(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                e(),
                                p();
                        },
                        onOrderByFilter: function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = b.data.self;
                            d.config.postsContainer.resetEffects(),
                                d._setAsActive(c),
                                d.setOrderBy(c.attr("data-by")),
                                d._filterPosts(),
                                m.hideItem(d.getItems()),
                                m.reset(d.getFilteredItems()),
                                d.layoutItems(),
                                d.config.postsContainer.IsoLayzrInitialisation(),
                                e(),
                                p();
                        },
                    },
                    l = new gc(k);
                switch (b.attr("data-pagination-mode")) {
                    case "load-more":
                        var m = new fc({
                            postLimit: b.attr("data-post-limit"),
                            curPage: 1,
                            items: l.getFilteredItems(),
                            filter: l,
                            paginatorContainer: g,
                            onPaginate: function (a) {
                                var b = a.data.self;
                                a.preventDefault(), b.setCurPage(b.getCurPage() + 1), b.layoutItems(), b.applyLoadingEffects(), b.appendControls();
                            },
                        });
                        break;
                    case "pages":
                        var n = '<i class="dt-icon-the7-arrow-0-42" aria-hidden="true"></i>',
                            o = '<i class="dt-icon-the7-arrow-0-41" aria-hidden="true"></i>',
                            q = "page";
                        b.is("[class*='the7_elements-']") && ((n = '<i class="dt-icon-the7-arrow-35-1" aria-hidden="true"></i>'), (o = '<i class="dt-icon-the7-arrow-35-2" aria-hidden="true"></i>'), (q = "page-numbers filter-item"));
                        var m = new ec({
                            previousButtonClass: "nav-prev",
                            previousButtonLabel: n,
                            nextButtonClass: "nav-next",
                            nextButtonLabel: o,
                            pagerClass: q,
                            postLimit: b.attr("data-post-limit"),
                            curPage: 1,
                            pagesToShow: b.hasClass("show-all-pages") ? 999 : 5,
                            items: l.getFilteredItems(),
                            filter: l,
                            paginatorContainer: g,
                            onPaginate: function (b, c) {
                                var d = a(this),
                                    e = b.data.self;
                                b.preventDefault(), e._setAsActive(d), e.setCurPage(d.attr("data-page-num")), e.layoutItems(), c || (e.appendControls(), l.scrollToTopOfContainer()), e.applyLoadingEffects();
                            },
                        });
                        break;
                    default:
                        var m = new dc();
                }
                e();
            }),
            a(".mode-masonry.jquery-filter, .mode-grid.jquery-filter:not(.dt-css-grid-wrap)").one("IsoReady", function () {
                the7ApplyMasonryJsFiltering(a(this));
            }),
            void 0 !== E && (a.fn.owlCarousel = E);
    });
