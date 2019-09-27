/*! For license information please see vendors.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([ [ "vendors" ], {
    "../node_modules/jquery/dist/jquery.js": function(e, t, n) {
        var r, i, o;
        i = "undefined" != typeof window ? window : this, o = function(n, i) {
            var o = [], a = n.document, s = Object.getPrototypeOf, u = o.slice, l = o.concat, c = o.push, f = o.indexOf, d = {}, p = d.toString, h = d.hasOwnProperty, g = h.toString, m = g.call(Object), y = {}, v = function isFunction(e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
            }, x = function isWindow(e) {
                return null != e && e === e.window;
            }, b = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function DOMEval(e, t, n) {
                var r, i, o = (n = n || a).createElement("script");
                if (o.text = e, t) for (r in b) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function toType(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
            }
            var w = function(e, t) {
                return new w.fn.init(e, t);
            }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function isArrayLike(e) {
                var t = !!e && "length" in e && e.length, n = toType(e);
                return !v(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
            }
            w.fn = w.prototype = {
                jquery: "3.4.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return u.call(this);
                },
                get: function(e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t;
                },
                each: function(e) {
                    return w.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(w.map(this, (function(t, n) {
                        return e.call(t, n, t);
                    })));
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: c,
                sort: o.sort,
                splice: o.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), 
                s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
                "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
                o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : r !== undefined && (a[t] = r));
                return a;
            }, w.extend({
                expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || g.call(n) !== m));
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function(e, t) {
                    DOMEval(e, {
                        nonce: t && t.nonce
                    });
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (isArrayLike(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e;
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(T, "");
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (isArrayLike(Object(e)) ? w.merge(n, "string" == typeof e ? [ e ] : e) : c.call(n, e)), 
                    n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : f.call(t, e, n);
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e;
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r;
                },
                map: function(e, t, n) {
                    var r, i, o = 0, a = [];
                    if (isArrayLike(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return l.apply([], a);
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = o[Symbol.iterator]), 
            w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
            }));
            var C = function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, y, v, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, S = createCache(), A = createCache(), k = createCache(), E = createCache(), N = function(e, t) {
                    return e === t && (f = !0), 0;
                }, D = {}.hasOwnProperty, j = [], P = j.pop, L = j.push, q = j.push, H = j.slice, M = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1;
                }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + F + "*(" + z + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + F + "*\\]", R = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", W = new RegExp(F + "+", "g"), B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), $ = new RegExp("^" + F + "*," + F + "*"), _ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), U = new RegExp(F + "|>"), X = new RegExp(R), G = new RegExp("^" + z + "$"), V = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + R),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }, oe = function() {
                    d();
                }, ae = addCombinator((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    q.apply(j = H.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType;
                } catch (se) {
                    q = {
                        apply: j.length ? function(e, t) {
                            L.apply(e, H.call(t));
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                            e.length = n - 1;
                        }
                    };
                }
                function Sizzle(e, t, r, i) {
                    var o, s, l, c, f, h, y, v = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
                        if (11 !== T && (f = Z.exec(e))) if (o = f[1]) {
                            if (9 === T) {
                                if (!(l = t.getElementById(o))) return r;
                                if (l.id === o) return r.push(l), r;
                            } else if (v && (l = v.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), 
                            r;
                        } else {
                            if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), 
                            r;
                        }
                        if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, v = t, 1 === T && U.test(e)) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), 
                                s = (h = a(e)).length; s--; ) h[s] = "#" + c + " " + toSelector(h[s]);
                                y = h.join(","), v = ee.test(e) && testContext(t.parentNode) || t;
                            }
                            try {
                                return q.apply(r, v.querySelectorAll(y)), r;
                            } catch (C) {
                                E(e, !0);
                            } finally {
                                c === b && t.removeAttribute("id");
                            }
                        }
                    }
                    return u(e.replace(B, "$1"), t, r, i);
                }
                function createCache() {
                    var e = [];
                    return function cache(t, n) {
                        return e.push(t + " ") > r.cacheLength && delete cache[e.shift()], cache[t + " "] = n;
                    };
                }
                function markFunction(e) {
                    return e[b] = !0, e;
                }
                function assert(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (se) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function addHandle(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
                }
                function siblingCheck(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function createInputPseudo(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function createButtonPseudo(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function createDisabledPseudo(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                    };
                }
                function createPositionalPseudo(e) {
                    return markFunction((function(t) {
                        return t = +t, markFunction((function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                        }));
                    }));
                }
                function testContext(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                for (t in n = Sizzle.support = {}, o = Sizzle.isXML = function(e) {
                    var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML");
                }, d = Sizzle.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, 
                    g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), 
                    n.attributes = assert((function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    })), n.getElementsByTagName = assert((function(e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                    })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = assert((function(e) {
                        return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length;
                    })), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }, r.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                            }
                            return [];
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                    }, y = [], m = [], (n.qsa = K.test(p.querySelectorAll)) && (assert((function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + O + ")"), 
                        e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
                        e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
                    })), assert((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 
                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
                        h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
                        e.querySelectorAll("*,:x"), m.push(",.*:");
                    }))), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert((function(e) {
                        n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", R);
                    })), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), 
                    t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } : function(e, t) {
                        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                        return !1;
                    }, N = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                        if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? M(c, e) - M(c, t) : 0;
                        if (i === o) return siblingCheck(e, t);
                        for (n = e; n = n.parentNode; ) a.unshift(n);
                        for (n = t; n = n.parentNode; ) s.unshift(n);
                        for (;a[r] === s[r]; ) r++;
                        return r ? siblingCheck(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                    }, p) : p;
                }, Sizzle.matches = function(e, t) {
                    return Sizzle(e, null, null, t);
                }, Sizzle.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== p && d(e), n.matchesSelector && g && !E[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
                        var r = v.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                    } catch (se) {
                        E(t, !0);
                    }
                    return Sizzle(t, p, null, [ e ]).length > 0;
                }, Sizzle.contains = function(e, t) {
                    return (e.ownerDocument || e) !== p && d(e), x(e, t);
                }, Sizzle.attr = function(e, t) {
                    (e.ownerDocument || e) !== p && d(e);
                    var i = r.attrHandle[t.toLowerCase()], o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : undefined;
                    return o !== undefined ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                }, Sizzle.escape = function(e) {
                    return (e + "").replace(re, ie);
                }, Sizzle.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, Sizzle.uniqueSort = function(e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                        for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
                        for (;i--; ) e.splice(r[i], 1);
                    }
                    return c = null, e;
                }, i = Sizzle.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else for (;t = e[r++]; ) n += i(t);
                    return n;
                }, (r = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: V,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]), 
                            e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e) {
                            var t = S[e + " "];
                            return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = Sizzle.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode;
                            } : function(t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, x = !1;
                                if (m) {
                                    if (o) {
                                        for (;g; ) {
                                            for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                                        for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], 
                                        d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); ) if (1 === d.nodeType && ++x && d === t) {
                                            c[e] = [ T, p, x ];
                                            break;
                                        }
                                    } else if (v && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), 
                                    !1 === x) for (;(d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [ T, x ]), 
                                    d !== t)); ) ;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction((function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--; ) e[r = M(e, o[a])] = !(n[r] = o[a]);
                            })) : function(e) {
                                return i(e, 0, n);
                            }) : i;
                        }
                    },
                    pseudos: {
                        not: markFunction((function(e) {
                            var t = [], n = [], r = s(e.replace(B, "$1"));
                            return r[b] ? markFunction((function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                            })) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                            };
                        })),
                        has: markFunction((function(e) {
                            return function(t) {
                                return Sizzle(e, t).length > 0;
                            };
                        })),
                        contains: markFunction((function(e) {
                            return e = e.replace(te, ne), function(t) {
                                return (t.textContent || i(t)).indexOf(e) > -1;
                            };
                        })),
                        lang: markFunction((function(e) {
                            return G.test(e || "") || Sizzle.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            };
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === h;
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e);
                        },
                        header: function(e) {
                            return Q.test(e.nodeName);
                        },
                        input: function(e) {
                            return J.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: createPositionalPseudo((function() {
                            return [ 0 ];
                        })),
                        last: createPositionalPseudo((function(e, t) {
                            return [ t - 1 ];
                        })),
                        eq: createPositionalPseudo((function(e, t, n) {
                            return [ n < 0 ? n + t : n ];
                        })),
                        even: createPositionalPseudo((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        odd: createPositionalPseudo((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        lt: createPositionalPseudo((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                            return e;
                        })),
                        gt: createPositionalPseudo((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = createInputPseudo(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = createButtonPseudo(t);
                function setFilters() {}
                function toSelector(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r;
                }
                function addCombinator(e, t, n) {
                    var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
                    return t.first ? function(t, n, i) {
                        for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
                        return !1;
                    } : function(t, n, u) {
                        var l, c, f, d = [ T, s ];
                        if (u) {
                            for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                        } else for (;t = t[r]; ) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
                        i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                            if ((l = c[o]) && l[0] === T && l[1] === s) return d[2] = l[2];
                            if (c[o] = d, d[2] = e(t, n, u)) return !0;
                        }
                        return !1;
                    };
                }
                function elementMatcher(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                        return !0;
                    } : e[0];
                }
                function condense(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
                    l && t.push(s)));
                    return a;
                }
                function setMatcher(e, t, n, r, i, o) {
                    return r && !r[b] && (r = setMatcher(r)), i && !i[b] && (i = setMatcher(i, o)), 
                    markFunction((function(o, a, s, u) {
                        var l, c, f, d = [], p = [], h = a.length, g = o || function multipleContexts(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) Sizzle(e, t[r], n);
                            return n;
                        }(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !o && t ? g : condense(g, d, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, y, s, u), r) for (l = condense(y, p), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (y[p[c]] = !(m[p[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = y.length; c--; ) (f = y[c]) && l.push(m[c] = f);
                                    i(null, y = [], l, u);
                                }
                                for (c = y.length; c--; ) (f = y[c]) && (l = i ? M(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f));
                            }
                        } else y = condense(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : q.apply(a, y);
                    }));
                }
                function matcherFromTokens(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = addCombinator((function(e) {
                        return e === t;
                    }), s, !0), f = addCombinator((function(e) {
                        return M(t, e) > -1;
                    }), s, !0), d = [ function(e, n, r) {
                        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i;
                    } ]; u < o; u++) if (n = r.relative[e[u].type]) d = [ addCombinator(elementMatcher(d), n) ]; else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (i = ++u; i < o && !r.relative[e[i].type]; i++) ;
                            return setMatcher(u > 1 && elementMatcher(d), u > 1 && toSelector(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(B, "$1"), n, u < i && matcherFromTokens(e.slice(u, i)), i < o && matcherFromTokens(e = e.slice(i)), i < o && toSelector(e));
                        }
                        d.push(n);
                    }
                    return elementMatcher(d);
                }
                return setFilters.prototype = r.filters = r.pseudos, r.setFilters = new setFilters, 
                a = Sizzle.tokenize = function(e, t) {
                    var n, i, o, a, s, u, l, c = A[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s; ) {
                        for (a in n && !(i = $.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                        n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                        o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break;
                    }
                    return t ? s.length : s ? Sizzle.error(e) : A(e, u).slice(0);
                }, s = Sizzle.compile = function(e, t) {
                    var n, i = [], o = [], s = k[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--; ) (s = matcherFromTokens(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = k(e, function matcherFromGroupMatchers(e, t) {
                            var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
                                var f, h, m, y = 0, v = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), S = T += null == w ? 1 : Math.random() || .1, A = C.length;
                                for (c && (l = a === p || a || c); v !== A && null != (f = C[v]); v++) {
                                    if (i && f) {
                                        for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = e[h++]; ) if (m(f, a || p, s)) {
                                            u.push(f);
                                            break;
                                        }
                                        c && (T = S);
                                    }
                                    n && ((f = !m && f) && y--, o && x.push(f));
                                }
                                if (y += v, n && v !== y) {
                                    for (h = 0; m = t[h++]; ) m(x, b, a, s);
                                    if (o) {
                                        if (y > 0) for (;v--; ) x[v] || b[v] || (b[v] = P.call(u));
                                        b = condense(b);
                                    }
                                    q.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && Sizzle.uniqueSort(u);
                                }
                                return c && (T = S, l = w), x;
                            };
                            return n ? markFunction(o) : o;
                        }(o, i))).selector = e;
                    }
                    return s;
                }, u = Sizzle.select = function(e, t, n, i) {
                    var o, u, l, c, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(u.shift().value.length);
                        }
                        for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]); ) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && testContext(t.parentNode) || t))) {
                            if (u.splice(o, 1), !(e = i.length && toSelector(u))) return q.apply(n, i), n;
                            break;
                        }
                    }
                    return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && testContext(t.parentNode) || t), 
                    n;
                }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, 
                d(), n.sortDetached = assert((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
                })), assert((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                })) || addHandle("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                })), n.attributes && assert((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) || addHandle("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                })), assert((function(e) {
                    return null == e.getAttribute("disabled");
                })) || addHandle(O, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                })), Sizzle;
            }(n);
            w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, 
            w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
            var S = function(e, t, n) {
                for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
                return r;
            }, A = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, k = w.expr.match.needsContext;
            function nodeName(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function winnow(e, t, n) {
                return v(t) ? w.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n;
                })) : t.nodeType ? w.grep(e, (function(e) {
                    return e === t !== n;
                })) : "string" != typeof t ? w.grep(e, (function(e) {
                    return f.call(t, e) > -1 !== n;
                })) : w.filter(t, e, n);
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [ r ] : [] : w.find.matches(e, w.grep(t, (function(e) {
                    return 1 === e.nodeType;
                })));
            }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                    return r > 1 ? w.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(winnow(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(winnow(this, e || [], !0));
                },
                is: function(e) {
                    return !!winnow(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length;
                }
            });
            var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || N, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), 
                        E.test(r[1]) && w.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? n.ready !== undefined ? n.ready(e) : e(w) : w.makeArray(e, this);
            }).prototype = w.fn, N = w(a);
            var j = /^(?:parents|prev(?:Until|All))/, P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function sibling(e, t) {
                for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                return e;
            }
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this), n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
                    }));
                },
                closest: function(e, t) {
                    var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
                    if (!k.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? f.call(w(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            }), w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return S(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return S(e, "parentNode", n);
                },
                next: function(e) {
                    return sibling(e, "nextSibling");
                },
                prev: function(e) {
                    return sibling(e, "previousSibling");
                },
                nextAll: function(e) {
                    return S(e, "nextSibling");
                },
                prevAll: function(e) {
                    return S(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return S(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return S(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return A((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return A(e.firstChild);
                },
                contents: function(e) {
                    return "undefined" != typeof e.contentDocument ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), 
                    w.merge([], e.childNodes));
                }
            }, (function(e, t) {
                w.fn[e] = function(n, r) {
                    var i = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 
                    this.length > 1 && (P[e] || w.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i);
                };
            }));
            var L = /[^\x20\t\r\n\f]+/g;
            function Identity(e) {
                return e;
            }
            function Thrower(e) {
                throw e;
            }
            function adoptValue(e, t, n, r) {
                var i;
                try {
                    e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [ e ].slice(r));
                } catch (e) {
                    n.apply(undefined, [ e ]);
                }
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? function createOptions(e) {
                    var t = {};
                    return w.each(e.match(L) || [], (function(e, n) {
                        t[n] = !0;
                    })), t;
                }(e) : w.extend({}, e);
                var t, n, r, i, o = [], a = [], s = -1, u = function() {
                    for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
                    n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
                }, l = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function add(t) {
                            w.each(t, (function(t, n) {
                                v(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== toType(n) && add(n);
                            }));
                        }(arguments), n && !t && u()), this;
                    },
                    remove: function() {
                        return w.each(arguments, (function(e, t) {
                            for (var n; (n = w.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                        })), this;
                    },
                    has: function(e) {
                        return e ? w.inArray(e, o) > -1 : o.length > 0;
                    },
                    empty: function() {
                        return o && (o = []), this;
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this;
                    },
                    disabled: function() {
                        return !o;
                    },
                    lock: function() {
                        return i = a = [], n || t || (o = n = ""), this;
                    },
                    locked: function() {
                        return !!i;
                    },
                    fireWith: function(e, n) {
                        return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                        this;
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r;
                    }
                };
                return l;
            }, w.extend({
                Deferred: function(e) {
                    var t = [ [ "notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2 ], [ "resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                        state: function() {
                            return r;
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this;
                        },
                        "catch": function(e) {
                            return i.then(null, e);
                        },
                        pipe: function() {
                            var e = arguments;
                            return w.Deferred((function(n) {
                                w.each(t, (function(t, r) {
                                    var i = v(e[r[4]]) && e[r[4]];
                                    o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ e ] : arguments);
                                    }));
                                })), e = null;
                            })).promise();
                        },
                        then: function(e, r, i) {
                            var o = 0;
                            function resolve(e, t, r, i) {
                                return function() {
                                    var a = this, s = arguments, u = function() {
                                        var n, u;
                                        if (!(e < o)) {
                                            if ((n = r.apply(a, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? i ? u.call(n, resolve(o, t, Identity, i), resolve(o, t, Thrower, i)) : (o++, 
                                            u.call(n, resolve(o, t, Identity, i), resolve(o, t, Thrower, i), resolve(o, t, Identity, t.notifyWith))) : (r !== Identity && (a = undefined, 
                                            s = [ n ]), (i || t.resolveWith)(a, s));
                                        }
                                    }, l = i ? u : function() {
                                        try {
                                            u();
                                        } catch (n) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= o && (r !== Thrower && (a = undefined, 
                                            s = [ n ]), t.rejectWith(a, s));
                                        }
                                    };
                                    e ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()), 
                                    n.setTimeout(l));
                                };
                            }
                            return w.Deferred((function(n) {
                                t[0][3].add(resolve(0, n, v(i) ? i : Identity, n.notifyWith)), t[1][3].add(resolve(0, n, v(e) ? e : Identity)), 
                                t[2][3].add(resolve(0, n, v(r) ? r : Thrower));
                            })).promise();
                        },
                        promise: function(e) {
                            return null != e ? w.extend(e, i) : i;
                        }
                    }, o = {};
                    return w.each(t, (function(e, n) {
                        var a = n[2], s = n[5];
                        i[n[1]] = a.add, s && a.add((function() {
                            r = s;
                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), 
                        o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? undefined : this, arguments), this;
                        }, o[n[0] + "With"] = a.fireWith;
                    })), i.promise(o), e && e.call(o, o), o;
                },
                when: function(e) {
                    var t = arguments.length, n = t, r = Array(n), i = u.call(arguments), o = w.Deferred(), a = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i);
                        };
                    };
                    if (t <= 1 && (adoptValue(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                    for (;n--; ) adoptValue(i[n], a(n), o.reject);
                    return o.promise();
                }
            });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && q.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }, w.readyException = function(e) {
                n.setTimeout((function() {
                    throw e;
                }));
            };
            var H = w.Deferred();
            function completed() {
                a.removeEventListener("DOMContentLoaded", completed), n.removeEventListener("load", completed), 
                w.ready();
            }
            w.fn.ready = function(e) {
                return H.then(e)["catch"]((function(e) {
                    w.readyException(e);
                })), this;
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || H.resolveWith(a, [ w ]));
                }
            }), w.ready.then = H.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(w.ready) : (a.addEventListener("DOMContentLoaded", completed), 
            n.addEventListener("load", completed));
            var M = function(e, t, n, r, i, o, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === toType(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a); else if (r !== undefined && (i = !0, 
                v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n);
                })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            }, O = /^-ms-/, F = /-([a-z])/g;
            function fcamelCase(e, t) {
                return t.toUpperCase();
            }
            function camelCase(e) {
                return e.replace(O, "ms-").replace(F, fcamelCase);
            }
            var z = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Data() {
                this.expando = w.expando + Data.uid++;
            }
            Data.uid = 1, Data.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[camelCase(t)] = n; else for (r in t) i[camelCase(r)] = t[r];
                    return i;
                },
                get: function(e, t) {
                    return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)];
                },
                access: function(e, t, n) {
                    return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), 
                    n !== undefined ? n : t);
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (r !== undefined) {
                        if (t !== undefined) {
                            n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t)) in r ? [ t ] : t.match(L) || []).length;
                            for (;n--; ) delete r[t[n]];
                        }
                        (t === undefined || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return t !== undefined && !w.isEmptyObject(t);
                }
            };
            var I = new Data, R = new Data, W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, B = /[A-Z]/g;
            function dataAttr(e, t, n) {
                var r;
                if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(B, "-$&").toLowerCase(), 
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function getData(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : W.test(e) ? JSON.parse(e) : e);
                        }(n);
                    } catch (i) {}
                    R.set(e, t, n);
                } else n = undefined;
                return n;
            }
            w.extend({
                hasData: function(e) {
                    return R.hasData(e) || I.hasData(e);
                },
                data: function(e, t, n) {
                    return R.access(e, t, n);
                },
                removeData: function(e, t) {
                    R.remove(e, t);
                },
                _data: function(e, t, n) {
                    return I.access(e, t, n);
                },
                _removeData: function(e, t) {
                    I.remove(e, t);
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (e === undefined) {
                        if (this.length && (i = R.get(o), 1 === o.nodeType && !I.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = camelCase(r.slice(5)), 
                            dataAttr(o, r, i[r]));
                            I.set(o, "hasDataAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof e ? this.each((function() {
                        R.set(this, e);
                    })) : M(this, (function(t) {
                        var n;
                        if (o && t === undefined) return (n = R.get(o, e)) !== undefined ? n : (n = dataAttr(o, e)) !== undefined ? n : void 0;
                        this.each((function() {
                            R.set(this, e, t);
                        }));
                    }), null, t, arguments.length > 1, null, !0);
                },
                removeData: function(e) {
                    return this.each((function() {
                        R.remove(this, e);
                    }));
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || Array.isArray(n) ? r = I.access(e, t, w.makeArray(n)) : r.push(n)), 
                    r || [];
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                    delete o.stop, i.call(e, (function() {
                        w.dequeue(e, t);
                    }), o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return I.get(e, n) || I.access(e, n, {
                        empty: w.Callbacks("once memory").add((function() {
                            I.remove(e, [ t + "queue", n ]);
                        }))
                    });
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : t === undefined ? this : this.each((function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                    }));
                },
                dequeue: function(e) {
                    return this.each((function() {
                        w.dequeue(this, e);
                    }));
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [ o ]);
                    };
                    for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--; ) (n = I.get(o[a], e + "queueHooks")) && n.empty && (r++, 
                    n.empty.add(s));
                    return s(), i.promise(t);
                }
            });
            var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"), U = [ "Top", "Right", "Bottom", "Left" ], X = a.documentElement, G = function(e) {
                return w.contains(e.ownerDocument, e);
            }, V = {
                composed: !0
            };
            X.getRootNode && (G = function(e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(V) === e.ownerDocument;
            });
            var Y = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && G(e) && "none" === w.css(e, "display");
            }, J = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i;
            };
            function adjustCSS(e, t, n, r) {
                var i, o, a = 20, s = r ? function() {
                    return r.cur();
                } : function() {
                    return w.css(e, t, "");
                }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && _.exec(w.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--; ) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
                    c /= o;
                    c *= 2, w.style(e, t, c + l), n = n || [];
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
                r.start = c, r.end = i)), i;
            }
            var Q = {};
            function getDefaultDisplay(e) {
                var t, n = e.ownerDocument, r = e.nodeName, i = Q[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), 
                t.parentNode.removeChild(t), "none" === i && (i = "block"), Q[r] = i, i);
            }
            function showHide(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
                t ? ("none" === n && (i[o] = I.get(r, "display") || null, i[o] || (r.style.display = "")), 
                "" === r.style.display && Y(r) && (i[o] = getDefaultDisplay(r))) : "none" !== n && (i[o] = "none", 
                I.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e;
            }
            w.fn.extend({
                show: function() {
                    return showHide(this, !0);
                },
                hide: function() {
                    return showHide(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        Y(this) ? w(this).show() : w(this).hide();
                    }));
                }
            });
            var K = /^(?:checkbox|radio)$/i, Z = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ee = /^$|^module$|\/(?:java|ecma)script/i, te = {
                option: [ 1, "<select multiple='multiple'>", "</select>" ],
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function getAll(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                t === undefined || t && nodeName(e, t) ? w.merge([ e ], n) : n;
            }
            function setGlobalEval(e, t) {
                for (var n = 0, r = e.length; n < r; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"));
            }
            te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, 
            te.th = te.td;
            var ne, re, ie = /<|&#?\w+;/;
            function buildFragment(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === toType(o)) w.merge(d, o.nodeType ? [ o ] : o); else if (ie.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Z.exec(o) || [ "", "" ])[1].toLowerCase(), 
                    u = te[s] || te._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                    w.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
                } else d.push(t.createTextNode(o));
                for (f.textContent = "", p = 0; o = d[p++]; ) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = G(o), 
                a = getAll(f.appendChild(o), "script"), l && setGlobalEval(a), n) for (c = 0; o = a[c++]; ) ee.test(o.type || "") && n.push(o);
                return f;
            }
            ne = a.createDocumentFragment().appendChild(a.createElement("div")), (re = a.createElement("input")).setAttribute("type", "radio"), 
            re.setAttribute("checked", "checked"), re.setAttribute("name", "t"), ne.appendChild(re), 
            y.checkClone = ne.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.innerHTML = "<textarea>x</textarea>", 
            y.noCloneChecked = !!ne.cloneNode(!0).lastChild.defaultValue;
            var oe = /^key/, ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, se = /^([^.]*)(?:\.(.+)|)/;
            function returnTrue() {
                return !0;
            }
            function returnFalse() {
                return !1;
            }
            function expectSync(e, t) {
                return e === function safeActiveElement() {
                    try {
                        return a.activeElement;
                    } catch (e) {}
                }() == ("focus" === t);
            }
            function on(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = undefined), t) on(e, s, n, r, t[s], o);
                    return e;
                }
                if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, 
                r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = returnFalse; else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
                    w.event.add(this, t, i, r, n);
                }));
            }
            function leverageNative(e, t, n) {
                n ? (I.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, i, o = I.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (w.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = u.call(arguments), 
                            I.set(this, t, o), r = n(this, t), this[t](), o !== (i = I.get(this, t)) || r ? I.set(this, t, !1) : i = {}, 
                            o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                        } else o.length && (I.set(this, t, {
                            value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                        }), e.stopImmediatePropagation());
                    }
                })) : I.get(e, t) === undefined && w.event.add(e, t, returnTrue);
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, m = I.get(e);
                    if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(X, i), 
                    n.guid || (n.guid = w.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : undefined;
                    }), l = (t = (t || "").match(L) || [ "" ]).length; l--; ) p = g = (s = se.exec(t[l]) || [])[1], 
                    h = (s[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, 
                    f = w.event.special[p] || {}, c = w.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), 
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), 
                    w.event.global[p] = !0);
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, g, m = I.hasData(e) && I.get(e);
                    if (m && (u = m.events)) {
                        for (l = (t = (t || "").match(L) || [ "" ]).length; l--; ) if (p = g = (s = se.exec(t[l]) || [])[1], 
                        h = (s[2] || "").split(".").sort(), p) {
                            for (f = w.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], 
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; ) c = d[o], 
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), 
                            c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, p, m.handle), 
                            delete u[p]);
                        } else for (p in u) w.event.remove(e, p + t[l], n, r, !0);
                        w.isEmptyObject(u) && I.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = w.event.fix(e), u = new Array(arguments.length), l = (I.get(this, "events") || {})[s.type] || [], c = w.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = w.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = i.elem, 
                        n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                        s.data = o.data, (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) !== undefined && !1 === (s.result = r) && (s.preventDefault(), 
                        s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result;
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) a[i = (r = t[n]).selector + " "] === undefined && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [ l ]).length), 
                        a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s;
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e];
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            });
                        }
                    });
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return K.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click", returnTrue), 
                            !1;
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return K.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click"), 
                            !0;
                        },
                        _default: function(e) {
                            var t = e.target;
                            return K.test(t.type) && t.click && nodeName(t, "input") && I.get(t, "click") || nodeName(t, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? returnTrue : returnFalse, 
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, w.each({
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
                code: !0,
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && oe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && ae.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
                }
            }, w.event.addProp), w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                w.event.special[e] = {
                    setup: function() {
                        return leverageNative(this, e, expectSync), !1;
                    },
                    trigger: function() {
                        return leverageNative(this, e), !0;
                    },
                    delegateType: t
                };
            })), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                        e.type = t), n;
                    }
                };
            })), w.fn.extend({
                on: function(e, t, n, r) {
                    return on(this, e, t, n, r);
                },
                one: function(e, t, n, r) {
                    return on(this, e, t, n, r, 1);
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = returnFalse), 
                    this.each((function() {
                        w.event.remove(this, e, n, t);
                    }));
                }
            });
            var ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, le = /<script|<style|<link/i, ce = /checked\s*(?:[^=]|=\s*.checked.)/i, fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function manipulationTarget(e, t) {
                return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
            }
            function disableScript(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function restoreScript(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                e;
            }
            function cloneCopyEvent(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (I.hasData(e) && (o = I.access(e), a = I.set(t, o), l = o.events)) for (i in delete a.handle, 
                    a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
                    R.hasData(e) && (s = R.access(e), u = w.extend({}, s), R.set(t, u));
                }
            }
            function fixInput(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && K.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            }
            function domManip(e, t, n, r) {
                t = l.apply([], t);
                var i, o, a, s, u, c, f = 0, d = e.length, p = d - 1, h = t[0], g = v(h);
                if (g || d > 1 && "string" == typeof h && !y.checkClone && ce.test(h)) return e.each((function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), domManip(o, t, n, r);
                }));
                if (d && (o = (i = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
                o || r)) {
                    for (s = (a = w.map(getAll(i, "script"), disableScript)).length; f < d; f++) u = i, 
                    f !== p && (u = w.clone(u, !0, !0), s && w.merge(a, getAll(u, "script"))), n.call(e[f], u, f);
                    if (s) for (c = a[a.length - 1].ownerDocument, w.map(a, restoreScript), f = 0; f < s; f++) u = a[f], 
                    ee.test(u.type || "") && !I.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : DOMEval(u.textContent.replace(fe, ""), u, c));
                }
                return e;
            }
            function remove(e, t, n) {
                for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(getAll(r)), 
                r.parentNode && (n && G(r) && setGlobalEval(getAll(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e.replace(ue, "<$1></$2>");
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0), u = G(e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = getAll(s), 
                    r = 0, i = (o = getAll(e)).length; r < i; r++) fixInput(o[r], a[r]);
                    if (t) if (n) for (o = o || getAll(e), a = a || getAll(s), r = 0, i = o.length; r < i; r++) cloneCopyEvent(o[r], a[r]); else cloneCopyEvent(e, s);
                    return (a = getAll(s, "script")).length > 0 && setGlobalEval(a, !u && getAll(e, "script")), 
                    s;
                },
                cleanData: function(e) {
                    for (var t, n, r, i = w.event.special, o = 0; (n = e[o]) !== undefined; o++) if (z(n)) {
                        if (t = n[I.expando]) {
                            if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                            n[I.expando] = undefined;
                        }
                        n[R.expando] && (n[R.expando] = undefined);
                    }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return remove(this, e, !0);
                },
                remove: function(e) {
                    return remove(this, e);
                },
                text: function(e) {
                    return M(this, (function(e) {
                        return e === undefined ? w.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        }));
                    }), null, e, arguments.length);
                },
                append: function() {
                    return domManip(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, e).appendChild(e);
                    }));
                },
                prepend: function() {
                    return domManip(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = manipulationTarget(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    }));
                },
                before: function() {
                    return domManip(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    }));
                },
                after: function() {
                    return domManip(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(getAll(e, !1)), 
                    e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return w.clone(this, e, t);
                    }));
                },
                html: function(e) {
                    return M(this, (function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !le.test(e) && !te[(Z.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(getAll(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (i) {}
                        }
                        t && this.empty().append(e);
                    }), null, e, arguments.length);
                },
                replaceWith: function() {
                    var e = [];
                    return domManip(this, arguments, (function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(getAll(this)), n && n.replaceChild(t, this));
                    }), e);
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
                    w(i[a])[t](n), c.apply(r, n.get());
                    return this.pushStack(r);
                };
            }));
            var de = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"), pe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e);
            }, he = new RegExp(U.join("|"), "i");
            function curCSS(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || G(e) || (a = w.style(e, t)), 
                !y.pixelBoxStyles() && de.test(a) && he.test(t) && (r = s.width, i = s.minWidth, 
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
                s.minWidth = i, s.maxWidth = o)), a !== undefined ? a + "" : a;
            }
            function addGetHookIf(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function computeStyleTests() {
                    if (u) {
                        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        X.appendChild(s).appendChild(u);
                        var a = n.getComputedStyle(u);
                        e = "1%" !== a.top, o = 12 === roundPixelMeasures(a.marginLeft), u.style.right = "60%", 
                        i = 36 === roundPixelMeasures(a.right), t = 36 === roundPixelMeasures(a.width), 
                        u.style.position = "absolute", r = 12 === roundPixelMeasures(u.offsetWidth / 3), 
                        X.removeChild(s), u = null;
                    }
                }
                function roundPixelMeasures(e) {
                    return Math.round(parseFloat(e));
                }
                var e, t, r, i, o, s = a.createElement("div"), u = a.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", 
                y.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(y, {
                    boxSizingReliable: function() {
                        return computeStyleTests(), t;
                    },
                    pixelBoxStyles: function() {
                        return computeStyleTests(), i;
                    },
                    pixelPosition: function() {
                        return computeStyleTests(), e;
                    },
                    reliableMarginLeft: function() {
                        return computeStyleTests(), o;
                    },
                    scrollboxSize: function() {
                        return computeStyleTests(), r;
                    }
                }));
            }();
            var ge = [ "Webkit", "Moz", "ms" ], me = a.createElement("div").style, ye = {};
            function finalPropName(e) {
                var t = w.cssProps[e] || ye[e];
                return t || (e in me ? e : ye[e] = function vendorPropName(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = ge.length; n--; ) if ((e = ge[n] + t) in me) return e;
                }(e) || e);
            }
            var ve = /^(none|table(?!-c[ea]).+)/, xe = /^--/, be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, we = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function setPositiveNumber(e, t, n) {
                var r = _.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function boxModelAdjustment(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0, s = 0, u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (;a < 4; a += 2) "margin" === n && (u += w.css(e, n + U[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + U[a], !0, i)), 
                "margin" !== n && (u -= w.css(e, "border" + U[a] + "Width", !0, i))) : (u += w.css(e, "padding" + U[a], !0, i), 
                "padding" !== n ? u += w.css(e, "border" + U[a] + "Width", !0, i) : s += w.css(e, "border" + U[a] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
                u;
            }
            function getWidthOrHeight(e, t, n) {
                var r = pe(e), i = (!y.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r), o = i, a = curCSS(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (de.test(a)) {
                    if (!n) return a;
                    a = "auto";
                }
                return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), 
                (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
            }
            function Tween(e, t, n, r, i) {
                return new Tween.prototype.init(e, t, n, r, i);
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = curCSS(e, "opacity");
                                return "" === n ? "1" : n;
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
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = camelCase(t), u = xe.test(t), l = e.style;
                        if (u || (t = finalPropName(s)), a = w.cssHooks[t] || w.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : l[t];
                        "string" == (o = typeof n) && (i = _.exec(n)) && i[1] && (n = adjustCSS(e, t, i), 
                        o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), 
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                        a && "set" in a && (n = a.set(e, n, r)) === undefined || (u ? l.setProperty(t, n) : l[t] = n));
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = camelCase(t);
                    return xe.test(t) || (t = finalPropName(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
                    i === undefined && (i = curCSS(e, t, r)), "normal" === i && t in we && (i = we[t]), 
                    "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
                }
            }), w.each([ "height", "width" ], (function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : J(e, be, (function() {
                            return getWidthOrHeight(e, t, r);
                        }));
                    },
                    set: function(e, n, r) {
                        var i, o = pe(e), a = !y.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o), u = r ? boxModelAdjustment(e, t, r, s, o) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - boxModelAdjustment(e, t, "border", !1, o) - .5)), 
                        u && (i = _.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), 
                        setPositiveNumber(0, n, u);
                    }
                };
            })), w.cssHooks.marginLeft = addGetHookIf(y.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - J(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left;
                }))) + "px";
            })), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + U[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = setPositiveNumber);
            })), w.fn.extend({
                css: function(e, t) {
                    return M(this, (function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = pe(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return n !== undefined ? w.style(e, t, n) : w.css(e, t);
                    }), e, t, arguments.length > 1);
                }
            }), w.Tween = Tween, Tween.prototype = {
                constructor: Tween,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, 
                    this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = Tween.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Tween.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = Tween.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this;
                }
            }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[finalPropName(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, w.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, w.fx = Tween.prototype.init, w.fx.step = {};
            var Te, Ce, Se = /^(?:toggle|show|hide)$/, Ae = /queueHooks$/;
            function schedule() {
                Ce && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(schedule) : n.setTimeout(schedule, w.fx.interval), 
                w.fx.tick());
            }
            function createFxNow() {
                return n.setTimeout((function() {
                    Te = undefined;
                })), Te = Date.now();
            }
            function genFx(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = U[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i;
            }
            function createTween(e, t, n) {
                for (var r, i = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
            }
            function Animation(e, t, n) {
                var r, i, o = 0, a = Animation.prefilters.length, s = w.Deferred().always((function() {
                    delete u.elem;
                })), u = function() {
                    if (i) return !1;
                    for (var t = Te || createFxNow(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                    return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
                    s.resolveWith(e, [ l ]), !1);
                }, l = s.promise({
                    elem: e,
                    props: w.extend({}, t),
                    opts: w.extend(!0, {
                        specialEasing: {},
                        easing: w.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Te || createFxNow(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r;
                    },
                    stop: function(t) {
                        var n = 0, r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                        this;
                    }
                }), c = l.props;
                for (function propFilter(e, t) {
                    var n, r, i, o, a;
                    for (n in e) if (i = t[r = camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], 
                    o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
                    delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
                }(c, l.opts.specialEasing); o < a; o++) if (r = Animation.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
                r;
                return w.map(c, createTween, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
                w.fx.timer(w.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l;
            }
            w.Animation = w.extend(Animation, {
                tweeners: {
                    "*": [ function(e, t) {
                        var n = this.createTween(e, t);
                        return adjustCSS(n.elem, e, _.exec(t), n), n;
                    } ]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = [ "*" ]) : e = e.match(L);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Animation.tweeners[n] = Animation.tweeners[n] || [], 
                    Animation.tweeners[n].unshift(t);
                },
                prefilters: [ function defaultPrefilter(e, t, n) {
                    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, d = this, p = {}, h = e.style, g = e.nodeType && Y(e), m = I.get(e, "fxshow");
                    for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
                    s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s();
                    }), a.unqueued++, d.always((function() {
                        d.always((function() {
                            a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                        }));
                    }))), t) if (i = t[r], Se.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || m[r] === undefined) continue;
                            g = !0;
                        }
                        p[r] = m && m[r] || w.style(e, r);
                    }
                    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(p)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                    null == (l = m && m.display) && (l = I.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (showHide([ e ], !0), 
                    l = e.style.display || l, c = w.css(e, "display"), showHide([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (d.done((function() {
                        h.display = l;
                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                    n.overflow && (h.overflow = "hidden", d.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                    }))), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = I.access(e, "fxshow", {
                        display: l
                    }), o && (m.hidden = !g), g && showHide([ e ], !0), d.done((function() {
                        for (r in g || showHide([ e ]), I.remove(e, "fxshow"), p) w.style(e, r, p[r]);
                    }))), u = createTween(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, 
                    u.start = 0));
                } ],
                prefilter: function(e, t) {
                    t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e);
                }
            }), w.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? w.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), 
                null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }, r;
            }, w.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Y).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r);
                },
                animate: function(e, t, n, r) {
                    var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function() {
                        var t = Animation(this, w.extend({}, e), o);
                        (i || I.get(this, "finish")) && t.stop(!0);
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), 
                    this.each((function() {
                        var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = I.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && Ae.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                        t = !1, o.splice(i, 1));
                        !t && n || w.dequeue(this, e);
                    }));
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = I.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                        o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    }));
                }
            }), w.each([ "toggle", "show", "hide" ], (function(e, t) {
                var n = w.fn[t];
                w.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i);
                };
            })), w.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                w.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r);
                };
            })), w.timers = [], w.fx.tick = function() {
                var e, t = 0, n = w.timers;
                for (Te = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || w.fx.stop(), Te = undefined;
            }, w.fx.timer = function(e) {
                w.timers.push(e), w.fx.start();
            }, w.fx.interval = 13, w.fx.start = function() {
                Ce || (Ce = !0, schedule());
            }, w.fx.stop = function() {
                Ce = null;
            }, w.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, w.fn.delay = function(e, t) {
                return e = w.fx && w.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i);
                    };
                }));
            }, function() {
                var e = a.createElement("input"), t = a.createElement("select").appendChild(a.createElement("option"));
                e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = a.createElement("input")).value = "t", 
                e.type = "radio", y.radioValue = "t" === e.value;
            }();
            var ke, Ee = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return M(this, w.attr, e, t, arguments.length > 1);
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        w.removeAttr(this, e);
                    }));
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ke : undefined)), 
                    n !== undefined ? null === n ? void w.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), 
                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? undefined : r);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && "radio" === t && nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, i = t && t.match(L);
                    if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
                }
            }), ke = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = Ee[t] || w.find.attr;
                Ee[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = Ee[a], Ee[a] = i, i = null != n(e, t, r) ? a : null, Ee[a] = o), 
                    i;
                };
            }));
            var Ne = /^(?:input|select|textarea|button)$/i, De = /^(?:a|area)$/i;
            function stripAndCollapse(e) {
                return (e.match(L) || []).join(" ");
            }
            function getClass(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function classesToArray(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || [];
            }
            w.fn.extend({
                prop: function(e, t) {
                    return M(this, w.prop, e, t, arguments.length > 1);
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[w.propFix[e] || e];
                    }));
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, 
                    i = w.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Ne.test(e.nodeName) || De.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), y.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), w.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                w.propFix[this.toLowerCase()] = this;
            })), w.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each((function(t) {
                        w(this).addClass(e.call(this, t, getClass(this)));
                    }));
                    if ((t = classesToArray(e)).length) for (;n = this[u++]; ) if (i = getClass(n), 
                    r = 1 === n.nodeType && " " + stripAndCollapse(i) + " ") {
                        for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = stripAndCollapse(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (v(e)) return this.each((function(t) {
                        w(this).removeClass(e.call(this, t, getClass(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = classesToArray(e)).length) for (;n = this[u++]; ) if (i = getClass(n), 
                    r = 1 === n.nodeType && " " + stripAndCollapse(i) + " ") {
                        for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                        i !== (s = stripAndCollapse(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                toggleClass: function(e, t) {
                    var n = typeof e, r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                        w(this).toggleClass(e.call(this, n, getClass(this), t), t);
                    })) : this.each((function() {
                        var t, i, o, a;
                        if (r) for (i = 0, o = w(this), a = classesToArray(e); t = a[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else e !== undefined && "boolean" !== n || ((t = getClass(this)) && I.set(this, "__className__", t), 
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : I.get(this, "__className__") || ""));
                    }));
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
                    return !1;
                }
            });
            var je = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = v(e), this.each((function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                            return null == e ? "" : e + "";
                        }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
                    }))) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n : "string" == typeof (n = i.value) ? n.replace(je, "") : null == n ? "" : n : void 0;
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : stripAndCollapse(w.text(e));
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                                if (t = w(n).val(), a) return t;
                                s.push(t);
                            }
                            return s;
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        }
                    }
                }
            }), w.each([ "radio", "checkbox" ], (function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
                    }
                }, y.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            })), y.focusin = "onfocusin" in n;
            var Pe = /^(?:focusinfocus|focusoutblur)$/, Le = function(e) {
                e.stopPropagation();
            };
            w.extend(w.event, {
                trigger: function(e, t, r, i) {
                    var o, s, u, l, c, f, d, p, g = [ r || a ], m = h.call(e, "type") ? e.type : e, y = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = p = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Pe.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (y = m.split("."), 
                    m = y.shift(), y.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
                    e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    e.result = undefined, e.target || (e.target = r), t = null == t ? [ e ] : w.makeArray(t, [ e ]), 
                    d = w.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                        if (!i && !d.noBubble && !x(r)) {
                            for (l = d.delegateType || m, Pe.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), 
                            u = s;
                            u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n);
                        }
                        for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); ) p = s, e.type = o > 1 ? l : d.bindType || m, 
                        (f = (I.get(s, "events") || {})[e.type] && I.get(s, "handle")) && f.apply(s, t), 
                        (f = c && s[c]) && f.apply && z(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !z(r) || c && v(r[m]) && !x(r) && ((u = r[c]) && (r[c] = null), 
                        w.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Le), r[m](), 
                        e.isPropagationStopped() && p.removeEventListener(m, Le), w.event.triggered = undefined, 
                        u && (r[c] = u)), e.result;
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t);
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        w.event.trigger(e, t, this);
                    }));
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0);
                }
            }), y.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this, i = I.access(r, t);
                        i || r.addEventListener(e, n, !0), I.access(r, t, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this, i = I.access(r, t) - 1;
                        i ? I.access(r, t, i) : (r.removeEventListener(e, n, !0), I.remove(r, t));
                    }
                };
            }));
            var qe = n.location, He = Date.now(), Me = /\?/;
            w.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml");
                } catch (r) {
                    t = undefined;
                }
                return t && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), 
                t;
            };
            var Oe = /\[\]$/, Fe = /\r?\n/g, ze = /^(?:submit|button|image|reset|file)$/i, Ie = /^(?:input|select|textarea|keygen)/i;
            function buildParams(e, t, n, r) {
                var i;
                if (Array.isArray(t)) w.each(t, (function(t, i) {
                    n || Oe.test(e) ? r(e, i) : buildParams(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                })); else if (n || "object" !== toType(t)) r(e, t); else for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
            }
            w.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
                    i(this.name, this.value);
                })); else for (n in e) buildParams(n, e[n], t, i);
                return r.join("&");
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this;
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && Ie.test(this.nodeName) && !ze.test(e) && (this.checked || !K.test(e));
                    })).map((function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Fe, "\r\n")
                            };
                        })) : {
                            name: t.name,
                            value: n.replace(Fe, "\r\n")
                        };
                    })).get();
                }
            });
            var Re = /%20/g, We = /#.*$/, Be = /([?&])_=[^&]*/, $e = /^(.*?):[ \t]*([^\r\n]*)$/gm, _e = /^(?:GET|HEAD)$/, Ue = /^\/\//, Xe = {}, Ge = {}, Ve = "*/".concat("*"), Ye = a.createElement("a");
            function addToPrefiltersOrTransports(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, o = t.toLowerCase().match(L) || [];
                    if (v(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                };
            }
            function inspectPrefiltersOrTransports(e, t, n, r) {
                var i = {}, o = e === Ge;
                function inspect(a) {
                    var s;
                    return i[a] = !0, w.each(e[a] || [], (function(e, a) {
                        var u = a(t, n, r);
                        return "string" != typeof u || o || i[u] ? o ? !(s = u) : void 0 : (t.dataTypes.unshift(u), 
                        inspect(u), !1);
                    })), s;
                }
                return inspect(t.dataTypes[0]) || !i["*"] && inspect("*");
            }
            function ajaxExtend(e, t) {
                var n, r, i = w.ajaxSettings.flatOptions || {};
                for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e;
            }
            Ye.href = qe.href, w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: qe.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(qe.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ve,
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
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? ajaxExtend(ajaxExtend(e, w.ajaxSettings), t) : ajaxExtend(w.ajaxSettings, e);
                },
                ajaxPrefilter: addToPrefiltersOrTransports(Xe),
                ajaxTransport: addToPrefiltersOrTransports(Ge),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = undefined), t = t || {};
                    var r, i, o, s, u, l, c, f, d, p, h = w.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, y = w.Deferred(), v = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s) for (s = {}; t = $e.exec(o); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return c ? o : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), 
                            this;
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (c) S.always(e[S.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || C;
                            return r && r.abort(t), done(0, t), this;
                        }
                    };
                    if (y.promise(S), h.url = ((e || h.url || qe.href) + "").replace(Ue, qe.protocol + "//"), 
                    h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [ "" ], 
                    null == h.crossDomain) {
                        l = a.createElement("a");
                        try {
                            l.href = h.url, l.href = l.href, h.crossDomain = Ye.protocol + "//" + Ye.host != l.protocol + "//" + l.host;
                        } catch (A) {
                            h.crossDomain = !0;
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), 
                    inspectPrefiltersOrTransports(Xe, h, t, S), c) return S;
                    for (d in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), 
                    h.type = h.type.toUpperCase(), h.hasContent = !_e.test(h.type), i = h.url.replace(We, ""), 
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Re, "+")) : (p = h.url.slice(i.length), 
                    h.data && (h.processData || "string" == typeof h.data) && (i += (Me.test(i) ? "&" : "?") + h.data, 
                    delete h.data), !1 === h.cache && (i = i.replace(Be, "$1"), p = (Me.test(i) ? "&" : "?") + "_=" + He++ + p), 
                    h.url = i + p), h.ifModified && (w.lastModified[i] && S.setRequestHeader("If-Modified-Since", w.lastModified[i]), 
                    w.etag[i] && S.setRequestHeader("If-None-Match", w.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), 
                    S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : h.accepts["*"]), 
                    h.headers) S.setRequestHeader(d, h.headers[d]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || c)) return S.abort();
                    if (C = "abort", v.add(h.complete), S.done(h.success), S.fail(h.error), r = inspectPrefiltersOrTransports(Ge, h, t, S)) {
                        if (S.readyState = 1, f && m.trigger("ajaxSend", [ S, h ]), c) return S;
                        h.async && h.timeout > 0 && (u = n.setTimeout((function() {
                            S.abort("timeout");
                        }), h.timeout));
                        try {
                            c = !1, r.send(b, done);
                        } catch (A) {
                            if (c) throw A;
                            done(-1, A);
                        }
                    } else done(-1, "No Transport");
                    function done(e, t, a, s) {
                        var l, d, p, b, T, C = t;
                        c || (c = !0, u && n.clearTimeout(u), r = undefined, o = s || "", S.readyState = e > 0 ? 4 : 0, 
                        l = e >= 200 && e < 300 || 304 === e, a && (b = function ajaxHandleResponses(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                            r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break;
                            }
                            if (u[0] in n) o = u[0]; else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break;
                                    }
                                    a || (a = i);
                                }
                                o = o || a;
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o];
                        }(h, S, a)), b = function ajaxConvert(e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break;
                                }
                                if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                    t = a(t);
                                } catch (A) {
                                    return {
                                        state: "parsererror",
                                        error: a ? A : "No conversion from " + u + " to " + o
                                    };
                                }
                            }
                            return {
                                state: "success",
                                data: t
                            };
                        }(h, b, S, l), l ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T), 
                        (T = S.getResponseHeader("etag")) && (w.etag[i] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                        d = b.data, l = !(p = b.error))) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), 
                        S.status = e, S.statusText = (t || C) + "", l ? y.resolveWith(g, [ d, C, S ]) : y.rejectWith(g, [ S, C, p ]), 
                        S.statusCode(x), x = undefined, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ S, h, l ? d : p ]), 
                        v.fireWith(g, [ S, C ]), f && (m.trigger("ajaxComplete", [ S, h ]), --w.active || w.event.trigger("ajaxStop")));
                    }
                    return S;
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return w.get(e, undefined, t, "script");
                }
            }), w.each([ "get", "post" ], (function(e, t) {
                w[t] = function(e, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = undefined), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e));
                };
            })), w._evalUrl = function(e, t) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        w.globalEval(e, t);
                    }
                });
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                    })).append(this)), this;
                },
                wrapInner: function(e) {
                    return v(e) ? this.each((function(t) {
                        w(this).wrapInner(e.call(this, t));
                    })) : this.each((function() {
                        var t = w(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    }));
                },
                wrap: function(e) {
                    var t = v(e);
                    return this.each((function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e);
                    }));
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        w(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e);
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest;
                } catch (e) {}
            };
            var Je = {
                0: 200,
                1223: 204
            }, Qe = w.ajaxSettings.xhr();
            y.cors = !!Qe && "withCredentials" in Qe, y.ajax = Qe = !!Qe, w.ajaxTransport((function(e) {
                var t, r;
                if (y.cors || Qe && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
                        i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Je[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()));
                            };
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), s.onabort !== undefined ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout((function() {
                                t && r();
                            }));
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null);
                        } catch (u) {
                            if (t) throw u;
                        }
                    },
                    abort: function() {
                        t && t();
                    }
                };
            })), w.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1);
            })), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e;
                    }
                }
            }), w.ajaxPrefilter("script", (function(e) {
                e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
            })), w.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, i) {
                        t = w("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                        }), a.head.appendChild(t[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            }));
            var Ke, Ze = [], et = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ze.pop() || w.expando + "_" + He++;
                    return this[e] = !0, e;
                }
            }), w.ajaxPrefilter("json jsonp", (function(e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && (et.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && et.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                s ? e[s] = e[s].replace(et, "$1" + i) : !1 !== e.jsonp && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
                e.converters["script json"] = function() {
                    return a || w.error(i + " was not called"), a[0];
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                    a = arguments;
                }, r.always((function() {
                    o === undefined ? w(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
                    Ze.push(i)), a && v(o) && o(a[0]), a = o = undefined;
                })), "script";
            })), y.createHTMLDocument = ((Ke = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
            2 === Ke.childNodes.length), w.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, 
                t.head.appendChild(r)) : t = a), o = !n && [], (i = E.exec(e)) ? [ t.createElement(i[1]) ] : (i = buildFragment([ e ], t, o), 
                o && o.length && w(o).remove(), w.merge([], i.childNodes)));
                var r, i, o;
            }, w.fn.load = function(e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return s > -1 && (r = stripAndCollapse(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, 
                t = undefined) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, o || [ e.responseText, t, e ]);
                    }));
                }), this;
            }, w.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e);
                };
            })), w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, (function(t) {
                    return e === t.elem;
                })).length;
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = w.css(e, "position"), c = w(e), f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), 
                    u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, 
                    i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, w.extend({}, s))), 
                    null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
                    "using" in t ? t.using.call(e, f) : c.css(f);
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return e === undefined ? this : this.each((function(t) {
                        w.offset.setOffset(this, e, t);
                    }));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), 
                            i.left += w.css(e, "borderLeftWidth", !0));
                        }
                        return {
                            top: t.top - i.top - w.css(r, "marginTop", !0),
                            left: t.left - i.left - w.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                        return e || X;
                    }));
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return M(this, (function(e, r, i) {
                        var o;
                        if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), i === undefined) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
                    }), e, r, arguments.length);
                };
            })), w.each([ "top", "left" ], (function(e, t) {
                w.cssHooks[t] = addGetHookIf(y.pixelPosition, (function(e, n) {
                    if (n) return n = curCSS(e, t), de.test(n) ? w(e).position()[t] + "px" : n;
                }));
            })), w.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    w.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return M(this, (function(t, n, i) {
                            var o;
                            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? w.css(t, n, s) : w.style(t, n, i, s);
                        }), t, a ? i : undefined, a);
                    };
                }));
            })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
            })), w.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                }
            }), w.proxy = function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t], t = e, e = n), v(e) ? (r = u.call(arguments, 2), 
                (i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++, i) : undefined;
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0);
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = nodeName, w.isFunction = v, 
            w.isWindow = x, w.camelCase = camelCase, w.type = toType, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }, (r = (function() {
                return w;
            }).apply(t, [])) === undefined || (e.exports = r);
            var tt = n.jQuery, nt = n.$;
            return w.noConflict = function(e) {
                return n.$ === w && (n.$ = nt), e && n.jQuery === w && (n.jQuery = tt), w;
            }, i || (n.jQuery = n.$ = w), w;
        }, "object" == typeof e.exports ? e.exports = i.document ? o(i, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return o(e);
        } : o(i);
    }
} ]);
//# sourceMappingURL=vendors.js.map