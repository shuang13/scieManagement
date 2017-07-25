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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./base.scss", function() {
			var newContent = require("!!../../../node_modules/_css-loader@0.28.4@css-loader/index.js!../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./base.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Adobe \\9ED1\\4F53   Std\"; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\nli {\n  float: left;\n  list-style: none; }\n\n/*顶栏*/\nheader {\n  position: fixed;\n  padding-left: 200px;\n  width: 100%;\n  height: 50px;\n  background: #313239;\n  z-index: 99; }\n  header .top-nav-left {\n    float: left; }\n    header .top-nav-left a {\n      display: inline-block;\n      min-width: 80px;\n      height: 50px;\n      line-height: 50px;\n      text-align: center;\n      font-size: 14px;\n      color: #fff; }\n      header .top-nav-left a:hover {\n        background: #fff;\n        color: #26272C; }\n\nheader .top-nav-right {\n  float: right; }\n\n.top-nav-right .user-nav {\n  display: none;\n  position: fixed; }\n\n.user-nav li:last-child a {\n  border-radius: 0 0 5px 5px; }\n\n.user-nav a {\n  display: inline-block;\n  width: 120px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  background: #313239;\n  color: #fff; }\n\n.user-nav a:hover {\n  background: #fff;\n  color: #26272C; }\n\nheader .dropdown-toggle {\n  display: inline-block;\n  width: 120px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  cursor: pointer; }\n\n.dropdown-toggle .tri {\n  display: inline-block;\n  margin-left: 2px;\n  border: 4px solid transparent;\n  width: 0;\n  border-top: 4px solid #fff; }\n\n/*侧栏*/\n#sidebar {\n  position: fixed;\n  width: 200px;\n  height: 100%;\n  background: #313239;\n  z-index: 999; }\n\n#sidebar .logo {\n  width: 200px;\n  height: 50px;\n  border-bottom: 1px solid #000; }\n\n#sidebar .side-nav {\n  margin-top: 100px; }\n\n#sidebar .side-nav a {\n  display: inline-block;\n  padding-left: 30px;\n  width: 200px;\n  height: 48px;\n  border-left: 6px solid transparent;\n  line-height: 48px;\n  color: #fff; }\n\n#sidebar .side-nav a:hover {\n  background: #26272C; }\n\n#sidebar .side-nav .active {\n  border-left: 5px solid #66BAF6;\n  background: #26272C; }\n\n/*主体容器*/\n#content {\n  padding-left: 200px;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n  overflow-x: hidden; }\n\n#content .page-header {\n  padding-top: 50px;\n  padding-left: 39px;\n  min-width: 600px;\n  border-bottom: 1px solid #ccc;\n  line-height: 50px; }\n\n#content .page-header p {\n  font-size: 20px; }\n\n#content .page-nav {\n  margin: 20px 0 20px 39px;\n  width: 1100px;\n  height: 46px;\n  line-height: 46px;\n  border-top: 1px solid #E4E4E4; }\n\n#content .page-nav a {\n  display: block;\n  padding: 0 20px;\n  height: 46px;\n  text-align: center;\n  font-size: 16px; }\n\n#content .page-nav .nav-active {\n  border-top: 1px solid #66BAF6; }\n\n.main {\n  min-width: 1100px;\n  padding-left: 39px;\n  padding-bottom: 139px; }\n\n.main .search label {\n  display: inline-block;\n  padding: 10px;\n  line-height: 30px;\n  text-align: center; }\n\n.btn-submit {\n  margin: 20px 0 0 155px;\n  width: 130px;\n  height: 33px;\n  background: #313131;\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  line-height: 33px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  border-radius: 5px; }\n\n.btn-submit:hover {\n  opacity: 0.8; }\n\n.btn-submit:active {\n  color: #000; }\n\n.btn-sort {\n  display: inline-block;\n  margin-left: 14px;\n  padding: 0 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.btn-sort:hover {\n  background: #6F6F6F;\n  color: #fff; }\n\n.btn-delete, .btn-edit {\n  display: inline-block;\n  min-width: 50px;\n  line-height: 22px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 12px;\n  font-family: '\\5B8B\\4F53'; }\n  .btn-delete:hover, .btn-edit:hover {\n    background: #6F6F6F;\n    color: #fff; }\n\n.btn-delete {\n  background: #D9534F;\n  color: #fff; }\n\n#content table .operate a, .state a {\n  color: #06A2E9; }\n\n#content table .state a {\n  display: block;\n  color: #06A2E9; }\n\n.tb-40-wh {\n  width: 40px;\n  line-height: 25px;\n  text-align: center;\n  font-size: 14px; }\n\n#content table {\n  padding-bottom: 20px;\n  width: 1100px;\n  font-size: 14px; }\n\n#content table th, td {\n  padding: 5px 14px 5px 14px;\n  max-width: 140px;\n  font-weight: normal;\n  text-align: left;\n  overflow: hidden;\n  word-break: break-all; }\n\n.fa {\n  margin: 2px 4px 0 0; }\n\n.main .search input {\n  padding: 6px 12px;\n  height: 34px;\n  font-size: 14px; }\n\n.main .search select {\n  padding: 6px 12px; }\n\ninput, select, textarea {\n  border: 1px solid #ccc; }\n\ninput:focus, select:focus, textarea:focus {\n  border: 1px solid #66BAF6;\n  outline: none; }\n\n.main .option {\n  line-height: 45px; }\n\n.form-label {\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  text-align: right; }\n\ninput, select, textarea {\n  border: 1px solid #ccc; }\n\ninput:focus, select:focus, textarea:focus {\n  border: 1px solid #66BAF6;\n  outline: none; }\n\n.option input[type=\"text\"] {\n  padding: 6px 12px;\n  height: 34px;\n  font-size: 14px; }\n\n.option input[type=\"radio\"] {\n  margin: 0 10px; }\n\n.option input[type=\"checkbox\"] {\n  margin: 0 10px; }\n\n.option select {\n  padding: 6px 12px; }\n\n.option textarea {\n  padding: 6px 10px;\n  width: 460px;\n  height: 60px;\n  vertical-align: text-top;\n  resize: none; }\n\n.option .wrapper {\n  display: inline-block;\n  width: 650px; }\n\n.option span {\n  display: inline-block; }\n\n.editor-box {\n  margin: -30px 0 0 155px; }\n\n#editor_id {\n  width: 700px;\n  height: 600px; }\n\n.cover-img {\n  display: inline-block;\n  vertical-align: text-top;\n  width: 180px;\n  height: 125px;\n  border: 1px solid #ccc; }\n\n.cover {\n  display: inline-block; }\n\n.cover .buttonText {\n  outline: none;\n  cursor: pointer; }\n\n.cover .form-control {\n  cursor: not-allowed; }\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (0);
$(document).ready(function () {
    // 获取编辑文字id
    var urlinfo = window.location.href;
    var id = urlinfo.split("?")[1].split("=")[1];
    $('#doc-cover').filestyle({buttonText: "浏览"});
    // 富文本编辑器
    KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id');
        });

    var ajaxArgs = {
        id: id
    }
    // 获取栏目信息
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:80/SCIEManagement/category/find",
        data: ajaxArgs,
        success: function (data) {
            var status = data.code;//状态码
                console.log(data);

            if (status == 200) {
                var Doc = data.category;
                update(Doc);
                window.Doc = Doc;
                console.log(Doc);
            }
        else alert("服务器连接失败!");
        }
    });

    $.post('http://127.0.0.1:80/SCIEManagement/category/manage', function (data) {
        if(typeof data === 'string') {
            data = JSON.parse(data);
        }
        var status = data.code;//状态码
        if (status == 200) {
            var aaData = data.category.category;
            console.log(aaData);
            // 表格解析
            var str = '<option value="0" >作为一级栏目</option>';
            for(var i = 0; i < aaData.length; i++) {
                // 栏目名称分级显示
                if (aaData[i].pid == 0) {
                    if (window.Doc.pid == aaData[i].id) {
                        str +=  '<option selected="selected" value="' +
                        aaData[i].id +
                        '">' +
                        aaData[i].name +
                        '</option>';
                    }
                    else if (window.Doc.pid == 0) {
                        str +=  '<option value="' +
                        aaData[i].id +
                        '">' +
                        aaData[i].name +
                        '</option>';
                    }
                    
                }        
            }
            $('#pid').html(str);
        }
        else alert("服务器连接失败");
    });
     // 提交创建
    $('.btn-submit').on('click', function (event) {
        event.preventDefault();
        // 富文本编辑器
        editor.sync();
        var updateData = {
            id: id,
            pid: $('#pid').val(),
            title: $('#doc-title').val(),
            name: $('#doc-name').val(),
            type: "doc",
            content: $('#editor_id').val(),
            display: $('input[name="display"]:checked').val(),
            nav: $('input[name="nav"]:checked').val(),
            publish: $('input[name="publish"]:checked').val(),
            comment: $('input[name="comment"]:checked').val(),
            check_level: $('#check-level').val(),
            template_index: $('#template-index').val(),
            template_list: $('#template-list').val(),
            template_detail: $('#template-detail').val(),
            meta_title: $('#meta-title').val(),
            meta_keywords: $('#meta-keywords').val(),
            meta_description: $('#meta-description').val()
        };
        // 验证
        validate(updateData);

        console.log(updateData);

        // 更新
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:80/SCIEManagement/category/test/update',
            data: updateData,
            success: function(data){
                if(typeof data === 'string') {
                    data = JSON.parse(data);
                }
                var status = data.code;//状态码
                console.log(data);
                if(status == 200) {
                    alert("提交成功！");
                } else {
                    alert("提交失败，无法连接服务器！");
                }
            }
        });

    });
});
function update(data) {
    console.log(data);
    $('#doc-title').val(data.title);
    $('#doc-name').val(data.name);
    // 是否显示栏目
    if (data.display == 1) {
        $('input[name="display"]').eq(0).attr("checked", "checked");
    }
    else $('input[name="display"]').eq(1).attr("checked", "checked");
    // 是否显示导航
    if (data.nav == 1) {
        $('input[name="nav"]').eq(0).attr("checked", "checked");
    }
    else $('input[name="nav"]').eq(1).attr("checked", "checked");
    // 是否允许投稿
    if (data.publish == 1) {
        $('input[name="publish"]').eq(0).attr("checked", "checked");
    }
    else $('input[name="publish"]').eq(1).attr("checked", "checked");
    // 是否允许评论
    if (data.comment == 1) {
        $('input[name="comment"]').eq(0).attr("checked", "checked");
    }
    else $('input[name="comment"]').eq(1).attr("checked", "checked");
    // 审稿
    $('#check-level option').eq(data.check_level).attr("selected", "selected");
    $('#meta-title').val(data.meta_title);
    $('#meta-keywords').val(data.meta_keywords);
    $('#meta-description').val(data.meta_description);
    editor.html(data.content);

}
function validate(ajaxArgs) {
    var titleCheck = /[^x00-xff]/;
    if (!titleCheck.test(ajaxArgs.title)) {
        alert("栏目名称为中文，且不能为空！");
        return false;
    }
    var nameCheck = /^[a-zA-Z]{3,7}$/;
    if (!nameCheck.test(ajaxArgs.name)) {
        alert("英文名称为英文，且不能为空！");
        return false;
    }
    var rCheckSpace = /^\s+$/;
    if (rCheckSpace.test(ajaxArgs.content)) {
        alert("内容不能为空！");
        return false;
    }
}

/***/ })
/******/ ]);