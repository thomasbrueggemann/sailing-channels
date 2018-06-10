webpackJsonp([3], {
	"./app/components/ChannelListItem/index.js": function(e, t, a) {
		"use strict";
		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function o(e, t) {
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
		var r = a("./node_modules/react/index.js"),
			s = a.n(r),
			l = (a("./app/components/Description/Loadable.js"),
			a("./node_modules/react-router-dom/index.js")),
			c = (a.n(l), a("./app/components/SubscribeButton/Loadable.js")),
			d = a("./node_modules/react-lazyload/lib/index.js"),
			u = a.n(d),
			m = a("./node_modules/anchorme/dist-node/index.js"),
			p = a.n(m),
			f = a("./node_modules/jquery/dist/jquery.js"),
			b = a.n(f),
			h = a("./node_modules/timeago/jquery.timeago.js"),
			g = (a.n(h),
			(function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(t, a, n, o) {
					var i = t && t.defaultProps,
						r = arguments.length - 3;
					if ((a || 0 === r || (a = {}), a && i))
						for (var s in i) void 0 === a[s] && (a[s] = i[s]);
					else a || (a = i || {});
					if (1 === r) a.children = o;
					else if (r > 1) {
						for (var l = Array(r), c = 0; c < r; c++) l[c] = arguments[c + 3];
						a.children = l;
					}
					return {
						$$typeof: e,
						type: t,
						key: void 0 === n ? null : "" + n,
						ref: null,
						props: a,
						_owner: null
					};
				};
			})()),
			x = (function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var n = t[a];
						(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n);
					}
				}
				return function(t, a, n) {
					return a && e(t.prototype, a), n && e(t, n), t;
				};
			})(),
			y = g(
				"p",
				{ className: "text-muted" },
				void 0,
				g("b", {}, void 0, "Subscriber info hidden")
			),
			v = g("b", {}, void 0, "Subscribers:"),
			w = g("b", {}, void 0, "Views:"),
			k = g("b", {}, void 0, "Videos:"),
			j = g("b", {}, void 0, "Last upload:"),
			_ = g("b", {}, void 0, "Founded:"),
			z = (function(e) {
				function t() {
					return (
						n(this, t),
						o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
					);
				}
				return (
					i(t, e),
					x(t, [
						{
							key: "formatDate",
							value: function(e) {
								var t = [
										"Jan",
										"Feb",
										"Mar",
										"Apr",
										"May",
										"Jun",
										"Jul",
										"Aug",
										"Sep",
										"Oct",
										"Nov",
										"Dec"
									],
									a = new Date(1e3 * e);
								return t[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear();
							}
						},
						{
							key: "shouldComponentUpdate",
							value: function(e, t) {
								return e.channel.id !== this.props.channel.id;
							}
						},
						{
							key: "render",
							value: function() {
								return g(
									"div",
									{ className: "row channel-row" },
									void 0,
									g(
										"div",
										{ className: "col-md-2 col-sm-2 col-xs-3" },
										void 0,
										g(
											"center",
											{},
											void 0,
											g(
												u.a,
												{ once: !0 },
												void 0,
												g("img", {
													src: this.props.channel.thumbnail,
													className: "channel-thumb"
												})
											)
										)
									),
									g(
										"div",
										{ className: "col-md-7 col-sm-6 col-xs-9" },
										void 0,
										g(
											"h3",
											{},
											void 0,
											g(
												l.Link,
												{ to: "/channel/" + this.props.channel.id },
												void 0,
												this.props.channel.title
											)
										),
										g(
											"div",
											{ className: "hidden-xs" },
											void 0,
											this.props.channel.description
												? g("p", {
														className: "channel-description",
														dangerouslySetInnerHTML: {
															__html: p()(
																this.props.channel.description,
																{ target: "_blank" }
															)
														}
												  })
												: null
										)
									),
									g(
										"div",
										{
											className:
												"col-md-3 col-sm-4 col-xs-10 col-xs-offset-3 col-md-offset-0 col-sm-offset-0"
										},
										void 0,
										!0 === this.props.channel.subscribersHidden ? y : null,
										!1 === this.props.channel.subscribersHidden
											? g(
													"p",
													{},
													void 0,
													v,
													" ",
													this.props.channel.subscribers.toLocaleString()
											  )
											: null,
										g(
											"p",
											{},
											void 0,
											w,
											" ",
											this.props.channel.views.toLocaleString()
										),
										!1 === this.props.channel.subscribersHidden
											? g(
													"p",
													{},
													void 0,
													k,
													" ",
													this.props.channel.videoCount.toLocaleString()
											  )
											: null,
										this.props.channel.lastUploadAt
											? g(
													"p",
													{},
													void 0,
													j,
													" ",
													b.a.timeago(
														new Date(
															1e3 * this.props.channel.lastUploadAt
														)
													)
											  )
											: "",
										g(
											"p",
											{},
											void 0,
											_,
											" ",
											this.formatDate(this.props.channel.publishedAt)
										),
										g(c.a, { channel: this.props.channel })
									)
								);
							}
						}
					]),
					t
				);
			})(s.a.Component);
		t.default = z;
	},
	"./app/components/Description/Loadable.js": function(e, t, a) {
		"use strict";
		var n = a("./node_modules/react-loadable/lib/index.js"),
			o = a.n(n);
		t.a = o()({
			loader: function() {
				return a.e(16).then(a.bind(null, "./app/components/Description/index.js"));
			},
			loading: function() {
				return null;
			}
		});
	},
	"./app/components/SubscribeButton/Loadable.js": function(e, t, a) {
		"use strict";
		var n = a("./node_modules/react-loadable/lib/index.js"),
			o = a.n(n);
		t.a = o()({
			loader: function() {
				return a.e(26).then(a.bind(null, "./app/components/SubscribeButton/index.js"));
			},
			loading: function() {
				return null;
			}
		});
	},
	"./node_modules/anchorme/dist-node/index.js": function(e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var n = a("./node_modules/anchorme/dist-node/util.js"),
			o = a("./node_modules/anchorme/dist-node/tests/email.js"),
			i = a("./node_modules/anchorme/dist-node/tests/ip.js"),
			r = a("./node_modules/anchorme/dist-node/tests/url.js"),
			s = a("./node_modules/anchorme/dist-node/transform/transform.js"),
			l = a("./node_modules/anchorme/dist-node/tests/hasprotocol.js"),
			c = function(e, t) {
				return (t = n.defaultOptions(t)), s.default(e, t);
			};
		(c.validate = {
			ip: i.default,
			url: function(e) {
				var t = l.default(e) || "";
				return (e = e.substr(t.length)), (e = encodeURI(e)), r.default(e);
			},
			email: o.default
		}),
			(t.default = c);
	},
	"./node_modules/anchorme/dist-node/lists.js": function(e, t, a) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.tlds = [
				"com",
				"org",
				"net",
				"uk",
				"gov",
				"edu",
				"io",
				"cc",
				"co",
				"aaa",
				"aarp",
				"abarth",
				"abb",
				"abbott",
				"abbvie",
				"abc",
				"able",
				"abogado",
				"abudhabi",
				"ac",
				"academy",
				"accenture",
				"accountant",
				"accountants",
				"aco",
				"active",
				"actor",
				"ad",
				"adac",
				"ads",
				"adult",
				"ae",
				"aeg",
				"aero",
				"aetna",
				"af",
				"afamilycompany",
				"afl",
				"africa",
				"ag",
				"agakhan",
				"agency",
				"ai",
				"aig",
				"aigo",
				"airbus",
				"airforce",
				"airtel",
				"akdn",
				"al",
				"alfaromeo",
				"alibaba",
				"alipay",
				"allfinanz",
				"allstate",
				"ally",
				"alsace",
				"alstom",
				"am",
				"americanexpress",
				"americanfamily",
				"amex",
				"amfam",
				"amica",
				"amsterdam",
				"analytics",
				"android",
				"anquan",
				"anz",
				"ao",
				"aol",
				"apartments",
				"app",
				"apple",
				"aq",
				"aquarelle",
				"ar",
				"aramco",
				"archi",
				"army",
				"arpa",
				"art",
				"arte",
				"as",
				"asda",
				"asia",
				"associates",
				"at",
				"athleta",
				"attorney",
				"au",
				"auction",
				"audi",
				"audible",
				"audio",
				"auspost",
				"author",
				"auto",
				"autos",
				"avianca",
				"aw",
				"aws",
				"ax",
				"axa",
				"az",
				"azure",
				"ba",
				"baby",
				"baidu",
				"banamex",
				"bananarepublic",
				"band",
				"bank",
				"bar",
				"barcelona",
				"barclaycard",
				"barclays",
				"barefoot",
				"bargains",
				"baseball",
				"basketball",
				"bauhaus",
				"bayern",
				"bb",
				"bbc",
				"bbt",
				"bbva",
				"bcg",
				"bcn",
				"bd",
				"be",
				"beats",
				"beauty",
				"beer",
				"bentley",
				"berlin",
				"best",
				"bestbuy",
				"bet",
				"bf",
				"bg",
				"bh",
				"bharti",
				"bi",
				"bible",
				"bid",
				"bike",
				"bing",
				"bingo",
				"bio",
				"biz",
				"bj",
				"black",
				"blackfriday",
				"blanco",
				"blockbuster",
				"blog",
				"bloomberg",
				"blue",
				"bm",
				"bms",
				"bmw",
				"bn",
				"bnl",
				"bnpparibas",
				"bo",
				"boats",
				"boehringer",
				"bofa",
				"bom",
				"bond",
				"boo",
				"book",
				"booking",
				"boots",
				"bosch",
				"bostik",
				"boston",
				"bot",
				"boutique",
				"box",
				"br",
				"bradesco",
				"bridgestone",
				"broadway",
				"broker",
				"brother",
				"brussels",
				"bs",
				"bt",
				"budapest",
				"bugatti",
				"build",
				"builders",
				"business",
				"buy",
				"buzz",
				"bv",
				"bw",
				"by",
				"bz",
				"bzh",
				"ca",
				"cab",
				"cafe",
				"cal",
				"call",
				"calvinklein",
				"cam",
				"camera",
				"camp",
				"cancerresearch",
				"canon",
				"capetown",
				"capital",
				"capitalone",
				"car",
				"caravan",
				"cards",
				"care",
				"career",
				"careers",
				"cars",
				"cartier",
				"casa",
				"case",
				"caseih",
				"cash",
				"casino",
				"cat",
				"catering",
				"catholic",
				"cba",
				"cbn",
				"cbre",
				"cbs",
				"cd",
				"ceb",
				"center",
				"ceo",
				"cern",
				"cf",
				"cfa",
				"cfd",
				"cg",
				"ch",
				"chanel",
				"channel",
				"chase",
				"chat",
				"cheap",
				"chintai",
				"chloe",
				"christmas",
				"chrome",
				"chrysler",
				"church",
				"ci",
				"cipriani",
				"circle",
				"cisco",
				"citadel",
				"citi",
				"citic",
				"city",
				"cityeats",
				"ck",
				"cl",
				"claims",
				"cleaning",
				"click",
				"clinic",
				"clinique",
				"clothing",
				"cloud",
				"club",
				"clubmed",
				"cm",
				"cn",
				"coach",
				"codes",
				"coffee",
				"college",
				"cologne",
				"comcast",
				"commbank",
				"community",
				"company",
				"compare",
				"computer",
				"comsec",
				"condos",
				"construction",
				"consulting",
				"contact",
				"contractors",
				"cooking",
				"cookingchannel",
				"cool",
				"coop",
				"corsica",
				"country",
				"coupon",
				"coupons",
				"courses",
				"cr",
				"credit",
				"creditcard",
				"creditunion",
				"cricket",
				"crown",
				"crs",
				"cruise",
				"cruises",
				"csc",
				"cu",
				"cuisinella",
				"cv",
				"cw",
				"cx",
				"cy",
				"cymru",
				"cyou",
				"cz",
				"dabur",
				"dad",
				"dance",
				"data",
				"date",
				"dating",
				"datsun",
				"day",
				"dclk",
				"dds",
				"de",
				"deal",
				"dealer",
				"deals",
				"degree",
				"delivery",
				"dell",
				"deloitte",
				"delta",
				"democrat",
				"dental",
				"dentist",
				"desi",
				"design",
				"dev",
				"dhl",
				"diamonds",
				"diet",
				"digital",
				"direct",
				"directory",
				"discount",
				"discover",
				"dish",
				"diy",
				"dj",
				"dk",
				"dm",
				"dnp",
				"do",
				"docs",
				"doctor",
				"dodge",
				"dog",
				"doha",
				"domains",
				"dot",
				"download",
				"drive",
				"dtv",
				"dubai",
				"duck",
				"dunlop",
				"duns",
				"dupont",
				"durban",
				"dvag",
				"dvr",
				"dz",
				"earth",
				"eat",
				"ec",
				"eco",
				"edeka",
				"education",
				"ee",
				"eg",
				"email",
				"emerck",
				"energy",
				"engineer",
				"engineering",
				"enterprises",
				"epost",
				"epson",
				"equipment",
				"er",
				"ericsson",
				"erni",
				"es",
				"esq",
				"estate",
				"esurance",
				"et",
				"eu",
				"eurovision",
				"eus",
				"events",
				"everbank",
				"exchange",
				"expert",
				"exposed",
				"express",
				"extraspace",
				"fage",
				"fail",
				"fairwinds",
				"faith",
				"family",
				"fan",
				"fans",
				"farm",
				"farmers",
				"fashion",
				"fast",
				"fedex",
				"feedback",
				"ferrari",
				"ferrero",
				"fi",
				"fiat",
				"fidelity",
				"fido",
				"film",
				"final",
				"finance",
				"financial",
				"fire",
				"firestone",
				"firmdale",
				"fish",
				"fishing",
				"fit",
				"fitness",
				"fj",
				"fk",
				"flickr",
				"flights",
				"flir",
				"florist",
				"flowers",
				"fly",
				"fm",
				"fo",
				"foo",
				"food",
				"foodnetwork",
				"football",
				"ford",
				"forex",
				"forsale",
				"forum",
				"foundation",
				"fox",
				"fr",
				"free",
				"fresenius",
				"frl",
				"frogans",
				"frontdoor",
				"frontier",
				"ftr",
				"fujitsu",
				"fujixerox",
				"fun",
				"fund",
				"furniture",
				"futbol",
				"fyi",
				"ga",
				"gal",
				"gallery",
				"gallo",
				"gallup",
				"game",
				"games",
				"gap",
				"garden",
				"gb",
				"gbiz",
				"gd",
				"gdn",
				"ge",
				"gea",
				"gent",
				"genting",
				"george",
				"gf",
				"gg",
				"ggee",
				"gh",
				"gi",
				"gift",
				"gifts",
				"gives",
				"giving",
				"gl",
				"glade",
				"glass",
				"gle",
				"global",
				"globo",
				"gm",
				"gmail",
				"gmbh",
				"gmo",
				"gmx",
				"gn",
				"godaddy",
				"gold",
				"goldpoint",
				"golf",
				"goo",
				"goodhands",
				"goodyear",
				"goog",
				"google",
				"gop",
				"got",
				"gp",
				"gq",
				"gr",
				"grainger",
				"graphics",
				"gratis",
				"green",
				"gripe",
				"group",
				"gs",
				"gt",
				"gu",
				"guardian",
				"gucci",
				"guge",
				"guide",
				"guitars",
				"guru",
				"gw",
				"gy",
				"hair",
				"hamburg",
				"hangout",
				"haus",
				"hbo",
				"hdfc",
				"hdfcbank",
				"health",
				"healthcare",
				"help",
				"helsinki",
				"here",
				"hermes",
				"hgtv",
				"hiphop",
				"hisamitsu",
				"hitachi",
				"hiv",
				"hk",
				"hkt",
				"hm",
				"hn",
				"hockey",
				"holdings",
				"holiday",
				"homedepot",
				"homegoods",
				"homes",
				"homesense",
				"honda",
				"honeywell",
				"horse",
				"hospital",
				"host",
				"hosting",
				"hot",
				"hoteles",
				"hotmail",
				"house",
				"how",
				"hr",
				"hsbc",
				"ht",
				"htc",
				"hu",
				"hughes",
				"hyatt",
				"hyundai",
				"ibm",
				"icbc",
				"ice",
				"icu",
				"id",
				"ie",
				"ieee",
				"ifm",
				"ikano",
				"il",
				"im",
				"imamat",
				"imdb",
				"immo",
				"immobilien",
				"in",
				"industries",
				"infiniti",
				"info",
				"ing",
				"ink",
				"institute",
				"insurance",
				"insure",
				"int",
				"intel",
				"international",
				"intuit",
				"investments",
				"ipiranga",
				"iq",
				"ir",
				"irish",
				"is",
				"iselect",
				"ismaili",
				"ist",
				"istanbul",
				"it",
				"itau",
				"itv",
				"iveco",
				"iwc",
				"jaguar",
				"java",
				"jcb",
				"jcp",
				"je",
				"jeep",
				"jetzt",
				"jewelry",
				"jio",
				"jlc",
				"jll",
				"jm",
				"jmp",
				"jnj",
				"jo",
				"jobs",
				"joburg",
				"jot",
				"joy",
				"jp",
				"jpmorgan",
				"jprs",
				"juegos",
				"juniper",
				"kaufen",
				"kddi",
				"ke",
				"kerryhotels",
				"kerrylogistics",
				"kerryproperties",
				"kfh",
				"kg",
				"kh",
				"ki",
				"kia",
				"kim",
				"kinder",
				"kindle",
				"kitchen",
				"kiwi",
				"km",
				"kn",
				"koeln",
				"komatsu",
				"kosher",
				"kp",
				"kpmg",
				"kpn",
				"kr",
				"krd",
				"kred",
				"kuokgroup",
				"kw",
				"ky",
				"kyoto",
				"kz",
				"la",
				"lacaixa",
				"ladbrokes",
				"lamborghini",
				"lamer",
				"lancaster",
				"lancia",
				"lancome",
				"land",
				"landrover",
				"lanxess",
				"lasalle",
				"lat",
				"latino",
				"latrobe",
				"law",
				"lawyer",
				"lb",
				"lc",
				"lds",
				"lease",
				"leclerc",
				"lefrak",
				"legal",
				"lego",
				"lexus",
				"lgbt",
				"li",
				"liaison",
				"lidl",
				"life",
				"lifeinsurance",
				"lifestyle",
				"lighting",
				"like",
				"lilly",
				"limited",
				"limo",
				"lincoln",
				"linde",
				"link",
				"lipsy",
				"live",
				"living",
				"lixil",
				"lk",
				"loan",
				"loans",
				"locker",
				"locus",
				"loft",
				"lol",
				"london",
				"lotte",
				"lotto",
				"love",
				"lpl",
				"lplfinancial",
				"lr",
				"ls",
				"lt",
				"ltd",
				"ltda",
				"lu",
				"lundbeck",
				"lupin",
				"luxe",
				"luxury",
				"lv",
				"ly",
				"ma",
				"macys",
				"madrid",
				"maif",
				"maison",
				"makeup",
				"man",
				"management",
				"mango",
				"market",
				"marketing",
				"markets",
				"marriott",
				"marshalls",
				"maserati",
				"mattel",
				"mba",
				"mc",
				"mcd",
				"mcdonalds",
				"mckinsey",
				"md",
				"me",
				"med",
				"media",
				"meet",
				"melbourne",
				"meme",
				"memorial",
				"men",
				"menu",
				"meo",
				"metlife",
				"mg",
				"mh",
				"miami",
				"microsoft",
				"mil",
				"mini",
				"mint",
				"mit",
				"mitsubishi",
				"mk",
				"ml",
				"mlb",
				"mls",
				"mm",
				"mma",
				"mn",
				"mo",
				"mobi",
				"mobile",
				"mobily",
				"moda",
				"moe",
				"moi",
				"mom",
				"monash",
				"money",
				"monster",
				"montblanc",
				"mopar",
				"mormon",
				"mortgage",
				"moscow",
				"moto",
				"motorcycles",
				"mov",
				"movie",
				"movistar",
				"mp",
				"mq",
				"mr",
				"ms",
				"msd",
				"mt",
				"mtn",
				"mtpc",
				"mtr",
				"mu",
				"museum",
				"mutual",
				"mv",
				"mw",
				"mx",
				"my",
				"mz",
				"na",
				"nab",
				"nadex",
				"nagoya",
				"name",
				"nationwide",
				"natura",
				"navy",
				"nba",
				"nc",
				"ne",
				"nec",
				"netbank",
				"netflix",
				"network",
				"neustar",
				"new",
				"newholland",
				"news",
				"next",
				"nextdirect",
				"nexus",
				"nf",
				"nfl",
				"ng",
				"ngo",
				"nhk",
				"ni",
				"nico",
				"nike",
				"nikon",
				"ninja",
				"nissan",
				"nissay",
				"nl",
				"no",
				"nokia",
				"northwesternmutual",
				"norton",
				"now",
				"nowruz",
				"nowtv",
				"np",
				"nr",
				"nra",
				"nrw",
				"ntt",
				"nu",
				"nyc",
				"nz",
				"obi",
				"observer",
				"off",
				"office",
				"okinawa",
				"olayan",
				"olayangroup",
				"oldnavy",
				"ollo",
				"om",
				"omega",
				"one",
				"ong",
				"onl",
				"online",
				"onyourside",
				"ooo",
				"open",
				"oracle",
				"orange",
				"organic",
				"orientexpress",
				"origins",
				"osaka",
				"otsuka",
				"ott",
				"ovh",
				"pa",
				"page",
				"pamperedchef",
				"panasonic",
				"panerai",
				"paris",
				"pars",
				"partners",
				"parts",
				"party",
				"passagens",
				"pay",
				"pccw",
				"pe",
				"pet",
				"pf",
				"pfizer",
				"pg",
				"ph",
				"pharmacy",
				"philips",
				"phone",
				"photo",
				"photography",
				"photos",
				"physio",
				"piaget",
				"pics",
				"pictet",
				"pictures",
				"pid",
				"pin",
				"ping",
				"pink",
				"pioneer",
				"pizza",
				"pk",
				"pl",
				"place",
				"play",
				"playstation",
				"plumbing",
				"plus",
				"pm",
				"pn",
				"pnc",
				"pohl",
				"poker",
				"politie",
				"porn",
				"post",
				"pr",
				"pramerica",
				"praxi",
				"press",
				"prime",
				"pro",
				"prod",
				"productions",
				"prof",
				"progressive",
				"promo",
				"properties",
				"property",
				"protection",
				"pru",
				"prudential",
				"ps",
				"pt",
				"pub",
				"pw",
				"pwc",
				"py",
				"qa",
				"qpon",
				"quebec",
				"quest",
				"qvc",
				"racing",
				"radio",
				"raid",
				"re",
				"read",
				"realestate",
				"realtor",
				"realty",
				"recipes",
				"red",
				"redstone",
				"redumbrella",
				"rehab",
				"reise",
				"reisen",
				"reit",
				"reliance",
				"ren",
				"rent",
				"rentals",
				"repair",
				"report",
				"republican",
				"rest",
				"restaurant",
				"review",
				"reviews",
				"rexroth",
				"rich",
				"richardli",
				"ricoh",
				"rightathome",
				"ril",
				"rio",
				"rip",
				"rmit",
				"ro",
				"rocher",
				"rocks",
				"rodeo",
				"rogers",
				"room",
				"rs",
				"rsvp",
				"ru",
				"ruhr",
				"run",
				"rw",
				"rwe",
				"ryukyu",
				"sa",
				"saarland",
				"safe",
				"safety",
				"sakura",
				"sale",
				"salon",
				"samsclub",
				"samsung",
				"sandvik",
				"sandvikcoromant",
				"sanofi",
				"sap",
				"sapo",
				"sarl",
				"sas",
				"save",
				"saxo",
				"sb",
				"sbi",
				"sbs",
				"sc",
				"sca",
				"scb",
				"schaeffler",
				"schmidt",
				"scholarships",
				"school",
				"schule",
				"schwarz",
				"science",
				"scjohnson",
				"scor",
				"scot",
				"sd",
				"se",
				"seat",
				"secure",
				"security",
				"seek",
				"select",
				"sener",
				"services",
				"ses",
				"seven",
				"sew",
				"sex",
				"sexy",
				"sfr",
				"sg",
				"sh",
				"shangrila",
				"sharp",
				"shaw",
				"shell",
				"shia",
				"shiksha",
				"shoes",
				"shop",
				"shopping",
				"shouji",
				"show",
				"showtime",
				"shriram",
				"si",
				"silk",
				"sina",
				"singles",
				"site",
				"sj",
				"sk",
				"ski",
				"skin",
				"sky",
				"skype",
				"sl",
				"sling",
				"sm",
				"smart",
				"smile",
				"sn",
				"sncf",
				"so",
				"soccer",
				"social",
				"softbank",
				"software",
				"sohu",
				"solar",
				"solutions",
				"song",
				"sony",
				"soy",
				"space",
				"spiegel",
				"spot",
				"spreadbetting",
				"sr",
				"srl",
				"srt",
				"st",
				"stada",
				"staples",
				"star",
				"starhub",
				"statebank",
				"statefarm",
				"statoil",
				"stc",
				"stcgroup",
				"stockholm",
				"storage",
				"store",
				"stream",
				"studio",
				"study",
				"style",
				"su",
				"sucks",
				"supplies",
				"supply",
				"support",
				"surf",
				"surgery",
				"suzuki",
				"sv",
				"swatch",
				"swiftcover",
				"swiss",
				"sx",
				"sy",
				"sydney",
				"symantec",
				"systems",
				"sz",
				"tab",
				"taipei",
				"talk",
				"taobao",
				"target",
				"tatamotors",
				"tatar",
				"tattoo",
				"tax",
				"taxi",
				"tc",
				"tci",
				"td",
				"tdk",
				"team",
				"tech",
				"technology",
				"tel",
				"telecity",
				"telefonica",
				"temasek",
				"tennis",
				"teva",
				"tf",
				"tg",
				"th",
				"thd",
				"theater",
				"theatre",
				"tiaa",
				"tickets",
				"tienda",
				"tiffany",
				"tips",
				"tires",
				"tirol",
				"tj",
				"tjmaxx",
				"tjx",
				"tk",
				"tkmaxx",
				"tl",
				"tm",
				"tmall",
				"tn",
				"to",
				"today",
				"tokyo",
				"tools",
				"top",
				"toray",
				"toshiba",
				"total",
				"tours",
				"town",
				"toyota",
				"toys",
				"tr",
				"trade",
				"trading",
				"training",
				"travel",
				"travelchannel",
				"travelers",
				"travelersinsurance",
				"trust",
				"trv",
				"tt",
				"tube",
				"tui",
				"tunes",
				"tushu",
				"tv",
				"tvs",
				"tw",
				"tz",
				"ua",
				"ubank",
				"ubs",
				"uconnect",
				"ug",
				"unicom",
				"university",
				"uno",
				"uol",
				"ups",
				"us",
				"uy",
				"uz",
				"va",
				"vacations",
				"vana",
				"vanguard",
				"vc",
				"ve",
				"vegas",
				"ventures",
				"verisign",
				"versicherung",
				"vet",
				"vg",
				"vi",
				"viajes",
				"video",
				"vig",
				"viking",
				"villas",
				"vin",
				"vip",
				"virgin",
				"visa",
				"vision",
				"vista",
				"vistaprint",
				"viva",
				"vivo",
				"vlaanderen",
				"vn",
				"vodka",
				"volkswagen",
				"volvo",
				"vote",
				"voting",
				"voto",
				"voyage",
				"vu",
				"vuelos",
				"wales",
				"walmart",
				"walter",
				"wang",
				"wanggou",
				"warman",
				"watch",
				"watches",
				"weather",
				"weatherchannel",
				"webcam",
				"weber",
				"website",
				"wed",
				"wedding",
				"weibo",
				"weir",
				"wf",
				"whoswho",
				"wien",
				"wiki",
				"williamhill",
				"win",
				"windows",
				"wine",
				"winners",
				"wme",
				"wolterskluwer",
				"woodside",
				"work",
				"works",
				"world",
				"wow",
				"ws",
				"wtc",
				"wtf",
				"xbox",
				"xerox",
				"xfinity",
				"xihuan",
				"xin",
				"xn--11b4c3d",
				"xn--1ck2e1b",
				"xn--1qqw23a",
				"xn--30rr7y",
				"xn--3bst00m",
				"xn--3ds443g",
				"xn--3e0b707e",
				"xn--3oq18vl8pn36a",
				"xn--3pxu8k",
				"xn--42c2d9a",
				"xn--45brj9c",
				"xn--45q11c",
				"xn--4gbrim",
				"xn--54b7fta0cc",
				"xn--55qw42g",
				"xn--55qx5d",
				"xn--5su34j936bgsg",
				"xn--5tzm5g",
				"xn--6frz82g",
				"xn--6qq986b3xl",
				"xn--80adxhks",
				"xn--80ao21a",
				"xn--80aqecdr1a",
				"xn--80asehdb",
				"xn--80aswg",
				"xn--8y0a063a",
				"xn--90a3ac",
				"xn--90ae",
				"xn--90ais",
				"xn--9dbq2a",
				"xn--9et52u",
				"xn--9krt00a",
				"xn--b4w605ferd",
				"xn--bck1b9a5dre4c",
				"xn--c1avg",
				"xn--c2br7g",
				"xn--cck2b3b",
				"xn--cg4bki",
				"xn--clchc0ea0b2g2a9gcd",
				"xn--czr694b",
				"xn--czrs0t",
				"xn--czru2d",
				"xn--d1acj3b",
				"xn--d1alf",
				"xn--e1a4c",
				"xn--eckvdtc9d",
				"xn--efvy88h",
				"xn--estv75g",
				"xn--fct429k",
				"xn--fhbei",
				"xn--fiq228c5hs",
				"xn--fiq64b",
				"xn--fiqs8s",
				"xn--fiqz9s",
				"xn--fjq720a",
				"xn--flw351e",
				"xn--fpcrj9c3d",
				"xn--fzc2c9e2c",
				"xn--fzys8d69uvgm",
				"xn--g2xx48c",
				"xn--gckr3f0f",
				"xn--gecrj9c",
				"xn--gk3at1e",
				"xn--h2brj9c",
				"xn--hxt814e",
				"xn--i1b6b1a6a2e",
				"xn--imr513n",
				"xn--io0a7i",
				"xn--j1aef",
				"xn--j1amh",
				"xn--j6w193g",
				"xn--jlq61u9w7b",
				"xn--jvr189m",
				"xn--kcrx77d1x4a",
				"xn--kprw13d",
				"xn--kpry57d",
				"xn--kpu716f",
				"xn--kput3i",
				"xn--l1acc",
				"xn--lgbbat1ad8j",
				"xn--mgb9awbf",
				"xn--mgba3a3ejt",
				"xn--mgba3a4f16a",
				"xn--mgba7c0bbn0a",
				"xn--mgbaam7a8h",
				"xn--mgbab2bd",
				"xn--mgbai9azgqp6j",
				"xn--mgbayh7gpa",
				"xn--mgbb9fbpob",
				"xn--mgbbh1a71e",
				"xn--mgbc0a9azcg",
				"xn--mgbca7dzdo",
				"xn--mgberp4a5d4ar",
				"xn--mgbi4ecexp",
				"xn--mgbpl2fh",
				"xn--mgbt3dhd",
				"xn--mgbtx2b",
				"xn--mgbx4cd0ab",
				"xn--mix891f",
				"xn--mk1bu44c",
				"xn--mxtq1m",
				"xn--ngbc5azd",
				"xn--ngbe9e0a",
				"xn--node",
				"xn--nqv7f",
				"xn--nqv7fs00ema",
				"xn--nyqy26a",
				"xn--o3cw4h",
				"xn--ogbpf8fl",
				"xn--p1acf",
				"xn--p1ai",
				"xn--pbt977c",
				"xn--pgbs0dh",
				"xn--pssy2u",
				"xn--q9jyb4c",
				"xn--qcka1pmc",
				"xn--qxam",
				"xn--rhqv96g",
				"xn--rovu88b",
				"xn--s9brj9c",
				"xn--ses554g",
				"xn--t60b56a",
				"xn--tckwe",
				"xn--tiq49xqyj",
				"xn--unup4y",
				"xn--vermgensberater-ctb",
				"xn--vermgensberatung-pwb",
				"xn--vhquv",
				"xn--vuq861b",
				"xn--w4r85el8fhu5dnra",
				"xn--w4rs40l",
				"xn--wgbh1c",
				"xn--wgbl6a",
				"xn--xhq521b",
				"xn--xkc2al3hye2a",
				"xn--xkc2dl3a5ee0h",
				"xn--y9a3aq",
				"xn--yfro4i67o",
				"xn--ygbi2ammx",
				"xn--zfr164b",
				"xperia",
				"xxx",
				"xyz",
				"yachts",
				"yahoo",
				"yamaxun",
				"yandex",
				"ye",
				"yodobashi",
				"yoga",
				"yokohama",
				"you",
				"youtube",
				"yt",
				"yun",
				"za",
				"zappos",
				"zara",
				"zero",
				"zip",
				"zippo",
				"zm",
				"zone",
				"zuerich",
				"zw"
			]),
			(t.htmlAttrs = [
				"src=",
				"data=",
				"href=",
				"cite=",
				"formaction=",
				"icon=",
				"manifest=",
				"poster=",
				"codebase=",
				"background=",
				"profile=",
				"usemap="
			]);
	},
	"./node_modules/anchorme/dist-node/separate/fix.js": function(e, t, a) {
		"use strict";
		function n(e, t, a) {
			return (
				e.forEach(function(o, i) {
					!(o.indexOf(".") > -1) ||
						(e[i - 1] === t && e[i + 1] === a) ||
						(e[i + 1] !== t && e[i + 1] !== a) ||
						((e[i] = e[i] + e[i + 1]),
						"string" == typeof e[i + 2] && (e[i] = e[i] + e[i + 2]),
						"string" == typeof e[i + 3] && (e[i] = e[i] + e[i + 3]),
						"string" == typeof e[i + 4] && (e[i] = e[i] + e[i + 4]),
						e.splice(i + 1, 4),
						n(e, t, a));
				}),
				e
			);
		}
		function o(e) {
			return (
				(e = n(e, "(", ")")),
				(e = n(e, "[", "]")),
				(e = n(e, '"', '"')),
				(e = n(e, "'", "'"))
			);
		}
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.fixSeparators = n),
			(t.default = o);
	},
	"./node_modules/anchorme/dist-node/separate/separate.js": function(e, t, a) {
		"use strict";
		function n(e) {
			var t = e
				.replace(/([\s\(\)\[\]<>"'])/g, "\0$1\0")
				.replace(/([?;:,.!]+)(?=(\0|$|\s))/g, "\0$1\0")
				.split("\0");
			return i.default(t);
		}
		function o(e) {
			return e.join("");
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var i = a("./node_modules/anchorme/dist-node/separate/fix.js");
		(t.separate = n), (t.deSeparate = o);
	},
	"./node_modules/anchorme/dist-node/tests/email.js": function(e, t, a) {
		"use strict";
		function n(e) {
			var t = e.match(i);
			if (null === t) return !1;
			for (var a = r.length - 1; a >= 0; a--) if (r[a].test(e)) return !1;
			var n = t[2];
			return !!n && -1 !== o.tlds.indexOf(n);
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = a("./node_modules/anchorme/dist-node/lists.js"),
			i = /^[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i,
			r = [/^[!#$%&'*+\-\/=?^_`{|}~.]/, /[.]{2,}[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@/i, /\.@/];
		t.default = n;
	},
	"./node_modules/anchorme/dist-node/tests/hasprotocol.js": function(e, t, a) {
		"use strict";
		function n(e) {
			return (
				(e = e.toLowerCase()),
				0 === e.indexOf("http://")
					? "http://"
					: 0 === e.indexOf("https://")
						? "https://"
						: 0 === e.indexOf("ftp://")
							? "ftp://"
							: 0 === e.indexOf("ftps://")
								? "ftps://"
								: 0 === e.indexOf("file:///")
									? "file:///"
									: 0 === e.indexOf("mailto:") && "mailto:"
			);
		}
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
	},
	"./node_modules/anchorme/dist-node/tests/ip.js": function(e, t, a) {
		"use strict";
		function n(e) {
			if (!i.test(e)) return !1;
			var t = e.split("."),
				a = Number(t[0]);
			if (isNaN(a) || a > 255 || a < 0) return !1;
			var n = Number(t[1]);
			if (isNaN(n) || n > 255 || n < 0) return !1;
			var r = Number(t[2]);
			if (isNaN(r) || r > 255 || r < 0) return !1;
			var s = Number((t[3].match(/^\d+/) || [])[0]);
			if (isNaN(s) || s > 255 || s < 0) return !1;
			var l = (t[3].match(/(^\d+)(:)(\d+)/) || [])[3];
			return !(l && !o.isPort(l));
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = a("./node_modules/anchorme/dist-node/util.js"),
			i = /^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
		t.default = n;
	},
	"./node_modules/anchorme/dist-node/tests/url.js": function(e, t, a) {
		"use strict";
		function n(e) {
			var t = e.match(r);
			return (
				null !== t &&
				("string" == typeof t[3] &&
					(-1 !== i.tlds.indexOf(t[3].toLowerCase()) && !(t[5] && !o.isPort(t[5]))))
			);
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = a("./node_modules/anchorme/dist-node/util.js"),
			i = a("./node_modules/anchorme/dist-node/lists.js"),
			r = /^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
		t.default = n;
	},
	"./node_modules/anchorme/dist-node/transform/identify.js": function(e, t, a) {
		"use strict";
		function n(e, t) {
			return e.map(function(a, n) {
				var c = encodeURI(a);
				if (c.indexOf(".") < 1 && !i.default(c)) return a;
				var d = null,
					u = i.default(c) || "";
				return (
					u && (c = c.substr(u.length)),
					t.files &&
						"file:///" === u &&
						c.split(/\/|\\/).length - 1 &&
						(d = { reason: "file", protocol: u, raw: a, encoded: c }),
					!d &&
						t.urls &&
						l.default(c) &&
						(d = {
							reason: "url",
							protocol:
								u ||
								("function" == typeof t.defaultProtocol
									? t.defaultProtocol(a)
									: t.defaultProtocol),
							raw: a,
							encoded: c
						}),
					!d &&
						t.emails &&
						o.default(c) &&
						(d = { reason: "email", protocol: "mailto:", raw: a, encoded: c }),
					!d &&
						t.ips &&
						s.default(c) &&
						(d = {
							reason: "ip",
							protocol:
								u ||
								("function" == typeof t.defaultProtocol
									? t.defaultProtocol(a)
									: t.defaultProtocol),
							raw: a,
							encoded: c
						}),
					d && (("'" !== e[n - 1] && '"' !== e[n - 1]) || !~r.htmlAttrs.indexOf(e[n - 2]))
						? d
						: a
				);
			});
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = a("./node_modules/anchorme/dist-node/tests/email.js"),
			i = a("./node_modules/anchorme/dist-node/tests/hasprotocol.js"),
			r = a("./node_modules/anchorme/dist-node/lists.js"),
			s = a("./node_modules/anchorme/dist-node/tests/ip.js"),
			l = a("./node_modules/anchorme/dist-node/tests/url.js");
		t.default = n;
	},
	"./node_modules/anchorme/dist-node/transform/transform.js": function(e, t, a) {
		"use strict";
		function n(e, t) {
			var a = s.separate(e),
				n = r.default(a, t);
			if (t.exclude)
				for (var l = 0; l < n.length; l++) {
					var c = n[l];
					"object" == typeof c && t.exclude(c) && (n[l] = c.raw);
				}
			if (t.list) {
				for (var d = [], u = 0; u < n.length; u++) {
					var m = n[u];
					"string" != typeof m && d.push(m);
				}
				return d;
			}
			return (
				(n = n.map(function(e) {
					return "string" == typeof e ? e : o(e, t);
				})),
				i.deSeparate(n)
			);
		}
		function o(e, t) {
			var a = e.protocol + e.encoded,
				n = e.raw;
			return (
				"number" == typeof t.truncate &&
					n.length > t.truncate &&
					(n = n.substring(0, t.truncate) + "..."),
				"object" == typeof t.truncate &&
					n.length > t.truncate[0] + t.truncate[1] &&
					(n = n.substr(0, t.truncate[0]) + "..." + n.substr(n.length - t.truncate[1])),
				void 0 === t.attributes && (t.attributes = []),
				'<a href="' +
					a +
					'" ' +
					t.attributes
						.map(function(t) {
							if ("function" != typeof t) return " " + t.name + '="' + t.value + '" ';
							var a = (t(e) || {}).name,
								n = (t(e) || {}).value;
							return a && !n ? " name " : a && n ? " " + a + '="' + n + '" ' : void 0;
						})
						.join("") +
					">" +
					n +
					"</a>"
			);
		}
		Object.defineProperty(t, "__esModule", { value: !0 });
		var i = a("./node_modules/anchorme/dist-node/separate/separate.js"),
			r = a("./node_modules/anchorme/dist-node/transform/identify.js"),
			s = a("./node_modules/anchorme/dist-node/separate/separate.js");
		t.default = n;
	},
	"./node_modules/anchorme/dist-node/util.js": function(e, t, a) {
		"use strict";
		function n(e) {
			return (
				e ||
					(e = {
						attributes: [],
						ips: !0,
						emails: !0,
						urls: !0,
						files: !0,
						truncate: 1 / 0,
						defaultProtocol: "http://",
						list: !1
					}),
				"object" != typeof e.attributes && (e.attributes = []),
				"boolean" != typeof e.ips && (e.ips = !0),
				"boolean" != typeof e.emails && (e.emails = !0),
				"boolean" != typeof e.urls && (e.urls = !0),
				"boolean" != typeof e.files && (e.files = !0),
				"boolean" != typeof e.list && (e.list = !1),
				"string" != typeof e.defaultProtocol &&
					"function" != typeof e.defaultProtocol &&
					(e.defaultProtocol = "http://"),
				"number" == typeof e.truncate ||
					("object" == typeof e.truncate && null !== e.truncate) ||
					(e.truncate = 1 / 0),
				e
			);
		}
		function o(e) {
			return !isNaN(Number(e)) && !(Number(e) > 65535);
		}
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.defaultOptions = n),
			(t.isPort = o);
	},
	"./node_modules/timeago/jquery.timeago.js": function(e, t, a) {
		var n, o, i;
		/**
		 * Timeago is a jQuery plugin that makes it easy to support automatically
		 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
		 *
		 * @name timeago
		 * @version 1.6.3
		 * @requires jQuery v1.2.3+
		 * @author Ryan McGeary
		 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
		 *
		 * For usage and examples, visit:
		 * http://timeago.yarp.com/
		 *
		 * Copyright (c) 2008-2017, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
		 */
		!(function(r) {
			(o = [a("./node_modules/jquery/dist/jquery.js")]),
				(n = r),
				void 0 !== (i = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = i);
		})(function(e) {
			function t() {
				var t = i.settings;
				if (t.autoDispose && !e.contains(document.documentElement, this))
					return e(this).timeago("dispose"), this;
				var r = a(this);
				return (
					isNaN(r.datetime) ||
						(0 === t.cutoff || Math.abs(o(r.datetime)) < t.cutoff
							? e(this).text(n(r.datetime))
							: e(this).attr("title").length > 0 &&
							  e(this).text(e(this).attr("title"))),
					this
				);
			}
			function a(t) {
				if (((t = e(t)), !t.data("timeago"))) {
					t.data("timeago", { datetime: i.datetime(t) });
					var a = e.trim(t.text());
					i.settings.localeTitle
						? t.attr("title", t.data("timeago").datetime.toLocaleString())
						: !(a.length > 0) || (i.isTime(t) && t.attr("title")) || t.attr("title", a);
				}
				return t.data("timeago");
			}
			function n(e) {
				return i.inWords(o(e));
			}
			function o(e) {
				return new Date().getTime() - e.getTime();
			}
			e.timeago = function(t) {
				return n(
					t instanceof Date
						? t
						: "string" == typeof t
							? e.timeago.parse(t)
							: "number" == typeof t
								? new Date(t)
								: e.timeago.datetime(t)
				);
			};
			var i = e.timeago;
			e.extend(e.timeago, {
				settings: {
					refreshMillis: 6e4,
					allowPast: !0,
					allowFuture: !1,
					localeTitle: !1,
					cutoff: 0,
					autoDispose: !0,
					strings: {
						prefixAgo: null,
						prefixFromNow: null,
						suffixAgo: "ago",
						suffixFromNow: "from now",
						inPast: "any moment now",
						seconds: "less than a minute",
						minute: "about a minute",
						minutes: "%d minutes",
						hour: "about an hour",
						hours: "about %d hours",
						day: "a day",
						days: "%d days",
						month: "about a month",
						months: "%d months",
						year: "about a year",
						years: "%d years",
						wordSeparator: " ",
						numbers: []
					}
				},
				inWords: function(t) {
					function a(a, o) {
						var i = e.isFunction(a) ? a(o, t) : a,
							r = (n.numbers && n.numbers[o]) || o;
						return i.replace(/%d/i, r);
					}
					if (!this.settings.allowPast && !this.settings.allowFuture)
						throw "timeago allowPast and allowFuture settings can not both be set to false.";
					var n = this.settings.strings,
						o = n.prefixAgo,
						i = n.suffixAgo;
					if (
						(this.settings.allowFuture &&
							t < 0 &&
							((o = n.prefixFromNow), (i = n.suffixFromNow)),
						!this.settings.allowPast && t >= 0)
					)
						return this.settings.strings.inPast;
					var r = Math.abs(t) / 1e3,
						s = r / 60,
						l = s / 60,
						c = l / 24,
						d = c / 365,
						u =
							(r < 45 && a(n.seconds, Math.round(r))) ||
							(r < 90 && a(n.minute, 1)) ||
							(s < 45 && a(n.minutes, Math.round(s))) ||
							(s < 90 && a(n.hour, 1)) ||
							(l < 24 && a(n.hours, Math.round(l))) ||
							(l < 42 && a(n.day, 1)) ||
							(c < 30 && a(n.days, Math.round(c))) ||
							(c < 45 && a(n.month, 1)) ||
							(c < 365 && a(n.months, Math.round(c / 30))) ||
							(d < 1.5 && a(n.year, 1)) ||
							a(n.years, Math.round(d)),
						m = n.wordSeparator || "";
					return void 0 === n.wordSeparator && (m = " "), e.trim([o, u, i].join(m));
				},
				parse: function(t) {
					var a = e.trim(t);
					return (
						(a = a.replace(/\.\d+/, "")),
						(a = a.replace(/-/, "/").replace(/-/, "/")),
						(a = a.replace(/T/, " ").replace(/Z/, " UTC")),
						(a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")),
						(a = a.replace(/([\+\-]\d\d)$/, " $100")),
						new Date(a)
					);
				},
				datetime: function(t) {
					var a = i.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
					return i.parse(a);
				},
				isTime: function(t) {
					return (
						"time" ===
						e(t)
							.get(0)
							.tagName.toLowerCase()
					);
				}
			});
			var r = {
				init: function() {
					r.dispose.call(this);
					var a = e.proxy(t, this);
					a();
					var n = i.settings;
					n.refreshMillis > 0 &&
						(this._timeagoInterval = setInterval(a, n.refreshMillis));
				},
				update: function(a) {
					var n = a instanceof Date ? a : i.parse(a);
					e(this).data("timeago", { datetime: n }),
						i.settings.localeTitle && e(this).attr("title", n.toLocaleString()),
						t.apply(this);
				},
				updateFromDOM: function() {
					e(this).data("timeago", {
						datetime: i.parse(
							i.isTime(this) ? e(this).attr("datetime") : e(this).attr("title")
						)
					}),
						t.apply(this);
				},
				dispose: function() {
					this._timeagoInterval &&
						(window.clearInterval(this._timeagoInterval),
						(this._timeagoInterval = null));
				}
			};
			(e.fn.timeago = function(e, t) {
				var a = e ? r[e] : r.init;
				if (!a) throw new Error("Unknown function name '" + e + "' for timeago");
				return (
					this.each(function() {
						a.call(this, t);
					}),
					this
				);
			}),
				document.createElement("abbr"),
				document.createElement("time");
		});
	}
});