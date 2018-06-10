webpackJsonp([20], {
	"./app/components/FlagButton/index.js": function(e, t, n) {
		"use strict";
		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function r(e, t) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
		}
		function i(e, t) {
			if ("function" != typeof t && null !== t)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof t
				);
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
			})),
				t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var a = n("./node_modules/react/index.js"),
			s = n.n(a),
			c = n("./node_modules/js-cookie/src/js.cookie.js"),
			l = n.n(c),
			f = n("./node_modules/jquery/dist/jquery.js"),
			u = n.n(f),
			p = (function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(t, n, o, r) {
					var i = t && t.defaultProps,
						a = arguments.length - 3;
					if ((n || 0 === a || (n = {}), n && i))
						for (var s in i) void 0 === n[s] && (n[s] = i[s]);
					else n || (n = i || {});
					if (1 === a) n.children = r;
					else if (a > 1) {
						for (var c = Array(a), l = 0; l < a; l++) c[l] = arguments[l + 3];
						n.children = c;
					}
					return {
						$$typeof: e,
						type: t,
						key: void 0 === o ? null : "" + o,
						ref: null,
						props: n,
						_owner: null
					};
				};
			})(),
			d = (function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(e, o.key, o);
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t;
				};
			})(),
			g = p(
				"span",
				{ className: "text-muted" },
				void 0,
				p("i", { className: "fa fa-check fa-fw" }),
				" Flagged as not sailing-related"
			),
			h = p("i", { className: "fa fa-flag fa-fw" }),
			v = (function(e) {
				function t(e) {
					o(this, t);
					var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return (
						(n.state = {
							pressed: l.a.get("flagged." + n.props.channel.id) || !1,
							loggedIn: !!l.a.get("me")
						}),
						n
					);
				}
				return (
					i(t, e),
					d(t, [
						{
							key: "flag",
							value: function() {
								u.a.post("/api/channel/flag", { channel: this.props.channel.id }),
									l.a.set("flagged." + this.props.channel.id, "true"),
									this.setState({ pressed: !0 });
							}
						},
						{
							key: "componentWillReceiveProps",
							value: function(e) {
								this.setState({
									pressed: l.a.get("flagged." + e.channel.id) || !1,
									loggedIn: !!l.a.get("me")
								});
							}
						},
						{
							key: "render",
							value: function() {
								return this.state.loggedIn
									? !0 === this.state.pressed || "true" === this.state.pressed
										? g
										: p(
												"a",
												{
													href: "javascript:void();",
													onClick: this.flag.bind(this)
												},
												void 0,
												h,
												" Flag as not sailing-related"
										  )
									: null;
							}
						}
					]),
					t
				);
			})(s.a.Component);
		t.default = v;
	},
	"./node_modules/js-cookie/src/js.cookie.js": function(e, t, n) {
		var o, r;
		!(function(i) {
			var a = !1;
			if (
				((o = i),
				void 0 !== (r = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = r),
				(a = !0),
				(e.exports = i()),
				(a = !0),
				!a)
			) {
				var s = window.Cookies,
					c = (window.Cookies = i());
				c.noConflict = function() {
					return (window.Cookies = s), c;
				};
			}
		})(function() {
			function e() {
				for (var e = 0, t = {}; e < arguments.length; e++) {
					var n = arguments[e];
					for (var o in n) t[o] = n[o];
				}
				return t;
			}
			function t(n) {
				function o(t, r, i) {
					var a;
					if ("undefined" != typeof document) {
						if (arguments.length > 1) {
							if (
								((i = e({ path: "/" }, o.defaults, i)),
								"number" == typeof i.expires)
							) {
								var s = new Date();
								s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires),
									(i.expires = s);
							}
							i.expires = i.expires ? i.expires.toUTCString() : "";
							try {
								(a = JSON.stringify(r)), /^[\{\[]/.test(a) && (r = a);
							} catch (e) {}
							(r = n.write
								? n.write(r, t)
								: encodeURIComponent(String(r)).replace(
										/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
										decodeURIComponent
								  )),
								(t = encodeURIComponent(String(t))),
								(t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
								(t = t.replace(/[\(\)]/g, escape));
							var c = "";
							for (var l in i)
								i[l] && ((c += "; " + l), !0 !== i[l] && (c += "=" + i[l]));
							return (document.cookie = t + "=" + r + c);
						}
						t || (a = {});
						for (
							var f = document.cookie ? document.cookie.split("; ") : [],
								u = /(%[0-9A-Z]{2})+/g,
								p = 0;
							p < f.length;
							p++
						) {
							var d = f[p].split("="),
								g = d.slice(1).join("=");
							this.json || '"' !== g.charAt(0) || (g = g.slice(1, -1));
							try {
								var h = d[0].replace(u, decodeURIComponent);
								if (
									((g = n.read
										? n.read(g, h)
										: n(g, h) || g.replace(u, decodeURIComponent)),
									this.json)
								)
									try {
										g = JSON.parse(g);
									} catch (e) {}
								if (t === h) {
									a = g;
									break;
								}
								t || (a[h] = g);
							} catch (e) {}
						}
						return a;
					}
				}
				return (
					(o.set = o),
					(o.get = function(e) {
						return o.call(o, e);
					}),
					(o.getJSON = function() {
						return o.apply({ json: !0 }, [].slice.call(arguments));
					}),
					(o.defaults = {}),
					(o.remove = function(t, n) {
						o(t, "", e(n, { expires: -1 }));
					}),
					(o.withConverter = t),
					o
				);
			}
			return t(function() {});
		});
	}
});
