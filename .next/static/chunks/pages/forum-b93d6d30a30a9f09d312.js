_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2W6z":function(e,t,n){"use strict";var o=function(){};e.exports=o},"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},"2zs7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n("2rMq");var a=((o=r)&&o.__esModule?o:{default:o}).default,i=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=i},"9rZX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("qFS3"),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},QEso:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),l=h(n("17x9")),s=m(n("VKEO")),u=h(n("S1to")),c=m(n("Ye7m")),p=m(n("fbhf")),d=h(n("2zs7")),f=h(n("UIKY"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}n("WkvU");var g={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&p.remove(document.body,a),r&&p.remove(document.getElementsByTagName("html")[0],r),o&&v>0&&0===(v-=1)&&c.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(s.returnFocus(n.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),f.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(s.setupScopedFocus(n.node),s.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:g[e],afterOpen:g[e]+"--after-open",beforeClose:g[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"===typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&p.add(document.body,r),o&&p.add(document.getElementsByTagName("html")[0],o),n&&(v+=1,c.hide(t)),f.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,i=e.children,l=n?{}:a.content,s=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),p=this.props.contentElement(c,i);return this.props.overlayElement(u,p)}}]),t}(i.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.instanceOf(d.default),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=y,e.exports=t.default},S1to:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,i=n[0],l=n[n.length-1];if(e===document.activeElement){if(!r)return;o=l}l!==document.activeElement||r||(o=i);i===document.activeElement&&r&&(o=l);if(o)return t.preventDefault(),void o.focus();var s=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==s||"Chrome"==s[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=n.indexOf(document.activeElement);u>-1&&(u+=r?-1:1);if("undefined"===typeof(o=n[u]))return t.preventDefault(),void(o=r?l:i).focus();t.preventDefault(),o.focus()};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},UIKY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},VCL8:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==l){var s=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},VKEO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){i.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==i.length&&(t=i.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){i.length>0&&i.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};var i=[],l=null,s=!1;function u(){s=!0}function c(){if(s){if(s=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()}),0)}}},WkvU:function(e,t,n){"use strict";var o,r=n("UIKY"),a=(o=r)&&o.__esModule?o:{default:o};var i=void 0,l=void 0,s=[];function u(){0!==s.length&&s[s.length-1].focusContent()}a.default.subscribe((function(e,t){i&&l||((i=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),i.style.position="absolute",i.style.opacity="0",i.setAttribute("tabindex","0"),i.addEventListener("focus",u),(l=i.cloneNode()).addEventListener("focus",u)),(s=t).length>0?(document.body.firstChild!==i&&document.body.insertBefore(i,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(i.parentElement&&i.parentElement.removeChild(i),l.parentElement&&l.parentElement.removeChild(l))}))},Ye7m:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"===typeof t&&i.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t="length"in n?n[0]:n}return l=t||l},t.validateElement=u,t.hide=function(e){u(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){u(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,r=n("2W6z"),a=(o=r)&&o.__esModule?o:{default:o},i=n("2zs7");var l=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){return!(!e&&!l)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(i)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function i(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},Zuod:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return _})),n.d(t,"default",(function(){return R}));var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),l=n("r1fl"),s=n("ODXe"),u=n("9rZX"),c=n.n(u),p=n("jYz7"),d=n("iR1w"),f=n("6f/8"),m=n("8IXb"),h=n("b/TK"),g=n("wJam"),v=n("Puqf"),y=r.a.createElement;function b(e){var t=e.QuestionItems,n=e.arrays,o=e.onClickEvent,a=r.a.useState({id:""}),i=Object(s.a)(a,2),l=i[0],u=i[1],p=r.a.useState(!1),d=Object(s.a)(p,2),f=d[0],h=d[1],b=r.a.useState([]),O=Object(s.a)(b,2),C=O[0],w=O[1];function F(e){return Object(v.a)(e)+" "+Object(v.d)(e)+" "+Object(v.e)(e)}function S(e){var t=Object(v.b)(e)>=12?"PM":"AM";return Object(v.b)(e)+":"+Object(v.c)(e)+" "+t}function x(e){return e.length+" Answers"}return y(r.a.Fragment,null,y(g.V,{marginTop:"20",marginBottom:"50"},y(g.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},y(m.Row,null,y(m.Column,{md:1,sm:2,xs:2},y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},y(g.y,{src:t.image,height:"40",width:"40",borderRadius:"50%"}))),y(m.Column,{md:11,sm:10,xs:10},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"10",marginBottom:"10"},y(g.X,{fontSize:"17px",color:"#232323",letterSpacing:"0.10px"},t.expertise)),y(g.V,{marginRight:"10",marginTop:"10",marginBottom:"10"},y(g.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===t.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===t.queryType?"1px solid #FF3140":"1px solid #029532"},t.queryType))),y(g.V,{marginTop:"5",marginBottom:"5"},y(g.v,{height:"70px"},y(g.X,{fontSize:"16px",color:"#4F4F4F",letterSpacing:"0.10px",lineHeight:"1.2"},t.queryText))),y(g.V,{marginTop:"5",marginBottom:"10",marginRight:"-15"},y(g.u,{borderTop:"1px solid #E0E0E0"},y(m.Row,null,y(m.Column,{sm:12,md:6,xs:12},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"5",marginLeft:"-15"},y(g.X,{fontSize:"13px",color:"#4F4F4F"},t.subExpertise)),y(g.V,{marginTop:"0"},y(g.X,{fontSize:"20px",color:"#4F4F4F"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"5"},y(g.X,{fontSize:"13px",color:"#4F4F4F"},F(t.timestamp))),y(g.V,{marginTop:"0"},y(g.X,{fontSize:"20px",color:"#4F4F4F"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"5"},y(g.X,{fontSize:"13px",color:"#4F4F4F"},S(t.timestamp))))),y(m.Column,{xs:12,md:6,sm:12,className:"padding"},t.answers?y(g.V,{marginRight:"10",marginTop:"5"},y(g.F,{fontSize:"13px",padding:"3px",border:"0.4px solid #029532",background:"".concat(l.id===t._id?"#029532":"none"),color:"".concat(l.id===t._id?"#fff":"#029532"),onClick:function(e){return function(e){u({id:e});var t=n.filter((function(t){return t._id===e}));w(t),o(e)}(t._id)},width:"150px",height:"27px"},x(t.answers))):y(r.a.Fragment,null))))))),y("div",null,t.answers?y(r.a.Fragment,null,t.answers.map((function(e,n){return y(m.Row,null,y(m.Column,{md:1,sm:2,xs:2},y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},y(g.y,{src:e.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),y(m.Column,{md:11,sm:10,xs:10,className:"padding"},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"22px",color:"#232323"},e.consultant.name))),y(g.V,{marginBottom:"10",marginRight:"-15"},y(g.u,{borderBottom:"1px solid #E0E0E0"},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},t.expertise)),y(g.V,{marginTop:"6"},y(g.X,{fontSize:"20px",color:"#AFAFAF"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},F(e.createdAt))),y(g.V,{marginTop:"6"},y(g.X,{fontSize:"20px",color:"#AFAFAF"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},S(e.createdAt)))),y(g.V,{marginTop:"10",marginBottom:"10"},y(g.X,{fontSize:"16px",color:"AFAFAF"},e.answer))))))}))):y("div",null,"loading")))),y(c.a,{isOpen:f,style:{overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%"}},contentLabel:"Example Modal"},y(g.V,{marginTop:"20",marginBottom:"50"},C.map((function(e,t){return y("div",{style:{height:"600px",overflow:"scroll"}},y(g.g,{borderRadius:"10px",border:"1px solid #D0D7DC"},y(m.Row,null,y(m.Column,{md:1,sm:2,xs:2},y(g.V,{marginLeft:"5",marginRight:"5",marginTop:"5",marginBottom:"5"},y(g.y,{src:e.image,height:"40",width:"40",borderRadius:"50%"}))),y(m.Column,{md:11,sm:10,xs:10},y(g.p,null,y(g.V,{marginRight:"5",marginTop:"5",marginBottom:"5"},y(g.X,{fontSize:"18px",color:"#232323"},e.expertise)),y(g.V,{marginRight:"5",marginTop:"5",marginBottom:"5"},y(g.F,{fontSize:"13px",padding:"5px",background:"none",color:"PRIVATE"===e.queryType?"#FF3140":"#029532",width:"125px",border:"PRIVATE"===e.queryType?"1px solid #FF3140":"1px solid #029532"},e.queryType))),y(g.V,{marginTop:"5",marginBottom:"5"},y(g.X,{fontSize:"16px",color:"#4F4F4F",letterSpacing:"0.10px",lineHeight:"1.2"},e.queryText)),y(g.V,{marginTop:"5",marginBottom:"5",marginRight:"-15"},y(g.u,{borderTop:"1px solid #E0E0E0"},y(m.Row,null,y(m.Column,{sm:12,md:6,xs:12},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"5",marginLeft:"-15"},y(g.X,{fontSize:"13px",color:"#4F4F4F"},e.subExpertise)),y(g.V,{marginTop:"0"},y(g.X,{fontSize:"20px",color:"#4F4F4F"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"5"},y(g.X,{fontSize:"13px",color:"#4F4F4F"},F(e.timestamp))),y(g.V,{marginTop:"0"},y(g.X,{fontSize:"20px",color:"#4F4F4F"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"5"},y(g.X,{fontSize:"14px",color:"#4F4F4F"},S(e.timestamp))))),y(m.Column,{xs:12,md:6,sm:12,className:"padding"},e.answers?y(g.V,{marginRight:"10",marginTop:"5"},y(g.F,{fontSize:"14px",padding:"3px",border:"0.4px solid #029532",background:"".concat(l.id===e._id?"#029532":"none"),color:"".concat(l.id===e._id?"#fff":"#029532"),width:"150px",height:"28px"},x(e.answers))):y(r.a.Fragment,null))))))),y("div",null,e.answers?y(r.a.Fragment,null,e.answers.map((function(t,n){return y(m.Row,null,y(m.Column,{md:1,sm:2,xs:2},y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10",marginBottom:"10"},y(g.y,{src:t.consultant.image,height:"40",width:"40",borderRadius:"50%"}))),y(m.Column,{md:11,sm:10,xs:10,className:"padding"},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"22px",color:"#232323"},t.consultant.name))),y(g.V,{marginBottom:"10",marginRight:"-15"},y(g.u,{borderBottom:"1px solid #E0E0E0"},y(g.p,null,y(g.V,{marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},e.expertise)),y(g.V,{marginTop:"6"},y(g.X,{fontSize:"20px",color:"#AFAFAF"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},F(t.createdAt))),y(g.V,{marginTop:"6"},y(g.X,{fontSize:"20px",color:"#AFAFAF"},"|")),y(g.V,{marginLeft:"10",marginRight:"10",marginTop:"10"},y(g.X,{fontSize:"14px",color:"#AFAFAF"},S(t.createdAt)))),y(g.V,{marginTop:"10",marginBottom:"10"},y(g.X,{fontSize:"16px",color:"AFAFAF"},t.answer))))))}))):y("div",null,"loading"))),y("br",null))})),y("button",{onClick:function(){h(!1)}},"close"))))}var O=n("gCaR"),C=n("GNyq"),w=n("gJGr"),F=r.a.createElement;function S(e){var t=e.queryName,n=r.a.useState([]),o=Object(s.a)(n,2),a=o[0],i=o[1],l=r.a.useState(10),u=Object(s.a)(l,2),g=(u[0],u[1],r.a.useState(0)),v=Object(s.a)(g,2),y=v[0],S=v[1],x=r.a.useRef(null),E=r.a.useState(0),_=Object(s.a)(E,2),R=(_[0],_[1]),T=r.a.useState(!1),A=Object(s.a)(T,2),M=A[0],P=A[1],j=r.a.useState([]),N=Object(s.a)(j,2),k=N[0],D=N[1];function V(e){fetch("".concat(C.a,"/apiV2/forumQueries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expertiseId:"",limit:30,skip:y})}).then((function(e){return e.json()})).then((function(e){var t=a.concat(e.queries);i(t)}))}function U(e){console.log(e);var t=a.filter((function(t){return t._id===e}));D(t),P(!0)}r.a.useEffect((function(){V(t)}),[]);var L=function(e){var t=e.index,n=e.style;return F("div",{style:n},F(b,{QuestionItems:a[t],arrays:a,onClickEvent:U}))};return F(r.a.Fragment,null,F(h.a,{BanerItems:O.f}),F(f.Container,null,F(m.Row,null,F(m.Column,{md:12,sm:12,xs:12},F("div",{style:{width:"100%",height:"100vh",overflow:"auto"},ref:x,onScroll:function(){S(y+1),window.scrollY;var e=x.current.scrollTop;R(e),V()}},F(p.a,null,(function(e){var t=e.height,n=e.width;return F(d.a,{height:t,itemCount:a.length,itemSize:220,width:n,useIsScrolling:!0},a?L:"loadding")})))))),F(w.a,null),F(c.a,{isOpen:M,style:{overlay:{backgroundColor:"#2125293b"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%"}},contentLabel:"Example Modal"},k.map((function(e,t){return F(b,{QuestionItems:e})}))))}var x=n("pkQc"),E=r.a.createElement,_=!0;function R(e){var t=e.queryName;return E("main",null,E(i.a,null,E("title",null,"Protalk App"),E("link",{rel:"icon",href:"/favicon.ico"}),E("meta",{httpEquiv:"Content-Type",content:"text/html;charset=ut-8"}),E("meta",{name:"description",content:"ProTalk experts are standing by to talk with you about healthy tips"}),E("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),E("div",null,E(l.a,null),E(S,{queryName:t}),E(x.a,null)))}},fbhf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},qFS3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=m(a),l=m(n("i8i4")),s=m(n("17x9")),u=m(n("QEso")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),p=n("2zs7"),d=m(p),f=n("VCL8");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",b=p.canUseDOM&&void 0!==l.default.createPortal,O=function(){return b?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function C(e){return e()}var w=function(e){function t(){var e,n,r;h(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=r=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.removePortal=function(){!b&&l.default.unmountComponentAtNode(r.node);var e=C(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O()(r,i.default.createElement(u.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},g(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){p.canUseDOM&&(b||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,C(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:C(e.parentSelector),nextParent:C(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(p.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var i=n.prevParent,l=n.nextParent;l!==i&&(i.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(p.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return p.canUseDOM&&b?(!this.node&&b&&(this.node=document.createElement("div")),O()(i.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);w.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.instanceOf(d.default),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func},w.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return i.default.createElement("div",e,t)},contentElement:function(e,t){return i.default.createElement("div",e,t)}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(w),t.default=w},"wnm/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum",function(){return n("Zuod")}])}},[["wnm/",0,2,1,3,4,6]]]);