module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


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

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

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

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QeBL":
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: external "styled-grid-system-component"
var external_styled_grid_system_component_ = __webpack_require__("esL6");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/small-component.ts

const BannerImage = external_styled_components_default.a.section.withConfig({
  displayName: "small-component__BannerImage",
  componentId: "sc-1e3nn7i-0"
})(["background-color:#ffffff;color:#818181;background-position:center;background-image:url(", ");background-repeat:no-repeat;height:500px;background-size:cover;"], ({
  banner
}) => banner);
const CenterTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__CenterTag",
  componentId: "sc-1e3nn7i-1"
})(["font-family:Cerebri Sans,sans-serif;font-style:normal;font-weight:normal;text-align:center;"]);
const FlexTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__FlexTag",
  componentId: "sc-1e3nn7i-2"
})(["display:flex;justify-content:", ";"], ({
  justifyContent
}) => justifyContent);
const Text = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__Text",
  componentId: "sc-1e3nn7i-3"
})(["font-size:", ";color:", ";font-weight:", ";letter-spacing:", ";line-height:", ";font-family:Cerebri Sans,sans-serif;font-style:normal;"], ({
  fontSize
}) => fontSize, ({
  color
}) => color, ({
  fontWeight
}) => fontWeight === undefined ? "normal" : fontWeight, ({
  letterSpacing
}) => letterSpacing === undefined ? "0px" : letterSpacing, ({
  lineHeight
}) => lineHeight === undefined ? "1.5" : lineHeight);
const Horizontaltag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__Horizontaltag",
  componentId: "sc-1e3nn7i-4"
})(["height:", ";overflow:auto;"], ({
  height
}) => height);
const FooterTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__FooterTag",
  componentId: "sc-1e3nn7i-5"
})(["width:-webkit-fill-available;background:#000000;bottom:0;padding:20px;line-height:100px;position:absolute;"]);
const HorizontalLine = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__HorizontalLine",
  componentId: "sc-1e3nn7i-6"
})(["border-top:", ";border-bottom:", ";"], ({
  borderTop
}) => borderTop, ({
  borderBottom
}) => borderBottom);
const SearchBlock = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__SearchBlock",
  componentId: "sc-1e3nn7i-7"
})(["padding:10px;margin-top:5px;background:rgba(232,228,228,0.76);box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:50px;"]);
const SectionConsultant = external_styled_components_default.a.section.withConfig({
  displayName: "small-component__SectionConsultant",
  componentId: "sc-1e3nn7i-8"
})(["background-color:#f8f8f8;color:#818181;background-position:center center;background-repeat:no-repeat;height:460px;margin-top:30px;"]);
const SpaceTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__SpaceTag",
  componentId: "sc-1e3nn7i-9"
})(["margin-top:", "px;margin-bottom:", "px;margin-left:", "px;margin-right:", "px;"], ({
  marginTop
}) => marginTop, ({
  marginBottom
}) => marginBottom, ({
  marginLeft
}) => marginLeft, ({
  marginRight
}) => marginRight);
const CircleTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__CircleTag",
  componentId: "sc-1e3nn7i-10"
})(["padding:10px;height:30px;width:30px;border-radius:50%;background:#c4c4c4;"]);
const InputTag = external_styled_components_default.a.input.withConfig({
  displayName: "small-component__InputTag",
  componentId: "sc-1e3nn7i-11"
})(["border:none;margin:10px;font-size:16px;height:30px;color:#979797;padding:10px;"]);
const SectionBookVisit = external_styled_components_default.a.section.withConfig({
  displayName: "small-component__SectionBookVisit",
  componentId: "sc-1e3nn7i-12"
})(["background-color:#9a9d0f;color:#818181;background-position:center center;background-repeat:no-repeat;height:200px;margin-top:30px;"]);
const AmenitiesCircleTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__AmenitiesCircleTag",
  componentId: "sc-1e3nn7i-13"
})(["padding:10px;height:60px;width:60px;border-radius:50%;background:#c4c4c4;"]);
const AmenitiesCircleColor = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__AmenitiesCircleColor",
  componentId: "sc-1e3nn7i-14"
})(["padding:5px;height:20px;width:20px;border-radius:50%;background:#fff;border:20px solid #9a9d0f;"]);
const SectionBannerRight = external_styled_components_default.a.section.withConfig({
  displayName: "small-component__SectionBannerRight",
  componentId: "sc-1e3nn7i-15"
})(["background-color:#9a9d0f;background-position:center center;background-repeat:no-repeat;height:500px;"]);
const BannerCircle = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__BannerCircle",
  componentId: "sc-1e3nn7i-16"
})(["padding:10px;height:60px;width:60px;border-radius:50%;background:#fff;"]);
const BookVisitButton = external_styled_components_default.a.button.withConfig({
  displayName: "small-component__BookVisitButton",
  componentId: "sc-1e3nn7i-17"
})(["background:#fff;border-radius:25px;padding:10px;color:#000;border:none;font-size:20px;"]);
const BannerButton = external_styled_components_default.a.button.withConfig({
  displayName: "small-component__BannerButton",
  componentId: "sc-1e3nn7i-18"
})(["background:#fff;border-radius:25px;padding:10px;color:#000;border:none;font-size:16px;margin:10px;"]);
const FlyButton = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__FlyButton",
  componentId: "sc-1e3nn7i-19"
})(["justify-content:space-evenly;z-index:auto;position:inherit;margin-top:-60px;"]);
const MenuButton = external_styled_components_default.a.button.withConfig({
  displayName: "small-component__MenuButton",
  componentId: "sc-1e3nn7i-20"
})(["background:none;border:none;"]);
const SearchIconCircle = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__SearchIconCircle",
  componentId: "sc-1e3nn7i-21"
})(["background:rgba(154,157,15,0.73);border-radius:50%;width:20px;height:20px;padding:10px;"]);
const SearchInputTag = external_styled_components_default.a.input.withConfig({
  displayName: "small-component__SearchInputTag",
  componentId: "sc-1e3nn7i-22"
})(["background:none;color:#000;"]);
const FloatingTag = external_styled_components_default.a.div.withConfig({
  displayName: "small-component__FloatingTag",
  componentId: "sc-1e3nn7i-23"
})(["position:relative;z-index:100;top:25px;"]);
const BookAVistitButton = external_styled_components_default.a.button.withConfig({
  displayName: "small-component__BookAVistitButton",
  componentId: "sc-1e3nn7i-24"
})(["background:#fff;color:#000;border:none;padding:10px;font-size:20px;"]);
// CONCATENATED MODULE: ./src/components/icons/icon/map-icon.tsx
var __jsx = external_react_default.a.createElement;

function MapIcon() {
  return __jsx("svg", {
    width: "20",
    height: "26",
    viewBox: "0 0 20 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M19.9398 6.02209C19.5181 2.65448 15.241 0 10 0C4.45783 0 0 2.93181 0 6.57676C0 10.2217 10 19.8095 10 19.8095C10 19.8095 12.1687 17.7097 14.5181 15.0949C14.8193 14.7383 15.1205 14.3817 15.4819 14.0251C15.6627 13.827 15.7831 13.6686 15.9639 13.4705C16.2651 13.1139 16.5663 12.7177 16.8675 12.3611C17.1687 12.0046 17.4699 11.6084 17.7108 11.2518C18.6747 9.984 19.3976 8.75581 19.759 7.72571C19.9398 7.28991 20 6.89371 20 6.57676C20 6.37867 20 6.22019 19.9398 6.02209ZM5.30121 6.29943C5.30121 4.59581 7.40964 3.20914 10 3.20914C12.5904 3.20914 14.6988 4.59581 14.6988 6.29943C14.6988 8.00305 12.5904 9.38971 10 9.38971C7.40964 9.38971 5.30121 8.00305 5.30121 6.29943Z",
    fill: "#424142"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/women-icon.tsx
var women_icon_jsx = external_react_default.a.createElement;

function WomenIcon() {
  return women_icon_jsx("svg", {
    width: "55",
    height: "52",
    viewBox: "0 0 55 52",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, women_icon_jsx("path", {
    d: "M41.4298 31.4346C43.4186 29.8699 44.6872 27.5135 44.6872 24.8818V16.2497C44.6872 7.28955 36.9771 0 27.5 0C18.0229 0 10.3128 7.28955 10.3128 16.2497V24.8818C10.3128 27.5135 11.5814 29.8699 13.5702 31.4346C7.67281 32.0173 3.06023 36.7449 3.06023 42.4723V50.9844C3.06023 51.5452 3.54126 52 4.13444 52H22.6658C23.259 52 23.74 51.5452 23.74 50.9844C23.74 50.4235 23.259 49.9688 22.6658 49.9688H5.20856V42.4723C5.20856 37.4726 9.51069 33.4052 14.7988 33.4052H22.0759C22.4638 35.9069 24.7481 37.8339 27.5 37.8339C30.2519 37.8339 32.5361 35.9068 32.924 33.4052H40.2012C45.4894 33.4052 49.7914 37.4727 49.7914 42.4723V49.9688H32.3343C31.7411 49.9688 31.2601 50.4235 31.2601 50.9844C31.2601 51.5452 31.7411 52 32.3343 52H50.8656C51.4588 52 51.9399 51.5452 51.9399 50.9844V42.4723C51.9399 36.745 47.3272 32.0173 41.4298 31.4346ZM19.757 16.9899H21.6124C23.3521 16.9899 24.9864 16.2994 26.1436 15.1271C27.3765 16.2779 29.0686 16.9899 30.9337 16.9899H35.2429V20.6502C35.2429 24.6868 31.7694 27.9708 27.4999 27.9708C23.2304 27.9708 19.7569 24.6868 19.7569 20.6502V16.9899H19.757ZM27.5 35.8027C25.6615 35.8027 24.1656 34.3885 24.1656 32.6502V29.4548C25.2079 29.8087 26.3305 30.0021 27.5 30.0021C28.6695 30.0021 29.7921 29.8087 30.8344 29.4548V32.6502C30.8344 34.3885 29.3385 35.8027 27.5 35.8027ZM32.9828 31.374V28.4299C35.6387 26.7513 37.3914 23.8908 37.3914 20.6501V15.9742C37.3914 15.4132 36.9104 14.9585 36.3172 14.9585H30.9338C28.3566 14.9585 26.2597 12.976 26.2597 10.5393C26.2597 9.97841 25.7787 9.52372 25.1855 9.52372C24.5923 9.52372 24.1113 9.97841 24.1113 10.5393C24.1113 11.5817 24.3757 12.5661 24.8421 13.4383C24.0835 14.3869 22.8918 14.9585 21.6125 14.9585H18.6828C18.0896 14.9585 17.6086 15.4132 17.6086 15.9742V20.6501C17.6086 23.8906 19.3613 26.7513 22.0172 28.4299V31.374H19.328C15.5417 31.374 12.4613 28.4616 12.4613 24.8818V16.2497C12.4613 8.40958 19.2077 2.03125 27.5 2.03125C35.7923 2.03125 42.5387 8.40958 42.5387 16.2497V24.8818C42.5387 28.4616 39.4583 31.374 35.672 31.374H32.9828Z",
    fill: "black"
  }), women_icon_jsx("path", {
    d: "M27.5 49.9688C27.2175 49.9688 26.9403 50.0773 26.7405 50.2663C26.5407 50.4553 26.4258 50.7173 26.4258 50.9844C26.4258 51.2515 26.5406 51.5135 26.7405 51.7023C26.9403 51.8912 27.2175 52 27.5 52C27.7825 52 28.0597 51.8913 28.2594 51.7023C28.4593 51.5135 28.5742 51.2515 28.5742 50.9844C28.5742 50.7173 28.4593 50.4552 28.2594 50.2663C28.0597 50.0773 27.7825 49.9688 27.5 49.9688Z",
    fill: "black"
  }), women_icon_jsx("path", {
    d: "M27.5 25.2588C26.7699 25.2588 26.04 24.9961 25.4842 24.4707C25.0647 24.0741 25.0647 23.431 25.4842 23.0343C25.9038 22.6377 26.5838 22.6377 27.0035 23.0343C27.136 23.1597 27.3124 23.2288 27.5 23.2288C27.6875 23.2288 27.8639 23.1597 27.9965 23.0343C28.4161 22.6377 29.0961 22.6377 29.5158 23.0343C29.9352 23.4309 29.9352 24.074 29.5158 24.4707C28.96 24.996 28.23 25.2588 27.5 25.2588Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/women-group-icon.tsx
var women_group_icon_jsx = external_react_default.a.createElement;

function WomenGroupIcon() {
  return women_group_icon_jsx("svg", {
    width: "58",
    height: "55",
    viewBox: "0 0 58 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, women_group_icon_jsx("path", {
    d: "M52.8805 40.1422V28.8675C52.8805 23.384 49.075 18.7431 43.8802 17.2758C43.6916 16.0113 43.1773 14.8087 42.3845 13.7862C43.2119 11.2876 42.5425 8.55872 40.5909 6.67452C40.2589 6.35394 39.8955 6.06486 39.5072 5.81198C37.7745 1.72223 33.601 -1 29 -1C24.3989 -1 20.2255 1.72223 18.4927 5.81198C18.1043 6.06486 17.741 6.35394 17.4091 6.67441C15.4575 8.55872 14.7881 11.2875 15.6155 13.7861C14.8227 14.8086 14.3084 16.0112 14.1198 17.2757C8.92509 18.743 5.11952 23.3838 5.11952 28.8674V35.0899C5.11952 36.8242 5.8273 38.4007 6.97688 39.5682C3.00467 40.3271 0 43.7157 0 47.7702V53.9062C0 54.5103 0.50716 55 1.13281 55H35.2762C35.9019 55 36.409 54.5103 36.409 53.9062C36.409 53.3022 35.9019 52.8125 35.2762 52.8125H25.0133V47.7702C25.0133 44.3656 27.8821 41.5958 31.4084 41.5958H36.2349C36.6634 43.421 38.3558 44.7882 40.3739 44.7882C42.392 44.7882 44.0844 43.421 44.5128 41.5958H49.3394C52.8656 41.5958 55.7345 44.3656 55.7345 47.7702V52.8125H45.4711C44.8454 52.8125 44.3383 53.3022 44.3383 53.9062C44.3383 54.5103 44.8454 55 45.4711 55H56.8672C57.4928 55 58 54.5103 58 53.9062V47.7702C58 44.3773 55.8949 41.4519 52.8805 40.1422ZM17.7458 14.7246C18.0406 14.4079 18.1182 13.9548 17.9448 13.5635C17.1319 11.7285 17.5504 9.63158 19.0111 8.2213C19.3061 7.93648 19.6369 7.68766 19.9941 7.48181C20.2166 7.35362 20.3869 7.15577 20.4765 6.92116C21.7872 3.4917 25.2124 1.1875 29 1.1875C32.7876 1.1875 36.2128 3.4917 37.5234 6.92116C37.6131 7.15587 37.7834 7.35373 38.006 7.48181C38.363 7.68744 38.6937 7.93627 38.9889 8.22119C40.4496 9.63147 40.8681 11.7284 40.0552 13.5634C39.8818 13.9548 39.9594 14.4079 40.2542 14.7245C40.8217 15.3344 41.2345 16.0594 41.4697 16.8388C41.1084 16.8084 40.7431 16.7919 40.3738 16.7919C38.5445 16.7919 36.8056 17.1732 35.2381 17.8576C35.9201 16.7845 36.3143 15.5233 36.3143 14.1745V10.8267C36.3143 10.2226 35.8072 9.73297 35.1815 9.73297H31.4075C29.8098 9.73297 28.5102 8.47811 28.5102 6.9357C28.5102 6.33162 28.003 5.84195 27.3774 5.84195C26.7517 5.84195 26.2445 6.33162 26.2445 6.9357C26.2445 7.65495 26.4044 8.33844 26.6895 8.95652C26.2293 9.44422 25.5727 9.73297 24.8724 9.73297H22.8185C22.1928 9.73297 21.6857 10.2226 21.6857 10.8267V14.1745C21.6857 15.5232 22.0798 16.7845 22.7619 17.8576C21.1942 17.1732 19.4555 16.7919 17.6261 16.7919C17.2568 16.7919 16.8915 16.8084 16.5303 16.8388C16.7655 16.0595 17.1783 15.3344 17.7458 14.7246ZM24.8724 11.9206C26.0698 11.9206 27.201 11.4819 28.0587 10.7253C28.961 11.4696 30.1303 11.9206 31.4073 11.9206H34.0486V14.1746C34.0486 16.8625 31.7838 19.0492 28.9999 19.0492C26.216 19.0492 23.9512 16.8625 23.9512 14.1746V11.9206H24.8724ZM29 21.2368C29.6568 21.2368 30.2931 21.1514 30.8992 20.9939C30.1353 21.8495 29.4937 22.8095 29 23.8483C28.5063 22.8095 27.8647 21.8496 27.1008 20.9939C27.7069 21.1514 28.3432 21.2368 29 21.2368ZM7.38514 28.8675C7.38514 23.4152 11.9793 18.9795 17.6262 18.9795C23.2732 18.9795 27.8672 23.4152 27.8672 28.8675V35.09C27.8672 37.4712 25.8609 39.4084 23.3946 39.4084H21.8709V37.8356C23.7518 36.5477 24.9828 34.4305 24.9828 32.0397V28.669C24.9828 28.0649 24.4757 27.5752 23.85 27.5752H20.05C18.4372 27.5752 17.1252 26.3083 17.1252 24.7513C17.1252 24.1472 16.618 23.6575 15.9924 23.6575C15.3667 23.6575 14.8596 24.1472 14.8596 24.7513C14.8596 25.4761 15.021 26.1647 15.3091 26.7874C14.8441 27.2822 14.1794 27.5753 13.4703 27.5753H11.4023C10.7767 27.5753 10.2695 28.065 10.2695 28.6691V32.0398C10.2695 34.4306 11.5005 36.5478 13.3815 37.8358V39.4086H11.8577C9.39158 39.4086 7.38526 37.4715 7.38526 35.0902V28.8675H7.38514ZM12.535 29.7626H13.4702C14.6762 29.7626 15.8153 29.3197 16.6782 28.5565C17.586 29.3075 18.7636 29.7626 20.05 29.7626H22.7172V32.0396C22.7172 34.75 20.4333 36.9551 17.6261 36.9551C14.8189 36.9551 12.535 34.75 12.535 32.0396V29.7626ZM15.647 38.8793C16.2772 39.0495 16.9404 39.1426 17.6261 39.1426C18.3118 39.1426 18.9751 39.0496 19.6052 38.8793V40.6898C19.6052 41.7435 18.7175 42.6007 17.6261 42.6007C16.5349 42.6007 15.647 41.7435 15.647 40.6898V38.8793ZM22.7477 47.7702V52.8125H2.26562V47.7702C2.26562 44.3656 5.13447 41.5958 8.66069 41.5958H13.4873C13.9157 43.421 15.6081 44.7882 17.6262 44.7882C19.6443 44.7882 21.3368 43.421 21.7652 41.5958H25.5745C23.8386 43.126 22.7477 45.3273 22.7477 47.7702ZM35.2827 29.7626H37.9499C39.2362 29.7626 40.4139 29.3074 41.3217 28.5565C42.1847 29.3197 43.3238 29.7626 44.5297 29.7626H45.4649V32.0396C45.4649 34.75 43.181 36.9551 40.3738 36.9551C37.5666 36.9551 35.2827 34.75 35.2827 32.0396V29.7626ZM40.3739 42.6007C39.2825 42.6007 38.3948 41.7435 38.3948 40.6898V38.8793C39.0249 39.0495 39.6882 39.1426 40.3739 39.1426C41.0596 39.1426 41.7228 39.0496 42.353 38.8793V40.6898C42.353 41.7435 41.4651 42.6007 40.3739 42.6007ZM44.6187 39.4083V37.8355C46.4996 36.5476 47.7306 34.4304 47.7306 32.0395V28.6687C47.7306 28.0647 47.2234 27.575 46.5978 27.575H44.5297C43.8206 27.575 43.1559 27.2819 42.6909 26.787C42.9789 26.1644 43.1404 25.4757 43.1404 24.7509C43.1404 24.1468 42.6333 23.6572 42.0076 23.6572C41.382 23.6572 40.8748 24.1468 40.8748 24.7509C40.8748 26.3081 39.5627 27.5749 37.95 27.5749H34.15C33.5243 27.5749 33.0172 28.0645 33.0172 28.6686V32.0393C33.0172 34.4302 34.2482 36.5473 36.1291 37.8352V39.408H30.1328V28.8671C30.1328 23.4149 34.7269 18.9792 40.3739 18.9792C46.0208 18.9792 50.6149 23.4149 50.6149 28.8671V39.408H44.6187V39.4083Z",
    fill: "black"
  }), women_group_icon_jsx("path", {
    d: "M40.3734 52.8125C40.0755 52.8125 39.7832 52.9295 39.5725 53.133C39.3618 53.3364 39.2406 53.6186 39.2406 53.9062C39.2406 54.1939 39.3618 54.4761 39.5725 54.6795C39.7832 54.883 40.0755 55 40.3734 55C40.6725 55 40.9636 54.883 41.1743 54.6795C41.3862 54.4761 41.5062 54.1939 41.5062 53.9062C41.5062 53.6186 41.3862 53.3364 41.1743 53.133C40.9636 52.9295 40.6725 52.8125 40.3734 52.8125Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/whatsapp-icon.tsx
var whatsapp_icon_jsx = external_react_default.a.createElement;

function WhatsAppIcon() {
  return whatsapp_icon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, whatsapp_icon_jsx("path", {
    d: "M15.0037 0H14.9963C6.72563 0 0 6.7275 0 15C0 18.2812 1.0575 21.3225 2.85562 23.7919L0.98625 29.3644L6.75187 27.5213C9.12375 29.0925 11.9531 30 15.0037 30C23.2744 30 30 23.2706 30 15C30 6.72938 23.2744 0 15.0037 0Z",
    fill: "#4CAF50"
  }), whatsapp_icon_jsx("path", {
    d: "M23.7319 21.1819C23.37 22.2037 21.9337 23.0512 20.7881 23.2987C20.0044 23.4656 18.9806 23.5987 15.5344 22.17C11.1262 20.3437 8.2875 15.8644 8.06625 15.5737C7.85437 15.2831 6.285 13.2019 6.285 11.0494C6.285 8.89688 7.37812 7.84875 7.81875 7.39875C8.18062 7.02938 8.77875 6.86063 9.3525 6.86063C9.53812 6.86063 9.705 6.87 9.855 6.8775C10.2956 6.89625 10.5169 6.9225 10.8075 7.61813C11.1694 8.49 12.0506 10.6425 12.1556 10.8637C12.2625 11.085 12.3694 11.385 12.2194 11.6756C12.0787 11.9756 11.955 12.1087 11.7337 12.3637C11.5125 12.6187 11.3025 12.8137 11.0812 13.0875C10.8787 13.3256 10.65 13.5806 10.905 14.0212C11.16 14.4525 12.0412 15.8906 13.3387 17.0456C15.0131 18.5362 16.3706 19.0125 16.8562 19.215C17.2181 19.365 17.6494 19.3294 17.9137 19.0481C18.2494 18.6862 18.6637 18.0862 19.0856 17.4956C19.3856 17.0719 19.7644 17.0194 20.1619 17.1694C20.5669 17.31 22.71 18.3694 23.1506 18.5887C23.5912 18.81 23.8819 18.915 23.9887 19.1006C24.0937 19.2862 24.0937 20.1581 23.7319 21.1819Z",
    fill: "#FAFAFA"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/bed-icon.tsx
var bed_icon_jsx = external_react_default.a.createElement;

function BedIcon() {
  return bed_icon_jsx("svg", {
    width: "35",
    height: "34",
    viewBox: "0 0 35 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, bed_icon_jsx("path", {
    d: "M33.9062 22.8438H33.3594V18.5938C33.3586 18.0304 33.1279 17.4903 32.7178 17.092C32.3078 16.6936 31.7518 16.4695 31.1719 16.4688V7.4375C31.1711 6.87414 30.9404 6.33407 30.5303 5.93571C30.1203 5.53736 29.5643 5.31324 28.9844 5.3125H6.01562C5.4357 5.31324 4.87974 5.53736 4.46967 5.93571C4.0596 6.33407 3.82888 6.87414 3.82812 7.4375V16.4688C3.2482 16.4695 2.69224 16.6936 2.28217 17.092C1.8721 17.4903 1.64138 18.0304 1.64062 18.5938V22.8438H1.09375C0.94871 22.8438 0.80961 22.8997 0.707051 22.9993C0.604492 23.099 0.546875 23.2341 0.546875 23.375V25.5C0.546875 25.6409 0.604492 25.776 0.707051 25.8757C0.80961 25.9753 0.94871 26.0312 1.09375 26.0312H1.64062V28.1562C1.64062 28.2971 1.69824 28.4323 1.8008 28.5319C1.90336 28.6315 2.04246 28.6875 2.1875 28.6875H3.82812C3.95452 28.6876 4.07702 28.645 4.17475 28.5672C4.27248 28.4893 4.33938 28.3809 4.36406 28.2605L4.82344 26.0312H30.1766L30.6359 28.2605C30.6606 28.3809 30.7275 28.4893 30.8253 28.5672C30.923 28.645 31.0455 28.6876 31.1719 28.6875H32.8125C32.9575 28.6875 33.0966 28.6315 33.1992 28.5319C33.3018 28.4323 33.3594 28.2971 33.3594 28.1562V26.0312H33.9062C34.0513 26.0312 34.1904 25.9753 34.2929 25.8757C34.3955 25.776 34.4531 25.6409 34.4531 25.5V23.375C34.4531 23.2341 34.3955 23.099 34.2929 22.9993C34.1904 22.8997 34.0513 22.8438 33.9062 22.8438ZM4.92188 7.4375C4.92226 7.15582 5.03761 6.88578 5.24265 6.68661C5.44768 6.48743 5.72566 6.37537 6.01562 6.375H28.9844C29.2743 6.37537 29.5523 6.48743 29.7574 6.68661C29.9624 6.88578 30.0777 7.15582 30.0781 7.4375V16.4688H28.9844V14.3438C28.9836 13.7804 28.7529 13.2403 28.3428 12.842C27.9328 12.4436 27.3768 12.2195 26.7969 12.2188H20.2344C19.6544 12.2195 19.0985 12.4436 18.6884 12.842C18.2783 13.2403 18.0476 13.7804 18.0469 14.3438V16.4688H16.9531V14.3438C16.9524 13.7804 16.7217 13.2403 16.3116 12.842C15.9015 12.4436 15.3456 12.2195 14.7656 12.2188H8.20312C7.6232 12.2195 7.06724 12.4436 6.65717 12.842C6.2471 13.2403 6.01638 13.7804 6.01562 14.3438V16.4688H4.92188V7.4375ZM27.8906 14.3438V16.4688H19.1406V14.3438C19.141 14.0621 19.2564 13.792 19.4614 13.5929C19.6664 13.3937 19.9444 13.2816 20.2344 13.2812H26.7969C27.0868 13.2816 27.3648 13.3937 27.5699 13.5929C27.7749 13.792 27.8902 14.0621 27.8906 14.3438ZM15.8594 14.3438V16.4688H7.10938V14.3438C7.10976 14.0621 7.22511 13.792 7.43015 13.5929C7.63518 13.3937 7.91316 13.2816 8.20312 13.2812H14.7656C15.0556 13.2816 15.3336 13.3937 15.5386 13.5929C15.7436 13.792 15.859 14.0621 15.8594 14.3438ZM2.73438 18.5938C2.73475 18.3121 2.85011 18.042 3.05515 17.8429C3.26018 17.6437 3.53816 17.5316 3.82812 17.5312H31.1719C31.4618 17.5316 31.7398 17.6437 31.9449 17.8429C32.1499 18.042 32.2652 18.3121 32.2656 18.5938V22.8438H2.73438V18.5938ZM3.37969 27.625H2.73438V26.0312H3.70781L3.37969 27.625ZM32.2656 27.625H31.6203L31.2922 26.0312H32.2656V27.625ZM33.3594 24.9688H1.64062V23.9062H33.3594V24.9688Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/sofa-icon.tsx
var sofa_icon_jsx = external_react_default.a.createElement;

function SofaIcon() {
  return sofa_icon_jsx("svg", {
    width: "37",
    height: "40",
    viewBox: "0 0 37 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, sofa_icon_jsx("path", {
    d: "M15.784 16.3526C15.3901 16.6539 15.0526 17.0331 14.7893 17.4703C14.7582 17.5218 14.7368 17.5795 14.7263 17.64C14.7158 17.7005 14.7164 17.7627 14.7281 17.8229C14.7399 17.8832 14.7624 17.9403 14.7946 17.9911C14.8268 18.0419 14.8679 18.0854 14.9155 18.119C14.9632 18.1527 15.0166 18.1758 15.0726 18.1872C15.1285 18.1985 15.186 18.1978 15.2417 18.1852C15.2975 18.1725 15.3503 18.1481 15.3973 18.1133C15.4443 18.0785 15.4845 18.0341 15.5156 17.9825C15.7194 17.6441 15.9806 17.3504 16.2855 17.1172C16.3785 17.0449 16.4412 16.9358 16.4601 16.8137C16.479 16.6917 16.4524 16.5664 16.3862 16.4655C16.32 16.3645 16.2195 16.2959 16.1067 16.2747C15.9939 16.2535 15.8779 16.2814 15.784 16.3523V16.3526Z",
    fill: "black"
  }), sofa_icon_jsx("path", {
    d: "M7.93115 36.4535H4.75291V14.98C4.75291 14.9722 4.75392 14.965 4.75392 14.9573C4.75392 11.2501 7.39942 8.23398 10.6512 8.23398C13.7772 8.23398 16.3416 11.022 16.5352 14.5312C15.6061 14.6506 14.7497 15.1339 14.128 15.8897C13.5062 16.6455 13.1621 17.6214 13.1608 18.6328V19.3652C13.1608 19.4896 13.2065 19.6088 13.2878 19.6967C13.3691 19.7846 13.4794 19.834 13.5944 19.834H15.5239C15.7155 20.584 16.3353 21.138 17.0611 21.138C17.787 21.138 18.4066 20.5843 18.5982 19.834H20.3694C20.4844 19.834 20.5946 19.7846 20.676 19.6967C20.7573 19.6088 20.803 19.4896 20.803 19.3652V18.6328C20.8017 17.6168 20.4546 16.6368 19.8279 15.8797C19.2011 15.1227 18.3386 14.6414 17.4047 14.5278C17.2073 10.5026 14.2539 7.29633 10.6512 7.29633C6.93374 7.29633 3.9074 10.7104 3.88717 14.9152C3.88645 14.926 3.88565 14.9369 3.88565 14.9479V36.4534H1.15625C1.04125 36.4534 0.930968 36.5027 0.849653 36.5907C0.768338 36.6786 0.722656 36.7978 0.722656 36.9221C0.722656 37.0464 0.768338 37.1657 0.849653 37.2536C0.930968 37.3415 1.04125 37.3909 1.15625 37.3909H7.93115C8.04615 37.3909 8.15643 37.3415 8.23775 37.2536C8.31906 37.1657 8.36475 37.0464 8.36475 36.9221C8.36475 36.7978 8.31906 36.6786 8.23775 36.5907C8.15643 36.5027 8.04615 36.4534 7.93115 36.4534V36.4535ZM17.061 20.2006C16.9409 20.1985 16.8231 20.1639 16.7185 20.0999C16.614 20.0358 16.5259 19.9445 16.4625 19.8341H17.6595C17.5961 19.9445 17.5081 20.0358 17.4035 20.0999C17.2989 20.1639 17.1812 20.1985 17.061 20.2006ZM19.9357 18.6328V18.8965H14.028V18.6328C14.028 17.7859 14.3392 16.9736 14.8932 16.3748C15.4471 15.7759 16.1984 15.4395 16.9818 15.4395C17.7653 15.4395 18.5166 15.7759 19.0705 16.3748C19.6245 16.9736 19.9357 17.7859 19.9357 18.6328Z",
    fill: "black"
  }), sofa_icon_jsx("path", {
    d: "M34.2295 29.211V26.1094C34.2252 25.5863 34.0292 25.0864 33.6844 24.7194C33.3396 24.3524 32.8742 24.1482 32.3903 24.1516H24.456C24.2144 24.1503 23.975 24.2009 23.7517 24.3005C23.5284 24.4002 23.3256 24.5468 23.1552 24.7319C23.1195 24.771 23.0859 24.8111 23.0536 24.8525C22.8798 24.6323 22.6638 24.4556 22.4206 24.3345C22.1773 24.2135 21.9126 24.1511 21.6449 24.1516H13.6654C13.1815 24.1482 12.7162 24.3523 12.3713 24.7194C12.0265 25.0864 11.8305 25.5863 11.8261 26.1094V29.2199C11.3071 29.2695 10.8238 29.5263 10.4704 29.9402C10.117 30.3541 9.91875 30.8954 9.91441 31.4587V36.9225C9.91441 37.0468 9.96009 37.1661 10.0414 37.254C10.1227 37.3419 10.233 37.3913 10.348 37.3913H13.7097C13.8247 37.3913 13.935 37.3419 14.0163 37.254C14.0976 37.1661 14.1433 37.0468 14.1433 36.9225V36.2981L32.0485 36.304V36.9225C32.0485 37.0468 32.0942 37.1661 32.1755 37.254C32.2568 37.3419 32.3671 37.3913 32.4821 37.3913H35.8437C35.9587 37.3913 36.069 37.3419 36.1503 37.254C36.2317 37.1661 36.2773 37.0468 36.2773 36.9225V31.4585C36.2724 30.8698 36.056 30.3063 35.6739 29.8869C35.2918 29.4676 34.7739 29.2252 34.2295 29.211ZM23.7695 25.3933C23.8595 25.2959 23.9666 25.2188 24.0844 25.1664C24.2023 25.1141 24.3286 25.0877 24.456 25.0886H32.3903C32.6443 25.0849 32.8892 25.1903 33.0714 25.3816C33.2536 25.5728 33.3583 25.8344 33.3624 26.1089V29.3768C32.9764 29.5427 32.6452 29.8295 32.4111 30.2004C32.177 30.5712 32.0507 31.0093 32.0485 31.4582V31.6418L23.4863 31.6395L23.4874 26.1561C23.4853 26.0151 23.5092 25.875 23.5576 25.7441C23.606 25.6131 23.678 25.4939 23.7695 25.3933ZM13.6654 25.0886H21.6447C21.8987 25.0849 22.1437 25.1904 22.326 25.3817C22.5082 25.5731 22.6128 25.8348 22.6168 26.1094L22.6187 31.6392L14.1433 31.6367V31.4585C14.1406 30.9829 13.9989 30.5203 13.7385 30.1369C13.4781 29.7535 13.1123 29.4688 12.6933 29.3236V26.1094C12.6974 25.8348 12.802 25.5732 12.9842 25.3819C13.1664 25.1906 13.4114 25.0852 13.6654 25.0889V25.0886ZM13.2761 36.4533H10.7816V31.4585C10.7905 31.1073 10.9258 30.7737 11.1588 30.5287C11.3917 30.2837 11.7039 30.1466 12.0289 30.1466C12.3539 30.1466 12.666 30.2837 12.899 30.5287C13.1319 30.7737 13.2672 31.1073 13.2761 31.4585V36.4533ZM14.1433 35.3601V32.5742L23.0521 32.5768H23.0527L32.0484 32.5796V35.3663L14.1433 35.3601ZM35.4102 36.4535H32.9157V31.4585C32.9243 31.107 33.0594 30.7731 33.2924 30.5278C33.5254 30.2825 33.8377 30.1452 34.1629 30.1452C34.4881 30.1452 34.8005 30.2825 35.0334 30.5278C35.2664 30.7731 35.4016 31.107 35.4102 31.4585V36.4535Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/facebook-icon.tsx
var facebook_icon_jsx = external_react_default.a.createElement;

function FaceBookIcon() {
  return facebook_icon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, facebook_icon_jsx("path", {
    d: "M17.3233 30V16.3166H21.9144L22.6032 10.9823H17.3233V7.5772C17.3233 6.0333 17.7503 4.98115 19.9667 4.98115L22.789 4.97999V0.208845C22.301 0.145418 20.6256 0 18.6756 0C14.6037 0 11.816 2.48545 11.816 7.0489V10.9823H7.21095V16.3166H11.816V30H17.3233Z",
    fill: "#010002"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/instagram-icon.tsx
var instagram_icon_jsx = external_react_default.a.createElement;

function InstagramIcon() {
  return instagram_icon_jsx("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, instagram_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, instagram_icon_jsx("path", {
    d: "M25.5258 0H9.47419C4.25004 0 1.90735e-05 4.25002 1.90735e-05 9.47416V25.526C1.90735e-05 30.7499 4.25004 34.9999 9.47419 34.9999H25.5261C30.7499 34.9999 35 30.7499 35 25.526V9.47416C35 4.25002 30.7499 0 25.5258 0V0ZM32.9481 25.526C32.9481 29.6185 29.6185 32.9481 25.5258 32.9481H9.47419C5.38144 32.9481 2.05187 29.6185 2.05187 25.526V9.47416C2.05187 5.38142 5.38144 2.05184 9.47419 2.05184H25.5261C29.6185 2.05184 32.9481 5.38142 32.9481 9.47416V25.526Z",
    fill: "black"
  }), instagram_icon_jsx("path", {
    d: "M17.5 7.92993C12.223 7.92993 7.92996 12.2229 7.92996 17.5C7.92996 22.777 12.223 27.07 17.5 27.07C22.777 27.07 27.07 22.777 27.07 17.5C27.07 12.2229 22.777 7.92993 17.5 7.92993ZM17.5 25.0181C13.3546 25.0181 9.98181 21.6456 9.98181 17.5C9.98181 13.3546 13.3546 9.98178 17.5 9.98178C21.6456 9.98178 25.0182 13.3546 25.0182 17.5C25.0182 21.6456 21.6456 25.0181 17.5 25.0181Z",
    fill: "black"
  }), instagram_icon_jsx("path", {
    d: "M27.2989 4.5312C25.7394 4.5312 24.471 5.79986 24.471 7.35904C24.471 8.91848 25.7394 10.1871 27.2989 10.1871C28.8583 10.1871 30.127 8.91848 30.127 7.35904C30.127 5.79959 28.8583 4.5312 27.2989 4.5312ZM27.2989 8.13502C26.8711 8.13502 26.5229 7.78681 26.5229 7.35904C26.5229 6.93099 26.8711 6.58305 27.2989 6.58305C27.7269 6.58305 28.0751 6.93099 28.0751 7.35904C28.0751 7.78681 27.7269 8.13502 27.2989 8.13502Z",
    fill: "black"
  })), instagram_icon_jsx("defs", null, instagram_icon_jsx("clipPath", {
    id: "clip0"
  }, instagram_icon_jsx("rect", {
    width: "35",
    height: "35",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icons/icon/linkedin-icon.tsx
var linkedin_icon_jsx = external_react_default.a.createElement;

function LinkedInIcon() {
  return linkedin_icon_jsx("svg", {
    width: "25",
    height: "26",
    viewBox: "0 0 25 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, linkedin_icon_jsx("path", {
    d: "M3.61133 1.32027C1.89271 1.32027 0.769043 2.49394 0.769043 4.03657C0.769043 5.54513 1.85924 6.75227 3.54538 6.75227H3.57799C5.33023 6.75227 6.42071 5.54513 6.42071 4.03657C6.38795 2.49394 5.33023 1.32027 3.61133 1.32027Z",
    fill: "black"
  }), linkedin_icon_jsx("path", {
    d: "M1.06602 8.89862H6.09026V24.6189H1.06602V8.89862Z",
    fill: "black"
  }), linkedin_icon_jsx("path", {
    d: "M16.6558 8.52966C14.4467 8.52966 12.9653 10.8227 12.9653 10.8227V8.84907H8.87018V22.4582H12.9651V14.8583C12.9651 14.4515 12.9918 14.0453 13.1 13.7543C13.396 12.9419 14.0697 12.1002 15.201 12.1002C16.6828 12.1002 17.2755 13.3482 17.2755 15.1778V22.4582H21.3702V14.655C21.3702 10.4748 19.3498 8.52966 16.6558 8.52966Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/internet-icon.tsx
var internet_icon_jsx = external_react_default.a.createElement;

function InternetIcon() {
  return internet_icon_jsx("svg", {
    width: "26",
    height: "28",
    viewBox: "0 0 26 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, internet_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, internet_icon_jsx("path", {
    d: "M23.7148 15.6133H21.7724L25.8876 5.27239C26.0534 4.856 25.8742 4.37371 25.4876 4.19527C25.1009 4.01682 24.6531 4.20971 24.4874 4.6261L20.1149 15.6133H5.88509L1.51262 4.6261C1.34692 4.20971 0.899184 4.01671 0.512434 4.19527C0.125785 4.37371 -0.0533203 4.85595 0.112379 5.27239L4.22764 15.6133H2.28516C1.02512 15.6133 0 16.7173 0 18.0742V22.9961C0 24.3531 1.02512 25.4571 2.28516 25.4571H3.09766V26.3321C3.09766 26.7851 3.4387 27.1524 3.85938 27.1524C4.28005 27.1524 4.62109 26.7851 4.62109 26.3321V25.4571H21.3789V26.3321C21.3789 26.7851 21.72 27.1524 22.1406 27.1524C22.5613 27.1524 22.9023 26.7851 22.9023 26.3321V25.4571H23.7148C24.9749 25.4571 26 24.3531 26 22.9961V18.0742C26 16.7173 24.9749 15.6133 23.7148 15.6133ZM24.4766 22.9961C24.4766 23.4484 24.1349 23.8164 23.7148 23.8164H2.28516C1.86514 23.8164 1.52344 23.4484 1.52344 22.9961V18.0742C1.52344 17.6219 1.86514 17.2539 2.28516 17.2539H23.7148C24.1349 17.2539 24.4766 17.6219 24.4766 18.0742V22.9961Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M11.3872 11.4131C11.0898 11.7335 11.0898 12.2528 11.3872 12.5732C11.6847 12.8936 12.167 12.8936 12.4644 12.5732C12.5481 12.4831 12.7289 12.332 13 12.332C13.2711 12.332 13.4518 12.4831 13.5355 12.5732C13.8329 12.8936 14.3153 12.8936 14.6127 12.5732C14.9102 12.2528 14.9102 11.7335 14.6127 11.4131C14.3624 11.1436 13.8201 10.6914 13 10.6914C12.1799 10.6914 11.6375 11.1436 11.3872 11.4131Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M5.99746 5.61559C7.86875 3.59893 10.3556 2.48828 13 2.48828C15.6444 2.48828 18.1312 3.59893 20.0025 5.61559C20.2997 5.93595 20.782 5.93638 21.0798 5.61602C21.3773 5.29583 21.3775 4.77641 21.0802 4.45594C18.9211 2.12909 16.0515 0.847656 13 0.847656C9.94845 0.847656 7.0789 2.12909 4.91988 4.45588C4.62251 4.77635 4.62266 5.29572 4.92029 5.61597C5.21782 5.93622 5.70019 5.936 5.99746 5.61559Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M18.924 7.93521C19.2215 7.61507 19.2218 7.09565 18.9245 6.77513C17.3416 5.06871 15.2376 4.12891 13 4.12891C10.7625 4.12891 8.65843 5.06871 7.07553 6.77513C6.77826 7.09565 6.77846 7.61502 7.07609 7.93521C7.37372 8.25541 7.85604 8.25513 8.15331 7.93461C9.44839 6.53844 11.1697 5.76953 13 5.76953C14.8303 5.76953 16.5515 6.53844 17.8466 7.93461C18.1439 8.25497 18.6261 8.25562 18.924 7.93521Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M16.7689 10.2537C17.0664 9.93333 17.0664 9.41396 16.7689 9.0936C15.7608 8.008 14.4223 7.41016 13 7.41016C11.5777 7.41016 10.2392 8.008 9.23116 9.0936C8.93369 9.41396 8.93369 9.93333 9.23116 10.2537C9.52859 10.574 10.0109 10.5741 10.3084 10.2537C11.0287 9.478 11.9846 9.05078 13 9.05078C14.0154 9.05078 14.9713 9.478 15.6917 10.2537C15.9891 10.574 16.4714 10.574 16.7689 10.2537Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M16.0469 18.8945C15.6262 18.8945 15.2852 19.2618 15.2852 19.7148V21.3555C15.2852 21.8085 15.6262 22.1758 16.0469 22.1758C16.4675 22.1758 16.8086 21.8085 16.8086 21.3555V19.7148C16.8086 19.2618 16.4675 18.8945 16.0469 18.8945Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M19.0938 18.8945C18.6731 18.8945 18.332 19.2618 18.332 19.7148V21.3555C18.332 21.8085 18.6731 22.1758 19.0938 22.1758C19.5144 22.1758 19.8555 21.8085 19.8555 21.3555V19.7148C19.8555 19.2618 19.5144 18.8945 19.0938 18.8945Z",
    fill: "black"
  }), internet_icon_jsx("path", {
    d: "M22.1406 18.8945C21.72 18.8945 21.3789 19.2618 21.3789 19.7148V21.3555C21.3789 21.8085 21.72 22.1758 22.1406 22.1758C22.5613 22.1758 22.9023 21.8085 22.9023 21.3555V19.7148C22.9023 19.2618 22.5613 18.8945 22.1406 18.8945Z",
    fill: "black"
  })), internet_icon_jsx("defs", null, internet_icon_jsx("clipPath", {
    id: "clip0"
  }, internet_icon_jsx("rect", {
    width: "26",
    height: "28",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icons/icon/power-icon.tsx
var power_icon_jsx = external_react_default.a.createElement;

function PowerIcon() {
  return power_icon_jsx("svg", {
    width: "30",
    height: "29",
    viewBox: "0 0 30 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, power_icon_jsx("path", {
    d: "M25.5994 4.28312C22.7617 1.5399 18.9974 0.0292358 14.9999 0.0292358C10.9932 0.0292358 7.22643 1.53752 4.3933 4.27615C1.56018 7.01478 0 10.6561 0 14.5292C0 18.2712 1.47891 21.8176 4.10754 24.498H2.8125C2.29471 24.498 1.875 24.9038 1.875 25.4042C1.875 25.9047 2.29471 26.3105 2.8125 26.3105H6.5625C7.08029 26.3105 7.5 25.9047 7.5 25.4042V21.7792C7.5 21.2788 7.08029 20.873 6.5625 20.873C6.04471 20.873 5.625 21.2788 5.625 21.7792V23.4085C3.22746 21.0455 1.875 17.8766 1.875 14.5292C1.875 7.53332 7.76279 1.84174 14.9999 1.84174C18.4966 1.84174 21.7901 3.1639 24.2736 5.56472C26.7572 7.96555 28.125 11.1492 28.125 14.5293C28.125 21.1419 22.9945 26.5742 16.1912 27.1652C16.1074 27.172 16.0488 27.1377 16.0142 27.1072C15.9792 27.0763 15.9374 27.0219 15.9374 26.939V21.7033C18.5944 21.2705 20.6249 19.0312 20.6249 16.3417V12.7167C20.6249 12.2163 20.2052 11.8105 19.6874 11.8105H18.7499V9.09173C18.7499 8.59126 18.3302 8.18548 17.8124 8.18548C17.2946 8.18548 16.8749 8.59126 16.8749 9.09173V11.8105H13.1249V9.09173C13.1249 8.59126 12.7052 8.18548 12.1874 8.18548C11.6696 8.18548 11.2499 8.59126 11.2499 9.09173V11.8105H10.3124C9.79465 11.8105 9.37494 12.2163 9.37494 12.7167V16.3417C9.37494 19.0313 11.4055 21.2705 14.0624 21.7033V26.939C14.0624 27.5104 14.3127 28.0593 14.7491 28.4449C15.1385 28.789 15.6485 28.9785 16.1718 28.9785C16.2341 28.9785 16.2965 28.9759 16.359 28.9704C20.0736 28.6477 23.5143 27.0025 26.0474 24.3377C28.5963 21.6565 30 18.1732 30 14.5293C30 10.665 28.4372 7.02622 25.5994 4.28312ZM13.5938 16.3417C13.5938 15.5922 14.2246 14.9824 15 14.9824C15.7754 14.9824 16.4062 15.5922 16.4062 16.3417C16.4062 17.0913 15.7754 17.7011 15 17.7011C14.2246 17.7011 13.5938 17.0913 13.5938 16.3417Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/maintance-icon.tsx
var maintance_icon_jsx = external_react_default.a.createElement;

function MaintanceIcon() {
  return maintance_icon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, maintance_icon_jsx("path", {
    d: "M9.84375 7.96875C9.84375 9.00281 10.6847 9.84375 11.7188 9.84375C12.7528 9.84375 13.5938 9.00281 13.5938 7.96875C13.5938 6.93469 12.7528 6.09375 11.7188 6.09375C10.6847 6.09375 9.84375 6.93469 9.84375 7.96875ZM12.6562 7.96875C12.6562 8.48578 12.2358 8.90625 11.7188 8.90625C11.2017 8.90625 10.7812 8.48578 10.7812 7.96875C10.7812 7.45172 11.2017 7.03125 11.7188 7.03125C12.2358 7.03125 12.6562 7.45172 12.6562 7.96875Z",
    fill: "black"
  }), maintance_icon_jsx("path", {
    d: "M29.5312 14.5312V11.7187H28.3758L24.6258 6.09371H18.0066L12.8503 0.937463C12.2461 0.332776 11.1914 0.332776 10.5872 0.937463L0.800156 10.7245C0.586406 10.9382 0.46875 11.2223 0.46875 11.5247C0.46875 12.1486 0.976406 12.6562 1.60031 12.6562H2.34375V22.9687H1.875C1.09969 22.9687 0.46875 23.5997 0.46875 24.375V28.125C0.46875 28.9003 1.09969 29.5312 1.875 29.5312H13.267L16.0795 27.6562H24.1809L24.7064 28.1817C24.9717 28.4475 25.3252 28.5937 25.7011 28.5937H28.125C28.9003 28.5937 29.5312 27.9628 29.5312 27.1875V25.3125C29.5312 24.7022 29.138 24.1865 28.5938 23.9925V14.5312H29.5312ZM28.5938 13.5937H21.0938V12.6562H28.5938V13.5937ZM23.9062 26.7187H16.4062V25.7812H23.9062V26.7187ZM12.6562 23.9062V24.8437H6.09375C5.57672 24.8437 5.15625 25.2642 5.15625 25.7812V26.7187C5.15625 27.2357 5.57672 27.6562 6.09375 27.6562H12.6562V28.5937H4.21875V23.9062H12.6562ZM9.84375 22.9687H6.09375V15.4687H9.84375V22.9687ZM12.6562 26.7187H6.09375V25.7812H12.6562V26.7187ZM13.5938 24.3131L15.4688 25.5632V26.9367L13.5938 28.1868V24.3131ZM24.1242 7.03121L27.2494 11.7187H22.9523C22.9631 11.6554 22.9688 11.5907 22.9688 11.5247C22.9688 11.2223 22.8511 10.9382 22.6373 10.7245L18.9441 7.03121H24.1242ZM1.40625 11.5247C1.40625 11.4736 1.42687 11.4234 1.46297 11.3873L11.25 1.60028C11.3733 1.47699 11.5444 1.40621 11.7188 1.40621C11.8931 1.40621 12.0642 1.47699 12.1875 1.60028L21.9745 11.3873C22.0106 11.4234 22.0312 11.4736 22.0312 11.5247C22.0312 11.6315 21.9441 11.7187 21.8372 11.7187H20.9798L11.7188 2.45762L2.45766 11.7187H1.60031C1.49344 11.7187 1.40625 11.6315 1.40625 11.5247ZM19.6542 11.7187H3.78328L11.7188 3.78324L19.6542 11.7187ZM3.28125 12.6562H20.1562V24.8437H16.0795L13.267 22.9687H10.7812V14.5312H5.15625V22.9687H3.28125V12.6562ZM1.40625 28.125V24.375C1.40625 24.1167 1.61672 23.9062 1.875 23.9062H3.28125V28.5937H1.875C1.61672 28.5937 1.40625 28.3832 1.40625 28.125ZM28.5938 27.1875C28.5938 27.4457 28.3833 27.6562 28.125 27.6562H25.7011C25.5759 27.6562 25.4578 27.6075 25.3692 27.5189L24.8438 26.9934V25.5065L25.3692 24.9811C25.4578 24.8925 25.5759 24.8437 25.7011 24.8437H28.125C28.3833 24.8437 28.5938 25.0542 28.5938 25.3125V27.1875ZM27.6562 23.9062H25.7011C25.3256 23.9062 24.9722 24.0525 24.7064 24.3182L24.1809 24.8437H21.0938V14.5312H27.6562V23.9062Z",
    fill: "black"
  }), maintance_icon_jsx("path", {
    d: "M18.2812 14.5312H11.7188V21.0938H18.2812V14.5312ZM17.3438 17.3438H15.4688V15.4688H17.3438V17.3438ZM14.5312 15.4688V17.3438H12.6562V15.4688H14.5312ZM12.6562 18.2812H14.5312V20.1562H12.6562V18.2812ZM15.4688 20.1562V18.2812H17.3438V20.1562H15.4688Z",
    fill: "black"
  }), maintance_icon_jsx("path", {
    d: "M26.7188 22.0312V16.4062H22.0312V22.0312H26.7188ZM22.9688 17.3437H25.7812V21.0937H22.9688V17.3437Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/house-keeping-icon.tsx
var house_keeping_icon_jsx = external_react_default.a.createElement;

function HouseKeepingIcon() {
  return house_keeping_icon_jsx("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, house_keeping_icon_jsx("path", {
    d: "M10.7812 23.5625C11.0315 23.5625 11.2344 23.3596 11.2344 23.1094C11.2344 22.8591 11.0315 22.6562 10.7812 22.6562C10.531 22.6562 10.3281 22.8591 10.3281 23.1094C10.3281 23.3596 10.531 23.5625 10.7812 23.5625Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M4.4375 23.5625C4.68775 23.5625 4.89062 23.3596 4.89062 23.1094C4.89062 22.8591 4.68775 22.6562 4.4375 22.6562C4.18725 22.6562 3.98438 22.8591 3.98438 23.1094C3.98438 23.3596 4.18725 23.5625 4.4375 23.5625Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M10.7812 26.2812H12.5938V27.1875H10.7812V26.2812Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M4.4375 12.6875C4.68775 12.6875 4.89062 12.4846 4.89062 12.2344C4.89062 11.9841 4.68775 11.7812 4.4375 11.7812C4.18725 11.7812 3.98438 11.9841 3.98438 12.2344C3.98438 12.4846 4.18725 12.6875 4.4375 12.6875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M13.9531 9.96875H1.26562C1.14545 9.96875 1.03019 10.0165 0.945217 10.1015C0.86024 10.1864 0.8125 10.3017 0.8125 10.4219V14.5H14.4062V10.4219C14.4062 10.3017 14.3585 10.1864 14.2735 10.1015C14.1886 10.0165 14.0733 9.96875 13.9531 9.96875ZM10.7812 13.5938C10.5011 13.5926 10.2282 13.5049 9.99975 13.3427C9.77134 13.1805 9.59863 12.9516 9.50525 12.6875H5.7135C5.60661 12.9898 5.39628 13.2446 5.11969 13.4069C4.8431 13.5691 4.51805 13.6284 4.202 13.5742C3.88594 13.5199 3.59924 13.3557 3.39255 13.1106C3.18586 12.8654 3.07249 12.555 3.07249 12.2344C3.07249 11.9137 3.18586 11.6034 3.39255 11.3582C3.59924 11.113 3.88594 10.9488 4.202 10.8946C4.51805 10.8404 4.8431 10.8996 5.11969 11.0619C5.39628 11.2241 5.60661 11.4789 5.7135 11.7812H9.50525C9.58873 11.5469 9.73501 11.34 9.92812 11.1832C10.1212 11.0264 10.3537 10.9256 10.6002 10.892C10.8467 10.8584 11.0977 10.8931 11.3257 10.9925C11.5538 11.0919 11.7502 11.252 11.8934 11.4554C12.0366 11.6588 12.1211 11.8977 12.1377 12.1459C12.1544 12.3941 12.1025 12.6421 11.9877 12.8628C11.8729 13.0835 11.6997 13.2684 11.4869 13.3973C11.2741 13.5263 11.03 13.5942 10.7812 13.5938Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M4.4375 18.125C4.68775 18.125 4.89062 17.9221 4.89062 17.6719C4.89062 17.4216 4.68775 17.2188 4.4375 17.2188C4.18725 17.2188 3.98438 17.4216 3.98438 17.6719C3.98438 17.9221 4.18725 18.125 4.4375 18.125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M0.8125 19.9375H14.4062V15.4062H0.8125V19.9375ZM4.4375 16.3125C4.7178 16.3139 4.99085 16.4017 5.21949 16.5639C5.44813 16.726 5.62126 16.9547 5.71531 17.2188H9.50344C9.61033 16.9164 9.82066 16.6616 10.0972 16.4994C10.3738 16.3371 10.6989 16.2779 11.0149 16.3321C11.331 16.3863 11.6177 16.5505 11.8244 16.7957C12.0311 17.0409 12.1444 17.3512 12.1444 17.6719C12.1444 17.9925 12.0311 18.3029 11.8244 18.5481C11.6177 18.7932 11.331 18.9574 11.0149 19.0117C10.6989 19.0659 10.3738 19.0066 10.0972 18.8444C9.82066 18.6821 9.61033 18.4273 9.50344 18.125H5.71531C5.63218 18.3601 5.48598 18.5678 5.29271 18.7254C5.09943 18.883 4.86653 18.9844 4.61949 19.0185C4.37245 19.0526 4.1208 19.018 3.89207 18.9187C3.66334 18.8193 3.46635 18.659 3.32266 18.4551C3.17896 18.2513 3.09411 18.0119 3.07737 17.7631C3.06064 17.5143 3.11267 17.2656 3.22778 17.0444C3.34288 16.8232 3.51663 16.6379 3.72999 16.5088C3.94336 16.3797 4.18812 16.3118 4.4375 16.3125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M0.8125 25.375H14.4062V20.8438H0.8125V25.375ZM4.4375 21.75C4.71765 21.7512 4.9906 21.8389 5.219 22.0011C5.44741 22.1633 5.62012 22.3921 5.7135 22.6562H9.50525C9.61214 22.3539 9.82247 22.0991 10.0991 21.9369C10.3757 21.7746 10.7007 21.7154 11.0168 21.7696C11.3328 21.8238 11.6195 21.988 11.8262 22.2332C12.0329 22.4784 12.1463 22.7887 12.1463 23.1094C12.1463 23.43 12.0329 23.7404 11.8262 23.9856C11.6195 24.2307 11.3328 24.3949 11.0168 24.4492C10.7007 24.5034 10.3757 24.4441 10.0991 24.2819C9.82247 24.1196 9.61214 23.8648 9.50525 23.5625H5.7135C5.63002 23.7968 5.48374 24.0037 5.29063 24.1606C5.09753 24.3174 4.86503 24.4181 4.61854 24.4518C4.37206 24.4854 4.12107 24.4506 3.89301 24.3513C3.66495 24.2519 3.46858 24.0917 3.32538 23.8883C3.18217 23.6849 3.09764 23.4461 3.08101 23.1978C3.06437 22.9496 3.11629 22.7016 3.23107 22.4809C3.34586 22.2602 3.5191 22.0753 3.73186 21.9464C3.94463 21.8175 4.18873 21.7496 4.4375 21.75Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M10.7812 18.125C11.0315 18.125 11.2344 17.9221 11.2344 17.6719C11.2344 17.4216 11.0315 17.2188 10.7812 17.2188C10.531 17.2188 10.3281 17.4216 10.3281 17.6719C10.3281 17.9221 10.531 18.125 10.7812 18.125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M10.7812 12.6875C11.0315 12.6875 11.2344 12.4846 11.2344 12.2344C11.2344 11.9841 11.0315 11.7812 10.7812 11.7812C10.531 11.7812 10.3281 11.9841 10.3281 12.2344C10.3281 12.4846 10.531 12.6875 10.7812 12.6875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M20.75 19.0312H18.9828L19.7984 27.1875H25.3265L26.1422 19.0312H24.375H20.75Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M7.44501 3.19543L8.0838 2.55664L13.208 7.68078L12.5692 8.31958L7.44501 3.19543Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M7.15625 4.18689V9.06251H12.0319L7.15625 4.18689Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M2.625 26.2812H4.4375V27.1875H2.625V26.2812Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M5.34375 1.8125H6.25V9.0625H5.34375V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M3.53125 1.8125H4.4375V9.0625H3.53125V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M1.71875 1.8125H2.625V9.0625H1.71875V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M22.5625 14.5C21.6014 14.5011 20.68 14.8833 20.0004 15.5629C19.3208 16.2425 18.9386 17.1639 18.9375 18.125H19.8438C19.8438 17.4039 20.1302 16.7124 20.6401 16.2026C21.1499 15.6927 21.8414 15.4062 22.5625 15.4062C23.2836 15.4062 23.9751 15.6927 24.4849 16.2026C24.9948 16.7124 25.2812 17.4039 25.2812 18.125H26.1875C26.1864 17.1639 25.8042 16.2425 25.1246 15.5629C24.445 14.8833 23.5236 14.5011 22.5625 14.5Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M25.2812 0.90625H26.1875V1.8125H25.2812V0.90625Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M24.375 1.8125H25.2812V2.71875H24.375V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M25.2812 2.71875H26.1875V3.625H25.2812V2.71875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M26.1875 1.8125H27.0938V2.71875H26.1875V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M18.9375 0.90625H19.8438V1.8125H18.9375V0.90625Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M18.0312 1.8125H18.9375V2.71875H18.0312V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M18.9375 2.71875H19.8438V3.625H18.9375V2.71875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M19.8438 1.8125H20.75V2.71875H19.8438V1.8125Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M22.1094 5.4375H23.0156V6.34375H22.1094V5.4375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M21.2031 6.34375H22.1094V7.25H21.2031V6.34375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M22.1094 7.25H23.0156V8.15625H22.1094V7.25Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M23.0156 6.34375H23.9219V7.25H23.0156V6.34375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M16.6719 5.4375H17.5781V6.34375H16.6719V5.4375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M15.7656 6.34375H16.6719V7.25H15.7656V6.34375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M16.6719 7.25H17.5781V8.15625H16.6719V7.25Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M17.5781 6.34375H18.4844V7.25H17.5781V6.34375Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M25.2812 9.96875H26.1875V10.875H25.2812V9.96875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M24.375 10.875H25.2812V11.7812H24.375V10.875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M25.2812 11.7812H26.1875V12.6875H25.2812V11.7812Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M26.1875 10.875H27.0938V11.7812H26.1875V10.875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M19.3906 9.96875H20.2969V10.875H19.3906V9.96875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M18.4844 10.875H19.3906V11.7812H18.4844V10.875Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M19.3906 11.7812H20.2969V12.6875H19.3906V11.7812Z",
    fill: "black"
  }), house_keeping_icon_jsx("path", {
    d: "M20.2969 10.875H21.2031V11.7812H20.2969V10.875Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/search-icon.tsx
var search_icon_jsx = external_react_default.a.createElement;

function SearchIcon() {
  return search_icon_jsx("svg", {
    width: "26",
    height: "25",
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, search_icon_jsx("g", {
    "clip-path": "url(#clip0)"
  }, search_icon_jsx("path", {
    d: "M17.991 14.835C21.112 10.5974 20.0682 4.72945 15.661 1.72919C11.2539 -1.27107 5.15127 -0.268117 2.03099 3.97025C-1.08928 8.2079 -0.046206 14.0751 4.36169 17.0753C7.50732 19.2167 11.6662 19.3816 14.984 17.4976L22.1931 24.3878C22.9715 25.1757 24.2666 25.2072 25.086 24.4588C25.9054 23.7111 25.9382 22.4658 25.1605 21.6779C25.1359 21.6528 25.1121 21.6299 25.086 21.6062L17.991 14.835ZM10.005 15.4774C6.5224 15.4781 3.69887 12.7653 3.69663 9.4166C3.69589 6.06792 6.51718 3.35299 10.0006 3.35156C13.4787 3.35012 16.3007 6.0586 16.3075 9.40298C16.3134 12.7524 13.4936 15.4716 10.0095 15.4774C10.008 15.4774 10.0073 15.4774 10.005 15.4774Z",
    fill: "black"
  })), search_icon_jsx("defs", null, search_icon_jsx("clipPath", {
    id: "clip0"
  }, search_icon_jsx("rect", {
    width: "26",
    height: "25",
    fill: "white"
  }))));
}
// CONCATENATED MODULE: ./src/components/icons/icon/food-icon.tsx
var food_icon_jsx = external_react_default.a.createElement;

function FoodIcon() {
  return food_icon_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, food_icon_jsx("path", {
    d: "M6.72953 19.713C6.57284 19.9404 6.63009 20.2518 6.85746 20.4085C7.08484 20.5652 7.39621 20.5079 7.5529 20.2805C7.55621 20.2758 7.5594 20.2709 7.56253 20.266C9.30053 17.6354 12.2431 16.053 15.396 16.0535C15.6722 16.0535 15.896 15.8297 15.896 15.5535C15.896 15.2774 15.6722 15.0535 15.396 15.0535C11.908 15.0527 8.65246 16.803 6.72953 19.713Z",
    fill: "black"
  }), food_icon_jsx("path", {
    d: "M31.5 26.0535H28.5V25.4495C28.5116 22.2102 27.1906 19.1087 24.847 16.8725C24.6528 16.6761 24.3363 16.6744 24.1399 16.8685C23.9435 17.0627 23.9418 17.3793 24.1359 17.5756C24.1418 17.5816 24.1478 17.5874 24.1539 17.593C26.3005 19.6415 27.5104 22.4824 27.4999 25.4495V26.0535H4.5V25.4495C4.50663 19.4346 9.38106 14.5602 15.396 14.5535H16.604C17.5328 14.5529 18.4579 14.6705 19.357 14.9035C19.6216 14.9827 19.9002 14.8325 19.9794 14.5679C20.0586 14.3033 19.9083 14.0247 19.6437 13.9455C19.6316 13.9419 19.6193 13.9387 19.6069 13.936C18.9164 13.7579 18.2112 13.6423 17.4999 13.5905V12.0535C17.4999 11.7774 17.2761 11.5535 16.9999 11.5535H14.9999C14.7238 11.5535 14.4999 11.7774 14.4999 12.0535V13.5905C8.2995 14.0654 3.50813 19.2309 3.49994 25.4495V26.0535H0.5C0.223875 26.0535 0 26.2774 0 26.5535C0 26.8296 0.223875 27.0535 0.5 27.0535H31.5C31.7761 27.0535 32 26.8296 32 26.5535C32 26.2774 31.7761 26.0535 31.5 26.0535ZM15.5 12.5535H16.5V13.5535H15.5V12.5535Z",
    fill: "black"
  }), food_icon_jsx("path", {
    d: "M21.167 11.175C21.6325 11.5905 22 11.9185 22 12.588C22 13.2575 21.6325 13.5855 21.167 14.0035C20.4594 14.498 20.0268 15.2976 20 16.1605C20 16.4366 20.2239 16.6605 20.5 16.6605C20.7761 16.6605 21 16.4366 21 16.1605C21 15.491 21.3675 15.163 21.833 14.7475C22.5411 14.2522 22.9737 13.4517 23 12.588C22.9737 11.7244 22.5411 10.9241 21.833 10.429C21.3675 10.0135 21 9.6855 21 9.0165C21 8.3475 21.3675 8.02 21.833 7.6045C22.5411 7.10994 22.9738 6.30981 23 5.4465C23 5.17038 22.7761 4.9465 22.5 4.9465C22.2239 4.9465 22 5.17038 22 5.4465C22 6.115 21.6325 6.4425 21.167 6.858C20.4588 7.35275 20.0261 8.15306 20 9.0165C20.0264 9.87987 20.459 10.6801 21.167 11.175Z",
    fill: "black"
  }), food_icon_jsx("path", {
    d: "M24.167 11.175C24.6325 11.5905 25 11.9185 25 12.588C25 13.2575 24.6325 13.588 24.167 14.0015C23.4588 14.4964 23.0261 15.2969 23 16.1605C23 16.4366 23.2239 16.6605 23.5 16.6605C23.7761 16.6605 24 16.4366 24 16.1605C24 15.491 24.3675 15.163 24.833 14.7475C25.5411 14.2522 25.9737 13.4517 26 12.588C25.9737 11.7244 25.5411 10.9241 24.833 10.429C24.3675 10.0135 24 9.6855 24 9.0165C24 8.3475 24.3675 8.02 24.833 7.6045C25.5411 7.10994 25.9738 6.30981 26 5.4465C26 5.17038 25.7761 4.9465 25.5 4.9465C25.2239 4.9465 25 5.17038 25 5.4465C25 6.115 24.6325 6.4425 24.167 6.858C23.4588 7.35275 23.0261 8.15306 23 9.0165C23.0264 9.87987 23.459 10.6801 24.167 11.175Z",
    fill: "black"
  }), food_icon_jsx("path", {
    d: "M27.167 11.175C27.6325 11.5905 28 11.9185 28 12.588C28 13.2575 27.6325 13.588 27.167 14.0015C26.4588 14.4964 26.0261 15.2969 26 16.1605C26 16.4366 26.2239 16.6605 26.5 16.6605C26.7761 16.6605 27 16.4366 27 16.1605C27 15.491 27.3675 15.163 27.833 14.7475C28.5411 14.2522 28.9737 13.4517 29 12.588C28.9737 11.7244 28.5411 10.9241 27.833 10.429C27.3675 10.0135 27 9.6855 27 9.0165C27 8.3475 27.3675 8.02 27.833 7.6045C28.5411 7.10994 28.9738 6.30981 29 5.4465C29 5.17038 28.7761 4.9465 28.5 4.9465C28.2239 4.9465 28 5.17038 28 5.4465C28 6.115 27.6325 6.4425 27.167 6.858C26.4588 7.35275 26.0261 8.15306 26 9.0165C26.0264 9.87987 26.459 10.6801 27.167 11.175Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/lift-icon.tsx
var lift_icon_jsx = external_react_default.a.createElement;

function LiftIcon() {
  return lift_icon_jsx("svg", {
    width: "31",
    height: "28",
    viewBox: "0 0 31 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, lift_icon_jsx("path", {
    d: "M30.3261 0H0.673934C0.301934 0 0 0.272714 0 0.608714V27.3913C0 27.7273 0.301934 28 0.673934 28H6.06521C6.43721 28 6.73915 27.7273 6.73915 27.3913V26.7826H24.2609V27.3913C24.2609 27.7273 24.5628 28 24.9348 28H30.3261C30.6981 28 31 27.7273 31 27.3913V0.608714C31 0.272714 30.6981 0 30.3261 0ZM29.6521 26.7826H25.6087V26.1739C25.6087 25.8379 25.3067 25.5651 24.9347 25.5651H6.06521C5.69321 25.5651 5.39128 25.8379 5.39128 26.1739V26.7826H1.3478V1.21737H29.6521V26.7826Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M24.9348 6.08698H6.06521C5.69321 6.08698 5.39128 6.35969 5.39128 6.69569V26.1739C5.39128 26.5099 5.69321 26.7826 6.06521 26.7826H24.9348C25.3068 26.7826 25.6087 26.5099 25.6087 26.1739V6.69563C25.6087 6.35963 25.3068 6.08698 24.9348 6.08698ZM24.2609 25.5652H6.73915V7.30435H24.2609V25.5652Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M15.5 6.08698C15.128 6.08698 14.826 6.35969 14.826 6.69569V26.1739C14.826 26.5099 15.128 26.7826 15.5 26.7826C15.872 26.7826 16.1739 26.5099 16.1739 26.1739V6.69563C16.1739 6.35963 15.872 6.08698 15.5 6.08698Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M27.6304 13.3913C28.0026 13.3913 28.3043 13.1188 28.3043 12.7826C28.3043 12.4464 28.0026 12.1739 27.6304 12.1739C27.2582 12.1739 26.9565 12.4464 26.9565 12.7826C26.9565 13.1188 27.2582 13.3913 27.6304 13.3913Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M27.6304 15.8261C28.0026 15.8261 28.3043 15.5536 28.3043 15.2174C28.3043 14.8812 28.0026 14.6087 27.6304 14.6087C27.2582 14.6087 26.9565 14.8812 26.9565 15.2174C26.9565 15.5536 27.2582 15.8261 27.6304 15.8261Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M13.2815 3.83115L11.9337 2.61377C11.6709 2.37638 11.2436 2.37638 10.9808 2.61377L9.63297 3.83115C9.37015 4.06854 9.37015 4.45447 9.63297 4.69186C9.8958 4.92925 10.3231 4.92925 10.5859 4.69186L11.4566 3.90419L12.3273 4.69186C12.4594 4.80993 12.6318 4.86962 12.8044 4.86962C12.9769 4.86962 13.1494 4.80998 13.2815 4.69186C13.5443 4.45447 13.5443 4.06854 13.2815 3.83115Z",
    fill: "black"
  }), lift_icon_jsx("path", {
    d: "M21.367 2.61377C21.1042 2.37638 20.6769 2.37638 20.4141 2.61377L19.5434 3.40019L18.6714 2.61377C18.4085 2.37638 17.9813 2.37638 17.7184 2.61377C17.4556 2.85116 17.4556 3.2371 17.7184 3.47449L19.0662 4.69186C19.1983 4.80992 19.3708 4.86961 19.5434 4.86961C19.7159 4.86961 19.8884 4.80998 20.0192 4.69186L21.367 3.47449C21.6299 3.23704 21.6299 2.85116 21.367 2.61377Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/right-icon.tsx
var right_icon_jsx = external_react_default.a.createElement;

function RightIcon() {
  return right_icon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, right_icon_jsx("path", {
    d: "M4.94333 0L3.0567 1.88669L9.17001 8L3.0567 14.1133L4.94333 16L12.9433 8L4.94333 0Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/left-icon.tsx
var left_icon_jsx = external_react_default.a.createElement;

function LeftIcon() {
  return left_icon_jsx("svg", {
    width: "17",
    height: "14",
    viewBox: "0 0 17 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, left_icon_jsx("path", {
    d: "M6.20597 6.99998L13.2242 1.22029C13.3853 1.08765 13.3853 0.87258 13.2242 0.739981L12.4465 0.0994944C12.3692 0.0357763 12.2643 0 12.1549 0C12.0455 0 11.9406 0.0357763 11.8633 0.0994944L3.77571 6.75982C3.61464 6.89247 3.61464 7.10753 3.77571 7.24013L11.8632 13.9005C11.9406 13.9642 12.0455 14 12.1549 14C12.2642 14 12.3692 13.9642 12.4465 13.9005L13.2242 13.26C13.3852 13.1273 13.3852 12.9123 13.2242 12.7797L6.20597 6.99998Z",
    fill: "#231F20"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/menu-icon.tsx
var menu_icon_jsx = external_react_default.a.createElement;

function MenuIcon() {
  return menu_icon_jsx("svg", {
    width: "63",
    height: "35",
    viewBox: "0 0 63 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, menu_icon_jsx("path", {
    d: "M0 17.1702H63",
    stroke: "black",
    "stroke-width": "4"
  }), menu_icon_jsx("path", {
    d: "M0 2H62.3571",
    stroke: "#232323",
    "stroke-width": "4"
  }), menu_icon_jsx("path", {
    d: "M0 33H35.0357",
    stroke: "black",
    "stroke-width": "4"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon/down-arrow-icon.tsx
var down_arrow_icon_jsx = external_react_default.a.createElement;

function DownArrowIcon() {
  return down_arrow_icon_jsx("svg", {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, down_arrow_icon_jsx("path", {
    d: "M14.1133 0.585938L8 8.2956L1.88669 0.585938L0 2.96521L8 13.0542L16 2.96521L14.1133 0.585938Z",
    fill: "black"
  }));
}
// CONCATENATED MODULE: ./src/components/icons/icon.tsx




















const IconMapping = {
  map: MapIcon,
  women: WomenIcon,
  womenGroup: WomenGroupIcon,
  whatsapp: WhatsAppIcon,
  bed: BedIcon,
  sofa: SofaIcon,
  facebook: FaceBookIcon,
  instagram: InstagramIcon,
  linkedIn: LinkedInIcon,
  internet: InternetIcon,
  power: PowerIcon,
  maintance: MaintanceIcon,
  housekeeping: HouseKeepingIcon,
  search: SearchIcon,
  food: FoodIcon,
  lift: LiftIcon,
  left: LeftIcon,
  right: RightIcon,
  menu: MenuIcon,
  downArrow: DownArrowIcon
};
function Icon({
  name
}) {
  return IconMapping[name]();
}
// CONCATENATED MODULE: ./src/components/icons/icons-props.ts
let Icons;

(function (Icons) {
  Icons["map"] = "map";
  Icons["whatsapp"] = "whatsapp";
  Icons["bed"] = "bed";
  Icons["cabinet"] = "cabinet";
  Icons["internet"] = "internet";
  Icons["left"] = "left";
  Icons["lift"] = "lift";
  Icons["instagram"] = "instagram";
  Icons["food"] = "food";
  Icons["facebook"] = "facebook";
  Icons["maintance"] = "maintance";
  Icons["search"] = "search";
  Icons["women"] = "women";
  Icons["womenGroup"] = "womenGroup";
  Icons["sofa"] = "sofa";
  Icons["power"] = "power";
  Icons["right"] = "right";
  Icons["linkedIn"] = "linkedIn";
  Icons["housekeeping"] = "housekeeping";
  Icons["menu"] = "menu";
  Icons["downArrow"] = "downArrow";
})(Icons || (Icons = {}));
// CONCATENATED MODULE: ./src/view/banner/banner.tsx
var banner_jsx = external_react_default.a.createElement;










function Banner({
  onClickEvent
}) {
  const images = [{
    img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
  }, {
    img: "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80"
  }, {
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80"
  }, {
    img: "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80"
  }];
  const [currentSlideIdx, setCurrentSlideIdx] = external_react_default.a.useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentSlideIdx === 0;
    const index = resetToVeryBack ? images.length - 1 : currentSlideIdx - 1;
    setCurrentSlideIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentSlideIdx === images.length - 1;
    const index = resetIndex ? 0 : currentSlideIdx + 1;
    setCurrentSlideIdx(index);
  };

  const activeImageSourcesFromState = images.slice(currentSlideIdx, currentSlideIdx + 3);
  const imageSourcesToDisplay = activeImageSourcesFromState.length < 3 ? [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length)] : activeImageSourcesFromState;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#000000e3",
      width: "100%",
      height: "100%"
    }
  };
  const [modalIsOpen, setIsOpen] = external_react_default.a.useState(false);

  function openModal() {
    setIsOpen(true);
  } // function afterOpenModal() {
  // 	// references are now sync'd and can be accessed.
  // 	subtitle.style.color = "#f00";
  // }


  function closeModal() {
    setIsOpen(false);
  }

  return banner_jsx(external_react_default.a.Fragment, null, banner_jsx(external_styled_grid_system_component_["Row"], null, banner_jsx(external_styled_grid_system_component_["Column"], {
    sm: 8,
    md: 8,
    xs: 12,
    style: {
      paddingRight: "0px",
      paddingLeft: "0px"
    }
  }, banner_jsx("div", {
    style: {
      position: "relative"
    }
  }, banner_jsx(external_react_slick_default.a, settings, imageSourcesToDisplay.map((items, i) => banner_jsx("div", {
    key: i
  }, banner_jsx(BannerImage, {
    banner: items.img
  }, " ", banner_jsx(FloatingTag, null, banner_jsx(SpaceTag, {
    marginLeft: "20",
    marginRight: "20"
  }, banner_jsx(FlexTag, {
    justifyContent: "flex-end"
  }, banner_jsx(SearchBlock, null, banner_jsx(FlexTag, null, banner_jsx(SpaceTag, {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "10"
  }, banner_jsx(Icon, {
    name: Icons.map
  })), banner_jsx(SpaceTag, {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "5"
  }, banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "900"
  }, "Location")), banner_jsx(SpaceTag, {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "10"
  }, banner_jsx(Icon, {
    name: Icons.downArrow
  })), banner_jsx(SpaceTag, {
    marginLeft: "10",
    marginRight: "10",
    marginTop: "5"
  }, banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "900"
  }, "Where you want to stay in")), banner_jsx(SearchIconCircle, null, banner_jsx(Icon, {
    name: Icons.search
  })))), banner_jsx(MenuButton, {
    onClick: openModal
  }, banner_jsx(Icon, {
    name: Icons.menu
  })))))))))), banner_jsx(FlyButton, null, banner_jsx(FlexTag, {
    justifyContent: "space-between"
  }, banner_jsx(BannerButton, {
    onClick: prevSlide
  }, banner_jsx(Icon, {
    name: Icons.left
  }), "previous"), banner_jsx(BannerButton, {
    onClick: nextSlide
  }, "next", banner_jsx(Icon, {
    name: Icons.right
  }))))), banner_jsx(external_styled_grid_system_component_["Column"], {
    sm: 4,
    md: 4,
    xs: 12,
    style: {
      paddingRight: "0px",
      paddingLeft: "0px"
    }
  }, banner_jsx(SectionBannerRight, null, banner_jsx(FlexTag, {
    justifyContent: "center"
  }, banner_jsx(SpaceTag, {
    marginTop: "40",
    marginRight: "30"
  }, banner_jsx(CenterTag, null, banner_jsx(BannerCircle, null, banner_jsx(Icon, {
    name: Icons.womenGroup
  })), banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "400"
  }, "Shared"), banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "400"
  }, "Rs 6,500"))), banner_jsx(SpaceTag, {
    marginTop: "40",
    marginLeft: "30"
  }, banner_jsx(CenterTag, null, banner_jsx(BannerCircle, null, banner_jsx(Icon, {
    name: Icons.women
  })), banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "400"
  }, "Private"), banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "400"
  }, "Rs 3000")))), banner_jsx(SpaceTag, {
    marginTop: "40"
  }, banner_jsx(CenterTag, null, banner_jsx(BookVisitButton, {
    onClick: onClickEvent
  }, "Book a Visit"))), banner_jsx(SpaceTag, {
    marginTop: "40"
  }, banner_jsx(CenterTag, null, banner_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "400"
  }, "Security Deposit Rs 20,000")))))), banner_jsx(external_react_modal_default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Example Modal"
  }, banner_jsx(SpaceTag, {
    marginTop: "100",
    marginLeft: "50",
    marginRight: "50"
  }, banner_jsx(FlexTag, {
    justifyContent: "flex-end"
  }, banner_jsx(MenuButton, {
    onClick: closeModal,
    style: {
      fontSize: "24px",
      color: "#fff"
    }
  }, "X")), banner_jsx(CenterTag, null, banner_jsx(link_default.a, {
    href: "/home"
  }, banner_jsx(Text, {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "600"
  }, "Blog")), banner_jsx("br", null), banner_jsx("br", null), banner_jsx(link_default.a, {
    href: "/home"
  }, banner_jsx(Text, {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "600"
  }, "Contact Us")), banner_jsx("br", null), banner_jsx("br", null), banner_jsx(link_default.a, {
    href: "/home"
  }, banner_jsx(Text, {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "600"
  }, "About Us")), banner_jsx("br", null), banner_jsx("br", null), banner_jsx(link_default.a, {
    href: "/home"
  }, banner_jsx(Text, {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "600"
  }, "FAQs"))))));
}
// EXTERNAL MODULE: external "styled-container-component"
var external_styled_container_component_ = __webpack_require__("lnRQ");

// CONCATENATED MODULE: ./src/view/book-visit/book-visit.tsx
var book_visit_jsx = external_react_default.a.createElement;




function BookVisit({
  id
}) {
  return book_visit_jsx(SectionBookVisit, {
    id: id
  }, book_visit_jsx(external_styled_container_component_["Container"], null, book_visit_jsx(external_styled_grid_system_component_["Row"], null, book_visit_jsx(external_styled_grid_system_component_["Column"], {
    sm: 4,
    xs: 12,
    md: 4
  }, book_visit_jsx(SpaceTag, {
    marginTop: "20"
  }, book_visit_jsx(Text, {
    fontSize: "26px",
    color: "#000",
    fontWeight: "900"
  }, "Book a Visit")))), book_visit_jsx(external_styled_grid_system_component_["Row"], null, book_visit_jsx(external_styled_grid_system_component_["Column"], {
    sm: 4,
    xs: 12,
    md: 4
  }, book_visit_jsx(SpaceTag, {
    marginTop: "20"
  }, book_visit_jsx(FlexTag, null, book_visit_jsx(SpaceTag, {
    marginTop: "15"
  }, book_visit_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "500"
  }, "Phone No")), book_visit_jsx(InputTag, {
    value: "",
    placeholder: "enter your phone no"
  })))), book_visit_jsx(external_styled_grid_system_component_["Column"], {
    sm: 4,
    xs: 12,
    md: 4
  }, book_visit_jsx(SpaceTag, {
    marginTop: "18"
  }, book_visit_jsx(FlexTag, null, book_visit_jsx(SpaceTag, {
    marginTop: "15"
  }, book_visit_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "Location")), book_visit_jsx(InputTag, {
    value: "",
    placeholder: "enter your phone no"
  })))), book_visit_jsx(external_styled_grid_system_component_["Column"], {
    sm: 4,
    xs: 12,
    md: 4
  }, book_visit_jsx(SpaceTag, {
    marginTop: "30"
  }, book_visit_jsx(BookAVistitButton, null, "Book a Visit"))))));
}
// CONCATENATED MODULE: ./src/view/description/description.tsx
var description_jsx = external_react_default.a.createElement;




function Description() {
  return description_jsx(external_react_default.a.Fragment, null, description_jsx(external_styled_container_component_["Container"], null, description_jsx(external_styled_grid_system_component_["Row"], null, description_jsx(external_styled_grid_system_component_["Column"], {
    md: 12,
    sm: 12,
    xs: 12
  }, description_jsx(FlexTag, null, description_jsx(SpaceTag, {
    marginTop: "20"
  }, description_jsx(Text, {
    fontSize: "28px",
    color: "#9A9D0F",
    fontWeight: "900"
  }, "Grexter Inaaya -")), description_jsx(SpaceTag, {
    marginTop: "30"
  }, description_jsx(Text, {
    fontSize: "18px",
    color: "#9A9D0F",
    fontWeight: "900"
  }, "Coliving space in Hebbal-"))), description_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, description_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "500"
  }, "Lawrence Layout, Jogappa Layout, Nagavara, Bengaluru, Karnataka 560045")), description_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, description_jsx(Text, {
    fontSize: "18px",
    color: "#000",
    fontWeight: "300",
    lineHeight: "25px"
  }, "Situated in a buzzing locality in Hebbal, Inaaya is one of the Grexter's very first coliving property. It has beautiful common areas and a great terrace to chill. It is well equipped with all amenities like 24x7 power back up, wifi and common kitchen. Inaaya is known for ...(more)"))))));
}
// CONCATENATED MODULE: ./src/view/amenities/amenities.tsx
var amenities_jsx = external_react_default.a.createElement;






function Amenities() {
  return amenities_jsx(external_styled_container_component_["Container"], null, amenities_jsx(external_styled_grid_system_component_["Row"], null, amenities_jsx(external_styled_grid_system_component_["Column"], {
    sm: 12,
    xs: 12,
    md: 12
  }, amenities_jsx(SpaceTag, {
    marginTop: "40"
  }, amenities_jsx(FlexTag, {
    justifyContent: "center"
  }, amenities_jsx(AmenitiesCircleColor, null)), amenities_jsx(CenterTag, null, amenities_jsx(SpaceTag, {
    marginTop: "20"
  }, amenities_jsx(Text, {
    fontSize: "30px",
    color: "#000",
    fontWeight: "900"
  }, "Amenities")))))), amenities_jsx(external_styled_grid_system_component_["Row"], null, amenities_jsx(external_styled_grid_system_component_["Column"], {
    sm: 6,
    xs: 12,
    md: 6
  }, amenities_jsx(SpaceTag, {
    marginTop: "20"
  }, amenities_jsx(SpaceTag, {
    marginTop: "20",
    marginBottom: "30"
  }, amenities_jsx(CenterTag, null, amenities_jsx(Text, {
    fontSize: "24px",
    color: "#000",
    fontWeight: "500"
  }, "What Is Included?"))), amenities_jsx(FlexTag, {
    justifyContent: "space-evenly"
  }, amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.bed
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Bed"))), amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5",
    marginLeft: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, {
    style: {
      marginLeft: "15px"
    }
  }, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.housekeeping
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "House Keeping"))), amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5",
    marginLeft: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.maintance
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Maintance"))))), amenities_jsx("br", null), amenities_jsx(SpaceTag, {
    marginTop: "20"
  }, amenities_jsx(FlexTag, {
    justifyContent: "space-evenly"
  }, amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.food
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Food"))), amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5",
    marginLeft: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, {
    style: {
      marginLeft: "15px"
    }
  }, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.internet
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Internet")))))), amenities_jsx(external_styled_grid_system_component_["Column"], {
    sm: 6,
    xs: 12,
    md: 6
  }, amenities_jsx(SpaceTag, {
    marginTop: "20"
  }, amenities_jsx(SpaceTag, {
    marginTop: "20",
    marginBottom: "30"
  }, amenities_jsx(CenterTag, null, amenities_jsx(Text, {
    fontSize: "24px",
    color: "#000",
    fontWeight: "500"
  }, "Amenities"))), amenities_jsx(FlexTag, {
    justifyContent: "space-evenly"
  }, amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.lift
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Lift"))), amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5",
    marginLeft: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.power
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Power"))), amenities_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10",
    marginRight: "5",
    marginLeft: "5"
  }, amenities_jsx(CenterTag, null, amenities_jsx(AmenitiesCircleTag, null, amenities_jsx(SpaceTag, {
    marginTop: "10"
  }, amenities_jsx(Icon, {
    name: Icons.sofa
  }))), amenities_jsx(Text, {
    fontSize: "16px",
    color: "#000",
    fontWeight: "400"
  }, "Sofa"))))))));
}
// CONCATENATED MODULE: ./src/view/layout.tsx
var layout_jsx = external_react_default.a.createElement;
 // import { ScrollingProvider, useScrollSection } from "react-scroll-section";





function Layout({
  articles,
  expertises
}) {
  const [windowSize, setWindowSize] = external_react_default.a.useState({
    width: undefined,
    height: undefined
  });

  function homeSection() {// useScrollSection("BookVisit");
  }

  return layout_jsx(external_react_default.a.Fragment, null, layout_jsx(Banner, {
    onClickEvent: homeSection
  }), layout_jsx(Description, null), layout_jsx(Amenities, null), layout_jsx(BookVisit, {
    id: "BookVisit"
  }));
}
// CONCATENATED MODULE: ./src/view/footer/footer.tsx
var footer_jsx = external_react_default.a.createElement;






function Footer() {
  return footer_jsx(external_react_default.a.Fragment, null, footer_jsx(SectionConsultant, null, footer_jsx(external_styled_container_component_["Container"], null, footer_jsx(external_styled_grid_system_component_["Row"], null, footer_jsx(external_styled_grid_system_component_["Column"], {
    md: 4,
    xs: 12,
    sm: 4
  }, footer_jsx(SpaceTag, {
    marginTop: "30",
    marginBottom: "20"
  }, footer_jsx(Text, {
    fontSize: "26px",
    color: "#000",
    fontWeight: "900"
  }, "Logo"))), footer_jsx(external_styled_grid_system_component_["Column"], {
    md: 4,
    xs: 12,
    sm: 4
  }, footer_jsx(SpaceTag, {
    marginTop: "30",
    marginBottom: "20"
  }, footer_jsx(Text, {
    fontSize: "26px",
    color: "#000",
    fontWeight: "900"
  }, "Company Information")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "About Us")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "FAQs")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "Community")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "Terms & Carrers")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500"
  }, "Blogs"))), footer_jsx(external_styled_grid_system_component_["Column"], {
    md: 4,
    xs: 12,
    sm: 4
  }, footer_jsx(SpaceTag, {
    marginTop: "30",
    marginBottom: "20"
  }, footer_jsx(Text, {
    fontSize: "26px",
    color: "#000",
    fontWeight: "900"
  }, "Contact Us")), footer_jsx(SpaceTag, {
    marginTop: "0",
    marginBottom: "20"
  }, footer_jsx(FlexTag, null, footer_jsx(Icon, {
    name: Icons.whatsapp
  }), footer_jsx(SpaceTag, {
    marginLeft: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#000",
    fontWeight: "900"
  }, "9898989898 (What\u2019s App Only)")))), footer_jsx(SpaceTag, {
    marginTop: "20",
    marginBottom: "20"
  }, footer_jsx(FlexTag, null, footer_jsx(SpaceTag, {
    marginLeft: "10"
  }, footer_jsx(CircleTag, null, footer_jsx(Icon, {
    name: Icons.facebook
  }))), footer_jsx(SpaceTag, {
    marginLeft: "10"
  }, footer_jsx(CircleTag, null, footer_jsx(Icon, {
    name: Icons.instagram
  }))), footer_jsx(SpaceTag, {
    marginLeft: "10"
  }, footer_jsx(CircleTag, null, footer_jsx(Icon, {
    name: Icons.linkedIn
  }))))))))), footer_jsx(FooterTag, null, footer_jsx(CenterTag, null, footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "\xA9 Copyright pg 2021. All Rights Reserved"))), footer_jsx(FlexTag, {
    justifyContent: "center"
  }, footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "Home")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "|")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "Terms & Conditions")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "|")), footer_jsx(SpaceTag, {
    marginTop: "10",
    marginLeft: "10",
    marginRight: "10",
    marginBottom: "10"
  }, footer_jsx(Text, {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "500"
  }, "Privacy Policy")))));
}
// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = external_react_default.a.createElement;



 // import * as Logo from "../img/logo.png";

function Index({
  articles,
  expertises
}) {
  return pages_jsx("main", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "PG Website"), pages_jsx("link", {
    rel: "icon",
    href: ""
  }), pages_jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html;charset=ut-8"
  }), pages_jsx("meta", {
    name: "description",
    content: "ProTalk experts are standing by to talk with you about healthy tips"
  }), pages_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), pages_jsx(Layout, {
    articles: articles,
    expertises: expertises
  }), pages_jsx(Footer, null));
}
const getServerSideProps = async () => {
  return {
    props: {
      articles: "articles",
      expertises: "expertises"
    }
  };
};

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "lnRQ":
/***/ (function(module, exports) {

module.exports = require("styled-container-component");

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

/***/ "tyWD":
/***/ (function(module, exports) {



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