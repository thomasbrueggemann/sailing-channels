webpackJsonp([19], {
	"./app/components/SuggestChannels/index.js": function(e, n, t) {
		"use strict";
		function o(e, n) {
			if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
		}
		function i(e, n) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
		}
		function r(e, n) {
			if ("function" != typeof n && null !== n)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof n
				);
			(e.prototype = Object.create(n && n.prototype, {
				constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
			})),
				n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
		}
		Object.defineProperty(n, "__esModule", { value: !0 });
		var a = t("./node_modules/react/index.js"),
			s = (t.n(a), t("./app/helpers/http.js")),
			l = t("./app/components/SuggestChannelsList/Loadable.js"),
			u = (function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(n, t, o, i) {
					var r = n && n.defaultProps,
						a = arguments.length - 3;
					if ((t || 0 === a || (t = {}), t && r))
						for (var s in r) void 0 === t[s] && (t[s] = r[s]);
					else t || (t = r || {});
					if (1 === a) t.children = i;
					else if (a > 1) {
						for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
						t.children = l;
					}
					return {
						$$typeof: e,
						type: n,
						key: void 0 === o ? null : "" + o,
						ref: null,
						props: t,
						_owner: null
					};
				};
			})(),
			c = (function() {
				function e(e, n) {
					for (var t = 0; t < n.length; t++) {
						var o = n[t];
						(o.enumerable = o.enumerable || !1),
							(o.configurable = !0),
							"value" in o && (o.writable = !0),
							Object.defineProperty(e, o.key, o);
					}
				}
				return function(n, t, o) {
					return t && e(n.prototype, t), o && e(n, o), n;
				};
			})(),
			p = u("hr", {}),
			f = u(
				"center",
				{},
				void 0,
				u("p", {}, void 0, " "),
				u(
					"h3",
					{},
					void 0,
					u("i", { className: "fa fa-youtube" }),
					" Channels you subscribed to"
				),
				u(
					"p",
					{},
					void 0,
					"Some of your subscriptions are likely to be sailing channels and are",
					" ",
					u("u", {}, void 0, "not"),
					" yet listed on sailing-channels.com. You can easliy suggest them to be listed:"
				),
				u("p", {}, void 0, " ")
			),
			d = u("hr", {}),
			h = u(
				"div",
				{ className: "alert alert-info", role: "alert" },
				void 0,
				"Some of your subscriptions are probably not sailing-channels, but you can check and suggest them anyway:"
			),
			y = u("p", {}, void 0, " "),
			b = (function(e) {
				function n(e) {
					o(this, n);
					var t = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
					return (t.state = { sail: [], nonsail: [] }), t;
				}
				return (
					r(n, e),
					c(n, [
						{
							key: "componentWillReceiveProps",
							value: function(e) {
								var n = this;
								e.subscriptions &&
									new s.a().post(
										{
											url: "/api/channels/identify",
											data: JSON.stringify({ hints: e.subscriptions }),
											headers: { "Content-Type": "application/json" },
											type: "POST",
											dataType: "json",
											cache: !1
										},
										function(e, t) {
											n.setState({
												sail: t.filter(function(e) {
													return "yt" == e.src && !0 === e.sail;
												}),
												nonsail: t.filter(function(e) {
													return "yt" == e.src && !1 === e.sail;
												})
											});
										}
									);
							}
						},
						{
							key: "render",
							value: function() {
								return 0 === this.state.sail.length &&
									0 === this.state.nonsail.length
									? null
									: u(
											"div",
											{},
											void 0,
											p,
											f,
											u(l.a, { channels: this.state.sail }),
											d,
											h,
											y,
											u(l.a, { channels: this.state.nonsail })
									  );
							}
						}
					]),
					n
				);
			})(a.Component);
		n.default = b;
	},
	"./app/components/SuggestChannelsList/Loadable.js": function(e, n, t) {
		"use strict";
		var o = t("./node_modules/react-loadable/lib/index.js"),
			i = t.n(o);
		n.a = i()({
			loader: function() {
				return t.e(22).then(t.bind(null, "./app/components/SuggestChannelsList/index.js"));
			},
			loading: function() {
				return null;
			}
		});
	}
});
