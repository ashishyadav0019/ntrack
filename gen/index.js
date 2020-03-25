(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uba", function() { return uba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nTrack", function() { return nTrack; });
/* harmony import */ var _ga_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 Types of tracking:-
 GA (GTM is internally triggering GA)
 UBA
 Performance  - earlier called as newmonk
 Error - called as nlogger
 HeatMap
 TNM
 */

/**
Syntax of ntrack function:
Tracking covered in nTrack- UBA, Performance, GA
nTrack(
    {
        uba:ubaObject,   //uba Object - Already populated Object
        performance:route,  //route Object- Only route object is needed by performance(boomlogger), performance creates it's own object
        gaPageView:{
                  route:route,  //route Object
                  gaObj     // Additonal data fields
        },
        gaCustom:{
            defaultDataLayerObj:[array],
            extDataLayerObj:{
                params.....
            }
        }
    }
)
eg:

nTrack({
  uba:{
    pageName:'applyHistory',
    eventName:'applyHistoryView',
    keyNames:{
      actionType:"view",
      referrer: this.props.route.previous
    }
  },
  gaPageView:{
      route:this.props.route,
        gaObj:{
            'spa-page-title': gaConfigData.title
          }
  },
  gaCustom:{
      defaultDataLayerObj:['spa-event','Certifications_Mobile','SaveSuccess','click'],
      extDataLayerObj:{
          'spa-event-value': 'AppPromo_Nav_button_click'
      }
  }
});
*/

function uba(_ref) {
  var eventName = _ref.eventName,
      ubaData = _ref.ubaData;

  try {
    window.ub.track(eventName, ubaData);
  } catch (e) {
    console.warn(e);
  }
}
/** 
 * This is a common tracking function mainly responsible to send all kind of tracking 
 * like 'newMonk tracking', 'GA tracking', 'UBA tracking' to server(naukri or third party(google)).
 */

function nTrack(obj) {
  try {
    //trigger GAPageView
    if (obj.hasOwnProperty("gaPageView")) {
      var _obj$gaPageView = obj["gaPageView"],
          route = _obj$gaPageView.route,
          gaObj = _obj$gaPageView.gaObj;
      Object(_ga_config__WEBPACK_IMPORTED_MODULE_0__["GA_Performance_Track"])(route, gaObj);
    } //trigger uba


    if (obj.hasOwnProperty("uba")) {
      uba(obj["uba"]);
    }

    if (obj.hasOwnProperty("gaCustom")) {
      var _obj$gaCustom = obj["gaCustom"],
          defaultDataLayerObj = _obj$gaCustom.defaultDataLayerObj,
          extDataLayerObj = _obj$gaCustom.extDataLayerObj;
      _ga_config__WEBPACK_IMPORTED_MODULE_0__["trackGACustom"].apply(void 0, _toConsumableArray(defaultDataLayerObj).concat([extDataLayerObj]));
    } //Tracking GTM extra fields on SRP, JD page


    if (obj.hasOwnProperty("gtmData")) {
      Object(_ga_config__WEBPACK_IMPORTED_MODULE_0__["trackGTMData"])(obj["gtmData"]);
    }

    if (obj.hasOwnProperty("fbPixel")) {
      Object(_ga_config__WEBPACK_IMPORTED_MODULE_0__["trackFBPixel"])(obj["fbPixel"]);
    }
  } catch (e) {
    console.warn(e);
  }
}
/**Singleton Service for page(eg:JD) tracking for common uba parameters */

var tracking = function () {
  var commonUbaData;
  var pageName;

  var init = function init() {
    var keyNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mainParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    commonUbaData = _objectSpread({}, keyNames);
    pageName = mainParams.pageName;
  };

  var populateUbaObj = function populateUbaObj(pageName, commonUbaData, keyNames) {
    /**
      * The below code is written to pass correct referrer when the user opens the app. 
      * We are passing document.referrer only for 1st time in the UBA call, afterwards route.previous is getting passed 
      */
    var ubaReferrer;

    if (window.referrer && window.referrer.UBA != undefined) {
      ubaReferrer = window.referrer.UBA;
      window.referrer.UBA = undefined;
    } else if (keyNames && keyNames.referrer) {
      ubaReferrer = keyNames.referrer;
    }

    return _objectSpread({
      //TODO: remove this 'jd' default value, once jobdescription component start using this function, instead of jd-tracking.
      pageName: pageName
    }, commonUbaData, keyNames, {
      referrer: ubaReferrer || document.referrer
    });
  };

  var doTracking = function doTracking(trackingData) {
    var uba;

    if (trackingData.uba && trackingData.uba.constructor === Array) {
      var ubaArr = [];
      var eventslen = trackingData.uba.length;
      trackingData.uba.forEach(function (obj) {
        var tempObj = _objectSpread({
          eventName: obj.eventName
        }, populateUbaObj(pageName, commonUbaData, obj.keyNames), {
          eventType: 'bulk',
          eventslen: eventslen
        });

        ubaArr.push(tempObj);
      });
      uba = {
        ubaData: ubaArr
      };
    } else if (trackingData.uba) {
      uba = {
        eventName: trackingData.uba.eventName,
        ubaData: populateUbaObj(pageName, commonUbaData, trackingData.uba.keyNames)
      };
    }

    if (uba) {
      nTrack(_objectSpread({}, trackingData, {
        uba: uba
      }));
    } else {
      nTrack(trackingData);
    }
  };

  return {
    init: init,
    doTracking: doTracking
  };
}();

window.tracking = tracking;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmailinURL", function() { return isEmailinURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_Performance_Track", function() { return GA_Performance_Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackGTMData", function() { return trackGTMData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackGACustom", function() { return trackGACustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackFBPixel", function() { return trackFBPixel; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isEmailinURL = function isEmailinURL(route) {
  // This regular expression check whether URL contain a email or not
  var regExp = new RegExp(/([\s]*)([_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*([ ]+|)@([ ]+|)([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,}))([\s]*)/i);
  var isExist = route && route.current && regExp.test(decodeURIComponent(route.current));

  if (!isExist && !window.dataLayer) {
    var scriptTag = document.createElement('script');
    scriptTag.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NX744H');";
    document.head.appendChild(scriptTag);
  }

  return isExist;
}; // const routeNameMap = {
//   'landing': {
//     pageName: 'SplashScreen',
//     title: 'Naukri Web App'
//   },
//   'recJobs': {
//     pageName: 'recommendedjobs',
//     title: 'Jobs For You'
//   },
//   'similarJobsPage': {
//     pageName: 'apply'
//   },
//   'searchForm': {
//     pageName: 'searchform',
//   },
//   'createAccount': {
//     pageName: 'registration/createAccount',
//     title: 'Create Account | Naukri Mobile Site'
//   },
//   'addExperience': {
//     pageName: 'registration/addExperience',
//     title: 'Professional Details | Naukri Mobile Site'
//   },
//   'addEducation': {
//     pageName: 'registration/addEducation',
//     title: 'Education Details | Naukri Mobile Site'
//   },
//   'addEmployment': {
//     pageName: 'registration/addEmployment',
//     title: 'Employment Details | Naukri Mobile Site'
//   },
//   'addSkills': {
//     pageName: 'registration/addSkills',
//     title: 'Key Skills | Naukri Mobile Site'
//   },
//   'addHeadline': {
//     pageName: 'registration/addHeadline',
//     title: 'Resume Headline | Naukri Mobile Site'
//   },
//   'addResume': {
//     pageName: 'registration/addResume',
//     title: 'Upload Resume | Naukri Mobile Site'
//   },
//   'welcome': {
//     pageName: 'registration/welcome',
//     title: 'Welcome | Naukri Mobile Site'
//   }
// }

var gaConfig = function gaConfig(route) {
  var routeName = route.routeName;
  var routeTitle = route.title;
  var routePrevious = route.previousName;
  var returnValue = {
    pageName: routeName,
    title: routeTitle,
    previous: routePrevious
  }; // if (routeNameMap.hasOwnProperty(routeName)) {
  //   $.extend(returnValue, routeNameMap[routeName])
  // }
  // if (routeNameMap.hasOwnProperty(routePrevious)) {
  //   $.extend(returnValue, { previous: routeNameMap[routePrevious].pageName })
  // }

  return returnValue;
};
/*This function is responsible to send four default parameters to GA,
 if anyone wants to override any of the four parameters or wants to add new params,
then pass it in the gaAdditionalObj argument*/


var GA_Performance_Track = function GA_Performance_Track(route, gaAdditionalObj) {
  try {
    if (!isEmailinURL()) {
      var gaObj = {
        'event': 'spa-pageview',
        'spa-page-name': route.routeName,
        //gaConfig(route).pageName,
        'spa-page-title': document.title,
        'spa-page-referrer': function () {
          /*
          The below code is written to pass correct referrer when the user opens the app. 
          We are passing document.referrer only for 1st time in the GA/GTM call, afterwards route.previous is getting passed 
          */
          //TODO
          var referer = '';

          if (window.referrer && window.referrer.GTM != undefined) {
            referer = window.referrer.GTM;
            window.referrer.GTM = undefined;
          } else {
            referer = route.previous;
          }

          return referer || document.referrer;
        }()
      };
      gaObj = _objectSpread({}, gaObj, gaAdditionalObj);
      window.dataLayer && window.dataLayer.push(gaObj);
    }
  } catch (e) {
    console.warn(e);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gaConfig); //Tracking GTM extra fields on SRP, JD page

function trackGTMData(data) {
  try {
    if (!isEmailinURL()) {
      window.dataLayer && window.dataLayer.push(data);
    }
  } catch (e) {
    console.warn(e);
  }
}
function trackGACustom(event, category, label, action, gaAdditionalObj) {
  try {
    event = event || 'spa-event';
    var _gaConfig = {
      'event': event,
      'spa-event-category': category,
      'spa-event-label': label,
      'spa-event-action': action
    };

    if (!isEmailinURL()) {
      _gaConfig = _objectSpread({}, _gaConfig, gaAdditionalObj);
      window.dataLayer && window.dataLayer.push(_gaConfig);
    }
  } catch (e) {
    console.warn(e);
  }
}
function trackFBPixel(data) {
  try {
    if (data && Object.keys(data).length) {
      window.fbPixel = data;
    }
  } catch (e) {
    console.warn(e);
  }
}

/***/ })
/******/ ]);
});