(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5433:function(e,t,a){e.exports=a(5562)},5562:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=a(21),s=a(22),l=a(24),u=a(23),p=a(25),m=a(26),h=a(49),b=a(5),d=a(19),f=a(76),E={yellow:{backgroundColor:"#FBC02D"},green:{backgroundColor:"#4CAF50"},lightgreen:{backgroundColor:"#8BC34A"},blue:{backgroundColor:"#0288D1"},lightblue:{backgroundColor:"#03A9F4"},orange:{backgroundColor:"#FF5722"}},y=function(e){var t=Object.keys(E),a=t.length;return t[Object(h.a)(e).reduce(function(e,t){return e+t.charCodeAt(0)},0)%a]},j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.m,{elevation:1,className:e.paper},r.a.createElement(b.g,{className:e.list},r.a.createElement(b.h,{button:!0},r.a.createElement(b.b,{className:e[y("USD")]},"USD"),r.a.createElement(b.j,{primary:"1"}),r.a.createElement(b.i,null,r.a.createElement(f.a,{color:"secondary"}))),r.a.createElement(b.h,{button:!0},r.a.createElement(b.b,{className:e[y("RUB")]},"RUB"),r.a.createElement(b.j,{primary:"65.7533"}),r.a.createElement(b.i,null,r.a.createElement(f.a,null)))))}}]),t}(n.PureComponent),O=Object(d.withStyles)(function(e){return Object(m.a)({list:{margin:"auto",marginTop:16,width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},paper:{margin:16}},E)})(j),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.m,{elevation:1,className:e.paper},r.a.createElement(b.e,{container:!0,justify:"space-around",alignItems:"center",spacing:16},r.a.createElement(b.e,{item:!0,xs:12,container:!0,justify:"center"},r.a.createElement(b.o,{component:"h3",variant:"h3",align:"center"},"Currency calculator")),r.a.createElement(b.e,{item:!0,xs:12,sm:"auto",container:!0,justify:"center"},r.a.createElement(b.f,{className:e.input,type:"number",inputProps:{name:"first-amount",id:"first-amount",min:"0",step:"1"}}),r.a.createElement(b.n,{className:e.input,native:!0,inputProps:{name:"first-currency",id:"first-currency"}},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"RUB"},"RUB"),r.a.createElement("option",{value:"EUR"},"EUR"))),r.a.createElement(b.e,{item:!0,xs:12,sm:"auto",container:!0,justify:"center"},r.a.createElement(b.f,{className:e.input,type:"number",inputProps:{name:"second-amount",id:"second-amount",min:"0",step:"1"}}),r.a.createElement(b.n,{className:e.input,native:!0,inputProps:{name:"second-currency",id:"second-currency"}},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"RUB"},"RUB"),r.a.createElement("option",{value:"EUR"},"EUR")))))}}]),t}(n.PureComponent),v=Object(d.withStyles)(function(){return{paper:{margin:16},input:{margin:8}}})(g),C=a(5565),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(e){a.setState({anchorEl:null}),a.props.onBaseChange(e)},a.handleToHome=function(){a.props.history.push("/")},a.handleToCalculator=function(){a.props.history.push("calculator")},a.state={anchorEl:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.location,c=t.base,o=this.state.anchorEl,i=-1!==n.pathname.indexOf("calculator");return r.a.createElement(b.a,{className:a.root,position:"static",color:"default"},r.a.createElement(b.e,{container:!0,justify:"flex-end",alignItems:"center",spacing:16},r.a.createElement(b.e,{item:!0,xs:12,sm:"auto"},r.a.createElement(b.c,{fullWidth:!0,color:"secondary",variant:"outlined","aria-owns":o?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},"Base Currency: ",c),r.a.createElement(b.k,{id:"simple-menu",anchorEl:o,open:Boolean(o),onClose:function(){return e.handleClose(c)}},this.menuItems)),r.a.createElement(b.e,{item:!0,xs:12,sm:"auto"},r.a.createElement(b.c,{fullWidth:!0,color:i?"default":"primary",variant:i?"outlined":"contained",onClick:this.handleToHome},"Exchange rates")),r.a.createElement(b.e,{item:!0,xs:12,sm:"auto"},r.a.createElement(b.c,{fullWidth:!0,color:i?"primary":"default",variant:i?"contained":"outlined",onClick:this.handleToCalculator},"Exchange calculator"))))}},{key:"menuItems",get:function(){var e=this;return this.props.currencies.map(function(t){return r.a.createElement(b.l,{key:t,onClick:function(){return e.handleClose(t)}},t)})}}]),t}(n.PureComponent),R=Object(C.a)(Object(d.withStyles)(function(){return{root:{padding:8}}})(k)),B=a(5564),x=a(5563),U=a(48),w=a(46),S="RATES_LOAD",N="RATES_FAILURE",P="BASE_CURRENCY_SET",D="https://ratesapi.io/api/latest?base=".concat("GBP"),T=function(e){return parseFloat(e.toFixed(4),10)},A={base:"GBP",initialRates:{},rates:{},error:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(m.a)({},e,{base:"GBP",rates:t.payload.rates,initialRates:Object(m.a)(Object(w.a)({},"GBP",1),t.payload.rates)});case P:if(t.payload.base===e.base)return e;var a=t.payload.base,n=Object.assign({},e.initialRates),r=1/e.initialRates[a];return delete n[a],Object.getOwnPropertyNames(n).forEach(function(t){return n[t]=T(e.initialRates[t]*r)}),n[e.base]=T(e.initialRates[e.base]*r),Object(m.a)({},e,{rates:n,base:a});case N:return Object(m.a)({},e,{error:t.payload.error});default:return e}},I=a(78),W=a.n(I),G=a(131),_=function(e){return{type:S,payload:{rates:e}}},H=function(e){return{type:N,payload:{error:e}}},J=function(e){return{type:P,payload:{base:e}}},L=function(){return function(){var e=Object(G.a)(W.a.mark(function e(t){var a,n;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(D);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t(_(n.rates)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(H(e.t0));case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},M=function(e){return function(t){t(J(e))}},Y=function(e){return[e.base].concat(Object(h.a)(Object.keys(e.rates)))},q=F,z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getRates()}},{key:"render",value:function(){var e=this.props,t=e.base,a=e.currencies,c=e.setBase;return r.a.createElement(B.a,{basename:"/currency-exchange"},r.a.createElement(n.Fragment,null,r.a.createElement(b.d,null),r.a.createElement(R,{base:t,currencies:a,onBaseChange:c}),r.a.createElement(x.a,{path:"/",exact:!0,component:O}),r.a.createElement(x.a,{path:"/calculator",component:v})))}}]),t}(n.Component),K=Object(U.b)(function(e){return{base:e.base,rates:e.rates,currencies:Y(e)}},function(e){return{getRates:function(){return e(L())},setBase:function(t){return e(M(t))}}})(z),Q=a(31),V=a(132),X=a(133),Z=Object(Q.applyMiddleware)(V.a),$=Object(Q.createStore)(q,Object(X.composeWithDevTools)(Z));o.a.render(r.a.createElement(U.a,{store:$},r.a.createElement(K,null)),document.getElementById("root"))}},[[5433,1,2]]]);
//# sourceMappingURL=main.1b422d98.chunk.js.map