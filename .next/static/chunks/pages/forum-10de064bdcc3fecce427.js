_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"3r9c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function i(e){return new Date(e).getDate()}function r(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function o(e){return new Date(e).getFullYear()}function a(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return W})),n.d(t,"default",(function(){return P}));var i=n("q1tI"),r=n.n(i),o=n("8Kt/"),a=n.n(o),s=n("r1fl"),l=n("ODXe"),c=n("6f/8"),u=n("8IXb"),d=n("b/TK"),f=n("jYz7");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var _=function(e,t){var n;void 0===t&&(t=g);var i,r=[],o=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return o&&n===this&&t(a,r)||(i=e.apply(this,a),o=!0,n=this,r=a),i}};var v="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function b(e){cancelAnimationFrame(e.id)}function y(e,t){var n=v();var i={id:requestAnimationFrame((function r(){v()-n>=t?e.call(null):i.id=requestAnimationFrame(r)}))};return i}var w=null;function x(e){if(void 0===e&&(e=!1),null===w||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var i=document.createElement("div"),r=i.style;return r.width="100px",r.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?w="positive-descending":(t.scrollLeft=1,w=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),w}return w}var S=function(e,t){return e};function z(e){var t,n,r=e.getItemOffset,o=e.getEstimatedTotalSize,a=e.getItemSize,s=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,c=e.getStopIndexForStartIndex,u=e.initInstanceProps,d=e.shouldResetStyleCacheOnItemSizeChange,f=e.validateProps;return n=t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=u(n.props,p(p(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:p(p(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=_((function(e,t,i,r){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:i,visibleStopIndex:r})})),n._callOnScroll=void 0,n._callOnScroll=_((function(e,t,i){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:i})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,i=n.props,o=i.direction,s=i.itemSize,l=i.layout,c=n._getItemStyleCache(d&&s,d&&l,d&&o);if(c.hasOwnProperty(e))t=c[e];else{var u=r(n.props,e,n._instanceProps),f=a(n.props,e,n._instanceProps),h="horizontal"===o||"horizontal"===l,m="rtl"===o,p=h?u:0;c[e]=t={position:"absolute",left:m?void 0:p,right:m?p:void 0,top:h?0:u,height:h?"100%":f,width:h?f:"100%"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=_((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,i=t.clientWidth,r=t.scrollLeft,o=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===r)return null;var t=n.props.direction,a=r;if("rtl"===t)switch(x()){case"negative":a=-r;break;case"positive-descending":a=o-i-r}return a=Math.max(0,Math.min(a,o-i)),{isScrolling:!0,scrollDirection:e.scrollOffset<r?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,i=t.clientHeight,r=t.scrollHeight,o=t.scrollTop;n.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,r-i));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&b(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=y(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}m(t,e),t.getDerivedStateFromProps=function(e,t){return T(e,t),f(e),null};var n=t.prototype;return n.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},n.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,i=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(s(this.props,e,t,i,this._instanceProps))},n.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,i=e.layout;if("number"===typeof n&&null!=this._outerRef){var r=this._outerRef;"horizontal"===t||"horizontal"===i?r.scrollLeft=n:r.scrollTop=n}this._callPropsCallbacks()},n.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,i=this.state,r=i.scrollOffset;if(i.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(x()){case"negative":o.scrollLeft=-r;break;case"positive-ascending":o.scrollLeft=r;break;default:var a=o.clientWidth,s=o.scrollWidth;o.scrollLeft=s-a-r}else o.scrollLeft=r;else o.scrollTop=r}this._callPropsCallbacks()},n.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&b(this._resetIsScrollingTimeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.className,r=e.direction,a=e.height,s=e.innerRef,l=e.innerElementType,c=e.innerTagName,u=e.itemCount,d=e.itemData,f=e.itemKey,m=void 0===f?S:f,p=e.layout,g=e.outerElementType,_=e.outerTagName,v=e.style,b=e.useIsScrolling,y=e.width,w=this.state.isScrolling,x="horizontal"===r||"horizontal"===p,z=x?this._onScrollHorizontal:this._onScrollVertical,T=this._getRangeToRender(),I=T[0],F=T[1],R=[];if(u>0)for(var O=I;O<=F;O++)R.push(Object(i.createElement)(t,{data:d,key:m(O,d),index:O,isScrolling:b?w:void 0,style:this._getItemStyle(O)}));var E=o(this.props,this._instanceProps);return Object(i.createElement)(g||_||"div",{className:n,onScroll:z,ref:this._outerRefSetter,style:h({position:"relative",height:a,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:r},v)},Object(i.createElement)(l||c||"div",{children:R,ref:s,style:{height:x?"100%":E,pointerEvents:w?"none":void 0,width:x?E:"100%"}}))},n._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],i=e[2],r=e[3];this._callOnItemsRendered(t,n,i,r)}if("function"===typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,s=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},n._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,i=this.state,r=i.isScrolling,o=i.scrollDirection,a=i.scrollOffset;if(0===t)return[0,0,0,0];var s=l(this.props,a,this._instanceProps),u=c(this.props,s,a,this._instanceProps),d=r&&"backward"!==o?1:Math.max(1,n),f=r&&"forward"!==o?1:Math.max(1,n);return[Math.max(0,s-d),Math.max(0,Math.min(t-1,u+f)),s,u]},t}(i.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var T=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},I=z({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,n,i){var r=e.direction,o=e.height,a=e.itemCount,s=e.itemSize,l=e.layout,c=e.width,u="horizontal"===r||"horizontal"===l?c:o,d=Math.max(0,a*s-u),f=Math.min(d,t*s),h=Math.max(0,t*s-u+s);switch("smart"===n&&(n=i>=h-u&&i<=f+u?"auto":"center"),n){case"start":return f;case"end":return h;case"center":var m=Math.round(h+(f-h)/2);return m<Math.ceil(u/2)?0:m>d+Math.floor(u/2)?d:m;case"auto":default:return i>=h&&i<=f?i:i<h?h:f}},getStartIndexForOffset:function(e,t){var n=e.itemCount,i=e.itemSize;return Math.max(0,Math.min(n-1,Math.floor(t/i)))},getStopIndexForStartIndex:function(e,t,n){var i=e.direction,r=e.height,o=e.itemCount,a=e.itemSize,s=e.layout,l=e.width,c=t*a,u="horizontal"===i||"horizontal"===s?l:r,d=Math.ceil((u+n-c)/a);return Math.max(0,Math.min(o-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});var F=n("wJam"),R=n("Puqf"),O=r.a.createElement;function E(e){var t=e.QuestionItems,n=r.a.useState({id:""}),i=Object(l.a)(n,2),o=i[0],a=i[1];function s(e){return Object(R.a)(e)+" "+Object(R.d)(e)+" "+Object(R.e)(e)}function c(e){var t=Object(R.b)(e)>=12?"PM":"AM";return Object(R.b)(e)+":"+Object(R.c)(e)+" "+t}var d=function(e){var n=e.index,i=e.style;return O("div",{style:i},O(F.X,{marginTop:"20",marginBottom:"50"},O(r.a.Fragment,null,O(F.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},O(u.Row,null,O(u.Column,{md:1,sm:2,xs:2},O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},O(F.y,{src:t[n].image,height:"40",width:"40",borderRadius:"50%"}))),O(u.Column,{md:11,sm:10,xs:10},O(F.p,null,O(F.X,{marginRight:"10",marginTop:"10",marginBottom:"10"},O(F.Z,{fontSize:"18px",color:"#232323"},t[n].expertise)),O(F.X,{marginRight:"10",marginTop:"10",marginBottom:"10"},O(F.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===t[n].queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===t[n].queryType?"1px solid #FF3140":"1px solid #029532"},t[n].queryType))),O(F.K,null,O(F.X,{marginTop:"5",marginBottom:"10"},O(F.Z,{fontSize:"16px",color:"#4F4F4F"},t[n].queryText)),O(F.X,{marginTop:"20",marginBottom:"20",marginRight:"-15"},O(F.u,{borderTop:"1px solid #E0E0E0"},O(u.Row,null,O(u.Column,{sm:12,md:6,xs:12},O(F.p,null,O(F.X,{marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#4F4F4F"},t[n].subExpertise)),O(F.X,{marginTop:"6"},O(F.Z,{fontSize:"20px",color:"#4F4F4F"},"|")),O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#4F4F4F"},s(t[n].timestamp))),O(F.X,{marginTop:"6"},O(F.Z,{fontSize:"20px",color:"#4F4F4F"},"|")),O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#4F4F4F"},c(t[n].timestamp))))),O(u.Column,{xs:12,md:6,sm:12,className:"padding"},t[n].answers?O(F.X,{marginRight:"10",marginTop:"5"},O(F.F,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(o.id===t[n]._id?"#029532":"none"),color:"".concat(o.id===t[n]._id?"#fff":"#029532"),onClick:function(){return e=t[n]._id,void a({id:e});var e},width:"150px",height:"30px"},t[n].answers.length+" Answers")):O(r.a.Fragment,null)))))))),O("div",{className:"".concat(o.id===t[n]._id?"accordionactive":"accordion")},t[n].answers?O(r.a.Fragment,null,t[n].answers.map((function(e,i){return O(u.Row,null,O(u.Column,{md:1,sm:2,xs:2},O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},O(F.y,{src:e.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),O(u.Column,{md:11,sm:10,xs:10,className:"padding"},O(F.p,null,O(F.X,{marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"22px",color:"#232323"},e.consultant.name))),O(F.X,{marginBottom:"10",marginRight:"-15"},O(F.u,{borderBottom:"1px solid #E0E0E0"},O(F.p,null,O(F.X,{marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#AFAFAF"},t[n].expertise)),O(F.X,{marginTop:"6"},O(F.Z,{fontSize:"20px",color:"#AFAFAF"},"|")),O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#AFAFAF"},s(e.createdAt))),O(F.X,{marginTop:"6"},O(F.Z,{fontSize:"20px",color:"#AFAFAF"},"|")),O(F.X,{marginLeft:"10",marginRight:"10",marginTop:"10"},O(F.Z,{fontSize:"14px",color:"#AFAFAF"},c(e.createdAt)))),O(F.X,{marginTop:"10",marginBottom:"10"},O(F.Z,{fontSize:"16px",color:"AFAFAF"},e.answer))))))}))):O(r.a.Fragment,null))),O("br",null))))};return O(F.X,{marginTop:"20",marginBottom:"50"},O("div",{style:{width:"100%",height:"100vh"}},O(f.a,null,(function(e){var n=e.height,i=e.width;return O(I,{className:"List",height:n,itemCount:t.length,itemSize:230,width:i},d)}))))}var C=n("gCaR"),N=n("GNyq"),A=n("gJGr"),D=r.a.createElement;function L(e){e.queryName;var t=r.a.useState([]),n=Object(l.a)(t,2),i=n[0],o=n[1];return r.a.useEffect((function(){fetch("".concat(N.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:100,skip:0})}).then((function(e){return e.json()})).then((function(e){o(e.queries)}))}),[]),D(r.a.Fragment,null,D(d.a,{BanerItems:C.f}),D(c.Container,null,D(u.Row,null,D(u.Column,{md:12,sm:12,xs:12},D(E,{QuestionItems:i})))),D(A.a,null))}var k=n("pkQc"),M=r.a.createElement,W=!0;function P(e){var t=e.queryName;return M("main",null,M(a.a,null,M("title",null,"Protalk App"),M("link",{rel:"icon",href:"/favicon.ico"}),M("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),M("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),M("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),M("div",null,M(s.a,null),M(L,{queryName:t}),M(k.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("q1tI"),r=n.n(i),o=n("8IXb"),a=n("6f/8"),s=n("wJam"),l=r.a.createElement;function c(e){var t=e.BanerItems;return l(r.a.Fragment,null,void 0===t?l(r.a.Fragment,null):l(r.a.Fragment,null,t.map((function(e,t){return l(s.c,{banner:e.bannerImage},l(a.Container,null,l(o.Row,null,l(o.Column,{sm:6,mdOffset:3},l(s.X,{marginTop:"60"},l(s.r,null,e.bannerTitle),l(s.Y,null,e.bannerText)),l(s.X,{marginTop:"50"},l(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"f",(function(){return m}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var i=n("o/+c"),r=n("4E9g"),o=n("Q+D0"),a=n("cf+u"),s=n("rBeG"),l=(n("wpbd"),n("kiPg"),n("pXIl")),c=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],u=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],d=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:r,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:o,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:a,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],f=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:i,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l}]}],h=[{id:"1",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],m=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},jYz7:function(e,t,n){"use strict";(function(e){var i=n("q1tI");function r(t){var n;n="undefined"!==typeof window?window:"undefined"!==typeof self?self:e;var i="undefined"!==typeof document&&document.attachEvent;if(!i){var r=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),o=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,i=t.lastElementChild,r=n.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},s=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&o(this.__resizeRAF__),this.__resizeRAF__=r((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},l=!1,c="",u="animationstart",d="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h=document.createElement("fakeelement");if(void 0!==h.style.animationName&&(l=!0),!1===l)for(var m=0;m<d.length;m++)if(void 0!==h.style[d[m]+"AnimationName"]){c="-"+d[m].toLowerCase()+"-",u=f[m],l=!0;break}var p="resizeanim",g="@"+c+"keyframes "+p+" { from { opacity: 0; } to { opacity: 0; } } ",_=c+"animation: 1ms "+p+"; "}return{addResizeListener:function(e,r){if(i)e.attachEvent("onresize",r);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,l=n.getComputedStyle(e);l&&"static"==l.position&&(e.style.position="relative"),function(e){if(!e.getElementById("detectElementResize")){var n=(g||"")+".resize-triggers { "+(_||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=e.head||e.getElementsByTagName("head")[0],r=e.createElement("style");r.id="detectElementResize",r.type="text/css",null!=t&&r.setAttribute("nonce",t),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(e.createTextNode(n)),i.appendChild(r)}}(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers";var c=o.createElement("div");c.className="expand-trigger",c.appendChild(o.createElement("div"));var d=o.createElement("div");d.className="contract-trigger",e.__resizeTriggers__.appendChild(c),e.__resizeTriggers__.appendChild(d),e.appendChild(e.__resizeTriggers__),a(e),e.addEventListener("scroll",s,!0),u&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==p&&a(e)},e.__resizeTriggers__.addEventListener(u,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(i)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",s,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(n){}}}}}var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c=function(e){function t(){var e,n,i;o(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,a=i._parentNode.offsetWidth||0,s=window.getComputedStyle(i._parentNode)||{},l=parseInt(s.paddingLeft,10)||0,c=parseInt(s.paddingRight,10)||0,u=parseInt(s.paddingTop,10)||0,d=parseInt(s.paddingBottom,10)||0,f=o-u-d,h=a-l-c;(!t&&i.state.height!==f||!n&&i.state.width!==h)&&(i.setState({height:o-u-d,width:a-l-c}),r({height:o,width:a}))}},i._setRef=function(e){i._autoSizer=e},l(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=r(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.disableHeight,o=e.disableWidth,a=e.style,l=this.state,c=l.height,u=l.width,d={overflow:"visible"},f={},h=!1;return r||(0===c&&(h=!0),d.height=0,f.height=c),o||(0===u&&(h=!0),d.width=0,f.width=u),Object(i.createElement)("div",{className:n,ref:this._setRef,style:s({},d,a)},!h&&t(f))}}]),t}(i.PureComponent);c.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}},t.a=c}).call(this,n("3r9c"))},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);