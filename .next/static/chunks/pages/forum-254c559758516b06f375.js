_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{Zuod:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return _})),n.d(e,"default",(function(){return C}));var i=n("q1tI"),o=n.n(i),a=n("8Kt/"),r=n.n(a),l=n("r1fl"),u=n("KQm4"),c=n("ODXe"),s=n("c7k8"),p=n("VCnP"),h=n.n(p),d=n("6f/8"),f=n("8IXb"),m=n("tV4S"),b=n("ZGMg"),v=n("GNyq"),g=n("gJGr"),w=n("wJam"),S=n("gCaR"),x=n("474b"),y=o.a.createElement;function E(t){var e=t.queryName,n=o.a.useState([]),i=Object(c.a)(n,2),a=i[0],r=i[1],l=o.a.useState({width:void 0,height:void 0}),p=Object(c.a)(l,2),E=p[0],O=p[1],j=o.a.useState([]),T=Object(c.a)(j,2),_=T[0],C=T[1],k=o.a.useState([]),N=Object(c.a)(k,2),B=N[0],q=N[1],L=o.a.useState([]),J=Object(c.a)(L,2),P=J[0],R=J[1],V=o.a.useState([]),D=Object(c.a)(V,2),I=D[0],H=D[1],Q=o.a.useState(0),X=Object(c.a)(Q,2),z=X[0],G=X[1],Z=o.a.useState(20),A=Object(c.a)(Z,2);A[0],A[1];function F(t){fetch("".concat(v.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:20,skip:z})}).then((function(t){return t.json()})).then((function(t){r(a.concat(t.queries));var e=[],n=[];t.queries.map((function(t){e=e.concat({label:t.expertise,value:t.expertise}),n=n.concat({label:t.subExpertise,value:t.subExpertise})})),R(M(e)),H(M(n))}))}function K(t){var e=[],n=[];t.map((function(t){var n=a.filter((function(e){return e.expertise===t.value}));e.push.apply(e,Object(u.a)(n))})),e.map((function(t){n=n.concat({label:t.subExpertise,value:t.subExpertise})})),H(M(n)),q(M(n))}function M(t){return t.filter((function(e,n){return n===t.findIndex((function(t){return t.label===e.label&&t.value===e.value}))}))}function U(t){var e=t.index,n=t.key,i=(t.isScrolling,t.style);return y("div",{style:i,key:n},y(b.a,{QuestionItems:a[e],windowwidth:E.width}))}o.a.useEffect((function(){function t(){O({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),o.a.useEffect((function(){F(e)}),[]),o.a.useEffect((function(){q(Object(u.a)(I)),C(Object(u.a)(P))}),[]);var W=E.width>770?"120px ":"200px",Y=E.width>770?175:215,$=o.a.useRef(null);return y(o.a.Fragment,null,y(w.u,{borderTop:"1px solid #E0E0E0"}),y(m.a,{BanerItems:S.j}),y("br",null),y(d.Container,null,y(f.Row,null,y(f.Column,{md:12,sm:12,xs:12},y(w.V,{marginTop:"10",marginBottom:"5"},y("div",{style:{paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",border:"1px solid #D0D7DC"}},y(f.Row,null,y(f.Column,{md:4,sm:4,xs:12},y(w.V,{marginTop:"5",marginBottom:"5"},y(h.a,{options:Object(u.a)(P),placeholderButtonLabel:"Expertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:_,onChange:function(t,e){K(t),"select-option"===e.action&&"*"===e.option.value?(this.setState(this.options),K(this.options)):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:C}))),y(f.Column,{md:5,sm:4,xs:12},y(w.V,{marginTop:"5",marginBottom:"5"},y(h.a,{options:Object(u.a)(I),placeholderButtonLabel:"SubExpertise",getDropdownButtonLabel:function(t){var e=t.placeholderButtonLabel,n=t.value;return 0===n.length?"".concat(e,": select..."):1===n.length?"".concat(e,": \n\t\t\t").concat(n[0].value," "):"".concat(e,": \n\t\t  ").concat(JSON.stringify(n.length)," selected")},value:B,onChange:function(t,e){"select-option"===e.action&&"*"===e.option.value?this.setState(this.options):"deselect-option"===e.action&&"*"===e.option.value?this.setState([]):"deselect-option"===e.action?this.setState(t.filter((function(t){return"*"!==t.value}))):t.length===this.options.length-1?this.setState(this.options):this.setState(t)},setState:q}))),y(f.Column,{md:2,sm:4,xs:4},y(w.V,{marginTop:"5",marginBottom:"5"},y(w.F,{onClick:function(){r([]);var t=[];0!==B.length?B.map((function(e){if("*"!==e.value){var n=a.filter((function(t){return t.subExpertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{n=a.filter((function(t){return t.subExpertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):0!==_.length?_.map((function(e){if("*"!==e.value){var n=a.filter((function(t){return t.expertise===e.value}));t.push.apply(t,Object(u.a)(n))}else{n=a.filter((function(t){return t.expertise!==e.value}));t.push.apply(t,Object(u.a)(n))}})):t.concat(a),r(t)},fontSize:"18px",padding:"8px",background:"#009846",color:"#fff",width:W,border:"none"},"Search")))))))),y("br",null)),0===a.length?y(w.i,null,E.width>770?y(w.y,{src:x}):y(w.y,{src:x,width:"100",height:"100"}),y("br",null)):y("div",{ref:$,onScroll:function(){G(z+1),window.scrollY,$.current.scrollTop,F()}},y(s.c,null,(function(t){var e=t.height,n=t.isScrolling,i=t.scrollTop;return y(s.a,{disableHeight:!0},(function(t){var o=t.width;return y(s.b,{autoHeight:!0,height:e,rowCount:a.length,rowHeight:Y,width:o,rowRenderer:U,isScrolling:n,scrollTop:i})}))}))),y("br",null),y(g.a,null))}var O=n("pkQc"),j=n("fARU"),T=o.a.createElement,_=!0;function C(t){var e=t.queryName;return T("main",null,T(r.a,null,T("title",null,"Protalk App"),T("link",{rel:"icon",href:j}),T("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),T("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),T("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),T(l.a,null),T(E,{queryName:e}),T(O.a,null))}},"wnm/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])}},[["wnm/",0,2,7,1,3,4,6]]]);