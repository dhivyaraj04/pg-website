_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/COj":function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var r=e("q1tI"),i=e.n(r),o=e("YFqc"),a=e.n(o),u=e("8IXb"),m=e("wJam"),c=e("Puqf"),l=i.a.createElement;function g(n){var t=n.QuestionItems;function e(n){return Object(c.a)(n)+" "+Object(c.d)(n)+" "+Object(c.e)(n)}function r(n){var t=Object(c.b)(n)>=12?"PM":"AM";return Object(c.b)(n)+":"+Object(c.c)(n)+" "+t}return l(i.a.Fragment,null,t.map((function(n,t){return l(m.T,{marginTop:"10",marginBottom:"10"},l(u.Row,null,l(u.Column,{md:12,sm:12,xs:12},l(m.p,{justifyContent:"space-between"},l(m.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},l(m.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},n.expertise)),l(m.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},l(a.a,{href:"/forum"},l(m.E,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"#029532",color:"#fff",width:"150px",height:"27px"},"Back")))),l(m.T,{marginTop:"5",marginBottom:"5"},l(m.U,{fontSize:"16px",color:"#4F4F4F",lineHeight:"1.5",letterSpacing:"0.10px"},n.queryText)),l(m.T,{marginTop:"5",marginBottom:"10",marginRight:"-15"},l(u.Row,null,l(u.Column,{sm:12,md:12,xs:12},l(m.p,null,l(m.T,{marginRight:"10",marginTop:"5",marginLeft:"-15"},l(m.U,{fontSize:"13px",color:"#4F4F4F"},n.subExpertise)),l(m.T,{marginTop:"0"},l(m.U,{fontSize:"20px",color:"#4F4F4F"},"|")),l(m.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},l(m.U,{fontSize:"13px",color:"#4F4F4F"},e(n.timestamp))),l(m.T,{marginTop:"0"},l(m.U,{fontSize:"20px",color:"#4F4F4F"},"|")),l(m.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},l(m.U,{fontSize:"13px",color:"#4F4F4F"},r(n.timestamp))))))))),l("div",null,n.answers?l(i.a.Fragment,null,n.answers.map((function(t,i){return l(u.Row,null,l(u.Column,{md:1,sm:2,xs:2},l(m.T,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},l(m.x,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),l(u.Column,{md:11,sm:10,xs:10},l(m.p,null,l(m.T,{marginRight:"10",marginTop:"10"},l(m.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},t.consultant.name))),l(m.T,{marginBottom:"10",marginRight:"-15px"},l(m.t,{borderBottom:"1px solid #E0E0E0"},l(m.p,null,l(m.T,{marginRight:"10",marginTop:"10"},l(m.U,{fontSize:"14px",color:"#AFAFAF"},n.expertise)),l(m.T,{marginTop:"6"},l(m.U,{fontSize:"20px",color:"#AFAFAF"},"|")),l(m.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},l(m.U,{fontSize:"14px",color:"#AFAFAF"},e(t.createdAt))),l(m.T,{marginTop:"6"},l(m.U,{fontSize:"20px",color:"#AFAFAF"},"|")),l(m.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},l(m.U,{fontSize:"14px",color:"#AFAFAF"},r(t.createdAt)))),l(m.T,{marginTop:"10",marginBottom:"10"},l(m.U,{fontSize:"16px",color:"AFAFAF",letterSpacing:"0.10px",lineHeight:"1.5"},t.answer))))))}))):l("div",null)))})))}},"Bs8+":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSP",(function(){return F})),e.d(t,"default",(function(){return h}));var r=e("q1tI"),i=e.n(r),o=e("8Kt/"),a=e.n(o),u=e("r1fl"),m=e("ODXe"),c=e("6f/8"),l=e("8IXb"),g=e("/COj"),p=e("GNyq"),f=i.a.createElement;function s(n){var t=n.queryId;console.log(t);var e=i.a.useState([]),r=Object(m.a)(e,2),o=r[0],a=r[1];return i.a.useEffect((function(){!function(n){fetch("".concat(p.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:0,skip:0})}).then((function(n){return n.json()})).then((function(t){var e=t.queries.filter((function(t){return t._id===n}));a(e)}))}(t)}),[]),f(i.a.Fragment,null,f(c.Container,null,f(l.Row,null,f(l.Column,{md:12,sm:12,xs:12},f(g.a,{QuestionItems:o})))))}var d=e("pkQc"),T=i.a.createElement,F=!0;function h(n){var t=n.queryId;return T("main",null,T(a.a,null,T("title",null,"Protalk App"),T("link",{rel:"icon",href:"/favicon.ico"}),T("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),T("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),T("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),T("div",null,T(u.a,null),T(s,{queryId:t}),T(d.a,null)))}},Puqf:function(n,t,e){"use strict";function r(n){return new Date(n).getDate()}function i(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(n).getMonth()]}function o(n){return new Date(n).getFullYear()}function a(n){return new Date(n).getHours()}function u(n){var t=new Date(n);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}e.d(t,"a",(function(){return r})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u}))},aAHT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-query/[id]",function(){return e("Bs8+")}])}},[["aAHT",0,2,1,3,4]]]);