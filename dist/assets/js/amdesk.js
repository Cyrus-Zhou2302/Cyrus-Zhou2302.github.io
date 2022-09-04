/*!-----------------------------------------------------------------
    Name: AmDesk - Help Center HTML template for your digital products
    Version: 1.1.0
    Author: dexad, nK
    Website: https://nkdev.info/
    Purchase: https://1.envato.market/amdesk-html-info
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
    /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  parallaxSpeed: 0.8,
  scrollToAnchorSpeed: 700,
  templates: {
    btnLoaded: 'All shown',
    instagram: "<div class=\"col-4\">\n                <a href=\"{{link}}\" target=\"_blank\">\n                    <img src=\"{{image}}\" alt=\"{{caption}}\" class=\"dx-img-stretch\">\n                </a>\n            </div>",
    instagramLoadingText: 'Loading...',
    instagramFailText: 'Failed to fetch data',
    instagramApiPath: 'php/instagram/instagram.php',
    twitter: "<div class=\"dx-widget-twitter\">\n                <div class=\"dx-widget-text\">\n                {{tweet}}\n                </div>\n                <div class=\"dx-widget-twitter-date\">\n                    <span>{{date}}</span>\n                </div>\n            </div>",
    twitterLoadingText: 'Loading...',
    twitterFailText: 'Failed to fetch data',
    twitterApiPath: 'php/twitter/tweet.php'
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _parts_initDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _parts_initBtnLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _parts_initForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _parts_initTwitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _parts_initPluginCleave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _parts_initPluginImagesLoaded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var _parts_initPluginOFI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _parts_initPluginSelectize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _parts_initPluginQuill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20);
/* harmony import */ var _parts_initPluginDropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









/* Plugins */











/*------------------------------------------------------------------

  Amdesk Class

-------------------------------------------------------------------*/

var AMDESK = /*#__PURE__*/function () {
  function AMDESK() {
    _classCallCheck(this, AMDESK);

    this.options = _parts_options__WEBPACK_IMPORTED_MODULE_0__["options"];
  }

  _createClass(AMDESK, [{
    key: "init",
    value: function init() {
      // prt:sc:dm
      this.initNavbar();
      this.initDropdown();
      this.initBtnLoad();
      this.initForm();
      this.initTwitter();
      this.initPluginJarallax();
      this.initPluginStickySidebar();
      this.initPluginCleave();
      this.initPluginImagesLoaded();
      this.initPluginIsotope();
      this.initPluginSwiper();
      this.initPluginOFI();
      this.initPluginSelectize();
      this.initPluginQuill();
      this.initPluginDropzone();
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions(newOpts) {
      return _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__["setOptions"].call(this, newOpts);
    }
  }, {
    key: "debounceResize",
    value: function debounceResize(func) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["debounceResize"].call(this, func);
    }
  }, {
    key: "throttleScroll",
    value: function throttleScroll(callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["throttleScroll"].call(this, callback);
    }
  }, {
    key: "bodyOverflow",
    value: function bodyOverflow(type) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["bodyOverflow"].call(this, type);
    }
  }, {
    key: "isInViewport",
    value: function isInViewport($item, returnRect) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["isInViewport"].call(this, $item, returnRect);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo($to, callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["scrollTo"].call(this, $to, callback);
    }
  }, {
    key: "initNavbar",
    value: function initNavbar() {
      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_3__["initNavbar"].call(this);
    }
  }, {
    key: "initDropdown",
    value: function initDropdown() {
      return _parts_initDropdown__WEBPACK_IMPORTED_MODULE_4__["initDropdown"].call(this);
    }
  }, {
    key: "initBtnLoad",
    value: function initBtnLoad() {
      return _parts_initBtnLoad__WEBPACK_IMPORTED_MODULE_5__["initBtnLoad"].call(this);
    }
  }, {
    key: "initForm",
    value: function initForm() {
      return _parts_initForm__WEBPACK_IMPORTED_MODULE_6__["initForm"].call(this);
    }
  }, {
    key: "initTwitter",
    value: function initTwitter() {
      return _parts_initTwitter__WEBPACK_IMPORTED_MODULE_7__["initTwitter"].call(this);
    }
  }, {
    key: "initPluginStickySidebar",
    value: function initPluginStickySidebar() {
      return _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_8__["initPluginStickySidebar"].call(this);
    }
  }, {
    key: "initPluginCleave",
    value: function initPluginCleave() {
      return _parts_initPluginCleave__WEBPACK_IMPORTED_MODULE_9__["initPluginCleave"].call(this);
    }
  }, {
    key: "initPluginImagesLoaded",
    value: function initPluginImagesLoaded() {
      return _parts_initPluginImagesLoaded__WEBPACK_IMPORTED_MODULE_10__["initPluginImagesLoaded"].call(this);
    }
  }, {
    key: "initPluginIsotope",
    value: function initPluginIsotope() {
      return _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_11__["initPluginIsotope"].call(this);
    }
  }, {
    key: "initPluginJarallax",
    value: function initPluginJarallax($context) {
      return _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_12__["initPluginJarallax"].call(this, $context);
    }
  }, {
    key: "initPluginSwiper",
    value: function initPluginSwiper() {
      return _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_13__["initPluginSwiper"].call(this);
    }
  }, {
    key: "initPluginOFI",
    value: function initPluginOFI() {
      return _parts_initPluginOFI__WEBPACK_IMPORTED_MODULE_14__["initPluginOFI"].call(this);
    }
  }, {
    key: "initPluginSelectize",
    value: function initPluginSelectize() {
      return _parts_initPluginSelectize__WEBPACK_IMPORTED_MODULE_15__["initPluginSelectize"].call(this);
    }
  }, {
    key: "initPluginQuill",
    value: function initPluginQuill() {
      return _parts_initPluginQuill__WEBPACK_IMPORTED_MODULE_16__["initPluginQuill"].call(this);
    }
  }, {
    key: "initPluginDropzone",
    value: function initPluginDropzone() {
      return _parts_initPluginDropzone__WEBPACK_IMPORTED_MODULE_17__["initPluginDropzone"].call(this);
    }
  }]);

  return AMDESK;
}();
/*------------------------------------------------------------------

  Init Amdesk

-------------------------------------------------------------------*/


window.Amdesk = new AMDESK();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOs", function() { return isIOs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFireFox", function() { return isFireFox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$wnd", function() { return $wnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$body", function() { return $body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndW", function() { return wndW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndH", function() { return wndH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docH", function() { return docH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceResize", function() { return debounceResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleScroll", function() { return throttleScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyOverflow", function() { return bodyOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBodyOverflowed", function() { return isBodyOverflowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/
var $ = jQuery;
var tween = window.TweenMax;
var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var isFireFox = typeof InstallTrigger !== 'undefined';
var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch; // add 'is-mobile' or 'is-desktop' classname to html tag

$('html').addClass(isMobile ? 'is-mobile' : 'is-desktop');
/**
 * window size
 */

var $wnd = $(window);
var $doc = $(document);
var $body = $('body');
var wndW = 0;
var wndH = 0;
var docH = 0;

function getWndSize() {
  wndW = $wnd.width();
  wndH = $wnd.height();
  docH = $doc.height();
}

getWndSize();
$wnd.on('resize load orientationchange', getWndSize);
/**
 * Debounce resize
 */

var resizeArr = [];
var resizeTimeout;

function debounceResized() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    if (resizeArr.length) {
      for (var k = 0; k < resizeArr.length; k++) {
        resizeArr[k]();
      }
    }
  }, 50);
}

$wnd.on('ready load resize orientationchange', debounceResized);
debounceResized();

function debounceResize(func) {
  if (typeof func === 'function') {
    resizeArr.push(func);
  } else {
    window.dispatchEvent(new Event('resize'));
  }
}
/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */


var hideOnScrollList = [];
var didScroll;
var lastST = 0;
$wnd.on('scroll load resize orientationchange', function () {
  if (hideOnScrollList.length) {
    didScroll = true;
  }
});

function hasScrolled() {
  var ST = $wnd.scrollTop();
  var type = ''; // [up, down, end, start]

  if (ST > lastST) {
    type = 'down';
  } else if (ST < lastST) {
    type = 'up';
  } else {
    type = 'none';
  }

  if (ST === 0) {
    type = 'start';
  } else if (ST >= docH - wndH) {
    type = 'end';
  }

  hideOnScrollList.forEach(function (item) {
    if (typeof item === 'function') {
      item(type, ST, lastST, $wnd);
    }
  });
  lastST = ST;
}

setInterval(function () {
  if (didScroll) {
    didScroll = false;
    window.requestAnimationFrame(hasScrolled);
  }
}, 250);

function throttleScroll(callback) {
  hideOnScrollList.push(callback);
}
/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */


var bodyOverflowEnabled;
var isBodyOverflowing;
var scrollbarWidth;
var originalBodyPadding;
var $headerContent = $('.dx-header > *');

function isBodyOverflowed() {
  return bodyOverflowEnabled;
}

function bodyGetScrollbarWidth() {
  // thx d.walsh
  var scrollDiv = document.createElement('div');
  scrollDiv.className = 'dx-body-scrollbar-measure';
  $body[0].appendChild(scrollDiv);
  var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  $body[0].removeChild(scrollDiv);
  return result;
}

function bodyCheckScrollbar() {
  var fullWindowWidth = window.innerWidth;

  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    var documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
  scrollbarWidth = bodyGetScrollbarWidth();
}

function bodySetScrollbar() {
  if (typeof originalBodyPadding === 'undefined') {
    originalBodyPadding = $body.css('padding-right') || '';
  }

  if (isBodyOverflowing) {
    $body.add($headerContent).css('paddingRight', "".concat(scrollbarWidth, "px"));
  }
}

function bodyResetScrollbar() {
  $body.css('paddingRight', originalBodyPadding);
  $headerContent.css('paddingRight', '');
}

function bodyOverflow(enable) {
  if (enable && !bodyOverflowEnabled) {
    bodyOverflowEnabled = 1;
    bodyCheckScrollbar();
    bodySetScrollbar();
    $body.css('overflow', 'hidden');
  } else if (!enable && bodyOverflowEnabled) {
    bodyOverflowEnabled = 0;
    $body.css('overflow', '');
    bodyResetScrollbar();
  }
}
/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */


function isInViewport($item, returnRect) {
  var rect = $item[0].getBoundingClientRect();
  var result = 1;

  if (rect.right <= 0 || rect.left >= wndW) {
    result = 0;
  } else if (rect.bottom < 0 && rect.top <= wndH) {
    result = 0;
  } else {
    var beforeTopEnd = Math.max(0, rect.height + rect.top);
    var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
    var afterTop = Math.max(0, -rect.top);
    var beforeBottom = Math.max(0, rect.top + rect.height - wndH);

    if (rect.height < wndH) {
      result = 1 - (afterTop || beforeBottom) / rect.height;
    } else if (beforeTopEnd <= wndH) {
      result = beforeTopEnd / wndH;
    } else if (beforeBottomEnd <= wndH) {
      result = beforeBottomEnd / wndH;
    }

    result = result < 0 ? 0 : result;
  }

  if (returnRect) {
    return [result, rect];
  }

  return result;
}
/**
 * Scroll To
 */


function scrollTo($to, callback) {
  var scrollPos = false;
  var speed = this.options.scrollToAnchorSpeed / 1000;

  if ($to === 'top') {
    scrollPos = 0;
  } else if ($to === 'bottom') {
    scrollPos = Math.max(0, docH - wndH);
  } else if (typeof $to === 'number') {
    scrollPos = $to;
  } else {
    scrollPos = $to.offset ? $to.offset().top : false;
  }

  if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
    tween.to($wnd, speed, {
      scrollTo: {
        y: scrollPos,
        // disable autokill on iOs (buggy scrolling)
        autoKill: !isIOs
      },
      ease: Power2.easeOut,
      overwrite: 5
    });

    if (callback) {
      tween.delayedCall(speed, callback);
    }
  } else if (typeof callback === 'function') {
    callback();
  }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/

function setOptions(newOpts) {
  var self = this;
  var optsTemplates = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, this.options.templates, newOpts && newOpts.templates || {});
  self.options = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, self.options, newOpts);
  self.options.templates = optsTemplates;
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbar", function() { return initNavbar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  var self = this;
  var $navbar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-navbar-top'); // Fixed open modal

  var navbarWidth = 0;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
    navbarWidth = $navbar.innerWidth();
  });
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document).on('beforeLoad.fb', function () {
    $navbar.width(navbarWidth);
  });
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document).on('afterClose.fb', function () {
    $navbar.width('');
  }); // hide / show
  // add / remove solid color

  var $autohideNav = $navbar.filter('.dx-navbar-autohide');
  self.throttleScroll(function (type, scroll) {
    var start = 400;
    var hideClass = 'dx-onscroll-hide';
    var showClass = 'dx-onscroll-show'; // hide / show

    if (type === 'down' && scroll > start) {
      $autohideNav.removeClass(showClass).addClass(hideClass);
    } else if (type === 'up' || type === 'end' || type === 'start') {
      $autohideNav.removeClass(hideClass).addClass(showClass);
    }
  }); // Scroll

  if ($navbar.hasClass('dx-navbar-fixed') || $navbar.hasClass('dx-navbar-sticky')) {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["throttleScroll"])(function (type, scroll) {
      if (scroll > 200) {
        $navbar.addClass('dx-navbar-scroll');
      } else {
        $navbar.removeClass('dx-navbar-scroll');
      }
    });
  } // update position dropdown


  var $dropdownMenu = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-navbar-top .dx-navbar-dropdown');
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
    $dropdownMenu.each(function () {
      var $thisDropdown = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var rect = $thisDropdown[0].getBoundingClientRect();
      var rectLeft = rect.left;
      var rectRight = rect.right;
      var rectWidth = rect.width;
      var wndW = _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].width();

      if (wndW - rectRight < 0) {
        $thisDropdown.addClass('dx-navbar-dropdown-left');

        if (wndW - rectRight === rectWidth + 10) {
          $thisDropdown.removeClass('dx-navbar-dropdown-left');
        }
      }

      if (rectLeft < 0) {
        $thisDropdown.addClass('dx-navbar-dropdown-right');

        if (rectLeft === rectWidth + 10) {
          $thisDropdown.removeClass('dx-navbar-dropdown-right');
        }
      }
    });
  }); // Fullscreen Navbar

  var $navbarFull = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-navbar-fullscreen');

  if ($navbarFull.length) {
    var burger = $navbar.find('.dx-navbar-burger');
    var burgerFull = $navbarFull.find('.dx-navbar-burger');
    var dropItem = $navbarFull.find('.dx-drop-item'); // Position Burger (navbar-fullscreen)

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
      burgerFull.css({
        position: 'absolute',
        top: burger.offset().top - $navbar.offset().top,
        left: burger.offset().left
      });
    }); // Click on burger navbar

    burger.on('click', function () {
      burger.add(burgerFull).addClass('active');
      $navbarFull.addClass('dx-navbar-fullscreen-open');
      $navbarFull.removeClass('dx-navbar-fullscreen-closed');
      $navbarFull.css({
        'z-index': 1000
      });
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["bodyOverflow"])(1);
    }); // Click on burger navbar-fullscreen

    burgerFull.on('click', function () {
      burger.add(burgerFull).removeClass('active');
      $navbarFull.removeClass('dx-navbar-fullscreen-open');
      $navbarFull.addClass('dx-navbar-fullscreen-closed');
      $navbarFull.find('.show').removeClass('show').innerHeight('');
      $navbarFull.one('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $navbarFull.css({
          'z-index': -1000
        });
      });
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["bodyOverflow"])(0);
    }); // Click on Esc

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document).on('keydown', function (e) {
      if (e.keyCode === 27 && $navbarFull.hasClass('dx-navbar-fullscreen-open')) {
        burger.add(burgerFull).removeClass('active');
        $navbarFull.removeClass('dx-navbar-fullscreen-open');
        $navbarFull.addClass('dx-navbar-fullscreen-closed');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["bodyOverflow"])(0);
      }
    }); // Dropdown Collapse

    dropItem.each(function () {
      var $thisItem = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var dropItemLink = $thisItem.find('> a');
      $thisItem.find('.dx-navbar-dropdown').addClass('collapse');
      dropItemLink.on('click', function (e) {
        e.preventDefault();
        var $dropdown = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next('.dx-navbar-dropdown');
        var dropdownChild = $dropdown.find('.dx-navbar-dropdown');
        var dropdownHeight = $dropdown.innerHeight();
        var dropdownSiblings = $thisItem.siblings().find('.show');
        var dropdownSiblingsHeight = dropdownSiblings.innerHeight();

        if (!$dropdown.hasClass('show')) {
          $dropdown.removeClass('collapse').addClass('collapsing').innerHeight(dropdownHeight);
          $dropdown.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            $dropdown.addClass('show');
            $dropdown.off('transitionend webkitTransitionEnd oTransitionEnd');
          });
        } else {
          $dropdown.innerHeight(dropdownHeight).addClass('collapsing').innerHeight(0);
          $dropdown.removeClass('collapse').removeClass('show');
          dropdownChild.innerHeight(dropdownHeight).addClass('collapsing').innerHeight(0);
          dropdownChild.removeClass('collapse').removeClass('show');
        }

        if (dropdownSiblings.hasClass('show')) {
          dropdownSiblings.innerHeight(dropdownSiblingsHeight).addClass('collapsing').innerHeight(0);
          dropdownSiblings.removeClass('collapse').removeClass('show');
        }

        $dropdown.one('transitionend webkitTransitionEnd oTransitionEnd', function () {
          $dropdown.removeClass('collapsing').addClass('collapse').innerHeight('');
          dropdownChild.removeClass('collapsing').addClass('collapse').innerHeight('');
          dropdownSiblings.removeClass('collapsing').addClass('collapse').innerHeight('');
        });
      });
    });
  }
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDropdown", function() { return initDropdown; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Dropdown

-------------------------------------------------------------------*/

function initDropdown() {
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-dropdown').each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      var $container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-main .container');
      var dropMenu = $this.find('.dropdown-menu');
      var containerRight = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - ($container.innerWidth() + $container.offset().left - parseInt($container.css('padding-right'), 10));
      var dropMenuRight = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - (dropMenu.innerWidth() + dropMenu.offset().left);
      var dropMenuNegative = containerRight - dropMenuRight;

      if (containerRight > dropMenuRight) {
        $this.on('show.bs.dropdown', function () {
          dropMenu.css({
            display: 'block',
            'margin-left': -dropMenuNegative
          });
        });
      }

      $this.on('hidden.bs.dropdown', function () {
        dropMenu.css({
          display: 'none'
        });
      });
    });
  });
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBtnLoad", function() { return initBtnLoad; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Btn Load

-------------------------------------------------------------------*/

function initBtnLoad() {
  var self = this;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-btn-load').on('click', function (e) {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $btnAttr = $this.attr('data-btn-loaded');
    e.preventDefault();
    $this.addClass('dx-btn-loading');
    setTimeout(function () {
      $this.removeClass('dx-btn-loading');

      if ($btnAttr) {
        $this.text($btnAttr);
      } else {
        $this.text(self.options.templates.btnLoaded);
      }

      $this.addClass('dx-btn-loaded');
    }, 2000);
  });
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForm", function() { return initForm; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Portfolio */

function initForm() {
  // Quantity
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-form-quantity-input').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var minus = $this.parent().find('.dx-form-quantity-minus');
    var plus = $this.parent().find('.dx-form-quantity-plus');
    var min = parseInt($this.attr('min'), 10);
    var max = parseInt($this.attr('max'), 10);
    $this.on('input', function () {
      var val = this.value;

      if (val !== '') {
        if (val > max) {
          val = max;
        } else if (val < min) {
          val = min;
        }
      }

      this.value = val;
    });
    minus.on('click', function (e) {
      e.preventDefault();
      var count = parseInt($this.val(), 10) - 1;
      count = count < min ? min : count;
      $this.val(count);
      $this.change();
    });
    plus.on('click', function (e) {
      e.preventDefault();
      var count = parseInt($this.val(), 10) + 1;
      count = count > max ? max : count;
      $this.val(count);
      $this.change();
    });
  });
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTwitter", function() { return initTwitter; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Twitter

-------------------------------------------------------------------*/

function initTwitter() {
  var self = this;
  var $twtFeeds = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-twitter-list');

  if (!$twtFeeds.length || !self.options.templates.twitter) {
    return;
  }
  /**
   * Templating a tweet using '{{ }}' braces
   * @param  {Object} data Tweet details are passed
   * @return {String}      Templated string
   */


  function templating(data, temp) {
    var tempVariables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

    for (var i = 0, len = tempVariables.length; i < len; i++) {
      temp = temp.replace(new RegExp("{{".concat(tempVariables[i], "}}"), 'gi'), data[tempVariables[i]]);
    }

    return temp;
  }

  $twtFeeds.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var options = {
      username: $this.attr('data-twitter-user-name') || null,
      list: null,
      hashtag: $this.attr('data-twitter-hashtag') || null,
      count: $this.attr('data-twitter-count') || 2,
      hideReplies: $this.attr('data-twitter-hide-replies') === 'true',
      template: $this.attr('data-twitter-template') || self.options.templates.twitter,
      loadingText: self.options.templates.twitterLoadingText,
      failText: self.options.templates.twitterFailText,
      apiPath: self.options.templates.twitterApiPath
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html(options.failText); // eslint-disable-next-line

      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    } // Set loading


    $this.html("<span>".concat(options.loadingText, "</span>")); // Fetch tweets

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(options.apiPath, {
      username: options.username,
      list: options.list,
      hashtag: options.hashtag,
      count: options.count,
      exclude_replies: options.hideReplies
    }, function (twt) {
      $this.html('');

      for (var i = 0; i < options.count; i++) {
        var tweet = false;

        if (twt[i]) {
          tweet = twt[i];
        } else if (twt.statuses && twt.statuses[i]) {
          tweet = twt.statuses[i];
        } else {
          break;
        }

        var tempData = {
          user_name: tweet.user.name,
          date: tweet.date_formatted,
          tweet: tweet.text_entitled,
          avatar: "<img src=\"".concat(tweet.user.profile_image_url, "\" />"),
          url: "https://twitter.com/".concat(tweet.user.screen_name, "/status/").concat(tweet.id_str),
          retweeted: tweet.retweeted,
          screen_name: tweet.user.screen_name
        };
        $this.append(templating(tempData, options.template));
      } // resize window


      self.debounceResize();
    }).fail(function (a) {
      $this.html(options.failText);
      _utility__WEBPACK_IMPORTED_MODULE_0__["$"].error(a.responseText);
    });
  });
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginStickySidebar", function() { return initPluginStickySidebar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/

function initPluginStickySidebar() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.stick_in_parent === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-sticky').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var row = $this.closest('.row');
    var offsetTop = parseInt($this.attr('data-sticky-offsetTop'), 10);
    var offsetBot = parseInt($this.attr('data-sticky-offsetBot'), 10);

    if (offsetBot) {
      $this.parent().css({
        'margin-bottom': -offsetBot
      });
      $this.css({
        'margin-bottom': offsetBot
      });
    }

    if (row.find('img').length) {
      row.imagesLoaded().progress(function () {
        $this.stick_in_parent({
          offset_top: offsetTop
        });
      });
    } else {
      $this.stick_in_parent({
        offset_top: offsetTop
      });
    }

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document).on('shown.bs.collapse hidden.bs.collapse', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document.body).trigger('sticky_kit:recalc');
    });
  });
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginCleave", function() { return initPluginCleave; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Cleave

-------------------------------------------------------------------*/

function initPluginCleave() {
  if (typeof Cleave === 'undefined') {
    return;
  }

  if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-card-number').length) {
    // eslint-disable-next-line
    var cleave = new Cleave('.dx-card-number', {
      creditCard: true
    });
  }
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginImagesLoaded", function() { return initPluginImagesLoaded; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin ImagesLoaded

-------------------------------------------------------------------*/

function initPluginImagesLoaded() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.imagesLoaded === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-isotope-grid').imagesLoaded().progress(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-isotope-grid').isotope('layout');
  });
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginIsotope", function() { return initPluginIsotope; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Isotope

-------------------------------------------------------------------*/

function initPluginIsotope() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.isotope === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-isotope-grid').isotope({
    itemSelector: '.dx-isotope-grid-item',
    layoutMode: 'masonry'
  });
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-isotope-filter').on('click', 'li', function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this); // bind filter button click

    var $filterValue = $this.attr('data-filter');
    $this.closest('.dx-isotope-container').find('.dx-isotope-grid').isotope({
      filter: $filterValue
    }); // change is-checked class on buttons

    $this.siblings('.active').removeClass('active');
    $this.addClass('active');
  });
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginJarallax", function() { return initPluginJarallax; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Jarallax

-------------------------------------------------------------------*/

function initPluginJarallax() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.jarallax === 'undefined') {
    return;
  } // primary parallax


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-image-parallax').jarallax({
    speed: this.options.parallaxSpeed
  });
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginSwiper", function() { return initPluginSwiper; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Swiper

-------------------------------------------------------------------*/

function initPluginSwiper() {
  if (typeof Swiper === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.swiper-container').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var swiperSlides = parseInt($this.attr('data-swiper-slides'), 10);
    var swiperSpeed = parseInt($this.attr('data-swiper-speed'), 10);
    var swiperPlay = parseInt($this.attr('data-swiper-autoPlay'), 10);
    var swiperSpace = parseInt($this.attr('data-swiper-space'), 10);
    var swiperSlidesAuto = $this.attr('data-swiper-slidesAuto');
    var swiperArrowsClone = $this.attr('data-swiper-arrows-clone');
    var swiperGrabCursor = $this.attr('data-swiper-grabCursor');
    var swiperLazy = $this.attr('data-swiper-lazy');
    var swiperBreakpoints = $this.attr('data-swiper-breakpoints');
    var swiperArrows = $this.attr('data-swiper-arrows');
    var swiperPagination = $this.attr('data-swiper-pagination');
    var swiperPaginationDynamic = $this.attr('data-swiper-pagination-dynamic');
    var swiperPaginationScrollbar = $this.attr('data-swiper-pagination-scrollbar');
    var swiperHeight = $this.attr('data-swiper-autoHeight');
    var swiperFree = $this.attr('data-swiper-freeMode');
    var swiperLoop = $this.attr('data-swiper-loop');
    var conf = {};

    if (swiperSpeed) {
      conf.speed = swiperSpeed;
    }

    if (swiperSpace) {
      conf.spaceBetween = swiperSpace;
    }

    if (swiperPlay) {
      conf.autoplay = {
        delay: swiperPlay,
        disableOnInteraction: false
      };
    }

    if (swiperSlides) {
      conf.slidesPerView = swiperSlides;
    }

    if (swiperSlidesAuto === 'true') {
      conf.slidesPerView = 'auto';
      conf.centeredSlides = true;
    }

    if (swiperArrows === 'true') {
      conf.navigation = {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      };
    }

    if (swiperGrabCursor === 'true') {
      conf.grabCursor = true;
    }

    if (swiperLazy === 'true') {
      conf.lazy = true;
    }

    if (swiperPagination === 'true') {
      conf.pagination = {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      };
    }

    if (swiperPaginationDynamic === 'true') {
      conf.pagination = {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      };
    }

    if (swiperPaginationScrollbar === 'true') {
      conf.scrollbar = {
        el: '.swiper-scrollbar',
        hide: true
      };
    }

    if (swiperHeight === 'true') {
      conf.autoHeight = swiperHeight;
    }

    if (swiperFree === 'true') {
      conf.freeMode = swiperFree;
    }

    if (swiperLoop) {
      conf.loop = swiperLoop;
    }

    if (swiperArrowsClone === 'true') {
      var $prev = $this.find('.swiper-button-prev');
      var $next = $this.find('.swiper-button-next');
      var $arrowsClone = $this.closest('.dx-box, .dx-box-1, .dx-box-2, .dx-box-3, .dx-box-4, .dx-box-5').find('.dx-slider-arrows-clone');
      $prev.add($next).clone().appendTo($arrowsClone);
      $arrowsClone.find('.swiper-button-prev').on('click', function () {
        $prev.click();
      });
      $arrowsClone.find('.swiper-button-next').on('click', function () {
        $next.click();
      });
    }

    if (swiperBreakpoints === 'true' && swiperSlides) {
      if (swiperSlides === 2) {
        var points = [768, 992, 1200];
        var breaks = {};
        var numberOfPoints = points.length;

        while (swiperSlides > 0 && numberOfPoints > 0) {
          breaks[points[numberOfPoints - 1]] = {
            slidesPerView: swiperSlides
          };
          swiperSlides--;
          numberOfPoints--;
        }

        conf.breakpoints = breaks;
      } else {
        var _points = [576, 768, 992, 1200, 1920];
        var _breaks = {};
        var _numberOfPoints = _points.length;

        while (swiperSlides > 0 && _numberOfPoints > 0) {
          _breaks[_points[_numberOfPoints - 1]] = {
            slidesPerView: swiperSlides
          };
          swiperSlides--;
          _numberOfPoints--;
        }

        conf.breakpoints = _breaks;
      }

      conf.slidesPerView = swiperSlides || 1; // Since Swiper 5.0 this option is removed and it is `true` by default, but in older versions it was `false`.
      // So we need to keep it as a fallback.

      conf.breakpointsInverse = true;
    } // eslint-disable-next-line


    new window.Swiper(this, conf);
  });
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginOFI", function() { return initPluginOFI; });
/*------------------------------------------------------------------

  Init Plugin OFI

-------------------------------------------------------------------*/
function initPluginOFI() {
  if (typeof window.objectFitImages !== 'undefined') {
    window.objectFitImages();
  }
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginSelectize", function() { return initPluginSelectize; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Selectize

-------------------------------------------------------------------*/

function initPluginSelectize() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.selectpicker !== 'undefined' && Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-select-ticket').length) {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-select-ticket').selectpicker();
  }
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginQuill", function() { return initPluginQuill; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Quill

-------------------------------------------------------------------*/

function initPluginQuill() {
  if (typeof Quill === 'undefined') {
    return;
  }

  var editorQuill = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-editor');

  if (editorQuill.length) {
    editorQuill.each(function () {
      var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
      $this.css({
        'min-height': parseInt($this.attr('data-editor-height'), 10),
        'max-height': parseInt($this.attr('data-editor-maxHeight'), 10)
      });
    });
    var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], ['clean'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }], ['link']]; // eslint-disable-next-line

    var quill = new Quill('.dx-editor', {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });
  }
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginDropzone", function() { return initPluginDropzone; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Dropzone

-------------------------------------------------------------------*/

function initPluginDropzone() {
  if (typeof Dropzone === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.dx-dropzone').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var attachment = $this.next('.dx-dropzone-attachment').find('.dx-dropzone-attachment-add');
    var dropzoneAction = $this.attr('data-dropzone-action');
    var dropzoneMaxFiles = parseInt($this.attr('data-dropzone-maxFiles'), 10);
    var dropzoneMaxMB = parseInt($this.attr('data-dropzone-maxMB'), 10); // eslint-disable-next-line

    var myDropzone = new Dropzone('.dx-dropzone', {
      url: dropzoneAction,
      maxFiles: dropzoneMaxFiles,
      maxFilesize: dropzoneMaxMB,
      addRemoveLinks: true
    });
    attachment.on('click', function () {
      $this.click();
    });

    if ($this.add(':not(.active)')) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(document).on('dragover', function () {
        $this.addClass('active');
      });
    }

    myDropzone.on('removedfile', function () {
      $this.removeClass('active');
    });
  });
}



/***/ })
/******/ ]);