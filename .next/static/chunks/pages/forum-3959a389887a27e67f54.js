_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function o(e){return new Date(e).getDate()}function r(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function i(e){return new Date(e).getFullYear()}function a(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return R})),n.d(t,"default",(function(){return L}));var o=n("q1tI"),r=n.n(o),i=n("8Kt/"),a=n.n(i),s=n("r1fl"),l=n("ODXe"),c=n("6f/8"),u=n("8IXb"),p=n("b/TK"),h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var d=function(){return(d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var m="Pixel",f="Percent",g={unit:f,value:.8};function b(e){return"number"===typeof e?{unit:f,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:m,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:f,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),g):(console.warn("scrollThreshold should be string or number"),g)}var v=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="none")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1},n.throttledOnScrollListener=function(e,t,n,o){var r,i=!1,a=0;function s(){r&&clearTimeout(r)}function l(){var l=this,c=Date.now()-a,u=arguments;function p(){a=Date.now(),n.apply(l,u)}function h(){r=void 0}i||(o&&!r&&p(),s(),void 0===o&&c>e?p():!0!==t&&(r=setTimeout(o?h:p,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),l.cancel=function(){s(),i=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=b(t);return o.unit===m?e.scrollTop<=o.value+n-e.scrollHeight+1||0===e.scrollTop:e.scrollTop<=o.value/100+n-e.scrollHeight+1||0===e.scrollTop},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=b(t);return o.unit===m?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=d({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component),T=n("wJam"),w=n("Puqf"),y=r.a.createElement;function x(e){var t=e.QuestionItems,n=r.a.useState({id:""}),o=Object(l.a)(n,2),i=o[0],a=o[1];function s(e){return Object(w.a)(e)+" "+Object(w.d)(e)+" "+Object(w.e)(e)}function c(e){var t=Object(w.b)(e)>=12?"PM":"AM";return Object(w.b)(e)+":"+Object(w.c)(e)+" "+t}var p=r.a.useState(Array.from({length:20})),h=Object(l.a)(p,2),d=h[0],m=h[1];return y(T.W,{marginTop:"20",marginBottom:"50"},y(v,{dataLength:t.length,next:function(){setTimeout((function(){m(d.concat(Array.from({length:1})))}),1500)},hasMore:!0,loader:y("h4",null,"Loading...")},t.map((function(e,t){return y(r.a.Fragment,null,y(T.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},y(u.Row,null,y(u.Column,{md:1,sm:2,xs:2},y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},y(T.y,{src:e.image,height:"40",width:"40",borderRadius:"50%"}))),y(u.Column,{md:11,sm:10,xs:10},y(T.p,null,y(T.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},y(T.Y,{fontSize:"18px",color:"#232323"},e.expertise)),y(T.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},y(T.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===e.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===e.queryType?"1px solid #FF3140":"1px solid #029532"},e.queryType))),y(T.W,{marginTop:"5",marginBottom:"10"},y(T.Y,{fontSize:"16px",color:"#4F4F4F"},e.queryText)),y(T.W,{marginTop:"20",marginBottom:"20",marginRight:"-15"},y(T.u,{borderTop:"1px solid #E0E0E0"},y(u.Row,null,y(u.Column,{sm:12,md:6,xs:12},y(T.p,null,y(T.W,{marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#4F4F4F"},e.subExpertise)),y(T.W,{marginTop:"6"},y(T.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#4F4F4F"},s(e.timestamp))),y(T.W,{marginTop:"6"},y(T.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#4F4F4F"},c(e.timestamp))))),y(u.Column,{xs:12,md:6,sm:12,className:"padding"},e.answers?y(T.W,{marginRight:"10",marginTop:"5"},y(T.F,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(i.id===e._id?"#029532":"none"),color:"".concat(i.id===e._id?"#fff":"#029532"),onClick:function(){return t=e._id,void a({id:t});var t},width:"150px",height:"30px"},e.answers.length+" Answers")):y(r.a.Fragment,null))))))),y("div",{className:"".concat(i.id===e._id?"accordionactive":"accordion")},e.answers?y(r.a.Fragment,null,e.answers.map((function(t,n){return y(u.Row,null,y(u.Column,{md:1,sm:2,xs:2},y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},y(T.y,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),y(u.Column,{md:11,sm:10,xs:10,className:"padding"},y(T.p,null,y(T.W,{marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"22px",color:"#232323"},t.consultant.name))),y(T.W,{marginBottom:"10",marginRight:"-15"},y(T.u,{borderBottom:"1px solid #E0E0E0"},y(T.p,null,y(T.W,{marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#AFAFAF"},e.expertise)),y(T.W,{marginTop:"6"},y(T.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#AFAFAF"},s(t.createdAt))),y(T.W,{marginTop:"6"},y(T.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),y(T.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(T.Y,{fontSize:"14px",color:"#AFAFAF"},c(t.createdAt)))),y(T.W,{marginTop:"10",marginBottom:"10"},y(T.Y,{fontSize:"16px",color:"AFAFAF"},t.answer))))))}))):y(r.a.Fragment,null))),y("br",null))}))))}var F=n("gCaR"),E=n("GNyq"),S=n("gJGr"),Y=r.a.createElement;function _(e){e.queryName;var t=r.a.useState([]),n=Object(l.a)(t,2),o=n[0],i=n[1];return r.a.useEffect((function(){fetch("".concat(E.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:100,skip:0})}).then((function(e){return e.json()})).then((function(e){i(e.queries)}))}),[]),Y(r.a.Fragment,null,Y(p.a,{BanerItems:F.f}),Y(c.Container,null,Y(u.Row,null,Y(u.Column,{md:12,sm:12,xs:12},Y(x,{QuestionItems:o})))),Y(S.a,null))}var D=n("pkQc"),A=r.a.createElement,R=!0;function L(e){var t=e.queryName;return A("main",null,A(a.a,null,A("title",null,"Protalk App"),A("link",{rel:"icon",href:"/favicon.ico"}),A("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),A("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),A("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),A("div",null,A(s.a,null),A(_,{queryName:t}),A(D.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),i=n("8IXb"),a=n("6f/8"),s=n("wJam"),l=r.a.createElement;function c(e){var t=e.BanerItems;return l(r.a.Fragment,null,void 0===t?l(r.a.Fragment,null):l(r.a.Fragment,null,t.map((function(e,t){return l(s.c,{banner:e.bannerImage},l(a.Container,null,l(i.Row,null,l(i.Column,{sm:6,mdOffset:3},l(s.W,{marginTop:"60"},l(s.r,null,e.bannerTitle),l(s.X,null,e.bannerText)),l(s.W,{marginTop:"50"},l(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return m}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var o=n("o/+c"),r=n("4E9g"),i=n("Q+D0"),a=n("cf+u"),s=n("rBeG"),l=(n("wpbd"),n("kiPg"),n("pXIl")),c=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],u=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],p=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:r,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:o,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:i,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:o,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:a,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:o,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:o,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],h=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:o,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l}]}],d=[{id:"1",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:o,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:o,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:o,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:o,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],m=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);