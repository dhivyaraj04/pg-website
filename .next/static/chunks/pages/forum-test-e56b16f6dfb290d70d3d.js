_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{aZbn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-test",function(){return n("j7wl")}])},j7wl:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return T})),n.d(e,"default",(function(){return _}));var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),r=n.n(a),l=n("r1fl"),u=n("KQm4"),c=n("ODXe"),s=n("9rZX"),p=n.n(s),f=n("c7k8"),h=n("VCnP"),d=n.n(h),m=n("6f/8"),g=n("8IXb"),b=n("b/TK"),v=n("ZGMg"),w=n("/COj"),x=n("gCaR"),S=n("GNyq"),y=n("gJGr"),E=n("wJam"),C=i.a.createElement;function j(t){t.queryName;var e=i.a.useState([]),n=Object(c.a)(e,2),o=n[0],a=n[1],r=i.a.useState(!1),l=Object(c.a)(r,2),s=l[0],h=l[1],j=i.a.useState([]),O=Object(c.a)(j,2),k=O[0],T=O[1],_=i.a.useState({width:void 0,height:void 0}),B=Object(c.a)(_,2),N=B[0],q=B[1],L=i.a.useState([]),I=Object(c.a)(L,2),J=I[0],Q=I[1],R=i.a.useState([]),z=Object(c.a)(R,2),P=z[0],D=z[1],X=i.a.useState([]),H=Object(c.a)(X,2),Z=H[0],A=H[1],G=i.a.useState([]),K=Object(c.a)(G,2),F=K[0],M=K[1];function U(t){var e=[],n=[];t.map((function(t){var n=o.filter((function(e){return e.expertise===t.value}));e.push.apply(e,Object(u.a)(n))})),e.map((function(t){n=n.concat({label:t.subExpertise,value:t.subExpertise})})),M(V(n))}function V(t){return t.filter((function(e,n){return n===t.findIndex((function(t){return t.label===e.label&&t.value===e.value}))}))}function W(t){var e=o.filter((function(e){return e._id===t}));T(e),h(!0)}function Y(){h(!1)}function $(t){var e=t.index,n=t.key,i=(t.isScrolling,t.style);return C("div",{style:i,key:n},C(v.a,{QuestionItems:o[e],windowwidth:N.width,onClickEvent:W}))}i.a.useEffect((function(){function t(){q({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),i.a.useEffect((function(){fetch("".concat(S.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(t){return t.json()})).then((function(t){var e=o.concat(t.queries);a(e);var n=[],i=[];t.queries.map((function(t){n=n.concat({label:t.expertise,value:t.expertise}),i=i.concat({label:t.subExpertise,value:t.subExpertise})})),A(V(n)),M(V(i))}))}),[]),i.a.useEffect((function(){D(Object(u.a)(F)),Q(Object(u.a)(Z))}),[]);var tt={overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",overflow:"initial",height:0!==k.length&&k[0].answers&&k[0].answers.length>1?"400px":"375px"}};var et=N.width>770?"120px ":"200px";return C(i.a.Fragment,null,C(b.a,{BanerItems:x.f}),C(m.Container,null,C(g.Row,null,C(g.Column,{md:12,sm:12,xs:12},C(E.T,{marginTop:"10",marginBottom:"10"},C("div",{style:{paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",border:"1px solid #D0D7DC"}},C(g.Row,null,C(g.Column,{md:4,sm:4,xs:12},C(E.T,{marginTop:"10",marginBottom:"10"},C(d.a,{options:Object(u.a)(Z),placeholderButtonLabel:"Expertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:J,onChange:function(t,e){U(t),"select-option"===e.action&&"*"===e.option.value?(console.log(this.options),this.setState(this.options),U(this.options)):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:Q}))),C(g.Column,{md:5,sm:4,xs:12},C(E.T,{marginTop:"10",marginBottom:"10"},C(d.a,{options:Object(u.a)(F),placeholderButtonLabel:"SubExpertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:P,onChange:function(t,e){"select-option"===e.action&&"*"===e.option.value?this.setState(this.options):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:D}))),C(g.Column,{md:2,sm:4,xs:4},C(E.T,{marginTop:"10",marginBottom:"10"},C(E.E,{onClick:function(){var t=[];0!==P.length?P.map((function(e){if("*"!==e.value){console.log("check1");var n=o.filter((function(t){return t.subExpertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{console.log("check2");n=o.filter((function(t){return t.subExpertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):0!==J.length?J.map((function(e){if("*"!==e.value){var n=o.filter((function(t){return t.expertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{n=o.filter((function(t){return t.expertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):t.concat(o),console.log(t,"result"),a(t)},fontSize:"18px",padding:"8px",background:"#009846",color:"#fff",width:et,border:"none"},"Ask a Query")))))))),C("br",null)),C(m.Container,null,C(g.Row,null,C(g.Column,{md:12,sm:12,xs:12},C(f.a,{disableHeight:!0},(function(t){var e=t.width;return C(f.b,{height:500,rowCount:o.length,rowHeight:180,width:e,rowRenderer:$})})))),C(E.T,{marginTop:"20",marginBottom:"20"})),C(y.a,null),C(p.a,{isOpen:s,onRequestClose:Y,style:tt,contentLabel:"Example Modal"},C(E.T,null,C(E.p,{justifyContent:"space-between"},C(E.T,{marginLeft:"30"},C(E.U,{fontSize:"28px",lineHeight:"42px",color:"#000"},"Query")),C(E.E,{onClick:Y,fontSize:"18px",padding:"5px",background:"none",color:"#000",width:"125px",border:"none"},"X")),C("div",{style:{height:"300px",overflow:"auto"}},k.map((function(t,e){return C(w.a,{QuestionItems:t})}))),C(E.p,{justifyContent:"flex-end"},C(E.E,{onClick:Y,fontSize:"18px",padding:"5px",background:"#009846",color:"#fff",width:"125px",border:"none"},"Close")))))}var O=n("pkQc"),k=i.a.createElement,T=!0;function _(t){var e=t.queryName;return k("main",null,k(r.a,null,k("title",null,"Protalk App"),k("link",{rel:"icon",href:"/favicon.ico"}),k("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),k("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),k("div",null,k(l.a,null),k(j,{queryName:e}),k(O.a,null)))}},pkQc:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("q1tI"),i=n.n(o),a=n("wJam"),r=i.a.createElement;function l(){return r(i.a.Fragment,null,r("br",null),r("br",null),r(a.q,null,r(a.h,null,r(a.U,{fontSize:"16px",color:"#fff",fontWeight:"500"},"All rights reserved 2020"))))}}},[["aZbn",0,2,7,1,3,4,6]]]);