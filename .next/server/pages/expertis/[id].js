module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1uuC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpertArticlesMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5JmT");
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ExpertArticlesMobile({
  ExpertArticlesItems
}) {
  const [currentSlideIdx, setCurrentSlideIdx] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(2);

  const nextSlide = () => {
    setCurrentSlideIdx(currentSlideIdx + 2);
  };

  let data = [];
  ExpertArticlesItems.map((item, i) => {
    data = data.concat({
      title: item.expertise,
      article: getListView(item.articles)
    });
  });

  function getListView(art) {
    const test = art.slice(0, currentSlideIdx);
    const imageSourcesToDisplay = art.length !== currentSlideIdx ? [...test] : art;
    return imageSourcesToDisplay;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "10",
    marginBottom: "30"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* Subtext */ "Y"], {
    fontSize: "32px",
    color: "#000000",
    fontWeight: "400"
  }, "Popular Expertize Articles")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10"
  }, data.map((item, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10",
    marginLeft: "15",
    marginRight: "15"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* Subtext */ "Y"], {
    fontSize: "24px",
    color: "#999",
    fontWeight: "600"
  }, item.expertise)), item.article.map((list, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/article-details/${list._id}`
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* CursorTag */ "n"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    sm: 12,
    md: 12,
    xs: 12
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* FlexTag */ "p"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginTop: "5"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* ResposiveImag */ "M"], {
    src: list.media
  })), __jsx(_components_card_card__WEBPACK_IMPORTED_MODULE_4__[/* Card */ "a"], {
    width: "-webkit-fill-available",
    border: "1",
    borderRadius: "5"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* Subtext */ "Y"], {
    fontSize: "12px",
    color: "#282828",
    letterSpacing: "0.56px"
  }, list.articleTitle), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginBottom: "5",
    marginTop: "5"
  }), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* FlexTag */ "p"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* SpaceTag */ "W"], {
    marginLeft: "0",
    marginTop: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* Subtext */ "Y"], {
    fontSize: "12px",
    color: "#010101",
    letterSpacing: "0.56px"
  }, list.consultantName), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* Subtext */ "Y"], {
    fontSize: "10px",
    color: "#979797"
  }, list.expertise))))))))))), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* FlexTag */ "p"], {
    justifyContent: "flex-end"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_5__[/* ViewMoreButton */ "cb"], {
    onClick: nextSlide,
    type: "button"
  }, "View More")))))));
}

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JlpT");


/***/ }),

/***/ "5JmT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/card/style.ts

const CardBloclk = external_styled_components_default.a.div.withConfig({
  displayName: "style__CardBloclk",
  componentId: "sc-1vu2txt-0"
})(["border:", "px solid;border-color:", ";border-radius:", "px;display:flex;padding:10px;margin:5px;flex-direction:", ";width:", ";height:", ";"], ({
  border
}) => border, ({
  borderColor
}) => borderColor, ({
  borderRadius
}) => borderRadius, ({
  flexDirection
}) => flexDirection, ({
  width
}) => width ? width : "-webkit-fill-available", ({
  height
}) => height ? height : "");
const CenterTag = external_styled_components_default.a.div.withConfig({
  displayName: "style__CenterTag",
  componentId: "sc-1vu2txt-1"
})(["margin:", ";text-align:", ";"], ({
  margin
}) => margin, ({
  textAlign
}) => textAlign);
// CONCATENATED MODULE: ./src/components/card/card.tsx
var __jsx = external_react_default.a.createElement;


function Card({
  children,
  border = "1",
  borderRadius = "5",
  flexDirection = "row",
  borderColor = "#e8eef3",
  textAlign = "undefined",
  margin = "undefined",
  width = "undefined",
  height = "undefined"
}) {
  return __jsx(external_react_default.a.Fragment, null, __jsx(CardBloclk, {
    border: border,
    borderRadius: borderRadius,
    borderColor: borderColor,
    flexDirection: flexDirection,
    width: width,
    height: height
  }, __jsx(CenterTag, {
    textAlign: textAlign,
    margin: margin
  }, children)));
}

/***/ }),

/***/ "5auh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/online-consultant-mobile-1ac443fac472e3d0d2093167d61f6c45.png";

/***/ }),

/***/ "5nti":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Icon; });

// UNUSED EXPORTS: IconMapping

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/icon/icons/search-icon.tsx
var __jsx = external_react_default.a.createElement;

function SearchIcon({
  color = "#000"
}) {
  return __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M15.7507 15.7322C15.6685 15.8169 15.5703 15.8843 15.4618 15.9303C15.3533 15.9763 15.2368 16 15.119 16C15.0012 16 14.8847 15.9763 14.7762 15.9303C14.6677 15.8843 14.5695 15.8169 14.4873 15.7322L12.2371 13.4711C10.7384 14.6773 8.83782 15.2627 6.9239 15.1075C5.00999 14.9522 3.22739 14.0682 1.94068 12.636C0.653979 11.2039 -0.0396163 9.33196 0.0017493 7.403C0.0431149 5.47405 0.816316 3.63385 2.16322 2.25875C3.51013 0.883645 5.32897 0.0775467 7.24776 0.0053096C9.16656 -0.0669275 11.0403 0.600154 12.4859 1.87013C13.9314 3.1401 14.8395 4.91701 15.0244 6.83745C15.2093 8.75788 14.657 10.6767 13.4806 12.2016L15.7308 14.4627C15.8995 14.6292 15.9962 14.8557 15.9999 15.0933C16.0036 15.3309 15.9141 15.5604 15.7507 15.7322ZM7.65816 1.98737C6.55724 1.98737 5.48105 2.31541 4.56567 2.92999C3.65029 3.54458 2.93683 4.41812 2.51553 5.44014C2.09423 6.46216 1.984 7.58677 2.19877 8.67174C2.41355 9.75672 2.9437 10.7533 3.72216 11.5356C4.50063 12.3178 5.49246 12.8505 6.57222 13.0663C7.65199 13.2821 8.77119 13.1713 9.78831 12.748C10.8054 12.3247 11.6748 11.6078 12.2864 10.688C12.898 9.76818 13.2245 8.68679 13.2245 7.58056C13.2254 6.84581 13.082 6.11811 12.8025 5.43912C12.5231 4.76013 12.1131 4.1432 11.5961 3.62365C11.079 3.1041 10.4651 2.69214 9.78933 2.41137C9.1136 2.13059 8.38939 1.98651 7.65816 1.98737Z",
    fill: color
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/hamburger-icon.tsx
var hamburger_icon_jsx = external_react_default.a.createElement;

function HamburgerIcon({
  color = "#000"
}) {
  return hamburger_icon_jsx("svg", {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, hamburger_icon_jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.09217 6.19849C2.81811 6.19849 2.55528 6.30736 2.36149 6.50114C2.16771 6.69493 2.05884 6.95776 2.05884 7.23182C2.05884 7.50588 2.16771 7.76871 2.36149 7.9625C2.55528 8.15628 2.81811 8.26515 3.09217 8.26515H27.8922C28.1662 8.26515 28.4291 8.15628 28.6229 7.9625C28.8166 7.76871 28.9255 7.50588 28.9255 7.23182C28.9255 6.95776 28.8166 6.69493 28.6229 6.50114C28.4291 6.30736 28.1662 6.19849 27.8922 6.19849H3.09217ZM2.05884 15.4985C2.05884 15.2244 2.16771 14.9616 2.36149 14.7678C2.55528 14.574 2.81811 14.4652 3.09217 14.4652H27.8922C28.1662 14.4652 28.4291 14.574 28.6229 14.7678C28.8166 14.9616 28.9255 15.2244 28.9255 15.4985C28.9255 15.7725 28.8166 16.0354 28.6229 16.2292C28.4291 16.423 28.1662 16.5318 27.8922 16.5318H3.09217C2.81811 16.5318 2.55528 16.423 2.36149 16.2292C2.16771 16.0354 2.05884 15.7725 2.05884 15.4985ZM2.05884 23.7652C2.05884 23.4911 2.16771 23.2283 2.36149 23.0345C2.55528 22.8407 2.81811 22.7318 3.09217 22.7318H27.8922C28.1662 22.7318 28.4291 22.8407 28.6229 23.0345C28.8166 23.2283 28.9255 23.4911 28.9255 23.7652C28.9255 24.0392 28.8166 24.302 28.6229 24.4958C28.4291 24.6896 28.1662 24.7985 27.8922 24.7985H3.09217C2.81811 24.7985 2.55528 24.6896 2.36149 24.4958C2.16771 24.302 2.05884 24.0392 2.05884 23.7652Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/yoga-icon.tsx
var yoga_icon_jsx = external_react_default.a.createElement;

function YogaIcon({
  color = "#000"
}) {
  return yoga_icon_jsx("svg", {
    width: "50",
    height: "49",
    viewBox: "0 0 50 49",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, yoga_icon_jsx("path", {
    d: "M44.7003 21.4908H42.8556C42.3767 21.4908 41.9072 21.3574 41.4998 21.1056C41.0924 20.8538 40.7632 20.4936 40.549 20.0652L39.5425 18.0522H44.7003V21.4908Z",
    fill: "#EA9D2D"
  }), yoga_icon_jsx("path", {
    d: "M44.6998 21.4908H46.5445C47.0234 21.4908 47.4929 21.3574 47.9003 21.1056C48.3077 20.8538 48.637 20.4936 48.8511 20.0652L49.8577 18.0522H44.6998V21.4908Z",
    fill: "#EA9D2D"
  }), yoga_icon_jsx("path", {
    d: "M44.7007 14.6141L43.5589 16.3268C43.1823 16.8916 42.9814 17.5553 42.9814 18.2342V18.3477C42.9814 18.7992 43.0704 19.2464 43.2432 19.6636C43.416 20.0808 43.6693 20.4599 43.9886 20.7792L44.7007 21.4913L45.4128 20.7792C45.7321 20.4599 45.9854 20.0808 46.1583 19.6636C46.3311 19.2464 46.42 18.7992 46.42 18.3477V18.2342C46.42 17.5553 46.2191 16.8916 45.8425 16.3268L44.7007 14.6141Z",
    fill: "#FBB540"
  }), yoga_icon_jsx("path", {
    d: "M16.3332 39.5431L18.0525 37.8238L18.9121 35.2449H30.9471L31.8067 37.8238L33.526 39.5431L35.2453 40.9185L24.9296 46.4202L14.6139 41.2624L16.3332 39.5431Z",
    fill: "#5D70B3"
  }), yoga_icon_jsx("path", {
    d: "M24.5363 43.8422L24.1032 46.0074L14.6139 41.2632L16.3332 39.544L16.7136 39.1636L24.5363 43.8422Z",
    fill: "#CF5252"
  }), yoga_icon_jsx("path", {
    d: "M35.2449 40.9186L26.1724 45.7573L25.7888 43.8413L33.3203 39.3379L33.5256 39.5431L35.2449 40.9186Z",
    fill: "#CF5252"
  }), yoga_icon_jsx("path", {
    d: "M18.0524 19.2346L16.2053 19.8364C15.7062 20.0859 15.2669 20.4405 14.9178 20.8758C14.5686 21.3111 14.3177 21.8168 14.1823 22.3581L12.035 30.9472L5.15784 35.2454L2.57892 34.3858L0 35.2454L0.85964 39.5436L13.6542 35.5453C13.9577 35.4505 14.2389 35.2954 14.4811 35.0894C14.7232 34.8833 14.9213 34.6305 15.0635 34.3461L18.0524 28.3683V19.2346Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M31.8064 19.2346L33.6535 19.8358C34.1527 20.0854 34.5919 20.44 34.9411 20.8753C35.2903 21.3105 35.5411 21.8162 35.6765 22.3576L37.8239 30.9472L44.701 35.2454L47.2799 34.3858L49.8588 35.2454L48.9992 39.5436L36.2046 35.5453C35.9011 35.4505 35.6199 35.2954 35.3778 35.0894C35.1356 34.8833 34.9375 34.6305 34.7954 34.3461L31.8064 28.3683V19.2346Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M27.5091 4.2982L27.2094 2.79996C27.0515 2.0104 26.6249 1.29994 26.0022 0.789451C25.3796 0.278965 24.5992 -7.35568e-06 23.794 1.45463e-10C22.8703 2.08785e-05 21.9844 0.366988 21.3312 1.02018C20.2919 2.05943 19.4675 3.29321 18.905 4.65107C18.3426 6.00893 18.0531 7.46428 18.053 8.93403V9.17666C18.0531 10.0559 17.836 10.9216 17.4211 11.6968C17.0062 12.4721 16.4064 13.1329 15.6747 13.6206L15.4741 13.7542L16.1403 14.0874C16.9825 14.5085 17.921 14.6995 18.8608 14.641C19.8006 14.5825 20.7082 14.2766 21.4916 13.7542L27.5091 4.2982Z",
    fill: "#683B0D"
  }), yoga_icon_jsx("path", {
    d: "M28.3688 18.2246L27.5092 18.0527V14.6141H22.3513V18.0527L21.4917 18.2246V22.3509L24.9303 24.9298L28.3688 22.3509V18.2246Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M27.5098 14.6141V15.4738C26.7658 16.0318 25.8609 16.3334 24.9309 16.3334C24.0008 16.3334 23.0959 16.0318 22.3519 15.4738V14.6141H27.5098Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M28.3672 18.2246L31.8057 19.2347V23.2105C32.3047 23.959 32.5526 24.8468 32.5136 25.7456C32.4746 26.6443 32.1507 27.5073 31.5888 28.2098L30.0865 30.0876H19.7708L18.2684 28.2098C17.7065 27.5073 17.3826 26.6443 17.3436 25.7456C17.3046 24.8468 17.5525 23.959 18.0515 23.2105V19.2347L21.4901 18.2246V22.3509L24.9286 24.9298L28.3672 22.3509V18.2246Z",
    fill: "#F1746A"
  }), yoga_icon_jsx("path", {
    d: "M19.7726 30.0875V31.5504C19.7726 32.2896 19.6534 33.0239 19.4197 33.7252L18.913 35.2454H30.9479L30.4412 33.7252C30.2074 33.0239 30.0883 32.2896 30.0883 31.5504V30.0875H19.7726Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M35.2453 40.9194L33.526 39.544L33.3207 39.3387L25.7892 43.8422H24.5363L16.7136 39.1636L16.3332 39.544L14.6139 41.2632L24.1032 45.5614H26.1728L35.2453 40.9194Z",
    fill: "#4162AA"
  }), yoga_icon_jsx("path", {
    d: "M27.5098 14.6141V15.4738C26.7658 16.0318 25.8609 16.3334 24.9309 16.3334C24.0008 16.3334 23.0959 16.0318 22.3519 15.4738V14.6141H27.5098Z",
    fill: "#F6BB92"
  }), yoga_icon_jsx("path", {
    d: "M5.15784 22.351H3.31316C2.83423 22.351 2.36476 22.2177 1.95736 21.9659C1.54995 21.7141 1.22071 21.3538 1.00653 20.9254L0 18.9125H5.15784V22.351Z",
    fill: "#029532"
  }), yoga_icon_jsx("path", {
    d: "M5.1593 22.351H7.00398C7.48292 22.351 7.95239 22.2177 8.35979 21.9659C8.76719 21.7141 9.09643 21.3538 9.31061 20.9254L10.3171 18.9125H5.1593V22.351Z",
    fill: "#029532"
  }), yoga_icon_jsx("path", {
    d: "M26.6485 48.9993L41.6944 42.8541C42.0846 42.6476 42.4293 42.3647 42.708 42.0222C42.9867 41.6798 43.1937 41.2849 43.3167 40.8608C43.4397 40.4368 43.4762 39.9924 43.4241 39.554C43.3719 39.1156 43.2322 38.6921 43.0131 38.3088C42.7891 37.9166 42.4867 37.5747 42.125 37.3044C41.7632 37.034 41.3497 36.8409 40.9101 36.7371C40.4705 36.6333 40.0143 36.621 39.5698 36.701C39.1253 36.781 38.702 36.9515 38.3261 37.202L25.7888 44.7011L26.6485 48.9993Z",
    fill: "#5D70B3"
  }), yoga_icon_jsx("path", {
    d: "M23.6765 48.9993L8.63053 42.8541C8.24034 42.6476 7.89565 42.3647 7.61696 42.0222C7.33827 41.6798 7.13126 41.2849 7.00825 40.8608C6.88523 40.4368 6.84872 39.9924 6.90087 39.554C6.95303 39.1156 7.09279 38.6921 7.31185 38.3088C7.5359 37.9166 7.83822 37.5747 8.2 37.3044C8.56178 37.034 8.9753 36.8409 9.41487 36.7371C9.85443 36.6333 10.3106 36.621 10.7552 36.701C11.1997 36.781 11.623 36.9515 11.9988 37.202L24.5361 44.7011L23.6765 48.9993Z",
    fill: "#5D70B3"
  }), yoga_icon_jsx("path", {
    d: "M25.789 44.7019L21.4908 45.5615L18.9119 44.7019L17.1926 46.4212L18.0523 49.0001H26.6487L25.789 44.7019Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M29.2279 9.45578V11.1751C29.2279 12.315 28.775 13.4083 27.969 14.2143C27.1629 15.0204 26.0696 15.4733 24.9297 15.4733C23.7897 15.4733 22.6965 15.0204 21.8904 14.2143C21.0843 13.4083 20.6315 12.315 20.6315 11.1751V7.7365C20.631 7.28024 20.7033 6.82682 20.8456 6.39331L29.2279 9.45578Z",
    fill: "#FDC9A6"
  }), yoga_icon_jsx("path", {
    d: "M29.2276 7.73667V9.45595C26.4376 9.45595 23.7228 8.55103 21.4908 6.87702L20.8461 6.39348C21.1653 5.42234 21.8201 4.59676 22.6931 4.06491C23.5661 3.53307 24.6001 3.32978 25.6095 3.49154C26.6189 3.6533 27.5375 4.16951 28.2006 4.94752C28.8637 5.72554 29.2278 6.71441 29.2276 7.73667Z",
    fill: "#683B0D"
  }), yoga_icon_jsx("path", {
    d: "M5.15825 15.4736L4.01643 17.1863C3.63987 17.7511 3.43894 18.4148 3.43896 19.0937V19.2072C3.43896 19.6587 3.52791 20.1059 3.70072 20.5231C3.87353 20.9403 4.12683 21.3193 4.44614 21.6387L5.15825 22.3508L5.87035 21.6387C6.18967 21.3193 6.44296 20.9403 6.61577 20.5231C6.78859 20.1059 6.87753 19.6587 6.87753 19.2072V19.0937C6.87755 18.4148 6.67662 17.7511 6.30006 17.1863L5.15825 15.4736Z",
    fill: "#02A437"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/weightloss-icon.tsx
var weightloss_icon_jsx = external_react_default.a.createElement;

function WeightLossIcon({
  color = "#000"
}) {
  return weightloss_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 52 52",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, weightloss_icon_jsx("path", {
    d: "M42.9026 18.2524H36.7069C36.4932 12.9797 32.139 8.75513 26.8143 8.75513C21.4896 8.75513 17.1358 12.9793 16.9217 18.2524H10.7227C9.47473 18.2524 8.45911 19.2677 8.45911 20.5157V48.7744C8.45911 50.0224 9.47473 51.0376 10.7227 51.0376H42.9026C44.1506 51.0376 45.1658 50.0224 45.1658 48.7744V20.5157C45.1662 19.2677 44.151 18.2524 42.9026 18.2524Z",
    fill: "#E6E7E8"
  }), weightloss_icon_jsx("path", {
    d: "M17.1137 10.0847H19.8823C20.516 10.0847 21.0311 9.56881 21.0311 8.93547C21.0311 8.30212 20.5156 7.78659 19.8823 7.78659H19.7511C21.7124 5.93287 24.3104 4.88556 27.0116 4.88556C30.3879 4.88556 33.5912 6.52478 35.5814 9.27103C35.9393 9.76503 36.6909 9.8865 37.1861 9.52656C37.4343 9.347 37.598 9.0805 37.6464 8.77743C37.6947 8.47437 37.622 8.1705 37.442 7.92187C35.0212 4.58168 31.1216 2.5874 27.0116 2.5874C23.7701 2.5874 20.6306 3.83296 18.2548 6.03403C18.189 5.46243 17.7023 5.01718 17.1133 5.01718C16.4795 5.01718 15.964 5.53272 15.964 6.16606V8.93506C15.9644 9.56922 16.4799 10.0847 17.1137 10.0847Z",
    fill: "#E6E7E8"
  }), weightloss_icon_jsx("path", {
    d: "M41.2776 17.0337H34.6862C34.6858 22.2698 30.4258 26.5302 25.1897 26.5302C19.9535 26.5302 15.6928 22.2698 15.6924 17.0337H9.09773C8.07236 17.0337 7.24036 17.8657 7.24036 18.8911V47.1494C7.24036 48.1748 8.07236 49.0068 9.09773 49.0068H41.2776C42.3066 49.0068 43.135 48.1748 43.135 47.1494V18.8907C43.135 17.8657 42.3066 17.0337 41.2776 17.0337Z",
    fill: "#6DC9F7"
  }), weightloss_icon_jsx("path", {
    d: "M41.2776 47.7875H9.09773C8.07236 47.7875 7.24036 46.9555 7.24036 45.9302V47.1489C7.24036 48.1743 8.07236 49.0063 9.09773 49.0063H41.2776C42.3066 49.0063 43.135 48.1743 43.135 47.1489V45.9302C43.135 46.9555 42.3066 47.7875 41.2776 47.7875Z",
    fill: "white"
  }), weightloss_icon_jsx("path", {
    d: "M23.5982 30.2709V44.9207C23.5982 45.9464 22.7666 46.778 21.7408 46.778H11.7865C10.7315 46.778 9.87347 45.9237 9.87347 44.865V21.1754C9.87347 20.1167 10.7315 19.2623 11.7865 19.2623H11.7902C12.6295 19.2623 13.3575 19.812 13.6138 20.607C14.8647 24.505 18.1004 27.5202 22.1227 28.4533C22.9787 28.652 23.5982 29.3922 23.5982 30.2709Z",
    fill: "#0089EF"
  }), weightloss_icon_jsx("path", {
    d: "M40.4991 21.1754V44.865C40.4991 45.9237 39.6447 46.778 38.5897 46.778H28.635C27.6092 46.778 26.7776 45.9464 26.7776 44.9207V30.2701C26.7776 29.3918 27.3967 28.6516 28.2523 28.4529C32.2782 27.5173 35.5144 24.5025 36.762 20.607C37.0183 19.812 37.75 19.2623 38.5893 19.2623C39.1166 19.2623 39.596 19.474 39.9377 19.8234C40.287 20.1687 40.4991 20.6476 40.4991 21.1754Z",
    fill: "#0089EF"
  }), weightloss_icon_jsx("path", {
    d: "M25.1895 26.5301C19.953 26.5301 15.6926 22.2698 15.6926 17.0332C15.6926 11.7967 19.953 7.53674 25.1895 7.53674C30.4261 7.53674 34.686 11.7971 34.686 17.0332C34.686 22.2694 30.4257 26.5301 25.1895 26.5301Z",
    fill: "#FA759E"
  }), weightloss_icon_jsx("path", {
    d: "M25.1892 24.5797C29.357 24.5797 32.7357 21.201 32.7357 17.0332C32.7357 12.8654 29.357 9.48669 25.1892 9.48669C21.0214 9.48669 17.6427 12.8654 17.6427 17.0332C17.6427 21.201 21.0214 24.5797 25.1892 24.5797Z",
    fill: "#D4FBFF"
  }), weightloss_icon_jsx("path", {
    d: "M31.7207 17.0332C31.7207 20.635 28.7884 23.5669 25.187 23.5669V22.0451C27.9515 22.0451 30.1989 19.7977 30.1989 17.0332H31.7207Z",
    fill: "#FA759E"
  }), weightloss_icon_jsx("path", {
    d: "M31.7207 17.0332H30.1989C30.1989 14.2683 27.9515 12.0213 25.187 12.0213V10.4995C28.7888 10.4995 31.7207 13.4314 31.7207 17.0332Z",
    fill: "#FFD7E5"
  }), weightloss_icon_jsx("path", {
    d: "M25.1869 10.4995V12.0213C22.4273 12.0213 20.1799 14.2687 20.1799 17.0332H18.6581C18.6581 13.4314 21.5851 10.4995 25.1869 10.4995Z",
    fill: "#0089EF"
  }), weightloss_icon_jsx("path", {
    d: "M25.1869 22.0451V23.5669C21.5851 23.5669 18.6581 20.6346 18.6581 17.0332H20.1799C20.1799 19.7977 22.4273 22.0451 25.1869 22.0451Z",
    fill: "#6DC9F7"
  }), weightloss_icon_jsx("path", {
    d: "M25.1893 17.8819C25.7751 17.8819 26.25 17.407 26.25 16.8212C26.25 16.2354 25.7751 15.7605 25.1893 15.7605C24.6034 15.7605 24.1285 16.2354 24.1285 16.8212C24.1285 17.407 24.6034 17.8819 25.1893 17.8819Z",
    fill: "#FA759E"
  }), weightloss_icon_jsx("path", {
    d: "M35.4877 6.53534C33.1432 3.30037 29.3672 1.36865 25.3863 1.36865C21.9043 1.36865 18.5788 2.84659 16.2311 5.382V4.54147C16.2311 4.13115 15.8983 3.79843 15.488 3.79843C15.0777 3.79843 14.745 4.13115 14.745 4.54147V7.31047C14.745 7.72078 15.0777 8.0535 15.488 8.0535H18.2566C18.6669 8.0535 18.9997 7.72078 18.9997 7.31047C18.9997 6.90015 18.6669 6.56743 18.2566 6.56743H17.1667C19.2422 4.22703 22.2403 2.8539 25.3859 2.8539C28.8918 2.8539 32.2186 4.55568 34.2844 7.40715C34.4294 7.60784 34.6561 7.71387 34.8865 7.71387C35.0372 7.71387 35.1899 7.66797 35.3216 7.5725C35.6547 7.3324 35.7286 6.86765 35.4877 6.53534Z",
    fill: "#6DC9F7"
  }), weightloss_icon_jsx("path", {
    d: "M41.2778 16.6274H35.0821C34.8684 11.3547 30.5142 7.13013 25.1895 7.13013C19.8648 7.13013 15.5102 11.3543 15.2961 16.6274H9.09751C7.84951 16.6274 6.83429 17.6431 6.83429 18.8911V47.1494C6.83429 48.3974 7.84951 49.4126 9.09751 49.4126H41.2778C42.5258 49.4126 43.541 48.3974 43.541 47.1494V32.5337C43.541 32.3091 43.3594 32.1275 43.1348 32.1275C42.9101 32.1275 42.7285 32.3091 42.7285 32.5337V47.1494C42.7285 47.9493 42.0773 48.6001 41.2778 48.6001H9.09751C8.2976 48.6001 7.64679 47.9489 7.64679 47.1494V18.8911C7.64679 18.0907 8.29801 17.4399 9.09751 17.4399H15.2965C15.5106 22.7127 19.8652 26.9364 25.1899 26.9364C30.5142 26.9364 34.868 22.7127 35.0825 17.4399H41.2782C42.0781 17.4399 42.7289 18.0912 42.7289 18.8911V26C42.7289 26.2247 42.9105 26.4063 43.1352 26.4063C43.3598 26.4063 43.5414 26.2247 43.5414 26V18.8911C43.541 17.6431 42.5258 16.6274 41.2778 16.6274ZM25.1895 26.1239C20.1768 26.1239 16.0984 22.046 16.0984 17.0333C16.0984 12.0206 20.1768 7.94263 25.1895 7.94263C30.2018 7.94263 34.2797 12.0206 34.2797 17.0333C34.2797 22.046 30.2018 26.1239 25.1895 26.1239Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M43.1349 27.3203C42.9102 27.3203 42.7286 27.5019 42.7286 27.7266V30.7397C42.7286 30.9644 42.9102 31.146 43.1349 31.146C43.3595 31.146 43.5411 30.9644 43.5411 30.7397V27.7266C43.5411 27.5019 43.3595 27.3203 43.1349 27.3203Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M25.1891 9.08044C20.8041 9.08044 17.2364 12.6481 17.2364 17.0332C17.2364 21.4183 20.8041 24.9859 25.1891 24.9859C29.5746 24.9859 33.1423 21.4183 33.1423 17.0332C33.1423 12.6481 29.5746 9.08044 25.1891 9.08044ZM25.1891 24.1734C21.2522 24.1734 18.0489 20.9702 18.0489 17.0332C18.0489 13.0962 21.2522 9.89294 25.1891 9.89294C29.1265 9.89294 32.3298 13.0962 32.3298 17.0332C32.3298 20.9702 29.1265 24.1734 25.1891 24.1734Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M25.2656 12.0405C25.6921 12.0405 26.0378 11.6948 26.0378 11.2683C26.0378 10.8417 25.6921 10.496 25.2656 10.496C24.839 10.496 24.4933 10.8417 24.4933 11.2683C24.4933 11.6948 24.839 12.0405 25.2656 12.0405Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M19.424 16.1851C18.9975 16.1851 18.6517 16.5308 18.6517 16.9573C18.6517 17.3839 18.9975 17.7296 19.424 17.7296C19.8506 17.7296 20.1963 17.3839 20.1963 16.9573C20.1963 16.5308 19.8506 16.1851 19.424 16.1851Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M25.1133 22.026C24.6868 22.026 24.3411 22.3717 24.3411 22.7983C24.3411 23.2248 24.6868 23.5706 25.1133 23.5706C25.5399 23.5706 25.8856 23.2248 25.8856 22.7983C25.8856 22.3717 25.5399 22.026 25.1133 22.026Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M30.9537 17.8815C31.3803 17.8815 31.726 17.5358 31.726 17.1092C31.726 16.6826 31.3803 16.3369 30.9537 16.3369C30.5272 16.3369 30.1815 16.6826 30.1815 17.1092C30.1815 17.5358 30.5272 17.8815 30.9537 17.8815Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M27.6462 14.2293L25.6746 15.8836C25.9228 16.0124 26.1113 16.235 26.1962 16.506L28.1678 14.8517C28.3396 14.7079 28.3624 14.4515 28.2177 14.2797C28.0743 14.1075 27.8188 14.0851 27.6462 14.2293Z",
    fill: "#3A2C60"
  }), weightloss_icon_jsx("path", {
    d: "M15.4884 8.45975H18.257C18.8908 8.45975 19.4059 7.94381 19.4059 7.31047C19.4059 6.67712 18.8904 6.16159 18.257 6.16159H18.1258C20.0872 4.30787 22.6852 3.26056 25.3863 3.26056C28.7627 3.26056 31.9659 4.89978 33.9557 7.64562C34.3128 8.13922 35.0648 8.2615 35.5608 7.90156C35.8091 7.722 35.9728 7.4555 36.0211 7.15243C36.0695 6.84937 35.9967 6.5455 35.8168 6.29728C33.3955 2.95668 29.4963 0.962402 25.3863 0.962402C22.1448 0.962402 19.0053 2.20796 16.6296 4.40903C16.5638 3.83743 16.0771 3.39218 15.488 3.39218C14.8543 3.39218 14.3387 3.90812 14.3387 4.54146V7.31006C14.3392 7.94422 14.8547 8.45975 15.4884 8.45975ZM15.1517 4.54187C15.1517 4.35622 15.3028 4.20509 15.4884 4.20509C15.6741 4.20509 15.8248 4.35622 15.8248 4.54187V5.382C15.8248 5.54896 15.9272 5.69928 16.0828 5.76021C16.2392 5.82115 16.4155 5.78093 16.5292 5.65825C18.8144 3.19028 22.0429 1.7749 25.3863 1.7749C29.2367 1.7749 32.8902 3.64406 35.1591 6.77422C35.2119 6.84693 35.233 6.9359 35.2188 7.02447C35.2046 7.11343 35.157 7.19103 35.0835 7.24384C35.0104 7.29706 34.9364 7.30803 34.8873 7.30803C34.7772 7.30803 34.6777 7.25765 34.6139 7.16909C32.4721 4.21322 29.0222 2.44806 25.3863 2.44806C22.1404 2.44806 19.0334 3.85125 16.8632 6.29809C16.7572 6.41793 16.7312 6.58856 16.7966 6.7344C16.862 6.88025 17.0074 6.97409 17.1671 6.97409H18.2574C18.4431 6.97409 18.5938 7.12481 18.5938 7.31047C18.5938 7.49612 18.4431 7.64725 18.2574 7.64725H15.4888C15.3032 7.64725 15.1521 7.49612 15.1521 7.31047V4.54187H15.1517Z",
    fill: "#3A2C60"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/mentalhealth-icon.tsx
var mentalhealth_icon_jsx = external_react_default.a.createElement;

function MentalHealthIcon({
  color = "#000"
}) {
  return mentalhealth_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, mentalhealth_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, mentalhealth_icon_jsx("path", {
    d: "M16.4636 39.0259C19.124 40.2293 20.2901 45.0001 20.2901 45.0001L39.7596 44.9465C39.3947 44.1889 38.98 43.4561 38.5182 42.7532C38.1509 42.0015 37.843 41.2222 37.5973 40.4225C37.1413 38.8796 36.8256 37.2987 36.6538 35.6991C36.3652 33.2412 36.7358 30.7508 37.7276 28.4835C38.602 26.4896 40.1204 24.9099 41.278 23.0843C42.4256 21.3018 43.0436 19.2301 43.0601 17.1102C43.1037 14.9631 42.8403 12.8207 42.2781 10.7481C41.5425 8.23716 40.0078 6.03478 37.9069 4.47525C34.0601 1.4587 30.1358 -0.228023 25.1672 0.0249083C22.6805 0.198025 20.2098 0.552764 17.7748 1.08629C15.1229 1.62008 12.3151 2.61163 10.4119 4.62112C9.11358 6.00843 8.11055 7.64495 7.46359 9.43146C7.16034 10.3201 6.91364 11.2271 6.72497 12.147C6.40732 13.15 6.02399 14.131 5.57747 15.0836C5.44609 15.373 5.38877 15.6906 5.41066 16.0077C5.55962 17.0815 7.17031 17.5431 7.1835 18.6503C7.16624 18.8949 7.09098 19.1318 6.96393 19.3415C6.01969 21.3362 4.86095 23.2221 3.50824 24.9658C3.18859 25.3576 2.53997 26.1296 2.62066 26.6835C2.67807 27.0769 3.14979 27.4035 3.44074 27.62C4.06143 28.0809 5.32531 28.3959 5.48281 29.2276C5.56434 29.6511 5.51313 30.0896 5.33617 30.4829C4.90712 31.3884 4.43152 31.8709 4.76902 32.1549C5.10652 32.4389 6.0104 33.1209 6.0104 33.1209C6.0104 33.1209 5.15152 34.2179 5.62712 34.5547C6.21678 34.9736 6.96781 35.1668 7.16798 35.9512C7.22757 36.5728 7.16538 37.2 6.98488 37.7978C6.92428 38.3827 7.00078 38.9738 7.20833 39.5241C7.49078 40.6223 8.58891 41.3026 9.69807 41.0665C11.9885 40.5092 14.247 39.828 16.4636 39.0259Z",
    fill: "#35495E"
  }), mentalhealth_icon_jsx("path", {
    d: "M32.7197 32.9354C31.7622 32.9352 30.8998 32.3561 30.5372 31.4698C30.3262 30.9585 29.5713 30.2284 28.1639 29.1725C25.8859 27.4656 25.3064 24.4126 26.6122 21.005L27.0777 19.8016L40.0524 22.1897L37.5122 24.7346H37.4998C36.3531 25.9007 35.3018 27.253 35.3018 28.707C35.3146 29.6139 35.1775 30.5168 34.896 31.379C34.5853 32.3135 33.7084 32.9417 32.7236 32.9354H32.7197Z",
    fill: "#2C3E50"
  }), mentalhealth_icon_jsx("path", {
    d: "M33.5947 25.4934C32.6661 25.4956 31.7434 25.3448 30.8637 25.0473C30.239 24.8358 29.6389 24.5578 29.0738 24.2179C27.7093 23.3487 26.4563 22.3158 25.3426 21.1424C24.775 20.567 24.0599 20.1589 23.2758 19.9631C22.8663 19.8677 22.4489 19.8098 22.0289 19.7901C21.8738 19.7815 21.7 19.7777 21.5254 19.7777C19.7989 19.8451 18.0786 20.0265 16.376 20.3208L15.3201 20.4759C14.8574 20.5414 14.3908 20.5751 13.9235 20.5768C13.7769 20.5768 13.6341 20.5768 13.4968 20.5659C12.8107 20.5499 12.1319 20.4204 11.4881 20.1827C9.61068 19.4662 8.3069 17.741 8.13014 15.7393L8.11385 15.6291C8.03149 15.0403 8.01484 14.4441 8.0642 13.8516C8.08323 13.4062 8.13981 12.9631 8.23333 12.5272C8.25351 12.4388 8.55687 11.1493 8.79351 10.3672C8.84782 10.1927 8.88428 10.0763 8.92075 9.97541C9.10773 9.47964 9.30014 9.03196 9.49799 8.62774C10.0302 7.54946 10.7191 6.55593 11.5424 5.67947C12.389 4.82873 13.3955 4.15373 14.5039 3.69326C15.0548 3.45148 15.6202 3.24419 16.1968 3.07257C16.8058 2.89024 17.4382 2.73197 18.0837 2.60317C18.8014 2.45498 19.5532 2.31222 20.3135 2.178C20.786 2.09033 21.2779 2.01041 21.769 1.93826C22.3408 1.85059 22.9126 1.77843 23.4922 1.71404C24.0524 1.65507 24.5939 1.60619 25.1363 1.58136C25.1696 1.58136 25.2139 1.57516 25.2612 1.57283C25.5614 1.55964 25.8625 1.55188 26.1542 1.55188C26.387 1.55188 26.6127 1.56041 26.8331 1.56817C27.4095 1.58782 27.9842 1.64275 28.5539 1.73266C30.2411 1.99669 31.8716 2.5436 33.3767 3.35033C33.7856 3.55981 34.1828 3.78636 34.5754 4.03697C35.1268 4.36903 35.7327 4.78283 36.3933 5.27834C36.5779 5.41412 36.7595 5.55378 36.9488 5.70274C37.3012 5.97028 37.6358 6.26056 37.9504 6.57171C39.3011 7.81454 40.2815 9.40693 40.7831 11.1726C41.0937 12.2913 41.3015 13.436 41.4038 14.5926C41.4589 15.1923 41.4891 15.7393 41.4969 16.2723C41.5085 16.5183 41.5085 16.7898 41.5085 17.0691C41.506 17.3918 41.4845 17.7141 41.4441 18.0343C41.3883 18.662 41.2618 19.2815 41.067 19.8808C40.8105 20.716 40.4425 21.5127 39.9731 22.2495C39.1192 23.5495 37.8739 24.544 36.4173 25.0892C35.4979 25.3491 34.5478 25.4851 33.5924 25.4934H33.5947Z",
    fill: "#2C3E50"
  }), mentalhealth_icon_jsx("path", {
    d: "M28.0623 21.5613C27.5502 22.8958 26.6813 26.1234 29.0942 27.9311C30.9004 29.2858 31.6546 30.1152 31.9711 30.8794C32.0834 31.1846 32.3741 31.3874 32.6993 31.3874C33.0244 31.3874 33.3151 31.1846 33.4274 30.8794C33.6545 30.1781 33.7633 29.444 33.7494 28.707C33.7494 26.4725 35.3632 24.6337 36.8451 23.1983C36.8528 23.1983 36.8606 23.1906 36.8684 23.1828L28.0623 21.5613Z",
    fill: "#DF4D60"
  }), mentalhealth_icon_jsx("path", {
    d: "M39.9491 16.2933C39.9413 15.7657 39.9103 15.2459 39.8637 14.7416C39.7684 13.6763 39.5762 12.622 39.2896 11.5916C38.8603 10.081 38.0163 8.72096 36.8534 7.66571C36.5823 7.3995 36.2947 7.15073 35.9922 6.92088C35.8137 6.78122 35.643 6.64933 35.4646 6.51743C34.8827 6.08295 34.3085 5.68726 33.7422 5.34588C33.3775 5.11312 33.0206 4.9114 32.656 4.72519C31.3027 3.99833 29.8364 3.5052 28.3189 3.26657C27.8078 3.18562 27.2921 3.13639 26.7749 3.11915C26.5732 3.1114 26.3637 3.10364 26.1542 3.10364C25.8827 3.10364 25.6034 3.1114 25.3241 3.12691C25.2853 3.12691 25.2465 3.13467 25.2077 3.13467C24.6956 3.15795 24.1836 3.2045 23.6637 3.25881C23.1051 3.32088 22.5542 3.39071 21.9956 3.47605C21.5223 3.54588 21.0491 3.62347 20.5836 3.70881C19.8387 3.84071 19.1017 3.98036 18.3879 4.12778C17.7672 4.25191 17.1853 4.39933 16.6422 4.56226C16.1271 4.71483 15.6218 4.8988 15.1292 5.11312C14.2069 5.49072 13.3684 6.04709 12.662 6.75019C11.9462 7.51091 11.3474 8.37379 10.8853 9.31053C10.6991 9.69071 10.5284 10.0942 10.3732 10.5054C10.3422 10.5907 10.3111 10.6916 10.2723 10.8157C10.0473 11.5605 9.74476 12.8485 9.74476 12.8485C9.66675 13.2189 9.62003 13.5952 9.60511 13.9735C9.56168 14.4859 9.57992 15.0016 9.65942 15.5097V15.5174C9.76111 16.9555 10.6825 18.2062 12.0258 18.7295C12.5208 18.9107 13.0427 19.0078 13.5698 19.0166C14.0805 19.0386 14.5923 19.0127 15.0982 18.939C17.4117 18.5051 19.7583 18.2715 22.112 18.2407C22.6296 18.2663 23.1438 18.339 23.6482 18.4579C24.7007 18.719 25.6614 19.2637 26.4258 20.0329C27.4557 21.1191 28.6122 22.0777 29.8706 22.8881C31.713 24.0061 33.9516 24.2639 35.9999 23.5942C37.0849 23.1534 38.0121 22.3965 38.6611 21.4217C39.0621 20.7922 39.3754 20.111 39.5922 19.3967C39.7549 18.8958 39.8591 18.3777 39.9025 17.8528C39.9363 17.5929 39.9544 17.3312 39.9568 17.0692C39.9568 16.8054 39.9568 16.5493 39.9491 16.2933Z",
    fill: "#FB7B76"
  }), mentalhealth_icon_jsx("path", {
    d: "M13.5775 13.1898C13.5737 14.4737 12.5338 15.5136 11.2499 15.5174H9.65942V15.5096C9.57992 15.0016 9.56168 14.4858 9.60511 13.9734C9.6357 13.967 9.66697 13.9644 9.69821 13.9657H11.2499C11.6784 13.9657 12.0258 13.6183 12.0258 13.1898C12.0258 12.7613 12.3732 12.4139 12.8017 12.4139C13.2302 12.4139 13.5775 12.7613 13.5775 13.1898Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M13.5778 17.845V18.9389C13.5791 18.965 13.5765 18.9912 13.5701 19.0165C13.043 19.0077 12.5211 18.9107 12.0261 18.7294V17.845C12.0261 17.4165 12.3735 17.0691 12.802 17.0691C13.2305 17.0691 13.5778 17.4165 13.5778 17.845Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M18.2324 16.2931H17.4565C16.1711 16.2931 15.129 15.251 15.129 13.9655V13.1896C15.129 11.9042 16.1711 10.8621 17.4565 10.8621H18.2324C18.6609 10.8621 19.0083 11.2094 19.0083 11.6379C19.0083 12.0664 18.6609 12.4138 18.2324 12.4138H17.4565C17.0281 12.4138 16.6807 12.7612 16.6807 13.1896V13.9655C16.6807 14.394 17.0281 14.7414 17.4565 14.7414H18.2324C18.6609 14.7414 19.0083 15.0887 19.0083 15.5172C19.0083 15.9457 18.6609 16.2931 18.2324 16.2931Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M14.3537 10.0863C14.3537 10.5148 14.0063 10.8621 13.5778 10.8621H10.5364C10.4464 10.8625 10.3571 10.8467 10.2726 10.8156C10.3114 10.6915 10.3425 10.5906 10.3735 10.5053C10.5287 10.094 10.6994 9.6906 10.8856 9.31042H13.5778C14.0063 9.31042 14.3537 9.65779 14.3537 10.0863Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M18.2324 8.53455C18.2324 8.96304 17.885 9.31041 17.4566 9.31041C16.1727 9.30657 15.1328 8.26672 15.129 6.98282V5.113C15.6216 4.89867 16.1268 4.71471 16.6419 4.56213C16.6667 4.63993 16.6798 4.721 16.6807 4.80265V6.98282C16.6807 7.41132 17.0281 7.75869 17.4566 7.75869C17.885 7.75869 18.2324 8.10605 18.2324 8.53455Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M21.336 14.7415H20.5601C20.1316 14.7415 19.7842 14.3941 19.7842 13.9656C19.7842 13.5371 20.1316 13.1897 20.5601 13.1897H21.336C21.7645 13.1897 22.1118 12.8424 22.1118 12.4139V10.8622C22.1118 10.4337 22.4592 10.0863 22.8877 10.0863C23.3162 10.0863 23.6636 10.4337 23.6636 10.8622V12.4139C23.6636 13.6994 22.6215 14.7415 21.336 14.7415Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M25.2153 10.8621C24.7868 10.8621 24.4394 10.5147 24.4394 10.0862V9.31038C24.4394 8.88188 24.0921 8.53451 23.6636 8.53451H22.1118C21.6833 8.53451 21.336 8.88188 21.336 9.31038V10.0862C21.336 10.5147 20.9886 10.8621 20.5601 10.8621C20.1316 10.8621 19.7842 10.5147 19.7842 10.0862V9.31038C19.7842 8.02489 20.8263 6.98279 22.1118 6.98279H23.6636C24.949 6.98279 25.9911 8.02489 25.9911 9.31038V10.0862C25.9911 10.5147 25.6438 10.8621 25.2153 10.8621Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M22.1119 3.8794V4.65526C22.1119 5.08376 21.7646 5.43112 21.3361 5.43112C20.9076 5.43112 20.5602 5.08376 20.5602 4.65526V3.8794C20.5598 3.82168 20.5676 3.76421 20.5835 3.70871C21.049 3.62337 21.5223 3.54578 21.9955 3.47595C22.0734 3.59594 22.1139 3.73636 22.1119 3.8794Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M25.2149 3.18107V4.65521C25.2149 5.08371 24.8676 5.43107 24.4391 5.43107C24.0106 5.43107 23.6632 5.08371 23.6632 4.65521V3.25866C24.183 3.20435 24.6951 3.1578 25.2072 3.13452C25.2135 3.14918 25.2162 3.16516 25.2149 3.18107Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M29.8705 6.98281C29.8705 7.41131 29.5231 7.75868 29.0946 7.75868H27.5429C27.1144 7.75868 26.767 7.41131 26.767 6.98281V3.17333C26.7658 3.15488 26.7684 3.13638 26.7748 3.11902C27.292 3.13625 27.8076 3.18548 28.3187 3.26643V6.20695H29.0946C29.5231 6.20695 29.8705 6.55432 29.8705 6.98281Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M23.6627 17.0691V18.3104C23.6618 18.3599 23.6566 18.4093 23.6472 18.4579C23.1428 18.3389 22.6286 18.2662 22.111 18.2406V17.0691C22.111 16.6406 22.4583 16.2932 22.8868 16.2932C23.3153 16.2932 23.6627 16.6406 23.6627 17.0691Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M28.319 17.069H27.5431C26.2576 17.069 25.2155 16.0269 25.2155 14.7414V13.9656C25.2155 13.5371 25.5629 13.1897 25.9914 13.1897C26.4199 13.1897 26.7672 13.5371 26.7672 13.9656V14.7414C26.7672 15.1699 27.1146 15.5173 27.5431 15.5173H28.319C28.7475 15.5173 29.0948 15.8646 29.0948 16.2931C29.0948 16.7216 28.7475 17.069 28.319 17.069Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M31.4228 13.9656H30.6469C29.3614 13.9656 28.3193 12.9235 28.3193 11.638C28.3193 10.3525 29.3614 9.31042 30.6469 9.31042H31.4228C31.8513 9.31042 32.1986 9.65779 32.1986 10.0863C32.1986 10.5148 31.8513 10.8621 31.4228 10.8621H30.6469C30.2184 10.8621 29.8711 11.2095 29.8711 11.638C29.8711 12.0665 30.2184 12.4139 30.6469 12.4139H31.4228C31.8513 12.4139 32.1986 12.7612 32.1986 13.1897C32.1986 13.6182 31.8513 13.9656 31.4228 13.9656Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M33.7502 5.43101V7.75859C33.7502 8.18709 33.4028 8.53446 32.9743 8.53446C32.5459 8.53446 32.1985 8.18709 32.1985 7.75859V5.43101C32.1991 5.12617 32.3782 4.84996 32.6562 4.72498C33.0209 4.91118 33.3778 5.11291 33.7425 5.34566C33.7492 5.37357 33.7518 5.40233 33.7502 5.43101Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M36.8535 7.66561V9.31044C36.8496 10.5943 35.8098 11.6342 34.5259 11.638C34.0974 11.638 33.75 11.2907 33.75 10.8622C33.75 10.4337 34.0974 10.0863 34.5259 10.0863C34.9544 10.0863 35.3017 9.73893 35.3017 9.31044V6.99061C35.3023 6.81918 35.3596 6.65276 35.4647 6.51733C35.6431 6.64923 35.8138 6.78113 35.9922 6.92078C36.2947 7.15063 36.5824 7.39941 36.8535 7.66561Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M32.974 17.8449H32.1982C31.7697 17.8449 31.4223 17.4975 31.4223 17.069C31.4223 16.6405 31.7697 16.2931 32.1982 16.2931H32.974C33.4025 16.2931 33.7499 15.9458 33.7499 15.5173V13.9656C33.7499 13.5371 34.0972 13.1897 34.5257 13.1897C34.9542 13.1897 35.3016 13.5371 35.3016 13.9656V15.5173C35.3016 16.8028 34.2595 17.8449 32.974 17.8449Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M35.3011 20.1725C35.3011 20.601 34.9537 20.9483 34.5252 20.9483H32.1976C31.7691 20.9483 31.4218 21.2957 31.4218 21.7242V23.2759C31.4215 23.3799 31.4003 23.4828 31.3597 23.5785C30.8399 23.4023 30.3404 23.1708 29.8701 22.888V21.7242C29.8739 20.4403 30.9137 19.4004 32.1976 19.3966H34.5252C34.731 19.3966 34.9283 19.4783 35.0738 19.6239C35.2193 19.7694 35.3011 19.9667 35.3011 20.1725Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M39.9485 16.2932H37.6287C37.2002 16.2932 36.8528 15.9458 36.8528 15.5173C36.8528 15.0888 37.2002 14.7415 37.6287 14.7415H39.8632C39.9097 15.2458 39.9408 15.7656 39.9485 16.2932Z",
    fill: "#FF5364"
  }), mentalhealth_icon_jsx("path", {
    d: "M39.902 17.8527C39.8586 18.3776 39.7544 18.8957 39.5916 19.3966H37.6287C37.2002 19.3966 36.8528 19.0493 36.8528 18.6208C36.8528 18.1923 37.2002 17.8449 37.6287 17.8449H39.7934C39.8297 17.8434 39.8662 17.846 39.902 17.8527Z",
    fill: "#FF5364"
  })), mentalhealth_icon_jsx("defs", null, mentalhealth_icon_jsx("clipPath", {
    id: "clip0"
  }, mentalhealth_icon_jsx("rect", {
    width: "45",
    height: "45",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/accountant-icon.tsx
var accountant_icon_jsx = external_react_default.a.createElement;

function AccountantIcon({
  color = "#000"
}) {
  return accountant_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, accountant_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, accountant_icon_jsx("path", {
    d: "M39.0826 11.5674V4.39491C39.0826 2.96564 37.9151 1.80786 36.4739 1.80786H3.98699C2.54575 1.80786 1.37823 2.96573 1.37823 4.39491V7.29141V13.9979H38.8655L39.0826 11.5674Z",
    fill: "#F9F3F1"
  }), accountant_icon_jsx("path", {
    d: "M6.72369 1.80737C5.28307 1.80737 4.11529 2.96515 4.11529 4.39478V13.9981H1.3783V4.39478C1.3783 2.96515 2.54608 1.80737 3.98669 1.80737H6.72369Z",
    fill: "#E1D3CE"
  }), accountant_icon_jsx("path", {
    d: "M40.6578 14.2306V37.1237C40.6578 38.8085 39.2804 40.1745 37.5814 40.1745H3.07643C1.37736 40.1745 6.10352e-05 38.8086 6.10352e-05 37.1237V9.7154C6.10352e-05 8.15181 1.27822 6.88428 2.85494 6.88428H8.90934C11.0327 6.88428 12.8184 8.31819 13.3356 10.263C13.4798 10.8056 13.9799 11.1799 14.5457 11.1799H37.5814C39.2804 11.1798 40.6578 12.5456 40.6578 14.2306Z",
    fill: "#FFE177"
  }), accountant_icon_jsx("path", {
    d: "M44.9998 12.7836V39.2409C44.9998 41.4235 43.2307 43.1927 41.048 43.1927H23.459C21.229 43.1927 19.4214 41.386 19.4214 39.156V12.8685C19.4214 10.6394 21.229 8.83179 23.459 8.83179H41.048C43.2307 8.83179 44.9998 10.601 44.9998 12.7836Z",
    fill: "#7A6D79"
  }), accountant_icon_jsx("path", {
    d: "M41.5405 14.9241V18.9331C41.5405 19.4332 41.135 19.8387 40.6349 19.8387H23.7255C23.2253 19.8387 22.8199 19.4332 22.8199 18.9331V14.9241C22.8199 14.424 23.2253 14.0186 23.7255 14.0186H40.6349C41.135 14.0186 41.5405 14.424 41.5405 14.9241Z",
    fill: "#8AC9FE"
  }), accountant_icon_jsx("path", {
    d: "M26.3767 26.8781H23.5878C23.1295 26.8781 22.7581 26.5067 22.7581 26.0484V24.3555C22.7581 23.8973 23.1295 23.5259 23.5878 23.5259H26.3767C26.835 23.5259 27.2064 23.8973 27.2064 24.3555V26.0484C27.2064 26.5067 26.835 26.8781 26.3767 26.8781Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M40.7286 26.8781H37.9396C37.4814 26.8781 37.11 26.5067 37.11 26.0484V24.3555C37.11 23.8973 37.4814 23.5259 37.9396 23.5259H40.7286C41.1868 23.5259 41.5583 23.8973 41.5583 24.3555V26.0484C41.5583 26.5067 41.1868 26.8781 40.7286 26.8781Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M33.5527 26.8781H30.7637C30.3055 26.8781 29.9341 26.5067 29.9341 26.0484V24.3555C29.9341 23.8973 30.3055 23.5259 30.7637 23.5259H33.5527C34.0109 23.5259 34.3823 23.8973 34.3823 24.3555V26.0484C34.3824 26.5067 34.0109 26.8781 33.5527 26.8781Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M26.4676 32.9579H23.6786C23.2204 32.9579 22.8489 32.5865 22.8489 32.1283V30.4354C22.8489 29.9771 23.2204 29.6057 23.6786 29.6057H26.4676C26.9258 29.6057 27.2972 29.9771 27.2972 30.4354V32.1283C27.2972 32.5865 26.9258 32.9579 26.4676 32.9579Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M40.8338 38.9269H38.0448C37.5865 38.9269 37.2151 38.5555 37.2151 38.0973V30.8465C37.2151 30.3883 37.5865 30.0168 38.0448 30.0168H40.8338C41.292 30.0168 41.6634 30.3883 41.6634 30.8465V38.0973C41.6634 38.5555 41.2919 38.9269 40.8338 38.9269Z",
    fill: "#FE646F"
  }), accountant_icon_jsx("path", {
    d: "M33.6966 32.9579H30.9076C30.4493 32.9579 30.0779 32.5865 30.0779 32.1283V30.4354C30.0779 29.9771 30.4493 29.6057 30.9076 29.6057H33.6966C34.1548 29.6057 34.5262 29.9771 34.5262 30.4354V32.1283C34.5262 32.5865 34.1548 32.9579 33.6966 32.9579Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M26.3767 39.0378H23.5878C23.1295 39.0378 22.7581 38.6663 22.7581 38.2081V36.5152C22.7581 36.057 23.1295 35.6855 23.5878 35.6855H26.3767C26.835 35.6855 27.2064 36.057 27.2064 36.5152V38.2081C27.2064 38.6663 26.835 39.0378 26.3767 39.0378Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M33.6057 39.0378H30.8167C30.3585 39.0378 29.9871 38.6663 29.9871 38.2081V36.5152C29.9871 36.057 30.3585 35.6855 30.8167 35.6855H33.6057C34.0639 35.6855 34.4354 36.057 34.4354 36.5152V38.2081C34.4354 38.6663 34.0639 39.0378 33.6057 39.0378Z",
    fill: "#433F43"
  }), accountant_icon_jsx("path", {
    d: "M5.81336 40.1738H3.07636C1.37765 40.1738 0 38.8081 0 37.1238V9.71547C0 8.1517 1.27816 6.88452 2.8547 6.88452H5.5917C4.01516 6.88452 2.737 8.15179 2.737 9.71547V37.1238C2.737 38.8081 4.11465 40.1738 5.81336 40.1738Z",
    fill: "#FFD064"
  }), accountant_icon_jsx("path", {
    d: "M26.1953 43.1927H23.459C21.229 43.1927 19.4214 41.386 19.4214 39.156V12.8685C19.4214 10.6394 21.229 8.83179 23.459 8.83179H26.1953C23.9662 8.83179 22.1587 10.6394 22.1587 12.8685V39.156C22.1587 41.386 23.9662 43.1927 26.1953 43.1927Z",
    fill: "#685E68"
  }), accountant_icon_jsx("path", {
    d: "M26.3922 19.8387H23.7255C23.2253 19.8387 22.8199 19.4332 22.8199 18.9331V14.9241C22.8199 14.424 23.2253 14.0186 23.7255 14.0186H26.3922C25.8813 14.0186 25.4678 14.432 25.4678 14.9429V18.9135C25.4678 19.4243 25.8813 19.8387 26.3922 19.8387Z",
    fill: "#60B7FF"
  })), accountant_icon_jsx("defs", null, accountant_icon_jsx("clipPath", {
    id: "clip0"
  }, accountant_icon_jsx("rect", {
    width: "45",
    height: "45",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/ayruvedu-icon.tsx
var ayruvedu_icon_jsx = external_react_default.a.createElement;

function AryuveduIcon({
  color = "#000"
}) {
  return ayruvedu_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 48 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, ayruvedu_icon_jsx("path", {
    d: "M16.6296 19.4413L26.1391 31.7877C29.5863 27.6082 33.6361 20.3893 38.3759 16.0254C40.1768 14.3674 41.9644 12.8159 43.7251 11.3646L35.6342 3.27368C34.1763 5.06817 32.6074 6.89433 30.9193 8.73545C26.5686 13.4808 20.7756 16.0706 16.6296 19.4413Z",
    fill: "#C17D4F"
  }), ayruvedu_icon_jsx("path", {
    d: "M35.6341 3.27368C35.2157 3.78874 34.7869 4.30664 34.35 4.82657L35.8066 6.28316C38.5088 8.9854 38.4057 13.389 35.5929 15.9758C35.5749 15.9923 35.5569 16.009 35.5388 16.0256C31.4358 19.803 27.8503 25.7186 24.7246 29.9515L26.1389 31.7878C29.5861 27.6083 33.6359 20.3893 38.3757 16.0255C40.1766 14.3675 41.9642 12.816 43.7249 11.3646L35.6341 3.27368Z",
    fill: "#B16E3D"
  }), ayruvedu_icon_jsx("path", {
    d: "M35.2695 2.9058L44.0959 11.7323C44.7607 12.3971 45.8385 12.3971 46.5032 11.7323C47.1679 11.0675 47.1679 9.98975 46.5032 9.32507L37.6767 0.498581C37.0119 -0.166194 35.9341 -0.166194 35.2695 0.498581C34.6047 1.16336 34.6047 2.24111 35.2695 2.9058Z",
    fill: "#C17D4F"
  }), ayruvedu_icon_jsx("path", {
    d: "M27.1911 7.87634C27.5026 7.96327 27.7478 8.20845 27.8347 8.51991C28.9011 12.3414 27.9321 16.6116 24.9267 19.6169C21.7912 22.7524 17.2791 23.6714 13.336 22.375C12.0396 18.432 12.9586 13.9198 16.094 10.7843C19.0994 7.77885 23.3696 6.80987 27.1911 7.87634Z",
    fill: "#B3E59F"
  }), ayruvedu_icon_jsx("path", {
    d: "M27.8363 8.52027C27.7492 8.20817 27.5029 7.96317 27.1908 7.87615C25.7301 7.46886 24.204 7.35989 22.7079 7.54734L22.7297 7.55009C24.0945 7.72322 25.1629 8.81603 25.3319 10.1814C25.7471 13.5366 24.6673 17.0415 22.0914 19.6174C20.2359 21.4729 17.8982 22.5519 15.4817 22.8551C18.8403 23.2741 22.3498 22.196 24.9284 19.6174C27.9337 16.6119 28.9027 12.3418 27.8363 8.52027Z",
    fill: "#95D6A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M13.3361 23.0838C13.1469 23.0838 12.9581 23.0086 12.8184 22.8596C12.5505 22.5739 12.565 22.125 12.8508 21.8571L21.7354 13.5273C22.0213 13.2593 22.47 13.2739 22.7379 13.5597C23.0059 13.8454 22.9914 14.2943 22.7056 14.5621L13.821 22.8919C13.6841 23.0203 13.5098 23.0838 13.3361 23.0838Z",
    fill: "#78C2A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M1.06258 7.87634C0.75112 7.96327 0.505937 8.20845 0.419008 8.51991C-0.647368 12.3414 0.321614 16.6116 3.32696 19.6169C6.46248 22.7524 10.9746 23.6714 14.9177 22.375C16.2141 18.432 15.2951 13.9198 12.1597 10.7843C9.15425 7.77885 4.88407 6.80987 1.06258 7.87634Z",
    fill: "#B3E59F"
  }), ayruvedu_icon_jsx("path", {
    d: "M12.1599 10.7841C9.58071 8.20483 6.07003 7.12689 2.71082 7.54676C5.12822 7.84959 7.46687 8.9279 9.32304 10.7841C12.4586 13.9195 13.3775 18.4317 12.081 22.3748C11.3807 22.605 10.6623 22.764 9.93705 22.8544C11.6039 23.0636 13.3084 22.904 14.9179 22.3748C16.2144 18.4317 15.2955 13.9196 12.1599 10.7841Z",
    fill: "#95D6A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M14.918 23.0845C14.7443 23.0845 14.5699 23.021 14.4331 22.8926L5.54838 14.5628C5.26263 14.2949 5.24812 13.8461 5.51607 13.5603C5.78393 13.2747 6.23271 13.26 6.51865 13.528L15.4033 21.8578C15.6891 22.1258 15.7036 22.5746 15.4357 22.8603C15.296 23.0092 15.1072 23.0845 14.918 23.0845Z",
    fill: "#78C2A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M18.2494 46.999H28.7461C30.3129 46.999 31.583 45.7288 31.583 44.1621V41.8925H15.4125V44.162C15.4125 45.7288 16.6825 46.999 18.2494 46.999Z",
    fill: "#655E67"
  }), ayruvedu_icon_jsx("path", {
    d: "M28.748 41.8925V44.162C28.748 45.7287 27.4779 46.9989 25.9111 46.9989H28.748C30.3149 46.9989 31.5849 45.7287 31.5849 44.162V41.8925H28.748Z",
    fill: "#544F56"
  }), ayruvedu_icon_jsx("path", {
    d: "M18.6752 43.3106H28.3208C37.4605 43.3106 44.8697 35.9014 44.8697 26.7618V23.0737H2.12634V26.7618C2.12634 35.9014 9.53553 43.3106 18.6752 43.3106Z",
    fill: "#C7C2C9"
  }), ayruvedu_icon_jsx("path", {
    d: "M42.0347 23.0737V26.7618C42.0347 35.9014 34.6255 43.3106 25.4858 43.3106H28.3227C37.4624 43.3106 44.8716 35.9014 44.8716 26.7618V23.0737H42.0347Z",
    fill: "#A199A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M18.6756 40.2379C11.8499 40.2379 6.09717 35.1311 5.29406 28.359C5.24798 27.97 5.52593 27.6173 5.91495 27.5712C6.30343 27.525 6.65656 27.803 6.70273 28.192C7.42112 34.2507 12.5683 38.8195 18.6756 38.8195C19.0673 38.8195 19.3848 39.137 19.3848 39.5287C19.3848 39.9204 19.0673 40.2379 18.6756 40.2379Z",
    fill: "#A199A4"
  }), ayruvedu_icon_jsx("path", {
    d: "M2.17498 24.4918H44.8237C46.025 24.4918 46.9987 23.518 46.9987 22.3168C46.9987 21.1156 46.025 20.1418 44.8237 20.1418H2.17498C0.973755 20.1418 0 21.1156 0 22.3168C0 23.518 0.973755 24.4918 2.17498 24.4918Z",
    fill: "#655E67"
  }), ayruvedu_icon_jsx("path", {
    d: "M44.822 20.1418H41.985C43.1862 20.1418 44.16 21.1156 44.16 22.3168C44.16 23.518 43.1862 24.4918 41.985 24.4918H44.8219C46.0231 24.4918 46.9969 23.518 46.9969 22.3168C46.997 21.1156 46.0232 20.1418 44.822 20.1418Z",
    fill: "#544F56"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/career-icon.tsx
var career_icon_jsx = external_react_default.a.createElement;

function CareerIcon({
  color = "#000"
}) {
  return career_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 48 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, career_icon_jsx("path", {
    d: "M44.6839 29.5481H38.3488C37.3137 29.5481 36.475 30.3871 36.475 31.4219V39.002C36.475 37.9672 35.636 37.1282 34.6012 37.1282H28.2658C27.2306 37.1282 26.392 37.9668 26.392 39.002V43.9994C26.392 42.9647 25.5529 42.1256 24.5182 42.1256H18.1827C17.1475 42.1256 16.3089 42.9647 16.3089 43.9994V48.6516C16.3089 47.6168 15.4699 46.7778 14.4347 46.7778H8.09962C7.06487 46.7778 6.22583 47.6164 6.22583 48.6516V52.2087H46.5581V31.4219C46.5581 30.3871 45.7191 29.5481 44.6839 29.5481Z",
    fill: "#A7C7D3"
  }), career_icon_jsx("path", {
    d: "M39.2118 30.3394C38.7743 30.3394 38.42 29.9852 38.42 29.548V0.791328C38.42 0.354218 38.7743 0 39.2118 0C39.6489 0 40.0031 0.354218 40.0031 0.791328V29.548C40.0031 29.9852 39.6485 30.3394 39.2118 30.3394Z",
    fill: "#A7C7D3"
  }), career_icon_jsx("path", {
    d: "M16.3089 52.2088H6.22583V48.6516C6.22583 47.6169 7.06487 46.7778 8.09962 46.7778H14.4351C15.4699 46.7778 16.3089 47.6165 16.3089 48.6516V52.2088Z",
    fill: "#A7C7D3"
  }), career_icon_jsx("path", {
    d: "M26.3918 52.2087H16.3087V43.9994C16.3087 42.9647 17.1478 42.1256 18.1825 42.1256H24.518C25.5527 42.1256 26.3918 42.9647 26.3918 43.9994V52.2087Z",
    fill: "#89B4C9"
  }), career_icon_jsx("path", {
    d: "M36.4746 52.2087H26.3915V39.002C26.3915 37.9672 27.2301 37.1282 28.2653 37.1282H34.6008C35.6355 37.1282 36.4746 37.9668 36.4746 39.002V52.2087Z",
    fill: "#6C96B3"
  }), career_icon_jsx("path", {
    d: "M46.5584 52.2087H36.4753V31.4219C36.4753 30.3871 37.314 29.5481 38.3491 29.5481H44.6842C45.7194 29.5481 46.5584 30.3871 46.5584 31.4219V52.2087Z",
    fill: "#618AAA"
  }), career_icon_jsx("path", {
    d: "M49.3527 52.9999H3.58625C3.14914 52.9999 2.79492 52.6457 2.79492 52.2086C2.79492 51.7715 3.14914 51.4172 3.58625 51.4172H49.3527C49.7898 51.4172 50.144 51.7715 50.144 52.2086C50.144 52.6457 49.7898 52.9999 49.3527 52.9999Z",
    fill: "#2F5066"
  }), career_icon_jsx("path", {
    d: "M39.212 8.31524H49.3537C49.6679 8.31524 49.8147 7.92625 49.579 7.71881L46.9446 5.3986C46.7901 5.26314 46.7901 5.02296 46.9446 4.88709L49.579 2.56729C49.8147 2.35945 49.6679 1.97046 49.3537 1.97046H39.212V8.31524Z",
    fill: "#FDB659"
  }), career_icon_jsx("path", {
    d: "M40.0195 11.2844L29.0331 17.2515C28.053 17.7841 27.7849 18.7198 27.4428 19.9251L25.2581 27.652L28.1436 28.6431L30.6122 25.4576L32.6902 19.1751L38.2189 15.8157C39.764 14.8771 40.4987 13.0276 40.0195 11.2844Z",
    fill: "#83D9FF"
  }), career_icon_jsx("path", {
    d: "M40.0195 11.2844L38.7519 11.973C38.5384 13.064 37.8793 14.0494 36.8825 14.6552L31.8446 17.7161C31.5276 17.9086 31.2895 18.2082 31.1726 18.5604L30.4532 20.7355C29.7056 22.9958 28.0073 24.8167 25.8043 25.7196L25.2581 27.652L30.6122 25.458L32.6902 19.1755L38.2189 15.8157C39.764 14.8771 40.4987 13.0276 40.0195 11.2844Z",
    fill: "#5FC9ED"
  }), career_icon_jsx("path", {
    d: "M30.6122 25.4575L33.7759 29.197C34.3003 29.8913 34.7564 30.3794 34.6618 31.1432L33.9218 37.1249H31.991L31.4864 31.9826C31.4557 31.6713 31.2587 31.4016 30.9716 31.2778L25.2581 27.652L30.6122 25.4575Z",
    fill: "#38627C"
  }), career_icon_jsx("path", {
    d: "M25.258 27.652L24.9495 33.3215C24.9293 33.7917 24.9952 34.1096 24.8112 34.4593L21.168 42.1256H23.216L28.6939 34.8479C29.0141 34.4751 29.0513 33.9688 29.1593 33.503L30.6117 25.4575L25.258 27.652Z",
    fill: "#4F7693"
  }), career_icon_jsx("path", {
    d: "M30.2196 12.5084L31.1181 14.2625C31.5402 15.0866 31.2143 16.0975 30.3898 16.5197L29.6955 16.8751C28.8711 17.2972 27.8606 16.9713 27.4384 16.1468L26.5399 14.3927C26.1178 13.5682 26.4437 12.5578 27.2682 12.1356L27.9625 11.7802C28.7865 11.358 29.797 11.6839 30.2196 12.5084Z",
    fill: "#FECBAA"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/dermatologist-icon.tsx
var dermatologist_icon_jsx = external_react_default.a.createElement;

function DermatologistIcon({
  color = "#000"
}) {
  return dermatologist_icon_jsx("svg", {
    width: "47",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, dermatologist_icon_jsx("path", {
    d: "M28.6845 17.839L6.79749 17.6145L6.22339 9.29204L6.14922 7.28944C6.02525 3.9615 8.6609 1.19119 11.9767 1.13417C12.0459 1.13301 12.1152 1.13946 12.1833 1.1517L22.0019 2.91734L28.8068 12.5045L28.6845 17.839Z",
    fill: "black"
  }), dermatologist_icon_jsx("path", {
    d: "M8.32631 20.2077C6.89164 20.2077 5.72852 19.0446 5.72852 17.6099C5.72852 16.1752 6.89155 15.0121 8.32631 15.0121H12.4564V20.2076H8.32631V20.2077Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M26.6747 20.2077C28.1094 20.2077 29.2725 19.0446 29.2725 17.6099C29.2725 16.1752 28.1095 15.0121 26.6747 15.0121H23.0151V20.1639L26.6747 20.2077Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M18.3802 2.26592L12.1974 1.15413C12.1205 1.14026 12.0421 1.13294 11.9638 1.13448C11.5395 1.14267 11.1272 1.19478 10.7294 1.28744C10.2899 2.26563 10.0665 3.30748 10.0665 4.37948V4.50567C10.0665 7.11011 11.5196 9.44156 13.8587 10.59L13.9418 10.6309L18.3801 12.1433L18.3802 2.26592Z",
    fill: "black"
  }), dermatologist_icon_jsx("path", {
    d: "M21.2218 1.1333C25.619 1.1333 29.1368 4.78402 28.9731 9.17838L28.7681 14.2167L14.4954 9.293C12.7278 8.42511 11.5112 6.60746 11.5112 4.50564V4.37946C11.5112 3.50771 11.6981 2.65716 12.0478 1.87982C12.2807 1.36197 12.5858 0.876591 12.9568 0.439371C13.2674 0.0731425 13.816 0.0258469 14.1889 0.328693L14.9068 0.91175C15.0831 1.05527 15.3027 1.1333 15.53 1.1333H21.2218Z",
    fill: "black"
  }), dermatologist_icon_jsx("path", {
    d: "M22.4654 32.6414C22.3883 32.6096 22.3382 32.5354 22.3382 32.4526V24.2668H13.0323V32.4526C13.0323 32.5354 12.9822 32.6096 12.9051 32.6414L11.153 36.0329L17.55 40.4227L24.18 34.12L22.4654 32.6414Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M15.005 28.1724V28.3817H13.0323V32.4526C13.0323 32.5354 12.9822 32.6096 12.9051 32.6414L11.153 36.0329L14.0236 38.0028L15.3209 35.4919C15.3979 35.4601 15.448 35.386 15.448 35.3031V32.2934C15.448 31.9353 15.7738 31.6704 16.126 31.7347C16.6074 31.8224 17.0961 31.8674 17.5893 31.8674C18.5316 31.8674 19.4597 31.7076 20.3478 31.3925L20.4187 31.3673C21.0953 31.1272 21.737 30.8237 22.3381 30.4652V28.1724H15.005Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M24.5462 37.5551L23.5553 33.0835L22.4652 32.6415L18.1765 36.2622C17.8586 36.5291 17.3934 36.5243 17.0813 36.2517L12.9049 32.6552L11.9002 33.0645L8.59937 37.8491L15.0296 46.7044L17.6535 47.7115H17.6689L17.6705 47.7073C17.9655 47.6359 22.123 46.6309 22.1762 46.6309C22.2313 46.6309 24.5462 37.5551 24.5462 37.5551Z",
    fill: "#C8EFFE"
  }), dermatologist_icon_jsx("path", {
    d: "M11.8393 36.3407L15.4514 34.8236L12.9045 32.6414L11.8998 33.0645L9.7594 36.3407H11.8393Z",
    fill: "#99E6FC"
  }), dermatologist_icon_jsx("path", {
    d: "M17.5495 47.781H0.957569C0.428743 47.781 0 47.3523 0 46.8234V45.185C0 40.7339 2.69325 36.7258 6.81404 35.0449L11.8999 33.0645L17.5495 47.781Z",
    fill: "#F9F3F1"
  }), dermatologist_icon_jsx("path", {
    d: "M3.70341 46.8941C3.70341 42.443 6.39667 38.4349 10.5175 36.754L12.979 35.875L11.9 33.0645L6.81414 35.0449C2.69325 36.7258 0 40.7339 0 45.185V46.8234C0 47.3523 0.428743 47.781 0.957569 47.781H3.70341V46.8941Z",
    fill: "#F3EAE6"
  }), dermatologist_icon_jsx("path", {
    d: "M35.0076 45.1155V47.3583C35.0076 47.5534 34.8495 47.7114 34.6545 47.7114H17.6691L23.5555 33.0835L28.1936 34.9753C32.3143 36.6562 35.0076 40.6643 35.0076 45.1155Z",
    fill: "#F9F3F1"
  }), dermatologist_icon_jsx("path", {
    d: "M26.1378 15.0327L23.613 15.0116V9.89929H11.8793L11.1566 13.882V23.4635L15.0087 28.381L18.1943 29.8773L21.2953 29.3872C24.2568 27.7578 26.1541 24.6257 26.1541 21.1664L26.1378 15.0327Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M14.7648 13.5922C15.1411 13.5922 15.4847 13.7938 15.6811 14.1147C16.8281 15.9888 18.8937 17.2423 21.2473 17.2423C23.1912 17.2423 24.9381 16.3867 26.1338 15.0333L26.1203 9.8999H12.9791H12.4564H9.04468V21.196C9.04468 23.1754 9.66598 25.048 10.7525 26.594C11.84 28.14 13.3928 29.3576 15.2557 30.0271C16.7343 30.5588 18.3507 30.5617 19.8321 30.0367L19.9034 30.0116C20.3882 29.8396 20.8551 29.6296 21.2955 29.3873C20.5834 29.3665 19.8705 29.2355 19.1901 28.9908C17.3272 28.3213 15.7744 27.1038 14.6869 25.5578C13.6004 24.0117 12.9791 22.1392 12.9791 20.1597V14.6572C12.9791 14.069 13.4559 13.5922 14.0441 13.5922H14.7648Z",
    fill: "#FFE1B2"
  }), dermatologist_icon_jsx("path", {
    d: "M29.1648 12.1473C29.7194 12.1473 30.169 11.6976 30.169 11.143V10.2968C30.169 9.74213 29.7194 9.29248 29.1648 9.29248H6.19813C5.64349 9.29248 5.19385 9.74213 5.19385 10.2968V11.143C5.19385 11.6976 5.64349 12.1473 6.19813 12.1473H29.1648Z",
    fill: "#EFEDEF"
  }), dermatologist_icon_jsx("path", {
    d: "M21.2471 15.7974C24.0514 15.7974 26.3247 13.5241 26.3247 10.7198C26.3247 7.91553 24.0514 5.64221 21.2471 5.64221C18.4429 5.64221 16.1696 7.91553 16.1696 10.7198C16.1696 13.5241 18.4429 15.7974 21.2471 15.7974Z",
    fill: "#C9BFC8"
  }), dermatologist_icon_jsx("path", {
    d: "M21.2472 12.9077C20.0409 12.9077 19.0594 11.9262 19.0594 10.72C19.0594 9.51368 20.0408 8.53223 21.2472 8.53223C22.4536 8.53223 23.435 9.51368 23.435 10.72C23.435 11.9262 22.4536 12.9077 21.2472 12.9077Z",
    fill: "#FEE97D"
  }), dermatologist_icon_jsx("path", {
    d: "M36.409 24.6866C30.0073 24.6866 24.8182 29.8766 24.8182 36.2775C24.8182 41.0885 27.7491 45.215 31.9227 46.9687L32.7639 46.1659L40.9393 46.1056L41.5369 46.6752C45.3661 44.7828 47.9998 40.838 47.9998 36.2775C47.9998 29.8766 42.8108 24.6866 36.409 24.6866Z",
    fill: "#C8EFFE"
  }), dermatologist_icon_jsx("path", {
    d: "M36.3705 24.6108C29.9687 24.6108 24.7797 29.8008 24.7797 36.2016C24.7797 41.0128 27.7108 45.1384 31.8846 46.8919L32.7079 45.7237C30.354 43.602 28.8736 40.53 28.8736 37.1114C28.8736 30.7106 34.0626 25.5206 40.4644 25.5206C40.6103 25.5206 40.7591 25.5229 40.9037 25.5282C39.5122 24.9368 37.9777 24.6108 36.3705 24.6108Z",
    fill: "#99E6FC"
  }), dermatologist_icon_jsx("path", {
    d: "M10.9649 46.1771H5.01409C4.73629 46.1771 4.51099 45.9519 4.51099 45.674V43.4549C4.51099 43.1771 4.73619 42.9518 5.01409 42.9518H10.9648C11.2426 42.9518 11.4679 43.177 11.4679 43.4549V45.674C11.468 45.9519 11.2427 46.1771 10.9649 46.1771Z",
    fill: "#F3EAE6"
  }), dermatologist_icon_jsx("path", {
    d: "M40.3979 31.9218C40.3979 31.1406 41.0317 30.5068 41.812 30.5068C42.2021 30.5068 42.5566 30.6657 42.8128 30.921C43.069 31.1772 43.227 31.5307 43.227 31.9218V38.6231C43.227 39.6413 42.9072 40.6354 42.3138 41.4638L41.5365 42.5484L41.5371 46.6751C39.9853 47.4485 38.2604 47.8703 36.4081 47.8703C34.708 47.8703 33.3408 47.5492 31.8863 46.8913L31.9126 43.031L31.4714 42.6052C30.2693 41.4445 29.5902 39.8436 29.5902 38.1723V35.4617C29.5902 35.0716 29.7482 34.7172 30.0044 34.4619C30.2597 34.2057 30.6141 34.0477 31.0043 34.0477C31.272 34.0477 31.5235 34.1228 31.7373 34.2519L31.9126 34.2509V30.7447C31.9126 30.3536 32.0706 30.0001 32.3268 29.7439C32.583 29.4886 32.9356 29.3297 33.3267 29.3297C34.1079 29.3297 34.7417 29.9635 34.7417 30.7447V29.5503C34.7417 29.1592 34.8997 28.8057 35.1559 28.5495C35.4111 28.2942 35.7656 28.1353 36.1557 28.1353C36.9369 28.1353 37.5698 28.7691 37.5698 29.5503V31.2928C37.5698 30.9027 37.7278 30.5492 37.984 30.2929C38.2393 30.0377 38.5937 29.8787 38.9838 29.8787C39.765 29.8787 40.3979 30.5126 40.3979 31.2928V31.9218Z",
    fill: "#FFCEBF"
  }), dermatologist_icon_jsx("path", {
    d: "M37.9429 46.7271C36.9633 46.7271 36.1034 46.6456 35.2722 46.4507C34.2042 46.2001 33.4486 45.2476 33.4482 44.1505L33.4476 42.5008C33.4475 42.109 33.2882 41.7341 33.0063 41.462C31.804 40.3018 31.1251 38.7028 31.1251 37.0322V34.3185C31.1251 34.2287 31.1351 34.1405 31.1511 34.0553C31.1029 34.0503 31.0537 34.0477 31.0043 34.0477C30.6141 34.0477 30.2597 34.2057 30.0044 34.4619C29.7482 34.7172 29.5902 35.0717 29.5902 35.4618V38.1724C29.5902 39.8436 30.2693 41.4445 31.4714 42.6053L31.9126 43.031L31.8863 46.8913C33.3408 47.5492 34.708 47.8704 36.4081 47.8704C38.2604 47.8704 39.9853 47.4486 41.5371 46.6751L41.537 46.1614C40.4078 46.5309 39.205 46.7271 37.9429 46.7271Z",
    fill: "#FFB09E"
  }), dermatologist_icon_jsx("path", {
    d: "M43.2269 37.7629V38.6231C43.2269 39.6413 42.9071 40.6354 42.3137 41.4637L41.5364 42.5484V43.7091H37.8567C36.9176 43.7091 36.1556 42.9472 36.1556 42.007V41.8596C36.1556 41.3896 36.3464 40.9638 36.6536 40.6565C36.9619 40.3483 37.3876 40.1576 37.8567 40.1576V39.3783C37.8567 38.4863 38.5801 37.7629 39.4721 37.7629H43.2269Z",
    fill: "#FE99A0"
  }), dermatologist_icon_jsx("path", {
    d: "M33.3259 41.0419V41.6169C33.3259 42.3981 32.6931 43.031 31.9119 43.031L31.4707 42.6052C30.6269 41.7913 30.0413 40.7596 29.7677 39.6394L29.8207 39.6268H31.9119C32.6931 39.6268 33.3259 40.2607 33.3259 41.0419Z",
    fill: "#FE99A0"
  }), dermatologist_icon_jsx("path", {
    d: "M36.1391 30.5643C36.1391 29.8634 36.3337 29.1796 36.6964 28.6073L36.8669 28.3267C36.6546 28.1994 36.4077 28.1354 36.1423 28.1354C35.7513 28.1354 35.3987 28.2943 35.1425 28.5496C34.8863 28.8058 34.7283 29.1593 34.7563 29.5475L34.7114 36.3055C35.4995 36.3071 36.1392 35.6687 36.1392 34.8806V30.5643H36.1391Z",
    fill: "#FFB09E"
  }), dermatologist_icon_jsx("path", {
    d: "M40.3772 36.3082C41.1662 36.3082 41.8058 35.6686 41.8058 34.8796V32.2567C41.8058 31.6604 41.9499 31.0785 42.2155 30.5652C42.0877 30.5272 41.953 30.5061 41.8132 30.5061C41.0562 30.5061 40.4388 31.1032 40.4026 31.8522L40.3772 36.3082Z",
    fill: "#FFB09E"
  }), dermatologist_icon_jsx("path", {
    d: "M37.5411 36.3083C38.3317 36.3083 38.9725 35.6675 38.9725 34.8769V31.7724C38.9725 31.1277 39.1391 30.4987 39.4476 29.9563C39.3029 29.9063 39.1483 29.8779 38.9867 29.8779C38.5966 29.8779 38.2421 30.0369 37.9868 30.2921C37.7856 30.4934 37.6411 30.766 37.5805 31.0716C37.5734 31.1074 37.5706 31.144 37.5704 31.1805L37.5411 36.3083Z",
    fill: "#FFB09E"
  }), dermatologist_icon_jsx("path", {
    d: "M33.332 31.2096C33.332 30.5683 33.465 29.9412 33.7127 29.3828C33.5904 29.3484 33.4618 29.3286 33.3284 29.3286C32.9373 29.3286 32.5848 29.4875 32.3285 29.7428C32.0723 29.999 31.9143 30.3525 31.9143 30.7436L31.9062 36.3072C32.6936 36.3072 33.3319 35.6689 33.3319 34.8816V31.2096H33.332Z",
    fill: "#FFB09E"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/diet-icon.tsx
var diet_icon_jsx = external_react_default.a.createElement;

function DietIcon({
  color = "#000"
}) {
  return diet_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, diet_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, diet_icon_jsx("path", {
    d: "M24.4375 3.84399H31.479C32.474 3.84399 33.2805 4.65061 33.2805 5.64554V44.1802C33.2805 45.1753 32.4739 45.9818 31.479 45.9818H2.76663C1.77161 45.9818 0.965088 45.1752 0.965088 44.1802V5.64563C0.965088 4.65061 1.7717 3.84408 2.76663 3.84408H9.80814",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M31.4801 3.84399H29.8107C30.8056 3.84399 31.6122 4.65061 31.6122 5.64554V44.1802C31.6122 45.1753 30.8056 45.9818 29.8107 45.9818H31.4801C32.4751 45.9818 33.2816 45.1752 33.2816 44.1802V5.64563C33.2816 4.65061 32.475 3.84399 31.4801 3.84399Z",
    fill: "#D66E41"
  }), diet_icon_jsx("path", {
    d: "M29.9844 7.64362V42.182C29.9844 42.4381 29.7767 42.6457 29.5207 42.6457H4.72729C4.47115 42.6457 4.26361 42.438 4.26361 42.182V7.64362C4.26361 7.38747 4.47124 7.17993 4.72729 7.17993H29.5206C29.7767 7.17993 29.9844 7.38756 29.9844 7.64362Z",
    fill: "#F4E9D3"
  }), diet_icon_jsx("path", {
    d: "M28.3143 7.17993V42.6458H29.5199C29.7759 42.6458 29.9836 42.4381 29.9836 42.1821V7.64362C29.9836 7.38747 29.7759 7.17993 29.5199 7.17993H28.3143Z",
    fill: "#E5D6BE"
  }), diet_icon_jsx("path", {
    d: "M23.2516 2.66045H20.254V0.941832C20.254 0.421637 19.8323 0 19.3122 0H14.9351C14.415 0 13.9934 0.421637 13.9934 0.941832V2.66045H10.9958C10.3404 2.66045 9.80902 3.19179 9.80902 3.8472V7.11347C9.80902 7.76888 10.3404 8.30021 10.9958 8.30021H14.9352H19.3122H23.2516C23.907 8.30021 24.4384 7.76888 24.4384 7.11347V3.84711C24.4384 3.1917 23.907 2.66045 23.2516 2.66045Z",
    fill: "#FFE55A"
  }), diet_icon_jsx("path", {
    d: "M18.5844 0.941832V2.66045H20.2538V0.941832C20.2538 0.421637 19.8322 0 19.312 0H17.6426C18.1628 0 18.5844 0.421637 18.5844 0.941832Z",
    fill: "#FFD91D"
  }), diet_icon_jsx("path", {
    d: "M23.2515 2.6604H21.5821C22.2375 2.6604 22.7688 3.19174 22.7688 3.84715V7.11342C22.7688 7.76883 22.2375 8.30016 21.5821 8.30016H23.2515C23.9069 8.30016 24.4382 7.76883 24.4382 7.11342V3.84706C24.4382 3.19165 23.9069 2.6604 23.2515 2.6604Z",
    fill: "#FFD91D"
  }), diet_icon_jsx("path", {
    d: "M26.4688 13.2814H14.7559C14.371 13.2814 14.059 13.5934 14.059 13.9783C14.059 14.3632 14.371 14.6752 14.7559 14.6752H26.4688C26.8537 14.6752 27.1657 14.3632 27.1657 13.9783C27.1657 13.5934 26.8537 13.2814 26.4688 13.2814Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M14.7559 17.1759H21.3391C21.7241 17.1759 22.0361 16.8639 22.0361 16.479C22.0361 16.0941 21.724 15.7821 21.3391 15.7821H14.7559C14.371 15.7821 14.059 16.0941 14.059 16.479C14.059 16.8639 14.371 17.1759 14.7559 17.1759Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M11.247 12.997L8.6817 15.6274L7.57194 14.5482C7.29612 14.2798 6.85481 14.2861 6.58645 14.562C6.31808 14.8379 6.32428 15.2792 6.60028 15.5475L8.20894 17.1118C8.48089 17.3764 8.92895 17.3702 9.19371 17.0988L12.2448 13.9701C12.5136 13.6945 12.5081 13.2533 12.2325 12.9846C11.9567 12.7158 11.5156 12.7215 11.247 12.997Z",
    fill: "#98DB7C"
  }), diet_icon_jsx("path", {
    d: "M26.4675 20.3794H14.7547C14.3697 20.3794 14.0577 20.6914 14.0577 21.0763C14.0577 21.4612 14.3697 21.7732 14.7547 21.7732H26.4675C26.8524 21.7732 27.1644 21.4612 27.1644 21.0763C27.1644 20.6914 26.8524 20.3794 26.4675 20.3794Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M23.0833 28.8596H14.7713C14.3871 28.8596 14.0757 28.5482 14.0757 28.1641C14.0757 27.7799 14.3871 27.4685 14.7713 27.4685H23.0833C23.4675 27.4685 23.7789 27.7799 23.7789 28.1641C23.7789 28.5482 23.4676 28.8596 23.0833 28.8596Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M22.4006 31.3555H14.7705C14.3863 31.3555 14.075 31.0441 14.075 30.6599C14.075 30.2758 14.3863 29.9644 14.7705 29.9644H22.4006C22.7848 29.9644 23.0962 30.2758 23.0962 30.6599C23.0962 31.0441 22.7848 31.3555 22.4006 31.3555Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M22.8024 35.9439H14.7713C14.3871 35.9439 14.0757 35.6325 14.0757 35.2483C14.0757 34.8641 14.3871 34.5527 14.7713 34.5527H22.8024C23.1865 34.5527 23.4979 34.8641 23.4979 35.2483C23.4979 35.6325 23.1866 35.9439 22.8024 35.9439Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M23.4736 38.4396H14.7713C14.3871 38.4396 14.0757 38.1282 14.0757 37.744C14.0757 37.3599 14.3871 37.0485 14.7713 37.0485H23.4736C23.8578 37.0485 24.1692 37.3599 24.1692 37.744C24.1692 38.1282 23.8578 38.4396 23.4736 38.4396Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M21.3379 22.8801H14.7547C14.3697 22.8801 14.0577 23.1922 14.0577 23.577C14.0577 23.9619 14.3697 24.274 14.7547 24.274H21.3379C21.7229 24.274 22.0348 23.9619 22.0348 23.577C22.0349 23.1922 21.7229 22.8801 21.3379 22.8801Z",
    fill: "#E8834D"
  }), diet_icon_jsx("path", {
    d: "M11.247 20.0948L8.6817 22.7252L7.57194 21.6461C7.29594 21.3776 6.85481 21.384 6.58645 21.6599C6.31808 21.9358 6.32428 22.3771 6.60028 22.6454L8.20894 24.2098C8.48089 24.4744 8.92895 24.4682 9.19371 24.1967L12.2448 21.068C12.5136 20.7925 12.5081 20.3513 12.2325 20.0825C11.9569 19.8136 11.5156 19.8192 11.247 20.0948Z",
    fill: "#98DB7C"
  }), diet_icon_jsx("path", {
    d: "M11.247 27.1928L8.6817 29.8232L7.57194 28.7441C7.29612 28.4757 6.85481 28.482 6.58645 28.7579C6.31808 29.0338 6.32428 29.4751 6.60028 29.7434L8.20894 31.3077C8.48089 31.5723 8.92895 31.5661 9.19371 31.2947L12.2448 28.166C12.5136 27.8905 12.5081 27.4493 12.2325 27.1805C11.9569 26.9116 11.5156 26.9172 11.247 27.1928Z",
    fill: "#98DB7C"
  }), diet_icon_jsx("path", {
    d: "M11.247 34.2904L8.6817 36.9209L7.57194 35.8417C7.29612 35.5733 6.85481 35.5796 6.58645 35.8554C6.31808 36.1314 6.32428 36.5727 6.60028 36.841L8.20894 38.4054C8.48089 38.67 8.92895 38.6638 9.19371 38.3924L12.2448 35.2637C12.5136 34.9882 12.5081 34.547 12.2325 34.2782C11.9569 34.0092 11.5156 34.0149 11.247 34.2904Z",
    fill: "#98DB7C"
  }), diet_icon_jsx("path", {
    d: "M33.2811 23.0743C39.4748 23.0743 45.4129 25.6884 45.0149 32.0835C44.3918 42.0936 37.4347 49.0006 33.2811 44.6963C29.1275 49.0006 22.1704 42.0936 21.5473 32.0835C21.1493 25.6885 27.0875 23.0743 33.2811 23.0743Z",
    fill: "#FF4755"
  }), diet_icon_jsx("path", {
    d: "M33.2808 23.0743C33.0019 23.0743 32.7235 23.0798 32.4462 23.0905C38.3271 23.3176 43.7253 25.9765 43.3453 32.0834C42.8873 39.443 39.0054 45.1248 35.3311 45.9074C39.3981 46.834 44.486 40.5764 45.0147 32.0834C45.4126 25.6885 39.4745 23.0743 33.2808 23.0743Z",
    fill: "#FC2B3A"
  }), diet_icon_jsx("path", {
    d: "M38.8513 23.8372C36.8724 25.8161 33.2428 25.3951 33.2428 25.3951C33.2428 25.3951 32.8218 21.7656 34.8007 19.7866C36.3729 18.2144 38.9869 18.157 39.9951 18.1998C40.2357 18.21 40.4278 18.4022 40.4381 18.6428C40.481 19.651 40.4236 22.265 38.8513 23.8372Z",
    fill: "#98DB7C"
  }), diet_icon_jsx("path", {
    d: "M39.9929 18.1997C39.8397 18.1932 39.6495 18.1891 39.4317 18.1922C39.4232 19.3974 39.1969 21.5377 37.8365 22.8982C36.5039 24.2308 34.4228 24.4751 33.2055 24.4924C33.2017 25.0404 33.2428 25.395 33.2428 25.395C33.2428 25.395 36.8723 25.816 38.8513 23.8371C40.4235 22.2649 40.4809 19.6509 40.4381 18.6428C40.4279 18.4015 40.2343 18.2098 39.9929 18.1997Z",
    fill: "#82D361"
  }), diet_icon_jsx("path", {
    d: "M33.2823 27.9752C33.2509 27.9752 33.2192 27.9731 33.1874 27.9687C32.8073 27.9169 32.5411 27.5671 32.592 27.1872C32.5949 27.1643 32.7482 25.9197 32.3413 24.378C31.8046 22.3451 30.588 20.7653 28.725 19.6828C28.3928 19.4898 28.28 19.0641 28.4731 18.7319C28.666 18.3997 29.0916 18.2869 29.424 18.4799C32.1808 20.0818 33.272 22.4106 33.7019 24.0823C34.1655 25.8848 33.9789 27.3135 33.9708 27.3735C33.923 27.7223 33.6246 27.9752 33.2823 27.9752Z",
    fill: "#62C136"
  }), diet_icon_jsx("path", {
    d: "M33.2805 27.9751C31.1244 27.9751 29.6799 26.853 29.6196 26.8052C29.3181 26.567 29.267 26.1295 29.5052 25.8282C29.7433 25.5268 30.1807 25.4757 30.4822 25.7138C30.4908 25.7205 31.6251 26.584 33.2805 26.584C34.936 26.584 36.0703 25.7205 36.0816 25.7117C36.3843 25.4773 36.8211 25.5306 37.0566 25.832C37.2926 26.1334 37.2418 26.5678 36.9415 26.8052C36.8812 26.8531 35.4367 27.9751 33.2805 27.9751Z",
    fill: "#E52940"
  })), diet_icon_jsx("defs", null, diet_icon_jsx("clipPath", {
    id: "clip0"
  }, diet_icon_jsx("rect", {
    width: "46",
    height: "46",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/doctor-icon.tsx
var doctor_icon_jsx = external_react_default.a.createElement;

function DoctorIcon({
  color = "#000"
}) {
  return doctor_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, doctor_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, doctor_icon_jsx("path", {
    d: "M30.1165 1.42151L24.9706 29.3567L28.6463 30.0918C36.4264 24.3945 39.7651 1.42151 30.1165 1.42151Z",
    fill: "#80362D"
  }), doctor_icon_jsx("path", {
    d: "M30.1164 1.42149C28.8298 0.640362 22.04 -1.34341 16.8839 1.42149C10.5433 4.8215 4.99913 16.9818 13.9433 29.3567C13.9561 29.3742 20.5596 28.6216 20.5596 28.6216L30.1164 1.42149Z",
    fill: "#80362D"
  }), doctor_icon_jsx("path", {
    d: "M28.6858 25.928H28.6458V24.2109H18.354V25.9262C18.354 27.6067 18.3469 29.4333 16.8837 30.5382V47.0002H23.4999C23.4999 47.0002 26.9644 47.0002 30.1162 47.0002V30.5125C28.6903 29.4048 28.6858 27.5941 28.6858 25.928Z",
    fill: "#FFD7A3"
  }), doctor_icon_jsx("path", {
    d: "M23.4999 39.6487C21.9191 39.6487 20.4275 39.4391 19.0891 39.0752V47.0001H29.381V38.5901C27.7133 39.2556 25.6884 39.6487 23.4999 39.6487Z",
    fill: "#545465"
  }), doctor_icon_jsx("path", {
    d: "M29.3812 33.7674C29.6494 33.8406 29.891 33.8796 30.1163 33.8986V30.5122C28.6906 29.4045 28.686 27.5937 28.686 25.9276L28.685 25.8849V24.1678L20.5595 24.2105L18.3541 24.9456C19.8244 26.5998 24.3272 32.389 29.3812 33.7674Z",
    fill: "#FDC88E"
  }), doctor_icon_jsx("path", {
    d: "M33.7921 14.6538C33.7921 20.5409 27.9372 27.8863 23.5002 27.8863C19.0633 27.8863 13.2084 20.5409 13.2084 14.6538C13.2084 8.76675 17.8163 6.56726 23.5002 6.56726C29.1842 6.56726 33.7921 8.76675 33.7921 14.6538Z",
    fill: "#FFE1B2"
  }), doctor_icon_jsx("path", {
    d: "M24.9702 2.89172C24.5572 2.89172 23.2162 3.3558 22.1201 3.76245L22.0297 3.62682C22.0297 3.62682 21.8785 3.74569 21.6166 3.9517C21.007 4.18318 20.5595 4.36193 20.5595 4.36193L20.7315 4.64859C17.9412 6.84697 11.5751 11.8759 11.0027 12.4485C10.2676 13.1836 15.4135 31.9392 15.4135 21.2701C15.4135 12.3566 20.3656 10.5914 24.9702 9.50797C27.0531 9.01786 27.6658 7.79266 27.9108 6.56745C28.1559 5.34225 25.7055 2.89172 24.9702 2.89172Z",
    fill: "#80362D"
  }), doctor_icon_jsx("path", {
    d: "M27.1756 7.30254C28.5234 12.1421 31.2189 14.3323 33.746 14.9755C35.1307 15.328 34.5271 10.9783 34.5271 10.9783C34.5271 10.9783 32.5667 5.95478 32.3217 5.83234C32.0767 5.70979 30.1163 1.42151 30.1163 1.42151L25.7054 5.09724L27.1756 7.30254Z",
    fill: "#80362D"
  }), doctor_icon_jsx("path", {
    d: "M17.6911 29.6571C17.0026 30.7757 15.5989 31.5621 12.7182 31.5621H12.4732C8.00714 31.5621 4.3866 35.1825 4.3866 39.6487V44.7946C4.3866 46.0125 5.37396 47 6.59201 47H21.677L17.6911 29.6571Z",
    fill: "#E4EBF0"
  }), doctor_icon_jsx("path", {
    d: "M29.3092 29.6571C29.9977 30.7757 31.4015 31.5621 34.2822 31.5621H34.5272C38.9932 31.5621 42.6138 35.1825 42.6138 39.6487V44.7946C42.6138 46.0125 41.6264 47 40.4083 47H25.3234L29.3092 29.6571Z",
    fill: "#E4EBF0"
  }), doctor_icon_jsx("path", {
    d: "M12.4728 45.5297C13.6908 45.5297 14.6782 44.5423 14.6782 43.3243C14.6782 42.1063 13.6908 41.1189 12.4728 41.1189C11.2547 41.1189 10.2673 42.1063 10.2673 43.3243C10.2673 44.5423 11.2547 45.5297 12.4728 45.5297Z",
    fill: "#D0D7DC"
  }), doctor_icon_jsx("path", {
    d: "M37.2895 45.8418L36.3806 45.2172C37.1882 44.0422 37.6515 42.2804 37.6515 40.3835C37.6515 37.096 36.2208 34.3186 34.5272 34.3186C32.8337 34.3186 31.4029 37.096 31.4029 40.3835C31.4029 42.2804 31.8661 44.0422 32.6738 45.2172L31.765 45.8418C30.8343 44.4875 30.3003 42.498 30.3003 40.3835C30.3003 36.3643 32.1569 33.2159 34.5274 33.2159C36.8977 33.2159 38.7544 36.3644 38.7544 40.3835C38.7541 42.498 38.2202 44.4875 37.2895 45.8418Z",
    fill: "#D0D7DC"
  }), doctor_icon_jsx("path", {
    d: "M32.3219 46.2647C32.7279 46.2647 33.057 45.9356 33.057 45.5297C33.057 45.1237 32.7279 44.7946 32.3219 44.7946C31.9159 44.7946 31.5868 45.1237 31.5868 45.5297C31.5868 45.9356 31.9159 46.2647 32.3219 46.2647Z",
    fill: "#545465"
  }), doctor_icon_jsx("path", {
    d: "M36.7328 46.2647C37.1388 46.2647 37.4679 45.9356 37.4679 45.5297C37.4679 45.1237 37.1388 44.7946 36.7328 44.7946C36.3268 44.7946 35.9977 45.1237 35.9977 45.5297C35.9977 45.9356 36.3268 46.2647 36.7328 46.2647Z",
    fill: "#545465"
  }), doctor_icon_jsx("path", {
    d: "M12.473 42.4054C12.1684 42.4054 11.9216 42.1586 11.9216 41.854C11.9216 32.3275 16.4243 29.7164 16.616 29.6099C16.8827 29.4615 17.2179 29.5579 17.3656 29.8241C17.5132 30.0893 17.4184 30.4237 17.1543 30.5724C17.1002 30.6037 13.0243 33.0494 13.0243 41.854C13.0243 42.1586 12.7775 42.4054 12.473 42.4054Z",
    fill: "#D0D7DC"
  }), doctor_icon_jsx("path", {
    d: "M12.4732 44.4881C13.116 44.4881 13.6372 43.967 13.6372 43.3241C13.6372 42.6813 13.116 42.1602 12.4732 42.1602C11.8303 42.1602 11.3092 42.6813 11.3092 43.3241C11.3092 43.967 11.8303 44.4881 12.4732 44.4881Z",
    fill: "#B2B9BF"
  }), doctor_icon_jsx("path", {
    d: "M34.5272 34.3193C34.3 34.3193 34.0872 34.1776 34.0073 33.9512C33.5282 32.5938 32.7484 32.0195 32.7407 32.0141C32.4913 31.8395 32.4306 31.4956 32.6052 31.2461C32.7798 30.997 33.1231 30.9362 33.3731 31.1106C33.4166 31.1411 34.444 31.875 35.0471 33.5844C35.1486 33.8714 34.9977 34.1863 34.7106 34.2878C34.6499 34.309 34.588 34.3193 34.5272 34.3193Z",
    fill: "#D0D7DC"
  }), doctor_icon_jsx("path", {
    d: "M32.6971 14.7211C33.8999 14.4454 34.688 15.0345 34.688 16.1914C34.688 17.723 33.0704 21.4752 31.3699 19.1319C29.6693 16.7887 32.6971 14.7211 32.6971 14.7211Z",
    fill: "#FFE1B2"
  })), doctor_icon_jsx("defs", null, doctor_icon_jsx("clipPath", {
    id: "clip0"
  }, doctor_icon_jsx("rect", {
    width: "47",
    height: "47",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/fitness-icon.tsx
var fitness_icon_jsx = external_react_default.a.createElement;

function FitnessIcon({
  color = "#000"
}) {
  return fitness_icon_jsx("svg", {
    width: "40",
    height: "45",
    viewBox: "0 0 40 53",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, fitness_icon_jsx("path", {
    d: "M21.7595 4.57741C21.0349 4.21662 19.996 3.60381 19.179 2.73867C16.926 0.35287 11.3384 -0.682821 8.68491 3.19016C8.51476 3.43853 8.27633 3.63151 8.00321 3.75803C6.67978 4.37124 3.45674 6.59846 6.65837 12.1913C7.42215 13.5255 7.91697 14.6433 8.22084 15.5795C8.8167 14.9044 9.35444 14.1021 9.37483 13.3877C9.39593 12.6502 9.18845 12.0817 9.02175 11.6249C8.83121 11.103 8.7053 10.7584 8.95722 10.4149C9.31101 9.9325 9.90302 10.0434 10.3395 10.3082C10.5863 10.458 10.7342 10.7419 10.7254 11.0494L10.7105 11.569C10.6998 11.9455 10.9974 12.2606 11.3738 12.2714C11.7378 12.2819 12.0454 12.006 12.0742 11.6434C12.2707 9.1677 12.6432 7.44849 13.071 7.04448C13.4092 6.72509 14.1967 6.82472 15.193 6.95083C16.3544 7.09774 17.7855 7.27915 19.3361 6.94505C19.327 6.98249 19.3172 7.0253 19.3071 7.07015L19.5408 6.747C19.5408 6.747 20.7495 6.30768 21.8164 5.60275C22.1984 5.35042 22.169 4.78124 21.7595 4.57741Z",
    fill: "#3C58A0"
  }), fitness_icon_jsx("path", {
    d: "M8.00321 3.75834C6.67978 4.37155 3.45674 6.59877 6.65837 12.1916C7.42215 13.5258 7.91697 14.6436 8.22084 15.5798C8.8167 14.9047 9.35444 14.1025 9.37483 13.388C9.39593 12.6505 9.18845 12.082 9.02175 11.6252C8.83121 11.1033 8.7053 10.7587 8.95722 10.4152C9.31101 9.93281 9.90292 10.0437 10.3395 10.3085C10.5863 10.4583 10.7343 10.7422 10.7254 11.0497L10.7105 11.5693C10.6998 11.9458 10.9974 12.2609 11.3739 12.2717C11.7379 12.2822 12.0455 12.0063 12.0743 11.6437C12.259 9.31655 12.5992 7.6581 12.9947 7.13184C8.89503 6.92243 8.68481 3.19067 8.68481 3.19067C8.51486 3.43874 8.27633 3.63171 8.00321 3.75834Z",
    fill: "#2A428C"
  }), fitness_icon_jsx("path", {
    d: "M15.3832 24.118C15.2591 23.8082 15.0989 23.4548 14.9322 23.0789L14.9353 23.0949C13.7769 21.716 11.6393 21.0503 8.70266 20.1356C8.59298 20.0825 7.05497 19.7557 6.15016 18.6378C5.96916 18.4141 5.72606 18.0384 5.68487 17.7297C3.58518 19.7637 -1.59844 25.7282 0.483997 33.3933C2.01511 39.0291 2.33146 44.7961 2.33481 48.5645C5.04315 50.3228 8.11511 51.5679 11.4132 52.1629L14.3732 52.5142L14.3723 52.5153C14.862 52.544 15.3553 52.5592 15.8523 52.5592C15.8722 52.5592 15.8921 52.5585 15.9121 52.5585C16.193 50.5959 17.2047 43.6624 18.2124 38.4408C19.3979 32.2979 15.3832 24.118 15.3832 24.118Z",
    fill: "#3C58A0"
  }), fitness_icon_jsx("path", {
    d: "M13.239 30.5211C9.04204 28.4873 10.5349 23.7373 10.935 22.6689C10.982 22.5432 10.9629 22.4024 10.8841 22.2938C10.5728 21.8637 10.6938 21.4263 10.8134 21.1766C10.8704 21.0577 10.8618 20.9228 10.8019 20.807C10.1566 20.5887 9.4564 20.3704 8.70266 20.1356C8.59298 20.0825 7.05497 19.7557 6.15016 18.6378C5.96916 18.4141 5.72606 18.0384 5.68487 17.7297C3.58518 19.7637 -1.59844 25.7282 0.483997 33.3933C2.01511 39.0291 2.33146 44.7961 2.33481 48.5645C5.04314 50.3228 8.11511 51.5679 11.4132 52.1629L14.3732 52.5142L14.3723 52.5153C14.862 52.544 15.3553 52.5592 15.8523 52.5592C15.8722 52.5592 15.8921 52.5585 15.9121 52.5585C16.1929 50.5959 17.2047 43.6624 18.2124 38.4408C18.378 37.5827 18.442 36.6847 18.4297 35.7749C16.3685 34.3125 17.0278 32.3572 13.239 30.5211Z",
    fill: "#2A428C"
  }), fitness_icon_jsx("path", {
    d: "M10.3393 34.7912C9.97023 34.4261 9.53609 34.1289 9.05608 33.9149C8.00649 33.4469 7.1169 32.6854 6.48999 31.7354C6.54539 33.9732 6.89552 36.8108 8.04089 39.4311C9.90448 43.6945 12.2824 48.1027 11.4061 52.1618C12.377 52.3373 13.3679 52.455 14.3747 52.5142C14.9304 50.6019 15.2033 47.8894 13.9857 44.7992C12.5284 41.1011 10.9406 37.8684 10.3393 34.7912Z",
    fill: "#BBEA49"
  }), fitness_icon_jsx("path", {
    d: "M9.38511 42.4417C10.0187 40.0913 12.3814 40.8951 12.3817 40.8952C11.4947 38.7461 10.7197 36.7375 10.3393 34.7912C9.97023 34.4261 9.53608 34.1289 9.05608 33.9149C8.00649 33.4469 7.1169 32.6854 6.48999 31.7354C6.54539 33.9732 6.89552 36.8108 8.04089 39.4311C8.47696 40.4288 8.94103 41.4344 9.38511 42.4417Z",
    fill: "#9FD332"
  }), fitness_icon_jsx("path", {
    d: "M19.8216 11.0213C18.7716 9.26751 19.5406 6.74656 19.5406 6.74656C16.4993 7.50304 13.7994 6.15425 12.97 6.93741C12.3189 7.55235 12.0257 10.4088 11.9297 11.6074C11.9079 11.88 11.6949 12.1099 11.4218 12.1239C11.105 12.14 10.8479 11.8834 10.8569 11.5728L10.8719 11.0479C10.8818 10.6993 10.7134 10.3633 10.4152 10.1824C9.8863 9.86145 9.22601 9.79976 8.83864 10.3279C8.28529 11.0822 9.27207 11.844 9.22794 13.3832C9.20085 14.3294 8.18444 15.4687 7.40503 16.2065C7.46854 16.2408 7.52434 16.2912 7.56148 16.3607C7.60034 16.5093 7.95301 17.7202 9.27136 18.3543C10.5908 18.9885 12.6966 20.2199 13.5889 20.5822C13.78 20.6597 13.9721 20.797 14.1431 20.9667C14.0449 20.5707 13.9926 20.1886 14.0176 19.8417C14.2131 17.1228 17.2894 19.8393 18.2824 19.1439C19.792 18.0868 18.6204 14.5972 19.4142 14.4083C21.0346 14.0227 20.8717 12.7751 19.8216 11.0213Z",
    fill: "#F9BA8F"
  }), fitness_icon_jsx("path", {
    d: "M10.8569 11.5728L10.8719 11.048C10.8818 10.6994 10.7134 10.3633 10.4152 10.1824C9.8863 9.86153 9.22601 9.79985 8.83864 10.3279C8.28529 11.0823 9.27207 11.844 9.22794 13.3833C9.20085 14.3295 8.18444 15.4687 7.40503 16.2066C7.46854 16.2408 7.52435 16.2913 7.56148 16.3608C7.60034 16.5094 7.95301 17.7203 9.27136 18.3543C10.5908 18.9886 12.6965 20.22 13.5889 20.5823C13.78 20.6598 13.9721 20.7971 14.1431 20.9668C14.0449 20.5708 13.9926 20.1887 14.0176 19.8418C14.1154 18.482 14.9339 18.4818 15.8519 18.7344C11.151 16.8408 11.4218 12.1241 11.4218 12.1241C11.1051 12.1401 10.848 11.8836 10.8569 11.5728Z",
    fill: "#FFAA7B"
  }), fitness_icon_jsx("path", {
    d: "M14.8229 21.9378C14.7122 21.3587 14.1752 20.7042 13.6289 20.4825C12.7405 20.1219 10.648 18.897 9.31743 18.2573C7.97158 17.6102 7.66224 16.3225 7.66224 16.3225C7.51411 16.0265 7.12207 15.9584 6.8809 16.1852L5.71413 17.2825C5.56843 17.4196 5.52024 17.6298 5.58954 17.8175C5.58954 17.8175 5.89401 19.3733 8.40451 20.1559C11.5242 21.1284 13.7639 21.7939 14.9179 23.2448C14.9702 23.3107 15.0759 23.2611 15.0602 23.1785L14.8229 21.9378Z",
    fill: "#BBEA49"
  }), fitness_icon_jsx("path", {
    d: "M32.8276 28.3115C32.7881 28.314 32.749 28.3173 32.7094 28.3191C32.592 28.3247 32.4741 28.328 32.3554 28.328C31.2162 28.328 30.1364 28.0692 29.171 27.6084C28.9989 27.9198 28.8186 28.1855 28.6341 28.3699C27.6295 29.3747 25.0183 31.0326 24.1832 33.5721C24.1366 33.7142 23.9429 33.7305 23.8746 33.5975C23.6153 33.0926 23.0555 32.1653 22.0277 31.1071C21.2595 33.2312 19.167 37.4845 14.3264 39.3741C15.612 40.2793 17.2262 41.0534 19.2235 41.4255C19.2235 41.4255 22.7425 44.0801 25.6094 43.252C25.8031 43.196 26.006 43.1842 26.2041 43.2224C26.5549 43.29 27.1604 43.3322 27.6361 42.9776C28.1358 42.6051 28.2722 42.0743 28.3081 41.7681C28.3286 41.5933 28.3842 41.4258 28.4765 41.2758C29.1924 40.1118 32.1486 34.9812 33.0261 28.2972C32.9603 28.3034 32.894 28.3073 32.8276 28.3115Z",
    fill: "#F9BA8F"
  }), fitness_icon_jsx("path", {
    d: "M22.0898 37.6624L20.7106 33.8667C19.4988 35.8739 17.5053 38.1338 14.3267 39.3746C15.6122 40.2798 17.2264 41.0539 19.2238 41.426C18.5877 38.3644 22.0898 37.6624 22.0898 37.6624Z",
    fill: "#FCAD6D"
  }), fitness_icon_jsx("path", {
    d: "M29.1712 27.6094C28.999 27.9208 28.8187 28.1865 28.6343 28.3709C27.6296 29.3757 25.0185 31.0336 24.1834 33.5731C24.1367 33.7152 23.943 33.7315 23.8747 33.5985C23.6154 33.0936 23.0557 32.1663 22.0279 31.1081C21.5772 32.3542 20.6698 34.3327 19.0201 36.1372C19.4503 36.3666 19.9724 37.0375 20.6218 37.2338C25.4908 38.7049 25.5669 38.3643 26.5054 37.4258C27.4439 36.4873 30.9722 31.3386 30.9722 28.1986C30.3401 28.0788 29.7359 27.8791 29.1712 27.6094Z",
    fill: "#FCAD6D"
  }), fitness_icon_jsx("path", {
    d: "M21.1187 30.2512C20.3808 32.3349 18.2743 36.7296 13.2385 38.516C13.5936 38.8292 13.9807 39.1374 14.4045 39.4308C19.3428 37.5715 21.3878 33.1887 22.0894 31.1693C21.8044 30.872 21.4818 30.5638 21.1187 30.2512Z",
    fill: "#DAE2FE"
  }), fitness_icon_jsx("path", {
    d: "M17.9889 35.4204C16.8103 36.6606 15.2611 37.7992 13.2385 38.5167C13.5936 38.8299 13.9807 39.1381 14.4045 39.4315C16.435 38.667 17.9754 37.4757 19.1354 36.1976C18.6573 35.9551 18.2884 35.6949 17.9889 35.4204Z",
    fill: "#AAB9F2"
  }), fitness_icon_jsx("path", {
    d: "M17.9596 28.1283C17.6192 27.9499 17.3556 27.6534 17.2252 27.292L16.9086 26.414C16.7836 26.0675 16.6349 25.729 16.4484 25.4113C15.3678 23.5699 13.3316 22.3568 11.0208 22.4531C7.90213 22.5831 5.37865 25.1405 5.28764 28.2606C5.21429 30.7778 6.69386 32.9583 8.83931 33.915C9.62389 34.2648 10.2878 34.8348 10.7414 35.5644C11.2596 36.3982 12.0986 37.5314 13.3267 38.5948C18.3645 36.7935 20.4605 32.3792 21.1878 30.3113C20.3509 29.5819 19.2924 28.8266 17.9596 28.1283Z",
    fill: "#4F71B6"
  }), fitness_icon_jsx("path", {
    d: "M13.2391 30.5213C9.04212 28.4874 10.535 23.7374 10.935 22.6691C10.9607 22.6005 10.966 22.5275 10.9533 22.4575C7.86591 22.6214 5.37794 25.1631 5.28764 28.2606C5.21429 30.7777 6.69386 32.9583 8.83931 33.9149C9.62389 34.2648 10.2878 34.8348 10.7414 35.5644C11.2596 36.3981 12.0986 37.5313 13.3267 38.5947C15.3457 37.8729 16.8912 36.7309 18.0665 35.4889C16.4346 34.0634 16.786 32.2402 13.2391 30.5213Z",
    fill: "#3C58A0"
  }), fitness_icon_jsx("path", {
    d: "M38.8137 21.7605C39.1798 18.1893 36.5815 14.9974 33.0102 14.6313C29.439 14.2652 26.2471 16.8635 25.881 20.4348C25.5149 24.006 28.1132 27.1979 31.6845 27.564C35.2557 27.9301 38.4476 25.3318 38.8137 21.7605Z",
    fill: "#6289CC"
  }), fitness_icon_jsx("path", {
    d: "M36.0867 26.4338C35.9436 26.205 35.9077 25.9451 35.9068 25.7466C35.906 25.5726 35.7703 25.4281 35.5969 25.4132C33.4394 25.2269 33.6391 23.2444 33.7356 22.6997C33.7518 22.6082 33.7293 22.5149 33.6743 22.44L31.4847 19.4573C31.4283 19.3804 31.3412 19.3332 31.2463 19.3232C29.1861 19.1048 29.1906 17.5121 29.3024 16.789C29.3307 16.6059 29.2037 16.4365 29.0214 16.404C28.6903 16.345 28.4684 16.202 28.3207 16.0217C26.8198 17.2121 25.8561 19.0504 25.8561 21.1149C25.8561 24.7041 28.7657 27.6137 32.3549 27.6137C33.7441 27.6136 35.0304 27.1763 36.0867 26.4338Z",
    fill: "#4F71B6"
  }), fitness_icon_jsx("path", {
    d: "M32.3559 28.5315C28.2663 28.5315 24.9392 25.2043 24.9392 21.1147C24.9392 17.0251 28.2663 13.698 32.3559 13.698C36.4455 13.698 39.7727 17.0251 39.7727 21.1147C39.7727 25.2043 36.4455 28.5315 32.3559 28.5315ZM32.3559 15.5338C29.2787 15.5338 26.775 18.0374 26.775 21.1147C26.775 24.1921 29.2786 26.6957 32.3559 26.6957C35.4333 26.6957 37.9369 24.1921 37.9369 21.1147C37.9368 18.0374 35.4332 15.5338 32.3559 15.5338Z",
    fill: "#4F71B6"
  }), fitness_icon_jsx("path", {
    d: "M36.939 26.9396C36.9368 26.9392 36.9348 26.9382 36.9324 26.9379C36.0527 26.7976 35.9096 26.1471 35.9078 25.7469C35.9074 25.6506 35.8647 25.5643 35.798 25.503C34.849 26.2491 33.654 26.6958 32.3558 26.6958C29.2786 26.6958 26.775 24.1922 26.775 21.1149C26.775 19.2028 27.742 17.5127 29.2121 16.5066C29.1627 16.4552 29.0979 16.4175 29.0225 16.404C28.1789 16.2537 28.0394 15.561 28.0479 15.0833C26.1679 16.43 24.9392 18.631 24.9392 21.1149C24.9392 25.2045 28.2663 28.5316 32.3559 28.5316C34.0849 28.5317 35.6764 27.9353 36.939 26.9396Z",
    fill: "#3C58A0"
  }), fitness_icon_jsx("path", {
    d: "M34.2291 21.867C34.6509 20.8338 34.1552 19.6544 33.1221 19.2326C32.0889 18.8109 30.9094 19.3065 30.4877 20.3397C30.0659 21.3729 30.5616 22.5523 31.5947 22.9741C32.6279 23.3959 33.8074 22.9002 34.2291 21.867Z",
    fill: "#DAE2FE"
  }), fitness_icon_jsx("path", {
    d: "M8.40441 20.1558C9.29024 20.432 10.105 20.6834 10.8442 20.935C10.0645 19.72 11.282 19.2821 11.282 19.2821C10.5902 18.909 9.88459 18.53 9.31743 18.2573C7.97158 17.6102 7.66224 16.3225 7.66224 16.3225C7.51411 16.0265 7.12207 15.9584 6.8809 16.1852L5.71413 17.2825C5.56843 17.4196 5.52024 17.6298 5.58954 17.8175C5.58954 17.8174 5.89391 19.3732 8.40441 20.1558Z",
    fill: "#9FD332"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/gst-icon.tsx
var gst_icon_jsx = external_react_default.a.createElement;

function GstIcon({
  color = "#000"
}) {
  return gst_icon_jsx("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 46 52",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, gst_icon_jsx("path", {
    d: "M44.1999 51.7197H6.56635V1.05119C6.56635 0.470746 7.03709 0 7.61753 0H44.1999C44.7804 0 45.2511 0.470746 45.2511 1.05119V50.6685C45.2511 51.2489 44.7804 51.7197 44.1999 51.7197Z",
    fill: "#DDF5FF"
  }), gst_icon_jsx("path", {
    d: "M32.5273 32.3752V51.7176H33.2632C33.8436 51.7176 34.3143 51.2469 34.3143 50.6665V32.3752H32.5273Z",
    fill: "#82CD64"
  }), gst_icon_jsx("path", {
    d: "M42.5178 0V20.381C42.5178 21.2246 41.5676 21.7328 40.8755 21.2498C39.3433 20.1805 37.4809 19.5527 35.4748 19.5527C30.2579 19.5527 26.0137 23.7969 26.0137 29.0138C26.0137 29.0793 26.0145 29.1444 26.0157 29.2099C26.0279 29.7959 25.5516 30.2753 24.9653 30.2753H6.56635V51.7197H36.421V39.3343C36.421 38.8324 36.7753 38.3987 37.2682 38.3036C38.5814 38.0503 39.7987 37.5247 40.859 36.7876C41.5597 36.3007 42.5178 36.788 42.5178 37.6415V51.7197H44.1996C44.7804 51.7197 45.2507 51.2489 45.2507 50.6685V1.05119C45.2511 0.470746 44.7804 0 44.1999 0H42.5178Z",
    fill: "#C1E9F4"
  }), gst_icon_jsx("path", {
    d: "M25.8561 4.41943H15.134C13.9727 4.41943 13.0312 5.36053 13.0312 6.52181V15.7726C13.0312 16.9338 13.9727 17.8749 15.134 17.8749H36.5783C37.7396 17.8749 38.6811 16.9338 38.6811 15.7726V6.52181C38.6811 5.36053 37.7396 4.41943 36.5783 4.41943H25.8561Z",
    fill: "#FFDA88"
  }), gst_icon_jsx("path", {
    d: "M36.5439 4.41943H34.5469C35.7078 4.41943 36.6493 5.36053 36.6493 6.52181V15.7726C36.6493 16.9338 35.7078 17.8749 34.5469 17.8749H36.5439C37.7052 17.8749 38.6467 16.9338 38.6467 15.7726V6.52181C38.6467 5.36092 37.7052 4.41943 36.5439 4.41943Z",
    fill: "#FFCD69"
  }), gst_icon_jsx("path", {
    d: "M1.05119 32.3752C0.470746 32.3752 0 32.846 0 33.4264V50.6665C0 51.2469 0.470746 51.7172 1.05119 51.7172H33.2185C33.799 51.7172 34.2697 51.2469 34.2697 50.6665V32.3752H1.05119Z",
    fill: "#ABDE97"
  }), gst_icon_jsx("path", {
    d: "M17.1008 48.4662H6.80003C6.34901 48.4662 5.94022 48.1817 5.80448 47.752C5.55352 46.9577 4.99636 46.3504 4.17917 46.0911C3.7388 45.9515 3.43536 45.5486 3.43536 45.0865V39.0738C3.43536 38.6295 3.72223 38.2451 4.13971 38.0928C4.93007 37.8044 5.53379 37.1888 5.80014 36.4312C5.94574 36.0169 6.34586 35.7466 6.78504 35.7466H27.3972C27.8471 35.7466 28.2594 36.0236 28.4034 36.4493C28.6721 37.2425 29.2711 37.8415 30.0639 38.1098C30.49 38.2542 30.7666 38.6665 30.7666 39.116V45.0873C30.7666 45.5403 30.4802 45.9526 30.0469 46.0848C29.2419 46.3307 28.6469 46.9095 28.3908 47.7291C28.2558 48.1623 27.8684 48.4666 27.4146 48.4666H17.1008V48.4662Z",
    fill: "#6DC54A"
  }), gst_icon_jsx("path", {
    d: "M29.2899 39.3267C29.2998 39.331 29.3096 39.3354 29.3195 39.3393C29.3949 39.3713 29.445 39.4439 29.445 39.5256V44.6872C29.445 44.7693 29.3949 44.8415 29.3195 44.8734C28.3879 45.2688 27.6405 46.0162 27.2455 46.9478C27.2132 47.0232 27.141 47.0733 27.0593 47.0733H5.55652C5.68515 47.2698 5.78893 47.4864 5.86548 47.72C6.0099 48.1596 6.40725 48.4666 6.87011 48.4666H27.4862C27.94 48.4666 28.3275 48.162 28.4625 47.7291C28.7185 46.9095 29.314 46.3307 30.1185 46.0848C30.5514 45.9526 30.8383 45.5403 30.8383 45.0873V39.116C30.8383 38.6665 30.5617 38.2542 30.1355 38.1098C29.3428 37.8415 28.7438 37.2425 28.4751 36.4493C28.3311 36.0236 27.9187 35.7466 27.4689 35.7466H27.195V36.0674C27.195 37.4702 28.0032 38.7684 29.2899 39.3267Z",
    fill: "#5DB33A"
  }), gst_icon_jsx("path", {
    d: "M42.7995 29.0133C42.7995 33.0776 39.5046 36.372 35.4408 36.372C31.3769 36.372 28.0821 33.0776 28.0821 29.0133C28.0821 24.9495 31.3769 21.655 35.4408 21.655C39.5046 21.655 42.7995 24.9495 42.7995 29.0133Z",
    fill: "#E5646E"
  }), gst_icon_jsx("path", {
    d: "M39.9134 23.1704C40.8648 24.4102 41.4314 25.9606 41.4314 27.6443C41.4314 31.7081 38.137 35.003 34.0731 35.003C32.3894 35.003 30.839 34.4363 29.5992 33.485C30.944 35.2381 33.0594 36.3694 35.4396 36.3694C39.5034 36.3694 42.7983 33.075 42.7983 29.0107C42.7983 26.6306 41.6666 24.5152 39.9134 23.1704Z",
    fill: "#E04955"
  }), gst_icon_jsx("path", {
    d: "M21.5369 41.2996H20.9919C20.6258 39.5026 19.0332 38.146 17.1293 38.146C15.2258 38.146 13.6328 39.5026 13.2667 41.2996H12.7083C12.2731 41.2996 11.9199 41.6527 11.9199 42.0879C11.9199 42.5236 12.2731 42.8763 12.7083 42.8763H13.2667C13.6328 44.6737 15.2258 46.0303 17.1293 46.0303C19.0332 46.0303 20.6258 44.6737 20.9919 42.8763H21.5369C21.9721 42.8763 22.3253 42.5236 22.3253 42.0879C22.3253 41.6527 21.9721 41.2996 21.5369 41.2996ZM17.1293 44.4531C15.8252 44.4531 14.7641 43.3921 14.7641 42.0879C14.7641 40.7838 15.8252 39.7228 17.1293 39.7228C18.4334 39.7228 19.4945 40.7838 19.4945 42.0879C19.4945 43.3921 18.4334 44.4531 17.1293 44.4531Z",
    fill: "#5DB33A"
  }), gst_icon_jsx("path", {
    d: "M26.8708 41.3025H24.2243C23.7887 41.3025 23.4355 41.6556 23.4355 42.0909C23.4355 42.5265 23.7887 42.8793 24.2243 42.8793H26.8708C27.3065 42.8793 27.6596 42.5265 27.6596 42.0909C27.6596 41.6556 27.3065 41.3025 26.8708 41.3025Z",
    fill: "#5DB33A"
  }), gst_icon_jsx("path", {
    d: "M10.0016 41.3025H7.35474C6.9195 41.3025 6.56635 41.6556 6.56635 42.0909C6.56635 42.5265 6.9195 42.8793 7.35474 42.8793H10.0016C10.4369 42.8793 10.79 42.5265 10.79 42.0909C10.79 41.6556 10.4373 41.3025 10.0016 41.3025Z",
    fill: "#5DB33A"
  }), gst_icon_jsx("path", {
    d: "M34.8347 26.8923V26.13C34.8347 25.2149 34.0901 24.4707 33.1755 24.4707C32.2604 24.4707 31.5158 25.2149 31.5158 26.13V26.8923C31.5158 27.8074 32.2604 28.5516 33.1755 28.5516C34.0901 28.5516 34.8347 27.8074 34.8347 26.8923Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M37.6206 29.4836C36.7056 29.4836 35.961 30.2282 35.961 31.1429V31.9052C35.961 32.8203 36.7056 33.5645 37.6206 33.5645C38.5353 33.5645 39.2799 32.8203 39.2799 31.9052V31.1429C39.2799 30.2282 38.5353 29.4836 37.6206 29.4836Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M37.8021 24.5477C37.4157 24.3465 36.9398 24.496 36.7381 24.8823L32.8181 32.3942C32.6168 32.7801 32.7664 33.2563 33.1524 33.458C33.2688 33.5187 33.3935 33.5475 33.5166 33.5475C33.8008 33.5475 34.0754 33.3933 34.2163 33.1238L38.1363 25.6115C38.3376 25.2256 38.188 24.7494 37.8021 24.5477Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M26.4666 22.8656H13.011C12.5758 22.8656 12.2227 22.5128 12.2227 22.0772C12.2227 21.642 12.5758 21.2888 13.011 21.2888H26.4666C26.9022 21.2888 27.2553 21.642 27.2553 22.0772C27.2553 22.5128 26.9022 22.8656 26.4666 22.8656Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M22.2618 29.9116H13.011C12.5758 29.9116 12.2227 29.5585 12.2227 29.1233C12.2227 28.6876 12.5758 28.3345 13.011 28.3345H22.2618C22.6974 28.3345 23.0502 28.6876 23.0502 29.1233C23.0502 29.5585 22.6974 29.9116 22.2618 29.9116Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M22.2618 26.3885H13.011C12.5758 26.3885 12.2227 26.0358 12.2227 25.6002C12.2227 25.1649 12.5758 24.8118 13.011 24.8118H22.2618C22.6974 24.8118 23.0502 25.1645 23.0502 25.6002C23.0502 26.0358 22.6974 26.3885 22.2618 26.3885Z",
    fill: "#495959"
  }), gst_icon_jsx("path", {
    d: "M20.2881 12.0249H23.1201C23.1201 12.0737 23.1217 12.1421 23.125 12.23C23.1348 12.4611 23.1396 12.6174 23.1396 12.6987C23.1396 13.7046 22.8516 14.4858 22.2754 15.0425C21.6992 15.5991 20.887 15.8774 19.8389 15.8774C19.2529 15.8774 18.7305 15.7912 18.2715 15.6187C17.8125 15.4461 17.4105 15.1857 17.0654 14.8374C16.7269 14.4924 16.4665 14.0871 16.2842 13.6216C16.1051 13.1561 16.0156 12.658 16.0156 12.1274C16.0156 11.5871 16.1068 11.089 16.2891 10.6333C16.4746 10.1776 16.748 9.77555 17.1094 9.42725C17.4577 9.08545 17.8662 8.82503 18.335 8.646C18.8037 8.46696 19.305 8.37744 19.8389 8.37744C20.402 8.37744 20.9049 8.47998 21.3477 8.68506C21.7936 8.89014 22.1908 9.20426 22.5391 9.62744L21.6895 10.2671C21.4486 9.98714 21.1768 9.77881 20.874 9.64209C20.5713 9.50537 20.2327 9.43701 19.8584 9.43701C19.0837 9.43701 18.4505 9.68604 17.959 10.1841C17.4707 10.6789 17.2266 11.3234 17.2266 12.1177C17.2266 12.925 17.4707 13.5809 17.959 14.0854C18.4505 14.5868 19.0869 14.8374 19.8682 14.8374C20.5322 14.8374 21.0547 14.6828 21.4355 14.3735C21.8164 14.0643 22.0068 13.6427 22.0068 13.1089V13.0063H20.2881V12.0249ZM24.2151 14.2563L25.1428 13.8267C25.2307 14.1457 25.3918 14.3898 25.6262 14.5591C25.8606 14.7251 26.1601 14.8081 26.5246 14.8081C26.8697 14.8081 27.1431 14.7121 27.345 14.52C27.55 14.328 27.6526 14.0708 27.6526 13.7485C27.6526 13.3286 27.3043 12.9543 26.6077 12.6255C26.51 12.5767 26.4351 12.5409 26.383 12.5181C25.5953 12.134 25.0696 11.7873 24.8059 11.478C24.5455 11.1655 24.4153 10.7847 24.4153 10.3354C24.4153 9.75277 24.6122 9.28076 25.0061 8.91943C25.4032 8.55811 25.9224 8.37744 26.5637 8.37744C27.0911 8.37744 27.5321 8.47998 27.887 8.68506C28.2418 8.88688 28.4875 9.17822 28.6243 9.55908L27.7161 10.0278C27.5728 9.80322 27.4149 9.63883 27.2424 9.53467C27.0732 9.4305 26.8778 9.37842 26.6565 9.37842C26.344 9.37842 26.095 9.4598 25.9094 9.62256C25.7271 9.78532 25.636 10.0034 25.636 10.2769C25.636 10.7065 26.0396 11.1069 26.8469 11.478C26.9088 11.5073 26.9576 11.5301 26.9934 11.5464C27.6998 11.8719 28.1848 12.1909 28.4485 12.5034C28.7121 12.8127 28.844 13.2 28.844 13.6655C28.844 14.3426 28.6308 14.8813 28.2043 15.2817C27.7779 15.6789 27.2017 15.8774 26.4758 15.8774C25.8671 15.8774 25.3674 15.7375 24.9768 15.4575C24.5894 15.1776 24.3355 14.7772 24.2151 14.2563ZM32.6831 9.5249V15.687H31.521V9.5249H29.6216V8.53857H34.5727V9.5249H32.6831Z",
    fill: "#495959"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/lawyer-icon.tsx
var lawyer_icon_jsx = external_react_default.a.createElement;

function LawyerIcon({
  color = "#000"
}) {
  return lawyer_icon_jsx("svg", {
    width: "47",
    height: "47",
    viewBox: "0 0 47 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, lawyer_icon_jsx("path", {
    d: "M29.4753 33.4577C29.3272 33.4579 29.182 33.4168 29.056 33.339C28.9299 33.2613 28.8281 33.1498 28.762 33.0173L23.898 23.2896L19.0343 33.0173C18.9398 33.2063 18.7741 33.35 18.5736 33.4168C18.3732 33.4837 18.1544 33.4681 17.9654 33.3736C17.7764 33.2791 17.6327 33.1134 17.5659 32.913C17.4991 32.7125 17.5146 32.4938 17.6091 32.3048L23.1854 21.1522C23.4561 20.6123 24.3399 20.6123 24.6105 21.1522L30.1868 32.3048C30.2475 32.4261 30.2762 32.561 30.2701 32.6966C30.2641 32.8322 30.2235 32.9639 30.1522 33.0794C30.0809 33.1949 29.9814 33.2903 29.8629 33.3565C29.7444 33.4227 29.611 33.4575 29.4753 33.4577Z",
    fill: "#95573A"
  }), lawyer_icon_jsx("path", {
    d: "M11.95 33.4577C11.8019 33.4579 11.6567 33.4168 11.5306 33.339C11.4046 33.2613 11.3028 33.1498 11.2366 33.0173L6.37264 23.2896L1.50924 33.0173C1.41475 33.2063 1.24905 33.35 1.04861 33.4168C0.848157 33.4837 0.629376 33.4681 0.440391 33.3736C0.251407 33.2791 0.1077 33.1134 0.0408834 32.913C-0.0259327 32.7125 -0.0103844 32.4938 0.0841079 32.3048L5.66038 21.1522C5.93112 20.6123 6.81486 20.6123 7.08551 21.1522L12.6618 32.3048C12.7225 32.4262 12.7512 32.5611 12.7451 32.6967C12.739 32.8323 12.6984 32.964 12.6271 33.0795C12.5558 33.195 12.4562 33.2904 12.3377 33.3566C12.2192 33.4227 12.0857 33.4575 11.95 33.4577Z",
    fill: "#95573A"
  }), lawyer_icon_jsx("path", {
    d: "M19.9141 43.8136C19.9141 42.9685 19.5784 42.1581 18.9808 41.5605C18.3832 40.9629 17.5727 40.6272 16.7277 40.6272H13.5412C12.6961 40.6272 11.8856 40.9629 11.2881 41.5605C10.6905 42.1581 10.3548 42.9685 10.3548 43.8136C9.50968 43.8136 8.69919 44.1493 8.10162 44.7469C7.50405 45.3445 7.16833 46.155 7.16833 47.0001H23.1005C23.1005 46.155 22.7648 45.3445 22.1672 44.7469C21.5697 44.1493 20.7592 43.8136 19.9141 43.8136Z",
    fill: "#FFB531"
  }), lawyer_icon_jsx("path", {
    d: "M19.915 43.8136C19.915 42.9685 19.5793 42.1581 18.9817 41.5605C18.3841 40.9629 17.5736 40.6272 16.7285 40.6272H13.5421C13.2728 40.6306 13.0051 40.6685 12.7455 40.7398C13.4282 40.9148 14.0334 41.3117 14.466 41.8681C14.8986 42.4245 15.134 43.1089 15.1353 43.8136C15.9804 43.8136 16.7909 44.1493 17.3885 44.7469C17.986 45.3445 18.3218 46.155 18.3218 47.0001H23.1014C23.1014 46.155 22.7657 45.3445 22.1681 44.7469C21.5705 44.1493 20.7601 43.8136 19.915 43.8136Z",
    fill: "#FFA912"
  }), lawyer_icon_jsx("path", {
    d: "M0.0162964 32.9507C0.0162964 34.5505 5.64889 36.1371 4.20051 35.8474C7.61504 35.8474 6.71057 35.8113 9.12501 35.2681C11.5394 34.7248 12.8908 33.719 12.8908 32.9507H0.0162964Z",
    fill: "#FFA912"
  }), lawyer_icon_jsx("path", {
    d: "M15.1337 22.3019C14.3989 22.3035 13.6721 22.1481 13.0022 21.846L11.2052 21.0276C10.7045 20.804 10.1593 20.6976 9.61132 20.7166C9.06329 20.7356 8.52682 20.8794 8.04282 21.1371C7.44179 21.4617 6.78243 21.664 6.10279 21.7324C5.42315 21.8008 4.7367 21.7338 4.08307 21.5355L3.74939 21.4343L4.21302 19.9095L4.546 20.0106C4.99683 20.1484 5.4705 20.1953 5.93959 20.1488C6.40869 20.1023 6.8639 19.9631 7.27887 19.7395C7.97909 19.3605 8.75754 19.1486 9.55328 19.1205C10.349 19.0925 11.1405 19.2489 11.8656 19.5777L13.6627 20.3961C14.1254 20.6038 14.6269 20.7112 15.1341 20.7112C15.6414 20.7112 16.1428 20.6038 16.6056 20.3961L18.4011 19.5777C19.1264 19.2487 19.918 19.0921 20.7139 19.1201C21.5098 19.1482 22.2883 19.3602 22.9886 19.7395C23.4037 19.9632 23.8591 20.1023 24.3283 20.1488C24.7975 20.1954 25.2713 20.1484 25.7223 20.0106L26.0545 19.9095L26.5181 21.4343L26.1851 21.5355C25.5314 21.7339 24.8448 21.8009 24.165 21.7326C23.4853 21.6642 22.8258 21.4618 22.2247 21.1371C21.7405 20.8794 21.2039 20.7355 20.6558 20.7165C20.1076 20.6976 19.5623 20.804 19.0615 21.0276L17.2661 21.846C16.5959 22.1481 15.8689 22.3035 15.1337 22.3019Z",
    fill: "#F7A116"
  }), lawyer_icon_jsx("path", {
    d: "M17.5251 19.119C17.5271 18.7199 17.429 18.3267 17.2399 17.9752C17.0508 17.6237 16.7767 17.3251 16.4426 17.1068C16.1085 16.8885 15.725 16.7573 15.3272 16.7252C14.9293 16.6932 14.5298 16.7613 14.165 16.9234C13.8003 17.0854 13.4819 17.3362 13.239 17.653C12.9961 17.9697 12.8364 18.3422 12.7744 18.7365C12.7125 19.1308 12.7503 19.5343 12.8844 19.9102C13.0185 20.2861 13.2446 20.6225 13.5421 20.8886V40.6275H16.7285V20.8886C16.9784 20.6664 17.1785 20.3939 17.3158 20.0889C17.4531 19.784 17.5244 19.4535 17.5251 19.119Z",
    fill: "#FFB531"
  }), lawyer_icon_jsx("path", {
    d: "M19.9171 43.017H10.3578C9.91781 43.017 9.56116 43.3736 9.56116 43.8136C9.56116 44.2535 9.91781 44.6102 10.3578 44.6102H19.9171C20.357 44.6102 20.7137 44.2535 20.7137 43.8136C20.7137 43.3736 20.357 43.017 19.9171 43.017Z",
    fill: "#F7A116"
  }), lawyer_icon_jsx("path", {
    d: "M27.8828 23.898V18.3218H35.8489V23.898L38.2387 26.2879L31.8659 43.0167L25.493 26.2879L27.8828 23.898Z",
    fill: "#FEC9A3"
  }), lawyer_icon_jsx("path", {
    d: "M38.2387 26.2883L31.8659 43.0171L25.493 26.2883L27.8828 23.8984L31.8659 27.8815L35.8489 23.8984L38.2387 26.2883Z",
    fill: "#BFBFBD"
  }), lawyer_icon_jsx("path", {
    d: "M25.493 26.2883L31.8659 43.0171L38.2387 26.2883L35.8489 23.8984L31.8659 27.8815L27.8828 23.8984L25.493 26.2883Z",
    fill: "#BFBFBD"
  }), lawyer_icon_jsx("path", {
    d: "M33.4569 26.2883V43.0171H30.2705V26.2883L31.8637 27.8815L33.4569 26.2883Z",
    fill: "#95573A"
  }), lawyer_icon_jsx("path", {
    d: "M33.4569 35.7729V43.0171H30.2705V38.5989C31.3569 37.7127 32.4194 36.7767 33.4569 35.7729Z",
    fill: "#8F4D2E"
  }), lawyer_icon_jsx("path", {
    d: "M31.8659 27.8815L27.8738 32.5387L25.493 26.2883L27.8828 23.8984L31.8659 27.8815Z",
    fill: "#E0E0DE"
  }), lawyer_icon_jsx("path", {
    d: "M38.2366 26.2883L35.8557 32.5387L31.8637 27.8815L35.8468 23.8984L38.2366 26.2883Z",
    fill: "#E0E0DE"
  }), lawyer_icon_jsx("path", {
    d: "M35.8479 21.8923V19.9148H27.8818V21.8923C29.0606 22.6805 30.4468 23.1012 31.8648 23.1012C33.2829 23.1012 34.6691 22.6805 35.8479 21.8923Z",
    fill: "#FEB784"
  }), lawyer_icon_jsx("path", {
    d: "M39.0361 8.52222H39.8327C40.4665 8.52222 41.0744 8.774 41.5225 9.22218C41.9707 9.67036 42.2225 10.2782 42.2225 10.912C42.2225 11.5459 41.9707 12.1537 41.5225 12.6019C41.0744 13.0501 40.4665 13.3019 39.8327 13.3019H39.0361V8.52222Z",
    fill: "#FEB784"
  }), lawyer_icon_jsx("path", {
    d: "M24.6934 8.52222H23.8968C23.2635 8.52408 22.6568 8.77647 22.209 9.22424C21.7612 9.67202 21.5088 10.2788 21.507 10.912C21.5088 11.5453 21.7612 12.1521 22.209 12.5998C22.6568 13.0476 23.2635 13.3 23.8968 13.3019H24.7412",
    fill: "#FEB784"
  }), lawyer_icon_jsx("path", {
    d: "M39.0343 7.96612V14.339C39.0343 15.2805 38.8489 16.2128 38.4886 17.0826C38.1283 17.9525 37.6002 18.7428 36.9345 19.4086C36.2687 20.0743 35.4783 20.6024 34.6085 20.9627C33.7387 21.323 32.8064 21.5085 31.8649 21.5085C30.9233 21.5085 29.9911 21.323 29.1212 20.9627C28.2514 20.6024 27.461 20.0743 26.7953 19.4086C26.1295 18.7428 25.6014 17.9525 25.2411 17.0826C24.8808 16.2128 24.6954 15.2805 24.6954 14.339V7.96612C24.6955 6.0647 25.4509 4.24121 26.7954 2.8967C28.1399 1.55219 29.9634 0.796789 31.8649 0.796631C31.8848 0.796631 31.9047 0.796631 31.9246 0.797626C33.8156 0.813203 35.6238 1.57531 36.9555 2.91797C38.2871 4.26063 39.0343 6.07508 39.0343 7.96612Z",
    fill: "#FEC9A3"
  }), lawyer_icon_jsx("path", {
    d: "M39.036 7.96634V14.3392C39.0354 15.4834 38.761 16.6109 38.2359 17.6275C37.7108 18.6441 36.9501 19.5203 36.0173 20.1831C35.0845 20.8458 34.0068 21.2757 32.874 21.4371C31.7412 21.5984 30.5862 21.4864 29.5056 21.1104C31.287 20.5523 32.8438 19.44 33.9491 17.9355C35.0543 16.431 35.6504 14.6129 35.6504 12.746V7.96634C35.65 6.56039 35.3115 5.17516 34.6633 3.92753C34.0151 2.6799 33.0764 1.60648 31.9263 0.797852C33.8172 0.813428 35.6255 1.57554 36.9571 2.9182C38.2888 4.26086 39.036 6.0753 39.036 7.96634Z",
    fill: "#FEC093"
  }), lawyer_icon_jsx("path", {
    d: "M28.2811 11.1523C28.941 11.1523 29.476 10.6173 29.476 9.95737C29.476 9.29743 28.941 8.76245 28.2811 8.76245C27.6212 8.76245 27.0862 9.29743 27.0862 9.95737C27.0862 10.6173 27.6212 11.1523 28.2811 11.1523Z",
    fill: "#7A432A"
  }), lawyer_icon_jsx("path", {
    d: "M35.4494 11.1523C36.1094 11.1523 36.6443 10.6173 36.6443 9.95737C36.6443 9.29743 36.1094 8.76245 35.4494 8.76245C34.7895 8.76245 34.2545 9.29743 34.2545 9.95737C34.2545 10.6173 34.7895 11.1523 35.4494 11.1523Z",
    fill: "#7A432A"
  }), lawyer_icon_jsx("path", {
    d: "M39.0345 5.3363V8.52274C37.8431 7.07801 36.8677 5.46801 36.1388 3.74309H36.1378C35.6944 3.90887 35.2415 4.04819 34.7816 4.16031C33.8272 4.39531 32.8479 4.51401 31.865 4.51381C30.4061 4.51395 28.959 4.25292 27.5922 3.74309C26.8625 5.46786 25.8868 7.0778 24.6955 8.52274V5.3363C24.6897 4.41143 24.9193 3.50029 25.3626 2.68857C25.757 1.95669 26.3555 1.35512 27.0853 0.956944C28.227 0.48039 29.4336 0.177635 30.6651 0.0587663C31.0644 0.0189358 31.4643 -0.000647517 31.865 1.6324e-05C33.5058 -0.000194941 35.1304 0.325057 36.6446 0.956944C38.0506 1.6948 39.0345 3.37665 39.0345 5.3363Z",
    fill: "#7A432A"
  }), lawyer_icon_jsx("path", {
    d: "M30.9578 15.9327H29.475V14.3394H30.9578C32.0482 14.3394 33.1035 14.0886 33.8532 13.6514L34.656 15.0275C33.6554 15.6112 32.3421 15.9327 30.9578 15.9327Z",
    fill: "#F7A468"
  }), lawyer_icon_jsx("path", {
    d: "M47.0007 31.7879V47.0002H16.7295V31.7879C16.7295 30.8997 17.0265 30.037 17.5732 29.3369C18.1199 28.6369 18.8849 28.1397 19.7467 27.9244L23.1024 27.0849L25.4922 26.2883L31.8651 43.0171L38.238 26.2883L40.6278 27.0849L43.9835 27.9244C44.8452 28.1397 45.6103 28.6369 46.157 29.3369C46.7037 30.037 47.0006 30.8997 47.0007 31.7879Z",
    fill: "#3D4D63"
  }), lawyer_icon_jsx("path", {
    d: "M47.0002 32.0457V47H25.4808C32.7797 44.884 41.6221 40.6162 47.0002 32.0457Z",
    fill: "#374559"
  }), lawyer_icon_jsx("path", {
    d: "M31.0673 43.0173H32.6605V47.0004H31.0673V43.0173Z",
    fill: "#22303D"
  }), lawyer_icon_jsx("path", {
    d: "M27.8788 43.8138H29.4721V45.4071H27.8788V43.8138Z",
    fill: "#22303D"
  }), lawyer_icon_jsx("path", {
    d: "M21.507 39.8308H23.1002V47.0003H21.507V39.8308Z",
    fill: "#22303D"
  }), lawyer_icon_jsx("path", {
    d: "M40.6243 39.8306H42.2175V47.0001H40.6243V39.8306Z",
    fill: "#22303D"
  }), lawyer_icon_jsx("path", {
    d: "M23.1012 27.0849L22.3046 35.051H25.491L24.6944 38.2375L31.8639 43.0171L25.491 26.2883L23.1012 27.0849Z",
    fill: "#4C5D72"
  }), lawyer_icon_jsx("path", {
    d: "M40.6264 27.0849L41.423 35.051H38.2366L39.0332 38.2375L31.8637 43.0171L38.2366 26.2883L40.6264 27.0849Z",
    fill: "#4C5D72"
  }), lawyer_icon_jsx("path", {
    d: "M39.0356 5.3363V8.52274C37.8443 7.07801 36.8689 5.46801 36.14 3.74309H36.139C35.6955 3.90887 35.2427 4.04819 34.7827 4.16031C33.9143 2.36667 32.463 0.920697 30.6663 0.0587663C31.0656 0.0189358 31.4655 -0.000647517 31.8662 1.6324e-05C33.507 -0.000194941 35.1315 0.325057 36.6458 0.956944C38.0518 1.6948 39.0356 3.37665 39.0356 5.3363Z",
    fill: "#743B20"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/right-tick-icon.tsx
var right_tick_icon_jsx = external_react_default.a.createElement;

function RightTickIcon({
  color = "#000"
}) {
  return right_tick_icon_jsx("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, right_tick_icon_jsx("path", {
    d: "M12.5977 2.17236C7.08366 2.17236 2.59766 6.65836 2.59766 12.1724C2.59766 17.6864 7.08366 22.1724 12.5977 22.1724C18.1117 22.1724 22.5977 17.6864 22.5977 12.1724C22.5977 6.65836 18.1117 2.17236 12.5977 2.17236ZM10.5987 16.5854L7.59311 13.5863C7.20236 13.1964 7.20157 12.5636 7.59135 12.1727C7.98137 11.7815 8.61467 11.7808 9.00558 12.1711L10.5967 13.7594L15.1837 9.17236C15.5741 8.7819 16.2072 8.7819 16.5977 9.17236C16.9881 9.56283 16.9881 10.1959 16.5977 10.5864L10.5987 16.5854Z",
    fill: "#2FAB73"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/eye-icon.tsx
var eye_icon_jsx = external_react_default.a.createElement;

function EyeIcon({
  color = "#000"
}) {
  return eye_icon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, eye_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, eye_icon_jsx("path", {
    d: "M0.666656 8C0.666656 8 3.33332 2.66666 7.99999 2.66666C12.6667 2.66666 15.3333 8 15.3333 8C15.3333 8 12.6667 13.3333 7.99999 13.3333C3.33332 13.3333 0.666656 8 0.666656 8Z",
    stroke: "#9AB1BD",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), eye_icon_jsx("path", {
    d: "M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
    stroke: "#9AB1BD",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), eye_icon_jsx("defs", null, eye_icon_jsx("clipPath", {
    id: "clip0"
  }, eye_icon_jsx("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/star-icon.tsx
var star_icon_jsx = external_react_default.a.createElement;

function StarIcon({
  color = "#000"
}) {
  return star_icon_jsx("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, star_icon_jsx("path", {
    d: "M14.1891 6.16509L10.2219 5.58853L8.44847 1.99322C8.40003 1.89478 8.32034 1.81509 8.2219 1.76666C7.97503 1.64478 7.67503 1.74634 7.55159 1.99322L5.77815 5.58853L1.81097 6.16509C1.70159 6.18072 1.60159 6.23228 1.52503 6.31041C1.43247 6.40554 1.38146 6.53353 1.38322 6.66625C1.38498 6.79897 1.43936 6.92557 1.5344 7.01822L4.40472 9.81666L3.72659 13.7682C3.71069 13.8601 3.72086 13.9547 3.75595 14.0411C3.79105 14.1276 3.84966 14.2024 3.92514 14.2572C4.00062 14.3121 4.08995 14.3446 4.183 14.3513C4.27605 14.3579 4.3691 14.3383 4.45159 14.2948L8.00003 12.4292L11.5485 14.2948C11.6453 14.3463 11.7578 14.3635 11.8657 14.3448C12.1375 14.2979 12.3203 14.0401 12.2735 13.7682L11.5953 9.81666L14.4657 7.01822C14.5438 6.94166 14.5953 6.84166 14.611 6.73228C14.6532 6.45884 14.4625 6.20572 14.1891 6.16509Z",
    fill: "#FEA250"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/backArrow-icon.tsx
var backArrow_icon_jsx = external_react_default.a.createElement;

function BackArrowIcon({
  color = "#000"
}) {
  return backArrow_icon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, backArrow_icon_jsx("path", {
    d: "M23.75 13.7499H8.925L13.4625 8.29986C13.6747 8.04459 13.7768 7.71548 13.7463 7.38495C13.7158 7.05442 13.5553 6.74953 13.3 6.53736C13.0447 6.32518 12.7156 6.22311 12.3851 6.25358C12.0546 6.28406 11.7497 6.44459 11.5375 6.69986L5.2875 14.1999C5.24545 14.2595 5.20785 14.3222 5.175 14.3874C5.175 14.4499 5.175 14.4874 5.0875 14.5499C5.03084 14.6932 5.00118 14.8457 5 14.9999C5.00118 15.154 5.03084 15.3065 5.0875 15.4499C5.0875 15.5124 5.0875 15.5499 5.175 15.6124C5.20785 15.6775 5.24545 15.7402 5.2875 15.7999L11.5375 23.2999C11.655 23.441 11.8022 23.5544 11.9686 23.6322C12.1349 23.71 12.3164 23.7502 12.5 23.7499C12.7921 23.7504 13.0751 23.6487 13.3 23.4624C13.4266 23.3574 13.5312 23.2285 13.6079 23.0831C13.6846 22.9377 13.7318 22.7785 13.7469 22.6148C13.762 22.4511 13.7447 22.286 13.6959 22.129C13.6471 21.972 13.5678 21.8262 13.4625 21.6999L8.925 16.2499H23.75C24.0815 16.2499 24.3995 16.1182 24.6339 15.8837C24.8683 15.6493 25 15.3314 25 14.9999C25 14.6683 24.8683 14.3504 24.6339 14.116C24.3995 13.8816 24.0815 13.7499 23.75 13.7499Z",
    fill: "#029532"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/rightArrow-icon.tsx
var rightArrow_icon_jsx = external_react_default.a.createElement;

function RightArrowIcon({
  color = "#000"
}) {
  return rightArrow_icon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rightArrow_icon_jsx("path", {
    d: "M6.25 13.7499H21.075L16.5375 8.29986C16.3253 8.04459 16.2232 7.71548 16.2537 7.38495C16.2842 7.05442 16.4447 6.74953 16.7 6.53736C16.9553 6.32518 17.2844 6.22311 17.6149 6.25358C17.9454 6.28406 18.2503 6.44459 18.4625 6.69986L24.7125 14.1999C24.7545 14.2595 24.7922 14.3222 24.825 14.3874C24.825 14.4499 24.825 14.4874 24.9125 14.5499C24.9692 14.6932 24.9988 14.8457 25 14.9999C24.9988 15.154 24.9692 15.3065 24.9125 15.4499C24.9125 15.5124 24.9125 15.5499 24.825 15.6124C24.7922 15.6775 24.7545 15.7402 24.7125 15.7999L18.4625 23.2999C18.345 23.441 18.1978 23.5544 18.0314 23.6322C17.8651 23.71 17.6836 23.7502 17.5 23.7499C17.2079 23.7504 16.9249 23.6487 16.7 23.4624C16.5734 23.3574 16.4688 23.2285 16.3921 23.0831C16.3154 22.9377 16.2682 22.7785 16.2531 22.6148C16.238 22.4511 16.2553 22.286 16.3041 22.129C16.3529 21.972 16.4322 21.8262 16.5375 21.6999L21.075 16.2499H6.25C5.91848 16.2499 5.60054 16.1182 5.36612 15.8837C5.13169 15.6493 5 15.3314 5 14.9999C5 14.6683 5.13169 14.3504 5.36612 14.116C5.60054 13.8816 5.91848 13.7499 6.25 13.7499Z",
    fill: "white"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/noun_quality-icon.tsx
var noun_quality_icon_jsx = external_react_default.a.createElement;

function NounQualityIcon({
  color = "#000"
}) {
  return noun_quality_icon_jsx("svg", {
    width: "63",
    height: "63",
    viewBox: "0 0 47 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, noun_quality_icon_jsx("path", {
    d: "M13.9521 63.9646L13.9491 63.9666C13.4538 64.2982 12.801 64.348 12.2698 64.0537C11.7258 63.7623 11.4023 63.2032 11.4022 62.5863L13.9521 63.9646ZM13.9521 63.9646L23.667 57.2929L33.4173 63.9649L33.4171 63.9651L33.4265 63.971C33.6917 64.1385 33.9955 64.2545 34.3333 64.2545C34.5982 64.2545 34.8616 64.1866 35.1013 64.0525C35.6198 63.7643 35.9667 63.2097 35.9667 62.586V62.5857L35.949 44.1367C42.6554 39.7801 46.6333 32.376 46.6333 24.2658C46.6333 11.2794 36.3375 0.7 23.6667 0.7C10.9959 0.7 0.7 11.2794 0.7 24.2658C0.7 32.3762 4.67811 39.7803 11.3846 44.1369L11.4022 62.586L13.9521 63.9646ZM24.5828 53.9079L24.5829 53.9078L24.5735 53.9019C24.3083 53.7344 24.0045 53.6183 23.6667 53.6183C23.3414 53.6183 23.0318 53.7086 22.7481 53.9096C22.7475 53.9101 22.7469 53.9105 22.7462 53.911L14.6682 59.4616L14.6517 45.9181C20.4074 48.4696 26.9272 48.4695 32.6828 45.9176L32.6993 59.462L24.5828 53.9079ZM23.6667 44.4945C12.8175 44.4945 3.96667 35.4211 3.96667 24.2658C3.96667 13.1105 12.8175 4.03715 23.6667 4.03715C34.5159 4.03715 43.3667 13.1105 43.3667 24.2658C43.3667 35.4211 34.5159 44.4945 23.6667 44.4945Z",
    fill: "black",
    stroke: "black",
    "stroke-width": "0.6"
  }), noun_quality_icon_jsx("path", {
    d: "M25.0404 11.8798L25.04 11.879C24.7925 11.3708 24.2595 11.0367 23.6691 11.0367C23.0831 11.0367 22.5465 11.349 22.2973 11.8808C22.2972 11.8812 22.297 11.8815 22.2968 11.8819L19.3037 18.0983L12.6179 19.1043C12.6178 19.1043 12.6177 19.1043 12.6176 19.1043C12.0423 19.1888 11.5549 19.6084 11.3722 20.171C11.1897 20.733 11.3306 21.36 11.7596 21.7801C11.7599 21.7803 11.7601 21.7806 11.7604 21.7809L16.5927 26.6151L15.4543 33.4464C15.4543 33.4466 15.4542 33.4469 15.4542 33.4471C15.3531 34.0296 15.5939 34.6342 16.0646 34.9727C16.3377 35.1867 16.6672 35.2682 16.9669 35.2682C17.2143 35.2682 17.4608 35.2048 17.6856 35.0792C17.686 35.0789 17.6864 35.0787 17.6868 35.0785L23.6516 31.8467L29.6187 35.0618L29.6194 35.0621C30.1313 35.3354 30.7666 35.2939 31.2389 34.9356C31.7046 34.5822 31.9504 33.998 31.8485 33.4105C31.8484 33.4103 31.8484 33.4101 31.8484 33.4099L30.71 26.5786L35.5422 21.7444C35.5425 21.7441 35.5428 21.7438 35.5431 21.7436C35.9722 21.3235 36.1123 20.7154 35.9312 20.1368C35.7666 19.6089 35.296 19.1888 34.7206 19.1043C34.7205 19.1043 34.7204 19.1043 34.7203 19.1043L28.0345 18.0983L25.0404 11.8798ZM26.7884 21.0878L31.211 21.7411L28.0099 24.9431C28.0095 24.9435 28.0091 24.9439 28.0087 24.9443C27.6406 25.3019 27.4795 25.8239 27.5606 26.3231L27.5607 26.3239L28.3115 30.8301L24.3684 28.7061L24.3683 28.7061C23.9358 28.4735 23.3669 28.4735 22.9344 28.7061L22.9343 28.7061L18.9912 30.8301L19.742 26.3239L19.7421 26.3231C19.8231 25.8239 19.662 25.3019 19.294 24.9442L16.0915 21.741L20.4984 21.0876L20.4985 21.0876L20.5028 21.0869C20.9861 21.0042 21.4369 20.6942 21.6458 20.2265L23.6669 16.1276L25.64 20.2283L25.6404 20.2292C25.8615 20.683 26.2877 21.0229 26.7884 21.0878Z",
    fill: "black",
    stroke: "black",
    "stroke-width": "0.4"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/IcBaselineSecurity-icon.tsx
var IcBaselineSecurity_icon_jsx = external_react_default.a.createElement;

function IcBaselineSecurityIcon({
  color = "#000"
}) {
  return IcBaselineSecurity_icon_jsx("svg", {
    width: "63",
    height: "63",
    viewBox: "0 0 58 59",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, IcBaselineSecurity_icon_jsx("path", {
    d: "M29 2.44031L7.25 12.24V26.9395C7.25 40.5366 16.53 53.2517 29 56.3386C41.47 53.2517 50.75 40.5366 50.75 26.9395V12.24L29 2.44031ZM29 29.3649H45.9167C44.6358 39.4586 37.99 48.4498 29 51.2672V29.3894H12.0833V15.4249L29 7.80563V29.3649Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icons/knowledge-icon.tsx
var knowledge_icon_jsx = external_react_default.a.createElement;

function KnowledgeIcon({
  color = "#000"
}) {
  return knowledge_icon_jsx("svg", {
    width: "63",
    height: "63",
    viewBox: "0 0 63 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, knowledge_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, knowledge_icon_jsx("path", {
    d: "M57.5227 42.9635C56.9059 42.9635 56.2942 43.0685 55.7044 43.2759L38.3757 49.3669C38.4512 49.0031 38.4909 48.6263 38.4909 48.2404C38.4909 45.1885 36.008 42.7056 32.9561 42.7056H16.7598C11.7478 42.7056 7.03581 44.6573 3.49184 48.2014L0.0151367 51.678V63H40.1057L59.9124 53.351C61.7796 52.4414 62.986 50.5118 62.986 48.4348C62.9861 45.4179 60.5353 42.9635 57.5227 42.9635ZM58.2967 50.034L39.2548 59.3103H3.70486V53.2064L6.10084 50.8104C8.94795 47.9633 12.7334 46.3954 16.7598 46.3954H32.956C33.9734 46.3954 34.8011 47.2231 34.8011 48.2405C34.8011 49.2579 33.9734 50.0855 32.956 50.0855H21.231V53.7752H36.9608L56.9278 46.7569C57.1235 46.6881 57.3236 46.6532 57.5226 46.6532C58.3757 46.6532 59.2963 47.3344 59.2963 48.4348C59.2964 49.1104 58.904 49.738 58.2967 50.034Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M22.4989 25.9226C23.4946 26.7099 24.0657 27.8753 24.0657 29.1204V33.8818L26.3502 38.6267H36.6524L38.937 33.8818V29.1322C38.937 27.8808 39.5105 26.7089 40.5104 25.9173C44.0156 23.1425 46.0259 18.99 46.0259 14.5247C46.0258 6.5158 39.5101 0 31.5012 0C31.3141 0 31.1243 0.00368972 30.9369 0.0107002C27.1743 0.153738 23.6564 1.74007 21.0311 4.4776C18.4075 7.21353 16.9675 10.7943 16.9766 14.5603C16.9874 19.0149 19.0002 23.1563 22.4989 25.9226ZM34.3337 34.937H28.6686L27.7553 33.04V30.9652H35.247V33.04L34.3337 34.937ZM23.6942 7.0315C25.6537 4.98826 28.2756 3.80422 31.077 3.69784C31.2179 3.69255 31.3607 3.68972 31.5012 3.68972C37.4756 3.68972 42.3361 8.55031 42.3361 14.5246C42.3361 17.8555 40.8358 20.9536 38.2202 23.0242C36.8327 24.1225 35.8821 25.6154 35.4737 27.2754H27.5312C27.1244 25.6165 26.1745 24.1249 24.7874 23.0282C22.1765 20.9638 20.6746 17.8741 20.6664 14.5514C20.6596 11.7454 21.7349 9.07462 23.6942 7.0315Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M7.80127 12.7112H13.2859V16.4009H7.80127V12.7112Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M10.0537 4.30493L11.8986 1.10963L16.6483 3.85196L14.8034 7.04726L10.0537 4.30493Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M10.0532 24.8066L14.8029 22.0643L16.6478 25.2596L11.8981 28.0019L10.0532 24.8066Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M49.7139 12.7112H55.1985V16.4009H49.7139V12.7112Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M46.3516 3.85156L51.1013 1.10924L52.9461 4.30454L48.1964 7.04686L46.3516 3.85156Z",
    fill: "black"
  }), knowledge_icon_jsx("path", {
    d: "M46.3516 25.2616L48.1964 22.0663L52.9461 24.8086L51.1013 28.0039L46.3516 25.2616Z",
    fill: "black"
  })), knowledge_icon_jsx("defs", null, knowledge_icon_jsx("clipPath", {
    id: "clip0"
  }, knowledge_icon_jsx("rect", {
    width: "63",
    height: "63",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icon/icons/chat-icon.tsx
var chat_icon_jsx = external_react_default.a.createElement;

function ChatIcon({
  color = "#000"
}) {
  return chat_icon_jsx("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, chat_icon_jsx("path", {
    d: "M21.0006 20.9989C21.9308 20.9989 22.6848 20.2449 22.6848 19.3147C22.6848 18.3845 21.9308 17.6305 21.0006 17.6305C20.0705 17.6305 19.3164 18.3845 19.3164 19.3147C19.3164 20.2449 20.0705 20.9989 21.0006 20.9989Z",
    fill: "white"
  }), chat_icon_jsx("path", {
    d: "M27.735 20.9989C28.6652 20.9989 29.4192 20.2449 29.4192 19.3147C29.4192 18.3845 28.6652 17.6305 27.735 17.6305C26.8048 17.6305 26.0508 18.3845 26.0508 19.3147C26.0508 20.2449 26.8048 20.9989 27.735 20.9989Z",
    fill: "white"
  }), chat_icon_jsx("path", {
    d: "M14.2623 20.9989C15.1925 20.9989 15.9465 20.2449 15.9465 19.3147C15.9465 18.3845 15.1925 17.6305 14.2623 17.6305C13.3322 17.6305 12.5781 18.3845 12.5781 19.3147C12.5781 20.2449 13.3322 20.9989 14.2623 20.9989Z",
    fill: "white"
  }), chat_icon_jsx("path", {
    d: "M32.7878 5.84167H9.20888C7.86884 5.84167 6.58368 6.374 5.63613 7.32156C4.68858 8.26911 4.15625 9.55427 4.15625 10.8943V36.1575C4.15676 36.4559 4.23657 36.7488 4.38749 37.0063C4.53842 37.2638 4.75504 37.4765 5.0152 37.6227C5.26691 37.7654 5.55113 37.8408 5.84046 37.8417C6.14275 37.8416 6.43944 37.7601 6.69941 37.6059L14.2615 33.0248C14.541 32.8584 14.8628 32.7765 15.1878 32.789H32.7878C34.1279 32.789 35.413 32.2567 36.3606 31.3092C37.3081 30.3616 37.8405 29.0765 37.8405 27.7364V10.8943C37.8405 9.55427 37.3081 8.26911 36.3606 7.32156C35.413 6.374 34.1279 5.84167 32.7878 5.84167ZM34.472 27.7364C34.472 28.1831 34.2946 28.6115 33.9787 28.9273C33.6629 29.2432 33.2345 29.4206 32.7878 29.4206H15.1878C14.268 29.4199 13.3653 29.6703 12.5773 30.1448L7.52467 33.1764V10.8943C7.52467 10.4476 7.70211 10.0192 8.01797 9.70339C8.33382 9.38754 8.7622 9.2101 9.20888 9.2101H32.7878C33.2345 9.2101 33.6629 9.38754 33.9787 9.70339C34.2946 10.0192 34.472 10.4476 34.472 10.8943V27.7364Z",
    fill: "white"
  }));
}
// CONCATENATED MODULE: ./src/components/icon/icon.tsx























const IconMapping = {
  search: SearchIcon,
  hamburger: HamburgerIcon,
  yoga: YogaIcon,
  weightloss: WeightLossIcon,
  mentalhealth: MentalHealthIcon,
  accountant: AccountantIcon,
  ayruvedu: AryuveduIcon,
  career: CareerIcon,
  dermatologist: DermatologistIcon,
  diet: DietIcon,
  doctor: DoctorIcon,
  fitness: FitnessIcon,
  gst: GstIcon,
  lawyer: LawyerIcon,
  righttick: RightTickIcon,
  eye: EyeIcon,
  star: StarIcon,
  backarrow: BackArrowIcon,
  rightarrow: RightArrowIcon,
  knowledge: KnowledgeIcon,
  icBaselineSecurity: IcBaselineSecurityIcon,
  nounQuality: NounQualityIcon,
  chat: ChatIcon
};
function Icon({
  name,
  color
}) {
  return IconMapping[name]({
    color
  });
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9+g8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingArticles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5nti");
/* harmony import */ var _components_icon_icons_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E4hQ");
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function TrendingArticles({
  TrendingArticlesItems
}) {
  return __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* BoxContainer */ "f"], {
    background: "#F8F8FB",
    borderRadius: "5px"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Subtext */ "Y"], {
    fontSize: "20px",
    color: "#002E46",
    fontWeight: "600"
  }, "Trending Articles")), TrendingArticlesItems.map((item, i) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Paratag */ "K"], null, item.articleTitle), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* FlexTag */ "p"], {
    justifyContent: "space-between"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Subtext */ "Y"], {
    fontSize: "14px",
    color: "#9AB1BD"
  }, item.consultantName), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* FlexTag */ "p"], null, __jsx(_components_icon_icon__WEBPACK_IMPORTED_MODULE_1__[/* Icon */ "a"], {
    name: _components_icon_icons_props__WEBPACK_IMPORTED_MODULE_2__[/* Icons */ "a"].eye
  }), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginLeft: "5",
    marginTop: "-3"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Subtext */ "Y"], {
    fontSize: "14px",
    color: "#9AB1BD"
  }, item.views))))))));
}

/***/ }),

/***/ "9LfH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wJam");
/* harmony import */ var _img_mobile_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oyhP");
/* harmony import */ var _img_mobile_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_mobile_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_google_play_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sH8P");
/* harmony import */ var _img_google_play_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_google_play_png__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function DownloadApp() {
  return __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SectionMultiConsultant */ "T"], null, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    sm: 12,
    md: 6
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "60"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* CenterTag */ "h"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* DownloadMobile */ "o"], {
    src: _img_mobile_1_png__WEBPACK_IMPORTED_MODULE_4__
  })))), __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    sm: 12,
    md: 6
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginLeft: "20"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "100"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* MobileAppHeading */ "G"], null, "Download the Protalk App"), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Subtext */ "Y"], {
    color: "#4F5665",
    fontSize: "16px",
    "letter-spacing": "0.56px"
  }, "Access all domain consultations with verified experts on the Protalk app. Connect with experts online, available 24/7, from the comfort of your home.")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "30"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Subtext */ "Y"], {
    color: "#4F5665",
    fontSize: "16px",
    "letter-spacing": "0.56px"
  }, "Get the link to download the app")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "30",
    marginBottom: "20"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* ImageTag */ "y"], {
    src: _img_google_play_png__WEBPACK_IMPORTED_MODULE_5__
  })))))));
}

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B68Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ChatButton; });

// UNUSED EXPORTS: Button

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/theme.ts
const theme_theme = {
  primary: {
    color: "#009846"
  },
  secondary: {
    color: "#3F3356"
  }
};
// CONCATENATED MODULE: ./src/components/button/button.tsx
var __jsx = external_react_default.a.createElement;


function Button({
  children,
  theme = "primary",
  onClickEvent,
  buttonType = "button"
}) {
  const containerStyle = Object(external_react_["useMemo"])(() => {
    return {
      backgroundColor: theme_theme[theme].color,
      border: "none",
      borderRadius: "4px",
      fontWeight: 500,
      cursor: "pointer"
    };
  }, [theme]);
  return __jsx("button", {
    style: containerStyle,
    type: buttonType,
    onClick: onClickEvent
  }, children);
}
function ChatButton({
  children,
  onClickEvent,
  buttonType = "button"
}) {
  const containerStyle = Object(external_react_["useMemo"])(() => {
    return {
      backgroundColor: "#000",
      border: "10px solid #009846",
      borderRadius: "50%",
      fontWeight: 500,
      cursor: "pointer",
      filter: "drop-shadow(0px 2px 10px #009846)",
      padding: "10px"
    };
  }, []);
  return __jsx("button", {
    style: containerStyle,
    type: buttonType,
    onClick: onClickEvent
  }, children);
}

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E4hQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icons; });
let Icons;

(function (Icons) {
  Icons["search"] = "search";
  Icons["hamburger"] = "hamburger";
  Icons["lawyer"] = "lawyer";
  Icons["fitness"] = "fitness";
  Icons["gst"] = "gst";
  Icons["career"] = "career";
  Icons["yoga"] = "yoga";
  Icons["doctor"] = "doctor";
  Icons["diet"] = "diet";
  Icons["accountant"] = "accountant";
  Icons["mentalhealth"] = "mentalhealth";
  Icons["weightloss"] = "weightloss";
  Icons["dermatologist"] = "dermatologist";
  Icons["ayruvedu"] = "ayruvedu";
  Icons["righttick"] = "righttick";
  Icons["eye"] = "eye";
  Icons["star"] = "star";
  Icons["backarrow"] = "backarrow";
  Icons["rightarrow"] = "rightarrow";
  Icons["knowledge"] = "knowledge";
  Icons["icBaselineSecurity"] = "icBaselineSecurity";
  Icons["nounQuality"] = "nounQuality";
  Icons["chat"] = "chat";
})(Icons || (Icons = {}));

/***/ }),

/***/ "FJZC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SearchBox; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/search-box/style.ts

const SearchBoxTag = external_styled_components_default.a.div.withConfig({
  displayName: "style__SearchBoxTag",
  componentId: "e5qeqf-0"
})(["position:relative;display:flex;width:100%;"]);
const SearchIcon = external_styled_components_default.a.div.withConfig({
  displayName: "style__SearchIcon",
  componentId: "e5qeqf-1"
})(["position:absolute;top:14px;left:8px;width:14px;"]);
const InputSearch = external_styled_components_default.a.input.withConfig({
  displayName: "style__InputSearch",
  componentId: "e5qeqf-2"
})(["border:0.4px solid #e8eef3;border-radius:4px;height:40px;width:100%;padding:2px 23px 2px 30px;outline:0;background-color:transparent;font-family:Cerebri,sans-serif;&:hover{border:1px solid #e5e5e5;background-color:white;}"]);
const ClearIcon = external_styled_components_default.a.img.withConfig({
  displayName: "style__ClearIcon",
  componentId: "e5qeqf-3"
})(["position:absolute;top:15px;right:8px;width:12px;cursor:pointer;visibility:hidden;"]);
// EXTERNAL MODULE: ./src/components/icon/icon.tsx + 23 modules
var icon = __webpack_require__("5nti");

// EXTERNAL MODULE: ./src/components/icon/icons-props.ts
var icons_props = __webpack_require__("E4hQ");

// CONCATENATED MODULE: ./src/components/search-box/search-box.tsx
var __jsx = external_react_default.a.createElement;




function SearchBox({
  onChange,
  value
}) {
  return __jsx(external_react_default.a.Fragment, null, __jsx(SearchBoxTag, null, __jsx(SearchIcon, null, __jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].search,
    color: "#DFDFDF"
  })), __jsx(InputSearch, {
    placeholder: "Search",
    type: "text",
    onChange: onChange,
    value: value
  }), __jsx(ClearIcon, {
    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
  })));
}

/***/ }),

/***/ "GNyq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrl; });
const BaseUrl = "http://13.127.122.195:8080";

/***/ }),

/***/ "Gafi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fitness-consultant-e8212fa838ce0bbce348519d6ae27dd9.png";

/***/ }),

/***/ "Hg/g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineYogaMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function OnlineYogaMobile() {
  return __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SectionOnlineYogaMobile */ "V"], null, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    sm: 12,
    md: 12
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "25"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Ptag */ "L"], {
    color: "#000000",
    fontSize: "24px"
  }, "Get 15% Off on your Online Consultants")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "5"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Boldtag */ "e"], {
    color: "#000000"
  }, "Use Code: 15PRO")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "15"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Atag */ "a"], {
    fontSize: "20",
    href: "",
    color: "#009846"
  }, "Chat Now ", ">"))))));
}

/***/ }),

/***/ "JlpT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Index; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/navs/navs.tsx + 2 modules
var navs = __webpack_require__("r1fl");

// EXTERNAL MODULE: ./src/view/banner/banner.tsx
var banner = __webpack_require__("b/TK");

// EXTERNAL MODULE: ./src/view/online-yoga/online-yoga.tsx
var online_yoga = __webpack_require__("PSHq");

// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__("R0TM");
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);

// EXTERNAL MODULE: external "styled-grid-system-component"
var external_styled_grid_system_component_ = __webpack_require__("esL6");

// EXTERNAL MODULE: external "styled-container-component"
var external_styled_container_component_ = __webpack_require__("lnRQ");

// EXTERNAL MODULE: ./src/components/small-component.ts
var small_component = __webpack_require__("wJam");

// CONCATENATED MODULE: ./src/view/popular-service/popular-service-expertis-template.tsx
var __jsx = external_react_default.a.createElement;





function PopularServiceExpertisTemplate({
  PopularItems
}) {
  return __jsx(small_component["O" /* SectionConsultant */], null, __jsx(small_component["s" /* H3tagConsultant */], null, "Popular Services"), __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "40"
  }, __jsx(external_styled_container_component_["Container"], null, __jsx(external_react_elastic_carousel_default.a, {
    showArrows: false,
    itemsToScroll: 2,
    itemsToShow: 2,
    verticalMode: false
  }, PopularItems.map((items, i) => __jsx(external_styled_grid_system_component_["Row"], null, __jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 12,
    xs: 12
  }, __jsx(small_component["x" /* ImageContainer */], null, __jsx(small_component["C" /* ImgTag */], {
    src: items.image,
    height: "300"
  }), __jsx(small_component["z" /* ImageText */], null, __jsx(small_component["t" /* Heading */], null, items.title), __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "20"
  }, __jsx(small_component["a" /* Atag */], {
    fontSize: "13",
    href: "",
    color: "#000"
  }, __jsx(small_component["Y" /* Subtext */], {
    color: "#000000",
    fontSize: "13px",
    "letter-spacing": "0.56px"
  }, items.description), items.price === "" ? __jsx(external_react_default.a.Fragment, null) : __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "50"
  }, __jsx(small_component["e" /* Boldtag */], null, "Starting from Rs", items.price)))))))))))));
}
// EXTERNAL MODULE: ./src/view/download-app/download-app.tsx
var download_app = __webpack_require__("9LfH");

// CONCATENATED MODULE: ./src/view/consultant-exp-law/consultant-exp-law.tsx
var consultant_exp_law_jsx = external_react_default.a.createElement;




function ConsultantExpertLaw({
  ConsultantExpertLawItems
}) {
  return consultant_exp_law_jsx(external_react_default.a.Fragment, null, consultant_exp_law_jsx(small_component["O" /* SectionConsultant */], null, consultant_exp_law_jsx(small_component["s" /* H3tagConsultant */], null, "Connect with our Certifield Lawyer Consultant Experts Today"), consultant_exp_law_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "40"
  }, consultant_exp_law_jsx(external_styled_container_component_["Container"], null, consultant_exp_law_jsx(external_styled_grid_system_component_["Row"], null, ConsultantExpertLawItems.map((item, i) => consultant_exp_law_jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "8",
    marginRight: "8"
  }, consultant_exp_law_jsx(small_component["x" /* ImageContainer */], null, consultant_exp_law_jsx(small_component["w" /* ImageBackgroundTag */], {
    background: item.image
  }, consultant_exp_law_jsx(small_component["I" /* Opacity */], null, consultant_exp_law_jsx(small_component["bb" /* TextWidth */], null, consultant_exp_law_jsx(small_component["ab" /* TextTitle */], null, consultant_exp_law_jsx(small_component["Y" /* Subtext */], {
    fontSize: "14px",
    color: "#fff"
  }, item.name)))))))))))));
}
// CONCATENATED MODULE: ./src/view/consultant-exp-law/consultant-exp-law-mobile.tsx
var consultant_exp_law_mobile_jsx = external_react_default.a.createElement;





function ConsultantExpertMobileLaw({
  ConsultantExpertLawItems
}) {
  const length = ConsultantExpertLawItems.length;
  const length1 = ConsultantExpertLawItems.length / 3;
  const length2 = length1 + 1;
  const length3 = length1 + length2 - 1;
  const d1 = ConsultantExpertLawItems.slice(0, length1);
  const d2 = ConsultantExpertLawItems.slice(length2, length3);
  const d3 = ConsultantExpertLawItems.slice(length3, length);
  var newArray = d2.map((item, index) => {
    return {
      id1: item._id,
      name1: item.name,
      image1: item.image,
      name2: d1[index] === undefined ? "" : d1[index].name,
      image2: d1[index] === undefined ? "" : d1[index].image,
      id2: d1[index] === undefined ? "" : d1[index]._id,
      name3: d1[index] === undefined ? "" : d3[index].name,
      image3: d1[index] === undefined ? "" : d3[index].image,
      id3: d1[index] === undefined ? "" : d3[index]._id
    };
  });
  return consultant_exp_law_mobile_jsx(external_react_default.a.Fragment, null, consultant_exp_law_mobile_jsx(small_component["O" /* SectionConsultant */], null, consultant_exp_law_mobile_jsx(small_component["s" /* H3tagConsultant */], null, "Connect with our Certifield Lawyer Consultant Experts Today"), consultant_exp_law_mobile_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "40"
  }, consultant_exp_law_mobile_jsx(external_styled_container_component_["Container"], null, consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Row"], null, consultant_exp_law_mobile_jsx(external_react_elastic_carousel_default.a, {
    showArrows: false,
    itemsToScroll: 2,
    itemsToShow: 2,
    verticalMode: false
  }, newArray.map((item, i) => consultant_exp_law_mobile_jsx(external_react_default.a.Fragment, null, consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Row"], null, consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Column"], {
    md: 6,
    sm: 6,
    xs: 6
  }, consultant_exp_law_mobile_jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "8",
    marginRight: "8"
  }, consultant_exp_law_mobile_jsx(small_component["x" /* ImageContainer */], null, consultant_exp_law_mobile_jsx(small_component["w" /* ImageBackgroundTag */], {
    background: item.image1
  }, consultant_exp_law_mobile_jsx(small_component["I" /* Opacity */], null, consultant_exp_law_mobile_jsx(small_component["bb" /* TextWidth */], null, consultant_exp_law_mobile_jsx(small_component["ab" /* TextTitle */], null, consultant_exp_law_mobile_jsx(small_component["Y" /* Subtext */], {
    fontSize: "14px",
    color: "#fff"
  }, item.name1))))))))), consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Row"], null, consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Column"], {
    md: 6,
    sm: 6,
    xs: 6
  }, item.image2 === "" ? consultant_exp_law_mobile_jsx(external_react_default.a.Fragment, null) : consultant_exp_law_mobile_jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "8",
    marginRight: "8"
  }, consultant_exp_law_mobile_jsx(small_component["x" /* ImageContainer */], null, consultant_exp_law_mobile_jsx(small_component["w" /* ImageBackgroundTag */], {
    background: item.image2
  }, consultant_exp_law_mobile_jsx(small_component["I" /* Opacity */], null, consultant_exp_law_mobile_jsx(small_component["bb" /* TextWidth */], null, consultant_exp_law_mobile_jsx(small_component["ab" /* TextTitle */], null, consultant_exp_law_mobile_jsx(small_component["Y" /* Subtext */], {
    fontSize: "14px",
    color: "#fff"
  }, item.name2))))))))), consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Row"], null, consultant_exp_law_mobile_jsx(external_styled_grid_system_component_["Column"], {
    md: 6,
    sm: 6,
    xs: 6
  }, item.image3 === "" ? consultant_exp_law_mobile_jsx(external_react_default.a.Fragment, null) : consultant_exp_law_mobile_jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "8",
    marginRight: "8"
  }, consultant_exp_law_mobile_jsx(small_component["x" /* ImageContainer */], null, consultant_exp_law_mobile_jsx(small_component["w" /* ImageBackgroundTag */], {
    background: item.image3
  }, consultant_exp_law_mobile_jsx(small_component["I" /* Opacity */], null, consultant_exp_law_mobile_jsx(small_component["bb" /* TextWidth */], null, consultant_exp_law_mobile_jsx(small_component["ab" /* TextTitle */], null, consultant_exp_law_mobile_jsx(small_component["Y" /* Subtext */], {
    fontSize: "14px",
    color: "#fff"
  }, item.name3)))))))))))))))));
}
// EXTERNAL MODULE: ./src/view/popular-expertis-articles.tsx + 1 modules
var popular_expertis_articles = __webpack_require__("n6aT");

// EXTERNAL MODULE: ./src/view/online-yoga/online-yoga-mobile.tsx
var online_yoga_mobile = __webpack_require__("Hg/g");

// EXTERNAL MODULE: ./src/view/popular-service/popular-service-mobile.tsx
var popular_service_mobile = __webpack_require__("P3TD");

// EXTERNAL MODULE: ./src/view/expert-articles/expert-articles-mobile.tsx
var expert_articles_mobile = __webpack_require__("1uuC");

// EXTERNAL MODULE: ./src/components/icon/icon.tsx + 23 modules
var icon = __webpack_require__("5nti");

// EXTERNAL MODULE: ./src/components/icon/icons-props.ts
var icons_props = __webpack_require__("E4hQ");

// CONCATENATED MODULE: ./src/view/lawyer-icon-text/lawyer-icon-text.tsx
var lawyer_icon_text_jsx = external_react_default.a.createElement;






function LawyerIconText() {
  return lawyer_icon_text_jsx(small_component["S" /* SectionIconText */], null, lawyer_icon_text_jsx(external_styled_container_component_["Container"], null, lawyer_icon_text_jsx(external_styled_grid_system_component_["Row"], null, lawyer_icon_text_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 4
  }, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "60"
  }, lawyer_icon_text_jsx(small_component["h" /* CenterTag */], null, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "100"
  }, lawyer_icon_text_jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].knowledge
  }), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#000",
    fontSize: "20px",
    letterSpacing: "0.56px",
    fontWeight: "500"
  }, "Value though Experts"), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#787887",
    fontSize: "16px",
    "letter-spacing": "0.56px"
  }, "Experts written articles and solutions to your problems"))))), lawyer_icon_text_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 4
  }, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], null, lawyer_icon_text_jsx(small_component["h" /* CenterTag */], null, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "100"
  }, lawyer_icon_text_jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].icBaselineSecurity
  }), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#000",
    fontSize: "20px",
    letterSpacing: "0.56px",
    fontWeight: "500"
  }, "Privary though Security"), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#787887",
    fontSize: "16px",
    "letter-spacing": "0.56px"
  }, "Your conversions with our experts will be encrypted and secured"))))), lawyer_icon_text_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 4
  }, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], null, lawyer_icon_text_jsx(small_component["h" /* CenterTag */], null, lawyer_icon_text_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "100"
  }, lawyer_icon_text_jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].nounQuality
  }), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#000",
    fontSize: "20px",
    letterSpacing: "0.56px",
    fontWeight: "500"
  }, "Quality Though Consultants"), lawyer_icon_text_jsx(small_component["Y" /* Subtext */], {
    color: "#787887",
    fontSize: "16px",
    "letter-spacing": "0.56px"
  }, "Certified Experts to guide you though to provide best solution possible."))))))));
}
// EXTERNAL MODULE: ./src/url.tsx
var url = __webpack_require__("GNyq");

// EXTERNAL MODULE: ./src/components/button/button.tsx + 1 modules
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/img/logo.png
var logo = __webpack_require__("fARU");

// CONCATENATED MODULE: ./src/view/chat/chat-subexpertis.tsx
var chat_subexpertis_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Chat({
  expId
}) {
  const [open, setOpen] = external_react_default.a.useState(false);
  const [buttonName, setButtonName] = external_react_default.a.useState({});
  const bottomRef = Object(external_react_["useRef"])(null);
  const {
    0: values,
    1: setValue
  } = Object(external_react_["useState"])("");
  const {
    0: typeBox,
    1: setTypeBox
  } = Object(external_react_["useState"])(false);
  const {
    0: messages,
    1: setMessages
  } = Object(external_react_["useState"])([]);
  const [subExpertise, setSubExpertise] = external_react_default.a.useState([]);
  const expertiseId = expId;
  const [subExpertiseId, setSubExpertiseId] = external_react_default.a.useState("");
  const [queryContent, setQueryContent] = external_react_default.a.useState("");
  const [queryTitle, setQueryTitle] = external_react_default.a.useState("");

  function onClickEvent() {
    setOpen(!open);
  }

  const scrollToBottom = () => bottomRef.current.scrollIntoView();

  function nextQuestion(name, id, e) {
    setButtonName(_objectSpread(_objectSpread({}, buttonName), {}, {
      [name]: e.target.name
    }));
    scrollToBottom();
    const dev = subExpertise.filter(eve => onSelectDevice(eve, name));
    setSubExpertiseId(dev[0]._id);
    dev.length === 0 ? "" : getQuery();
  }

  Object(external_react_["useEffect"])(() => {
    getSubExpertItem(expId);
  }, []);

  async function getSubExpertItem(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_subexpertise/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    const content = [{
      text: "Select your area of Sub expertise",
      button: data.subExpertise
    }];
    setSubExpertise(data.subExpertise);
    setMessages(messages.concat(content));
  }

  async function getQuery() {
    setTypeBox(true);
    const content = [{
      text: "Please provide your Query Title ?"
    }];
    setMessages(messages.concat(content));
  }

  const onSelectDevice = (deviceObj, sDevice) => {
    return deviceObj.name === sDevice;
  };

  function onChangeEvent(e) {
    const {
      value
    } = e.target;
    setValue(value);
  }

  function onSubmitEvent(event) {
    event.preventDefault();
    setValue("");
  }

  function handleKeyDown(e) {
    const {
      value
    } = e.target;

    if (e.key === "Enter") {
      var green = messages[messages.length - 1];
      green.text === "Please provide your Query Title ?" ? getNextQuery(value) : "";
      green.text === "Please can you elaborate your Query ?" ? getNextElaborateQuery(value) : "";
      green.text === "Please provide your Mobile Number, so that we can forward you playstore link" ? getPhone(value) : "";
    }
  }

  function getNextQuery(value) {
    setQueryTitle(value);
    const content = [{
      text1: value
    }, {
      text: "Please can you elaborate your Query ?"
    }];
    setMessages(messages.concat(content));
    scrollToBottom();
  }

  function getNextElaborateQuery(value) {
    setQueryContent(value);
    const content = [{
      text1: value
    }, {
      text: "Your query has been posted to our experts, you can find your query answer in your Protalk app"
    }, {
      text: "Please provide your Mobile Number, so that we can forward you playstore link"
    }];
    setMessages(messages.concat(content));
    scrollToBottom();
  }

  function getPhone(value) {
    const content = [{
      text1: value
    }, {
      text: "Thank you for you interest, We provide you 10% Discount coupon (“FIRSTPRO” Code) for your first service in protalk app"
    }];
    setMessages(messages.concat(content));
    postApi(value);
    setTypeBox(false);
    scrollToBottom();
  }

  function postApi(value) {
    const phon = value;
    fetch(`${url["a" /* BaseUrl */]}/apiV2/website_bot/create_request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        expertiseId: expertiseId,
        subExpertiseId: subExpertiseId,
        queryTitle: queryTitle,
        queryContent: queryContent,
        phoneNumber: phon
      })
    }).then(response => {
      return response.json();
    });
  }

  return chat_subexpertis_jsx(external_react_default.a.Fragment, null, chat_subexpertis_jsx(small_component["j" /* ChatContainer */], null, chat_subexpertis_jsx(button_button["a" /* ChatButton */], {
    onClickEvent: onClickEvent
  }, chat_subexpertis_jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].chat
  }))), open === true ? chat_subexpertis_jsx(small_component["i" /* ChatBot */], null, chat_subexpertis_jsx(small_component["m" /* ChatHeader */], null, chat_subexpertis_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "10",
    marginBottom: "10"
  }, chat_subexpertis_jsx(small_component["Y" /* Subtext */], {
    color: "#fff",
    fontSize: "20px",
    letterSpacing: "0.56px",
    fontWeight: "600"
  }, "Welcome to Protalk")), chat_subexpertis_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "10",
    marginBottom: "10"
  }, chat_subexpertis_jsx(small_component["Y" /* Subtext */], {
    color: "#fff",
    fontSize: "14px",
    letterSpacing: "0.56px",
    fontWeight: "400"
  }, "Budget Friendly Multi consultant application"))), chat_subexpertis_jsx(small_component["k" /* ChatContent */], null, chat_subexpertis_jsx(small_component["J" /* OrderTag */], null, messages.map((item, i) => chat_subexpertis_jsx("div", {
    key: i
  }, item.text ? chat_subexpertis_jsx(small_component["E" /* ListTag */], null, chat_subexpertis_jsx(small_component["p" /* FlexTag */], null, chat_subexpertis_jsx(small_component["W" /* SpaceTag */], {
    marginTop: "10",
    marginBottom: "10"
  }, chat_subexpertis_jsx(small_component["y" /* ImageTag */], {
    src: logo,
    height: "25",
    width: "25",
    borderRadius: "50%"
  })), chat_subexpertis_jsx("div", null, chat_subexpertis_jsx(small_component["g" /* CardBlock */], {
    border: "0.8px solid rgba(204, 206, 210, 0.5)",
    borderRadius: " 6px",
    padding: "10px"
  }, chat_subexpertis_jsx(small_component["Y" /* Subtext */], {
    color: "#000",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "15px"
  }, item.text)), item.button ? chat_subexpertis_jsx("div", null, item.button.map((item, i) => chat_subexpertis_jsx(small_component["F" /* LoadMorebutton */], {
    fontSize: "12px",
    padding: "10px",
    border: "0.4px solid #029532",
    background: `${buttonName[item.name] === item.name ? "#029532" : "none"}`,
    color: `${buttonName[item.name] === item.name ? "#fff" : "#029532"}`,
    onClick: e => nextQuestion(item.name, item._id, e),
    style: {
      margin: "5px"
    },
    name: item.name,
    id: item._id
  }, item.name))) : chat_subexpertis_jsx(external_react_default.a.Fragment, null)))) : "", item.text1 ? chat_subexpertis_jsx(small_component["E" /* ListTag */], null, chat_subexpertis_jsx(small_component["p" /* FlexTag */], {
    justifyContent: "flex-end"
  }, chat_subexpertis_jsx(small_component["g" /* CardBlock */], {
    border: "0.8px solid rgba(204, 206, 210, 0.5)",
    borderRadius: " 6px",
    padding: "10px"
  }, chat_subexpertis_jsx(small_component["Y" /* Subtext */], {
    color: "#000",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "15px"
  }, item.text1)))) : chat_subexpertis_jsx(external_react_default.a.Fragment, null)))), chat_subexpertis_jsx("div", {
    ref: bottomRef,
    id: "data"
  })), chat_subexpertis_jsx(small_component["l" /* ChatFooter */], null, typeBox === false ? chat_subexpertis_jsx(external_react_default.a.Fragment, null) : chat_subexpertis_jsx("div", null, chat_subexpertis_jsx(small_component["u" /* HorizontalLine */], {
    borderTop: "1px solid #E3E3E3"
  }), chat_subexpertis_jsx("form", {
    onSubmit: onSubmitEvent
  }, chat_subexpertis_jsx(small_component["p" /* FlexTag */], null, chat_subexpertis_jsx(small_component["D" /* InputTag */], {
    value: values,
    placeholder: "Type your reply here",
    onChange: onChangeEvent,
    onKeyDown: handleKeyDown
  })))))) : chat_subexpertis_jsx(external_react_default.a.Fragment, null));
}
// CONCATENATED MODULE: ./src/view/expertise.tsx
var expertise_jsx = external_react_default.a.createElement;














function Expertis({
  expertiseId
}) {
  const [consultantExpertLaw, setConsultantExpertLaw] = external_react_default.a.useState([]);
  const [bannerItem, setBannerItem] = external_react_default.a.useState([]);
  const [onlineLawyer, setOnlineLawyer] = external_react_default.a.useState([]);
  const [articles, setArticles] = external_react_default.a.useState([]);
  const [trendingarticles, setTrendingArticles] = external_react_default.a.useState([]);
  const [popularService, setPopularService] = external_react_default.a.useState([]);
  const [windowSize, setWindowSize] = external_react_default.a.useState({
    width: undefined,
    height: undefined
  });
  external_react_default.a.useEffect(() => {
    getExpertisBanner(expertiseId);
    getConsultantExpertItem(expertiseId);
    getExpertisPopularService(expertiseId);
    getExpertisConsultant(expertiseId);
    getExpertisArticles(expertiseId);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function getExpertisBanner(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_banner/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    setBannerItem([data.expertiseBanner]);
  }

  async function getConsultantExpertItem(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_subexpertise/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    setConsultantExpertLaw(data.subExpertise);
  }

  async function getExpertisPopularService(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_services/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    setPopularService(data.services);
  }

  async function getExpertisConsultant(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_promocode/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    setOnlineLawyer([data.promoCode]);
  }

  async function getExpertisArticles(expertiseId) {
    const res = await fetch(`${url["a" /* BaseUrl */]}/apiV2/expertise_articles/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    setArticles([data.articles]);
    setTrendingArticles(data.trendingArticles);
  }

  const width = 770;
  return expertise_jsx(external_react_default.a.Fragment, null, expertise_jsx(banner["a" /* Banner */], {
    BanerItems: bannerItem
  }), windowSize.width > width ? expertise_jsx(ConsultantExpertLaw, {
    ConsultantExpertLawItems: consultantExpertLaw
  }) : expertise_jsx(ConsultantExpertMobileLaw, {
    ConsultantExpertLawItems: consultantExpertLaw
  }), expertise_jsx(LawyerIconText, null), windowSize.width > width ? expertise_jsx(PopularServiceExpertisTemplate, {
    PopularItems: popularService
  }) : expertise_jsx(popular_service_mobile["a" /* PopularServiceMobile */], {
    PopularItems: popularService
  }), windowSize.width > width ? expertise_jsx(online_yoga["a" /* OnlineYoga */], {
    OnlineItems: onlineLawyer
  }) : expertise_jsx(online_yoga_mobile["a" /* OnlineYogaMobile */], null), windowSize.width > width ? expertise_jsx(popular_expertis_articles["a" /* PopularExpertisArticles */], {
    ExpertArticlesItems: articles,
    TrendingArticlesItems: trendingarticles
  }) : expertise_jsx(expert_articles_mobile["a" /* ExpertArticlesMobile */], {
    ExpertArticlesItems: articles
  }), expertise_jsx(download_app["a" /* DownloadApp */], null), expertise_jsx(Chat, {
    expId: expertiseId
  }));
}
// EXTERNAL MODULE: ./src/view/footer/footer.tsx
var footer = __webpack_require__("pkQc");

// CONCATENATED MODULE: ./src/pages/expertis/[id].tsx
var _id_jsx = external_react_default.a.createElement;





function Index({
  expertiseId
}) {
  return _id_jsx("main", null, _id_jsx(head_default.a, null, _id_jsx("title", null, "Protalk App"), _id_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), _id_jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html;charset=ut-8"
  }), _id_jsx("meta", {
    name: "description",
    content: "ProTalk experts are standing by to talk with you about healthy tips"
  }), _id_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), _id_jsx("div", null, _id_jsx(navs["a" /* Navs */], null), _id_jsx(Expertis, {
    expertiseId: expertiseId
  }), _id_jsx(footer["a" /* Footer */], null)));
}
const getServerSideProps = async ({
  params
}) => {
  const id = params.id;
  return {
    props: {
      expertiseId: id
    }
  };
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P3TD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularServiceMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R0TM");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PopularServiceMobile({
  PopularItems
}) {
  return __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* SectionConsultant */ "O"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* H3tagConsultant */ "s"], null, "Popular Services"), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* SpaceTag */ "W"], {
    marginTop: "40"
  }, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    showArrows: false,
    itemsToScroll: 2,
    itemsToShow: 2,
    verticalMode: true
  }, PopularItems.map((items, i) => __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    sm: 12,
    md: 12,
    xs: 12
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* ImageContainer */ "x"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* ImgTag */ "C"], {
    src: items.image,
    height: "200"
  }), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* ImageText */ "z"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* Heading */ "t"], null, items.title), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* SpaceTag */ "W"], {
    marginTop: "20"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* Atag */ "a"], {
    fontSize: "13",
    href: "",
    color: "#000"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* Subtext */ "Y"], {
    color: "#000000",
    fontSize: "13px",
    "letter-spacing": "0.56px"
  }, items.description), items.price === "" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* SpaceTag */ "W"], {
    marginTop: "50"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_4__[/* Boldtag */ "e"], null, "Starting from Rs", items.price)))))))))))));
}

/***/ }),

/***/ "PSHq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineYoga; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function OnlineYoga({
  OnlineItems
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, OnlineItems === undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, OnlineItems.map((item, i) => __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SectionOnlineYoga */ "U"], {
    banner: item.bannerImage
  }, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    sm: 12,
    md: 12
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "35"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Ptag */ "L"], {
    color: "#000000",
    fontSize: "24px"
  }, item.text)), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "25"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Boldtag */ "e"], {
    color: "#000000"
  }, "Use Code: ", item.promoCode)), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "40"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Atag */ "a"], {
    fontSize: "20",
    href: "",
    color: "#009846"
  }, "Chat Now ", ">")))))))));
}

/***/ }),

/***/ "R0TM":
/***/ (function(module, exports) {

module.exports = require("react-elastic-carousel");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "Wb6g":
/***/ (function(module, exports) {

module.exports = require("styled-button-component");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Xvek":
/***/ (function(module, exports) {

module.exports = require("styled-navbar-component");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "b/TK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("esL6");
/* harmony import */ var styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lnRQ");
/* harmony import */ var styled_container_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_container_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Banner({
  BanerItems
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, BanerItems === undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, BanerItems.map((item, i) => __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* BannerBar */ "c"], {
    banner: item.bannerImage
  }, __jsx(styled_container_component__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(styled_grid_system_component__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    sm: 6,
    mdOffset: 3
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "60"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* H2tag */ "r"], null, item.bannerTitle), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Spantag */ "X"], null, item.bannerText)), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* SpaceTag */ "W"], {
    marginTop: "50"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_3__[/* Atag */ "a"], {
    color: "#fff",
    fontSize: "18"
  }, "Explore More ", ">")))))))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "esL6":
/***/ (function(module, exports) {

module.exports = require("styled-grid-system-component");

/***/ }),

/***/ "fARU":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-51e88503ca324174e23c1a3b148960e6.png";

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gJGr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B68Z");
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wJam");
/* harmony import */ var _components_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5nti");
/* harmony import */ var _components_icon_icons_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("E4hQ");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fARU");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GNyq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Chat({
  expertisItems
}) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [buttonName, setButtonName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
  const bottomRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: values,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: typeBox,
    1: setTypeBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [expertise, setExpertise] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [subExpertise, setSubExpertise] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [expertiseId, setExpertiseId] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [subExpertiseId, setSubExpertiseId] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [queryContent, setQueryContent] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [phone, setPhone] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [queryTitle, setQueryTitle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  function onClickEvent() {
    setOpen(!open);
  }

  const scrollToBottom = () => bottomRef.current.scrollIntoView();

  function nextQuestion(name, id, e) {
    setButtonName(_objectSpread(_objectSpread({}, buttonName), {}, {
      [name]: e.target.name
    }));
    scrollToBottom();
    getSubExpertItem(id);
    const dev = subExpertise.filter(eve => onSelectDevice(eve, name));
    setSubExpertiseId(dev[0]._id);
    dev.length === 0 ? "" : getQuery();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getExpertis();
  }, []);

  function updateScroll() {
    var element = document.getElementById("yourDivID");
    element.scrollTop = element.scrollHeight;
  }

  async function getExpertis() {
    const res = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_6__[/* BaseUrl */ "a"]}/apiV2/expertises`, {
      method: "GET"
    });
    const data = await res.json();
    const content = {
      text: "Select your area of expertise",
      button: data.expertises
    };
    setExpertise(data.expertises);
    setMessages(messages.concat(content));
    scrollToBottom();
    updateScroll();
  }

  async function getSubExpertItem(expertiseId) {
    const d = expertise.filter(eve => onSelectDevices(eve, expertiseId));
    d.length === 0 ? "" : setExpertiseId(expertiseId);
    const res = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_6__[/* BaseUrl */ "a"]}/apiV2/expertise_subexpertise/${expertiseId}`, {
      method: "GET"
    });
    const data = await res.json();
    const content = [{
      text: "Select your area of Sub expertise",
      button: data.subExpertise
    }];
    setSubExpertise(data.subExpertise);
    setMessages(messages.concat(content));
    updateScroll();
  }

  async function getQuery() {
    setTypeBox(true);
    const content = [{
      text: "Please provide your Query Title ?"
    }];
    setMessages(messages.concat(content));
    scrollToBottom();
  }

  const onSelectDevice = (deviceObj, sDevice) => {
    return deviceObj.name === sDevice;
  };

  const onSelectDevices = (deviceObj, sDevice) => {
    return deviceObj._id === sDevice;
  };

  function onChangeEvent(e) {
    const {
      value
    } = e.target;
    setValue(value);
  }

  function onSubmitEvent(event) {
    event.preventDefault();
    setValue("");
  }

  function handleKeyDown(e) {
    const {
      value
    } = e.target;

    if (e.key === "Enter") {
      var green = messages[messages.length - 1];
      green.text === "Please provide your Query Title ?" ? getNextQuery(value) : "";
      green.text === "Please can you elaborate your Query ?" ? getNextElaborateQuery(value) : "";
      green.text === "Please provide your Mobile Number, so that we can forward you playstore link" ? getPhone(value) : "";
    }
  }

  function getNextQuery(value) {
    setQueryTitle(value);
    const content = [{
      text1: value
    }, {
      text: "Please can you elaborate your Query ?"
    }];
    setMessages(messages.concat(content));
    scrollToBottom();
  }

  function getNextElaborateQuery(value) {
    setQueryContent(value);
    const content = [{
      text1: value
    }, {
      text: "Your query has been posted to our experts, you can find your query answer in your Protalk app"
    }, {
      text: "Please provide your Mobile Number, so that we can forward you playstore link"
    }];
    setMessages(messages.concat(content));
    scrollToBottom();
  }

  function getPhone(value) {
    setPhone(value);
    const content = [{
      text1: value
    }, {
      text: "Thank you for you interest, We provide you 10% Discount coupon (“FIRSTPRO” Code) for your first service in protalk app"
    }];
    setMessages(messages.concat(content));
    postApi(value);
    setTypeBox(false);
    scrollToBottom();
  }

  function postApi(value) {
    const phon = value;
    fetch(`${_url__WEBPACK_IMPORTED_MODULE_6__[/* BaseUrl */ "a"]}/apiV2/website_bot/create_request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        expertiseId: expertiseId,
        subExpertiseId: subExpertiseId,
        queryTitle: queryTitle,
        queryContent: queryContent,
        phoneNumber: phon
      })
    }).then(response => {
      return response.json();
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ChatContainer */ "j"], null, __jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_1__[/* ChatButton */ "a"], {
    onClickEvent: onClickEvent
  }, __jsx(_components_icon_icon__WEBPACK_IMPORTED_MODULE_3__[/* Icon */ "a"], {
    name: _components_icon_icons_props__WEBPACK_IMPORTED_MODULE_4__[/* Icons */ "a"].chat
  }))), open === true ? __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ChatBot */ "i"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ChatHeader */ "m"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* Subtext */ "Y"], {
    color: "#fff",
    fontSize: "20px",
    letterSpacing: "0.56px",
    fontWeight: "600"
  }, "Welcome to Protalk")), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* Subtext */ "Y"], {
    color: "#fff",
    fontSize: "14px",
    letterSpacing: "0.56px",
    fontWeight: "400"
  }, "Budget Friendly Multi consultant application"))), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ChatContent */ "k"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* OrderTag */ "J"], null, messages.map((item, i) => __jsx("div", {
    key: i
  }, item.text ? __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ListTag */ "E"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* FlexTag */ "p"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* SpaceTag */ "W"], {
    marginTop: "10",
    marginBottom: "10"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ImageTag */ "y"], {
    src: _img_logo_png__WEBPACK_IMPORTED_MODULE_5__,
    height: "25",
    width: "25",
    borderRadius: "50%"
  })), __jsx("div", null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* CardBlock */ "g"], {
    border: "0.8px solid rgba(204, 206, 210, 0.5)",
    borderRadius: " 6px",
    padding: "10px"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* Subtext */ "Y"], {
    color: "#000",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "15px"
  }, item.text)), item.button ? __jsx("div", null, item.button.map((item, i) => __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* LoadMorebutton */ "F"], {
    fontSize: "12px",
    padding: "10px",
    border: "0.4px solid #029532",
    background: `${buttonName[item.name] === item.name ? "#029532" : "none"}`,
    color: `${buttonName[item.name] === item.name ? "#fff" : "#029532"}`,
    onClick: e => nextQuestion(item.name, item._id, e),
    style: {
      margin: "5px"
    },
    name: item.name,
    id: item._id
  }, item.name))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))) : "", item.text1 ? __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ListTag */ "E"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* FlexTag */ "p"], {
    justifyContent: "flex-end"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* CardBlock */ "g"], {
    border: "0.8px solid rgba(204, 206, 210, 0.5)",
    borderRadius: " 6px",
    padding: "10px"
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* Subtext */ "Y"], {
    color: "#000",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "15px"
  }, item.text1)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)))), __jsx("div", {
    ref: bottomRef,
    id: "data"
  })), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* ChatFooter */ "l"], null, typeBox === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx("div", null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* HorizontalLine */ "u"], {
    borderTop: "1px solid #E3E3E3"
  }), __jsx("form", {
    onSubmit: onSubmitEvent
  }, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* FlexTag */ "p"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_2__[/* InputTag */ "D"], {
    value: values,
    placeholder: "Type your reply here",
    onChange: onChangeEvent,
    onKeyDown: handleKeyDown
  })))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
}

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hfRb":
/***/ (function(module, exports) {

module.exports = require("styled-nav-component");

/***/ }),

/***/ "lnRQ":
/***/ (function(module, exports) {

module.exports = require("styled-container-component");

/***/ }),

/***/ "n6aT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PopularExpertisArticles; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-container-component"
var external_styled_container_component_ = __webpack_require__("lnRQ");

// EXTERNAL MODULE: external "styled-grid-system-component"
var external_styled_grid_system_component_ = __webpack_require__("esL6");

// EXTERNAL MODULE: ./src/components/small-component.ts
var small_component = __webpack_require__("wJam");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/card/card.tsx + 1 modules
var card = __webpack_require__("5JmT");

// CONCATENATED MODULE: ./src/view/expert-articles/expert-articles.tsx
var __jsx = external_react_default.a.createElement;





function ExpertArticles({
  ExpertArticlesItems
}) {
  console.log(ExpertArticlesItems, "articleid");
  const [currentSlideIdx, setCurrentSlideIdx] = external_react_default.a.useState(2);

  const nextSlide = () => {
    setCurrentSlideIdx(currentSlideIdx + 2);
  };

  let data = [];
  ExpertArticlesItems.map((item, i) => {
    data = data.concat({
      title: item.expertise,
      article: getListView(item.articles)
    });
  });

  function getListView(art) {
    const test = art.slice(0, currentSlideIdx);
    const imageSourcesToDisplay = art.length !== currentSlideIdx ? [...test] : art;
    return imageSourcesToDisplay;
  }

  return __jsx(external_react_default.a.Fragment, null, __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "10",
    marginBottom: "10"
  }, data.map((item, i) => __jsx(external_react_default.a.Fragment, null, __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "10",
    marginBottom: "10",
    marginLeft: "15",
    marginRight: "15"
  }, __jsx(small_component["Y" /* Subtext */], {
    fontSize: "30px",
    color: "#999",
    fontWeight: "600"
  }, item.title)), item.article.map((list, i) => __jsx(link_default.a, {
    href: `/article-details/${list._id}`
  }, __jsx(small_component["n" /* CursorTag */], null, __jsx(external_styled_grid_system_component_["Row"], null, __jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 12,
    xs: 12
  }, __jsx(small_component["p" /* FlexTag */], null, __jsx(small_component["W" /* SpaceTag */], {
    marginTop: "5"
  }, __jsx(small_component["M" /* ResposiveImag */], {
    src: list.media
  })), __jsx(card["a" /* Card */], {
    width: "-webkit-fill-available",
    border: "1",
    borderRadius: "0"
  }, __jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "6",
    marginTop: "4",
    marginRight: "6",
    marginBottom: "4"
  }, __jsx(small_component["Y" /* Subtext */], {
    fontSize: "16px",
    color: "#282828",
    letterSpacing: "0.56px"
  }, list.articleTitle), __jsx(small_component["W" /* SpaceTag */], {
    marginBottom: "5",
    marginTop: "5"
  }, __jsx(small_component["Y" /* Subtext */], {
    fontSize: "12px",
    color: "#979797",
    letterSpacing: "0.56px"
  }, list.description)), __jsx(small_component["p" /* FlexTag */], null, __jsx(small_component["y" /* ImageTag */], {
    src: list.consultantImage,
    width: "25",
    height: "25"
  }), __jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "5",
    marginTop: "0"
  }, __jsx(small_component["Y" /* Subtext */], {
    fontSize: "12px",
    color: "#010101"
  }, list.consultantName), __jsx(small_component["Y" /* Subtext */], {
    fontSize: "10px",
    color: "#979797"
  }, list.expertise))))))))))), __jsx(small_component["p" /* FlexTag */], {
    justifyContent: "flex-end"
  }, __jsx(small_component["cb" /* ViewMoreButton */], {
    onClick: nextSlide,
    type: "button"
  }, "View More"))))));
}
// EXTERNAL MODULE: ./src/view/trending-articles/trending-articles.tsx
var trending_articles = __webpack_require__("9+g8");

// EXTERNAL MODULE: ./src/view/chat/chat.tsx
var chat = __webpack_require__("gJGr");

// CONCATENATED MODULE: ./src/view/popular-expertis-articles.tsx
var popular_expertis_articles_jsx = external_react_default.a.createElement;







function PopularExpertisArticles({
  ExpertArticlesItems,
  TrendingArticlesItems
}) {
  console.log(ExpertArticlesItems, "ExpertArticlesItems");
  return popular_expertis_articles_jsx(external_react_default.a.Fragment, null, popular_expertis_articles_jsx(external_styled_container_component_["Container"], null, popular_expertis_articles_jsx(small_component["W" /* SpaceTag */], {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "10",
    marginBottom: "30"
  }, popular_expertis_articles_jsx(small_component["Y" /* Subtext */], {
    fontSize: "32px",
    color: "#000000",
    fontWeight: "400"
  }, "Popular Expertize Articles")), popular_expertis_articles_jsx(external_styled_grid_system_component_["Row"], null, popular_expertis_articles_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 8,
    xs: 12
  }, popular_expertis_articles_jsx(ExpertArticles, {
    ExpertArticlesItems: ExpertArticlesItems
  })), popular_expertis_articles_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    md: 4,
    xs: 12
  }, popular_expertis_articles_jsx(trending_articles["a" /* TrendingArticles */], {
    TrendingArticlesItems: TrendingArticlesItems
  })))), popular_expertis_articles_jsx(chat["a" /* Chat */], null));
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oyhP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobile-1-d34d1961dbdfe5ab39c0addef6c6860e.png";

/***/ }),

/***/ "pkQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_small_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wJam");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("br", null), __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_1__[/* FooterTag */ "q"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_1__[/* CenterTag */ "h"], null, __jsx(_components_small_component__WEBPACK_IMPORTED_MODULE_1__[/* Subtext */ "Y"], {
    fontSize: "16px",
    color: "#fff",
    fontWeight: "500"
  }, "All rights reserved 2020"))));
}

/***/ }),

/***/ "r1fl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Navs; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-nav-component"
var external_styled_nav_component_ = __webpack_require__("hfRb");

// EXTERNAL MODULE: external "styled-grid-system-component"
var external_styled_grid_system_component_ = __webpack_require__("esL6");

// EXTERNAL MODULE: ./src/components/navs/style.ts
var style = __webpack_require__("tKwq");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/logo/style.ts

const LogoImg = external_styled_components_default.a.img.withConfig({
  displayName: "style__LogoImg",
  componentId: "fs6zzb-0"
})(["width:40px;height:40px;"]);
// EXTERNAL MODULE: ./src/img/logo.png
var logo = __webpack_require__("fARU");

// CONCATENATED MODULE: ./src/components/logo/logo.tsx
var __jsx = external_react_default.a.createElement;



function LogoImage() {
  return __jsx(external_react_default.a.Fragment, null, __jsx(LogoImg, {
    src: logo
  }));
}
// EXTERNAL MODULE: ./src/components/search-box/search-box.tsx + 1 modules
var search_box = __webpack_require__("FJZC");

// EXTERNAL MODULE: ./src/components/icon/icon.tsx + 23 modules
var icon = __webpack_require__("5nti");

// EXTERNAL MODULE: ./src/components/icon/icons-props.ts
var icons_props = __webpack_require__("E4hQ");

// CONCATENATED MODULE: ./src/components/navs/navs.tsx
var navs_jsx = external_react_default.a.createElement;








function Navs() {
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(true);
  return navs_jsx("div", null, navs_jsx(style["a" /* Head */], null, navs_jsx(style["b" /* Headers */], null, navs_jsx(external_styled_grid_system_component_["Row"], null, navs_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12
  }, navs_jsx(style["g" /* Navbarblock */], {
    expandSm: true,
    expandMd: true,
    light: true,
    style: {
      background: "#fff !important"
    }
  }, navs_jsx(external_styled_nav_component_["Nav"], {
    start: true
  }, navs_jsx(style["f" /* NavbarLinkblock */], {
    light: true,
    brand: true,
    href: "#"
  }, navs_jsx(style["c" /* LogoBlock */], null, navs_jsx(LogoImage, null))), navs_jsx(external_styled_nav_component_["Nav"], {
    center: true
  }, navs_jsx(style["h" /* SearchBlock */], null, navs_jsx(search_box["a" /* SearchBox */], null))), navs_jsx(external_styled_nav_component_["Nav"], {
    end: true
  }, navs_jsx(style["d" /* NavbarButton */], {
    light: true,
    outline: true,
    toggleCollapse: true,
    expandSm: true,
    expandMd: true,
    expandXs: true,
    onClick: () => setHidden(!hidden)
  }, navs_jsx(icon["a" /* Icon */], {
    name: icons_props["a" /* Icons */].hamburger
  })))), navs_jsx(external_styled_nav_component_["Nav"], {
    end: true,
    collapse: true,
    expandSm: true,
    expandMd: true,
    hidden: hidden
  }, navs_jsx(style["e" /* NavbarLinkTag */], {
    href: "/"
  }, "Home"), navs_jsx(style["e" /* NavbarLinkTag */], {
    activeClass: "active",
    href: "/articles"
  }, "Articles"), navs_jsx(style["e" /* NavbarLinkTag */], {
    light: true,
    href: "/forum"
  }, "Forum"), navs_jsx(style["e" /* NavbarLinkTag */], {
    light: true,
    href: "/aboutus"
  }, "About Us"))))))));
}

/***/ }),

/***/ "sH8P":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/google-play-fc8992e5289480a8ce0bfae7f7308f9e.png";

/***/ }),

/***/ "tKwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LinkTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavbarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Navbarblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NavbarLinkblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NavbarLinkTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SubNavbarLinkTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SubHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogoBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SearchBlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Xvek");
/* harmony import */ var styled_navbar_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wb6g");
/* harmony import */ var styled_button_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_button_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const LinkTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(next_link__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "style__LinkTag",
  componentId: "sc-8srvbl-0"
})(["text-decoration:none;color:#000 !important;font-size:30px;"]);
const NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_button_component__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "style__NavbarButton",
  componentId: "sc-8srvbl-1"
})(["font-size:28px;border:none;@media (min-width:320px){height:35px;margin-top:10px;}@media (min-width:374px){height:35px;margin-top:18px;}"]);
const Navbarblock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__["Navbar"]).withConfig({
  displayName: "style__Navbarblock",
  componentId: "sc-8srvbl-2"
})(["position:relative;color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1);background-color:#fff !important;font-weight:500;font-family:\"Cerebri Sans\";@media (min-width:667px){padding:0.5rem;font-size:14px;}@media (min-width:684px){padding:0.5rem;font-size:14px;}@media (min-width:734px){padding:0.5rem;font-size:14px;}@media (min-width:736px){padding:0.5rem;font-size:16px;}@media (min-width:768px){padding:0.5rem;font-size:16px;}@media (min-width:1024px){padding:0px 0px 0px 0px !important;font-size:16px;}"]);
const NavbarLinkblock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"]).withConfig({
  displayName: "style__NavbarLinkblock",
  componentId: "sc-8srvbl-3"
})(["padding:0.5rem !important;@media (min-width:667px){padding:0.5rem !important;}@media (min-width:684px){padding:0.5rem !important;}@media (min-width:734px){padding:0.5rem !important;}@media (min-width:736px){padding:0.5rem !important;}@media (min-width:768px){padding:0.5rem !important;}@media (min-width:1024px){padding:0.5rem !important;}"]);
const NavbarLinkTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"]).withConfig({
  displayName: "style__NavbarLinkTag",
  componentId: "sc-8srvbl-4"
})(["padding:10px !important;text-decoration:none;color:#4b4b4b;font-size:16px;@media (max-width:574px){padding:0.5rem !important;font-size:14px;}@media (min-width:575px){padding:0.5rem !important;font-size:14px;}@media (min-width:667px){padding:0.5rem !important;font-size:15px;}@media (min-width:684px){padding:0.5rem !important;font-size:15px;}@media (min-width:734px){padding:0.5rem !important;font-size:15px;}@media (min-width:736px){padding:0.5rem !important;font-size:16px;}@media (min-width:768px){padding:0.5rem !important;font-size:16px;}@media (min-width:1024px){padding:1rem !important;font-size:16px;}"]);
const SubNavbarLinkTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarLink"]).withConfig({
  displayName: "style__SubNavbarLinkTag",
  componentId: "sc-8srvbl-5"
})(["padding:10px !important;text-decoration:none;color:#4b4b4b;margin-left:40px;@media (min-width:270px){margin-left:0px;padding:5px !important;}@media (min-width:370px){margin-left:4px;padding:0.5rem !important;}@media (min-width:575px){margin-leftt:15px;}@media (min-width:667px){padding:0.5rem !important;}@media (min-width:684px){padding:0.5rem !important;}@media (min-width:734px){padding:0.5rem !important;}@media (min-width:736px){padding:0.5rem !important;}@media (min-width:768px){padding:0.5rem !important;}@media (min-width:1024px){padding:1rem !important;}"]);
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Head",
  componentId: "sc-8srvbl-6"
})(["height:95px;"]);
const SubHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__SubHead",
  componentId: "sc-8srvbl-7"
})(["height:55px;border-bottom:1px solid #cacad3;border-top:1px solid #cacad3;@media (max-width:550px){height:90px;}@media (min-width:790px){height:55px;}"]);
const Headers = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Headers",
  componentId: "sc-8srvbl-8"
})(["transition:background 0.2s ease-in-out 0s,margin 0.6s ease-in-out 0s;top:0;left:0;right:0;position:relative;z-index:1000;margin:0;padding:0;height:auto;}"]);
const LogoBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__LogoBlock",
  componentId: "sc-8srvbl-9"
})(["margin-right:80px;padding:5px;@media (min-width:300px){margin-right:0px;}@media (min-width:400px){margin-right:0px;}@media (min-width:575px){margin-right:0px;}@media (min-width:667px){margin-right:20px;}@media (min-width:684px){margin-right:40px;}@media (min-width:734px){margin-right:20px;}@media (min-width:736px){margin-right:20px;}@media (min-width:768px){margin-right:0px;}@media (min-width:1024px){margin-right:30px;}@media (min-width:1030px){margin-right:80px;}"]);
const SearchBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__SearchBlock",
  componentId: "sc-8srvbl-10"
})(["padding:10px;width:600px;margin-top:5px;@media (min-width:200px){width:149px;}@media (min-width:300px){width:155px;}@media (min-width:400px){width:180px;}@media (min-width:500px){width:270px;}@media (min-width:575px){width:180px;}@media (min-width:667px){width:250px;}@media (min-width:684px){width:200px;}@media (min-width:734px){width:300px;}@media (min-width:736px){width:300px;}@media (min-width:768px){width:350px;}@media (min-width:1024px){width:500px;}@media (min-width:1030px){width:800px;}"]);

/***/ }),

/***/ "wJam":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ImageTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ImageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BannerBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BannerBar2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return H2tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return Spantag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CenterTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return SpaceTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SectionConsultant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return H3tagConsultant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return Paratag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return TextTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return Ptag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SectionOnlineYoga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return SectionOnlineYogaMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Boldtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ImageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DownloadMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return MobileImageTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return ImgTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return SectionFitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return SectionFitnessMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return SectionMultiConsultant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return SectionHappyCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return MobileAppHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FlexTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BoxContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Subtext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Horizontaltag; });
/* unused harmony export DotTag */
/* unused harmony export DotSpanTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BackButtonTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return RightButtonTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return FooterTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return ResposiveImag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ImageBackgroundTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return Opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return TextWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return TextTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SectionIconText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CardBlock; });
/* unused harmony export Player */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return LoadMorebutton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return ViewMoreButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return ImageWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return HorizontalLine; });
/* unused harmony export SearchBlock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return OrderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ListTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ChatContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ChatBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ChatHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ChatContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ChatFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CursorTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return InputTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_fitness_consultant_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Gafi");
/* harmony import */ var _img_fitness_consultant_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_fitness_consultant_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_online_consultant_mobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5auh");
/* harmony import */ var _img_online_consultant_mobile_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_online_consultant_mobile_png__WEBPACK_IMPORTED_MODULE_2__);



const ImageTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__ImageTag",
  componentId: "fh81gw-0"
})(["width:", ";height:", ";border-radius:", ";"], ({
  width
}) => width, ({
  height
}) => height, ({
  borderRadius
}) => borderRadius);
const ImageView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__ImageView",
  componentId: "fh81gw-1"
})(["width:-webkit-fill-available;@media (min-width:300px){width:370px !important;}@media (min-width:400px){width:380px !important;}@media (min-width:500px){width:390px !important;}@media (min-width:500px){width:-webkit-fill-available !important;}"]);
const BannerBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__BannerBar",
  componentId: "fh81gw-2"
})(["background-color:#ffffff;color:#818181;background-position:center;background-image:url(", ");background-repeat:no-repeat;height:272px;background-size:cover;"], ({
  banner
}) => banner);
const BannerBar2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__BannerBar2",
  componentId: "fh81gw-3"
})(["background-color:#ffffff;color:#818181;background-position:center;background-image:url(", ");background-repeat:no-repeat;height:272px;background-size:cover;"], ({
  banner
}) => banner);
const H2tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "small-component__H2tag",
  componentId: "fh81gw-4"
})(["font-size:26px;font-style:normal;font-weight:normal;text-transform:uppercase;letter-spacing:1.24px;line-height:20px;font-family:Cerebri,sans-serif;color:#ffffff;"]);
const Spantag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "small-component__Spantag",
  componentId: "fh81gw-5"
})(["font-family:Cerebri,sans-serif;font-style:normal;font-weight:normal;font-size:20px;line-height:20px;letter-spacing:1.26px;color:#ffffff;"]);
const CenterTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__CenterTag",
  componentId: "fh81gw-6"
})(["font-family:Cerebri,sans-serif;font-style:normal;font-weight:normal;text-align:center;"]);
const SpaceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__SpaceTag",
  componentId: "fh81gw-7"
})(["margin-top:", "px;margin-bottom:", "px;margin-left:", "px;margin-right:", "px;"], ({
  marginTop
}) => marginTop, ({
  marginBottom
}) => marginBottom, ({
  marginLeft
}) => marginLeft, ({
  marginRight
}) => marginRight);
const Atag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "small-component__Atag",
  componentId: "fh81gw-8"
})(["color:", ";text-decoration:none;font-size:", "px;letter-spacing:1.06px;font-family:Cerebri,sans-serif;font-style:normal;font-weight:normal;@media (min-width:300px){font-size:14px !important;}@media (min-width:400px){font-size:14px !important;}@media (min-width:500px){font-size:14px !important;}@media (min-width:667px){font-size:14px !important;}@media (min-width:1025px){font-size:", "px !important;}"], ({
  color
}) => color, ({
  fontSize
}) => fontSize, ({
  fontSize
}) => fontSize);
const SectionConsultant = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionConsultant",
  componentId: "fh81gw-9"
})(["background-color:#ffffff;color:#818181;margin-top:60px;margin-bottom:60px;"]);
const H3tagConsultant = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "small-component__H3tagConsultant",
  componentId: "fh81gw-10"
})(["color:#000;font-size:32px;margin-bottom:30px;position:relative;word-wrap:break-word;line-height:0.95;font-weight:400;text-align:center;font-family:Cerebri,sans-serif;letter-spacing:2.26px;margin-block-start:10px;margin-block-end:10px;@media (min-width:300px){font-size:20px !important;}@media (min-width:400px){font-size:20px !important;}@media (min-width:500px){font-size:20px !important;}@media (min-width:667px){font-size:22px !important;}@media (min-width:684px){font-size:24px !important;}@media (min-width:734px){font-size:26px !important;}@media (min-width:1025px){font-size:32px !important;}"]);
const Paratag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "small-component__Paratag",
  componentId: "fh81gw-11"
})(["color:#002e46;letter-spacing:0.56px;font-family:Cerebri,sans-serif;font-style:normal;font-weight:normal;font-size:16px;"]);
const TextTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__TextTag",
  componentId: "fh81gw-12"
})(["color:#4f5665;font-size:14px;font-family:Rubik,sans-serif;font-style:normal;font-weight:400;line-height:30px;"]);
const Ptag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "small-component__Ptag",
  componentId: "fh81gw-13"
})(["color:", ";letter-spacing:0.96px;font-family:Cerebri,sans-serif;font-style:normal;font-weight:normal;font-size:", ";@media (min-width:300px){font-size:15px;letter-spacing:0.26px;}@media (min-width:400px){font-size:15px;letter-spacing:0.26px;}@media (min-width:500px){font-size:15px;letter-spacing:0.26px;}@media (min-width:667px){font-size:16px;letter-spacing:0.26px;}@media (min-width:684px){font-size:16px;letter-spacing:0.26px;}@media (min-width:734px){font-size:16px;letter-spacing:0.26px;}@media (min-width:768px){font-size:16px;letter-spacing:0.26px;}@media (min-width:1025px){font-size:", ";letter-spacing:0.96px;}"], ({
  color
}) => color, ({
  fontSize
}) => fontSize === undefined ? "14px" : fontSize, ({
  fontSize
}) => fontSize === undefined ? "14px" : fontSize);
const SectionOnlineYoga = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionOnlineYoga",
  componentId: "fh81gw-14"
})(["background-color:#e3e3e3;color:#818181;background-position:right;background-image:url(", ");background-repeat:no-repeat;height:226px;border-radius:9px;margin-bottom:50px;"], ({
  banner
}) => banner);
const SectionOnlineYogaMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionOnlineYogaMobile",
  componentId: "fh81gw-15"
})(["background-image:url(", ");height:145px;margin-bottom:25px;background-size:cover;background-repeat:no-repeat;background-position:center center;"], _img_online_consultant_mobile_png__WEBPACK_IMPORTED_MODULE_2__);
const Boldtag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "small-component__Boldtag",
  componentId: "fh81gw-16"
})(["font-weight:600;font-size:24px;color:#000;font-family:Cerebri,sans-serif;font-style:normal;@media (min-width:300px){font-size:18px !important;}@media (min-width:400px){font-size:18px !important;}@media (min-width:500px){font-size:18px !important;}@media (min-width:667px){font-size:18px !important;}@media (min-width:684px){font-size:18px !important;}@media (min-width:734px){font-size:18px !important;}@media (min-width:1025px){font-size:24px !important;}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ImageContainer",
  componentId: "fh81gw-17"
})(["position:relative;margin:10px;"]);
const ImageText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ImageText",
  componentId: "fh81gw-18"
})(["position:absolute;top:25px;left:25px;width:350px;@media (min-width:300px){width:250px !important;}@media (min-width:400px){width:250px !important;}@media (min-width:500px){width:250px !important;}@media (min-width:667px){width:250px !important;}@media (min-width:684px){width:250px !important;}@media (min-width:734px){width:250px !important;}@media (min-width:1025px){width:350px !important;}"]);
const DownloadMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__DownloadMobile",
  componentId: "fh81gw-19"
})(["width:201;height:426;"]);
const MobileImageTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__MobileImageTag",
  componentId: "fh81gw-20"
})(["width:342px;height:502px;@media (min-width:300px){height:400px;width:300px;}@media (min-width:400px){height:400px;width:300px;}@media (min-width:500px){height:400px;width:300px;}"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "small-component__Heading",
  componentId: "fh81gw-21"
})(["font-size:28px;font-family:Cerebri,sans-serif;font-style:normal;color:#000;font-weight:500;margin-block-start:10px;margin-block-end:10px;@media (min-width:300px){font-size:18px !important;}@media (min-width:400px){font-size:18px !important;}@media (min-width:500px){font-size:18px !important;}@media (min-width:667px){font-size:18px !important;}@media (min-width:684px){font-size:18px !important;}@media (min-width:734px){font-size:18px !important;}@media (min-width:1025px){font-size:28px !important;}"]);
const ImgTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__ImgTag",
  componentId: "fh81gw-22"
})(["width:-webkit-fill-available;@media (min-width:300px){width:310.95px !important;}@media (min-width:400px){width:324.95px !important;}@media (min-width:500px){width:324.95px !important;}@media (min-width:667px){width:384.95px !important;}@media (min-width:684px){width:384.95px !important;}@media (min-width:734px){width:384.95px !important;}@media (min-width:760px){width:345.95px !important;}@media (min-width:1000px){width:385px !important;}@media (min-width:1025px){width:530px !important;}"]);
const SectionFitness = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionFitness",
  componentId: "fh81gw-23"
})(["background-color:#f6b8bd;color:#818181;background-position:center;background-image:url(", ");background-repeat:no-repeat;height:227px;border-radius:9px;margin-bottom:50px;"], _img_fitness_consultant_png__WEBPACK_IMPORTED_MODULE_1__);
const SectionFitnessMobile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionFitnessMobile",
  componentId: "fh81gw-24"
})(["background-color:#f6b8bd;color:#818181;background-position:center;background-image:url(", ");background-repeat:no-repeat;height:145px;margin-bottom:25px;"], _img_fitness_consultant_png__WEBPACK_IMPORTED_MODULE_1__);
const SectionMultiConsultant = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionMultiConsultant",
  componentId: "fh81gw-25"
})(["background-color:#f8f8fb;color:#818181;background-position:center;background-repeat:no-repeat;height:598px;margin-top:30px;@media (min-width:300px){height:932px;}@media (min-width:400px){height:932px;}@media (min-width:500px){height:932px;}@media (min-width:667px){height:932px;}@media (min-width:684px){height:932px;}@media (min-width:734px){height:932px;}@media (min-width:734px){height:932px;}@media (min-width:768px){height:598px;}"]);
const SectionHappyCustomer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__SectionHappyCustomer",
  componentId: "fh81gw-26"
})(["margin-top:30px;margin-bottom:30px;"]);
const MobileAppHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "small-component__MobileAppHeading",
  componentId: "fh81gw-27"
})(["font-size:35px;letter-spacing:1.26px;font-family:Cerebri,sans-serif;font-style:normal;font-weight:500;color:#000;@media (min-width:300px){font-size:26px;}@media (min-width:400px){font-size:26px;}@media (min-width:500px){font-size:26px;}@media (min-width:667px){font-size:30px;}"]);
const FlexTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__FlexTag",
  componentId: "fh81gw-28"
})(["display:flex;justify-content:", ";"], ({
  justifyContent
}) => justifyContent);
const BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__BoxContainer",
  componentId: "fh81gw-29"
})(["background:", ";border-radius:", ";padding:20px 35px 20px 35px;"], ({
  background
}) => background, ({
  borderRadius
}) => borderRadius);
const Subtext = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__Subtext",
  componentId: "fh81gw-30"
})(["font-size:", ";color:", ";font-weight:", ";letter-spacing:", ";line-height:", ";font-family:Cerebri,sans-serif;font-style:normal;"], ({
  fontSize
}) => fontSize, ({
  color
}) => color, ({
  fontWeight
}) => fontWeight === undefined ? "normal" : fontWeight, ({
  letterSpacing
}) => letterSpacing === undefined ? "1.06px" : letterSpacing, ({
  lineHeight
}) => lineHeight === undefined ? "1.5" : lineHeight);
const Horizontaltag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__Horizontaltag",
  componentId: "fh81gw-31"
})(["height:", ";overflow:scroll;"], ({
  height
}) => height);
const DotTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__DotTag",
  componentId: "fh81gw-32"
})(["position:absolute;bottom:25px;width:100%;display:flex;align-items:center;justify-content:center;"]);
const DotSpanTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "small-component__DotSpanTag",
  componentId: "fh81gw-33"
})(["padding:10px;margin-right:5px;cursor:pointer;border-radius:50%;background:", ";"], ({
  background
}) => background);
const BackButtonTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "small-component__BackButtonTag",
  componentId: "fh81gw-34"
})(["background:#fff;border:2px solid #029532;border-radius:50%;width:60px;height:60px;"]);
const RightButtonTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "small-component__RightButtonTag",
  componentId: "fh81gw-35"
})(["background:#029532;border:2px solid #029532;border-radius:50%;width:60px;height:60px;"]);
const FooterTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__FooterTag",
  componentId: "fh81gw-36"
})(["position:absolute;width:100%;background:#0e254d;bottom:0;padding:20px;"]);
const ResposiveImag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__ResposiveImag",
  componentId: "fh81gw-37"
})(["width:130px;height:130px;@media (min-width:300px){width:100px;height:103px;}@media (min-width:400px){width:100px;height:104px;}@media (min-width:500px){width:100px;height:104px;}@media (min-width:600px){width:100px;height:104px;}@media (min-width:736px){width:100px;height:90px;}@media (min-width:768px){width:100px;height:90px;}@media (min-width:1020px){width:110px;height:140px;}@media (min-width:1025px){width:130px;height:135px;}"]);
const ImageBackgroundTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__ImageBackgroundTag",
  componentId: "fh81gw-38"
})(["filter:alpha(opacity=50);transition:all 1s;-webkit-transition:all 1s;background-image:url(", ");height:80px;width:180px;background-repeat:no-repeat;border-radius:10px;@media (min-width:300px){width:150px;height:55px;}@media (min-width:400px){width:150px;height:55px;}@media (min-width:500px){width:150px;height:55px;}@media (min-width:600px){width:150px;height:55px;}@media (min-width:736px){width:160px;height:80px;}@media (min-width:768px){width:180px;height:80px;}@media (min-width:1020px){width:180px;height:80px;}@media (min-width:1025px){width:180px;height:80px;}"], ({
  background
}) => background);
const Opacity = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__Opacity",
  componentId: "fh81gw-39"
})(["background:rgba(0,0,0,0.46);border-radius:10px;height:78px;width:180px;@media (min-width:300px){width:150px;height:55px;}@media (min-width:400px){width:150px;height:55px;}@media (min-width:500px){width:150px;height:55px;}@media (min-width:600px){width:150px;height:55px;}@media (min-width:736px){width:160px;height:80px;}@media (min-width:768px){width:180px;height:80px;}@media (min-width:1020px){width:180px;height:80px;}@media (min-width:1025px){width:180px;height:80px;}"]);
const TextWidth = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__TextWidth",
  componentId: "fh81gw-40"
})(["width:130px;"]);
const TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__TextTitle",
  componentId: "fh81gw-41"
})(["position:absolute;bottom:10px;left:8px;@media (min-width:300px){bottom:5px;}@media (min-width:400px){bottom:5px;}@media (min-width:500px){bottom:5px;}@media (min-width:600px){bottom:10px;}@media (min-width:736px){bottom:10px;}@media (min-width:768px){bottom:20px;}@media (min-width:1020px){bottom:20px;}@media (min-width:1025px){bottom:10px;}"]);
const SectionIconText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "small-component__SectionIconText",
  componentId: "fh81gw-42"
})(["background-color:#f3f3fa;color:#818181;background-position:center;background-repeat:no-repeat;height:340px;margin-bottom:20px;@media (min-width:300px){height:800px;}@media (min-width:400px){height:800px;}@media (min-width:500px){height:800px;}@media (min-width:667px){height:800px;}@media (min-width:684px){height:800px;}@media (min-width:734px){height:800px;}@media (min-width:734px){height:800px;}@media (min-width:768px){height:340px;}"]);
const CardBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__CardBlock",
  componentId: "fh81gw-43"
})(["border:", ";border-radius:", ";padding:", ";margin:5px;"], ({
  border
}) => border, ({
  borderRadius
}) => borderRadius, ({
  padding
}) => padding);
const Player = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.video.withConfig({
  displayName: "small-component__Player",
  componentId: "fh81gw-44"
})(["width:500px;height:500px;"]);
const LoadMorebutton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "small-component__LoadMorebutton",
  componentId: "fh81gw-45"
})(["border:", ";box-sizing:border-box;border-radius:4px;background:", ";width:", ";height:", ";font-size:", ";padding:", ";color:", ";text-transform:capitalize;"], ({
  border
}) => border, ({
  background
}) => background, ({
  width
}) => width, ({
  height
}) => height, ({
  fontSize
}) => fontSize, ({
  padding
}) => padding, ({
  color
}) => color);
const ViewMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "small-component__ViewMoreButton",
  componentId: "fh81gw-46"
})(["color:#009846;background:none;border:none;font-size:16px;font-weight:400;line-height:24px;"]);
const ImageWidth = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "small-component__ImageWidth",
  componentId: "fh81gw-47"
})(["height:260px;width:323px;@media (min-width:300px){height:230px;width:230px;}@media (min-width:330px){height:230px;width:254px;}@media (min-width:374px){height:260px;width:303px;}@media (min-width:400px){height:270px;width:342px;}@media (min-width:500px){height:214px;width:214px;}@media (min-width:667px){height:214px;width:214px;}@media (min-width:684px){height:214px;width:214px;}@media (min-width:734px){height:214px;width:214px;}@media (min-width:768px){height:260px;width:304px;}@media (min-width:771px){height:183px;width:183px;}@media (min-width:990px){height:260px;width:263px;}@media (min-width:1025px){height:260px;width:263px;}@media (min-width:1026px){height:260px;width:262px;}@media (min-width:1200px){height:260px;width:323px;}"]);
const HorizontalLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__HorizontalLine",
  componentId: "fh81gw-48"
})(["border-top:", ";border-bottom:", ";"], ({
  borderTop
}) => borderTop, ({
  borderBottom
}) => borderBottom);
const SearchBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__SearchBlock",
  componentId: "fh81gw-49"
})(["padding:10px;margin-top:5px;"]);
const OrderTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "small-component__OrderTag",
  componentId: "fh81gw-50"
})(["list-style-type:none;margin:0;padding:0;"]);
const ListTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "small-component__ListTag",
  componentId: "fh81gw-51"
})(["padding:5px;"]);
const ChatContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ChatContainer",
  componentId: "fh81gw-52"
})(["position:fixed;bottom:10%;right:5%;"]);
const ChatBot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ChatBot",
  componentId: "fh81gw-53"
})(["position:fixed;height:500px;width:400px;bottom:20%;right:10%;background:#fff;border-radius:10px 10px 10px 10px;box-shadow:0px 4px 17px rgba(0,0,0,0.25);"]);
const ChatHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ChatHeader",
  componentId: "fh81gw-54"
})(["background:#009846;border-radius:10px 10px 0px 0px;padding:20px;"]);
const ChatContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ChatContent",
  componentId: "fh81gw-55"
})(["background:#fff;padding:10px;height:300px;overflow:scroll;"]);
const ChatFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__ChatFooter",
  componentId: "fh81gw-56"
})(["background:#fff;"]);
const CursorTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "small-component__CursorTag",
  componentId: "fh81gw-57"
})(["cursor:pointer;"]);
const InputTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "small-component__InputTag",
  componentId: "fh81gw-58"
})(["width:-webkit-fill-available;border:none;margin:10px;font-size:16px;height:30px;color:#979797;"]);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });