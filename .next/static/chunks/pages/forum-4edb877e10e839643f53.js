_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function r(e){return new Date(e).getDate()}function i(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function o(e){return new Date(e).getFullYear()}function a(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return q})),n.d(t,"default",(function(){return B}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),a=n.n(o),s=n("r1fl"),l=n("ODXe"),c=n("6f/8"),u=n("8IXb"),f=n("b/TK");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var g=function(e,t){var n;void 0===t&&(t=h);var r,i=[],o=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return o&&n===this&&t(a,i)||(r=e.apply(this,a),o=!0,n=this,i=a),r}};var b="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function v(e){cancelAnimationFrame(e.id)}function x(e,t){var n=b();var r={id:requestAnimationFrame((function i(){b()-n>=t?e.call(null):r.id=requestAnimationFrame(i)}))};return r}var y=null;function S(e){if(void 0===e&&(e=!1),null===y||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),i=r.style;return i.width="100px",i.height="100px",t.appendChild(r),document.body.appendChild(t),t.scrollLeft>0?y="positive-descending":(t.scrollLeft=1,y=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),y}return y}var w=function(e,t){return e};function I(e){var t,n,i=e.getItemOffset,o=e.getEstimatedTotalSize,a=e.getItemSize,s=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,c=e.getStopIndexForStartIndex,u=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,h=e.validateProps;return n=t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=u(n.props,p(p(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:p(p(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=g((function(e,t,r,i){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:i})})),n._callOnScroll=void 0,n._callOnScroll=g((function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,r=n.props,o=r.direction,s=r.itemSize,l=r.layout,c=n._getItemStyleCache(f&&s,f&&l,f&&o);if(c.hasOwnProperty(e))t=c[e];else{var u=i(n.props,e,n._instanceProps),d=a(n.props,e,n._instanceProps),m="horizontal"===o||"horizontal"===l,p="rtl"===o,h=m?u:0;c[e]=t={position:"absolute",left:p?void 0:h,right:p?h:void 0,top:m?0:u,height:m?"100%":d,width:m?d:"100%"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=g((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,i=t.scrollLeft,o=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===i)return null;var t=n.props.direction,a=i;if("rtl"===t)switch(S()){case"negative":a=-i;break;case"positive-descending":a=o-r-i}return a=Math.max(0,Math.min(a,o-r)),{isScrolling:!0,scrollDirection:e.scrollOffset<i?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,i=t.scrollHeight,o=t.scrollTop;n.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,i-r));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&v(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=x(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}m(t,e),t.getDerivedStateFromProps=function(e,t){return _(e,t),h(e),null};var n=t.prototype;return n.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},n.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,r=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(s(this.props,e,t,r,this._instanceProps))},n.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,r=e.layout;if("number"===typeof n&&null!=this._outerRef){var i=this._outerRef;"horizontal"===t||"horizontal"===r?i.scrollLeft=n:i.scrollTop=n}this._callPropsCallbacks()},n.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,r=this.state,i=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(S()){case"negative":o.scrollLeft=-i;break;case"positive-ascending":o.scrollLeft=i;break;default:var a=o.clientWidth,s=o.scrollWidth;o.scrollLeft=s-a-i}else o.scrollLeft=i;else o.scrollTop=i}this._callPropsCallbacks()},n.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&v(this._resetIsScrollingTimeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.className,i=e.direction,a=e.height,s=e.innerRef,l=e.innerElementType,c=e.innerTagName,u=e.itemCount,f=e.itemData,m=e.itemKey,p=void 0===m?w:m,h=e.layout,g=e.outerElementType,b=e.outerTagName,v=e.style,x=e.useIsScrolling,y=e.width,S=this.state.isScrolling,I="horizontal"===i||"horizontal"===h,_=I?this._onScrollHorizontal:this._onScrollVertical,T=this._getRangeToRender(),F=T[0],O=T[1],R=[];if(u>0)for(var z=F;z<=O;z++)R.push(Object(r.createElement)(t,{data:f,key:p(z,f),index:z,isScrolling:x?S:void 0,style:this._getItemStyle(z)}));var M=o(this.props,this._instanceProps);return Object(r.createElement)(g||b||"div",{className:n,onScroll:_,ref:this._outerRefSetter,style:d({position:"relative",height:a,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},v)},Object(r.createElement)(l||c||"div",{children:R,ref:s,style:{height:I?"100%":M,pointerEvents:S?"none":void 0,width:I?M:"100%"}}))},n._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],r=e[2],i=e[3];this._callOnItemsRendered(t,n,r,i)}if("function"===typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,s=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},n._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,r=this.state,i=r.isScrolling,o=r.scrollDirection,a=r.scrollOffset;if(0===t)return[0,0,0,0];var s=l(this.props,a,this._instanceProps),u=c(this.props,s,a,this._instanceProps),f=i&&"backward"!==o?1:Math.max(1,n),d=i&&"forward"!==o?1:Math.max(1,n);return[Math.max(0,s-f),Math.max(0,Math.min(t-1,u+d)),s,u]},t}(r.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var _=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},T=function(e,t,n){var r=e.itemSize,i=n.itemMetadataMap,o=n.lastMeasuredIndex;if(t>o){var a=0;if(o>=0){var s=i[o];a=s.offset+s.size}for(var l=o+1;l<=t;l++){var c=r(l);i[l]={offset:a,size:c},a+=c}n.lastMeasuredIndex=t}return i[t]},F=function(e,t,n,r,i){for(;r<=n;){var o=r+Math.floor((n-r)/2),a=T(e,o,t).offset;if(a===i)return o;a<i?r=o+1:a>i&&(n=o-1)}return r>0?r-1:0},O=function(e,t,n,r){for(var i=e.itemCount,o=1;n<i&&T(e,n,t).offset<r;)n+=o,o*=2;return F(e,t,Math.min(n,i-1),Math.floor(n/2),r)},R=function(e,t){var n=e.itemCount,r=t.itemMetadataMap,i=t.estimatedItemSize,o=t.lastMeasuredIndex,a=0;if(o>=n&&(o=n-1),o>=0){var s=r[o];a=s.offset+s.size}return a+(n-o-1)*i},z=I({getItemOffset:function(e,t,n){return T(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:R,getOffsetForIndexAndAlignment:function(e,t,n,r,i){var o=e.direction,a=e.height,s=e.layout,l=e.width,c="horizontal"===o||"horizontal"===s?l:a,u=T(e,t,i),f=R(e,i),d=Math.max(0,Math.min(f-c,u.offset)),m=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=r>=m-c&&r<=d+c?"auto":"center"),n){case"start":return d;case"end":return m;case"center":return Math.round(m+(d-m)/2);case"auto":default:return r>=m&&r<=d?r:r<m?m:d}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var r=t.itemMetadataMap,i=t.lastMeasuredIndex;return(i>0?r[i].offset:0)>=n?F(e,t,i,0,n):O(e,t,Math.max(0,i),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,r){for(var i=e.direction,o=e.height,a=e.itemCount,s=e.layout,l=e.width,c="horizontal"===i||"horizontal"===s?l:o,u=T(e,t,r),f=n+c,d=u.offset+u.size,m=t;m<a-1&&d<f;)m++,d+=T(e,m,r).size;return m},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),r&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});var M=n("wJam"),C=n("Puqf"),D=i.a.createElement;function W(e){var t=e.QuestionItems,n=i.a.useState({id:""}),r=Object(l.a)(n,2),o=r[0],a=r[1];function s(e){return Object(C.a)(e)+" "+Object(C.d)(e)+" "+Object(C.e)(e)}function c(e){var t=Object(C.b)(e)>=12?"PM":"AM";return Object(C.b)(e)+":"+Object(C.c)(e)+" "+t}var f=new Array(1e3).fill(!0).map((function(){return 25+Math.round(50*Math.random())}));return D(M.W,{marginTop:"20",marginBottom:"50"},D(z,{height:800,itemCount:t.length,itemSize:function(e){return console.log(f[e],"getItemSize"),200},width:1200},(function(e){var n=e.index,r=e.style;return D("div",{style:r},D(M.W,{marginTop:"20",marginBottom:"50"},D(M.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},D(u.Row,null,D(u.Column,{md:1,sm:2,xs:2},D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},D(M.y,{src:t[n].image,height:"40",width:"40",borderRadius:"50%"}))),D(u.Column,{md:11,sm:10,xs:10},D(M.p,null,D(M.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},D(M.Y,{fontSize:"18px",color:"#232323"},t[n].expertise)),D(M.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},D(M.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===t[n].queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===t[n].queryType?"1px solid #FF3140":"1px solid #029532"},t[n].queryType))),D(M.W,{marginTop:"5",marginBottom:"10"},D(M.Y,{fontSize:"16px",color:"#4F4F4F"},t[n].queryText)),D(M.W,{marginTop:"20",marginBottom:"20",marginRight:"-15"},D(M.u,{borderTop:"1px solid #E0E0E0"},D(u.Row,null,D(u.Column,{sm:12,md:6,xs:12},D(M.p,null,D(M.W,{marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#4F4F4F"},t[n].subExpertise)),D(M.W,{marginTop:"6"},D(M.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#4F4F4F"},s(t[n].timestamp))),D(M.W,{marginTop:"6"},D(M.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#4F4F4F"},c(t[n].timestamp))))),D(u.Column,{xs:12,md:6,sm:12,className:"padding"},t[n].answers?D(M.W,{marginRight:"10",marginTop:"5"},D(M.F,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(o.id===t[n]._id?"#029532":"none"),color:"".concat(o.id===t[n]._id?"#fff":"#029532"),onClick:function(){return e=t[n]._id,void a({id:e});var e},width:"150px",height:"30px"},t[n].answers.length+" Answers")):D(i.a.Fragment,null))))))),D("div",{className:"".concat(o.id===t[n]._id?"accordionactive":"accordion")},t[n].answers?D(i.a.Fragment,null,t[n].answers.map((function(e,r){return D(u.Row,null,D(u.Column,{md:1,sm:2,xs:2},D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},D(M.y,{src:e.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),D(u.Column,{md:11,sm:10,xs:10,className:"padding"},D(M.p,null,D(M.W,{marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"22px",color:"#232323"},e.consultant.name))),D(M.W,{marginBottom:"10",marginRight:"-15"},D(M.u,{borderBottom:"1px solid #E0E0E0"},D(M.p,null,D(M.W,{marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#AFAFAF"},t[n].expertise)),D(M.W,{marginTop:"6"},D(M.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#AFAFAF"},s(e.createdAt))),D(M.W,{marginTop:"6"},D(M.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),D(M.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},D(M.Y,{fontSize:"14px",color:"#AFAFAF"},c(e.createdAt)))),D(M.W,{marginTop:"10",marginBottom:"10"},D(M.Y,{fontSize:"16px",color:"AFAFAF"},e.answer))))))}))):D(i.a.Fragment,null))),D("br",null)))})))}var A=n("gCaR"),E=n("GNyq"),N=n("gJGr"),Y=i.a.createElement;function k(e){e.queryName;var t=i.a.useState([]),n=Object(l.a)(t,2),r=n[0],o=n[1];return i.a.useEffect((function(){fetch("".concat(E.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:100,skip:0})}).then((function(e){return e.json()})).then((function(e){o(e.queries)}))}),[]),Y(i.a.Fragment,null,Y(f.a,{BanerItems:A.f}),Y(c.Container,null,Y(u.Row,null,Y(u.Column,{md:12,sm:12,xs:12},Y(W,{QuestionItems:r})))),Y(N.a,null))}var P=n("pkQc"),j=i.a.createElement,q=!0;function B(e){var t=e.queryName;return j("main",null,j(a.a,null,j("title",null,"Protalk App"),j("link",{rel:"icon",href:"/favicon.ico"}),j("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),j("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),j("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),j("div",null,j(s.a,null),j(k,{queryName:t}),j(P.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("8IXb"),a=n("6f/8"),s=n("wJam"),l=i.a.createElement;function c(e){var t=e.BanerItems;return l(i.a.Fragment,null,void 0===t?l(i.a.Fragment,null):l(i.a.Fragment,null,t.map((function(e,t){return l(s.c,{banner:e.bannerImage},l(a.Container,null,l(o.Row,null,l(o.Column,{sm:6,mdOffset:3},l(s.W,{marginTop:"60"},l(s.r,null,e.bannerTitle),l(s.X,null,e.bannerText)),l(s.W,{marginTop:"50"},l(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return p}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var r=n("o/+c"),i=n("4E9g"),o=n("Q+D0"),a=n("cf+u"),s=n("rBeG"),l=(n("wpbd"),n("kiPg"),n("pXIl")),c=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],u=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],f=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:i,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:r,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:o,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:r,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:a,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:r,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:r,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],d=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:r,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l}]}],m=[{id:"1",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:r,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:r,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:r,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:i,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:r,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],p=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);