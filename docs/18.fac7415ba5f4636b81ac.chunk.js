webpackJsonp([18], {
	"./app/components/PositionMap/PositionMap.css": function(e, o, n) {
		var t = n(
			"./node_modules/css-loader/index.js!./app/components/PositionMap/PositionMap.css"
		);
		"string" == typeof t && (t = [[e.i, t, ""]]);
		var r = {};
		r.transform = void 0;
		n("./node_modules/style-loader/lib/addStyles.js")(t, r);
		t.locals && (e.exports = t.locals);
	},
	"./app/components/PositionMap/index.js": function(e, o, n) {
		"use strict";
		function t(e, o) {
			if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
		}
		function r(e, o) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !o || ("object" != typeof o && "function" != typeof o) ? e : o;
		}
		function i(e, o) {
			if ("function" != typeof o && null !== o)
				throw new TypeError(
					"Super expression must either be null or a function, not " + typeof o
				);
			(e.prototype = Object.create(o && o.prototype, {
				constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
			})),
				o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : (e.__proto__ = o));
		}
		Object.defineProperty(o, "__esModule", { value: !0 });
		var s = n("./node_modules/react/index.js"),
			a = n.n(s),
			p = n("./app/components/PositionMap/PositionMap.css"),
			c = (n.n(p),
			(function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(o, n, t, r) {
					var i = o && o.defaultProps,
						s = arguments.length - 3;
					if ((n || 0 === s || (n = {}), n && i))
						for (var a in i) void 0 === n[a] && (n[a] = i[a]);
					else n || (n = i || {});
					if (1 === s) n.children = r;
					else if (s > 1) {
						for (var p = Array(s), c = 0; c < s; c++) p[c] = arguments[c + 3];
						n.children = p;
					}
					return {
						$$typeof: e,
						type: o,
						key: void 0 === t ? null : "" + t,
						ref: null,
						props: n,
						_owner: null
					};
				};
			})()),
			l = (function() {
				function e(e, o) {
					for (var n = 0; n < o.length; n++) {
						var t = o[n];
						(t.enumerable = t.enumerable || !1),
							(t.configurable = !0),
							"value" in t && (t.writable = !0),
							Object.defineProperty(e, t.key, t);
					}
				}
				return function(o, n, t) {
					return n && e(o.prototype, n), t && e(o, t), o;
				};
			})(),
			u = (function(e) {
				function o() {
					return (
						t(this, o),
						r(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
					);
				}
				return (
					i(o, e),
					l(o, [
						{
							key: "render",
							value: function() {
								return c("iframe", {
									frameBorder: "0",
									className: "position-map",
									src: "/map?channel=" + this.props.channel
								});
							}
						}
					]),
					o
				);
			})(a.a.PureComponent);
		o.default = u;
	},
	"./node_modules/css-loader/index.js!./app/components/PositionMap/PositionMap.css": function(
		e,
		o,
		n
	) {
		(o = e.exports = n("./node_modules/css-loader/lib/css-base.js")(void 0)),
			o.push([e.i, ".position-map{width:100%;height:350px}", ""]);
	}
});
