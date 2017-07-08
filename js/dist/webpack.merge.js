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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(7)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
var iconfont = __webpack_require__(6);
var music = __webpack_require__(4);
var getMusic = __webpack_require__(3);
var songTab = __webpack_require__(5);


var sum = function() {
    music.init();
    getMusic.channel();


    renderContent();
    renderSong();


    $('#searchSong').on('keydown', function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            getMusic.searchSong();
        }
    })
    $('.searchSong').on('click', function() {
        getMusic.searchSong();
    })

    $('.play-pause').on('click', function() {
        music.playPause($(this));
    })

    $('.pre').on('click', function() {
        music.changeSong();
        console.log('pre');
        getMusic.pre();
    })

    $('.next').on('click', function() {
        music.changeSong();
        console.log('next');
        getMusic.next();
    });

    $('.autoPlay').on('click', function() {
        music.autoPlay();
    });


    $('.loop').on('click', function() {
        getMusic.mulitLoop($('.loop'));
    });



    $('#music').on('canplay', function() {
        music.duration();
        music.progress($('.progress'), 'timeupdate');
        music.progress($('.volume'), 'volumechange');
    })

    $('.mute').on('click', function() {
        music.mute();
    })

    music.currentTime();

    $('#music').on('ended', function() {
        getMusic.next();
    })

    $('.only').on('click', function() {
        if ($(this).attr('title') == '扩展') {
            $('#shrink-expand').toggle(1000);
            $(this).find('use').attr('xlink:href', '#icon-iconfonthaofang26-copy');
            $(this).attr('title', '收缩');
        } else if ($(this).attr('title') == '收缩') {
            $('#shrink-expand').toggle(1000);
            $(this).find('use').attr('xlink:href', '#icon-iconfonthaofang26');
            $(this).attr('title', '扩展');
        }
    })


    $('.showLyrics').on('click', function() {
        if ($(this).attr('title') == '显示歌词') {
            $('#mes-ct').find('.showMusic').addClass('show');


            $(this).attr('title', '隐藏歌词');
        } else if ($(this).attr('title') == '隐藏歌词') {
            $('#mes-ct').find('.showMusic').removeClass('show');
            $(this).attr('title', '显示歌词');
        }
    })

    $('.max-min').on('click', function() {
        if ($(this).attr('title') == '最大化') {
            $('#content').toggle(1000);

            $('#musicPlayer').removeClass('min');
            $('.container').removeClass('min');
            $('#footer').removeClass('min');
            $('#control').removeClass('min');
            $('#progress').removeClass('min');
            $('.pro-mes').removeClass('min');
            $('.time').removeClass('min');
            $('.progress').removeClass('min');
            $('#volume').removeClass('min');

            if ($(window).width() > 850) {
                $('#musicPlayer').css({
                    top: '',
                    left: 0,
                    bottom: 30
                })
            }
            if ($(window).width() > 580 && $(window).width() < 850) {
                $('#musicPlayer').css({
                    top: '',
                    left: '',
                    bottom: ''
                })
            }

            $(this).find('use').attr('xlink:href', '#icon-zuixiaohua');
            $(this).attr('title', '最小化');
        } else if ($(this).attr('title') == '最小化') {
            $('#content').hide(1000);

            $('#musicPlayer').css({
                top: '',
                left: '',
                bottom: ''
            })

            $('#musicPlayer').addClass('min');
            $('.container').addClass('min');
            $('#footer').addClass('min');
            $('#control').addClass('min');
            $('#progress').addClass('min');
            $('.pro-mes').addClass('min');
            $('.time').addClass('min');
            $('.progress').addClass('min');
            $('#volume').addClass('min');



            $(this).find('use').attr('xlink:href', '#icon-zuidahua');
            $(this).attr('title', '最大化');
        }
    })

    $('#shrink-expand').on('mousedown', function(e) {
        if ($('.max-min').attr('title') == '最大化') {
            var ex = e.clientX,
                ey = e.clientY,
                objX = $('#musicPlayer').offset().left;
                objY = $('#musicPlayer').offset().top;
            $(this).css({
                cursor: 'move'
            })
            $(document).on('mousemove', function(ev) {
                var evx = ev.clientX,
                    evy = ev.clientY,
                    newObjX = objX + evx - ex,
                    newObjY = objY + evy - ey;
                if (newObjX < 0) {
                    newObjX = 0;
                }
                if (newObjX > $(window).width() - $('#musicPlayer').outerWidth()) {
                    newObjX = $(window).width() - $('#musicPlayer').outerWidth();
                }
                if (newObjY < $('#shrink-expand').outerHeight()) {
                    console.log('newObjY < 0');
                    newObjY = $('#shrink-expand').outerHeight();
                }
                if (newObjY > $(window).height() - $('#footer').outerHeight()) {
                    newObjY = $(window).height() - $('#footer').outerHeight();
                }

                $('#musicPlayer').offset({
                    left: newObjX,
                    top: newObjY
                })
            })
            $(document).on('mouseup', function() {
                $(document).off('mousemove');
                $('#shrink-expand').css({
                    cursor: 'initial'
                })
            })
        }

    })

    $(window).on('resize', function() {
        if ($(this).width() > 580) {
            $('#footer').find('.songs-ct').css({
                opacity: 0,
                zIndex: -1,
                height: '100%',
                transform: 'translateY(100%)'
            });
        }
        if ($(this).width() < 580) {
            $('#musicPlayer').removeClass('min').css({
                top: '',
                left: 0,
                bottom: 0
            });
            $('#content').show(1000);
            $('.max-min').find('use').attr('xlink:href', '#icon-zuixiaohua');
            $('.max-min').attr('title', '最小化');

            $('#footer').find('.songs-ct').css({
                transform: 'translateY(-60%)'
            })

            $('.musicPlayer').removeClass('min');
            $('.container').removeClass('min');
            $('#footer').removeClass('min');
            $('#control').removeClass('min');
            $('#progress').removeClass('min');
            $('.pro-mes').removeClass('min');
            $('.time').removeClass('min');
            $('.progress').removeClass('min');
            $('#volume').removeClass('min');

            $('#shrink-expand').show(1000);
            $('#musicPlayer').removeClass('super-min');
            $('#footer').removeClass('super-min');
            $('#footer').find('#mes-ct').removeClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').removeClass('super-min');
            $('#control').removeClass('super-min');
            $('#super-min').find('use').attr('xlink:href', '#icon-sanjiaozuo');
            $('#super-min').attr('title', '收缩');

        }
        if ($(this).width() > 580 && $(this).width() < 850) {
            $('#musicPlayer').css({
                top: '',
                left: '',
                bottom: ''
            })
        }
    })

    $('#super-min').on('click', function() {
        if ($(this).attr('title') == '扩展') {
            $('#shrink-expand').show(1000);

            $('#musicPlayer').removeClass('super-min');
            $('#footer').removeClass('super-min');
            $('#footer').find('#mes-ct').removeClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').removeClass('super-min');
            $('#control').removeClass('super-min');

            $(this).find('use').attr('xlink:href', '#icon-sanjiaozuo');
            $(this).attr('title', '收缩');
        } else if ($(this).attr('title') == '收缩') {
            $('#shrink-expand').hide(1000);
            $('#musicPlayer').offset({
                left: '',
            })
            $('#musicPlayer').addClass('super-min');
            $('#footer').addClass('super-min');
            $('#footer').find('#mes-ct').addClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').addClass('super-min');
            $('#footer').find('#mes-ct').css({
                left: ''
            });
            $('#control').addClass('super-min');

            $(this).find('use').attr('xlink:href', '#icon-triangle-r');
            $(this).attr('title', '扩展');
        }
    })


    $('#show-song').on('click', function() {
        if ($('#footer').find('.song-ct').length === 0) {
            $('#footer').find('.container').append($('<div class="songs-ct"></div>'));
            renderSong($('.songs-ct')[0]);
            $('#footer').find('.channel-ct').append($('#song-ct').find('.channel-ct').clone(true));
            $('#footer').find('.song-ct').append($('#song-ct').find('.song-ct').clone(true));
            $('#footer').find('.songs-ct').append($('<div id="song-close"></div>'));
            $('#song-close').on('click', function() {

                $('#footer').find('.songs-ct').css({
                    transform: 'translateY(300%)'
                });
            });

        }
        getMusic.renderSongMenu();

        $('#footer').find('.songs-ct').css({
            transform: 'translateY(-60%)'
        });
        $('#footer').find('.songs-ct').animate({
            opacity: 1,
            zIndex: 100,
            height: '250%'
        }, 500)
    })


    function renderContent(root) {
        reanderSongTab(root || $('#music-tab')[0], [{
            tabName: '歌曲信息',
            tabContent: $('<div id="song-ct"></div>')[0]
        }, {
            tabName: '歌词',
            tabContent: $('<div class="showMusic"><div class="lyric"><div class="lyric-view"><ul class="lyric-ct"></ul></div></div>' +
                '<div class="visualization"><canvas id="canvasVoice" class="canvas">你的浏览器不支持喔！</canvas></div></div>')[0]
        }], 1);

    }


    function renderSong(root) {
        reanderSongTab(root || $('#song-ct')[0], [{
            tabName: '分类',
            tabContent: $('<div class="channel"><div class="channelList"><ul class="channel-ct"></ul></div></div>')[0]
        }, {
            tabName: '歌曲列表',
            tabContent: $('<div class="song"><div class="songList">' 
                + '<div class="songMenu"><span class="songNum">播放统计 (0/0)</span>' 
                + '<span class="songClear">' 
                + '<button class="songClearBtn icons">'
                + '<svg class="icon" aria-hidden="true">'
                +      '<use xlink:href="#icon-lajitong"></use>'
                + '</svg>'
                +'</button>' 
                + '<b class="songClearText">清空列表</b>'
                + '</span></div>'
                + '<ul class="song-ct"></ul></div></div>')[0]
        }], 1);
    }



    function reanderSongTab(root, tabList, idx) {
        var targetDom = root;
        // 生成实例
        var tabContainer = new songTab.TabFactorty({
            tabList: tabList
        });
        // 渲染到dom节点
        tabContainer.renderTo(targetDom, idx)
    }

};


module.exports = sum;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {



var sum = __webpack_require__(1);
sum();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var getMusic = (function() {

    var songArr = [];
    var songIdx = -1;
    var n = 5;
    var num = 0;


    function channel() {

        $.ajax({
            /*url: 'http://api.jirengu.com/fm/getChannels.php',*/
            url: 'https://jirenguapi.applinzi.com/fm/getChannels.php',
            dataType: 'jsonp',
            Method: 'get',
            success: function(ret) {
                var channels = ret.channels;

                var num = Math.floor(Math.random() * channels.length);
                var channelName = channels[num].name;
                var channelId = channels[num].channel_id;
                var songChannel = {};

                $('.channel').attr('data-id', channelId);
                songChannel.id = channelId;
                songChannel.name = channelName;
                renderChannel(channels, songChannel);

                song(songChannel);
            },
            error: function() {
                console.log('获取频道失败！');
            }
        })
    }

    function renderChannel(channels, songChannel) {
        var li = '';
        channels.forEach(function(node, i) {
            li += '<li class="channel-li" channel-id="' + node.channel_id + '">' + node.name + '</li>';
        });

        $('.channel-ct').empty().append(li);
        activeChannel(songChannel);
        $('.channel-li').on('click', function() {
            num = 0;
            var _this = this;
            localStorage.setItem('autoPlay', false);
            var def = $.Deferred();
            var wait = function(def) {
                for (var i = 0; i < n; i++) {
                    changeChannel($(_this).attr('channel-id'), $(_this).text(), def);
                }
                return def;
            }
            $.when(wait(def))
                .done(function() {
                    changeAutoPlay();
                    songIdx = songArr.length - n;
                    resetSong();
                })
                .fail(function() {
                    console.log('失败了');
                })
        });
    }

    function activeChannel(songChannel) {
        [].slice.call($('.channel-li')).forEach(function(li, i) {
            $(li).removeClass('active');
            if ($(li).attr('channel-id') === songChannel.id) {
                $(li).addClass('active');
            }
        })
    }

    function changeChannel(id, name, def) {
        var songChannel = {};
        songChannel.id = id;
        songChannel.name = name;
        song(songChannel, def);
    }


    function renderSong() {
        var li = '';
        songArr.forEach(function(node, i) {
            var songs = node.song[0];
            var title = songs.title;
            var artist = songs.artist;
            var songTime = $('.song-time').eq(i).attr('song-time') ? $('.song-time').eq(i).attr('song-time') : '  ';
            li += '<li class="song-li clearfix" data-idx="' + i + '">' + '<span class="clearSong" title="删除歌曲"></span>' + '<span class="song-title" title="' + title + '">' + title + '</span>' + '<span class="song-artist" title="' + artist + '">' + artist + '</span>' +
                '<span class="song-time" song-time="' + songTime + '">' + songTime + '</span>' + '</li>';
        });
        $('.song-ct').empty().append(li);
        activeSong();

        $('.song-li').on('click', function() {
            songIdx = parseInt($(this).attr('data-idx'));
            resetSong();
        });
        $('.clearSong').on('click', function() {
            if ($(this).parent().attr('data-idx') != 0) {
                if ($(this).parent().attr('data-idx') == songIdx) {
                    if (songIdx + 1 == songArr.length) {
                        songIdx--;
                    }
                    resetSong();
                } else if ($(this).parent().attr('data-idx') < songIdx) {
                    songIdx--;
                }
                songArr.splice($(this).parent().attr('data-idx'), 1);
                renderSong();
                renderSongMenu();
            } else if ($(this).parent().attr('data-idx') == 0 && songIdx != 0) {
                songIdx--;
                songArr.splice($(this).parent().attr('data-idx'), 1);
                renderSong();
                renderSongMenu();
            } else if (songIdx == 0) {
                clearAllSong();
                channel();
                return;
            }
        });
    }

    function activeSong() {
        [].slice.call($('.song-li')).forEach(function(li, i) {
            $(li).removeClass('active');
            if ($(li).attr('data-idx') == songIdx) {
                $(li).addClass('active');
            }
        })
    }

    function noLoop() {
        console.log('noLoop');
        $('#music')[0].loop = false;
    }

    function listLoop() {
        console.log('listLoop');
        $('#music')[0].loop = false;
        if (songIdx === songArr.length - 1) {
            songIdx = 0;
        } else if (songIdx === 0) {
            songIdx = songArr.length - 1;
        }
    }

    function singleLoop() {
        console.log('singleLoop');
        $('#music')[0].loop = true;
    }

    function randomLoop() {
        console.log('randomLoop');
        $('#music')[0].loop = false;
        songIdx = Math.floor(Math.random() * (songArr.length - 1));
    }

    function mulitLoop($this) {
        var loopState = $('.loop').attr('data-state');
        switch (loopState) {
            case 'noLoop':
                $this.attr('data-state', 'listLoop');
                $this.attr('title', '列表循环');
                $this.find('use').attr('xlink:href', '#icon-yinpinliebiaoxunhuan');
                break;
            case 'listLoop':
                singleLoop();
                $this.attr('data-state', 'singleLoop');
                $this.attr('title', '单曲循环');
                $this.find('use').attr('xlink:href', '#icon-danquxunhuan');
                break;
            case 'singleLoop':
                randomLoop();
                $this.attr('data-state', 'randomLoop');
                $this.attr('title', '随机播放');
                $this.find('use').attr('xlink:href', '#icon-suijibofang');
                break;
            case 'randomLoop':
                noLoop();
                $this.attr('data-state', 'noLoop');
                $this.attr('title', '顺序播放');
                $this.find('use').attr('xlink:href', '#icon-shunxubofang');
                break;
            default:
                break;
        }
    }


    function pre() {
        if ($('.loop').attr('data-state') === 'randomLoop') {
            randomLoop();
            changeAutoPlay();
            resetSong();
            return;
        }
        if (songIdx <= 0) {
            if ($('.loop').attr('data-state') === 'listLoop') {
                listLoop();
                changeAutoPlay();
                resetSong();
                return;
            }
            return;
        }
        changeAutoPlay();
        songIdx--;
        resetSong();
    }

    function next() {
        if ($('.loop').attr('data-state') === 'randomLoop') {
            randomLoop();
            changeAutoPlay();
            resetSong();
            return;
        }
        if (songArr.length <= songIdx + 1) {
            if ($('.loop').attr('data-state') === 'listLoop') {
                listLoop();
                changeAutoPlay();
                resetSong();
                return;
            }
            changeAutoPlay();
            channel();
            return;
        }
        changeAutoPlay();
        songIdx++;
        resetSong();
    }

    function changeAutoPlay() {
        $('#music')[0].autoPlay = true;
        localStorage.setItem('autoPlay', $('#music')[0].autoPlay);
    }

    function renderSongMenu() {
        $('#song-ct').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');
        $('.songs-ct').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');

        $('#song-ct').find('.songClearBtn').off('click').on('click', clearAllSong);
        $('.songs-ct').find('.songClearBtn').off('click').on('click', clearAllSong);
    }

    function clearAllSong() {
        songArr.splice(0, songArr.length);
        songIdx = -1;

        $('.song').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');
        $('#music').attr('src', '');
        $('#music').attr('sid', '');
        $('.title').text('');
        $('.title').attr('title', '');
        $('.artist').text('');
        $('.artist').attr('title', '');
        $('.lyric').css({
            'background': '',
        });
        $('.disco-img').css({
            'background': '',
        })
        $('#shrink-expand').css({
            'background': '',
        })
        $('.progress').find('.meter').css({
            width: 0,
        });
        $('.progress').find('.meterPoint').css({
            left: 0,
        });
        $('.song-ct').empty();
        $('.lyric-ct').empty();
    }

    function resetSong() {
        console.log('resetSong');
        var songs = songArr[songIdx].song[0];

        var sid = songs.sid;
        var title = songs.title;
        var picture = songs.picture;
        var artist = songs.artist;
        var url = songs.url;

        $('#music').attr('src', url);
        $('#music').attr('sid', sid);
        $('.title').text(title);
        $('.title').attr('title', title);
        $('.artist').text(artist);
        $('.artist').attr('title', artist);
        $('.lyric').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        });
        $('.disco-img').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('#shrink-expand').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('.musicPlayer').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('#control').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })

        if (songArr[songIdx].channel) {
            var channel = songArr[songIdx].channel;
            activeChannel(channel);
        }
        activeSong();
        renderSongMenu();
        lyric();
        isAutoPlay();
    }

    function isAutoPlay() {
        if (localStorage.getItem('autoPlay') != 'false') {
            $('#music')[0].play();
        }
    }

    function searchSong() {
        var query = $('#searchSong').val();
        if (query === '') {
            return;
        }
        $.get(
                'https://tingapi.ting.baidu.com/v1/restserver/ting', {
                    method: 'baidu.ting.search.common',
                    query: query,
                    page_size: 1,
                    page_no: 1
                },
                function(ret) {
                    var song = ret.song_list[0];
                    console.log(song);
                    if (!song) {
                        $('.search-ct').addClass('search');
                        $('.SongResult').text('抱歉，找不到！');
                        $('.SongResult').append($('<a href="javascript:;" class="disappear">x</a>'))
                        $('.SongResult').addClass('appear');

                        $('.SongResult').find('.disappear').off('click')
                            .on('click', function() {
                                $('.SongResult').find('.disappear').css({
                                    display: 'none'
                                })
                                $('.SongResult').removeClass('appear');
                                $('.search-ct').removeClass('search');
                            })
                        return;
                    }
                    var artist = song.author.replace(/<[^>]+>/g, '');
                    var title = song.title.replace(/<[^>]+>/g, '');
                    var sid = song.song_id;

                    if (!$('.SongResult').find('.resultTitle').length) {
                        $('.SongResult').empty();
                        $('.SongResult').append('<strong class="resultTitle"></strong>' + '<strong class="resultArtist"></strong>' + '<a href="javascript:;" class="resultPlay">立即播放</a>' + '<a href="javascript:;" class="disappear">X</a>');
                    }

                    $('.search-ct').addClass('search');
                    $('.resultTitle').text('歌曲：' + title);
                    $('.resultTitle').attr('title', title);
                    $('.resultArtist').text('歌手：' + artist);
                    $('.resultArtist').attr('title', artist);
                    $('.SongResult').attr('sid', sid);
                    $('.SongResult').addClass('appear');
                    $('.SongResult').find('.resultPlay').off('click').on('click', function() {
                        if (filter()) {
                            changeAutoPlay();
                            resetSong();
                            return;
                        } else {
                            playSearchSong(sid, title, artist);
                            return;
                        }

                    })
                    $('.SongResult').find('.disappear').off('click').on('click', function() {
                        $('.SongResult').removeClass('appear');
                        $('.search-ct').removeClass('search');
                    })
                },
                "jsonp"
            )
            .fail(function() {
                console.log('获取音乐失败');
            })
    }


    function filter() {
        var isRepeat = false;
        for (var i = 0; i < songArr.length; i++) {
            if ($('.SongResult').attr('sid') == songArr[i].song[0].sid) {
                songIdx = i;
                isRepeat = Boolean('ture');
            }
        }
        return isRepeat;
    }

    function playSearchSong(sid, title, artist) {
        $.ajax({
            url: 'https://music.baidu.com/data/music/links',
            dataType: 'jsonp',
            method: 'get',
            data: {
                songIds: sid
            },
            success: function(ret) {

                var song = ret.data.songList[0];
                var url = song.songLink;
                var picture = song.songPicRadio;

                var songObj = {
                    song: [{
                        sid: sid,
                        title: title,
                        picture: picture,
                        artist: artist,
                        url: url
                    }]
                }

                addSong(songObj);
                changeAutoPlay();
                songIdx = songArr.length - 1;
                resetSong();
                renderSong();

            },
            error: function() {
                console.log('获取音乐失败')
            }
        })
    }

    function addSong(song) {
        songArr.push(song);
        return true;
    }

    function song(songChannel, def) {
        $.ajax({
           /* url: 'http://api.jirengu.com/fm/getSong.php',*/
            url: 'https://jirenguapi.applinzi.com/fm/getSong.php',
            dataType: 'jsonp',
            method: 'get',
            data: {
                'channel': $('.channel').attr('data-id') ||
                    $('.channel-li').attr('channel-id')
            },
            success: function(ret) {
                ret.channel = songChannel;
                var songs = ret.song[0];
                addSong(ret);


                var sid = songs.sid;
                var title = songs.title;
                var picture = songs.picture;
                var artist = songs.artist;
                var url = songs.url;

                $('#music').attr('src', url);
                $('#music').attr('sid', sid);
                $('.title').text(title);
                $('.title').attr('title', title);
                $('.artist').text(artist);
                $('.artist').attr('title', artist);
                $('.lyric').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                });
                $('.disco-img').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('#shrink-expand').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('.musicPlayer').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('#control').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })


                songIdx++;
                renderSong();
                renderSongMenu();
                lyric();
                isAutoPlay();
                if (def) {
                    num++;
                    if (num === n) {
                        def.resolve();
                    }
                }
            },
            error: function() {
                console.log('获取音乐失败')
            }
        })
    }

    function lyric() {
        var sid = $('#music').attr('sid');
        $.post(
            /*'http://api.jirengu.com/fm/getLyric.php',*/
            'https://jirenguapi.applinzi.com/fm/getLyric.php',
             {
                sid: sid
            })
            .done(function(ret) {
                try {
                    var ret = JSON.parse(ret);
                } catch (err) {
                    console.log(err);
                    var lyricArray = '这首歌没歌词 T_T ';
                    renderLyric(lyricArray);
                    return;
                }
                var ly = ret.lyric;
                if (ly.length > 0) {
                    $('.lyric-ct').empty();
                    $('.lyric-ct').css({
                        top: ''
                    })
                    var line = ly.split('\n'); //按回车分成数组
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
                    var res = [];
                    if (line != '') {
                        $(line).each(function(idx, node) {
                            var time = line[idx].match(timeReg);
                            if (!time) {
                                return;
                            }
                            var lyric = line[idx].replace(timeReg, '');
                            if (lyric === '音乐来自百度FM, by 饥人谷') {
                                return;
                            }
                            if (lyric != '') {
                                $(time).each(function(idx, node) {
                                    var t = time[idx].slice(1, -1).split(':');
                                    //t[0] 分钟  t[1] 秒(精确到毫秒)

                                    /* 。如果 string 以 0 开头，
                                     那么 ECMAScript v3 允许 parseInt() 
                                     的一个实现把其后的字符解析为八进制
                                     或十六进制的数字。*/

                                    /*单位为秒*/
                                    var curTime = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                                    res.push([curTime, lyric]);
                                })

                            }
                        })
                    }
                    res.sort(function(a, b) {
                        return a[0] - b[0]
                    });

                    var lyricArray = res; //存到lyricArr里面
                    renderLyric(lyricArray); //渲染歌词
                }
            })
            .fail(function() {
                $('.lyric-ct').html('<li>这首歌曲没有歌词</li>')
            })
    }

    function renderLyric(lyricArray) {
        var li = '';
        if (lyricArray instanceof Array) {
            for (var i = 0; i < lyricArray.length; i++) {
                li += '<li data-time="' + lyricArray[i][0] + '">' + lyricArray[i][1] + '</li>';
            }
        } else {
            li += '<li style="margin-top:' + $('.lyric-ct').height() / 2 + 'px;' + ' font-size: 24px; color: rgba(247, 89, 0, 1)">' + lyricArray + '</li>';
        }
        $('.lyric-ct').append(li);
        $('#music').on('timeupdate', function() {
            showLyric(lyricArray);
        })
    }


    function showLyric(lyricArray) {
        console.log('showLyric ');
        $('.lyric-ct').each(function(idx, ul) {
            var $li = $(ul).find('li');
            var liH = $li.outerHeight();

            $(lyricArray).each(function(i, node) {
                var curTime = $li.eq(i).attr('data-time');
                var nextTime = $li.eq(i + 1).attr('data-time');
                var curT = $('#music')[0].currentTime;
                var lyT = $('.lyric').offset().top;
                var lyH = $('.lyric').height();
                var add = 15;
                //当前时间在下一句时间和歌曲当前时间之间的时候 就渲染 并滚动
                if ((curT >= curTime) && (curT <= nextTime)) {

                    $li.removeClass('active');
                    $li.eq(i).addClass('active');
                    $('.lyric-ct').css({
                        top: -liH * (i - 2)
                    });
                }
            })
        })
    }

    return {
        mulitLoop: mulitLoop,
        channel: channel,
        song: song,
        lyric: lyric,
        pre: pre,
        next: next,
        searchSong: searchSong,
        renderSongMenu: renderSongMenu
    }
})()

module.exports = getMusic;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var music = (function() {

    var audioObj = $('#music')[0];
    var srcValue = $('[name=src]');
    var oldVolume = 0.1;


    $(audioObj).on('playing', function() {
        $('.play-pause').attr('data-state', 'play');
        $('.play-pause').find('use').attr('xlink:href','#icon-tag35');
        $('.disco').addClass('active');
        $('.needle').addClass('active');

    }).on('pause', function() {
        $('.play-pause').attr('data-state', 'pause');
        $('.play-pause').find('use').attr('xlink:href','#icon-bofang');
        $('.disco').removeClass('active');
        $('.needle').removeClass('active');
    })

    function init() {
        pause();
        audioObj.volume = 0.1;
        $('.sound').css({
            width: '30%'
        });
        $('.soundPoint').css({
                left: '30%'
            })
        $('.play-pause').attr('data-state', audioObj.autoPlay ? 'play' : 'pause');
     

        $('.loop').attr('data-state', 'noLoop');
        $('.loop').attr('title', '顺序播放');
        $('.loop').addClass('noLoop');
        $('.only').attr('title', '收缩');
        $('.mute').attr('title', '静音');
        $('.showLyrics').attr('title', '显示歌词');
        $('.max-min').attr('title', '最小化');
        $('#super-min').attr('title', '收缩');
        $('#show-song').attr('title', '显示');
    }


    function changeSong() {
        pause();
        $('.meter').css({
            width: '0%',
            transition: ''
        });
        $('.meterPoint').css({
            left: '0%',
            transition: ''
        });
        audioObj.currentTime = 0;
    }

    function play() {
        audioObj.play();
    };

    function pause() {
        audioObj.pause();
    };

    function playPause($this) {
        if ($this.attr('data-state') === 'pause') {
            play();
            $this.attr('data-state', 'play');
        } else if ($this.attr('data-state') === 'play') {
            pause();
            $this.attr('data-state', 'pause');
        }
    };

    function autoPlay() {
        console.log(localStorage.getItem('autoPlay'));
        console.log(audioObj.autoPlay);
        if (localStorage.getItem('autoPlay') === 'true') {
            audioObj.autoPlay = false;
        } else {
            audioObj.autoPlay = true;
        }
        console.log(audioObj.autoPlay);
        localStorage.setItem('autoPlay', audioObj.autoPlay);
        console.log(localStorage.getItem('autoPlay'));
    };

    function src() {
        srcValue.val(audioObj.src);
    };

    function mute() {
        if (audioObj.volume != 0) {
            oldVolume = audioObj.volume;
            audioObj.volume = 0;
            $('.sound').css({
                width: '0%'
            });
            $('.soundPoint').css({
                left: '0%'
            })
            $('.mute').attr('title', '取消静音');
           $('.mute').find('use').attr('xlink:href','#icon-yinliang');
        } else {
            audioObj.volume = oldVolume;
            $('.mute').attr('title', '静音');
          $('.mute').find('use').attr('xlink:href','#icon-jingyin');
          
        }

    };


    function duration() {
        var min = parseInt(audioObj.duration / 60);
        var sec = parseInt(audioObj.duration - min * 60);
        $('.duration').text(digit(min) + ' : ' + digit(sec));
        var songTime = '  ' + digit(min) + ' : ' + digit(sec);
       $('.song-li.active').find('.song-time').attr('song-time', songTime);
       $('.song-li.active').find('.song-time').text(songTime);
        
    };

    function currentTime() {
        $(audioObj).on('timeupdate', function() {
            var time = audioObj.currentTime;
            var min = parseInt(time / 60);
            var sec = parseInt(time - min * 60);
            $('.currentTime').text(digit(min) + ' : ' + digit(sec));
        })
    };

    function digit(digit) {
        return digit >= 10 ? digit : '0' + digit;
    };

    function progress($target, event) {
        var pw = $target.width();
        var proLeft = $target.offset().left;
        var m = $($target.children()[0]);
        var mp = $($target.children()[1]);


        $(audioObj).on(event, function() {
            if (event === 'timeupdate') {
                m.css({
                    width: 100 * audioObj.currentTime / audioObj.duration + '%',
                });
                mp.css({
                    left: 100 * audioObj.currentTime / audioObj.duration + '%',
                })

            } else if (event === 'volumechange') {
                m.css({
                    width: 100 * audioObj.volume + '%',
                });
                mp.css({
                    left: 100 * audioObj.volume + '%',
                });
                if (audioObj.volume != 0) {
                    $('.mute').attr('title', '静音');
                    $('.mute').removeClass('unmute');
                } else {
                    $('.mute').attr('title', '取消静音');
                    $('.mute').addClass('unmute');
                }
            }
        })


        function progressW(e) {
            var ex = e.pageX;
            var moveX = ex - proLeft;
            var meterWP = moveX * 100 / pw;

            if (moveX < 0) {
                meterWP = 0;
            } else if (moveX > pw) {
                meterWP = 100
            }

            m.css({
                width: meterWP + '%',
                transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
            });
            mp.css({
                left: meterWP + '%',
                transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
            })
            if (event === 'timeupdate') {
                audioObj.currentTime = meterWP / 100 * audioObj.duration;
            } else if (event === 'volumechange') {
                audioObj.volume = meterWP / 100;
            }
        }

        $target.on('mousedown', progressW);


        function meterPointD(e) {
            $target.off('mousedown');
            $('body').on('mousemove', function(ev) {

                var evx = ev.pageX;
                var moveX = evx - proLeft;
                var meterWP = moveX * 100 / pw;

                if (moveX < 0) {
                    meterWP = 0;
                } else if (moveX > pw) {
                    meterWP = 100
                }
                m.css({
                    width: meterWP + '%',
                    transition: ''
                });
                mp.css({
                    left: meterWP + '%',
                    transition: ''
                })
                if (event === 'timeupdate') {
                    audioObj.currentTime = meterWP / 100 * audioObj.duration;
                } else if (event === 'volumechange') {
                    audioObj.volume = meterWP / 100;
                }
            })
        }

        mp.on('mousedown', meterPointD);

        $('body').on('mouseup', function() {
            $('body').off('mousemove');
            $target.on('mousedown', progressW);
        })
    }

    return {
        audioObj: audioObj,
        init: init,
        changeSong: changeSong,
        play: play,
        pause: pause,
        playPause: playPause,
        autoPlay: autoPlay,
        src: src,
        mute: mute,
        duration: duration,
        currentTime: currentTime,
        progress: progress,
    }
})();

module.exports = music;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var songTab = (function() {
    var TabBaseConfig = {
        /*存储tab
         *每一项{ tabName:'tab1',tabContent:'html字符串' }
         */
        tabList: [],
        //首屏展示的tab
        indexTab: 0
    }



    var TabFactorty = function(tabConfig) {
        var tabConfig = Object.assign({}, TabBaseConfig, tabConfig);
        //tab数组
        this.tabList = tabConfig.tabList;
        //当前激活的tab 序数
        this.activeTab = tabConfig.indexTab;
        //渲染的目标dom节点
        this.targetDom = null;
    }

    /*TabFactorty.prototype.oldtabContent = function() {
        var content = this.getElement(".tab-body").innerHTML;
        console.log(content);
    }*/

    TabFactorty.prototype.layoutRender = function() {
        var tabListString = this.tabList.map(function(tab, index) {
            return ['<div class="tab-item-' + index + ' ">', tab.tabName, '</div>'].join('');
        }).join('');
        return ['<div class="tab-header clearfix">', tabListString,
            '</div><div class="tab-body"></div>'
        ].join('');
    };

    //获取元素
    /*TabFactorty.prototype.getElement = function(name) {
        if (name.match(/^#/)) {
            return document.getElementById(name.replace(/^#/, ''))[0];
        } else if (name.match(/^\./)) {
            return document.getElementsByClassName(name.replace(/^\./, ''))[0];
        } else {
            return document.getElementsByTagName(name)[0];
        }
    }*/

     TabFactorty.prototype.getElement = function(name) {
        if (name.match(/^#/)) {
            return this.targetDom.getElementById(name.replace(/^#/, ''))[0];
        } else if (name.match(/^\./)) {
            return this.targetDom.getElementsByClassName(name.replace(/^\./, ''))[0];
        } else {
            return this.targetDom.getElementsByTagName(name)[0];
        }
    }



    //渲染对应序数号的元素样式
        TabFactorty.prototype.indexRender = function(index) {
            var targetTab = this.tabList[index];
            var tabBody = this.getElement(".tab-body");
           // var tabBody = this.targetDom.getElementsByClassName("tab-body")[0];
           // console.log(tabBody);
            //console.log(targetTab['tabContent']);
            tabBody.appendChild( targetTab['tabContent']);
        }

        TabFactorty.prototype.showList = function(index) {
            var targetTab = this.tabList[index];
            var tabBody = this.getElement(".tab-body");
            var tabHeader = this.getElement(".tab-item-" + index);
            var previouseTab = this.getElement(".tab-item-" + this.activeTab);
            tabBody.childNodes.forEach(function(cN, idx) {
                cN.style.opacity = '0';
                cN.style.zIndex = '1'
            });
            tabBody.childNodes[index].style.opacity = '1';
            tabBody.childNodes[index].style.zIndex = '2';
            tabHeader.classList.add('active');
            if (index != this.activeTab) {
                previouseTab.classList.remove('active');
                this.activeTab = index;
            }

        }


        //挂载事件
        TabFactorty.prototype.events = function() {
            var _this = this;

            this.tabList.forEach(function(tab, index) {
                _this.getElement('.tab-item-' + index).addEventListener('click', function() {
                    _this.showList(index);
                })
            });
        };


    //程序入口
    TabFactorty.prototype.renderTo = function(targetDom, index) {
        targetDom.innerHTML = this.layoutRender();
        this.targetDom = targetDom;
        this.activeTab = index || this.activeTab;
        for (var i = 0; i < this.tabList.length; i++) {
            this.indexRender(i);
        }
        this.showList(this.activeTab);
        this.events(this.targetDom);
    };

    return {
        TabFactorty: TabFactorty
    }
})()

module.exports = songTab;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sanjiaozuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M268.8 556.8l448 332.8c12.8 6.4 25.6 6.4 32 0 12.8-6.4 19.2-19.2 19.2-25.6L768 198.4c0-12.8-6.4-25.6-19.2-25.6-6.4 0-6.4-6.4-12.8-6.4-6.4 0-12.8 0-19.2 6.4l-448 332.8C262.4 512 256 524.8 256 531.2S262.4 550.4 268.8 556.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M810.346667 800.618667c0 23.552-19.114667 42.666667-42.666667 42.666667l-576 0c-23.552 0-42.666667-19.114667-42.666667-42.666667l0-533.333333c0-23.552 19.114667-42.666667 42.666667-42.666667l277.333333 0 0-64-320 0c-35.328 0-64 28.650667-64 64l0 618.666667c0 35.328 28.672 64 64 64l661.333333 0c35.349333 0 64-28.672 64-64l0-213.333333-64 0L810.346667 800.618667zM929.621333 277.312l-172.181333-172.181333c-12.501333-12.501333-32.746667-12.501333-45.248 0-12.501333 12.48-12.501333 32.746667 0 45.248l98.56 98.56C586.048 244.650667 379.328 402.432 307.2 618.304l59.2 28.416c63.616-192.341333 275.541333-353.514667 478.208-330.602667l-131.861333 131.84c-12.373333 12.394667-12.373333 32.490667 0 44.885333 12.394667 12.394667 32.469333 12.394667 44.885333 0l166.954667-166.976c1.685333-1.130667 3.541333-1.834667 5.013333-3.328C942.122667 310.08 942.122667 289.813333 929.621333 277.312z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M376.517329 260.160251l214.647685 0 28.118408-55.918567-10.136871 0c-0.845251-3.76986-3.158946-7.195889-6.765077-9.280364L379.326305 66.045205c-6.844895-3.956102-15.598256-1.607614-19.546172 5.242398l-14.309914 24.810059c-3.952009 6.851035-1.607614 15.611559 5.237281 19.567661l153.261593 88.577385L371.69858 204.242707c-169.859619 0-307.553655 137.696082-307.553655 307.553655 0 149.71993 107.002013 274.390347 248.693082 301.862026l26.591635-52.881394c-124.056434-17.638729-219.36615-122.370025-219.36615-248.980631C120.063493 372.820124 234.879472 260.160251 376.517329 260.160251z"  ></path>' +
    '' +
    '<path d="M958.844048 511.795339c0-131.905192-83.059718-244.373707-199.713554-288.065811l-25.780153 51.269687c98.869798 34.930557 169.57514 127.749546 169.57514 236.797148 0 138.973168-114.819049 251.635087-256.453836 251.635087L487.742527 763.431449l-28.118408 55.917544 10.134825 0c0.845251 3.770883 3.158946 7.197936 6.764054 9.281387l223.059262 128.916115c6.844895 3.956102 15.595186 1.607614 19.546172-5.243421l14.309914-24.810059c3.952009-6.850012 1.607614-15.610536-5.237281-19.566638l-153.263639-88.578408 76.353992 0C821.146942 819.346947 958.844048 681.651888 958.844048 511.795339z"  ></path>' +
    '' +
    '<path d="M421.457868 639.21845 421.457868 673.839969 603.375104 673.839969 603.375104 639.21845 532.49273 639.21845 532.49273 349.749686 419.61387 382.527207 419.61387 419.403069 492.544903 398.302495 492.544903 639.21845Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-triangle-r" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M336.75 174.113l-0.004 0.002c-6.638-5.428-15.12-8.688-24.364-8.688-21.271 0-38.516 17.244-38.52 38.514l-0.166 0.078 0.171 659.888c0.081 21.204 17.292 38.37 38.515 38.37 10.089 0 19.268-3.883 26.136-10.23l385.962-328.345c9.223-7.038 15.18-18.139 15.18-30.636 0-12.134-5.617-22.951-14.385-30.012v-0.010l-388.201-328.655c-0.084-0.070-0.166-0.142-0.25-0.212l-0.074-0.063z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gecidiaozheng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.186242 63.98836c-247.234871 0-447.658599 200.423729-447.658599 447.658599s200.423729 447.658599 447.658599 447.658599S959.844841 758.88183 959.844841 511.646959 759.421112 63.98836 512.186242 63.98836zM418.612053 379.37133c10.781554 0.77055 20.50501 1.540076 29.169343 2.311649 8.664334 0.77055 17.521049 1.347694 26.570145 1.732457 9.05012 0.384763 18.580171 0.673335 28.592198 0.86674 10.012028 0.192382 21.757536 0.289596 35.234479 0.289596 14.248516 0 26.377764-0.096191 36.389792-0.289596 10.012028-0.193405 18.965957-0.384763 26.858718-0.577145 7.894807-0.192382 15.306614-0.673335 22.23849-1.443885 6.931876-0.77055 14.632255-1.732457 23.105231-2.888793l0 51.40681c0.001023 0 0.002047 0 0.00307 0l-0.00307 0 0 0c-8.086166-0.77055-15.594163-1.443885-22.523993-2.022053-6.931876-0.577145-14.247492-0.961908-21.949918-1.154289-7.701402-0.192382-16.654308-0.384763-26.858718-0.577145-10.204409-0.192382-22.623253-0.289596-37.257555-0.289596-14.248516 0-26.570145 0.096191-36.968983 0.289596-10.397814 0.192382-19.927865 0.384763-28.592198 0.577145s-17.231453 0.577145-25.704428 1.154289c-8.471952 0.577145-17.906835 1.25048-28.303626 2.022053L418.61103 379.37133zM336.0118 243.051595c8.857738 12.323677 17.71343 25.415856 26.570145 39.277562 8.857738 13.861706 18.291598 28.880771 28.303626 45.055149l-50.830689 29.459962 0.001023-0.001023c-8.857738-17.328667-17.521049-33.117258-25.993001-47.364751s-16.943904-27.148313-25.415856-38.700417L336.0118 243.051595zM359.117031 708.616006c-4.235464 4.235464-8.086166 8.18338-11.553127 11.841699-3.465938 3.65832-6.642281 7.316639-9.531074 10.974959-2.888793 3.65832-5.77554 7.509021-8.664334 11.553127-2.888793 4.043083-6.065136 8.568143-9.531074 13.574157-5.3918-10.012028-10.878768-18.869766-16.46295-26.570145-5.584182-7.701402-11.841699-14.82566-18.772552-21.372773 10.396791-10.012028 17.809621-21.661346 22.23849-34.94693 4.427846-13.284561 6.642281-27.436886 6.642281-42.454928L313.482691 455.038684c-18.48398 0-32.923854 0.289596-43.321668 0.86674s-19.253506 1.443885-26.570145 2.599198l0-53.719482c8.087189 1.925862 16.750499 3.176342 25.993001 3.753487 9.242502 0.577145 20.409842 0.86674 33.502022 0.86674s24.837688-0.289596 35.234479-0.86674c10.397814-0.577145 19.830651-1.829671 28.303626-3.753487-1.925862 9.627265-3.369747 20.6012-4.332678 32.923854-0.962931 12.323677-1.443885 25.415856-1.443885 39.277562l0 172.131359c10.012028-10.012028 18.965957-19.157315 26.858718-27.437909 7.894807-8.27957 15.500019-16.847713 22.815635-25.704428 1.925862 11.167341 4.235464 20.024056 6.931876 26.570145 2.695389 6.54609 6.54609 12.130272 11.553127 16.750499l-69.891813 69.317739L359.117031 708.616006zM491.393683 646.809335l0 54.296627-51.986001 0c2.695389-12.323677 4.524037-25.318642 5.487991-38.990013 0.962931-13.670348 1.443885-27.822672 1.443885-42.454928l0-82.600253c0-11.167341-0.384763-22.719444-1.154289-34.657334-0.77055-11.93789-1.732457-21.179368-2.888793-27.726481 4.620227 0.77055 9.627265 1.443885 15.019065 2.022053 5.3918 0.578168 11.649318 0.962931 18.772552 1.154289 7.123234 0.192382 15.500019 0.384763 25.127284 0.577145 9.627265 0.192382 20.986987 0.289596 34.08019 0.289596l32.346709 0c8.857738 0 16.461927-0.192382 22.815635-0.577145 6.354731-0.384763 11.745509-0.86674 16.173354-1.443885 4.427846-0.577145 8.760524-1.25048 12.997012-2.022053-1.540076 6.161327-2.792603 14.922874-3.753487 26.281573-0.962931 11.360745-1.443885 23.200398-1.443885 35.524075l0 73.358775c0 3.850701 0.096191 8.568143 0.289596 14.151301 0.192382 5.584182 0.577145 11.360745 1.154289 17.327644 0.577145 5.968945 1.154289 11.93789 1.732457 17.906835 0.577145 5.968945 1.25048 11.456936 2.022053 16.461927l-50.255591 0 0-28.880771L491.393683 646.808312zM738.328725 289.261033c-0.193405 4.235464-0.480954 8.857738-0.86674 13.862729-0.384763 5.006014-0.577145 10.781554-0.577145 17.327644l0 379.49822c0 11.553127-0.86674 21.084201-2.599198 28.592198-1.732457 7.509021-5.872754 13.574157-12.418844 18.195408-6.54609 4.620227-16.173354 8.471952-28.880771 11.553127-12.707416 3.080152-30.228465 5.968945-52.564169 8.664334 0-10.397814-2.118244-21.661346-6.354731-33.791617-4.235464-12.130272-10.781554-23.393803-19.639293-33.791617 15.787568 1.925862 28.399817 3.273557 37.8347 4.043083 9.434883 0.77055 16.654308 0.673335 21.661346-0.289596 5.007037-0.962931 8.27957-2.888793 9.819646-5.77554 1.540076-2.888793 2.311649-7.219425 2.311649-12.997012l0-362.16853L564.17429 322.183863c-13.477966 0-25.704428 0.192382-36.679387 0.577145-10.974959 0.384763-21.468964 0.86674-31.480992 1.443885s-19.735483 1.347694-29.169343 2.311649c-9.434883 0.962931-19.157315 2.214435-29.170366 3.753487L437.674201 277.707906c9.241478 0.77055 18.003026 1.443885 26.281573 2.022053 8.27957 0.577145 17.521049 0.962931 27.726481 1.154289 10.204409 0.192382 21.661346 0.289596 34.368762 0.289596l46.209438 0c22.719444 0 42.166355-0.096191 58.33971-0.289596 16.173354-0.192382 30.420847-0.384763 42.7435-0.577145 12.323677-0.192382 23.682375-0.673335 34.08019-1.443885 10.397814-0.771573 21.179368-1.732457 32.347732-2.888793l0.001023 0.001023C739.002061 280.596699 738.52213 285.025569 738.328725 289.261033z"  ></path>' +
    '' +
    '<path d="M491.393683 520.311293l77.979002 0 0 89.532129-77.979002 0 0-89.532129Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.598168 482.945267 267.82942 134.053112c-10.614755-6.726192-24.067138-7.133468-35.033911-1.063215-11.030218 6.071276-17.859763 17.653055-17.859763 30.209022l0 697.610348c0 12.549827 6.829546 24.139793 17.859763 30.209022 5.176906 2.858094 10.903328 4.273327 16.622586 4.273327 6.415107 0 12.828167-1.786693 18.411325-5.311982l551.769772-348.747869c9.999748-6.317892 16.07307-17.316387 16.07307-29.14683C835.671239 500.263701 829.59894 489.255996 819.598168 482.945267L819.598168 482.945267zM819.598168 482.945267"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingyin" viewBox="0 0 1088 1024">' +
    '' +
    '<path d="M876.8 800c-19.2-19.2-19.2-44.8 0-64 121.6-121.6 121.6-313.6 0-435.2-19.2-19.2-19.2-44.8 0-64 19.2-19.2 44.8-19.2 64 0 76.8 76.8 121.6 172.8 121.6 275.2 0 102.4-44.8 204.8-121.6 275.2-6.4 6.4-19.2 12.8-32 12.8C896 812.8 883.2 806.4 876.8 800zM748.8 729.6c-12.8 0-25.6-6.4-32-12.8-19.2-19.2-19.2-44.8 0-64 76.8-76.8 76.8-192 0-268.8-19.2-19.2-19.2-44.8 0-64 19.2-19.2 44.8-19.2 64 0 115.2 108.8 115.2 281.6 0 390.4C768 723.2 761.6 729.6 748.8 729.6L748.8 729.6zM512 70.4c57.6-44.8 102.4-19.2 102.4 51.2l0 800c0 70.4-44.8 89.6-96 44.8l-230.4-192-128 0c-70.4 0-128-57.6-128-128L32 384c0-70.4 57.6-128 128-128l121.6 0L512 70.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang" viewBox="0 0 1090 1024">' +
    '' +
    '<path d="M953.6 512l121.6-121.6c19.2-19.2 19.2-51.2 0-70.4-19.2-19.2-51.2-19.2-70.4 0l-121.6 121.6L761.6 320c-19.2-19.2-51.2-19.2-70.4 0-19.2 19.2-19.2 51.2 0 70.4L806.4 512l-121.6 121.6c-19.2 19.2-19.2 51.2 0 70.4 19.2 19.2 51.2 19.2 70.4 0l121.6-121.6 121.6 121.6c19.2 19.2 51.2 19.2 70.4 0 19.2-19.2 19.2-51.2 0-70.4L953.6 512zM512 70.4c57.6-44.8 102.4-19.2 102.4 51.2l0 800c0 70.4-44.8 89.6-96 44.8l-230.4-192-128 0c-70.4 0-128-57.6-128-128L32 384c0-70.4 57.6-128 128-128l121.6 0L512 70.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lajitong" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M843 326.7c-20.2 0-38 16.4-38 36.6l0 547.6c0 20.2-16.7 36.1-36.9 36.1L256.1 947c-20.2 0-37.1-16-37.1-36.1L219 361.7c0-20.2-14.8-36.6-35-36.6s-35 16.4-35 36.6l0 549.1c0 60.5 46.6 113.1 107.1 113.1l512.1 0c60.5 0 112.9-52.7 112.9-113.1L881.1 363.2C881 343.1 863.2 326.7 843 326.7z"  ></path>' +
    '' +
    '<path d="M436 764.6 436 362.3c0-20.2-14.8-36.6-35-36.6s-35 16.3-35 36.6l0 402.3c0 20.2 14.8 36.6 35 36.6S436 784.8 436 764.6z"  ></path>' +
    '' +
    '<path d="M658 764.6 658 362.3c0-20.2-17.8-36.6-38-36.6s-38 16.3-38 36.6l0 402.3c0 20.2 17.8 36.6 38 36.6S658 784.8 658 764.6z"  ></path>' +
    '' +
    '<path d="M987.4 181 805 181l0-74.7C805 45.8 755.7 0 695.7 0L329.1 0C268.7 0 219 45.8 219 106.3L219 181 36.6 181C16.3 181 0 195.8 0 216s16.3 35 36.6 35l950.9 0c20.2 0 36.6-14.8 36.6-35S1007.7 181 987.4 181zM729 181 290 181l0-74.7c0-20.2 19-36.3 39.1-36.3l366.6 0c20 0 33.3 15.8 33.3 36.3L729 181z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonthaofang26" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.688832 567.04c28.4928-28.522496 28.4928-74.771456 0-103.293952L574.322688 96.01536c-1.96608-2.564096-3.827712-5.211136-6.182912-7.550976l-1.03936-1.069056c-14.429184-14.429184-33.3824-21.4272-52.296704-21.240832-18.90816-0.186368-37.860352 6.810624-52.289536 21.240832l-1.03936 1.069056c-2.3552 2.33984-4.216832 4.98688-6.182912 7.550976L87.92576 463.747072c-28.4928 28.522496-28.4928 74.771456 0 103.293952l1.046528 1.024c28.499968 28.514304 74.703872 28.514304 103.195648 0l322.634752-322.93376 322.64192 322.93376c28.4928 28.514304 74.696704 28.514304 103.195648 0L941.688832 567.04zM87.92576 837.55008c-28.4928 28.529664-28.4928 74.763264 0 103.28576l1.046528 1.061888c28.499968 28.507136 74.703872 28.507136 103.195648 0l322.634752-322.956288 322.64192 322.956288c28.4928 28.507136 74.696704 28.507136 103.195648 0l1.046528-1.061888c28.4928-28.522496 28.4928-74.756096 0-103.28576L574.322688 469.855232c-1.96608-2.593792-3.827712-5.226496-6.182912-7.596032l-1.03936-1.024c-14.429184-14.45888-33.3824-21.44256-52.296704-21.284864-18.90816-0.156672-37.860352 6.825984-52.289536 21.284864l-1.03936 1.024c-2.3552 2.369536-4.216832 5.00224-6.182912 7.596032L87.92576 837.55008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuidahua" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1024 38.4c0-27.2-22.4-38.4-48.8-38.4L592.8 0c-21.6 0-39.2 17.6-39.2 39.2s17.6 39.2 39.2 39.2l297.6 0L562.4 408c-15.2 15.2-15.2 38.4 0 53.6 15.2 15.2 38.4 15.2 53.6 0l330.4-331.2 0 303.2c0 22.4 17.6 39.2 39.2 39.2 21.6 0 39.2-17.6 39.2-39.2L1024.8 38.4"  ></path>' +
    '' +
    '<path d="M0 985.6c0 27.2 22.4 38.4 48.8 38.4l382.4 0c21.6 0 39.2-17.6 39.2-39.2 0-22.4-17.6-39.2-39.2-39.2L134.4 945.6l328-328.8c15.2-15.2 15.2-38.4 0-53.6-15.2-15.2-38.4-15.2-53.6 0L78.4 894.4 78.4 591.2c0-22.4-17.6-39.2-39.2-39.2-21.6 0-39.2 17.6-39.2 39.2L0 985.6"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuixiaohua" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M473 589.6c0-27.2-22.4-38.4-48.8-38.4L41.8 551.2c-21.6 0-39.2 17.6-39.2 39.2 0 22.4 17.6 39.2 39.2 39.2l297.6 0-328 328.8c-15.2 15.2-15.2 38.4 0 53.6 15.2 15.2 38.4 15.2 53.6 0l330.4-331.2 0 303.2c0 22.4 17.6 39.2 39.2 39.2s39.2-17.6 39.2-39.2L473.8 589.6M983.4 393.6 685 393.6l328-328.8c15.2-15.2 15.2-38.4 0-53.6-15.2-15.2-38.4-15.2-53.6 0L630.6 342.4 630.6 39.2c0-22.4-18.4-39.2-39.2-39.2C569 0 552.2 17.6 552.2 39.2l0 393.6c0 0.8 0.8 1.6 0.8 2.4 0 10.4 3.2 20.8 11.2 27.2 9.6 10.4 23.2 13.6 36 9.6l382.4 0c21.6 0 39.2-17.6 39.2-39.2C1022.6 411.2 1004.2 393.6 983.4 393.6L983.4 393.6zM983.4 393.6"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1356 1024">' +
    '' +
    '<path d="M216.865475 222.645343c0 15.292568 6.261524 30.464722 17.098777 41.301976 10.837253 10.837253 26.009407 17.098777 41.301976 17.098777 15.292568 0 30.464722-6.261524 41.301976-17.098777 10.837253-10.837253 17.098777-26.009407 17.098777-41.301976 0-15.292568-6.261524-30.464722-17.098777-41.301976-10.837253-10.837253-26.009407-17.098777-41.301976-17.098777-15.292568 0-30.464722 6.261524-41.301976 17.098777C223.247413 192.180621 216.865475 207.352775 216.865475 222.645343L216.865475 222.645343zM216.865475 222.645343"  ></path>' +
    '' +
    '<path d="M209.520226 512.361242c0 15.292568 6.261524 30.585136 17.098777 41.422389 10.837253 10.837253 26.009407 17.098777 41.422389 17.098777 15.292568 0 30.585136-6.261524 41.422389-17.098777 10.837253-10.837253 17.098777-26.009407 17.098777-41.422389 0-15.292568-6.261524-30.585136-17.098777-41.422389-10.837253-10.837253-26.009407-17.098777-41.422389-17.098777-15.292568 0-30.585136 6.261524-41.422389 17.098777C215.78175 481.776105 209.520226 496.94826 209.520226 512.361242L209.520226 512.361242zM209.520226 512.361242"  ></path>' +
    '' +
    '<path d="M209.520226 803.401693c0 15.292568 6.261524 30.585136 17.098777 41.422389 10.837253 10.837253 26.009407 17.098777 41.422389 17.098777 15.292568 0 30.585136-6.261524 41.422389-17.098777 10.837253-10.837253 17.098777-26.009407 17.098777-41.422389 0-15.292568-6.261524-30.585136-17.098777-41.422389-10.837253-10.837253-26.009407-17.098777-41.422389-17.098777-15.292568 0-30.585136 6.261524-41.422389 17.098777C215.78175 772.936971 209.520226 788.109125 209.520226 803.401693L209.520226 803.401693zM209.520226 803.401693"  ></path>' +
    '' +
    '<path d="M1145.377234 219.996237c0 30.825964-22.878645 55.751646-51.175917 55.751646L487.555974 275.747883c-28.297272 0-51.175917-24.925682-51.175917-55.751646l0 0c0-30.825964 22.878645-55.751646 51.175917-55.751646l606.645343 0C1122.498589 164.244591 1145.377234 189.170273 1145.377234 219.996237L1145.377234 219.996237 1145.377234 219.996237zM1145.377234 219.996237"  ></path>' +
    '' +
    '<path d="M1145.377234 509.712135c0 30.70555-22.878645 55.751646-51.175917 55.751646L487.555974 565.463782c-28.297272 0-51.175917-24.925682-51.175917-55.751646l0 0c0-30.825964 22.878645-55.751646 51.175917-55.751646l606.645343 0C1122.498589 453.840075 1145.377234 478.886171 1145.377234 509.712135L1145.377234 509.712135 1145.377234 509.712135zM1145.377234 509.712135"  ></path>' +
    '' +
    '<path d="M1145.377234 800.632173c0 30.825964-22.878645 55.751646-51.175917 55.751646L487.555974 856.383819c-28.297272 0-51.175917-24.925682-51.175917-55.751646l0 0c0-30.70555 22.878645-55.631232 51.175917-55.631232l606.645343 0C1122.498589 744.880527 1145.377234 769.926623 1145.377234 800.632173L1145.377234 800.632173 1145.377234 800.632173zM1145.377234 800.632173"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tag35" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M364.5426 960.0055 220.322941 960.0055c-31.855522 0-57.655118-25.800619-57.655118-57.652048L162.667823 123.68702c0-31.853475 25.800619-57.644885 57.655118-57.644885l144.219659 0c31.855522 0 57.650001 25.791409 57.650001 57.644885L422.192601 902.354476C422.192601 934.205904 396.397099 960.0055 364.5426 960.0055L364.5426 960.0055z"  ></path>' +
    '' +
    '<path d="M797.11255 960.0055 652.893914 960.0055c-31.855522 0-57.655118-25.800619-57.655118-57.652048L595.238796 123.68702c0-31.853475 25.800619-57.644885 57.655118-57.644885l144.219659 0c31.855522 0 57.650001 25.791409 57.650001 57.644885L854.763574 902.354476C854.763574 934.205904 828.968072 960.0055 797.11255 960.0055L797.11255 960.0055z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-next" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M91.009 992.703c-10.595-5.485-17.19-15.925-17.19-27.269v-920.117c0-11.312 6.596-21.752 17.19-27.237 10.594-5.515 23.553-5.172 33.814 0.841l703.081 460.074c9.728 5.703 15.591 15.643 15.591 26.396 0 10.72-5.863 20.693-15.591 26.396l-703.081 460.074c-5.397 3.148-11.527 4.737-17.69 4.737-5.53 0-11.094-1.278-16.124-3.895z"  ></path>' +
    '' +
    '<path d="M792.524 928.009v-852.001c0-42.032 36.4-76.007 81.252-76.007 44.85 0 81.252 33.975 81.252 76.007v852.001c0 41.955-36.4 76.007-81.252 76.007s-81.252-34.051-81.252-76.007z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-prev" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.991148 31.296585C943.585152 36.781449 950.181419 47.221388 950.181419 58.565085L950.181419 978.682257C950.181419 989.994789 943.585152 1000.43473 932.991148 1005.919595 922.397143 1011.435623 909.437811 1011.092819 899.176951 1005.078167L196.09603 545.004C186.368202 539.300988 180.504854 529.35967 180.504854 518.60809 180.504854 507.887673 186.368202 497.915193 196.09603 492.212178L899.176951 32.138011C904.573896 28.990448 910.703761 27.401084 916.866939 27.401084 922.397143 27.401084 927.960661 28.678807 932.991148 31.296585Z"  ></path>' +
    '' +
    '<path d="M231.476008 95.991129 231.476008 947.992923C231.476008 990.024836 195.075131 1024 150.22405 1024 105.372968 1024 68.972091 990.024836 68.972091 947.992923L68.972091 95.991129C68.972091 54.035222 105.372968 19.98405 150.22405 19.98405 195.075131 19.98405 231.476008 54.035222 231.476008 95.991129Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonthaofang26-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M82.311 456.96c-28.493 28.523-28.494 74.771 0 103.294l367.366 367.731c1.966 2.564 3.828 5.211 6.183 7.55l1.039 1.069c14.429 14.429 33.382 21.427 52.297 21.241 18.907 0.186 37.86-6.811 52.29-21.241l1.039-1.069c2.355-2.34 4.217-4.987 6.183-7.55l367.366-367.732c28.493-28.523 28.494-74.771 0-103.294l-1.047-1.024c-28.5-28.514-74.704-28.514-103.197 0l-322.635 322.934-322.642-322.934c-28.493-28.514-74.697-28.514-103.197 0l-1.049 1.025zM936.074 186.45c28.493-28.53 28.493-74.763 0-103.286l-1.047-1.062c-28.5-28.507-74.704-28.507-103.197 0l-322.635 322.956-322.642-322.956c-28.493-28.507-74.697-28.507-103.197 0l-1.047 1.062c-28.493 28.523-28.493 74.756 0 103.286l367.364 367.695c1.966 2.594 3.828 5.226 6.183 7.596l1.039 1.024c14.429 14.459 33.382 21.443 52.297 21.285 18.908 0.157 37.86-6.826 52.29-21.285l1.039-1.024c2.355-2.37 4.217-5.002 6.183-7.596l367.366-367.696z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinpinliebiaoxunhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M81.531 652.392c20.15-5.479 31.814-26.335 26.335-46.484-6.364-22.624-9.367-45.777-9.367-69.462 0-142.813 116.3-258.935 258.935-258.935h153.594v-0.53h245.679v66.812c0 21.387 14.848 29.694 33.228 18.382l160.665-99.686c18.206-11.312 18.382-29.87 0.353-41.712l-161.547-104.281c-18.027-11.666-32.699-3.711-32.699 17.852v67.164h-351.021v0.53h-48.429c-89.258 0-173.39 34.819-236.49 97.918-63.277 63.277-97.918 147.231-97.918 236.49 0 30.578 4.064 60.624 12.196 89.788 4.595 16.615 19.795 27.573 36.41 27.573 3.358 0 6.717-0.353 10.074-1.414zM998.319 417.671c-4.595-16.615-19.795-27.573-36.41-27.573-3.358 0-6.717 0.53-10.074 1.414-20.15 5.479-31.814 26.335-26.335 46.484 6.364 22.624 9.367 45.777 9.367 69.462 0 142.813-116.3 258.935-258.935 258.935h-153.594v0.53h-245.326v-66.812c0-21.387-14.848-29.694-33.228-18.382l-160.665 99.686c-18.206 11.312-18.382 30.048-0.53 41.712l161.547 104.458c18.027 11.666 32.699 3.711 32.699-17.852v-67.164h351.021v-0.53h48.429c89.258 0 173.39-34.819 236.49-97.918 63.277-63.277 97.918-147.231 97.918-236.49-0.177-30.754-4.419-60.978-12.372-89.964z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shunxubofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 326.4H64c-38.4 0-64-25.6-64-64s25.6-64 64-64h896c38.4 0 64 25.6 64 64s-25.6 64-64 64z" fill="" ></path>' +
    '' +
    '<path d="M915.2 300.8L806.4 166.4c-19.2-25.6-19.2-70.4 6.4-89.6 25.6-19.2 70.4-19.2 89.6 6.4l108.8 134.4c19.2 25.6 19.2 70.4-6.4 89.6-25.6 25.6-64 19.2-89.6-6.4zM960 640H64c-38.4 0-64-25.6-64-64s25.6-64 64-64h896c38.4 0 64 25.6 64 64s-25.6 64-64 64z" fill="" ></path>' +
    '' +
    '<path d="M915.2 620.8L806.4 486.4c-19.2-25.6-19.2-70.4 6.4-89.6 25.6-19.2 70.4-19.2 89.6 6.4l108.8 134.4c19.2 25.6 19.2 70.4-6.4 89.6-25.6 25.6-64 19.2-89.6-6.4zM960 960H64c-38.4 0-64-25.6-64-64s25.6-64 64-64h896c38.4 0 64 25.6 64 64s-25.6 64-64 64z" fill="" ></path>' +
    '' +
    '<path d="M915.2 934.4L806.4 800c-19.2-25.6-19.2-70.4 6.4-89.6 25.6-19.2 70.4-19.2 89.6 6.4l108.8 134.4c19.2 25.6 19.2 70.4-6.4 89.6-25.6 25.6-64 19.2-89.6-6.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suijibofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M68.253 349.325h162.675c8.156 0 32.477 8.156 40.633 16.311l56.944 56.944c16.311 24.467 48.788 24.467 73.109 0 24.467-16.311 24.467-48.788 0-73.109l-56.944-56.944c-24.321-24.321-73.109-48.788-113.887-48.788H68.254c-32.477 0-48.788 24.467-48.788 48.788 0 32.331 24.467 56.798 48.788 56.798z" fill="" ></path>' +
    '' +
    '<path d="M678.176 349.325h89.42v65.099c0 16.311 8.156 24.467 24.467 16.311l186.996-121.897c16.311-8.156 16.311-24.467 0-32.477L792.063 154.464c-16.311-8.156-24.467 0-24.467 16.311v89.275h-89.42c-81.265 0-97.575 40.633-154.519 97.575L336.661 625.594c-32.477 32.477-130.052 65.099-178.841 65.099H68.4c-32.477 0-48.788 24.321-48.788 48.788 0 32.477 24.321 48.788 48.788 48.788h89.42c81.265 0 195.152-40.633 252.095-97.575l186.996-268.26c40.633-40.633 32.477-73.109 81.265-73.109z" fill="" ></path>' +
    '' +
    '<path d="M979.059 723.317L792.063 593.265c-16.311-8.156-24.467 0-24.467 16.311v81.265h-89.42c-8.156 0-32.477-8.156-40.633-16.311l-56.944-56.944c-16.311-24.467-48.788-24.467-73.109 0-24.321 16.311-24.321 48.788 0 73.109l56.944 56.944c24.467 24.321 73.109 48.788 113.887 48.788h89.42v65.099c0 16.311 8.156 24.321 24.467 16.311L979.204 755.94c16.02-8.156 16.02-24.467-0.146-32.622z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);