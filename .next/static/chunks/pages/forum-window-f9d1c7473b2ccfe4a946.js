_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{DQj2:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return p})),n.d(e,"default",(function(){return h}));var o=n("q1tI"),i=n.n(o),a=n("8Kt/"),r=n.n(a),l=n("r1fl"),u=n("LgP5"),c=n("pkQc"),s=i.a.createElement,p=!0;function h(t){var e=t.queryName;return s("main",null,s(r.a,null,s("title",null,"Protalk App"),s("link",{rel:"icon",href:"/favicon.ico"}),s("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),s("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),s("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),s("div",null,s(l.a,null),s(u.a,{queryName:e}),s(c.a,null)))}},"Etn+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-window",function(){return n("DQj2")}])},LgP5:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o=n("KQm4"),i=n("ODXe"),a=n("q1tI"),r=n.n(a),l=n("9rZX"),u=n.n(l),c=n("c7k8"),s=n("VCnP"),p=n.n(s),h=n("6f/8"),d=n("8IXb"),f=n("b/TK"),g=n("ZGMg"),v=n("/COj"),b=n("gCaR"),m=n("GNyq"),w=n("gJGr"),x=n("wJam"),S=r.a.createElement;function y(t){t.queryName;var e=r.a.useState({id:""}),n=Object(i.a)(e,2),a=n[0],l=n[1],s=r.a.useState([]),y=Object(i.a)(s,2),E=y[0],j=y[1],C=r.a.useState(!1),O=Object(i.a)(C,2),k=O[0],T=O[1],_=r.a.useState([]),N=Object(i.a)(_,2),B=N[0],L=N[1],q=r.a.useState({width:void 0,height:void 0}),P=Object(i.a)(q,2),Q=P[0],D=P[1],I=r.a.useState([]),J=Object(i.a)(I,2),R=J[0],z=J[1],X=r.a.useState([]),H=Object(i.a)(X,2),G=H[0],K=H[1],A=r.a.useState([]),M=Object(i.a)(A,2),V=M[0],Z=M[1],F=r.a.useState([]),U=Object(i.a)(F,2),W=U[0],Y=U[1];function $(t){var e=[],n=[];t.map((function(t){var n=E.filter((function(e){return e.expertise===t.value}));e.push.apply(e,Object(o.a)(n))})),e.map((function(t){n=n.concat({label:t.subExpertise,value:t.subExpertise})})),Y(tt(n))}function tt(t){return t.filter((function(e,n){return n===t.findIndex((function(t){return t.label===e.label&&t.value===e.value}))}))}function et(t){l({id:t});var e=E.filter((function(e){return e._id===t}));L(e),T(!0)}function nt(){l({id:""}),T(!1)}function ot(t){var e=t.index,n=t.key,o=(t.isScrolling,t.style);return S("div",{style:o,key:n},S(g.a,{QuestionItems:E[e],windowwidth:Q.width,onClickEvent:et,open:a}))}r.a.useEffect((function(){function t(){D({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),r.a.useEffect((function(){fetch("".concat(m.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(t){return t.json()})).then((function(t){var e=E.concat(t.queries);j(e);var n=[],o=[];t.queries.map((function(t){n=n.concat({label:t.expertise,value:t.expertise}),o=o.concat({label:t.subExpertise,value:t.subExpertise})})),Z(tt(n)),Y(tt(o))}))}),[]),r.a.useEffect((function(){K(Object(o.a)(W)),z(Object(o.a)(V))}),[]);var it={overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",overflow:"initial",height:0!==B.length&&B[0].answers&&B[0].answers.length>1?"400px":"375px"}};var at=Q.width>770?"120px ":"200px",rt=Q.width>770?175:190;return S(r.a.Fragment,null,S(f.a,{BanerItems:b.f}),S(h.Container,null,S(d.Row,null,S(d.Column,{md:12,sm:12,xs:12},S(x.T,{marginTop:"10",marginBottom:"5"},S("div",{style:{paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",border:"1px solid #D0D7DC"}},S(d.Row,null,S(d.Column,{md:4,sm:4,xs:12},S(x.T,{marginTop:"5",marginBottom:"5"},S(p.a,{options:Object(o.a)(V),placeholderButtonLabel:"Expertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:R,onChange:function(t,e){$(t),"select-option"===e.action&&"*"===e.option.value?(console.log(this.options),this.setState(this.options),$(this.options)):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:z}))),S(d.Column,{md:5,sm:4,xs:12},S(x.T,{marginTop:"5",marginBottom:"5"},S(p.a,{options:Object(o.a)(W),placeholderButtonLabel:"SubExpertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:G,onChange:function(t,e){"select-option"===e.action&&"*"===e.option.value?this.setState(this.options):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:K}))),S(d.Column,{md:2,sm:4,xs:4},S(x.T,{marginTop:"5",marginBottom:"5"},S(x.E,{onClick:function(){var t=[];0!==G.length?G.map((function(e){if("*"!==e.value){console.log("check1");var n=E.filter((function(t){return t.subExpertise===e.value}));t.push.apply(t,Object(o.a)(n))}else{console.log("check2");n=E.filter((function(t){return t.subExpertise!==e.value}));t.push.apply(t,Object(o.a)(n))}})):0!==R.length?R.map((function(e){if("*"!==e.value){var n=E.filter((function(t){return t.expertise===e.value}));t.push.apply(t,Object(o.a)(n))}else{n=E.filter((function(t){return t.expertise!==e.value}));t.push.apply(t,Object(o.a)(n))}})):t.concat(E),console.log(t,"result"),j(t)},fontSize:"18px",padding:"8px",background:"#009846",color:"#fff",width:at,border:"none"},"Ask a Query")))))))),S("br",null)),S(c.c,null,(function(t){var e=t.height,n=t.isScrolling,o=t.onChildScroll,i=t.registerChild,a=t.scrollTop;return S(c.a,{disableHeight:!0},(function(t){var r=t.width;return S("div",{ref:i},S(c.b,{autoHeight:!0,height:e,rowCount:E.length,rowHeight:rt,width:r,rowRenderer:ot,onScroll:o,scrollTop:a,isScrolling:n}))}))})),S(w.a,null),S(u.a,{isOpen:k,onRequestClose:nt,style:it,contentLabel:"Example Modal"},S(x.T,null,S(x.p,{justifyContent:"space-between"},S(x.T,{marginLeft:"30"},S(x.U,{fontSize:"28px",lineHeight:"42px",color:"#000"},"Query")),S(x.E,{onClick:nt,fontSize:"18px",padding:"5px",background:"none",color:"#000",width:"125px",border:"none"},"X")),S("div",{style:{height:"300px",overflow:"auto"}},B.map((function(t,e){return S(v.a,{QuestionItems:t})}))),S(x.p,{justifyContent:"flex-end"},S(x.E,{onClick:nt,fontSize:"18px",padding:"5px",background:"#009846",color:"#fff",width:"125px",border:"none"},"Close")))))}}},[["Etn+",0,2,5,1,3,4,7]]]);