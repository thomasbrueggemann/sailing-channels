webpackJsonp([13], {
	"./app/components/PrivacyPolicy/index.js": function(e, t, o) {
		"use strict";
		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function a(e, t) {
			if (!e)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called"
				);
			return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
		}
		function r(e, t) {
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
		var n = o("./node_modules/react/index.js"),
			s = o.n(n),
			l = o("./app/components/OffsetMenu/index.js"),
			c = o("./app/components/OffsetSocial/index.js"),
			d = o("./app/components/Logo/index.js"),
			h = (function() {
				var e =
					("function" == typeof Symbol && Symbol.for && Symbol.for("react.element")) ||
					60103;
				return function(t, o, i, a) {
					var r = t && t.defaultProps,
						n = arguments.length - 3;
					if ((o || 0 === n || (o = {}), o && r))
						for (var s in r) void 0 === o[s] && (o[s] = r[s]);
					else o || (o = r || {});
					if (1 === n) o.children = a;
					else if (n > 1) {
						for (var l = Array(n), c = 0; c < n; c++) l[c] = arguments[c + 3];
						o.children = l;
					}
					return {
						$$typeof: e,
						type: t,
						key: void 0 === i ? null : "" + i,
						ref: null,
						props: o,
						_owner: null
					};
				};
			})(),
			p = (function() {
				function e(e, t) {
					for (var o = 0; o < t.length; o++) {
						var i = t[o];
						(i.enumerable = i.enumerable || !1),
							(i.configurable = !0),
							"value" in i && (i.writable = !0),
							Object.defineProperty(e, i.key, i);
					}
				}
				return function(t, o, i) {
					return o && e(t.prototype, o), i && e(t, i), t;
				};
			})(),
			v = h(
				"div",
				{ className: "container" },
				void 0,
				h(c.a, {}),
				h(d.a, { className: "hidden-xs hidden-sm" }),
				h(l.a, {}),
				h(
					"div",
					{ className: "row content-row" },
					void 0,
					h("div", { className: "col-md-3" }),
					h(
						"div",
						{ className: "col-md-6" },
						void 0,
						h("h1", { className: "content-h1" }, void 0, "Privacy Policy"),
						h("h3", {}, void 0, "Data Controller and Owner"),
						h(
							"p",
							{},
							void 0,
							"Sailing Channels,",
							h("span", { className: "reverse" }, void 0, "moc.slennahc-gnilias@yoha")
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h3", {}, void 0, "Types of Data collected"),
						h(
							"p",
							{},
							void 0,
							"Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookie and Usage data. Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection. The Personal Data may be freely provided by the User, or collected automatically when using this Application. Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User. Failure to provide certain Personal Data may make it impossible for this Application to provide its services. Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h3", {}, void 0, "Mode and place of processing the Data"),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Methods of processing"),
						h(
							"p",
							{},
							void 0,
							"The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Place"),
						h(
							"p",
							{},
							void 0,
							"The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Retention time"),
						h(
							"p",
							{},
							void 0,
							"The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h3", {}, void 0, "The use of the collected Data"),
						h(
							"p",
							{},
							void 0,
							"The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Analytics and Displaying content from external platforms. The Personal Data used for each purpose is outlined in the specific sections of this document."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h(
							"h3",
							{},
							void 0,
							"Detailed information on the processing of Personal Data"
						),
						h(
							"p",
							{},
							void 0,
							"Personal Data is collected for the following purposes and using the following services:"
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Analytics"),
						h(
							"p",
							{},
							void 0,
							"The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h5", {}, void 0, "Google Analytics (Google Inc.)"),
						h(
							"p",
							{},
							void 0,
							"Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookie and Usage data. Place of processing: USA –",
							" ",
							h(
								"a",
								{
									href: "http://www.google.com/intl/en/policies/privacy/",
									target: "_blank"
								},
								void 0,
								"Privacy Policy"
							),
							" ",
							"–",
							" ",
							h(
								"a",
								{
									href: "http://tools.google.com/dlpage/gaoptout?hl=en",
									target: "_blank"
								},
								void 0,
								"Opt Out"
							)
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Displaying content from external platforms"),
						h(
							"p",
							{},
							void 0,
							"These services allow you to view content hosted on external platforms directly from the pages of this Application and interact with them. If a service of this kind is installed, it may still collect web traffic data for the pages where the service is installed, even when users do not use it."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h5", {}, void 0, "Youtube video widget (Google Inc.)"),
						h(
							"p",
							{},
							void 0,
							"Youtube is a video content visualization service provided by Google Inc. that allows this Application to incorporate content of this kind on its pages. Personal Data collected: Cookie and Usage data. Place of processing: USA –",
							" ",
							h(
								"a",
								{
									href: "http://www.google.it/intl/en/policies/privacy/",
									target: "_blank"
								},
								void 0,
								"Privacy Policy"
							)
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h(
							"h3",
							{},
							void 0,
							"Additional information about Data collection and processing"
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Legal action"),
						h(
							"p",
							{},
							void 0,
							"The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services. The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Additional information about User's Personal Data"),
						h(
							"p",
							{},
							void 0,
							"In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "System Logs and Maintenance"),
						h(
							"p",
							{},
							void 0,
							"For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System Logs) or use for this purpose other Personal Data (such as IP Address)."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Information not contained in this policy"),
						h(
							"p",
							{},
							void 0,
							"More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "The rights of Users"),
						h(
							"p",
							{},
							void 0,
							"Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above. This Application does not support “Do Not Track” requests. To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Changes to this privacy policy"),
						h(
							"p",
							{},
							void 0,
							"The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller removes the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users."
						),
						h("hr", {}),
						h("h3", {}, void 0, "Definitions and legal references"),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Personal Data (or Data)"),
						h(
							"p",
							{},
							void 0,
							"Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Usage Data"),
						h(
							"p",
							{},
							void 0,
							"Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "User"),
						h(
							"p",
							{},
							void 0,
							"The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Data Subject"),
						h(
							"p",
							{},
							void 0,
							"The legal or natural person to whom the Personal Data refers."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Data Processor (or Data Supervisor)"),
						h(
							"p",
							{},
							void 0,
							"The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Data Controller (or Owner)"),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h(
							"p",
							{},
							void 0,
							"The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "This Application"),
						h(
							"p",
							{},
							void 0,
							"The hardware or software tool by which the Personal Data of the User is collected."
						),
						h("center", {}, void 0, h("p", {}, void 0, "~")),
						h("h4", {}, void 0, "Cookie"),
						h("p", {}, void 0, "Small piece of data stored in the User's device."),
						h("hr", {}),
						h("h3", {}, void 0, "Legal information"),
						h(
							"p",
							{},
							void 0,
							"Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies. This privacy policy relates solely to this Application."
						)
					),
					h("div", { className: "col-md-3" })
				)
			),
			u = (function(e) {
				function t() {
					return (
						i(this, t),
						a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
					);
				}
				return (
					r(t, e),
					p(t, [
						{
							key: "componentDidMount",
							value: function() {
								document.title = "Privacy Policy | Sailing Channels";
							}
						},
						{
							key: "render",
							value: function() {
								return v;
							}
						}
					]),
					t
				);
			})(s.a.PureComponent);
		t.default = u;
	}
});
