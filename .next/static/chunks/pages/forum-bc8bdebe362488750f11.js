_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},GNyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://13.127.122.195:8080"},"HaE+":function(e,t,n){"use strict";function a(e,t,n,a,r,o,i){try{var s=e[o](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,c,"next",e)}function c(e){a(i,r,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function a(e){return new Date(e).getDate()}function r(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function o(e){return new Date(e).getFullYear()}function i(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return C})),n.d(t,"default",(function(){return P}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),s=n("r1fl"),c=n("ODXe"),u=n("6f/8"),l=n("8IXb"),f=n("b/TK"),p=n("wJam"),d=n("Puqf"),m=r.a.createElement;function g(e){var t=e.QuestionItems,n=r.a.useState(""),a=Object(c.a)(n,2),o=(a[0],a[1],r.a.useState({id:""})),i=Object(c.a)(o,2),s=i[0],u=i[1];function f(e){return Object(d.a)(e)+" "+Object(d.d)(e)+" "+Object(d.e)(e)}function g(e){var t=Object(d.b)(e)>=12?"PM":"AM";return Object(d.b)(e)+":"+Object(d.c)(e)+" "+t}return m(r.a.Fragment,null,m(p.V,{marginTop:"20",marginBottom:"50"},t.map((function(e,t){return m(r.a.Fragment,null,m(p.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},m(l.Row,null,m(l.Column,{md:1,sm:2,xs:2},m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},m(p.x,{src:e.image,height:"40",width:"40",borderRadius:"50%"}))),m(l.Column,{md:11,sm:10,xs:10},m(p.o,null,m(p.V,{marginRight:"10",marginTop:"10",marginBottom:"10"},m(p.X,{fontSize:"18px",color:"#232323"},e.expertise)),m(p.V,{marginRight:"10",marginTop:"10",marginBottom:"10"},m(p.E,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===e.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===e.queryType?"1px solid #FF3140":"1px solid #029532"},e.queryType))),m(p.V,{marginTop:"5",marginBottom:"10"},m(p.X,{fontSize:"16px",color:"#4F4F4F"},e.queryText)),m(p.V,{marginTop:"20",marginBottom:"20",marginRight:"-15"},m(p.t,{borderTop:"1px solid #E0E0E0"},m(p.o,null,m(p.V,{marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#4F4F4F"},e.subExpertise)),m(p.V,{marginTop:"6"},m(p.X,{fontSize:"20px",color:"#4F4F4F"},"|")),m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#4F4F4F"},f(e.timestamp))),m(p.V,{marginTop:"6"},m(p.X,{fontSize:"20px",color:"#4F4F4F"},"|")),m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#4F4F4F"},g(e.timestamp))),e.answers?m(p.V,{marginRight:"10",marginTop:"5"},m(p.E,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(s.id===e._id?"#029532":"none"),color:"".concat(s.id===e._id?"#fff":"#029532"),onClick:function(){return t=e._id,void u({id:t});var t},width:"150px",height:"30px"},e.answers.length+" Answers")):m(r.a.Fragment,null)))))),m("div",{className:"".concat(s.id===e._id?"accordionactive":"accordion")},e.answers?m(r.a.Fragment,null,e.answers.map((function(t,n){return m(l.Row,null,m(l.Column,{md:2,sm:2,xs:2},m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},m(p.x,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),m(l.Column,{md:10,sm:10,xs:10},m(p.o,null,m(p.V,{marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"22px",color:"#232323"},t.consultant.name))),m(p.V,{marginBottom:"10",marginRight:"-15"},m(p.t,{borderBottom:"1px solid #E0E0E0"},m(p.o,null,m(p.V,{marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#AFAFAF"},e.expertise)),m(p.V,{marginTop:"6"},m(p.X,{fontSize:"20px",color:"#AFAFAF"},"|")),m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#AFAFAF"},f(t.createdAt))),m(p.V,{marginTop:"6"},m(p.X,{fontSize:"20px",color:"#AFAFAF"},"|")),m(p.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},m(p.X,{fontSize:"14px",color:"#AFAFAF"},g(t.createdAt)))),m(p.V,{marginTop:"10",marginBottom:"10"},m(p.X,{fontSize:"16px",color:"AFAFAF"},t.answer))))))}))):m(r.a.Fragment,null))),m("br",null))}))))}var h=n("gCaR"),b=n("GNyq"),x=n("o0o1"),y=n.n(x),v=n("HaE+");function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=r.a.createElement;function T(e){var t=e.children,n=e.onClickEvent,r=e.buttonType,o=void 0===r?"button":r,i=Object(a.useMemo)((function(){return{backgroundColor:"#000",border:"10px solid #009846",borderRadius:"50%",fontWeight:500,cursor:"pointer",filter:"drop-shadow(0px 2px 10px #009846)",padding:"10px"}}),[]);return F("button",{style:i,type:o,onClick:n},t)}var O=n("5nti"),S=n("E4hQ"),E=n("fARU"),j=r.a.createElement;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(){var e=r.a.useState(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],i=r.a.useState({}),s=Object(c.a)(i,2),u=s[0],l=s[1],f=Object(a.useRef)(null),d=Object(a.useState)(""),m=d[0],g=d[1],h=Object(a.useState)(!1),x=h[0],F=h[1],k=Object(a.useState)([]),R=k[0],_=k[1],A=r.a.useState([]),I=Object(c.a)(A,2),N=I[0],C=I[1],P=r.a.useState([]),z=Object(c.a)(P,2),V=z[0],Y=z[1],B=r.a.useState(""),W=Object(c.a)(B,2),X=W[0],q=W[1],M=r.a.useState(""),J=Object(c.a)(M,2),K=J[0],L=J[1],H=r.a.useState(""),Q=Object(c.a)(H,2),G=Q[0],U=Q[1],Z=r.a.useState(""),$=Object(c.a)(Z,2),ee=($[0],$[1]),te=r.a.useState(""),ne=Object(c.a)(te,2),ae=ne[0],re=ne[1];var oe=function(){f.current.scrollIntoView({behavior:"smooth",block:"start"})};function ie(e,t,n){console.log(e),console.log(n.target.id),l(D(D({},u),{},w({},e,n.target.name))),oe();var a=N.filter((function(t){return fe(t,e)}));0!==a.length&&function(e){ce.apply(this,arguments)}(t),console.log(a,a[0]._id);var r=V.filter((function(t){return le(t,e)}));console.log(r,"dev"),L(r[0]._id),0!==r.length&&function(){ue.apply(this,arguments)}()}function se(){return(se=Object(v.a)(y.a.mark((function e(){var t,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.a,"/apiV2/expertises"),{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a={text:"Select your area of expertise",button:n.expertises},C(n.expertises),_(R.concat(a)),oe();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(v.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(t),e.next=3,fetch("".concat(b.a,"/apiV2/expertise_subexpertise/").concat(t),{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),r=[{text:"Select your area of Sub expertise",button:a.subExpertise}],Y(a.subExpertise),_(R.concat(r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(!0),t=[{text:"Please provide your Query Title ?"}],_(R.concat(t)),oe();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){se.apply(this,arguments)}()}),[]);var le=function(e,t){return console.log(e.name===t),e.name===t},fe=function(e,t){return console.log(e.name===t,e,t),e.name===t};return j(r.a.Fragment,null,j(p.j,null,j(T,{onClickEvent:function(){o(!n)}},j(O.a,{name:S.a.chat}))),!0===n?j(p.i,null,j(p.l,null,j(p.V,{marginTop:"10",marginBottom:"10"},j(p.X,{color:"#fff",fontSize:"20px",letterSpacing:"0.56px",fontWeight:"600"},"Welcome to Protalk")),j(p.V,{marginTop:"10",marginBottom:"10"},j(p.X,{color:"#fff",fontSize:"14px",letterSpacing:"0.56px",fontWeight:"400"},"Budget Friendly Multi consultant application"))),j(p.k,null,j(p.I,null,R.map((function(e,t){return j(r.a.Fragment,null,e.text?j(p.D,null,j(p.o,null,j(p.V,{marginTop:"10",marginBottom:"10"},j(p.x,{src:E,height:"25",width:"25",borderRadius:"50%"})),j("div",null,j(p.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},j(p.X,{color:"#000",fontSize:"12px",fontWeight:"400",lineHeight:"15px"},e.text)),e.button?j("div",null,e.button.map((function(e,t){return j(p.E,{fontSize:"12px",padding:"10px",border:"0.4px solid #029532",background:"".concat(u[e.name]===e.name?"#029532":"none"),color:"".concat(u[e.name]===e.name?"#fff":"#029532"),onClick:function(t){return ie(e.name,e._id,t)},style:{margin:"10px"},name:e.name,id:e._id},e.name)}))):j(r.a.Fragment,null)))):"",e.text1?j(p.D,null,j(p.o,{justifyContent:"flex-end"},j(p.g,{border:"0.8px solid rgba(204, 206, 210, 0.5)",borderRadius:" 6px",padding:"10px"},j(p.X,{color:"#000",fontSize:"12px",fontWeight:"400",lineHeight:"15px"},e.text1)))):j(r.a.Fragment,null),j("div",{ref:f}))}))),!1===x?j(r.a.Fragment,null):j("div",null,j(p.t,{borderTop:"1px solid #E3E3E3"}),j("form",{onSubmit:function(e){e.preventDefault(),g("")}},j(p.o,null,j(p.C,{value:m,placeholder:"Type your reply here",onChange:function(e){var t=e.target.value;g(t)},onKeyDown:function(e){var t=e.target.value;if("Enter"===e.key){var n=R[R.length-1];"Please provide your Query Title ?"===n.text&&function(e){re(e);var t=[{text1:e},{text:"Please can you elaborate your Query ?"}];_(R.concat(t))}(t),"Please can you elaborate your Query ?"===n.text&&function(e){U(e);var t=[{text1:e},{text:"Your query has been posted to our experts, you can find your query answer in your Protalk app"},{text:"Please provide your Mobile Number, so that we can forward you playstore link"}];_(R.concat(t))}(t),"Please provide your Mobile Number, so that we can forward you playstore link"===n.text&&function(e){ee(e);var t=[{text1:e},{text:"Thank you for you interest, We provide you 10% Discount coupon (\u201cFIRSTPRO\u201d Code) for your first service in protalk app"}];_(R.concat(t)),function(e){console.log(X,K,ae,G,e,"body");var t=e;console.log(t,"phon"),fetch("".concat(b.a,"/apiV2/website_bot/create_request"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:X,subExpertiseId:K,queryTitle:ae,queryContent:G,phoneNumber:t})}).then((function(e){return console.log(e,"response"),e.json()})).then((function(e){console.log(e,"test res")}))}(e)}(t)}}})))))):j(r.a.Fragment,null))}var _=r.a.createElement;function A(e){e.queryName;var t=r.a.useState([]),n=Object(c.a)(t,2),a=n[0],o=n[1],i=r.a.useState({width:void 0,height:void 0}),s=Object(c.a)(i,2),p=(s[0],s[1]);r.a.useEffect((function(){function e(){p({width:window.innerWidth,height:window.innerHeight})}return fetch("".concat(b.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:10,skip:0})}).then((function(e){return e.json()})).then((function(e){o(e.queries)})),window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);return _(r.a.Fragment,null,_(f.a,{BanerItems:h.f}),_(u.Container,null,_(l.Row,null,_(l.Column,{md:12,sm:12,xs:12},_(g,{QuestionItems:a})))),_(R,null))}var I=n("pkQc"),N=r.a.createElement,C=!0;function P(e){var t=e.queryName;return N("main",null,N(i.a,null,N("title",null,"Protalk App"),N("link",{rel:"icon",href:"/favicon.ico"}),N("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),N("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),N("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),N("div",null,N(s.a,null),N(A,{queryName:t}),N(I.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("8IXb"),i=n("6f/8"),s=n("wJam"),c=r.a.createElement;function u(e){var t=e.BanerItems;return c(r.a.Fragment,null,void 0===t?c(r.a.Fragment,null):c(r.a.Fragment,null,t.map((function(e,t){return c(s.c,{banner:e.bannerImage},c(i.Container,null,c(o.Row,null,c(o.Column,{sm:6,mdOffset:3},c(s.V,{marginTop:"60"},c(s.q,null,e.bannerTitle),c(s.W,null,e.bannerText)),c(s.V,{marginTop:"50"},c(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return m}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var a=n("o/+c"),r=n("4E9g"),o=n("Q+D0"),i=n("cf+u"),s=n("rBeG"),c=(n("wpbd"),n("kiPg"),n("pXIl")),u=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],l=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],f=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:r,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:o,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:i,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:a,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],p=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:a,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:c},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:c}]}],d=[{id:"1",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:a,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],m=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},o0o1:function(e,t,n){e.exports=n("ls82")},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);