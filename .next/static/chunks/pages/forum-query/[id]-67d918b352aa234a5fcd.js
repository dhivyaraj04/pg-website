_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"474b":function(n,t){n.exports="/_next/static/images/loader-072b3f895dd9af5f1e6aae0e58561749.gif"},"Bs8+":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSP",(function(){return R})),e.d(t,"default",(function(){return _}));var i=e("q1tI"),r=e.n(i),o=e("8Kt/"),a=e.n(o),u=e("r1fl"),m=e("ODXe"),l=e("6f/8"),c=e("8IXb"),g=e("YFqc"),p=e.n(g),f=e("wJam"),s=e("Puqf"),d=e("hdqj"),T=r.a.createElement;function x(n){var t=n.QuestionItems;function e(n){return Object(s.a)(n)+" "+Object(s.d)(n)+" "+Object(s.e)(n)}function i(n){var t=Object(s.b)(n)>=12?"PM":"AM";return Object(s.b)(n)+":"+Object(s.c)(n)+" "+t}return T(r.a.Fragment,null,t.map((function(n,t){return T(r.a.Fragment,null,T(c.Row,null,T(c.Column,{md:12,sm:12,xs:12},T(f.p,{justifyContent:"flex-end"},T(f.T,{marginRight:"10",marginTop:"40",marginBottom:"0"},T(p.a,{href:"/forum"},T(f.E,{fontSize:"15px",padding:"5px",border:"0.4px solid #029532",background:"#029532",color:"#fff",width:"100px",height:"30px"},"Back")))))),T(f.T,{marginTop:"0",marginBottom:"10"},T(c.Row,null,T(c.Column,{md:12,sm:12,xs:12},T(f.p,{justifyContent:"space-between"},T(f.T,{marginRight:"10",marginTop:"10",marginBottom:"10"},T(f.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},n.expertise))),T(f.T,{marginTop:"5",marginBottom:"5"},T(f.U,{fontSize:"16px",color:"#4F4F4F",lineHeight:"1.5",letterSpacing:"0.10px"},n.queryText)),T(f.T,{marginTop:"5",marginBottom:"10",marginRight:"-15"},T(c.Row,null,T(c.Column,{sm:12,md:12,xs:12},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"5",marginLeft:"-15"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},n.subExpertise)),T(f.T,{marginTop:"0"},T(f.U,{fontSize:"20px",color:"#4F4F4F"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},e(n.timestamp))),T(f.T,{marginTop:"0"},T(f.U,{fontSize:"20px",color:"#4F4F4F"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"5"},T(f.U,{fontSize:"13px",color:"#4F4F4F"},i(n.timestamp))))))))),T("div",null,n.answers?T(r.a.Fragment,null,n.answers.map((function(t,r){return T(c.Row,null,T(c.Column,{md:1,sm:2,xs:2},T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},T(f.x,{src:t.consultant.image?t.consultant.image:d,height:"40",width:"40",borderRadius:"50%"}))),T(c.Column,{md:11,sm:10,xs:10},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},t.consultant.name))),T(f.T,{marginBottom:"10",marginRight:"-15px"},T(f.t,{borderBottom:"1px solid #E0E0E0"},T(f.p,null,T(f.T,{marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},n.expertise)),T(f.T,{marginTop:"6"},T(f.U,{fontSize:"20px",color:"#AFAFAF"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},e(t.createdAt))),T(f.T,{marginTop:"6"},T(f.U,{fontSize:"20px",color:"#AFAFAF"},"|")),T(f.T,{marginLeft:"10",marginRight:"10",marginTop:"10"},T(f.U,{fontSize:"14px",color:"#AFAFAF"},i(t.createdAt)))),T(f.T,{marginTop:"10",marginBottom:"10"},T(f.U,{fontSize:"16px",color:"AFAFAF",letterSpacing:"0.10px",lineHeight:"1.5"},t.answer))))))}))):T("div",null))))})))}var h=e("GNyq"),F=e("gJGr"),w=e("474b"),b=r.a.createElement;function A(n){var t=n.queryId,e=r.a.useState([]),i=Object(m.a)(e,2),o=i[0],a=i[1];return r.a.useEffect((function(){a([]),function(n){fetch("".concat(h.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:500,skip:0})}).then((function(n){return n.json()})).then((function(t){var e=t.queries.filter((function(t){return t._id===n}));a(e)}))}(t)}),[]),b(r.a.Fragment,null,b(f.t,{borderTop:"1px solid #E0E0E0"}),b(l.Container,null,b(c.Row,null,b(c.Column,{md:12,sm:12,xs:12},0===o.length?b(f.h,null,b(f.x,{src:w})):b(x,{QuestionItems:o})))),b(F.a,null))}var S=e("pkQc"),E=r.a.createElement,R=!0;function _(n){var t=n.queryId;return E("main",null,E(a.a,null,E("title",null,"Protalk App"),E("link",{rel:"icon",href:"/favicon.ico"}),E("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),E("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),E("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),E("div",null,E(u.a,null),E(A,{queryId:t}),E(S.a,null)))}},Puqf:function(n,t,e){"use strict";function i(n){return new Date(n).getDate()}function r(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(n).getMonth()]}function o(n){return new Date(n).getFullYear()}function a(n){return new Date(n).getHours()}function u(n){var t=new Date(n);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}e.d(t,"a",(function(){return i})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u}))},aAHT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum-query/[id]",function(){return e("Bs8+")}])},hdqj:function(n,t){n.exports="/_next/static/images/dummy-profile-d0737c6407af1a5b3b62a426e5c47aac.png"}},[["aAHT",0,2,1,3,4]]]);