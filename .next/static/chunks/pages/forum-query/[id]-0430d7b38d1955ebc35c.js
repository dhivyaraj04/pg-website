_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"474b":function(n,t){n.exports="/_next/static/images/loader-072b3f895dd9af5f1e6aae0e58561749.gif"},"6f/8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return i.Container}});var i=e("WxlW")},"Bs8+":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSP",(function(){return A})),e.d(t,"default",(function(){return O}));var i=e("q1tI"),r=e.n(i),o=e("8Kt/"),a=e.n(o),u=e("r1fl"),c=e("ODXe"),l=e("6f/8"),f=e("8IXb"),m=e("YFqc"),g=e.n(m),d=e("wJam"),p=e("Puqf"),s=e("hdqj"),h=r.a.createElement;function x(n){var t=n.QuestionItems;function e(n){return Object(p.a)(n)+" "+Object(p.d)(n)+" "+Object(p.e)(n)}function i(n){var t=Object(p.b)(n)>=12?"PM":"AM";return Object(p.b)(n)+":"+Object(p.c)(n)+" "+t}return h(r.a.Fragment,null,t.map((function(n,t){return h(r.a.Fragment,null,h(f.Row,null,h(f.Column,{md:12,sm:12,xs:12},h(d.p,{justifyContent:"flex-end"},h(d.T,{marginRight:"10",marginTop:"40",marginBottom:"0"},h(g.a,{href:"/forum"},h(d.E,{fontSize:"15px",padding:"5px",border:"0.4px solid #029532",background:"#029532",color:"#fff",width:"100px",height:"30px"},"Back")))))),h(d.T,{marginTop:"0",marginBottom:"10"},h(f.Row,null,h(f.Column,{md:12,sm:12,xs:12},h(d.p,{justifyContent:"space-between"},h(d.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},h(d.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},n.expertise))),h(d.T,{marginTop:"5",marginBottom:"5"},h(d.U,{fontSize:"16px",color:"#4F4F4F",lineHeight:"1.5",letterSpacing:"0.10px"},n.queryText)),h(d.T,{marginTop:"5",marginBottom:"10",marginRight:"-15"},h(f.Row,null,h(f.Column,{sm:12,md:12,xs:12},h(d.p,null,h(d.T,{marginRight:"10",marginTop:"5",marginLeft:"-15"},h(d.U,{fontSize:"13px",color:"#4F4F4F"},n.subExpertise)),h(d.T,{marginTop:"0"},h(d.U,{fontSize:"20px",color:"#4F4F4F"},"|")),h(d.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},h(d.U,{fontSize:"13px",color:"#4F4F4F"},e(n.timestamp))),h(d.T,{marginTop:"0"},h(d.U,{fontSize:"20px",color:"#4F4F4F"},"|")),h(d.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},h(d.U,{fontSize:"13px",color:"#4F4F4F"},i(n.timestamp))))))))),h("div",null,n.answers?h(r.a.Fragment,null,n.answers.map((function(t,r){return h(f.Row,null,h(f.Column,{md:1,sm:2,xs:2},h(d.T,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},h(d.x,{src:t.consultant.image?t.consultant.image:s,height:"40",width:"40",borderRadius:"50%"}))),h(f.Column,{md:11,sm:10,xs:10},h(d.p,null,h(d.T,{marginRight:"10",marginTop:"10"},h(d.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},t.consultant.name))),h(d.T,{marginBottom:"10",marginRight:"-15px"},h(d.t,{borderBottom:"1px solid #E0E0E0"},h(d.p,null,h(d.T,{marginRight:"10",marginTop:"10"},h(d.U,{fontSize:"14px",color:"#AFAFAF"},n.expertise)),h(d.T,{marginTop:"6"},h(d.U,{fontSize:"20px",color:"#AFAFAF"},"|")),h(d.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},h(d.U,{fontSize:"14px",color:"#AFAFAF"},e(t.createdAt))),h(d.T,{marginTop:"6"},h(d.U,{fontSize:"20px",color:"#AFAFAF"},"|")),h(d.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},h(d.U,{fontSize:"14px",color:"#AFAFAF"},i(t.createdAt)))),h(d.T,{marginTop:"10",marginBottom:"10"},h(d.U,{fontSize:"16px",color:"AFAFAF",letterSpacing:"0.10px",lineHeight:"1.5"},t.answer))))))}))):h("div",null))))})))}var b=e("GNyq"),T=e("gJGr"),F=e("474b"),w=r.a.createElement;function S(n){var t=n.queryId,e=r.a.useState([]),i=Object(c.a)(e,2),o=i[0],a=i[1];return r.a.useEffect((function(){a([]),function(n){fetch("".concat(b.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(n){return n.json()})).then((function(t){var e=t.queries.filter((function(t){return t._id===n}));a(e)}))}(t)}),[]),w(r.a.Fragment,null,w(d.t,{borderTop:"1px solid #E0E0E0"}),w(l.Container,null,w(f.Row,null,w(f.Column,{md:12,sm:12,xs:12},0===o.length?w(d.h,null,w(d.x,{src:F})):w(x,{QuestionItems:o})))),w(T.a,null))}var v=e("pkQc"),y=r.a.createElement,A=!0;function O(n){var t=n.queryId;return y("main",null,y(a.a,null,y("title",null,"Protalk App"),y("link",{rel:"icon",href:"/favicon.ico"}),y("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),y("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),y("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),y("div",null,y(u.a,null),y(S,{queryId:t}),y(v.a,null)))}},Puqf:function(n,t,e){"use strict";function i(n){return new Date(n).getDate()}function r(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(n).getMonth()]}function o(n){return new Date(n).getFullYear()}function a(n){return new Date(n).getHours()}function u(n){var t=new Date(n);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}e.d(t,"a",(function(){return i})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u}))},WxlW:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Container=void 0;var i,r=(i=e("vOnD"))&&i.__esModule?i:{default:i},o=e("i5To"),a=e("a3/C");function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),i.forEach((function(t){c(n,t,e[t])}))}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  font-family: ",";\n  width: ",";\n  margin-right: auto;\n  margin-left: auto;\n  font-size:  ",";\n  font-weight: ",";\n  line-height: 1.5;\n  box-sizing: border-box;\n  @media (min-width: ",") {\n    max-width: ",";\n    box-sizing: border-box;\n  };\n  @media (min-width: ",") {\n    max-width: ",";\n  };\n  @media (min-width: ",") {\n    max-width: ",";\n  };\n  @media (min-width: ",") {\n    max-width: ",";\n  };\n"]);return l=function(){return n},n}var f=(0,r.default)(o.Div)(l(),(function(n){return(0,a.getFontFamily)(n,"container","default")}),(function(n){return(0,a.getWidth)(n,"container","default")}),(function(n){return(0,a.getFontSize)(n,"container","default")}),(function(n){return(0,a.getFontWeight)(n,"container","default")}),(function(n){return(0,a.getBreakpointSize)(u({},n,{sm:!0}))}),(function(n){return n.fluid?(0,a.getWidth)(n,"container","default"):(0,a.getWidth)(n,"container","fluid","sm")}),(function(n){return(0,a.getBreakpointSize)(u({},n,{md:!0}))}),(function(n){return n.fluid?(0,a.getWidth)(n,"container","default"):(0,a.getWidth)(n,"container","fluid","md")}),(function(n){return(0,a.getBreakpointSize)(u({},n,{lg:!0}))}),(function(n){return n.fluid?(0,a.getWidth)(n,"container","default"):(0,a.getWidth)(n,"container","fluid","lg")}),(function(n){return(0,a.getBreakpointSize)(u({},n,{xl:!0}))}),(function(n){return n.fluid?(0,a.getWidth)(n,"container","default"):(0,a.getWidth)(n,"container","fluid","xl")}));t.Container=f,f.defaultProps={theme:a.theme}},aAHT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-query/[id]",function(){return e("Bs8+")}])},hdqj:function(n,t){n.exports="/_next/static/images/dummy-profile-d0737c6407af1a5b3b62a426e5c47aac.png"}},[["aAHT",0,2,1,3,4]]]);