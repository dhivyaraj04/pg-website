_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{Zuod:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return T})),n.d(e,"default",(function(){return _}));var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),r=n.n(a),l=n("r1fl"),u=n("KQm4"),s=n("ODXe"),c=n("9rZX"),p=n.n(c),d=n("c7k8"),h=n("VCnP"),f=n.n(h),g=n("6f/8"),m=n("8IXb"),v=n("b/TK"),b=n("ZGMg"),w=n("/COj"),x=n("gCaR"),y=n("GNyq"),S=n("gJGr"),E=n("wJam"),k=i.a.createElement;function C(t){t.queryName;var e=i.a.useState([]),n=Object(s.a)(e,2),o=n[0],a=n[1],r=i.a.useState(!1),l=Object(s.a)(r,2),c=l[0],h=l[1],C=i.a.useState([]),O=Object(s.a)(C,2),j=O[0],T=O[1],_=i.a.useState({width:void 0,height:void 0}),N=Object(s.a)(_,2),B=N[0],L=N[1],q=i.a.useState([]),I=Object(s.a)(q,2),Q=I[0],J=I[1],P=i.a.useState([]),R=Object(s.a)(P,2),z=R[0],D=R[1],X=i.a.useState([]),H=Object(s.a)(X,2),Z=H[0],G=H[1],K=i.a.useState([]),A=Object(s.a)(K,2),F=A[0],M=A[1];function V(t){var e=[],n=[];t.map((function(t){var n=o.filter((function(e){return e.expertise===t.value}));e.push.apply(e,Object(u.a)(n))})),e.map((function(t){n=n.concat({label:t.subExpertise,value:t.subExpertise})})),M(W(n))}function U(){var t=[];0!==z.length?z.map((function(e){if("*"!==e.value){console.log("check1");var n=o.filter((function(t){return t.subExpertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{console.log("check2");n=o.filter((function(t){return t.subExpertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):0!==Q.length?Q.map((function(e){if("*"!==e.value){var n=o.filter((function(t){return t.expertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{n=o.filter((function(t){return t.expertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):t.concat(o),console.log(t,"result"),a(t)}function W(t){return t.filter((function(e,n){return n===t.findIndex((function(t){return t.label===e.label&&t.value===e.value}))}))}function Y(t){var e=o.filter((function(e){return e._id===t}));T(e),h(!0)}function $(){h(!1)}function tt(t){var e=t.index,n=t.key,a=t.isScrolling,r=t.style;return a?k("div",{style:r,key:n},k(b.a,{QuestionItems:o[e],windowwidth:B.width,onClickEvent:Y})):k(i.a.Fragment,null,k(v.a,{BanerItems:x.f}),k(g.Container,null,k(m.Row,null,k(m.Column,{md:12,sm:12,xs:12},k(E.T,{marginTop:"10",marginBottom:"5"},k("div",{style:{paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",border:"1px solid #D0D7DC"}},k(m.Row,null,k(m.Column,{md:4,sm:4,xs:12},k(E.T,{marginTop:"5",marginBottom:"5"},k(f.a,{options:Object(u.a)(Z),placeholderButtonLabel:"Expertise",getDropdownButtonLabel:nt,value:Q,onChange:ot,setState:J}))),k(m.Column,{md:5,sm:4,xs:12},k(E.T,{marginTop:"5",marginBottom:"5"},k(f.a,{options:Object(u.a)(F),placeholderButtonLabel:"SubExpertise",getDropdownButtonLabel:it,value:z,onChange:at,setState:D}))),k(m.Column,{md:2,sm:4,xs:4},k(E.T,{marginTop:"5",marginBottom:"5"},k(E.E,{onClick:U,fontSize:"18px",padding:"8px",background:"#009846",color:"#fff",width:rt,border:"none"},"Ask a Query")))))))),k("br",null)),k("div",{style:r,key:n},k(b.a,{QuestionItems:o[e],windowwidth:B.width,onClickEvent:Y})))}i.a.useEffect((function(){function t(){L({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),i.a.useEffect((function(){fetch("".concat(y.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(t){return t.json()})).then((function(t){var e=o.concat(t.queries);a(e);var n=[],i=[];t.queries.map((function(t){n=n.concat({label:t.expertise,value:t.expertise}),i=i.concat({label:t.subExpertise,value:t.subExpertise})})),G(W(n)),M(W(i))}))}),[]),i.a.useEffect((function(){D(Object(u.a)(F)),J(Object(u.a)(Z))}),[]);var et={overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",overflow:"initial",height:0!==j.length&&j[0].answers&&j[0].answers.length>1?"400px":"375px"}};function nt(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")}function ot(t,e){V(t),"select-option"===e.action&&"*"===e.option.value?(console.log(this.options),this.setState(this.options),V(this.options)):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)}function it(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")}function at(t,e){"select-option"===e.action&&"*"===e.option.value?this.setState(this.options):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)}var rt=B.width>770?"120px ":"200px",lt=B.width>770?140:180;return k(i.a.Fragment,null,k(d.a,{disableHeight:!0},(function(t){var e=t.width;return k(d.b,{height:800,rowCount:o.length,rowHeight:lt,width:e,rowRenderer:tt})})),k(S.a,null),k(p.a,{isOpen:c,onRequestClose:$,style:et,contentLabel:"Example Modal"},k(E.T,null,k(E.p,{justifyContent:"space-between"},k(E.T,{marginLeft:"30"},k(E.U,{fontSize:"28px",lineHeight:"42px",color:"#000"},"Query")),k(E.E,{onClick:$,fontSize:"18px",padding:"5px",background:"none",color:"#000",width:"125px",border:"none"},"X")),k("div",{style:{height:"300px",overflow:"auto"}},j.map((function(t,e){return k(w.a,{QuestionItems:t})}))),k(E.p,{justifyContent:"flex-end"},k(E.E,{onClick:$,fontSize:"18px",padding:"5px",background:"#009846",color:"#fff",width:"125px",border:"none"},"Close")))))}var O=n("pkQc"),j=i.a.createElement,T=!0;function _(t){var e=t.queryName;return j("main",null,j(r.a,null,j("title",null,"Protalk App"),j("link",{rel:"icon",href:"/favicon.ico"}),j("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),j("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),j("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),j("div",null,j(l.a,null),j(C,{queryName:e}),j(O.a,null)))}},"wnm/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])}},[["wnm/",0,2,7,1,3,4,6]]]);