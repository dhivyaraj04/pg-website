_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"474b":function(n,t){n.exports="/_next/static/images/loader-072b3f895dd9af5f1e6aae0e58561749.gif"},"Bs8+":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSP",(function(){return E})),e.d(t,"default",(function(){return _}));var o=e("q1tI"),i=e.n(o),r=e("8Kt/"),a=e.n(r),u=e("r1fl"),l=e("ODXe"),c=e("6f/8"),m=e("8IXb"),g=e("YFqc"),p=e.n(g),f=e("wJam"),s=e("Puqf"),d=e("hdqj"),T=i.a.createElement;function x(n){var t=n.QuestionItems;function e(n){return Object(s.a)(n)+" "+Object(s.d)(n)+" "+Object(s.e)(n)}function o(n){var t=Object(s.b)(n)>=12?"PM":"AM";return Object(s.b)(n)+":"+Object(s.c)(n)+" "+t}return T(i.a.Fragment,null,t.map((function(n,t){return T(f.T,{marginTop:"30",marginBottom:"10"},T(m.Row,null,T(m.Column,{md:12,sm:12,xs:12},T(f.p,{justifyContent:"space-between"},T(f.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},T(f.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},n.expertise)),T(f.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},T(p.a,{href:"/forum"},T(f.E,{fontSize:"15px",padding:"5px",border:"0.4px solid #029532",background:"#029532",color:"#fff",width:"150px",height:"27px"},"Back")))),T(f.T,{marginTop:"5",marginBottom:"5"},T(f.U,{fontSize:"16px",color:"#4F4F4F",lineHeight:"1.5",letterSpacing:"0.10px"},n.queryText)),T(f.T,{marginTop:"5",marginBottom:"10",marginRight:"-15"},T(m.Row,null,T(m.Column,{sm:12,md:12,xs:12},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"5",marginLeft:"-15"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},n.subExpertise)),T(f.T,{marginTop:"0"},T(f.U,{fontSize:"20px",color:"#4F4F4F"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},e(n.timestamp))),T(f.T,{marginTop:"0"},T(f.U,{fontSize:"20px",color:"#4F4F4F"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},o(n.timestamp))))))))),T("div",null,n.answers?T(i.a.Fragment,null,n.answers.map((function(t,i){return T(m.Row,null,T(m.Column,{md:1,sm:2,xs:2},T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},T(f.x,{src:t.consultant.image?t.consultant.image:d,height:"40",width:"40",borderRadius:"50%"}))),T(m.Column,{md:11,sm:10,xs:10},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},t.consultant.name))),T(f.T,{marginBottom:"10",marginRight:"-15px"},T(f.t,{borderBottom:"1px solid #E0E0E0"},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},n.expertise)),T(f.T,{marginTop:"6"},T(f.U,{fontSize:"20px",color:"#AFAFAF"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},e(t.createdAt))),T(f.T,{marginTop:"6"},T(f.U,{fontSize:"20px",color:"#AFAFAF"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},o(t.createdAt)))),T(f.T,{marginTop:"10",marginBottom:"10"},T(f.U,{fontSize:"16px",color:"AFAFAF",letterSpacing:"0.10px",lineHeight:"1.5"},t.answer))))))}))):T("div",null)))})))}var h=e("GNyq"),F=e("gJGr"),w=e("474b"),b=i.a.createElement;function A(n){var t=n.queryId;console.log(t);var e=i.a.useState([]),o=Object(l.a)(e,2),r=o[0],a=o[1];return i.a.useEffect((function(){a([]),function(n){fetch("".concat(h.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(n){return n.json()})).then((function(t){console.log(t.queries,"1");var e=t.queries.filter((function(t){return t._id===n}));console.log(e,"2"),a(e)}))}(t)}),[]),b(i.a.Fragment,null,b(f.t,{borderTop:"1px solid #E0E0E0"}),b(c.Container,null,b(m.Row,null,b(m.Column,{md:12,sm:12,xs:12},0===r.length?b(f.h,null,b(f.x,{src:w})):b(x,{QuestionItems:r})))),b(F.a,null))}var S=e("pkQc"),v=i.a.createElement,E=!0;function _(n){var t=n.queryId;return v("main",null,v(a.a,null,v("title",null,"Protalk App"),v("link",{rel:"icon",href:"/favicon.ico"}),v("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),v("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),v("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),v("div",null,v(u.a,null),v(A,{queryId:t}),v(S.a,null)))}},Puqf:function(n,t,e){"use strict";function o(n){return new Date(n).getDate()}function i(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(n).getMonth()]}function r(n){return new Date(n).getFullYear()}function a(n){return new Date(n).getHours()}function u(n){var t=new Date(n);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}e.d(t,"a",(function(){return o})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return r})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u}))},aAHT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-query/[id]",function(){return e("Bs8+")}])},hdqj:function(n,t){n.exports="/_next/static/images/dummy-profile-d0737c6407af1a5b3b62a426e5c47aac.png"}},[["aAHT",0,2,1,3,4]]]);