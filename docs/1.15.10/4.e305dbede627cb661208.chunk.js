webpackJsonp([4],{"./app/components/HistoryChart/Loadable.js":function(e,o,a){"use strict";var s=a("./node_modules/react-loadable/lib/index.js"),n=a.n(s);o.a=n()({loader:function(){return a.e(17).then(a.bind(null,"./app/components/HistoryChart/index.js"))},loading:function(){return null}})},"./app/components/Me/Me.css":function(e,o,a){var s=a("./node_modules/css-loader/index.js!./app/components/Me/Me.css");"string"==typeof s&&(s=[[e.i,s,""]]);var n={};n.transform=void 0;a("./node_modules/style-loader/lib/addStyles.js")(s,n);s.locals&&(e.exports=s.locals)},"./app/components/Me/index.js":function(e,o,a){"use strict";function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function n(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function t(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var i=a("./node_modules/react/index.js"),l=a.n(i),c=a("./app/components/OffsetMenu/index.js"),r=a("./app/components/OffsetSocial/index.js"),d=a("./app/components/Logo/index.js"),m=a("./node_modules/react-cookie/index.js"),u=(a.n(m),a("./app/actions/MeActions.js")),v=a("./app/stores/MeStore.js"),p=a("./app/components/HistoryChart/Loadable.js"),h=a("./app/components/PositionMap/Loadable.js"),f=a("./node_modules/jquery/dist/jquery.js"),b=a.n(f),N=a("./app/components/Me/Me.css"),y=(a.n(N),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,a,s,n){var t=o&&o.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&t)for(var l in t)void 0===a[l]&&(a[l]=t[l]);else a||(a=t||{});if(1===i)a.children=n;else if(i>1){for(var c=Array(i),r=0;r<i;r++)c[r]=arguments[r+3];a.children=c}return{$$typeof:e,type:o,key:void 0===s?null:""+s,ref:null,props:a,_owner:null}}}()),w=function(){function e(e,o){for(var a=0;a<o.length;a++){var s=o[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(o,a,s){return a&&e(o.prototype,a),s&&e(o,s),o}}(),g=y(r.a,{}),j=y(d.a,{className:"hidden-xs hidden-sm"}),M=y(c.a,{}),S=y("div",{className:"col-md-3"}),_=y("i",{className:"fa fa-desktop"}),k=y("div",{className:"col-md-3"}),x=y("div",{className:"col-md-3"}),C=y("h3",{},void 0,"Statistics"),I=y("p",{},void 0,"See how well your channel is performing in the last 7 days:"),O=y("center",{},void 0,y("p",{},void 0,y("b",{},void 0,"Subscribers"))),P=y("center",{},void 0,y("p",{},void 0,y("b",{},void 0,"Views"))),L=y("div",{className:"col-md-3"}),T=y("div",{className:"col-md-3"}),E=y("h4",{},void 0,"On sailing-channels.com"),H=y("b",{},void 0,"Today's channel views:"),R=y("b",{},void 0,"Today's Video views:"),V=y("div",{className:"col-md-3"}),A=y("div",{className:"row content-row"},void 0,y("div",{className:"col-md-3"}),y("div",{className:"col-md-6"},void 0,y("hr",{})),y("div",{className:"col-md-3"})),F=y("div",{className:"col-md-3"}),D=y("h3",{},void 0,"AIS"),U=y("p",{},void 0,"In case you broadcast your positions via AIS, you can store your MMSI number here. Your position will be displayed on a map on your channel detail page."),z=y("label",{htmlFor:"mmsi",className:"col-sm-2 control-label"},void 0,"AIS MMSI"),Y=y("div",{className:"col-md-3"}),q=y("div",{className:"row content-row"},void 0,y("div",{className:"col-md-3"}),y("div",{className:"col-md-6"},void 0,y("hr",{})),y("div",{className:"col-md-3"})),B=y("div",{className:"col-md-3"}),$=y("h3",{},void 0,"DeLorme inReach"),J=y("p",{},void 0,'If you are using DeLorme\'s inReach satellite position tracking and share your position updates via the "share" page, type your username or the link to your shared map into the following field:'),W=y("label",{htmlFor:"mmsi",className:"col-sm-2 control-label"},void 0,"inReach Username"),G=y("div",{className:"col-md-3"}),K=y("div",{className:"row content-row"},void 0,y("div",{className:"col-md-3"}),y("div",{className:"col-md-6"},void 0,y("hr",{})),y("div",{className:"col-md-3"})),Q=y("div",{className:"col-md-3"}),X=y("h3",{},void 0,"Your boat position"),Z=y("label",{htmlFor:"boatcolor",className:"col-sm-2 control-label"},void 0,"Boat Color"),ee=y("label",{htmlFor:"trailnumber",className:"col-sm-2 control-label"},void 0,"Show last positions"),oe=y("p",{},void 0," "),ae=y("b",{},void 0,"embed the map"),se=y("div",{className:"col-md-3"}),ne=y("div",{className:"row content-row"},void 0,y("div",{className:"col-md-3"}),y("div",{className:"col-md-6"},void 0,y("hr",{})),y("div",{className:"col-md-3"})),te=y("div",{className:"col-md-3"}),ie=y("button",{className:"btn btn-success btn-raised",disabled:"disabled"},void 0,y("i",{className:"fa fa-spinner fa-pulse"})),le=y("i",{className:"fa fa-check"}),ce=y("a",{href:"/logout",title:"Sign out",className:"btn btn-default btn-raised"},void 0,y("i",{className:"fa fa-power-off"})," Sign Out"),re=y("div",{className:"col-md-3"}),de=function(e){function o(e){s(this,o);var a=n(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return a.state=v.a.getState(),a.onChange=a.onChange.bind(a),a}return t(o,e),w(o,[{key:"componentDidMount",value:function(){document.title="Me | Sailing Channels",v.a.listen(this.onChange),u.a.getMe()}},{key:"componentWillUnmount",value:function(){v.a.unlisten(this.onChange)}},{key:"onChange",value:function(e){this.setState(e)}},{key:"saveProfile",value:function(e){e.preventDefault(),this.setState({loading:!0}),b.a.post("/api/me/profile",{mmsi:parseInt(b()("#mmsi").val()),inreach:b()("#inreach").val(),boatcolor:b()("#boatcolor").val(),trailnumber:parseInt(Math.min(99999,Math.max(0,parseInt(b()("#trailnumber").val()))))}).done(function(){location.reload()})}},{key:"selectEmbedCode",value:function(e){e.target.focus(),e.target.select()}},{key:"correctInReachUsername",value:function(e){var o=b()(e.target),a=o.val().split("/"),s=a[a.length-1];o.val(s)}},{key:"render",value:function(){if(!this.state.me.user)return null;var e=this.state.me.channel,o=this.state.me.user.profile||null,a='<iframe src="https://sailing-channels.com/map?channel='+this.state.me.channel.id+'" width="100%" height="500px" frameborder="0"></iframe><p>Check out my YouTube channel on <a href="https://sailing-channels.com/channel/'+this.state.me.channel.id+'" target="_blank">https://sailing-channels.com/channel/'+this.state.me.channel.id+"</a></p>";return y("div",{className:"container"},void 0,g,j,M,y("div",{className:"row content-row"},void 0,S,y("div",{className:"col-md-6"},void 0,y("h1",{className:"content-h1"},void 0,y("img",{src:this.state.me.user.thumbnail,alt:"Thumbnail",width:"50"})," ",this.state.me.user.title),e?y("center",{},void 0,y("a",{target:"_blank",href:"/channel/"+this.state.me.channel.id,className:"btn btn-default btn-raised btn-sm"},void 0,_," Preview channel page")):null),k),e?y("div",{className:"row content-row"},void 0,x,y("div",{className:"col-md-6"},void 0,C,I,y("div",{className:"row"},void 0,y("div",{className:"col-md-6"},void 0,O,y(p.a,{name:"subscribers",data:this.state.me.channel.subHist})),y("div",{className:"col-md-6"},void 0,P,y(p.a,{name:"views",data:this.state.me.channel.viewHist})))),L):null,e?y("div",{className:"row content-row"},void 0,T,y("div",{className:"col-md-6"},void 0,E,y("p",{},void 0,H," ",this.state.me.visits_channel),y("p",{},void 0,R," ",this.state.me.visits_videos)),V):null,e?A:null,e?y("div",{className:"row content-row"},void 0,F,y("div",{className:"col-md-6"},void 0,D,U,y("div",{className:"form-horizontal"},void 0,y("div",{className:"form-group"},void 0,z,y("div",{className:"col-sm-10"},void 0,y("input",{type:"number",className:"form-control",id:"mmsi",defaultValue:o?o.mmsi:"",placeholder:"MMSI number"}))))),Y):null,e?q:null,e?y("div",{className:"row content-row"},void 0,B,y("div",{className:"col-md-6"},void 0,$,J,y("div",{className:"form-horizontal"},void 0,y("div",{className:"form-group"},void 0,W,y("div",{className:"col-sm-10"},void 0,y("input",{type:"text",className:"form-control",onBlur:this.correctInReachUsername.bind(this),id:"inreach",defaultValue:o?o.inreach:"",placeholder:"https://share.delorme.com/username"}))))),G):null,e?K:null,e?y("div",{className:"row content-row"},void 0,Q,y("div",{className:"col-md-6"},void 0,X,y("div",{className:"form-horizontal"},void 0,y("div",{className:"form-group"},void 0,Z,y("div",{className:"col-sm-10"},void 0,y("input",{type:"color",className:"form-control",id:"boatcolor",defaultValue:o&&o.boatcolor?o.boatcolor:"#f1c40f",placeholder:"E.g. hull color"}))),y("div",{className:"form-group"},void 0,ee,y("div",{className:"col-sm-10"},void 0,y("input",{type:"number",className:"form-control",min:"0",max:"99999",step:"1",id:"trailnumber",defaultValue:o&&o.trailnumber?o.trailnumber:"100"})))),this.state.me.user.position?y("div",{},void 0,y(h.a,{channel:this.state.me.channel.id}),oe,y("p",{},void 0,"Feel free to ",ae," into your website via the following HTML code:",y("textarea",{className:"embed-code-form-control form-control",rows:"4",value:a,onClick:this.selectEmbedCode.bind(this)}))):null),se):null,e?ne:null,y("div",{className:"row content-row"},void 0,te,y("div",{className:"col-md-6"},void 0,y("center",{},void 0,e?!0===this.state.loading?ie:y("button",{onClick:this.saveProfile.bind(this),className:"btn btn-success btn-raised"},void 0,le," Save"):null," ",ce)),re))}}]),o}(l.a.Component);o.default=de},"./app/components/PositionMap/Loadable.js":function(e,o,a){"use strict";var s=a("./node_modules/react-loadable/lib/index.js"),n=a.n(s);o.a=n()({loader:function(){return a.e(20).then(a.bind(null,"./app/components/PositionMap/index.js"))},loading:function(){return null}})},"./node_modules/css-loader/index.js!./app/components/Me/Me.css":function(e,o,a){o=e.exports=a("./node_modules/css-loader/lib/css-base.js")(void 0),o.push([e.i,".embed-code-form-control{background-color:#efefef}",""])}});