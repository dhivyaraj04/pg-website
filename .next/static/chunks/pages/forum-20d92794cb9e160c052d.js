_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},GNyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://13.127.122.195:8080"},"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){a(o,r,i,s,c,"next",e)}function c(e){a(o,r,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function a(e){return new Date(e).getDate()}function r(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function i(e){return new Date(e).getFullYear()}function o(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return I})),n.d(t,"default",(function(){return z}));var a=n("q1tI"),r=n.n(a),i=n("8Kt/"),o=n.n(i),s=n("r1fl"),c=n("ODXe"),u=n("6f/8"),l=n("8IXb"),f=n("b/TK"),m=n("wJam"),d=n("Puqf"),p=r.a.createElement;function g(e){var t=e.QuestionItems,n=r.a.useState(""),a=Object(c.a)(n,2),i=(a[0],a[1],r.a.useState({id:""})),o=Object(c.a)(i,2),s=o[0],u=o[1];function f(e){return Object(d.a)(e)+" "+Object(d.d)(e)+" "+Object(d.e)(e)}function g(e){var t=Object(d.b)(e)>=12?"PM":"AM";return Object(d.b)(e)+":"+Object(d.c)(e)+" "+t}return p(r.a.Fragment,null,p(m.U,{marginTop:"20",marginBottom:"50"},t.map((function(e,t){return p(r.a.Fragment,null,p(m.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},p(l.Row,null,p(l.Column,{md:1,sm:2,xs:2},p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},p(m.x,{src:e.image,height:"40",width:"40",borderRadius:"50%"}))),p(l.Column,{md:11,sm:10,xs:10},p(m.o,null,p(m.U,{marginRight:"10",marginTop:"10",marginBottom:"10"},p(m.W,{fontSize:"18px",color:"#232323"},e.expertise)),p(m.U,{marginRight:"10",marginTop:"10",marginBottom:"10"},p(m.D,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===e.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===e.queryType?"1px solid #FF3140":"1px solid #029532"},e.queryType))),p(m.U,{marginTop:"5",marginBottom:"10"},p(m.W,{fontSize:"16px",color:"#4F4F4F"},e.queryText)),p(m.U,{marginTop:"20",marginBottom:"20",marginRight:"-15"},p(m.t,{borderTop:"1px solid #E0E0E0"},p(m.o,null,p(m.U,{marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#4F4F4F"},e.subExpertise)),p(m.U,{marginTop:"6"},p(m.W,{fontSize:"20px",color:"#4F4F4F"},"|")),p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#4F4F4F"},f(e.timestamp))),p(m.U,{marginTop:"6"},p(m.W,{fontSize:"20px",color:"#4F4F4F"},"|")),p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#4F4F4F"},g(e.timestamp))),e.answers?p(m.U,{marginRight:"10",marginTop:"5"},p(m.D,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(s.id===e._id?"#029532":"none"),color:"".concat(s.id===e._id?"#fff":"#029532"),onClick:function(){return t=e._id,void u({id:t});var t},width:"150px",height:"30px"},e.answers.length+" Answers")):p(r.a.Fragment,null)))))),p("div",{className:"".concat(s.id===e._id?"accordionactive":"accordion")},e.answers?p(r.a.Fragment,null,e.answers.map((function(t,n){return p(l.Row,null,p(l.Column,{md:2,sm:2,xs:2},p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},p(m.x,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),p(l.Column,{md:10,sm:10,xs:10},p(m.o,null,p(m.U,{marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"22px",color:"#232323"},t.consultant.name))),p(m.U,{marginBottom:"10",marginRight:"-15"},p(m.t,{borderBottom:"1px solid #E0E0E0"},p(m.o,null,p(m.U,{marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#AFAFAF"},e.expertise)),p(m.U,{marginTop:"6"},p(m.W,{fontSize:"20px",color:"#AFAFAF"},"|")),p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#AFAFAF"},f(t.createdAt))),p(m.U,{marginTop:"6"},p(m.W,{fontSize:"20px",color:"#AFAFAF"},"|")),p(m.U,{marginLeft:"10",marginRight:"10",marginTop:"10"},p(m.W,{fontSize:"14px",color:"#AFAFAF"},g(t.createdAt)))),p(m.U,{marginTop:"10",marginBottom:"10"},p(m.W,{fontSize:"16px",color:"AFAFAF"},t.answer))))))}))):p(r.a.Fragment,null))),p("br",null))}))))}var h=n("gCaR"),b=n("GNyq"),x=n("o0o1"),w=n.n(x),y=n("HaE+");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=r.a.createElement;function T(e){var t=e.children,n=e.onClickEvent,r=e.buttonType,i=void 0===r?"button":r,o=Object(a.useMemo)((function(){return{backgroundColor:"#000",border:"10px solid #009846",borderRadius:"50%",fontWeight:500,cursor:"pointer",filter:"drop-shadow(0px 2px 10px #009846)",padding:"10px"}}),[]);return F("button",{style:o,type:i,onClick:n},t)}var O=n("5nti"),S=n("E4hQ"),E=n("fARU"),j=r.a.createElement;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(){var e=r.a.useState(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],o=r.a.useState({}),s=Object(c.a)(o,2),u=s[0],l=s[1],f=(Object(a.useRef)(null),Object(a.useState)([])),d=f[0],p=f[1],g=r.a.useState([]),h=Object(c.a)(g,2),x=h[0],F=h[1],A=r.a.useState([]),R=Object(c.a)(A,2),W=(R[0],R[1]);function _(e,t,n){l(D(D({},u),{},v({},e,n.target.name))),function(e){N.apply(this,arguments)}(t)}function k(){return(k=Object(y.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.a,"/apiV2/expertises"),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r={text:"Select your area of expertise",button:a.expertises},F([r]),p(d.concat(r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(y.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.a,"/apiV2/expertise_subexpertise/").concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=[{text:"Select your area of Sub expertise",button:a.subExpertise}],W([r]),p(d.concat(r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e){k.apply(this,arguments)}("expertises")}),[]),console.log(d,"messages"),console.log(x),j(r.a.Fragment,null,j(m.j,null,j(T,{onClickEvent:function(){i(!n)}},j(O.a,{name:S.a.chat}))),!0===n?j(m.i,null,j(m.l,null,j(m.U,{marginTop:"10",marginBottom:"10"},j(m.W,{color:"#fff",fontSize:"20px",letterSpacing:"0.56px",fontWeight:"600"},"Welcome to Protalk")),j(m.U,{marginTop:"10",marginBottom:"10"},j(m.W,{color:"#fff",fontSize:"14px",letterSpacing:"0.56px",fontWeight:"400"},"Budget Friendly Multi consultant application"))),j(m.k,null,j(m.H,null,d.map((function(e,t){return j(r.a.Fragment,null,j(m.C,null,j(m.o,null,j(m.U,{marginTop:"10",marginBottom:"10"},j(m.x,{src:E,height:"25",width:"25",borderRadius:"50%"})),j("div",null,j(m.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},j(m.W,{color:"#000",fontSize:"12px",fontWeight:"400",lineHeight:"15px"},e.text)),j("div",null,e.button.map((function(e,t){return j(m.D,{fontSize:"12px",padding:"10px",border:"0.4px solid #029532",background:"".concat(u[e.name]===e.name?"#029532":"none"),color:"".concat(u[e.name]===e.name?"#fff":"#029532"),onClick:function(t){return _(e.name,e._id,t)},style:{margin:"10px"},name:e.name},e.name)})))))))}))))):j(r.a.Fragment,null))}var W=r.a.createElement;function _(e){e.queryName;var t=r.a.useState([]),n=Object(c.a)(t,2),a=n[0],i=n[1],o=r.a.useState({width:void 0,height:void 0}),s=Object(c.a)(o,2),m=(s[0],s[1]);r.a.useEffect((function(){function e(){m({width:window.innerWidth,height:window.innerHeight})}return fetch("".concat(b.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:10,skip:0})}).then((function(e){return e.json()})).then((function(e){console.log(e.queries),i(e.queries)})),window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return W(r.a.Fragment,null,W(f.a,{BanerItems:h.f}),W(u.Container,null,W(l.Row,null,W(l.Column,{md:12,sm:12,xs:12},W(g,{QuestionItems:a})))),W(R,null))}var k=n("pkQc"),N=r.a.createElement,I=!0;function z(e){var t=e.queryName;return N("main",null,N(o.a,null,N("title",null,"Protalk App"),N("link",{rel:"icon",href:"/favicon.ico"}),N("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),N("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),N("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),N("div",null,N(s.a,null),N(_,{queryName:t}),N(k.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("8IXb"),o=n("6f/8"),s=n("wJam"),c=r.a.createElement;function u(e){var t=e.BanerItems;return c(r.a.Fragment,null,void 0===t?c(r.a.Fragment,null):c(r.a.Fragment,null,t.map((function(e,t){return c(s.c,{banner:e.bannerImage},c(o.Container,null,c(i.Row,null,c(i.Column,{sm:6,mdOffset:3},c(s.U,{marginTop:"60"},c(s.q,null,e.bannerTitle),c(s.V,null,e.bannerText)),c(s.U,{marginTop:"50"},c(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return p}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var a=n("o/+c"),r=n("4E9g"),i=n("Q+D0"),o=n("cf+u"),s=n("rBeG"),c=(n("wpbd"),n("kiPg"),n("pXIl")),u=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],l=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],f=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:r,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:i,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:o,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],m=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:a,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:c},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:c}]}],d=[{id:"1",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],p=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},o0o1:function(e,t,n){e.exports=n("ls82")},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);