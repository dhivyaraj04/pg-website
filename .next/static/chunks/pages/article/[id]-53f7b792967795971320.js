_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"474b":function(e,t){e.exports="/_next/static/images/loader-072b3f895dd9af5f1e6aae0e58561749.gif"},"5JmT":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=o.default.div.withConfig({displayName:"style__CardBloclk",componentId:"sc-1vu2txt-0"})(["border:","px solid;border-color:",";border-radius:","px;display:flex;padding:10px;margin:5px;flex-direction:",";width:",";height:",";"],(function(e){return e.border}),(function(e){return e.borderColor}),(function(e){return e.borderRadius}),(function(e){return e.flexDirection}),(function(e){var t=e.width;return t||"-webkit-fill-available"}),(function(e){var t=e.height;return t||""})),l=o.default.div.withConfig({displayName:"style__CenterTag",componentId:"sc-1vu2txt-1"})(["margin:",";text-align:",";"],(function(e){return e.margin}),(function(e){return e.textAlign})),c=r.a.createElement;function u(e){var t=e.children,n=e.border,i=void 0===n?"1":n,o=e.borderRadius,u=void 0===o?"5":o,d=e.flexDirection,s=void 0===d?"row":d,f=e.borderColor,m=void 0===f?"#e8eef3":f,p=e.textAlign,g=void 0===p?"undefined":p,h=e.margin,x=void 0===h?"undefined":h,b=e.width,w=void 0===b?"undefined":b,v=e.height,y=void 0===v?"undefined":v;return c(r.a.Fragment,null,c(a,{border:i,borderRadius:u,borderColor:m,flexDirection:s,width:w,height:y},c(l,{textAlign:g,margin:x},t)))}},"7MJs":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return I})),n.d(t,"default",(function(){return S}));var i=n("q1tI"),r=n.n(i),o=n("8Kt/"),a=n.n(o),l=n("r1fl"),c=n("ODXe"),u=n("6f/8"),d=n("8IXb"),s=n("KQm4"),f=n("YFqc"),m=n.n(f),p=n("5JmT"),g=n("wJam"),h=r.a.createElement;function x(e){var t=e.ExpertArticlesItems,n=e.expertiseId,i=r.a.useState(2),o=Object(c.a)(i,2),a=o[0],l=o[1],u=function(){console.log("hi"),l(a+2)},f=[];function x(e){console.log(e);var t=e.slice(0,a);console.log(t);var n=e.length!==a?Object(s.a)(t):e;return console.log(n,"imageSourcesToDisplay"),n}return t.map((function(e,t){f=f.concat({expertiseId:e.expertiseId,title:e.expertise,articles:x(e.articles)})})),h(r.a.Fragment,null,h(g.T,{marginTop:"20",marginBottom:"10"},f.map((function(e,t){return h(r.a.Fragment,null,h(g.T,{marginTop:"20",marginBottom:"10",marginLeft:"15",marginRight:"15"},h(g.U,{fontSize:"30px",color:"rgba(0, 0, 0, 0.25)",fontWeight:"600",lineHeight:"20px",letterSpacing:"0px"},e.title)),e.articles.map((function(e,t){return h(m.a,{href:"/article-details/".concat(e._id)},h(g.n,null,h(d.Row,null,h(d.Column,{sm:12,md:12,xs:12},h(g.p,{className:"flex-container"},h(g.T,{marginTop:"5",marginLeft:"5",marginRight:"5",marginBottom:"5"},h(g.x,{src:e.media,width:"130px",height:"100%"})),h(p.a,{width:"-webkit-fill-available",border:"1",borderRadius:"2"},h(g.T,{marginLeft:"6",marginTop:"4",marginRight:"6",marginBottom:"4"},h(g.U,{fontSize:"16px",color:"#282828",letterSpacing:"0px",lineHeight:"20px"},e.articleTitle),h(g.T,{marginBottom:"5",marginTop:"5"},h(g.U,{fontSize:"12px",color:"#979797",letterSpacing:"0px",lineHeight:"20px"},e.description)),h(g.p,null,h(g.x,{src:e.consultantImage,width:"25",height:"25"}),h(g.T,{marginLeft:"5",marginTop:"0"},h(g.U,{fontSize:"12px",color:"#010101"},e.consultantName),h(g.U,{fontSize:"10px",color:"#979797"},e.expertise))))))))))})),h(g.p,{justifyContent:"flex-end"},h(g.T,{marginLeft:"15",marginRight:"15"},n?h(g.Y,{type:"button",onClick:u},"View More"):h(m.a,{href:"/article/".concat(e.expertiseId)},h(g.Y,{type:"button"},"View More")))))}))))}var b=n("GNyq"),w=n("gJGr"),v=n("474b"),y=r.a.createElement;function T(e){var t=e.articlesId,n=r.a.useState({width:void 0,height:void 0}),i=Object(c.a)(n,2),o=(i[0],i[1]),a=r.a.useState([]),l=Object(c.a)(a,2),s=l[0],f=l[1];r.a.useEffect((function(){function e(){o({width:window.innerWidth,height:window.innerHeight})}return f([]),fetch("".concat(b.a,"/apiV2/website/articles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:t,limit:5,skip:0})}).then((function(e){return e.json()})).then((function(e){console.log(e,"res"),f(e.articles)})),window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return y(r.a.Fragment,null,y(g.t,{borderTop:"1px solid #E0E0E0"}),y(u.Container,null,y(d.Row,null,y(d.Column,{md:12,sm:12,xs:12},0===s.length?y(g.h,null,y(g.x,{src:v})):y(r.a.Fragment,null,y(x,{ExpertArticlesItems:s,expertiseId:t}))))),y("br",null),y(w.a,null))}var _=n("pkQc"),E=r.a.createElement,I=!0;function S(e){var t=e.articlesId;return E("main",null,E(a.a,null,E("title",null,"Protalk App"),E("link",{rel:"icon",href:"/favicon.ico"}),E("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),E("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),E("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),E("div",null,E(l.a,null),E(T,{articlesId:t}),E(_.a,null)))}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("a3WO");var r=n("BsWD");function o(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},NBH1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[id]",function(){return n("7MJs")}])}},[["NBH1",0,2,1,3,4]]]);