webpackJsonp([15], {
	"./app/components/HistoryChart/index.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function r(e, t) {
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
		var i = o("./node_modules/react/index.js"),
			s = o.n(i),
			l = o("./node_modules/react-chartjs-2/es/index.js"),
			d = (function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(t, o, n, r) {
					var a = t && t.defaultProps,
						i = arguments.length - 3;
					if ((o || 0 === i || (o = {}), o && a))
						for (var s in a) void 0 === o[s] && (o[s] = a[s]);
					else o || (o = a || {});
					if (1 === i) o.children = r;
					else if (i > 1) {
						for (var l = Array(i), d = 0; d < i; d++) l[d] = arguments[d + 3];
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
			})(),
			u = (function() {
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
			c = (function(e) {
				function t(e) {
					n(this, t);
					var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return (o.state = { data: null }), o;
				}
				return (
					a(t, e),
					u(t, [
						{
							key: "componentDidMount",
							value: function() {
								this.loadChart(this.props);
							}
						},
						{
							key: "componentWillReceiveProps",
							value: function(e) {
								this.loadChart(e);
							}
						},
						{
							key: "loadChart",
							value: function(e) {
								var t = e.data.map(function(t) {
										return t[e.name];
									}),
									o = e.data.map(function(e) {
										var t = e._id.date + "";
										return new Date(
											parseInt(t.substr(0, 4)),
											parseInt(t.substr(4, 2)) - 1,
											parseInt(t.substr(6, 2))
										).toLocaleDateString();
									}),
									n = {
										labels: o,
										datasets: [
											{
												backgroundColor: "rgba(151,187,205,0.2)",
												borderColor: "rgba(151,187,205,1)",
												boderWidth: 1,
												pointBackgroundColor: "rgba(151,187,205,1)",
												pointBorderColor: "rgba(151,187,205,1)",
												pointHighlightFill: "#fff",
												pointHighlightStroke: "rgba(151,187,205,1)",
												pointBorderWidth: 2,
												data: t
											}
										]
									};
								this.setState({ data: n });
							}
						},
						{
							key: "render",
							value: function() {
								return this.state.data
									? d(l.a, {
											data: this.state.data,
											options: {
												scales: {
													xAxes: [{ display: !1 }],
													yAxes: [{ display: !1 }]
												}
											},
											legend: { display: !1 },
											height: 130
									  })
									: null;
							}
						}
					]),
					t
				);
			})(s.a.Component);
		t.default = c;
	},
	"./node_modules/chart.js/src/chart.js": function(e, t, o) {
		var n = o("./node_modules/chart.js/src/core/core.js")();
		(n.helpers = o("./node_modules/chart.js/src/helpers/index.js")),
			o("./node_modules/chart.js/src/core/core.helpers.js")(n),
			(n.defaults = o("./node_modules/chart.js/src/core/core.defaults.js")),
			(n.Element = o("./node_modules/chart.js/src/core/core.element.js")),
			(n.elements = o("./node_modules/chart.js/src/elements/index.js")),
			(n.Interaction = o("./node_modules/chart.js/src/core/core.interaction.js")),
			(n.layouts = o("./node_modules/chart.js/src/core/core.layouts.js")),
			(n.platform = o("./node_modules/chart.js/src/platforms/platform.js")),
			(n.plugins = o("./node_modules/chart.js/src/core/core.plugins.js")),
			(n.Ticks = o("./node_modules/chart.js/src/core/core.ticks.js")),
			o("./node_modules/chart.js/src/core/core.animation.js")(n),
			o("./node_modules/chart.js/src/core/core.controller.js")(n),
			o("./node_modules/chart.js/src/core/core.datasetController.js")(n),
			o("./node_modules/chart.js/src/core/core.scaleService.js")(n),
			o("./node_modules/chart.js/src/core/core.scale.js")(n),
			o("./node_modules/chart.js/src/core/core.tooltip.js")(n),
			o("./node_modules/chart.js/src/scales/scale.linearbase.js")(n),
			o("./node_modules/chart.js/src/scales/scale.category.js")(n),
			o("./node_modules/chart.js/src/scales/scale.linear.js")(n),
			o("./node_modules/chart.js/src/scales/scale.logarithmic.js")(n),
			o("./node_modules/chart.js/src/scales/scale.radialLinear.js")(n),
			o("./node_modules/chart.js/src/scales/scale.time.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.bar.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.bubble.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.doughnut.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.line.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.polarArea.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.radar.js")(n),
			o("./node_modules/chart.js/src/controllers/controller.scatter.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Bar.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Bubble.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Doughnut.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Line.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.PolarArea.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Radar.js")(n),
			o("./node_modules/chart.js/src/charts/Chart.Scatter.js")(n);
		var r = o("./node_modules/chart.js/src/plugins/index.js");
		for (var a in r) r.hasOwnProperty(a) && n.plugins.register(r[a]);
		n.platform.initialize(),
			(e.exports = n),
			"undefined" != typeof window && (window.Chart = n),
			(n.Legend = r.legend._element),
			(n.Title = r.title._element),
			(n.pluginService = n.plugins),
			(n.PluginBase = n.Element.extend({})),
			(n.canvasHelpers = n.helpers.canvas),
			(n.layoutService = n.layouts);
	},
	"./node_modules/chart.js/src/charts/Chart.Bar.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Bar = function(t, o) {
				return (o.type = "bar"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.Bubble.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Bubble = function(t, o) {
				return (o.type = "bubble"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.Doughnut.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Doughnut = function(t, o) {
				return (o.type = "doughnut"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.Line.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Line = function(t, o) {
				return (o.type = "line"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.PolarArea.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.PolarArea = function(t, o) {
				return (o.type = "polarArea"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.Radar.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Radar = function(t, o) {
				return (o.type = "radar"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/charts/Chart.Scatter.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			e.Scatter = function(t, o) {
				return (o.type = "scatter"), new e(t, o);
			};
		};
	},
	"./node_modules/chart.js/src/controllers/controller.bar.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			var o,
				n,
				r,
				a,
				i = e.isHorizontal() ? e.width : e.height,
				s = e.getTicks();
			for (r = 1, a = t.length; r < a; ++r) i = Math.min(i, t[r] - t[r - 1]);
			for (r = 0, a = s.length; r < a; ++r)
				(n = e.getPixelForTick(r)), (i = r > 0 ? Math.min(i, n - o) : i), (o = n);
			return i;
		}
		function r(e, t, o) {
			var n,
				r,
				a = o.barThickness,
				i = t.stackCount,
				s = t.pixels[e];
			return (
				l.isNullOrUndef(a)
					? ((n = t.min * o.categoryPercentage), (r = o.barPercentage))
					: ((n = a * i), (r = 1)),
				{ chunk: n / i, ratio: r, start: s - n / 2 }
			);
		}
		function a(e, t, o) {
			var n,
				r,
				a = t.pixels,
				i = a[e],
				s = e > 0 ? a[e - 1] : null,
				l = e < a.length - 1 ? a[e + 1] : null,
				d = o.categoryPercentage;
			return (
				null === s && (s = i - (null === l ? t.end - i : l - i)),
				null === l && (l = i + i - s),
				(n = i - ((i - s) / 2) * d),
				(r = ((l - s) / 2) * d),
				{ chunk: r / t.stackCount, ratio: o.barPercentage, start: n }
			);
		}
		var i = o("./node_modules/chart.js/src/core/core.defaults.js"),
			s = o("./node_modules/chart.js/src/elements/index.js"),
			l = o("./node_modules/chart.js/src/helpers/index.js");
		i._set("bar", {
			hover: { mode: "label" },
			scales: {
				xAxes: [
					{
						type: "category",
						categoryPercentage: 0.8,
						barPercentage: 0.9,
						offset: !0,
						gridLines: { offsetGridLines: !0 }
					}
				],
				yAxes: [{ type: "linear" }]
			}
		}),
			i._set("horizontalBar", {
				hover: { mode: "index", axis: "y" },
				scales: {
					xAxes: [{ type: "linear", position: "bottom" }],
					yAxes: [
						{
							position: "left",
							type: "category",
							categoryPercentage: 0.8,
							barPercentage: 0.9,
							offset: !0,
							gridLines: { offsetGridLines: !0 }
						}
					]
				},
				elements: { rectangle: { borderSkipped: "left" } },
				tooltips: {
					callbacks: {
						title: function(e, t) {
							var o = "";
							return (
								e.length > 0 &&
									(e[0].yLabel
										? (o = e[0].yLabel)
										: t.labels.length > 0 &&
										  e[0].index < t.labels.length &&
										  (o = t.labels[e[0].index])),
								o
							);
						},
						label: function(e, t) {
							return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel;
						}
					},
					mode: "index",
					axis: "y"
				}
			}),
			(e.exports = function(e) {
				(e.controllers.bar = e.DatasetController.extend({
					dataElementType: s.Rectangle,
					initialize: function() {
						var t,
							o = this;
						e.DatasetController.prototype.initialize.apply(o, arguments),
							(t = o.getMeta()),
							(t.stack = o.getDataset().stack),
							(t.bar = !0);
					},
					update: function(e) {
						var t,
							o,
							n = this,
							r = n.getMeta().data;
						for (n._ruler = n.getRuler(), t = 0, o = r.length; t < o; ++t)
							n.updateElement(r[t], t, e);
					},
					updateElement: function(e, t, o) {
						var n = this,
							r = n.chart,
							a = n.getMeta(),
							i = n.getDataset(),
							s = e.custom || {},
							d = r.options.elements.rectangle;
						(e._xScale = n.getScaleForId(a.xAxisID)),
							(e._yScale = n.getScaleForId(a.yAxisID)),
							(e._datasetIndex = n.index),
							(e._index = t),
							(e._model = {
								datasetLabel: i.label,
								label: r.data.labels[t],
								borderSkipped: s.borderSkipped ? s.borderSkipped : d.borderSkipped,
								backgroundColor: s.backgroundColor
									? s.backgroundColor
									: l.valueAtIndexOrDefault(
											i.backgroundColor,
											t,
											d.backgroundColor
									  ),
								borderColor: s.borderColor
									? s.borderColor
									: l.valueAtIndexOrDefault(i.borderColor, t, d.borderColor),
								borderWidth: s.borderWidth
									? s.borderWidth
									: l.valueAtIndexOrDefault(i.borderWidth, t, d.borderWidth)
							}),
							n.updateElementGeometry(e, t, o),
							e.pivot();
					},
					updateElementGeometry: function(e, t, o) {
						var n = this,
							r = e._model,
							a = n.getValueScale(),
							i = a.getBasePixel(),
							s = a.isHorizontal(),
							l = n._ruler || n.getRuler(),
							d = n.calculateBarValuePixels(n.index, t),
							u = n.calculateBarIndexPixels(n.index, t, l);
						(r.horizontal = s),
							(r.base = o ? i : d.base),
							(r.x = s ? (o ? i : d.head) : u.center),
							(r.y = s ? u.center : o ? i : d.head),
							(r.height = s ? u.size : void 0),
							(r.width = s ? void 0 : u.size);
					},
					getValueScaleId: function() {
						return this.getMeta().yAxisID;
					},
					getIndexScaleId: function() {
						return this.getMeta().xAxisID;
					},
					getValueScale: function() {
						return this.getScaleForId(this.getValueScaleId());
					},
					getIndexScale: function() {
						return this.getScaleForId(this.getIndexScaleId());
					},
					_getStacks: function(e) {
						var t,
							o,
							n = this,
							r = n.chart,
							a = n.getIndexScale(),
							i = a.options.stacked,
							s = void 0 === e ? r.data.datasets.length : e + 1,
							l = [];
						for (t = 0; t < s; ++t)
							(o = r.getDatasetMeta(t)),
								o.bar &&
									r.isDatasetVisible(t) &&
									(!1 === i ||
										(!0 === i && -1 === l.indexOf(o.stack)) ||
										(void 0 === i &&
											(void 0 === o.stack || -1 === l.indexOf(o.stack)))) &&
									l.push(o.stack);
						return l;
					},
					getStackCount: function() {
						return this._getStacks().length;
					},
					getStackIndex: function(e, t) {
						var o = this._getStacks(e),
							n = void 0 !== t ? o.indexOf(t) : -1;
						return -1 === n ? o.length - 1 : n;
					},
					getRuler: function() {
						var e,
							t,
							o,
							r = this,
							a = r.getIndexScale(),
							i = r.getStackCount(),
							s = r.index,
							d = a.isHorizontal(),
							u = d ? a.left : a.top,
							c = u + (d ? a.width : a.height),
							h = [];
						for (e = 0, t = r.getMeta().data.length; e < t; ++e)
							h.push(a.getPixelForValue(null, e, s));
						return (
							(o = l.isNullOrUndef(a.options.barThickness) ? n(a, h) : -1),
							{ min: o, pixels: h, start: u, end: c, stackCount: i, scale: a }
						);
					},
					calculateBarValuePixels: function(e, t) {
						var o,
							n,
							r,
							a,
							i,
							s,
							l = this,
							d = l.chart,
							u = l.getMeta(),
							c = l.getValueScale(),
							h = d.data.datasets,
							f = c.getRightValue(h[e].data[t]),
							p = c.options.stacked,
							m = u.stack,
							g = 0;
						if (p || (void 0 === p && void 0 !== m))
							for (o = 0; o < e; ++o)
								(n = d.getDatasetMeta(o)),
									n.bar &&
										n.stack === m &&
										n.controller.getValueScaleId() === c.id &&
										d.isDatasetVisible(o) &&
										((r = c.getRightValue(h[o].data[t])),
										((f < 0 && r < 0) || (f >= 0 && r > 0)) && (g += r));
						return (
							(a = c.getPixelForValue(g)),
							(i = c.getPixelForValue(g + f)),
							(s = (i - a) / 2),
							{ size: s, base: a, head: i, center: i + s / 2 }
						);
					},
					calculateBarIndexPixels: function(e, t, o) {
						var n = this,
							i = o.scale.options,
							s = "flex" === i.barThickness ? a(t, o, i) : r(t, o, i),
							d = n.getStackIndex(e, n.getMeta().stack),
							u = s.start + s.chunk * d + s.chunk / 2,
							c = Math.min(
								l.valueOrDefault(i.maxBarThickness, 1 / 0),
								s.chunk * s.ratio
							);
						return { base: u - c / 2, head: u + c / 2, center: u, size: c };
					},
					draw: function() {
						var e = this,
							t = e.chart,
							o = e.getValueScale(),
							n = e.getMeta().data,
							r = e.getDataset(),
							a = n.length,
							i = 0;
						for (l.canvas.clipArea(t.ctx, t.chartArea); i < a; ++i)
							isNaN(o.getRightValue(r.data[i])) || n[i].draw();
						l.canvas.unclipArea(t.ctx);
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e._index,
							n = e.custom || {},
							r = e._model;
						(r.backgroundColor = n.hoverBackgroundColor
							? n.hoverBackgroundColor
							: l.valueAtIndexOrDefault(
									t.hoverBackgroundColor,
									o,
									l.getHoverColor(r.backgroundColor)
							  )),
							(r.borderColor = n.hoverBorderColor
								? n.hoverBorderColor
								: l.valueAtIndexOrDefault(
										t.hoverBorderColor,
										o,
										l.getHoverColor(r.borderColor)
								  )),
							(r.borderWidth = n.hoverBorderWidth
								? n.hoverBorderWidth
								: l.valueAtIndexOrDefault(t.hoverBorderWidth, o, r.borderWidth));
					},
					removeHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e._index,
							n = e.custom || {},
							r = e._model,
							a = this.chart.options.elements.rectangle;
						(r.backgroundColor = n.backgroundColor
							? n.backgroundColor
							: l.valueAtIndexOrDefault(t.backgroundColor, o, a.backgroundColor)),
							(r.borderColor = n.borderColor
								? n.borderColor
								: l.valueAtIndexOrDefault(t.borderColor, o, a.borderColor)),
							(r.borderWidth = n.borderWidth
								? n.borderWidth
								: l.valueAtIndexOrDefault(t.borderWidth, o, a.borderWidth));
					}
				})),
					(e.controllers.horizontalBar = e.controllers.bar.extend({
						getValueScaleId: function() {
							return this.getMeta().xAxisID;
						},
						getIndexScaleId: function() {
							return this.getMeta().yAxisID;
						}
					}));
			});
	},
	"./node_modules/chart.js/src/controllers/controller.bubble.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/elements/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("bubble", {
			hover: { mode: "single" },
			scales: {
				xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
				yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }]
			},
			tooltips: {
				callbacks: {
					title: function() {
						return "";
					},
					label: function(e, t) {
						var o = t.datasets[e.datasetIndex].label || "",
							n = t.datasets[e.datasetIndex].data[e.index];
						return o + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")";
					}
				}
			}
		}),
			(e.exports = function(e) {
				e.controllers.bubble = e.DatasetController.extend({
					dataElementType: r.Point,
					update: function(e) {
						var t = this,
							o = t.getMeta(),
							n = o.data;
						a.each(n, function(o, n) {
							t.updateElement(o, n, e);
						});
					},
					updateElement: function(e, t, o) {
						var n = this,
							r = n.getMeta(),
							a = e.custom || {},
							i = n.getScaleForId(r.xAxisID),
							s = n.getScaleForId(r.yAxisID),
							l = n._resolveElementOptions(e, t),
							d = n.getDataset().data[t],
							u = n.index,
							c = o
								? i.getPixelForDecimal(0.5)
								: i.getPixelForValue("object" == typeof d ? d : NaN, t, u),
							h = o ? s.getBasePixel() : s.getPixelForValue(d, t, u);
						(e._xScale = i),
							(e._yScale = s),
							(e._options = l),
							(e._datasetIndex = u),
							(e._index = t),
							(e._model = {
								backgroundColor: l.backgroundColor,
								borderColor: l.borderColor,
								borderWidth: l.borderWidth,
								hitRadius: l.hitRadius,
								pointStyle: l.pointStyle,
								radius: o ? 0 : l.radius,
								skip: a.skip || isNaN(c) || isNaN(h),
								x: c,
								y: h
							}),
							e.pivot();
					},
					setHoverStyle: function(e) {
						var t = e._model,
							o = e._options;
						(t.backgroundColor = a.valueOrDefault(
							o.hoverBackgroundColor,
							a.getHoverColor(o.backgroundColor)
						)),
							(t.borderColor = a.valueOrDefault(
								o.hoverBorderColor,
								a.getHoverColor(o.borderColor)
							)),
							(t.borderWidth = a.valueOrDefault(o.hoverBorderWidth, o.borderWidth)),
							(t.radius = o.radius + o.hoverRadius);
					},
					removeHoverStyle: function(e) {
						var t = e._model,
							o = e._options;
						(t.backgroundColor = o.backgroundColor),
							(t.borderColor = o.borderColor),
							(t.borderWidth = o.borderWidth),
							(t.radius = o.radius);
					},
					_resolveElementOptions: function(e, t) {
						var o,
							n,
							r,
							i = this,
							s = i.chart,
							l = s.data.datasets,
							d = l[i.index],
							u = e.custom || {},
							c = s.options.elements.point,
							h = a.options.resolve,
							f = d.data[t],
							p = {},
							m = { chart: s, dataIndex: t, dataset: d, datasetIndex: i.index },
							g = [
								"backgroundColor",
								"borderColor",
								"borderWidth",
								"hoverBackgroundColor",
								"hoverBorderColor",
								"hoverBorderWidth",
								"hoverRadius",
								"hitRadius",
								"pointStyle"
							];
						for (o = 0, n = g.length; o < n; ++o)
							(r = g[o]), (p[r] = h([u[r], d[r], c[r]], m, t));
						return (
							(p.radius = h([u.radius, f ? f.r : void 0, d.radius, c.radius], m, t)),
							p
						);
					}
				});
			});
	},
	"./node_modules/chart.js/src/controllers/controller.doughnut.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/elements/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("doughnut", {
			animation: { animateRotate: !0, animateScale: !1 },
			hover: { mode: "single" },
			legendCallback: function(e) {
				var t = [];
				t.push('<ul class="' + e.id + '-legend">');
				var o = e.data,
					n = o.datasets,
					r = o.labels;
				if (n.length)
					for (var a = 0; a < n[0].data.length; ++a)
						t.push(
							'<li><span style="background-color:' +
								n[0].backgroundColor[a] +
								'"></span>'
						),
							r[a] && t.push(r[a]),
							t.push("</li>");
				return t.push("</ul>"), t.join("");
			},
			legend: {
				labels: {
					generateLabels: function(e) {
						var t = e.data;
						return t.labels.length && t.datasets.length
							? t.labels.map(function(o, n) {
									var r = e.getDatasetMeta(0),
										i = t.datasets[0],
										s = r.data[n],
										l = (s && s.custom) || {},
										d = a.valueAtIndexOrDefault,
										u = e.options.elements.arc;
									return {
										text: o,
										fillStyle: l.backgroundColor
											? l.backgroundColor
											: d(i.backgroundColor, n, u.backgroundColor),
										strokeStyle: l.borderColor
											? l.borderColor
											: d(i.borderColor, n, u.borderColor),
										lineWidth: l.borderWidth
											? l.borderWidth
											: d(i.borderWidth, n, u.borderWidth),
										hidden: isNaN(i.data[n]) || r.data[n].hidden,
										index: n
									};
							  })
							: [];
					}
				},
				onClick: function(e, t) {
					var o,
						n,
						r,
						a = t.index,
						i = this.chart;
					for (o = 0, n = (i.data.datasets || []).length; o < n; ++o)
						(r = i.getDatasetMeta(o)),
							r.data[a] && (r.data[a].hidden = !r.data[a].hidden);
					i.update();
				}
			},
			cutoutPercentage: 50,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			tooltips: {
				callbacks: {
					title: function() {
						return "";
					},
					label: function(e, t) {
						var o = t.labels[e.index],
							n = ": " + t.datasets[e.datasetIndex].data[e.index];
						return a.isArray(o) ? ((o = o.slice()), (o[0] += n)) : (o += n), o;
					}
				}
			}
		}),
			n._set("pie", a.clone(n.doughnut)),
			n._set("pie", { cutoutPercentage: 0 }),
			(e.exports = function(e) {
				e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
					dataElementType: r.Arc,
					linkScales: a.noop,
					getRingIndex: function(e) {
						for (var t = 0, o = 0; o < e; ++o) this.chart.isDatasetVisible(o) && ++t;
						return t;
					},
					update: function(e) {
						var t = this,
							o = t.chart,
							n = o.chartArea,
							r = o.options,
							i = r.elements.arc,
							s = n.right - n.left - i.borderWidth,
							l = n.bottom - n.top - i.borderWidth,
							d = Math.min(s, l),
							u = { x: 0, y: 0 },
							c = t.getMeta(),
							h = r.cutoutPercentage,
							f = r.circumference;
						if (f < 2 * Math.PI) {
							var p = r.rotation % (2 * Math.PI);
							p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0);
							var m = p + f,
								g = { x: Math.cos(p), y: Math.sin(p) },
								v = { x: Math.cos(m), y: Math.sin(m) },
								b = (p <= 0 && m >= 0) || (p <= 2 * Math.PI && 2 * Math.PI <= m),
								y =
									(p <= 0.5 * Math.PI && 0.5 * Math.PI <= m) ||
									(p <= 2.5 * Math.PI && 2.5 * Math.PI <= m),
								_ =
									(p <= -Math.PI && -Math.PI <= m) ||
									(p <= Math.PI && Math.PI <= m),
								x =
									(p <= 0.5 * -Math.PI && 0.5 * -Math.PI <= m) ||
									(p <= 1.5 * Math.PI && 1.5 * Math.PI <= m),
								j = h / 100,
								k = {
									x: _
										? -1
										: Math.min(
												g.x * (g.x < 0 ? 1 : j),
												v.x * (v.x < 0 ? 1 : j)
										  ),
									y: x
										? -1
										: Math.min(g.y * (g.y < 0 ? 1 : j), v.y * (v.y < 0 ? 1 : j))
								},
								w = {
									x: b
										? 1
										: Math.max(
												g.x * (g.x > 0 ? 1 : j),
												v.x * (v.x > 0 ? 1 : j)
										  ),
									y: y
										? 1
										: Math.max(g.y * (g.y > 0 ? 1 : j), v.y * (v.y > 0 ? 1 : j))
								},
								C = { width: 0.5 * (w.x - k.x), height: 0.5 * (w.y - k.y) };
							(d = Math.min(s / C.width, l / C.height)),
								(u = { x: -0.5 * (w.x + k.x), y: -0.5 * (w.y + k.y) });
						}
						(o.borderWidth = t.getMaxBorderWidth(c.data)),
							(o.outerRadius = Math.max((d - o.borderWidth) / 2, 0)),
							(o.innerRadius = Math.max(h ? (o.outerRadius / 100) * h : 0, 0)),
							(o.radiusLength =
								(o.outerRadius - o.innerRadius) / o.getVisibleDatasetCount()),
							(o.offsetX = u.x * o.outerRadius),
							(o.offsetY = u.y * o.outerRadius),
							(c.total = t.calculateTotal()),
							(t.outerRadius =
								o.outerRadius - o.radiusLength * t.getRingIndex(t.index)),
							(t.innerRadius = Math.max(t.outerRadius - o.radiusLength, 0)),
							a.each(c.data, function(o, n) {
								t.updateElement(o, n, e);
							});
					},
					updateElement: function(e, t, o) {
						var n = this,
							r = n.chart,
							i = r.chartArea,
							s = r.options,
							l = s.animation,
							d = (i.left + i.right) / 2,
							u = (i.top + i.bottom) / 2,
							c = s.rotation,
							h = s.rotation,
							f = n.getDataset(),
							p =
								o && l.animateRotate
									? 0
									: e.hidden
										? 0
										: n.calculateCircumference(f.data[t]) *
										  (s.circumference / (2 * Math.PI)),
							m = o && l.animateScale ? 0 : n.innerRadius,
							g = o && l.animateScale ? 0 : n.outerRadius,
							v = a.valueAtIndexOrDefault;
						a.extend(e, {
							_datasetIndex: n.index,
							_index: t,
							_model: {
								x: d + r.offsetX,
								y: u + r.offsetY,
								startAngle: c,
								endAngle: h,
								circumference: p,
								outerRadius: g,
								innerRadius: m,
								label: v(f.label, t, r.data.labels[t])
							}
						});
						var b = e._model;
						this.removeHoverStyle(e),
							(o && l.animateRotate) ||
								((b.startAngle =
									0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle),
								(b.endAngle = b.startAngle + b.circumference)),
							e.pivot();
					},
					removeHoverStyle: function(t) {
						e.DatasetController.prototype.removeHoverStyle.call(
							this,
							t,
							this.chart.options.elements.arc
						);
					},
					calculateTotal: function() {
						var e,
							t = this.getDataset(),
							o = this.getMeta(),
							n = 0;
						return (
							a.each(o.data, function(o, r) {
								(e = t.data[r]), isNaN(e) || o.hidden || (n += Math.abs(e));
							}),
							n
						);
					},
					calculateCircumference: function(e) {
						var t = this.getMeta().total;
						return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0;
					},
					getMaxBorderWidth: function(e) {
						for (var t, o, n = 0, r = this.index, a = e.length, i = 0; i < a; i++)
							(t = e[i]._model ? e[i]._model.borderWidth : 0),
								(o = e[i]._chart
									? e[i]._chart.config.data.datasets[r].hoverBorderWidth
									: 0),
								(n = t > n ? t : n),
								(n = o > n ? o : n);
						return n;
					}
				});
			});
	},
	"./node_modules/chart.js/src/controllers/controller.line.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/elements/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("line", {
			showLines: !0,
			spanGaps: !1,
			hover: { mode: "label" },
			scales: {
				xAxes: [{ type: "category", id: "x-axis-0" }],
				yAxes: [{ type: "linear", id: "y-axis-0" }]
			}
		}),
			(e.exports = function(e) {
				function t(e, t) {
					return a.valueOrDefault(e.showLine, t.showLines);
				}
				e.controllers.line = e.DatasetController.extend({
					datasetElementType: r.Line,
					dataElementType: r.Point,
					update: function(e) {
						var o,
							n,
							r,
							i = this,
							s = i.getMeta(),
							l = s.dataset,
							d = s.data || [],
							u = i.chart.options,
							c = u.elements.line,
							h = i.getScaleForId(s.yAxisID),
							f = i.getDataset(),
							p = t(f, u);
						for (
							p &&
								((r = l.custom || {}),
								void 0 !== f.tension &&
									void 0 === f.lineTension &&
									(f.lineTension = f.tension),
								(l._scale = h),
								(l._datasetIndex = i.index),
								(l._children = d),
								(l._model = {
									spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
									tension: r.tension
										? r.tension
										: a.valueOrDefault(f.lineTension, c.tension),
									backgroundColor: r.backgroundColor
										? r.backgroundColor
										: f.backgroundColor || c.backgroundColor,
									borderWidth: r.borderWidth
										? r.borderWidth
										: f.borderWidth || c.borderWidth,
									borderColor: r.borderColor
										? r.borderColor
										: f.borderColor || c.borderColor,
									borderCapStyle: r.borderCapStyle
										? r.borderCapStyle
										: f.borderCapStyle || c.borderCapStyle,
									borderDash: r.borderDash
										? r.borderDash
										: f.borderDash || c.borderDash,
									borderDashOffset: r.borderDashOffset
										? r.borderDashOffset
										: f.borderDashOffset || c.borderDashOffset,
									borderJoinStyle: r.borderJoinStyle
										? r.borderJoinStyle
										: f.borderJoinStyle || c.borderJoinStyle,
									fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : c.fill,
									steppedLine: r.steppedLine
										? r.steppedLine
										: a.valueOrDefault(f.steppedLine, c.stepped),
									cubicInterpolationMode: r.cubicInterpolationMode
										? r.cubicInterpolationMode
										: a.valueOrDefault(
												f.cubicInterpolationMode,
												c.cubicInterpolationMode
										  )
								}),
								l.pivot()),
								o = 0,
								n = d.length;
							o < n;
							++o
						)
							i.updateElement(d[o], o, e);
						for (
							p && 0 !== l._model.tension && i.updateBezierControlPoints(),
								o = 0,
								n = d.length;
							o < n;
							++o
						)
							d[o].pivot();
					},
					getPointBackgroundColor: function(e, t) {
						var o = this.chart.options.elements.point.backgroundColor,
							n = this.getDataset(),
							r = e.custom || {};
						return (
							r.backgroundColor
								? (o = r.backgroundColor)
								: n.pointBackgroundColor
									? (o = a.valueAtIndexOrDefault(n.pointBackgroundColor, t, o))
									: n.backgroundColor && (o = n.backgroundColor),
							o
						);
					},
					getPointBorderColor: function(e, t) {
						var o = this.chart.options.elements.point.borderColor,
							n = this.getDataset(),
							r = e.custom || {};
						return (
							r.borderColor
								? (o = r.borderColor)
								: n.pointBorderColor
									? (o = a.valueAtIndexOrDefault(n.pointBorderColor, t, o))
									: n.borderColor && (o = n.borderColor),
							o
						);
					},
					getPointBorderWidth: function(e, t) {
						var o = this.chart.options.elements.point.borderWidth,
							n = this.getDataset(),
							r = e.custom || {};
						return (
							isNaN(r.borderWidth)
								? !isNaN(n.pointBorderWidth) || a.isArray(n.pointBorderWidth)
									? (o = a.valueAtIndexOrDefault(n.pointBorderWidth, t, o))
									: isNaN(n.borderWidth) || (o = n.borderWidth)
								: (o = r.borderWidth),
							o
						);
					},
					updateElement: function(e, t, o) {
						var n,
							r,
							i = this,
							s = i.getMeta(),
							l = e.custom || {},
							d = i.getDataset(),
							u = i.index,
							c = d.data[t],
							h = i.getScaleForId(s.yAxisID),
							f = i.getScaleForId(s.xAxisID),
							p = i.chart.options.elements.point;
						void 0 !== d.radius &&
							void 0 === d.pointRadius &&
							(d.pointRadius = d.radius),
							void 0 !== d.hitRadius &&
								void 0 === d.pointHitRadius &&
								(d.pointHitRadius = d.hitRadius),
							(n = f.getPixelForValue("object" == typeof c ? c : NaN, t, u)),
							(r = o ? h.getBasePixel() : i.calculatePointY(c, t, u)),
							(e._xScale = f),
							(e._yScale = h),
							(e._datasetIndex = u),
							(e._index = t),
							(e._model = {
								x: n,
								y: r,
								skip: l.skip || isNaN(n) || isNaN(r),
								radius:
									l.radius || a.valueAtIndexOrDefault(d.pointRadius, t, p.radius),
								pointStyle:
									l.pointStyle ||
									a.valueAtIndexOrDefault(d.pointStyle, t, p.pointStyle),
								backgroundColor: i.getPointBackgroundColor(e, t),
								borderColor: i.getPointBorderColor(e, t),
								borderWidth: i.getPointBorderWidth(e, t),
								tension: s.dataset._model ? s.dataset._model.tension : 0,
								steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
								hitRadius:
									l.hitRadius ||
									a.valueAtIndexOrDefault(d.pointHitRadius, t, p.hitRadius)
							});
					},
					calculatePointY: function(e, t, o) {
						var n,
							r,
							a,
							i = this,
							s = i.chart,
							l = i.getMeta(),
							d = i.getScaleForId(l.yAxisID),
							u = 0,
							c = 0;
						if (d.options.stacked) {
							for (n = 0; n < o; n++)
								if (
									((r = s.data.datasets[n]),
									(a = s.getDatasetMeta(n)),
									"line" === a.type &&
										a.yAxisID === d.id &&
										s.isDatasetVisible(n))
								) {
									var h = Number(d.getRightValue(r.data[t]));
									h < 0 ? (c += h || 0) : (u += h || 0);
								}
							var f = Number(d.getRightValue(e));
							return f < 0 ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f);
						}
						return d.getPixelForValue(e);
					},
					updateBezierControlPoints: function() {
						function e(e, t, o) {
							return Math.max(Math.min(e, o), t);
						}
						var t,
							o,
							n,
							r,
							i,
							s = this,
							l = s.getMeta(),
							d = s.chart.chartArea,
							u = l.data || [];
						if (
							(l.dataset._model.spanGaps &&
								(u = u.filter(function(e) {
									return !e._model.skip;
								})),
							"monotone" === l.dataset._model.cubicInterpolationMode)
						)
							a.splineCurveMonotone(u);
						else
							for (t = 0, o = u.length; t < o; ++t)
								(n = u[t]),
									(r = n._model),
									(i = a.splineCurve(
										a.previousItem(u, t)._model,
										r,
										a.nextItem(u, t)._model,
										l.dataset._model.tension
									)),
									(r.controlPointPreviousX = i.previous.x),
									(r.controlPointPreviousY = i.previous.y),
									(r.controlPointNextX = i.next.x),
									(r.controlPointNextY = i.next.y);
						if (s.chart.options.elements.line.capBezierPoints)
							for (t = 0, o = u.length; t < o; ++t)
								(r = u[t]._model),
									(r.controlPointPreviousX = e(
										r.controlPointPreviousX,
										d.left,
										d.right
									)),
									(r.controlPointPreviousY = e(
										r.controlPointPreviousY,
										d.top,
										d.bottom
									)),
									(r.controlPointNextX = e(r.controlPointNextX, d.left, d.right)),
									(r.controlPointNextY = e(r.controlPointNextY, d.top, d.bottom));
					},
					draw: function() {
						var e = this,
							o = e.chart,
							n = e.getMeta(),
							r = n.data || [],
							i = o.chartArea,
							s = r.length,
							l = 0;
						for (
							a.canvas.clipArea(o.ctx, i),
								t(e.getDataset(), o.options) && n.dataset.draw(),
								a.canvas.unclipArea(o.ctx);
							l < s;
							++l
						)
							r[l].draw(i);
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e._index,
							n = e.custom || {},
							r = e._model;
						(r.radius =
							n.hoverRadius ||
							a.valueAtIndexOrDefault(
								t.pointHoverRadius,
								o,
								this.chart.options.elements.point.hoverRadius
							)),
							(r.backgroundColor =
								n.hoverBackgroundColor ||
								a.valueAtIndexOrDefault(
									t.pointHoverBackgroundColor,
									o,
									a.getHoverColor(r.backgroundColor)
								)),
							(r.borderColor =
								n.hoverBorderColor ||
								a.valueAtIndexOrDefault(
									t.pointHoverBorderColor,
									o,
									a.getHoverColor(r.borderColor)
								)),
							(r.borderWidth =
								n.hoverBorderWidth ||
								a.valueAtIndexOrDefault(t.pointHoverBorderWidth, o, r.borderWidth));
					},
					removeHoverStyle: function(e) {
						var t = this,
							o = t.chart.data.datasets[e._datasetIndex],
							n = e._index,
							r = e.custom || {},
							i = e._model;
						void 0 !== o.radius &&
							void 0 === o.pointRadius &&
							(o.pointRadius = o.radius),
							(i.radius =
								r.radius ||
								a.valueAtIndexOrDefault(
									o.pointRadius,
									n,
									t.chart.options.elements.point.radius
								)),
							(i.backgroundColor = t.getPointBackgroundColor(e, n)),
							(i.borderColor = t.getPointBorderColor(e, n)),
							(i.borderWidth = t.getPointBorderWidth(e, n));
					}
				});
			});
	},
	"./node_modules/chart.js/src/controllers/controller.polarArea.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/elements/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("polarArea", {
			scale: {
				type: "radialLinear",
				angleLines: { display: !1 },
				gridLines: { circular: !0 },
				pointLabels: { display: !1 },
				ticks: { beginAtZero: !0 }
			},
			animation: { animateRotate: !0, animateScale: !0 },
			startAngle: -0.5 * Math.PI,
			legendCallback: function(e) {
				var t = [];
				t.push('<ul class="' + e.id + '-legend">');
				var o = e.data,
					n = o.datasets,
					r = o.labels;
				if (n.length)
					for (var a = 0; a < n[0].data.length; ++a)
						t.push(
							'<li><span style="background-color:' +
								n[0].backgroundColor[a] +
								'"></span>'
						),
							r[a] && t.push(r[a]),
							t.push("</li>");
				return t.push("</ul>"), t.join("");
			},
			legend: {
				labels: {
					generateLabels: function(e) {
						var t = e.data;
						return t.labels.length && t.datasets.length
							? t.labels.map(function(o, n) {
									var r = e.getDatasetMeta(0),
										i = t.datasets[0],
										s = r.data[n],
										l = s.custom || {},
										d = a.valueAtIndexOrDefault,
										u = e.options.elements.arc;
									return {
										text: o,
										fillStyle: l.backgroundColor
											? l.backgroundColor
											: d(i.backgroundColor, n, u.backgroundColor),
										strokeStyle: l.borderColor
											? l.borderColor
											: d(i.borderColor, n, u.borderColor),
										lineWidth: l.borderWidth
											? l.borderWidth
											: d(i.borderWidth, n, u.borderWidth),
										hidden: isNaN(i.data[n]) || r.data[n].hidden,
										index: n
									};
							  })
							: [];
					}
				},
				onClick: function(e, t) {
					var o,
						n,
						r,
						a = t.index,
						i = this.chart;
					for (o = 0, n = (i.data.datasets || []).length; o < n; ++o)
						(r = i.getDatasetMeta(o)), (r.data[a].hidden = !r.data[a].hidden);
					i.update();
				}
			},
			tooltips: {
				callbacks: {
					title: function() {
						return "";
					},
					label: function(e, t) {
						return t.labels[e.index] + ": " + e.yLabel;
					}
				}
			}
		}),
			(e.exports = function(e) {
				e.controllers.polarArea = e.DatasetController.extend({
					dataElementType: r.Arc,
					linkScales: a.noop,
					update: function(e) {
						var t = this,
							o = t.chart,
							n = o.chartArea,
							r = t.getMeta(),
							i = o.options,
							s = i.elements.arc,
							l = Math.min(n.right - n.left, n.bottom - n.top);
						(o.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0)),
							(o.innerRadius = Math.max(
								i.cutoutPercentage ? (o.outerRadius / 100) * i.cutoutPercentage : 1,
								0
							)),
							(o.radiusLength =
								(o.outerRadius - o.innerRadius) / o.getVisibleDatasetCount()),
							(t.outerRadius = o.outerRadius - o.radiusLength * t.index),
							(t.innerRadius = t.outerRadius - o.radiusLength),
							(r.count = t.countVisibleElements()),
							a.each(r.data, function(o, n) {
								t.updateElement(o, n, e);
							});
					},
					updateElement: function(e, t, o) {
						for (
							var n = this,
								r = n.chart,
								i = n.getDataset(),
								s = r.options,
								l = s.animation,
								d = r.scale,
								u = r.data.labels,
								c = n.calculateCircumference(i.data[t]),
								h = d.xCenter,
								f = d.yCenter,
								p = 0,
								m = n.getMeta(),
								g = 0;
							g < t;
							++g
						)
							isNaN(i.data[g]) || m.data[g].hidden || ++p;
						var v = s.startAngle,
							b = e.hidden ? 0 : d.getDistanceFromCenterForValue(i.data[t]),
							y = v + c * p,
							_ = y + (e.hidden ? 0 : c),
							x = l.animateScale ? 0 : d.getDistanceFromCenterForValue(i.data[t]);
						a.extend(e, {
							_datasetIndex: n.index,
							_index: t,
							_scale: d,
							_model: {
								x: h,
								y: f,
								innerRadius: 0,
								outerRadius: o ? x : b,
								startAngle: o && l.animateRotate ? v : y,
								endAngle: o && l.animateRotate ? v : _,
								label: a.valueAtIndexOrDefault(u, t, u[t])
							}
						}),
							n.removeHoverStyle(e),
							e.pivot();
					},
					removeHoverStyle: function(t) {
						e.DatasetController.prototype.removeHoverStyle.call(
							this,
							t,
							this.chart.options.elements.arc
						);
					},
					countVisibleElements: function() {
						var e = this.getDataset(),
							t = this.getMeta(),
							o = 0;
						return (
							a.each(t.data, function(t, n) {
								isNaN(e.data[n]) || t.hidden || o++;
							}),
							o
						);
					},
					calculateCircumference: function(e) {
						var t = this.getMeta().count;
						return t > 0 && !isNaN(e) ? (2 * Math.PI) / t : 0;
					}
				});
			});
	},
	"./node_modules/chart.js/src/controllers/controller.radar.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/elements/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }),
			(e.exports = function(e) {
				e.controllers.radar = e.DatasetController.extend({
					datasetElementType: r.Line,
					dataElementType: r.Point,
					linkScales: a.noop,
					update: function(e) {
						var t = this,
							o = t.getMeta(),
							n = o.dataset,
							r = o.data,
							i = n.custom || {},
							s = t.getDataset(),
							l = t.chart.options.elements.line,
							d = t.chart.scale;
						void 0 !== s.tension &&
							void 0 === s.lineTension &&
							(s.lineTension = s.tension),
							a.extend(o.dataset, {
								_datasetIndex: t.index,
								_scale: d,
								_children: r,
								_loop: !0,
								_model: {
									tension: i.tension
										? i.tension
										: a.valueOrDefault(s.lineTension, l.tension),
									backgroundColor: i.backgroundColor
										? i.backgroundColor
										: s.backgroundColor || l.backgroundColor,
									borderWidth: i.borderWidth
										? i.borderWidth
										: s.borderWidth || l.borderWidth,
									borderColor: i.borderColor
										? i.borderColor
										: s.borderColor || l.borderColor,
									fill: i.fill ? i.fill : void 0 !== s.fill ? s.fill : l.fill,
									borderCapStyle: i.borderCapStyle
										? i.borderCapStyle
										: s.borderCapStyle || l.borderCapStyle,
									borderDash: i.borderDash
										? i.borderDash
										: s.borderDash || l.borderDash,
									borderDashOffset: i.borderDashOffset
										? i.borderDashOffset
										: s.borderDashOffset || l.borderDashOffset,
									borderJoinStyle: i.borderJoinStyle
										? i.borderJoinStyle
										: s.borderJoinStyle || l.borderJoinStyle
								}
							}),
							o.dataset.pivot(),
							a.each(
								r,
								function(o, n) {
									t.updateElement(o, n, e);
								},
								t
							),
							t.updateBezierControlPoints();
					},
					updateElement: function(e, t, o) {
						var n = this,
							r = e.custom || {},
							i = n.getDataset(),
							s = n.chart.scale,
							l = n.chart.options.elements.point,
							d = s.getPointPositionForValue(t, i.data[t]);
						void 0 !== i.radius &&
							void 0 === i.pointRadius &&
							(i.pointRadius = i.radius),
							void 0 !== i.hitRadius &&
								void 0 === i.pointHitRadius &&
								(i.pointHitRadius = i.hitRadius),
							a.extend(e, {
								_datasetIndex: n.index,
								_index: t,
								_scale: s,
								_model: {
									x: o ? s.xCenter : d.x,
									y: o ? s.yCenter : d.y,
									tension: r.tension
										? r.tension
										: a.valueOrDefault(
												i.lineTension,
												n.chart.options.elements.line.tension
										  ),
									radius: r.radius
										? r.radius
										: a.valueAtIndexOrDefault(i.pointRadius, t, l.radius),
									backgroundColor: r.backgroundColor
										? r.backgroundColor
										: a.valueAtIndexOrDefault(
												i.pointBackgroundColor,
												t,
												l.backgroundColor
										  ),
									borderColor: r.borderColor
										? r.borderColor
										: a.valueAtIndexOrDefault(
												i.pointBorderColor,
												t,
												l.borderColor
										  ),
									borderWidth: r.borderWidth
										? r.borderWidth
										: a.valueAtIndexOrDefault(
												i.pointBorderWidth,
												t,
												l.borderWidth
										  ),
									pointStyle: r.pointStyle
										? r.pointStyle
										: a.valueAtIndexOrDefault(i.pointStyle, t, l.pointStyle),
									hitRadius: r.hitRadius
										? r.hitRadius
										: a.valueAtIndexOrDefault(i.pointHitRadius, t, l.hitRadius)
								}
							}),
							(e._model.skip = r.skip
								? r.skip
								: isNaN(e._model.x) || isNaN(e._model.y));
					},
					updateBezierControlPoints: function() {
						var e = this.chart.chartArea,
							t = this.getMeta();
						a.each(t.data, function(o, n) {
							var r = o._model,
								i = a.splineCurve(
									a.previousItem(t.data, n, !0)._model,
									r,
									a.nextItem(t.data, n, !0)._model,
									r.tension
								);
							(r.controlPointPreviousX = Math.max(
								Math.min(i.previous.x, e.right),
								e.left
							)),
								(r.controlPointPreviousY = Math.max(
									Math.min(i.previous.y, e.bottom),
									e.top
								)),
								(r.controlPointNextX = Math.max(
									Math.min(i.next.x, e.right),
									e.left
								)),
								(r.controlPointNextY = Math.max(
									Math.min(i.next.y, e.bottom),
									e.top
								)),
								o.pivot();
						});
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e.custom || {},
							n = e._index,
							r = e._model;
						(r.radius = o.hoverRadius
							? o.hoverRadius
							: a.valueAtIndexOrDefault(
									t.pointHoverRadius,
									n,
									this.chart.options.elements.point.hoverRadius
							  )),
							(r.backgroundColor = o.hoverBackgroundColor
								? o.hoverBackgroundColor
								: a.valueAtIndexOrDefault(
										t.pointHoverBackgroundColor,
										n,
										a.getHoverColor(r.backgroundColor)
								  )),
							(r.borderColor = o.hoverBorderColor
								? o.hoverBorderColor
								: a.valueAtIndexOrDefault(
										t.pointHoverBorderColor,
										n,
										a.getHoverColor(r.borderColor)
								  )),
							(r.borderWidth = o.hoverBorderWidth
								? o.hoverBorderWidth
								: a.valueAtIndexOrDefault(
										t.pointHoverBorderWidth,
										n,
										r.borderWidth
								  ));
					},
					removeHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e.custom || {},
							n = e._index,
							r = e._model,
							i = this.chart.options.elements.point;
						(r.radius = o.radius
							? o.radius
							: a.valueAtIndexOrDefault(t.pointRadius, n, i.radius)),
							(r.backgroundColor = o.backgroundColor
								? o.backgroundColor
								: a.valueAtIndexOrDefault(
										t.pointBackgroundColor,
										n,
										i.backgroundColor
								  )),
							(r.borderColor = o.borderColor
								? o.borderColor
								: a.valueAtIndexOrDefault(t.pointBorderColor, n, i.borderColor)),
							(r.borderWidth = o.borderWidth
								? o.borderWidth
								: a.valueAtIndexOrDefault(t.pointBorderWidth, n, i.borderWidth));
					}
				});
			});
	},
	"./node_modules/chart.js/src/controllers/controller.scatter.js": function(e, t, o) {
		"use strict";
		o("./node_modules/chart.js/src/core/core.defaults.js")._set("scatter", {
			hover: { mode: "single" },
			scales: {
				xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
				yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }]
			},
			showLines: !1,
			tooltips: {
				callbacks: {
					title: function() {
						return "";
					},
					label: function(e) {
						return "(" + e.xLabel + ", " + e.yLabel + ")";
					}
				}
			}
		}),
			(e.exports = function(e) {
				e.controllers.scatter = e.controllers.line;
			});
	},
	"./node_modules/chart.js/src/core/core.animation.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/core/core.element.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("global", {
			animation: {
				duration: 1e3,
				easing: "easeOutQuart",
				onProgress: a.noop,
				onComplete: a.noop
			}
		}),
			(e.exports = function(e) {
				(e.Animation = r.extend({
					chart: null,
					currentStep: 0,
					numSteps: 60,
					easing: "",
					render: null,
					onAnimationProgress: null,
					onAnimationComplete: null
				})),
					(e.animationService = {
						frameDuration: 17,
						animations: [],
						dropFrames: 0,
						request: null,
						addAnimation: function(e, t, o, n) {
							var r,
								a,
								i = this.animations;
							for (
								t.chart = e, n || (e.animating = !0), r = 0, a = i.length;
								r < a;
								++r
							)
								if (i[r].chart === e) return void (i[r] = t);
							i.push(t), 1 === i.length && this.requestAnimationFrame();
						},
						cancelAnimation: function(e) {
							var t = a.findIndex(this.animations, function(t) {
								return t.chart === e;
							});
							-1 !== t && (this.animations.splice(t, 1), (e.animating = !1));
						},
						requestAnimationFrame: function() {
							var e = this;
							null === e.request &&
								(e.request = a.requestAnimFrame.call(window, function() {
									(e.request = null), e.startDigest();
								}));
						},
						startDigest: function() {
							var e = this,
								t = Date.now(),
								o = 0;
							e.dropFrames > 1 &&
								((o = Math.floor(e.dropFrames)), (e.dropFrames = e.dropFrames % 1)),
								e.advance(1 + o);
							var n = Date.now();
							(e.dropFrames += (n - t) / e.frameDuration),
								e.animations.length > 0 && e.requestAnimationFrame();
						},
						advance: function(e) {
							for (var t, o, n = this.animations, r = 0; r < n.length; )
								(t = n[r]),
									(o = t.chart),
									(t.currentStep = (t.currentStep || 0) + e),
									(t.currentStep = Math.min(t.currentStep, t.numSteps)),
									a.callback(t.render, [o, t], o),
									a.callback(t.onAnimationProgress, [t], o),
									t.currentStep >= t.numSteps
										? (a.callback(t.onAnimationComplete, [t], o),
										  (o.animating = !1),
										  n.splice(r, 1))
										: ++r;
						}
					}),
					Object.defineProperty(e.Animation.prototype, "animationObject", {
						get: function() {
							return this;
						}
					}),
					Object.defineProperty(e.Animation.prototype, "chartInstance", {
						get: function() {
							return this.chart;
						},
						set: function(e) {
							this.chart = e;
						}
					});
			});
	},
	"./node_modules/chart.js/src/core/core.controller.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/helpers/index.js"),
			a = o("./node_modules/chart.js/src/core/core.interaction.js"),
			i = o("./node_modules/chart.js/src/core/core.layouts.js"),
			s = o("./node_modules/chart.js/src/platforms/platform.js"),
			l = o("./node_modules/chart.js/src/core/core.plugins.js");
		e.exports = function(e) {
			function t(e) {
				e = e || {};
				var t = (e.data = e.data || {});
				return (
					(t.datasets = t.datasets || []),
					(t.labels = t.labels || []),
					(e.options = r.configMerge(n.global, n[e.type], e.options || {})),
					e
				);
			}
			function o(t) {
				var o = t.options;
				r.each(t.scales, function(e) {
					i.removeBox(t, e);
				}),
					(o = r.configMerge(e.defaults.global, e.defaults[t.config.type], o)),
					(t.options = t.config.options = o),
					t.ensureScalesHaveIDs(),
					t.buildOrUpdateScales(),
					(t.tooltip._options = o.tooltips),
					t.tooltip.initialize();
			}
			function d(e) {
				return "top" === e || "bottom" === e;
			}
			(e.types = {}),
				(e.instances = {}),
				(e.controllers = {}),
				r.extend(e.prototype, {
					construct: function(o, n) {
						var a = this;
						n = t(n);
						var i = s.acquireContext(o, n),
							l = i && i.canvas,
							d = l && l.height,
							u = l && l.width;
						if (
							((a.id = r.uid()),
							(a.ctx = i),
							(a.canvas = l),
							(a.config = n),
							(a.width = u),
							(a.height = d),
							(a.aspectRatio = d ? u / d : null),
							(a.options = n.options),
							(a._bufferedRender = !1),
							(a.chart = a),
							(a.controller = a),
							(e.instances[a.id] = a),
							Object.defineProperty(a, "data", {
								get: function() {
									return a.config.data;
								},
								set: function(e) {
									a.config.data = e;
								}
							}),
							!i || !l)
						)
							return void console.error(
								"Failed to create chart: can't acquire context from the given item"
							);
						a.initialize(), a.update();
					},
					initialize: function() {
						var e = this;
						return (
							l.notify(e, "beforeInit"),
							r.retinaScale(e, e.options.devicePixelRatio),
							e.bindEvents(),
							e.options.responsive && e.resize(!0),
							e.ensureScalesHaveIDs(),
							e.buildOrUpdateScales(),
							e.initToolTip(),
							l.notify(e, "afterInit"),
							e
						);
					},
					clear: function() {
						return r.canvas.clear(this), this;
					},
					stop: function() {
						return e.animationService.cancelAnimation(this), this;
					},
					resize: function(e) {
						var t = this,
							o = t.options,
							n = t.canvas,
							a = (o.maintainAspectRatio && t.aspectRatio) || null,
							i = Math.max(0, Math.floor(r.getMaximumWidth(n))),
							s = Math.max(0, Math.floor(a ? i / a : r.getMaximumHeight(n)));
						if (
							(t.width !== i || t.height !== s) &&
							((n.width = t.width = i),
							(n.height = t.height = s),
							(n.style.width = i + "px"),
							(n.style.height = s + "px"),
							r.retinaScale(t, o.devicePixelRatio),
							!e)
						) {
							var d = { width: i, height: s };
							l.notify(t, "resize", [d]),
								t.options.onResize && t.options.onResize(t, d),
								t.stop(),
								t.update(t.options.responsiveAnimationDuration);
						}
					},
					ensureScalesHaveIDs: function() {
						var e = this.options,
							t = e.scales || {},
							o = e.scale;
						r.each(t.xAxes, function(e, t) {
							e.id = e.id || "x-axis-" + t;
						}),
							r.each(t.yAxes, function(e, t) {
								e.id = e.id || "y-axis-" + t;
							}),
							o && (o.id = o.id || "scale");
					},
					buildOrUpdateScales: function() {
						var t = this,
							o = t.options,
							n = t.scales || {},
							a = [],
							i = Object.keys(n).reduce(function(e, t) {
								return (e[t] = !1), e;
							}, {});
						o.scales &&
							(a = a.concat(
								(o.scales.xAxes || []).map(function(e) {
									return { options: e, dtype: "category", dposition: "bottom" };
								}),
								(o.scales.yAxes || []).map(function(e) {
									return { options: e, dtype: "linear", dposition: "left" };
								})
							)),
							o.scale &&
								a.push({
									options: o.scale,
									dtype: "radialLinear",
									isDefault: !0,
									dposition: "chartArea"
								}),
							r.each(a, function(o) {
								var a = o.options,
									s = a.id,
									l = r.valueOrDefault(a.type, o.dtype);
								d(a.position) !== d(o.dposition) && (a.position = o.dposition),
									(i[s] = !0);
								var u = null;
								if (s in n && n[s].type === l)
									(u = n[s]), (u.options = a), (u.ctx = t.ctx), (u.chart = t);
								else {
									var c = e.scaleService.getScaleConstructor(l);
									if (!c) return;
									(u = new c({
										id: s,
										type: l,
										options: a,
										ctx: t.ctx,
										chart: t
									})),
										(n[u.id] = u);
								}
								u.mergeTicksOptions(), o.isDefault && (t.scale = u);
							}),
							r.each(i, function(e, t) {
								e || delete n[t];
							}),
							(t.scales = n),
							e.scaleService.addScalesToLayout(this);
					},
					buildOrUpdateControllers: function() {
						var t = this,
							o = [],
							n = [];
						return (
							r.each(
								t.data.datasets,
								function(r, a) {
									var i = t.getDatasetMeta(a),
										s = r.type || t.config.type;
									if (
										(i.type &&
											i.type !== s &&
											(t.destroyDatasetMeta(a), (i = t.getDatasetMeta(a))),
										(i.type = s),
										o.push(i.type),
										i.controller)
									)
										i.controller.updateIndex(a), i.controller.linkScales();
									else {
										var l = e.controllers[i.type];
										if (void 0 === l)
											throw new Error(
												'"' + i.type + '" is not a chart type.'
											);
										(i.controller = new l(t, a)), n.push(i.controller);
									}
								},
								t
							),
							n
						);
					},
					resetElements: function() {
						var e = this;
						r.each(
							e.data.datasets,
							function(t, o) {
								e.getDatasetMeta(o).controller.reset();
							},
							e
						);
					},
					reset: function() {
						this.resetElements(), this.tooltip.initialize();
					},
					update: function(e) {
						var t = this;
						if (
							((e && "object" == typeof e) ||
								(e = { duration: e, lazy: arguments[1] }),
							o(t),
							l._invalidate(t),
							!1 !== l.notify(t, "beforeUpdate"))
						) {
							t.tooltip._data = t.data;
							var n = t.buildOrUpdateControllers();
							r.each(
								t.data.datasets,
								function(e, o) {
									t.getDatasetMeta(o).controller.buildOrUpdateElements();
								},
								t
							),
								t.updateLayout(),
								t.options.animation &&
									t.options.animation.duration &&
									r.each(n, function(e) {
										e.reset();
									}),
								t.updateDatasets(),
								t.tooltip.initialize(),
								(t.lastActive = []),
								l.notify(t, "afterUpdate"),
								t._bufferedRender
									? (t._bufferedRequest = {
											duration: e.duration,
											easing: e.easing,
											lazy: e.lazy
									  })
									: t.render(e);
						}
					},
					updateLayout: function() {
						var e = this;
						!1 !== l.notify(e, "beforeLayout") &&
							(i.update(this, this.width, this.height),
							l.notify(e, "afterScaleUpdate"),
							l.notify(e, "afterLayout"));
					},
					updateDatasets: function() {
						var e = this;
						if (!1 !== l.notify(e, "beforeDatasetsUpdate")) {
							for (var t = 0, o = e.data.datasets.length; t < o; ++t)
								e.updateDataset(t);
							l.notify(e, "afterDatasetsUpdate");
						}
					},
					updateDataset: function(e) {
						var t = this,
							o = t.getDatasetMeta(e),
							n = { meta: o, index: e };
						!1 !== l.notify(t, "beforeDatasetUpdate", [n]) &&
							(o.controller.update(), l.notify(t, "afterDatasetUpdate", [n]));
					},
					render: function(t) {
						var o = this;
						(t && "object" == typeof t) || (t = { duration: t, lazy: arguments[1] });
						var n = t.duration,
							a = t.lazy;
						if (!1 !== l.notify(o, "beforeRender")) {
							var i = o.options.animation,
								s = function(e) {
									l.notify(o, "afterRender"),
										r.callback(i && i.onComplete, [e], o);
								};
							if (
								i &&
								((void 0 !== n && 0 !== n) || (void 0 === n && 0 !== i.duration))
							) {
								var d = new e.Animation({
									numSteps: (n || i.duration) / 16.66,
									easing: t.easing || i.easing,
									render: function(e, t) {
										var o = r.easing.effects[t.easing],
											n = t.currentStep,
											a = n / t.numSteps;
										e.draw(o(a), a, n);
									},
									onAnimationProgress: i.onProgress,
									onAnimationComplete: s
								});
								e.animationService.addAnimation(o, d, n, a);
							} else o.draw(), s(new e.Animation({ numSteps: 0, chart: o }));
							return o;
						}
					},
					draw: function(e) {
						var t = this;
						t.clear(),
							r.isNullOrUndef(e) && (e = 1),
							t.transition(e),
							!1 !== l.notify(t, "beforeDraw", [e]) &&
								(r.each(
									t.boxes,
									function(e) {
										e.draw(t.chartArea);
									},
									t
								),
								t.scale && t.scale.draw(),
								t.drawDatasets(e),
								t._drawTooltip(e),
								l.notify(t, "afterDraw", [e]));
					},
					transition: function(e) {
						for (var t = this, o = 0, n = (t.data.datasets || []).length; o < n; ++o)
							t.isDatasetVisible(o) && t.getDatasetMeta(o).controller.transition(e);
						t.tooltip.transition(e);
					},
					drawDatasets: function(e) {
						var t = this;
						if (!1 !== l.notify(t, "beforeDatasetsDraw", [e])) {
							for (var o = (t.data.datasets || []).length - 1; o >= 0; --o)
								t.isDatasetVisible(o) && t.drawDataset(o, e);
							l.notify(t, "afterDatasetsDraw", [e]);
						}
					},
					drawDataset: function(e, t) {
						var o = this,
							n = o.getDatasetMeta(e),
							r = { meta: n, index: e, easingValue: t };
						!1 !== l.notify(o, "beforeDatasetDraw", [r]) &&
							(n.controller.draw(t), l.notify(o, "afterDatasetDraw", [r]));
					},
					_drawTooltip: function(e) {
						var t = this,
							o = t.tooltip,
							n = { tooltip: o, easingValue: e };
						!1 !== l.notify(t, "beforeTooltipDraw", [n]) &&
							(o.draw(), l.notify(t, "afterTooltipDraw", [n]));
					},
					getElementAtEvent: function(e) {
						return a.modes.single(this, e);
					},
					getElementsAtEvent: function(e) {
						return a.modes.label(this, e, { intersect: !0 });
					},
					getElementsAtXAxis: function(e) {
						return a.modes["x-axis"](this, e, { intersect: !0 });
					},
					getElementsAtEventForMode: function(e, t, o) {
						var n = a.modes[t];
						return "function" == typeof n ? n(this, e, o) : [];
					},
					getDatasetAtEvent: function(e) {
						return a.modes.dataset(this, e, { intersect: !0 });
					},
					getDatasetMeta: function(e) {
						var t = this,
							o = t.data.datasets[e];
						o._meta || (o._meta = {});
						var n = o._meta[t.id];
						return (
							n ||
								(n = o._meta[t.id] = {
									type: null,
									data: [],
									dataset: null,
									controller: null,
									hidden: null,
									xAxisID: null,
									yAxisID: null
								}),
							n
						);
					},
					getVisibleDatasetCount: function() {
						for (var e = 0, t = 0, o = this.data.datasets.length; t < o; ++t)
							this.isDatasetVisible(t) && e++;
						return e;
					},
					isDatasetVisible: function(e) {
						var t = this.getDatasetMeta(e);
						return "boolean" == typeof t.hidden
							? !t.hidden
							: !this.data.datasets[e].hidden;
					},
					generateLegend: function() {
						return this.options.legendCallback(this);
					},
					destroyDatasetMeta: function(e) {
						var t = this.id,
							o = this.data.datasets[e],
							n = o._meta && o._meta[t];
						n && (n.controller.destroy(), delete o._meta[t]);
					},
					destroy: function() {
						var t,
							o,
							n = this,
							a = n.canvas;
						for (n.stop(), t = 0, o = n.data.datasets.length; t < o; ++t)
							n.destroyDatasetMeta(t);
						a &&
							(n.unbindEvents(),
							r.canvas.clear(n),
							s.releaseContext(n.ctx),
							(n.canvas = null),
							(n.ctx = null)),
							l.notify(n, "destroy"),
							delete e.instances[n.id];
					},
					toBase64Image: function() {
						return this.canvas.toDataURL.apply(this.canvas, arguments);
					},
					initToolTip: function() {
						var t = this;
						t.tooltip = new e.Tooltip(
							{
								_chart: t,
								_chartInstance: t,
								_data: t.data,
								_options: t.options.tooltips
							},
							t
						);
					},
					bindEvents: function() {
						var e = this,
							t = (e._listeners = {}),
							o = function() {
								e.eventHandler.apply(e, arguments);
							};
						r.each(e.options.events, function(n) {
							s.addEventListener(e, n, o), (t[n] = o);
						}),
							e.options.responsive &&
								((o = function() {
									e.resize();
								}),
								s.addEventListener(e, "resize", o),
								(t.resize = o));
					},
					unbindEvents: function() {
						var e = this,
							t = e._listeners;
						t &&
							(delete e._listeners,
							r.each(t, function(t, o) {
								s.removeEventListener(e, o, t);
							}));
					},
					updateHoverStyle: function(e, t, o) {
						var n,
							r,
							a,
							i = o ? "setHoverStyle" : "removeHoverStyle";
						for (r = 0, a = e.length; r < a; ++r)
							(n = e[r]) && this.getDatasetMeta(n._datasetIndex).controller[i](n);
					},
					eventHandler: function(e) {
						var t = this,
							o = t.tooltip;
						if (!1 !== l.notify(t, "beforeEvent", [e])) {
							(t._bufferedRender = !0), (t._bufferedRequest = null);
							var n = t.handleEvent(e);
							o && (n = o._start ? o.handleEvent(e) : n | o.handleEvent(e)),
								l.notify(t, "afterEvent", [e]);
							var r = t._bufferedRequest;
							return (
								r
									? t.render(r)
									: n &&
									  !t.animating &&
									  (t.stop(), t.render(t.options.hover.animationDuration, !0)),
								(t._bufferedRender = !1),
								(t._bufferedRequest = null),
								t
							);
						}
					},
					handleEvent: function(e) {
						var t = this,
							o = t.options || {},
							n = o.hover,
							a = !1;
						return (
							(t.lastActive = t.lastActive || []),
							"mouseout" === e.type
								? (t.active = [])
								: (t.active = t.getElementsAtEventForMode(e, n.mode, n)),
							r.callback(o.onHover || o.hover.onHover, [e.native, t.active], t),
							("mouseup" !== e.type && "click" !== e.type) ||
								(o.onClick && o.onClick.call(t, e.native, t.active)),
							t.lastActive.length && t.updateHoverStyle(t.lastActive, n.mode, !1),
							t.active.length && n.mode && t.updateHoverStyle(t.active, n.mode, !0),
							(a = !r.arrayEquals(t.active, t.lastActive)),
							(t.lastActive = t.active),
							a
						);
					}
				}),
				(e.Controller = e);
		};
	},
	"./node_modules/chart.js/src/core/core.datasetController.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = function(e) {
			function t(e, t) {
				if (e._chartjs) return void e._chartjs.listeners.push(t);
				Object.defineProperty(e, "_chartjs", {
					configurable: !0,
					enumerable: !1,
					value: { listeners: [t] }
				}),
					r.forEach(function(t) {
						var o = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
							r = e[t];
						Object.defineProperty(e, t, {
							configurable: !0,
							enumerable: !1,
							value: function() {
								var t = Array.prototype.slice.call(arguments),
									a = r.apply(this, t);
								return (
									n.each(e._chartjs.listeners, function(e) {
										"function" == typeof e[o] && e[o].apply(e, t);
									}),
									a
								);
							}
						});
					});
			}
			function o(e, t) {
				var o = e._chartjs;
				if (o) {
					var n = o.listeners,
						a = n.indexOf(t);
					-1 !== a && n.splice(a, 1),
						n.length > 0 ||
							(r.forEach(function(t) {
								delete e[t];
							}),
							delete e._chartjs);
				}
			}
			var r = ["push", "pop", "shift", "splice", "unshift"];
			(e.DatasetController = function(e, t) {
				this.initialize(e, t);
			}),
				n.extend(e.DatasetController.prototype, {
					datasetElementType: null,
					dataElementType: null,
					initialize: function(e, t) {
						var o = this;
						(o.chart = e), (o.index = t), o.linkScales(), o.addElements();
					},
					updateIndex: function(e) {
						this.index = e;
					},
					linkScales: function() {
						var e = this,
							t = e.getMeta(),
							o = e.getDataset();
						(null !== t.xAxisID && t.xAxisID in e.chart.scales) ||
							(t.xAxisID = o.xAxisID || e.chart.options.scales.xAxes[0].id),
							(null !== t.yAxisID && t.yAxisID in e.chart.scales) ||
								(t.yAxisID = o.yAxisID || e.chart.options.scales.yAxes[0].id);
					},
					getDataset: function() {
						return this.chart.data.datasets[this.index];
					},
					getMeta: function() {
						return this.chart.getDatasetMeta(this.index);
					},
					getScaleForId: function(e) {
						return this.chart.scales[e];
					},
					reset: function() {
						this.update(!0);
					},
					destroy: function() {
						this._data && o(this._data, this);
					},
					createMetaDataset: function() {
						var e = this,
							t = e.datasetElementType;
						return t && new t({ _chart: e.chart, _datasetIndex: e.index });
					},
					createMetaData: function(e) {
						var t = this,
							o = t.dataElementType;
						return o && new o({ _chart: t.chart, _datasetIndex: t.index, _index: e });
					},
					addElements: function() {
						var e,
							t,
							o = this,
							n = o.getMeta(),
							r = o.getDataset().data || [],
							a = n.data;
						for (e = 0, t = r.length; e < t; ++e) a[e] = a[e] || o.createMetaData(e);
						n.dataset = n.dataset || o.createMetaDataset();
					},
					addElementAndReset: function(e) {
						var t = this.createMetaData(e);
						this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
					},
					buildOrUpdateElements: function() {
						var e = this,
							n = e.getDataset(),
							r = n.data || (n.data = []);
						e._data !== r && (e._data && o(e._data, e), t(r, e), (e._data = r)),
							e.resyncElements();
					},
					update: n.noop,
					transition: function(e) {
						for (
							var t = this.getMeta(), o = t.data || [], n = o.length, r = 0;
							r < n;
							++r
						)
							o[r].transition(e);
						t.dataset && t.dataset.transition(e);
					},
					draw: function() {
						var e = this.getMeta(),
							t = e.data || [],
							o = t.length,
							n = 0;
						for (e.dataset && e.dataset.draw(); n < o; ++n) t[n].draw();
					},
					removeHoverStyle: function(e, t) {
						var o = this.chart.data.datasets[e._datasetIndex],
							r = e._index,
							a = e.custom || {},
							i = n.valueAtIndexOrDefault,
							s = e._model;
						(s.backgroundColor = a.backgroundColor
							? a.backgroundColor
							: i(o.backgroundColor, r, t.backgroundColor)),
							(s.borderColor = a.borderColor
								? a.borderColor
								: i(o.borderColor, r, t.borderColor)),
							(s.borderWidth = a.borderWidth
								? a.borderWidth
								: i(o.borderWidth, r, t.borderWidth));
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							o = e._index,
							r = e.custom || {},
							a = n.valueAtIndexOrDefault,
							i = n.getHoverColor,
							s = e._model;
						(s.backgroundColor = r.hoverBackgroundColor
							? r.hoverBackgroundColor
							: a(t.hoverBackgroundColor, o, i(s.backgroundColor))),
							(s.borderColor = r.hoverBorderColor
								? r.hoverBorderColor
								: a(t.hoverBorderColor, o, i(s.borderColor))),
							(s.borderWidth = r.hoverBorderWidth
								? r.hoverBorderWidth
								: a(t.hoverBorderWidth, o, s.borderWidth));
					},
					resyncElements: function() {
						var e = this,
							t = e.getMeta(),
							o = e.getDataset().data,
							n = t.data.length,
							r = o.length;
						r < n ? t.data.splice(r, n - r) : r > n && e.insertElements(n, r - n);
					},
					insertElements: function(e, t) {
						for (var o = 0; o < t; ++o) this.addElementAndReset(e + o);
					},
					onDataPush: function() {
						this.insertElements(this.getDataset().data.length - 1, arguments.length);
					},
					onDataPop: function() {
						this.getMeta().data.pop();
					},
					onDataShift: function() {
						this.getMeta().data.shift();
					},
					onDataSplice: function(e, t) {
						this.getMeta().data.splice(e, t),
							this.insertElements(e, arguments.length - 2);
					},
					onDataUnshift: function() {
						this.insertElements(0, arguments.length);
					}
				}),
				(e.DatasetController.extend = n.inherits);
		};
	},
	"./node_modules/chart.js/src/core/core.defaults.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = {
			_set: function(e, t) {
				return n.merge(this[e] || (this[e] = {}), t);
			}
		};
	},
	"./node_modules/chart.js/src/core/core.element.js": function(e, t, o) {
		"use strict";
		function n(e, t, o, n) {
			var a,
				i,
				s,
				l,
				d,
				u,
				c,
				h,
				f,
				p = Object.keys(o);
			for (a = 0, i = p.length; a < i; ++a)
				if (
					((s = p[a]),
					(u = o[s]),
					t.hasOwnProperty(s) || (t[s] = u),
					(l = t[s]) !== u && "_" !== s[0])
				) {
					if (
						(e.hasOwnProperty(s) || (e[s] = l), (d = e[s]), (c = typeof u) === typeof d)
					)
						if ("string" === c) {
							if (((h = r(d)), h.valid && ((f = r(u)), f.valid))) {
								t[s] = f.mix(h, n).rgbString();
								continue;
							}
						} else if ("number" === c && isFinite(d) && isFinite(u)) {
							t[s] = d + (u - d) * n;
							continue;
						}
					t[s] = u;
				}
		}
		var r = o("./node_modules/chartjs-color/index.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js"),
			i = function(e) {
				a.extend(this, e), this.initialize.apply(this, arguments);
			};
		a.extend(i.prototype, {
			initialize: function() {
				this.hidden = !1;
			},
			pivot: function() {
				var e = this;
				return e._view || (e._view = a.clone(e._model)), (e._start = {}), e;
			},
			transition: function(e) {
				var t = this,
					o = t._model,
					r = t._start,
					a = t._view;
				return o && 1 !== e
					? (a || (a = t._view = {}), r || (r = t._start = {}), n(r, a, o, e), t)
					: ((t._view = o), (t._start = null), t);
			},
			tooltipPosition: function() {
				return { x: this._model.x, y: this._model.y };
			},
			hasValue: function() {
				return a.isNumber(this._model.x) && a.isNumber(this._model.y);
			}
		}),
			(i.extend = a.inherits),
			(e.exports = i);
	},
	"./node_modules/chart.js/src/core/core.helpers.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chartjs-color/index.js"),
			r = o("./node_modules/chart.js/src/core/core.defaults.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = function(e) {
			function t(e, t, o) {
				var n;
				return (
					"string" == typeof e
						? ((n = parseInt(e, 10)),
						  -1 !== e.indexOf("%") && (n = (n / 100) * t.parentNode[o]))
						: (n = e),
					n
				);
			}
			function o(e) {
				return void 0 !== e && null !== e && "none" !== e;
			}
			function i(e, n, r) {
				var a = document.defaultView,
					i = e.parentNode,
					s = a.getComputedStyle(e)[n],
					l = a.getComputedStyle(i)[n],
					d = o(s),
					u = o(l),
					c = Number.POSITIVE_INFINITY;
				return d || u ? Math.min(d ? t(s, e, r) : c, u ? t(l, i, r) : c) : "none";
			}
			(a.configMerge = function() {
				return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
					merger: function(t, o, n, r) {
						var i = o[t] || {},
							s = n[t];
						"scales" === t
							? (o[t] = a.scaleMerge(i, s))
							: "scale" === t
								? (o[t] = a.merge(i, [e.scaleService.getScaleDefaults(s.type), s]))
								: a._merger(t, o, n, r);
					}
				});
			}),
				(a.scaleMerge = function() {
					return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
						merger: function(t, o, n, r) {
							if ("xAxes" === t || "yAxes" === t) {
								var i,
									s,
									l,
									d = n[t].length;
								for (o[t] || (o[t] = []), i = 0; i < d; ++i)
									(l = n[t][i]),
										(s = a.valueOrDefault(
											l.type,
											"xAxes" === t ? "category" : "linear"
										)),
										i >= o[t].length && o[t].push({}),
										!o[t][i].type || (l.type && l.type !== o[t][i].type)
											? a.merge(o[t][i], [
													e.scaleService.getScaleDefaults(s),
													l
											  ])
											: a.merge(o[t][i], l);
							} else a._merger(t, o, n, r);
						}
					});
				}),
				(a.where = function(e, t) {
					if (a.isArray(e) && Array.prototype.filter) return e.filter(t);
					var o = [];
					return (
						a.each(e, function(e) {
							t(e) && o.push(e);
						}),
						o
					);
				}),
				(a.findIndex = Array.prototype.findIndex
					? function(e, t, o) {
							return e.findIndex(t, o);
					  }
					: function(e, t, o) {
							o = void 0 === o ? e : o;
							for (var n = 0, r = e.length; n < r; ++n)
								if (t.call(o, e[n], n, e)) return n;
							return -1;
					  }),
				(a.findNextWhere = function(e, t, o) {
					a.isNullOrUndef(o) && (o = -1);
					for (var n = o + 1; n < e.length; n++) {
						var r = e[n];
						if (t(r)) return r;
					}
				}),
				(a.findPreviousWhere = function(e, t, o) {
					a.isNullOrUndef(o) && (o = e.length);
					for (var n = o - 1; n >= 0; n--) {
						var r = e[n];
						if (t(r)) return r;
					}
				}),
				(a.isNumber = function(e) {
					return !isNaN(parseFloat(e)) && isFinite(e);
				}),
				(a.almostEquals = function(e, t, o) {
					return Math.abs(e - t) < o;
				}),
				(a.almostWhole = function(e, t) {
					var o = Math.round(e);
					return o - t < e && o + t > e;
				}),
				(a.max = function(e) {
					return e.reduce(function(e, t) {
						return isNaN(t) ? e : Math.max(e, t);
					}, Number.NEGATIVE_INFINITY);
				}),
				(a.min = function(e) {
					return e.reduce(function(e, t) {
						return isNaN(t) ? e : Math.min(e, t);
					}, Number.POSITIVE_INFINITY);
				}),
				(a.sign = Math.sign
					? function(e) {
							return Math.sign(e);
					  }
					: function(e) {
							return (e = +e), 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1;
					  }),
				(a.log10 = Math.log10
					? function(e) {
							return Math.log10(e);
					  }
					: function(e) {
							var t = Math.log(e) * Math.LOG10E,
								o = Math.round(t);
							return e === Math.pow(10, o) ? o : t;
					  }),
				(a.toRadians = function(e) {
					return e * (Math.PI / 180);
				}),
				(a.toDegrees = function(e) {
					return e * (180 / Math.PI);
				}),
				(a.getAngleFromPoint = function(e, t) {
					var o = t.x - e.x,
						n = t.y - e.y,
						r = Math.sqrt(o * o + n * n),
						a = Math.atan2(n, o);
					return a < -0.5 * Math.PI && (a += 2 * Math.PI), { angle: a, distance: r };
				}),
				(a.distanceBetweenPoints = function(e, t) {
					return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
				}),
				(a.aliasPixel = function(e) {
					return e % 2 == 0 ? 0 : 0.5;
				}),
				(a.splineCurve = function(e, t, o, n) {
					var r = e.skip ? t : e,
						a = t,
						i = o.skip ? t : o,
						s = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
						l = Math.sqrt(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)),
						d = s / (s + l),
						u = l / (s + l);
					(d = isNaN(d) ? 0 : d), (u = isNaN(u) ? 0 : u);
					var c = n * d,
						h = n * u;
					return {
						previous: { x: a.x - c * (i.x - r.x), y: a.y - c * (i.y - r.y) },
						next: { x: a.x + h * (i.x - r.x), y: a.y + h * (i.y - r.y) }
					};
				}),
				(a.EPSILON = Number.EPSILON || 1e-14),
				(a.splineCurveMonotone = function(e) {
					var t,
						o,
						n,
						r,
						i = (e || []).map(function(e) {
							return { model: e._model, deltaK: 0, mK: 0 };
						}),
						s = i.length;
					for (t = 0; t < s; ++t)
						if (((n = i[t]), !n.model.skip)) {
							if (
								((o = t > 0 ? i[t - 1] : null),
								(r = t < s - 1 ? i[t + 1] : null) && !r.model.skip)
							) {
								var l = r.model.x - n.model.x;
								n.deltaK = 0 !== l ? (r.model.y - n.model.y) / l : 0;
							}
							!o || o.model.skip
								? (n.mK = n.deltaK)
								: !r || r.model.skip
									? (n.mK = o.deltaK)
									: this.sign(o.deltaK) !== this.sign(n.deltaK)
										? (n.mK = 0)
										: (n.mK = (o.deltaK + n.deltaK) / 2);
						}
					var d, u, c, h;
					for (t = 0; t < s - 1; ++t)
						(n = i[t]),
							(r = i[t + 1]),
							n.model.skip ||
								r.model.skip ||
								(a.almostEquals(n.deltaK, 0, this.EPSILON)
									? (n.mK = r.mK = 0)
									: ((d = n.mK / n.deltaK),
									  (u = r.mK / n.deltaK),
									  (h = Math.pow(d, 2) + Math.pow(u, 2)) <= 9 ||
											((c = 3 / Math.sqrt(h)),
											(n.mK = d * c * n.deltaK),
											(r.mK = u * c * n.deltaK))));
					var f;
					for (t = 0; t < s; ++t)
						(n = i[t]),
							n.model.skip ||
								((o = t > 0 ? i[t - 1] : null),
								(r = t < s - 1 ? i[t + 1] : null),
								o &&
									!o.model.skip &&
									((f = (n.model.x - o.model.x) / 3),
									(n.model.controlPointPreviousX = n.model.x - f),
									(n.model.controlPointPreviousY = n.model.y - f * n.mK)),
								r &&
									!r.model.skip &&
									((f = (r.model.x - n.model.x) / 3),
									(n.model.controlPointNextX = n.model.x + f),
									(n.model.controlPointNextY = n.model.y + f * n.mK)));
				}),
				(a.nextItem = function(e, t, o) {
					return o
						? t >= e.length - 1
							? e[0]
							: e[t + 1]
						: t >= e.length - 1
							? e[e.length - 1]
							: e[t + 1];
				}),
				(a.previousItem = function(e, t, o) {
					return o ? (t <= 0 ? e[e.length - 1] : e[t - 1]) : t <= 0 ? e[0] : e[t - 1];
				}),
				(a.niceNum = function(e, t) {
					var o = Math.floor(a.log10(e)),
						n = e / Math.pow(10, o);
					return (
						(t
							? n < 1.5
								? 1
								: n < 3
									? 2
									: n < 7
										? 5
										: 10
							: n <= 1
								? 1
								: n <= 2
									? 2
									: n <= 5
										? 5
										: 10) * Math.pow(10, o)
					);
				}),
				(a.requestAnimFrame = (function() {
					return "undefined" == typeof window
						? function(e) {
								e();
						  }
						: window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.oRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								function(e) {
									return window.setTimeout(e, 1e3 / 60);
								};
				})()),
				(a.getRelativePosition = function(e, t) {
					var o,
						n,
						r = e.originalEvent || e,
						i = e.currentTarget || e.srcElement,
						s = i.getBoundingClientRect(),
						l = r.touches;
					l && l.length > 0
						? ((o = l[0].clientX), (n = l[0].clientY))
						: ((o = r.clientX), (n = r.clientY));
					var d = parseFloat(a.getStyle(i, "padding-left")),
						u = parseFloat(a.getStyle(i, "padding-top")),
						c = parseFloat(a.getStyle(i, "padding-right")),
						h = parseFloat(a.getStyle(i, "padding-bottom")),
						f = s.right - s.left - d - c,
						p = s.bottom - s.top - u - h;
					return (
						(o = Math.round(
							(((o - s.left - d) / f) * i.width) / t.currentDevicePixelRatio
						)),
						(n = Math.round(
							(((n - s.top - u) / p) * i.height) / t.currentDevicePixelRatio
						)),
						{ x: o, y: n }
					);
				}),
				(a.getConstraintWidth = function(e) {
					return i(e, "max-width", "clientWidth");
				}),
				(a.getConstraintHeight = function(e) {
					return i(e, "max-height", "clientHeight");
				}),
				(a.getMaximumWidth = function(e) {
					var t = e.parentNode;
					if (!t) return e.clientWidth;
					var o = parseInt(a.getStyle(t, "padding-left"), 10),
						n = parseInt(a.getStyle(t, "padding-right"), 10),
						r = t.clientWidth - o - n,
						i = a.getConstraintWidth(e);
					return isNaN(i) ? r : Math.min(r, i);
				}),
				(a.getMaximumHeight = function(e) {
					var t = e.parentNode;
					if (!t) return e.clientHeight;
					var o = parseInt(a.getStyle(t, "padding-top"), 10),
						n = parseInt(a.getStyle(t, "padding-bottom"), 10),
						r = t.clientHeight - o - n,
						i = a.getConstraintHeight(e);
					return isNaN(i) ? r : Math.min(r, i);
				}),
				(a.getStyle = function(e, t) {
					return e.currentStyle
						? e.currentStyle[t]
						: document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
				}),
				(a.retinaScale = function(e, t) {
					var o = (e.currentDevicePixelRatio = t || window.devicePixelRatio || 1);
					if (1 !== o) {
						var n = e.canvas,
							r = e.height,
							a = e.width;
						(n.height = r * o),
							(n.width = a * o),
							e.ctx.scale(o, o),
							n.style.height ||
								n.style.width ||
								((n.style.height = r + "px"), (n.style.width = a + "px"));
					}
				}),
				(a.fontString = function(e, t, o) {
					return t + " " + e + "px " + o;
				}),
				(a.longestText = function(e, t, o, n) {
					n = n || {};
					var r = (n.data = n.data || {}),
						i = (n.garbageCollect = n.garbageCollect || []);
					n.font !== t && ((r = n.data = {}), (i = n.garbageCollect = []), (n.font = t)),
						(e.font = t);
					var s = 0;
					a.each(o, function(t) {
						void 0 !== t && null !== t && !0 !== a.isArray(t)
							? (s = a.measureText(e, r, i, s, t))
							: a.isArray(t) &&
							  a.each(t, function(t) {
									void 0 === t ||
										null === t ||
										a.isArray(t) ||
										(s = a.measureText(e, r, i, s, t));
							  });
					});
					var l = i.length / 2;
					if (l > o.length) {
						for (var d = 0; d < l; d++) delete r[i[d]];
						i.splice(0, l);
					}
					return s;
				}),
				(a.measureText = function(e, t, o, n, r) {
					var a = t[r];
					return (
						a || ((a = t[r] = e.measureText(r).width), o.push(r)), a > n && (n = a), n
					);
				}),
				(a.numberOfLabelLines = function(e) {
					var t = 1;
					return (
						a.each(e, function(e) {
							a.isArray(e) && e.length > t && (t = e.length);
						}),
						t
					);
				}),
				(a.color = n
					? function(e) {
							return e instanceof CanvasGradient && (e = r.global.defaultColor), n(e);
					  }
					: function(e) {
							return console.error("Color.js not found!"), e;
					  }),
				(a.getHoverColor = function(e) {
					return e instanceof CanvasPattern
						? e
						: a
								.color(e)
								.saturate(0.5)
								.darken(0.1)
								.rgbString();
				});
		};
	},
	"./node_modules/chart.js/src/core/core.interaction.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			return e.native ? { x: e.x, y: e.y } : d.getRelativePosition(e, t);
		}
		function r(e, t) {
			var o,
				n,
				r,
				a,
				i,
				s = e.data.datasets;
			for (n = 0, a = s.length; n < a; ++n)
				if (e.isDatasetVisible(n))
					for (o = e.getDatasetMeta(n), r = 0, i = o.data.length; r < i; ++r) {
						var l = o.data[r];
						l._view.skip || t(l);
					}
		}
		function a(e, t) {
			var o = [];
			return (
				r(e, function(e) {
					e.inRange(t.x, t.y) && o.push(e);
				}),
				o
			);
		}
		function i(e, t, o, n) {
			var a = Number.POSITIVE_INFINITY,
				i = [];
			return (
				r(e, function(e) {
					if (!o || e.inRange(t.x, t.y)) {
						var r = e.getCenterPoint(),
							s = n(t, r);
						s < a ? ((i = [e]), (a = s)) : s === a && i.push(e);
					}
				}),
				i
			);
		}
		function s(e) {
			var t = -1 !== e.indexOf("x"),
				o = -1 !== e.indexOf("y");
			return function(e, n) {
				var r = t ? Math.abs(e.x - n.x) : 0,
					a = o ? Math.abs(e.y - n.y) : 0;
				return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
			};
		}
		function l(e, t, o) {
			var r = n(t, e);
			o.axis = o.axis || "x";
			var l = s(o.axis),
				d = o.intersect ? a(e, r) : i(e, r, !1, l),
				u = [];
			return d.length
				? (e.data.datasets.forEach(function(t, o) {
						if (e.isDatasetVisible(o)) {
							var n = e.getDatasetMeta(o),
								r = n.data[d[0]._index];
							r && !r._view.skip && u.push(r);
						}
				  }),
				  u)
				: [];
		}
		var d = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = {
			modes: {
				single: function(e, t) {
					var o = n(t, e),
						a = [];
					return (
						r(e, function(e) {
							if (e.inRange(o.x, o.y)) return a.push(e), a;
						}),
						a.slice(0, 1)
					);
				},
				label: l,
				index: l,
				dataset: function(e, t, o) {
					var r = n(t, e);
					o.axis = o.axis || "xy";
					var l = s(o.axis),
						d = o.intersect ? a(e, r) : i(e, r, !1, l);
					return d.length > 0 && (d = e.getDatasetMeta(d[0]._datasetIndex).data), d;
				},
				"x-axis": function(e, t) {
					return l(e, t, { intersect: !1 });
				},
				point: function(e, t) {
					return a(e, n(t, e));
				},
				nearest: function(e, t, o) {
					var r = n(t, e);
					o.axis = o.axis || "xy";
					var a = s(o.axis),
						l = i(e, r, o.intersect, a);
					return (
						l.length > 1 &&
							l.sort(function(e, t) {
								var o = e.getArea(),
									n = t.getArea(),
									r = o - n;
								return 0 === r && (r = e._datasetIndex - t._datasetIndex), r;
							}),
						l.slice(0, 1)
					);
				},
				x: function(e, t, o) {
					var a = n(t, e),
						i = [],
						s = !1;
					return (
						r(e, function(e) {
							e.inXRange(a.x) && i.push(e), e.inRange(a.x, a.y) && (s = !0);
						}),
						o.intersect && !s && (i = []),
						i
					);
				},
				y: function(e, t, o) {
					var a = n(t, e),
						i = [],
						s = !1;
					return (
						r(e, function(e) {
							e.inYRange(a.y) && i.push(e), e.inRange(a.x, a.y) && (s = !0);
						}),
						o.intersect && !s && (i = []),
						i
					);
				}
			}
		};
	},
	"./node_modules/chart.js/src/core/core.js": function(e, t, o) {
		"use strict";
		o("./node_modules/chart.js/src/core/core.defaults.js")._set("global", {
			responsive: !0,
			responsiveAnimationDuration: 0,
			maintainAspectRatio: !0,
			events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
			hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 },
			onClick: null,
			defaultColor: "rgba(0,0,0,0.1)",
			defaultFontColor: "#666",
			defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			defaultFontSize: 12,
			defaultFontStyle: "normal",
			showLines: !0,
			elements: {},
			layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } }
		}),
			(e.exports = function() {
				var e = function(e, t) {
					return this.construct(e, t), this;
				};
				return (e.Chart = e), e;
			});
	},
	"./node_modules/chart.js/src/core/core.layouts.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			return a.where(e, function(e) {
				return e.position === t;
			});
		}
		function r(e, t) {
			e.forEach(function(e, t) {
				return (e._tmpIndex_ = t), e;
			}),
				e.sort(function(e, o) {
					var n = t ? o : e,
						r = t ? e : o;
					return n.weight === r.weight
						? n._tmpIndex_ - r._tmpIndex_
						: n.weight - r.weight;
				}),
				e.forEach(function(e) {
					delete e._tmpIndex_;
				});
		}
		var a = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = {
			defaults: {},
			addBox: function(e, t) {
				e.boxes || (e.boxes = []),
					(t.fullWidth = t.fullWidth || !1),
					(t.position = t.position || "top"),
					(t.weight = t.weight || 0),
					e.boxes.push(t);
			},
			removeBox: function(e, t) {
				var o = e.boxes ? e.boxes.indexOf(t) : -1;
				-1 !== o && e.boxes.splice(o, 1);
			},
			configure: function(e, t, o) {
				for (
					var n, r = ["fullWidth", "position", "weight"], a = r.length, i = 0;
					i < a;
					++i
				)
					(n = r[i]), o.hasOwnProperty(n) && (t[n] = o[n]);
			},
			update: function(e, t, o) {
				function i(e) {
					var t,
						o = e.isHorizontal();
					o
						? ((t = e.update(e.fullWidth ? x : S, M)), (A -= t.height))
						: ((t = e.update(C, A)), (S -= t.width)),
						I.push({ horizontal: o, minSize: t, box: e });
				}
				function s(e) {
					var t = a.findNextWhere(I, function(t) {
						return t.box === e;
					});
					if (t)
						if (e.isHorizontal()) {
							var o = {
								left: Math.max(F, D),
								right: Math.max(L, P),
								top: 0,
								bottom: 0
							};
							e.update(e.fullWidth ? x : S, j / 2, o);
						} else e.update(t.minSize.width, A);
				}
				function l(e) {
					var t = a.findNextWhere(I, function(t) {
							return t.box === e;
						}),
						o = { left: 0, right: 0, top: R, bottom: z };
					t && e.update(t.minSize.width, A, o);
				}
				function d(e) {
					e.isHorizontal()
						? ((e.left = e.fullWidth ? h : F),
						  (e.right = e.fullWidth ? t - f : F + S),
						  (e.top = H),
						  (e.bottom = H + e.height),
						  (H = e.bottom))
						: ((e.left = V),
						  (e.right = V + e.width),
						  (e.top = R),
						  (e.bottom = R + A),
						  (V = e.right));
				}
				if (e) {
					var u = e.options.layout || {},
						c = a.options.toPadding(u.padding),
						h = c.left,
						f = c.right,
						p = c.top,
						m = c.bottom,
						g = n(e.boxes, "left"),
						v = n(e.boxes, "right"),
						b = n(e.boxes, "top"),
						y = n(e.boxes, "bottom"),
						_ = n(e.boxes, "chartArea");
					r(g, !0), r(v, !1), r(b, !0), r(y, !1);
					var x = t - h - f,
						j = o - p - m,
						k = x / 2,
						w = j / 2,
						C = (t - k) / (g.length + v.length),
						M = (o - w) / (b.length + y.length),
						S = x,
						A = j,
						I = [];
					a.each(g.concat(v, b, y), i);
					var D = 0,
						P = 0,
						O = 0,
						T = 0;
					a.each(b.concat(y), function(e) {
						if (e.getPadding) {
							var t = e.getPadding();
							(D = Math.max(D, t.left)), (P = Math.max(P, t.right));
						}
					}),
						a.each(g.concat(v), function(e) {
							if (e.getPadding) {
								var t = e.getPadding();
								(O = Math.max(O, t.top)), (T = Math.max(T, t.bottom));
							}
						});
					var F = h,
						L = f,
						R = p,
						z = m;
					a.each(g.concat(v), s),
						a.each(g, function(e) {
							F += e.width;
						}),
						a.each(v, function(e) {
							L += e.width;
						}),
						a.each(b.concat(y), s),
						a.each(b, function(e) {
							R += e.height;
						}),
						a.each(y, function(e) {
							z += e.height;
						}),
						a.each(g.concat(v), l),
						(F = h),
						(L = f),
						(R = p),
						(z = m),
						a.each(g, function(e) {
							F += e.width;
						}),
						a.each(v, function(e) {
							L += e.width;
						}),
						a.each(b, function(e) {
							R += e.height;
						}),
						a.each(y, function(e) {
							z += e.height;
						});
					var B = Math.max(D - F, 0);
					(F += B), (L += Math.max(P - L, 0));
					var W = Math.max(O - R, 0);
					(R += W), (z += Math.max(T - z, 0));
					var N = o - R - z,
						E = t - F - L;
					(E === S && N === A) ||
						(a.each(g, function(e) {
							e.height = N;
						}),
						a.each(v, function(e) {
							e.height = N;
						}),
						a.each(b, function(e) {
							e.fullWidth || (e.width = E);
						}),
						a.each(y, function(e) {
							e.fullWidth || (e.width = E);
						}),
						(A = N),
						(S = E));
					var V = h + B,
						H = p + W;
					a.each(g.concat(b), d),
						(V += S),
						(H += A),
						a.each(v, d),
						a.each(y, d),
						(e.chartArea = { left: F, top: R, right: F + S, bottom: R + A }),
						a.each(_, function(t) {
							(t.left = e.chartArea.left),
								(t.top = e.chartArea.top),
								(t.right = e.chartArea.right),
								(t.bottom = e.chartArea.bottom),
								t.update(S, A);
						});
				}
			}
		};
	},
	"./node_modules/chart.js/src/core/core.plugins.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("global", { plugins: {} }),
			(e.exports = {
				_plugins: [],
				_cacheId: 0,
				register: function(e) {
					var t = this._plugins;
					[].concat(e).forEach(function(e) {
						-1 === t.indexOf(e) && t.push(e);
					}),
						this._cacheId++;
				},
				unregister: function(e) {
					var t = this._plugins;
					[].concat(e).forEach(function(e) {
						var o = t.indexOf(e);
						-1 !== o && t.splice(o, 1);
					}),
						this._cacheId++;
				},
				clear: function() {
					(this._plugins = []), this._cacheId++;
				},
				count: function() {
					return this._plugins.length;
				},
				getAll: function() {
					return this._plugins;
				},
				notify: function(e, t, o) {
					var n,
						r,
						a,
						i,
						s,
						l = this.descriptors(e),
						d = l.length;
					for (n = 0; n < d; ++n)
						if (
							((r = l[n]),
							(a = r.plugin),
							"function" == typeof (s = a[t]) &&
								((i = [e].concat(o || [])),
								i.push(r.options),
								!1 === s.apply(a, i)))
						)
							return !1;
					return !0;
				},
				descriptors: function(e) {
					var t = e.$plugins || (e.$plugins = {});
					if (t.id === this._cacheId) return t.descriptors;
					var o = [],
						a = [],
						i = (e && e.config) || {},
						s = (i.options && i.options.plugins) || {};
					return (
						this._plugins.concat(i.plugins || []).forEach(function(e) {
							if (-1 === o.indexOf(e)) {
								var t = e.id,
									i = s[t];
								!1 !== i &&
									(!0 === i && (i = r.clone(n.global.plugins[t])),
									o.push(e),
									a.push({ plugin: e, options: i || {} }));
							}
						}),
						(t.descriptors = a),
						(t.id = this._cacheId),
						a
					);
				},
				_invalidate: function(e) {
					delete e.$plugins;
				}
			});
	},
	"./node_modules/chart.js/src/core/core.scale.js": function(e, t, o) {
		"use strict";
		function n(e) {
			var t,
				o,
				n = [];
			for (t = 0, o = e.length; t < o; ++t) n.push(e[t].label);
			return n;
		}
		function r(e, t, o) {
			var n = e.getPixelForTick(t);
			return (
				o &&
					(n -=
						0 === t
							? (e.getPixelForTick(1) - n) / 2
							: (n - e.getPixelForTick(t - 1)) / 2),
				n
			);
		}
		var a = o("./node_modules/chart.js/src/core/core.defaults.js"),
			i = o("./node_modules/chart.js/src/core/core.element.js"),
			s = o("./node_modules/chart.js/src/helpers/index.js"),
			l = o("./node_modules/chart.js/src/core/core.ticks.js");
		a._set("scale", {
			display: !0,
			position: "left",
			offset: !1,
			gridLines: {
				display: !0,
				color: "rgba(0, 0, 0, 0.1)",
				lineWidth: 1,
				drawBorder: !0,
				drawOnChartArea: !0,
				drawTicks: !0,
				tickMarkLength: 10,
				zeroLineWidth: 1,
				zeroLineColor: "rgba(0,0,0,0.25)",
				zeroLineBorderDash: [],
				zeroLineBorderDashOffset: 0,
				offsetGridLines: !1,
				borderDash: [],
				borderDashOffset: 0
			},
			scaleLabel: {
				display: !1,
				labelString: "",
				lineHeight: 1.2,
				padding: { top: 4, bottom: 4 }
			},
			ticks: {
				beginAtZero: !1,
				minRotation: 0,
				maxRotation: 50,
				mirror: !1,
				padding: 0,
				reverse: !1,
				display: !0,
				autoSkip: !0,
				autoSkipPadding: 0,
				labelOffset: 0,
				callback: l.formatters.values,
				minor: {},
				major: {}
			}
		}),
			(e.exports = function(e) {
				function t(e, t, o) {
					return s.isArray(t) ? s.longestText(e, o, t) : e.measureText(t).width;
				}
				function o(e) {
					var t = s.valueOrDefault,
						o = a.global,
						n = t(e.fontSize, o.defaultFontSize),
						r = t(e.fontStyle, o.defaultFontStyle),
						i = t(e.fontFamily, o.defaultFontFamily);
					return { size: n, style: r, family: i, font: s.fontString(n, r, i) };
				}
				function l(e) {
					return s.options.toLineHeight(
						s.valueOrDefault(e.lineHeight, 1.2),
						s.valueOrDefault(e.fontSize, a.global.defaultFontSize)
					);
				}
				e.Scale = i.extend({
					getPadding: function() {
						var e = this;
						return {
							left: e.paddingLeft || 0,
							top: e.paddingTop || 0,
							right: e.paddingRight || 0,
							bottom: e.paddingBottom || 0
						};
					},
					getTicks: function() {
						return this._ticks;
					},
					mergeTicksOptions: function() {
						var e = this.options.ticks;
						!1 === e.minor && (e.minor = { display: !1 }),
							!1 === e.major && (e.major = { display: !1 });
						for (var t in e)
							"major" !== t &&
								"minor" !== t &&
								(void 0 === e.minor[t] && (e.minor[t] = e[t]),
								void 0 === e.major[t] && (e.major[t] = e[t]));
					},
					beforeUpdate: function() {
						s.callback(this.options.beforeUpdate, [this]);
					},
					update: function(e, t, o) {
						var n,
							r,
							a,
							i,
							l,
							d,
							u = this;
						for (
							u.beforeUpdate(),
								u.maxWidth = e,
								u.maxHeight = t,
								u.margins = s.extend({ left: 0, right: 0, top: 0, bottom: 0 }, o),
								u.longestTextCache = u.longestTextCache || {},
								u.beforeSetDimensions(),
								u.setDimensions(),
								u.afterSetDimensions(),
								u.beforeDataLimits(),
								u.determineDataLimits(),
								u.afterDataLimits(),
								u.beforeBuildTicks(),
								l = u.buildTicks() || [],
								u.afterBuildTicks(),
								u.beforeTickToLabelConversion(),
								a = u.convertTicksToLabels(l) || u.ticks,
								u.afterTickToLabelConversion(),
								u.ticks = a,
								n = 0,
								r = a.length;
							n < r;
							++n
						)
							(i = a[n]),
								(d = l[n]),
								d ? (d.label = i) : l.push((d = { label: i, major: !1 }));
						return (
							(u._ticks = l),
							u.beforeCalculateTickRotation(),
							u.calculateTickRotation(),
							u.afterCalculateTickRotation(),
							u.beforeFit(),
							u.fit(),
							u.afterFit(),
							u.afterUpdate(),
							u.minSize
						);
					},
					afterUpdate: function() {
						s.callback(this.options.afterUpdate, [this]);
					},
					beforeSetDimensions: function() {
						s.callback(this.options.beforeSetDimensions, [this]);
					},
					setDimensions: function() {
						var e = this;
						e.isHorizontal()
							? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
							: ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
							(e.paddingLeft = 0),
							(e.paddingTop = 0),
							(e.paddingRight = 0),
							(e.paddingBottom = 0);
					},
					afterSetDimensions: function() {
						s.callback(this.options.afterSetDimensions, [this]);
					},
					beforeDataLimits: function() {
						s.callback(this.options.beforeDataLimits, [this]);
					},
					determineDataLimits: s.noop,
					afterDataLimits: function() {
						s.callback(this.options.afterDataLimits, [this]);
					},
					beforeBuildTicks: function() {
						s.callback(this.options.beforeBuildTicks, [this]);
					},
					buildTicks: s.noop,
					afterBuildTicks: function() {
						s.callback(this.options.afterBuildTicks, [this]);
					},
					beforeTickToLabelConversion: function() {
						s.callback(this.options.beforeTickToLabelConversion, [this]);
					},
					convertTicksToLabels: function() {
						var e = this,
							t = e.options.ticks;
						e.ticks = e.ticks.map(t.userCallback || t.callback, this);
					},
					afterTickToLabelConversion: function() {
						s.callback(this.options.afterTickToLabelConversion, [this]);
					},
					beforeCalculateTickRotation: function() {
						s.callback(this.options.beforeCalculateTickRotation, [this]);
					},
					calculateTickRotation: function() {
						var e = this,
							t = e.ctx,
							r = e.options.ticks,
							a = n(e._ticks),
							i = o(r);
						t.font = i.font;
						var l = r.minRotation || 0;
						if (a.length && e.options.display && e.isHorizontal())
							for (
								var d,
									u = s.longestText(t, i.font, a, e.longestTextCache),
									c = u,
									h = e.getPixelForTick(1) - e.getPixelForTick(0) - 6;
								c > h && l < r.maxRotation;

							) {
								var f = s.toRadians(l);
								if (((d = Math.cos(f)), Math.sin(f) * u > e.maxHeight)) {
									l--;
									break;
								}
								l++, (c = d * u);
							}
						e.labelRotation = l;
					},
					afterCalculateTickRotation: function() {
						s.callback(this.options.afterCalculateTickRotation, [this]);
					},
					beforeFit: function() {
						s.callback(this.options.beforeFit, [this]);
					},
					fit: function() {
						var e = this,
							r = (e.minSize = { width: 0, height: 0 }),
							a = n(e._ticks),
							i = e.options,
							d = i.ticks,
							u = i.scaleLabel,
							c = i.gridLines,
							h = i.display,
							f = e.isHorizontal(),
							p = o(d),
							m = i.gridLines.tickMarkLength;
						if (
							((r.width = f
								? e.isFullWidth()
									? e.maxWidth - e.margins.left - e.margins.right
									: e.maxWidth
								: h && c.drawTicks
									? m
									: 0),
							(r.height = f ? (h && c.drawTicks ? m : 0) : e.maxHeight),
							u.display && h)
						) {
							var g = l(u),
								v = s.options.toPadding(u.padding),
								b = g + v.height;
							f ? (r.height += b) : (r.width += b);
						}
						if (d.display && h) {
							var y = s.longestText(e.ctx, p.font, a, e.longestTextCache),
								_ = s.numberOfLabelLines(a),
								x = 0.5 * p.size,
								j = e.options.ticks.padding;
							if (f) {
								e.longestLabelWidth = y;
								var k = s.toRadians(e.labelRotation),
									w = Math.cos(k),
									C = Math.sin(k),
									M = C * y + p.size * _ + x * (_ - 1) + x;
								(r.height = Math.min(e.maxHeight, r.height + M + j)),
									(e.ctx.font = p.font);
								var S = t(e.ctx, a[0], p.font),
									A = t(e.ctx, a[a.length - 1], p.font);
								0 !== e.labelRotation
									? ((e.paddingLeft =
											"bottom" === i.position ? w * S + 3 : w * x + 3),
									  (e.paddingRight =
											"bottom" === i.position ? w * x + 3 : w * A + 3))
									: ((e.paddingLeft = S / 2 + 3), (e.paddingRight = A / 2 + 3));
							} else
								d.mirror ? (y = 0) : (y += j + x),
									(r.width = Math.min(e.maxWidth, r.width + y)),
									(e.paddingTop = p.size / 2),
									(e.paddingBottom = p.size / 2);
						}
						e.handleMargins(), (e.width = r.width), (e.height = r.height);
					},
					handleMargins: function() {
						var e = this;
						e.margins &&
							((e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0)),
							(e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0)),
							(e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0)),
							(e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0)));
					},
					afterFit: function() {
						s.callback(this.options.afterFit, [this]);
					},
					isHorizontal: function() {
						return (
							"top" === this.options.position || "bottom" === this.options.position
						);
					},
					isFullWidth: function() {
						return this.options.fullWidth;
					},
					getRightValue: function(e) {
						if (s.isNullOrUndef(e)) return NaN;
						if ("number" == typeof e && !isFinite(e)) return NaN;
						if (e)
							if (this.isHorizontal()) {
								if (void 0 !== e.x) return this.getRightValue(e.x);
							} else if (void 0 !== e.y) return this.getRightValue(e.y);
						return e;
					},
					getLabelForIndex: s.noop,
					getPixelForValue: s.noop,
					getValueForPixel: s.noop,
					getPixelForTick: function(e) {
						var t = this,
							o = t.options.offset;
						if (t.isHorizontal()) {
							var n = t.width - (t.paddingLeft + t.paddingRight),
								r = n / Math.max(t._ticks.length - (o ? 0 : 1), 1),
								a = r * e + t.paddingLeft;
							o && (a += r / 2);
							var i = t.left + Math.round(a);
							return (i += t.isFullWidth() ? t.margins.left : 0);
						}
						var s = t.height - (t.paddingTop + t.paddingBottom);
						return t.top + e * (s / (t._ticks.length - 1));
					},
					getPixelForDecimal: function(e) {
						var t = this;
						if (t.isHorizontal()) {
							var o = t.width - (t.paddingLeft + t.paddingRight),
								n = o * e + t.paddingLeft,
								r = t.left + Math.round(n);
							return (r += t.isFullWidth() ? t.margins.left : 0);
						}
						return t.top + e * t.height;
					},
					getBasePixel: function() {
						return this.getPixelForValue(this.getBaseValue());
					},
					getBaseValue: function() {
						var e = this,
							t = e.min,
							o = e.max;
						return e.beginAtZero ? 0 : t < 0 && o < 0 ? o : t > 0 && o > 0 ? t : 0;
					},
					_autoSkip: function(e) {
						var t,
							o,
							n,
							r,
							a,
							i = this,
							l = i.isHorizontal(),
							d = i.options.ticks.minor,
							u = e.length,
							c = s.toRadians(i.labelRotation),
							h = Math.cos(c),
							f = i.longestLabelWidth * h,
							p = [];
						for (
							d.maxTicksLimit && (a = d.maxTicksLimit),
								l &&
									((t = !1),
									(f + d.autoSkipPadding) * u >
										i.width - (i.paddingLeft + i.paddingRight) &&
										(t =
											1 +
											Math.floor(
												((f + d.autoSkipPadding) * u) /
													(i.width - (i.paddingLeft + i.paddingRight))
											)),
									a && u > a && (t = Math.max(t, Math.floor(u / a)))),
								o = 0;
							o < u;
							o++
						)
							(n = e[o]),
								(r = (t > 1 && o % t > 0) || (o % t == 0 && o + t >= u)),
								r && o !== u - 1 && delete n.label,
								p.push(n);
						return p;
					},
					draw: function(e) {
						var t = this,
							n = t.options;
						if (n.display) {
							var i = t.ctx,
								d = a.global,
								u = n.ticks.minor,
								c = n.ticks.major || u,
								h = n.gridLines,
								f = n.scaleLabel,
								p = 0 !== t.labelRotation,
								m = t.isHorizontal(),
								g = u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
								v = s.valueOrDefault(u.fontColor, d.defaultFontColor),
								b = o(u),
								y = s.valueOrDefault(c.fontColor, d.defaultFontColor),
								_ = o(c),
								x = h.drawTicks ? h.tickMarkLength : 0,
								j = s.valueOrDefault(f.fontColor, d.defaultFontColor),
								k = o(f),
								w = s.options.toPadding(f.padding),
								C = s.toRadians(t.labelRotation),
								M = [],
								S = t.options.gridLines.lineWidth,
								A = "right" === n.position ? t.right : t.right - S - x,
								I = "right" === n.position ? t.right + x : t.right,
								D = "bottom" === n.position ? t.top + S : t.bottom - x - S,
								P = "bottom" === n.position ? t.top + S + x : t.bottom + S;
							if (
								(s.each(g, function(o, a) {
									if (!s.isNullOrUndef(o.label)) {
										var i,
											l,
											c,
											f,
											v = o.label;
										a === t.zeroLineIndex && n.offset === h.offsetGridLines
											? ((i = h.zeroLineWidth),
											  (l = h.zeroLineColor),
											  (c = h.zeroLineBorderDash),
											  (f = h.zeroLineBorderDashOffset))
											: ((i = s.valueAtIndexOrDefault(h.lineWidth, a)),
											  (l = s.valueAtIndexOrDefault(h.color, a)),
											  (c = s.valueOrDefault(h.borderDash, d.borderDash)),
											  (f = s.valueOrDefault(
													h.borderDashOffset,
													d.borderDashOffset
											  )));
										var b,
											y,
											_,
											j,
											k,
											w,
											O,
											T,
											F,
											L,
											R = "middle",
											z = "middle",
											B = u.padding;
										if (m) {
											var W = x + B;
											"bottom" === n.position
												? ((z = p ? "middle" : "top"),
												  (R = p ? "right" : "center"),
												  (L = t.top + W))
												: ((z = p ? "middle" : "bottom"),
												  (R = p ? "left" : "center"),
												  (L = t.bottom - W));
											var N = r(t, a, h.offsetGridLines && g.length > 1);
											N < t.left && (l = "rgba(0,0,0,0)"),
												(N += s.aliasPixel(i)),
												(F = t.getPixelForTick(a) + u.labelOffset),
												(b = _ = k = O = N),
												(y = D),
												(j = P),
												(w = e.top),
												(T = e.bottom + S);
										} else {
											var E,
												V = "left" === n.position;
											u.mirror
												? ((R = V ? "left" : "right"), (E = B))
												: ((R = V ? "right" : "left"), (E = x + B)),
												(F = V ? t.right - E : t.left + E);
											var H = r(t, a, h.offsetGridLines && g.length > 1);
											H < t.top && (l = "rgba(0,0,0,0)"),
												(H += s.aliasPixel(i)),
												(L = t.getPixelForTick(a) + u.labelOffset),
												(b = A),
												(_ = I),
												(k = e.left),
												(O = e.right + S),
												(y = j = w = T = H);
										}
										M.push({
											tx1: b,
											ty1: y,
											tx2: _,
											ty2: j,
											x1: k,
											y1: w,
											x2: O,
											y2: T,
											labelX: F,
											labelY: L,
											glWidth: i,
											glColor: l,
											glBorderDash: c,
											glBorderDashOffset: f,
											rotation: -1 * C,
											label: v,
											major: o.major,
											textBaseline: z,
											textAlign: R
										});
									}
								}),
								s.each(M, function(e) {
									if (
										(h.display &&
											(i.save(),
											(i.lineWidth = e.glWidth),
											(i.strokeStyle = e.glColor),
											i.setLineDash &&
												(i.setLineDash(e.glBorderDash),
												(i.lineDashOffset = e.glBorderDashOffset)),
											i.beginPath(),
											h.drawTicks &&
												(i.moveTo(e.tx1, e.ty1), i.lineTo(e.tx2, e.ty2)),
											h.drawOnChartArea &&
												(i.moveTo(e.x1, e.y1), i.lineTo(e.x2, e.y2)),
											i.stroke(),
											i.restore()),
										u.display)
									) {
										i.save(),
											i.translate(e.labelX, e.labelY),
											i.rotate(e.rotation),
											(i.font = e.major ? _.font : b.font),
											(i.fillStyle = e.major ? y : v),
											(i.textBaseline = e.textBaseline),
											(i.textAlign = e.textAlign);
										var o = e.label;
										if (s.isArray(o))
											for (
												var n = o.length,
													r = 1.5 * b.size,
													a = t.isHorizontal() ? 0 : (-r * (n - 1)) / 2,
													l = 0;
												l < n;
												++l
											)
												i.fillText("" + o[l], 0, a), (a += r);
										else i.fillText(o, 0, 0);
										i.restore();
									}
								}),
								f.display)
							) {
								var O,
									T,
									F = 0,
									L = l(f) / 2;
								if (m)
									(O = t.left + (t.right - t.left) / 2),
										(T =
											"bottom" === n.position
												? t.bottom - L - w.bottom
												: t.top + L + w.top);
								else {
									var R = "left" === n.position;
									(O = R ? t.left + L + w.top : t.right - L - w.top),
										(T = t.top + (t.bottom - t.top) / 2),
										(F = R ? -0.5 * Math.PI : 0.5 * Math.PI);
								}
								i.save(),
									i.translate(O, T),
									i.rotate(F),
									(i.textAlign = "center"),
									(i.textBaseline = "middle"),
									(i.fillStyle = j),
									(i.font = k.font),
									i.fillText(f.labelString, 0, 0),
									i.restore();
							}
							if (h.drawBorder) {
								(i.lineWidth = s.valueAtIndexOrDefault(h.lineWidth, 0)),
									(i.strokeStyle = s.valueAtIndexOrDefault(h.color, 0));
								var z = t.left,
									B = t.right + S,
									W = t.top,
									N = t.bottom + S,
									E = s.aliasPixel(i.lineWidth);
								m
									? ((W = N = "top" === n.position ? t.bottom : t.top),
									  (W += E),
									  (N += E))
									: ((z = B = "left" === n.position ? t.right : t.left),
									  (z += E),
									  (B += E)),
									i.beginPath(),
									i.moveTo(z, W),
									i.lineTo(B, N),
									i.stroke();
							}
						}
					}
				});
			});
	},
	"./node_modules/chart.js/src/core/core.scaleService.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/helpers/index.js"),
			a = o("./node_modules/chart.js/src/core/core.layouts.js");
		e.exports = function(e) {
			e.scaleService = {
				constructors: {},
				defaults: {},
				registerScaleType: function(e, t, o) {
					(this.constructors[e] = t), (this.defaults[e] = r.clone(o));
				},
				getScaleConstructor: function(e) {
					return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0;
				},
				getScaleDefaults: function(e) {
					return this.defaults.hasOwnProperty(e)
						? r.merge({}, [n.scale, this.defaults[e]])
						: {};
				},
				updateScaleDefaults: function(e, t) {
					var o = this;
					o.defaults.hasOwnProperty(e) && (o.defaults[e] = r.extend(o.defaults[e], t));
				},
				addScalesToLayout: function(e) {
					r.each(e.scales, function(t) {
						(t.fullWidth = t.options.fullWidth),
							(t.position = t.options.position),
							(t.weight = t.options.weight),
							a.addBox(e, t);
					});
				}
			};
		};
	},
	"./node_modules/chart.js/src/core/core.ticks.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = {
			formatters: {
				values: function(e) {
					return n.isArray(e) ? e : "" + e;
				},
				linear: function(e, t, o) {
					var r = o.length > 3 ? o[2] - o[1] : o[1] - o[0];
					Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
					var a = n.log10(Math.abs(r)),
						i = "";
					if (0 !== e) {
						var s = -1 * Math.floor(a);
						(s = Math.max(Math.min(s, 20), 0)), (i = e.toFixed(s));
					} else i = "0";
					return i;
				},
				logarithmic: function(e, t, o) {
					var r = e / Math.pow(10, Math.floor(n.log10(e)));
					return 0 === e
						? "0"
						: 1 === r || 2 === r || 5 === r || 0 === t || t === o.length - 1
							? e.toExponential()
							: "";
				}
			}
		};
	},
	"./node_modules/chart.js/src/core/core.tooltip.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/core/core.element.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("global", {
			tooltips: {
				enabled: !0,
				custom: null,
				mode: "nearest",
				position: "average",
				intersect: !0,
				backgroundColor: "rgba(0,0,0,0.8)",
				titleFontStyle: "bold",
				titleSpacing: 2,
				titleMarginBottom: 6,
				titleFontColor: "#fff",
				titleAlign: "left",
				bodySpacing: 2,
				bodyFontColor: "#fff",
				bodyAlign: "left",
				footerFontStyle: "bold",
				footerSpacing: 2,
				footerMarginTop: 6,
				footerFontColor: "#fff",
				footerAlign: "left",
				yPadding: 6,
				xPadding: 6,
				caretPadding: 2,
				caretSize: 5,
				cornerRadius: 6,
				multiKeyBackground: "#fff",
				displayColors: !0,
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 0,
				callbacks: {
					beforeTitle: a.noop,
					title: function(e, t) {
						var o = "",
							n = t.labels,
							r = n ? n.length : 0;
						if (e.length > 0) {
							var a = e[0];
							a.xLabel ? (o = a.xLabel) : r > 0 && a.index < r && (o = n[a.index]);
						}
						return o;
					},
					afterTitle: a.noop,
					beforeBody: a.noop,
					beforeLabel: a.noop,
					label: function(e, t) {
						var o = t.datasets[e.datasetIndex].label || "";
						return o && (o += ": "), (o += e.yLabel);
					},
					labelColor: function(e, t) {
						var o = t.getDatasetMeta(e.datasetIndex),
							n = o.data[e.index],
							r = n._view;
						return { borderColor: r.borderColor, backgroundColor: r.backgroundColor };
					},
					labelTextColor: function() {
						return this._options.bodyFontColor;
					},
					afterLabel: a.noop,
					afterBody: a.noop,
					beforeFooter: a.noop,
					footer: a.noop,
					afterFooter: a.noop
				}
			}
		}),
			(e.exports = function(e) {
				function t(e, t) {
					var o = a.color(e);
					return o.alpha(t * o.alpha()).rgbaString();
				}
				function o(e, t) {
					return t && (a.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
				}
				function i(e) {
					var t = e._xScale,
						o = e._yScale || e._scale,
						n = e._index,
						r = e._datasetIndex;
					return {
						xLabel: t ? t.getLabelForIndex(n, r) : "",
						yLabel: o ? o.getLabelForIndex(n, r) : "",
						index: n,
						datasetIndex: r,
						x: e._model.x,
						y: e._model.y
					};
				}
				function s(e) {
					var t = n.global,
						o = a.valueOrDefault;
					return {
						xPadding: e.xPadding,
						yPadding: e.yPadding,
						xAlign: e.xAlign,
						yAlign: e.yAlign,
						bodyFontColor: e.bodyFontColor,
						_bodyFontFamily: o(e.bodyFontFamily, t.defaultFontFamily),
						_bodyFontStyle: o(e.bodyFontStyle, t.defaultFontStyle),
						_bodyAlign: e.bodyAlign,
						bodyFontSize: o(e.bodyFontSize, t.defaultFontSize),
						bodySpacing: e.bodySpacing,
						titleFontColor: e.titleFontColor,
						_titleFontFamily: o(e.titleFontFamily, t.defaultFontFamily),
						_titleFontStyle: o(e.titleFontStyle, t.defaultFontStyle),
						titleFontSize: o(e.titleFontSize, t.defaultFontSize),
						_titleAlign: e.titleAlign,
						titleSpacing: e.titleSpacing,
						titleMarginBottom: e.titleMarginBottom,
						footerFontColor: e.footerFontColor,
						_footerFontFamily: o(e.footerFontFamily, t.defaultFontFamily),
						_footerFontStyle: o(e.footerFontStyle, t.defaultFontStyle),
						footerFontSize: o(e.footerFontSize, t.defaultFontSize),
						_footerAlign: e.footerAlign,
						footerSpacing: e.footerSpacing,
						footerMarginTop: e.footerMarginTop,
						caretSize: e.caretSize,
						cornerRadius: e.cornerRadius,
						backgroundColor: e.backgroundColor,
						opacity: 0,
						legendColorBackground: e.multiKeyBackground,
						displayColors: e.displayColors,
						borderColor: e.borderColor,
						borderWidth: e.borderWidth
					};
				}
				function l(e, t) {
					var o = e._chart.ctx,
						n = 2 * t.yPadding,
						r = 0,
						i = t.body,
						s = i.reduce(function(e, t) {
							return e + t.before.length + t.lines.length + t.after.length;
						}, 0);
					s += t.beforeBody.length + t.afterBody.length;
					var l = t.title.length,
						d = t.footer.length,
						u = t.titleFontSize,
						c = t.bodyFontSize,
						h = t.footerFontSize;
					(n += l * u),
						(n += l ? (l - 1) * t.titleSpacing : 0),
						(n += l ? t.titleMarginBottom : 0),
						(n += s * c),
						(n += s ? (s - 1) * t.bodySpacing : 0),
						(n += d ? t.footerMarginTop : 0),
						(n += d * h),
						(n += d ? (d - 1) * t.footerSpacing : 0);
					var f = 0,
						p = function(e) {
							r = Math.max(r, o.measureText(e).width + f);
						};
					return (
						(o.font = a.fontString(u, t._titleFontStyle, t._titleFontFamily)),
						a.each(t.title, p),
						(o.font = a.fontString(c, t._bodyFontStyle, t._bodyFontFamily)),
						a.each(t.beforeBody.concat(t.afterBody), p),
						(f = t.displayColors ? c + 2 : 0),
						a.each(i, function(e) {
							a.each(e.before, p), a.each(e.lines, p), a.each(e.after, p);
						}),
						(f = 0),
						(o.font = a.fontString(h, t._footerFontStyle, t._footerFontFamily)),
						a.each(t.footer, p),
						(r += 2 * t.xPadding),
						{ width: r, height: n }
					);
				}
				function d(e, t) {
					var o = e._model,
						n = e._chart,
						r = e._chart.chartArea,
						a = "center",
						i = "center";
					o.y < t.height ? (i = "top") : o.y > n.height - t.height && (i = "bottom");
					var s,
						l,
						d,
						u,
						c,
						h = (r.left + r.right) / 2,
						f = (r.top + r.bottom) / 2;
					"center" === i
						? ((s = function(e) {
								return e <= h;
						  }),
						  (l = function(e) {
								return e > h;
						  }))
						: ((s = function(e) {
								return e <= t.width / 2;
						  }),
						  (l = function(e) {
								return e >= n.width - t.width / 2;
						  })),
						(d = function(e) {
							return e + t.width + o.caretSize + o.caretPadding > n.width;
						}),
						(u = function(e) {
							return e - t.width - o.caretSize - o.caretPadding < 0;
						}),
						(c = function(e) {
							return e <= f ? "top" : "bottom";
						}),
						s(o.x)
							? ((a = "left"), d(o.x) && ((a = "center"), (i = c(o.y))))
							: l(o.x) && ((a = "right"), u(o.x) && ((a = "center"), (i = c(o.y))));
					var p = e._options;
					return { xAlign: p.xAlign ? p.xAlign : a, yAlign: p.yAlign ? p.yAlign : i };
				}
				function u(e, t, o, n) {
					var r = e.x,
						a = e.y,
						i = e.caretSize,
						s = e.caretPadding,
						l = e.cornerRadius,
						d = o.xAlign,
						u = o.yAlign,
						c = i + s,
						h = l + s;
					return (
						"right" === d
							? (r -= t.width)
							: "center" === d &&
							  ((r -= t.width / 2),
							  r + t.width > n.width && (r = n.width - t.width),
							  r < 0 && (r = 0)),
						"top" === u
							? (a += c)
							: (a -= "bottom" === u ? t.height + c : t.height / 2),
						"center" === u
							? "left" === d
								? (r += c)
								: "right" === d && (r -= c)
							: "left" === d
								? (r -= h)
								: "right" === d && (r += h),
						{ x: r, y: a }
					);
				}
				(e.Tooltip = r.extend({
					initialize: function() {
						(this._model = s(this._options)), (this._lastActive = []);
					},
					getTitle: function() {
						var e = this,
							t = e._options,
							n = t.callbacks,
							r = n.beforeTitle.apply(e, arguments),
							a = n.title.apply(e, arguments),
							i = n.afterTitle.apply(e, arguments),
							s = [];
						return (s = o(s, r)), (s = o(s, a)), (s = o(s, i));
					},
					getBeforeBody: function() {
						var e = this._options.callbacks.beforeBody.apply(this, arguments);
						return a.isArray(e) ? e : void 0 !== e ? [e] : [];
					},
					getBody: function(e, t) {
						var n = this,
							r = n._options.callbacks,
							i = [];
						return (
							a.each(e, function(e) {
								var a = { before: [], lines: [], after: [] };
								o(a.before, r.beforeLabel.call(n, e, t)),
									o(a.lines, r.label.call(n, e, t)),
									o(a.after, r.afterLabel.call(n, e, t)),
									i.push(a);
							}),
							i
						);
					},
					getAfterBody: function() {
						var e = this._options.callbacks.afterBody.apply(this, arguments);
						return a.isArray(e) ? e : void 0 !== e ? [e] : [];
					},
					getFooter: function() {
						var e = this,
							t = e._options.callbacks,
							n = t.beforeFooter.apply(e, arguments),
							r = t.footer.apply(e, arguments),
							a = t.afterFooter.apply(e, arguments),
							i = [];
						return (i = o(i, n)), (i = o(i, r)), (i = o(i, a));
					},
					update: function(t) {
						var o,
							n,
							r = this,
							c = r._options,
							h = r._model,
							f = (r._model = s(c)),
							p = r._active,
							m = r._data,
							g = { xAlign: h.xAlign, yAlign: h.yAlign },
							v = { x: h.x, y: h.y },
							b = { width: h.width, height: h.height },
							y = { x: h.caretX, y: h.caretY };
						if (p.length) {
							f.opacity = 1;
							var _ = [],
								x = [];
							y = e.Tooltip.positioners[c.position].call(r, p, r._eventPosition);
							var j = [];
							for (o = 0, n = p.length; o < n; ++o) j.push(i(p[o]));
							c.filter &&
								(j = j.filter(function(e) {
									return c.filter(e, m);
								})),
								c.itemSort &&
									(j = j.sort(function(e, t) {
										return c.itemSort(e, t, m);
									})),
								a.each(j, function(e) {
									_.push(c.callbacks.labelColor.call(r, e, r._chart)),
										x.push(c.callbacks.labelTextColor.call(r, e, r._chart));
								}),
								(f.title = r.getTitle(j, m)),
								(f.beforeBody = r.getBeforeBody(j, m)),
								(f.body = r.getBody(j, m)),
								(f.afterBody = r.getAfterBody(j, m)),
								(f.footer = r.getFooter(j, m)),
								(f.x = Math.round(y.x)),
								(f.y = Math.round(y.y)),
								(f.caretPadding = c.caretPadding),
								(f.labelColors = _),
								(f.labelTextColors = x),
								(f.dataPoints = j),
								(b = l(this, f)),
								(g = d(this, b)),
								(v = u(f, b, g, r._chart));
						} else f.opacity = 0;
						return (
							(f.xAlign = g.xAlign),
							(f.yAlign = g.yAlign),
							(f.x = v.x),
							(f.y = v.y),
							(f.width = b.width),
							(f.height = b.height),
							(f.caretX = y.x),
							(f.caretY = y.y),
							(r._model = f),
							t && c.custom && c.custom.call(r, f),
							r
						);
					},
					drawCaret: function(e, t) {
						var o = this._chart.ctx,
							n = this._view,
							r = this.getCaretPosition(e, t, n);
						o.lineTo(r.x1, r.y1), o.lineTo(r.x2, r.y2), o.lineTo(r.x3, r.y3);
					},
					getCaretPosition: function(e, t, o) {
						var n,
							r,
							a,
							i,
							s,
							l,
							d = o.caretSize,
							u = o.cornerRadius,
							c = o.xAlign,
							h = o.yAlign,
							f = e.x,
							p = e.y,
							m = t.width,
							g = t.height;
						if ("center" === h)
							(s = p + g / 2),
								"left" === c
									? ((n = f), (r = n - d), (a = n), (i = s + d), (l = s - d))
									: ((n = f + m), (r = n + d), (a = n), (i = s - d), (l = s + d));
						else if (
							("left" === c
								? ((r = f + u + d), (n = r - d), (a = r + d))
								: "right" === c
									? ((r = f + m - u - d), (n = r - d), (a = r + d))
									: ((r = o.caretX), (n = r - d), (a = r + d)),
							"top" === h)
						)
							(i = p), (s = i - d), (l = i);
						else {
							(i = p + g), (s = i + d), (l = i);
							var v = a;
							(a = n), (n = v);
						}
						return { x1: n, x2: r, x3: a, y1: i, y2: s, y3: l };
					},
					drawTitle: function(e, o, n, r) {
						var i = o.title;
						if (i.length) {
							(n.textAlign = o._titleAlign), (n.textBaseline = "top");
							var s = o.titleFontSize,
								l = o.titleSpacing;
							(n.fillStyle = t(o.titleFontColor, r)),
								(n.font = a.fontString(s, o._titleFontStyle, o._titleFontFamily));
							var d, u;
							for (d = 0, u = i.length; d < u; ++d)
								n.fillText(i[d], e.x, e.y),
									(e.y += s + l),
									d + 1 === i.length && (e.y += o.titleMarginBottom - l);
						}
					},
					drawBody: function(e, o, n, r) {
						var i = o.bodyFontSize,
							s = o.bodySpacing,
							l = o.body;
						(n.textAlign = o._bodyAlign),
							(n.textBaseline = "top"),
							(n.font = a.fontString(i, o._bodyFontStyle, o._bodyFontFamily));
						var d = 0,
							u = function(t) {
								n.fillText(t, e.x + d, e.y), (e.y += i + s);
							};
						(n.fillStyle = t(o.bodyFontColor, r)), a.each(o.beforeBody, u);
						var c = o.displayColors;
						(d = c ? i + 2 : 0),
							a.each(l, function(s, l) {
								var d = t(o.labelTextColors[l], r);
								(n.fillStyle = d),
									a.each(s.before, u),
									a.each(s.lines, function(a) {
										c &&
											((n.fillStyle = t(o.legendColorBackground, r)),
											n.fillRect(e.x, e.y, i, i),
											(n.lineWidth = 1),
											(n.strokeStyle = t(o.labelColors[l].borderColor, r)),
											n.strokeRect(e.x, e.y, i, i),
											(n.fillStyle = t(o.labelColors[l].backgroundColor, r)),
											n.fillRect(e.x + 1, e.y + 1, i - 2, i - 2),
											(n.fillStyle = d)),
											u(a);
									}),
									a.each(s.after, u);
							}),
							(d = 0),
							a.each(o.afterBody, u),
							(e.y -= s);
					},
					drawFooter: function(e, o, n, r) {
						var i = o.footer;
						i.length &&
							((e.y += o.footerMarginTop),
							(n.textAlign = o._footerAlign),
							(n.textBaseline = "top"),
							(n.fillStyle = t(o.footerFontColor, r)),
							(n.font = a.fontString(
								o.footerFontSize,
								o._footerFontStyle,
								o._footerFontFamily
							)),
							a.each(i, function(t) {
								n.fillText(t, e.x, e.y),
									(e.y += o.footerFontSize + o.footerSpacing);
							}));
					},
					drawBackground: function(e, o, n, r, a) {
						(n.fillStyle = t(o.backgroundColor, a)),
							(n.strokeStyle = t(o.borderColor, a)),
							(n.lineWidth = o.borderWidth);
						var i = o.xAlign,
							s = o.yAlign,
							l = e.x,
							d = e.y,
							u = r.width,
							c = r.height,
							h = o.cornerRadius;
						n.beginPath(),
							n.moveTo(l + h, d),
							"top" === s && this.drawCaret(e, r),
							n.lineTo(l + u - h, d),
							n.quadraticCurveTo(l + u, d, l + u, d + h),
							"center" === s && "right" === i && this.drawCaret(e, r),
							n.lineTo(l + u, d + c - h),
							n.quadraticCurveTo(l + u, d + c, l + u - h, d + c),
							"bottom" === s && this.drawCaret(e, r),
							n.lineTo(l + h, d + c),
							n.quadraticCurveTo(l, d + c, l, d + c - h),
							"center" === s && "left" === i && this.drawCaret(e, r),
							n.lineTo(l, d + h),
							n.quadraticCurveTo(l, d, l + h, d),
							n.closePath(),
							n.fill(),
							o.borderWidth > 0 && n.stroke();
					},
					draw: function() {
						var e = this._chart.ctx,
							t = this._view;
						if (0 !== t.opacity) {
							var o = { width: t.width, height: t.height },
								n = { x: t.x, y: t.y },
								r = Math.abs(t.opacity < 0.001) ? 0 : t.opacity,
								a =
									t.title.length ||
									t.beforeBody.length ||
									t.body.length ||
									t.afterBody.length ||
									t.footer.length;
							this._options.enabled &&
								a &&
								(this.drawBackground(n, t, e, o, r),
								(n.x += t.xPadding),
								(n.y += t.yPadding),
								this.drawTitle(n, t, e, r),
								this.drawBody(n, t, e, r),
								this.drawFooter(n, t, e, r));
						}
					},
					handleEvent: function(e) {
						var t = this,
							o = t._options,
							n = !1;
						return (
							(t._lastActive = t._lastActive || []),
							"mouseout" === e.type
								? (t._active = [])
								: (t._active = t._chart.getElementsAtEventForMode(e, o.mode, o)),
							(n = !a.arrayEquals(t._active, t._lastActive)),
							n &&
								((t._lastActive = t._active),
								(o.enabled || o.custom) &&
									((t._eventPosition = { x: e.x, y: e.y }),
									t.update(!0),
									t.pivot())),
							n
						);
					}
				})),
					(e.Tooltip.positioners = {
						average: function(e) {
							if (!e.length) return !1;
							var t,
								o,
								n = 0,
								r = 0,
								a = 0;
							for (t = 0, o = e.length; t < o; ++t) {
								var i = e[t];
								if (i && i.hasValue()) {
									var s = i.tooltipPosition();
									(n += s.x), (r += s.y), ++a;
								}
							}
							return { x: Math.round(n / a), y: Math.round(r / a) };
						},
						nearest: function(e, t) {
							var o,
								n,
								r,
								i = t.x,
								s = t.y,
								l = Number.POSITIVE_INFINITY;
							for (o = 0, n = e.length; o < n; ++o) {
								var d = e[o];
								if (d && d.hasValue()) {
									var u = d.getCenterPoint(),
										c = a.distanceBetweenPoints(t, u);
									c < l && ((l = c), (r = d));
								}
							}
							if (r) {
								var h = r.tooltipPosition();
								(i = h.x), (s = h.y);
							}
							return { x: i, y: s };
						}
					});
			});
	},
	"./node_modules/chart.js/src/elements/element.arc.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/core/core.element.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js");
		n._set("global", {
			elements: {
				arc: { backgroundColor: n.global.defaultColor, borderColor: "#fff", borderWidth: 2 }
			}
		}),
			(e.exports = r.extend({
				inLabelRange: function(e) {
					var t = this._view;
					return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2);
				},
				inRange: function(e, t) {
					var o = this._view;
					if (o) {
						for (
							var n = a.getAngleFromPoint(o, { x: e, y: t }),
								r = n.angle,
								i = n.distance,
								s = o.startAngle,
								l = o.endAngle;
							l < s;

						)
							l += 2 * Math.PI;
						for (; r > l; ) r -= 2 * Math.PI;
						for (; r < s; ) r += 2 * Math.PI;
						var d = r >= s && r <= l,
							u = i >= o.innerRadius && i <= o.outerRadius;
						return d && u;
					}
					return !1;
				},
				getCenterPoint: function() {
					var e = this._view,
						t = (e.startAngle + e.endAngle) / 2,
						o = (e.innerRadius + e.outerRadius) / 2;
					return { x: e.x + Math.cos(t) * o, y: e.y + Math.sin(t) * o };
				},
				getArea: function() {
					var e = this._view;
					return (
						Math.PI *
						((e.endAngle - e.startAngle) / (2 * Math.PI)) *
						(Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
					);
				},
				tooltipPosition: function() {
					var e = this._view,
						t = e.startAngle + (e.endAngle - e.startAngle) / 2,
						o = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
					return { x: e.x + Math.cos(t) * o, y: e.y + Math.sin(t) * o };
				},
				draw: function() {
					var e = this._chart.ctx,
						t = this._view,
						o = t.startAngle,
						n = t.endAngle;
					e.beginPath(),
						e.arc(t.x, t.y, t.outerRadius, o, n),
						e.arc(t.x, t.y, t.innerRadius, n, o, !0),
						e.closePath(),
						(e.strokeStyle = t.borderColor),
						(e.lineWidth = t.borderWidth),
						(e.fillStyle = t.backgroundColor),
						e.fill(),
						(e.lineJoin = "bevel"),
						t.borderWidth && e.stroke();
				}
			}));
	},
	"./node_modules/chart.js/src/elements/element.line.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/core/core.element.js"),
			a = o("./node_modules/chart.js/src/helpers/index.js"),
			i = n.global;
		n._set("global", {
			elements: {
				line: {
					tension: 0.4,
					backgroundColor: i.defaultColor,
					borderWidth: 3,
					borderColor: i.defaultColor,
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0,
					borderJoinStyle: "miter",
					capBezierPoints: !0,
					fill: !0
				}
			}
		}),
			(e.exports = r.extend({
				draw: function() {
					var e,
						t,
						o,
						n,
						r = this,
						s = r._view,
						l = r._chart.ctx,
						d = s.spanGaps,
						u = r._children.slice(),
						c = i.elements.line,
						h = -1;
					for (
						r._loop && u.length && u.push(u[0]),
							l.save(),
							l.lineCap = s.borderCapStyle || c.borderCapStyle,
							l.setLineDash && l.setLineDash(s.borderDash || c.borderDash),
							l.lineDashOffset = s.borderDashOffset || c.borderDashOffset,
							l.lineJoin = s.borderJoinStyle || c.borderJoinStyle,
							l.lineWidth = s.borderWidth || c.borderWidth,
							l.strokeStyle = s.borderColor || i.defaultColor,
							l.beginPath(),
							h = -1,
							e = 0;
						e < u.length;
						++e
					)
						(t = u[e]),
							(o = a.previousItem(u, e)),
							(n = t._view),
							0 === e
								? n.skip || (l.moveTo(n.x, n.y), (h = e))
								: ((o = -1 === h ? o : u[h]),
								  n.skip ||
										((h !== e - 1 && !d) || -1 === h
											? l.moveTo(n.x, n.y)
											: a.canvas.lineTo(l, o._view, t._view),
										(h = e)));
					l.stroke(), l.restore();
				}
			}));
	},
	"./node_modules/chart.js/src/elements/element.point.js": function(e, t, o) {
		"use strict";
		function n(e) {
			var t = this._view;
			return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
		}
		function r(e) {
			var t = this._view;
			return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
		}
		var a = o("./node_modules/chart.js/src/core/core.defaults.js"),
			i = o("./node_modules/chart.js/src/core/core.element.js"),
			s = o("./node_modules/chart.js/src/helpers/index.js"),
			l = a.global.defaultColor;
		a._set("global", {
			elements: {
				point: {
					radius: 3,
					pointStyle: "circle",
					backgroundColor: l,
					borderColor: l,
					borderWidth: 1,
					hitRadius: 1,
					hoverRadius: 4,
					hoverBorderWidth: 1
				}
			}
		}),
			(e.exports = i.extend({
				inRange: function(e, t) {
					var o = this._view;
					return (
						!!o &&
						Math.pow(e - o.x, 2) + Math.pow(t - o.y, 2) <
							Math.pow(o.hitRadius + o.radius, 2)
					);
				},
				inLabelRange: n,
				inXRange: n,
				inYRange: r,
				getCenterPoint: function() {
					var e = this._view;
					return { x: e.x, y: e.y };
				},
				getArea: function() {
					return Math.PI * Math.pow(this._view.radius, 2);
				},
				tooltipPosition: function() {
					var e = this._view;
					return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
				},
				draw: function(e) {
					var t = this._view,
						o = this._model,
						n = this._chart.ctx,
						r = t.pointStyle,
						i = t.radius,
						d = t.x,
						u = t.y,
						c = s.color,
						h = 0;
					t.skip ||
						((n.strokeStyle = t.borderColor || l),
						(n.lineWidth = s.valueOrDefault(
							t.borderWidth,
							a.global.elements.point.borderWidth
						)),
						(n.fillStyle = t.backgroundColor || l),
						void 0 !== e &&
							(o.x < e.left ||
								1.01 * e.right < o.x ||
								o.y < e.top ||
								1.01 * e.bottom < o.y) &&
							(o.x < e.left
								? (h = (d - o.x) / (e.left - o.x))
								: 1.01 * e.right < o.x
									? (h = (o.x - d) / (o.x - e.right))
									: o.y < e.top
										? (h = (u - o.y) / (e.top - o.y))
										: 1.01 * e.bottom < o.y &&
										  (h = (o.y - u) / (o.y - e.bottom)),
							(h = Math.round(100 * h) / 100),
							(n.strokeStyle = c(n.strokeStyle)
								.alpha(h)
								.rgbString()),
							(n.fillStyle = c(n.fillStyle)
								.alpha(h)
								.rgbString())),
						s.canvas.drawPoint(n, r, i, d, u));
				}
			}));
	},
	"./node_modules/chart.js/src/elements/element.rectangle.js": function(e, t, o) {
		"use strict";
		function n(e) {
			return void 0 !== e._view.width;
		}
		function r(e) {
			var t,
				o,
				r,
				a,
				i = e._view;
			if (n(e)) {
				var s = i.width / 2;
				(t = i.x - s),
					(o = i.x + s),
					(r = Math.min(i.y, i.base)),
					(a = Math.max(i.y, i.base));
			} else {
				var l = i.height / 2;
				(t = Math.min(i.x, i.base)),
					(o = Math.max(i.x, i.base)),
					(r = i.y - l),
					(a = i.y + l);
			}
			return { left: t, top: r, right: o, bottom: a };
		}
		var a = o("./node_modules/chart.js/src/core/core.defaults.js"),
			i = o("./node_modules/chart.js/src/core/core.element.js");
		a._set("global", {
			elements: {
				rectangle: {
					backgroundColor: a.global.defaultColor,
					borderColor: a.global.defaultColor,
					borderSkipped: "bottom",
					borderWidth: 0
				}
			}
		}),
			(e.exports = i.extend({
				draw: function() {
					function e(e) {
						return v[(y + e) % 4];
					}
					var t,
						o,
						n,
						r,
						a,
						i,
						s,
						l = this._chart.ctx,
						d = this._view,
						u = d.borderWidth;
					if (
						(d.horizontal
							? ((t = d.base),
							  (o = d.x),
							  (n = d.y - d.height / 2),
							  (r = d.y + d.height / 2),
							  (a = o > t ? 1 : -1),
							  (i = 1),
							  (s = d.borderSkipped || "left"))
							: ((t = d.x - d.width / 2),
							  (o = d.x + d.width / 2),
							  (n = d.y),
							  (r = d.base),
							  (a = 1),
							  (i = r > n ? 1 : -1),
							  (s = d.borderSkipped || "bottom")),
						u)
					) {
						var c = Math.min(Math.abs(t - o), Math.abs(n - r));
						u = u > c ? c : u;
						var h = u / 2,
							f = t + ("left" !== s ? h * a : 0),
							p = o + ("right" !== s ? -h * a : 0),
							m = n + ("top" !== s ? h * i : 0),
							g = r + ("bottom" !== s ? -h * i : 0);
						f !== p && ((n = m), (r = g)), m !== g && ((t = f), (o = p));
					}
					l.beginPath(),
						(l.fillStyle = d.backgroundColor),
						(l.strokeStyle = d.borderColor),
						(l.lineWidth = u);
					var v = [[t, r], [t, n], [o, n], [o, r]],
						b = ["bottom", "left", "top", "right"],
						y = b.indexOf(s, 0);
					-1 === y && (y = 0);
					var _ = e(0);
					l.moveTo(_[0], _[1]);
					for (var x = 1; x < 4; x++) (_ = e(x)), l.lineTo(_[0], _[1]);
					l.fill(), u && l.stroke();
				},
				height: function() {
					var e = this._view;
					return e.base - e.y;
				},
				inRange: function(e, t) {
					var o = !1;
					if (this._view) {
						var n = r(this);
						o = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
					}
					return o;
				},
				inLabelRange: function(e, t) {
					var o = this;
					if (!o._view) return !1;
					var a = r(o);
					return n(o) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom;
				},
				inXRange: function(e) {
					var t = r(this);
					return e >= t.left && e <= t.right;
				},
				inYRange: function(e) {
					var t = r(this);
					return e >= t.top && e <= t.bottom;
				},
				getCenterPoint: function() {
					var e,
						t,
						o = this._view;
					return (
						n(this)
							? ((e = o.x), (t = (o.y + o.base) / 2))
							: ((e = (o.x + o.base) / 2), (t = o.y)),
						{ x: e, y: t }
					);
				},
				getArea: function() {
					var e = this._view;
					return e.width * Math.abs(e.y - e.base);
				},
				tooltipPosition: function() {
					var e = this._view;
					return { x: e.x, y: e.y };
				}
			}));
	},
	"./node_modules/chart.js/src/elements/index.js": function(e, t, o) {
		"use strict";
		(e.exports = {}),
			(e.exports.Arc = o("./node_modules/chart.js/src/elements/element.arc.js")),
			(e.exports.Line = o("./node_modules/chart.js/src/elements/element.line.js")),
			(e.exports.Point = o("./node_modules/chart.js/src/elements/element.point.js")),
			(e.exports.Rectangle = o("./node_modules/chart.js/src/elements/element.rectangle.js"));
	},
	"./node_modules/chart.js/src/helpers/helpers.canvas.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/helpers.core.js"),
			t = (e.exports = {
				clear: function(e) {
					e.ctx.clearRect(0, 0, e.width, e.height);
				},
				roundedRect: function(e, t, o, n, r, a) {
					if (a) {
						var i = Math.min(a, n / 2),
							s = Math.min(a, r / 2);
						e.moveTo(t + i, o),
							e.lineTo(t + n - i, o),
							e.quadraticCurveTo(t + n, o, t + n, o + s),
							e.lineTo(t + n, o + r - s),
							e.quadraticCurveTo(t + n, o + r, t + n - i, o + r),
							e.lineTo(t + i, o + r),
							e.quadraticCurveTo(t, o + r, t, o + r - s),
							e.lineTo(t, o + s),
							e.quadraticCurveTo(t, o, t + i, o);
					} else e.rect(t, o, n, r);
				},
				drawPoint: function(e, t, o, n, r) {
					var a, i, s, l, d, u;
					if (
						t &&
						"object" == typeof t &&
						("[object HTMLImageElement]" === (a = t.toString()) ||
							"[object HTMLCanvasElement]" === a)
					)
						return void e.drawImage(
							t,
							n - t.width / 2,
							r - t.height / 2,
							t.width,
							t.height
						);
					if (!(isNaN(o) || o <= 0)) {
						switch (t) {
							default:
								e.beginPath(),
									e.arc(n, r, o, 0, 2 * Math.PI),
									e.closePath(),
									e.fill();
								break;
							case "triangle":
								e.beginPath(),
									(i = (3 * o) / Math.sqrt(3)),
									(d = (i * Math.sqrt(3)) / 2),
									e.moveTo(n - i / 2, r + d / 3),
									e.lineTo(n + i / 2, r + d / 3),
									e.lineTo(n, r - (2 * d) / 3),
									e.closePath(),
									e.fill();
								break;
							case "rect":
								(u = (1 / Math.SQRT2) * o),
									e.beginPath(),
									e.fillRect(n - u, r - u, 2 * u, 2 * u),
									e.strokeRect(n - u, r - u, 2 * u, 2 * u);
								break;
							case "rectRounded":
								var c = o / Math.SQRT2,
									h = n - c,
									f = r - c,
									p = Math.SQRT2 * o;
								e.beginPath(),
									this.roundedRect(e, h, f, p, p, o / 2),
									e.closePath(),
									e.fill();
								break;
							case "rectRot":
								(u = (1 / Math.SQRT2) * o),
									e.beginPath(),
									e.moveTo(n - u, r),
									e.lineTo(n, r + u),
									e.lineTo(n + u, r),
									e.lineTo(n, r - u),
									e.closePath(),
									e.fill();
								break;
							case "cross":
								e.beginPath(),
									e.moveTo(n, r + o),
									e.lineTo(n, r - o),
									e.moveTo(n - o, r),
									e.lineTo(n + o, r),
									e.closePath();
								break;
							case "crossRot":
								e.beginPath(),
									(s = Math.cos(Math.PI / 4) * o),
									(l = Math.sin(Math.PI / 4) * o),
									e.moveTo(n - s, r - l),
									e.lineTo(n + s, r + l),
									e.moveTo(n - s, r + l),
									e.lineTo(n + s, r - l),
									e.closePath();
								break;
							case "star":
								e.beginPath(),
									e.moveTo(n, r + o),
									e.lineTo(n, r - o),
									e.moveTo(n - o, r),
									e.lineTo(n + o, r),
									(s = Math.cos(Math.PI / 4) * o),
									(l = Math.sin(Math.PI / 4) * o),
									e.moveTo(n - s, r - l),
									e.lineTo(n + s, r + l),
									e.moveTo(n - s, r + l),
									e.lineTo(n + s, r - l),
									e.closePath();
								break;
							case "line":
								e.beginPath(),
									e.moveTo(n - o, r),
									e.lineTo(n + o, r),
									e.closePath();
								break;
							case "dash":
								e.beginPath(), e.moveTo(n, r), e.lineTo(n + o, r), e.closePath();
						}
						e.stroke();
					}
				},
				clipArea: function(e, t) {
					e.save(),
						e.beginPath(),
						e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
						e.clip();
				},
				unclipArea: function(e) {
					e.restore();
				},
				lineTo: function(e, t, o, n) {
					return o.steppedLine
						? (("after" === o.steppedLine && !n) || ("after" !== o.steppedLine && n)
								? e.lineTo(t.x, o.y)
								: e.lineTo(o.x, t.y),
						  void e.lineTo(o.x, o.y))
						: o.tension
							? void e.bezierCurveTo(
									n ? t.controlPointPreviousX : t.controlPointNextX,
									n ? t.controlPointPreviousY : t.controlPointNextY,
									n ? o.controlPointNextX : o.controlPointPreviousX,
									n ? o.controlPointNextY : o.controlPointPreviousY,
									o.x,
									o.y
							  )
							: void e.lineTo(o.x, o.y);
				}
			});
		(n.clear = t.clear),
			(n.drawRoundedRectangle = function(e) {
				e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath();
			});
	},
	"./node_modules/chart.js/src/helpers/helpers.core.js": function(e, t, o) {
		"use strict";
		var n = {
			noop: function() {},
			uid: (function() {
				var e = 0;
				return function() {
					return e++;
				};
			})(),
			isNullOrUndef: function(e) {
				return null === e || void 0 === e;
			},
			isArray: Array.isArray
				? Array.isArray
				: function(e) {
						return "[object Array]" === Object.prototype.toString.call(e);
				  },
			isObject: function(e) {
				return null !== e && "[object Object]" === Object.prototype.toString.call(e);
			},
			valueOrDefault: function(e, t) {
				return void 0 === e ? t : e;
			},
			valueAtIndexOrDefault: function(e, t, o) {
				return n.valueOrDefault(n.isArray(e) ? e[t] : e, o);
			},
			callback: function(e, t, o) {
				if (e && "function" == typeof e.call) return e.apply(o, t);
			},
			each: function(e, t, o, r) {
				var a, i, s;
				if (n.isArray(e))
					if (((i = e.length), r)) for (a = i - 1; a >= 0; a--) t.call(o, e[a], a);
					else for (a = 0; a < i; a++) t.call(o, e[a], a);
				else if (n.isObject(e))
					for (s = Object.keys(e), i = s.length, a = 0; a < i; a++)
						t.call(o, e[s[a]], s[a]);
			},
			arrayEquals: function(e, t) {
				var o, r, a, i;
				if (!e || !t || e.length !== t.length) return !1;
				for (o = 0, r = e.length; o < r; ++o)
					if (((a = e[o]), (i = t[o]), a instanceof Array && i instanceof Array)) {
						if (!n.arrayEquals(a, i)) return !1;
					} else if (a !== i) return !1;
				return !0;
			},
			clone: function(e) {
				if (n.isArray(e)) return e.map(n.clone);
				if (n.isObject(e)) {
					for (var t = {}, o = Object.keys(e), r = o.length, a = 0; a < r; ++a)
						t[o[a]] = n.clone(e[o[a]]);
					return t;
				}
				return e;
			},
			_merger: function(e, t, o, r) {
				var a = t[e],
					i = o[e];
				n.isObject(a) && n.isObject(i) ? n.merge(a, i, r) : (t[e] = n.clone(i));
			},
			_mergerIf: function(e, t, o) {
				var r = t[e],
					a = o[e];
				n.isObject(r) && n.isObject(a)
					? n.mergeIf(r, a)
					: t.hasOwnProperty(e) || (t[e] = n.clone(a));
			},
			merge: function(e, t, o) {
				var r,
					a,
					i,
					s,
					l,
					d = n.isArray(t) ? t : [t],
					u = d.length;
				if (!n.isObject(e)) return e;
				for (o = o || {}, r = o.merger || n._merger, a = 0; a < u; ++a)
					if (((t = d[a]), n.isObject(t)))
						for (i = Object.keys(t), l = 0, s = i.length; l < s; ++l) r(i[l], e, t, o);
				return e;
			},
			mergeIf: function(e, t) {
				return n.merge(e, t, { merger: n._mergerIf });
			},
			extend: function(e) {
				for (
					var t = function(t, o) {
							e[o] = t;
						},
						o = 1,
						r = arguments.length;
					o < r;
					++o
				)
					n.each(arguments[o], t);
				return e;
			},
			inherits: function(e) {
				var t = this,
					o =
						e && e.hasOwnProperty("constructor")
							? e.constructor
							: function() {
									return t.apply(this, arguments);
							  },
					r = function() {
						this.constructor = o;
					};
				return (
					(r.prototype = t.prototype),
					(o.prototype = new r()),
					(o.extend = n.inherits),
					e && n.extend(o.prototype, e),
					(o.__super__ = t.prototype),
					o
				);
			}
		};
		(e.exports = n),
			(n.callCallback = n.callback),
			(n.indexOf = function(e, t, o) {
				return Array.prototype.indexOf.call(e, t, o);
			}),
			(n.getValueOrDefault = n.valueOrDefault),
			(n.getValueAtIndexOrDefault = n.valueAtIndexOrDefault);
	},
	"./node_modules/chart.js/src/helpers/helpers.easing.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/helpers.core.js"),
			r = {
				linear: function(e) {
					return e;
				},
				easeInQuad: function(e) {
					return e * e;
				},
				easeOutQuad: function(e) {
					return -e * (e - 2);
				},
				easeInOutQuad: function(e) {
					return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
				},
				easeInCubic: function(e) {
					return e * e * e;
				},
				easeOutCubic: function(e) {
					return (e -= 1) * e * e + 1;
				},
				easeInOutCubic: function(e) {
					return (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
				},
				easeInQuart: function(e) {
					return e * e * e * e;
				},
				easeOutQuart: function(e) {
					return -((e -= 1) * e * e * e - 1);
				},
				easeInOutQuart: function(e) {
					return (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
				},
				easeInQuint: function(e) {
					return e * e * e * e * e;
				},
				easeOutQuint: function(e) {
					return (e -= 1) * e * e * e * e + 1;
				},
				easeInOutQuint: function(e) {
					return (e /= 0.5) < 1
						? 0.5 * e * e * e * e * e
						: 0.5 * ((e -= 2) * e * e * e * e + 2);
				},
				easeInSine: function(e) {
					return 1 - Math.cos(e * (Math.PI / 2));
				},
				easeOutSine: function(e) {
					return Math.sin(e * (Math.PI / 2));
				},
				easeInOutSine: function(e) {
					return -0.5 * (Math.cos(Math.PI * e) - 1);
				},
				easeInExpo: function(e) {
					return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
				},
				easeOutExpo: function(e) {
					return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
				},
				easeInOutExpo: function(e) {
					return 0 === e
						? 0
						: 1 === e
							? 1
							: (e /= 0.5) < 1
								? 0.5 * Math.pow(2, 10 * (e - 1))
								: 0.5 * (2 - Math.pow(2, -10 * --e));
				},
				easeInCirc: function(e) {
					return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
				},
				easeOutCirc: function(e) {
					return Math.sqrt(1 - (e -= 1) * e);
				},
				easeInOutCirc: function(e) {
					return (e /= 0.5) < 1
						? -0.5 * (Math.sqrt(1 - e * e) - 1)
						: 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
				},
				easeInElastic: function(e) {
					var t = 1.70158,
						o = 0,
						n = 1;
					return 0 === e
						? 0
						: 1 === e
							? 1
							: (o || (o = 0.3),
							  n < 1
									? ((n = 1), (t = o / 4))
									: (t = (o / (2 * Math.PI)) * Math.asin(1 / n)),
							  -n *
									Math.pow(2, 10 * (e -= 1)) *
									Math.sin(((e - t) * (2 * Math.PI)) / o));
				},
				easeOutElastic: function(e) {
					var t = 1.70158,
						o = 0,
						n = 1;
					return 0 === e
						? 0
						: 1 === e
							? 1
							: (o || (o = 0.3),
							  n < 1
									? ((n = 1), (t = o / 4))
									: (t = (o / (2 * Math.PI)) * Math.asin(1 / n)),
							  n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / o) +
									1);
				},
				easeInOutElastic: function(e) {
					var t = 1.70158,
						o = 0,
						n = 1;
					return 0 === e
						? 0
						: 2 == (e /= 0.5)
							? 1
							: (o || (o = 0.45),
							  n < 1
									? ((n = 1), (t = o / 4))
									: (t = (o / (2 * Math.PI)) * Math.asin(1 / n)),
							  e < 1
									? n *
									  Math.pow(2, 10 * (e -= 1)) *
									  Math.sin(((e - t) * (2 * Math.PI)) / o) *
									  -0.5
									: n *
											Math.pow(2, -10 * (e -= 1)) *
											Math.sin(((e - t) * (2 * Math.PI)) / o) *
											0.5 +
									  1);
				},
				easeInBack: function(e) {
					var t = 1.70158;
					return e * e * ((t + 1) * e - t);
				},
				easeOutBack: function(e) {
					var t = 1.70158;
					return (e -= 1) * e * ((t + 1) * e + t) + 1;
				},
				easeInOutBack: function(e) {
					var t = 1.70158;
					return (e /= 0.5) < 1
						? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
						: 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
				},
				easeInBounce: function(e) {
					return 1 - r.easeOutBounce(1 - e);
				},
				easeOutBounce: function(e) {
					return e < 1 / 2.75
						? 7.5625 * e * e
						: e < 2 / 2.75
							? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
							: e < 2.5 / 2.75
								? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
								: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
				},
				easeInOutBounce: function(e) {
					return e < 0.5
						? 0.5 * r.easeInBounce(2 * e)
						: 0.5 * r.easeOutBounce(2 * e - 1) + 0.5;
				}
			};
		(e.exports = { effects: r }), (n.easingEffects = r);
	},
	"./node_modules/chart.js/src/helpers/helpers.options.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/helpers.core.js");
		e.exports = {
			toLineHeight: function(e, t) {
				var o = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
				if (!o || "normal" === o[1]) return 1.2 * t;
				switch (((e = +o[2]), o[3])) {
					case "px":
						return e;
					case "%":
						e /= 100;
				}
				return t * e;
			},
			toPadding: function(e) {
				var t, o, r, a;
				return (
					n.isObject(e)
						? ((t = +e.top || 0),
						  (o = +e.right || 0),
						  (r = +e.bottom || 0),
						  (a = +e.left || 0))
						: (t = o = r = a = +e || 0),
					{ top: t, right: o, bottom: r, left: a, height: t + r, width: a + o }
				);
			},
			resolve: function(e, t, o) {
				var r, a, i;
				for (r = 0, a = e.length; r < a; ++r)
					if (
						void 0 !== (i = e[r]) &&
						(void 0 !== t && "function" == typeof i && (i = i(t)),
						void 0 !== o && n.isArray(i) && (i = i[o]),
						void 0 !== i)
					)
						return i;
			}
		};
	},
	"./node_modules/chart.js/src/helpers/index.js": function(e, t, o) {
		"use strict";
		(e.exports = o("./node_modules/chart.js/src/helpers/helpers.core.js")),
			(e.exports.easing = o("./node_modules/chart.js/src/helpers/helpers.easing.js")),
			(e.exports.canvas = o("./node_modules/chart.js/src/helpers/helpers.canvas.js")),
			(e.exports.options = o("./node_modules/chart.js/src/helpers/helpers.options.js"));
	},
	"./node_modules/chart.js/src/platforms/platform.basic.js": function(e, t) {
		e.exports = {
			acquireContext: function(e) {
				return e && e.canvas && (e = e.canvas), (e && e.getContext("2d")) || null;
			}
		};
	},
	"./node_modules/chart.js/src/platforms/platform.dom.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			var o = g.getStyle(e, t),
				n = o && o.match(/^(\d+)(\.\d+)?px$/);
			return n ? Number(n[1]) : void 0;
		}
		function r(e, t) {
			var o = e.style,
				r = e.getAttribute("height"),
				a = e.getAttribute("width");
			if (
				((e[v] = {
					initial: {
						height: r,
						width: a,
						style: { display: o.display, height: o.height, width: o.width }
					}
				}),
				(o.display = o.display || "block"),
				null === a || "" === a)
			) {
				var i = n(e, "width");
				void 0 !== i && (e.width = i);
			}
			if (null === r || "" === r)
				if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
				else {
					var s = n(e, "height");
					void 0 !== i && (e.height = s);
				}
			return e;
		}
		function a(e, t, o) {
			e.addEventListener(t, o, w);
		}
		function i(e, t, o) {
			e.removeEventListener(t, o, w);
		}
		function s(e, t, o, n, r) {
			return {
				type: e,
				chart: t,
				native: r || null,
				x: void 0 !== o ? o : null,
				y: void 0 !== n ? n : null
			};
		}
		function l(e, t) {
			var o = j[e.type] || e.type,
				n = g.getRelativePosition(e, t);
			return s(o, t, n.x, n.y, e);
		}
		function d(e, t) {
			var o = !1,
				n = [];
			return function() {
				(n = Array.prototype.slice.call(arguments)),
					(t = t || this),
					o ||
						((o = !0),
						g.requestAnimFrame.call(window, function() {
							(o = !1), e.apply(t, n);
						}));
			};
		}
		function u(e) {
			var t = document.createElement("div"),
				o = b + "size-monitor",
				n =
					"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
			(t.style.cssText = n),
				(t.className = o),
				(t.innerHTML =
					'<div class="' +
					o +
					'-expand" style="' +
					n +
					'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
					o +
					'-shrink" style="' +
					n +
					'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>');
			var r = t.childNodes[0],
				i = t.childNodes[1];
			t._reset = function() {
				(r.scrollLeft = 1e6),
					(r.scrollTop = 1e6),
					(i.scrollLeft = 1e6),
					(i.scrollTop = 1e6);
			};
			var s = function() {
				t._reset(), e();
			};
			return a(r, "scroll", s.bind(r, "expand")), a(i, "scroll", s.bind(i, "shrink")), t;
		}
		function c(e, t) {
			var o = e[v] || (e[v] = {}),
				n = (o.renderProxy = function(e) {
					e.animationName === _ && t();
				});
			g.each(x, function(t) {
				a(e, t, n);
			}),
				(o.reflow = !!e.offsetParent),
				e.classList.add(y);
		}
		function h(e) {
			var t = e[v] || {},
				o = t.renderProxy;
			o &&
				(g.each(x, function(t) {
					i(e, t, o);
				}),
				delete t.renderProxy),
				e.classList.remove(y);
		}
		function f(e, t, o) {
			var n = e[v] || (e[v] = {}),
				r = (n.resizer = u(
					d(function() {
						if (n.resizer) return t(s("resize", o));
					})
				));
			c(e, function() {
				if (n.resizer) {
					var t = e.parentNode;
					t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset();
				}
			});
		}
		function p(e) {
			var t = e[v] || {},
				o = t.resizer;
			delete t.resizer, h(e), o && o.parentNode && o.parentNode.removeChild(o);
		}
		function m(e, t) {
			var o = e._style || document.createElement("style");
			e._style ||
				((e._style = o),
				(t = "/* Chart.js */\n" + t),
				o.setAttribute("type", "text/css"),
				document.getElementsByTagName("head")[0].appendChild(o)),
				o.appendChild(document.createTextNode(t));
		}
		var g = o("./node_modules/chart.js/src/helpers/index.js"),
			v = "$chartjs",
			b = "chartjs-",
			y = b + "render-monitor",
			_ = b + "render-animation",
			x = ["animationstart", "webkitAnimationStart"],
			j = {
				touchstart: "mousedown",
				touchmove: "mousemove",
				touchend: "mouseup",
				pointerenter: "mouseenter",
				pointerdown: "mousedown",
				pointermove: "mousemove",
				pointerup: "mouseup",
				pointerleave: "mouseout",
				pointerout: "mouseout"
			},
			k = (function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0;
						}
					});
					window.addEventListener("e", null, t);
				} catch (e) {}
				return e;
			})(),
			w = !!k && { passive: !0 };
		(e.exports = {
			_enabled: "undefined" != typeof window && "undefined" != typeof document,
			initialize: function() {
				var e = "from{opacity:0.99}to{opacity:1}";
				m(
					this,
					"@-webkit-keyframes " +
						_ +
						"{" +
						e +
						"}@keyframes " +
						_ +
						"{" +
						e +
						"}." +
						y +
						"{-webkit-animation:" +
						_ +
						" 0.001s;animation:" +
						_ +
						" 0.001s;}"
				);
			},
			acquireContext: function(e, t) {
				"string" == typeof e ? (e = document.getElementById(e)) : e.length && (e = e[0]),
					e && e.canvas && (e = e.canvas);
				var o = e && e.getContext && e.getContext("2d");
				return o && o.canvas === e ? (r(e, t), o) : null;
			},
			releaseContext: function(e) {
				var t = e.canvas;
				if (t[v]) {
					var o = t[v].initial;
					["height", "width"].forEach(function(e) {
						var n = o[e];
						g.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
					}),
						g.each(o.style || {}, function(e, o) {
							t.style[o] = e;
						}),
						(t.width = t.width),
						delete t[v];
				}
			},
			addEventListener: function(e, t, o) {
				var n = e.canvas;
				if ("resize" === t) return void f(n, o, e);
				var r = o[v] || (o[v] = {});
				a(
					n,
					t,
					((r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) {
						o(l(t, e));
					})
				);
			},
			removeEventListener: function(e, t, o) {
				var n = e.canvas;
				if ("resize" === t) return void p(n);
				var r = o[v] || {},
					a = r.proxies || {},
					s = a[e.id + "_" + t];
				s && i(n, t, s);
			}
		}),
			(g.addEvent = a),
			(g.removeEvent = i);
	},
	"./node_modules/chart.js/src/platforms/platform.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/helpers/index.js"),
			r = o("./node_modules/chart.js/src/platforms/platform.basic.js"),
			a = o("./node_modules/chart.js/src/platforms/platform.dom.js"),
			i = a._enabled ? a : r;
		e.exports = n.extend(
			{
				initialize: function() {},
				acquireContext: function() {},
				releaseContext: function() {},
				addEventListener: function() {},
				removeEventListener: function() {}
			},
			i
		);
	},
	"./node_modules/chart.js/src/plugins/index.js": function(e, t, o) {
		"use strict";
		(e.exports = {}),
			(e.exports.filler = o("./node_modules/chart.js/src/plugins/plugin.filler.js")),
			(e.exports.legend = o("./node_modules/chart.js/src/plugins/plugin.legend.js")),
			(e.exports.title = o("./node_modules/chart.js/src/plugins/plugin.title.js"));
	},
	"./node_modules/chart.js/src/plugins/plugin.filler.js": function(e, t, o) {
		"use strict";
		function n(e, t, o) {
			var n,
				r = e._model || {},
				a = r.fill;
			if ((void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a)) return !1;
			if (!0 === a) return "origin";
			if (((n = parseFloat(a, 10)), isFinite(n) && Math.floor(n) === n))
				return (
					("-" !== a[0] && "+" !== a[0]) || (n = t + n),
					!(n === t || n < 0 || n >= o) && n
				);
			switch (a) {
				case "bottom":
					return "start";
				case "top":
					return "end";
				case "zero":
					return "origin";
				case "origin":
				case "start":
				case "end":
					return a;
				default:
					return !1;
			}
		}
		function r(e) {
			var t,
				o = e.el._model || {},
				n = e.el._scale || {},
				r = e.fill,
				a = null;
			if (isFinite(r)) return null;
			if (
				("start" === r
					? (a = void 0 === o.scaleBottom ? n.bottom : o.scaleBottom)
					: "end" === r
						? (a = void 0 === o.scaleTop ? n.top : o.scaleTop)
						: void 0 !== o.scaleZero
							? (a = o.scaleZero)
							: n.getBasePosition
								? (a = n.getBasePosition())
								: n.getBasePixel && (a = n.getBasePixel()),
				void 0 !== a && null !== a)
			) {
				if (void 0 !== a.x && void 0 !== a.y) return a;
				if ("number" == typeof a && isFinite(a))
					return (t = n.isHorizontal()), { x: t ? a : null, y: t ? null : a };
			}
			return null;
		}
		function a(e, t, o) {
			var n,
				r = e[t],
				a = r.fill,
				i = [t];
			if (!o) return a;
			for (; !1 !== a && -1 === i.indexOf(a); ) {
				if (!isFinite(a)) return a;
				if (!(n = e[a])) return !1;
				if (n.visible) return a;
				i.push(a), (a = n.fill);
			}
			return !1;
		}
		function i(e) {
			var t = e.fill,
				o = "dataset";
			return !1 === t ? null : (isFinite(t) || (o = "boundary"), f[o](e));
		}
		function s(e) {
			return e && !e.skip;
		}
		function l(e, t, o, n, r) {
			var a;
			if (n && r) {
				for (e.moveTo(t[0].x, t[0].y), a = 1; a < n; ++a)
					h.canvas.lineTo(e, t[a - 1], t[a]);
				for (e.lineTo(o[r - 1].x, o[r - 1].y), a = r - 1; a > 0; --a)
					h.canvas.lineTo(e, o[a], o[a - 1], !0);
			}
		}
		function d(e, t, o, n, r, a) {
			var i,
				d,
				u,
				c,
				h,
				f,
				p,
				m = t.length,
				g = n.spanGaps,
				v = [],
				b = [],
				y = 0,
				_ = 0;
			for (e.beginPath(), i = 0, d = m + !!a; i < d; ++i)
				(u = i % m),
					(c = t[u]._view),
					(h = o(c, u, n)),
					(f = s(c)),
					(p = s(h)),
					f && p
						? ((y = v.push(c)), (_ = b.push(h)))
						: y &&
						  _ &&
						  (g
								? (f && v.push(c), p && b.push(h))
								: (l(e, v, b, y, _), (y = _ = 0), (v = []), (b = [])));
			l(e, v, b, y, _), e.closePath(), (e.fillStyle = r), e.fill();
		}
		var u = o("./node_modules/chart.js/src/core/core.defaults.js"),
			c = o("./node_modules/chart.js/src/elements/index.js"),
			h = o("./node_modules/chart.js/src/helpers/index.js");
		u._set("global", { plugins: { filler: { propagate: !0 } } });
		var f = {
			dataset: function(e) {
				var t = e.fill,
					o = e.chart,
					n = o.getDatasetMeta(t),
					r = n && o.isDatasetVisible(t),
					a = (r && n.dataset._children) || [],
					i = a.length || 0;
				return i
					? function(e, t) {
							return (t < i && a[t]._view) || null;
					  }
					: null;
			},
			boundary: function(e) {
				var t = e.boundary,
					o = t ? t.x : null,
					n = t ? t.y : null;
				return function(e) {
					return { x: null === o ? e.x : o, y: null === n ? e.y : n };
				};
			}
		};
		e.exports = {
			id: "filler",
			afterDatasetsUpdate: function(e, t) {
				var o,
					s,
					l,
					d,
					u = (e.data.datasets || []).length,
					h = t.propagate,
					f = [];
				for (s = 0; s < u; ++s)
					(o = e.getDatasetMeta(s)),
						(l = o.dataset),
						(d = null),
						l &&
							l._model &&
							l instanceof c.Line &&
							(d = {
								visible: e.isDatasetVisible(s),
								fill: n(l, s, u),
								chart: e,
								el: l
							}),
						(o.$filler = d),
						f.push(d);
				for (s = 0; s < u; ++s)
					(d = f[s]) && ((d.fill = a(f, s, h)), (d.boundary = r(d)), (d.mapper = i(d)));
			},
			beforeDatasetDraw: function(e, t) {
				var o = t.meta.$filler;
				if (o) {
					var n = e.ctx,
						r = o.el,
						a = r._view,
						i = r._children || [],
						s = o.mapper,
						l = a.backgroundColor || u.global.defaultColor;
					s &&
						l &&
						i.length &&
						(h.canvas.clipArea(n, e.chartArea),
						d(n, i, s, a, l, r._loop),
						h.canvas.unclipArea(n));
				}
			}
		};
	},
	"./node_modules/chart.js/src/plugins/plugin.legend.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth;
		}
		function r(e, t) {
			var o = new u({ ctx: e.ctx, options: t, chart: e });
			l.configure(e, o, t), l.addBox(e, o), (e.legend = o);
		}
		var a = o("./node_modules/chart.js/src/core/core.defaults.js"),
			i = o("./node_modules/chart.js/src/core/core.element.js"),
			s = o("./node_modules/chart.js/src/helpers/index.js"),
			l = o("./node_modules/chart.js/src/core/core.layouts.js"),
			d = s.noop;
		a._set("global", {
			legend: {
				display: !0,
				position: "top",
				fullWidth: !0,
				reverse: !1,
				weight: 1e3,
				onClick: function(e, t) {
					var o = t.datasetIndex,
						n = this.chart,
						r = n.getDatasetMeta(o);
					(r.hidden = null === r.hidden ? !n.data.datasets[o].hidden : null), n.update();
				},
				onHover: null,
				labels: {
					boxWidth: 40,
					padding: 10,
					generateLabels: function(e) {
						var t = e.data;
						return s.isArray(t.datasets)
							? t.datasets.map(function(t, o) {
									return {
										text: t.label,
										fillStyle: s.isArray(t.backgroundColor)
											? t.backgroundColor[0]
											: t.backgroundColor,
										hidden: !e.isDatasetVisible(o),
										lineCap: t.borderCapStyle,
										lineDash: t.borderDash,
										lineDashOffset: t.borderDashOffset,
										lineJoin: t.borderJoinStyle,
										lineWidth: t.borderWidth,
										strokeStyle: t.borderColor,
										pointStyle: t.pointStyle,
										datasetIndex: o
									};
							  }, this)
							: [];
					}
				}
			},
			legendCallback: function(e) {
				var t = [];
				t.push('<ul class="' + e.id + '-legend">');
				for (var o = 0; o < e.data.datasets.length; o++)
					t.push(
						'<li><span style="background-color:' +
							e.data.datasets[o].backgroundColor +
							'"></span>'
					),
						e.data.datasets[o].label && t.push(e.data.datasets[o].label),
						t.push("</li>");
				return t.push("</ul>"), t.join("");
			}
		});
		var u = i.extend({
			initialize: function(e) {
				s.extend(this, e), (this.legendHitBoxes = []), (this.doughnutMode = !1);
			},
			beforeUpdate: d,
			update: function(e, t, o) {
				var n = this;
				return (
					n.beforeUpdate(),
					(n.maxWidth = e),
					(n.maxHeight = t),
					(n.margins = o),
					n.beforeSetDimensions(),
					n.setDimensions(),
					n.afterSetDimensions(),
					n.beforeBuildLabels(),
					n.buildLabels(),
					n.afterBuildLabels(),
					n.beforeFit(),
					n.fit(),
					n.afterFit(),
					n.afterUpdate(),
					n.minSize
				);
			},
			afterUpdate: d,
			beforeSetDimensions: d,
			setDimensions: function() {
				var e = this;
				e.isHorizontal()
					? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
					: ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
					(e.paddingLeft = 0),
					(e.paddingTop = 0),
					(e.paddingRight = 0),
					(e.paddingBottom = 0),
					(e.minSize = { width: 0, height: 0 });
			},
			afterSetDimensions: d,
			beforeBuildLabels: d,
			buildLabels: function() {
				var e = this,
					t = e.options.labels || {},
					o = s.callback(t.generateLabels, [e.chart], e) || [];
				t.filter &&
					(o = o.filter(function(o) {
						return t.filter(o, e.chart.data);
					})),
					e.options.reverse && o.reverse(),
					(e.legendItems = o);
			},
			afterBuildLabels: d,
			beforeFit: d,
			fit: function() {
				var e = this,
					t = e.options,
					o = t.labels,
					r = t.display,
					i = e.ctx,
					l = a.global,
					d = s.valueOrDefault,
					u = d(o.fontSize, l.defaultFontSize),
					c = d(o.fontStyle, l.defaultFontStyle),
					h = d(o.fontFamily, l.defaultFontFamily),
					f = s.fontString(u, c, h),
					p = (e.legendHitBoxes = []),
					m = e.minSize,
					g = e.isHorizontal();
				if (
					(g
						? ((m.width = e.maxWidth), (m.height = r ? 10 : 0))
						: ((m.width = r ? 10 : 0), (m.height = e.maxHeight)),
					r)
				)
					if (((i.font = f), g)) {
						var v = (e.lineWidths = [0]),
							b = e.legendItems.length ? u + o.padding : 0;
						(i.textAlign = "left"),
							(i.textBaseline = "top"),
							s.each(e.legendItems, function(t, r) {
								var a = n(o, u),
									s = a + u / 2 + i.measureText(t.text).width;
								v[v.length - 1] + s + o.padding >= e.width &&
									((b += u + o.padding), (v[v.length] = e.left)),
									(p[r] = { left: 0, top: 0, width: s, height: u }),
									(v[v.length - 1] += s + o.padding);
							}),
							(m.height += b);
					} else {
						var y = o.padding,
							_ = (e.columnWidths = []),
							x = o.padding,
							j = 0,
							k = 0,
							w = u + y;
						s.each(e.legendItems, function(e, t) {
							var r = n(o, u),
								a = r + u / 2 + i.measureText(e.text).width;
							k + w > m.height && ((x += j + o.padding), _.push(j), (j = 0), (k = 0)),
								(j = Math.max(j, a)),
								(k += w),
								(p[t] = { left: 0, top: 0, width: a, height: u });
						}),
							(x += j),
							_.push(j),
							(m.width += x);
					}
				(e.width = m.width), (e.height = m.height);
			},
			afterFit: d,
			isHorizontal: function() {
				return "top" === this.options.position || "bottom" === this.options.position;
			},
			draw: function() {
				var e = this,
					t = e.options,
					o = t.labels,
					r = a.global,
					i = r.elements.line,
					l = e.width,
					d = e.lineWidths;
				if (t.display) {
					var u,
						c = e.ctx,
						h = s.valueOrDefault,
						f = h(o.fontColor, r.defaultFontColor),
						p = h(o.fontSize, r.defaultFontSize),
						m = h(o.fontStyle, r.defaultFontStyle),
						g = h(o.fontFamily, r.defaultFontFamily),
						v = s.fontString(p, m, g);
					(c.textAlign = "left"),
						(c.textBaseline = "middle"),
						(c.lineWidth = 0.5),
						(c.strokeStyle = f),
						(c.fillStyle = f),
						(c.font = v);
					var b = n(o, p),
						y = e.legendHitBoxes,
						_ = function(e, o, n) {
							if (!(isNaN(b) || b <= 0)) {
								c.save(),
									(c.fillStyle = h(n.fillStyle, r.defaultColor)),
									(c.lineCap = h(n.lineCap, i.borderCapStyle)),
									(c.lineDashOffset = h(n.lineDashOffset, i.borderDashOffset)),
									(c.lineJoin = h(n.lineJoin, i.borderJoinStyle)),
									(c.lineWidth = h(n.lineWidth, i.borderWidth)),
									(c.strokeStyle = h(n.strokeStyle, r.defaultColor));
								var a = 0 === h(n.lineWidth, i.borderWidth);
								if (
									(c.setLineDash && c.setLineDash(h(n.lineDash, i.borderDash)),
									t.labels && t.labels.usePointStyle)
								) {
									var l = (p * Math.SQRT2) / 2,
										d = l / Math.SQRT2,
										u = e + d,
										f = o + d;
									s.canvas.drawPoint(c, n.pointStyle, l, u, f);
								} else a || c.strokeRect(e, o, b, p), c.fillRect(e, o, b, p);
								c.restore();
							}
						},
						x = function(e, t, o, n) {
							var r = p / 2,
								a = b + r + e,
								i = t + r;
							c.fillText(o.text, a, i),
								o.hidden &&
									(c.beginPath(),
									(c.lineWidth = 2),
									c.moveTo(a, i),
									c.lineTo(a + n, i),
									c.stroke());
						},
						j = e.isHorizontal();
					u = j
						? { x: e.left + (l - d[0]) / 2, y: e.top + o.padding, line: 0 }
						: { x: e.left + o.padding, y: e.top + o.padding, line: 0 };
					var k = p + o.padding;
					s.each(e.legendItems, function(t, n) {
						var r = c.measureText(t.text).width,
							a = b + p / 2 + r,
							i = u.x,
							s = u.y;
						j
							? i + a >= l &&
							  ((s = u.y += k), u.line++, (i = u.x = e.left + (l - d[u.line]) / 2))
							: s + k > e.bottom &&
							  ((i = u.x = i + e.columnWidths[u.line] + o.padding),
							  (s = u.y = e.top + o.padding),
							  u.line++),
							_(i, s, t),
							(y[n].left = i),
							(y[n].top = s),
							x(i, s, t, r),
							j ? (u.x += a + o.padding) : (u.y += k);
					});
				}
			},
			handleEvent: function(e) {
				var t = this,
					o = t.options,
					n = "mouseup" === e.type ? "click" : e.type,
					r = !1;
				if ("mousemove" === n) {
					if (!o.onHover) return;
				} else {
					if ("click" !== n) return;
					if (!o.onClick) return;
				}
				var a = e.x,
					i = e.y;
				if (a >= t.left && a <= t.right && i >= t.top && i <= t.bottom)
					for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
						var d = s[l];
						if (
							a >= d.left &&
							a <= d.left + d.width &&
							i >= d.top &&
							i <= d.top + d.height
						) {
							if ("click" === n) {
								o.onClick.call(t, e.native, t.legendItems[l]), (r = !0);
								break;
							}
							if ("mousemove" === n) {
								o.onHover.call(t, e.native, t.legendItems[l]), (r = !0);
								break;
							}
						}
					}
				return r;
			}
		});
		e.exports = {
			id: "legend",
			_element: u,
			beforeInit: function(e) {
				var t = e.options.legend;
				t && r(e, t);
			},
			beforeUpdate: function(e) {
				var t = e.options.legend,
					o = e.legend;
				t
					? (s.mergeIf(t, a.global.legend),
					  o ? (l.configure(e, o, t), (o.options = t)) : r(e, t))
					: o && (l.removeBox(e, o), delete e.legend);
			},
			afterEvent: function(e, t) {
				var o = e.legend;
				o && o.handleEvent(t);
			}
		};
	},
	"./node_modules/chart.js/src/plugins/plugin.title.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			var o = new d({ ctx: e.ctx, options: t, chart: e });
			s.configure(e, o, t), s.addBox(e, o), (e.titleBlock = o);
		}
		var r = o("./node_modules/chart.js/src/core/core.defaults.js"),
			a = o("./node_modules/chart.js/src/core/core.element.js"),
			i = o("./node_modules/chart.js/src/helpers/index.js"),
			s = o("./node_modules/chart.js/src/core/core.layouts.js"),
			l = i.noop;
		r._set("global", {
			title: {
				display: !1,
				fontStyle: "bold",
				fullWidth: !0,
				lineHeight: 1.2,
				padding: 10,
				position: "top",
				text: "",
				weight: 2e3
			}
		});
		var d = a.extend({
			initialize: function(e) {
				var t = this;
				i.extend(t, e), (t.legendHitBoxes = []);
			},
			beforeUpdate: l,
			update: function(e, t, o) {
				var n = this;
				return (
					n.beforeUpdate(),
					(n.maxWidth = e),
					(n.maxHeight = t),
					(n.margins = o),
					n.beforeSetDimensions(),
					n.setDimensions(),
					n.afterSetDimensions(),
					n.beforeBuildLabels(),
					n.buildLabels(),
					n.afterBuildLabels(),
					n.beforeFit(),
					n.fit(),
					n.afterFit(),
					n.afterUpdate(),
					n.minSize
				);
			},
			afterUpdate: l,
			beforeSetDimensions: l,
			setDimensions: function() {
				var e = this;
				e.isHorizontal()
					? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
					: ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
					(e.paddingLeft = 0),
					(e.paddingTop = 0),
					(e.paddingRight = 0),
					(e.paddingBottom = 0),
					(e.minSize = { width: 0, height: 0 });
			},
			afterSetDimensions: l,
			beforeBuildLabels: l,
			buildLabels: l,
			afterBuildLabels: l,
			beforeFit: l,
			fit: function() {
				var e = this,
					t = i.valueOrDefault,
					o = e.options,
					n = o.display,
					a = t(o.fontSize, r.global.defaultFontSize),
					s = e.minSize,
					l = i.isArray(o.text) ? o.text.length : 1,
					d = i.options.toLineHeight(o.lineHeight, a),
					u = n ? l * d + 2 * o.padding : 0;
				e.isHorizontal()
					? ((s.width = e.maxWidth), (s.height = u))
					: ((s.width = u), (s.height = e.maxHeight)),
					(e.width = s.width),
					(e.height = s.height);
			},
			afterFit: l,
			isHorizontal: function() {
				var e = this.options.position;
				return "top" === e || "bottom" === e;
			},
			draw: function() {
				var e = this,
					t = e.ctx,
					o = i.valueOrDefault,
					n = e.options,
					a = r.global;
				if (n.display) {
					var s,
						l,
						d,
						u = o(n.fontSize, a.defaultFontSize),
						c = o(n.fontStyle, a.defaultFontStyle),
						h = o(n.fontFamily, a.defaultFontFamily),
						f = i.fontString(u, c, h),
						p = i.options.toLineHeight(n.lineHeight, u),
						m = p / 2 + n.padding,
						g = 0,
						v = e.top,
						b = e.left,
						y = e.bottom,
						_ = e.right;
					(t.fillStyle = o(n.fontColor, a.defaultFontColor)),
						(t.font = f),
						e.isHorizontal()
							? ((l = b + (_ - b) / 2), (d = v + m), (s = _ - b))
							: ((l = "left" === n.position ? b + m : _ - m),
							  (d = v + (y - v) / 2),
							  (s = y - v),
							  (g = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
						t.save(),
						t.translate(l, d),
						t.rotate(g),
						(t.textAlign = "center"),
						(t.textBaseline = "middle");
					var x = n.text;
					if (i.isArray(x))
						for (var j = 0, k = 0; k < x.length; ++k)
							t.fillText(x[k], 0, j, s), (j += p);
					else t.fillText(x, 0, 0, s);
					t.restore();
				}
			}
		});
		e.exports = {
			id: "title",
			_element: d,
			beforeInit: function(e) {
				var t = e.options.title;
				t && n(e, t);
			},
			beforeUpdate: function(e) {
				var t = e.options.title,
					o = e.titleBlock;
				t
					? (i.mergeIf(t, r.global.title),
					  o ? (s.configure(e, o, t), (o.options = t)) : n(e, t))
					: o && (s.removeBox(e, o), delete e.titleBlock);
			}
		};
	},
	"./node_modules/chart.js/src/scales/scale.category.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			var t = { position: "bottom" },
				o = e.Scale.extend({
					getLabels: function() {
						var e = this.chart.data;
						return (
							this.options.labels ||
							(this.isHorizontal() ? e.xLabels : e.yLabels) ||
							e.labels
						);
					},
					determineDataLimits: function() {
						var e = this,
							t = e.getLabels();
						(e.minIndex = 0), (e.maxIndex = t.length - 1);
						var o;
						void 0 !== e.options.ticks.min &&
							((o = t.indexOf(e.options.ticks.min)),
							(e.minIndex = -1 !== o ? o : e.minIndex)),
							void 0 !== e.options.ticks.max &&
								((o = t.indexOf(e.options.ticks.max)),
								(e.maxIndex = -1 !== o ? o : e.maxIndex)),
							(e.min = t[e.minIndex]),
							(e.max = t[e.maxIndex]);
					},
					buildTicks: function() {
						var e = this,
							t = e.getLabels();
						e.ticks =
							0 === e.minIndex && e.maxIndex === t.length - 1
								? t
								: t.slice(e.minIndex, e.maxIndex + 1);
					},
					getLabelForIndex: function(e, t) {
						var o = this,
							n = o.chart.data,
							r = o.isHorizontal();
						return n.yLabels && !r
							? o.getRightValue(n.datasets[t].data[e])
							: o.ticks[e - o.minIndex];
					},
					getPixelForValue: function(e, t) {
						var o,
							n = this,
							r = n.options.offset,
							a = Math.max(n.maxIndex + 1 - n.minIndex - (r ? 0 : 1), 1);
						if (
							(void 0 !== e && null !== e && (o = n.isHorizontal() ? e.x : e.y),
							void 0 !== o || (void 0 !== e && isNaN(t)))
						) {
							var i = n.getLabels();
							e = o || e;
							var s = i.indexOf(e);
							t = -1 !== s ? s : t;
						}
						if (n.isHorizontal()) {
							var l = n.width / a,
								d = l * (t - n.minIndex);
							return r && (d += l / 2), n.left + Math.round(d);
						}
						var u = n.height / a,
							c = u * (t - n.minIndex);
						return r && (c += u / 2), n.top + Math.round(c);
					},
					getPixelForTick: function(e) {
						return this.getPixelForValue(this.ticks[e], e + this.minIndex, null);
					},
					getValueForPixel: function(e) {
						var t = this,
							o = t.options.offset,
							n = Math.max(t._ticks.length - (o ? 0 : 1), 1),
							r = t.isHorizontal(),
							a = (r ? t.width : t.height) / n;
						return (
							(e -= r ? t.left : t.top),
							o && (e -= a / 2),
							(e <= 0 ? 0 : Math.round(e / a)) + t.minIndex
						);
					},
					getBasePixel: function() {
						return this.bottom;
					}
				});
			e.scaleService.registerScaleType("category", o, t);
		};
	},
	"./node_modules/chart.js/src/scales/scale.linear.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/helpers/index.js"),
			a = o("./node_modules/chart.js/src/core/core.ticks.js");
		e.exports = function(e) {
			var t = { position: "left", ticks: { callback: a.formatters.linear } },
				o = e.LinearScaleBase.extend({
					determineDataLimits: function() {
						function e(e) {
							return s ? e.xAxisID === t.id : e.yAxisID === t.id;
						}
						var t = this,
							o = t.options,
							n = t.chart,
							a = n.data,
							i = a.datasets,
							s = t.isHorizontal();
						(t.min = null), (t.max = null);
						var l = o.stacked;
						if (
							(void 0 === l &&
								r.each(i, function(t, o) {
									if (!l) {
										var r = n.getDatasetMeta(o);
										n.isDatasetVisible(o) &&
											e(r) &&
											void 0 !== r.stack &&
											(l = !0);
									}
								}),
							o.stacked || l)
						) {
							var d = {};
							r.each(i, function(a, i) {
								var s = n.getDatasetMeta(i),
									l = [
										s.type,
										void 0 === o.stacked && void 0 === s.stack ? i : "",
										s.stack
									].join(".");
								void 0 === d[l] &&
									(d[l] = { positiveValues: [], negativeValues: [] });
								var u = d[l].positiveValues,
									c = d[l].negativeValues;
								n.isDatasetVisible(i) &&
									e(s) &&
									r.each(a.data, function(e, n) {
										var r = +t.getRightValue(e);
										isNaN(r) ||
											s.data[n].hidden ||
											((u[n] = u[n] || 0),
											(c[n] = c[n] || 0),
											o.relativePoints
												? (u[n] = 100)
												: r < 0
													? (c[n] += r)
													: (u[n] += r));
									});
							}),
								r.each(d, function(e) {
									var o = e.positiveValues.concat(e.negativeValues),
										n = r.min(o),
										a = r.max(o);
									(t.min = null === t.min ? n : Math.min(t.min, n)),
										(t.max = null === t.max ? a : Math.max(t.max, a));
								});
						} else
							r.each(i, function(o, a) {
								var i = n.getDatasetMeta(a);
								n.isDatasetVisible(a) &&
									e(i) &&
									r.each(o.data, function(e, o) {
										var n = +t.getRightValue(e);
										isNaN(n) ||
											i.data[o].hidden ||
											(null === t.min
												? (t.min = n)
												: n < t.min && (t.min = n),
											null === t.max
												? (t.max = n)
												: n > t.max && (t.max = n));
									});
							});
						(t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0),
							(t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1),
							this.handleTickRangeOptions();
					},
					getTickLimit: function() {
						var e,
							t = this,
							o = t.options.ticks;
						if (t.isHorizontal())
							e = Math.min(
								o.maxTicksLimit ? o.maxTicksLimit : 11,
								Math.ceil(t.width / 50)
							);
						else {
							var a = r.valueOrDefault(o.fontSize, n.global.defaultFontSize);
							e = Math.min(
								o.maxTicksLimit ? o.maxTicksLimit : 11,
								Math.ceil(t.height / (2 * a))
							);
						}
						return e;
					},
					handleDirectionalChanges: function() {
						this.isHorizontal() || this.ticks.reverse();
					},
					getLabelForIndex: function(e, t) {
						return +this.getRightValue(this.chart.data.datasets[t].data[e]);
					},
					getPixelForValue: function(e) {
						var t = this,
							o = t.start,
							n = +t.getRightValue(e),
							r = t.end - o;
						return t.isHorizontal()
							? t.left + (t.width / r) * (n - o)
							: t.bottom - (t.height / r) * (n - o);
					},
					getValueForPixel: function(e) {
						var t = this,
							o = t.isHorizontal(),
							n = o ? t.width : t.height,
							r = (o ? e - t.left : t.bottom - e) / n;
						return t.start + (t.end - t.start) * r;
					},
					getPixelForTick: function(e) {
						return this.getPixelForValue(this.ticksAsNumbers[e]);
					}
				});
			e.scaleService.registerScaleType("linear", o, t);
		};
	},
	"./node_modules/chart.js/src/scales/scale.linearbase.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			var o,
				n = [];
			if (e.stepSize && e.stepSize > 0) o = e.stepSize;
			else {
				var a = r.niceNum(t.max - t.min, !1);
				o = r.niceNum(a / (e.maxTicks - 1), !0);
			}
			var i = Math.floor(t.min / o) * o,
				s = Math.ceil(t.max / o) * o;
			e.min &&
				e.max &&
				e.stepSize &&
				r.almostWhole((e.max - e.min) / e.stepSize, o / 1e3) &&
				((i = e.min), (s = e.max));
			var l = (s - i) / o;
			l = r.almostEquals(l, Math.round(l), o / 1e3) ? Math.round(l) : Math.ceil(l);
			var d = 1;
			o < 1 &&
				((d = Math.pow(10, o.toString().length - 2)),
				(i = Math.round(i * d) / d),
				(s = Math.round(s * d) / d)),
				n.push(void 0 !== e.min ? e.min : i);
			for (var u = 1; u < l; ++u) n.push(Math.round((i + u * o) * d) / d);
			return n.push(void 0 !== e.max ? e.max : s), n;
		}
		var r = o("./node_modules/chart.js/src/helpers/index.js");
		e.exports = function(e) {
			var t = r.noop;
			e.LinearScaleBase = e.Scale.extend({
				getRightValue: function(t) {
					return "string" == typeof t
						? +t
						: e.Scale.prototype.getRightValue.call(this, t);
				},
				handleTickRangeOptions: function() {
					var e = this,
						t = e.options,
						o = t.ticks;
					if (o.beginAtZero) {
						var n = r.sign(e.min),
							a = r.sign(e.max);
						n < 0 && a < 0 ? (e.max = 0) : n > 0 && a > 0 && (e.min = 0);
					}
					var i = void 0 !== o.min || void 0 !== o.suggestedMin,
						s = void 0 !== o.max || void 0 !== o.suggestedMax;
					void 0 !== o.min
						? (e.min = o.min)
						: void 0 !== o.suggestedMin &&
						  (null === e.min
								? (e.min = o.suggestedMin)
								: (e.min = Math.min(e.min, o.suggestedMin))),
						void 0 !== o.max
							? (e.max = o.max)
							: void 0 !== o.suggestedMax &&
							  (null === e.max
									? (e.max = o.suggestedMax)
									: (e.max = Math.max(e.max, o.suggestedMax))),
						i !== s &&
							e.min >= e.max &&
							(i ? (e.max = e.min + 1) : (e.min = e.max - 1)),
						e.min === e.max && (e.max++, o.beginAtZero || e.min--);
				},
				getTickLimit: t,
				handleDirectionalChanges: t,
				buildTicks: function() {
					var e = this,
						t = e.options,
						o = t.ticks,
						a = e.getTickLimit();
					a = Math.max(2, a);
					var i = {
							maxTicks: a,
							min: o.min,
							max: o.max,
							stepSize: r.valueOrDefault(o.fixedStepSize, o.stepSize)
						},
						s = (e.ticks = n(i, e));
					e.handleDirectionalChanges(),
						(e.max = r.max(s)),
						(e.min = r.min(s)),
						o.reverse
							? (s.reverse(), (e.start = e.max), (e.end = e.min))
							: ((e.start = e.min), (e.end = e.max));
				},
				convertTicksToLabels: function() {
					var t = this;
					(t.ticksAsNumbers = t.ticks.slice()),
						(t.zeroLineIndex = t.ticks.indexOf(0)),
						e.Scale.prototype.convertTicksToLabels.call(t);
				}
			});
		};
	},
	"./node_modules/chart.js/src/scales/scale.logarithmic.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			var o,
				n,
				a = [],
				i = r.valueOrDefault,
				s = i(e.min, Math.pow(10, Math.floor(r.log10(t.min)))),
				l = Math.floor(r.log10(t.max)),
				d = Math.ceil(t.max / Math.pow(10, l));
			0 === s
				? ((o = Math.floor(r.log10(t.minNotZero))),
				  (n = Math.floor(t.minNotZero / Math.pow(10, o))),
				  a.push(s),
				  (s = n * Math.pow(10, o)))
				: ((o = Math.floor(r.log10(s))), (n = Math.floor(s / Math.pow(10, o))));
			var u = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
			do {
				a.push(s),
					++n,
					10 === n && ((n = 1), ++o, (u = o >= 0 ? 1 : u)),
					(s = Math.round(n * Math.pow(10, o) * u) / u);
			} while (o < l || (o === l && n < d));
			var c = i(e.max, s);
			return a.push(c), a;
		}
		var r = o("./node_modules/chart.js/src/helpers/index.js"),
			a = o("./node_modules/chart.js/src/core/core.ticks.js");
		e.exports = function(e) {
			var t = { position: "left", ticks: { callback: a.formatters.logarithmic } },
				o = e.Scale.extend({
					determineDataLimits: function() {
						function e(e) {
							return s ? e.xAxisID === t.id : e.yAxisID === t.id;
						}
						var t = this,
							o = t.options,
							n = t.chart,
							a = n.data,
							i = a.datasets,
							s = t.isHorizontal();
						(t.min = null), (t.max = null), (t.minNotZero = null);
						var l = o.stacked;
						if (
							(void 0 === l &&
								r.each(i, function(t, o) {
									if (!l) {
										var r = n.getDatasetMeta(o);
										n.isDatasetVisible(o) &&
											e(r) &&
											void 0 !== r.stack &&
											(l = !0);
									}
								}),
							o.stacked || l)
						) {
							var d = {};
							r.each(i, function(a, i) {
								var s = n.getDatasetMeta(i),
									l = [
										s.type,
										void 0 === o.stacked && void 0 === s.stack ? i : "",
										s.stack
									].join(".");
								n.isDatasetVisible(i) &&
									e(s) &&
									(void 0 === d[l] && (d[l] = []),
									r.each(a.data, function(e, o) {
										var n = d[l],
											r = +t.getRightValue(e);
										isNaN(r) ||
											s.data[o].hidden ||
											r < 0 ||
											((n[o] = n[o] || 0), (n[o] += r));
									}));
							}),
								r.each(d, function(e) {
									if (e.length > 0) {
										var o = r.min(e),
											n = r.max(e);
										(t.min = null === t.min ? o : Math.min(t.min, o)),
											(t.max = null === t.max ? n : Math.max(t.max, n));
									}
								});
						} else
							r.each(i, function(o, a) {
								var i = n.getDatasetMeta(a);
								n.isDatasetVisible(a) &&
									e(i) &&
									r.each(o.data, function(e, o) {
										var n = +t.getRightValue(e);
										isNaN(n) ||
											i.data[o].hidden ||
											n < 0 ||
											(null === t.min
												? (t.min = n)
												: n < t.min && (t.min = n),
											null === t.max ? (t.max = n) : n > t.max && (t.max = n),
											0 !== n &&
												(null === t.minNotZero || n < t.minNotZero) &&
												(t.minNotZero = n));
									});
							});
						this.handleTickRangeOptions();
					},
					handleTickRangeOptions: function() {
						var e = this,
							t = e.options,
							o = t.ticks,
							n = r.valueOrDefault;
						(e.min = n(o.min, e.min)),
							(e.max = n(o.max, e.max)),
							e.min === e.max &&
								(0 !== e.min && null !== e.min
									? ((e.min = Math.pow(10, Math.floor(r.log10(e.min)) - 1)),
									  (e.max = Math.pow(10, Math.floor(r.log10(e.max)) + 1)))
									: ((e.min = 1), (e.max = 10))),
							null === e.min &&
								(e.min = Math.pow(10, Math.floor(r.log10(e.max)) - 1)),
							null === e.max &&
								(e.max =
									0 !== e.min
										? Math.pow(10, Math.floor(r.log10(e.min)) + 1)
										: 10),
							null === e.minNotZero &&
								(e.min > 0
									? (e.minNotZero = e.min)
									: e.max < 1
										? (e.minNotZero = Math.pow(10, Math.floor(r.log10(e.max))))
										: (e.minNotZero = 1));
					},
					buildTicks: function() {
						var e = this,
							t = e.options,
							o = t.ticks,
							a = !e.isHorizontal(),
							i = { min: o.min, max: o.max },
							s = (e.ticks = n(i, e));
						(e.max = r.max(s)),
							(e.min = r.min(s)),
							o.reverse
								? ((a = !a), (e.start = e.max), (e.end = e.min))
								: ((e.start = e.min), (e.end = e.max)),
							a && s.reverse();
					},
					convertTicksToLabels: function() {
						(this.tickValues = this.ticks.slice()),
							e.Scale.prototype.convertTicksToLabels.call(this);
					},
					getLabelForIndex: function(e, t) {
						return +this.getRightValue(this.chart.data.datasets[t].data[e]);
					},
					getPixelForTick: function(e) {
						return this.getPixelForValue(this.tickValues[e]);
					},
					_getFirstTickValue: function(e) {
						var t = Math.floor(r.log10(e));
						return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t);
					},
					getPixelForValue: function(t) {
						var o,
							n,
							a,
							i,
							s,
							l = this,
							d = l.options.ticks.reverse,
							u = r.log10,
							c = l._getFirstTickValue(l.minNotZero),
							h = 0;
						return (
							(t = +l.getRightValue(t)),
							d
								? ((a = l.end), (i = l.start), (s = -1))
								: ((a = l.start), (i = l.end), (s = 1)),
							l.isHorizontal()
								? ((o = l.width), (n = d ? l.right : l.left))
								: ((o = l.height), (s *= -1), (n = d ? l.top : l.bottom)),
							t !== a &&
								(0 === a &&
									((h = r.getValueOrDefault(
										l.options.ticks.fontSize,
										e.defaults.global.defaultFontSize
									)),
									(o -= h),
									(a = c)),
								0 !== t && (h += (o / (u(i) - u(a))) * (u(t) - u(a))),
								(n += s * h)),
							n
						);
					},
					getValueForPixel: function(t) {
						var o,
							n,
							a,
							i,
							s = this,
							l = s.options.ticks.reverse,
							d = r.log10,
							u = s._getFirstTickValue(s.minNotZero);
						if (
							(l ? ((n = s.end), (a = s.start)) : ((n = s.start), (a = s.end)),
							s.isHorizontal()
								? ((o = s.width), (i = l ? s.right - t : t - s.left))
								: ((o = s.height), (i = l ? t - s.top : s.bottom - t)),
							i !== n)
						) {
							if (0 === n) {
								var c = r.getValueOrDefault(
									s.options.ticks.fontSize,
									e.defaults.global.defaultFontSize
								);
								(i -= c), (o -= c), (n = u);
							}
							(i *= d(a) - d(n)), (i /= o), (i = Math.pow(10, d(n) + i));
						}
						return i;
					}
				});
			e.scaleService.registerScaleType("logarithmic", o, t);
		};
	},
	"./node_modules/chart.js/src/scales/scale.radialLinear.js": function(e, t, o) {
		"use strict";
		var n = o("./node_modules/chart.js/src/core/core.defaults.js"),
			r = o("./node_modules/chart.js/src/helpers/index.js"),
			a = o("./node_modules/chart.js/src/core/core.ticks.js");
		e.exports = function(e) {
			function t(e) {
				var t = e.options;
				return t.angleLines.display || t.pointLabels.display
					? e.chart.data.labels.length
					: 0;
			}
			function o(e) {
				var t = e.options.pointLabels,
					o = r.valueOrDefault(t.fontSize, g.defaultFontSize),
					n = r.valueOrDefault(t.fontStyle, g.defaultFontStyle),
					a = r.valueOrDefault(t.fontFamily, g.defaultFontFamily);
				return { size: o, style: n, family: a, font: r.fontString(o, n, a) };
			}
			function i(e, t, o) {
				return r.isArray(o)
					? { w: r.longestText(e, e.font, o), h: o.length * t + 1.5 * (o.length - 1) * t }
					: { w: e.measureText(o).width, h: t };
			}
			function s(e, t, o, n, r) {
				return e === n || e === r
					? { start: t - o / 2, end: t + o / 2 }
					: e < n || e > r
						? { start: t - o - 5, end: t }
						: { start: t, end: t + o + 5 };
			}
			function l(e) {
				var n,
					a,
					l,
					d = o(e),
					u = Math.min(e.height / 2, e.width / 2),
					c = { r: e.width, l: 0, t: e.height, b: 0 },
					h = {};
				(e.ctx.font = d.font), (e._pointLabelSizes = []);
				var f = t(e);
				for (n = 0; n < f; n++) {
					(l = e.getPointPosition(n, u)),
						(a = i(e.ctx, d.size, e.pointLabels[n] || "")),
						(e._pointLabelSizes[n] = a);
					var p = e.getIndexAngle(n),
						m = r.toDegrees(p) % 360,
						g = s(m, l.x, a.w, 0, 180),
						v = s(m, l.y, a.h, 90, 270);
					g.start < c.l && ((c.l = g.start), (h.l = p)),
						g.end > c.r && ((c.r = g.end), (h.r = p)),
						v.start < c.t && ((c.t = v.start), (h.t = p)),
						v.end > c.b && ((c.b = v.end), (h.b = p));
				}
				e.setReductions(u, c, h);
			}
			function d(e) {
				var t = Math.min(e.height / 2, e.width / 2);
				(e.drawingArea = Math.round(t)), e.setCenterPoint(0, 0, 0, 0);
			}
			function u(e) {
				return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
			}
			function c(e, t, o, n) {
				if (r.isArray(t))
					for (var a = o.y, i = 1.5 * n, s = 0; s < t.length; ++s)
						e.fillText(t[s], o.x, a), (a += i);
				else e.fillText(t, o.x, o.y);
			}
			function h(e, t, o) {
				90 === e || 270 === e ? (o.y -= t.h / 2) : (e > 270 || e < 90) && (o.y -= t.h);
			}
			function f(e) {
				var n = e.ctx,
					a = e.options,
					i = a.angleLines,
					s = a.pointLabels;
				(n.lineWidth = i.lineWidth), (n.strokeStyle = i.color);
				var l = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max),
					d = o(e);
				n.textBaseline = "top";
				for (var f = t(e) - 1; f >= 0; f--) {
					if (i.display) {
						var p = e.getPointPosition(f, l);
						n.beginPath(),
							n.moveTo(e.xCenter, e.yCenter),
							n.lineTo(p.x, p.y),
							n.stroke(),
							n.closePath();
					}
					if (s.display) {
						var m = e.getPointPosition(f, l + 5),
							v = r.valueAtIndexOrDefault(s.fontColor, f, g.defaultFontColor);
						(n.font = d.font), (n.fillStyle = v);
						var b = e.getIndexAngle(f),
							y = r.toDegrees(b);
						(n.textAlign = u(y)),
							h(y, e._pointLabelSizes[f], m),
							c(n, e.pointLabels[f] || "", m, d.size);
					}
				}
			}
			function p(e, o, n, a) {
				var i = e.ctx;
				if (
					((i.strokeStyle = r.valueAtIndexOrDefault(o.color, a - 1)),
					(i.lineWidth = r.valueAtIndexOrDefault(o.lineWidth, a - 1)),
					e.options.gridLines.circular)
				)
					i.beginPath(),
						i.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI),
						i.closePath(),
						i.stroke();
				else {
					var s = t(e);
					if (0 === s) return;
					i.beginPath();
					var l = e.getPointPosition(0, n);
					i.moveTo(l.x, l.y);
					for (var d = 1; d < s; d++) (l = e.getPointPosition(d, n)), i.lineTo(l.x, l.y);
					i.closePath(), i.stroke();
				}
			}
			function m(e) {
				return r.isNumber(e) ? e : 0;
			}
			var g = n.global,
				v = {
					display: !0,
					animate: !0,
					position: "chartArea",
					angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 },
					gridLines: { circular: !1 },
					ticks: {
						showLabelBackdrop: !0,
						backdropColor: "rgba(255,255,255,0.75)",
						backdropPaddingY: 2,
						backdropPaddingX: 2,
						callback: a.formatters.linear
					},
					pointLabels: {
						display: !0,
						fontSize: 10,
						callback: function(e) {
							return e;
						}
					}
				},
				b = e.LinearScaleBase.extend({
					setDimensions: function() {
						var e = this,
							t = e.options,
							o = t.ticks;
						(e.width = e.maxWidth),
							(e.height = e.maxHeight),
							(e.xCenter = Math.round(e.width / 2)),
							(e.yCenter = Math.round(e.height / 2));
						var n = r.min([e.height, e.width]),
							a = r.valueOrDefault(o.fontSize, g.defaultFontSize);
						e.drawingArea = t.display ? n / 2 - (a / 2 + o.backdropPaddingY) : n / 2;
					},
					determineDataLimits: function() {
						var e = this,
							t = e.chart,
							o = Number.POSITIVE_INFINITY,
							n = Number.NEGATIVE_INFINITY;
						r.each(t.data.datasets, function(a, i) {
							if (t.isDatasetVisible(i)) {
								var s = t.getDatasetMeta(i);
								r.each(a.data, function(t, r) {
									var a = +e.getRightValue(t);
									isNaN(a) ||
										s.data[r].hidden ||
										((o = Math.min(a, o)), (n = Math.max(a, n)));
								});
							}
						}),
							(e.min = o === Number.POSITIVE_INFINITY ? 0 : o),
							(e.max = n === Number.NEGATIVE_INFINITY ? 0 : n),
							e.handleTickRangeOptions();
					},
					getTickLimit: function() {
						var e = this.options.ticks,
							t = r.valueOrDefault(e.fontSize, g.defaultFontSize);
						return Math.min(
							e.maxTicksLimit ? e.maxTicksLimit : 11,
							Math.ceil(this.drawingArea / (1.5 * t))
						);
					},
					convertTicksToLabels: function() {
						var t = this;
						e.LinearScaleBase.prototype.convertTicksToLabels.call(t),
							(t.pointLabels = t.chart.data.labels.map(
								t.options.pointLabels.callback,
								t
							));
					},
					getLabelForIndex: function(e, t) {
						return +this.getRightValue(this.chart.data.datasets[t].data[e]);
					},
					fit: function() {
						this.options.pointLabels.display ? l(this) : d(this);
					},
					setReductions: function(e, t, o) {
						var n = this,
							r = t.l / Math.sin(o.l),
							a = Math.max(t.r - n.width, 0) / Math.sin(o.r),
							i = -t.t / Math.cos(o.t),
							s = -Math.max(t.b - n.height, 0) / Math.cos(o.b);
						(r = m(r)),
							(a = m(a)),
							(i = m(i)),
							(s = m(s)),
							(n.drawingArea = Math.min(
								Math.round(e - (r + a) / 2),
								Math.round(e - (i + s) / 2)
							)),
							n.setCenterPoint(r, a, i, s);
					},
					setCenterPoint: function(e, t, o, n) {
						var r = this,
							a = r.width - t - r.drawingArea,
							i = e + r.drawingArea,
							s = o + r.drawingArea,
							l = r.height - n - r.drawingArea;
						(r.xCenter = Math.round((i + a) / 2 + r.left)),
							(r.yCenter = Math.round((s + l) / 2 + r.top));
					},
					getIndexAngle: function(e) {
						return (
							e * ((2 * Math.PI) / t(this)) +
							((this.chart.options && this.chart.options.startAngle
								? this.chart.options.startAngle
								: 0) *
								Math.PI *
								2) /
								360
						);
					},
					getDistanceFromCenterForValue: function(e) {
						var t = this;
						if (null === e) return 0;
						var o = t.drawingArea / (t.max - t.min);
						return t.options.ticks.reverse ? (t.max - e) * o : (e - t.min) * o;
					},
					getPointPosition: function(e, t) {
						var o = this,
							n = o.getIndexAngle(e) - Math.PI / 2;
						return {
							x: Math.round(Math.cos(n) * t) + o.xCenter,
							y: Math.round(Math.sin(n) * t) + o.yCenter
						};
					},
					getPointPositionForValue: function(e, t) {
						return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
					},
					getBasePosition: function() {
						var e = this,
							t = e.min,
							o = e.max;
						return e.getPointPositionForValue(
							0,
							e.beginAtZero ? 0 : t < 0 && o < 0 ? o : t > 0 && o > 0 ? t : 0
						);
					},
					draw: function() {
						var e = this,
							t = e.options,
							o = t.gridLines,
							n = t.ticks,
							a = r.valueOrDefault;
						if (t.display) {
							var i = e.ctx,
								s = this.getIndexAngle(0),
								l = a(n.fontSize, g.defaultFontSize),
								d = a(n.fontStyle, g.defaultFontStyle),
								u = a(n.fontFamily, g.defaultFontFamily),
								c = r.fontString(l, d, u);
							r.each(e.ticks, function(t, r) {
								if (r > 0 || n.reverse) {
									var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[r]);
									if ((o.display && 0 !== r && p(e, o, d, r), n.display)) {
										var u = a(n.fontColor, g.defaultFontColor);
										if (
											((i.font = c),
											i.save(),
											i.translate(e.xCenter, e.yCenter),
											i.rotate(s),
											n.showLabelBackdrop)
										) {
											var h = i.measureText(t).width;
											(i.fillStyle = n.backdropColor),
												i.fillRect(
													-h / 2 - n.backdropPaddingX,
													-d - l / 2 - n.backdropPaddingY,
													h + 2 * n.backdropPaddingX,
													l + 2 * n.backdropPaddingY
												);
										}
										(i.textAlign = "center"),
											(i.textBaseline = "middle"),
											(i.fillStyle = u),
											i.fillText(t, 0, -d),
											i.restore();
									}
								}
							}),
								(t.angleLines.display || t.pointLabels.display) && f(e);
						}
					}
				});
			e.scaleService.registerScaleType("radialLinear", b, v);
		};
	},
	"./node_modules/chart.js/src/scales/scale.time.js": function(e, t, o) {
		"use strict";
		function n(e, t) {
			return e - t;
		}
		function r(e) {
			var t,
				o,
				n,
				r = {},
				a = [];
			for (t = 0, o = e.length; t < o; ++t) (n = e[t]), r[n] || ((r[n] = !0), a.push(n));
			return a;
		}
		function a(e, t, o, n) {
			if ("linear" === n || !e.length) return [{ time: t, pos: 0 }, { time: o, pos: 1 }];
			var r,
				a,
				i,
				s,
				l,
				d = [],
				u = [t];
			for (r = 0, a = e.length; r < a; ++r) (s = e[r]) > t && s < o && u.push(s);
			for (u.push(o), r = 0, a = u.length; r < a; ++r)
				(l = u[r + 1]),
					(i = u[r - 1]),
					(s = u[r]),
					(void 0 !== i && void 0 !== l && Math.round((l + i) / 2) === s) ||
						d.push({ time: s, pos: r / (a - 1) });
			return d;
		}
		function i(e, t, o) {
			for (var n, r, a, i = 0, s = e.length - 1; i >= 0 && i <= s; ) {
				if (((n = (i + s) >> 1), (r = e[n - 1] || null), (a = e[n]), !r))
					return { lo: null, hi: a };
				if (a[t] < o) i = n + 1;
				else {
					if (!(r[t] > o)) return { lo: r, hi: a };
					s = n - 1;
				}
			}
			return { lo: a, hi: null };
		}
		function s(e, t, o, n) {
			var r = i(e, t, o),
				a = r.lo ? (r.hi ? r.lo : e[e.length - 2]) : e[0],
				s = r.lo ? (r.hi ? r.hi : e[e.length - 1]) : e[1],
				l = s[t] - a[t],
				d = l ? (o - a[t]) / l : 0,
				u = (s[n] - a[n]) * d;
			return a[n] + u;
		}
		function l(e, t) {
			var o = t.parser,
				n = t.parser || t.format;
			return "function" == typeof o
				? o(e)
				: "string" == typeof e && "string" == typeof n
					? b(e, n)
					: (e instanceof b || (e = b(e)),
					  e.isValid() ? e : "function" == typeof n ? n(e) : e);
		}
		function d(e, t) {
			if (_.isNullOrUndef(e)) return null;
			var o = t.options.time,
				n = l(t.getRightValue(e), o);
			return n.isValid() ? (o.round && n.startOf(o.round), n.valueOf()) : null;
		}
		function u(e, t, o, n) {
			var r,
				a,
				i,
				s = t - e,
				l = k[o],
				d = l.size,
				u = l.steps;
			if (!u) return Math.ceil(s / (n * d));
			for (r = 0, a = u.length; r < a && ((i = u[r]), !(Math.ceil(s / (d * i)) <= n)); ++r);
			return i;
		}
		function c(e, t, o, n) {
			var r,
				a,
				i,
				s = w.length;
			for (r = w.indexOf(e); r < s - 1; ++r)
				if (
					((a = k[w[r]]),
					(i = a.steps ? a.steps[a.steps.length - 1] : j),
					a.common && Math.ceil((o - t) / (i * a.size)) <= n)
				)
					return w[r];
			return w[s - 1];
		}
		function h(e, t, o, n) {
			var r,
				a,
				i = b.duration(b(n).diff(b(o))),
				s = w.length;
			for (r = s - 1; r >= w.indexOf(t); r--)
				if (((a = w[r]), k[a].common && i.as(a) >= e.length)) return a;
			return w[t ? w.indexOf(t) : 0];
		}
		function f(e) {
			for (var t = w.indexOf(e) + 1, o = w.length; t < o; ++t)
				if (k[w[t]].common) return w[t];
		}
		function p(e, t, o, n) {
			var r,
				a = n.time,
				i = a.unit || c(a.minUnit, e, t, o),
				s = f(i),
				l = _.valueOrDefault(a.stepSize, a.unitStepSize),
				d = "week" === i && a.isoWeekday,
				h = n.ticks.major.enabled,
				p = k[i],
				m = b(e),
				g = b(t),
				v = [];
			for (
				l || (l = u(e, t, i, o)),
					d && ((m = m.isoWeekday(d)), (g = g.isoWeekday(d))),
					m = m.startOf(d ? "day" : i),
					g = g.startOf(d ? "day" : i),
					g < t && g.add(1, i),
					r = b(m),
					h &&
						s &&
						!d &&
						!a.round &&
						(r.startOf(s), r.add(~~((m - r) / (p.size * l)) * l, i));
				r < g;
				r.add(l, i)
			)
				v.push(+r);
			return v.push(+r), v;
		}
		function m(e, t, o, n, r) {
			var a,
				i,
				l = 0,
				d = 0;
			return (
				r.offset &&
					t.length &&
					(r.time.min ||
						((a = t.length > 1 ? t[1] : n),
						(i = t[0]),
						(l = (s(e, "time", a, "pos") - s(e, "time", i, "pos")) / 2)),
					r.time.max ||
						((a = t[t.length - 1]),
						(i = t.length > 1 ? t[t.length - 2] : o),
						(d = (s(e, "time", a, "pos") - s(e, "time", i, "pos")) / 2))),
				{ left: l, right: d }
			);
		}
		function g(e, t) {
			var o,
				n,
				r,
				a,
				i = [];
			for (o = 0, n = e.length; o < n; ++o)
				(r = e[o]), (a = !!t && r === +b(r).startOf(t)), i.push({ value: r, major: a });
			return i;
		}
		function v(e, t) {
			var o,
				n,
				r,
				a = e.length;
			for (o = 0; o < a; o++) {
				if (((n = l(e[o], t)), 0 !== n.millisecond())) return "MMM D, YYYY h:mm:ss.SSS a";
				(0 === n.second() && 0 === n.minute() && 0 === n.hour()) || (r = !0);
			}
			return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
		}
		var b = o("./node_modules/moment/src/moment.js");
		b = "function" == typeof b ? b : window.moment;
		var y = o("./node_modules/chart.js/src/core/core.defaults.js"),
			_ = o("./node_modules/chart.js/src/helpers/index.js"),
			x = Number.MIN_SAFE_INTEGER || -9007199254740991,
			j = Number.MAX_SAFE_INTEGER || 9007199254740991,
			k = {
				millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] },
				second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] },
				minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] },
				hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
				day: { common: !0, size: 864e5, steps: [1, 2, 5] },
				week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
				month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
				quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
				year: { common: !0, size: 3154e7 }
			},
			w = Object.keys(k);
		e.exports = function(e) {
			var t = {
					position: "bottom",
					distribution: "linear",
					bounds: "data",
					time: {
						parser: !1,
						format: !1,
						unit: !1,
						round: !1,
						displayFormat: !1,
						isoWeekday: !1,
						minUnit: "millisecond",
						displayFormats: {
							millisecond: "h:mm:ss.SSS a",
							second: "h:mm:ss a",
							minute: "h:mm a",
							hour: "hA",
							day: "MMM D",
							week: "ll",
							month: "MMM YYYY",
							quarter: "[Q]Q - YYYY",
							year: "YYYY"
						}
					},
					ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } }
				},
				o = e.Scale.extend({
					initialize: function() {
						if (!b)
							throw new Error(
								"Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com"
							);
						this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this);
					},
					update: function() {
						var t = this,
							o = t.options;
						return (
							o.time &&
								o.time.format &&
								console.warn(
									"options.time.format is deprecated and replaced by options.time.parser."
								),
							e.Scale.prototype.update.apply(t, arguments)
						);
					},
					getRightValue: function(t) {
						return (
							t && void 0 !== t.t && (t = t.t),
							e.Scale.prototype.getRightValue.call(this, t)
						);
					},
					determineDataLimits: function() {
						var e,
							t,
							o,
							a,
							i,
							s,
							l = this,
							u = l.chart,
							c = l.options.time,
							h = c.unit || "day",
							f = j,
							p = x,
							m = [],
							g = [],
							v = [];
						for (e = 0, o = u.data.labels.length; e < o; ++e)
							v.push(d(u.data.labels[e], l));
						for (e = 0, o = (u.data.datasets || []).length; e < o; ++e)
							if (u.isDatasetVisible(e))
								if (((i = u.data.datasets[e].data), _.isObject(i[0])))
									for (g[e] = [], t = 0, a = i.length; t < a; ++t)
										(s = d(i[t], l)), m.push(s), (g[e][t] = s);
								else m.push.apply(m, v), (g[e] = v.slice(0));
							else g[e] = [];
						v.length &&
							((v = r(v).sort(n)),
							(f = Math.min(f, v[0])),
							(p = Math.max(p, v[v.length - 1]))),
							m.length &&
								((m = r(m).sort(n)),
								(f = Math.min(f, m[0])),
								(p = Math.max(p, m[m.length - 1]))),
							(f = d(c.min, l) || f),
							(p = d(c.max, l) || p),
							(f = f === j ? +b().startOf(h) : f),
							(p = p === x ? +b().endOf(h) + 1 : p),
							(l.min = Math.min(f, p)),
							(l.max = Math.max(f + 1, p)),
							(l._horizontal = l.isHorizontal()),
							(l._table = []),
							(l._timestamps = { data: m, datasets: g, labels: v });
					},
					buildTicks: function() {
						var e,
							t,
							o,
							n = this,
							r = n.min,
							i = n.max,
							s = n.options,
							l = s.time,
							u = [],
							c = [];
						switch (s.ticks.source) {
							case "data":
								u = n._timestamps.data;
								break;
							case "labels":
								u = n._timestamps.labels;
								break;
							case "auto":
							default:
								u = p(r, i, n.getLabelCapacity(r), s);
						}
						for (
							"ticks" === s.bounds && u.length && ((r = u[0]), (i = u[u.length - 1])),
								r = d(l.min, n) || r,
								i = d(l.max, n) || i,
								e = 0,
								t = u.length;
							e < t;
							++e
						)
							(o = u[e]) >= r && o <= i && c.push(o);
						return (
							(n.min = r),
							(n.max = i),
							(n._unit = l.unit || h(c, l.minUnit, n.min, n.max)),
							(n._majorUnit = f(n._unit)),
							(n._table = a(n._timestamps.data, r, i, s.distribution)),
							(n._offsets = m(n._table, c, r, i, s)),
							(n._labelFormat = v(n._timestamps.data, l)),
							g(c, n._majorUnit)
						);
					},
					getLabelForIndex: function(e, t) {
						var o = this,
							n = o.chart.data,
							r = o.options.time,
							a = n.labels && e < n.labels.length ? n.labels[e] : "",
							i = n.datasets[t].data[e];
						return (
							_.isObject(i) && (a = o.getRightValue(i)),
							r.tooltipFormat
								? l(a, r).format(r.tooltipFormat)
								: "string" == typeof a
									? a
									: l(a, r).format(o._labelFormat)
						);
					},
					tickFormatFunction: function(e, t, o, n) {
						var r = this,
							a = r.options,
							i = e.valueOf(),
							s = a.time.displayFormats,
							l = s[r._unit],
							d = r._majorUnit,
							u = s[d],
							c = e
								.clone()
								.startOf(d)
								.valueOf(),
							h = a.ticks.major,
							f = h.enabled && d && u && i === c,
							p = e.format(n || (f ? u : l)),
							m = f ? h : a.ticks.minor,
							g = _.valueOrDefault(m.callback, m.userCallback);
						return g ? g(p, t, o) : p;
					},
					convertTicksToLabels: function(e) {
						var t,
							o,
							n = [];
						for (t = 0, o = e.length; t < o; ++t)
							n.push(this.tickFormatFunction(b(e[t].value), t, e));
						return n;
					},
					getPixelForOffset: function(e) {
						var t = this,
							o = t._horizontal ? t.width : t.height,
							n = t._horizontal ? t.left : t.top,
							r = s(t._table, "time", e, "pos");
						return (
							n +
							(o * (t._offsets.left + r)) / (t._offsets.left + 1 + t._offsets.right)
						);
					},
					getPixelForValue: function(e, t, o) {
						var n = this,
							r = null;
						if (
							(void 0 !== t && void 0 !== o && (r = n._timestamps.datasets[o][t]),
							null === r && (r = d(e, n)),
							null !== r)
						)
							return n.getPixelForOffset(r);
					},
					getPixelForTick: function(e) {
						var t = this.getTicks();
						return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null;
					},
					getValueForPixel: function(e) {
						var t = this,
							o = t._horizontal ? t.width : t.height,
							n = t._horizontal ? t.left : t.top,
							r =
								(o ? (e - n) / o : 0) * (t._offsets.left + 1 + t._offsets.left) -
								t._offsets.right,
							a = s(t._table, "pos", r, "time");
						return b(a);
					},
					getLabelWidth: function(e) {
						var t = this,
							o = t.options.ticks,
							n = t.ctx.measureText(e).width,
							r = _.toRadians(o.maxRotation),
							a = Math.cos(r),
							i = Math.sin(r);
						return n * a + _.valueOrDefault(o.fontSize, y.global.defaultFontSize) * i;
					},
					getLabelCapacity: function(e) {
						var t = this,
							o = t.options.time.displayFormats.millisecond,
							n = t.tickFormatFunction(b(e), 0, [], o),
							r = t.getLabelWidth(n),
							a = t.isHorizontal() ? t.width : t.height,
							i = Math.floor(a / r);
						return i > 0 ? i : 1;
					}
				});
			e.scaleService.registerScaleType("time", o, t);
		};
	},
	"./node_modules/chartjs-color-string/color-string.js": function(e, t, o) {
		function n(e) {
			if (e) {
				var t = /^#([a-fA-F0-9]{3})$/i,
					o = /^#([a-fA-F0-9]{6})$/i,
					n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
					r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
					a = /(\w+)/,
					i = [0, 0, 0],
					s = 1,
					l = e.match(t);
				if (l) {
					l = l[1];
					for (var d = 0; d < i.length; d++) i[d] = parseInt(l[d] + l[d], 16);
				} else if ((l = e.match(o))) {
					l = l[1];
					for (var d = 0; d < i.length; d++)
						i[d] = parseInt(l.slice(2 * d, 2 * d + 2), 16);
				} else if ((l = e.match(n))) {
					for (var d = 0; d < i.length; d++) i[d] = parseInt(l[d + 1]);
					s = parseFloat(l[4]);
				} else if ((l = e.match(r))) {
					for (var d = 0; d < i.length; d++)
						i[d] = Math.round(2.55 * parseFloat(l[d + 1]));
					s = parseFloat(l[4]);
				} else if ((l = e.match(a))) {
					if ("transparent" == l[1]) return [0, 0, 0, 0];
					if (!(i = _[l[1]])) return;
				}
				for (var d = 0; d < i.length; d++) i[d] = b(i[d], 0, 255);
				return (s = s || 0 == s ? b(s, 0, 1) : 1), (i[3] = s), i;
			}
		}
		function r(e) {
			if (e) {
				var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
					o = e.match(t);
				if (o) {
					var n = parseFloat(o[4]);
					return [
						b(parseInt(o[1]), 0, 360),
						b(parseFloat(o[2]), 0, 100),
						b(parseFloat(o[3]), 0, 100),
						b(isNaN(n) ? 1 : n, 0, 1)
					];
				}
			}
		}
		function a(e) {
			if (e) {
				var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
					o = e.match(t);
				if (o) {
					var n = parseFloat(o[4]);
					return [
						b(parseInt(o[1]), 0, 360),
						b(parseFloat(o[2]), 0, 100),
						b(parseFloat(o[3]), 0, 100),
						b(isNaN(n) ? 1 : n, 0, 1)
					];
				}
			}
		}
		function i(e) {
			var t = n(e);
			return t && t.slice(0, 3);
		}
		function s(e) {
			var t = r(e);
			return t && t.slice(0, 3);
		}
		function l(e) {
			var t = n(e);
			return t ? t[3] : (t = r(e)) ? t[3] : (t = a(e)) ? t[3] : void 0;
		}
		function d(e) {
			return "#" + y(e[0]) + y(e[1]) + y(e[2]);
		}
		function u(e, t) {
			return t < 1 || (e[3] && e[3] < 1)
				? c(e, t)
				: "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
		}
		function c(e, t) {
			return (
				void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
				"rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
			);
		}
		function h(e, t) {
			return t < 1 || (e[3] && e[3] < 1)
				? f(e, t)
				: "rgb(" +
						Math.round((e[0] / 255) * 100) +
						"%, " +
						Math.round((e[1] / 255) * 100) +
						"%, " +
						Math.round((e[2] / 255) * 100) +
						"%)";
		}
		function f(e, t) {
			return (
				"rgba(" +
				Math.round((e[0] / 255) * 100) +
				"%, " +
				Math.round((e[1] / 255) * 100) +
				"%, " +
				Math.round((e[2] / 255) * 100) +
				"%, " +
				(t || e[3] || 1) +
				")"
			);
		}
		function p(e, t) {
			return t < 1 || (e[3] && e[3] < 1)
				? m(e, t)
				: "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
		}
		function m(e, t) {
			return (
				void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
				"hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
			);
		}
		function g(e, t) {
			return (
				void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
				"hwb(" +
					e[0] +
					", " +
					e[1] +
					"%, " +
					e[2] +
					"%" +
					(void 0 !== t && 1 !== t ? ", " + t : "") +
					")"
			);
		}
		function v(e) {
			return x[e.slice(0, 3)];
		}
		function b(e, t, o) {
			return Math.min(Math.max(t, e), o);
		}
		function y(e) {
			var t = e.toString(16).toUpperCase();
			return t.length < 2 ? "0" + t : t;
		}
		var _ = o("./node_modules/color-name/index.js");
		e.exports = {
			getRgba: n,
			getHsla: r,
			getRgb: i,
			getHsl: s,
			getHwb: a,
			getAlpha: l,
			hexString: d,
			rgbString: u,
			rgbaString: c,
			percentString: h,
			percentaString: f,
			hslString: p,
			hslaString: m,
			hwbString: g,
			keyword: v
		};
		var x = {};
		for (var j in _) x[_[j]] = j;
	},
	"./node_modules/chartjs-color/index.js": function(e, t, o) {
		var n = o("./node_modules/chartjs-color/node_modules/color-convert/index.js"),
			r = o("./node_modules/chartjs-color-string/color-string.js"),
			a = function(e) {
				if (e instanceof a) return e;
				if (!(this instanceof a)) return new a(e);
				(this.valid = !1),
					(this.values = {
						rgb: [0, 0, 0],
						hsl: [0, 0, 0],
						hsv: [0, 0, 0],
						hwb: [0, 0, 0],
						cmyk: [0, 0, 0, 0],
						alpha: 1
					});
				var t;
				"string" == typeof e
					? ((t = r.getRgba(e)),
					  t
							? this.setValues("rgb", t)
							: (t = r.getHsla(e))
								? this.setValues("hsl", t)
								: (t = r.getHwb(e)) && this.setValues("hwb", t))
					: "object" == typeof e &&
					  ((t = e),
					  void 0 !== t.r || void 0 !== t.red
							? this.setValues("rgb", t)
							: void 0 !== t.l || void 0 !== t.lightness
								? this.setValues("hsl", t)
								: void 0 !== t.v || void 0 !== t.value
									? this.setValues("hsv", t)
									: void 0 !== t.w || void 0 !== t.whiteness
										? this.setValues("hwb", t)
										: (void 0 === t.c && void 0 === t.cyan) ||
										  this.setValues("cmyk", t));
			};
		(a.prototype = {
			isValid: function() {
				return this.valid;
			},
			rgb: function() {
				return this.setSpace("rgb", arguments);
			},
			hsl: function() {
				return this.setSpace("hsl", arguments);
			},
			hsv: function() {
				return this.setSpace("hsv", arguments);
			},
			hwb: function() {
				return this.setSpace("hwb", arguments);
			},
			cmyk: function() {
				return this.setSpace("cmyk", arguments);
			},
			rgbArray: function() {
				return this.values.rgb;
			},
			hslArray: function() {
				return this.values.hsl;
			},
			hsvArray: function() {
				return this.values.hsv;
			},
			hwbArray: function() {
				var e = this.values;
				return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb;
			},
			cmykArray: function() {
				return this.values.cmyk;
			},
			rgbaArray: function() {
				var e = this.values;
				return e.rgb.concat([e.alpha]);
			},
			hslaArray: function() {
				var e = this.values;
				return e.hsl.concat([e.alpha]);
			},
			alpha: function(e) {
				return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this);
			},
			red: function(e) {
				return this.setChannel("rgb", 0, e);
			},
			green: function(e) {
				return this.setChannel("rgb", 1, e);
			},
			blue: function(e) {
				return this.setChannel("rgb", 2, e);
			},
			hue: function(e) {
				return e && ((e %= 360), (e = e < 0 ? 360 + e : e)), this.setChannel("hsl", 0, e);
			},
			saturation: function(e) {
				return this.setChannel("hsl", 1, e);
			},
			lightness: function(e) {
				return this.setChannel("hsl", 2, e);
			},
			saturationv: function(e) {
				return this.setChannel("hsv", 1, e);
			},
			whiteness: function(e) {
				return this.setChannel("hwb", 1, e);
			},
			blackness: function(e) {
				return this.setChannel("hwb", 2, e);
			},
			value: function(e) {
				return this.setChannel("hsv", 2, e);
			},
			cyan: function(e) {
				return this.setChannel("cmyk", 0, e);
			},
			magenta: function(e) {
				return this.setChannel("cmyk", 1, e);
			},
			yellow: function(e) {
				return this.setChannel("cmyk", 2, e);
			},
			black: function(e) {
				return this.setChannel("cmyk", 3, e);
			},
			hexString: function() {
				return r.hexString(this.values.rgb);
			},
			rgbString: function() {
				return r.rgbString(this.values.rgb, this.values.alpha);
			},
			rgbaString: function() {
				return r.rgbaString(this.values.rgb, this.values.alpha);
			},
			percentString: function() {
				return r.percentString(this.values.rgb, this.values.alpha);
			},
			hslString: function() {
				return r.hslString(this.values.hsl, this.values.alpha);
			},
			hslaString: function() {
				return r.hslaString(this.values.hsl, this.values.alpha);
			},
			hwbString: function() {
				return r.hwbString(this.values.hwb, this.values.alpha);
			},
			keyword: function() {
				return r.keyword(this.values.rgb, this.values.alpha);
			},
			rgbNumber: function() {
				var e = this.values.rgb;
				return (e[0] << 16) | (e[1] << 8) | e[2];
			},
			luminosity: function() {
				for (var e = this.values.rgb, t = [], o = 0; o < e.length; o++) {
					var n = e[o] / 255;
					t[o] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
				}
				return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
			},
			contrast: function(e) {
				var t = this.luminosity(),
					o = e.luminosity();
				return t > o ? (t + 0.05) / (o + 0.05) : (o + 0.05) / (t + 0.05);
			},
			level: function(e) {
				var t = this.contrast(e);
				return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
			},
			dark: function() {
				var e = this.values.rgb;
				return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
			},
			light: function() {
				return !this.dark();
			},
			negate: function() {
				for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
				return this.setValues("rgb", e), this;
			},
			lighten: function(e) {
				var t = this.values.hsl;
				return (t[2] += t[2] * e), this.setValues("hsl", t), this;
			},
			darken: function(e) {
				var t = this.values.hsl;
				return (t[2] -= t[2] * e), this.setValues("hsl", t), this;
			},
			saturate: function(e) {
				var t = this.values.hsl;
				return (t[1] += t[1] * e), this.setValues("hsl", t), this;
			},
			desaturate: function(e) {
				var t = this.values.hsl;
				return (t[1] -= t[1] * e), this.setValues("hsl", t), this;
			},
			whiten: function(e) {
				var t = this.values.hwb;
				return (t[1] += t[1] * e), this.setValues("hwb", t), this;
			},
			blacken: function(e) {
				var t = this.values.hwb;
				return (t[2] += t[2] * e), this.setValues("hwb", t), this;
			},
			greyscale: function() {
				var e = this.values.rgb,
					t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
				return this.setValues("rgb", [t, t, t]), this;
			},
			clearer: function(e) {
				var t = this.values.alpha;
				return this.setValues("alpha", t - t * e), this;
			},
			opaquer: function(e) {
				var t = this.values.alpha;
				return this.setValues("alpha", t + t * e), this;
			},
			rotate: function(e) {
				var t = this.values.hsl,
					o = (t[0] + e) % 360;
				return (t[0] = o < 0 ? 360 + o : o), this.setValues("hsl", t), this;
			},
			mix: function(e, t) {
				var o = this,
					n = e,
					r = void 0 === t ? 0.5 : t,
					a = 2 * r - 1,
					i = o.alpha() - n.alpha(),
					s = ((a * i == -1 ? a : (a + i) / (1 + a * i)) + 1) / 2,
					l = 1 - s;
				return this.rgb(
					s * o.red() + l * n.red(),
					s * o.green() + l * n.green(),
					s * o.blue() + l * n.blue()
				).alpha(o.alpha() * r + n.alpha() * (1 - r));
			},
			toJSON: function() {
				return this.rgb();
			},
			clone: function() {
				var e,
					t,
					o = new a(),
					n = this.values,
					r = o.values;
				for (var i in n)
					n.hasOwnProperty(i) &&
						((e = n[i]),
						(t = {}.toString.call(e)),
						"[object Array]" === t
							? (r[i] = e.slice(0))
							: "[object Number]" === t
								? (r[i] = e)
								: console.error("unexpected color value:", e));
				return o;
			}
		}),
			(a.prototype.spaces = {
				rgb: ["red", "green", "blue"],
				hsl: ["hue", "saturation", "lightness"],
				hsv: ["hue", "saturation", "value"],
				hwb: ["hue", "whiteness", "blackness"],
				cmyk: ["cyan", "magenta", "yellow", "black"]
			}),
			(a.prototype.maxes = {
				rgb: [255, 255, 255],
				hsl: [360, 100, 100],
				hsv: [360, 100, 100],
				hwb: [360, 100, 100],
				cmyk: [100, 100, 100, 100]
			}),
			(a.prototype.getValues = function(e) {
				for (var t = this.values, o = {}, n = 0; n < e.length; n++)
					o[e.charAt(n)] = t[e][n];
				return 1 !== t.alpha && (o.a = t.alpha), o;
			}),
			(a.prototype.setValues = function(e, t) {
				var o,
					r = this.values,
					a = this.spaces,
					i = this.maxes,
					s = 1;
				if (((this.valid = !0), "alpha" === e)) s = t;
				else if (t.length) (r[e] = t.slice(0, e.length)), (s = t[e.length]);
				else if (void 0 !== t[e.charAt(0)]) {
					for (o = 0; o < e.length; o++) r[e][o] = t[e.charAt(o)];
					s = t.a;
				} else if (void 0 !== t[a[e][0]]) {
					var l = a[e];
					for (o = 0; o < e.length; o++) r[e][o] = t[l[o]];
					s = t.alpha;
				}
				if (
					((r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s))),
					"alpha" === e)
				)
					return !1;
				var d;
				for (o = 0; o < e.length; o++)
					(d = Math.max(0, Math.min(i[e][o], r[e][o]))), (r[e][o] = Math.round(d));
				for (var u in a) u !== e && (r[u] = n[e][u](r[e]));
				return !0;
			}),
			(a.prototype.setSpace = function(e, t) {
				var o = t[0];
				return void 0 === o
					? this.getValues(e)
					: ("number" == typeof o && (o = Array.prototype.slice.call(t)),
					  this.setValues(e, o),
					  this);
			}),
			(a.prototype.setChannel = function(e, t, o) {
				var n = this.values[e];
				return void 0 === o
					? n[t]
					: o === n[t]
						? this
						: ((n[t] = o), this.setValues(e, n), this);
			}),
			"undefined" != typeof window && (window.Color = a),
			(e.exports = a);
	},
	"./node_modules/chartjs-color/node_modules/color-convert/conversions.js": function(e, t) {
		function o(e) {
			var t,
				o,
				n,
				r = e[0] / 255,
				a = e[1] / 255,
				i = e[2] / 255,
				s = Math.min(r, a, i),
				l = Math.max(r, a, i),
				d = l - s;
			return (
				l == s
					? (t = 0)
					: r == l
						? (t = (a - i) / d)
						: a == l
							? (t = 2 + (i - r) / d)
							: i == l && (t = 4 + (r - a) / d),
				(t = Math.min(60 * t, 360)),
				t < 0 && (t += 360),
				(n = (s + l) / 2),
				(o = l == s ? 0 : n <= 0.5 ? d / (l + s) : d / (2 - l - s)),
				[t, 100 * o, 100 * n]
			);
		}
		function n(e) {
			var t,
				o,
				n,
				r = e[0],
				a = e[1],
				i = e[2],
				s = Math.min(r, a, i),
				l = Math.max(r, a, i),
				d = l - s;
			return (
				(o = 0 == l ? 0 : ((d / l) * 1e3) / 10),
				l == s
					? (t = 0)
					: r == l
						? (t = (a - i) / d)
						: a == l
							? (t = 2 + (i - r) / d)
							: i == l && (t = 4 + (r - a) / d),
				(t = Math.min(60 * t, 360)),
				t < 0 && (t += 360),
				(n = ((l / 255) * 1e3) / 10),
				[t, o, n]
			);
		}
		function a(e) {
			var t = e[0],
				n = e[1],
				r = e[2],
				a = o(e)[0],
				i = (1 / 255) * Math.min(t, Math.min(n, r)),
				r = 1 - (1 / 255) * Math.max(t, Math.max(n, r));
			return [a, 100 * i, 100 * r];
		}
		function i(e) {
			var t,
				o,
				n,
				r,
				a = e[0] / 255,
				i = e[1] / 255,
				s = e[2] / 255;
			return (
				(r = Math.min(1 - a, 1 - i, 1 - s)),
				(t = (1 - a - r) / (1 - r) || 0),
				(o = (1 - i - r) / (1 - r) || 0),
				(n = (1 - s - r) / (1 - r) || 0),
				[100 * t, 100 * o, 100 * n, 100 * r]
			);
		}
		function s(e) {
			return $[JSON.stringify(e)];
		}
		function l(e) {
			var t = e[0] / 255,
				o = e[1] / 255,
				n = e[2] / 255;
			return (
				(t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
				(o = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92),
				(n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92),
				[
					100 * (0.4124 * t + 0.3576 * o + 0.1805 * n),
					100 * (0.2126 * t + 0.7152 * o + 0.0722 * n),
					100 * (0.0193 * t + 0.1192 * o + 0.9505 * n)
				]
			);
		}
		function d(e) {
			var t,
				o,
				n,
				r = l(e),
				a = r[0],
				i = r[1],
				s = r[2];
			return (
				(a /= 95.047),
				(i /= 100),
				(s /= 108.883),
				(a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
				(i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
				(s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
				(t = 116 * i - 16),
				(o = 500 * (a - i)),
				(n = 200 * (i - s)),
				[t, o, n]
			);
		}
		function u(e) {
			return z(d(e));
		}
		function c(e) {
			var t,
				o,
				n,
				r,
				a,
				i = e[0] / 360,
				s = e[1] / 100,
				l = e[2] / 100;
			if (0 == s) return (a = 255 * l), [a, a, a];
			(o = l < 0.5 ? l * (1 + s) : l + s - l * s), (t = 2 * l - o), (r = [0, 0, 0]);
			for (var d = 0; d < 3; d++)
				(n = i + (1 / 3) * -(d - 1)),
					n < 0 && n++,
					n > 1 && n--,
					(a =
						6 * n < 1
							? t + 6 * (o - t) * n
							: 2 * n < 1
								? o
								: 3 * n < 2
									? t + (o - t) * (2 / 3 - n) * 6
									: t),
					(r[d] = 255 * a);
			return r;
		}
		function h(e) {
			var t,
				o,
				n = e[0],
				r = e[1] / 100,
				a = e[2] / 100;
			return 0 === a
				? [0, 0, 0]
				: ((a *= 2),
				  (r *= a <= 1 ? a : 2 - a),
				  (o = (a + r) / 2),
				  (t = (2 * r) / (a + r)),
				  [n, 100 * t, 100 * o]);
		}
		function f(e) {
			return a(c(e));
		}
		function p(e) {
			return i(c(e));
		}
		function m(e) {
			return s(c(e));
		}
		function v(e) {
			var t = e[0] / 60,
				o = e[1] / 100,
				n = e[2] / 100,
				r = Math.floor(t) % 6,
				a = t - Math.floor(t),
				i = 255 * n * (1 - o),
				s = 255 * n * (1 - o * a),
				l = 255 * n * (1 - o * (1 - a)),
				n = 255 * n;
			switch (r) {
				case 0:
					return [n, l, i];
				case 1:
					return [s, n, i];
				case 2:
					return [i, n, l];
				case 3:
					return [i, s, n];
				case 4:
					return [l, i, n];
				case 5:
					return [n, i, s];
			}
		}
		function y(e) {
			var t,
				o,
				n = e[0],
				r = e[1] / 100,
				a = e[2] / 100;
			return (
				(o = (2 - r) * a),
				(t = r * a),
				(t /= o <= 1 ? o : 2 - o),
				(t = t || 0),
				(o /= 2),
				[n, 100 * t, 100 * o]
			);
		}
		function _(e) {
			return a(v(e));
		}
		function x(e) {
			return i(v(e));
		}
		function j(e) {
			return s(v(e));
		}
		function k(e) {
			var t,
				o,
				n,
				a,
				i = e[0] / 360,
				s = e[1] / 100,
				l = e[2] / 100,
				d = s + l;
			switch (
				(d > 1 && ((s /= d), (l /= d)),
				(t = Math.floor(6 * i)),
				(o = 1 - l),
				(n = 6 * i - t),
				0 != (1 & t) && (n = 1 - n),
				(a = s + n * (o - s)),
				t)
			) {
				default:
				case 6:
				case 0:
					(r = o), (g = a), (b = s);
					break;
				case 1:
					(r = a), (g = o), (b = s);
					break;
				case 2:
					(r = s), (g = o), (b = a);
					break;
				case 3:
					(r = s), (g = a), (b = o);
					break;
				case 4:
					(r = a), (g = s), (b = o);
					break;
				case 5:
					(r = o), (g = s), (b = a);
			}
			return [255 * r, 255 * g, 255 * b];
		}
		function w(e) {
			return o(k(e));
		}
		function C(e) {
			return n(k(e));
		}
		function M(e) {
			return i(k(e));
		}
		function S(e) {
			return s(k(e));
		}
		function A(e) {
			var t,
				o,
				n,
				r = e[0] / 100,
				a = e[1] / 100,
				i = e[2] / 100,
				s = e[3] / 100;
			return (
				(t = 1 - Math.min(1, r * (1 - s) + s)),
				(o = 1 - Math.min(1, a * (1 - s) + s)),
				(n = 1 - Math.min(1, i * (1 - s) + s)),
				[255 * t, 255 * o, 255 * n]
			);
		}
		function I(e) {
			return o(A(e));
		}
		function D(e) {
			return n(A(e));
		}
		function P(e) {
			return a(A(e));
		}
		function O(e) {
			return s(A(e));
		}
		function T(e) {
			var t,
				o,
				n,
				r = e[0] / 100,
				a = e[1] / 100,
				i = e[2] / 100;
			return (
				(t = 3.2406 * r + -1.5372 * a + -0.4986 * i),
				(o = -0.9689 * r + 1.8758 * a + 0.0415 * i),
				(n = 0.0557 * r + -0.204 * a + 1.057 * i),
				(t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : (t *= 12.92)),
				(o = o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o *= 12.92)),
				(n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)),
				(t = Math.min(Math.max(0, t), 1)),
				(o = Math.min(Math.max(0, o), 1)),
				(n = Math.min(Math.max(0, n), 1)),
				[255 * t, 255 * o, 255 * n]
			);
		}
		function F(e) {
			var t,
				o,
				n,
				r = e[0],
				a = e[1],
				i = e[2];
			return (
				(r /= 95.047),
				(a /= 100),
				(i /= 108.883),
				(r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
				(a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
				(i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
				(t = 116 * a - 16),
				(o = 500 * (r - a)),
				(n = 200 * (a - i)),
				[t, o, n]
			);
		}
		function L(e) {
			return z(F(e));
		}
		function R(e) {
			var t,
				o,
				n,
				r,
				a = e[0],
				i = e[1],
				s = e[2];
			return (
				a <= 8
					? ((o = (100 * a) / 903.3), (r = (o / 100) * 7.787 + 16 / 116))
					: ((o = 100 * Math.pow((a + 16) / 116, 3)), (r = Math.pow(o / 100, 1 / 3))),
				(t =
					t / 95.047 <= 0.008856
						? (t = (95.047 * (i / 500 + r - 16 / 116)) / 7.787)
						: 95.047 * Math.pow(i / 500 + r, 3)),
				(n =
					n / 108.883 <= 0.008859
						? (n = (108.883 * (r - s / 200 - 16 / 116)) / 7.787)
						: 108.883 * Math.pow(r - s / 200, 3)),
				[t, o, n]
			);
		}
		function z(e) {
			var t,
				o,
				n,
				r = e[0],
				a = e[1],
				i = e[2];
			return (
				(t = Math.atan2(i, a)),
				(o = (360 * t) / 2 / Math.PI),
				o < 0 && (o += 360),
				(n = Math.sqrt(a * a + i * i)),
				[r, n, o]
			);
		}
		function B(e) {
			return T(R(e));
		}
		function W(e) {
			var t,
				o,
				n,
				r = e[0],
				a = e[1],
				i = e[2];
			return (
				(n = (i / 360) * 2 * Math.PI),
				(t = a * Math.cos(n)),
				(o = a * Math.sin(n)),
				[r, t, o]
			);
		}
		function N(e) {
			return R(W(e));
		}
		function E(e) {
			return B(W(e));
		}
		function V(e) {
			return X[e];
		}
		function H(e) {
			return o(V(e));
		}
		function q(e) {
			return n(V(e));
		}
		function U(e) {
			return a(V(e));
		}
		function Y(e) {
			return i(V(e));
		}
		function K(e) {
			return d(V(e));
		}
		function G(e) {
			return l(V(e));
		}
		e.exports = {
			rgb2hsl: o,
			rgb2hsv: n,
			rgb2hwb: a,
			rgb2cmyk: i,
			rgb2keyword: s,
			rgb2xyz: l,
			rgb2lab: d,
			rgb2lch: u,
			hsl2rgb: c,
			hsl2hsv: h,
			hsl2hwb: f,
			hsl2cmyk: p,
			hsl2keyword: m,
			hsv2rgb: v,
			hsv2hsl: y,
			hsv2hwb: _,
			hsv2cmyk: x,
			hsv2keyword: j,
			hwb2rgb: k,
			hwb2hsl: w,
			hwb2hsv: C,
			hwb2cmyk: M,
			hwb2keyword: S,
			cmyk2rgb: A,
			cmyk2hsl: I,
			cmyk2hsv: D,
			cmyk2hwb: P,
			cmyk2keyword: O,
			keyword2rgb: V,
			keyword2hsl: H,
			keyword2hsv: q,
			keyword2hwb: U,
			keyword2cmyk: Y,
			keyword2lab: K,
			keyword2xyz: G,
			xyz2rgb: T,
			xyz2lab: F,
			xyz2lch: L,
			lab2xyz: R,
			lab2rgb: B,
			lab2lch: z,
			lch2lab: W,
			lch2xyz: N,
			lch2rgb: E
		};
		var X = {
				aliceblue: [240, 248, 255],
				antiquewhite: [250, 235, 215],
				aqua: [0, 255, 255],
				aquamarine: [127, 255, 212],
				azure: [240, 255, 255],
				beige: [245, 245, 220],
				bisque: [255, 228, 196],
				black: [0, 0, 0],
				blanchedalmond: [255, 235, 205],
				blue: [0, 0, 255],
				blueviolet: [138, 43, 226],
				brown: [165, 42, 42],
				burlywood: [222, 184, 135],
				cadetblue: [95, 158, 160],
				chartreuse: [127, 255, 0],
				chocolate: [210, 105, 30],
				coral: [255, 127, 80],
				cornflowerblue: [100, 149, 237],
				cornsilk: [255, 248, 220],
				crimson: [220, 20, 60],
				cyan: [0, 255, 255],
				darkblue: [0, 0, 139],
				darkcyan: [0, 139, 139],
				darkgoldenrod: [184, 134, 11],
				darkgray: [169, 169, 169],
				darkgreen: [0, 100, 0],
				darkgrey: [169, 169, 169],
				darkkhaki: [189, 183, 107],
				darkmagenta: [139, 0, 139],
				darkolivegreen: [85, 107, 47],
				darkorange: [255, 140, 0],
				darkorchid: [153, 50, 204],
				darkred: [139, 0, 0],
				darksalmon: [233, 150, 122],
				darkseagreen: [143, 188, 143],
				darkslateblue: [72, 61, 139],
				darkslategray: [47, 79, 79],
				darkslategrey: [47, 79, 79],
				darkturquoise: [0, 206, 209],
				darkviolet: [148, 0, 211],
				deeppink: [255, 20, 147],
				deepskyblue: [0, 191, 255],
				dimgray: [105, 105, 105],
				dimgrey: [105, 105, 105],
				dodgerblue: [30, 144, 255],
				firebrick: [178, 34, 34],
				floralwhite: [255, 250, 240],
				forestgreen: [34, 139, 34],
				fuchsia: [255, 0, 255],
				gainsboro: [220, 220, 220],
				ghostwhite: [248, 248, 255],
				gold: [255, 215, 0],
				goldenrod: [218, 165, 32],
				gray: [128, 128, 128],
				green: [0, 128, 0],
				greenyellow: [173, 255, 47],
				grey: [128, 128, 128],
				honeydew: [240, 255, 240],
				hotpink: [255, 105, 180],
				indianred: [205, 92, 92],
				indigo: [75, 0, 130],
				ivory: [255, 255, 240],
				khaki: [240, 230, 140],
				lavender: [230, 230, 250],
				lavenderblush: [255, 240, 245],
				lawngreen: [124, 252, 0],
				lemonchiffon: [255, 250, 205],
				lightblue: [173, 216, 230],
				lightcoral: [240, 128, 128],
				lightcyan: [224, 255, 255],
				lightgoldenrodyellow: [250, 250, 210],
				lightgray: [211, 211, 211],
				lightgreen: [144, 238, 144],
				lightgrey: [211, 211, 211],
				lightpink: [255, 182, 193],
				lightsalmon: [255, 160, 122],
				lightseagreen: [32, 178, 170],
				lightskyblue: [135, 206, 250],
				lightslategray: [119, 136, 153],
				lightslategrey: [119, 136, 153],
				lightsteelblue: [176, 196, 222],
				lightyellow: [255, 255, 224],
				lime: [0, 255, 0],
				limegreen: [50, 205, 50],
				linen: [250, 240, 230],
				magenta: [255, 0, 255],
				maroon: [128, 0, 0],
				mediumaquamarine: [102, 205, 170],
				mediumblue: [0, 0, 205],
				mediumorchid: [186, 85, 211],
				mediumpurple: [147, 112, 219],
				mediumseagreen: [60, 179, 113],
				mediumslateblue: [123, 104, 238],
				mediumspringgreen: [0, 250, 154],
				mediumturquoise: [72, 209, 204],
				mediumvioletred: [199, 21, 133],
				midnightblue: [25, 25, 112],
				mintcream: [245, 255, 250],
				mistyrose: [255, 228, 225],
				moccasin: [255, 228, 181],
				navajowhite: [255, 222, 173],
				navy: [0, 0, 128],
				oldlace: [253, 245, 230],
				olive: [128, 128, 0],
				olivedrab: [107, 142, 35],
				orange: [255, 165, 0],
				orangered: [255, 69, 0],
				orchid: [218, 112, 214],
				palegoldenrod: [238, 232, 170],
				palegreen: [152, 251, 152],
				paleturquoise: [175, 238, 238],
				palevioletred: [219, 112, 147],
				papayawhip: [255, 239, 213],
				peachpuff: [255, 218, 185],
				peru: [205, 133, 63],
				pink: [255, 192, 203],
				plum: [221, 160, 221],
				powderblue: [176, 224, 230],
				purple: [128, 0, 128],
				rebeccapurple: [102, 51, 153],
				red: [255, 0, 0],
				rosybrown: [188, 143, 143],
				royalblue: [65, 105, 225],
				saddlebrown: [139, 69, 19],
				salmon: [250, 128, 114],
				sandybrown: [244, 164, 96],
				seagreen: [46, 139, 87],
				seashell: [255, 245, 238],
				sienna: [160, 82, 45],
				silver: [192, 192, 192],
				skyblue: [135, 206, 235],
				slateblue: [106, 90, 205],
				slategray: [112, 128, 144],
				slategrey: [112, 128, 144],
				snow: [255, 250, 250],
				springgreen: [0, 255, 127],
				steelblue: [70, 130, 180],
				tan: [210, 180, 140],
				teal: [0, 128, 128],
				thistle: [216, 191, 216],
				tomato: [255, 99, 71],
				turquoise: [64, 224, 208],
				violet: [238, 130, 238],
				wheat: [245, 222, 179],
				white: [255, 255, 255],
				whitesmoke: [245, 245, 245],
				yellow: [255, 255, 0],
				yellowgreen: [154, 205, 50]
			},
			$ = {};
		for (var J in X) $[JSON.stringify(X[J])] = J;
	},
	"./node_modules/chartjs-color/node_modules/color-convert/index.js": function(e, t, o) {
		var n = o("./node_modules/chartjs-color/node_modules/color-convert/conversions.js"),
			r = function() {
				return new d();
			};
		for (var a in n) {
			r[a + "Raw"] = (function(e) {
				return function(t) {
					return (
						"number" == typeof t && (t = Array.prototype.slice.call(arguments)), n[e](t)
					);
				};
			})(a);
			var i = /(\w+)2(\w+)/.exec(a),
				s = i[1],
				l = i[2];
			(r[s] = r[s] || {}),
				(r[s][l] = r[a] = (function(e) {
					return function(t) {
						"number" == typeof t && (t = Array.prototype.slice.call(arguments));
						var o = n[e](t);
						if ("string" == typeof o || void 0 === o) return o;
						for (var r = 0; r < o.length; r++) o[r] = Math.round(o[r]);
						return o;
					};
				})(a));
		}
		var d = function() {
			this.convs = {};
		};
		(d.prototype.routeSpace = function(e, t) {
			var o = t[0];
			return void 0 === o
				? this.getValues(e)
				: ("number" == typeof o && (o = Array.prototype.slice.call(t)),
				  this.setValues(e, o));
		}),
			(d.prototype.setValues = function(e, t) {
				return (this.space = e), (this.convs = {}), (this.convs[e] = t), this;
			}),
			(d.prototype.getValues = function(e) {
				var t = this.convs[e];
				if (!t) {
					var o = this.space,
						n = this.convs[o];
					(t = r[o][e](n)), (this.convs[e] = t);
				}
				return t;
			}),
			["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
				d.prototype[e] = function(t) {
					return this.routeSpace(e, arguments);
				};
			}),
			(e.exports = r);
	},
	"./node_modules/color-name/index.js": function(e, t, o) {
		"use strict";
		e.exports = {
			aliceblue: [240, 248, 255],
			antiquewhite: [250, 235, 215],
			aqua: [0, 255, 255],
			aquamarine: [127, 255, 212],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			bisque: [255, 228, 196],
			black: [0, 0, 0],
			blanchedalmond: [255, 235, 205],
			blue: [0, 0, 255],
			blueviolet: [138, 43, 226],
			brown: [165, 42, 42],
			burlywood: [222, 184, 135],
			cadetblue: [95, 158, 160],
			chartreuse: [127, 255, 0],
			chocolate: [210, 105, 30],
			coral: [255, 127, 80],
			cornflowerblue: [100, 149, 237],
			cornsilk: [255, 248, 220],
			crimson: [220, 20, 60],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgoldenrod: [184, 134, 11],
			darkgray: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkgrey: [169, 169, 169],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkseagreen: [143, 188, 143],
			darkslateblue: [72, 61, 139],
			darkslategray: [47, 79, 79],
			darkslategrey: [47, 79, 79],
			darkturquoise: [0, 206, 209],
			darkviolet: [148, 0, 211],
			deeppink: [255, 20, 147],
			deepskyblue: [0, 191, 255],
			dimgray: [105, 105, 105],
			dimgrey: [105, 105, 105],
			dodgerblue: [30, 144, 255],
			firebrick: [178, 34, 34],
			floralwhite: [255, 250, 240],
			forestgreen: [34, 139, 34],
			fuchsia: [255, 0, 255],
			gainsboro: [220, 220, 220],
			ghostwhite: [248, 248, 255],
			gold: [255, 215, 0],
			goldenrod: [218, 165, 32],
			gray: [128, 128, 128],
			green: [0, 128, 0],
			greenyellow: [173, 255, 47],
			grey: [128, 128, 128],
			honeydew: [240, 255, 240],
			hotpink: [255, 105, 180],
			indianred: [205, 92, 92],
			indigo: [75, 0, 130],
			ivory: [255, 255, 240],
			khaki: [240, 230, 140],
			lavender: [230, 230, 250],
			lavenderblush: [255, 240, 245],
			lawngreen: [124, 252, 0],
			lemonchiffon: [255, 250, 205],
			lightblue: [173, 216, 230],
			lightcoral: [240, 128, 128],
			lightcyan: [224, 255, 255],
			lightgoldenrodyellow: [250, 250, 210],
			lightgray: [211, 211, 211],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightsalmon: [255, 160, 122],
			lightseagreen: [32, 178, 170],
			lightskyblue: [135, 206, 250],
			lightslategray: [119, 136, 153],
			lightslategrey: [119, 136, 153],
			lightsteelblue: [176, 196, 222],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			limegreen: [50, 205, 50],
			linen: [250, 240, 230],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			mediumaquamarine: [102, 205, 170],
			mediumblue: [0, 0, 205],
			mediumorchid: [186, 85, 211],
			mediumpurple: [147, 112, 219],
			mediumseagreen: [60, 179, 113],
			mediumslateblue: [123, 104, 238],
			mediumspringgreen: [0, 250, 154],
			mediumturquoise: [72, 209, 204],
			mediumvioletred: [199, 21, 133],
			midnightblue: [25, 25, 112],
			mintcream: [245, 255, 250],
			mistyrose: [255, 228, 225],
			moccasin: [255, 228, 181],
			navajowhite: [255, 222, 173],
			navy: [0, 0, 128],
			oldlace: [253, 245, 230],
			olive: [128, 128, 0],
			olivedrab: [107, 142, 35],
			orange: [255, 165, 0],
			orangered: [255, 69, 0],
			orchid: [218, 112, 214],
			palegoldenrod: [238, 232, 170],
			palegreen: [152, 251, 152],
			paleturquoise: [175, 238, 238],
			palevioletred: [219, 112, 147],
			papayawhip: [255, 239, 213],
			peachpuff: [255, 218, 185],
			peru: [205, 133, 63],
			pink: [255, 192, 203],
			plum: [221, 160, 221],
			powderblue: [176, 224, 230],
			purple: [128, 0, 128],
			rebeccapurple: [102, 51, 153],
			red: [255, 0, 0],
			rosybrown: [188, 143, 143],
			royalblue: [65, 105, 225],
			saddlebrown: [139, 69, 19],
			salmon: [250, 128, 114],
			sandybrown: [244, 164, 96],
			seagreen: [46, 139, 87],
			seashell: [255, 245, 238],
			sienna: [160, 82, 45],
			silver: [192, 192, 192],
			skyblue: [135, 206, 235],
			slateblue: [106, 90, 205],
			slategray: [112, 128, 144],
			slategrey: [112, 128, 144],
			snow: [255, 250, 250],
			springgreen: [0, 255, 127],
			steelblue: [70, 130, 180],
			tan: [210, 180, 140],
			teal: [0, 128, 128],
			thistle: [216, 191, 216],
			tomato: [255, 99, 71],
			turquoise: [64, 224, 208],
			violet: [238, 130, 238],
			wheat: [245, 222, 179],
			white: [255, 255, 255],
			whitesmoke: [245, 245, 245],
			yellow: [255, 255, 0],
			yellowgreen: [154, 205, 50]
		};
	},
	"./node_modules/lodash/_DataView.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = o("./node_modules/lodash/_root.js"),
			a = n(r, "DataView");
		e.exports = a;
	},
	"./node_modules/lodash/_Hash.js": function(e, t, o) {
		function n(e) {
			var t = -1,
				o = null == e ? 0 : e.length;
			for (this.clear(); ++t < o; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		var r = o("./node_modules/lodash/_hashClear.js"),
			a = o("./node_modules/lodash/_hashDelete.js"),
			i = o("./node_modules/lodash/_hashGet.js"),
			s = o("./node_modules/lodash/_hashHas.js"),
			l = o("./node_modules/lodash/_hashSet.js");
		(n.prototype.clear = r),
			(n.prototype.delete = a),
			(n.prototype.get = i),
			(n.prototype.has = s),
			(n.prototype.set = l),
			(e.exports = n);
	},
	"./node_modules/lodash/_ListCache.js": function(e, t, o) {
		function n(e) {
			var t = -1,
				o = null == e ? 0 : e.length;
			for (this.clear(); ++t < o; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		var r = o("./node_modules/lodash/_listCacheClear.js"),
			a = o("./node_modules/lodash/_listCacheDelete.js"),
			i = o("./node_modules/lodash/_listCacheGet.js"),
			s = o("./node_modules/lodash/_listCacheHas.js"),
			l = o("./node_modules/lodash/_listCacheSet.js");
		(n.prototype.clear = r),
			(n.prototype.delete = a),
			(n.prototype.get = i),
			(n.prototype.has = s),
			(n.prototype.set = l),
			(e.exports = n);
	},
	"./node_modules/lodash/_Map.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = o("./node_modules/lodash/_root.js"),
			a = n(r, "Map");
		e.exports = a;
	},
	"./node_modules/lodash/_MapCache.js": function(e, t, o) {
		function n(e) {
			var t = -1,
				o = null == e ? 0 : e.length;
			for (this.clear(); ++t < o; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		var r = o("./node_modules/lodash/_mapCacheClear.js"),
			a = o("./node_modules/lodash/_mapCacheDelete.js"),
			i = o("./node_modules/lodash/_mapCacheGet.js"),
			s = o("./node_modules/lodash/_mapCacheHas.js"),
			l = o("./node_modules/lodash/_mapCacheSet.js");
		(n.prototype.clear = r),
			(n.prototype.delete = a),
			(n.prototype.get = i),
			(n.prototype.has = s),
			(n.prototype.set = l),
			(e.exports = n);
	},
	"./node_modules/lodash/_Promise.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = o("./node_modules/lodash/_root.js"),
			a = n(r, "Promise");
		e.exports = a;
	},
	"./node_modules/lodash/_Set.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = o("./node_modules/lodash/_root.js"),
			a = n(r, "Set");
		e.exports = a;
	},
	"./node_modules/lodash/_SetCache.js": function(e, t, o) {
		function n(e) {
			var t = -1,
				o = null == e ? 0 : e.length;
			for (this.__data__ = new r(); ++t < o; ) this.add(e[t]);
		}
		var r = o("./node_modules/lodash/_MapCache.js"),
			a = o("./node_modules/lodash/_setCacheAdd.js"),
			i = o("./node_modules/lodash/_setCacheHas.js");
		(n.prototype.add = n.prototype.push = a), (n.prototype.has = i), (e.exports = n);
	},
	"./node_modules/lodash/_Stack.js": function(e, t, o) {
		function n(e) {
			var t = (this.__data__ = new r(e));
			this.size = t.size;
		}
		var r = o("./node_modules/lodash/_ListCache.js"),
			a = o("./node_modules/lodash/_stackClear.js"),
			i = o("./node_modules/lodash/_stackDelete.js"),
			s = o("./node_modules/lodash/_stackGet.js"),
			l = o("./node_modules/lodash/_stackHas.js"),
			d = o("./node_modules/lodash/_stackSet.js");
		(n.prototype.clear = a),
			(n.prototype.delete = i),
			(n.prototype.get = s),
			(n.prototype.has = l),
			(n.prototype.set = d),
			(e.exports = n);
	},
	"./node_modules/lodash/_Symbol.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_root.js"),
			r = n.Symbol;
		e.exports = r;
	},
	"./node_modules/lodash/_Uint8Array.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_root.js"),
			r = n.Uint8Array;
		e.exports = r;
	},
	"./node_modules/lodash/_WeakMap.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = o("./node_modules/lodash/_root.js"),
			a = n(r, "WeakMap");
		e.exports = a;
	},
	"./node_modules/lodash/_arrayAggregator.js": function(e, t) {
		function o(e, t, o, n) {
			for (var r = -1, a = null == e ? 0 : e.length; ++r < a; ) {
				var i = e[r];
				t(n, i, o(i), e);
			}
			return n;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_arrayFilter.js": function(e, t) {
		function o(e, t) {
			for (var o = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++o < n; ) {
				var i = e[o];
				t(i, o, e) && (a[r++] = i);
			}
			return a;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_arrayLikeKeys.js": function(e, t, o) {
		function n(e, t) {
			var o = i(e),
				n = !o && a(e),
				u = !o && !n && s(e),
				h = !o && !n && !u && d(e),
				f = o || n || u || h,
				p = f ? r(e.length, String) : [],
				m = p.length;
			for (var g in e)
				(!t && !c.call(e, g)) ||
					(f &&
						("length" == g ||
							(u && ("offset" == g || "parent" == g)) ||
							(h && ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
							l(g, m))) ||
					p.push(g);
			return p;
		}
		var r = o("./node_modules/lodash/_baseTimes.js"),
			a = o("./node_modules/lodash/isArguments.js"),
			i = o("./node_modules/lodash/isArray.js"),
			s = o("./node_modules/lodash/isBuffer.js"),
			l = o("./node_modules/lodash/_isIndex.js"),
			d = o("./node_modules/lodash/isTypedArray.js"),
			u = Object.prototype,
			c = u.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_arrayMap.js": function(e, t) {
		function o(e, t) {
			for (var o = -1, n = null == e ? 0 : e.length, r = Array(n); ++o < n; )
				r[o] = t(e[o], o, e);
			return r;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_arrayPush.js": function(e, t) {
		function o(e, t) {
			for (var o = -1, n = t.length, r = e.length; ++o < n; ) e[r + o] = t[o];
			return e;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_arraySome.js": function(e, t) {
		function o(e, t) {
			for (var o = -1, n = null == e ? 0 : e.length; ++o < n; ) if (t(e[o], o, e)) return !0;
			return !1;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_assocIndexOf.js": function(e, t, o) {
		function n(e, t) {
			for (var o = e.length; o--; ) if (r(e[o][0], t)) return o;
			return -1;
		}
		var r = o("./node_modules/lodash/eq.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseAggregator.js": function(e, t, o) {
		function n(e, t, o, n) {
			return (
				r(e, function(e, r, a) {
					t(n, e, o(e), a);
				}),
				n
			);
		}
		var r = o("./node_modules/lodash/_baseEach.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseAssignValue.js": function(e, t, o) {
		function n(e, t, o) {
			"__proto__" == t && r
				? r(e, t, { configurable: !0, enumerable: !0, value: o, writable: !0 })
				: (e[t] = o);
		}
		var r = o("./node_modules/lodash/_defineProperty.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseEach.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_baseForOwn.js"),
			r = o("./node_modules/lodash/_createBaseEach.js"),
			a = r(n);
		e.exports = a;
	},
	"./node_modules/lodash/_baseFindIndex.js": function(e, t) {
		function o(e, t, o, n) {
			for (var r = e.length, a = o + (n ? 1 : -1); n ? a-- : ++a < r; )
				if (t(e[a], a, e)) return a;
			return -1;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_baseFor.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_createBaseFor.js"),
			r = n();
		e.exports = r;
	},
	"./node_modules/lodash/_baseForOwn.js": function(e, t, o) {
		function n(e, t) {
			return e && r(e, t, a);
		}
		var r = o("./node_modules/lodash/_baseFor.js"),
			a = o("./node_modules/lodash/keys.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseGet.js": function(e, t, o) {
		function n(e, t) {
			t = r(t, e);
			for (var o = 0, n = t.length; null != e && o < n; ) e = e[a(t[o++])];
			return o && o == n ? e : void 0;
		}
		var r = o("./node_modules/lodash/_castPath.js"),
			a = o("./node_modules/lodash/_toKey.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseGetAllKeys.js": function(e, t, o) {
		function n(e, t, o) {
			var n = t(e);
			return a(e) ? n : r(n, o(e));
		}
		var r = o("./node_modules/lodash/_arrayPush.js"),
			a = o("./node_modules/lodash/isArray.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseGetTag.js": function(e, t, o) {
		function n(e) {
			return null == e ? (void 0 === e ? l : s) : d && d in Object(e) ? a(e) : i(e);
		}
		var r = o("./node_modules/lodash/_Symbol.js"),
			a = o("./node_modules/lodash/_getRawTag.js"),
			i = o("./node_modules/lodash/_objectToString.js"),
			s = "[object Null]",
			l = "[object Undefined]",
			d = r ? r.toStringTag : void 0;
		e.exports = n;
	},
	"./node_modules/lodash/_baseHasIn.js": function(e, t) {
		function o(e, t) {
			return null != e && t in Object(e);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_baseIsArguments.js": function(e, t, o) {
		function n(e) {
			return a(e) && r(e) == i;
		}
		var r = o("./node_modules/lodash/_baseGetTag.js"),
			a = o("./node_modules/lodash/isObjectLike.js"),
			i = "[object Arguments]";
		e.exports = n;
	},
	"./node_modules/lodash/_baseIsEqual.js": function(e, t, o) {
		function n(e, t, o, i, s) {
			return (
				e === t ||
				(null == e || null == t || (!a(e) && !a(t))
					? e !== e && t !== t
					: r(e, t, o, i, n, s))
			);
		}
		var r = o("./node_modules/lodash/_baseIsEqualDeep.js"),
			a = o("./node_modules/lodash/isObjectLike.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseIsEqualDeep.js": function(e, t, o) {
		function n(e, t, o, n, g, b) {
			var y = d(e),
				_ = d(t),
				x = y ? p : l(e),
				j = _ ? p : l(t);
			(x = x == f ? m : x), (j = j == f ? m : j);
			var k = x == m,
				w = j == m,
				C = x == j;
			if (C && u(e)) {
				if (!u(t)) return !1;
				(y = !0), (k = !1);
			}
			if (C && !k)
				return b || (b = new r()), y || c(e) ? a(e, t, o, n, g, b) : i(e, t, x, o, n, g, b);
			if (!(o & h)) {
				var M = k && v.call(e, "__wrapped__"),
					S = w && v.call(t, "__wrapped__");
				if (M || S) {
					var A = M ? e.value() : e,
						I = S ? t.value() : t;
					return b || (b = new r()), g(A, I, o, n, b);
				}
			}
			return !!C && (b || (b = new r()), s(e, t, o, n, g, b));
		}
		var r = o("./node_modules/lodash/_Stack.js"),
			a = o("./node_modules/lodash/_equalArrays.js"),
			i = o("./node_modules/lodash/_equalByTag.js"),
			s = o("./node_modules/lodash/_equalObjects.js"),
			l = o("./node_modules/lodash/_getTag.js"),
			d = o("./node_modules/lodash/isArray.js"),
			u = o("./node_modules/lodash/isBuffer.js"),
			c = o("./node_modules/lodash/isTypedArray.js"),
			h = 1,
			f = "[object Arguments]",
			p = "[object Array]",
			m = "[object Object]",
			g = Object.prototype,
			v = g.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_baseIsMatch.js": function(e, t, o) {
		function n(e, t, o, n) {
			var l = o.length,
				d = l,
				u = !n;
			if (null == e) return !d;
			for (e = Object(e); l--; ) {
				var c = o[l];
				if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
			}
			for (; ++l < d; ) {
				c = o[l];
				var h = c[0],
					f = e[h],
					p = c[1];
				if (u && c[2]) {
					if (void 0 === f && !(h in e)) return !1;
				} else {
					var m = new r();
					if (n) var g = n(f, p, h, e, t, m);
					if (!(void 0 === g ? a(p, f, i | s, n, m) : g)) return !1;
				}
			}
			return !0;
		}
		var r = o("./node_modules/lodash/_Stack.js"),
			a = o("./node_modules/lodash/_baseIsEqual.js"),
			i = 1,
			s = 2;
		e.exports = n;
	},
	"./node_modules/lodash/_baseIsNative.js": function(e, t, o) {
		function n(e) {
			return !(!i(e) || a(e)) && (r(e) ? p : d).test(s(e));
		}
		var r = o("./node_modules/lodash/isFunction.js"),
			a = o("./node_modules/lodash/_isMasked.js"),
			i = o("./node_modules/lodash/isObject.js"),
			s = o("./node_modules/lodash/_toSource.js"),
			l = /[\\^$.*+?()[\]{}|]/g,
			d = /^\[object .+?Constructor\]$/,
			u = Function.prototype,
			c = Object.prototype,
			h = u.toString,
			f = c.hasOwnProperty,
			p = RegExp(
				"^" +
					h
						.call(f)
						.replace(l, "\\$&")
						.replace(
							/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
							"$1.*?"
						) +
					"$"
			);
		e.exports = n;
	},
	"./node_modules/lodash/_baseIsTypedArray.js": function(e, t, o) {
		function n(e) {
			return i(e) && a(e.length) && !!s[r(e)];
		}
		var r = o("./node_modules/lodash/_baseGetTag.js"),
			a = o("./node_modules/lodash/isLength.js"),
			i = o("./node_modules/lodash/isObjectLike.js"),
			s = {};
		(s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s[
			"[object Int16Array]"
		] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s[
			"[object Uint8ClampedArray]"
		] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0),
			(s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s[
				"[object Boolean]"
			] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s[
				"[object Function]"
			] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s[
				"[object RegExp]"
			] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1),
			(e.exports = n);
	},
	"./node_modules/lodash/_baseIteratee.js": function(e, t, o) {
		function n(e) {
			return "function" == typeof e
				? e
				: null == e
					? i
					: "object" == typeof e
						? s(e)
							? a(e[0], e[1])
							: r(e)
						: l(e);
		}
		var r = o("./node_modules/lodash/_baseMatches.js"),
			a = o("./node_modules/lodash/_baseMatchesProperty.js"),
			i = o("./node_modules/lodash/identity.js"),
			s = o("./node_modules/lodash/isArray.js"),
			l = o("./node_modules/lodash/property.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseKeys.js": function(e, t, o) {
		function n(e) {
			if (!r(e)) return a(e);
			var t = [];
			for (var o in Object(e)) s.call(e, o) && "constructor" != o && t.push(o);
			return t;
		}
		var r = o("./node_modules/lodash/_isPrototype.js"),
			a = o("./node_modules/lodash/_nativeKeys.js"),
			i = Object.prototype,
			s = i.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_baseMatches.js": function(e, t, o) {
		function n(e) {
			var t = a(e);
			return 1 == t.length && t[0][2]
				? i(t[0][0], t[0][1])
				: function(o) {
						return o === e || r(o, e, t);
				  };
		}
		var r = o("./node_modules/lodash/_baseIsMatch.js"),
			a = o("./node_modules/lodash/_getMatchData.js"),
			i = o("./node_modules/lodash/_matchesStrictComparable.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseMatchesProperty.js": function(e, t, o) {
		function n(e, t) {
			return s(e) && l(t)
				? d(u(e), t)
				: function(o) {
						var n = a(o, e);
						return void 0 === n && n === t ? i(o, e) : r(t, n, c | h);
				  };
		}
		var r = o("./node_modules/lodash/_baseIsEqual.js"),
			a = o("./node_modules/lodash/get.js"),
			i = o("./node_modules/lodash/hasIn.js"),
			s = o("./node_modules/lodash/_isKey.js"),
			l = o("./node_modules/lodash/_isStrictComparable.js"),
			d = o("./node_modules/lodash/_matchesStrictComparable.js"),
			u = o("./node_modules/lodash/_toKey.js"),
			c = 1,
			h = 2;
		e.exports = n;
	},
	"./node_modules/lodash/_baseProperty.js": function(e, t) {
		function o(e) {
			return function(t) {
				return null == t ? void 0 : t[e];
			};
		}
		e.exports = o;
	},
	"./node_modules/lodash/_basePropertyDeep.js": function(e, t, o) {
		function n(e) {
			return function(t) {
				return r(t, e);
			};
		}
		var r = o("./node_modules/lodash/_baseGet.js");
		e.exports = n;
	},
	"./node_modules/lodash/_baseTimes.js": function(e, t) {
		function o(e, t) {
			for (var o = -1, n = Array(e); ++o < e; ) n[o] = t(o);
			return n;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_baseToString.js": function(e, t, o) {
		function n(e) {
			if ("string" == typeof e) return e;
			if (i(e)) return a(e, n) + "";
			if (s(e)) return u ? u.call(e) : "";
			var t = e + "";
			return "0" == t && 1 / e == -l ? "-0" : t;
		}
		var r = o("./node_modules/lodash/_Symbol.js"),
			a = o("./node_modules/lodash/_arrayMap.js"),
			i = o("./node_modules/lodash/isArray.js"),
			s = o("./node_modules/lodash/isSymbol.js"),
			l = 1 / 0,
			d = r ? r.prototype : void 0,
			u = d ? d.toString : void 0;
		e.exports = n;
	},
	"./node_modules/lodash/_baseUnary.js": function(e, t) {
		function o(e) {
			return function(t) {
				return e(t);
			};
		}
		e.exports = o;
	},
	"./node_modules/lodash/_cacheHas.js": function(e, t) {
		function o(e, t) {
			return e.has(t);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_castPath.js": function(e, t, o) {
		function n(e, t) {
			return r(e) ? e : a(e, t) ? [e] : i(s(e));
		}
		var r = o("./node_modules/lodash/isArray.js"),
			a = o("./node_modules/lodash/_isKey.js"),
			i = o("./node_modules/lodash/_stringToPath.js"),
			s = o("./node_modules/lodash/toString.js");
		e.exports = n;
	},
	"./node_modules/lodash/_coreJsData.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_root.js"),
			r = n["__core-js_shared__"];
		e.exports = r;
	},
	"./node_modules/lodash/_createAggregator.js": function(e, t, o) {
		function n(e, t) {
			return function(o, n) {
				var l = s(o) ? r : a,
					d = t ? t() : {};
				return l(o, e, i(n, 2), d);
			};
		}
		var r = o("./node_modules/lodash/_arrayAggregator.js"),
			a = o("./node_modules/lodash/_baseAggregator.js"),
			i = o("./node_modules/lodash/_baseIteratee.js"),
			s = o("./node_modules/lodash/isArray.js");
		e.exports = n;
	},
	"./node_modules/lodash/_createBaseEach.js": function(e, t, o) {
		function n(e, t) {
			return function(o, n) {
				if (null == o) return o;
				if (!r(o)) return e(o, n);
				for (
					var a = o.length, i = t ? a : -1, s = Object(o);
					(t ? i-- : ++i < a) && !1 !== n(s[i], i, s);

				);
				return o;
			};
		}
		var r = o("./node_modules/lodash/isArrayLike.js");
		e.exports = n;
	},
	"./node_modules/lodash/_createBaseFor.js": function(e, t) {
		function o(e) {
			return function(t, o, n) {
				for (var r = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
					var l = i[e ? s : ++r];
					if (!1 === o(a[l], l, a)) break;
				}
				return t;
			};
		}
		e.exports = o;
	},
	"./node_modules/lodash/_createFind.js": function(e, t, o) {
		function n(e) {
			return function(t, o, n) {
				var s = Object(t);
				if (!a(t)) {
					var l = r(o, 3);
					(t = i(t)),
						(o = function(e) {
							return l(s[e], e, s);
						});
				}
				var d = e(t, o, n);
				return d > -1 ? s[l ? t[d] : d] : void 0;
			};
		}
		var r = o("./node_modules/lodash/_baseIteratee.js"),
			a = o("./node_modules/lodash/isArrayLike.js"),
			i = o("./node_modules/lodash/keys.js");
		e.exports = n;
	},
	"./node_modules/lodash/_defineProperty.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = (function() {
				try {
					var e = n(Object, "defineProperty");
					return e({}, "", {}), e;
				} catch (e) {}
			})();
		e.exports = r;
	},
	"./node_modules/lodash/_equalArrays.js": function(e, t, o) {
		function n(e, t, o, n, d, u) {
			var c = o & s,
				h = e.length,
				f = t.length;
			if (h != f && !(c && f > h)) return !1;
			var p = u.get(e);
			if (p && u.get(t)) return p == t;
			var m = -1,
				g = !0,
				v = o & l ? new r() : void 0;
			for (u.set(e, t), u.set(t, e); ++m < h; ) {
				var b = e[m],
					y = t[m];
				if (n) var _ = c ? n(y, b, m, t, e, u) : n(b, y, m, e, t, u);
				if (void 0 !== _) {
					if (_) continue;
					g = !1;
					break;
				}
				if (v) {
					if (
						!a(t, function(e, t) {
							if (!i(v, t) && (b === e || d(b, e, o, n, u))) return v.push(t);
						})
					) {
						g = !1;
						break;
					}
				} else if (b !== y && !d(b, y, o, n, u)) {
					g = !1;
					break;
				}
			}
			return u.delete(e), u.delete(t), g;
		}
		var r = o("./node_modules/lodash/_SetCache.js"),
			a = o("./node_modules/lodash/_arraySome.js"),
			i = o("./node_modules/lodash/_cacheHas.js"),
			s = 1,
			l = 2;
		e.exports = n;
	},
	"./node_modules/lodash/_equalByTag.js": function(e, t, o) {
		function n(e, t, o, n, r, k, C) {
			switch (o) {
				case j:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					(e = e.buffer), (t = t.buffer);
				case x:
					return !(e.byteLength != t.byteLength || !k(new a(e), new a(t)));
				case h:
				case f:
				case g:
					return i(+e, +t);
				case p:
					return e.name == t.name && e.message == t.message;
				case v:
				case y:
					return e == t + "";
				case m:
					var M = l;
				case b:
					var S = n & u;
					if ((M || (M = d), e.size != t.size && !S)) return !1;
					var A = C.get(e);
					if (A) return A == t;
					(n |= c), C.set(e, t);
					var I = s(M(e), M(t), n, r, k, C);
					return C.delete(e), I;
				case _:
					if (w) return w.call(e) == w.call(t);
			}
			return !1;
		}
		var r = o("./node_modules/lodash/_Symbol.js"),
			a = o("./node_modules/lodash/_Uint8Array.js"),
			i = o("./node_modules/lodash/eq.js"),
			s = o("./node_modules/lodash/_equalArrays.js"),
			l = o("./node_modules/lodash/_mapToArray.js"),
			d = o("./node_modules/lodash/_setToArray.js"),
			u = 1,
			c = 2,
			h = "[object Boolean]",
			f = "[object Date]",
			p = "[object Error]",
			m = "[object Map]",
			g = "[object Number]",
			v = "[object RegExp]",
			b = "[object Set]",
			y = "[object String]",
			_ = "[object Symbol]",
			x = "[object ArrayBuffer]",
			j = "[object DataView]",
			k = r ? r.prototype : void 0,
			w = k ? k.valueOf : void 0;
		e.exports = n;
	},
	"./node_modules/lodash/_equalObjects.js": function(e, t, o) {
		function n(e, t, o, n, i, l) {
			var d = o & a,
				u = r(e),
				c = u.length;
			if (c != r(t).length && !d) return !1;
			for (var h = c; h--; ) {
				var f = u[h];
				if (!(d ? f in t : s.call(t, f))) return !1;
			}
			var p = l.get(e);
			if (p && l.get(t)) return p == t;
			var m = !0;
			l.set(e, t), l.set(t, e);
			for (var g = d; ++h < c; ) {
				f = u[h];
				var v = e[f],
					b = t[f];
				if (n) var y = d ? n(b, v, f, t, e, l) : n(v, b, f, e, t, l);
				if (!(void 0 === y ? v === b || i(v, b, o, n, l) : y)) {
					m = !1;
					break;
				}
				g || (g = "constructor" == f);
			}
			if (m && !g) {
				var _ = e.constructor,
					x = t.constructor;
				_ != x &&
					"constructor" in e &&
					"constructor" in t &&
					!(
						"function" == typeof _ &&
						_ instanceof _ &&
						"function" == typeof x &&
						x instanceof x
					) &&
					(m = !1);
			}
			return l.delete(e), l.delete(t), m;
		}
		var r = o("./node_modules/lodash/_getAllKeys.js"),
			a = 1,
			i = Object.prototype,
			s = i.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_freeGlobal.js": function(e, t, o) {
		(function(t) {
			var o = "object" == typeof t && t && t.Object === Object && t;
			e.exports = o;
		}.call(t, o("./node_modules/webpack/buildin/global.js")));
	},
	"./node_modules/lodash/_getAllKeys.js": function(e, t, o) {
		function n(e) {
			return r(e, i, a);
		}
		var r = o("./node_modules/lodash/_baseGetAllKeys.js"),
			a = o("./node_modules/lodash/_getSymbols.js"),
			i = o("./node_modules/lodash/keys.js");
		e.exports = n;
	},
	"./node_modules/lodash/_getMapData.js": function(e, t, o) {
		function n(e, t) {
			var o = e.__data__;
			return r(t) ? o["string" == typeof t ? "string" : "hash"] : o.map;
		}
		var r = o("./node_modules/lodash/_isKeyable.js");
		e.exports = n;
	},
	"./node_modules/lodash/_getMatchData.js": function(e, t, o) {
		function n(e) {
			for (var t = a(e), o = t.length; o--; ) {
				var n = t[o],
					i = e[n];
				t[o] = [n, i, r(i)];
			}
			return t;
		}
		var r = o("./node_modules/lodash/_isStrictComparable.js"),
			a = o("./node_modules/lodash/keys.js");
		e.exports = n;
	},
	"./node_modules/lodash/_getNative.js": function(e, t, o) {
		function n(e, t) {
			var o = a(e, t);
			return r(o) ? o : void 0;
		}
		var r = o("./node_modules/lodash/_baseIsNative.js"),
			a = o("./node_modules/lodash/_getValue.js");
		e.exports = n;
	},
	"./node_modules/lodash/_getRawTag.js": function(e, t, o) {
		function n(e) {
			var t = i.call(e, l),
				o = e[l];
			try {
				e[l] = void 0;
				var n = !0;
			} catch (e) {}
			var r = s.call(e);
			return n && (t ? (e[l] = o) : delete e[l]), r;
		}
		var r = o("./node_modules/lodash/_Symbol.js"),
			a = Object.prototype,
			i = a.hasOwnProperty,
			s = a.toString,
			l = r ? r.toStringTag : void 0;
		e.exports = n;
	},
	"./node_modules/lodash/_getSymbols.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_arrayFilter.js"),
			r = o("./node_modules/lodash/stubArray.js"),
			a = Object.prototype,
			i = a.propertyIsEnumerable,
			s = Object.getOwnPropertySymbols,
			l = s
				? function(e) {
						return null == e
							? []
							: ((e = Object(e)),
							  n(s(e), function(t) {
									return i.call(e, t);
							  }));
				  }
				: r;
		e.exports = l;
	},
	"./node_modules/lodash/_getTag.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_DataView.js"),
			r = o("./node_modules/lodash/_Map.js"),
			a = o("./node_modules/lodash/_Promise.js"),
			i = o("./node_modules/lodash/_Set.js"),
			s = o("./node_modules/lodash/_WeakMap.js"),
			l = o("./node_modules/lodash/_baseGetTag.js"),
			d = o("./node_modules/lodash/_toSource.js"),
			u = d(n),
			c = d(r),
			h = d(a),
			f = d(i),
			p = d(s),
			m = l;
		((n && "[object DataView]" != m(new n(new ArrayBuffer(1)))) ||
			(r && "[object Map]" != m(new r())) ||
			(a && "[object Promise]" != m(a.resolve())) ||
			(i && "[object Set]" != m(new i())) ||
			(s && "[object WeakMap]" != m(new s()))) &&
			(m = function(e) {
				var t = l(e),
					o = "[object Object]" == t ? e.constructor : void 0,
					n = o ? d(o) : "";
				if (n)
					switch (n) {
						case u:
							return "[object DataView]";
						case c:
							return "[object Map]";
						case h:
							return "[object Promise]";
						case f:
							return "[object Set]";
						case p:
							return "[object WeakMap]";
					}
				return t;
			}),
			(e.exports = m);
	},
	"./node_modules/lodash/_getValue.js": function(e, t) {
		function o(e, t) {
			return null == e ? void 0 : e[t];
		}
		e.exports = o;
	},
	"./node_modules/lodash/_hasPath.js": function(e, t, o) {
		function n(e, t, o) {
			t = r(t, e);
			for (var n = -1, u = t.length, c = !1; ++n < u; ) {
				var h = d(t[n]);
				if (!(c = null != e && o(e, h))) break;
				e = e[h];
			}
			return c || ++n != u
				? c
				: !!(u = null == e ? 0 : e.length) && l(u) && s(h, u) && (i(e) || a(e));
		}
		var r = o("./node_modules/lodash/_castPath.js"),
			a = o("./node_modules/lodash/isArguments.js"),
			i = o("./node_modules/lodash/isArray.js"),
			s = o("./node_modules/lodash/_isIndex.js"),
			l = o("./node_modules/lodash/isLength.js"),
			d = o("./node_modules/lodash/_toKey.js");
		e.exports = n;
	},
	"./node_modules/lodash/_hashClear.js": function(e, t, o) {
		function n() {
			(this.__data__ = r ? r(null) : {}), (this.size = 0);
		}
		var r = o("./node_modules/lodash/_nativeCreate.js");
		e.exports = n;
	},
	"./node_modules/lodash/_hashDelete.js": function(e, t) {
		function o(e) {
			var t = this.has(e) && delete this.__data__[e];
			return (this.size -= t ? 1 : 0), t;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_hashGet.js": function(e, t, o) {
		function n(e) {
			var t = this.__data__;
			if (r) {
				var o = t[e];
				return o === a ? void 0 : o;
			}
			return s.call(t, e) ? t[e] : void 0;
		}
		var r = o("./node_modules/lodash/_nativeCreate.js"),
			a = "__lodash_hash_undefined__",
			i = Object.prototype,
			s = i.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_hashHas.js": function(e, t, o) {
		function n(e) {
			var t = this.__data__;
			return r ? void 0 !== t[e] : i.call(t, e);
		}
		var r = o("./node_modules/lodash/_nativeCreate.js"),
			a = Object.prototype,
			i = a.hasOwnProperty;
		e.exports = n;
	},
	"./node_modules/lodash/_hashSet.js": function(e, t, o) {
		function n(e, t) {
			var o = this.__data__;
			return (this.size += this.has(e) ? 0 : 1), (o[e] = r && void 0 === t ? a : t), this;
		}
		var r = o("./node_modules/lodash/_nativeCreate.js"),
			a = "__lodash_hash_undefined__";
		e.exports = n;
	},
	"./node_modules/lodash/_isIndex.js": function(e, t) {
		function o(e, t) {
			var o = typeof e;
			return (
				!!(t = null == t ? n : t) &&
				("number" == o || ("symbol" != o && r.test(e))) &&
				e > -1 &&
				e % 1 == 0 &&
				e < t
			);
		}
		var n = 9007199254740991,
			r = /^(?:0|[1-9]\d*)$/;
		e.exports = o;
	},
	"./node_modules/lodash/_isKey.js": function(e, t, o) {
		function n(e, t) {
			if (r(e)) return !1;
			var o = typeof e;
			return (
				!("number" != o && "symbol" != o && "boolean" != o && null != e && !a(e)) ||
				(s.test(e) || !i.test(e) || (null != t && e in Object(t)))
			);
		}
		var r = o("./node_modules/lodash/isArray.js"),
			a = o("./node_modules/lodash/isSymbol.js"),
			i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			s = /^\w*$/;
		e.exports = n;
	},
	"./node_modules/lodash/_isKeyable.js": function(e, t) {
		function o(e) {
			var t = typeof e;
			return "string" == t || "number" == t || "symbol" == t || "boolean" == t
				? "__proto__" !== e
				: null === e;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_isMasked.js": function(e, t, o) {
		function n(e) {
			return !!a && a in e;
		}
		var r = o("./node_modules/lodash/_coreJsData.js"),
			a = (function() {
				var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
				return e ? "Symbol(src)_1." + e : "";
			})();
		e.exports = n;
	},
	"./node_modules/lodash/_isPrototype.js": function(e, t) {
		function o(e) {
			var t = e && e.constructor;
			return e === (("function" == typeof t && t.prototype) || n);
		}
		var n = Object.prototype;
		e.exports = o;
	},
	"./node_modules/lodash/_isStrictComparable.js": function(e, t, o) {
		function n(e) {
			return e === e && !r(e);
		}
		var r = o("./node_modules/lodash/isObject.js");
		e.exports = n;
	},
	"./node_modules/lodash/_listCacheClear.js": function(e, t) {
		function o() {
			(this.__data__ = []), (this.size = 0);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_listCacheDelete.js": function(e, t, o) {
		function n(e) {
			var t = this.__data__,
				o = r(t, e);
			return !(o < 0) && (o == t.length - 1 ? t.pop() : i.call(t, o, 1), --this.size, !0);
		}
		var r = o("./node_modules/lodash/_assocIndexOf.js"),
			a = Array.prototype,
			i = a.splice;
		e.exports = n;
	},
	"./node_modules/lodash/_listCacheGet.js": function(e, t, o) {
		function n(e) {
			var t = this.__data__,
				o = r(t, e);
			return o < 0 ? void 0 : t[o][1];
		}
		var r = o("./node_modules/lodash/_assocIndexOf.js");
		e.exports = n;
	},
	"./node_modules/lodash/_listCacheHas.js": function(e, t, o) {
		function n(e) {
			return r(this.__data__, e) > -1;
		}
		var r = o("./node_modules/lodash/_assocIndexOf.js");
		e.exports = n;
	},
	"./node_modules/lodash/_listCacheSet.js": function(e, t, o) {
		function n(e, t) {
			var o = this.__data__,
				n = r(o, e);
			return n < 0 ? (++this.size, o.push([e, t])) : (o[n][1] = t), this;
		}
		var r = o("./node_modules/lodash/_assocIndexOf.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapCacheClear.js": function(e, t, o) {
		function n() {
			(this.size = 0),
				(this.__data__ = { hash: new r(), map: new (i || a)(), string: new r() });
		}
		var r = o("./node_modules/lodash/_Hash.js"),
			a = o("./node_modules/lodash/_ListCache.js"),
			i = o("./node_modules/lodash/_Map.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapCacheDelete.js": function(e, t, o) {
		function n(e) {
			var t = r(this, e).delete(e);
			return (this.size -= t ? 1 : 0), t;
		}
		var r = o("./node_modules/lodash/_getMapData.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapCacheGet.js": function(e, t, o) {
		function n(e) {
			return r(this, e).get(e);
		}
		var r = o("./node_modules/lodash/_getMapData.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapCacheHas.js": function(e, t, o) {
		function n(e) {
			return r(this, e).has(e);
		}
		var r = o("./node_modules/lodash/_getMapData.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapCacheSet.js": function(e, t, o) {
		function n(e, t) {
			var o = r(this, e),
				n = o.size;
			return o.set(e, t), (this.size += o.size == n ? 0 : 1), this;
		}
		var r = o("./node_modules/lodash/_getMapData.js");
		e.exports = n;
	},
	"./node_modules/lodash/_mapToArray.js": function(e, t) {
		function o(e) {
			var t = -1,
				o = Array(e.size);
			return (
				e.forEach(function(e, n) {
					o[++t] = [n, e];
				}),
				o
			);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_matchesStrictComparable.js": function(e, t) {
		function o(e, t) {
			return function(o) {
				return null != o && (o[e] === t && (void 0 !== t || e in Object(o)));
			};
		}
		e.exports = o;
	},
	"./node_modules/lodash/_memoizeCapped.js": function(e, t, o) {
		function n(e) {
			var t = r(e, function(e) {
					return o.size === a && o.clear(), e;
				}),
				o = t.cache;
			return t;
		}
		var r = o("./node_modules/lodash/memoize.js"),
			a = 500;
		e.exports = n;
	},
	"./node_modules/lodash/_nativeCreate.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_getNative.js"),
			r = n(Object, "create");
		e.exports = r;
	},
	"./node_modules/lodash/_nativeKeys.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_overArg.js"),
			r = n(Object.keys, Object);
		e.exports = r;
	},
	"./node_modules/lodash/_nodeUtil.js": function(e, t, o) {
		(function(e) {
			var n = o("./node_modules/lodash/_freeGlobal.js"),
				r = "object" == typeof t && t && !t.nodeType && t,
				a = r && "object" == typeof e && e && !e.nodeType && e,
				i = a && a.exports === r,
				s = i && n.process,
				l = (function() {
					try {
						var e = a && a.require && a.require("util").types;
						return e || (s && s.binding && s.binding("util"));
					} catch (e) {}
				})();
			e.exports = l;
		}.call(t, o("./node_modules/webpack/buildin/module.js")(e)));
	},
	"./node_modules/lodash/_objectToString.js": function(e, t) {
		function o(e) {
			return r.call(e);
		}
		var n = Object.prototype,
			r = n.toString;
		e.exports = o;
	},
	"./node_modules/lodash/_overArg.js": function(e, t) {
		function o(e, t) {
			return function(o) {
				return e(t(o));
			};
		}
		e.exports = o;
	},
	"./node_modules/lodash/_root.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_freeGlobal.js"),
			r = "object" == typeof self && self && self.Object === Object && self,
			a = n || r || Function("return this")();
		e.exports = a;
	},
	"./node_modules/lodash/_setCacheAdd.js": function(e, t) {
		function o(e) {
			return this.__data__.set(e, n), this;
		}
		var n = "__lodash_hash_undefined__";
		e.exports = o;
	},
	"./node_modules/lodash/_setCacheHas.js": function(e, t) {
		function o(e) {
			return this.__data__.has(e);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_setToArray.js": function(e, t) {
		function o(e) {
			var t = -1,
				o = Array(e.size);
			return (
				e.forEach(function(e) {
					o[++t] = e;
				}),
				o
			);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_stackClear.js": function(e, t, o) {
		function n() {
			(this.__data__ = new r()), (this.size = 0);
		}
		var r = o("./node_modules/lodash/_ListCache.js");
		e.exports = n;
	},
	"./node_modules/lodash/_stackDelete.js": function(e, t) {
		function o(e) {
			var t = this.__data__,
				o = t.delete(e);
			return (this.size = t.size), o;
		}
		e.exports = o;
	},
	"./node_modules/lodash/_stackGet.js": function(e, t) {
		function o(e) {
			return this.__data__.get(e);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_stackHas.js": function(e, t) {
		function o(e) {
			return this.__data__.has(e);
		}
		e.exports = o;
	},
	"./node_modules/lodash/_stackSet.js": function(e, t, o) {
		function n(e, t) {
			var o = this.__data__;
			if (o instanceof r) {
				var n = o.__data__;
				if (!a || n.length < s - 1) return n.push([e, t]), (this.size = ++o.size), this;
				o = this.__data__ = new i(n);
			}
			return o.set(e, t), (this.size = o.size), this;
		}
		var r = o("./node_modules/lodash/_ListCache.js"),
			a = o("./node_modules/lodash/_Map.js"),
			i = o("./node_modules/lodash/_MapCache.js"),
			s = 200;
		e.exports = n;
	},
	"./node_modules/lodash/_stringToPath.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_memoizeCapped.js"),
			r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			a = /\\(\\)?/g,
			i = n(function(e) {
				var t = [];
				return (
					46 === e.charCodeAt(0) && t.push(""),
					e.replace(r, function(e, o, n, r) {
						t.push(n ? r.replace(a, "$1") : o || e);
					}),
					t
				);
			});
		e.exports = i;
	},
	"./node_modules/lodash/_toKey.js": function(e, t, o) {
		function n(e) {
			if ("string" == typeof e || r(e)) return e;
			var t = e + "";
			return "0" == t && 1 / e == -a ? "-0" : t;
		}
		var r = o("./node_modules/lodash/isSymbol.js"),
			a = 1 / 0;
		e.exports = n;
	},
	"./node_modules/lodash/_toSource.js": function(e, t) {
		function o(e) {
			if (null != e) {
				try {
					return r.call(e);
				} catch (e) {}
				try {
					return e + "";
				} catch (e) {}
			}
			return "";
		}
		var n = Function.prototype,
			r = n.toString;
		e.exports = o;
	},
	"./node_modules/lodash/eq.js": function(e, t) {
		function o(e, t) {
			return e === t || (e !== e && t !== t);
		}
		e.exports = o;
	},
	"./node_modules/lodash/find.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_createFind.js"),
			r = o("./node_modules/lodash/findIndex.js"),
			a = n(r);
		e.exports = a;
	},
	"./node_modules/lodash/findIndex.js": function(e, t, o) {
		function n(e, t, o) {
			var n = null == e ? 0 : e.length;
			if (!n) return -1;
			var l = null == o ? 0 : i(o);
			return l < 0 && (l = s(n + l, 0)), r(e, a(t, 3), l);
		}
		var r = o("./node_modules/lodash/_baseFindIndex.js"),
			a = o("./node_modules/lodash/_baseIteratee.js"),
			i = o("./node_modules/lodash/toInteger.js"),
			s = Math.max;
		e.exports = n;
	},
	"./node_modules/lodash/get.js": function(e, t, o) {
		function n(e, t, o) {
			var n = null == e ? void 0 : r(e, t);
			return void 0 === n ? o : n;
		}
		var r = o("./node_modules/lodash/_baseGet.js");
		e.exports = n;
	},
	"./node_modules/lodash/hasIn.js": function(e, t, o) {
		function n(e, t) {
			return null != e && a(e, t, r);
		}
		var r = o("./node_modules/lodash/_baseHasIn.js"),
			a = o("./node_modules/lodash/_hasPath.js");
		e.exports = n;
	},
	"./node_modules/lodash/identity.js": function(e, t) {
		function o(e) {
			return e;
		}
		e.exports = o;
	},
	"./node_modules/lodash/isArguments.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_baseIsArguments.js"),
			r = o("./node_modules/lodash/isObjectLike.js"),
			a = Object.prototype,
			i = a.hasOwnProperty,
			s = a.propertyIsEnumerable,
			l = n(
				(function() {
					return arguments;
				})()
			)
				? n
				: function(e) {
						return r(e) && i.call(e, "callee") && !s.call(e, "callee");
				  };
		e.exports = l;
	},
	"./node_modules/lodash/isArray.js": function(e, t) {
		var o = Array.isArray;
		e.exports = o;
	},
	"./node_modules/lodash/isArrayLike.js": function(e, t, o) {
		function n(e) {
			return null != e && a(e.length) && !r(e);
		}
		var r = o("./node_modules/lodash/isFunction.js"),
			a = o("./node_modules/lodash/isLength.js");
		e.exports = n;
	},
	"./node_modules/lodash/isBuffer.js": function(e, t, o) {
		(function(e) {
			var n = o("./node_modules/lodash/_root.js"),
				r = o("./node_modules/lodash/stubFalse.js"),
				a = "object" == typeof t && t && !t.nodeType && t,
				i = a && "object" == typeof e && e && !e.nodeType && e,
				s = i && i.exports === a,
				l = s ? n.Buffer : void 0,
				d = l ? l.isBuffer : void 0,
				u = d || r;
			e.exports = u;
		}.call(t, o("./node_modules/webpack/buildin/module.js")(e)));
	},
	"./node_modules/lodash/isEqual.js": function(e, t, o) {
		function n(e, t) {
			return r(e, t);
		}
		var r = o("./node_modules/lodash/_baseIsEqual.js");
		e.exports = n;
	},
	"./node_modules/lodash/isFunction.js": function(e, t, o) {
		function n(e) {
			if (!a(e)) return !1;
			var t = r(e);
			return t == s || t == l || t == i || t == d;
		}
		var r = o("./node_modules/lodash/_baseGetTag.js"),
			a = o("./node_modules/lodash/isObject.js"),
			i = "[object AsyncFunction]",
			s = "[object Function]",
			l = "[object GeneratorFunction]",
			d = "[object Proxy]";
		e.exports = n;
	},
	"./node_modules/lodash/isLength.js": function(e, t) {
		function o(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
		}
		var n = 9007199254740991;
		e.exports = o;
	},
	"./node_modules/lodash/isObject.js": function(e, t) {
		function o(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t);
		}
		e.exports = o;
	},
	"./node_modules/lodash/isObjectLike.js": function(e, t) {
		function o(e) {
			return null != e && "object" == typeof e;
		}
		e.exports = o;
	},
	"./node_modules/lodash/isSymbol.js": function(e, t, o) {
		function n(e) {
			return "symbol" == typeof e || (a(e) && r(e) == i);
		}
		var r = o("./node_modules/lodash/_baseGetTag.js"),
			a = o("./node_modules/lodash/isObjectLike.js"),
			i = "[object Symbol]";
		e.exports = n;
	},
	"./node_modules/lodash/isTypedArray.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_baseIsTypedArray.js"),
			r = o("./node_modules/lodash/_baseUnary.js"),
			a = o("./node_modules/lodash/_nodeUtil.js"),
			i = a && a.isTypedArray,
			s = i ? r(i) : n;
		e.exports = s;
	},
	"./node_modules/lodash/keyBy.js": function(e, t, o) {
		var n = o("./node_modules/lodash/_baseAssignValue.js"),
			r = o("./node_modules/lodash/_createAggregator.js"),
			a = r(function(e, t, o) {
				n(e, o, t);
			});
		e.exports = a;
	},
	"./node_modules/lodash/keys.js": function(e, t, o) {
		function n(e) {
			return i(e) ? r(e) : a(e);
		}
		var r = o("./node_modules/lodash/_arrayLikeKeys.js"),
			a = o("./node_modules/lodash/_baseKeys.js"),
			i = o("./node_modules/lodash/isArrayLike.js");
		e.exports = n;
	},
	"./node_modules/lodash/memoize.js": function(e, t, o) {
		function n(e, t) {
			if ("function" != typeof e || (null != t && "function" != typeof t))
				throw new TypeError(a);
			var o = function() {
				var n = arguments,
					r = t ? t.apply(this, n) : n[0],
					a = o.cache;
				if (a.has(r)) return a.get(r);
				var i = e.apply(this, n);
				return (o.cache = a.set(r, i) || a), i;
			};
			return (o.cache = new (n.Cache || r)()), o;
		}
		var r = o("./node_modules/lodash/_MapCache.js"),
			a = "Expected a function";
		(n.Cache = r), (e.exports = n);
	},
	"./node_modules/lodash/property.js": function(e, t, o) {
		function n(e) {
			return i(e) ? r(s(e)) : a(e);
		}
		var r = o("./node_modules/lodash/_baseProperty.js"),
			a = o("./node_modules/lodash/_basePropertyDeep.js"),
			i = o("./node_modules/lodash/_isKey.js"),
			s = o("./node_modules/lodash/_toKey.js");
		e.exports = n;
	},
	"./node_modules/lodash/stubArray.js": function(e, t) {
		function o() {
			return [];
		}
		e.exports = o;
	},
	"./node_modules/lodash/stubFalse.js": function(e, t) {
		function o() {
			return !1;
		}
		e.exports = o;
	},
	"./node_modules/lodash/toFinite.js": function(e, t, o) {
		function n(e) {
			if (!e) return 0 === e ? e : 0;
			if ((e = r(e)) === a || e === -a) {
				return (e < 0 ? -1 : 1) * i;
			}
			return e === e ? e : 0;
		}
		var r = o("./node_modules/lodash/toNumber.js"),
			a = 1 / 0,
			i = 1.7976931348623157e308;
		e.exports = n;
	},
	"./node_modules/lodash/toInteger.js": function(e, t, o) {
		function n(e) {
			var t = r(e),
				o = t % 1;
			return t === t ? (o ? t - o : t) : 0;
		}
		var r = o("./node_modules/lodash/toFinite.js");
		e.exports = n;
	},
	"./node_modules/lodash/toNumber.js": function(e, t, o) {
		function n(e) {
			if ("number" == typeof e) return e;
			if (a(e)) return i;
			if (r(e)) {
				var t = "function" == typeof e.valueOf ? e.valueOf() : e;
				e = r(t) ? t + "" : t;
			}
			if ("string" != typeof e) return 0 === e ? e : +e;
			e = e.replace(s, "");
			var o = d.test(e);
			return o || u.test(e) ? c(e.slice(2), o ? 2 : 8) : l.test(e) ? i : +e;
		}
		var r = o("./node_modules/lodash/isObject.js"),
			a = o("./node_modules/lodash/isSymbol.js"),
			i = NaN,
			s = /^\s+|\s+$/g,
			l = /^[-+]0x[0-9a-f]+$/i,
			d = /^0b[01]+$/i,
			u = /^0o[0-7]+$/i,
			c = parseInt;
		e.exports = n;
	},
	"./node_modules/lodash/toString.js": function(e, t, o) {
		function n(e) {
			return null == e ? "" : r(e);
		}
		var r = o("./node_modules/lodash/_baseToString.js");
		e.exports = n;
	},
	"./node_modules/react-chartjs-2/es/index.js": function(e, t, o) {
		"use strict";
		(function(e) {
			function n(e, t) {
				var o = {};
				for (var n in e)
					t.indexOf(n) >= 0 ||
						(Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]));
				return o;
			}
			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function a(e, t) {
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
			o.d(t, "a", function() {
				return x;
			});
			var s = o("./node_modules/react/index.js"),
				l = o.n(s),
				d = o("./node_modules/prop-types/index.js"),
				u = o.n(d),
				c = o("./node_modules/chart.js/src/chart.js"),
				h = o.n(c),
				f = o("./node_modules/lodash/isEqual.js"),
				p = o.n(f),
				m = o("./node_modules/lodash/find.js"),
				g = (o.n(m), o("./node_modules/lodash/keyBy.js")),
				v = o.n(g),
				b =
					Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var o = arguments[t];
							for (var n in o)
								Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
						}
						return e;
					},
				y = void 0 !== e && Object({ NODE_ENV: "production" }) && "production",
				_ = (function(e) {
					function t() {
						var o, n, i;
						r(this, t);
						for (var s = arguments.length, l = Array(s), d = 0; d < s; d++)
							l[d] = arguments[d];
						return (
							(o = n = a(this, e.call.apply(e, [this].concat(l)))),
							(n.handleOnClick = function(e) {
								var t = n.chartInstance,
									o = n.props,
									r = o.getDatasetAtEvent,
									a = o.getElementAtEvent,
									i = o.getElementsAtEvent,
									s = o.onElementsClick;
								r && r(t.getDatasetAtEvent(e), e),
									a && a(t.getElementAtEvent(e), e),
									i && i(t.getElementsAtEvent(e), e),
									s && s(t.getElementsAtEvent(e), e);
							}),
							(n.ref = function(e) {
								n.element = e;
							}),
							(i = o),
							a(n, i)
						);
					}
					return (
						i(t, e),
						(t.prototype.componentWillMount = function() {
							this.chartInstance = void 0;
						}),
						(t.prototype.componentDidMount = function() {
							this.renderChart();
						}),
						(t.prototype.componentDidUpdate = function() {
							if (this.props.redraw)
								return this.chartInstance.destroy(), void this.renderChart();
							this.updateChart();
						}),
						(t.prototype.shouldComponentUpdate = function(e) {
							var t = this.props,
								o = (t.redraw, t.type),
								n = t.options,
								r = t.plugins,
								a = t.legend,
								i = t.height,
								s = t.width;
							if (!0 === e.redraw) return !0;
							if (i !== e.height || s !== e.width) return !0;
							if (o !== e.type) return !0;
							if (!p()(a, e.legend)) return !0;
							if (!p()(n, e.options)) return !0;
							var l = this.transformDataProp(e);
							return !p()(this.shadowDataProp, l) || !p()(r, e.plugins);
						}),
						(t.prototype.componentWillUnmount = function() {
							this.chartInstance.destroy();
						}),
						(t.prototype.transformDataProp = function(e) {
							var t = e.data;
							if ("function" == typeof t) {
								return t(this.element);
							}
							return t;
						}),
						(t.prototype.memoizeDataProps = function() {
							if (this.props.data) {
								var e = this.transformDataProp(this.props);
								return (
									(this.shadowDataProp = b({}, e, {
										datasets:
											e.datasets &&
											e.datasets.map(function(e) {
												return b({}, e);
											})
									})),
									e
								);
							}
						}),
						(t.prototype.checkDatasets = function(e) {
							var o = "production" !== y && "prod" !== y,
								n = this.props.datasetKeyProvider !== t.getLabelAsKey,
								r = e.length > 1;
							if (o && r && !n) {
								var a = !1;
								e.forEach(function(e) {
									e.label || (a = !0);
								}),
									a &&
										console.error(
											'[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
										);
							}
						}),
						(t.prototype.updateChart = function() {
							var e = this,
								t = this.props.options,
								o = this.memoizeDataProps(this.props);
							if (this.chartInstance) {
								t &&
									(this.chartInstance.options = h.a.helpers.configMerge(
										this.chartInstance.options,
										t
									));
								var r =
										(this.chartInstance.config.data &&
											this.chartInstance.config.data.datasets) ||
										[],
									a = o.datasets || [];
								this.checkDatasets(r);
								var i = v()(r, this.props.datasetKeyProvider);
								this.chartInstance.config.data.datasets = a.map(function(t) {
									var o = i[e.props.datasetKeyProvider(t)];
									if (o && o.type === t.type) {
										o.data.splice(t.data.length),
											t.data.forEach(function(e, n) {
												o.data[n] = t.data[n];
											});
										var r = (t.data, n(t, ["data"]));
										return b({}, o, r);
									}
									return t;
								});
								var s = (o.datasets, n(o, ["datasets"]));
								(this.chartInstance.config.data = b(
									{},
									this.chartInstance.config.data,
									s
								)),
									this.chartInstance.update();
							}
						}),
						(t.prototype.renderChart = function() {
							var e = this.props,
								o = e.options,
								n = e.legend,
								r = e.type,
								a = (e.redraw, e.plugins),
								i = this.element,
								s = this.memoizeDataProps();
							void 0 === n || p()(t.defaultProps.legend, n) || (o.legend = n),
								(this.chartInstance = new h.a(i, {
									type: r,
									data: s,
									options: o,
									plugins: a
								}));
						}),
						(t.prototype.render = function() {
							var e = this.props,
								t = e.height,
								o = e.width;
							e.onElementsClick;
							return l.a.createElement("canvas", {
								ref: this.ref,
								height: t,
								width: o,
								onClick: this.handleOnClick
							});
						}),
						t
					);
				})(l.a.Component);
			(_.getLabelAsKey = function(e) {
				return e.label;
			}),
				(_.propTypes = {
					data: u.a.oneOfType([u.a.object, u.a.func]).isRequired,
					getDatasetAtEvent: u.a.func,
					getElementAtEvent: u.a.func,
					getElementsAtEvent: u.a.func,
					height: u.a.number,
					legend: u.a.object,
					onElementsClick: u.a.func,
					options: u.a.object,
					plugins: u.a.arrayOf(u.a.object),
					redraw: u.a.bool,
					type: function(e, t, o) {
						if (!h.a.controllers[e[t]])
							return new Error(
								"Invalid chart type `" + e[t] + "` supplied to `" + o + "`."
							);
					},
					width: u.a.number,
					datasetKeyProvider: u.a.func
				}),
				(_.defaultProps = {
					legend: { display: !0, position: "bottom" },
					type: "doughnut",
					height: 150,
					width: 300,
					redraw: !1,
					options: {},
					datasetKeyProvider: _.getLabelAsKey
				});
			var x = ((function(e) {
				function t() {
					return r(this, t), a(this, e.apply(this, arguments));
				}
				i(t, e),
					(t.prototype.render = function() {
						var e = this;
						return l.a.createElement(
							_,
							b({}, this.props, {
								ref: function(t) {
									return (e.chartInstance = t && t.chartInstance);
								},
								type: "doughnut"
							})
						);
					});
			})(l.a.Component),
			(function(e) {
				function t() {
					return r(this, t), a(this, e.apply(this, arguments));
				}
				i(t, e),
					(t.prototype.render = function() {
						var e = this;
						return l.a.createElement(
							_,
							b({}, this.props, {
								ref: function(t) {
									return (e.chartInstance = t && t.chartInstance);
								},
								type: "pie"
							})
						);
					});
			})(l.a.Component),
			(function(e) {
				function t() {
					return r(this, t), a(this, e.apply(this, arguments));
				}
				return (
					i(t, e),
					(t.prototype.render = function() {
						var e = this;
						return l.a.createElement(
							_,
							b({}, this.props, {
								ref: function(t) {
									return (e.chartInstance = t && t.chartInstance);
								},
								type: "line"
							})
						);
					}),
					t
				);
			})(l.a.Component));
			(function(e) {
				function t() {
					return r(this, t), a(this, e.apply(this, arguments));
				}
				i(t, e),
					(t.prototype.render = function() {
						var e = this;
						return l.a.createElement(
							_,
							b({}, this.props, {
								ref: function(t) {
									return (e.chartInstance = t && t.chartInstance);
								},
								type: "bar"
							})
						);
					});
			})(l.a.Component),
				(function(e) {
					function t() {
						return r(this, t), a(this, e.apply(this, arguments));
					}
					i(t, e),
						(t.prototype.render = function() {
							var e = this;
							return l.a.createElement(
								_,
								b({}, this.props, {
									ref: function(t) {
										return (e.chartInstance = t && t.chartInstance);
									},
									type: "horizontalBar"
								})
							);
						});
				})(l.a.Component),
				(function(e) {
					function t() {
						return r(this, t), a(this, e.apply(this, arguments));
					}
					i(t, e),
						(t.prototype.render = function() {
							var e = this;
							return l.a.createElement(
								_,
								b({}, this.props, {
									ref: function(t) {
										return (e.chartInstance = t && t.chartInstance);
									},
									type: "radar"
								})
							);
						});
				})(l.a.Component),
				(function(e) {
					function t() {
						return r(this, t), a(this, e.apply(this, arguments));
					}
					i(t, e),
						(t.prototype.render = function() {
							var e = this;
							return l.a.createElement(
								_,
								b({}, this.props, {
									ref: function(t) {
										return (e.chartInstance = t && t.chartInstance);
									},
									type: "polarArea"
								})
							);
						});
				})(l.a.Component),
				(function(e) {
					function t() {
						return r(this, t), a(this, e.apply(this, arguments));
					}
					i(t, e),
						(t.prototype.render = function() {
							var e = this;
							return l.a.createElement(
								_,
								b({}, this.props, {
									ref: function(t) {
										return (e.chartInstance = t && t.chartInstance);
									},
									type: "bubble"
								})
							);
						});
				})(l.a.Component),
				(function(e) {
					function t() {
						return r(this, t), a(this, e.apply(this, arguments));
					}
					i(t, e),
						(t.prototype.render = function() {
							var e = this;
							return l.a.createElement(
								_,
								b({}, this.props, {
									ref: function(t) {
										return (e.chartInstance = t && t.chartInstance);
									},
									type: "scatter"
								})
							);
						});
				})(l.a.Component),
				h.a.defaults;
		}.call(t, o("./node_modules/process/browser.js")));
	},
	"./node_modules/webpack/buildin/module.js": function(e, t) {
		e.exports = function(e) {
			return (
				e.webpackPolyfill ||
					((e.deprecate = function() {}),
					(e.paths = []),
					e.children || (e.children = []),
					Object.defineProperty(e, "loaded", {
						enumerable: !0,
						get: function() {
							return e.l;
						}
					}),
					Object.defineProperty(e, "id", {
						enumerable: !0,
						get: function() {
							return e.i;
						}
					}),
					(e.webpackPolyfill = 1)),
				e
			);
		};
	}
});
