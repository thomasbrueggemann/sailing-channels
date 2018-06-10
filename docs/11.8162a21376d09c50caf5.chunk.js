webpackJsonp([11], {
	"./app/components/Contributions/Contributions.css": function(e, t, o) {
		var n = o(
			"./node_modules/css-loader/index.js!./app/components/Contributions/Contributions.css"
		);
		"string" == typeof n && (n = [[e.i, n, ""]]);
		var i = {};
		i.transform = void 0;
		o("./node_modules/style-loader/lib/addStyles.js")(n, i);
		n.locals && (e.exports = n.locals);
	},
	"./app/components/Contributions/index.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function i(e, t) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
		}
		function a(e, t) {
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
		var r = o("./node_modules/react/index.js"),
			s = o.n(r),
			l = o("./app/components/OffsetMenu/index.js"),
			d = o("./app/components/OffsetSocial/index.js"),
			c = o("./app/components/Logo/index.js"),
			u = o("./app/components/Contributions/Contributions.css"),
			p = (o.n(u),
			(function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(t, o, n, i) {
					var a = t && t.defaultProps,
						r = arguments.length - 3;
					if ((o || 0 === r || (o = {}), o && a))
						for (var s in a) void 0 === o[s] && (o[s] = a[s]);
					else o || (o = a || {});
					if (1 === r) o.children = i;
					else if (r > 1) {
						for (var l = Array(r), d = 0; d < r; d++) l[d] = arguments[d + 3];
						o.children = l;
					}
					return {
						$$typeof: e,
						type: t,
						key: void 0 === n ? null : "" + n,
						ref: null,
						props: o,
						_owner: null
					};
				};
			})()),
			h = (function() {
				function e(e, t) {
					for (var o = 0; o < t.length; o++) {
						var n = t[o];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, o, n) {
					return o && e(t.prototype, o), n && e(t, n), t;
				};
			})(),
			f = p(
				"div",
				{ className: "container" },
				void 0,
				p(d.a, {}),
				p(c.a, { className: "hidden-xs hidden-sm" }),
				p(l.a, {}),
				p(
					"div",
					{ className: "row content-row" },
					void 0,
					p("div", { className: "col-md-3" }),
					p(
						"div",
						{ className: "col-md-6" },
						void 0,
						p("h1", { className: "content-h1" }, void 0, "Contributions"),
						p(
							"p",
							{},
							void 0,
							"This is the place where we want to thank all of you for your great feedback regarding this site. Some of you have submitted ideas and improvements that made it on the todo list and are already implemented or fixed:"
						),
						p(
							"table",
							{ className: "table" },
							void 0,
							p(
								"thead",
								{},
								void 0,
								p(
									"tr",
									{},
									void 0,
									p("th", {}, void 0, "Suggestion"),
									p("th", { className: "by-col" }, void 0, "By")
								)
							),
							p(
								"tbody",
								{},
								void 0,
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										"Feature: A way to filter by language of the channel"
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://www.youtube.com/channel/UCUMEKlaxhujH5r6sAVViTGw",
												target: "_blank"
											},
											void 0,
											"Norman Boyes"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p("td", {}, void 0, "Feature: Sort channels by total views"),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://sailing-channels.com/channel/UCvLc83k5o11EIF1lEo0VmuQ",
												target: "_blank"
											},
											void 0,
											"Brian, SV Delos"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										"Bug report: Website (scrolling) slows down drastically when loading lots of channels"
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href: "https://www.youtube.com/user/steedharold",
												target: "_blank"
											},
											void 0,
											"Harold Steed"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										"Feature: Show vessel position that belongs to a channel on a map"
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://sailing-channels.com/channel/UCpfax0gLoUZMqw-ROxX77Yw",
												target: "_blank"
											},
											void 0,
											"Drake Paragon"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										"Feature: Sort channels by currently popular channels, see what's trending."
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://www.sailing-channels.com/channel/UC6ZRBkwBQBrEOQQKwGi85gQ",
												target: "_blank"
											},
											void 0,
											"Kismet Adventures"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										'Improvement: Implementing a subscriber threshold that channels have to reach in order to be listed on the "trending" page.',
										p("br", {}),
										p(
											"i",
											{},
											void 0,
											"(Ed.: The threshold is now the median value of the subscriber distribution of all listed channels.)"
										)
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://sailing-channels.com/channel/UC8dsJQ_9CEwRmur_HFSXezA",
												target: "_blank"
											},
											void 0,
											"The Corsair"
										)
									)
								),
								p(
									"tr",
									{},
									void 0,
									p(
										"td",
										{},
										void 0,
										'Improvement: Set "Last upload" as default sorting option to facilitate attention to a broader variety of channels.'
									),
									p(
										"td",
										{},
										void 0,
										p(
											"a",
											{
												href:
													"https://sailing-channels.com/channel/UCu08YiFDAiIxl4xJDveTdJw",
												target: "_blank"
											},
											void 0,
											"Mount Ocean"
										)
									)
								)
							)
						)
					),
					p("div", { className: "col-md-3" })
				)
			),
			v = (function(e) {
				function t() {
					return (
						n(this, t),
						i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
					);
				}
				return (
					a(t, e),
					h(t, [
						{
							key: "componentDidMount",
							value: function() {
								document.title = "Contributions | Sailing Channels";
							}
						},
						{
							key: "render",
							value: function() {
								return f;
							}
						}
					]),
					t
				);
			})(s.a.Component);
		t.default = v;
	},
	"./node_modules/css-loader/index.js!./app/components/Contributions/Contributions.css": function(
		e,
		t,
		o
	) {
		(t = e.exports = o("./node_modules/css-loader/lib/css-base.js")(void 0)),
			t.push([e.i, "@media (min-width:990px){.by-col{min-width:120px}}", ""]);
	}
});
