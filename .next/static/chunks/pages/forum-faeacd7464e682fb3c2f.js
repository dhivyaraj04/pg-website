_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"3r9c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},"4E9g":function(e,t){e.exports="/_next/static/images/nutrition-1-51aec6cd4d028ca3e02fccdf71c1c130.png"},KWCO:function(e,t){e.exports="/_next/static/images/small-banner-1-e91c2f56bef7bdda8035f7aa86136c68.png"},Oghv:function(e,t){e.exports="/_next/static/images/small-banner-3-322fb14acb15c4c9cc5bb5b355287bf8.png"},Puqf:function(e,t,n){"use strict";function i(e){return new Date(e).getDate()}function r(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()]}function o(e){return new Date(e).getFullYear()}function a(e){return new Date(e).getHours()}function s(e){var t=new Date(e);return 1===t.getMinutes().toString().length?"0"+t.getMinutes():t.getMinutes()}n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}))},"Q+D0":function(e,t){e.exports="/_next/static/images/nutrition-2-4cd59a3086302b3e9dd7a4e54125c953.png"},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return q})),n.d(t,"default",(function(){return B}));var i=n("q1tI"),r=n.n(i),o=n("8Kt/"),a=n.n(o),s=n("r1fl"),l=n("ODXe"),c=n("6f/8"),u=n("8IXb"),f=n("b/TK"),d=n("jYz7");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var _=function(e,t){var n;void 0===t&&(t=g);var i,r=[],o=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return o&&n===this&&t(a,r)||(i=e.apply(this,a),o=!0,n=this,r=a),i}};var v="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function b(e){cancelAnimationFrame(e.id)}function y(e,t){var n=v();var i={id:requestAnimationFrame((function r(){v()-n>=t?e.call(null):i.id=requestAnimationFrame(r)}))};return i}var w=null;function x(e){if(void 0===e&&(e=!1),null===w||e){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var i=document.createElement("div"),r=i.style;return r.width="100px",r.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?w="positive-descending":(t.scrollLeft=1,w=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),w}return w}var S=function(e,t){return e};function z(e){var t,n,r=e.getItemOffset,o=e.getEstimatedTotalSize,a=e.getItemSize,s=e.getOffsetForIndexAndAlignment,l=e.getStartIndexForOffset,c=e.getStopIndexForStartIndex,u=e.initInstanceProps,f=e.shouldResetStyleCacheOnItemSizeChange,d=e.validateProps;return n=t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=u(n.props,p(p(n))),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:p(p(n)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=_((function(e,t,i,r){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:i,visibleStopIndex:r})})),n._callOnScroll=void 0,n._callOnScroll=_((function(e,t,i){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:i})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,i=n.props,o=i.direction,s=i.itemSize,l=i.layout,c=n._getItemStyleCache(f&&s,f&&l,f&&o);if(c.hasOwnProperty(e))t=c[e];else{var u=r(n.props,e,n._instanceProps),d=a(n.props,e,n._instanceProps),m="horizontal"===o||"horizontal"===l,h="rtl"===o,p=m?u:0;c[e]=t={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:m?0:u,height:m?"100%":d,width:m?d:"100%"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=_((function(e,t,n){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,i=t.clientWidth,r=t.scrollLeft,o=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===r)return null;var t=n.props.direction,a=r;if("rtl"===t)switch(x()){case"negative":a=-r;break;case"positive-descending":a=o-i-r}return a=Math.max(0,Math.min(a,o-i)),{isScrolling:!0,scrollDirection:e.scrollOffset<r?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,i=t.clientHeight,r=t.scrollHeight,o=t.scrollTop;n.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,r-i));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&b(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=y(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}h(t,e),t.getDerivedStateFromProps=function(e,t){return T(e,t),d(e),null};var n=t.prototype;return n.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},n.scrollToItem=function(e,t){void 0===t&&(t="auto");var n=this.props.itemCount,i=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1)),this.scrollTo(s(this.props,e,t,i,this._instanceProps))},n.componentDidMount=function(){var e=this.props,t=e.direction,n=e.initialScrollOffset,i=e.layout;if("number"===typeof n&&null!=this._outerRef){var r=this._outerRef;"horizontal"===t||"horizontal"===i?r.scrollLeft=n:r.scrollTop=n}this._callPropsCallbacks()},n.componentDidUpdate=function(){var e=this.props,t=e.direction,n=e.layout,i=this.state,r=i.scrollOffset;if(i.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===n)if("rtl"===t)switch(x()){case"negative":o.scrollLeft=-r;break;case"positive-ascending":o.scrollLeft=r;break;default:var a=o.clientWidth,s=o.scrollWidth;o.scrollLeft=s-a-r}else o.scrollLeft=r;else o.scrollTop=r}this._callPropsCallbacks()},n.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&b(this._resetIsScrollingTimeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.className,r=e.direction,a=e.height,s=e.innerRef,l=e.innerElementType,c=e.innerTagName,u=e.itemCount,f=e.itemData,d=e.itemKey,h=void 0===d?S:d,p=e.layout,g=e.outerElementType,_=e.outerTagName,v=e.style,b=e.useIsScrolling,y=e.width,w=this.state.isScrolling,x="horizontal"===r||"horizontal"===p,z=x?this._onScrollHorizontal:this._onScrollVertical,T=this._getRangeToRender(),I=T[0],R=T[1],F=[];if(u>0)for(var O=I;O<=R;O++)F.push(Object(i.createElement)(t,{data:f,key:h(O,f),index:O,isScrolling:b?w:void 0,style:this._getItemStyle(O)}));var E=o(this.props,this._instanceProps);return Object(i.createElement)(g||_||"div",{className:n,onScroll:z,ref:this._outerRefSetter,style:m({position:"relative",height:a,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:r},v)},Object(i.createElement)(l||c||"div",{children:F,ref:s,style:{height:x?"100%":E,pointerEvents:w?"none":void 0,width:x?E:"100%"}}))},n._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],n=e[1],i=e[2],r=e[3];this._callOnItemsRendered(t,n,i,r)}if("function"===typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,s=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},n._getRangeToRender=function(){var e=this.props,t=e.itemCount,n=e.overscanCount,i=this.state,r=i.isScrolling,o=i.scrollDirection,a=i.scrollOffset;if(0===t)return[0,0,0,0];var s=l(this.props,a,this._instanceProps),u=c(this.props,s,a,this._instanceProps),f=r&&"backward"!==o?1:Math.max(1,n),d=r&&"forward"!==o?1:Math.max(1,n);return[Math.max(0,s-f),Math.max(0,Math.min(t-1,u+d)),s,u]},t}(i.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var T=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},I=function(e,t,n){var i=e.itemSize,r=n.itemMetadataMap,o=n.lastMeasuredIndex;if(t>o){var a=0;if(o>=0){var s=r[o];a=s.offset+s.size}for(var l=o+1;l<=t;l++){var c=i(l);r[l]={offset:a,size:c},a+=c}n.lastMeasuredIndex=t}return r[t]},R=function(e,t,n,i,r){for(;i<=n;){var o=i+Math.floor((n-i)/2),a=I(e,o,t).offset;if(a===r)return o;a<r?i=o+1:a>r&&(n=o-1)}return i>0?i-1:0},F=function(e,t,n,i){for(var r=e.itemCount,o=1;n<r&&I(e,n,t).offset<i;)n+=o,o*=2;return R(e,t,Math.min(n,r-1),Math.floor(n/2),i)},O=function(e,t){var n=e.itemCount,i=t.itemMetadataMap,r=t.estimatedItemSize,o=t.lastMeasuredIndex,a=0;if(o>=n&&(o=n-1),o>=0){var s=i[o];a=s.offset+s.size}return a+(n-o-1)*r},E=z({getItemOffset:function(e,t,n){return I(e,t,n).offset},getItemSize:function(e,t,n){return n.itemMetadataMap[t].size},getEstimatedTotalSize:O,getOffsetForIndexAndAlignment:function(e,t,n,i,r){var o=e.direction,a=e.height,s=e.layout,l=e.width,c="horizontal"===o||"horizontal"===s?l:a,u=I(e,t,r),f=O(e,r),d=Math.max(0,Math.min(f-c,u.offset)),m=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=i>=m-c&&i<=d+c?"auto":"center"),n){case"start":return d;case"end":return m;case"center":return Math.round(m+(d-m)/2);case"auto":default:return i>=m&&i<=d?i:i<m?m:d}},getStartIndexForOffset:function(e,t,n){return function(e,t,n){var i=t.itemMetadataMap,r=t.lastMeasuredIndex;return(r>0?i[r].offset:0)>=n?R(e,t,r,0,n):F(e,t,Math.max(0,r),n)}(e,n,t)},getStopIndexForStartIndex:function(e,t,n,i){for(var r=e.direction,o=e.height,a=e.itemCount,s=e.layout,l=e.width,c="horizontal"===r||"horizontal"===s?l:o,u=I(e,t,i),f=n+c,d=u.offset+u.size,m=t;m<a-1&&d<f;)m++,d+=I(e,m,i).size;return m},initInstanceProps:function(e,t){var n={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,i){void 0===i&&(i=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),i&&t.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});var C=n("wJam"),N=n("Puqf"),A=r.a.createElement;function W(e){var t=e.QuestionItems,n=r.a.useState({id:""}),i=Object(l.a)(n,2),o=i[0],a=i[1],s=r.a.useState(200),c=Object(l.a)(s,2),f=(c[0],c[1]);function m(e){return Object(N.a)(e)+" "+Object(N.d)(e)+" "+Object(N.e)(e)}function h(e){var t=Object(N.b)(e)>=12?"PM":"AM";return Object(N.b)(e)+":"+Object(N.c)(e)+" "+t}var p=function(e){var n=e.index,i=e.isScrolling,s=e.style;return A("div",{style:s,className:""},i?"Scrolling":A(C.W,{marginTop:"20",marginBottom:"50"},A(C.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},A(u.Row,null,A(u.Column,{md:1,sm:2,xs:2},A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},A(C.y,{src:t[n].image,height:"40",width:"40",borderRadius:"50%"}))),A(u.Column,{md:11,sm:10,xs:10},A(C.p,null,A(C.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},A(C.Y,{fontSize:"18px",color:"#232323"},t[n].expertise)),A(C.W,{marginRight:"10",marginTop:"10",marginBottom:"10"},A(C.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===t[n].queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===t[n].queryType?"1px solid #FF3140":"1px solid #029532"},t[n].queryType))),A(C.W,{marginTop:"5",marginBottom:"10"},A(C.Y,{fontSize:"16px",color:"#4F4F4F"},t[n].queryText)),A(C.W,{marginTop:"20",marginBottom:"20",marginRight:"-15"},A(C.u,{borderTop:"1px solid #E0E0E0"},A(u.Row,null,A(u.Column,{sm:12,md:6,xs:12},A(C.p,null,A(C.W,{marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#4F4F4F"},t[n].subExpertise)),A(C.W,{marginTop:"6"},A(C.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#4F4F4F"},m(t[n].timestamp))),A(C.W,{marginTop:"6"},A(C.Y,{fontSize:"20px",color:"#4F4F4F"},"|")),A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#4F4F4F"},h(t[n].timestamp))))),A(u.Column,{xs:12,md:6,sm:12,className:"padding"},t[n].answers?A(C.W,{marginRight:"10",marginTop:"5"},A(C.F,{fontSize:"14px",padding:"5px",border:"0.4px solid #029532",background:"".concat(o.id===t[n]._id?"#029532":"none"),color:"".concat(o.id===t[n]._id?"#fff":"#029532"),onClick:function(){return e=t[n]._id,a({id:e}),f(400),void g(e);var e},width:"150px",height:"30px"},t[n].answers.length+" Answers")):A(r.a.Fragment,null))))))),A("div",{className:"".concat(o.id===t[n]._id?"accordionactive":"accordion")},t[n].answers?A(r.a.Fragment,null,t[n].answers.map((function(e,i){return A(u.Row,null,A(u.Column,{md:1,sm:2,xs:2},A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},A(C.y,{src:e.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),A(u.Column,{md:11,sm:10,xs:10,className:"padding"},A(C.p,null,A(C.W,{marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"22px",color:"#232323"},e.consultant.name))),A(C.W,{marginBottom:"10",marginRight:"-15"},A(C.u,{borderBottom:"1px solid #E0E0E0"},A(C.p,null,A(C.W,{marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#AFAFAF"},t[n].expertise)),A(C.W,{marginTop:"6"},A(C.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#AFAFAF"},m(e.createdAt))),A(C.W,{marginTop:"6"},A(C.Y,{fontSize:"20px",color:"#AFAFAF"},"|")),A(C.W,{marginLeft:"10",marginRight:"10",marginTop:"10"},A(C.Y,{fontSize:"14px",color:"#AFAFAF"},h(e.createdAt)))),A(C.W,{marginTop:"10",marginBottom:"10"},A(C.Y,{fontSize:"16px",color:"AFAFAF"},e.answer))))))}))):A(r.a.Fragment,null))),A("br",null)))},g=(new Array(1e3).fill(!0).map((function(){return 25+Math.round(50*Math.random())})),function(e){console.log(e);var t=o.id===e?400:200;return console.log(t),t});return A(C.W,{marginTop:"20",marginBottom:"50"},A("div",{style:{width:"100%",height:"100vh"}},A(d.a,null,(function(e){var n=e.height,i=e.width;return A(E,{height:n,itemCount:t.length,itemSize:g,width:i,useIsScrolling:!0},p)}))))}var M=n("gCaR"),D=n("GNyq"),L=n("gJGr"),k=r.a.createElement;function Y(e){e.queryName;var t=r.a.useState([]),n=Object(l.a)(t,2),i=n[0],o=n[1];return r.a.useEffect((function(){fetch("".concat(D.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:100,skip:0})}).then((function(e){return e.json()})).then((function(e){o(e.queries)}))}),[]),k(r.a.Fragment,null,k(f.a,{BanerItems:M.f}),k(c.Container,null,k(u.Row,null,k(u.Column,{md:12,sm:12,xs:12},k(W,{QuestionItems:i})))),k(L.a,null))}var P=n("pkQc"),j=r.a.createElement,q=!0;function B(e){var t=e.queryName;return j("main",null,j(a.a,null,j("title",null,"Protalk App"),j("link",{rel:"icon",href:"/favicon.ico"}),j("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),j("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),j("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),j("div",null,j(s.a,null),j(Y,{queryName:t}),j(P.a,null)))}},"b/TK":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("q1tI"),r=n.n(i),o=n("8IXb"),a=n("6f/8"),s=n("wJam"),l=r.a.createElement;function c(e){var t=e.BanerItems;return l(r.a.Fragment,null,void 0===t?l(r.a.Fragment,null):l(r.a.Fragment,null,t.map((function(e,t){return l(s.c,{banner:e.bannerImage},l(a.Container,null,l(o.Row,null,l(o.Column,{sm:6,mdOffset:3},l(s.W,{marginTop:"60"},l(s.r,null,e.bannerTitle),l(s.X,null,e.bannerText)),l(s.W,{marginTop:"50"},l(s.a,{color:"#fff",fontSize:"18"},"Explore More ",">"))))))}))))}},"cf+u":function(e,t){e.exports="/_next/static/images/fitness-1-f8f3fd67e2459fb88f9f44313588969d.png"},eDNq:function(e,t){e.exports="/_next/static/images/small-banner-4-3d94686347ae63eea1ee56c948983342.png"},gCaR:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return h}));n("KWCO"),n("k6xJ"),n("Oghv"),n("eDNq");var i=n("o/+c"),r=n("4E9g"),o=n("Q+D0"),a=n("cf+u"),s=n("rBeG"),l=(n("wpbd"),n("kiPg"),n("pXIl")),c=[{text:"Get 15% Off on your Online YOGA Consultants ",promoCode:"ROYOGA",bannerImage:""}],u=[{consultantName:"Piter William",articleTitle:"Learn Yoga techniques online to become proactive in your daily life",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"2K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"},{consultantName:"Jenifer Rosario",articleTitle:"7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health",views:"1K"},{consultantName:"James Watson",description:"If You Really Want to Optimize Your Diet, Focus on Fiber",views:"1K"}],f=[{_id:"01",expertise:"Nutrition",articles:[{_id:"1",media:r,articleTitle:"If You Really Want to Optimize Your Diet, Focus on Fiber",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:o,articleTitle:"What Your Doctor Doesn\u2019t Know About Nutrition",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]},{_id:"02",expertise:"Fitnesss",articles:[{_id:"1",media:a,articleTitle:"The 5 Most Important Laws of Fitness of All Time",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"},{_id:"2",media:s,articleTitle:"4 Things Your Fitness Trainer Is Thinking During Your Session",description:"Dietary fiber has various health benefits. Not only does it feed your gut bacteria, fermentable fiber also forms short-chain fatty acids....",consultantImage:i,consultantName:"Arjun Sharma",expertise:"Diet Expert"}]}],d=[{name:"Arjun Sharma",expertis:"Heath Expert",profileImg:i,date:"22 November 2020",description:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",content:[{week:"Week 1 : Basic Asanas",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"There are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l},{week:"Week 2 : Advanced Yoga",title:"These are the daily asanas which increase the balance and straegth of the body",desc:"\tThere are many cohort studies that have shown people who eat less fiber are at high risk for developing Crohn\u2019s disease,\u201d Kaplan says. One of the most robust of these studies was a 2013 report from researchers at Harvard Medical School that looked at diet.",video:l}]}],m=[{id:"1",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}},{id:"2",image:r,title:"If You Really Want to Optimize Your Diet, Focus on Fiber",consultant:{id:"1",image:i,name:"Arjun Sharma",expertise:"Lawyer Expert"}}],h=[{bannerImage:"https://images-goldbox.s3.ap-south-1.amazonaws.com/protalk/cb974351c0bf47db968ed402b86e62f6.png",bannerText:"10% Discount on all lawyer Consultants",bannerTitle:"JUDGEMENT DAY",_id:"5d80c8f70c9fa80161f2cf5b"}]},jYz7:function(e,t,n){"use strict";(function(e){var i=n("q1tI");function r(t){var n;n="undefined"!==typeof window?window:"undefined"!==typeof self?self:e;var i="undefined"!==typeof document&&document.attachEvent;if(!i){var r=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),o=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,i=t.lastElementChild,r=n.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},s=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&o(this.__resizeRAF__),this.__resizeRAF__=r((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},l=!1,c="",u="animationstart",f="Webkit Moz O ms".split(" "),d="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),m=document.createElement("fakeelement");if(void 0!==m.style.animationName&&(l=!0),!1===l)for(var h=0;h<f.length;h++)if(void 0!==m.style[f[h]+"AnimationName"]){c="-"+f[h].toLowerCase()+"-",u=d[h],l=!0;break}var p="resizeanim",g="@"+c+"keyframes "+p+" { from { opacity: 0; } to { opacity: 0; } } ",_=c+"animation: 1ms "+p+"; "}return{addResizeListener:function(e,r){if(i)e.attachEvent("onresize",r);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,l=n.getComputedStyle(e);l&&"static"==l.position&&(e.style.position="relative"),function(e){if(!e.getElementById("detectElementResize")){var n=(g||"")+".resize-triggers { "+(_||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=e.head||e.getElementsByTagName("head")[0],r=e.createElement("style");r.id="detectElementResize",r.type="text/css",null!=t&&r.setAttribute("nonce",t),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(e.createTextNode(n)),i.appendChild(r)}}(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers";var c=o.createElement("div");c.className="expand-trigger",c.appendChild(o.createElement("div"));var f=o.createElement("div");f.className="contract-trigger",e.__resizeTriggers__.appendChild(c),e.__resizeTriggers__.appendChild(f),e.appendChild(e.__resizeTriggers__),a(e),e.addEventListener("scroll",s,!0),u&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==p&&a(e)},e.__resizeTriggers__.addEventListener(u,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(i)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",s,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(n){}}}}}var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c=function(e){function t(){var e,n,i;o(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,a=i._parentNode.offsetWidth||0,s=window.getComputedStyle(i._parentNode)||{},l=parseInt(s.paddingLeft,10)||0,c=parseInt(s.paddingRight,10)||0,u=parseInt(s.paddingTop,10)||0,f=parseInt(s.paddingBottom,10)||0,d=o-u-f,m=a-l-c;(!t&&i.state.height!==d||!n&&i.state.width!==m)&&(i.setState({height:o-u-f,width:a-l-c}),r({height:o,width:a}))}},i._setRef=function(e){i._autoSizer=e},l(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=r(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.disableHeight,o=e.disableWidth,a=e.style,l=this.state,c=l.height,u=l.width,f={overflow:"visible"},d={},m=!1;return r||(0===c&&(m=!0),f.height=0,d.height=c),o||(0===u&&(m=!0),f.width=0,d.width=u),Object(i.createElement)("div",{className:n,ref:this._setRef,style:s({},f,a)},!m&&t(d))}}]),t}(i.PureComponent);c.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}},t.a=c}).call(this,n("3r9c"))},k6xJ:function(e,t){e.exports="/_next/static/images/small-banner-2-6b29337d3e6ab6e5185ffd0a66299f9c.png"},kiPg:function(e,t){e.exports="/_next/static/images/lawyer-2-b6a04aa00577a0361adc327684e6e1a7.png"},"o/+c":function(e,t){e.exports="/_next/static/images/profile-1-adb2b88715b34af0bf0f9a432286a53d.png"},pXIl:function(e,t){e.exports="/_next/static/images/video-1-727504acfdab079b2dd2dc5264d2abd9.png"},rBeG:function(e,t){e.exports="/_next/static/images/fitness-2-01f6367c03e4873d341a2b08c179c5be.png"},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])},wpbd:function(e,t){e.exports="/_next/static/images/lawyer-1-056c0517b7cac870cdc564152cda3fd8.png"}},[["wnm/",0,2,1,3,4]]]);