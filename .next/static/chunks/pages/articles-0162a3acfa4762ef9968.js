_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4FPD":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=n("r1fl"),c=n("ODXe"),l=n("o5yO"),s=n("gJGr"),p=o.a.createElement;function f(){var e=o.a.useState({width:void 0,height:void 0}),t=Object(c.a)(e,2),n=(t[0],t[1]);o.a.useEffect((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return p(o.a.Fragment,null,p(l.a,null),p(s.a,null))}var d=n("pkQc"),b=o.a.createElement;function h(){return b("main",null,b(i.a,null,b("title",null,"Protalk App"),b("link",{rel:"icon",href:"/favicon.ico"}),b("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),b("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),b("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),b("div",null,b(u.a,null),b(f,null),b(d.a,null)))}},B68Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement;function a(e){var t=e.children,n=e.onClickEvent,a=e.buttonType,i=void 0===a?"button":a,u=Object(r.useMemo)((function(){return{backgroundColor:"#000",border:"10px solid #009846",borderRadius:"50%",fontWeight:500,cursor:"pointer",filter:"drop-shadow(0px 2px 10px #009846)",padding:"10px"}}),[]);return o("button",{style:u,type:i,onClick:n},t)}},eaLi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n("4FPD")}])},gJGr:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("rePB"),u=n("ODXe"),c=n("q1tI"),l=n.n(c),s=n("B68Z"),p=n("wJam"),f=n("5nti"),d=n("E4hQ"),b=n("fARU"),h=n("GNyq"),y=l.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){e.expertisItems;var t=l.a.useState(!1),n=Object(u.a)(t,2),r=n[0],m=n[1],v=l.a.useState({}),g=Object(u.a)(v,2),w=g[0],j=g[1],O=Object(c.useRef)(null),E=Object(c.useState)(""),S=E[0],k=E[1],P=Object(c.useState)(!1),T=P[0],_=P[1],D=Object(c.useState)([]),C=D[0],N=D[1],q=l.a.useState([]),F=Object(u.a)(q,2),I=F[0],W=F[1],B=l.a.useState([]),R=Object(u.a)(B,2),z=R[0],J=R[1],H=l.a.useState(""),L=Object(u.a)(H,2),M=L[0],Q=L[1],G=l.a.useState(""),X=Object(u.a)(G,2),Y=X[0],V=X[1],K=l.a.useState(""),A=Object(u.a)(K,2),U=A[0],Z=A[1],$=l.a.useState(""),ee=Object(u.a)($,2),te=(ee[0],ee[1]),ne=l.a.useState(""),re=Object(u.a)(ne,2),oe=re[0],ae=re[1];var ie=function(){O.current.scrollIntoView({behavior:"smooth",block:"start"})};function ue(e,t,n){j(x(x({},w),{},Object(i.a)({},e,n.target.name))),ie(),function(e){se.apply(this,arguments)}(t);var r=z.filter((function(t){return fe(t,e)}));V(r[0]._id),0!==r.length&&function(){pe.apply(this,arguments)}()}function ce(){var e=document.getElementById("yourDivID");e.scrollTop=e.scrollHeight}function le(){return(le=Object(a.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h.a,"/apiV2/expertises"),{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r={text:"Select your area of expertise",button:n.expertises},W(n.expertises),N(C.concat(r)),ie(),ce();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(a.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0!==I.filter((function(e){return de(e,t)})).length&&Q(t),e.next=4,fetch("".concat(h.a,"/apiV2/expertise_subexpertise/").concat(t),{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a=[{text:"Select your area of Sub expertise",button:r.subExpertise}],J(r.subExpertise),N(C.concat(a)),ce();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!0),t=[{text:"Please provide your Query Title ?"}],N(C.concat(t)),ie();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){le.apply(this,arguments)}()}),[]);var fe=function(e,t){return e.name===t},de=function(e,t){return e._id===t};return y(l.a.Fragment,null,y(p.j,null,y(s.a,{onClickEvent:function(){m(!r)}},y(f.a,{name:d.a.chat}))),!0===r?y(p.i,null,y(p.m,null,y(p.W,{marginTop:"10",marginBottom:"10"},y(p.Y,{color:"#fff",fontSize:"20px",letterSpacing:"0.56px",fontWeight:"600"},"Welcome to Protalk")),y(p.W,{marginTop:"10",marginBottom:"10"},y(p.Y,{color:"#fff",fontSize:"14px",letterSpacing:"0.56px",fontWeight:"400"},"Budget Friendly Multi consultant application"))),y(p.k,null,y(p.J,null,C.map((function(e,t){return y("div",{key:t},e.text?y(p.E,null,y(p.p,null,y(p.W,{marginTop:"10",marginBottom:"10"},y(p.y,{src:b,height:"25",width:"25",borderRadius:"50%"})),y("div",null,y(p.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},y(p.Y,{color:"#000",fontSize:"12px",fontWeight:"400",lineHeight:"15px"},e.text)),e.button?y("div",null,e.button.map((function(e,t){return y(p.F,{fontSize:"12px",padding:"10px",border:"0.4px solid #029532",background:"".concat(w[e.name]===e.name?"#029532":"none"),color:"".concat(w[e.name]===e.name?"#fff":"#029532"),onClick:function(t){return ue(e.name,e._id,t)},style:{margin:"5px"},name:e.name,id:e._id},e.name)}))):y(l.a.Fragment,null)))):"",e.text1?y(p.E,null,y(p.p,{justifyContent:"flex-end"},y(p.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},y(p.Y,{color:"#000",fontSize:"12px",fontWeight:"400",lineHeight:"15px"},e.text1)))):y(l.a.Fragment,null))}))),y("div",{ref:O,id:"data"})),y(p.l,null,!1===T?y(l.a.Fragment,null):y("div",null,y(p.u,{borderTop:"1px solid #E3E3E3"}),y("form",{onSubmit:function(e){e.preventDefault(),k("")}},y(p.p,null,y(p.D,{value:S,placeholder:"Type your reply here",onChange:function(e){var t=e.target.value;k(t)},onKeyDown:function(e){var t=e.target.value;if("Enter"===e.key){var n=C[C.length-1];"Please provide your Query Title ?"===n.text&&function(e){ae(e);var t=[{text1:e},{text:"Please can you elaborate your Query ?"}];N(C.concat(t)),ce()}(t),"Please can you elaborate your Query ?"===n.text&&function(e){Z(e);var t=[{text1:e},{text:"Your query has been posted to our experts, you can find your query answer in your Protalk app"},{text:"Please provide your Mobile Number, so that we can forward you playstore link"}];N(C.concat(t))}(t),"Please provide your Mobile Number, so that we can forward you playstore link"===n.text&&function(e){te(e);var t=[{text1:e},{text:"Thank you for you interest, We provide you 10% Discount coupon (\u201cFIRSTPRO\u201d Code) for your first service in protalk app"}];N(C.concat(t)),function(e){var t=e;fetch("".concat(h.a,"/apiV2/website_bot/create_request"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:M,subExpertiseId:Y,queryTitle:oe,queryContent:U,phoneNumber:t})}).then((function(e){return e.json()}))}(e),_(!1)}(t)}}})))))):y(l.a.Fragment,null))}},o5yO:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("3NUe"),i=n("8IXb"),u=n("tKwq"),c=o.a.createElement;function l(){var e=Object(r.useState)(!0);e[0],e[1];return c("div",null,c(u.i,null,c(u.b,null,c(i.Row,null,c(i.Column,{sm:12},c(u.g,{expandSm:!0,expandMd:!0,light:!0,style:{background:"#fff !important"}},c(a.Nav,{expandSm:!0,expandMd:!0},c(u.j,{href:"/home"},"Home"),c(u.j,{href:"/fitness"},"Fitness"),c(u.j,{href:"/nutrition"},"Nutrition"),c(u.j,{href:"/lawyer"},"Lawyer"),c(u.j,{href:"/accountant"},"Lawyer"),c(u.j,{href:"/career"},"Career"),c(u.j,{light:!0,href:"/explore"},"Explore"))))))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["eaLi",0,2,1,3,4]]]);