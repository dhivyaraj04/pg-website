_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},GNyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://13.127.122.195:8080"},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return _})),n.d(t,"default",(function(){return D}));var a=n("q1tI"),i=n.n(a),r=n("8Kt/"),o=n.n(r),s=n("r1fl"),l=n("ODXe"),u=n("6f/8"),c=n("8IXb"),d=n("b/TK"),m=n("FJZC"),p=n("wJam");function f(e){return new Date(e).getHours()}var g=i.a.createElement;function h(e){var t=e.QuestionItems,n=i.a.useState(""),a=Object(l.a)(n,2),r=a[0],o=a[1],s=i.a.useState({id:""}),u=Object(l.a)(s,2),d=u[0],h=u[1];var b=t.filter((function(e){return-1!==e.expertise.toLowerCase().indexOf(r.toLowerCase())}));function x(e){return function(e){return new Date(e).getDate()}(e)+" "+function(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}(e)+" "+function(e){return new Date(e).getFullYear()}(e)}function w(e){var t=f(e)>=12?"PM":"AM";return f(e)+":"+function(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}(e)+" "+t}return g(i.a.Fragment,null,g(p.g,{borderRadius:"10px",border:"2px solid #E8EEF3",padding:"5px"},g(c.Row,null,g(c.Column,{md:9,sm:9,xs:9},g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},g(m.a,{onChange:function(e){var t=e.target.value;o(t)},value:r}))),g(c.Column,{md:3,sm:3,xs:3},g(p.O,{marginLeft:"-10",marginRight:"10",marginTop:"10",marginBottom:"10"},g(p.x,{fontSize:"16px",padding:"12px",background:"#009846",color:"#fff",width:"150px",height:"45px",border:"none"},"Ask a Query"))))),g("br",null),b.map((function(e,t){return g(i.a.Fragment,null,g(p.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},g(c.Row,null,g(c.Column,{md:2,sm:2,xs:2},g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},g(p.r,{src:e.image,height:"40",width:"40",borderRadius:"50%"}))),g(c.Column,{md:10,sm:10,xs:10},g(p.j,null,g(p.O,{marginRight:"10",marginTop:"10",marginBottom:"10"},g(p.Q,{fontSize:"22px",color:"#232323"},e.expertise)),g(p.O,{marginRight:"10",marginTop:"10",marginBottom:"10"},g(p.x,{fontSize:"16px",padding:"5px",background:"none",color:"PRIVATE"===e.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===e.queryType?"1px solid #FF3140":"1px solid #029532"},e.queryType))),g(p.O,{marginTop:"5",marginBottom:"10"},g(p.Q,{fontSize:"18px",color:"#4F4F4F"},e.queryText)),g(p.O,{marginTop:"20",marginBottom:"20",marginRight:"-15"},g(p.n,{borderTop:"1px solid #E0E0E0"},g(p.j,null,g(p.O,{marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#4F4F4F"},e.subExpertise)),g(p.O,{marginTop:"6"},g(p.Q,{fontSize:"20px",color:"#4F4F4F"},"|")),g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#4F4F4F"},x(e.timestamp))),g(p.O,{marginTop:"6"},g(p.Q,{fontSize:"20px",color:"#4F4F4F"},"|")),g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#4F4F4F"},w(e.timestamp))),e.answers?g(p.O,{marginRight:"10",marginTop:"5"},g(p.x,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(d.id===e._id?"#029532":"none"),color:"".concat(d.id===e._id?"#fff":"#029532"),onClick:function(){return t=e._id,void h({id:t});var t},width:"150px",height:"30px"},e.answers.length+" Answers")):g(i.a.Fragment,null)))))),g("div",{className:"".concat(d.id===e._id?"accordionactive":"accordion")},e.answers?g(i.a.Fragment,null,e.answers.map((function(t,n){return g(c.Row,null,g(c.Column,{md:2,sm:2,xs:2},g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},g(p.r,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),g(c.Column,{md:10,sm:10,xs:10},g(p.j,null,g(p.O,{marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"22px",color:"#232323"},t.consultant.name))),g(p.O,{marginBottom:"10",marginRight:"-15"},g(p.n,{borderBottom:"1px solid #E0E0E0"},g(p.j,null,g(p.O,{marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#AFAFAF"},e.expertise)),g(p.O,{marginTop:"6"},g(p.Q,{fontSize:"20px",color:"#AFAFAF"},"|")),g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#AFAFAF"},x(t.createdAt))),g(p.O,{marginTop:"6"},g(p.Q,{fontSize:"20px",color:"#AFAFAF"},"|")),g(p.O,{marginLeft:"10",marginRight:"10",marginTop:"10"},g(p.Q,{fontSize:"14px",color:"#AFAFAF"},w(t.createdAt)))),g(p.O,{marginTop:"10",marginBottom:"10"},g(p.Q,{fontSize:"16px",color:"AFAFAF"},t.answer))))))}))):g(i.a.Fragment,null))),g("br",null))})))}var b=n("gCaR"),x=n("GNyq"),w=i.a.createElement;function y(e){var t=e.children,n=e.onClickEvent,i=e.buttonType,r=void 0===i?"button":i,o=Object(a.useMemo)((function(){return{backgroundColor:"#000",border:"10px solid #009846",borderRadius:"50%",fontWeight:500,cursor:"pointer",filter:"drop-shadow(0px 2px 10px #009846)",padding:"10px"}}),[]);return w("button",{style:o,type:r,onClick:n},t)}var F=n("5nti"),v=n("E4hQ"),T=n("fARU"),O=i.a.createElement;function S(){var e=i.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return O(i.a.Fragment,null,O("div",{style:{position:"fixed",bottom:"10%",right:"10%"}},O(y,{onClickEvent:function(){a(!0)}},O(F.a,{name:v.a.chat}))),!0===n?O("div",{style:{position:"fixed",height:"400px",width:"400px",bottom:"20%",right:"10%"}},O("div",{style:{background:"#009846",borderRadius:"10px 10px 0px 0px",padding:"10px"}},O(p.O,{marginTop:"10",marginBottom:"10"},O(p.Q,{color:"#fff",fontSize:"20px",letterSpacing:"0.56px",fontWeight:"600"},"Welcome to Protalk")),O(p.O,{marginTop:"10",marginBottom:"10"},O(p.Q,{color:"#fff",fontSize:"14px",letterSpacing:"0.56px",fontWeight:"400"},"Budget Friendly Multi consultant application"))),O("div",{style:{background:"#fff",borderRadius:"0px 0px 10px 10px",padding:"10px",boxShadow:"0px 4px 17px rgba(0, 0, 0, 0.25)"}},O(p.B,null,O(p.w,null,O(p.j,null,O(p.O,{marginTop:"10",marginBottom:"10"},O(p.r,{src:T,height:"25",width:"25",borderRadius:"50%"})),O("div",null,O(p.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},"Hi there, what are you looking for today?"),[{name:"Take a Service"},{name:"Ask a Quary"},{name:"Looking for a Plan"}].map((function(e,t){return O("span",null,O(p.x,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(!0===n?"#029532":"none"),color:"".concat(!0===n?"#fff":"#029532"),onClick:"",height:"30px"},e.name))})))))))):O(i.a.Fragment,null))}var R=i.a.createElement;function A(e){e.queryName;var t=i.a.useState([]),n=Object(l.a)(t,2),a=n[0],r=n[1],o=i.a.useState({width:void 0,height:void 0}),s=Object(l.a)(o,2),m=(s[0],s[1]);i.a.useEffect((function(){function e(){m({width:window.innerWidth,height:window.innerHeight})}return fetch("".concat(x.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:10,skip:0})}).then((function(e){return e.json()})).then((function(e){console.log(e.queries),r(e.queries)})),window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return R(i.a.Fragment,null,R(d.a,{BanerItems:b.f}),R(u.Container,null,R(c.Row,null,R(c.Column,{md:12,sm:12,xs:12},R(h,{QuestionItems:a})))),R(S,null))}var E=n("pkQc"),k=i.a.createElement,_=!0;function D(e){var t=e.queryName;return k("main",null,k(o.a,null,k("title",null,"Protalk App"),k("link",{rel:"icon",href:"/favicon.ico"}),k("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),k("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),k("div",null,k(s.a,null),k(A,{queryName:t}),k(E.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),i=n.n(a),r=n("8IXb"),o=n("6f/8"),s=n("wJam"),l=i.a.createElement;function u(e){var t=e.BanerItems;return l(i.a.Fragment,null,void 0===t?l(i.a.Fragment,null):l(i.a.Fragment,null,t.map((function(e,t){return l(s.c,{banner:e.bannerImage},l(o.Container,null,l(r.Row,null,l(r.Column,{sm:6,mdOffset:3},l(s.O,{marginTop:"60"},l(s.k,null,e.bannerTitle),l(s.P,null,e.bannerText)),l(s.O,{marginTop:"50"},l(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return f}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var a=n("o/+c"),i=n("4E9g"),r=n("Q+D0"),o=n("cf+u"),s=n("rBeG"),l=(n("wpbd"),n("kiPg"),n("pXIl")),u=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],c=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],d=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:i,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:r,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:o,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],m=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:a,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l}]}],p=[{id:"1",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],f=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);