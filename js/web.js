!
function(n) {
	var r = {};
	function o(t) {
		if (r[t]) return r[t].exports;
		var e = r[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return n[t].call(e.exports, e, e.exports, o),
		e.l = !0,
		e.exports
	}
	o.m = n,
	o.c = r,
	o.d = function(t, e, n) {
		o.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	},
	o.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	},
	o.t = function(e, t) {
		if (1 & t && (e = o(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (o.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r,
		function(t) {
			return e[t]
		}.bind(null, r));
		return n
	},
	o.n = function(t) {
		var e = t && t.__esModule ?
		function() {
			return t["default"]
		}: function() {
			return t
		};
		return o.d(e, "a", e),
		e
	},
	o.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	},
	o.p = "",
	o(o.s = 20)
} ([function(t, e, n) {
	var r = n(3);
	t.exports = function o(e) {
		return function n(t) {
			return 0 === arguments.length || r(t) ? n: e.apply(this, arguments)
		}
	}
},
function(t, e, n) {
	var o = n(0),
	a = n(3);
	t.exports = function i(r) {
		return function t(e, n) {
			switch (arguments.length) {
			case 0:
				return t;
			case 1:
				return a(e) ? t: o(function(t) {
					return r(e, t)
				});
			default:
				return a(e) && a(n) ? t: a(e) ? o(function(t) {
					return r(t, n)
				}) : a(n) ? o(function(t) {
					return r(e, t)
				}) : r(e, n)
			}
		}
	}
},
function(t, e, n) {
	var r = n(0),
	o = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
	a = r("function" == typeof String.prototype.trim && !o.trim() && "​".trim() ?
	function a(t) {
		return t.trim()
	}: function a(t) {
		var e = new RegExp("^[" + o + "][" + o + "]*"),
		n = new RegExp("[" + o + "][" + o + "]*$");
		return t.replace(e, "").replace(n, "")
	});
	t.exports = a
},
function(t, e) {
	t.exports = function n(t) {
		return null != t && "object" == typeof t && !0 === t["@@functional/placeholder"]
	}
},
function(t, e) {
	t.exports = function n(t, u) {
		switch (t) {
		case 0:
			return function() {
				return u.apply(this, arguments)
			};
		case 1:
			return function(t) {
				return u.apply(this, arguments)
			};
		case 2:
			return function(t, e) {
				return u.apply(this, arguments)
			};
		case 3:
			return function(t, e, n) {
				return u.apply(this, arguments)
			};
		case 4:
			return function(t, e, n, r) {
				return u.apply(this, arguments)
			};
		case 5:
			return function(t, e, n, r, o) {
				return u.apply(this, arguments)
			};
		case 6:
			return function(t, e, n, r, o, a) {
				return u.apply(this, arguments)
			};
		case 7:
			return function(t, e, n, r, o, a, i) {
				return u.apply(this, arguments)
			};
		case 8:
			return function(t, e, n, r, o, a, i, s) {
				return u.apply(this, arguments)
			};
		case 9:
			return function(t, e, n, r, o, a, i, s, c) {
				return u.apply(this, arguments)
			};
		case 10:
			return function(t, e, n, r, o, a, i, s, c, l) {
				return u.apply(this, arguments)
			};
		default:
			throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
		}
	}
},
function(t, e) {
	t.exports = Array.isArray ||
	function(t) {
		return null != t && 0 <= t.length && "[object Array]" === Object.prototype.toString.call(t)
	}
},
function(t, e, n) {
	var r = n(0),
	o = n(78),
	a = n(79),
	i = r(function i(t) {
		return null != t && a(t, o(t))
	});
	t.exports = i
},
function(t, e) {
	t.exports = function n(t) {
		return "[object String]" === Object.prototype.toString.call(t)
	}
},
function(t, e) {
	t.exports = function n(t, e) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}
},
function(t, e, n) {
	var r = n(0),
	o = n(36),
	a = r(function a(t) {
		return o(t.length, t)
	});
	t.exports = a
},
function(t, e) {
	t.exports = function n(t) {
		return "[object Object]" === Object.prototype.toString.call(t)
	}
},
function(t, e, n) {
	var r = n(67),
	o = n(68),
	a = n(69);
	function i(t, e, n) {
		for (var r = n.next(); ! r.done;) {
			if ((e = t["@@transducer/step"](e, r.value)) && e["@@transducer/reduced"]) {
				e = e["@@transducer/value"];
				break
			}
			r = n.next()
		}
		return t["@@transducer/result"](e)
	}
	function s(t, e, n, r) {
		return t["@@transducer/result"](n[r](a(t["@@transducer/step"], t), e))
	}
	var c = "undefined" != typeof Symbol ? Symbol.iterator: "@@iterator";
	t.exports = function l(t, e, n) {
		if ("function" == typeof t && (t = o(t)), r(n)) return function a(t, e, n) {
			for (var r = 0,
			o = n.length; r < o;) {
				if ((e = t["@@transducer/step"](e, n[r])) && e["@@transducer/reduced"]) {
					e = e["@@transducer/value"];
					break
				}
				r += 1
			}
			return t["@@transducer/result"](e)
		} (t, e, n);
		if ("function" == typeof n["fantasy-land/reduce"]) return s(t, e, n, "fantasy-land/reduce");
		if (null != n[c]) return i(t, e, n[c]());
		if ("function" == typeof n.next) return i(t, e, n);
		if ("function" == typeof n.reduce) return s(t, e, n, "reduce");
		throw new TypeError("reduce: list must be array or iterable")
	}
},
function(t, e, n) {
	var r = n(0),
	a = n(8),
	i = n(13),
	s = !{
		toString: null
	}.propertyIsEnumerable("toString"),
	c = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
	l = function() {
		"use strict";
		return arguments.propertyIsEnumerable("length")
	} (),
	u = function u(t, e) {
		for (var n = 0; n < t.length;) {
			if (t[n] === e) return ! 0;
			n += 1
		}
		return ! 1
	},
	d = "function" != typeof Object.keys || l ? r(function d(t) {
		if (Object(t) !== t) return [];
		var e, n, r = [],
		o = l && i(t);
		for (e in t) ! a(e, t) || o && "length" === e || (r[r.length] = e);
		if (s) for (n = c.length - 1; 0 <= n;) a(e = c[n], t) && !u(r, e) && (r[r.length] = e),
		--n;
		return r
	}) : r(function d(t) {
		return Object(t) !== t ? [] : Object.keys(t)
	});
	t.exports = d
},
function(t, e, n) {
	var r = n(8),
	o = Object.prototype.toString,
	a = function() {
		return "[object Arguments]" === o.call(arguments) ?
		function(t) {
			return "[object Arguments]" === o.call(t)
		}: function(t) {
			return r("callee", t)
		}
	} ();
	t.exports = a
},
function(t, e, n) {
	var i = n(0),
	s = n(1),
	c = n(3);
	t.exports = function r(a) {
		return function t(n, r, o) {
			switch (arguments.length) {
			case 0:
				return t;
			case 1:
				return c(n) ? t: s(function(t, e) {
					return a(n, t, e)
				});
			case 2:
				return c(n) && c(r) ? t: c(n) ? s(function(t, e) {
					return a(t, r, e)
				}) : c(r) ? s(function(t, e) {
					return a(n, t, e)
				}) : i(function(t) {
					return a(n, r, t)
				});
			default:
				return c(n) && c(r) && c(o) ? t: c(n) && c(r) ? s(function(t, e) {
					return a(t, e, o)
				}) : c(n) && c(o) ? s(function(t, e) {
					return a(t, r, e)
				}) : c(r) && c(o) ? s(function(t, e) {
					return a(n, t, e)
				}) : c(n) ? i(function(t) {
					return a(t, r, o)
				}) : c(r) ? i(function(t) {
					return a(n, t, o)
				}) : c(o) ? i(function(t) {
					return a(n, r, t)
				}) : a(n, r, o)
			}
		}
	}
},
function(t, e, n) {
	var o = n(5);
	t.exports = function a(n, r) {
		return function() {
			var t = arguments.length;
			if (0 === t) return r();
			var e = arguments[t - 1];
			return o(e) || "function" != typeof e[n] ? r.apply(this, arguments) : e[n].apply(e, Array.prototype.slice.call(arguments, 0, t - 1))
		}
	}
},
function(t, e, n) {
	var r = n(1),
	o = n(64),
	a = n(66),
	i = n(10),
	s = n(11),
	c = n(70),
	l = n(12),
	u = r(o(["filter"], c,
	function(n, r) {
		return i(r) ? s(function(t, e) {
			return n(r[e]) && (t[e] = r[e]),
			t
		},
		{},
		l(r)) : a(n, r)
	}));
	t.exports = u
},
function(t, e, n) {
	var r = n(72),
	o = n(77);
	t.exports = function a() {
		if (0 === arguments.length) throw new Error("compose requires at least one argument");
		return r.apply(this, o(arguments))
	}
},
function(t, e, n) {
	var r = n(0)(function r(t) {
		return ! t
	});
	t.exports = r
},
function(t, e, n) {
	var r = n(0)(function r(t) {
		return null == t
	});
	t.exports = r
},
function(t, e, n) {
	n(21),
	n(22),
	n(23),
	n(24),
	n(25),
	n(26),
	n(27),
	n(28),
	n(29),
	n(30),
	n(31),
	n(32),
	n(33),
	n(34),
	n(35),
	n(96),
	n(38),
	n(39),
	n(40),
	n(41),
	n(42),
	n(43),
	n(44),
	n(45),
	n(46),
	n(47),
	n(48),
	n(49),
	n(50),
	n(51),
	n(52),
	n(53),
	n(54),
	n(55),
	n(56),
	n(57),
	n(58),
	n(59),
	n(60),
	n(61),
	n(62),
	n(63),
	n(86),
	n(87),
	n(88),
	n(89),
	n(90),
	n(91),
	n(92),
	n(93),
	n(94),
	n(95)
},
function(t, e) {
	var n, r, o, a, i, s, c, l, u, d, f, h, m, p, v, g, y, z, w, b, C, k, _, x, j, O, T, E, A, S;
	n = window,
	r = function r(t) {
		return Object.prototype.toString.call(t).slice(8, -1)
	},
	o = function o(t) {
		return function() {
			return ! t.apply(null, [].slice.apply(arguments, [0]))
		}
	},
	a = function a(t) {
		return null != t
	},
	i = Boolean,
	s = function s(t) {
		return ! i(t) || 0 == Math.abs(Number(t))
	},
	c = function c(t) {
		return function() {
			return t
		}
	},
	l = function l(e, n) {
		return e < 1 && (e = 1),
		"function" != typeof n ? null: function() {
			var t = [].slice.apply(arguments, [0, e]);
			return n.apply(null, t)
		}
	},
	u = function u(e) {
		return "function" != typeof e ? null: function() {
			var t = [].slice.apply(arguments, [0]).reverse();
			return e.apply(null, t)
		}
	},
	d = function d(e) {
		return "function" != typeof e ? null: function n() {
			var t = [].slice.apply(arguments, [0]);
			return t.length >= e.length ? e.apply(null, t) : function() {
				return n.apply(null, t.concat([].slice.apply(arguments, [0])))
			}
		}
	},
	f = d(function f(t, e) {
		return a(console) ? console.log(t, e) : (alert(t), alert(opt)),
		e
	}),
	h = function h() {
		var n = [].slice.apply(arguments, [0]).reverse();
		return function() {
			for (var t = [].slice.apply(arguments, [0]), e = 0; e < n.length; e++) {
				if ("function" != typeof n[e]) return f("the arguments is not a function", n[e]);
				t = n[e].apply(null, [].concat(t))
			}
			return t
		}
	},
	m = u(h),
	p = d(function p(t, e) {
		return t == e
	}),
	v = d(function v(t, e) {
		return e < t
	}),
	g = d(function(t, e) {
		return t < e
	}),
	y = d(function y(t, e) {
		return p(t, r(e))
	}),
	z = y("Array"),
	w = y("Object"),
	b = y("String"),
	C = y("Number"),
	k = y("Function"),
	_ = y("RegExp"),
	x = y("Boolean"),
	j = y("Date"),
	O = d(function O(t, e) {
		return Array.prototype.map.call(e, t)
	}),
	T = d(function T(t, e) {
		return Array.prototype.filter.call(e, t)
	}),
	E = d(function E(t, e) {
		return Array.prototype.reduce.call(e, t)
	}),
	A = function A(t) {
		var e;
		if (w(t)) for (var n in e = {},
		t) t.hasOwnProperty(n) && (e[n] = A(t[n]));
		else e = z(t) ? O(A, t) : t;
		return e
	},
	S = function S(t) {
		var e = [];
		if (w(t)) for (var n in t) t.hasOwnProperty(n) && (w(t[n]) ? e.push([n, S(t[n])]) : e.push([n, t[n]]));
		else e = e.concat(A(t));
		return e
	},
	n.orz = {
		trace: f,
		arity: l,
		reverseArg: u,
		curry: d,
		compose: h,
		flow: m,
		not: o,
		of: c,
		e: p,
		lt: v,
		gt: g,
		getType: r,
		isType: y,
		isArray: z,
		isObject: w,
		isString: b,
		isDate: j,
		isNumber: C,
		isBoolean: x,
		isFunction: k,
		isRegExp: _,
		isExist: a,
		isTrue: i,
		isEmpty: s,
		map: O,
		filter: T,
		reduce: E,
		deepCopy: A,
		toArray: S
	},
	orz && (orz.log = function() {
		var t = Array.prototype.slice.call(arguments, 0);
		window.console ? (console.info ? window.console.info: window.console.log).apply(null, t) : alert(t)
	}),
	orz && (orz.match = orz.curry(function(t, e) {
		return ! orz.isEmpty(e) && (String.prototype.match.call(e, t) || !1)
	}), orz.replace = orz.curry(function(t, e, n) {
		return orz.isEmpty(n) ? "": String.prototype.replace.call(n, t, e)
	}), orz.pad = orz.curry(function(t, e, n, r) {
		t = orz.isTrue(t),
		orz.isEmpty(e) && (e = "0"),
		e = String(e);
		var o = n - (r = String(r)).length;
		if (o <= 0) return r;
		for (var a = ""; a.length < o;) a += e;
		return a = a.substring(0, o),
		t ? r + a: a + r
	}), orz.lpad = orz.pad(!1), orz.rpad = orz.pad(!0), orz.strToObj = function(t) {
		var n = {};
		if (orz.isString(t)) {
			t = t.split("&");
			var r = new RegExp("([^=]+)=?([^=]*)", "g");
			t.map(function(t) {
				for (var e; (e = r.exec(t)) && (n[e[1]] = decodeURIComponent(e[2])), e;);
			})
		}
		return n
	}),
	orz && (orz.prop = orz.curry(function(t, e) {
		return orz.isObject(t) ? t[e] ? t[e] : orz.trace(e + " is not a prop in the object", t[e]) : orz.trace("the first argument is not an object", null)
	}), orz.props = function(t) {
		return orz.isObject(t) ? Object.keys(t) : orz.trace("the argument is not an object", [])
	},
	orz.objToStr = function(t) {
		var e = "";
		if (orz.isObject(t)) {
			for (var n in e = [], t) t.hasOwnProperty(n) && e.push(n + "=" + encodeURIComponent(orz.objToStr(t[n])));
			e = e.join("&")
		}
		return orz.isString(t) && (e = t),
		e
	},
	orz.joinObject = function(t, e) {
		var n = {};
		if (orz.isObject(t) && orz.isObject(e)) {
			for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
			n = t
		}
		return n
	}),
	orz && (orz.dateFormat = function(t) {
		if (orz.isDate(t)) return t;
		if (orz.isString(t)) {
			var e = orz.match(/^[012]\d{3}[-\/][01]\d[-\/][0-3]\d(\s+[0-2]\d(:[0-5]\d(:[0-5]\d)?)?)?/gi, t);
			return orz.isEmpty(e) ? new Date(t) : new Date(orz.replace(/\-/g, "/", e[0]))
		}
		return orz.isNumber(t) ? new Date(t) : new Date("error")
	},
	orz.dateDiff = function(t, e, n) {
		if (e = orz.dateFormat(e).getTime(), n = orz.dateFormat(n).getTime(), isNaN(e) || isNaN(n)) return orz.trace("date is error. ", null);
		var r = n - e,
		o = 1;
		switch (t) {
		case "week":
			o = 6048e5;
			break;
		case "day":
			o = 864e5;
			break;
		case "hour":
			o = 36e5;
			break;
		case "minute":
			o = 6e4;
			break;
		case "second":
			o = 1e3;
			break;
		default:
			o = 1
		}
		return Math.floor(r / o)
	}),
	orz && (orz.jsonEncode = function(t) {
		return JSON.stringify(t)
	},
	orz.jsonDecode = function(t) {
		var e;
		try {
			e = JSON.parse(t)
		} catch(n) {
			e = null,
			orz.trace("decode json error: ", n)
		}
		return e
	}),
	function() {
		if (orz) {
			var e = function e() {
				return navigator.userAgent
			},
			t = orz.not(orz.isEmpty);
			orz.getDevice = function() {
				var t = e();
				return - 1 != t.indexOf("MicroMessenger") ? "微信": -1 != t.indexOf("Android") ? "Android": -1 != t.indexOf("iPhone") ? 812 == screen.height ? "iPhone X": "iPhone": -1 != t.indexOf("iPad") ? "iPad": -1 != t.indexOf("Mac OS") ? "MacOS": -1 != t.indexOf("Safari") && -1 == t.indexOf("Chrome") ? "iPad": -1 != t.indexOf("Edge") ? "Edge浏览器": -1 != t.indexOf("360SE") ? "360浏览器": -1 != t.indexOf("360EE") ? "360浏览器": -1 != t.indexOf("Maxthon") ? "傲游浏览器": -1 != t.indexOf("Tencent") ? "QQ浏览器": -1 != t.indexOf("MetaSr") ? "搜狗浏览器": -1 != t.indexOf("Opera") ? "Opera浏览器": -1 != t.indexOf("Firefox") ? "Firefox浏览器": -1 != t.indexOf("Chrome") ? "Chrome浏览器": -1 != t.indexOf("Safari") ? "Safari浏览器": -1 != t.indexOf("MSIE") ? "IE浏览器": -1 != t.indexOf("like Gecko") ? -1 != t.indexOf("OPR") ? "Opara浏览器": "IE浏览器": void 0
			},
			orz.getDocument = function(t) {
				return function() {
					return document.documentElement[t] || document.body[t] || 0
				}
			},
			orz.isIos = orz.flow(e, orz.match(/(iPhone|iPod|ios|iPad)/i), t),
			orz.isAndroid = orz.flow(e, orz.match(/Android/i), t),
			orz.isMobile = orz.flow(e, orz.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i), t),
			orz.isPC = orz.not(orz.isMobile)
		}
	} (),
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
	function(t) {
		window.setTimeout(t, 1e3 / 60)
	},
	window.cancelAnimationFrame = window.cancelAnimationFrame || Window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame ||
	function(t) {
		window.clearTimeout(t)
	},
	orz && (orz.animate = function(t) {
		var e = 0,
		n = 0,
		r = 0,
		o = !1;
		function a() {
			t.call(this),
			e = requestAnimationFrame(a)
		}
		return {
			startTime: n,
			stopTime: r,
			start: function() {
				o || (n = new Date, e = requestAnimationFrame(a), o = !0)
			},
			stop: function() {
				r = new Date,
				e && cancelAnimationFrame(e),
				e = 0,
				o = !1
			}
		}
	}),
	orz && (orz.urlGet = orz.curry(function(t, e) {
		if (t) {
			for (var n, r, o = new RegExp("[?&]" + e + "=([^&]*)", "g"); (n = o.exec(t)) && (r = n), n;);
			if (orz.isArray(r)) return r[1]
		}
		return ""
	}), orz.urlGets = function(t) {
		var e = {};
		if (t) for (var n, r = new RegExp("[?&]([^=&]+)=?([^&]*)", "g"); (n = r.exec(t)) && (e[n[1]] = n[2]), n;);
		return e
	},
	orz.urlAnchor = function(t) {
		if (t) {
			var e = new RegExp("#([^?&]*)").exec(t);
			if (orz.isArray(e)) return e[1]
		}
		return ""
	},
	orz.urlBase = function(t) {
		return orz.isString(t) ? (t = orz.replace(/#.*/, "", t), t = orz.replace(/\?.*/, "", t)) : orz.trace("url is not a string", "")
	},
	orz.getUrl = function(t, e) {
		if (orz.isString(t)) {
			var n = orz.urlGets(t),
			r = orz.urlBase(t);
			orz.isString(e) && (e = orz.strToObj(e)),
			orz.isObject(e) && (n = orz.joinObject(n, e)),
			0 < Object.keys(n).length && (t = r + "?" + orz.objToStr(n))
		}
		return t
	}),
	orz && (orz.getCookie = function(t) {
		var e, n = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
		return (e = document.cookie.match(n)) ? decodeURIComponent(e[2]) : ""
	},
	orz.setCookie = function(t, e, n, r) {
		orz.isExist(n) || (n = 1),
		n -= 0,
		isNaN(n) && (n = 1),
		path = orz.isExist(r) ? "": ";path=/";
		var o = new Date;
		o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
		var a = "expires=" + o.toUTCString();
		document.cookie = t + "=" + encodeURIComponent(e) + "; " + a + path
	},
	orz.delCookie = function(t) {
		setCookie(t, "", -1)
	})
},
function(t, e) {
	var o;
	o = jQuery,
	window.email = "2650232288%40qq.com",
	orz.isNotEmpty = orz.not(orz.isEmpty),
	clientWidthBigThen = function(t) {
		var e = orz.not(orz.lt(t));
		return orz.flow(orz.getDocument("clientWidth"), e)
	},
	orz.lg = clientWidthBigThen(1330),
	orz.md = clientWidthBigThen(1024),
	orz.sm = clientWidthBigThen(768),
	orz.showLogin = function() {
		o('[data-modal-id="modal_login"]').eq(0).trigger("click")
	},
	orz.get_form_item_val = orz.curry(function(t, e) {
		var n = o(e).find('[name="' + t + '"]'),
		r = n.val();
		return r == orz.attr("placeholder", n) && (r = ""),
		r
	}),
	orz.inArray = function(t, e) {
		for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
		return - 1
	},
	orz.getDateDiff = function(t) {
		var e = orz.dateDiff("second", t, new Date),
		n = Math.floor(e / 86400),
		r = Math.floor(e % 86400 / 3600),
		o = Math.floor(e % 3600 / 60),
		a = orz.dateFormat(t),
		i = a.getFullYear(),
		s = orz.lpad("0", 2, a.getMonth() + 1),
		c = orz.lpad("0", 2, a.getDate());
		return 30 < n ? i + "-" + s + "-" + c: 3 < n ? s + "-" + c: 0 < n ? n + "天前": 0 < r ? r + "小时前": 0 < o ? o + "分钟前": e < 0 ? "预计于：" + i + "-" + s + "-" + c + "发表": "刚刚发表"
	},
	orz.wrong = function() {
		return ! 1
	}
},
function(t, e) {
	jQuery,
	orz.debounce = function a(n, r) {
		var o = null;
		return function() {
			var t = this,
			e = arguments;
			clearTimeout(o),
			o = setTimeout(function() {
				n.apply(t, e)
			},
			r)
		}
	}
},
function(t, e) {
	jQuery,
	orz.scroll = function(e) {
		var n = !1;
		return function(t) {
			n || (window.requestAnimationFrame(function(t) {
				e.call(t),
				n = !1
			}), n = !0)
		}
	}
},
function(t, e) {
	orz._get = function(t) {
		var e = location.search;
		if (e) {
			for (var n, r, o = new RegExp(t + "=([^&]*)", "g"); (n = o.exec(e)) && (r = n), n;);
			if (orz.isArray(r)) return r[1]
		}
		return null
	},
	orz.currentPageUrl = function() {
		var t = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port: "") + window.location.pathname;
		return t = orz.replace(/\/page\/.*$/, "", t)
	}
},
function(t, e) {
	var r;
	r = jQuery,
	orz.attr = orz.curry(function(t, e) {
		return r(e).attr("data-" + t)
	}),
	orz.setAttr = orz.curry(function(t, e, n) {
		return r(n).attr("data-" + t, e)
	}),
	orz.attrEq = orz.curry(function(t, e, n) {
		return orz.attr(t, n) == e
	}),
	orz.addClass = orz.curry(function(t, e) {
		return r(e).addClass(t)
	}),
	orz.removeClass = orz.curry(function(t, e) {
		return r(e).removeClass(t)
	})
},
function(t, e) {
	var o;
	o = jQuery,
	orz.click = orz.curry(function(t, e) {
		if (orz.isArray(t)) for (var n = 0; n < t.length; n++) orz.isFunction(t[n]) && o("body").on("click", e, t[n]);
		else orz.isFunction(t) && o("body").on("click", e, t)
	}),
	orz.outClick = orz.curry(function(e, n) {
		o("body").on("click",
		function(t) {
			t = t || window.event;
			0 == o(t.target).closest(n).length && e.apply(o(n))
		})
	}),
	orz.hover = orz.curry(function(t, e, n) {
		if (orz.isArray(t)) for (var r = 0; r < t.length; r++) orz.isFunction(t[r]) && o("body").on("mouseenter", n, t[r]);
		else orz.isFunction(t) && o("body").on("mouseenter", n, t);
		if (orz.isArray(e)) for (r = 0; r < e.length; r++) orz.isFunction(e[r]) && o("body").on("mouseleave", n, e[r]);
		else orz.isFunction(e) && o("body").on("mouseleave", n, e)
	}),
	orz.click(function() {
		return ! 1
	},
	".disabled")
},
function(t, e) { !
	function(o) { !
		function n() {
			o(".modal-mark").length < 1 && o("body").append('<div class="mark modal-mark"></div>')
		} ();
		var a = orz.attr("modal-id"),
		i = orz.attr("modal-mask"),
		s = orz.attr("modal-login"),
		c = orz.attr("mark-class");
		var t = orz.click(function l() {
			var t = a(this),
			e = i(this),
			n = s(this),
			r = c(this);
			if (t) return "need" != n || orz.currentUser ? ("no" != e && o(".modal-mark").addClass("modal-show"), o("#" + t).trigger("modal.show", o(this)), o("#" + t).addClass("modal-show"), r && o(".modal-mark").addClass(r)) : o('[data-modal-id="modal_login"]').trigger("click"),
			!1
		}),
		e = orz.click(function r() {
			return o(".modal-show").removeClass("modal-show"),
			o(".modal-show").trigger("modal.close"),
			o(".modal-mark").attr("class", "modal-mark"),
			o("body").removeClass("hideScroll"),
			o("body").trigger("modal.close"),
			!1
		});
		t(".modal-open"),
		e(".modal-close"),
		e(".modal-mark"),
		o("body").on("click", ".modal-part",
		function(t) {
			o(t.target).hasClass("modal-part") && o(this).find(".modal-close").trigger("click")
		})
	} (jQuery)
},
function(t, e) {
	jQuery,
	orz.pending = orz.setAttr("status", "pending"),
	orz.done = orz.setAttr("status", "done"),
	orz.disable = orz.setAttr("status", "disable"),
	orz.enable = orz.setAttr("status", "enable"),
	orz.init = orz.setAttr("init", "done"),
	orz.isPending = orz.attrEq("status", "pending"),
	orz.isDone = orz.attrEq("status", "done"),
	orz.isDisable = orz.attrEq("status", "disable"),
	orz.isInit = orz.attrEq("init", "done"),
	orz.hidden = orz.addClass("hidden"),
	orz.show = orz.removeClass("hidden")
},
function(t, e) {
	var a;
	a = jQuery,
	orz.ajax = orz.curry(function(t, e, n, r, o) {
		a.ajax({
			type: t,
			url: "/ajax.php",
			context: o,
			data: r,
			success: n,
			error: e
		})
	}),
	orz.get = orz.ajax("GET",
	function() {
		orz.log("ajax get error"),
		orz.log(this)
	}),
	orz.post = orz.ajax("POST",
	function() {
		orz.log("ajax post error"),
		orz.log(this)
	})
},
function(t, e) {
	function n() {
		for (var t = 0; t < orz.hash.length; t++) orz.isFunction(orz.hash[t]) && orz.hash[t]()
	}
	var r;
	jQuery,
	r = location.hash,
	orz.hash = [],
	"onhashchange" in window && ("undefined" == typeof document.documentMode || 8 == document.documentMode) ? window.onhashchange = n: setInterval(function() { !
		function e() {
			var t = location.hash;
			return t != r && (r = t, !0)
		} () || n()
	},
	150)
},
function(t, e) {
	function n() {
		"#login" == location.hash && r(".modal-open[data-modal-id=modal_login]").trigger("click")
	}
	var r; (r = jQuery)(window).on("load", n),
	orz.hash.push(n)
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r = n(2),
	o = n.n(r).a;
	orz.get_zan_cookie = function(t) {
		return o(orz.getCookie(t))
	},
	orz.set_zan_cookie = orz.curry(function(t, e) {
		var n = orz.get_zan_cookie(t);
		orz.has_zan_cookie(t, e) || (n = n + "," + e),
		n = (n = o(n)).replace(/^,|,$/, ""),
		orz.setCookie(t, n, 365)
	}),
	orz.has_zan_cookie = orz.curry(function(t, e) {
		var n = orz.get_zan_cookie(t),
		r = new RegExp("(,|^)" + e + "(,|$)");
		return 0 <= n.search(r)
	}),
	orz.set_post_zan = orz.set_zan_cookie("post_zan"),
	orz.set_comment_zan = orz.set_zan_cookie("comment_zan"),
	orz.has_post_zan = orz.has_zan_cookie("post_zan"),
	orz.has_comment_zan = orz.has_zan_cookie("comment_zan")
},
function(t, e) {
	var n; (n = jQuery)(".spark_rm").each(function() {
		var t = n(this).children();
		t.addClass("hidden");
		var e = Math.floor(Math.random() * t.length);
		t.eq(e).removeClass("hidden")
	})
},
function(t, e) {
	var n, r, o, a, i;
	n = jQuery,
	r = orz.attr("url"),
	o = function o() {
		return '<div id="qr" class="qr_box modal-qr modal-show"><div class="show_qr"><h2>把好文章收藏到微信</h2><div id="url_qr"></div><p>打开微信，扫码分享<br>学教程 <span>优优网</span> 在这里</p><span class="close modal-close" data-modal-id="qr"><i class="icon-close"></i></span></div></div>'
	},
	a = function a(t) {
		n("#url_qr").html(""),
		n("#url_qr").qrcode({
			text: t
		})
	},
	i = function i() {
		return 0 < n("#qr").length
	},
	orz.click(function() {
		var t = r(this);
		return orz.log(i()),
		i() || n("body").append(o()),
		a(t),
		!1
	})('[data-modal-id="qr"]')
},
function(t, e, n) {
	var r = n(4),
	o = n(0),
	a = n(1),
	i = n(37),
	s = a(function s(t, e) {
		return 1 === t ? o(e) : r(t, i(t, [], e))
	});
	t.exports = s
},
function(t, e, n) {
	var c = n(4),
	l = n(3);
	t.exports = function u(a, i, s) {
		return function() {
			for (var t = [], e = 0, n = a, r = 0; r < i.length || e < arguments.length;) {
				var o;
				r < i.length && (!l(i[r]) || arguments.length <= e) ? o = i[r] : (o = arguments[e], e += 1),
				t[r] = o,
				l(o) || --n,
				r += 1
			}
			return n <= 0 ? s.apply(this, t) : c(n, u(a, t, s))
		}
	}
},
function(t, e) { !
	function(t) {
		var e = t(".content");
		if (! (e.length < 1)) {
			var n = e.children(".main"),
			r = e.children(".sidebar");
			n.length < 1 || r.length < 1 || (o(), t(window).on("resize", o))
		}
		function o() {
			orz.md() ? n.width(e.width() - r.outerWidth() - 20) : n.width("100%")
		}
	} (jQuery)
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r = n(2),
	o = n.n(r).a; !
	function(e) {
		var t = e(".menu-primary .link-0");
		if (! (t.length < 1)) {
			var n = function n(t) {
				e(t).attr("data-component", "dropdown")
			};
			t.each(function() {
				var t = o(e(this).text());
				n(this),
				"教程" == t && e(this).attr("data-target", "posts_dropdown"),
				"软件" != t && "神器" != t || e(this).attr("data-target", "software_dropdown"),
				"找灵感" == t && e(this).attr("data-target", "inspiration_dropdown"),
				"课程" == t && e(this).attr("data-target", "course_dropdown"),
				"排行榜" == t && e(this).attr("data-target", "rank_dropdown"),
				"设计导航" == t && e(this).attr("data-target", "navigation_dropdown")
			})
		}
	} (jQuery)
},
function(t, e) {
	var n;
	n = jQuery,
	orz.click(function() {
		n(".header").hasClass("show-menu") ? (n(".modal-mark").trigger("click"), n(".modal-mark").removeClass("mark-for-header"), n(".header").removeClass("show-menu")) : (n(".header").addClass("show-menu"), n(".modal-mark").addClass("mark-for-header"))
	})(".h-navi"),
	orz.click(function() {
		n(".header").removeClass("show-menu"),
		n(".modal-mark").removeClass("mark-for-header")
	},
	".mark-for-header")
},
function(t, e) {
	var o; (o = jQuery)(window).on("scroll",
	function() {
		var n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
		r = -1;
		o(".scroll-current").map(function(t) {
			var e = o(this).attr("data-target");
			e && o("#" + e).offset().top < n + 70 && (r = t)
		}),
		r < 0 || o(".scroll-current").removeClass("current").eq(r).addClass("current")
	})
},
function(t, e) {
	var u, d, f;
	u = jQuery,
	d = orz.attr("scrollInit"),
	f = orz.setAttr("scrollInit", "done"),
	orz.divNeedScrollInit = function n() {
		orz.isMobile() || "iPad" == orz.getDevice() || u(".divNeedScroll").each(function() {
			var n = this;
			if ("done" != d(this)) {
				f(this);
				var i = this.scrollHeight,
				s = this.clientHeight,
				r = !1,
				o = 0,
				c = Math.floor((1 - s / i) * s),
				t = function t() {
					return '<div class="scroll-div"><span class="block"></span></div>'
				},
				l = function l(t, e) {
					var n = u(e).find(".block"),
					r = u(e).find(".scroll-div"),
					o = parseFloat(n.css("top")); (o += t) < 0 && (o = 0),
					c < o && (o = c);
					var a = Math.ceil(i * o / s);
					u(e).scrollTop(a),
					r.css("top", a),
					n.css("top", o)
				};
				u(window).off(".divNeedScroll"),
				u(this).find(".block").off(".divNeedScroll"),
				u(this).off(".divNeedScroll"),
				u(this).find(".scroll-div").length < 1 && u(this).append(t());
				var e = u(this).find(".scroll-div"),
				a = Math.floor(s / i * s);
				e.children(".block").css("height", a),
				s < i && orz.sm() ? (e.removeClass("hidden"), u(this).on("mousewheel.divNeedScroll",
				function(t) {
					var e = t.originalEvent.wheelDelta;
					return l(0 - 1 * e, this),
					!1
				}), u(this).find(".block").on("mousedown.divNeedScroll",
				function(t) {
					return o = t.clientY,
					r = !0,
					n = u(this).parents(".divNeedScroll")[0],
					!1
				}), u(window).on("mouseup.divNeedScroll",
				function(t) {
					o = 0,
					r = !1
				}), u(window).on("mousemove.divNeedScroll",
				function(t) {
					if (r) {
						var e = t.clientY - o;
						l(e, n)
					}
				})) : e.addClass("hidden")
			}
		})
	}
},
function(t, e) { !
	function(r) {
		var n = r(".auto_menu");
		if (! (n.length < 1)) {
			var t = r(".fixed-right .menus");
			if (! (t.length < 1)) {
				var e = r(".widget-article-menu");
				e.length < 1 || (e.removeClass("hidden"), e.append(function i() {
					var e = '<h2 class="section-title">文章目录</h2>';
					return e += '<div class="widget-content divNeedScroll"><ul>',
					n.each(function() {
						var t = "menu_" + n.index(r(this));
						r(this).attr("id", t),
						e += '<li> <a href="#' + t + '">' + r(this).text() + "</a> </li>"
					}),
					e += "</ul></div>"
				} ()), t.prepend('<span class="item article_menu"> <a href="#article_menu" data-sm="no"> <i class="icon-menu-font"></i> </a> </span>'), orz.divNeedScrollInit(), orz.click(function() {
					if (!orz.md()) {
						var t = r(this).attr("href");
						return o(t) ? a(t) : function e(t) {
							r(t).addClass("show_fixed")
						} (t),
						!1
					}
				},
				".article_menu a"), r("body").on("click",
				function(t) {
					if (!orz.md()) {
						t = t || window.event;
						var e = "#article_menu";
						o(e) && a(e)
					}
				}), orz.click(function() {
					if (!orz.md()) {
						var t = "#article_menu";
						o(t) && a(t)
					}
				},
				"#article_menu a"), r(window).on("scroll",
				function() {
					var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
					n = 0;
					r(".auto_menu").map(function(t) {
						r(this).offset().top < e + 70 && (n = t)
					}),
					n < 0 && (n = 0),
					orz.log(n),
					r(".sidebar-fixed .widget-article-menu li").removeClass("current").eq(n).addClass("current")
				}))
			}
		}
		function o(t) {
			return r(t).hasClass("show_fixed")
		}
		function a(t) {
			r(t).removeClass("show_fixed")
		}
	} (jQuery)
},
function(t, e) {
	var o;
	o = jQuery,
	orz.click(function() {
		var t = o(this).attr("href"),
		e = 0 - o(this).attr("data-diff") || -90,
		n = o(t);
		if (! (n.length < 1)) {
			if (n.hasClass("hidden") && (n = n.next()), orz.log(n), "no" == o(this).attr("data-sm") && !orz.md()) return ! 1;
			var r = n.offset();
			return o("html,body").animate({
				scrollTop: r.top + e
			},
			20),
			!1
		}
	})('[href^="#"]')
},
function(t, e) {
	function n() {
		orz.md() && h('[data-component="autofixed"]').each(function() {
			var t = document.documentElement.clientHeight,
			e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
			n = h(this),
			r = h(m(n)),
			o = g(n) ? g(n) - 0 : 0,
			a = h(p(n)),
			i = y(n) ? y(n) - 0 : 0,
			s = r.offset().top,
			c = a.offset().top,
			l = v(n),
			u = s + o - t,
			d = c + a.outerHeight() - n.outerHeight() - l + i;
			if (u <= e) {
				n.addClass("autofixed-fixed");
				var f = t - (e - u);
				f <= l && (f = l),
				d < e && (f = l - (e - d)),
				n.css("top", f + "px")
			} else n.css("top", "auto"),
			n.removeClass("autofixed-fixed")
		})
	}
	var h, m, p, v, g, y;
	h = jQuery,
	m = orz.attr("start"),
	p = orz.attr("end"),
	v = orz.attr("top"),
	g = orz.attr("start-offset"),
	y = orz.attr("end-offset"),
	n(),
	h(window).on("scroll", orz.scroll(n)),
	h(window).resize(n)
},
function(t, e) {
	var a, i;
	a = jQuery,
	i = orz.attr("autofixed"),
	function n() {
		a('[data-component="sidebar-autofixed"]').each(function() {
			var t = i(this),
			e = a(this).children(".sidebar-fixed");
			if (orz.isNotEmpty(t)) {
				var n = a(t);
				if (0 < n.length) {
					var r = a(this).children(".widget"),
					o = (r.length, !1);
					n.each(function() {
						var t = n.index(a(this));
						o = a(this)[0] == r.eq(r.length - n.length + t)[0]
					}),
					e.append(n.clone(!0, !0)),
					o && (n.addClass("hidden"), e.addClass("show"))
				}
			}
		})
	} ()
},
function(t, e) {
	var n, r, o, a, i, s, c, l, u, d;
	n = jQuery,
	r = orz.attr("target"),
	o = orz.attr("body-scroll"),
	a = orz.removeClass("show"),
	s = i = 0,
	c = function c() {
		if (orz.md()) {
			var e = this;
			return s = (new Date).getTime(),
			i = setTimeout(function() {
				var t = r(e);
				l(".part-dropdown"),
				n("#" + t).addClass("show"),
				"no" == o(e) && n("body").addClass("hideScroll")
			},
			100),
			!1
		}
	},
	l = function l(t) {
		clearTimeout(i),
		n(".part-dropdown.show").length < 1 || t && n("#search_dropdown").hasClass("show") && "click" != t.type || (a(".part-dropdown"), n("body").removeClass("hideScroll"))
	},
	u = function u() { (new Date).getTime() - s < 100 && l()
	},
	d = function d() {
		n(".part-dropdown.show").hasClass("dropdown-search") || l()
	},
	orz.hover(l, null)('.header a:not([data-component="dropdown-click"])'),
	orz.hover(c, u, '[data-component="dropdown"]'),
	orz.outClick(l, ".part-dropdown .container"),
	orz.hover(null, d, ".part-dropdown .container"),
	orz.click(c, '[data-component="dropdown-click"]'),
	orz.click(l, ".dropdown-close"),
	n("body").on("mouseleave",
	function(t) {
		t.clientY <= 0 && l()
	})
},
function(t, e) {
	var r, o;
	r = jQuery,
	o = 0,
	orz.click(function(t) {
		clearTimeout(o),
		r(".copyTip").remove(),
		r(this).children(".copy-content").select(),
		document.execCommand("copy");
		return function n(t, e) {
			r("body").append('<div class="copyTip">' + t + "</div>"),
			o = setTimeout(function() {
				var t = r(e).offset();
				orz.log(t),
				r(".copyTip").addClass("show"),
				r(".copyTip").css({
					left: t.left + r(e).outerWidth() / 2 - 20,
					top: t.top - r(".copyTip").outerHeight() - 15
				})
			},
			50),
			o = setTimeout(function() {
				r(".copyTip").removeClass("show")
			},
			500),
			o = setTimeout(function() {
				r(".copyTip").remove()
			},
			1e3)
		} ("已复制", this),
		!1
	},
	'[data-component="copy"]')
},
function(t, e) {
	function n(t, e) {
		var n = function r(t) {
			return o(t).attr("data-count") || 0
		} (t);
		o(t).children(".count").html(n - 0 + e)
	}
	var o, r, a, i, s, c, l;
	o = jQuery,
	r = "[data-component=zan]",
	a = function a(t) {
		return {
			action: "zan",
			pid: orz.attr("pid", o(t)),
			cid: orz.attr("cid", o(t))
		}
	},
	i = function i(t) {
		var e = orz.attr("pid", o(t)),
		n = orz.attr("cid", o(t));
		0 < e ? orz.set_post_zan(e) : 0 < n && orz.set_comment_zan(n)
	},
	s = function s(t) {
		var e = orz.attr("pid", o(t)),
		n = orz.attr("cid", o(t));
		return 0 < e ? orz.has_post_zan(e) : 0 < n && orz.has_comment_zan(n)
	},
	c = orz.post(function(t) {
		orz.done(this)
	}),
	l = orz.click(function() {
		if (!orz.isPending(this)) {
			var t = a(this),
			e = c(t);
			orz.pending(this),
			o(this).hasClass("has_zan") ? orz.done(this) : (e(this), i(this), orz.zanInit())
		}
	}),
	orz.zanInit = function() {
		o(r).each(function() {
			o(this).removeClass("has_zan"),
			s(this) && (o(this).addClass("has_zan"), o(this).find(".txt").html("已赞"),
			function e(t) {
				return n(t, 1)
			} (this))
		})
	},
	l(r),
	orz.zanInit()
},
function(t, e) {
	function n(t) {
		return l(t).attr("data-id")
	}
	function a(t, e) {
		var n = function o(t) {
			return l(t).attr("data-count") || 0
		} (t),
		r = function a(t) {
			return l(t).attr("data-original-count") || 0
		} (t);
		e = 0 < e ? r - 0 + e: n - 0 + e,
		l(u).filter('[data-id="' + l(t).attr("data-id") + '"]').children("em").html(e),
		l(u).filter('[data-id="' + l(t).attr("data-id") + '"]').attr("data-count", e)
	}
	function i() {
		l(u).each(function() {
			l(this).removeClass("has_fav"),
			c(n(l(this))) ? (l(this).addClass("has_fav"), l(this).find(".txt").html("已收藏"),
			function e(t) {
				return a(t, 1)
			} (this)) : l(this).find(".txt").html("收藏")
		})
	}
	function s() {
		return orz.currentUser.fav || []
	}
	function c(t) {
		var e = s();
		return 0 <= orz.inArray(t, e)
	}
	var l, u, r;
	l = jQuery,
	u = "[data-component=fav]",
	r = orz.click(function() {
		if (!orz.currentUser) return orz.showLogin(),
		!1;
		var t = n(this);
		return c(t) ? (function r(e) {
			if (c(e)) {
				var t = s();
				t = orz.filter(function(t) {
					return t != e
				},
				t),
				orz.currentUser.fav = t;
				var n = {
					action: "fav",
					"do": "remove",
					uid: orz.currentUser.id,
					pid: e
				};
				orz.post(l.noop, n, this)
			}
		} (t),
		function e(t) {
			return a(t, -1)
		} (this)) : function o(t) {
			if (!c(t)) {
				var e = s();
				e.unshift(t - 0),
				orz.currentUser.fav = e;
				var n = {
					action: "fav",
					"do": "add",
					uid: orz.currentUser.id,
					pid: t
				};
				orz.post(function(t) {
					if (t && ((t = orz.jsonDecode(t)) && "done" == t.data)) return
				},
				n, this)
			}
		} (t),
		i(),
		!1
	}),
	l(document).on("userLogged", i),
	r(u)
},
function(t, e) { !
	function(e) {
		var n = e(".home-section-first-menus .li");
		if (! (n.length < 1)) {
			var r = 0,
			o = 0;
			n.on("mouseenter",
			function() {
				var t = e(this);
				t.hasClass("show") && (clearTimeout(r), clearTimeout(o)),
				0 < o && clearTimeout(o),
				r = setTimeout(function() {
					r = 0,
					n.removeClass("show"),
					t.addClass("show")
				},
				50)
			}),
			n.on("mouseleave",
			function() {
				0 < r ? (clearTimeout(r), r = 0) : o = setTimeout(function() {
					n.removeClass("show")
				},
				50)
			}),
			e(".home-section-first-menus").on("mouseleave",
			function() {
				clearTimeout(r),
				clearTimeout(o),
				n.removeClass("show")
			})
		}
	} (jQuery)
},
function(t, e) {
	function n() {
		orz.lg() ? o.removeClass("hide-menus") : o.addClass("hide-menus")
	}
	var r, o;
	r = jQuery,
	(o = r(".singular-under-serialize .fixed-menus")).length < 1 || (o.find(".open").on("click",
	function() {
		o.removeClass("hide-menus")
	}), o.find(".close").on("click",
	function() {
		o.addClass("hide-menus")
	}), n(), r(window).on("resize", n))
},
function(t, e) {
	jQuery,
	orz.get_comments_html = function(t, o) {
		var a = "";
		return orz.isArray(t) && orz.map(function(t) {
			var e = t.author_url,
			n = t.approved,
			r = t.content;
			a += '<div class="comment-item appr_' + n + " " + (o ? "animated flash": "") + " level_" + (0 < t.parent ? "1": "0") + '" id="comment_' + t.id + '">',
			a += '<div class="item-avatar">',
			orz.isNotEmpty(e) && (a += '<a href="' + e + '" target="_blank">'),
			a += '<i class="thumb" style="background-image:url(' + t.avatar + ');"></i>',
			orz.isNotEmpty(e) && (a += "</a>"),
			a += "</div>",
			a += '<div class="item-content">',
			a += '<div class="item-main">',
			a += '<h3 class="item-title">',
			orz.isNotEmpty(e) && (a += '<a href="' + e + '" target="_blank">'),
			a += t.author,
			orz.isNotEmpty(e) && (a += "</a>"),
			t.parent_author && (a += ' <small>回复给 <a href="#comment_' + t.parent + '">' + t.parent_author + "</a> </small>"),
			1 != n && (a += '<span class="pending">评论审核中</span>'),
			1 == t.is_sticky && (a += '<span class="sticky">置顶</span>'),
			a += "</h3>",
			a += '<div class="item-entry">' + r + "</div>",
			a += "</div>",
			a += '<h4 class="meta">',
			a += "<span>" + orz.getDateDiff(t.time) + "</span>",
			a += "<span>来自 " + (t.city || "宇宙") + "</span>",
			a += "<span>" + t.device + "</span>",
			1 == n && (a += '<span> <em class="btn-reply" data-cid="' + t.id + '">回复</em> </span>', a += '<span> <em class="btn-zan ' + (0 < t.zan ? "zans": "") + '"  data-component="zan" data-cid="' + t.id + '" data-count="' + t.zan + '">点赞 <i class="count">' + (t.zan || "") + "</i> </em> </span>"),
			orz.currentUser && "editor" == orz.currentUser.is && t.parent <= 0 && (1 == t.is_sticky ? a += '<span class="sticky_btn has_sticky" data-cid="' + t.id + '">取消置顶</span>': a += '<span class="sticky_btn no_sticky" data-cid="' + t.id + '">置顶</span>'),
			a += "</h4>",
			a += "</div>",
			a += "</div>"
		},
		t),
		a
	},
	function(t) {
		var e = t(".comment-div");
		if (! (e.length < 1)) {
			var n = e.children(".section-title").children(".sub");
			t(document).on("userNotLogged",
			function() {
				n.html('点击 <span class="modal-open clr_orange" data-modal-id="modal_login">登录</span> 微信，亮头像秀观点，' + n.html())
			})
		}
	} (jQuery),
	function(s) {
		if (! (s(".comment-div").length < 1)) {
			var a = s(".comment-write"),
			t = (s(".comment-list"), ".comment-write .comment-word"),
			e = ".comment-write .form-yzm img",
			c = ".comment-write .btn-submit",
			n = orz.get_form_item_val,
			i = orz.attr("total"),
			l = n("user-name"),
			u = n("comment"),
			d = n("prefix"),
			f = n("yzm"),
			h = n("pid"),
			m = n("parent"),
			p = "";
			r(),
			v(".lineLen"),
			s(window).on("resize", r),
			s(document).on("userLogged",
			function b() {
				a.addClass("userLogged"),
				function e() {
					var t = orz.currentUser.avatar;
					s(".comment-write .user-avatar .thumb").css({
						"background-image": "url(" + t + ")"
					})
				} (),
				function n() {
					var t = orz.currentUser.name;
					s(".comment-write .user-name").html(t)
				} ()
			}),
			s(document).on("userNotLogged",
			function C() {
				a.addClass("userNotLogged")
			}),
			s("body").on("keyup", t, o),
			s("body").on("mouseup", t, o),
			s("body").on("focus", t,
			function k() {
				z(),
				a.hasClass("userNotLogged") &&
				function e() {
					var t = s(".form-yzm");
					t.removeClass("hidden"),
					t.find("img").trigger("click")
				} ()
			}),
			s("body").on("focus", ".comment-write .comment-yzm",
			function _() {
				z()
			}),
			s("body").on("click", e, g),
			s("body").on("submit", ".comment-write",
			function x() {
				if (orz.isPending(c)) return ! 1;
				var t, e = "",
				n = "",
				r = "",
				o = h(this),
				a = m(this);
				t = u(this),
				s(this).hasClass("userNotLogged") && (e = l(this), n = d(this), r = f(this));
				var i = {
					action: "post_comment",
					uName: e,
					comment: t,
					prefix: n,
					yzm: r,
					pid: o,
					parent: a,
					city: "",
					device: orz.getDevice()
				};
				return returnCitySN && (i.city = returnCitySN.cname),
				orz.isEmpty(t) ? y("请输入评论内容") : s(this).hasClass("userNotLogged") && orz.isEmpty(r) ? y("请输入验证码") : t == p ? y("不可以发一样的评论喔。") : (orz.pending(c), orz.post(w, i, null)),
				!1
			}),
			s("body").on("click", ".error-box .close", z)
		}
		function r() {
			s(".lineLen").each(function() {
				var t = parseInt(s(this).css("font-size")),
				e = s(this).width(),
				n = parseInt(s(this).css("padding-left")),
				r = parseInt(s(this).css("padding-right"));
				orz.setAttr("line", Math.ceil(2 * (e - n - r) / t), s(this))
			})
		}
		function v(t) {
			var e = s(t).val();
			orz.isEmpty(e) && (e = s(t).attr("data-placeholder"));
			for (var n = orz.attr("line", t), r = parseInt(s(t).css("line-height")), o = 1, a = 0, i = 0; i < e.length; i++) 10 == e.charCodeAt(i) ? (a = 0, o++) : (127 < e.charCodeAt(i) ? a += 2 : a++, n <= a && (o++, a = 0));
			s(t).height(o * r)
		}
		function o() {
			v(this),
			function o(t) {
				var e = s(t).val(),
				n = i(t),
				r = n - e.length;
				e.length > n && (r = 0, e = e.substring(0, n - 1), s(t).val(e)),
				s(t).siblings(".rest").children("em").html(r)
			} (this)
		}
		function g() {
			var r = s(e);
			orz.post(function(t) {
				r.attr("src",
				function e(t) {
					return "/wp-content/themes/Ui/captcha/captcha.php?prefix=" + t + "&nonce=" + (new Date).getTime()
				} (t)),
				function n(t) {
					s('[name="prefix"]').val(t)
				} (t)
			},
			{
				action: "get_captcha"
			},
			null)
		}
		function y(t) {
			s(".error-box").removeClass("hide").children(".item-content").html(t)
		}
		function z() {
			s(".error-box").addClass("hide").children(".item-content").html("")
		}
		function w(t) {
			if (orz.done(c), orz.isNotEmpty(t)) {
				var e = orz.jsonDecode(t);
				if (e) {
					var n = e.data;
					orz.isNotEmpty(n) ? (function r(t) {
						html = orz.get_comments_html(t, !0),
						a.append(html)
					} (n), p = n[0].content,
					function o() {
						a.find('[name="comment"]').val(""),
						a.find('[name="yzm"]').val("")
					} ()) : y(e.error.join("<br>"))
				} else y(t)
			} else y("评论失败，请重试");
			a.hasClass("userNotLogged") && g()
		}
	} (jQuery),
	function(e) {
		if (! (e(".comment-div").length < 1)) {
			var n = e(".comment-write"),
			a = e(".comment-list"),
			i = e(".content-loading"),
			s = e(".comment-more"),
			c = e(".comment-nomore"),
			l = orz.attr("paged"),
			u = orz.attr("pid");
			t(),
			orz.click(t, ".btn-more-comments"),
			orz.click(function f() {
				var t = orz.attr("cid", e(this));
				e(this).parents(".meta").after(n),
				r(t),
				n.addClass("reply-write"),
				n.find('[name="comment"]').trigger("focus")
			},
			".btn-reply"),
			orz.click(function h() {
				n.removeClass("reply-write"),
				r(0),
				a.before(n)
			},
			".btn-reply-close")
		}
		function t() {
			var t = l(a),
			e = {
				action: "get_comments",
				pid: u(a),
				pd: t
			}; !
			function n() {
				i.removeClass("hidden")
			} (),
			function r() {
				s.addClass("hidden")
			} (),
			function o() {
				c.addClass("hidden")
			} (),
			orz.post(d, e, null)
		}
		function o() {
			s.removeClass("hidden"),
			function e() {
				var t = l(a);
				t -= 0,
				t++,
				orz.setAttr("paged", t, a)
			} ()
		}
		function d(t) {
			if (t) {
				var e = orz.jsonDecode(t);
				e && (a.append(orz.get_comments_html(e.data)), orz.zanInit(), a.find(".item-entry a").attr("target", "_blank"), 20 <= e.data.length ? o() : function n() {
					0 < a.children(".comment-item").length && c.removeClass("hidden")
				} ())
			} !
			function r() {
				i.addClass("hidden")
			} ()
		}
		function r(t) {
			n.find('[name="parent"]').val(t)
		}
	} (jQuery),
	function(e) {
		if (! (e(".comment-div").length < 1)) {
			var r = orz.attr("cid"),
			o = function o(t) {
				return e(t).hasClass("has_sticky")
			},
			a = function a(t) {
				if (orz.isNotEmpty(t)) {
					if (t = orz.jsonDecode(t), orz.isEmpty(t)) return;
					1 == t.data.sticky ? n(this) : i(this)
				}
			},
			n = function n(t) {
				e(t).addClass("has_sticky"),
				e(t).html("取消置顶")
			},
			i = function i(t) {
				e(t).removeClass("has_sticky"),
				e(t).html("置顶")
			};
			orz.click(function() {
				var t = r(this),
				e = "no_sticky";
				o(this) && (e = "has_sticky");
				var n = {
					action: "comment_sticky",
					status: e,
					commentId: t
				};
				return orz.post(a, n, this),
				!1
			})(".sticky_btn")
		}
	} (jQuery),
	function(e) {
		if (! (e(".comment-div").length < 1)) {
			var n = orz.attr("cid"),
			r = orz.attr("action");
			orz.click(function() {
				var t = {
					action: r(this),
					cid: n(this)
				};
				return e(this).remove(),
				orz.post(function(t) {
					orz.log(t)
				},
				t, this),
				!1
			})(".comment_to_btn")
		}
	} (jQuery)
},
function(t, e) { !
	function(e) {
		var t = e(".archive-selects .selects");
		if (! (t.length < 1)) {
			var n = t.children(".select"),
			r = '<div class="selects-mobi">';
			r += '<div class="selects-title">',
			n.each(function() {
				var t = e(this).find("dt");
				t.length < 1 || (r += "<span>" + t.html() + "</span>")
			}),
			r += "</div>",
			r += '<div class="selects-content">',
			n.each(function() {
				var t = e(this).find("dd");
				t.length < 1 || (r += '<div class="items">', t.each(function() {
					var t = "";
					e(this).hasClass("current") && (t = "current"),
					r += '<span class="' + t + '">' + e(this).html() + "</span>"
				}), r += "</div>")
			}),
			r += "</div>",
			r += "</div>",
			t.after(r);
			var o = e(".selects-title span"),
			a = e(".selects-content");
			o.on("click",
			function() {
				if (a.removeClass("show"), a.children(".items").removeClass("current"), e(".modal-mark").removeClass("modal-show"), e(".modal-mark").removeClass("modal-mark-for-selects"), e(this).hasClass("current")) e(this).removeClass("current");
				else {
					var t = o.index(e(this));
					o.removeClass("current"),
					e(this).addClass("current"),
					a.addClass("show"),
					a.children(".items").eq(t).addClass("current"),
					e(".modal-mark").addClass("modal-show"),
					e(".modal-mark").addClass("modal-mark-for-selects")
				}
			}),
			e("body").on("click", ".modal-mark-for-selects",
			function() {
				a.removeClass("show"),
				a.children(".items").removeClass("current"),
				o.removeClass("current")
			})
		}
	} (jQuery)
},
function(t, e) { !
	function(e) {
		if (! ((r = e(".rank-selects .selects")).length < 1)) {
			var t = r.children(".select"),
			n = '<div class="selects-mobi">';
			n += '<div class="selects-title">',
			t.each(function() {
				var t = e(this).find("dt");
				t.length < 1 || (n += "<span>" + t.html() + "</span>")
			}),
			n += "</div>",
			n += '<div class="selects-content">',
			t.each(function() {
				var t = e(this).find("dd");
				t.length < 1 || (n += '<div class="items">', t.each(function() {
					var t = "";
					e(this).hasClass("current") && (t = "current"),
					n += '<span class="' + t + '">' + e(this).html() + "</span>"
				}), n += "</div>")
			}),
			n += "</div>",
			n += "</div>",
			r.after(n);
			var r, o = e(".selects-title span"),
			a = e(".selects-content");
			if (o.on("click",
			function() {
				if (a.removeClass("show"), a.children(".items").removeClass("current"), e(".modal-mark").removeClass("modal-show"), e(".modal-mark").removeClass("modal-mark-for-selects"), e(this).hasClass("current")) e(this).removeClass("current");
				else {
					var t = o.index(e(this));
					o.removeClass("current"),
					e(this).addClass("current"),
					a.addClass("show"),
					a.children(".items").eq(t).addClass("current"),
					e(".modal-mark").addClass("modal-show"),
					e(".modal-mark").addClass("modal-mark-for-selects")
				}
			}), e("body").on("click", ".modal-mark-for-selects",
			function() {
				a.removeClass("show"),
				a.children(".items").removeClass("current"),
				o.removeClass("current")
			}), !((r = e(".rank-header .current")).length < 1)) {
				n = '<div class="rank-crumbs">';
				n += "<strong>" + r.text() + "</strong>",
				n += "</div>",
				e(".rank-selects").after(n)
			}
		}
	} (jQuery)
},
function(t, e) { !
	function(e) {
		var t = e(".inspiration-sub-menus .menus a"),
		n = e(".inspiration-sub-menus .recent a");
		if (! (t.length < 1 || n.length < 1)) {
			var r = '<div class="inspiration-selects-mobi">';
			r += '<div class="selects-mobi">',
			r += '<div class="selects-title">',
			r += "<span>全部分类</span>",
			r += "<span>近期更新</span>",
			r += "</div>",
			r += '<div class="selects-content">',
			r += '<div class="items">',
			t.each(function() {
				var t = "";
				e(this).hasClass("current") && (t = "current"),
				r += '<span class="' + t + '"><a href="' + e(this).attr("href") + '">' + e(this).text() + "</a></span>"
			}),
			r += "</div>",
			r += '<div class="items">',
			n.each(function() {
				var t = "";
				e(this).hasClass("current") && (t = "current"),
				r += '<span class="' + t + '"><a href="' + e(this).attr("href") + '">' + e(this).text() + "</a></span>"
			}),
			r += "</div>",
			r += "</div>",
			r += "</div>",
			r += "</div>",
			e(".inspiration-sub-menus").after(r);
			n = e(".selects-title span");
			var o = e(".selects-content");
			n.on("click",
			function() {
				if (o.removeClass("show"), o.children(".items").removeClass("current"), e(".modal-mark").removeClass("modal-show"), e(".modal-mark").removeClass("modal-mark-for-selects"), e(this).hasClass("current")) e(this).removeClass("current");
				else {
					var t = n.index(e(this));
					n.removeClass("current"),
					e(this).addClass("current"),
					o.addClass("show"),
					o.children(".items").eq(t).addClass("current"),
					e(".modal-mark").addClass("modal-show"),
					e(".modal-mark").addClass("modal-mark-for-selects")
				}
			}),
			e("body").on("click", ".modal-mark-for-selects",
			function() {
				o.removeClass("show"),
				o.children(".items").removeClass("current"),
				n.removeClass("current")
			})
		}
	} (jQuery)
},
function(t, e) { !
	function(t) {
		var e = t(".single .inspiration-images");
		if (! (e.length < 1)) {
			for (var n = '<div class="mobi-images">',
			r = e.find("img"), o = 1; o <= r.length; o++) {
				var a = e.find('[data-index="' + o + '"]');
				0 < a.length && (n += '<div class="item"><img src="' + a.attr("src") + '"></div>')
			}
			n += "</div>",
			e.after(n);
			var i = e.find('[data-index="1"]');
			0 < i.length && (n = '<div class="bg insp-bg"><div class="bg-img" style="background-image:url(' + i.attr("src") + ');"></div></div>', t(".single").prepend(n))
		}
	} (jQuery)
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r, o = n(2),
	a = n.n(o).a;
	function i(t) {
		var e = a(t.val()),
		n = a(t.attr("data-placeholder"));
		e == n && (e = ""),
		orz.isEmpty(e) ? (t.val(n), t.addClass("placeholder"), t.addClass("txt_empty")) : (t.removeClass("placeholder"), t.removeClass("txt_empty"))
	} (r = jQuery)("body").on("form.placeholder.ready",
	function() {
		r("[data-placeholder]").each(function() {
			orz.isInit(this) || (orz.init(this), i(r(this)))
		})
	}),
	r("body").on("focus", "[data-placeholder]",
	function() {
		a(r(this).val()) == a(r(this).attr("data-placeholder")) && r(this).val(""),
		r(this).removeClass("placeholder"),
		r(this).removeClass("txt_empty")
	}),
	r("body").on("blur", "[data-placeholder]",
	function() {
		i(r(this))
	}),
	r("body").on("submit", "form",
	function() {
		r(this).find("[data-placeholder]").each(function() {
			a(r(this).val()) == a(r(this).attr("data-placeholder")) && r(this).val("")
		})
	}),
	r("body").trigger("form.placeholder.ready")
},
function(t, e) {
	jQuery(function(r) {
		var t = r(".single");
		if (! (t.length < 1)) {
			var o = orz.match(/\bpostid-(\d+)\b/),
			a = function a(t) {
				var e = r(t).attr("class"),
				n = o(e);
				return orz.isArray(n) ? n[1] : 0
			},
			e = a(t),
			n = {
				action: "views",
				id: e
			};
			0 < e && orz.post(function() {},
			n, this)
		}
	})
},
function(t, e) { !
	function(e) {
		var t = e(".modal-menu");
		if (! (t.length < 1)) {
			var n = t.children(".modal-content");
			if (! (n.length < 1)) {
				e(".search-content .form");
				var r = e(".menu-primary"); !
				function o() {
					n.append('<div class="form"> <form class="" action="https://uiiiuiii.com" method="get" autocomplete="off"> <input type="text" class="txt placeholder" name="s" data-placeholder="请输入想要搜索的内容" value="请输入想要搜索的内容"> <button type="submit" class="btn"> <i class="icon-search"></i> 搜索</button> </form> </div>'),
					n.append(r.clone().attr("class", "menu").attr("id", "")),
					n.find('[data-component="dropdown"]').each(function() {
						var t = e("#" + e(this).attr("data-target"));
						t.length < 1 || (e(this).parent().addClass("has-children"), e(this).after(t.find(".section-content").eq(0).clone().addClass("sub-nav")), e(this).attr("data-component", ""))
					}),
					n.append(e('<div class="site-info">教程灵感就看优优 <br> 优质教程每日更新</div>'))
				} (),
				orz.click(function() {
					return e(this).parent().hasClass("show") || e(".modal-menu .has-children").removeClass("show"),
					e(this).parent().toggleClass("show"),
					!1
				},
				".modal-menu .has-children .link-0")
			}
		}
	} (jQuery)
},
function(t, e) { !
	function(t) {
		var e = t(".search-form");
		if (! (e.length < 1)) {
			var n = e.find(".selects"),
			r = n.find(".select-title"),
			o = n.find(".selects-ul li"),
			a = n.find('[name="source"]');
			r.on("click",
			function() {
				n.toggleClass("show")
			}),
			o.on("click",
			function() {
				o.removeClass("current"),
				t(this).addClass("current"),
				a.val(t(this).attr("data-source")),
				r.children("strong").html(t(this).text()),
				n.toggleClass("show")
			}),
			orz.outClick(function() {
				n.removeClass("show")
			},
			".search-form .selects")
		}
	} (jQuery)
},
function(t, e) { !
	function(t) {
		var e = t(".header_fixed_from_here");
		if (! (e.length < 1)) {
			var n = e.offset(),
			r = function r() { (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > n.top ? (t("body").addClass("do_header_fixed"), setTimeout(function() {
					t("body").addClass("do_header_fixed_show")
				},
				10)) : (t("body").removeClass("do_header_fixed"), t("body").removeClass("do_header_fixed_show"))
			};
			r();
			var o = orz.scroll(r);
			t(window).on("scroll", o)
		}
	} (jQuery),
	function(t) {
		if (! (t(".inspiration-body .inspiration-main-menus").length < 1)) {
			var e = t(".inspiration-body .inspiration-sub-menus");
			if (e.length < 1 && (e = t(".inspiration-body .inspiration-sections")), e.length < 1 && (e = t(".inspiration-body .inspiration-content")), !(e.length < 1)) {
				var n = function n() { (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > e.offset().top ? (t("body").addClass("inspiration-fixed"), setTimeout(function() {
						t("body").addClass("inspiration-fixed-show")
					},
					10)) : (t("body").removeClass("inspiration-fixed"), t("body").removeClass("inspiration-fixed-show"))
				};
				n();
				var r = orz.scroll(n);
				t(window).on("scroll", r)
			}
		}
	} (jQuery)
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r, o, a = n(6),
	G = n.n(a),
	i = n(18),
	Y = n.n(i),
	s = n(17),
	J = n.n(s),
	c = n(16),
	X = n.n(c); !
	function(a) {
		var s = a("#user_center");
		if (! (s.length < 1 || "user_center" != uisdc.page || uisdc.uid < 1)) {
			var i, c, u = {},
			h = {},
			t = a(".uc-header"),
			e = a(".user-center .user-avatar"),
			n = a(".user-center .user-name"),
			r = a(".user-center .user-job"),
			o = a(".user-center .user-info"),
			l = a(".views.count"),
			d = a(".publish.count"),
			f = a(".fav.count"),
			m = a(".user-menu"),
			p = a(".uc-submenu"),
			v = a(".user-submenu"),
			g = a(".sub-title"),
			y = a(".uc-content .content"),
			z = a(".uc-content .content .items"),
			w = a(".uc-content .content .pageds"),
			b = (a(".uc-content .content .pageds .go"), a(".uc-content .content .pageds .nav")),
			C = a(".mine-center"),
			k = a(".msg-center"),
			_ = a(".setting-center"),
			x = !1,
			j = (a(".user-job"), a(".user-company"), a(".user-info"), a("[data-prop]")),
			O = a(".fav-warning"),
			T = {
				action: "user_center_info",
				uid: uisdc.uid
			};
			a("body").on("submit", ".setting-form",
			function() {
				if (orz.isPending(this)) return ! 1;
				var t = I("info"),
				e = I("company"),
				n = I("job");
				if (orz.pending(this), t || e || n) {
					var r = {
						action: "user_setting_save",
						info: t,
						company: e,
						job: n,
						uid: uisdc.uid
					};
					orz.post(function(t) {
						c = orz.deepCopy(i)
					},
					r, this)
				}
				return orz.done(this),
				function o() {
					a(".error").addClass("show"),
					setTimeout(function() {
						a(".error").removeClass("show")
					},
					2e3)
				} (),
				!1
			});
			var E = {
				all: B,
				post: B,
				software: B,
				inspiration: B
			};
			a(document).on("userLogged",
			function() {
				A() ? m.html(' <span><a href="#publish">发布</a></span>  <span><a href="#fav">收藏</a></span>  <span><a href="#setting">设置</a></span> ') : m.html(Q())
			}),
			a(document).on("userNotLogged",
			function() {
				m.html(Q())
			}),
			a(window).on("load", M),
			orz.hash.push(M),
			orz.post(function W(t) {
				if (t) {
					var e = (t = orz.jsonDecode(t)).data;
					e && (i = e, c = orz.deepCopy(e), 0 < e.publish && !0, P(), j.each(function() {
						a(this).val(i[a(this).attr("data-prop")]),
						a(this).siblings().find('[data-name="' + a(this).attr("data-prop") + '"]').html(i[a(this).attr("data-prop")])
					}), 0 < e.views ? l.children("strong").html(e.views) : l.addClass("hidden"), 0 < e.publish ? d.children("strong").html(e.publish) : (d.addClass("hidden"),
					function n() {
						A() || (m.children("a").eq(0).remove(), M(), S())
					} ()), 0 < e.fav ? f.children("strong").html(e.fav) : (f.children("strong").html(e.fav),
					function r() {
						A() || S()
					} ()), 0 < e.wechat.length && a(".uc-header .user-wechat").removeClass("hidden").find(".ewm").attr("src", e.wechat), 0 < e.sina.length && a(".uc-header .user-sina").removeClass("hidden").find("a").attr("href", e.sina), 0 < e.qq.length && a(".uc-header .user-qq").removeClass("hidden").find("a").attr("href", "https://wpa.qq.com/msgrd?v=3&uin=" + e.qq + "&site=qq&menu=yes"), a("body").trigger("user_info_ready"))
				}
			},
			T, s),
			orz.click(function() {
				var t = a(".uc-menus").offset();
				a("html,body").animate({
					scrollTop: t.top
				},
				10)
			},
			".nav-pages a"),
			a("body").on("user_info_ready",
			function $() {
				x || (x = !0, j.on("blur", F))
			}),
			a("body").on("user_info_change", P),
			orz.click(function() {
				var t = a(this).parents(".item_wrap"),
				e = {
					action: "fav",
					"do": "remove",
					uid: orz.attr("uid", this),
					pid: orz.attr("pid", this)
				};
				return t.remove(),
				orz.post(function(t) {},
				e, this),
				!1
			},
			".remove_fav")
		}
		function A() {
			return !! orz.currentUser && orz.currentUser.id == uisdc.uid
		}
		function S() {
			var t = a(".user-404"),
			e = orz.match(/#[^#]+#[^#]+/)(location.hash),
			n = "/";
			if (e) switch (L(e = e[0])) {
			case "post":
				n = "/all";
				break;
			case "software":
				n = "/tools";
				break;
			case "inspiration":
				n = "/inspiration"
			}
			if (t.length < 1) {
				var r = '<div class="user-404"><div class="thumb-404"><i class="thumb"></i></div><h3>OH~这里暂时没有内容</h3><div class="btns"><a href="' + n + '" class="btn btn-blue">探寻宝藏</a></div></div>';
				y.after(r)
			} else t.find(".btn").attr("href", n),
			t.removeClass("hidden");
			y.addClass("hidden")
		}
		function q() {
			var t = a(".user-404");
			0 < t.length && t.addClass("hidden"),
			y.removeClass("hidden")
		}
		function Q() {
			return ' <span><a href="#publish">发布</a></span>  <span><a href="#fav">收藏</a></span> '
		}
		function N() {
			var t = orz.match(/#\d+$/)(location.hash);
			return t ? t[0] : "#1"
		}
		function L(t) {
			return t.split("#").pop()
		}
		function D() {
			var t = orz.match(/#[^#]+/)(location.hash);
			return t ? m.find('[href="' + t[0] + '"]') : m.find("a").eq(0)
		}
		function P() {
			t.removeClass("hidden"),
			e.css("background-image", "url(" + i.avatar + ")"),
			n.html(i.name),
			r.html(i.company + " " + i.job),
			o.html(i.info)
		}
		function U() {
			return 20
		}
		function M() {
			q(),
			v.html(""),
			p.addClass("hidden"),
			C.addClass("hidden"),
			y.addClass("hidden"),
			k.addClass("hidden"),
			_.addClass("hidden"),
			z.html("");
			var t = D();
			switch (m.find("a").removeClass("current"), t.addClass("current"), t.attr("href")) {
			case "#publish":
				y.removeClass("hidden"),
				v.html(' <a href="#publish#all">全部</a>  <a href="#publish#post">教程</a>  <a href="#publish#software">神器</a>  <a href="#publish#inspiration">灵感</a> '),
				p.removeClass("hidden");
				break;
			case "#fav":
				y.removeClass("hidden"),
				v.html(' <a href="#fav#all">全部</a>  <a href="#fav#post">教程</a>  <a href="#fav#software">神器</a>  <a href="#fav#inspiration">灵感</a> '),
				p.removeClass("hidden");
				break;
			case "#mine":
				C.removeClass("hidden");
				break;
			case "#msg":
				k.removeClass("hidden"),
				v.html(' <a href="#msg#all">全部消息</a>  <a href="#msg#system">系统消息</a>  <a href="#msg#comment">评论回复</a> '),
				p.removeClass("hidden");
				break;
			case "#setting":
				_.removeClass("hidden"),
				v.html('<span class="setting-sub-title">个人资料</span>'),
				p.removeClass("hidden")
			}
			g.html(t.text());
			var e = function a() {
				var t = orz.match(/#[^#]+#[^#]+/)(location.hash);
				return t ? v.find('[href="' + t[0] + '"]') : v.find("a").eq(0)
			} ();
			v.children("a").removeClass("current"),
			e.addClass("current");
			var n = N().substring(1);
			n < 1 && (n = 1);
			var r = {
				action: "user_center_data",
				uid: uisdc.uid,
				type: e.attr("href"),
				paged: n,
				ppp: U(e.attr("href"))
			};
			"#mine" == t.attr("href") && (r.type = "#mine"),
			"#setting" == t.attr("href") && (r.type = "#setting");
			var o = X()(J()(Y.a, G.a), r.type.split("#")).shift();
			s.attr("class", "user-center"),
			s.addClass("user-center-" + o),
			function i(t) {
				var e = t.type,
				n = t.paged;
				if (orz.match("#fav")(e) || orz.match("#publish")(e)) {
					if (orz.isArray(u[e]) && (u[e][n] || orz.match("#fav")(e))) return H(u[e][n], e);
					orz.post(R, t, s)
				}
				orz.match("#mine")(e);
				orz.match("#msg")(e);
				orz.match("#setting")(e)
			} (r)
		}
		function F() {
			var t = a(this).attr("data-prop"),
			e = (i[t], a(this).val());
			i[t] = e,
			P(),
			function n(t) {
				a(t).siblings(".holdTxt").removeClass("hidden").children("em").html(a(t).val()),
				a(t).addClass("hidden")
			} (this)
		}
		function I(t) {
			return i[t] != c[t] ? i[t] : ""
		}
		function R(t) {
			if (t) {
				var e, n = (t = orz.jsonDecode(t)).data,
				r = t.type,
				o = t.post_type,
				a = t.pages,
				i = t.paged,
				s = t.total,
				c = "#" + r + "#" + o;
				if (n) {
					if ("publish" == r && (h[c] = a, orz.isArray(u[c]) || (u[c] = []), u[c][i] = n[o]), "fav" == r) {
						for (var l in n) if (n.hasOwnProperty(l)) {
							for (e = n[l], u["#fav#" + l] = [], u["#fav#" + l].push([]); 0 < e.length;) u["#fav#" + l].push(e.splice(0, 20));
							h["#fav#" + l] = u["#fav#" + l].length - 1
						}
						140 <= s && A() && O.removeClass("hidden")
					}
					H(u[c][i], c)
				}
			}
		}
		function H(t, e) {
			if (t && 0 < t.length) {
				q();
				var n = L(e);
				z.attr("class", "items articles_default"),
				z.addClass("items-" + n),
				z.html(orz.map(E[n], t).join("")),
				w.removeClass("hidden"),
				function f(t) {
					var e = h[t],
					n = "",
					r = N().substring(1),
					o = "",
					a = "",
					i = r - 1,
					s = r - 0 + 1,
					c = r - Math.ceil(2);
					c < 1 && (c = 1);
					var l = c + 4;
					if (e < l && (c = (l = e) - 4) < 1 && (c = 1), 0 < e) {
						1 == r && (o = "hidden"),
						r == e && (a = "hidden"),
						n += '<li class="fy ' + o + '"><a href="' + t + "#" + i + '" data-nav="prev"><span><i class="icon-left-open-big"></i> 上一页</span></a></li>',
						1 < c && (n += '<li><a href="' + t + '#1"><span>1</span></a></li>'),
						2 < c && (n += '<li class="disabled"><a class="disabled" href="' + t + '"><span>...</span></a></li>');
						for (var u = c; u <= l; u++) {
							var d = "";
							u == r && (d = ' class="active disabled"'),
							n += "<li " + d + '><a href="' + t + "#" + u + '"><span>' + u + "</span></a></li>"
						}
						l < e - 1 && (n += '<li class="disabled"><a class="disabled" href="' + t + '"><span>...</span></a></li>'),
						l < e && (n += '<li><a href="' + t + "#" + e + '"><span>' + e + "</span></a></li>"),
						n += '<li class="fy ' + a + '"><a href="' + t + "#" + s + '" data-nav="next"><span>下一页 <i class="icon-right-open-big"></i></span></a></li>',
						b.html(n)
					}
				} (e)
			} else S(),
			w.addClass("hidden")
		}
		function B(t) {
			var e = '<div class="item_wrap">';
			return e += '<div class="item">',
			e += '<div class="item-thumb">',
			e += '<a href="' + t.href + '" class="h-mark item-href" target="_blank">',
			e += '<i class="thumb" style="background-image:url(' + t.thumb + ');"></i>',
			e += "</a>",
			e += "</div>",
			e += '<div class="item-main">',
			e += "<h2>",
			e += '<a href="' + t.href + '" target="_blank">',
			e += t.title,
			e += "</a>",
			e += "</h2>",
			e += "<h4>",
			e += '<span class="author"><a href="' + t.ulink + '" target="_blank"> <i class="thumb avatar" style="background-image:url(' + t.avatar + ')"></i> ' + t.author + "</a></span>",
			e += '<span class="term"> <a href="' + t.term_href + '" target="_blank">' + t.term_name + " </a> </span>",
			e += "</h4>",
			e += "</div>",
			e += "</div>",
			e +=
			function n(t) {
				var e = "";
				return "#fav" == D().attr("href") && A() && (e += '<div class="fav-edit">', e += '已看完 <span class="btn btn-orange-border remove_fav" data-uid="' + uisdc.uid + '" data-pid="' + t.pid + '">移除</span>', e += "</div>"),
				e
			} (t),
			e += "</div>"
		}
	} (jQuery),
	function(t) {
		if (! (t(".usercenter-body").length < 1)) t(".header .container"),
		t(".header .site-menu"),
		t(".header .logo"),
		t(".header .header-login-search")
	} (jQuery),
	r = jQuery,
	o = orz.attr("target"),
	orz.click(function() {
		var t = o(this);
		return r(this).addClass("hidden"),
		r(this).siblings('[data-prop="' + t + '"]').removeClass("hidden").focus(),
		!1
	},
	".holdTxt")
},
function(t, e, n) {
	var i = n(5),
	s = n(65);
	t.exports = function c(r, o, a) {
		return function() {
			if (0 === arguments.length) return a();
			var t = Array.prototype.slice.call(arguments, 0),
			e = t.pop();
			if (!i(e)) {
				for (var n = 0; n < r.length;) {
					if ("function" == typeof e[r[n]]) return e[r[n]].apply(e, t);
					n += 1
				}
				if (s(e)) return o.apply(null, t)(e)
			}
			return a.apply(this, arguments)
		}
	}
},
function(t, e) {
	t.exports = function n(t) {
		return null != t && "function" == typeof t["@@transducer/step"]
	}
},
function(t, e) {
	t.exports = function a(t, e) {
		for (var n = 0,
		r = e.length,
		o = []; n < r;) t(e[n]) && (o[o.length] = e[n]),
		n += 1;
		return o
	}
},
function(t, e, n) {
	var r = n(0),
	o = n(5),
	a = n(7),
	i = r(function(t) {
		return !! o(t) || !!t && ("object" == typeof t && (!a(t) && (1 === t.nodeType ? !!t.length: 0 === t.length || 0 < t.length && (t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)))))
	});
	t.exports = i
},
function(t, e) {
	var n = function() {
		function t(t) {
			this.f = t
		}
		return t.prototype["@@transducer/init"] = function() {
			throw new Error("init not implemented on XWrap")
		},
		t.prototype["@@transducer/result"] = function(t) {
			return t
		},
		t.prototype["@@transducer/step"] = function(t, e) {
			return this.f(t, e)
		},
		t
	} ();
	t.exports = function r(t) {
		return new n(t)
	}
},
function(t, e, n) {
	var r = n(4),
	o = n(1)(function o(t, e) {
		return r(t.length,
		function() {
			return t.apply(e, arguments)
		})
	});
	t.exports = o
},
function(t, e, n) {
	var r = n(1),
	o = n(71),
	a = function() {
		function t(t, e) {
			this.xf = e,
			this.f = t
		}
		return t.prototype["@@transducer/init"] = o.init,
		t.prototype["@@transducer/result"] = o.result,
		t.prototype["@@transducer/step"] = function(t, e) {
			return this.f(e) ? this.xf["@@transducer/step"](t, e) : t
		},
		t
	} (),
	i = r(function i(t, e) {
		return new a(t, e)
	});
	t.exports = i
},
function(t, e) {
	t.exports = {
		init: function() {
			return this.xf["@@transducer/init"]()
		},
		result: function(t) {
			return this.xf["@@transducer/result"](t)
		}
	}
},
function(t, e, n) {
	var r = n(4),
	o = n(73),
	a = n(74),
	i = n(75);
	t.exports = function s() {
		if (0 === arguments.length) throw new Error("pipe requires at least one argument");
		return r(arguments[0].length, a(o, arguments[0], i(arguments)))
	}
},
function(t, e) {
	t.exports = function n(t, e) {
		return function() {
			return e.call(this, t.apply(this, arguments))
		}
	}
},
function(t, e, n) {
	var r = n(14)(n(11));
	t.exports = r
},
function(t, e, n) {
	var r = n(15),
	o = n(0)(r("tail", n(76)(1, Infinity)));
	t.exports = o
},
function(t, e, n) {
	var r = n(15),
	o = n(14)(r("slice",
	function o(t, e, n) {
		return Array.prototype.slice.call(n, t, e)
	}));
	t.exports = o
},
function(t, e, n) {
	var r = n(0),
	o = n(7),
	a = r(function a(t) {
		return o(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse()
	});
	t.exports = a
},
function(t, e, n) {
	var r = n(0),
	o = n(13),
	a = n(5),
	i = n(10),
	s = n(7),
	c = r(function c(t) {
		return null != t && "function" == typeof t["fantasy-land/empty"] ? t["fantasy-land/empty"]() : null != t && null != t.constructor && "function" == typeof t.constructor["fantasy-land/empty"] ? t.constructor["fantasy-land/empty"]() : null != t && "function" == typeof t.empty ? t.empty() : null != t && null != t.constructor && "function" == typeof t.constructor.empty ? t.constructor.empty() : a(t) ? [] : s(t) ? "": i(t) ? {}: o(t) ?
		function() {
			return arguments
		} () : void 0
	});
	t.exports = c
},
function(t, e, n) {
	var r = n(1),
	o = n(80),
	a = r(function a(t, e) {
		return o(t, e, [], [])
	});
	t.exports = a
},
function(t, e, n) {
	var s = n(81),
	c = n(82),
	u = n(83),
	d = n(8),
	f = n(84),
	h = n(12),
	m = n(85);
	function p(t, e, n, r) {
		var o = s(t),
		a = s(e);
		function i(t, e) {
			return v(t, e, n.slice(), r.slice())
		}
		return ! c(function(t, e) {
			return ! c(i, e, t)
		},
		a, o)
	}
	function v(t, e, n, r) {
		if (f(t, e)) return ! 0;
		var o = m(t);
		if (o !== m(e)) return ! 1;
		if (null == t || null == e) return ! 1;
		if ("function" == typeof t["fantasy-land/equals"] || "function" == typeof e["fantasy-land/equals"]) return "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e) && "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t);
		if ("function" == typeof t.equals || "function" == typeof e.equals) return "function" == typeof t.equals && t.equals(e) && "function" == typeof e.equals && e.equals(t);
		switch (o) {
		case "Arguments":
		case "Array":
		case "Object":
			if ("function" == typeof t.constructor && "Promise" === u(t.constructor)) return t === e;
			break;
		case "Boolean":
		case "Number":
		case "String":
			if (typeof t != typeof e || !f(t.valueOf(), e.valueOf())) return ! 1;
			break;
		case "Date":
			if (!f(t.valueOf(), e.valueOf())) return ! 1;
			break;
		case "Error":
			return t.name === e.name && t.message === e.message;
		case "RegExp":
			if (t.source !== e.source || t.global !== e.global || t.ignoreCase !== e.ignoreCase || t.multiline !== e.multiline || t.sticky !== e.sticky || t.unicode !== e.unicode) return ! 1
		}
		for (var a = n.length - 1; 0 <= a;) {
			if (n[a] === t) return r[a] === e; --a
		}
		switch (o) {
		case "Map":
			return t.size === e.size && p(t.entries(), e.entries(), n.concat([t]), r.concat([e]));
		case "Set":
			return t.size === e.size && p(t.values(), e.values(), n.concat([t]), r.concat([e]));
		case "Arguments":
		case "Array":
		case "Object":
		case "Boolean":
		case "Number":
		case "String":
		case "Date":
		case "Error":
		case "RegExp":
		case "Int8Array":
		case "Uint8Array":
		case "Uint8ClampedArray":
		case "Int16Array":
		case "Uint16Array":
		case "Int32Array":
		case "Uint32Array":
		case "Float32Array":
		case "Float64Array":
		case "ArrayBuffer":
			break;
		default:
			return ! 1
		}
		var i = h(t);
		if (i.length !== h(e).length) return ! 1;
		var s = n.concat([t]),
		c = r.concat([e]);
		for (a = i.length - 1; 0 <= a;) {
			var l = i[a];
			if (!d(l, e) || !v(e[l], t[l], s, c)) return ! 1; --a
		}
		return ! 0
	}
	t.exports = v
},
function(t, e) {
	t.exports = function r(t) {
		for (var e, n = []; ! (e = t.next()).done;) n.push(e.value);
		return n
	}
},
function(t, e) {
	t.exports = function a(t, e, n) {
		for (var r = 0,
		o = n.length; r < o;) {
			if (t(e, n[r])) return ! 0;
			r += 1
		}
		return ! 1
	}
},
function(t, e) {
	t.exports = function n(t) {
		var e = String(t).match(/^function (\w*)/);
		return null == e ? "": e[1]
	}
},
function(t, e) {
	t.exports = "function" == typeof Object.is ? Object.is: function n(t, e) {
		return t === e ? 0 !== t || 1 / t == 1 / e: t != t && e != e
	}
},
function(t, e, n) {
	var r = n(0)(function r(t) {
		return null === t ? "Null": t === undefined ? "Undefined": Object.prototype.toString.call(t).slice(8, -1)
	});
	t.exports = r
},
function(t, e) {
	var n; (n = jQuery)("body").on("click", '[data-target="search_dropdown"]',
	function() {
		setTimeout(function() {
			n("#search_dropdown").find("input.s").trigger("focus")
		},
		500)
	}),
	function(t) {
		var e = t(".dropdown-search");
		if (! (e.length < 1)) {
			var n = e.find(".search-content");
			r(),
			t(window).on("resize", r)
		}
		function r() {
			var t = document.documentElement.clientHeight;
			n.css({
				"max-height": t - 70 - 50
			})
		}
	} (jQuery),
	function(n) {
		function r() {
			var t = orz.getCookie("search_history");
			return orz.isNotEmpty(t) && (t = orz.jsonDecode(t), !orz.isEmpty(t) && orz.isObject(t) || (t = {})),
			t
		}
		var c = orz.lpad("0", 2);
		function t(t) {
			var e, n, r, o, a, i = [];
			if (orz.isObject(t)) for (var s in t) t.hasOwnProperty(s) && i.unshift("<li><span>" + (o = t[s], a = void 0, (a = new Date).setTime(o), c(a.getMonth() + 1) + "-" + c(a.getDate()) + " " + c(a.getHours()) + ":" + c(a.getMinutes())) + '</span><a href="' + (r = s, orz.currentPageUrl() + "?s=" + r) + '" title="' + s + '">' + (n = 8, (e = s).length > n && (e = e.substring(0, n) + "..."), e) + '</a><i class="icon-close search-tag-close" data-tag="' + s + '"></i></li>');
			return orz.isEmpty(i) && (i = ["你还没搜索过喔。"]),
			(i = i.slice(0, 12)).join("")
		}
		var e = r(),
		o = t(e);
		0 < n("body.search").length && (!
		function i() {
			var t = r(),
			e = orz._get("s");
			orz.isNotEmpty(e) && (delete t[e = decodeURIComponent(e)], t[e] = (new Date).getTime(), orz.setCookie("search_history", orz.jsonEncode(t)))
		} (),
		function s() {
			var t = n(".search-widget-history .widget-title");
			if (! (t.length < 1)) {
				var e = r();
				0 < Object.keys(e).length && t.append('<span class="clear-all-history">全部清除</span>')
			}
		} ());
		var a = n(".search_history");
		0 < a.length && (a.html(o), orz.isEmpty(e) && a.parents(".history").addClass("no-history")),
		orz.click(function l() {
			orz.setCookie("search_history", ""),
			n(this).remove(),
			n("#search_history").html(t({}))
		},
		".clear-all-history"),
		orz.click(function u() {
			var t = r();
			delete t[n(this).attr("data-tag")],
			orz.setCookie("search_history", orz.jsonEncode(t)),
			n(this).parent().remove()
		},
		".search-tag-close"),
		n(".search-item").on("click",
		function() {
			if (!orz.sm()) return document.location = n(this).children("h3").children("a").attr("href"),
			!1
		})
	} (jQuery)
},
function(t, e) { !
	function(a) {
		if (! (a("body.single").length < 1)) {
			var r = orz.match(/\bpostid-(\d+)\b/),
			i = function i(t) {
				var e = a(t).attr("class"),
				n = r(e);
				return orz.isArray(n) ? n[1] : 0
			};
			a(document).on("userLogged",
			function() {
				var t = function o() {
					var t = a(".singular-title");
					return t.length < 1 && (t = a()),
					t
				} (),
				e = i(a("body")),
				n = orz.currentUser.menus.edit || "";
				if (orz.isNotEmpty(n)) {
					var r = '<span class="edit_btn"> <a href="' + (n.replace("edit", "post") + "?post=" + e + "&action=edit") + '" class="btn btn-orange">编辑</a> </span>';
					t.append(r)
				}
			})
		}
	} (jQuery)
},
function(t, e) { !
	function(a) {
		a(".article img").each(function() {
			a(this).attr("data-component", "images-show")
		});
		var e = a('[data-component="images-show"]');
		if (! (e.length < 1)) {
			var i = 0,
			s = e.length,
			t = orz.attr("index"),
			n = function n() {
				e.each(function() {
					a(this).attr("data-index") || a(this).attr("data-index", e.index(a(this)) + 1)
				})
			};
			n();
			var r = function r() {
				a(".modal-mark").addClass("modal-show"),
				a(".modal-mark").addClass("modal-show-images")
			},
			o = function o() {
				if (i < 1 && (i = 1), i <= s) {
					c(),
					a("#images_show .count-now").html(i);
					var t = e.filter("[data-index=" + i + "]");
					0 < t.length && a("#images_show .images-show-content").html('<img src="' + t.attr("src") + '">')
				} else i = s + 1,
				l();
				d()
			},
			c = function c() {
				a("body").addClass("hideScroll"),
				a("#images_show").addClass("modal-show"),
				a(".images-show .count-total").html(s),
				a("#images_show .count-now").html(i),
				a("#images_show_last").removeClass("modal-show"),
				d()
			},
			l = function l() {
				a("#images_show_last").length < 1 ? a(".modal-mark").trigger("click") : (a("body").addClass("hideScroll"), a("#images_show_last").addClass("modal-show"), a(".images-show_last .count-total").html(s), a("#images_show_last .count-now").html(i), a("#images_show").removeClass("modal-show"), d(), u())
			},
			u = function u() {
				var t = a(".images-show-content-last .cont"),
				e = 0;
				t.each(function() {
					var t = a(this).height();
					e < t && (e = t)
				}),
				t.height(e)
			},
			d = function d() {
				var n = a(".images-show.modal-show");
				if (! (n.length < 1)) {
					var r = n.find(".images-show-wrap");
					r.length < 1 || setTimeout(function() {
						var t = r.outerHeight(),
						e = document.documentElement.clientHeight;
						t < e - 40 ? r.css("margin-top", (e - 40 - t) / 2) : r.css("margin-top", 0),
						n.scrollTop(0)
					},
					10)
				}
			};
			e.on("click",
			function() {
				orz.md() && (i = t(a(this)), r(), c(), o())
			});
			var f = !1;
			a("body").on("mousemove", "#images_show .images-show-content",
			function(t) {
				var e = a(this),
				n = e.width(),
				r = t.clientX,
				o = e.offset();
				f || (f = !0, setTimeout(function() {
					r < o.left + .5 * n ? (e.addClass("rp"), e.removeClass("rn")) : r > o.left + .5 * n ? (e.addClass("rn"), e.removeClass("rp")) : (e.removeClass("rp"), e.removeClass("rn")),
					i <= 1 && e.removeClass("rp"),
					s < i && e.removeClass("rn"),
					f = !1
				},
				20))
			}),
			a("body").on("click", "#images_show .images-show-content",
			function() {
				a(this).hasClass("rp") && i--,
				a(this).hasClass("rn") && i++,
				o()
			}),
			a("body").on("click", ".images-show",
			function(t) {
				a(t.target).hasClass("images-show") && a(this).find(".modal-close").trigger("click")
			}),
			a(document).on("keydown",
			function(t) {
				a(".images-show").hasClass("modal-show") && (39 != t.keyCode && 32 != t.keyCode || (i++, o()), 37 == t.keyCode && (i--, o()))
			}),
			a("body").on("click", "#replay-view",
			function() {
				i = 1,
				o()
			})
		}
	} (jQuery)
},
function(t, e) {
	var a; (a = jQuery)(".home").length < 1 || a(".home-posts").each(function() {
		var t = a(this).find(".subs .menu-0"),
		e = a(this).find(".subs .menu-1"),
		n = a(this).find(".items-new"),
		r = a(this).find(".items-hot"),
		o = a(this).attr("data-pt");
		t.on("click",
		function() {
			return n.removeClass("hidden"),
			r.addClass("hidden"),
			e.removeClass("current"),
			t.addClass("current"),
			!1
		}),
		e.on("click",
		function() {
			return n.addClass("hidden"),
			r.removeClass("hidden"),
			t.removeClass("current"),
			e.addClass("current"),
			r.length < 1 && (r = a('<div class="section-items items-hot"></div>'), n.after(r), orz.post(function(t) {
				t && (t = orz.jsonDecode(t), console.log(t), t && r.html(t.data))
			},
			{
				action: "get_home_recommends_hot",
				post_type: o
			},
			null)),
			!1
		})
	})
},
function(t, e) { !
	function(n) {
		var e = ".btn-baidupan";
		if (! (n(e).length < 1)) {
			n(e).on("click",
			function() {
				location.hash = "post_download"
			});
			var r = [];
			n(document).on("userLogged",
			function() {
				n(e).each(function() {
					var t = n(this).data("pid"),
					e = n(this).data("index");
					r.length < 1 ? orz.post(function(t) {
						t && (t = orz.jsonDecode(t), r = t.data, o(e))
					},
					{
						action: "get_post_download",
						pid: t
					},
					this) : o(e)
				})
			})
		}
		function o(t) {
			n(e).eq(t).removeClass("modal-open"),
			n(e).eq(t).attr("data-modal-id", ""),
			n(e).eq(t).attr("href", r[t].url),
			n(e).eq(t).children(".txt").html("百度云盘")
		}
	} (jQuery)
},
function(t, e) {
	var n, o, a, i; (n = jQuery)("a").tap(function(t) {
		if (!orz.md()) {
			var e = n(this).attr("href");
			orz.isNotEmpty(e) && (window.location = e)
		}
		return ! 1
	}),
	o = jQuery,
	a = orz.attr("url"),
	i = orz.attr("title"),
	orz.click(function() {
		var t = a(this),
		e = i(this);
		return orz.isEmpty(t) && (t = location.href),
		orz.isEmpty(e) && (e = o("title").text()),
		function r(t, e) {
			try {
				window.external.addFavorite(e, t)
			} catch(n) {
				try {
					window.sidebar.addPanel(t, e, "")
				} catch(n) {
					alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
				}
			}
		} (e, t),
		!1
	},
	".btn-fav"),
	jQuery(".article a").attr("target", "_blank"),
	jQuery("body").on("click", ".tag_a",
	function() {
		return ! 1
	})
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r = n(6),
	o = n.n(r),
	a = n(19),
	i = n.n(a); !
	function(n) {
		var r = n("#login");
		if (! (r.length < 1)) {
			var t = orz.getCookie("wechatHasTryLogin");
			n(document).on("userLogged",
			function() {
				var t = orz.currentUser.menus,
				e = t.center;
				r.children("a").removeClass("modal-open"),
				r.children("a").html('<span class="avatar thumb"></span>'),
				r.children("a").children(".avatar").css("background-image", "url(" + orz.currentUser.avatar + ")");
				var n = '<div class="login-down">';
				n += '<div class="login-div">',
				n += '<div class="info">',
				n += '<div class="info-thumb"> <i class="thumb" style="background-image:url(' + orz.currentUser.avatar + ');"></i> </div>',
				n += '<h2 class="user-name">' + orz.currentUser.name + "</h2>",
				n += '<h4 class="user-info">' + orz.currentUser.info + "</h4>",
				n += "</div>",
				n += '<div class="main">',
				n += '<div class="main-menu">',
				n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + e + '"> <i class="icon-015"></i> 个人中心 </a> </div></div>',
				n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + e + '#fav"> <i class="icon-016"></i> 我收藏的 </a> </div></div>',
				n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + e + '#publish"> <i class="icon-017"></i> 我发布的 </a> </div></div>',
				t.edit || t.comment || t.admin || (n += '<div class="item"><div class="item-content"> <a class="item_a" href="https://wj.qq.com/s2/5777420/dd86/" target="_blank"> <i class="icon-tool-2"></i> 我要投稿 </a> </div></div>'),
				t.edit && (n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + t.edit + '"> <i class="icon-018"></i> 文章管理 </a> </div></div>'),
				t.comment && (n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + t.comment + '"> <i class="icon-019"></i> 评论管理 </a> </div></div>'),
				t.admin && (n += '<div class="item"><div class="item-content"> <a class="item_a" href="' + t.admin + '"> <i class="icon-020"></i> 后台管理 </a> </div></div>'),
				n += "</div>",
				n += '<div class="main-menu-2">',
				n += '<div class="item"> <a href="' + e + '#setting"> 帐户管理 </a> </div>',
				n += '<div class="item"> <a href="' + (t.logout + "&redirect_to=" + decodeURIComponent(location.href)) + '"> 安全退出 </a> </div>',
				n += "</div>",
				n += "</div>",
				n += "</div>",
				n += "</div>",
				r.append(n),
				r.addClass("has-children")
			}),
			n(document).on("userNotLogged",
			function() {
				r.children("a").children(".avatar").addClass("avatar-default"),
				n("body").append(function t() {
					return 0 < n(".modal-login-panel").length ? "": '<div class="modal-login-panel modal-part modal-part-middle" id="modal_login"><div class="login_wrap"><div class="wxlogin-sidebar"><h2>优质设计教程自学网站</h2><ul><li> <i class="icon-option"></i> 全站23880个高清热门教程 </li><li> <i class="icon-option"></i> 教程每日更新！免费系统自学 </li><li> <i class="icon-option"></i> 大家都在看的海量设计灵感库 </li><li> <i class="icon-option"></i> 免费字体设计神器实时更新 </li></ul></div><div class="wxlogin-main"><h2> <span class="current">微信登录</span> <span>帐户登录</span> </h2><div class="wxlogin-main-content"><h4 class="wechatoffiH4">扫码并 <em>关注<img src="https://images.uiiiuiii.com/wp-content/uploads/2020/07/uiii-wechat.png" alt="优优公众号">优优公众号</em> 安全快捷登录</h4><div class="ewm"><iframe id="wechatEwm" src="about:blank" width="288px" height="270px" frameborder="0" sandbox="allow-scripts allow-top-navigation" scrolling="no"></iframe></div><p class="wxlogin-protocol"><label class="checked"><input type="radio" name="check_protocol" checked value="yes"> <i class="ico"></i> 扫码登录即表示您同意并遵守 </label> <a class="link" href="https://uiiiuiii.com/agreement" target="_blank">用户协议</a> </p><p style="margin-top:5px;">欢迎大家关注官方微博 <a href="https://www.weibo.com/uiiiuiii" target="_blank" style="color:#3385ff;">@优优教程网</a></p></div></div><span class="modal-close"> <i class="icon-close"></i> </span></div></div>'
				} ())
			}),
			orz.click(function(t) {
				t.stopPropagation(),
				t.preventDefault(),
				orz.log(n(this).attr("class")),
				n(this).toggleClass("checked")
			},
			".wxlogin-protocol label"),
			orz.click(function() {
				if (n(this).hasClass("modal-open")) if ("微信" == orz.getDevice()) n("#modal_login").hide(),
				location.href = uisdc.loginWechatEWM;
				else {
					var t = 1e3 * Math.random();
					n("#wechatEwm").attr("src", uisdc.loginEWMOffi + "?nouce=" + t),
					uisdc.wechatNouce = t,
					n("body").trigger("loginPanelOpen")
				} else orz.isMobile() && n(this).parent().toggleClass("opend")
			},
			'[data-modal-id="modal_login"]'),
			"微信" == orz.getDevice() && (n("body").addClass("body-wechat"), n(".header .login-panel").addClass("wechat-login"), orz.click(function() {
				return ! 1
			},
			".header .login-panel .avatar_a")),
			n(document).on("userNotLogged",
			function() {
				"微信" == orz.getDevice() && 1 != t && (orz.setCookie("wechatHasTryLogin", 1, 1 / 24), location.href = uisdc.loginWechatEWM)
			}),
			n("body").on("modal.close",
			function() {
				uisdc.wechatNouce = null,
				uisdc.wechatLogined = null
			}),
			n("body").on("loginPanelOpen",
			function() {
				if (!i()(uisdc.wechatNouce)) {
					var e = function e() {
						0 === uisdc.wechatLogined ? n.get(uisdc.checkLoginEWMOffi + "?nouce=" + uisdc.wechatNouce,
						function(t) {
							"done" == t ? (uisdc.wechatLogined = 1, console.log("已登录"), location.href = uisdc.wechatOffi + "&nouce=" + uisdc.wechatNouce + "&redirect=" + encodeURIComponent(location.href)) : (console.log("未登录"), setTimeout(e, 1e3))
						}) : 1 === uisdc.wechatLogined ? console.log("登录了") : console.log("关闭登录框")
					};
					uisdc.wechatLogined = 0,
					e()
				}
			}),
			n(document).on("userNotLogged",
			function() {
				var t = orz.getCookie("hasShowLoginTip"),
				e = n('<div class="show-login-tip" id="showLoginTip">欢迎<a href="#" class="modal-open" data-modal-id="modal_login">登录</a>体验更多功能</div>');
				o()(t) && (n("body").append(e), setTimeout(function() {
					e.addClass("show")
				},
				2e3))
			}),
			n("body").on("loginPanelOpen",
			function() {
				n("#showLoginTip").remove(),
				orz.setCookie("hasShowLoginTip", (new Date).getTime(), .5)
			})
		}
	} (jQuery)
},
function(t, e) {
	var n, r, o, a, i, s, c, l, u;
	n = jQuery,
	r = function r() {
		return "/" == location.pathname
	},
	o = function o() {
		return orz.getCookie("hasLoged") - 0 || 0
	},
	a = function a() {
		$data = o(),
		$data++,
		orz.setCookie("hasLoged", $data, 1e4)
	},
	i = function i() {
		return orz.getCookie("notLoginHasShowLoginPanel") - 0 || 0
	},
	s = function s() {
		$data = i(),
		$data++,
		orz.setCookie("notLoginHasShowLoginPanel", $data, 1)
	},
	c = function c() {
		return orz.getCookie("notLoginHasViewPages") - 0 || 0
	},
	l = function l() {
		$data = c(),
		$data++,
		orz.setCookie("notLoginHasViewPages", $data, 1)
	},
	u = function u() {
		orz.showLogin(),
		n("body").addClass("notLoginUserLoginEvent")
	},
	n(document).on("userLogged",
	function() {
		a()
	}),
	n(document).on("userNotLogged",
	function() {
		orz.sm() && (orz.isMobile() || o() || r() || 1 < i() || (l(), 2 != c() && 5 != c() || setTimeout(function() {
			u(),
			s()
		},
		2e3)))
	}),
	n("body").on("modal.close",
	function() {
		n("body").removeClass("notLoginUserLoginEvent")
	})
},
function(t, e) { !
	function(t) {
		orz.currentUser = null;
		var e = orz.getCookie("currentUser");
		e ? (e = orz.jsonDecode(decodeURIComponent(e.replace(/%/g, "%25"))), (orz.currentUser = e) && t(document).trigger("userLogged")) : t(document).trigger("userNotLogged")
	} (jQuery)
},
function(t, e) { !
	function(i) {
		if ("undefined" != typeof _hmt) {
			var s = orz.attr("category"),
			c = orz.attr("action"),
			l = orz.attr("label");
			i.map([{
				tag: ".home-slide .vitara_slide a",
				category: "首页轮播"
			},
			{
				tag: ".menu-primary .link-0",
				category: "主菜单"
			},
			{
				tag: ".home-section-first-menus .menu",
				category: "首页首屏菜单"
			},
			{
				tag: ".home-section-first-menus .sub a",
				category: "首页首屏子菜单"
			}],
			function(a) {
				orz.click(function() {
					var t = i(a.tag).index(i(this));
					t++;
					var e = a.label;
					"href" == e && (e = i(this).attr("href"));
					var n = s(this) || a.category || a.tag,
					r = c(this) || a.action || "点击",
					o = l(this) || e || i(this).text() || "序号：" + t;
					_hmt.push(["_trackEvent", n, r, o])
				},
				a.tag)
			})
		}
	} (jQuery)
},
function(t, e, n) {
	"use strict";
	n.r(e);
	var r = n(9),
	q = n.n(r),
	Q = jQuery;
	var o = function N(t) {
		var n = Q(t),
		r = n.attr("data-img-width") || 500,
		o = n.attr("data-content-width") || 500,
		a = n.attr("data-img-height") || 300,
		i = n.attr("data-max-height") || 300,
		e = n.attr("data-animate") || "leftToRight",
		s = n.attr("data-speed") || 5e3,
		c = n.attr("data-event") || "click",
		l = n.children(".vitara_slide"),
		u = r / a,
		d = o / a;
		if (! (l.length < 1)) {
			var f = l.children("ul");
			if (! (f.length < 1)) {
				var h = f.children("li");
				if (! (h.length < 1 || h.length < 2)) {
					var m = 0,
					p = q()(function(t, e, n) {
						h.filter("." + e).stop(!0, !0),
						h.filter("." + e).animate(t, 500,
						function() {
							Q(this).removeClass(e).addClass(n)
						})
					}),
					v = p({
						left: "100%",
						top: 0
					}),
					g = p({
						top: 0,
						left: "-100%"
					}),
					y = {
						leftToRight: {
							readyGo: p({
								left: 0,
								top: 0
							}),
							currentGo0: g,
							currentGo1: v
						}
					},
					z = q()(function(t, e) {
						h.filter("." + e).css(t)
					}),
					w = z({
						left: "100%"
					}),
					b = z({
						left: "-100%"
					}),
					C = {
						leftToRight: w
					},
					k = {
						leftToRight: b
					}; !
					function S() {
						var t = '<div class="extra"><ul class="ul_' + h.length + '">',
						e = 1;
						h.each(function() {
							t += '<li><i class="sign icon-circle-empty"></i><span class="num">' + e + '</span><span class="title">' + n.attr("data-title") + "</span></li>",
							e++
						}),
						t += "</ul></div>",
						n.append(t),
						n.append('<span class="slide_btn slide_prev"><i class="icon-left"></i></span>'),
						n.append('<span class="slide_btn slide_next"><i class="icon-right"></i></span>'),
						h.eq(0).addClass("current"),
						O(),
						n.removeClass("no-js"),
						n.find(".slide_loading").hide(),
						Q(window).on("resize", O)
					} ();
					var _ = n.children(".slide_btn"),
					x = n.children(".extra").find("li");
					x.eq(0).addClass("current");
					var j = 0;
					j = setTimeout(A, s),
					n.hover(function() {
						clearTimeout(j)
					},
					function() {
						j = setTimeout(A, s)
					}),
					_.on(c,
					function() {
						clearTimeout(j);
						var t = h.index(h.filter(".current"));
						m = 0,
						Q(this).hasClass("slide_prev") && (m = 1, --t < 0 && (t = h.length - 1)),
						Q(this).hasClass("slide_next") && (t += 1) >= h.length && (t = 0),
						E(t)
					}),
					x.on(c,
					function() {
						clearTimeout(j),
						E(x.index(jQuery(this)))
					})
				}
			}
		}
		function O() {
			var t = l.width(),
			e = n.children(".slide_btn");
			l.height(T()),
			h.width(t),
			h.height(T()),
			e.css({
				height: T(),
				"line-height": T() + "px"
			})
		}
		function T() {
			var t = a,
			e = l.width();
			return e < o && (t = e / d),
			r <= e && (t = e / u),
			i < t && (t = i),
			t
		}
		function E(t) {
			h.removeClass("finish"),
			h.removeClass("ready"),
			h.eq(t).addClass("ready"),
			m ? k[e]("ready") : C[e]("ready"),
			y[e]["currentGo" + m]("current", "finish"),
			y[e].readyGo("ready", "current"),
			x.removeClass("current"),
			x.eq(t).addClass("current")
		}
		function A() {
			var t = h.index(h.filter(".current")); (t += 1) >= h.length && (t = 0),
			E(t),
			j = setTimeout(A, s)
		}
	};
	jQuery(".vitara_slide_in").each(function() {
		o(this)
	})
}]);
