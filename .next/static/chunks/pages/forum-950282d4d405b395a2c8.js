_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{Zuod:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return T})),n.d(e,"default",(function(){return _}));var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),r=n.n(a),l=n("r1fl"),u=n("KQm4"),s=n("ODXe"),c=n("9rZX"),p=n.n(c),h=n("c7k8"),d=n("VCnP"),f=n.n(d),m=n("6f/8"),g=n("8IXb"),v=n("b/TK"),b=n("ZGMg"),w=n("/COj"),x=n("gCaR"),S=n("GNyq"),y=n("gJGr"),E=n("wJam"),C=i.a.createElement;function O(t){t.queryName;var e=i.a.useState([]),n=Object(s.a)(e,2),o=n[0],a=n[1],r=i.a.useState(!1),l=Object(s.a)(r,2),c=l[0],d=l[1],O=i.a.useState([]),j=Object(s.a)(O,2),k=j[0],T=j[1],_=i.a.useState({width:void 0,height:void 0}),B=Object(s.a)(_,2),N=B[0],L=B[1],q=i.a.useState([]),R=Object(s.a)(q,2),I=R[0],J=R[1],P=i.a.useState([]),Q=Object(s.a)(P,2),z=Q[0],D=Q[1],X=i.a.useState([]),H=Object(s.a)(X,2),Z=H[0],G=H[1],K=i.a.useState([]),A=Object(s.a)(K,2),M=A[0],V=A[1];function F(t){var e=[],n=[];t.map((function(t){var n=o.filter((function(e){return e.expertise===t.value}));e.push.apply(e,Object(u.a)(n))})),e.map((function(t){n=n.concat({label:t.subExpertise,value:t.subExpertise})})),V(U(n))}function U(t){return t.filter((function(e,n){return n===t.findIndex((function(t){return t.label===e.label&&t.value===e.value}))}))}function W(t){var e=o.filter((function(e){return e._id===t}));T(e),d(!0)}function Y(){d(!1)}function $(t){var e=t.index,n=t.key,i=(t.isScrolling,t.style);return C("div",{style:i,key:n},C(b.a,{QuestionItems:o[e],windowwidth:N.width,onClickEvent:W}))}i.a.useEffect((function(){function t(){L({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),i.a.useEffect((function(){fetch("".concat(S.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(t){return t.json()})).then((function(t){var e=o.concat(t.queries);a(e);var n=[],i=[];t.queries.map((function(t){n=n.concat({label:t.expertise,value:t.expertise}),i=i.concat({label:t.subExpertise,value:t.subExpertise})})),G(U(n)),V(U(i))}))}),[]),i.a.useEffect((function(){D(Object(u.a)(M)),J(Object(u.a)(Z))}),[]);var tt={overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",overflow:"initial",height:0!==k.length&&k[0].answers&&k[0].answers.length>1?"400px":"375px"}};var et=N.width>770?"120px ":"200px";return C(i.a.Fragment,null,C(v.a,{BanerItems:x.f}),C(m.Container,null,C(g.Row,null,C(g.Column,{md:12,sm:12,xs:12},C(E.T,{marginTop:"10",marginBottom:"10"},C("div",{style:{paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",border:"1px solid #D0D7DC"}},C(g.Row,null,C(g.Column,{md:4,sm:4,xs:12},C(E.T,{marginTop:"5",marginBottom:"5"},C(f.a,{options:Object(u.a)(Z),placeholderButtonLabel:"Expertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:I,onChange:function(t,e){F(t),"select-option"===e.action&&"*"===e.option.value?(console.log(this.options),this.setState(this.options),F(this.options)):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:J}))),C(g.Column,{md:5,sm:4,xs:12},C(E.T,{marginTop:"5",marginBottom:"5"},C(f.a,{options:Object(u.a)(M),placeholderButtonLabel:"SubExpertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:z,onChange:function(t,e){"select-option"===e.action&&"*"===e.option.value?this.setState(this.options):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:D}))),C(g.Column,{md:2,sm:4,xs:4},C(E.T,{marginTop:"5",marginBottom:"5"},C(E.E,{onClick:function(){var t=[];0!==z.length?z.map((function(e){if("*"!==e.value){console.log("check1");var n=o.filter((function(t){return t.subExpertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{console.log("check2");n=o.filter((function(t){return t.subExpertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):0!==I.length?I.map((function(e){if("*"!==e.value){var n=o.filter((function(t){return t.expertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{n=o.filter((function(t){return t.expertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):t.concat(o),console.log(t,"result"),a(t)},fontSize:"18px",padding:"8px",background:"#009846",color:"#fff",width:et,border:"none"},"Ask a Query")))))))),C("br",null)),C(m.Container,null,C(g.Row,null,C(g.Column,{md:12,sm:12,xs:12},C(h.a,{disableHeight:!0},(function(t){var e=t.width;return C(h.b,{height:600,rowCount:o.length,rowHeight:180,width:e,rowRenderer:$})})))),C(E.T,{marginTop:"10",marginBottom:"10"})),C(y.a,null),C(p.a,{isOpen:c,onRequestClose:Y,style:tt,contentLabel:"Example Modal"},C(E.T,null,C(E.p,{justifyContent:"space-between"},C(E.T,{marginLeft:"30"},C(E.U,{fontSize:"28px",lineHeight:"42px",color:"#000"},"Query")),C(E.E,{onClick:Y,fontSize:"18px",padding:"5px",background:"none",color:"#000",width:"125px",border:"none"},"X")),C("div",{style:{height:"300px",overflow:"auto"}},k.map((function(t,e){return C(w.a,{QuestionItems:t})}))),C(E.p,{justifyContent:"flex-end"},C(E.E,{onClick:Y,fontSize:"18px",padding:"5px",background:"#009846",color:"#fff",width:"125px",border:"none"},"Close")))))}var j=n("pkQc"),k=i.a.createElement,T=!0;function _(t){var e=t.queryName;return k("main",null,k(r.a,null,k("title",null,"Protalk App"),k("link",{rel:"icon",href:"/favicon.ico"}),k("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),k("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),k("div",null,k(l.a,null),k(O,{queryName:e}),k(j.a,null)))}},"wnm/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])}},[["wnm/",0,2,7,1,3,4,6]]]);