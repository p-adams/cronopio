// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var Zr = Object.create;
var Oe = Object.defineProperty;
var Qr = Object.getOwnPropertyDescriptor;
var Br = Object.getOwnPropertyNames;
var kr = Object.getPrototypeOf, Jr = Object.prototype.hasOwnProperty;
var Kr = (c1, u1)=>()=>(u1 || c1((u1 = {
            exports: {}
        }).exports, u1), u1.exports)
, Wr = (c2, u2)=>{
    for(var i in u2)Oe(c2, i, {
        get: u2[i],
        enumerable: !0
    });
}, ye = (c3, u3, i, G1)=>{
    if (u3 && typeof u3 == "object" || typeof u3 == "function") for (let R of Br(u3))!Jr.call(c3, R) && R !== i && Oe(c3, R, {
        get: ()=>u3[R]
        ,
        enumerable: !(G1 = Qr(u3, R)) || G1.enumerable
    });
    return c3;
}, z = (c4, u4, i)=>(ye(c4, u4, "default"), i && ye(i, u4, "default"))
, ar = (c5, u5, i)=>(i = c5 != null ? Zr(kr(c5)) : {}, ye(u5 || !c5 || !c5.__esModule ? Oe(i, "default", {
        value: c5,
        enumerable: !0
    }) : i, c5))
;
var Ne = Kr((pe, nr1)=>{
    (function(c6, u6) {
        typeof pe == "object" && typeof nr1 < "u" ? u6(pe) : typeof define == "function" && define.amd ? define([
            "exports"
        ], u6) : u6(c6.URI = c6.URI || {});
    })(pe, function(c7) {
        "use strict";
        function u7() {
            for(var r = arguments.length, e = Array(r), a2 = 0; a2 < r; a2++)e[a2] = arguments[a2];
            if (e.length > 1) {
                e[0] = e[0].slice(0, -1);
                for(var n1 = e.length - 1, t = 1; t < n1; ++t)e[t] = e[t].slice(1, -1);
                return e[n1] = e[n1].slice(1), e.join("");
            } else return e[0];
        }
        function i(r) {
            return "(?:" + r + ")";
        }
        function G2(r) {
            return r === void 0 ? "undefined" : r === null ? "null" : Object.prototype.toString.call(r).split(" ").pop().split("]").shift().toLowerCase();
        }
        function R(r) {
            return r.toUpperCase();
        }
        function fr(r) {
            return r != null ? r instanceof Array ? r : typeof r.length != "number" || r.split || r.setInterval || r.call ? [
                r
            ] : Array.prototype.slice.call(r) : [];
        }
        function ur(r, e) {
            var a3 = r;
            if (e) for(var n2 in e)a3[n2] = e[n2];
            return a3;
        }
        function Pe(r) {
            var e = "[A-Za-z]", n3 = "[0-9]", f = u7(n3, "[A-Fa-f]"), d2 = i(i("%[EFef]" + f + "%" + f + f + "%" + f + f) + "|" + i("%[89A-Fa-f]" + f + "%" + f + f) + "|" + i("%" + f + f)), g1 = "[\\:\\/\\?\\#\\[\\]\\@]", s = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", S2 = u7(g1, s), $2 = r ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", p1 = r ? "[\\uE000-\\uF8FF]" : "[]", E1 = u7(e, n3, "[\\-\\.\\_\\~]", $2), D = i(e + u7(e, n3, "[\\+\\-\\.]") + "*"), o = i(i(d2 + "|" + u7(E1, s, "[\\:]")) + "*"), M = i(i("25[0-5]") + "|" + i("2[0-4]" + n3) + "|" + i("1" + n3 + n3) + "|" + i("[1-9]" + n3) + "|" + n3), C1 = i(i("25[0-5]") + "|" + i("2[0-4]" + n3) + "|" + i("1" + n3 + n3) + "|" + i("0?[1-9]" + n3) + "|0?0?" + n3), T1 = i(C1 + "\\." + C1 + "\\." + C1 + "\\." + C1), l1 = i(f + "{1,4}"), A2 = i(i(l1 + "\\:" + l1) + "|" + T1), y2 = i(i(l1 + "\\:") + "{6}" + A2), U = i("\\:\\:" + i(l1 + "\\:") + "{5}" + A2), q2 = i(i(l1) + "?\\:\\:" + i(l1 + "\\:") + "{4}" + A2), H1 = i(i(i(l1 + "\\:") + "{0,1}" + l1) + "?\\:\\:" + i(l1 + "\\:") + "{3}" + A2), ue = i(i(i(l1 + "\\:") + "{0,2}" + l1) + "?\\:\\:" + i(l1 + "\\:") + "{2}" + A2), de = i(i(i(l1 + "\\:") + "{0,3}" + l1) + "?\\:\\:" + l1 + "\\:" + A2), oe = i(i(i(l1 + "\\:") + "{0,4}" + l1) + "?\\:\\:" + A2), J1 = i(i(i(l1 + "\\:") + "{0,5}" + l1) + "?\\:\\:" + l1), K = i(i(i(l1 + "\\:") + "{0,6}" + l1) + "?\\:\\:"), b = i([
                y2,
                U,
                q2,
                H1,
                ue,
                de,
                oe,
                J1,
                K
            ].join("|")), W = i(i(E1 + "|" + d2) + "+"), Ie = i(b + "\\%25" + W), j = i(b + i("\\%25|\\%(?!" + f + "{2})") + W), Vr = i("[vV]" + f + "+\\." + u7(E1, s, "[\\:]") + "+"), Mr = i("\\[" + i(j + "|" + b + "|" + Vr) + "\\]"), Ke = i(i(d2 + "|" + u7(E1, s)) + "*"), he1 = i(Mr + "|" + T1 + "(?!" + Ke + ")|" + Ke), se = i(n3 + "*"), We = i(i(o + "@") + "?" + he1 + i("\\:" + se) + "?"), ce = i(d2 + "|" + u7(E1, s, "[\\:\\@]")), qr = i(ce + "*"), er = i(ce + "+"), jr = i(i(d2 + "|" + u7(E1, s, "[\\@]")) + "+"), w1 = i(i("\\/" + qr) + "*"), ee = i("\\/" + i(er + w1) + "?"), Te = i(jr + w1), le1 = i(er + w1), re = "(?!" + ce + ")", la = i(w1 + "|" + ee + "|" + Te + "|" + le1 + "|" + re), ae = i(i(ce + "|" + u7("[\\/\\?]", p1)) + "*"), ve = i(i(ce + "|[\\/\\?]") + "*"), rr = i(i("\\/\\/" + We + w1) + "|" + ee + "|" + le1 + "|" + re), Gr = i(D + "\\:" + rr + i("\\?" + ae) + "?" + i("\\#" + ve) + "?"), Yr = i(i("\\/\\/" + We + w1) + "|" + ee + "|" + Te + "|" + re), Xr = i(Yr + i("\\?" + ae) + "?" + i("\\#" + ve) + "?"), pa = i(Gr + "|" + Xr), Sa = i(D + "\\:" + rr + i("\\?" + ae) + "?"), Da = "^(" + D + ")\\:" + i(i("\\/\\/(" + i("(" + o + ")@") + "?(" + he1 + ")" + i("\\:(" + se + ")") + "?)") + "?(" + w1 + "|" + ee + "|" + le1 + "|" + re + ")") + i("\\?(" + ae + ")") + "?" + i("\\#(" + ve + ")") + "?$", ga = "^(){0}" + i(i("\\/\\/(" + i("(" + o + ")@") + "?(" + he1 + ")" + i("\\:(" + se + ")") + "?)") + "?(" + w1 + "|" + ee + "|" + Te + "|" + re + ")") + i("\\?(" + ae + ")") + "?" + i("\\#(" + ve + ")") + "?$", $a = "^(" + D + ")\\:" + i(i("\\/\\/(" + i("(" + o + ")@") + "?(" + he1 + ")" + i("\\:(" + se + ")") + "?)") + "?(" + w1 + "|" + ee + "|" + le1 + "|" + re + ")") + i("\\?(" + ae + ")") + "?$", Ra = "^" + i("\\#(" + ve + ")") + "?$", Ca = "^" + i("(" + o + ")@") + "?(" + he1 + ")" + i("\\:(" + se + ")") + "?$";
            return {
                NOT_SCHEME: new RegExp(u7("[^]", e, n3, "[\\+\\-\\.]"), "g"),
                NOT_USERINFO: new RegExp(u7("[^\\%\\:]", E1, s), "g"),
                NOT_HOST: new RegExp(u7("[^\\%\\[\\]\\:]", E1, s), "g"),
                NOT_PATH: new RegExp(u7("[^\\%\\/\\:\\@]", E1, s), "g"),
                NOT_PATH_NOSCHEME: new RegExp(u7("[^\\%\\/\\@]", E1, s), "g"),
                NOT_QUERY: new RegExp(u7("[^\\%]", E1, s, "[\\:\\@\\/\\?]", p1), "g"),
                NOT_FRAGMENT: new RegExp(u7("[^\\%]", E1, s, "[\\:\\@\\/\\?]"), "g"),
                ESCAPE: new RegExp(u7("[^]", E1, s), "g"),
                UNRESERVED: new RegExp(E1, "g"),
                OTHER_CHARS: new RegExp(u7("[^\\%]", E1, S2), "g"),
                PCT_ENCODED: new RegExp(d2, "g"),
                IPV4ADDRESS: new RegExp("^(" + T1 + ")$"),
                IPV6ADDRESS: new RegExp("^\\[?(" + b + ")" + i(i("\\%25|\\%(?!" + f + "{2})") + "(" + W + ")") + "?\\]?$")
            };
        }
        var Y = Pe(!1), ne = Pe(!0), Ee = function() {
            function r(e, a4) {
                var n4 = [], t = !0, f = !1, h = void 0;
                try {
                    for(var v2 = e[Symbol.iterator](), d3; !(t = (d3 = v2.next()).done) && (n4.push(d3.value), !(a4 && n4.length === a4)); t = !0);
                } catch (g2) {
                    f = !0, h = g2;
                } finally{
                    try {
                        !t && v2.return && v2.return();
                    } finally{
                        if (f) throw h;
                    }
                }
                return n4;
            }
            return function(e, a5) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return r(e, a5);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), hr = function(r) {
            if (Array.isArray(r)) {
                for(var e = 0, a6 = Array(r.length); e < r.length; e++)a6[e] = r[e];
                return a6;
            } else return Array.from(r);
        }, X = 2147483647, O1 = 36, Se = 1, te = 26, sr = 38, cr = 700, _e = 72, me = 128, Ue = "-", vr1 = /^xn--/, Er = /[^\0-\x7E]/, dr = /[\x2E\u3002\uFF0E\uFF61]/g, or = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, De = O1 - Se, N1 = Math.floor, ge = String.fromCharCode;
        function V(r) {
            throw new RangeError(or[r]);
        }
        function lr(r, e) {
            for(var a7 = [], n5 = r.length; n5--;)a7[n5] = e(r[n5]);
            return a7;
        }
        function Fe(r, e) {
            var a8 = r.split("@"), n6 = "";
            a8.length > 1 && (n6 = a8[0] + "@", r = a8[1]), r = r.replace(dr, ".");
            var t = r.split("."), f = lr(t, e).join(".");
            return n6 + f;
        }
        function xe1(r) {
            for(var e = [], a9 = 0, n7 = r.length; a9 < n7;){
                var t = r.charCodeAt(a9++);
                if (t >= 55296 && t <= 56319 && a9 < n7) {
                    var f = r.charCodeAt(a9++);
                    (f & 64512) == 56320 ? e.push(((t & 1023) << 10) + (f & 1023) + 65536) : (e.push(t), a9--);
                } else e.push(t);
            }
            return e;
        }
        var pr = function(e) {
            return String.fromCodePoint.apply(String, hr(e));
        }, Sr = function(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : O1;
        }, He = function(e, a10) {
            return e + 22 + 75 * (e < 26) - ((a10 != 0) << 5);
        }, be = function(e, a11, n8) {
            var t = 0;
            for(e = n8 ? N1(e / cr) : e >> 1, e += N1(e / a11); e > De * te >> 1; t += O1)e = N1(e / De);
            return N1(t + (De + 1) * e / (e + sr));
        }, we = function(e) {
            var a12 = [], n9 = e.length, t = 0, f = me, h = _e, v3 = e.lastIndexOf(Ue);
            v3 < 0 && (v3 = 0);
            for(var d4 = 0; d4 < v3; ++d4)e.charCodeAt(d4) >= 128 && V("not-basic"), a12.push(e.charCodeAt(d4));
            for(var g3 = v3 > 0 ? v3 + 1 : 0; g3 < n9;){
                for(var s = t, S3 = 1, $3 = O1;; $3 += O1){
                    g3 >= n9 && V("invalid-input");
                    var p2 = Sr(e.charCodeAt(g3++));
                    (p2 >= O1 || p2 > N1((X - t) / S3)) && V("overflow"), t += p2 * S3;
                    var E2 = $3 <= h ? Se : $3 >= h + te ? te : $3 - h;
                    if (p2 < E2) break;
                    var D = O1 - E2;
                    S3 > N1(X / D) && V("overflow"), S3 *= D;
                }
                var o = a12.length + 1;
                h = be(t - s, o, s == 0), N1(t / o) > X - f && V("overflow"), f += N1(t / o), t %= o, a12.splice(t++, 0, f);
            }
            return String.fromCodePoint.apply(String, a12);
        }, Le = function(e) {
            var a13 = [];
            e = xe1(e);
            var n10 = e.length, t = me, f = 0, h = _e, v4 = !0, d5 = !1, g4 = void 0;
            try {
                for(var s = e[Symbol.iterator](), S4; !(v4 = (S4 = s.next()).done); v4 = !0){
                    var $4 = S4.value;
                    $4 < 128 && a13.push(ge($4));
                }
            } catch (j) {
                d5 = !0, g4 = j;
            } finally{
                try {
                    !v4 && s.return && s.return();
                } finally{
                    if (d5) throw g4;
                }
            }
            var p3 = a13.length, E3 = p3;
            for(p3 && a13.push(Ue); E3 < n10;){
                var D = X, o = !0, M1 = !1, C2 = void 0;
                try {
                    for(var T2 = e[Symbol.iterator](), l2; !(o = (l2 = T2.next()).done); o = !0){
                        var A3 = l2.value;
                        A3 >= t && A3 < D && (D = A3);
                    }
                } catch (j) {
                    M1 = !0, C2 = j;
                } finally{
                    try {
                        !o && T2.return && T2.return();
                    } finally{
                        if (M1) throw C2;
                    }
                }
                var y3 = E3 + 1;
                D - t > N1((X - f) / y3) && V("overflow"), f += (D - t) * y3, t = D;
                var U = !0, q3 = !1, H2 = void 0;
                try {
                    for(var ue = e[Symbol.iterator](), de; !(U = (de = ue.next()).done); U = !0){
                        var oe = de.value;
                        if (oe < t && ++f > X && V("overflow"), oe == t) {
                            for(var J2 = f, K = O1;; K += O1){
                                var b = K <= h ? Se : K >= h + te ? te : K - h;
                                if (J2 < b) break;
                                var W = J2 - b, Ie = O1 - b;
                                a13.push(ge(He(b + W % Ie, 0))), J2 = N1(W / Ie);
                            }
                            a13.push(ge(He(J2, 0))), h = be(f, y3, E3 == p3), f = 0, ++E3;
                        }
                    }
                } catch (j1) {
                    q3 = !0, H2 = j1;
                } finally{
                    try {
                        !U && ue.return && ue.return();
                    } finally{
                        if (q3) throw H2;
                    }
                }
                ++f, ++t;
            }
            return a13.join("");
        }, Dr = function(e) {
            return Fe(e, function(a14) {
                return vr1.test(a14) ? we(a14.slice(4).toLowerCase()) : a14;
            });
        }, gr = function(e) {
            return Fe(e, function(a15) {
                return Er.test(a15) ? "xn--" + Le(a15) : a15;
            });
        }, Z = {
            version: "2.1.0",
            ucs2: {
                decode: xe1,
                encode: pr
            },
            decode: we,
            encode: Le,
            toASCII: gr,
            toUnicode: Dr
        }, I1 = {};
        function P(r) {
            var e = r.charCodeAt(0), a16 = void 0;
            return e < 16 ? a16 = "%0" + e.toString(16).toUpperCase() : e < 128 ? a16 = "%" + e.toString(16).toUpperCase() : e < 2048 ? a16 = "%" + (e >> 6 | 192).toString(16).toUpperCase() + "%" + (e & 63 | 128).toString(16).toUpperCase() : a16 = "%" + (e >> 12 | 224).toString(16).toUpperCase() + "%" + (e >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (e & 63 | 128).toString(16).toUpperCase(), a16;
        }
        function Q2(r) {
            for(var e = "", a17 = 0, n11 = r.length; a17 < n11;){
                var t = parseInt(r.substr(a17 + 1, 2), 16);
                if (t < 128) e += String.fromCharCode(t), a17 += 3;
                else if (t >= 194 && t < 224) {
                    if (n11 - a17 >= 6) {
                        var f = parseInt(r.substr(a17 + 4, 2), 16);
                        e += String.fromCharCode((t & 31) << 6 | f & 63);
                    } else e += r.substr(a17, 6);
                    a17 += 6;
                } else if (t >= 224) {
                    if (n11 - a17 >= 9) {
                        var h = parseInt(r.substr(a17 + 4, 2), 16), v5 = parseInt(r.substr(a17 + 7, 2), 16);
                        e += String.fromCharCode((t & 15) << 12 | (h & 63) << 6 | v5 & 63);
                    } else e += r.substr(a17, 9);
                    a17 += 9;
                } else e += r.substr(a17, 3), a17 += 3;
            }
            return e;
        }
        function $e(r, e) {
            function a18(n12) {
                var t = Q2(n12);
                return t.match(e.UNRESERVED) ? t : n12;
            }
            return r.scheme && (r.scheme = String(r.scheme).replace(e.PCT_ENCODED, a18).toLowerCase().replace(e.NOT_SCHEME, "")), r.userinfo !== void 0 && (r.userinfo = String(r.userinfo).replace(e.PCT_ENCODED, a18).replace(e.NOT_USERINFO, P).replace(e.PCT_ENCODED, R)), r.host !== void 0 && (r.host = String(r.host).replace(e.PCT_ENCODED, a18).toLowerCase().replace(e.NOT_HOST, P).replace(e.PCT_ENCODED, R)), r.path !== void 0 && (r.path = String(r.path).replace(e.PCT_ENCODED, a18).replace(r.scheme ? e.NOT_PATH : e.NOT_PATH_NOSCHEME, P).replace(e.PCT_ENCODED, R)), r.query !== void 0 && (r.query = String(r.query).replace(e.PCT_ENCODED, a18).replace(e.NOT_QUERY, P).replace(e.PCT_ENCODED, R)), r.fragment !== void 0 && (r.fragment = String(r.fragment).replace(e.PCT_ENCODED, a18).replace(e.NOT_FRAGMENT, P).replace(e.PCT_ENCODED, R)), r;
        }
        function Re(r) {
            return r.replace(/^0*(.*)/, "$1") || "0";
        }
        function Ce(r, e) {
            var a19 = r.match(e.IPV4ADDRESS) || [], n13 = Ee(a19, 2), t = n13[1];
            return t ? t.split(".").map(Re).join(".") : r;
        }
        function ze(r, e) {
            var a20 = r.match(e.IPV6ADDRESS) || [], n14 = Ee(a20, 3), t = n14[1], f = n14[2];
            if (t) {
                for(var h = t.toLowerCase().split("::").reverse(), v6 = Ee(h, 2), d6 = v6[0], g5 = v6[1], s = g5 ? g5.split(":").map(Re) : [], S5 = d6.split(":").map(Re), $5 = e.IPV4ADDRESS.test(S5[S5.length - 1]), p4 = $5 ? 7 : 8, E4 = S5.length - p4, D = Array(p4), o = 0; o < p4; ++o)D[o] = s[o] || S5[E4 + o] || "";
                $5 && (D[p4 - 1] = Ce(D[p4 - 1], e));
                var M2 = D.reduce(function(y4, U, q4) {
                    if (!U || U === "0") {
                        var H3 = y4[y4.length - 1];
                        H3 && H3.index + H3.length === q4 ? H3.length++ : y4.push({
                            index: q4,
                            length: 1
                        });
                    }
                    return y4;
                }, []), C3 = M2.sort(function(y5, U) {
                    return U.length - y5.length;
                })[0], T3 = void 0;
                if (C3 && C3.length > 1) {
                    var l3 = D.slice(0, C3.index), A4 = D.slice(C3.index + C3.length);
                    T3 = l3.join(":") + "::" + A4.join(":");
                } else T3 = D.join(":");
                return f && (T3 += "%" + f), T3;
            } else return r;
        }
        var $r = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Rr = "".match(/(){0}/)[1] === void 0;
        function F1(r) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a21 = {}, n15 = e.iri !== !1 ? ne : Y;
            e.reference === "suffix" && (r = (e.scheme ? e.scheme + ":" : "") + "//" + r);
            var t = r.match($r);
            if (t) {
                Rr ? (a21.scheme = t[1], a21.userinfo = t[3], a21.host = t[4], a21.port = parseInt(t[5], 10), a21.path = t[6] || "", a21.query = t[7], a21.fragment = t[8], isNaN(a21.port) && (a21.port = t[5])) : (a21.scheme = t[1] || void 0, a21.userinfo = r.indexOf("@") !== -1 ? t[3] : void 0, a21.host = r.indexOf("//") !== -1 ? t[4] : void 0, a21.port = parseInt(t[5], 10), a21.path = t[6] || "", a21.query = r.indexOf("?") !== -1 ? t[7] : void 0, a21.fragment = r.indexOf("#") !== -1 ? t[8] : void 0, isNaN(a21.port) && (a21.port = r.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? t[4] : void 0)), a21.host && (a21.host = ze(Ce(a21.host, n15), n15)), a21.scheme === void 0 && a21.userinfo === void 0 && a21.host === void 0 && a21.port === void 0 && !a21.path && a21.query === void 0 ? a21.reference = "same-document" : a21.scheme === void 0 ? a21.reference = "relative" : a21.fragment === void 0 ? a21.reference = "absolute" : a21.reference = "uri", e.reference && e.reference !== "suffix" && e.reference !== a21.reference && (a21.error = a21.error || "URI is not a " + e.reference + " reference.");
                var f = I1[(e.scheme || a21.scheme || "").toLowerCase()];
                if (!e.unicodeSupport && (!f || !f.unicodeSupport)) {
                    if (a21.host && (e.domainHost || f && f.domainHost)) try {
                        a21.host = Z.toASCII(a21.host.replace(n15.PCT_ENCODED, Q2).toLowerCase());
                    } catch (h) {
                        a21.error = a21.error || "Host's domain name can not be converted to ASCII via punycode: " + h;
                    }
                    $e(a21, Y);
                } else $e(a21, n15);
                f && f.parse && f.parse(a21, e);
            } else a21.error = a21.error || "URI can not be parsed.";
            return a21;
        }
        function Cr(r, e) {
            var a22 = e.iri !== !1 ? ne : Y, n16 = [];
            return r.userinfo !== void 0 && (n16.push(r.userinfo), n16.push("@")), r.host !== void 0 && n16.push(ze(Ce(String(r.host), a22), a22).replace(a22.IPV6ADDRESS, function(t, f, h) {
                return "[" + f + (h ? "%25" + h : "") + "]";
            })), (typeof r.port == "number" || typeof r.port == "string") && (n16.push(":"), n16.push(String(r.port))), n16.length ? n16.join("") : void 0;
        }
        var Ve = /^\.\.?\//, Me = /^\/\.(\/|$)/, qe = /^\/\.\.(\/|$)/, Ar = /^\/?(?:.|\n)*?(?=\/|$)/;
        function B1(r) {
            for(var e = []; r.length;)if (r.match(Ve)) r = r.replace(Ve, "");
            else if (r.match(Me)) r = r.replace(Me, "/");
            else if (r.match(qe)) r = r.replace(qe, "/"), e.pop();
            else if (r === "." || r === "..") r = "";
            else {
                var a23 = r.match(Ar);
                if (a23) {
                    var n17 = a23[0];
                    r = r.slice(n17.length), e.push(n17);
                } else throw new Error("Unexpected dot segment condition");
            }
            return e.join("");
        }
        function _1(r) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a24 = e.iri ? ne : Y, n18 = [], t = I1[(e.scheme || r.scheme || "").toLowerCase()];
            if (t && t.serialize && t.serialize(r, e), r.host && !a24.IPV6ADDRESS.test(r.host)) {
                if (e.domainHost || t && t.domainHost) try {
                    r.host = e.iri ? Z.toUnicode(r.host) : Z.toASCII(r.host.replace(a24.PCT_ENCODED, Q2).toLowerCase());
                } catch (v7) {
                    r.error = r.error || "Host's domain name can not be converted to " + (e.iri ? "Unicode" : "ASCII") + " via punycode: " + v7;
                }
            }
            $e(r, a24), e.reference !== "suffix" && r.scheme && (n18.push(r.scheme), n18.push(":"));
            var f = Cr(r, e);
            if (f !== void 0 && (e.reference !== "suffix" && n18.push("//"), n18.push(f), r.path && r.path.charAt(0) !== "/" && n18.push("/")), r.path !== void 0) {
                var h = r.path;
                !e.absolutePath && (!t || !t.absolutePath) && (h = B1(h)), f === void 0 && (h = h.replace(/^\/\//, "/%2F")), n18.push(h);
            }
            return r.query !== void 0 && (n18.push("?"), n18.push(r.query)), r.fragment !== void 0 && (n18.push("#"), n18.push(r.fragment)), n18.join("");
        }
        function je(r, e) {
            var a25 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n19 = arguments[3], t = {};
            return n19 || (r = F1(_1(r, a25), a25), e = F1(_1(e, a25), a25)), a25 = a25 || {}, !a25.tolerant && e.scheme ? (t.scheme = e.scheme, t.userinfo = e.userinfo, t.host = e.host, t.port = e.port, t.path = B1(e.path || ""), t.query = e.query) : (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0 ? (t.userinfo = e.userinfo, t.host = e.host, t.port = e.port, t.path = B1(e.path || ""), t.query = e.query) : (e.path ? (e.path.charAt(0) === "/" ? t.path = B1(e.path) : ((r.userinfo !== void 0 || r.host !== void 0 || r.port !== void 0) && !r.path ? t.path = "/" + e.path : r.path ? t.path = r.path.slice(0, r.path.lastIndexOf("/") + 1) + e.path : t.path = e.path, t.path = B1(t.path)), t.query = e.query) : (t.path = r.path, e.query !== void 0 ? t.query = e.query : t.query = r.query), t.userinfo = r.userinfo, t.host = r.host, t.port = r.port), t.scheme = r.scheme), t.fragment = e.fragment, t;
        }
        function Ir(r, e, a26) {
            var n20 = ur({
                scheme: "null"
            }, a26);
            return _1(je(F1(r, n20), F1(e, n20), n20, !0), n20);
        }
        function Tr(r, e) {
            return typeof r == "string" ? r = _1(F1(r, e), e) : G2(r) === "object" && (r = F1(_1(r, e), e)), r;
        }
        function yr(r, e, a27) {
            return typeof r == "string" ? r = _1(F1(r, a27), a27) : G2(r) === "object" && (r = _1(r, a27)), typeof e == "string" ? e = _1(F1(e, a27), a27) : G2(e) === "object" && (e = _1(e, a27)), r === e;
        }
        function Or(r, e) {
            return r && r.toString().replace(!e || !e.iri ? Y.ESCAPE : ne.ESCAPE, P);
        }
        function x1(r, e) {
            return r && r.toString().replace(!e || !e.iri ? Y.PCT_ENCODED : ne.PCT_ENCODED, Q2);
        }
        var ie = {
            scheme: "http",
            domainHost: !0,
            parse: function(e, a) {
                return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
            },
            serialize: function(e, a) {
                var n21 = String(e.scheme).toLowerCase() === "https";
                return (e.port === (n21 ? 443 : 80) || e.port === "") && (e.port = void 0), e.path || (e.path = "/"), e;
            }
        }, Ge = {
            scheme: "https",
            domainHost: ie.domainHost,
            parse: ie.parse,
            serialize: ie.serialize
        };
        function Ye(r) {
            return typeof r.secure == "boolean" ? r.secure : String(r.scheme).toLowerCase() === "wss";
        }
        var fe1 = {
            scheme: "ws",
            domainHost: !0,
            parse: function(e, a) {
                var n22 = e;
                return n22.secure = Ye(n22), n22.resourceName = (n22.path || "/") + (n22.query ? "?" + n22.query : ""), n22.path = void 0, n22.query = void 0, n22;
            },
            serialize: function(e, a) {
                if ((e.port === (Ye(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
                    var n23 = e.resourceName.split("?"), t = Ee(n23, 2), f = t[0], h = t[1];
                    e.path = f && f !== "/" ? f : void 0, e.query = h, e.resourceName = void 0;
                }
                return e.fragment = void 0, e;
            }
        }, Xe1 = {
            scheme: "wss",
            domainHost: fe1.domainHost,
            parse: fe1.parse,
            serialize: fe1.serialize
        }, Nr = {}, Pr = !0, Ze1 = "[A-Za-z0-9\\-\\.\\_\\~" + (Pr ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]", m1 = "[0-9A-Fa-f]", _r = i(i("%[EFef]" + m1 + "%" + m1 + m1 + "%" + m1 + m1) + "|" + i("%[89A-Fa-f]" + m1 + "%" + m1 + m1) + "|" + i("%" + m1 + m1)), mr = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Ur = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Fr = u7(Ur, '[\\"\\\\]'), xr = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Hr = new RegExp(Ze1, "g"), k = new RegExp(_r, "g"), br = new RegExp(u7("[^]", mr, "[\\.]", '[\\"]', Fr), "g"), Qe = new RegExp(u7("[^]", Ze1, xr), "g"), wr1 = Qe;
        function Ae(r) {
            var e = Q2(r);
            return e.match(Hr) ? e : r;
        }
        var Be = {
            scheme: "mailto",
            parse: function(e, a28) {
                var n24 = e, t = n24.to = n24.path ? n24.path.split(",") : [];
                if (n24.path = void 0, n24.query) {
                    for(var f = !1, h = {}, v8 = n24.query.split("&"), d7 = 0, g6 = v8.length; d7 < g6; ++d7){
                        var s = v8[d7].split("=");
                        switch(s[0]){
                            case "to":
                                for(var S6 = s[1].split(","), $6 = 0, p5 = S6.length; $6 < p5; ++$6)t.push(S6[$6]);
                                break;
                            case "subject":
                                n24.subject = x1(s[1], a28);
                                break;
                            case "body":
                                n24.body = x1(s[1], a28);
                                break;
                            default:
                                f = !0, h[x1(s[0], a28)] = x1(s[1], a28);
                                break;
                        }
                    }
                    f && (n24.headers = h);
                }
                n24.query = void 0;
                for(var E5 = 0, D = t.length; E5 < D; ++E5){
                    var o = t[E5].split("@");
                    if (o[0] = x1(o[0]), a28.unicodeSupport) o[1] = x1(o[1], a28).toLowerCase();
                    else try {
                        o[1] = Z.toASCII(x1(o[1], a28).toLowerCase());
                    } catch (M3) {
                        n24.error = n24.error || "Email address's domain name can not be converted to ASCII via punycode: " + M3;
                    }
                    t[E5] = o.join("@");
                }
                return n24;
            },
            serialize: function(e, a29) {
                var n25 = e, t = fr(e.to);
                if (t) {
                    for(var f = 0, h = t.length; f < h; ++f){
                        var v9 = String(t[f]), d8 = v9.lastIndexOf("@"), g7 = v9.slice(0, d8).replace(k, Ae).replace(k, R).replace(br, P), s = v9.slice(d8 + 1);
                        try {
                            s = a29.iri ? Z.toUnicode(s) : Z.toASCII(x1(s, a29).toLowerCase());
                        } catch (E6) {
                            n25.error = n25.error || "Email address's domain name can not be converted to " + (a29.iri ? "Unicode" : "ASCII") + " via punycode: " + E6;
                        }
                        t[f] = g7 + "@" + s;
                    }
                    n25.path = t.join(",");
                }
                var S7 = e.headers = e.headers || {};
                e.subject && (S7.subject = e.subject), e.body && (S7.body = e.body);
                var $7 = [];
                for(var p6 in S7)S7[p6] !== Nr[p6] && $7.push(p6.replace(k, Ae).replace(k, R).replace(Qe, P) + "=" + S7[p6].replace(k, Ae).replace(k, R).replace(wr1, P));
                return $7.length && (n25.query = $7.join("&")), n25;
            }
        }, Lr = /^([^\:]+)\:(.*)/, ke = {
            scheme: "urn",
            parse: function(e, a30) {
                var n26 = e.path && e.path.match(Lr), t = e;
                if (n26) {
                    var f = a30.scheme || t.scheme || "urn", h = n26[1].toLowerCase(), v10 = n26[2], d9 = f + ":" + (a30.nid || h), g8 = I1[d9];
                    t.nid = h, t.nss = v10, t.path = void 0, g8 && (t = g8.parse(t, a30));
                } else t.error = t.error || "URN can not be parsed.";
                return t;
            },
            serialize: function(e, a31) {
                var n27 = a31.scheme || e.scheme || "urn", t = e.nid, f = n27 + ":" + (a31.nid || t), h = I1[f];
                h && (e = h.serialize(e, a31));
                var v11 = e, d10 = e.nss;
                return v11.path = (t || a31.nid) + ":" + d10, v11;
            }
        }, zr = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Je = {
            scheme: "urn:uuid",
            parse: function(e, a32) {
                var n28 = e;
                return n28.uuid = n28.nss, n28.nss = void 0, !a32.tolerant && (!n28.uuid || !n28.uuid.match(zr)) && (n28.error = n28.error || "UUID is not valid."), n28;
            },
            serialize: function(e, a) {
                var n29 = e;
                return n29.nss = (e.uuid || "").toLowerCase(), n29;
            }
        };
        I1[ie.scheme] = ie, I1[Ge.scheme] = Ge, I1[fe1.scheme] = fe1, I1[Xe1.scheme] = Xe1, I1[Be.scheme] = Be, I1[ke.scheme] = ke, I1[Je.scheme] = Je, c7.SCHEMES = I1, c7.pctEncChar = P, c7.pctDecChars = Q2, c7.parse = F1, c7.removeDotSegments = B1, c7.serialize = _1, c7.resolveComponents = je, c7.resolve = Ir, c7.normalize = Tr, c7.equal = yr, c7.escapeComponent = Or, c7.unescapeComponent = x1, Object.defineProperty(c7, "__esModule", {
            value: !0
        });
    });
});
var L = {};
Wr(L, {
    SCHEMES: ()=>ra
    ,
    __esModule: ()=>ea
    ,
    default: ()=>oa
    ,
    equal: ()=>ca
    ,
    escapeComponent: ()=>va
    ,
    normalize: ()=>sa
    ,
    parse: ()=>ta
    ,
    pctDecChars: ()=>na
    ,
    pctEncChar: ()=>aa
    ,
    removeDotSegments: ()=>ia
    ,
    resolve: ()=>ha
    ,
    resolveComponents: ()=>ua
    ,
    serialize: ()=>fa
    ,
    unescapeComponent: ()=>Ea
});
var ir = ar(Ne());
z(L, ar(Ne()));
var ea = !0, { SCHEMES: ra , pctEncChar: aa , pctDecChars: na , parse: ta , removeDotSegments: ia , serialize: fa , resolveComponents: ua , resolve: ha , normalize: sa , equal: ca , escapeComponent: va , unescapeComponent: Ea  } = ir, { default: tr , ...da } = ir, oa = tr !== void 0 ? tr : da;
const mod = {
    SCHEMES: ra,
    __esModule: ea,
    default: oa,
    equal: ca,
    escapeComponent: va,
    normalize: sa,
    parse: ta,
    pctDecChars: na,
    pctEncChar: aa,
    removeDotSegments: ia,
    resolve: ha,
    resolveComponents: ua,
    serialize: fa,
    unescapeComponent: Ea
};
var L1 = Object.create;
var v = Object.defineProperty;
var M = Object.getOwnPropertyDescriptor;
var N = Object.getOwnPropertyNames;
var $ = Object.getPrototypeOf, z1 = Object.prototype.hasOwnProperty;
var B = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports)
, C = (r, e)=>{
    for(var t in e)v(r, t, {
        get: e[t],
        enumerable: !0
    });
}, y = (r, e, t, i)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let u8 of N(e))!z1.call(r, u8) && u8 !== t && v(r, u8, {
        get: ()=>e[u8]
        ,
        enumerable: !(i = M(e, u8)) || i.enumerable
    });
    return r;
}, d = (r, e, t)=>(y(r, e, "default"), t && y(t, e, "default"))
, A = (r, e, t)=>(t = r != null ? L1($(r)) : {}, y(e || !r || !r.__esModule ? v(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r))
;
var w = B((T, O2)=>{
    "use strict";
    var o = O2.exports = function(r, e, t) {
        typeof e == "function" && (t = e, e = {}), t = e.cb || t;
        var i = typeof t == "function" ? t : t.pre || function() {}, u9 = t.post || function() {};
        p7(e, i, u9, r, "", r);
    };
    o.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0,
        if: !0,
        then: !0,
        else: !0
    };
    o.arrayKeywords = {
        items: !0,
        allOf: !0,
        anyOf: !0,
        oneOf: !0
    };
    o.propsKeywords = {
        $defs: !0,
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
    };
    o.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
    };
    function p7(r, e, t, i, u10, l4, x2, K, _2, g9) {
        if (i && typeof i == "object" && !Array.isArray(i)) {
            e(i, u10, l4, x2, K, _2, g9);
            for(var n30 in i){
                var f = i[n30];
                if (Array.isArray(f)) {
                    if (n30 in o.arrayKeywords) for(var s = 0; s < f.length; s++)p7(r, e, t, f[s], u10 + "/" + n30 + "/" + s, l4, u10, n30, i, s);
                } else if (n30 in o.propsKeywords) {
                    if (f && typeof f == "object") for(var m2 in f)p7(r, e, t, f[m2], u10 + "/" + n30 + "/" + D(m2), l4, u10, n30, i, m2);
                } else (n30 in o.keywords || r.allKeys && !(n30 in o.skipKeywords)) && p7(r, e, t, f, u10 + "/" + n30, l4, u10, n30, i);
            }
            t(i, u10, l4, x2, K, _2, g9);
        }
    }
    function D(r) {
        return r.replace(/~/g, "~0").replace(/\//g, "~1");
    }
});
var a = {};
C(a, {
    arrayKeywords: ()=>F
    ,
    default: ()=>Q
    ,
    keywords: ()=>E
    ,
    propsKeywords: ()=>G
    ,
    skipKeywords: ()=>H
});
var q = A(w());
d(a, A(w()));
var { keywords: E , arrayKeywords: F , propsKeywords: G , skipKeywords: H  } = q, { default: I , ...J } = q, Q = I !== void 0 ? I : J;
const mod1 = {
    arrayKeywords: F,
    default: Q,
    keywords: E,
    propsKeywords: G,
    skipKeywords: H
};
var d1 = Object.create;
var l = Object.defineProperty;
var v1 = Object.getOwnPropertyDescriptor;
var y1 = Object.getOwnPropertyNames;
var _ = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty;
var m = (e, r)=>()=>(r || e((r = {
            exports: {}
        }).exports, r), r.exports)
, x = (e, r)=>{
    for(var t in r)l(e, t, {
        get: r[t],
        enumerable: !0
    });
}, c = (e, r, t, o)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let f of y1(r))!g.call(e, f) && f !== t && l(e, f, {
        get: ()=>r[f]
        ,
        enumerable: !(o = v1(r, f)) || o.enumerable
    });
    return e;
}, n = (e, r, t)=>(c(e, r, "default"), t && c(t, r, "default"))
, O = (e, r, t)=>(t = e != null ? d1(_(e)) : {}, c(r || !e || !e.__esModule ? l(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e))
;
var p = m((E, j)=>{
    "use strict";
    j.exports = function e(r, t) {
        if (r === t) return !0;
        if (r && t && typeof r == "object" && typeof t == "object") {
            if (r.constructor !== t.constructor) return !1;
            var o, f, s;
            if (Array.isArray(r)) {
                if (o = r.length, o != t.length) return !1;
                for(f = o; (f--) !== 0;)if (!e(r[f], t[f])) return !1;
                return !0;
            }
            if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags;
            if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf();
            if (r.toString !== Object.prototype.toString) return r.toString() === t.toString();
            if (s = Object.keys(r), o = s.length, o !== Object.keys(t).length) return !1;
            for(f = o; (f--) !== 0;)if (!Object.prototype.hasOwnProperty.call(t, s[f])) return !1;
            for(f = o; (f--) !== 0;){
                var i = s[f];
                if (!e(r[i], t[i])) return !1;
            }
            return !0;
        }
        return r !== r && t !== t;
    };
});
var u = {};
x(u, {
    default: ()=>q1
});
var S = O(p());
n(u, O(p()));
var { default: a1 , ...A1 } = S, q1 = a1 !== void 0 ? a1 : A1;
const mod2 = {
    default: q1
};
const __1$ = mod.default ?? mod;
const __2$ = mod1.default ?? mod1;
const __3$ = mod2.default ?? mod2;
var Xo = Object.create;
var Yt = Object.defineProperty;
var Yo = Object.getOwnPropertyDescriptor;
var Zo = Object.getOwnPropertyNames;
var ea1 = Object.getPrototypeOf, ta1 = Object.prototype.hasOwnProperty;
((t)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
        get: (e, r)=>(typeof require < "u" ? require : e)[r]
    }) : t
)(function(t) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + t + '" is not supported');
});
var $1 = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports)
, ra1 = (t, e)=>{
    for(var r in e)Yt(t, r, {
        get: e[r],
        enumerable: !0
    });
}, Xt = (t, e, r, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let n31 of Zo(e))!ta1.call(t, n31) && n31 !== r && Yt(t, n31, {
        get: ()=>e[n31]
        ,
        enumerable: !(s = Yo(e, n31)) || s.enumerable
    });
    return t;
}, he = (t, e, r)=>(Xt(t, e, "default"), r && Xt(r, e, "default"))
, Cs = (t, e, r)=>(r = t != null ? Xo(ea1(t)) : {}, Xt(e || !t || !t.__esModule ? Yt(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t))
;
var xe = $1((O3)=>{
    "use strict";
    Object.defineProperty(O3, "__esModule", {
        value: !0
    });
    O3.regexpCode = O3.getEsmExportName = O3.getProperty = O3.safeStringify = O3.stringify = O3.strConcat = O3.addCodeArg = O3.str = O3._ = O3.nil = O3._Code = O3.Name = O3.IDENTIFIER = O3._CodeOrName = void 0;
    var Le = class {
    };
    O3._CodeOrName = Le;
    O3.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var ve = class extends Le {
        constructor(e){
            if (super(), !O3.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
            this.str = e;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            return !1;
        }
        get names() {
            return {
                [this.str]: 1
            };
        }
    };
    O3.Name = ve;
    var B2 = class extends Le {
        constructor(e){
            super(), this._items = typeof e == "string" ? [
                e
            ] : e;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            if (this._items.length > 1) return !1;
            let e = this._items[0];
            return e === "" || e === '""';
        }
        get str() {
            var e;
            return (e = this._str) !== null && e !== void 0 ? e : this._str = this._items.reduce((r, s)=>`${r}${s}`
            , "");
        }
        get names() {
            var e;
            return (e = this._names) !== null && e !== void 0 ? e : this._names = this._items.reduce((r, s)=>(s instanceof ve && (r[s.str] = (r[s.str] || 0) + 1), r)
            , {});
        }
    };
    O3._Code = B2;
    O3.nil = new B2("");
    function Is(t, ...e) {
        let r = [
            t[0]
        ], s = 0;
        for(; s < e.length;)er(r, e[s]), r.push(t[++s]);
        return new B2(r);
    }
    O3._ = Is;
    var Zt = new B2("+");
    function Ms(t, ...e) {
        let r = [
            Ge(t[0])
        ], s = 0;
        for(; s < e.length;)r.push(Zt), er(r, e[s]), r.push(Zt, Ge(t[++s]));
        return sa1(r), new B2(r);
    }
    O3.str = Ms;
    function er(t, e) {
        e instanceof B2 ? t.push(...e._items) : e instanceof ve ? t.push(e) : t.push(aa1(e));
    }
    O3.addCodeArg = er;
    function sa1(t) {
        let e = 1;
        for(; e < t.length - 1;){
            if (t[e] === Zt) {
                let r = na1(t[e - 1], t[e + 1]);
                if (r !== void 0) {
                    t.splice(e - 1, 3, r);
                    continue;
                }
                t[e++] = "+";
            }
            e++;
        }
    }
    function na1(t, e) {
        if (e === '""') return t;
        if (t === '""') return e;
        if (typeof t == "string") return e instanceof ve || t[t.length - 1] !== '"' ? void 0 : typeof e != "string" ? `${t.slice(0, -1)}${e}"` : e[0] === '"' ? t.slice(0, -1) + e.slice(1) : void 0;
        if (typeof e == "string" && e[0] === '"' && !(t instanceof ve)) return `"${t}${e.slice(1)}`;
    }
    function oa1(t, e) {
        return e.emptyStr() ? t : t.emptyStr() ? e : Ms`${t}${e}`;
    }
    O3.strConcat = oa1;
    function aa1(t) {
        return typeof t == "number" || typeof t == "boolean" || t === null ? t : Ge(Array.isArray(t) ? t.join(",") : t);
    }
    function ia1(t) {
        return new B2(Ge(t));
    }
    O3.stringify = ia1;
    function Ge(t) {
        return JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    O3.safeStringify = Ge;
    function ca1(t) {
        return typeof t == "string" && O3.IDENTIFIER.test(t) ? new B2(`.${t}`) : Is`[${t}]`;
    }
    O3.getProperty = ca1;
    function ua1(t) {
        if (typeof t == "string" && O3.IDENTIFIER.test(t)) return new B2(`${t}`);
        throw new Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
    }
    O3.getEsmExportName = ua1;
    function la(t) {
        return new B2(t.toString());
    }
    O3.regexpCode = la;
});
var nr = $1((L2)=>{
    "use strict";
    Object.defineProperty(L2, "__esModule", {
        value: !0
    });
    L2.ValueScope = L2.ValueScopeName = L2.Scope = L2.varKinds = L2.UsedValueState = void 0;
    var J3 = xe(), tr1 = class extends Error {
        constructor(e){
            super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
        }
    }, rr;
    (function(t) {
        t[t.Started = 0] = "Started", t[t.Completed = 1] = "Completed";
    })(rr = L2.UsedValueState || (L2.UsedValueState = {}));
    L2.varKinds = {
        const: new J3.Name("const"),
        let: new J3.Name("let"),
        var: new J3.Name("var")
    };
    var $t = class {
        constructor({ prefixes: e , parent: r  } = {}){
            this._names = {}, this._prefixes = e, this._parent = r;
        }
        toName(e) {
            return e instanceof J3.Name ? e : this.name(e);
        }
        name(e) {
            return new J3.Name(this._newName(e));
        }
        _newName(e) {
            let r = this._names[e] || this._nameGroup(e);
            return `${e}${r.index++}`;
        }
        _nameGroup(e) {
            var r, s;
            if (!((s = (r = this._parent) === null || r === void 0 ? void 0 : r._prefixes) === null || s === void 0) && s.has(e) || this._prefixes && !this._prefixes.has(e)) throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
            return this._names[e] = {
                prefix: e,
                index: 0
            };
        }
    };
    L2.Scope = $t;
    var gt = class extends J3.Name {
        constructor(e, r){
            super(r), this.prefix = e;
        }
        setValue(e, { property: r , itemIndex: s  }) {
            this.value = e, this.scopePath = (0, J3._)`.${new J3.Name(r)}[${s}]`;
        }
    };
    L2.ValueScopeName = gt;
    var da1 = (0, J3._)`\n`, sr = class extends $t {
        constructor(e){
            super(e), this._values = {}, this._scope = e.scope, this.opts = {
                ...e,
                _n: e.lines ? da1 : J3.nil
            };
        }
        get() {
            return this._scope;
        }
        name(e) {
            return new gt(e, this._newName(e));
        }
        value(e, r) {
            var s;
            if (r.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
            let n32 = this.toName(e), { prefix: o  } = n32, a33 = (s = r.key) !== null && s !== void 0 ? s : r.ref, i = this._values[o];
            if (i) {
                let l5 = i.get(a33);
                if (l5) return l5;
            } else i = this._values[o] = new Map;
            i.set(a33, n32);
            let c8 = this._scope[o] || (this._scope[o] = []), u11 = c8.length;
            return c8[u11] = r.ref, n32.setValue(r, {
                property: o,
                itemIndex: u11
            }), n32;
        }
        getValue(e, r) {
            let s = this._values[e];
            if (s) return s.get(r);
        }
        scopeRefs(e, r = this._values) {
            return this._reduceValues(r, (s)=>{
                if (s.scopePath === void 0) throw new Error(`CodeGen: name "${s}" has no value`);
                return (0, J3._)`${e}${s.scopePath}`;
            });
        }
        scopeCode(e = this._values, r, s) {
            return this._reduceValues(e, (n33)=>{
                if (n33.value === void 0) throw new Error(`CodeGen: name "${n33}" has no value`);
                return n33.value.code;
            }, r, s);
        }
        _reduceValues(e, r, s = {}, n34) {
            let o = J3.nil;
            for(let a34 in e){
                let i = e[a34];
                if (!i) continue;
                let c9 = s[a34] = s[a34] || new Map;
                i.forEach((u12)=>{
                    if (c9.has(u12)) return;
                    c9.set(u12, rr.Started);
                    let l6 = r(u12);
                    if (l6) {
                        let d11 = this.opts.es5 ? L2.varKinds.var : L2.varKinds.const;
                        o = (0, J3._)`${o}${d11} ${u12} = ${l6};${this.opts._n}`;
                    } else if (l6 = n34?.(u12)) o = (0, J3._)`${o}${l6}${this.opts._n}`;
                    else throw new tr1(u12);
                    c9.set(u12, rr.Completed);
                });
            }
            return o;
        }
    };
    L2.ValueScope = sr;
});
var S1 = $1((E7)=>{
    "use strict";
    Object.defineProperty(E7, "__esModule", {
        value: !0
    });
    E7.or = E7.and = E7.not = E7.CodeGen = E7.operators = E7.varKinds = E7.ValueScopeName = E7.ValueScope = E7.Scope = E7.Name = E7.regexpCode = E7.stringify = E7.getProperty = E7.nil = E7.strConcat = E7.str = E7._ = void 0;
    var k = xe(), Z = nr(), pe = xe();
    Object.defineProperty(E7, "_", {
        enumerable: !0,
        get: function() {
            return pe._;
        }
    });
    Object.defineProperty(E7, "str", {
        enumerable: !0,
        get: function() {
            return pe.str;
        }
    });
    Object.defineProperty(E7, "strConcat", {
        enumerable: !0,
        get: function() {
            return pe.strConcat;
        }
    });
    Object.defineProperty(E7, "nil", {
        enumerable: !0,
        get: function() {
            return pe.nil;
        }
    });
    Object.defineProperty(E7, "getProperty", {
        enumerable: !0,
        get: function() {
            return pe.getProperty;
        }
    });
    Object.defineProperty(E7, "stringify", {
        enumerable: !0,
        get: function() {
            return pe.stringify;
        }
    });
    Object.defineProperty(E7, "regexpCode", {
        enumerable: !0,
        get: function() {
            return pe.regexpCode;
        }
    });
    Object.defineProperty(E7, "Name", {
        enumerable: !0,
        get: function() {
            return pe.Name;
        }
    });
    var Et = nr();
    Object.defineProperty(E7, "Scope", {
        enumerable: !0,
        get: function() {
            return Et.Scope;
        }
    });
    Object.defineProperty(E7, "ValueScope", {
        enumerable: !0,
        get: function() {
            return Et.ValueScope;
        }
    });
    Object.defineProperty(E7, "ValueScopeName", {
        enumerable: !0,
        get: function() {
            return Et.ValueScopeName;
        }
    });
    Object.defineProperty(E7, "varKinds", {
        enumerable: !0,
        get: function() {
            return Et.varKinds;
        }
    });
    E7.operators = {
        GT: new k._Code(">"),
        GTE: new k._Code(">="),
        LT: new k._Code("<"),
        LTE: new k._Code("<="),
        EQ: new k._Code("==="),
        NEQ: new k._Code("!=="),
        NOT: new k._Code("!"),
        OR: new k._Code("||"),
        AND: new k._Code("&&"),
        ADD: new k._Code("+")
    };
    var ce = class {
        optimizeNodes() {
            return this;
        }
        optimizeNames(e, r) {
            return this;
        }
    }, or = class extends ce {
        constructor(e, r, s){
            super(), this.varKind = e, this.name = r, this.rhs = s;
        }
        render({ es5: e , _n: r  }) {
            let s = e ? Z.varKinds.var : this.varKind, n35 = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
            return `${s} ${this.name}${n35};` + r;
        }
        optimizeNames(e, r) {
            if (e[this.name.str]) return this.rhs && (this.rhs = Te(this.rhs, e, r)), this;
        }
        get names() {
            return this.rhs instanceof k._CodeOrName ? this.rhs.names : {};
        }
    }, vt = class extends ce {
        constructor(e, r, s){
            super(), this.lhs = e, this.rhs = r, this.sideEffects = s;
        }
        render({ _n: e  }) {
            return `${this.lhs} = ${this.rhs};` + e;
        }
        optimizeNames(e, r) {
            if (!(this.lhs instanceof k.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = Te(this.rhs, e, r), this;
        }
        get names() {
            let e = this.lhs instanceof k.Name ? {} : {
                ...this.lhs.names
            };
            return bt(e, this.rhs);
        }
    }, ar1 = class extends vt {
        constructor(e, r, s, n36){
            super(e, s, n36), this.op = r;
        }
        render({ _n: e  }) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + e;
        }
    }, ir1 = class extends ce {
        constructor(e){
            super(), this.label = e, this.names = {};
        }
        render({ _n: e  }) {
            return `${this.label}:` + e;
        }
    }, cr = class extends ce {
        constructor(e){
            super(), this.label = e, this.names = {};
        }
        render({ _n: e  }) {
            return `break${this.label ? ` ${this.label}` : ""};` + e;
        }
    }, ur = class extends ce {
        constructor(e){
            super(), this.error = e;
        }
        render({ _n: e  }) {
            return `throw ${this.error};` + e;
        }
        get names() {
            return this.error.names;
        }
    }, lr = class extends ce {
        constructor(e){
            super(), this.code = e;
        }
        render({ _n: e  }) {
            return `${this.code};` + e;
        }
        optimizeNodes() {
            return `${this.code}` ? this : void 0;
        }
        optimizeNames(e, r) {
            return this.code = Te(this.code, e, r), this;
        }
        get names() {
            return this.code instanceof k._CodeOrName ? this.code.names : {};
        }
    }, Je = class extends ce {
        constructor(e = []){
            super(), this.nodes = e;
        }
        render(e) {
            return this.nodes.reduce((r, s)=>r + s.render(e)
            , "");
        }
        optimizeNodes() {
            let { nodes: e  } = this, r = e.length;
            for(; r--;){
                let s = e[r].optimizeNodes();
                Array.isArray(s) ? e.splice(r, 1, ...s) : s ? e[r] = s : e.splice(r, 1);
            }
            return e.length > 0 ? this : void 0;
        }
        optimizeNames(e, r) {
            let { nodes: s  } = this, n37 = s.length;
            for(; n37--;){
                let o = s[n37];
                o.optimizeNames(e, r) || (fa1(e, o.names), s.splice(n37, 1));
            }
            return s.length > 0 ? this : void 0;
        }
        get names() {
            return this.nodes.reduce((e, r)=>be(e, r.names)
            , {});
        }
    }, ue = class extends Je {
        render(e) {
            return "{" + e._n + super.render(e) + "}" + e._n;
        }
    }, dr = class extends Je {
    }, Oe1 = class extends ue {
    };
    Oe1.kind = "else";
    var ee = class extends ue {
        constructor(e, r){
            super(r), this.condition = e;
        }
        render(e) {
            let r = `if(${this.condition})` + super.render(e);
            return this.else && (r += "else " + this.else.render(e)), r;
        }
        optimizeNodes() {
            super.optimizeNodes();
            let e = this.condition;
            if (e === !0) return this.nodes;
            let r = this.else;
            if (r) {
                let s = r.optimizeNodes();
                r = this.else = Array.isArray(s) ? new Oe1(s) : s;
            }
            if (r) return e === !1 ? r instanceof ee ? r : r.nodes : this.nodes.length ? this : new ee(As(e), r instanceof ee ? [
                r
            ] : r.nodes);
            if (!(e === !1 || !this.nodes.length)) return this;
        }
        optimizeNames(e, r) {
            var s;
            if (this.else = (s = this.else) === null || s === void 0 ? void 0 : s.optimizeNames(e, r), !!(super.optimizeNames(e, r) || this.else)) return this.condition = Te(this.condition, e, r), this;
        }
        get names() {
            let e = super.names;
            return bt(e, this.condition), this.else && be(e, this.else.names), e;
        }
    };
    ee.kind = "if";
    var we = class extends ue {
    };
    we.kind = "for";
    var fr = class extends we {
        constructor(e){
            super(), this.iteration = e;
        }
        render(e) {
            return `for(${this.iteration})` + super.render(e);
        }
        optimizeNames(e, r) {
            if (super.optimizeNames(e, r)) return this.iteration = Te(this.iteration, e, r), this;
        }
        get names() {
            return be(super.names, this.iteration.names);
        }
    }, hr = class extends we {
        constructor(e, r, s, n38){
            super(), this.varKind = e, this.name = r, this.from = s, this.to = n38;
        }
        render(e) {
            let r = e.es5 ? Z.varKinds.var : this.varKind, { name: s , from: n39 , to: o  } = this;
            return `for(${r} ${s}=${n39}; ${s}<${o}; ${s}++)` + super.render(e);
        }
        get names() {
            let e = bt(super.names, this.from);
            return bt(e, this.to);
        }
    }, wt = class extends we {
        constructor(e, r, s, n40){
            super(), this.loop = e, this.varKind = r, this.name = s, this.iterable = n40;
        }
        render(e) {
            return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
        }
        optimizeNames(e, r) {
            if (super.optimizeNames(e, r)) return this.iterable = Te(this.iterable, e, r), this;
        }
        get names() {
            return be(super.names, this.iterable.names);
        }
    }, He = class extends ue {
        constructor(e, r, s){
            super(), this.name = e, this.args = r, this.async = s;
        }
        render(e) {
            return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
        }
    };
    He.kind = "func";
    var We = class extends Je {
        render(e) {
            return "return " + super.render(e);
        }
    };
    We.kind = "return";
    var pr = class extends ue {
        render(e) {
            let r = "try" + super.render(e);
            return this.catch && (r += this.catch.render(e)), this.finally && (r += this.finally.render(e)), r;
        }
        optimizeNodes() {
            var e, r;
            return super.optimizeNodes(), (e = this.catch) === null || e === void 0 || e.optimizeNodes(), (r = this.finally) === null || r === void 0 || r.optimizeNodes(), this;
        }
        optimizeNames(e, r) {
            var s, n41;
            return super.optimizeNames(e, r), (s = this.catch) === null || s === void 0 || s.optimizeNames(e, r), (n41 = this.finally) === null || n41 === void 0 || n41.optimizeNames(e, r), this;
        }
        get names() {
            let e = super.names;
            return this.catch && be(e, this.catch.names), this.finally && be(e, this.finally.names), e;
        }
    }, Be = class extends ue {
        constructor(e){
            super(), this.error = e;
        }
        render(e) {
            return `catch(${this.error})` + super.render(e);
        }
    };
    Be.kind = "catch";
    var Qe = class extends ue {
        render(e) {
            return "finally" + super.render(e);
        }
    };
    Qe.kind = "finally";
    var mr = class {
        constructor(e, r = {}){
            this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
                ...r,
                _n: r.lines ? `
` : ""
            }, this._extScope = e, this._scope = new Z.Scope({
                parent: e
            }), this._nodes = [
                new dr
            ];
        }
        toString() {
            return this._root.render(this.opts);
        }
        name(e) {
            return this._scope.name(e);
        }
        scopeName(e) {
            return this._extScope.name(e);
        }
        scopeValue(e, r) {
            let s = this._extScope.value(e, r);
            return (this._values[s.prefix] || (this._values[s.prefix] = new Set)).add(s), s;
        }
        getScopeValue(e, r) {
            return this._extScope.getValue(e, r);
        }
        scopeRefs(e) {
            return this._extScope.scopeRefs(e, this._values);
        }
        scopeCode() {
            return this._extScope.scopeCode(this._values);
        }
        _def(e, r, s, n42) {
            let o = this._scope.toName(r);
            return s !== void 0 && n42 && (this._constants[o.str] = s), this._leafNode(new or(e, o, s)), o;
        }
        const(e, r, s) {
            return this._def(Z.varKinds.const, e, r, s);
        }
        let(e, r, s) {
            return this._def(Z.varKinds.let, e, r, s);
        }
        var(e, r, s) {
            return this._def(Z.varKinds.var, e, r, s);
        }
        assign(e, r, s) {
            return this._leafNode(new vt(e, r, s));
        }
        add(e, r) {
            return this._leafNode(new ar1(e, E7.operators.ADD, r));
        }
        code(e) {
            return typeof e == "function" ? e() : e !== k.nil && this._leafNode(new lr(e)), this;
        }
        object(...e) {
            let r = [
                "{"
            ];
            for (let [s, n43] of e)r.length > 1 && r.push(","), r.push(s), (s !== n43 || this.opts.es5) && (r.push(":"), (0, k.addCodeArg)(r, n43));
            return r.push("}"), new k._Code(r);
        }
        if(e, r, s) {
            if (this._blockNode(new ee(e)), r && s) this.code(r).else().code(s).endIf();
            else if (r) this.code(r).endIf();
            else if (s) throw new Error('CodeGen: "else" body without "then" body');
            return this;
        }
        elseIf(e) {
            return this._elseNode(new ee(e));
        }
        else() {
            return this._elseNode(new Oe1);
        }
        endIf() {
            return this._endBlockNode(ee, Oe1);
        }
        _for(e, r) {
            return this._blockNode(e), r && this.code(r).endFor(), this;
        }
        for(e, r) {
            return this._for(new fr(e), r);
        }
        forRange(e, r, s, n44, o = this.opts.es5 ? Z.varKinds.var : Z.varKinds.let) {
            let a35 = this._scope.toName(e);
            return this._for(new hr(o, a35, r, s), ()=>n44(a35)
            );
        }
        forOf(e, r, s, n45 = Z.varKinds.const) {
            let o = this._scope.toName(e);
            if (this.opts.es5) {
                let a36 = r instanceof k.Name ? r : this.var("_arr", r);
                return this.forRange("_i", 0, (0, k._)`${a36}.length`, (i)=>{
                    this.var(o, (0, k._)`${a36}[${i}]`), s(o);
                });
            }
            return this._for(new wt("of", n45, o, r), ()=>s(o)
            );
        }
        forIn(e, r, s, n46 = this.opts.es5 ? Z.varKinds.var : Z.varKinds.const) {
            if (this.opts.ownProperties) return this.forOf(e, (0, k._)`Object.keys(${r})`, s);
            let o = this._scope.toName(e);
            return this._for(new wt("in", n46, o, r), ()=>s(o)
            );
        }
        endFor() {
            return this._endBlockNode(we);
        }
        label(e) {
            return this._leafNode(new ir1(e));
        }
        break(e) {
            return this._leafNode(new cr(e));
        }
        return(e) {
            let r = new We;
            if (this._blockNode(r), this.code(e), r.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
            return this._endBlockNode(We);
        }
        try(e, r, s) {
            if (!r && !s) throw new Error('CodeGen: "try" without "catch" and "finally"');
            let n47 = new pr;
            if (this._blockNode(n47), this.code(e), r) {
                let o = this.name("e");
                this._currNode = n47.catch = new Be(o), r(o);
            }
            return s && (this._currNode = n47.finally = new Qe, this.code(s)), this._endBlockNode(Be, Qe);
        }
        throw(e) {
            return this._leafNode(new ur(e));
        }
        block(e, r) {
            return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(r), this;
        }
        endBlock(e) {
            let r = this._blockStarts.pop();
            if (r === void 0) throw new Error("CodeGen: not in self-balancing block");
            let s = this._nodes.length - r;
            if (s < 0 || e !== void 0 && s !== e) throw new Error(`CodeGen: wrong number of nodes: ${s} vs ${e} expected`);
            return this._nodes.length = r, this;
        }
        func(e, r = k.nil, s, n48) {
            return this._blockNode(new He(e, r, s)), n48 && this.code(n48).endFunc(), this;
        }
        endFunc() {
            return this._endBlockNode(He);
        }
        optimize(e = 1) {
            for(; e-- > 0;)this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
        }
        _leafNode(e) {
            return this._currNode.nodes.push(e), this;
        }
        _blockNode(e) {
            this._currNode.nodes.push(e), this._nodes.push(e);
        }
        _endBlockNode(e, r) {
            let s = this._currNode;
            if (s instanceof e || r && s instanceof r) return this._nodes.pop(), this;
            throw new Error(`CodeGen: not in block "${r ? `${e.kind}/${r.kind}` : e.kind}"`);
        }
        _elseNode(e) {
            let r = this._currNode;
            if (!(r instanceof ee)) throw new Error('CodeGen: "else" without "if"');
            return this._currNode = r.else = e, this;
        }
        get _root() {
            return this._nodes[0];
        }
        get _currNode() {
            let e = this._nodes;
            return e[e.length - 1];
        }
        set _currNode(e) {
            let r = this._nodes;
            r[r.length - 1] = e;
        }
    };
    E7.CodeGen = mr;
    function be(t, e) {
        for(let r in e)t[r] = (t[r] || 0) + (e[r] || 0);
        return t;
    }
    function bt(t, e) {
        return e instanceof k._CodeOrName ? be(t, e.names) : t;
    }
    function Te(t, e, r) {
        if (t instanceof k.Name) return s(t);
        if (!n49(t)) return t;
        return new k._Code(t._items.reduce((o, a37)=>(a37 instanceof k.Name && (a37 = s(a37)), a37 instanceof k._Code ? o.push(...a37._items) : o.push(a37), o)
        , []));
        function s(o) {
            let a38 = r[o.str];
            return a38 === void 0 || e[o.str] !== 1 ? o : (delete e[o.str], a38);
        }
        function n49(o) {
            return o instanceof k._Code && o._items.some((a39)=>a39 instanceof k.Name && e[a39.str] === 1 && r[a39.str] !== void 0
            );
        }
    }
    function fa1(t, e) {
        for(let r in e)t[r] = (t[r] || 0) - (e[r] || 0);
    }
    function As(t) {
        return typeof t == "boolean" || typeof t == "number" || t === null ? !t : (0, k._)`!${yr(t)}`;
    }
    E7.not = As;
    var ha1 = Ds(E7.operators.AND);
    function pa(...t) {
        return t.reduce(ha1);
    }
    E7.and = pa;
    var ma = Ds(E7.operators.OR);
    function ya(...t) {
        return t.reduce(ma);
    }
    E7.or = ya;
    function Ds(t) {
        return (e, r)=>e === k.nil ? r : r === k.nil ? e : (0, k._)`${yr(e)} ${t} ${yr(r)}`
        ;
    }
    function yr(t) {
        return t instanceof k.Name ? t : (0, k._)`(${t})`;
    }
});
var T = $1((P)=>{
    "use strict";
    Object.defineProperty(P, "__esModule", {
        value: !0
    });
    P.checkStrictMode = P.getErrorPath = P.Type = P.useFunc = P.setEvaluated = P.evaluatedPropsToName = P.mergeEvaluated = P.eachItem = P.unescapeJsonPointer = P.escapeJsonPointer = P.escapeFragment = P.unescapeFragment = P.schemaRefOrVal = P.schemaHasRulesButRef = P.schemaHasRules = P.checkUnknownRules = P.alwaysValidSchema = P.toHash = void 0;
    var C4 = S1(), _a = xe();
    function $a(t) {
        let e = {};
        for (let r of t)e[r] = !0;
        return e;
    }
    P.toHash = $a;
    function ga(t, e) {
        return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? !0 : (Us(t, e), !Fs(e, t.self.RULES.all));
    }
    P.alwaysValidSchema = ga;
    function Us(t, e = t.schema) {
        let { opts: r , self: s  } = t;
        if (!r.strictSchema || typeof e == "boolean") return;
        let n50 = s.RULES.keywords;
        for(let o in e)n50[o] || xs(t, `unknown keyword: "${o}"`);
    }
    P.checkUnknownRules = Us;
    function Fs(t, e) {
        if (typeof t == "boolean") return !t;
        for(let r in t)if (e[r]) return !0;
        return !1;
    }
    P.schemaHasRules = Fs;
    function va1(t, e) {
        if (typeof t == "boolean") return !t;
        for(let r in t)if (r !== "$ref" && e.all[r]) return !0;
        return !1;
    }
    P.schemaHasRulesButRef = va1;
    function wa({ topSchemaRef: t , schemaPath: e  }, r, s, n51) {
        if (!n51) {
            if (typeof r == "number" || typeof r == "boolean") return r;
            if (typeof r == "string") return (0, C4._)`${r}`;
        }
        return (0, C4._)`${t}${e}${(0, C4.getProperty)(s)}`;
    }
    P.schemaRefOrVal = wa;
    function ba(t) {
        return zs(decodeURIComponent(t));
    }
    P.unescapeFragment = ba;
    function Ea1(t) {
        return encodeURIComponent(_r(t));
    }
    P.escapeFragment = Ea1;
    function _r(t) {
        return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    P.escapeJsonPointer = _r;
    function zs(t) {
        return t.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    P.unescapeJsonPointer = zs;
    function Pa(t, e) {
        if (Array.isArray(t)) for (let r of t)e(r);
        else e(t);
    }
    P.eachItem = Pa;
    function Vs({ mergeNames: t , mergeToName: e , mergeValues: r , resultToName: s  }) {
        return (n52, o, a40, i)=>{
            let c10 = a40 === void 0 ? o : a40 instanceof C4.Name ? (o instanceof C4.Name ? t(n52, o, a40) : e(n52, o, a40), a40) : o instanceof C4.Name ? (e(n52, a40, o), o) : r(o, a40);
            return i === C4.Name && !(c10 instanceof C4.Name) ? s(n52, c10) : c10;
        };
    }
    P.mergeEvaluated = {
        props: Vs({
            mergeNames: (t, e, r)=>t.if((0, C4._)`${r} !== true && ${e} !== undefined`, ()=>{
                    t.if((0, C4._)`${e} === true`, ()=>t.assign(r, !0)
                    , ()=>t.assign(r, (0, C4._)`${r} || {}`).code((0, C4._)`Object.assign(${r}, ${e})`)
                    );
                })
            ,
            mergeToName: (t, e, r)=>t.if((0, C4._)`${r} !== true`, ()=>{
                    e === !0 ? t.assign(r, !0) : (t.assign(r, (0, C4._)`${r} || {}`), $r(t, r, e));
                })
            ,
            mergeValues: (t, e)=>t === !0 ? !0 : {
                    ...t,
                    ...e
                }
            ,
            resultToName: Ls
        }),
        items: Vs({
            mergeNames: (t, e, r)=>t.if((0, C4._)`${r} !== true && ${e} !== undefined`, ()=>t.assign(r, (0, C4._)`${e} === true ? true : ${r} > ${e} ? ${r} : ${e}`)
                )
            ,
            mergeToName: (t, e, r)=>t.if((0, C4._)`${r} !== true`, ()=>t.assign(r, e === !0 ? !0 : (0, C4._)`${r} > ${e} ? ${r} : ${e}`)
                )
            ,
            mergeValues: (t, e)=>t === !0 ? !0 : Math.max(t, e)
            ,
            resultToName: (t, e)=>t.var("items", e)
        })
    };
    function Ls(t, e) {
        if (e === !0) return t.var("props", !0);
        let r = t.var("props", (0, C4._)`{}`);
        return e !== void 0 && $r(t, r, e), r;
    }
    P.evaluatedPropsToName = Ls;
    function $r(t, e, r) {
        Object.keys(r).forEach((s)=>t.assign((0, C4._)`${e}${(0, C4.getProperty)(s)}`, !0)
        );
    }
    P.setEvaluated = $r;
    var Ks = {};
    function Sa(t, e) {
        return t.scopeValue("func", {
            ref: e,
            code: Ks[e.code] || (Ks[e.code] = new _a._Code(e.code))
        });
    }
    P.useFunc = Sa;
    var Gs;
    (function(t) {
        t[t.Num = 0] = "Num", t[t.Str = 1] = "Str";
    })(Gs = P.Type || (P.Type = {}));
    function Na(t, e, r) {
        if (t instanceof C4.Name) {
            let s = e === Gs.Num;
            return r ? s ? (0, C4._)`"[" + ${t} + "]"` : (0, C4._)`"['" + ${t} + "']"` : s ? (0, C4._)`"/" + ${t}` : (0, C4._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        return r ? (0, C4.getProperty)(t).toString() : "/" + _r(t);
    }
    P.getErrorPath = Na;
    function xs(t, e, r = t.opts.strictSchema) {
        if (r) {
            if (e = `strict mode: ${e}`, r === !0) throw new Error(e);
            t.self.logger.warn(e);
        }
    }
    P.checkStrictMode = xs;
});
var le = $1((gr)=>{
    "use strict";
    Object.defineProperty(gr, "__esModule", {
        value: !0
    });
    var F2 = S1(), ka = {
        data: new F2.Name("data"),
        valCxt: new F2.Name("valCxt"),
        instancePath: new F2.Name("instancePath"),
        parentData: new F2.Name("parentData"),
        parentDataProperty: new F2.Name("parentDataProperty"),
        rootData: new F2.Name("rootData"),
        dynamicAnchors: new F2.Name("dynamicAnchors"),
        vErrors: new F2.Name("vErrors"),
        errors: new F2.Name("errors"),
        this: new F2.Name("this"),
        self: new F2.Name("self"),
        scope: new F2.Name("scope"),
        json: new F2.Name("json"),
        jsonPos: new F2.Name("jsonPos"),
        jsonLen: new F2.Name("jsonLen"),
        jsonPart: new F2.Name("jsonPart")
    };
    gr.default = ka;
});
var Xe = $1((z2)=>{
    "use strict";
    Object.defineProperty(z2, "__esModule", {
        value: !0
    });
    z2.extendErrors = z2.resetErrorsCount = z2.reportExtraError = z2.reportError = z2.keyword$DataError = z2.keywordError = void 0;
    var q5 = S1(), Pt = T(), G3 = le();
    z2.keywordError = {
        message: ({ keyword: t  })=>(0, q5.str)`must pass "${t}" keyword validation`
    };
    z2.keyword$DataError = {
        message: ({ keyword: t , schemaType: e  })=>e ? (0, q5.str)`"${t}" keyword must be ${e} ($data)` : (0, q5.str)`"${t}" keyword is invalid ($data)`
    };
    function ja(t, e = z2.keywordError, r, s) {
        let { it: n53  } = t, { gen: o , compositeRule: a41 , allErrors: i  } = n53, c11 = Ws(t, e, r);
        s ?? (a41 || i) ? Js(o, c11) : Hs(n53, (0, q5._)`[${c11}]`);
    }
    z2.reportError = ja;
    function qa(t, e = z2.keywordError, r) {
        let { it: s  } = t, { gen: n54 , compositeRule: o , allErrors: a42  } = s, i = Ws(t, e, r);
        Js(n54, i), o || a42 || Hs(s, G3.default.vErrors);
    }
    z2.reportExtraError = qa;
    function Oa(t, e) {
        t.assign(G3.default.errors, e), t.if((0, q5._)`${G3.default.vErrors} !== null`, ()=>t.if(e, ()=>t.assign((0, q5._)`${G3.default.vErrors}.length`, e)
            , ()=>t.assign(G3.default.vErrors, null)
            )
        );
    }
    z2.resetErrorsCount = Oa;
    function Ta({ gen: t , keyword: e , schemaValue: r , data: s , errsCount: n55 , it: o  }) {
        if (n55 === void 0) throw new Error("ajv implementation error");
        let a43 = t.name("err");
        t.forRange("i", n55, G3.default.errors, (i)=>{
            t.const(a43, (0, q5._)`${G3.default.vErrors}[${i}]`), t.if((0, q5._)`${a43}.instancePath === undefined`, ()=>t.assign((0, q5._)`${a43}.instancePath`, (0, q5.strConcat)(G3.default.instancePath, o.errorPath))
            ), t.assign((0, q5._)`${a43}.schemaPath`, (0, q5.str)`${o.errSchemaPath}/${e}`), o.opts.verbose && (t.assign((0, q5._)`${a43}.schema`, r), t.assign((0, q5._)`${a43}.data`, s));
        });
    }
    z2.extendErrors = Ta;
    function Js(t, e) {
        let r = t.const("err", e);
        t.if((0, q5._)`${G3.default.vErrors} === null`, ()=>t.assign(G3.default.vErrors, (0, q5._)`[${r}]`)
        , (0, q5._)`${G3.default.vErrors}.push(${r})`), t.code((0, q5._)`${G3.default.errors}++`);
    }
    function Hs(t, e) {
        let { gen: r , validateName: s , schemaEnv: n56  } = t;
        n56.$async ? r.throw((0, q5._)`new ${t.ValidationError}(${e})`) : (r.assign((0, q5._)`${s}.errors`, e), r.return(!1));
    }
    var Ee = {
        keyword: new q5.Name("keyword"),
        schemaPath: new q5.Name("schemaPath"),
        params: new q5.Name("params"),
        propertyName: new q5.Name("propertyName"),
        message: new q5.Name("message"),
        schema: new q5.Name("schema"),
        parentSchema: new q5.Name("parentSchema")
    };
    function Ws(t, e, r) {
        let { createErrors: s  } = t.it;
        return s === !1 ? (0, q5._)`{}` : Ra(t, e, r);
    }
    function Ra(t, e, r = {}) {
        let { gen: s , it: n57  } = t, o = [
            Ca(n57, r),
            Ia(t, r)
        ];
        return Ma(t, e, o), s.object(...o);
    }
    function Ca({ errorPath: t  }, { instancePath: e  }) {
        let r = e ? (0, q5.str)`${t}${(0, Pt.getErrorPath)(e, Pt.Type.Str)}` : t;
        return [
            G3.default.instancePath,
            (0, q5.strConcat)(G3.default.instancePath, r)
        ];
    }
    function Ia({ keyword: t , it: { errSchemaPath: e  }  }, { schemaPath: r , parentSchema: s  }) {
        let n58 = s ? e : (0, q5.str)`${e}/${t}`;
        return r && (n58 = (0, q5.str)`${n58}${(0, Pt.getErrorPath)(r, Pt.Type.Str)}`), [
            Ee.schemaPath,
            n58
        ];
    }
    function Ma(t, { params: e , message: r  }, s) {
        let { keyword: n59 , data: o , schemaValue: a44 , it: i  } = t, { opts: c12 , propertyName: u13 , topSchemaRef: l7 , schemaPath: d12  } = i;
        s.push([
            Ee.keyword,
            n59
        ], [
            Ee.params,
            typeof e == "function" ? e(t) : e || (0, q5._)`{}`
        ]), c12.messages && s.push([
            Ee.message,
            typeof r == "function" ? r(t) : r
        ]), c12.verbose && s.push([
            Ee.schema,
            a44
        ], [
            Ee.parentSchema,
            (0, q5._)`${l7}${d12}`
        ], [
            G3.default.data,
            o
        ]), u13 && s.push([
            Ee.propertyName,
            u13
        ]);
    }
});
var Qs = $1((Re)=>{
    "use strict";
    Object.defineProperty(Re, "__esModule", {
        value: !0
    });
    Re.boolOrEmptySchema = Re.topBoolOrEmptySchema = void 0;
    var Aa = Xe(), Da = S1(), Va = le(), Ka = {
        message: "boolean schema is false"
    };
    function Ua(t) {
        let { gen: e , schema: r , validateName: s  } = t;
        r === !1 ? Bs(t, !1) : typeof r == "object" && r.$async === !0 ? e.return(Va.default.data) : (e.assign((0, Da._)`${s}.errors`, null), e.return(!0));
    }
    Re.topBoolOrEmptySchema = Ua;
    function Fa(t, e) {
        let { gen: r , schema: s  } = t;
        s === !1 ? (r.var(e, !1), Bs(t)) : r.var(e, !0);
    }
    Re.boolOrEmptySchema = Fa;
    function Bs(t, e) {
        let { gen: r , data: s  } = t, n60 = {
            gen: r,
            keyword: "false schema",
            data: s,
            schema: !1,
            schemaCode: !1,
            schemaValue: !1,
            params: {},
            it: t
        };
        (0, Aa.reportError)(n60, Ka, void 0, e);
    }
});
var vr = $1((Ce)=>{
    "use strict";
    Object.defineProperty(Ce, "__esModule", {
        value: !0
    });
    Ce.getRules = Ce.isJSONType = void 0;
    var za = [
        "string",
        "number",
        "integer",
        "boolean",
        "null",
        "object",
        "array"
    ], La = new Set(za);
    function Ga(t) {
        return typeof t == "string" && La.has(t);
    }
    Ce.isJSONType = Ga;
    function xa() {
        let t = {
            number: {
                type: "number",
                rules: []
            },
            string: {
                type: "string",
                rules: []
            },
            array: {
                type: "array",
                rules: []
            },
            object: {
                type: "object",
                rules: []
            }
        };
        return {
            types: {
                ...t,
                integer: !0,
                boolean: !0,
                null: !0
            },
            rules: [
                {
                    rules: []
                },
                t.number,
                t.string,
                t.array,
                t.object
            ],
            post: {
                rules: []
            },
            all: {},
            keywords: {}
        };
    }
    Ce.getRules = xa;
});
var wr = $1((me)=>{
    "use strict";
    Object.defineProperty(me, "__esModule", {
        value: !0
    });
    me.shouldUseRule = me.shouldUseGroup = me.schemaHasRulesForType = void 0;
    function Ja({ schema: t , self: e  }, r) {
        let s = e.RULES.types[r];
        return s && s !== !0 && Xs(t, s);
    }
    me.schemaHasRulesForType = Ja;
    function Xs(t, e) {
        return e.rules.some((r)=>Ys(t, r)
        );
    }
    me.shouldUseGroup = Xs;
    function Ys(t, e) {
        var r;
        return t[e.keyword] !== void 0 || ((r = e.definition.implements) === null || r === void 0 ? void 0 : r.some((s)=>t[s] !== void 0
        ));
    }
    me.shouldUseRule = Ys;
});
var Ze = $1((V)=>{
    "use strict";
    Object.defineProperty(V, "__esModule", {
        value: !0
    });
    V.reportTypeError = V.checkDataTypes = V.checkDataType = V.coerceAndCheckDataType = V.getJSONTypes = V.getSchemaTypes = V.DataType = void 0;
    var Ha = vr(), Wa = wr(), Ba = Xe(), b = S1(), Zs = T(), Ye;
    (function(t) {
        t[t.Correct = 0] = "Correct", t[t.Wrong = 1] = "Wrong";
    })(Ye = V.DataType || (V.DataType = {}));
    function Qa(t) {
        let e = en(t.type);
        if (e.includes("null")) {
            if (t.nullable === !1) throw new Error("type: null contradicts nullable: false");
        } else {
            if (!e.length && t.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
            t.nullable === !0 && e.push("null");
        }
        return e;
    }
    V.getSchemaTypes = Qa;
    function en(t) {
        let e = Array.isArray(t) ? t : t ? [
            t
        ] : [];
        if (e.every(Ha.isJSONType)) return e;
        throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
    }
    V.getJSONTypes = en;
    function Xa(t, e) {
        let { gen: r , data: s , opts: n61  } = t, o = Ya(e, n61.coerceTypes), a45 = e.length > 0 && !(o.length === 0 && e.length === 1 && (0, Wa.schemaHasRulesForType)(t, e[0]));
        if (a45) {
            let i = Er(e, s, n61.strictNumbers, Ye.Wrong);
            r.if(i, ()=>{
                o.length ? Za(t, e, o) : Pr(t);
            });
        }
        return a45;
    }
    V.coerceAndCheckDataType = Xa;
    var tn = new Set([
        "string",
        "number",
        "integer",
        "boolean",
        "null"
    ]);
    function Ya(t, e) {
        return e ? t.filter((r)=>tn.has(r) || e === "array" && r === "array"
        ) : [];
    }
    function Za(t, e, r) {
        let { gen: s , data: n62 , opts: o  } = t, a46 = s.let("dataType", (0, b._)`typeof ${n62}`), i = s.let("coerced", (0, b._)`undefined`);
        o.coerceTypes === "array" && s.if((0, b._)`${a46} == 'object' && Array.isArray(${n62}) && ${n62}.length == 1`, ()=>s.assign(n62, (0, b._)`${n62}[0]`).assign(a46, (0, b._)`typeof ${n62}`).if(Er(e, n62, o.strictNumbers), ()=>s.assign(i, n62)
            )
        ), s.if((0, b._)`${i} !== undefined`);
        for (let u1 of r)(tn.has(u1) || u1 === "array" && o.coerceTypes === "array") && c13(u1);
        s.else(), Pr(t), s.endIf(), s.if((0, b._)`${i} !== undefined`, ()=>{
            s.assign(n62, i), ei(t, i);
        });
        function c13(u14) {
            switch(u14){
                case "string":
                    s.elseIf((0, b._)`${a46} == "number" || ${a46} == "boolean"`).assign(i, (0, b._)`"" + ${n62}`).elseIf((0, b._)`${n62} === null`).assign(i, (0, b._)`""`);
                    return;
                case "number":
                    s.elseIf((0, b._)`${a46} == "boolean" || ${n62} === null
              || (${a46} == "string" && ${n62} && ${n62} == +${n62})`).assign(i, (0, b._)`+${n62}`);
                    return;
                case "integer":
                    s.elseIf((0, b._)`${a46} === "boolean" || ${n62} === null
              || (${a46} === "string" && ${n62} && ${n62} == +${n62} && !(${n62} % 1))`).assign(i, (0, b._)`+${n62}`);
                    return;
                case "boolean":
                    s.elseIf((0, b._)`${n62} === "false" || ${n62} === 0 || ${n62} === null`).assign(i, !1).elseIf((0, b._)`${n62} === "true" || ${n62} === 1`).assign(i, !0);
                    return;
                case "null":
                    s.elseIf((0, b._)`${n62} === "" || ${n62} === 0 || ${n62} === false`), s.assign(i, null);
                    return;
                case "array":
                    s.elseIf((0, b._)`${a46} === "string" || ${a46} === "number"
              || ${a46} === "boolean" || ${n62} === null`).assign(i, (0, b._)`[${n62}]`);
            }
        }
    }
    function ei({ gen: t , parentData: e , parentDataProperty: r  }, s) {
        t.if((0, b._)`${e} !== undefined`, ()=>t.assign((0, b._)`${e}[${r}]`, s)
        );
    }
    function br(t, e, r, s = Ye.Correct) {
        let n63 = s === Ye.Correct ? b.operators.EQ : b.operators.NEQ, o;
        switch(t){
            case "null":
                return (0, b._)`${e} ${n63} null`;
            case "array":
                o = (0, b._)`Array.isArray(${e})`;
                break;
            case "object":
                o = (0, b._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
                break;
            case "integer":
                o = a47((0, b._)`!(${e} % 1) && !isNaN(${e})`);
                break;
            case "number":
                o = a47();
                break;
            default:
                return (0, b._)`typeof ${e} ${n63} ${t}`;
        }
        return s === Ye.Correct ? o : (0, b.not)(o);
        function a47(i = b.nil) {
            return (0, b.and)((0, b._)`typeof ${e} == "number"`, i, r ? (0, b._)`isFinite(${e})` : b.nil);
        }
    }
    V.checkDataType = br;
    function Er(t, e, r, s) {
        if (t.length === 1) return br(t[0], e, r, s);
        let n64, o = (0, Zs.toHash)(t);
        if (o.array && o.object) {
            let a48 = (0, b._)`typeof ${e} != "object"`;
            n64 = o.null ? a48 : (0, b._)`!${e} || ${a48}`, delete o.null, delete o.array, delete o.object;
        } else n64 = b.nil;
        o.number && delete o.integer;
        for(let a49 in o)n64 = (0, b.and)(n64, br(a49, e, r, s));
        return n64;
    }
    V.checkDataTypes = Er;
    var ti = {
        message: ({ schema: t  })=>`must be ${t}`
        ,
        params: ({ schema: t , schemaValue: e  })=>typeof t == "string" ? (0, b._)`{type: ${t}}` : (0, b._)`{type: ${e}}`
    };
    function Pr(t) {
        let e = ri(t);
        (0, Ba.reportError)(e, ti);
    }
    V.reportTypeError = Pr;
    function ri(t) {
        let { gen: e , data: r , schema: s  } = t, n65 = (0, Zs.schemaRefOrVal)(t, s, "type");
        return {
            gen: e,
            keyword: "type",
            data: r,
            schema: s.type,
            schemaCode: n65,
            schemaValue: n65,
            parentSchema: s,
            params: {},
            it: t
        };
    }
});
var sn = $1((St)=>{
    "use strict";
    Object.defineProperty(St, "__esModule", {
        value: !0
    });
    St.assignDefaults = void 0;
    var Ie = S1(), si = T();
    function ni(t, e) {
        let { properties: r , items: s  } = t.schema;
        if (e === "object" && r) for(let n1 in r)rn(t, n1, r[n1].default);
        else e === "array" && Array.isArray(s) && s.forEach((n66, o)=>rn(t, o, n66.default)
        );
    }
    St.assignDefaults = ni;
    function rn(t, e, r) {
        let { gen: s , compositeRule: n67 , data: o , opts: a50  } = t;
        if (r === void 0) return;
        let i = (0, Ie._)`${o}${(0, Ie.getProperty)(e)}`;
        if (n67) {
            (0, si.checkStrictMode)(t, `default is ignored for: ${i}`);
            return;
        }
        let c14 = (0, Ie._)`${i} === undefined`;
        a50.useDefaults === "empty" && (c14 = (0, Ie._)`${c14} || ${i} === null || ${i} === ""`), s.if(c14, (0, Ie._)`${i} = ${(0, Ie.stringify)(r)}`);
    }
});
var Q1 = $1((R)=>{
    "use strict";
    Object.defineProperty(R, "__esModule", {
        value: !0
    });
    R.validateUnion = R.validateArray = R.usePattern = R.callValidateCode = R.schemaProperties = R.allSchemaProperties = R.noPropertyInData = R.propertyInData = R.isOwnProperty = R.hasPropFunc = R.reportMissingProp = R.checkMissingProp = R.checkReportMissingProp = void 0;
    var M4 = S1(), Sr = T(), ye1 = le(), oi = T();
    function ai(t, e) {
        let { gen: r , data: s , it: n68  } = t;
        r.if(kr1(r, s, e, n68.opts.ownProperties), ()=>{
            t.setParams({
                missingProperty: (0, M4._)`${e}`
            }, !0), t.error();
        });
    }
    R.checkReportMissingProp = ai;
    function ii({ gen: t , data: e , it: { opts: r  }  }, s, n69) {
        return (0, M4.or)(...s.map((o)=>(0, M4.and)(kr1(t, e, o, r.ownProperties), (0, M4._)`${n69} = ${o}`)
        ));
    }
    R.checkMissingProp = ii;
    function ci(t, e) {
        t.setParams({
            missingProperty: e
        }, !0), t.error();
    }
    R.reportMissingProp = ci;
    function nn(t) {
        return t.scopeValue("func", {
            ref: Object.prototype.hasOwnProperty,
            code: (0, M4._)`Object.prototype.hasOwnProperty`
        });
    }
    R.hasPropFunc = nn;
    function Nr(t, e, r) {
        return (0, M4._)`${nn(t)}.call(${e}, ${r})`;
    }
    R.isOwnProperty = Nr;
    function ui(t, e, r, s) {
        let n70 = (0, M4._)`${e}${(0, M4.getProperty)(r)} !== undefined`;
        return s ? (0, M4._)`${n70} && ${Nr(t, e, r)}` : n70;
    }
    R.propertyInData = ui;
    function kr1(t, e, r, s) {
        let n71 = (0, M4._)`${e}${(0, M4.getProperty)(r)} === undefined`;
        return s ? (0, M4.or)(n71, (0, M4.not)(Nr(t, e, r))) : n71;
    }
    R.noPropertyInData = kr1;
    function on(t) {
        return t ? Object.keys(t).filter((e)=>e !== "__proto__"
        ) : [];
    }
    R.allSchemaProperties = on;
    function li(t, e) {
        return on(e).filter((r)=>!(0, Sr.alwaysValidSchema)(t, e[r])
        );
    }
    R.schemaProperties = li;
    function di({ schemaCode: t , data: e , it: { gen: r , topSchemaRef: s , schemaPath: n72 , errorPath: o  } , it: a51  }, i, c15, u15) {
        let l8 = u15 ? (0, M4._)`${t}, ${e}, ${s}${n72}` : e, d13 = [
            [
                ye1.default.instancePath,
                (0, M4.strConcat)(ye1.default.instancePath, o)
            ],
            [
                ye1.default.parentData,
                a51.parentData
            ],
            [
                ye1.default.parentDataProperty,
                a51.parentDataProperty
            ],
            [
                ye1.default.rootData,
                ye1.default.rootData
            ]
        ];
        a51.opts.dynamicRef && d13.push([
            ye1.default.dynamicAnchors,
            ye1.default.dynamicAnchors
        ]);
        let _3 = (0, M4._)`${l8}, ${r.object(...d13)}`;
        return c15 !== M4.nil ? (0, M4._)`${i}.call(${c15}, ${_3})` : (0, M4._)`${i}(${_3})`;
    }
    R.callValidateCode = di;
    var fi = (0, M4._)`new RegExp`;
    function hi({ gen: t , it: { opts: e  }  }, r) {
        let s = e.unicodeRegExp ? "u" : "", { regExp: n73  } = e.code, o = n73(r, s);
        return t.scopeValue("pattern", {
            key: o.toString(),
            ref: o,
            code: (0, M4._)`${n73.code === "new RegExp" ? fi : (0, oi.useFunc)(t, n73)}(${r}, ${s})`
        });
    }
    R.usePattern = hi;
    function pi(t) {
        let { gen: e , data: r , keyword: s , it: n74  } = t, o = e.name("valid");
        if (n74.allErrors) {
            let i = e.let("valid", !0);
            return a52(()=>e.assign(i, !1)
            ), i;
        }
        return e.var(o, !0), a52(()=>e.break()
        ), o;
        function a52(i) {
            let c16 = e.const("len", (0, M4._)`${r}.length`);
            e.forRange("i", 0, c16, (u16)=>{
                t.subschema({
                    keyword: s,
                    dataProp: u16,
                    dataPropType: Sr.Type.Num
                }, o), e.if((0, M4.not)(o), i);
            });
        }
    }
    R.validateArray = pi;
    function mi(t) {
        let { gen: e , schema: r , keyword: s , it: n75  } = t;
        if (!Array.isArray(r)) throw new Error("ajv implementation error");
        if (r.some((c17)=>(0, Sr.alwaysValidSchema)(n75, c17)
        ) && !n75.opts.unevaluated) return;
        let a53 = e.let("valid", !1), i = e.name("_valid");
        e.block(()=>r.forEach((c, u17)=>{
                let l9 = t.subschema({
                    keyword: s,
                    schemaProp: u17,
                    compositeRule: !0
                }, i);
                e.assign(a53, (0, M4._)`${a53} || ${i}`), t.mergeValidEvaluated(l9, i) || e.if((0, M4.not)(a53));
            })
        ), t.result(a53, ()=>t.reset()
        , ()=>t.error(!0)
        );
    }
    R.validateUnion = mi;
});
var un = $1((oe)=>{
    "use strict";
    Object.defineProperty(oe, "__esModule", {
        value: !0
    });
    oe.validateKeywordUsage = oe.validSchemaType = oe.funcKeywordCode = oe.macroKeywordCode = void 0;
    var x3 = S1(), Pe = le(), yi = Q1(), _i = Xe();
    function $i(t, e) {
        let { gen: r , keyword: s , schema: n76 , parentSchema: o , it: a54  } = t, i = e.macro.call(a54.self, n76, o, a54), c18 = cn(r, s, i);
        a54.opts.validateSchema !== !1 && a54.self.validateSchema(i, !0);
        let u18 = r.name("valid");
        t.subschema({
            schema: i,
            schemaPath: x3.nil,
            errSchemaPath: `${a54.errSchemaPath}/${s}`,
            topSchemaRef: c18,
            compositeRule: !0
        }, u18), t.pass(u18, ()=>t.error(!0)
        );
    }
    oe.macroKeywordCode = $i;
    function gi(t, e) {
        var r;
        let { gen: s , keyword: n77 , schema: o , parentSchema: a55 , $data: i , it: c19  } = t;
        wi(c19, e);
        let u19 = !i && e.compile ? e.compile.call(c19.self, o, a55, c19) : e.validate, l10 = cn(s, n77, u19), d14 = s.let("valid");
        t.block$data(d14, _4), t.ok((r = e.valid) !== null && r !== void 0 ? r : d14);
        function _4() {
            if (e.errors === !1) f(), e.modifying && an(t), p8(()=>t.error()
            );
            else {
                let y6 = e.async ? m3() : h();
                e.modifying && an(t), p8(()=>vi(t, y6)
                );
            }
        }
        function m3() {
            let y7 = s.let("ruleErrs", null);
            return s.try(()=>f((0, x3._)`await `)
            , (j)=>s.assign(d14, !1).if((0, x3._)`${j} instanceof ${c19.ValidationError}`, ()=>s.assign(y7, (0, x3._)`${j}.errors`)
                , ()=>s.throw(j)
                )
            ), y7;
        }
        function h() {
            let y8 = (0, x3._)`${l10}.errors`;
            return s.assign(y8, null), f(x3.nil), y8;
        }
        function f(y9 = e.async ? (0, x3._)`await ` : x3.nil) {
            let j = c19.opts.passContext ? Pe.default.this : Pe.default.self, N2 = !("compile" in e && !i || e.schema === !1);
            s.assign(d14, (0, x3._)`${y9}${(0, yi.callValidateCode)(t, l10, j, N2)}`, e.modifying);
        }
        function p8(y10) {
            var j;
            s.if((0, x3.not)((j = e.valid) !== null && j !== void 0 ? j : d14), y10);
        }
    }
    oe.funcKeywordCode = gi;
    function an(t) {
        let { gen: e , data: r , it: s  } = t;
        e.if(s.parentData, ()=>e.assign(r, (0, x3._)`${s.parentData}[${s.parentDataProperty}]`)
        );
    }
    function vi(t, e) {
        let { gen: r  } = t;
        r.if((0, x3._)`Array.isArray(${e})`, ()=>{
            r.assign(Pe.default.vErrors, (0, x3._)`${Pe.default.vErrors} === null ? ${e} : ${Pe.default.vErrors}.concat(${e})`).assign(Pe.default.errors, (0, x3._)`${Pe.default.vErrors}.length`), (0, _i.extendErrors)(t);
        }, ()=>t.error()
        );
    }
    function wi({ schemaEnv: t  }, e) {
        if (e.async && !t.$async) throw new Error("async keyword in sync schema");
    }
    function cn(t, e, r) {
        if (r === void 0) throw new Error(`keyword "${e}" failed to compile`);
        return t.scopeValue("keyword", typeof r == "function" ? {
            ref: r
        } : {
            ref: r,
            code: (0, x3.stringify)(r)
        });
    }
    function bi(t, e, r = !1) {
        return !e.length || e.some((s)=>s === "array" ? Array.isArray(t) : s === "object" ? t && typeof t == "object" && !Array.isArray(t) : typeof t == s || r && typeof t > "u"
        );
    }
    oe.validSchemaType = bi;
    function Ei({ schema: t , opts: e , self: r , errSchemaPath: s  }, n78, o) {
        if (Array.isArray(n78.keyword) ? !n78.keyword.includes(o) : n78.keyword !== o) throw new Error("ajv implementation error");
        let a56 = n78.dependencies;
        if (a56?.some((i)=>!Object.prototype.hasOwnProperty.call(t, i)
        )) throw new Error(`parent schema must have dependencies of ${o}: ${a56.join(",")}`);
        if (n78.validateSchema && !n78.validateSchema(t[o])) {
            let c20 = `keyword "${o}" value is invalid at path "${s}": ` + r.errorsText(n78.validateSchema.errors);
            if (e.validateSchema === "log") r.logger.error(c20);
            else throw new Error(c20);
        }
    }
    oe.validateKeywordUsage = Ei;
});
var dn = $1((_e)=>{
    "use strict";
    Object.defineProperty(_e, "__esModule", {
        value: !0
    });
    _e.extendSubschemaMode = _e.extendSubschemaData = _e.getSubschema = void 0;
    var ae = S1(), ln = T();
    function Pi(t, { keyword: e , schemaProp: r , schema: s , schemaPath: n79 , errSchemaPath: o , topSchemaRef: a57  }) {
        if (e !== void 0 && s !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
        if (e !== void 0) {
            let i = t.schema[e];
            return r === void 0 ? {
                schema: i,
                schemaPath: (0, ae._)`${t.schemaPath}${(0, ae.getProperty)(e)}`,
                errSchemaPath: `${t.errSchemaPath}/${e}`
            } : {
                schema: i[r],
                schemaPath: (0, ae._)`${t.schemaPath}${(0, ae.getProperty)(e)}${(0, ae.getProperty)(r)}`,
                errSchemaPath: `${t.errSchemaPath}/${e}/${(0, ln.escapeFragment)(r)}`
            };
        }
        if (s !== void 0) {
            if (n79 === void 0 || o === void 0 || a57 === void 0) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
            return {
                schema: s,
                schemaPath: n79,
                topSchemaRef: a57,
                errSchemaPath: o
            };
        }
        throw new Error('either "keyword" or "schema" must be passed');
    }
    _e.getSubschema = Pi;
    function Si(t, e, { dataProp: r , dataPropType: s , data: n80 , dataTypes: o , propertyName: a58  }) {
        if (n80 !== void 0 && r !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
        let { gen: i  } = e;
        if (r !== void 0) {
            let { errorPath: u20 , dataPathArr: l11 , opts: d15  } = e, _5 = i.let("data", (0, ae._)`${e.data}${(0, ae.getProperty)(r)}`, !0);
            c21(_5), t.errorPath = (0, ae.str)`${u20}${(0, ln.getErrorPath)(r, s, d15.jsPropertySyntax)}`, t.parentDataProperty = (0, ae._)`${r}`, t.dataPathArr = [
                ...l11,
                t.parentDataProperty
            ];
        }
        if (n80 !== void 0) {
            let u21 = n80 instanceof ae.Name ? n80 : i.let("data", n80, !0);
            c21(u21), a58 !== void 0 && (t.propertyName = a58);
        }
        o && (t.dataTypes = o);
        function c21(u22) {
            t.data = u22, t.dataLevel = e.dataLevel + 1, t.dataTypes = [], e.definedProperties = new Set, t.parentData = e.data, t.dataNames = [
                ...e.dataNames,
                u22
            ];
        }
    }
    _e.extendSubschemaData = Si;
    function Ni(t, { jtdDiscriminator: e , jtdMetadata: r , compositeRule: s , createErrors: n81 , allErrors: o  }) {
        s !== void 0 && (t.compositeRule = s), n81 !== void 0 && (t.createErrors = n81), o !== void 0 && (t.allErrors = o), t.jtdDiscriminator = e, t.jtdMetadata = r;
    }
    _e.extendSubschemaMode = Ni;
});
var et = $1((H4)=>{
    "use strict";
    Object.defineProperty(H4, "__esModule", {
        value: !0
    });
    H4.getSchemaRefs = H4.resolveUrl = H4.normalizeId = H4._getFullPath = H4.getFullPath = H4.inlineRef = void 0;
    var ki = T(), ji = __3$, qi = __2$, Oi = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const"
    ]);
    function Ti(t, e = !0) {
        return typeof t == "boolean" ? !0 : e === !0 ? !jr(t) : e ? fn(t) <= e : !1;
    }
    H4.inlineRef = Ti;
    var Ri = new Set([
        "$ref",
        "$recursiveRef",
        "$recursiveAnchor",
        "$dynamicRef",
        "$dynamicAnchor"
    ]);
    function jr(t) {
        for(let e in t){
            if (Ri.has(e)) return !0;
            let r = t[e];
            if (Array.isArray(r) && r.some(jr) || typeof r == "object" && jr(r)) return !0;
        }
        return !1;
    }
    function fn(t) {
        let e = 0;
        for(let r in t){
            if (r === "$ref") return 1 / 0;
            if (e++, !Oi.has(r) && (typeof t[r] == "object" && (0, ki.eachItem)(t[r], (s)=>e += fn(s)
            ), e === 1 / 0)) return 1 / 0;
        }
        return e;
    }
    function hn(t, e = "", r) {
        r !== !1 && (e = Me(e));
        let s = t.parse(e);
        return pn(t, s);
    }
    H4.getFullPath = hn;
    function pn(t, e) {
        return t.serialize(e).split("#")[0] + "#";
    }
    H4._getFullPath = pn;
    var Ci = /#\/?$/;
    function Me(t) {
        return t ? t.replace(Ci, "") : "";
    }
    H4.normalizeId = Me;
    function Ii(t, e, r) {
        return r = Me(r), t.resolve(e, r);
    }
    H4.resolveUrl = Ii;
    var Mi = /^[a-z_][-a-z0-9._]*$/i;
    function Ai(t, e) {
        if (typeof t == "boolean") return {};
        let { schemaId: r , uriResolver: s  } = this.opts, n82 = Me(t[r] || e), o = {
            "": n82
        }, a59 = hn(s, n82, !1), i = {}, c22 = new Set;
        return qi(t, {
            allKeys: !0
        }, (d16, _6, m, h)=>{
            if (h === void 0) return;
            let f = a59 + _6, p9 = o[h];
            typeof d16[r] == "string" && (p9 = y11.call(this, d16[r])), j.call(this, d16.$anchor), j.call(this, d16.$dynamicAnchor), o[_6] = p9;
            function y11(N3) {
                let I2 = this.opts.uriResolver.resolve;
                if (N3 = Me(p9 ? I2(p9, N3) : N3), c22.has(N3)) throw l12(N3);
                c22.add(N3);
                let w2 = this.refs[N3];
                return typeof w2 == "string" && (w2 = this.refs[w2]), typeof w2 == "object" ? u23(d16, w2.schema, N3) : N3 !== Me(f) && (N3[0] === "#" ? (u23(d16, i[N3], N3), i[N3] = d16) : this.refs[N3] = f), N3;
            }
            function j(N4) {
                if (typeof N4 == "string") {
                    if (!Mi.test(N4)) throw new Error(`invalid anchor "${N4}"`);
                    y11.call(this, `#${N4}`);
                }
            }
        }), i;
        function u23(d17, _7, m4) {
            if (_7 !== void 0 && !ji(d17, _7)) throw l12(m4);
        }
        function l12(d18) {
            return new Error(`reference "${d18}" resolves to more than one schema`);
        }
    }
    H4.getSchemaRefs = Ai;
});
var st = $1(($e)=>{
    "use strict";
    Object.defineProperty($e, "__esModule", {
        value: !0
    });
    $e.getData = $e.KeywordCxt = $e.validateFunctionCode = void 0;
    var gn = Qs(), mn = Ze(), Or = wr(), Nt = Ze(), Di = sn(), rt = un(), qr = dn(), g10 = S1(), v12 = le(), Vi = et(), de = T(), tt = Xe();
    function Ki(t) {
        if (bn(t) && (En(t), wn(t))) {
            zi(t);
            return;
        }
        vn(t, ()=>(0, gn.topBoolOrEmptySchema)(t)
        );
    }
    $e.validateFunctionCode = Ki;
    function vn({ gen: t , validateName: e , schema: r , schemaEnv: s , opts: n83  }, o) {
        n83.code.es5 ? t.func(e, (0, g10._)`${v12.default.data}, ${v12.default.valCxt}`, s.$async, ()=>{
            t.code((0, g10._)`"use strict"; ${yn(r, n83)}`), Fi(t, n83), t.code(o);
        }) : t.func(e, (0, g10._)`${v12.default.data}, ${Ui(n83)}`, s.$async, ()=>t.code(yn(r, n83)).code(o)
        );
    }
    function Ui(t) {
        return (0, g10._)`{${v12.default.instancePath}="", ${v12.default.parentData}, ${v12.default.parentDataProperty}, ${v12.default.rootData}=${v12.default.data}${t.dynamicRef ? (0, g10._)`, ${v12.default.dynamicAnchors}={}` : g10.nil}}={}`;
    }
    function Fi(t, e) {
        t.if(v12.default.valCxt, ()=>{
            t.var(v12.default.instancePath, (0, g10._)`${v12.default.valCxt}.${v12.default.instancePath}`), t.var(v12.default.parentData, (0, g10._)`${v12.default.valCxt}.${v12.default.parentData}`), t.var(v12.default.parentDataProperty, (0, g10._)`${v12.default.valCxt}.${v12.default.parentDataProperty}`), t.var(v12.default.rootData, (0, g10._)`${v12.default.valCxt}.${v12.default.rootData}`), e.dynamicRef && t.var(v12.default.dynamicAnchors, (0, g10._)`${v12.default.valCxt}.${v12.default.dynamicAnchors}`);
        }, ()=>{
            t.var(v12.default.instancePath, (0, g10._)`""`), t.var(v12.default.parentData, (0, g10._)`undefined`), t.var(v12.default.parentDataProperty, (0, g10._)`undefined`), t.var(v12.default.rootData, v12.default.data), e.dynamicRef && t.var(v12.default.dynamicAnchors, (0, g10._)`{}`);
        });
    }
    function zi(t) {
        let { schema: e , opts: r , gen: s  } = t;
        vn(t, ()=>{
            r.$comment && e.$comment && Sn(t), Hi(t), s.let(v12.default.vErrors, null), s.let(v12.default.errors, 0), r.unevaluated && Li(t), Pn(t), Qi(t);
        });
    }
    function Li(t) {
        let { gen: e , validateName: r  } = t;
        t.evaluated = e.const("evaluated", (0, g10._)`${r}.evaluated`), e.if((0, g10._)`${t.evaluated}.dynamicProps`, ()=>e.assign((0, g10._)`${t.evaluated}.props`, (0, g10._)`undefined`)
        ), e.if((0, g10._)`${t.evaluated}.dynamicItems`, ()=>e.assign((0, g10._)`${t.evaluated}.items`, (0, g10._)`undefined`)
        );
    }
    function yn(t, e) {
        let r = typeof t == "object" && t[e.schemaId];
        return r && (e.code.source || e.code.process) ? (0, g10._)`/*# sourceURL=${r} */` : g10.nil;
    }
    function Gi(t, e) {
        if (bn(t) && (En(t), wn(t))) {
            xi(t, e);
            return;
        }
        (0, gn.boolOrEmptySchema)(t, e);
    }
    function wn({ schema: t , self: e  }) {
        if (typeof t == "boolean") return !t;
        for(let r in t)if (e.RULES.all[r]) return !0;
        return !1;
    }
    function bn(t) {
        return typeof t.schema != "boolean";
    }
    function xi(t, e) {
        let { schema: r , gen: s , opts: n84  } = t;
        n84.$comment && r.$comment && Sn(t), Wi(t), Bi(t);
        let o = s.const("_errs", v12.default.errors);
        Pn(t, o), s.var(e, (0, g10._)`${o} === ${v12.default.errors}`);
    }
    function En(t) {
        (0, de.checkUnknownRules)(t), Ji(t);
    }
    function Pn(t, e) {
        if (t.opts.jtd) return _n(t, [], !1, e);
        let r = (0, mn.getSchemaTypes)(t.schema), s = (0, mn.coerceAndCheckDataType)(t, r);
        _n(t, r, !s, e);
    }
    function Ji(t) {
        let { schema: e , errSchemaPath: r , opts: s , self: n85  } = t;
        e.$ref && s.ignoreKeywordsWithRef && (0, de.schemaHasRulesButRef)(e, n85.RULES) && n85.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
    }
    function Hi(t) {
        let { schema: e , opts: r  } = t;
        e.default !== void 0 && r.useDefaults && r.strictSchema && (0, de.checkStrictMode)(t, "default is ignored in the schema root");
    }
    function Wi(t) {
        let e = t.schema[t.opts.schemaId];
        e && (t.baseId = (0, Vi.resolveUrl)(t.opts.uriResolver, t.baseId, e));
    }
    function Bi(t) {
        if (t.schema.$async && !t.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function Sn({ gen: t , schemaEnv: e , schema: r , errSchemaPath: s , opts: n86  }) {
        let o = r.$comment;
        if (n86.$comment === !0) t.code((0, g10._)`${v12.default.self}.logger.log(${o})`);
        else if (typeof n86.$comment == "function") {
            let a60 = (0, g10.str)`${s}/$comment`, i = t.scopeValue("root", {
                ref: e.root
            });
            t.code((0, g10._)`${v12.default.self}.opts.$comment(${o}, ${a60}, ${i}.schema)`);
        }
    }
    function Qi(t) {
        let { gen: e , schemaEnv: r , validateName: s , ValidationError: n87 , opts: o  } = t;
        r.$async ? e.if((0, g10._)`${v12.default.errors} === 0`, ()=>e.return(v12.default.data)
        , ()=>e.throw((0, g10._)`new ${n87}(${v12.default.vErrors})`)
        ) : (e.assign((0, g10._)`${s}.errors`, v12.default.vErrors), o.unevaluated && Xi(t), e.return((0, g10._)`${v12.default.errors} === 0`));
    }
    function Xi({ gen: t , evaluated: e , props: r , items: s  }) {
        r instanceof g10.Name && t.assign((0, g10._)`${e}.props`, r), s instanceof g10.Name && t.assign((0, g10._)`${e}.items`, s);
    }
    function _n(t, e, r, s) {
        let { gen: n88 , schema: o , data: a61 , allErrors: i , opts: c23 , self: u24  } = t, { RULES: l13  } = u24;
        if (o.$ref && (c23.ignoreKeywordsWithRef || !(0, de.schemaHasRulesButRef)(o, l13))) {
            n88.block(()=>kn(t, "$ref", l13.all.$ref.definition)
            );
            return;
        }
        c23.jtd || Yi(t, e), n88.block(()=>{
            for (let _8 of l13.rules)d19(_8);
            d19(l13.post);
        });
        function d19(_9) {
            (0, Or.shouldUseGroup)(o, _9) && (_9.type ? (n88.if((0, Nt.checkDataType)(_9.type, a61, c23.strictNumbers)), $n(t, _9), e.length === 1 && e[0] === _9.type && r && (n88.else(), (0, Nt.reportTypeError)(t)), n88.endIf()) : $n(t, _9), i || n88.if((0, g10._)`${v12.default.errors} === ${s || 0}`));
        }
    }
    function $n(t, e) {
        let { gen: r , schema: s , opts: { useDefaults: n89  }  } = t;
        n89 && (0, Di.assignDefaults)(t, e.type), r.block(()=>{
            for (let o of e.rules)(0, Or.shouldUseRule)(s, o) && kn(t, o.keyword, o.definition, e.type);
        });
    }
    function Yi(t, e) {
        t.schemaEnv.meta || !t.opts.strictTypes || (Zi(t, e), t.opts.allowUnionTypes || ec(t, e), tc(t, t.dataTypes));
    }
    function Zi(t, e) {
        if (e.length) {
            if (!t.dataTypes.length) {
                t.dataTypes = e;
                return;
            }
            e.forEach((r)=>{
                Nn(t.dataTypes, r) || Tr(t, `type "${r}" not allowed by context "${t.dataTypes.join(",")}"`);
            }), sc(t, e);
        }
    }
    function ec(t, e) {
        e.length > 1 && !(e.length === 2 && e.includes("null")) && Tr(t, "use allowUnionTypes to allow union type keyword");
    }
    function tc(t, e) {
        let r = t.self.RULES.all;
        for(let s in r){
            let n90 = r[s];
            if (typeof n90 == "object" && (0, Or.shouldUseRule)(t.schema, n90)) {
                let { type: o  } = n90.definition;
                o.length && !o.some((a62)=>rc(e, a62)
                ) && Tr(t, `missing type "${o.join(",")}" for keyword "${s}"`);
            }
        }
    }
    function rc(t, e) {
        return t.includes(e) || e === "number" && t.includes("integer");
    }
    function Nn(t, e) {
        return t.includes(e) || e === "integer" && t.includes("number");
    }
    function sc(t, e) {
        let r = [];
        for (let s of t.dataTypes)Nn(e, s) ? r.push(s) : e.includes("integer") && s === "number" && r.push("integer");
        t.dataTypes = r;
    }
    function Tr(t, e) {
        let r = t.schemaEnv.baseId + t.errSchemaPath;
        e += ` at "${r}" (strictTypes)`, (0, de.checkStrictMode)(t, e, t.opts.strictTypes);
    }
    var kt = class {
        constructor(e, r, s){
            if ((0, rt.validateKeywordUsage)(e, r, s), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = s, this.data = e.data, this.schema = e.schema[s], this.$data = r.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, de.schemaRefOrVal)(e, this.schema, s, this.$data), this.schemaType = r.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = r, this.$data) this.schemaCode = e.gen.const("vSchema", jn(this.$data, e));
            else if (this.schemaCode = this.schemaValue, !(0, rt.validSchemaType)(this.schema, r.schemaType, r.allowUndefined)) throw new Error(`${s} value must be ${JSON.stringify(r.schemaType)}`);
            ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = e.gen.const("_errs", v12.default.errors));
        }
        result(e, r, s) {
            this.failResult((0, g10.not)(e), r, s);
        }
        failResult(e, r, s) {
            this.gen.if(e), s ? s() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
        }
        pass(e, r) {
            this.failResult((0, g10.not)(e), void 0, r);
        }
        fail(e) {
            if (e === void 0) {
                this.error(), this.allErrors || this.gen.if(!1);
                return;
            }
            this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
        }
        fail$data(e) {
            if (!this.$data) return this.fail(e);
            let { schemaCode: r  } = this;
            this.fail((0, g10._)`${r} !== undefined && (${(0, g10.or)(this.invalid$data(), e)})`);
        }
        error(e, r, s) {
            if (r) {
                this.setParams(r), this._error(e, s), this.setParams({});
                return;
            }
            this._error(e, s);
        }
        _error(e, r) {
            (e ? tt.reportExtraError : tt.reportError)(this, this.def.error, r);
        }
        $dataError() {
            (0, tt.reportError)(this, this.def.$dataError || tt.keyword$DataError);
        }
        reset() {
            if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
            (0, tt.resetErrorsCount)(this.gen, this.errsCount);
        }
        ok(e) {
            this.allErrors || this.gen.if(e);
        }
        setParams(e, r) {
            r ? Object.assign(this.params, e) : this.params = e;
        }
        block$data(e, r, s = g10.nil) {
            this.gen.block(()=>{
                this.check$data(e, s), r();
            });
        }
        check$data(e = g10.nil, r = g10.nil) {
            if (!this.$data) return;
            let { gen: s , schemaCode: n91 , schemaType: o , def: a63  } = this;
            s.if((0, g10.or)((0, g10._)`${n91} === undefined`, r)), e !== g10.nil && s.assign(e, !0), (o.length || a63.validateSchema) && (s.elseIf(this.invalid$data()), this.$dataError(), e !== g10.nil && s.assign(e, !1)), s.else();
        }
        invalid$data() {
            let { gen: e , schemaCode: r , schemaType: s , def: n92 , it: o  } = this;
            return (0, g10.or)(a64(), i());
            function a64() {
                if (s.length) {
                    if (!(r instanceof g10.Name)) throw new Error("ajv implementation error");
                    let c24 = Array.isArray(s) ? s : [
                        s
                    ];
                    return (0, g10._)`${(0, Nt.checkDataTypes)(c24, r, o.opts.strictNumbers, Nt.DataType.Wrong)}`;
                }
                return g10.nil;
            }
            function i() {
                if (n92.validateSchema) {
                    let c25 = e.scopeValue("validate$data", {
                        ref: n92.validateSchema
                    });
                    return (0, g10._)`!${c25}(${r})`;
                }
                return g10.nil;
            }
        }
        subschema(e, r) {
            let s = (0, qr.getSubschema)(this.it, e);
            (0, qr.extendSubschemaData)(s, this.it, e), (0, qr.extendSubschemaMode)(s, e);
            let n93 = {
                ...this.it,
                ...s,
                items: void 0,
                props: void 0
            };
            return Gi(n93, r), n93;
        }
        mergeEvaluated(e, r) {
            let { it: s , gen: n94  } = this;
            s.opts.unevaluated && (s.props !== !0 && e.props !== void 0 && (s.props = de.mergeEvaluated.props(n94, e.props, s.props, r)), s.items !== !0 && e.items !== void 0 && (s.items = de.mergeEvaluated.items(n94, e.items, s.items, r)));
        }
        mergeValidEvaluated(e, r) {
            let { it: s , gen: n95  } = this;
            if (s.opts.unevaluated && (s.props !== !0 || s.items !== !0)) return n95.if(r, ()=>this.mergeEvaluated(e, g10.Name)
            ), !0;
        }
    };
    $e.KeywordCxt = kt;
    function kn(t, e, r, s) {
        let n96 = new kt(t, r, e);
        "code" in r ? r.code(n96, s) : n96.$data && r.validate ? (0, rt.funcKeywordCode)(n96, r) : "macro" in r ? (0, rt.macroKeywordCode)(n96, r) : (r.compile || r.validate) && (0, rt.funcKeywordCode)(n96, r);
    }
    var nc = /^\/(?:[^~]|~0|~1)*$/, oc = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function jn(t, { dataLevel: e , dataNames: r , dataPathArr: s  }) {
        let n97, o;
        if (t === "") return v12.default.rootData;
        if (t[0] === "/") {
            if (!nc.test(t)) throw new Error(`Invalid JSON-pointer: ${t}`);
            n97 = t, o = v12.default.rootData;
        } else {
            let u25 = oc.exec(t);
            if (!u25) throw new Error(`Invalid JSON-pointer: ${t}`);
            let l14 = +u25[1];
            if (n97 = u25[2], n97 === "#") {
                if (l14 >= e) throw new Error(c26("property/index", l14));
                return s[e - l14];
            }
            if (l14 > e) throw new Error(c26("data", l14));
            if (o = r[e - l14], !n97) return o;
        }
        let a65 = o, i = n97.split("/");
        for (let u2 of i)u2 && (o = (0, g10._)`${o}${(0, g10.getProperty)((0, de.unescapeJsonPointer)(u2))}`, a65 = (0, g10._)`${a65} && ${o}`);
        return a65;
        function c26(u26, l15) {
            return `Cannot access ${u26} ${l15} levels up, current level is ${e}`;
        }
    }
    $e.getData = jn;
});
var jt = $1((Cr)=>{
    "use strict";
    Object.defineProperty(Cr, "__esModule", {
        value: !0
    });
    var Rr = class extends Error {
        constructor(e){
            super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
        }
    };
    Cr.default = Rr;
});
var qt = $1((Ar)=>{
    "use strict";
    Object.defineProperty(Ar, "__esModule", {
        value: !0
    });
    var Ir = et(), Mr = class extends Error {
        constructor(e, r, s, n98){
            super(n98 || `can't resolve reference ${s} from id ${r}`), this.missingRef = (0, Ir.resolveUrl)(e, r, s), this.missingSchema = (0, Ir.normalizeId)((0, Ir.getFullPath)(e, this.missingRef));
        }
    };
    Ar.default = Mr;
});
var Tt = $1((X)=>{
    "use strict";
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.resolveSchema = X.getCompilingSchema = X.resolveRef = X.compileSchema = X.SchemaEnv = void 0;
    var te = S1(), ac = jt(), Se = le(), re = et(), qn = T(), ic = st(), Ae = class {
        constructor(e){
            var r;
            this.refs = {}, this.dynamicAnchors = {};
            let s;
            typeof e.schema == "object" && (s = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = (r = e.baseId) !== null && r !== void 0 ? r : (0, re.normalizeId)(s?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = s?.$async, this.refs = {};
        }
    };
    X.SchemaEnv = Ae;
    function Vr(t) {
        let e = On.call(this, t);
        if (e) return e;
        let r = (0, re.getFullPath)(this.opts.uriResolver, t.root.baseId), { es5: s , lines: n99  } = this.opts.code, { ownProperties: o  } = this.opts, a66 = new te.CodeGen(this.scope, {
            es5: s,
            lines: n99,
            ownProperties: o
        }), i;
        t.$async && (i = a66.scopeValue("Error", {
            ref: ac.default,
            code: (0, te._)`require("ajv/dist/runtime/validation_error").default`
        }));
        let c27 = a66.scopeName("validate");
        t.validateName = c27;
        let u27 = {
            gen: a66,
            allErrors: this.opts.allErrors,
            data: Se.default.data,
            parentData: Se.default.parentData,
            parentDataProperty: Se.default.parentDataProperty,
            dataNames: [
                Se.default.data
            ],
            dataPathArr: [
                te.nil
            ],
            dataLevel: 0,
            dataTypes: [],
            definedProperties: new Set,
            topSchemaRef: a66.scopeValue("schema", this.opts.code.source === !0 ? {
                ref: t.schema,
                code: (0, te.stringify)(t.schema)
            } : {
                ref: t.schema
            }),
            validateName: c27,
            ValidationError: i,
            schema: t.schema,
            schemaEnv: t,
            rootId: r,
            baseId: t.baseId || r,
            schemaPath: te.nil,
            errSchemaPath: t.schemaPath || (this.opts.jtd ? "" : "#"),
            errorPath: (0, te._)`""`,
            opts: this.opts,
            self: this
        }, l16;
        try {
            this._compilations.add(t), (0, ic.validateFunctionCode)(u27), a66.optimize(this.opts.code.optimize);
            let d20 = a66.toString();
            l16 = `${a66.scopeRefs(Se.default.scope)}return ${d20}`, this.opts.code.process && (l16 = this.opts.code.process(l16, t));
            let m5 = new Function(`${Se.default.self}`, `${Se.default.scope}`, l16)(this, this.scope.get());
            if (this.scope.value(c27, {
                ref: m5
            }), m5.errors = null, m5.schema = t.schema, m5.schemaEnv = t, t.$async && (m5.$async = !0), this.opts.code.source === !0 && (m5.source = {
                validateName: c27,
                validateCode: d20,
                scopeValues: a66._values
            }), this.opts.unevaluated) {
                let { props: h , items: f  } = u27;
                m5.evaluated = {
                    props: h instanceof te.Name ? void 0 : h,
                    items: f instanceof te.Name ? void 0 : f,
                    dynamicProps: h instanceof te.Name,
                    dynamicItems: f instanceof te.Name
                }, m5.source && (m5.source.evaluated = (0, te.stringify)(m5.evaluated));
            }
            return t.validate = m5, t;
        } catch (d21) {
            throw delete t.validate, delete t.validateName, l16 && this.logger.error("Error compiling schema, function code:", l16), d21;
        } finally{
            this._compilations.delete(t);
        }
    }
    X.compileSchema = Vr;
    function cc(t, e, r) {
        var s;
        r = (0, re.resolveUrl)(this.opts.uriResolver, e, r);
        let n100 = t.refs[r];
        if (n100) return n100;
        let o = dc.call(this, t, r);
        if (o === void 0) {
            let a67 = (s = t.localRefs) === null || s === void 0 ? void 0 : s[r], { schemaId: i  } = this.opts;
            a67 && (o = new Ae({
                schema: a67,
                schemaId: i,
                root: t,
                baseId: e
            }));
        }
        if (o !== void 0) return t.refs[r] = uc.call(this, o);
    }
    X.resolveRef = cc;
    function uc(t) {
        return (0, re.inlineRef)(t.schema, this.opts.inlineRefs) ? t.schema : t.validate ? t : Vr.call(this, t);
    }
    function On(t) {
        for (let e of this._compilations)if (lc(e, t)) return e;
    }
    X.getCompilingSchema = On;
    function lc(t, e) {
        return t.schema === e.schema && t.root === e.root && t.baseId === e.baseId;
    }
    function dc(t, e) {
        let r;
        for(; typeof (r = this.refs[e]) == "string";)e = r;
        return r || this.schemas[e] || Ot.call(this, t, e);
    }
    function Ot(t, e) {
        let r = this.opts.uriResolver.parse(e), s = (0, re._getFullPath)(this.opts.uriResolver, r), n101 = (0, re.getFullPath)(this.opts.uriResolver, t.baseId, void 0);
        if (Object.keys(t.schema).length > 0 && s === n101) return Dr.call(this, r, t);
        let o = (0, re.normalizeId)(s), a68 = this.refs[o] || this.schemas[o];
        if (typeof a68 == "string") {
            let i = Ot.call(this, t, a68);
            return typeof i?.schema != "object" ? void 0 : Dr.call(this, r, i);
        }
        if (typeof a68?.schema == "object") {
            if (a68.validate || Vr.call(this, a68), o === (0, re.normalizeId)(e)) {
                let { schema: i  } = a68, { schemaId: c28  } = this.opts, u28 = i[c28];
                return u28 && (n101 = (0, re.resolveUrl)(this.opts.uriResolver, n101, u28)), new Ae({
                    schema: i,
                    schemaId: c28,
                    root: t,
                    baseId: n101
                });
            }
            return Dr.call(this, r, a68);
        }
    }
    X.resolveSchema = Ot;
    var fc = new Set([
        "properties",
        "patternProperties",
        "enum",
        "dependencies",
        "definitions"
    ]);
    function Dr(t, { baseId: e , schema: r , root: s  }) {
        var n102;
        if (((n102 = t.fragment) === null || n102 === void 0 ? void 0 : n102[0]) !== "/") return;
        for (let i of t.fragment.slice(1).split("/")){
            if (typeof r == "boolean") return;
            let c29 = r[(0, qn.unescapeFragment)(i)];
            if (c29 === void 0) return;
            r = c29;
            let u29 = typeof r == "object" && r[this.opts.schemaId];
            !fc.has(i) && u29 && (e = (0, re.resolveUrl)(this.opts.uriResolver, e, u29));
        }
        let o;
        if (typeof r != "boolean" && r.$ref && !(0, qn.schemaHasRulesButRef)(r, this.RULES)) {
            let i = (0, re.resolveUrl)(this.opts.uriResolver, e, r.$ref);
            o = Ot.call(this, s, i);
        }
        let { schemaId: a69  } = this.opts;
        if (o = o || new Ae({
            schema: r,
            schemaId: a69,
            root: s,
            baseId: e
        }), o.schema !== o.root.schema) return o;
    }
});
var Tn = $1((jd, hc)=>{
    hc.exports = {
        $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
        type: "object",
        required: [
            "$data"
        ],
        properties: {
            $data: {
                type: "string",
                anyOf: [
                    {
                        format: "relative-json-pointer"
                    },
                    {
                        format: "json-pointer"
                    }
                ]
            }
        },
        additionalProperties: !1
    };
});
var Cn = $1((Kr1)=>{
    "use strict";
    Object.defineProperty(Kr1, "__esModule", {
        value: !0
    });
    var Rn = __1$;
    Rn.code = 'require("ajv/dist/runtime/uri").default';
    Kr1.default = Rn;
});
var Fn = $1((K)=>{
    "use strict";
    Object.defineProperty(K, "__esModule", {
        value: !0
    });
    K.CodeGen = K.Name = K.nil = K.stringify = K.str = K._ = K.KeywordCxt = void 0;
    var pc = st();
    Object.defineProperty(K, "KeywordCxt", {
        enumerable: !0,
        get: function() {
            return pc.KeywordCxt;
        }
    });
    var De = S1();
    Object.defineProperty(K, "_", {
        enumerable: !0,
        get: function() {
            return De._;
        }
    });
    Object.defineProperty(K, "str", {
        enumerable: !0,
        get: function() {
            return De.str;
        }
    });
    Object.defineProperty(K, "stringify", {
        enumerable: !0,
        get: function() {
            return De.stringify;
        }
    });
    Object.defineProperty(K, "nil", {
        enumerable: !0,
        get: function() {
            return De.nil;
        }
    });
    Object.defineProperty(K, "Name", {
        enumerable: !0,
        get: function() {
            return De.Name;
        }
    });
    Object.defineProperty(K, "CodeGen", {
        enumerable: !0,
        get: function() {
            return De.CodeGen;
        }
    });
    var mc = jt(), Vn = qt(), yc = vr(), nt = Tt(), _c = S1(), ot = et(), Rt = Ze(), Fr = T(), In = Tn(), $c = Cn(), Kn = (t, e)=>new RegExp(t, e)
    ;
    Kn.code = "new RegExp";
    var gc = [
        "removeAdditional",
        "useDefaults",
        "coerceTypes"
    ], vc = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
    ]), wc = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
    }, bc = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, Mn = 200;
    function Ec(t) {
        var e, r, s, n103, o, a70, i, c30, u30, l17, d22, _10, m6, h, f, p10, y12, j, N5, I3, w3, ne, qe, Wt, Bt;
        let ze = t.strict, Qt = (e = t.code) === null || e === void 0 ? void 0 : e.optimize, Ts = Qt === !0 || Qt === void 0 ? 1 : Qt || 0, Rs = (s = (r = t.code) === null || r === void 0 ? void 0 : r.regExp) !== null && s !== void 0 ? s : Kn, Qo = (n103 = t.uriResolver) !== null && n103 !== void 0 ? n103 : $c.default;
        return {
            strictSchema: (a70 = (o = t.strictSchema) !== null && o !== void 0 ? o : ze) !== null && a70 !== void 0 ? a70 : !0,
            strictNumbers: (c30 = (i = t.strictNumbers) !== null && i !== void 0 ? i : ze) !== null && c30 !== void 0 ? c30 : !0,
            strictTypes: (l17 = (u30 = t.strictTypes) !== null && u30 !== void 0 ? u30 : ze) !== null && l17 !== void 0 ? l17 : "log",
            strictTuples: (_10 = (d22 = t.strictTuples) !== null && d22 !== void 0 ? d22 : ze) !== null && _10 !== void 0 ? _10 : "log",
            strictRequired: (h = (m6 = t.strictRequired) !== null && m6 !== void 0 ? m6 : ze) !== null && h !== void 0 ? h : !1,
            code: t.code ? {
                ...t.code,
                optimize: Ts,
                regExp: Rs
            } : {
                optimize: Ts,
                regExp: Rs
            },
            loopRequired: (f = t.loopRequired) !== null && f !== void 0 ? f : Mn,
            loopEnum: (p10 = t.loopEnum) !== null && p10 !== void 0 ? p10 : Mn,
            meta: (y12 = t.meta) !== null && y12 !== void 0 ? y12 : !0,
            messages: (j = t.messages) !== null && j !== void 0 ? j : !0,
            inlineRefs: (N5 = t.inlineRefs) !== null && N5 !== void 0 ? N5 : !0,
            schemaId: (I3 = t.schemaId) !== null && I3 !== void 0 ? I3 : "$id",
            addUsedSchema: (w3 = t.addUsedSchema) !== null && w3 !== void 0 ? w3 : !0,
            validateSchema: (ne = t.validateSchema) !== null && ne !== void 0 ? ne : !0,
            validateFormats: (qe = t.validateFormats) !== null && qe !== void 0 ? qe : !0,
            unicodeRegExp: (Wt = t.unicodeRegExp) !== null && Wt !== void 0 ? Wt : !0,
            int32range: (Bt = t.int32range) !== null && Bt !== void 0 ? Bt : !0,
            uriResolver: Qo
        };
    }
    var at = class {
        constructor(e = {}){
            this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, this._loading = {}, this._cache = new Map, e = this.opts = {
                ...e,
                ...Ec(e)
            };
            let { es5: r , lines: s  } = this.opts.code;
            this.scope = new _c.ValueScope({
                scope: {},
                prefixes: vc,
                es5: r,
                lines: s
            }), this.logger = qc(e.logger);
            let n104 = e.validateFormats;
            e.validateFormats = !1, this.RULES = (0, yc.getRules)(), An.call(this, wc, e, "NOT SUPPORTED"), An.call(this, bc, e, "DEPRECATED", "warn"), this._metaOpts = kc.call(this), e.formats && Sc.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && Nc.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), Pc.call(this), e.validateFormats = n104;
        }
        _addVocabularies() {
            this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
            let { $data: e , meta: r , schemaId: s  } = this.opts, n105 = In;
            s === "id" && (n105 = {
                ...In
            }, n105.id = n105.$id, delete n105.$id), r && e && this.addMetaSchema(n105, n105[s], !1);
        }
        defaultMeta() {
            let { meta: e , schemaId: r  } = this.opts;
            return this.opts.defaultMeta = typeof e == "object" ? e[r] || e : void 0;
        }
        validate(e, r) {
            let s;
            if (typeof e == "string") {
                if (s = this.getSchema(e), !s) throw new Error(`no schema with key or ref "${e}"`);
            } else s = this.compile(e);
            let n106 = s(r);
            return "$async" in s || (this.errors = s.errors), n106;
        }
        compile(e, r) {
            let s = this._addSchema(e, r);
            return s.validate || this._compileSchemaEnv(s);
        }
        compileAsync(e, r) {
            if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
            let { loadSchema: s  } = this.opts;
            return n107.call(this, e, r);
            async function n107(l18, d23) {
                await o.call(this, l18.$schema);
                let _11 = this._addSchema(l18, d23);
                return _11.validate || a71.call(this, _11);
            }
            async function o(l19) {
                l19 && !this.getSchema(l19) && await n107.call(this, {
                    $ref: l19
                }, !0);
            }
            async function a71(l20) {
                try {
                    return this._compileSchemaEnv(l20);
                } catch (d24) {
                    if (!(d24 instanceof Vn.default)) throw d24;
                    return i.call(this, d24), await c31.call(this, d24.missingSchema), a71.call(this, l20);
                }
            }
            function i({ missingSchema: l21 , missingRef: d25  }) {
                if (this.refs[l21]) throw new Error(`AnySchema ${l21} is loaded but ${d25} cannot be resolved`);
            }
            async function c31(l22) {
                let d26 = await u31.call(this, l22);
                this.refs[l22] || await o.call(this, d26.$schema), this.refs[l22] || this.addSchema(d26, l22, r);
            }
            async function u31(l23) {
                let d27 = this._loading[l23];
                if (d27) return d27;
                try {
                    return await (this._loading[l23] = s(l23));
                } finally{
                    delete this._loading[l23];
                }
            }
        }
        addSchema(e, r, s, n108 = this.opts.validateSchema) {
            if (Array.isArray(e)) {
                for (let a72 of e)this.addSchema(a72, void 0, s, n108);
                return this;
            }
            let o;
            if (typeof e == "object") {
                let { schemaId: a73  } = this.opts;
                if (o = e[a73], o !== void 0 && typeof o != "string") throw new Error(`schema ${a73} must be string`);
            }
            return r = (0, ot.normalizeId)(r || o), this._checkUnique(r), this.schemas[r] = this._addSchema(e, s, r, n108, !0), this;
        }
        addMetaSchema(e, r, s = this.opts.validateSchema) {
            return this.addSchema(e, r, !0, s), this;
        }
        validateSchema(e, r) {
            if (typeof e == "boolean") return !0;
            let s;
            if (s = e.$schema, s !== void 0 && typeof s != "string") throw new Error("$schema must be a string");
            if (s = s || this.opts.defaultMeta || this.defaultMeta(), !s) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
            let n109 = this.validate(s, e);
            if (!n109 && r) {
                let o = "schema is invalid: " + this.errorsText();
                if (this.opts.validateSchema === "log") this.logger.error(o);
                else throw new Error(o);
            }
            return n109;
        }
        getSchema(e) {
            let r;
            for(; typeof (r = Dn.call(this, e)) == "string";)e = r;
            if (r === void 0) {
                let { schemaId: s  } = this.opts, n110 = new nt.SchemaEnv({
                    schema: {},
                    schemaId: s
                });
                if (r = nt.resolveSchema.call(this, n110, e), !r) return;
                this.refs[e] = r;
            }
            return r.validate || this._compileSchemaEnv(r);
        }
        removeSchema(e) {
            if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
            switch(typeof e){
                case "undefined":
                    return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
                case "string":
                    {
                        let r = Dn.call(this, e);
                        return typeof r == "object" && this._cache.delete(r.schema), delete this.schemas[e], delete this.refs[e], this;
                    }
                case "object":
                    {
                        let r = e;
                        this._cache.delete(r);
                        let s = e[this.opts.schemaId];
                        return s && (s = (0, ot.normalizeId)(s), delete this.schemas[s], delete this.refs[s]), this;
                    }
                default:
                    throw new Error("ajv.removeSchema: invalid parameter");
            }
        }
        addVocabulary(e) {
            for (let r of e)this.addKeyword(r);
            return this;
        }
        addKeyword(e, r) {
            let s;
            if (typeof e == "string") s = e, typeof r == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), r.keyword = s);
            else if (typeof e == "object" && r === void 0) {
                if (r = e, s = r.keyword, Array.isArray(s) && !s.length) throw new Error("addKeywords: keyword must be string or non-empty array");
            } else throw new Error("invalid addKeywords parameters");
            if (Tc.call(this, s, r), !r) return (0, Fr.eachItem)(s, (o)=>Ur.call(this, o)
            ), this;
            Cc.call(this, r);
            let n111 = {
                ...r,
                type: (0, Rt.getJSONTypes)(r.type),
                schemaType: (0, Rt.getJSONTypes)(r.schemaType)
            };
            return (0, Fr.eachItem)(s, n111.type.length === 0 ? (o)=>Ur.call(this, o, n111)
             : (o)=>n111.type.forEach((a74)=>Ur.call(this, o, n111, a74)
                )
            ), this;
        }
        getKeyword(e) {
            let r = this.RULES.all[e];
            return typeof r == "object" ? r.definition : !!r;
        }
        removeKeyword(e) {
            let { RULES: r  } = this;
            delete r.keywords[e], delete r.all[e];
            for (let s of r.rules){
                let n112 = s.rules.findIndex((o)=>o.keyword === e
                );
                n112 >= 0 && s.rules.splice(n112, 1);
            }
            return this;
        }
        addFormat(e, r) {
            return typeof r == "string" && (r = new RegExp(r)), this.formats[e] = r, this;
        }
        errorsText(e = this.errors, { separator: r = ", " , dataVar: s = "data"  } = {}) {
            return !e || e.length === 0 ? "No errors" : e.map((n113)=>`${s}${n113.instancePath} ${n113.message}`
            ).reduce((n114, o)=>n114 + r + o
            );
        }
        $dataMetaSchema(e, r) {
            let s = this.RULES.all;
            e = JSON.parse(JSON.stringify(e));
            for (let n115 of r){
                let o = n115.split("/").slice(1), a75 = e;
                for (let i of o)a75 = a75[i];
                for(let i1 in s){
                    let c32 = s[i1];
                    if (typeof c32 != "object") continue;
                    let { $data: u32  } = c32.definition, l24 = a75[i1];
                    u32 && l24 && (a75[i1] = Un(l24));
                }
            }
            return e;
        }
        _removeAllSchemas(e, r) {
            for(let s in e){
                let n116 = e[s];
                (!r || r.test(s)) && (typeof n116 == "string" ? delete e[s] : n116 && !n116.meta && (this._cache.delete(n116.schema), delete e[s]));
            }
        }
        _addSchema(e, r, s, n117 = this.opts.validateSchema, o = this.opts.addUsedSchema) {
            let a76, { schemaId: i  } = this.opts;
            if (typeof e == "object") a76 = e[i];
            else {
                if (this.opts.jtd) throw new Error("schema must be object");
                if (typeof e != "boolean") throw new Error("schema must be object or boolean");
            }
            let c33 = this._cache.get(e);
            if (c33 !== void 0) return c33;
            s = (0, ot.normalizeId)(a76 || s);
            let u33 = ot.getSchemaRefs.call(this, e, s);
            return c33 = new nt.SchemaEnv({
                schema: e,
                schemaId: i,
                meta: r,
                baseId: s,
                localRefs: u33
            }), this._cache.set(c33.schema, c33), o && !s.startsWith("#") && (s && this._checkUnique(s), this.refs[s] = c33), n117 && this.validateSchema(e, !0), c33;
        }
        _checkUnique(e) {
            if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`);
        }
        _compileSchemaEnv(e) {
            if (e.meta ? this._compileMetaSchema(e) : nt.compileSchema.call(this, e), !e.validate) throw new Error("ajv implementation error");
            return e.validate;
        }
        _compileMetaSchema(e) {
            let r = this.opts;
            this.opts = this._metaOpts;
            try {
                nt.compileSchema.call(this, e);
            } finally{
                this.opts = r;
            }
        }
    };
    K.default = at;
    at.ValidationError = mc.default;
    at.MissingRefError = Vn.default;
    function An(t, e, r, s = "error") {
        for(let n118 in t){
            let o = n118;
            o in e && this.logger[s](`${r}: option ${n118}. ${t[o]}`);
        }
    }
    function Dn(t) {
        return t = (0, ot.normalizeId)(t), this.schemas[t] || this.refs[t];
    }
    function Pc() {
        let t = this.opts.schemas;
        if (t) if (Array.isArray(t)) this.addSchema(t);
        else for(let e in t)this.addSchema(t[e], e);
    }
    function Sc() {
        for(let t in this.opts.formats){
            let e = this.opts.formats[t];
            e && this.addFormat(t, e);
        }
    }
    function Nc(t) {
        if (Array.isArray(t)) {
            this.addVocabulary(t);
            return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for(let e in t){
            let r = t[e];
            r.keyword || (r.keyword = e), this.addKeyword(r);
        }
    }
    function kc() {
        let t = {
            ...this.opts
        };
        for (let e of gc)delete t[e];
        return t;
    }
    var jc = {
        log () {},
        warn () {},
        error () {}
    };
    function qc(t) {
        if (t === !1) return jc;
        if (t === void 0) return console;
        if (t.log && t.warn && t.error) return t;
        throw new Error("logger must implement log, warn and error methods");
    }
    var Oc = /^[a-z_$][a-z0-9_$:-]*$/i;
    function Tc(t, e) {
        let { RULES: r  } = this;
        if ((0, Fr.eachItem)(t, (s)=>{
            if (r.keywords[s]) throw new Error(`Keyword ${s} is already defined`);
            if (!Oc.test(s)) throw new Error(`Keyword ${s} has invalid name`);
        }), !!e && e.$data && !("code" in e || "validate" in e)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Ur(t, e, r) {
        var s;
        let n119 = e?.post;
        if (r && n119) throw new Error('keyword with "post" flag cannot have "type"');
        let { RULES: o  } = this, a77 = n119 ? o.post : o.rules.find(({ type: c34  })=>c34 === r
        );
        if (a77 || (a77 = {
            type: r,
            rules: []
        }, o.rules.push(a77)), o.keywords[t] = !0, !e) return;
        let i = {
            keyword: t,
            definition: {
                ...e,
                type: (0, Rt.getJSONTypes)(e.type),
                schemaType: (0, Rt.getJSONTypes)(e.schemaType)
            }
        };
        e.before ? Rc.call(this, a77, i, e.before) : a77.rules.push(i), o.all[t] = i, (s = e.implements) === null || s === void 0 || s.forEach((c35)=>this.addKeyword(c35)
        );
    }
    function Rc(t, e, r) {
        let s = t.rules.findIndex((n120)=>n120.keyword === r
        );
        s >= 0 ? t.rules.splice(s, 0, e) : (t.rules.push(e), this.logger.warn(`rule ${r} is not defined`));
    }
    function Cc(t) {
        let { metaSchema: e  } = t;
        e !== void 0 && (t.$data && this.opts.$data && (e = Un(e)), t.validateSchema = this.compile(e, !0));
    }
    var Ic = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Un(t) {
        return {
            anyOf: [
                t,
                Ic
            ]
        };
    }
});
var zn = $1((zr)=>{
    "use strict";
    Object.defineProperty(zr, "__esModule", {
        value: !0
    });
    var Mc = {
        keyword: "id",
        code () {
            throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
        }
    };
    zr.default = Mc;
});
var Jn = $1((Ne1)=>{
    "use strict";
    Object.defineProperty(Ne1, "__esModule", {
        value: !0
    });
    Ne1.callRef = Ne1.getValidate = void 0;
    var Ac = qt(), Ln = Q1(), W = S1(), Ve = le(), Gn = Tt(), Ct = T(), Dc = {
        keyword: "$ref",
        schemaType: "string",
        code (t) {
            let { gen: e , schema: r , it: s  } = t, { baseId: n121 , schemaEnv: o , validateName: a78 , opts: i , self: c36  } = s, { root: u34  } = o;
            if ((r === "#" || r === "#/") && n121 === u34.baseId) return d28();
            let l25 = Gn.resolveRef.call(c36, u34, n121, r);
            if (l25 === void 0) throw new Ac.default(s.opts.uriResolver, n121, r);
            if (l25 instanceof Gn.SchemaEnv) return _12(l25);
            return m7(l25);
            function d28() {
                if (o === u34) return It(t, a78, o, o.$async);
                let h = e.scopeValue("root", {
                    ref: u34
                });
                return It(t, (0, W._)`${h}.validate`, u34, u34.$async);
            }
            function _12(h) {
                let f = xn(t, h);
                It(t, f, h, h.$async);
            }
            function m7(h) {
                let f = e.scopeValue("schema", i.code.source === !0 ? {
                    ref: h,
                    code: (0, W.stringify)(h)
                } : {
                    ref: h
                }), p11 = e.name("valid"), y13 = t.subschema({
                    schema: h,
                    dataTypes: [],
                    schemaPath: W.nil,
                    topSchemaRef: f,
                    errSchemaPath: r
                }, p11);
                t.mergeEvaluated(y13), t.ok(p11);
            }
        }
    };
    function xn(t, e) {
        let { gen: r  } = t;
        return e.validate ? r.scopeValue("validate", {
            ref: e.validate
        }) : (0, W._)`${r.scopeValue("wrapper", {
            ref: e
        })}.validate`;
    }
    Ne1.getValidate = xn;
    function It(t, e, r, s) {
        let { gen: n122 , it: o  } = t, { allErrors: a79 , schemaEnv: i , opts: c37  } = o, u35 = c37.passContext ? Ve.default.this : W.nil;
        s ? l26() : d29();
        function l26() {
            if (!i.$async) throw new Error("async schema referenced by sync schema");
            let h = n122.let("valid");
            n122.try(()=>{
                n122.code((0, W._)`await ${(0, Ln.callValidateCode)(t, e, u35)}`), m8(e), a79 || n122.assign(h, !0);
            }, (f)=>{
                n122.if((0, W._)`!(${f} instanceof ${o.ValidationError})`, ()=>n122.throw(f)
                ), _13(f), a79 || n122.assign(h, !1);
            }), t.ok(h);
        }
        function d29() {
            t.result((0, Ln.callValidateCode)(t, e, u35), ()=>m8(e)
            , ()=>_13(e)
            );
        }
        function _13(h) {
            let f = (0, W._)`${h}.errors`;
            n122.assign(Ve.default.vErrors, (0, W._)`${Ve.default.vErrors} === null ? ${f} : ${Ve.default.vErrors}.concat(${f})`), n122.assign(Ve.default.errors, (0, W._)`${Ve.default.vErrors}.length`);
        }
        function m8(h) {
            var f;
            if (!o.opts.unevaluated) return;
            let p12 = (f = r?.validate) === null || f === void 0 ? void 0 : f.evaluated;
            if (o.props !== !0) if (p12 && !p12.dynamicProps) p12.props !== void 0 && (o.props = Ct.mergeEvaluated.props(n122, p12.props, o.props));
            else {
                let y14 = n122.var("props", (0, W._)`${h}.evaluated.props`);
                o.props = Ct.mergeEvaluated.props(n122, y14, o.props, W.Name);
            }
            if (o.items !== !0) if (p12 && !p12.dynamicItems) p12.items !== void 0 && (o.items = Ct.mergeEvaluated.items(n122, p12.items, o.items));
            else {
                let y15 = n122.var("items", (0, W._)`${h}.evaluated.items`);
                o.items = Ct.mergeEvaluated.items(n122, y15, o.items, W.Name);
            }
        }
    }
    Ne1.callRef = It;
    Ne1.default = Dc;
});
var Hn = $1((Lr)=>{
    "use strict";
    Object.defineProperty(Lr, "__esModule", {
        value: !0
    });
    var Vc = zn(), Kc = Jn(), Uc = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        {
            keyword: "$comment"
        },
        "definitions",
        Vc.default,
        Kc.default
    ];
    Lr.default = Uc;
});
var Wn = $1((Gr)=>{
    "use strict";
    Object.defineProperty(Gr, "__esModule", {
        value: !0
    });
    var Mt = S1(), ge = Mt.operators, At = {
        maximum: {
            okStr: "<=",
            ok: ge.LTE,
            fail: ge.GT
        },
        minimum: {
            okStr: ">=",
            ok: ge.GTE,
            fail: ge.LT
        },
        exclusiveMaximum: {
            okStr: "<",
            ok: ge.LT,
            fail: ge.GTE
        },
        exclusiveMinimum: {
            okStr: ">",
            ok: ge.GT,
            fail: ge.LTE
        }
    }, Fc = {
        message: ({ keyword: t , schemaCode: e  })=>(0, Mt.str)`must be ${At[t].okStr} ${e}`
        ,
        params: ({ keyword: t , schemaCode: e  })=>(0, Mt._)`{comparison: ${At[t].okStr}, limit: ${e}}`
    }, zc = {
        keyword: Object.keys(At),
        type: "number",
        schemaType: "number",
        $data: !0,
        error: Fc,
        code (t) {
            let { keyword: e , data: r , schemaCode: s  } = t;
            t.fail$data((0, Mt._)`${r} ${At[e].fail} ${s} || isNaN(${r})`);
        }
    };
    Gr.default = zc;
});
var Bn = $1((xr)=>{
    "use strict";
    Object.defineProperty(xr, "__esModule", {
        value: !0
    });
    var it = S1(), Lc = {
        message: ({ schemaCode: t  })=>(0, it.str)`must be multiple of ${t}`
        ,
        params: ({ schemaCode: t  })=>(0, it._)`{multipleOf: ${t}}`
    }, Gc = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: !0,
        error: Lc,
        code (t) {
            let { gen: e , data: r , schemaCode: s , it: n123  } = t, o = n123.opts.multipleOfPrecision, a80 = e.let("res"), i = o ? (0, it._)`Math.abs(Math.round(${a80}) - ${a80}) > 1e-${o}` : (0, it._)`${a80} !== parseInt(${a80})`;
            t.fail$data((0, it._)`(${s} === 0 || (${a80} = ${r}/${s}, ${i}))`);
        }
    };
    xr.default = Gc;
});
var Xn = $1((Jr1)=>{
    "use strict";
    Object.defineProperty(Jr1, "__esModule", {
        value: !0
    });
    function Qn(t) {
        let e = t.length, r = 0, s = 0, n124;
        for(; s < e;)r++, n124 = t.charCodeAt(s++), n124 >= 55296 && n124 <= 56319 && s < e && (n124 = t.charCodeAt(s), (n124 & 64512) === 56320 && s++);
        return r;
    }
    Jr1.default = Qn;
    Qn.code = 'require("ajv/dist/runtime/ucs2length").default';
});
var Yn = $1((Hr)=>{
    "use strict";
    Object.defineProperty(Hr, "__esModule", {
        value: !0
    });
    var ke = S1(), xc = T(), Jc = Xn(), Hc = {
        message ({ keyword: t , schemaCode: e  }) {
            let r = t === "maxLength" ? "more" : "fewer";
            return (0, ke.str)`must NOT have ${r} than ${e} characters`;
        },
        params: ({ schemaCode: t  })=>(0, ke._)`{limit: ${t}}`
    }, Wc = {
        keyword: [
            "maxLength",
            "minLength"
        ],
        type: "string",
        schemaType: "number",
        $data: !0,
        error: Hc,
        code (t) {
            let { keyword: e , data: r , schemaCode: s , it: n125  } = t, o = e === "maxLength" ? ke.operators.GT : ke.operators.LT, a81 = n125.opts.unicode === !1 ? (0, ke._)`${r}.length` : (0, ke._)`${(0, xc.useFunc)(t.gen, Jc.default)}(${r})`;
            t.fail$data((0, ke._)`${a81} ${o} ${s}`);
        }
    };
    Hr.default = Wc;
});
var Zn = $1((Wr1)=>{
    "use strict";
    Object.defineProperty(Wr1, "__esModule", {
        value: !0
    });
    var Bc = Q1(), Dt = S1(), Qc = {
        message: ({ schemaCode: t  })=>(0, Dt.str)`must match pattern "${t}"`
        ,
        params: ({ schemaCode: t  })=>(0, Dt._)`{pattern: ${t}}`
    }, Xc = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: !0,
        error: Qc,
        code (t) {
            let { data: e , $data: r , schema: s , schemaCode: n126 , it: o  } = t, a82 = o.opts.unicodeRegExp ? "u" : "", i = r ? (0, Dt._)`(new RegExp(${n126}, ${a82}))` : (0, Bc.usePattern)(t, s);
            t.fail$data((0, Dt._)`!${i}.test(${e})`);
        }
    };
    Wr1.default = Xc;
});
var eo = $1((Br1)=>{
    "use strict";
    Object.defineProperty(Br1, "__esModule", {
        value: !0
    });
    var ct = S1(), Yc = {
        message ({ keyword: t , schemaCode: e  }) {
            let r = t === "maxProperties" ? "more" : "fewer";
            return (0, ct.str)`must NOT have ${r} than ${e} properties`;
        },
        params: ({ schemaCode: t  })=>(0, ct._)`{limit: ${t}}`
    }, Zc = {
        keyword: [
            "maxProperties",
            "minProperties"
        ],
        type: "object",
        schemaType: "number",
        $data: !0,
        error: Yc,
        code (t) {
            let { keyword: e , data: r , schemaCode: s  } = t, n127 = e === "maxProperties" ? ct.operators.GT : ct.operators.LT;
            t.fail$data((0, ct._)`Object.keys(${r}).length ${n127} ${s}`);
        }
    };
    Br1.default = Zc;
});
var to = $1((Qr1)=>{
    "use strict";
    Object.defineProperty(Qr1, "__esModule", {
        value: !0
    });
    var ut = Q1(), lt = S1(), eu = T(), tu = {
        message: ({ params: { missingProperty: t  }  })=>(0, lt.str)`must have required property '${t}'`
        ,
        params: ({ params: { missingProperty: t  }  })=>(0, lt._)`{missingProperty: ${t}}`
    }, ru = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: !0,
        error: tu,
        code (t) {
            let { gen: e , schema: r , schemaCode: s , data: n128 , $data: o , it: a83  } = t, { opts: i  } = a83;
            if (!o && r.length === 0) return;
            let c38 = r.length >= i.loopRequired;
            if (a83.allErrors ? u36() : l27(), i.strictRequired) {
                let m9 = t.parentSchema.properties, { definedProperties: h  } = t.it;
                for (let f of r)if (m9?.[f] === void 0 && !h.has(f)) {
                    let p13 = a83.schemaEnv.baseId + a83.errSchemaPath, y16 = `required property "${f}" is not defined at "${p13}" (strictRequired)`;
                    (0, eu.checkStrictMode)(a83, y16, a83.opts.strictRequired);
                }
            }
            function u36() {
                if (c38 || o) t.block$data(lt.nil, d30);
                else for (let m10 of r)(0, ut.checkReportMissingProp)(t, m10);
            }
            function l27() {
                let m11 = e.let("missing");
                if (c38 || o) {
                    let h = e.let("valid", !0);
                    t.block$data(h, ()=>_14(m11, h)
                    ), t.ok(h);
                } else e.if((0, ut.checkMissingProp)(t, r, m11)), (0, ut.reportMissingProp)(t, m11), e.else();
            }
            function d30() {
                e.forOf("prop", s, (m12)=>{
                    t.setParams({
                        missingProperty: m12
                    }), e.if((0, ut.noPropertyInData)(e, n128, m12, i.ownProperties), ()=>t.error()
                    );
                });
            }
            function _14(m13, h) {
                t.setParams({
                    missingProperty: m13
                }), e.forOf(m13, s, ()=>{
                    e.assign(h, (0, ut.propertyInData)(e, n128, m13, i.ownProperties)), e.if((0, lt.not)(h), ()=>{
                        t.error(), e.break();
                    });
                }, lt.nil);
            }
        }
    };
    Qr1.default = ru;
});
var ro = $1((Xr)=>{
    "use strict";
    Object.defineProperty(Xr, "__esModule", {
        value: !0
    });
    var dt = S1(), su = {
        message ({ keyword: t , schemaCode: e  }) {
            let r = t === "maxItems" ? "more" : "fewer";
            return (0, dt.str)`must NOT have ${r} than ${e} items`;
        },
        params: ({ schemaCode: t  })=>(0, dt._)`{limit: ${t}}`
    }, nu = {
        keyword: [
            "maxItems",
            "minItems"
        ],
        type: "array",
        schemaType: "number",
        $data: !0,
        error: su,
        code (t) {
            let { keyword: e , data: r , schemaCode: s  } = t, n129 = e === "maxItems" ? dt.operators.GT : dt.operators.LT;
            t.fail$data((0, dt._)`${r}.length ${n129} ${s}`);
        }
    };
    Xr.default = nu;
});
var Vt = $1((Yr)=>{
    "use strict";
    Object.defineProperty(Yr, "__esModule", {
        value: !0
    });
    var so = __3$;
    so.code = 'require("ajv/dist/runtime/equal").default';
    Yr.default = so;
});
var no = $1((es)=>{
    "use strict";
    Object.defineProperty(es, "__esModule", {
        value: !0
    });
    var Zr1 = Ze(), U = S1(), ou = T(), au = Vt(), iu = {
        message: ({ params: { i: t , j: e  }  })=>(0, U.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`
        ,
        params: ({ params: { i: t , j: e  }  })=>(0, U._)`{i: ${t}, j: ${e}}`
    }, cu = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: !0,
        error: iu,
        code (t) {
            let { gen: e , data: r , $data: s , schema: n130 , parentSchema: o , schemaCode: a84 , it: i  } = t;
            if (!s && !n130) return;
            let c39 = e.let("valid"), u37 = o.items ? (0, Zr1.getSchemaTypes)(o.items) : [];
            t.block$data(c39, l28, (0, U._)`${a84} === false`), t.ok(c39);
            function l28() {
                let h = e.let("i", (0, U._)`${r}.length`), f = e.let("j");
                t.setParams({
                    i: h,
                    j: f
                }), e.assign(c39, !0), e.if((0, U._)`${h} > 1`, ()=>(d31() ? _15 : m14)(h, f)
                );
            }
            function d31() {
                return u37.length > 0 && !u37.some((h)=>h === "object" || h === "array"
                );
            }
            function _15(h, f) {
                let p14 = e.name("item"), y17 = (0, Zr1.checkDataTypes)(u37, p14, i.opts.strictNumbers, Zr1.DataType.Wrong), j = e.const("indices", (0, U._)`{}`);
                e.for((0, U._)`;${h}--;`, ()=>{
                    e.let(p14, (0, U._)`${r}[${h}]`), e.if(y17, (0, U._)`continue`), u37.length > 1 && e.if((0, U._)`typeof ${p14} == "string"`, (0, U._)`${p14} += "_"`), e.if((0, U._)`typeof ${j}[${p14}] == "number"`, ()=>{
                        e.assign(f, (0, U._)`${j}[${p14}]`), t.error(), e.assign(c39, !1).break();
                    }).code((0, U._)`${j}[${p14}] = ${h}`);
                });
            }
            function m14(h, f) {
                let p15 = (0, ou.useFunc)(e, au.default), y18 = e.name("outer");
                e.label(y18).for((0, U._)`;${h}--;`, ()=>e.for((0, U._)`${f} = ${h}; ${f}--;`, ()=>e.if((0, U._)`${p15}(${r}[${h}], ${r}[${f}])`, ()=>{
                            t.error(), e.assign(c39, !1).break(y18);
                        })
                    )
                );
            }
        }
    };
    es.default = cu;
});
var oo = $1((rs)=>{
    "use strict";
    Object.defineProperty(rs, "__esModule", {
        value: !0
    });
    var ts = S1(), uu = T(), lu = Vt(), du = {
        message: "must be equal to constant",
        params: ({ schemaCode: t  })=>(0, ts._)`{allowedValue: ${t}}`
    }, fu = {
        keyword: "const",
        $data: !0,
        error: du,
        code (t) {
            let { gen: e , data: r , $data: s , schemaCode: n131 , schema: o  } = t;
            s || o && typeof o == "object" ? t.fail$data((0, ts._)`!${(0, uu.useFunc)(e, lu.default)}(${r}, ${n131})`) : t.fail((0, ts._)`${o} !== ${r}`);
        }
    };
    rs.default = fu;
});
var ao = $1((ss)=>{
    "use strict";
    Object.defineProperty(ss, "__esModule", {
        value: !0
    });
    var ft = S1(), hu = T(), pu = Vt(), mu = {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: t  })=>(0, ft._)`{allowedValues: ${t}}`
    }, yu = {
        keyword: "enum",
        schemaType: "array",
        $data: !0,
        error: mu,
        code (t) {
            let { gen: e , data: r , $data: s , schema: n132 , schemaCode: o , it: a85  } = t;
            if (!s && n132.length === 0) throw new Error("enum must have non-empty array");
            let i = n132.length >= a85.opts.loopEnum, c40, u38 = ()=>c40 ?? (c40 = (0, hu.useFunc)(e, pu.default))
            , l29;
            if (i || s) l29 = e.let("valid"), t.block$data(l29, d32);
            else {
                if (!Array.isArray(n132)) throw new Error("ajv implementation error");
                let m15 = e.const("vSchema", o);
                l29 = (0, ft.or)(...n132.map((h, f)=>_16(m15, f)
                ));
            }
            t.pass(l29);
            function d32() {
                e.assign(l29, !1), e.forOf("v", o, (m16)=>e.if((0, ft._)`${u38()}(${r}, ${m16})`, ()=>e.assign(l29, !0).break()
                    )
                );
            }
            function _16(m17, h) {
                let f = n132[h];
                return typeof f == "object" && f !== null ? (0, ft._)`${u38()}(${r}, ${m17}[${h}])` : (0, ft._)`${r} === ${f}`;
            }
        }
    };
    ss.default = yu;
});
var io = $1((ns)=>{
    "use strict";
    Object.defineProperty(ns, "__esModule", {
        value: !0
    });
    var _u = Wn(), $u = Bn(), gu = Yn(), vu = Zn(), wu = eo(), bu = to(), Eu = ro(), Pu = no(), Su = oo(), Nu = ao(), ku = [
        _u.default,
        $u.default,
        gu.default,
        vu.default,
        wu.default,
        bu.default,
        Eu.default,
        Pu.default,
        {
            keyword: "type",
            schemaType: [
                "string",
                "array"
            ]
        },
        {
            keyword: "nullable",
            schemaType: "boolean"
        },
        Su.default,
        Nu.default
    ];
    ns.default = ku;
});
var as = $1((ht)=>{
    "use strict";
    Object.defineProperty(ht, "__esModule", {
        value: !0
    });
    ht.validateAdditionalItems = void 0;
    var je = S1(), os = T(), ju = {
        message: ({ params: { len: t  }  })=>(0, je.str)`must NOT have more than ${t} items`
        ,
        params: ({ params: { len: t  }  })=>(0, je._)`{limit: ${t}}`
    }, qu = {
        keyword: "additionalItems",
        type: "array",
        schemaType: [
            "boolean",
            "object"
        ],
        before: "uniqueItems",
        error: ju,
        code (t) {
            let { parentSchema: e , it: r  } = t, { items: s  } = e;
            if (!Array.isArray(s)) {
                (0, os.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
                return;
            }
            co(t, s);
        }
    };
    function co(t, e) {
        let { gen: r , schema: s , data: n133 , keyword: o , it: a86  } = t;
        a86.items = !0;
        let i = r.const("len", (0, je._)`${n133}.length`);
        if (s === !1) t.setParams({
            len: e.length
        }), t.pass((0, je._)`${i} <= ${e.length}`);
        else if (typeof s == "object" && !(0, os.alwaysValidSchema)(a86, s)) {
            let u39 = r.var("valid", (0, je._)`${i} <= ${e.length}`);
            r.if((0, je.not)(u39), ()=>c41(u39)
            ), t.ok(u39);
        }
        function c41(u40) {
            r.forRange("i", e.length, i, (l30)=>{
                t.subschema({
                    keyword: o,
                    dataProp: l30,
                    dataPropType: os.Type.Num
                }, u40), a86.allErrors || r.if((0, je.not)(u40), ()=>r.break()
                );
            });
        }
    }
    ht.validateAdditionalItems = co;
    ht.default = qu;
});
var is = $1((pt)=>{
    "use strict";
    Object.defineProperty(pt, "__esModule", {
        value: !0
    });
    pt.validateTuple = void 0;
    var uo = S1(), Kt = T(), Ou = Q1(), Tu = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "array",
            "boolean"
        ],
        before: "uniqueItems",
        code (t) {
            let { schema: e , it: r  } = t;
            if (Array.isArray(e)) return lo(t, "additionalItems", e);
            r.items = !0, !(0, Kt.alwaysValidSchema)(r, e) && t.ok((0, Ou.validateArray)(t));
        }
    };
    function lo(t, e, r = t.schema) {
        let { gen: s , parentSchema: n134 , data: o , keyword: a87 , it: i  } = t;
        l31(n134), i.opts.unevaluated && r.length && i.items !== !0 && (i.items = Kt.mergeEvaluated.items(s, r.length, i.items));
        let c42 = s.name("valid"), u41 = s.const("len", (0, uo._)`${o}.length`);
        r.forEach((d33, _17)=>{
            (0, Kt.alwaysValidSchema)(i, d33) || (s.if((0, uo._)`${u41} > ${_17}`, ()=>t.subschema({
                    keyword: a87,
                    schemaProp: _17,
                    dataProp: _17
                }, c42)
            ), t.ok(c42));
        });
        function l31(d34) {
            let { opts: _18 , errSchemaPath: m18  } = i, h = r.length, f = h === d34.minItems && (h === d34.maxItems || d34[e] === !1);
            if (_18.strictTuples && !f) {
                let p16 = `"${a87}" is ${h}-tuple, but minItems or maxItems/${e} are not specified or different at path "${m18}"`;
                (0, Kt.checkStrictMode)(i, p16, _18.strictTuples);
            }
        }
    }
    pt.validateTuple = lo;
    pt.default = Tu;
});
var fo = $1((cs)=>{
    "use strict";
    Object.defineProperty(cs, "__esModule", {
        value: !0
    });
    var Ru = is(), Cu = {
        keyword: "prefixItems",
        type: "array",
        schemaType: [
            "array"
        ],
        before: "uniqueItems",
        code: (t)=>(0, Ru.validateTuple)(t, "items")
    };
    cs.default = Cu;
});
var po = $1((us)=>{
    "use strict";
    Object.defineProperty(us, "__esModule", {
        value: !0
    });
    var ho = S1(), Iu = T(), Mu = Q1(), Au = as(), Du = {
        message: ({ params: { len: t  }  })=>(0, ho.str)`must NOT have more than ${t} items`
        ,
        params: ({ params: { len: t  }  })=>(0, ho._)`{limit: ${t}}`
    }, Vu = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        error: Du,
        code (t) {
            let { schema: e , parentSchema: r , it: s  } = t, { prefixItems: n135  } = r;
            s.items = !0, !(0, Iu.alwaysValidSchema)(s, e) && (n135 ? (0, Au.validateAdditionalItems)(t, n135) : t.ok((0, Mu.validateArray)(t)));
        }
    };
    us.default = Vu;
});
var mo = $1((ls)=>{
    "use strict";
    Object.defineProperty(ls, "__esModule", {
        value: !0
    });
    var Y = S1(), Ut = T(), Ku = {
        message: ({ params: { min: t , max: e  }  })=>e === void 0 ? (0, Y.str)`must contain at least ${t} valid item(s)` : (0, Y.str)`must contain at least ${t} and no more than ${e} valid item(s)`
        ,
        params: ({ params: { min: t , max: e  }  })=>e === void 0 ? (0, Y._)`{minContains: ${t}}` : (0, Y._)`{minContains: ${t}, maxContains: ${e}}`
    }, Uu = {
        keyword: "contains",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        trackErrors: !0,
        error: Ku,
        code (t) {
            let { gen: e , schema: r , parentSchema: s , data: n136 , it: o  } = t, a88, i, { minContains: c43 , maxContains: u42  } = s;
            o.opts.next ? (a88 = c43 === void 0 ? 1 : c43, i = u42) : a88 = 1;
            let l32 = e.const("len", (0, Y._)`${n136}.length`);
            if (t.setParams({
                min: a88,
                max: i
            }), i === void 0 && a88 === 0) {
                (0, Ut.checkStrictMode)(o, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
                return;
            }
            if (i !== void 0 && a88 > i) {
                (0, Ut.checkStrictMode)(o, '"minContains" > "maxContains" is always invalid'), t.fail();
                return;
            }
            if ((0, Ut.alwaysValidSchema)(o, r)) {
                let f = (0, Y._)`${l32} >= ${a88}`;
                i !== void 0 && (f = (0, Y._)`${f} && ${l32} <= ${i}`), t.pass(f);
                return;
            }
            o.items = !0;
            let d35 = e.name("valid");
            i === void 0 && a88 === 1 ? m19(d35, ()=>e.if(d35, ()=>e.break()
                )
            ) : a88 === 0 ? (e.let(d35, !0), i !== void 0 && e.if((0, Y._)`${n136}.length > 0`, _19)) : (e.let(d35, !1), _19()), t.result(d35, ()=>t.reset()
            );
            function _19() {
                let f = e.name("_valid"), p17 = e.let("count", 0);
                m19(f, ()=>e.if(f, ()=>h(p17)
                    )
                );
            }
            function m19(f, p18) {
                e.forRange("i", 0, l32, (y19)=>{
                    t.subschema({
                        keyword: "contains",
                        dataProp: y19,
                        dataPropType: Ut.Type.Num,
                        compositeRule: !0
                    }, f), p18();
                });
            }
            function h(f) {
                e.code((0, Y._)`${f}++`), i === void 0 ? e.if((0, Y._)`${f} >= ${a88}`, ()=>e.assign(d35, !0).break()
                ) : (e.if((0, Y._)`${f} > ${i}`, ()=>e.assign(d35, !1).break()
                ), a88 === 1 ? e.assign(d35, !0) : e.if((0, Y._)`${f} >= ${a88}`, ()=>e.assign(d35, !0)
                ));
            }
        }
    };
    ls.default = Uu;
});
var $o = $1((ie)=>{
    "use strict";
    Object.defineProperty(ie, "__esModule", {
        value: !0
    });
    ie.validateSchemaDeps = ie.validatePropertyDeps = ie.error = void 0;
    var ds = S1(), Fu = T(), mt = Q1();
    ie.error = {
        message: ({ params: { property: t , depsCount: e , deps: r  }  })=>{
            let s = e === 1 ? "property" : "properties";
            return (0, ds.str)`must have ${s} ${r} when property ${t} is present`;
        },
        params: ({ params: { property: t , depsCount: e , deps: r , missingProperty: s  }  })=>(0, ds._)`{property: ${t},
    missingProperty: ${s},
    depsCount: ${e},
    deps: ${r}}`
    };
    var zu = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: ie.error,
        code (t) {
            let [e, r] = Lu(t);
            yo(t, e), _o(t, r);
        }
    };
    function Lu({ schema: t  }) {
        let e = {}, r = {};
        for(let s in t){
            if (s === "__proto__") continue;
            let n137 = Array.isArray(t[s]) ? e : r;
            n137[s] = t[s];
        }
        return [
            e,
            r
        ];
    }
    function yo(t, e = t.schema) {
        let { gen: r , data: s , it: n138  } = t;
        if (Object.keys(e).length === 0) return;
        let o = r.let("missing");
        for(let a89 in e){
            let i = e[a89];
            if (i.length === 0) continue;
            let c44 = (0, mt.propertyInData)(r, s, a89, n138.opts.ownProperties);
            t.setParams({
                property: a89,
                depsCount: i.length,
                deps: i.join(", ")
            }), n138.allErrors ? r.if(c44, ()=>{
                for (let u43 of i)(0, mt.checkReportMissingProp)(t, u43);
            }) : (r.if((0, ds._)`${c44} && (${(0, mt.checkMissingProp)(t, i, o)})`), (0, mt.reportMissingProp)(t, o), r.else());
        }
    }
    ie.validatePropertyDeps = yo;
    function _o(t, e = t.schema) {
        let { gen: r , data: s , keyword: n139 , it: o  } = t, a90 = r.name("valid");
        for(let i in e)(0, Fu.alwaysValidSchema)(o, e[i]) || (r.if((0, mt.propertyInData)(r, s, i, o.opts.ownProperties), ()=>{
            let c45 = t.subschema({
                keyword: n139,
                schemaProp: i
            }, a90);
            t.mergeValidEvaluated(c45, a90);
        }, ()=>r.var(a90, !0)
        ), t.ok(a90));
    }
    ie.validateSchemaDeps = _o;
    ie.default = zu;
});
var vo = $1((fs)=>{
    "use strict";
    Object.defineProperty(fs, "__esModule", {
        value: !0
    });
    var go = S1(), Gu = T(), xu = {
        message: "property name must be valid",
        params: ({ params: t  })=>(0, go._)`{propertyName: ${t.propertyName}}`
    }, Ju = {
        keyword: "propertyNames",
        type: "object",
        schemaType: [
            "object",
            "boolean"
        ],
        error: xu,
        code (t) {
            let { gen: e , schema: r , data: s , it: n140  } = t;
            if ((0, Gu.alwaysValidSchema)(n140, r)) return;
            let o = e.name("valid");
            e.forIn("key", s, (a91)=>{
                t.setParams({
                    propertyName: a91
                }), t.subschema({
                    keyword: "propertyNames",
                    data: a91,
                    dataTypes: [
                        "string"
                    ],
                    propertyName: a91,
                    compositeRule: !0
                }, o), e.if((0, go.not)(o), ()=>{
                    t.error(!0), n140.allErrors || e.break();
                });
            }), t.ok(o);
        }
    };
    fs.default = Ju;
});
var ps = $1((hs)=>{
    "use strict";
    Object.defineProperty(hs, "__esModule", {
        value: !0
    });
    var Ft = Q1(), se = S1(), Hu = le(), zt = T(), Wu = {
        message: "must NOT have additional properties",
        params: ({ params: t  })=>(0, se._)`{additionalProperty: ${t.additionalProperty}}`
    }, Bu = {
        keyword: "additionalProperties",
        type: [
            "object"
        ],
        schemaType: [
            "boolean",
            "object"
        ],
        allowUndefined: !0,
        trackErrors: !0,
        error: Wu,
        code (t) {
            let { gen: e , schema: r , parentSchema: s , data: n141 , errsCount: o , it: a92  } = t;
            if (!o) throw new Error("ajv implementation error");
            let { allErrors: i , opts: c46  } = a92;
            if (a92.props = !0, c46.removeAdditional !== "all" && (0, zt.alwaysValidSchema)(a92, r)) return;
            let u44 = (0, Ft.allSchemaProperties)(s.properties), l33 = (0, Ft.allSchemaProperties)(s.patternProperties);
            d36(), t.ok((0, se._)`${o} === ${Hu.default.errors}`);
            function d36() {
                e.forIn("key", n141, (p19)=>{
                    !u44.length && !l33.length ? h(p19) : e.if(_20(p19), ()=>h(p19)
                    );
                });
            }
            function _20(p20) {
                let y20;
                if (u44.length > 8) {
                    let j = (0, zt.schemaRefOrVal)(a92, s.properties, "properties");
                    y20 = (0, Ft.isOwnProperty)(e, j, p20);
                } else u44.length ? y20 = (0, se.or)(...u44.map((j)=>(0, se._)`${p20} === ${j}`
                )) : y20 = se.nil;
                return l33.length && (y20 = (0, se.or)(y20, ...l33.map((j)=>(0, se._)`${(0, Ft.usePattern)(t, j)}.test(${p20})`
                ))), (0, se.not)(y20);
            }
            function m20(p21) {
                e.code((0, se._)`delete ${n141}[${p21}]`);
            }
            function h(p22) {
                if (c46.removeAdditional === "all" || c46.removeAdditional && r === !1) {
                    m20(p22);
                    return;
                }
                if (r === !1) {
                    t.setParams({
                        additionalProperty: p22
                    }), t.error(), i || e.break();
                    return;
                }
                if (typeof r == "object" && !(0, zt.alwaysValidSchema)(a92, r)) {
                    let y21 = e.name("valid");
                    c46.removeAdditional === "failing" ? (f(p22, y21, !1), e.if((0, se.not)(y21), ()=>{
                        t.reset(), m20(p22);
                    })) : (f(p22, y21), i || e.if((0, se.not)(y21), ()=>e.break()
                    ));
                }
            }
            function f(p23, y22, j) {
                let N6 = {
                    keyword: "additionalProperties",
                    dataProp: p23,
                    dataPropType: zt.Type.Str
                };
                j === !1 && Object.assign(N6, {
                    compositeRule: !0,
                    createErrors: !1,
                    allErrors: !1
                }), t.subschema(N6, y22);
            }
        }
    };
    hs.default = Bu;
});
var Eo = $1((ys)=>{
    "use strict";
    Object.defineProperty(ys, "__esModule", {
        value: !0
    });
    var Qu = st(), wo = Q1(), ms = T(), bo = ps(), Xu = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code (t) {
            let { gen: e , schema: r , parentSchema: s , data: n142 , it: o  } = t;
            o.opts.removeAdditional === "all" && s.additionalProperties === void 0 && bo.default.code(new Qu.KeywordCxt(o, bo.default, "additionalProperties"));
            let a93 = (0, wo.allSchemaProperties)(r);
            for (let d2 of a93)o.definedProperties.add(d2);
            o.opts.unevaluated && a93.length && o.props !== !0 && (o.props = ms.mergeEvaluated.props(e, (0, ms.toHash)(a93), o.props));
            let i = a93.filter((d37)=>!(0, ms.alwaysValidSchema)(o, r[d37])
            );
            if (i.length === 0) return;
            let c47 = e.name("valid");
            for (let d110 of i)u45(d110) ? l34(d110) : (e.if((0, wo.propertyInData)(e, n142, d110, o.opts.ownProperties)), l34(d110), o.allErrors || e.else().var(c47, !0), e.endIf()), t.it.definedProperties.add(d110), t.ok(c47);
            function u45(d38) {
                return o.opts.useDefaults && !o.compositeRule && r[d38].default !== void 0;
            }
            function l34(d39) {
                t.subschema({
                    keyword: "properties",
                    schemaProp: d39,
                    dataProp: d39
                }, c47);
            }
        }
    };
    ys.default = Xu;
});
var ko = $1((_s)=>{
    "use strict";
    Object.defineProperty(_s, "__esModule", {
        value: !0
    });
    var Po = Q1(), Lt = S1(), So = T(), No = T(), Yu = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code (t) {
            let { gen: e , schema: r , data: s , parentSchema: n143 , it: o  } = t, { opts: a94  } = o, i = (0, Po.allSchemaProperties)(r), c48 = i.filter((f)=>(0, So.alwaysValidSchema)(o, r[f])
            );
            if (i.length === 0 || c48.length === i.length && (!o.opts.unevaluated || o.props === !0)) return;
            let u46 = a94.strictSchema && !a94.allowMatchingProperties && n143.properties, l35 = e.name("valid");
            o.props !== !0 && !(o.props instanceof Lt.Name) && (o.props = (0, No.evaluatedPropsToName)(e, o.props));
            let { props: d40  } = o;
            _21();
            function _21() {
                for (let f of i)u46 && m21(f), o.allErrors ? h(f) : (e.var(l35, !0), h(f), e.if(l35));
            }
            function m21(f) {
                for(let p24 in u46)new RegExp(f).test(p24) && (0, So.checkStrictMode)(o, `property ${p24} matches pattern ${f} (use allowMatchingProperties)`);
            }
            function h(f) {
                e.forIn("key", s, (p25)=>{
                    e.if((0, Lt._)`${(0, Po.usePattern)(t, f)}.test(${p25})`, ()=>{
                        let y23 = c48.includes(f);
                        y23 || t.subschema({
                            keyword: "patternProperties",
                            schemaProp: f,
                            dataProp: p25,
                            dataPropType: No.Type.Str
                        }, l35), o.opts.unevaluated && d40 !== !0 ? e.assign((0, Lt._)`${d40}[${p25}]`, !0) : !y23 && !o.allErrors && e.if((0, Lt.not)(l35), ()=>e.break()
                        );
                    });
                });
            }
        }
    };
    _s.default = Yu;
});
var jo = $1(($s)=>{
    "use strict";
    Object.defineProperty($s, "__esModule", {
        value: !0
    });
    var Zu = T(), el = {
        keyword: "not",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: !0,
        code (t) {
            let { gen: e , schema: r , it: s  } = t;
            if ((0, Zu.alwaysValidSchema)(s, r)) {
                t.fail();
                return;
            }
            let n144 = e.name("valid");
            t.subschema({
                keyword: "not",
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }, n144), t.failResult(n144, ()=>t.reset()
            , ()=>t.error()
            );
        },
        error: {
            message: "must NOT be valid"
        }
    };
    $s.default = el;
});
var qo = $1((gs)=>{
    "use strict";
    Object.defineProperty(gs, "__esModule", {
        value: !0
    });
    var tl = Q1(), rl = {
        keyword: "anyOf",
        schemaType: "array",
        trackErrors: !0,
        code: tl.validateUnion,
        error: {
            message: "must match a schema in anyOf"
        }
    };
    gs.default = rl;
});
var Oo = $1((vs)=>{
    "use strict";
    Object.defineProperty(vs, "__esModule", {
        value: !0
    });
    var Gt = S1(), sl = T(), nl = {
        message: "must match exactly one schema in oneOf",
        params: ({ params: t  })=>(0, Gt._)`{passingSchemas: ${t.passing}}`
    }, ol = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: nl,
        code (t) {
            let { gen: e , schema: r , parentSchema: s , it: n145  } = t;
            if (!Array.isArray(r)) throw new Error("ajv implementation error");
            if (n145.opts.discriminator && s.discriminator) return;
            let o = r, a95 = e.let("valid", !1), i = e.let("passing", null), c49 = e.name("_valid");
            t.setParams({
                passing: i
            }), e.block(u47), t.result(a95, ()=>t.reset()
            , ()=>t.error(!0)
            );
            function u47() {
                o.forEach((l36, d41)=>{
                    let _22;
                    (0, sl.alwaysValidSchema)(n145, l36) ? e.var(c49, !0) : _22 = t.subschema({
                        keyword: "oneOf",
                        schemaProp: d41,
                        compositeRule: !0
                    }, c49), d41 > 0 && e.if((0, Gt._)`${c49} && ${a95}`).assign(a95, !1).assign(i, (0, Gt._)`[${i}, ${d41}]`).else(), e.if(c49, ()=>{
                        e.assign(a95, !0), e.assign(i, d41), _22 && t.mergeEvaluated(_22, Gt.Name);
                    });
                });
            }
        }
    };
    vs.default = ol;
});
var To = $1((ws)=>{
    "use strict";
    Object.defineProperty(ws, "__esModule", {
        value: !0
    });
    var al = T(), il = {
        keyword: "allOf",
        schemaType: "array",
        code (t) {
            let { gen: e , schema: r , it: s  } = t;
            if (!Array.isArray(r)) throw new Error("ajv implementation error");
            let n146 = e.name("valid");
            r.forEach((o, a96)=>{
                if ((0, al.alwaysValidSchema)(s, o)) return;
                let i = t.subschema({
                    keyword: "allOf",
                    schemaProp: a96
                }, n146);
                t.ok(n146), t.mergeEvaluated(i);
            });
        }
    };
    ws.default = il;
});
var Io = $1((bs)=>{
    "use strict";
    Object.defineProperty(bs, "__esModule", {
        value: !0
    });
    var xt = S1(), Co = T(), cl = {
        message: ({ params: t  })=>(0, xt.str)`must match "${t.ifClause}" schema`
        ,
        params: ({ params: t  })=>(0, xt._)`{failingKeyword: ${t.ifClause}}`
    }, ul = {
        keyword: "if",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: !0,
        error: cl,
        code (t) {
            let { gen: e , parentSchema: r , it: s  } = t;
            r.then === void 0 && r.else === void 0 && (0, Co.checkStrictMode)(s, '"if" without "then" and "else" is ignored');
            let n147 = Ro(s, "then"), o = Ro(s, "else");
            if (!n147 && !o) return;
            let a97 = e.let("valid", !0), i = e.name("_valid");
            if (c50(), t.reset(), n147 && o) {
                let l37 = e.let("ifClause");
                t.setParams({
                    ifClause: l37
                }), e.if(i, u48("then", l37), u48("else", l37));
            } else n147 ? e.if(i, u48("then")) : e.if((0, xt.not)(i), u48("else"));
            t.pass(a97, ()=>t.error(!0)
            );
            function c50() {
                let l38 = t.subschema({
                    keyword: "if",
                    compositeRule: !0,
                    createErrors: !1,
                    allErrors: !1
                }, i);
                t.mergeEvaluated(l38);
            }
            function u48(l39, d42) {
                return ()=>{
                    let _23 = t.subschema({
                        keyword: l39
                    }, i);
                    e.assign(a97, i), t.mergeValidEvaluated(_23, a97), d42 ? e.assign(d42, (0, xt._)`${l39}`) : t.setParams({
                        ifClause: l39
                    });
                };
            }
        }
    };
    function Ro(t, e) {
        let r = t.schema[e];
        return r !== void 0 && !(0, Co.alwaysValidSchema)(t, r);
    }
    bs.default = ul;
});
var Mo = $1((Es)=>{
    "use strict";
    Object.defineProperty(Es, "__esModule", {
        value: !0
    });
    var ll = T(), dl = {
        keyword: [
            "then",
            "else"
        ],
        schemaType: [
            "object",
            "boolean"
        ],
        code ({ keyword: t , parentSchema: e , it: r  }) {
            e.if === void 0 && (0, ll.checkStrictMode)(r, `"${t}" without "if" is ignored`);
        }
    };
    Es.default = dl;
});
var Ao = $1((Ps)=>{
    "use strict";
    Object.defineProperty(Ps, "__esModule", {
        value: !0
    });
    var fl = as(), hl = fo(), pl = is(), ml = po(), yl = mo(), _l = $o(), $l = vo(), gl = ps(), vl = Eo(), wl = ko(), bl = jo(), El = qo(), Pl = Oo(), Sl = To(), Nl = Io(), kl = Mo();
    function jl(t = !1) {
        let e = [
            bl.default,
            El.default,
            Pl.default,
            Sl.default,
            Nl.default,
            kl.default,
            $l.default,
            gl.default,
            _l.default,
            vl.default,
            wl.default
        ];
        return t ? e.push(hl.default, ml.default) : e.push(fl.default, pl.default), e.push(yl.default), e;
    }
    Ps.default = jl;
});
var Do = $1((Ss)=>{
    "use strict";
    Object.defineProperty(Ss, "__esModule", {
        value: !0
    });
    var D = S1(), ql = {
        message: ({ schemaCode: t  })=>(0, D.str)`must match format "${t}"`
        ,
        params: ({ schemaCode: t  })=>(0, D._)`{format: ${t}}`
    }, Ol = {
        keyword: "format",
        type: [
            "number",
            "string"
        ],
        schemaType: "string",
        $data: !0,
        error: ql,
        code (t, e) {
            let { gen: r , data: s , $data: n148 , schema: o , schemaCode: a98 , it: i  } = t, { opts: c51 , errSchemaPath: u49 , schemaEnv: l40 , self: d43  } = i;
            if (!c51.validateFormats) return;
            n148 ? _24() : m22();
            function _24() {
                let h = r.scopeValue("formats", {
                    ref: d43.formats,
                    code: c51.code.formats
                }), f = r.const("fDef", (0, D._)`${h}[${a98}]`), p26 = r.let("fType"), y24 = r.let("format");
                r.if((0, D._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, ()=>r.assign(p26, (0, D._)`${f}.type || "string"`).assign(y24, (0, D._)`${f}.validate`)
                , ()=>r.assign(p26, (0, D._)`"string"`).assign(y24, f)
                ), t.fail$data((0, D.or)(j(), N7()));
                function j() {
                    return c51.strictSchema === !1 ? D.nil : (0, D._)`${a98} && !${y24}`;
                }
                function N7() {
                    let I4 = l40.$async ? (0, D._)`(${f}.async ? await ${y24}(${s}) : ${y24}(${s}))` : (0, D._)`${y24}(${s})`, w4 = (0, D._)`(typeof ${y24} == "function" ? ${I4} : ${y24}.test(${s}))`;
                    return (0, D._)`${y24} && ${y24} !== true && ${p26} === ${e} && !${w4}`;
                }
            }
            function m22() {
                let h = d43.formats[o];
                if (!h) {
                    j();
                    return;
                }
                if (h === !0) return;
                let [f, p27, y25] = N8(h);
                f === e && t.pass(I5());
                function j() {
                    if (c51.strictSchema === !1) {
                        d43.logger.warn(w5());
                        return;
                    }
                    throw new Error(w5());
                    function w5() {
                        return `unknown format "${o}" ignored in schema at path "${u49}"`;
                    }
                }
                function N8(w6) {
                    let ne = w6 instanceof RegExp ? (0, D.regexpCode)(w6) : c51.code.formats ? (0, D._)`${c51.code.formats}${(0, D.getProperty)(o)}` : void 0, qe = r.scopeValue("formats", {
                        key: o,
                        ref: w6,
                        code: ne
                    });
                    return typeof w6 == "object" && !(w6 instanceof RegExp) ? [
                        w6.type || "string",
                        w6.validate,
                        (0, D._)`${qe}.validate`
                    ] : [
                        "string",
                        w6,
                        qe
                    ];
                }
                function I5() {
                    if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
                        if (!l40.$async) throw new Error("async format in sync schema");
                        return (0, D._)`await ${y25}(${s})`;
                    }
                    return typeof p27 == "function" ? (0, D._)`${y25}(${s})` : (0, D._)`${y25}.test(${s})`;
                }
            }
        }
    };
    Ss.default = Ol;
});
var Vo = $1((Ns)=>{
    "use strict";
    Object.defineProperty(Ns, "__esModule", {
        value: !0
    });
    var Tl = Do(), Rl = [
        Tl.default
    ];
    Ns.default = Rl;
});
var Ko = $1((Ke)=>{
    "use strict";
    Object.defineProperty(Ke, "__esModule", {
        value: !0
    });
    Ke.contentVocabulary = Ke.metadataVocabulary = void 0;
    Ke.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples"
    ];
    Ke.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema"
    ];
});
var Fo = $1((ks)=>{
    "use strict";
    Object.defineProperty(ks, "__esModule", {
        value: !0
    });
    var Cl = Hn(), Il = io(), Ml = Ao(), Al = Vo(), Uo = Ko(), Dl = [
        Cl.default,
        Il.default,
        (0, Ml.default)(),
        Al.default,
        Uo.metadataVocabulary,
        Uo.contentVocabulary
    ];
    ks.default = Dl;
});
var zo = $1((yt)=>{
    "use strict";
    Object.defineProperty(yt, "__esModule", {
        value: !0
    });
    yt.DiscrError = void 0;
    var Vl;
    (function(t) {
        t.Tag = "tag", t.Mapping = "mapping";
    })(Vl = yt.DiscrError || (yt.DiscrError = {}));
});
var Go = $1((qs)=>{
    "use strict";
    Object.defineProperty(qs, "__esModule", {
        value: !0
    });
    var Ue = S1(), js = zo(), Lo = Tt(), Kl = T(), Ul = {
        message: ({ params: { discrError: t , tagName: e  }  })=>t === js.DiscrError.Tag ? `tag "${e}" must be string` : `value of tag "${e}" must be in oneOf`
        ,
        params: ({ params: { discrError: t , tag: e , tagName: r  }  })=>(0, Ue._)`{error: ${t}, tag: ${r}, tagValue: ${e}}`
    }, Fl = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: Ul,
        code (t) {
            let { gen: e , data: r , schema: s , parentSchema: n149 , it: o  } = t, { oneOf: a99  } = n149;
            if (!o.opts.discriminator) throw new Error("discriminator: requires discriminator option");
            let i = s.propertyName;
            if (typeof i != "string") throw new Error("discriminator: requires propertyName");
            if (s.mapping) throw new Error("discriminator: mapping is not supported");
            if (!a99) throw new Error("discriminator: requires oneOf keyword");
            let c52 = e.let("valid", !1), u50 = e.const("tag", (0, Ue._)`${r}${(0, Ue.getProperty)(i)}`);
            e.if((0, Ue._)`typeof ${u50} == "string"`, ()=>l41()
            , ()=>t.error(!1, {
                    discrError: js.DiscrError.Tag,
                    tag: u50,
                    tagName: i
                })
            ), t.ok(c52);
            function l41() {
                let m23 = _25();
                e.if(!1);
                for(let h in m23)e.elseIf((0, Ue._)`${u50} === ${h}`), e.assign(c52, d44(m23[h]));
                e.else(), t.error(!1, {
                    discrError: js.DiscrError.Mapping,
                    tag: u50,
                    tagName: i
                }), e.endIf();
            }
            function d44(m24) {
                let h = e.name("valid"), f = t.subschema({
                    keyword: "oneOf",
                    schemaProp: m24
                }, h);
                return t.mergeEvaluated(f, Ue.Name), h;
            }
            function _25() {
                var m25;
                let h = {}, f = y26(n149), p28 = !0;
                for(let I1 = 0; I1 < a99.length; I1++){
                    let w7 = a99[I1];
                    w7?.$ref && !(0, Kl.schemaHasRulesButRef)(w7, o.self.RULES) && (w7 = Lo.resolveRef.call(o.self, o.schemaEnv.root, o.baseId, w7?.$ref), w7 instanceof Lo.SchemaEnv && (w7 = w7.schema));
                    let ne = (m25 = w7?.properties) === null || m25 === void 0 ? void 0 : m25[i];
                    if (typeof ne != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${i}"`);
                    p28 = p28 && (f || y26(w7)), j(ne, I1);
                }
                if (!p28) throw new Error(`discriminator: "${i}" must be required`);
                return h;
                function y26({ required: I6  }) {
                    return Array.isArray(I6) && I6.includes(i);
                }
                function j(I7, w8) {
                    if (I7.const) N9(I7.const, w8);
                    else if (I7.enum) for (let ne of I7.enum)N9(ne, w8);
                    else throw new Error(`discriminator: "properties/${i}" must have "const" or "enum"`);
                }
                function N9(I8, w9) {
                    if (typeof I8 != "string" || I8 in h) throw new Error(`discriminator: "${i}" values must be unique strings`);
                    h[I8] = w9;
                }
            }
        }
    };
    qs.default = Fl;
});
var xo = $1((_f, zl)=>{
    zl.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "http://json-schema.org/draft-07/schema#",
        title: "Core schema meta-schema",
        definitions: {
            schemaArray: {
                type: "array",
                minItems: 1,
                items: {
                    $ref: "#"
                }
            },
            nonNegativeInteger: {
                type: "integer",
                minimum: 0
            },
            nonNegativeIntegerDefault0: {
                allOf: [
                    {
                        $ref: "#/definitions/nonNegativeInteger"
                    },
                    {
                        default: 0
                    }
                ]
            },
            simpleTypes: {
                enum: [
                    "array",
                    "boolean",
                    "integer",
                    "null",
                    "number",
                    "object",
                    "string"
                ]
            },
            stringArray: {
                type: "array",
                items: {
                    type: "string"
                },
                uniqueItems: !0,
                default: []
            }
        },
        type: [
            "object",
            "boolean"
        ],
        properties: {
            $id: {
                type: "string",
                format: "uri-reference"
            },
            $schema: {
                type: "string",
                format: "uri"
            },
            $ref: {
                type: "string",
                format: "uri-reference"
            },
            $comment: {
                type: "string"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            default: !0,
            readOnly: {
                type: "boolean",
                default: !1
            },
            examples: {
                type: "array",
                items: !0
            },
            multipleOf: {
                type: "number",
                exclusiveMinimum: 0
            },
            maximum: {
                type: "number"
            },
            exclusiveMaximum: {
                type: "number"
            },
            minimum: {
                type: "number"
            },
            exclusiveMinimum: {
                type: "number"
            },
            maxLength: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minLength: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            pattern: {
                type: "string",
                format: "regex"
            },
            additionalItems: {
                $ref: "#"
            },
            items: {
                anyOf: [
                    {
                        $ref: "#"
                    },
                    {
                        $ref: "#/definitions/schemaArray"
                    }
                ],
                default: !0
            },
            maxItems: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minItems: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            uniqueItems: {
                type: "boolean",
                default: !1
            },
            contains: {
                $ref: "#"
            },
            maxProperties: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minProperties: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            required: {
                $ref: "#/definitions/stringArray"
            },
            additionalProperties: {
                $ref: "#"
            },
            definitions: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            properties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            patternProperties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                propertyNames: {
                    format: "regex"
                },
                default: {}
            },
            dependencies: {
                type: "object",
                additionalProperties: {
                    anyOf: [
                        {
                            $ref: "#"
                        },
                        {
                            $ref: "#/definitions/stringArray"
                        }
                    ]
                }
            },
            propertyNames: {
                $ref: "#"
            },
            const: !0,
            enum: {
                type: "array",
                items: !0,
                minItems: 1,
                uniqueItems: !0
            },
            type: {
                anyOf: [
                    {
                        $ref: "#/definitions/simpleTypes"
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/definitions/simpleTypes"
                        },
                        minItems: 1,
                        uniqueItems: !0
                    }
                ]
            },
            format: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentEncoding: {
                type: "string"
            },
            if: {
                $ref: "#"
            },
            then: {
                $ref: "#"
            },
            else: {
                $ref: "#"
            },
            allOf: {
                $ref: "#/definitions/schemaArray"
            },
            anyOf: {
                $ref: "#/definitions/schemaArray"
            },
            oneOf: {
                $ref: "#/definitions/schemaArray"
            },
            not: {
                $ref: "#"
            }
        },
        default: !0
    };
});
var Os = $1((A5, Ho)=>{
    "use strict";
    Object.defineProperty(A5, "__esModule", {
        value: !0
    });
    A5.MissingRefError = A5.ValidationError = A5.CodeGen = A5.Name = A5.nil = A5.stringify = A5.str = A5._ = A5.KeywordCxt = void 0;
    var Ll = Fn(), Gl = Fo(), xl = Go(), Jo = xo(), Jl = [
        "/properties"
    ], Jt = "http://json-schema.org/draft-07/schema", Ht = class extends Ll.default {
        _addVocabularies() {
            super._addVocabularies(), Gl.default.forEach((e)=>this.addVocabulary(e)
            ), this.opts.discriminator && this.addKeyword(xl.default);
        }
        _addDefaultMetaSchema() {
            if (super._addDefaultMetaSchema(), !this.opts.meta) return;
            let e = this.opts.$data ? this.$dataMetaSchema(Jo, Jl) : Jo;
            this.addMetaSchema(e, Jt, !1), this.refs["http://json-schema.org/schema"] = Jt;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Jt) ? Jt : void 0);
        }
    };
    Ho.exports = A5 = Ht;
    Object.defineProperty(A5, "__esModule", {
        value: !0
    });
    A5.default = Ht;
    var Hl = st();
    Object.defineProperty(A5, "KeywordCxt", {
        enumerable: !0,
        get: function() {
            return Hl.KeywordCxt;
        }
    });
    var Fe = S1();
    Object.defineProperty(A5, "_", {
        enumerable: !0,
        get: function() {
            return Fe._;
        }
    });
    Object.defineProperty(A5, "str", {
        enumerable: !0,
        get: function() {
            return Fe.str;
        }
    });
    Object.defineProperty(A5, "stringify", {
        enumerable: !0,
        get: function() {
            return Fe.stringify;
        }
    });
    Object.defineProperty(A5, "nil", {
        enumerable: !0,
        get: function() {
            return Fe.nil;
        }
    });
    Object.defineProperty(A5, "Name", {
        enumerable: !0,
        get: function() {
            return Fe.Name;
        }
    });
    Object.defineProperty(A5, "CodeGen", {
        enumerable: !0,
        get: function() {
            return Fe.CodeGen;
        }
    });
    var Wl = jt();
    Object.defineProperty(A5, "ValidationError", {
        enumerable: !0,
        get: function() {
            return Wl.default;
        }
    });
    var Bl = qt();
    Object.defineProperty(A5, "MissingRefError", {
        enumerable: !0,
        get: function() {
            return Bl.default;
        }
    });
});
var fe = {};
ra1(fe, {
    CodeGen: ()=>Zl
    ,
    KeywordCxt: ()=>od
    ,
    MissingRefError: ()=>Xl
    ,
    Name: ()=>ed
    ,
    ValidationError: ()=>Yl
    ,
    _: ()=>nd
    ,
    __esModule: ()=>Ql
    ,
    default: ()=>id
    ,
    nil: ()=>td
    ,
    str: ()=>sd
    ,
    stringify: ()=>rd
});
var Bo = Cs(Os());
he(fe, Cs(Os()));
var Ql = !0, { MissingRefError: Xl , ValidationError: Yl , CodeGen: Zl , Name: ed , nil: td , stringify: rd , str: sd , _: nd , KeywordCxt: od  } = Bo, { default: Wo , ...ad } = Bo, id = Wo !== void 0 ? Wo : ad;
function schemaValidator(obj, schema) {
    const ajv = new id();
    const validate = ajv.compile(schema);
    const isValid = validate(obj);
    if (!isValid) {
        const errorMessage = `Validation failed: ${ajv.errorsText(validate.errors)}`;
        throw new Error(errorMessage);
    }
    return isValid;
}
function isQuery(item) {
    return typeof item === "object" && item !== null;
}
function matchQuery(item, query) {
    for(const key in query){
        if (typeof query[key] === "object" && query[key] !== null) {
            const nestedItem = item[key];
            if (isQuery(nestedItem)) {
                if (!matchQuery(nestedItem, query[key])) {
                    return false;
                }
            } else {
                throw new Error(`Expected ${key} to be an object.`);
            }
        } else {
            const keys = key.split(".");
            let value = item;
            for (const k of keys){
                value = value[k];
                if (value === undefined) {
                    return false;
                }
            }
            if (value !== query[key]) {
                return false;
            }
        }
    }
    return true;
}
function $find(data, queryObj) {
    if (!queryObj) {
        return data.collection;
    }
    const filteredData = data.collection.filter((item)=>{
        return matchQuery(item, queryObj);
    });
    return filteredData;
}
function $findOne(data, queryObj) {
    if (!queryObj) {
        return data.collection;
    }
    const element = data.collection.find((item)=>{
        return matchQuery(item, queryObj);
    });
    return element;
}
function $insert(data, document) {
    if (!Array.isArray(data.collection)) {
        return {
            success: false,
            errorMessage: "Invalid input data: collection is not an array",
            collection: {
                collection: data.collection
            }
        };
    }
    if (typeof document !== "object" || document === null) {
        return {
            success: false,
            errorMessage: "Invalid input data: document is not an object",
            collection: {
                collection: data.collection
            }
        };
    }
    let newCollection;
    if (Array.isArray(document)) {
        newCollection = [
            ...data.collection,
            ...document
        ];
    } else {
        newCollection = [
            ...data.collection,
            document
        ];
    }
    return {
        success: true,
        collection: {
            collection: newCollection
        }
    };
}
function $update(data, queryObj, updateObj) {
    const index = data.collection.findIndex((item)=>{
        return matchQuery(item, queryObj);
    });
    if (index === -1) {
        throw new Error(`Object not found in collection`);
    }
    const updatedItem = {
        ...data.collection[index]
    };
    for(const key in updateObj){
        const keys = key.split(".");
        let value = updatedItem;
        for(let i = 0; i < keys.length - 1; i++){
            value = value[keys[i]];
            if (value === undefined) {
                throw new Error(`Property not found: ${key}`);
            }
        }
        value[keys[keys.length - 1]] = updateObj[key];
    }
    data.collection[index] = updatedItem;
    return {
        collection: data.collection
    };
}
function $delete(data, filter) {
    try {
        const filteredData = data.collection.filter((item)=>!matchQuery(item, filter)
        );
        return {
            collection: filteredData
        };
    } catch (err) {
        console.error(err);
        return {
            collection: data.collection
        };
    }
}
function $drop(data) {
    try {
        return {
            collection: []
        };
    } catch (err) {
        console.error(err);
        return {
            collection: data.collection
        };
    }
}
function isFileExistsSync(path) {
    try {
        const stats = Deno.statSync(path);
        return stats.isFile;
    } catch (e) {
        return false;
    }
}
function createJsonFile(data, path) {
    try {
        const fileExists = isFileExistsSync(path);
        if (fileExists) {
            return true;
        }
        writeJsonToFile(data, path);
        return false;
    } catch (e) {
        return e.message;
    }
}
function writeJsonToFile(data, path) {
    try {
        const encoder = new TextEncoder();
        Deno.writeFileSync(path, encoder.encode(JSON.stringify(data)));
        return false;
    } catch (error) {
        return `Error writing JSON to file: ${error.message}`;
    }
}
async function readJsonFile(path) {
    try {
        const jsonString = await Deno.readTextFile(path);
        const data = JSON.parse(jsonString);
        return data;
    } catch (error) {
        throw new Error(`Error reading JSON file: ${error.message}`);
    }
}
function createFileDB(schema, data1, path) {
    try {
        schemaValidator(data1, schema);
        createJsonFile(data1, path);
        return {
            schema,
            data: data1,
            path,
            async find (queryObj) {
                const data = await readJsonFile(this.getPath());
                return $find(data, queryObj);
            },
            async findOne (queryObj) {
                const data = await readJsonFile(this.getPath());
                return $findOne(data, queryObj);
            },
            async insert (document) {
                const data = await readJsonFile(this.getPath());
                const result = $insert(data, document);
                if (result.success) {
                    try {
                        await writeJsonToFile(result.collection, this.getPath());
                        return 0;
                    } catch (error) {
                        console.error("Error inserting document into collection:", error);
                        return -1;
                    }
                }
                return -1;
            },
            async update (queryObject, updateObject) {
                try {
                    const data = await readJsonFile(this.getPath());
                    const result = $update(data, queryObject, updateObject);
                    await writeJsonToFile(result, this.getPath());
                    return 0;
                } catch (error) {
                    console.error("Error updating document in collection:", error);
                    return -1;
                }
            },
            async delete (queryObject) {
                try {
                    const data = await readJsonFile(this.getPath());
                    const result = $delete(data, queryObject);
                    await writeJsonToFile(result, this.getPath());
                    return 0;
                } catch (error) {
                    console.error("Error deleting document in collection:", error);
                    return -1;
                }
            },
            async drop () {
                try {
                    const data = await readJsonFile(this.getPath());
                    const result = $drop(data);
                    await writeJsonToFile(result, this.getPath());
                    return 0;
                } catch (error) {
                    console.error("Error dropping all documents in collection:", error);
                    return -1;
                }
            },
            getPath () {
                return this.path;
            },
            async collection () {
                return await readJsonFile(this.getPath());
            }
        };
    } catch (error) {
        console.error("ERROR ", error);
        throw error;
    }
}
export { createFileDB as createFileDB };
