! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t, n) {
        var i, r = (t = t || se).createElement("script");
        if (r.text = e, n)
            for (i in be) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function i(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[de.call(e)] || "object" : typeof e
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = i(e);
        return !ye(e) && !_e(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function s(e, t, n) {
        return ye(t) ? Te.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? Te.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? Te.grep(e, function (e) {
            return fe.call(t, e) > -1 !== n
        }) : Te.filter(t, e, n)
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function l(e) {
        var t = {};
        return Te.each(e.match(Oe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function u(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function f(e, t, n, i) {
        var r;
        try {
            e && ye(r = e.promise) ? r.call(e).done(t).fail(n) : e && ye(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function h() {
        se.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), Te.ready()
    }

    function d(e, t) {
        return t.toUpperCase()
    }

    function p(e) {
        return e.replace(He, "ms-").replace(Re, d)
    }

    function g() {
        this.expando = Te.expando + g.uid++
    }

    function m(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = m(n)
                } catch (e) {}
                We.set(e, t, n)
            } else n = void 0;
        return n
    }

    function y(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return Te.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (Te.cssNumber[t] ? "" : "px"),
            c = (Te.cssNumber[t] || "px" !== u && +l) && Ve.exec(Te.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;) Te.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, Te.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function _(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ye[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ye[i] = r, r)
    }

    function b(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = qe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && $e(i) && (r[o] = _(i))) : "none" !== n && (r[o] = "none", qe.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function T(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Te.merge([e], n) : n
    }

    function E(e, t) {
        for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
    }

    function C(e, t, n, r, o) {
        for (var s, a, l, u, c, f, h = t.createDocumentFragment(), d = [], p = 0, g = e.length; p < g; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === i(s)) Te.merge(d, s.nodeType ? [s] : s);
                else if (Ze.test(s)) {
            for (a = a || h.appendChild(t.createElement("div")), l = (ze.exec(s) || ["", ""])[1].toLowerCase(), u = Je[l] || Je._default, a.innerHTML = u[1] + Te.htmlPrefilter(s) + u[2], f = u[0]; f--;) a = a.lastChild;
            Te.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
        } else d.push(t.createTextNode(s));
        for (h.textContent = "", p = 0; s = d[p++];)
            if (r && Te.inArray(s, r) > -1) o && o.push(s);
            else if (c = Te.contains(s.ownerDocument, s), a = T(h.appendChild(s), "script"), c && E(a), n)
            for (f = 0; s = a[f++];) Xe.test(s.type || "") && n.push(s);
        return h
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function A() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function S(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) S(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = x;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function (e) {
            return Te().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = Te.guid++)), e.each(function () {
            Te.event.add(this, t, r, i, n)
        })
    }

    function D(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Te(e).children("tbody")[0] || e : e
    }

    function N(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function I(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function k(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (qe.hasData(e) && (o = qe.access(e), s = qe.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) Te.event.add(t, r, u[r][n])
            }
            We.hasData(e) && (a = We.access(e), l = Te.extend({}, a), We.set(t, l))
        }
    }

    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, i, r) {
        t = ue.apply([], t);
        var o, s, a, l, u, c, f = 0,
            h = e.length,
            d = h - 1,
            p = t[0],
            g = ye(p);
        if (g || h > 1 && "string" == typeof p && !ve.checkClone && st.test(p)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = p.call(this, n, o.html())), j(o, t, i, r)
        });
        if (h && (o = C(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (l = (a = Te.map(T(o, "script"), N)).length; f < h; f++) u = o, f !== d && (u = Te.clone(u, !0, !0), l && Te.merge(a, T(u, "script"))), i.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument, Te.map(a, I), f = 0; f < l; f++) u = a[f], Xe.test(u.type || "") && !qe.access(u, "globalEval") && Te.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Te._evalUrl && Te._evalUrl(u.src) : n(u.textContent.replace(at, ""), c, u))
        }
        return e
    }

    function L(e, t, n) {
        for (var i, r = t ? Te.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Te.cleanData(T(i)), i.parentNode && (n && Te.contains(i.ownerDocument, i) && E(T(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function P(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || ut(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || Te.contains(e.ownerDocument, e) || (s = Te.style(e, t)), !ve.pixelBoxStyles() && lt.test(s) && ct.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function H(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function R(e) {
        if (e in mt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
            if ((e = gt[n] + t) in mt) return e
    }

    function M(e) {
        var t = Te.cssProps[e];
        return t || (t = Te.cssProps[e] = R(e) || e), t
    }

    function q(e, t, n) {
        var i = Ve.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function W(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += Te.css(e, n + Ke[s], !0, r)), i ? ("content" === n && (l -= Te.css(e, "padding" + Ke[s], !0, r)), "margin" !== n && (l -= Te.css(e, "border" + Ke[s] + "Width", !0, r))) : (l += Te.css(e, "padding" + Ke[s], !0, r), "padding" !== n ? l += Te.css(e, "border" + Ke[s] + "Width", !0, r) : a += Te.css(e, "border" + Ke[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function B(e, t, n) {
        var i = ut(e),
            r = P(e, t, i),
            o = "border-box" === Te.css(e, "boxSizing", !1, i),
            s = o;
        if (lt.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (ve.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === Te.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + W(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function F(e, t, n, i, r) {
        return new F.prototype.init(e, t, n, i, r)
    }

    function U() {
        yt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, Te.fx.interval), Te.fx.tick())
    }

    function V() {
        return e.setTimeout(function () {
            vt = void 0
        }), vt = Date.now()
    }

    function K(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ke[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function $(e, t, n) {
        for (var i, r = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function Q(e, t, n) {
        var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
            h = this,
            d = {},
            p = e.style,
            g = e.nodeType && $e(e),
            m = qe.get(e, "fxshow");
        n.queue || (null == (s = Te._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, h.always(function () {
            h.always(function () {
                s.unqueued--, Te.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], _t.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0
                }
                d[i] = m && m[i] || Te.style(e, i)
            } if ((l = !Te.isEmptyObject(t)) || !Te.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = qe.get(e, "display")), "none" === (c = Te.css(e, "display")) && (u ? c = u : (b([e], !0), u = e.style.display || u, c = Te.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === Te.css(e, "float") && (l || (h.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in d) l || (m ? "hidden" in m && (g = m.hidden) : m = qe.access(e, "fxshow", {
                display: u
            }), o && (m.hidden = !g), g && b([e], !0), h.done(function () {
                g || b([e]), qe.remove(e, "fxshow");
                for (i in d) Te.style(e, i, d[i])
            })), l = $(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function Y(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = p(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = Te.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function G(e, t, n) {
        var i, r, o = 0,
            s = G.prefilters.length,
            a = Te.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = vt || V(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: Te.extend({}, t),
                opts: Te.extend(!0, {
                    specialEasing: {},
                    easing: Te.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: vt || V(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = Te.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (Y(c, u.opts.specialEasing); o < s; o++)
            if (i = G.prefilters[o].call(u, e, c, u.opts)) return ye(i.stop) && (Te._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return Te.map(c, $, u), ye(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), Te.fx.timer(Te.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function z(e) {
        return (e.match(Oe) || []).join(" ")
    }

    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : []
    }

    function Z(e, t, n, r) {
        var o;
        if (Array.isArray(t)) Te.each(t, function (t, i) {
            n || kt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== i(t)) r(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, r)
    }

    function ee(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Oe) || [];
            if (ye(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function te(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, Te.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === Ut;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function ne(e, t) {
        var n, i, r = Te.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Te.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function re(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var oe = [],
        se = e.document,
        ae = Object.getPrototypeOf,
        le = oe.slice,
        ue = oe.concat,
        ce = oe.push,
        fe = oe.indexOf,
        he = {},
        de = he.toString,
        pe = he.hasOwnProperty,
        ge = pe.toString,
        me = ge.call(Object),
        ve = {},
        ye = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        _e = function (e) {
            return null != e && e === e.window
        },
        be = {
            type: !0,
            src: !0,
            noModule: !0
        },
        Te = function (e, t) {
            return new Te.fn.init(e, t)
        },
        Ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Te.fn = Te.prototype = {
        jquery: "3.3.1",
        constructor: Te,
        length: 0,
        toArray: function () {
            return le.call(this)
        },
        get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = Te.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return Te.each(this, e)
        },
        map: function (e) {
            return this.pushStack(Te.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: oe.sort,
        splice: oe.splice
    }, Te.extend = Te.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ye(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (Te.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && Te.isPlainObject(n) ? n : {}, s[t] = Te.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, Te.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== de.call(e) || (t = ae(e)) && ("function" != typeof (n = pe.call(t, "constructor") && t.constructor) || ge.call(n) !== me))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            n(e)
        },
        each: function (e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(Ee, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, o, s = 0,
                a = [];
            if (r(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return ue.apply([], a)
        },
        guid: 1,
        support: ve
    }), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = oe[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        he["[object " + t + "]"] = t.toLowerCase()
    });
    var Ce = function (e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, h, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== k && I(t), t = t || k, j)) {
                if (11 !== p && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && R(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return z.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(r)), n
                    } if (b.qsa && !V[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p) d = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(_e, be) : t.setAttribute("id", a = M), o = (c = w(e)).length; o--;) c[o] = "#" + a + " " + f(c[o]);
                        h = c.join(","), d = me.test(e) && u(t.parentNode) || t
                    }
                    if (h) try {
                        return z.apply(n, d.querySelectorAll(h)), n
                    } catch (e) {} finally {
                        a === M && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[M] = !0, e
        }

        function r(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = B++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var u, c, f, h = [W, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === W && u[1] === a) return h[2] = u[2];
                                if (c[o] = h, h[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function m(e, t, n, r, o, s) {
            return r && !r[M] && (r = m(r)), o && !o[M] && (o = m(o, s)), i(function (i, s, a, l) {
                var u, c, f, h = [],
                    d = [],
                    m = s.length,
                    v = i || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, h, e, a, l),
                    _ = n ? o || (i ? e : m || r) ? [] : s : y;
                if (n && n(y, _, a, l), r)
                    for (u = g(_, d), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (_[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = _.length; c--;)(f = _[c]) && u.push(y[c] = f);
                            o(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(f = _[c]) && (u = o ? J(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
                    }
                } else _ = g(_ === s ? _.splice(m, _.length) : _), o ? o(null, s, _, l) : z.apply(s, _)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = h(function (e) {
                    return e === t
                }, s, !0), u = h(function (e) {
                    return J(t, e) > -1
                }, s, !0), c = [function (e, n, i) {
                    var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; a < r; a++)
                if (n = T.relative[e[a].type]) c = [h(d(c), n)];
                else {
                    if ((n = T.filter[e[a].type].apply(null, e[a].matches))[M]) {
                        for (i = ++a; i < r && !T.relative[e[i].type]; i++);
                        return m(a > 1 && d(c), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    c.push(n)
                } return d(c)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function (i, s, a, l, u) {
                    var c, f, h, d = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = S,
                        _ = i || o && T.find.TAG("*", u),
                        b = W += null == y ? 1 : Math.random() || .1,
                        E = _.length;
                    for (u && (S = s === k || s || u); p !== E && null != (c = _[p]); p++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === k || (I(c), a = !j); h = e[f++];)
                                if (h(c, s || k, a)) {
                                    l.push(c);
                                    break
                                } u && (W = b)
                        }
                        r && ((c = !h && c) && d--, i && m.push(c))
                    }
                    if (d += p, r && p !== d) {
                        for (f = 0; h = n[f++];) h(m, v, s, a);
                        if (i) {
                            if (d > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = Y.call(l));
                            v = g(v)
                        }
                        z.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = b, S = y), m
                };
            return r ? i(s) : s
        }
        var _, b, T, E, C, w, x, A, S, D, N, I, k, O, j, L, P, H, R, M = "sizzle" + 1 * new Date,
            q = e.document,
            W = 0,
            B = 0,
            F = n(),
            U = n(),
            V = n(),
            K = function (e, t) {
                return e === t && (N = !0), 0
            },
            $ = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            G = Q.push,
            z = Q.push,
            X = Q.slice,
            J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(ie),
            ce = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            pe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function () {
                I()
            },
            Ee = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            z.apply(Q = X.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (e) {
            z = {
                apply: Q.length ? function (e, t) {
                    G.apply(e, X.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, I = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== k && 9 === i.nodeType && i.documentElement ? (k = i, O = k.documentElement, j = !C(k), q !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = r(function (e) {
                return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = pe.test(k.getElementsByClassName), b.getById = r(function (e) {
                return O.appendChild(e).id = M, !k.getElementsByName || !k.getElementsByName(M).length
            }), b.getById ? (T.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, T.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, T.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && j) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), T.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = b.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && j) return t.getElementsByClassName(e)
            }, P = [], L = [], (b.qsa = pe.test(k.querySelectorAll)) && (r(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]")
            }), r(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (b.matchesSelector = pe.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (e) {
                b.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), P.push("!=", ie)
            }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), t = pe.test(O.compareDocumentPosition), R = t || pe.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, K = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === q && R(q, e) ? -1 : t === k || t.ownerDocument === q && R(q, t) ? 1 : D ? J(D, e) - J(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === k ? -1 : t === k ? 1 : r ? -1 : o ? 1 : D ? J(D, e) - J(D, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, k) : k
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== k && I(e), n = n.replace(le, "='$1']"), b.matchesSelector && j && !V[n + " "] && (!P || !P.test(n)) && (!L || !L.test(n))) try {
                var i = H.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, k, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== k && I(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== k && I(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && $.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== i ? i : b.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(_e, be)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(K), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
        }, E = t.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += E(t);
            return n
        }, (T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = w(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            _ = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = t; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (_ = (d = (u = (c = (f = (h = m)[M] || (h[M] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === W && u[1]) && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop();)
                                    if (1 === h.nodeType && ++_ && h === t) {
                                        c[e] = [W, d, _];
                                        break
                                    }
                            } else if (y && (_ = d = (u = (c = (f = (h = t)[M] || (h[M] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === W && u[1]), !1 === _)
                                for (;
                                    (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((c = (f = h[M] || (h[M] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [W, _]), h !== t)););
                            return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) e[i = J(e, r[s])] = !(t[i] = r[s])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = x(e.replace(oe, "$1"));
                    return r[M] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(ve, ye),
                        function (t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return de.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = T.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[_] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) T.pseudos[_] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(_);
        return c.prototype = T.filters = T.pseudos, T.setFilters = new c, w = t.tokenize = function (e, n) {
            var i, r, o, s, a, l, u, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = T.preFilter; a;) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), a = a.slice(i.length));
                for (s in T.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }, x = t.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = w(e)), n = t.length; n--;)(o = v(t[n]))[M] ? i.push(o) : r.push(o);
                (o = V(e, y(r, i))).selector = e
            }
            return o
        }, A = t.select = function (e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                h = !i && w(e = c.selector || e);
            if (n = n || [], 1 === h.length) {
                if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && j && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(ve, ye), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && f(o))) return z.apply(n, i), n;
                        break
                    }
            }
            return (c || x(e, h))(i, t, !j, n, !t || me.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(K).join("") === M, b.detectDuplicates = !!N, I(), b.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Te.find = Ce, Te.expr = Ce.selectors, Te.expr[":"] = Te.expr.pseudos, Te.uniqueSort = Te.unique = Ce.uniqueSort, Te.text = Ce.getText, Te.isXMLDoc = Ce.isXML, Te.contains = Ce.contains, Te.escapeSelector = Ce.escape;
    var we = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && Te(e).is(n)) break;
                    i.push(e)
                } return i
        },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ae = Te.expr.match.needsContext,
        Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Te.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Te.find.matchesSelector(i, e) ? [i] : [] : Te.find.matches(e, Te.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Te.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(Te(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (Te.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) Te.find(e, r[t], n);
            return i > 1 ? Te.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function (e) {
            return !!s(this, "string" == typeof e && Ae.test(e) ? Te(e) : e || [], !1).length
        }
    });
    var De, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Te.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || De, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Se.test(i[1]) && Te.isPlainObject(t))
                    for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = se.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? void 0 !== n.ready ? n.ready(e) : e(Te) : Te.makeArray(e, this)
    }).prototype = Te.fn, De = Te(se);
    var Ie = /^(?:parents|prev(?:Until|All))/,
        ke = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Te.fn.extend({
        has: function (e) {
            var t = Te(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (Te.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && Te(e);
            if (!Ae.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? Te.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? fe.call(Te(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Te.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return we(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function (e) {
            return a(e, "nextSibling")
        },
        prev: function (e) {
            return a(e, "previousSibling")
        },
        nextAll: function (e) {
            return we(e, "nextSibling")
        },
        prevAll: function (e) {
            return we(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return xe(e.firstChild)
        },
        contents: function (e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), Te.merge([], e.childNodes))
        }
    }, function (e, t) {
        Te.fn[e] = function (n, i) {
            var r = Te.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Te.filter(i, r)), this.length > 1 && (ke[e] || Te.uniqueSort(r), Ie.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    Te.Callbacks = function (e) {
        e = "string" == typeof e ? l(e) : Te.extend({}, e);
        var t, n, r, o, s = [],
            a = [],
            u = -1,
            c = function () {
                for (o = o || e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            f = {
                add: function () {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                        Te.each(n, function (n, r) {
                            ye(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== i(r) && t(r)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return Te.each(arguments, function (e, t) {
                        for (var n;
                            (n = Te.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function (e) {
                    return e ? Te.inArray(e, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return o = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return o = a = [], n || t || (s = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return f
    }, Te.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2], ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return Te.Deferred(function (t) {
                            Te.each(n, function (n, i) {
                                var r = ye(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, r) {
                        function o(t, n, i, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, ye(f) ? r ? f.call(e, o(s, n, u, r), o(s, n, c, r)) : (s++, f.call(e, o(s, n, u, r), o(s, n, c, r), o(s, n, u, n.notifyWith))) : (i !== u && (a = void 0, l = [e]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    h = r ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= s && (i !== c && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? h() : (Te.Deferred.getStackHook && (h.stackTrace = Te.Deferred.getStackHook()), e.setTimeout(h))
                            }
                        }
                        var s = 0;
                        return Te.Deferred(function (e) {
                            n[0][3].add(o(0, e, ye(r) ? r : u, e.notifyWith)), n[1][3].add(o(0, e, ye(t) ? t : u)), n[2][3].add(o(0, e, ye(i) ? i : c))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Te.extend(e, r) : r
                    }
                },
                o = {};
            return Te.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = le.call(arguments),
                o = Te.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (f(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ye(r[n] && r[n].then))) return o.then();
            for (; n--;) f(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Te.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Te.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Le = Te.Deferred();
    Te.fn.ready = function (e) {
        return Le.then(e).catch(function (e) {
            Te.readyException(e)
        }), this
    }, Te.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --Te.readyWait : Te.isReady) || (Te.isReady = !0, !0 !== e && --Te.readyWait > 0 || Le.resolveWith(se, [Te]))
        }
    }), Te.ready.then = Le.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Te.ready) : (se.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
    var Pe = function (e, t, n, r, o, s, a) {
            var l = 0,
                u = e.length,
                c = null == n;
            if ("object" === i(n)) {
                o = !0;
                for (l in n) Pe(e, t, l, n[l], !0, s, a)
            } else if (void 0 !== r && (o = !0, ye(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(Te(e), n)
                })), t))
                for (; l < u; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : s
        },
        He = /^-ms-/,
        Re = /-([a-z])/g,
        Me = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1, g.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[p(t)] = n;
            else
                for (i in t) r[p(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in i ? [t] : t.match(Oe) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || Te.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Te.isEmptyObject(t)
        }
    };
    var qe = new g,
        We = new g,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Fe = /[A-Z]/g;
    Te.extend({
        hasData: function (e) {
            return We.hasData(e) || qe.hasData(e)
        },
        data: function (e, t, n) {
            return We.access(e, t, n)
        },
        removeData: function (e, t) {
            We.remove(e, t)
        },
        _data: function (e, t, n) {
            return qe.access(e, t, n)
        },
        _removeData: function (e, t) {
            qe.remove(e, t)
        }
    }), Te.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = We.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = p(i.slice(5)), v(o, i, r[i]));
                    qe.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                We.set(this, e)
            }) : Pe(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = We.get(o, e))) return n;
                    if (void 0 !== (n = v(o, e))) return n
                } else this.each(function () {
                    We.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                We.remove(this, e)
            })
        }
    }), Te.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = qe.get(e, t), n && (!i || Array.isArray(n) ? i = qe.access(e, t, Te.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = Te.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = Te._queueHooks(e, t),
                s = function () {
                    Te.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return qe.get(e, n) || qe.access(e, n, {
                empty: Te.Callbacks("once memory").add(function () {
                    qe.remove(e, [t + "queue", n])
                })
            })
        }
    }), Te.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Te.queue(this, e, t);
                Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Te.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = Te.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = qe.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ve = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
        Ke = ["Top", "Right", "Bottom", "Left"],
        $e = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && Te.contains(e.ownerDocument, e) && "none" === Te.css(e, "display")
        },
        Qe = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Ye = {};
    Te.fn.extend({
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                $e(this) ? Te(this).show() : Te(this).hide()
            })
        }
    });
    var Ge = /^(?:checkbox|radio)$/i,
        ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Xe = /^$|^module$|\/(?:java|ecma)script/i,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td;
    var Ze = /<|&#?\w+;/;
    ! function () {
        var e = se.createDocumentFragment().appendChild(se.createElement("div")),
            t = se.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = se.documentElement,
        tt = /^key/,
        nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        it = /^([^.]*)(?:\.(.+)|)/;
    Te.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = qe.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && Te.find.matchesSelector(et, r), n.guid || (n.guid = Te.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(Oe) || [""]).length; u--;) d = g = (a = it.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), d && (f = Te.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = Te.event.special[d] || {}, c = Te.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Te.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[d]) || ((h = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), Te.event.global[d] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, g, m = qe.hasData(e) && qe.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(Oe) || [""]).length; u--;)
                    if (a = it.exec(t[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = Te.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || Te.removeEvent(e, d, m.handle), delete l[d])
                    } else
                        for (d in l) Te.event.remove(e, d + t[u], n, i, !0);
                Te.isEmptyObject(l) && qe.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, s, a = Te.event.fix(e),
                l = new Array(arguments.length),
                u = (qe.get(this, "events") || {})[a.type] || [],
                c = Te.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = Te.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((Te.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? Te(r, this).index(u) > -1 : Te.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(Te.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[Te.expando] ? e : new Te.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== A() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === A() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Te.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Te.Event = function (e, t) {
        if (!(this instanceof Te.Event)) return new Te.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Te.expando] = !0
    }, Te.Event.prototype = {
        constructor: Te.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Te.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Te.event.addProp), Te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Te.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || Te.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Te.fn.extend({
        on: function (e, t, n, i) {
            return S(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return S(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Te(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each(function () {
                Te.event.remove(this, e, n, t)
            })
        }
    });
    var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ot = /<script|<style|<link/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i,
        at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Te.extend({
        htmlPrefilter: function (e) {
            return e.replace(rt, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = Te.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e)))
                for (s = T(a), i = 0, r = (o = T(e)).length; i < r; i++) O(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || T(e), s = s || T(a), i = 0, r = o.length; i < r; i++) k(o[i], s[i]);
                else k(e, a);
            return (s = T(a, "script")).length > 0 && E(s, !l && T(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, r = Te.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Me(n)) {
                    if (t = n[qe.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? Te.event.remove(n, i) : Te.removeEvent(n, i, t.handle);
                        n[qe.expando] = void 0
                    }
                    n[We.expando] && (n[We.expando] = void 0)
                }
        }
    }), Te.fn.extend({
        detach: function (e) {
            return L(this, e, !0)
        },
        remove: function (e) {
            return L(this, e)
        },
        text: function (e) {
            return Pe(this, function (e) {
                return void 0 === e ? Te.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return j(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return j(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = D(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return j(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(T(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Te.clone(this, e, t)
            })
        },
        html: function (e) {
            return Pe(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ot.test(e) && !Je[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Te.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Te.cleanData(T(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return j(this, arguments, function (t) {
                var n = this.parentNode;
                Te.inArray(this, e) < 0 && (Te.cleanData(T(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Te.fn[e] = function (e) {
            for (var n, i = [], r = Te(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Te(r[s])[t](n), ce.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var lt = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
        ut = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ct = new RegExp(Ke.join("|"), "i");
    ! function () {
        function t() {
            if (u) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", et.appendChild(l).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, a = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", et.removeChild(l), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, r, o, s, a, l = se.createElement("div"),
            u = se.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === u.style.backgroundClip, Te.extend(ve, {
            boxSizingReliable: function () {
                return t(), r
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), a
            },
            scrollboxSize: function () {
                return t(), o
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/,
        ht = /^--/,
        dt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        gt = ["Webkit", "Moz", "ms"],
        mt = se.createElement("div").style;
    Te.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = p(t),
                    l = ht.test(t),
                    u = e.style;
                if (l || (t = M(a)), s = Te.cssHooks[t] || Te.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = Ve.exec(n)) && r[1] && (n = y(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (Te.cssNumber[a] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = p(t);
            return ht.test(t) || (t = M(a)), (s = Te.cssHooks[t] || Te.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = P(e, t, i)), "normal" === r && t in pt && (r = pt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), Te.each(["height", "width"], function (e, t) {
        Te.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !ft.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, i) : Qe(e, dt, function () {
                    return B(e, t, i)
                })
            },
            set: function (e, n, i) {
                var r, o = ut(e),
                    s = "border-box" === Te.css(e, "boxSizing", !1, o),
                    a = i && W(e, t, i, s, o);
                return s && ve.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - W(e, t, "border", !1, o) - .5)), a && (r = Ve.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), q(e, n, a)
            }
        }
    }), Te.cssHooks.marginLeft = H(ve.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Te.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Te.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ke[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== e && (Te.cssHooks[e + t].set = q)
    }), Te.fn.extend({
        css: function (e, t) {
            return Pe(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = ut(e), r = t.length; s < r; s++) o[t[s]] = Te.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? Te.style(e, t, n) : Te.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Te.Tween = F, F.prototype = {
        constructor: F,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Te.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Te.cssProps[e.prop]] && !Te.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Te.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Te.fx = F.prototype.init, Te.fx.step = {};
    var vt, yt, _t = /^(?:toggle|show|hide)$/,
        bt = /queueHooks$/;
    Te.Animation = Te.extend(G, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Ve.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                ye(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
            },
            prefilters: [Q],
            prefilter: function (e, t) {
                t ? G.prefilters.unshift(e) : G.prefilters.push(e)
            }
        }), Te.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? Te.extend({}, e) : {
                complete: n || !n && t || ye(e) && e,
                duration: e,
                easing: n && t || t && !ye(t) && t
            };
            return Te.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Te.fx.speeds ? i.duration = Te.fx.speeds[i.duration] : i.duration = Te.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ye(i.old) && i.old.call(this), i.queue && Te.dequeue(this, i.queue)
            }, i
        }, Te.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = Te.isEmptyObject(e),
                    o = Te.speed(t, n, i),
                    s = function () {
                        var t = G(this, Te.extend({}, e), o);
                        (r || qe.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = Te.timers,
                        s = qe.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && bt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || Te.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = qe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = Te.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Te.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Te.each(["toggle", "show", "hide"], function (e, t) {
            var n = Te.fn[t];
            Te.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(K(t, !0), e, i, r)
            }
        }), Te.each({
            slideDown: K("show"),
            slideUp: K("hide"),
            slideToggle: K("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Te.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), Te.timers = [], Te.fx.tick = function () {
            var e, t = 0,
                n = Te.timers;
            for (vt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Te.fx.stop(), vt = void 0
        }, Te.fx.timer = function (e) {
            Te.timers.push(e), Te.fx.start()
        }, Te.fx.interval = 13, Te.fx.start = function () {
            yt || (yt = !0, U())
        }, Te.fx.stop = function () {
            yt = null
        }, Te.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Te.fn.delay = function (t, n) {
            return t = Te.fx ? Te.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(r)
                }
            })
        },
        function () {
            var e = se.createElement("input"),
                t = se.createElement("select").appendChild(se.createElement("option"));
            e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = t.selected, (e = se.createElement("input")).value = "t", e.type = "radio", ve.radioValue = "t" === e.value
        }();
    var Tt, Et = Te.expr.attrHandle;
    Te.fn.extend({
        attr: function (e, t) {
            return Pe(this, Te.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Te.removeAttr(this, e)
            })
        }
    }), Te.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Te.prop(e, t, n) : (1 === o && Te.isXMLDoc(e) || (r = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void Te.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Te.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ve.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(Oe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), Tt = {
        set: function (e, t, n) {
            return !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Et[t] || Te.find.attr;
        Et[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = Et[s], Et[s] = r, r = null != n(e, t, i) ? s : null, Et[s] = o), r
        }
    });
    var Ct = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    Te.fn.extend({
        prop: function (e, t) {
            return Pe(this, Te.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Te.propFix[e] || e]
            })
        }
    }), Te.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, r = Te.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Te.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ve.optSelected || (Te.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Te.propFix[this.toLowerCase()] = this
    }), Te.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function (t) {
                Te(this).addClass(e.call(this, t, X(this)))
            });
            if ((t = J(e)).length)
                for (; n = this[l++];)
                    if (r = X(n), i = 1 === n.nodeType && " " + z(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = z(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (ye(e)) return this.each(function (t) {
                Te(this).removeClass(e.call(this, t, X(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = J(e)).length)
                for (; n = this[l++];)
                    if (r = X(n), i = 1 === n.nodeType && " " + z(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = z(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function (n) {
                Te(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function () {
                var t, r, o, s;
                if (i)
                    for (r = 0, o = Te(this), s = J(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = X(this)) && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : qe.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + z(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    Te.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = ye(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, Te(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Te.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = Te.valHooks[r.type] || Te.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
        }
    }), Te.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Te.find.attr(e, "value");
                    return null != t ? t : z(Te.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        u = a ? s + 1 : r.length;
                    for (i = s < 0 ? u : a ? s : 0; i < u; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = Te(n).val(), a) return t;
                            l.push(t)
                        } return l
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = Te.makeArray(t), s = r.length; s--;)((i = r[s]).selected = Te.inArray(Te.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Te.each(["radio", "checkbox"], function () {
        Te.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1
            }
        }, ve.checkOn || (Te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ve.focusin = "onfocusin" in e;
    var At = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
            e.stopPropagation()
        };
    Te.extend(Te.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, l, u, c, f, h, d = [i || se],
                p = pe.call(t, "type") ? t.type : t,
                g = pe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = a = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !At.test(p + Te.event.triggered) && (p.indexOf(".") > -1 && (p = (g = p.split(".")).shift(), g.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[Te.expando] ? t : new Te.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Te.makeArray(n, [t]), f = Te.event.special[p] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !_e(i)) {
                    for (l = f.delegateType || p, At.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || se) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) h = s, t.type = o > 1 ? l : f.bindType || p, (c = (qe.get(s, "events") || {})[t.type] && qe.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && Me(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Me(i) || u && ye(i[p]) && !_e(i) && ((a = i[u]) && (i[u] = null), Te.event.triggered = p, t.isPropagationStopped() && h.addEventListener(p, St), i[p](), t.isPropagationStopped() && h.removeEventListener(p, St), Te.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = Te.extend(new Te.Event, n, {
                type: e,
                isSimulated: !0
            });
            Te.event.trigger(i, null, t)
        }
    }), Te.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Te.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Te.event.trigger(e, t, n, !0)
        }
    }), ve.focusin || Te.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            Te.event.simulate(t, e.target, Te.event.fix(e))
        };
        Te.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = qe.access(i, t);
                r || i.addEventListener(e, n, !0), qe.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = qe.access(i, t) - 1;
                r ? qe.access(i, t, r) : (i.removeEventListener(e, n, !0), qe.remove(i, t))
            }
        }
    });
    var Dt = e.location,
        Nt = Date.now(),
        It = /\?/;
    Te.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Te.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/,
        Ot = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    Te.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = ye(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return i.join("&")
    }, Te.fn.extend({
        serialize: function () {
            return Te.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Te.prop(this, "elements");
                return e ? Te.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Te(this).is(":disabled") && Lt.test(this.nodeName) && !jt.test(e) && (this.checked || !Ge.test(e))
            }).map(function (e, t) {
                var n = Te(this).val();
                return null == n ? null : Array.isArray(n) ? Te.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g,
        Ht = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Ft = {},
        Ut = {},
        Vt = "*/".concat("*"),
        Kt = se.createElement("a");
    Kt.href = Dt.href, Te.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: qt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Te.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? ne(ne(e, Te.ajaxSettings), t) : ne(Te.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Ft),
        ajaxTransport: ee(Ut),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var u, h, d, b, T, E = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (b = ie(p, C, i)), b = re(p, b, C, u), u ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (Te.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (Te.etag[o] = T)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = b.state, h = b.data, u = !(d = b.error))) : (d = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || E) + "", u ? v.resolveWith(g, [h, E, C]) : v.rejectWith(g, [C, E, d]), C.statusCode(_), _ = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : d]), y.fireWith(g, [C, E]), f && (m.trigger("ajaxComplete", [C, p]), --Te.active || Te.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, f, h, d, p = Te.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? Te(g) : Te.event,
                v = Te.Deferred(),
                y = Te.Callbacks("once memory"),
                _ = p.statusCode || {},
                b = {},
                T = {},
                E = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Mt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (v.promise(C), p.url = ((t || p.url || Dt.href) + "").replace(Bt, Dt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Oe) || [""], null == p.crossDomain) {
                u = se.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Kt.protocol + "//" + Kt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = Te.param(p.data, p.traditional)), te(Ft, p, n, C), c) return C;
            (f = Te.event && p.global) && 0 == Te.active++ && Te.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Wt.test(p.type), o = p.url.replace(Ht, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pt, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (It.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Rt, "$1"), d = (It.test(o) ? "&" : "?") + "_=" + Nt++ + d), p.url = o + d), p.ifModified && (Te.lastModified[o] && C.setRequestHeader("If-Modified-Since", Te.lastModified[o]), Te.etag[o] && C.setRequestHeader("If-None-Match", Te.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) C.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();
            if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = te(Ut, p, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), c) return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send(b, i)
                } catch (e) {
                    if (c) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return Te.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Te.get(e, void 0, t, "script")
        }
    }), Te.each(["get", "post"], function (e, t) {
        Te[t] = function (e, n, i, r) {
            return ye(n) && (r = r || i, i = n, n = void 0), Te.ajax(Te.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, Te.isPlainObject(e) && e))
        }
    }), Te._evalUrl = function (e) {
        return Te.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, Te.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return ye(e) ? this.each(function (t) {
                Te(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Te(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ye(e);
            return this.each(function (n) {
                Te(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                Te(this).replaceWith(this.childNodes)
            }), this
        }
    }), Te.expr.pseudos.hidden = function (e) {
        return !Te.expr.pseudos.visible(e)
    }, Te.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Te.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var $t = {
            0: 200,
            1223: 204
        },
        Qt = Te.ajaxSettings.xhr();
    ve.cors = !!Qt && "withCredentials" in Qt, ve.ajax = Qt = !!Qt, Te.ajaxTransport(function (t) {
        var n, i;
        if (ve.cors || Qt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o($t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), Te.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), Te.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return Te.globalEval(e), e
            }
        }
    }), Te.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Te.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = Te("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), se.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    Te.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || Te.expando + "_" + Nt++;
            return this[e] = !0, e
        }
    }), Te.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Gt, "$1" + r) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || Te.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? Te(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), s && ye(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ve.createHTMLDocument = function () {
        var e = se.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Te.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (ve.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), r = Se.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = C([e], t, o), o && o.length && Te(o).remove(), Te.merge([], r.childNodes))
    }, Te.fn.load = function (e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = z(e.slice(a)), e = e.slice(0, a)), ye(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && Te.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? Te("<div>").append(Te.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Te.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Te.expr.pseudos.animated = function (e) {
        return Te.grep(Te.timers, function (t) {
            return e === t.elem
        }).length
    }, Te.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, u = Te.css(e, "position"),
                c = Te(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = Te.css(e, "top"), l = Te.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ye(t) && (t = t.call(e, n, Te.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, Te.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Te.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Te.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = Te(e).offset()).top += Te.css(e, "borderTopWidth", !0), r.left += Te.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - Te.css(i, "marginTop", !0),
                    left: t.left - r.left - Te.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent;
                return e || et
            })
        }
    }), Te.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        Te.fn[e] = function (i) {
            return Pe(this, function (e, i, r) {
                var o;
                if (_e(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), Te.each(["top", "left"], function (e, t) {
        Te.cssHooks[t] = H(ve.pixelPosition, function (e, n) {
            if (n) return n = P(e, t), lt.test(n) ? Te(e).position()[t] + "px" : n
        })
    }), Te.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Te.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            Te.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Pe(this, function (t, n, r) {
                    var o;
                    return _e(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Te.css(t, n, a) : Te.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        Te.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Te.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Te.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Te.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ye(e)) return i = le.call(arguments, 2), r = function () {
            return e.apply(t || this, i.concat(le.call(arguments)))
        }, r.guid = e.guid = e.guid || Te.guid++, r
    }, Te.holdReady = function (e) {
        e ? Te.readyWait++ : Te.ready(!0)
    }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = o, Te.isFunction = ye, Te.isWindow = _e, Te.camelCase = p, Te.type = i, Te.now = Date.now, Te.isNumeric = function (e) {
        var t = Te.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Te
    });
    var zt = e.jQuery,
        Xt = e.$;
    return Te.noConflict = function (t) {
        return e.$ === Te && (e.$ = Xt), t && e.jQuery === Te && (e.jQuery = zt), Te
    }, t || (e.jQuery = e.$ = Te), Te
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o() {
        return (o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }).apply(this, arguments)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s, a, l, u, c, f, h, d, p, g, m, v, y, _, b, T, E, C, w, x, A, S, D, N, I, k, O = function (e) {
            function t(t) {
                var n = this,
                    r = !1;
                return e(this).one(i.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || i.triggerTransitionEnd(n)
                }, t), this
            }
            var n = !1,
                i = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function (t) {
                        var n, i = t.getAttribute("data-target");
                        i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                        try {
                            return e(document).find(i).length > 0 ? i : null
                        } catch (e) {
                            return null
                        }
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (t) {
                        e(t).trigger(n.end)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(n)
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function (e, t, n) {
                        for (var r in n)
                            if (Object.prototype.hasOwnProperty.call(n, r)) {
                                var o = n[r],
                                    s = t[r],
                                    a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                                if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                            } var l
                    }
                };
            return n = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = t, i.supportsTransitionEnd() && (e.event.special[i.TRANSITION_END] = {
                bindType: n.end,
                delegateType: n.end,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), i
        }(t),
        j = (a = "alert", u = "." + (l = "bs.alert"), c = (s = t).fn[a], f = {
            CLOSE: "close" + u,
            CLOSED: "closed" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        }, h = "alert", d = "fade", p = "show", g = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.close = function (e) {
                e = e || this._element;
                var t = this._getRootElement(e);
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function () {
                s.removeData(this._element, l), this._element = null
            }, t._getRootElement = function (e) {
                var t = O.getSelectorFromElement(e),
                    n = !1;
                return t && (n = s(t)[0]), n || (n = s(e).closest("." + h)[0]), n
            }, t._triggerCloseEvent = function (e) {
                var t = s.Event(f.CLOSE);
                return s(e).trigger(t), t
            }, t._removeElement = function (e) {
                var t = this;
                s(e).removeClass(p), O.supportsTransitionEnd() && s(e).hasClass(d) ? s(e).one(O.TRANSITION_END, function (n) {
                    return t._destroyElement(e, n)
                }).emulateTransitionEnd(150) : this._destroyElement(e)
            }, t._destroyElement = function (e) {
                s(e).detach().trigger(f.CLOSED).remove()
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = s(this),
                        i = n.data(l);
                    i || (i = new e(this), n.data(l, i)), "close" === t && i[t](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), e
        }(), s(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), s.fn[a] = g._jQueryInterface, s.fn[a].Constructor = g, s.fn[a].noConflict = function () {
            return s.fn[a] = c, g._jQueryInterface
        }, g),
        L = (v = "button", _ = "." + (y = "bs.button"), b = ".data-api", T = (m = t).fn[v], E = "active", C = "btn", w = "focus", x = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', S = "input", D = ".active", N = ".btn", I = {
            CLICK_DATA_API: "click" + _ + b,
            FOCUS_BLUR_DATA_API: "focus" + _ + b + " blur" + _ + b
        }, k = function () {
            function e(e) {
                this._element = e
            }
            var t = e.prototype;
            return t.toggle = function () {
                var e = !0,
                    t = !0,
                    n = m(this._element).closest(A)[0];
                if (n) {
                    var i = m(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && m(this._element).hasClass(E)) e = !1;
                            else {
                                var r = m(n).find(D)[0];
                                r && m(r).removeClass(E)
                            } if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(E), m(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(E)), e && m(this._element).toggleClass(E)
            }, t.dispose = function () {
                m.removeData(this._element, y), this._element = null
            }, e._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = m(this).data(y);
                    n || (n = new e(this), m(this).data(y, n)), "toggle" === t && n[t]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), e
        }(), m(document).on(I.CLICK_DATA_API, x, function (e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(C) || (t = m(t).closest(N)), k._jQueryInterface.call(m(t), "toggle")
        }).on(I.FOCUS_BLUR_DATA_API, x, function (e) {
            var t = m(e.target).closest(N)[0];
            m(t).toggleClass(w, /^focus(in)?$/.test(e.type))
        }), m.fn[v] = k._jQueryInterface, m.fn[v].Constructor = k, m.fn[v].noConflict = function () {
            return m.fn[v] = T, k._jQueryInterface
        }, k),
        P = function (e) {
            var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                s = e.fn[t],
                a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                u = "next",
                c = "prev",
                f = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                h = "active",
                d = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                p = function () {
                    function s(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners()
                    }
                    var p = s.prototype;
                    return p.next = function () {
                            this._isSliding || this._slide(u)
                        }, p.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                        }, p.prev = function () {
                            this._isSliding || this._slide(c)
                        }, p.pause = function (t) {
                            t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && O.supportsTransitionEnd() && (O.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, p.cycle = function (e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, p.to = function (t) {
                            var n = this;
                            this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding) e(this._element).one(f.SLID, function () {
                                    return n.to(t)
                                });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var r = t > i ? u : c;
                                    this._slide(r, this._items[t])
                                }
                        }, p.dispose = function () {
                            e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, p._getConfig = function (e) {
                            return e = o({}, a, e), O.typeCheckConfig(t, e, l), e
                        }, p._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard && e(this._element).on(f.KEYDOWN, function (e) {
                                return t._keydown(e)
                            }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function (e) {
                                return t.pause(e)
                            }).on(f.MOUSELEAVE, function (e) {
                                return t.cycle(e)
                            }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function () {
                                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval)
                            }))
                        }, p._keydown = function (e) {
                            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next()
                            }
                        }, p._getItemIndex = function (t) {
                            return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t)
                        }, p._getItemByDirection = function (e, t) {
                            var n = e === u,
                                i = e === c,
                                r = this._getItemIndex(t),
                                o = this._items.length - 1;
                            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                            var s = (r + (e === c ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                        },
                        p._triggerSlideEvent = function (t, n) {
                            var i = this._getItemIndex(t),
                                r = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),
                                o = e.Event(f.SLIDE, {
                                    relatedTarget: t,
                                    direction: n,
                                    from: r,
                                    to: i
                                });
                            return e(this._element).trigger(o), o
                        }, p._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                e(this._indicatorsElement).find(d.ACTIVE).removeClass(h);
                                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                n && e(n).addClass(h)
                            }
                        }, p._slide = function (t, n) {
                            var i, r, o, s = this,
                                a = e(this._element).find(d.ACTIVE_ITEM)[0],
                                l = this._getItemIndex(a),
                                c = n || a && this._getItemByDirection(t, a),
                                p = this._getItemIndex(c),
                                g = Boolean(this._interval);
                            if (t === u ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), c && e(c).hasClass(h)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
                                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(c);
                                var m = e.Event(f.SLID, {
                                    relatedTarget: c,
                                    direction: o,
                                    from: l,
                                    to: p
                                });
                                O.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(c).addClass(r), O.reflow(c), e(a).addClass(i), e(c).addClass(i), e(a).one(O.TRANSITION_END, function () {
                                    e(c).removeClass(i + " " + r).addClass(h), e(a).removeClass(h + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                                        return e(s._element).trigger(m)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (e(a).removeClass(h), e(c).addClass(h), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle()
                            }
                        }, s._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this).data(n),
                                    r = o({}, a, e(this).data());
                                "object" == typeof t && (r = o({}, r, t));
                                var l = "string" == typeof t ? t : r.slide;
                                if (i || (i = new s(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);
                                else if ("string" == typeof l) {
                                    if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                                    i[l]()
                                } else r.interval && (i.pause(), i.cycle())
                            })
                        }, s._dataApiClickHandler = function (t) {
                            var i = O.getSelectorFromElement(this);
                            if (i) {
                                var r = e(i)[0];
                                if (r && e(r).hasClass("carousel")) {
                                    var a = o({}, e(r).data(), e(this).data()),
                                        l = this.getAttribute("data-slide-to");
                                    l && (a.interval = !1), s._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                                }
                            }
                        }, r(s, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), s
                }();
            return e(document).on(f.CLICK_DATA_API, d.DATA_SLIDE, p._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function () {
                e(d.DATA_RIDE).each(function () {
                    var t = e(this);
                    p._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
                return e.fn[t] = s, p._jQueryInterface
            }, p
        }(t),
        H = function (e) {
            var t = "collapse",
                n = "bs.collapse",
                i = "." + n,
                s = e.fn[t],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                u = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "show",
                f = "collapse",
                h = "collapsing",
                d = "collapsed",
                p = "width",
                g = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function () {
                    function i(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                s = O.getSelectorFromElement(o);
                            null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var s = i.prototype;
                    return s.toggle = function () {
                        e(this._element).hasClass(c) ? this.hide() : this.show()
                    }, s.show = function () {
                        var t, r, o = this;
                        if (!(this._isTransitioning || e(this._element).hasClass(c) || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
                            var s = e.Event(u.SHOW);
                            if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null));
                                var a = this._getDimension();
                                e(this._element).removeClass(f).addClass(h), this._element.style[a] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function () {
                                    e(o._element).removeClass(h).addClass(f).addClass(c), o._element.style[a] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                                };
                                if (O.supportsTransitionEnd()) {
                                    var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    e(this._element).one(O.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                                } else l()
                            }
                        }
                    }, s.hide = function () {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(c)) {
                            var n = e.Event(u.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", O.reflow(this._element), e(this._element).addClass(h).removeClass(f).removeClass(c), this._triggerArray.length > 0)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            s = O.getSelectorFromElement(o);
                                        null !== s && (e(s).hasClass(c) || e(o).addClass(d).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var a = function () {
                                    t.setTransitioning(!1), e(t._element).removeClass(h).addClass(f).trigger(u.HIDDEN)
                                };
                                this._element.style[i] = "", O.supportsTransitionEnd() ? e(this._element).one(O.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, s.setTransitioning = function (e) {
                        this._isTransitioning = e
                    }, s.dispose = function () {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, s._getConfig = function (e) {
                        return (e = o({}, a, e)).toggle = Boolean(e.toggle), O.typeCheckConfig(t, e, l), e
                    }, s._getDimension = function () {
                        return e(this._element).hasClass(p) ? p : "height"
                    }, s._getParent = function () {
                        var t = this,
                            n = null;
                        O.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(r).each(function (e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, s._addAriaAndCollapsedClass = function (t, n) {
                        if (t) {
                            var i = e(t).hasClass(c);
                            n.length > 0 && e(n).toggleClass(d, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function (t) {
                        var n = O.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }, i._jQueryInterface = function (t) {
                        return this.each(function () {
                            var r = e(this),
                                s = r.data(n),
                                l = o({}, a, r.data(), "object" == typeof t && t);
                            if (!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || (s = new i(this, l), r.data(n, s)), "string" == typeof t) {
                                if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                                s[t]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), i
                }();
            return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = O.getSelectorFromElement(this);
                e(r).each(function () {
                    var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    m._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
                return e.fn[t] = s, m._jQueryInterface
            }, m
        }(t),
        R = function (e) {
            var t = "dropdown",
                i = "bs.dropdown",
                s = "." + i,
                a = ".data-api",
                l = e.fn[t],
                u = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click" + s + a,
                    KEYDOWN_DATA_API: "keydown" + s + a,
                    KEYUP_DATA_API: "keyup" + s + a
                },
                f = "disabled",
                h = "show",
                d = "dropup",
                p = "dropdown-menu-right",
                g = '[data-toggle="dropdown"]',
                m = ".dropdown-menu",
                v = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                y = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                _ = function () {
                    function a(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var l = a.prototype;
                    return l.toggle = function () {
                        if (!this._element.disabled && !e(this._element).hasClass(f)) {
                            var t = a._getParentFromElement(this._element),
                                i = e(this._menu).hasClass(h);
                            if (a._clearMenus(), !i) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    o = e.Event(c.SHOW, r);
                                if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        e(t).hasClass(d) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(p)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(c.SHOWN, r))
                                }
                            }
                        }
                    }, l.dispose = function () {
                        e.removeData(this._element, i), e(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, l.update = function () {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, l._addEventListeners = function () {
                        var t = this;
                        e(this._element).on(c.CLICK, function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, l._getConfig = function (n) {
                        return n = o({}, this.constructor.Default, e(this._element).data(), n), O.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, l._getMenuElement = function () {
                        if (!this._menu) {
                            var t = a._getParentFromElement(this._element);
                            this._menu = e(t).find(m)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function () {
                        var t = e(this._element).parent(),
                            n = "bottom-start";
                        return t.hasClass(d) ? (n = "top-start", e(this._menu).hasClass(p) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(p) && (n = "bottom-end"), n
                    }, l._detectNavbar = function () {
                        return e(this._element).closest(".navbar").length > 0
                    }, l._getPopperConfig = function () {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function (t) {
                            return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                        } : t.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data(i);
                            if (n || (n = new a(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, a._clearMenus = function (t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var n = e.makeArray(e(g)), r = 0; r < n.length; r++) {
                                var o = a._getParentFromElement(n[r]),
                                    s = e(n[r]).data(i),
                                    l = {
                                        relatedTarget: n[r]
                                    };
                                if (s) {
                                    var u = s._menu;
                                    if (e(o).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                                        var f = e.Event(c.HIDE, l);
                                        e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(u).removeClass(h), e(o).removeClass(h).trigger(e.Event(c.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function (t) {
                        var n, i = O.getSelectorFromElement(t);
                        return i && (n = e(i)[0]), n || t.parentNode
                    }, a._dataApiKeydownHandler = function (t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(m).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
                            var n = a._getParentFromElement(this),
                                i = e(n).hasClass(h);
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var r = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== r.length) {
                                    var o = r.indexOf(t.target);
                                    38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var s = e(n).find(g)[0];
                                    e(s).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return v
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return y
                        }
                    }]), a
                }();
            return e(document).on(c.KEYDOWN_DATA_API, g, _._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, m, _._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, _._clearMenus).on(c.CLICK_DATA_API, g, function (t) {
                t.preventDefault(), t.stopPropagation(), _._jQueryInterface.call(e(this), "toggle")
            }).on(c.CLICK_DATA_API, ".dropdown form", function (e) {
                e.stopPropagation()
            }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
                return e.fn[t] = l, _._jQueryInterface
            }, _
        }(t),
        M = function (e) {
            var t = "bs.modal",
                n = "." + t,
                i = e.fn.modal,
                s = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                a = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    FOCUSIN: "focusin" + n,
                    RESIZE: "resize" + n,
                    CLICK_DISMISS: "click.dismiss" + n,
                    KEYDOWN_DISMISS: "keydown.dismiss" + n,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                    CLICK_DATA_API: "click" + n + ".data-api"
                },
                u = "modal-open",
                c = "fade",
                f = "show",
                h = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                d = function () {
                    function i(t, n) {
                        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var d = i.prototype;
                    return d.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, d.show = function (t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            O.supportsTransitionEnd() && e(this._element).hasClass(c) && (this._isTransitioning = !0);
                            var i = e.Event(l.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(u), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, h.DATA_DISMISS, function (e) {
                                return n.hide(e)
                            }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                                e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return n._showElement(t)
                            }))
                        }
                    }, d.hide = function (t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(l.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = O.supportsTransitionEnd() && e(this._element).hasClass(c);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(f), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(O.TRANSITION_END, function (e) {
                                    return n._hideModal(e)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, d.dispose = function () {
                        e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, d.handleUpdate = function () {
                        this._adjustDialog()
                    }, d._getConfig = function (e) {
                        return e = o({}, s, e), O.typeCheckConfig("modal", e, a), e
                    }, d._showElement = function (t) {
                        var n = this,
                            i = O.supportsTransitionEnd() && e(this._element).hasClass(c);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && O.reflow(this._element), e(this._element).addClass(f), this._config.focus && this._enforceFocus();
                        var r = e.Event(l.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function () {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        i ? e(this._dialog).one(O.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, d._enforceFocus = function () {
                        var t = this;
                        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, d._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
                    }, d._setResizeEvent = function () {
                        var t = this;
                        this._isShown ? e(window).on(l.RESIZE, function (e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(l.RESIZE)
                    }, d._hideModal = function () {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                            e(document.body).removeClass(u), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                        })
                    }, d._removeBackdrop = function () {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, d._showBackdrop = function (t) {
                        var n = this,
                            i = e(this._element).hasClass(c) ? c : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = O.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && O.reflow(this._backdrop), e(this._backdrop).addClass(f), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(O.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(f);
                            var o = function () {
                                n._removeBackdrop(), t && t()
                            };
                            O.supportsTransitionEnd() && e(this._element).hasClass(c) ? e(this._backdrop).one(O.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else t && t()
                    }, d._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, d._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, d._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, d._setScrollbar = function () {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(h.FIXED_CONTENT).each(function (n, i) {
                                var r = e(i)[0].style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(h.STICKY_CONTENT).each(function (n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            }), e(h.NAVBAR_TOGGLER).each(function (n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, d._resetScrollbar = function () {
                        e(h.FIXED_CONTENT).each(function (t, n) {
                            var i = e(n).data("padding-right");
                            void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                        }), e(h.STICKY_CONTENT + ", " + h.NAVBAR_TOGGLER).each(function (t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                    }, d._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, i._jQueryInterface = function (n, r) {
                        return this.each(function () {
                            var s = e(this).data(t),
                                a = o({}, i.Default, e(this).data(), "object" == typeof n && n);
                            if (s || (s = new i(this, a), e(this).data(t, s)), "string" == typeof n) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n](r)
                            } else a.show && s.show(r)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return s
                        }
                    }]), i
                }();
            return e(document).on(l.CLICK_DATA_API, h.DATA_TOGGLE, function (n) {
                var i, r = this,
                    s = O.getSelectorFromElement(this);
                s && (i = e(s)[0]);
                var a = e(i).data(t) ? "toggle" : o({}, e(i).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                var u = e(i).one(l.SHOW, function (t) {
                    t.isDefaultPrevented() || u.one(l.HIDDEN, function () {
                        e(r).is(":visible") && r.focus()
                    })
                });
                d._jQueryInterface.call(e(i), a, this)
            }), e.fn.modal = d._jQueryInterface, e.fn.modal.Constructor = d, e.fn.modal.noConflict = function () {
                return e.fn.modal = i, d._jQueryInterface
            }, d
        }(t),
        q = function (e) {
            var t = "tooltip",
                i = "bs.tooltip",
                s = "." + i,
                a = e.fn[t],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                u = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                h = "show",
                d = "out",
                p = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    INSERTED: "inserted" + s,
                    CLICK: "click" + s,
                    FOCUSIN: "focusin" + s,
                    FOCUSOUT: "focusout" + s,
                    MOUSEENTER: "mouseenter" + s,
                    MOUSELEAVE: "mouseleave" + s
                },
                g = "fade",
                m = "show",
                v = "hover",
                y = "focus",
                _ = function () {
                    function a(e, t) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var _ = a.prototype;
                    return _.enable = function () {
                        this._isEnabled = !0
                    }, _.disable = function () {
                        this._isEnabled = !1
                    }, _.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, _.toggle = function (t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, _.dispose = function () {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, _.show = function () {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(i);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = O.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(g);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                u = this._getAttachment(l);
                            this.addAttachmentClass(u);
                            var c = !1 === this.config.container ? document.body : e(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: u,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function (e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(o).addClass(m), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var f = function () {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === d && t._leave(null, t)
                            };
                            O.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(O.TRANSITION_END, f).emulateTransitionEnd(a._TRANSITION_DURATION) : f()
                        }
                    }, _.hide = function (t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function () {
                                n._hoverState !== h && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(m), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, O.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(i).one(O.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, _.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, _.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, _.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, _.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, _.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(g + " " + m)
                    }, _.setElementContent = function (t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, _.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, _._getAttachment = function (e) {
                        return c[e.toUpperCase()]
                    }, _._setListeners = function () {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function (n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e)
                            });
                            else if ("manual" !== n) {
                                var i = n === v ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = n === v ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function (e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function (e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = o({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, _._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, _._enter = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? y : v] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                            n._hoverState === h && n.show()
                        }, n.config.delay.show) : n.show())
                    }, _._leave = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? y : v] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                            n._hoverState === d && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, _._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }, _._getConfig = function (n) {
                        return "number" == typeof (n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), O.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, _._getDelegateConfig = function () {
                        var e = {};
                        if (this.config)
                            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, _._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(l);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, _._handlePopperPlacementChange = function (e) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, _._fixTransition = function () {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data(i),
                                r = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new a(this, r), e(this).data(i, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return s
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return u
                        }
                    }]), a
                }();
            return e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
                return e.fn[t] = a, _._jQueryInterface
            }, _
        }(t),
        W = function (e) {
            var t = "popover",
                n = "bs.popover",
                i = "." + n,
                s = e.fn[t],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = o({}, q.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                u = o({}, q.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                f = function (o) {
                    function s() {
                        return o.apply(this, arguments) || this
                    }
                    var f, h;
                    h = o, (f = s).prototype = Object.create(h.prototype), f.prototype.constructor = f, f.__proto__ = h;
                    var d = s.prototype;
                    return d.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, d.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, d.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, d.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(".popover-header"), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
                    }, d._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, d._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(a);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, s._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n),
                                r = "object" == typeof t ? t : null;
                            if ((i || !/destroy|hide/.test(t)) && (i || (i = new s(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return c
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return u
                        }
                    }]), s
                }(q);
            return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
                return e.fn[t] = s, f._jQueryInterface
            }, f
        }(t),
        B = function (e) {
            var t = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                s = e.fn[t],
                a = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                u = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + ".data-api"
                },
                c = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                h = "position",
                d = function () {
                    function s(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function (e) {
                            return i._process(e)
                        }), this.refresh(), this._process()
                    }
                    var d = s.prototype;
                    return d.refresh = function () {
                        var t = this,
                            n = this._scrollElement === this._scrollElement.window ? "offset" : h,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === h ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                            var n, o = O.getSelectorFromElement(t);
                            if (o && (n = e(o)[0]), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function (e) {
                            return e
                        }).sort(function (e, t) {
                            return e[0] - t[0]
                        }).forEach(function (e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, d.dispose = function () {
                        e.removeData(this._element, n), e(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, d._getConfig = function (n) {
                        if ("string" != typeof (n = o({}, a, n)).target) {
                            var i = e(n.target).attr("id");
                            i || (i = O.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return O.typeCheckConfig(t, n, l), n
                    }, d._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, d._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, d._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, d._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, d._activate = function (t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass("dropdown-item") ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)), e(this._scrollElement).trigger(u.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, d._clear = function () {
                        e(this._selector).filter(f.ACTIVE).removeClass(c)
                    }, s._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this).data(n);
                            if (i || (i = new s(this, "object" == typeof t && t), e(this).data(n, i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), s
                }();
            return e(window).on(u.LOAD_DATA_API, function () {
                for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    d._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                return e.fn[t] = s, d._jQueryInterface
            }, d
        }(t),
        F = function (e) {
            var t = "bs.tab",
                n = "." + t,
                i = e.fn.tab,
                o = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                s = "active",
                a = "show",
                l = ".active",
                u = "> li > .active",
                c = function () {
                    function n(e) {
                        this._element = e
                    }
                    var i = n.prototype;
                    return i.show = function () {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(s) || e(this._element).hasClass("disabled"))) {
                            var n, i, r = e(this._element).closest(".nav, .list-group")[0],
                                a = O.getSelectorFromElement(this._element);
                            if (r) {
                                var c = "UL" === r.nodeName ? u : l;
                                i = (i = e.makeArray(e(r).find(c)))[i.length - 1]
                            }
                            var f = e.Event(o.HIDE, {
                                    relatedTarget: this._element
                                }),
                                h = e.Event(o.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && e(i).trigger(f), e(this._element).trigger(h), !h.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                a && (n = e(a)[0]), this._activate(this._element, r);
                                var d = function () {
                                    var n = e.Event(o.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        r = e.Event(o.SHOWN, {
                                            relatedTarget: i
                                        });
                                    e(i).trigger(n), e(t._element).trigger(r)
                                };
                                n ? this._activate(n, n.parentNode, d) : d()
                            }
                        }
                    }, i.dispose = function () {
                        e.removeData(this._element, t), this._element = null
                    }, i._activate = function (t, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? e(n).find(u) : e(n).children(l))[0],
                            s = i && O.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                            a = function () {
                                return r._transitionComplete(t, o, i)
                            };
                        o && s ? e(o).one(O.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, i._transitionComplete = function (t, n, i) {
                        if (n) {
                            e(n).removeClass(a + " " + s);
                            var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                            r && e(r).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(s), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), O.reflow(t), e(t).addClass(a), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                            var o = e(t).closest(".dropdown")[0];
                            o && e(o).find(".dropdown-toggle").addClass(s), t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var r = e(this),
                                o = r.data(t);
                            if (o || (o = new n(this), r.data(t, o)), "string" == typeof i) {
                                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                                o[i]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }]), n
                }();
            return e(document).on(o.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                t.preventDefault(), c._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = c._jQueryInterface, e.fn.tab.Constructor = c, e.fn.tab.noConflict = function () {
                return e.fn.tab = i, c._jQueryInterface
            }, c
        }(t);
    ! function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = O, e.Alert = j, e.Button = L, e.Carousel = P, e.Collapse = H, e.Dropdown = R, e.Modal = M, e.Popover = W, e.Scrollspy = B, e.Tab = F, e.Tooltip = q, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});