module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ABnS");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "ABnS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Style.js


function Style() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(style_default.a, {
    id: "2839206509"
  }, ["body{background:white;margin:0;padding:0;}"]));
}
// CONCATENATED MODULE: ./pages/Index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });





const config = {
  amp: true
};

const HomePage = ({
  userAgent,
  test
}) => {
  console.log(userAgent);
  return external_react_default.a.createElement("div", {
    className: "jsx-2018213603"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-2018213603"
  }, "Country | German Chavez"), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Manjari&display=swap",
    rel: "stylesheet",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Livvic|Manjari&display=swap",
    rel: "stylesheet",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap",
    rel: "stylesheet",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("script", {
    async: true,
    "custom-element": "amp-social-share",
    src: "https://cdn.ampproject.org/v0/amp-social-share-0.1.js",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("script", {
    async: true,
    "custom-element": "amp-iframe",
    src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/fo.jpg",
    className: "jsx-2018213603"
  }), external_react_default.a.createElement("script", {
    async: true,
    key: "amp-carousel",
    "custom-element": "amp-carousel",
    src: "https://cdn.ampproject.org/v0/amp-carousel-0.1.js",
    className: "jsx-2018213603"
  })), external_react_default.a.createElement("center", {
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "calis"), test ? external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "mobil"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "logo"
  }, external_react_default.a.createElement("amp-img", {
    width: "100",
    height: "100",
    src: "/static/corman.png",
    alt: "a cool image",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "present"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-2018213603"
  }, "German Ch\xE1vez"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Gerente de Mercadotecnia"), external_react_default.a.createElement("amp-img", {
    width: "300",
    height: "200",
    src: "/static/ger.png",
    alt: "El ger",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "descripM"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "infoM"
  }, external_react_default.a.createElement("h5", {
    className: "jsx-2018213603"
  }, "Aqui tu descripcion de empresa"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Eslogan")), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "infoM"
  }, external_react_default.a.createElement("h5", {
    className: "jsx-2018213603"
  }, "Aqui tu mision"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Desglose de mision")), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "infoM"
  }, external_react_default.a.createElement("h5", {
    className: "jsx-2018213603"
  }, "Aqui una frase"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Descripcion")))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "galeri"
  }, external_react_default.a.createElement("amp-carousel", {
    layout: "responsive",
    width: "300",
    height: "200",
    type: "slides",
    autoplay: "2000",
    class: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    src: "/static/coche1.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("amp-img", {
    src: "/static/coche2.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image1",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("amp-img", {
    src: "/static/coche3.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image2",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "orgullo"
  }, external_react_default.a.createElement("amp-img", {
    src: "/static/ogullosamente.png",
    width: "200",
    height: "100",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "agencia"
  }, external_react_default.a.createElement("amp-img", {
    src: "/static/agencia-zoo-1.png",
    layout: "responsive",
    width: "200",
    height: "100",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "redes"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-2018213603"
  }, "Ford Country Zool\xF3gico"), external_react_default.a.createElement("h4", {
    className: "jsx-2018213603"
  }, "Visitanos"), external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/fordcountryzoologico/",
    target: "_blank",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "S\xEDgueme en Facebook",
    height: "36",
    width: "36",
    src: "https://2.bp.blogspot.com/-28mh2hZK3HE/XCrIxxSCW0I/AAAAAAAAH_M/XniFGT5c2lsaVNgf7UTbPufVmIkBPnWQQCLcBGAs/s1600/facebook.png",
    title: "S\xEDgueme en Facebook",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/fordcountryzoo",
    target: "_blank",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "S\xEDgueme en Instagram!",
    height: "36",
    width: "36",
    src: "https://4.bp.blogspot.com/-Ilxti1UuUuI/XCrIy6hBAcI/AAAAAAAAH_k/QV5KbuB9p3QB064J08W2v-YRiuslTZnLgCLcBGAs/s1600/instagram.png",
    title: "S\xEDgueme en Instagram!",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCo6yiEdVSrkO2Wb7I4E0dMQ?view_as=subscriber",
    target: "_blank",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "S\xEDgueme en Youtube!",
    height: "36",
    width: "36",
    src: "https://1.bp.blogspot.com/-CUKx1kAd-ls/XCrI4UAvNqI/AAAAAAAAIBI/-i1neUt8kZwP6YOsFOXX5p0Bnqa29m-JgCLcBGAs/s1600/youtube2.png",
    title: "S\xEDgueme en Youtube!",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "contact"
  }, external_react_default.a.createElement("a", {
    href: "tel:+5213319444957",
    id: "tel",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "Llamame",
    height: "120",
    width: "120",
    src: "/static/tel.png",
    title: "Llamame",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "contactM"
  }, external_react_default.a.createElement("amp-social-share", {
    type: "email",
    "data-param-subject": "test",
    "data-param-body": "hola este es un test",
    "data-param-recipient": "giovanniare9525@gmail.com",
    width: "120",
    height: "120",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "contactW"
  }, external_react_default.a.createElement("a", {
    href: "https://wa.me/5213319444957?text=Me%20gustar\xEDa%20saber%20el%20precio%20del%20coche",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "Escribeme",
    height: "120",
    width: "120",
    src: "/static/wa.png",
    title: "Escribeme",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "promo"
  }, external_react_default.a.createElement("a", {
    href: "https://www.fordgdlzoo.com/",
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "Promociones",
    height: "120",
    width: "120",
    src: "/static/por.png",
    title: "Promociones",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "historias"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/historias"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    alt: "historias",
    height: "120",
    width: "300",
    src: "/static/ford.png",
    title: "Historias",
    class: "jsx-2018213603"
  }))), external_react_default.a.createElement("h3", {
    className: "jsx-2018213603"
  }, "Mira las historias")), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "maps"
  }, external_react_default.a.createElement("amp-iframe", {
    width: "300",
    height: "300",
    frameborder: "0",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.615301730344!2d-103.31812564855595!3d20.725840603356144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b08aad4e9591%3A0x7d5f04d82c1aedbc!2sFord+Country+Zoo+Motors!5e0!3m2!1ses!2smx!4v1556829388815!5m2!1ses!2smx",
    sandbox: "allow-scripts allow-same-origin allow-popups",
    class: "jsx-2018213603"
  }))) : external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "compu"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "logo"
  }, external_react_default.a.createElement("amp-img", {
    width: "200",
    height: "200",
    src: "/static/corman.png",
    alt: "a cool image",
    class: "jsx-2018213603"
  })), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "present"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-2018213603"
  }, "German Ch\xE1vez"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Gerente de Mercadotecnia"), external_react_default.a.createElement("amp-img", {
    width: "500",
    height: "300",
    src: "/static/ger.png",
    alt: "El ger",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "descrip"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "info"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-2018213603"
  }, "Aqui tu descripcion de empresa"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Eslogan")), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "info"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-2018213603"
  }, "Aqui tu mision"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Desglose de mision")), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "info"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-2018213603"
  }, "Aqui una frase"), external_react_default.a.createElement("p", {
    className: "jsx-2018213603"
  }, "Descripcion")))), external_react_default.a.createElement("div", {
    className: "jsx-2018213603" + " " + "galeri"
  }, external_react_default.a.createElement("amp-carousel", {
    layout: "responsive",
    width: "300",
    height: "200",
    type: "slides",
    autoplay: "2000",
    class: "jsx-2018213603"
  }, external_react_default.a.createElement("amp-img", {
    src: "/static/coche1.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("amp-img", {
    src: "/static/coche2.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image1",
    class: "jsx-2018213603"
  }), external_react_default.a.createElement("amp-img", {
    src: "/static/coche3.jpg",
    width: "300",
    height: "200",
    layout: "responsive",
    alt: "a cool image2",
    class: "jsx-2018213603"
  }))))), external_react_default.a.createElement(Style, null), external_react_default.a.createElement(style_default.a, {
    id: "2018213603"
  }, [".logo.jsx-2018213603{background:white;position:relative;margin:0;padding:1px;}", ".present.jsx-2018213603{background:#0041AB;position:relative;margin:0;padding:1px;padding-bottom:4rem;}", ".present.jsx-2018213603 amp-img.jsx-2018213603{border-radius:10px;box-shadow:0 0 90px -34px rgba(0,0,0,0.75);}", ".present.jsx-2018213603 h1.jsx-2018213603{color:white;padding-top:20px;font-family:'Manjari',sans-serif;}", ".present.jsx-2018213603 p.jsx-2018213603{color:white;padding-top:20px;font-family:'Manjari',sans-serif;}", ".compu.jsx-2018213603{margin:0;padding:0;}", "#test.jsx-2018213603{background:gray;padding:10px;}", ".drop.jsx-2018213603{background:#E3E3E3;margin:20px;text-align:left;height:10px;}", ".descrip.jsx-2018213603{margin-top:4rem;margin-bottom:0;padding:0;}", ".info.jsx-2018213603{background:#E3E3E3;padding:10px;margin-right:10rem;margin-left:10rem;text-align:left;margin-top:10px;}", ".info.jsx-2018213603 h3.jsx-2018213603{color:#7B7B7B;margin:0;margin-left:2rem;padding:0;}", ".info.jsx-2018213603 p.jsx-2018213603{color:#7B7B7B;margin:0;margin-left:2rem;padding:10px;}", ".descripM.jsx-2018213603{margin-top:3rem;}", ".infoM.jsx-2018213603{background:#E3E3E3;padding:10px;margin-right:2rem;margin-left:2rem;text-align:left;margin-top:10px;}", ".infoM.jsx-2018213603 h5.jsx-2018213603{color:#7B7B7B;margin:0;margin-left:2rem;padding:0;font-family:'Manjari',sans-serif;}", ".infoM.jsx-2018213603 p.jsx-2018213603{color:#7B7B7B;margin:0;margin-left:2rem;padding:10px;font-family:'Manjari',sans-serif;}", ".galeri.jsx-2018213603{padding:0;margin:0;background:#0041AB;position:relative;}", ".galeri.jsx-2018213603 amp-carousel.jsx-2018213603{box-shadow:0px -2px 38px 2px rgba(0,0,0,0.75);}", ".orgullo.jsx-2018213603{background-image:linear-gradient(#0041AB,#7887CB);position:relative;padding:30px;}", ".agencia.jsx-2018213603{box-shadow:0px 14px 31px -10px rgba(0,0,0,0.75);}", ".redes.jsx-2018213603{font-family:'Lexend Deca',sans-serif;color:#9B9B9B;}", ".redes.jsx-2018213603 a.jsx-2018213603{padding-right:15px;}", ".contact.jsx-2018213603 a.jsx-2018213603{margin:15px;}", ".contact.jsx-2018213603 amp-img.jsx-2018213603{margin:30px;margin-top:50px;}", ".contactM.jsx-2018213603 amp-social-share.jsx-2018213603{margin:30px;}", ".contactW.jsx-2018213603 amp-img.jsx-2018213603{margin:30px;}", ".promo.jsx-2018213603{margin:30px;}", ".historias.jsx-2018213603{font-family:'Lexend Deca',sans-serif;color:#9B9B9B;}", ".maps.jsx-2018213603{background-image:linear-gradient(#0041AB,#7887CB);}", ".maps.jsx-2018213603 amp-iframe.jsx-2018213603{margin-bottom:30px;margin-top:40px;}"]));
};

HomePage.getInitialProps = async ({
  req
}) => {
  var test;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  if (userAgent.search("Mobile") > 0) {
    test = true;
  } else {
    test = false;
  }

  return {
    userAgent,
    test
  };
};

/* harmony default export */ var Index = __webpack_exports__["default"] = (HomePage); //https://amp-example.giovanniare9525.now.sh/*/

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
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
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
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


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

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
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });