webpackJsonp([9], {
	"./app/components/Login/Login.css": function(e, a, o) {
		var n = o("./node_modules/css-loader/index.js!./app/components/Login/Login.css");
		"string" == typeof n && (n = [[e.i, n, ""]]);
		var t = {};
		t.transform = void 0;
		o("./node_modules/style-loader/lib/addStyles.js")(n, t);
		n.locals && (e.exports = n.locals);
	},
	"./app/components/Login/index.js": function(e, a, o) {
		"use strict";
		function n(e, a) {
			if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
		}
		function t(e, a) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !a || ("object" != typeof a && "function" != typeof a) ? e : a;
		}
		function s(e, a) {
			if ("function" != typeof a && null !== a)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof a
				);
			(e.prototype = Object.create(a && a.prototype, {
				constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
			})),
				a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a));
		}
		Object.defineProperty(a, "__esModule", { value: !0 });
		var i = o("./node_modules/react/index.js"),
			r = o.n(i),
			c = o("./app/components/OffsetMenu/index.js"),
			l = o("./app/components/OffsetSocial/index.js"),
			f = o("./app/components/Logo/index.js"),
			d = o("./app/components/Login/Login.css"),
			u = (o.n(d),
			(function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(a, o, n, t) {
					var s = a && a.defaultProps,
						i = arguments.length - 3;
					if ((o || 0 === i || (o = {}), o && s))
						for (var r in s) void 0 === o[r] && (o[r] = s[r]);
					else o || (o = s || {});
					if (1 === i) o.children = t;
					else if (i > 1) {
						for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 3];
						o.children = c;
					}
					return {
						$$typeof: e,
						type: a,
						key: void 0 === n ? null : "" + n,
						ref: null,
						props: o,
						_owner: null
					};
				};
			})()),
			p = (function() {
				function e(e, a) {
					for (var o = 0; o < a.length; o++) {
						var n = a[o];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(a, o, n) {
					return o && e(a.prototype, o), n && e(a, n), a;
				};
			})(),
			m = u(l.a, {}),
			v = u(f.a, { className: "hidden-xs hidden-sm" }),
			g = u(c.a, {}),
			y = u("div", { className: "col-md-4" }),
			b = u("h1", { className: "content-h1" }, void 0, "SignIn"),
			h = u(
				"p",
				{},
				void 0,
				"To provide you with an awesome tailored user interface, you can sign in with your YouTube account."
			),
			N = u("center", {}, void 0, u("p", {}, void 0, "~")),
			x = u(
				"p",
				{},
				void 0,
				"sailing-channels.com",
				" ",
				u(
					"u",
					{},
					void 0,
					"does not publish anything on your behalf nor does it track or share your data"
				),
				"."
			),
			w = u(
				"a",
				{ href: "/oauth2callback", className: "btn btn-danger btn-lg btn-raised" },
				void 0,
				"Sign In with ",
				u("i", { className: "fa fa-youtube" }),
				" YouTube"
			),
			k = u(
				"div",
				{ className: "row feature-row" },
				void 0,
				u(
					"div",
					{ className: "col-md-6 feature-col" },
					void 0,
					u(
						"span",
						{ className: "fa-stack fa-lg" },
						void 0,
						u("i", { className: "fa fa-circle fa-stack-2x" }),
						u("i", { className: "fa fa-youtube-play fa-stack-1x fa-inverse" })
					),
					u("p", {}, void 0, "Manage subscribtions directly from list view")
				),
				u(
					"div",
					{ className: "col-md-6 feature-col" },
					void 0,
					u(
						"span",
						{ className: "fa-stack fa-lg" },
						void 0,
						u("i", { className: "fa fa-circle fa-stack-2x" }),
						u("i", { className: "fa fa-flag fa-stack-1x fa-inverse" })
					),
					u("p", {}, void 0, "Flag channels as not sailing-related")
				)
			),
			j = u(
				"div",
				{ className: "row feature-row" },
				void 0,
				u(
					"div",
					{ className: "col-md-6 feature-col" },
					void 0,
					u(
						"span",
						{ className: "fa-stack fa-lg" },
						void 0,
						u("i", { className: "fa fa-circle fa-stack-2x" }),
						u("i", { className: "fa fa-bullhorn fa-stack-1x fa-inverse" })
					),
					u("p", {}, void 0, "Suggest channels to the list")
				),
				u(
					"div",
					{ className: "col-md-6 feature-col" },
					void 0,
					u(
						"span",
						{ className: "fa-stack fa-lg" },
						void 0,
						u("i", { className: "fa fa-circle fa-stack-2x" }),
						u("i", { className: "fa fa-user fa-stack-1x fa-inverse" })
					),
					u("p", {}, void 0, "View your detailed channel profile page")
				)
			),
			_ = u("div", { className: "col-md-4" }),
			O = (function(e) {
				function a() {
					return (
						n(this, a),
						t(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
					);
				}
				return (
					s(a, e),
					p(a, [
						{
							key: "componentDidMount",
							value: function() {
								document.title = "Sign In | Sailing Channels";
							}
						},
						{
							key: "render",
							value: function() {
								return u(
									"div",
									{ className: "container" },
									void 0,
									m,
									v,
									g,
									u(
										"div",
										{ className: "row content-row" },
										void 0,
										y,
										u(
											"div",
											{ className: "col-md-4" },
											void 0,
											b,
											h,
											N,
											x,
											u(
												"center",
												{
													style: {
														marginTop: "30px",
														marginBottom: "30px"
													}
												},
												void 0,
												w
											),
											k,
											j
										),
										_
									)
								);
							}
						}
					]),
					a
				);
			})(r.a.Component);
		a.default = O;
	},
	"./node_modules/css-loader/index.js!./app/components/Login/Login.css": function(e, a, o) {
		(a = e.exports = o("./node_modules/css-loader/lib/css-base.js")(void 0)),
			a.push([
				e.i,
				".feature-col{text-align:center;font-size:1.1em}.feature-col p{margin-top:10px}.feature-row{margin-bottom:30px}",
				""
			]);
	}
});