!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("b7ONl",(function(r,n){e(r.exports,"getCategory",(function(){return l})),e(r.exports,"getNewsByCategory",(function(){return p})),e(r.exports,"getPopularNews",(function(){return v}));var o=i("bpxeT"),a=i("2TvXO");i("47Cdc"),i("dv3BY");var c="api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX";console.log("🚀 ~ KEY:",c);var u="https://api.nytimes.com/svc/news/v3/content/section-list.json?".concat(c),s="https://api.nytimes.com/svc/news/v3/content/all/",f="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?".concat(c);"https://api.nytimes.com/svc/search/v2/articlesearch.json?".concat(c,"&sort=relevance");function l(){return h.apply(this,arguments)}function h(){return(h=t(o)(t(a).mark((function e(){var r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u)).then((function(t){if(!t.ok)throw new Error("Something went wrong 404");return t.json()})).then((function(t){return t.results}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=t(o)(t(a).mark((function e(r){var n,o,i;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(r,".json?").concat(c));case 2:if((n=t.sent).ok){t.next=6;break}return o=new Error("Something went wrong 404"),t.abrupt("return",o);case 6:return t.next=8,n.json();case 8:return i=t.sent,t.abrupt("return",i.results);case 10:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=t(o)(t(a).mark((function e(){var r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f)).then((function(t){if(!t.ok)throw new Error("Something went wrong 404");return t.json()})).then((function(t){return t.results}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}})),i.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=m.prototype=y.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,u(_,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("47Cdc",(function(e,r){var n=i("1t1Wn"),o=i("UL92Z");function a(){return JSON.parse(localStorage.getItem("favoriteArticles"))}var c=document.querySelector("#favorite-list");function u(e){var r=e.map((function(e){return'<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="'.concat(e.url,'">\n          <img\n            class="favorite-cards__img" width="440"\n            src="').concat(function(t){var e=t.media.map((function(t){return t["media-metadata"][2].url}));return 0===e.length?"/image-not-found.584be82b.jpg":e}(e),'"\n            alt="').concat(e.per_facet,'"\n          />\n          <p class="favorite-cards__category">').concat((u=e.subsection,u||"Other..."),'</p>\n          <button type="button" class="favorite-cards__remove-btn\n          id="').concat(e.uri.slice(38,e.uri.length),'">\n          Remove from favorite\n          <svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n          </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">').concat(e.title,'\n        </h2>\n        <p class="favorite-cards__dicription">\n        ').concat(function(t){return t.length>110?t.substring(0,110)+"...":t}(e.abstract),'\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">').concat((r=e.published_date,o=t(n)(r.split("-"),3),i=o[0],a=o[1],c=o[2],"".concat(c,"/").concat(a,"/").concat(i)),'</p>\n          <a class="favorite-cards__link" href="').concat(e.url,'">\n            Read more\n          </a>\n        </div>\n      </li>');var r,o,i,a,c,u})).join("");c.innerHTML=r}u(a()),c.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;var e=t.target.attributes[2].nodeName,r=e.slice(0,e.length-1);(0,o.removeFromFavoriteArticles)(r),u(a())}))})),i.register("1t1Wn",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return r.default(t)||n.default(t,e)||a.default(t,e)||o.default()};var r=c(i("8slrw")),n=c(i("7AJDX")),o=c(i("ifqQW")),a=c(i("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),i.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),i.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),i.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),i.register("UL92Z",(function(t,r){e(t.exports,"getFavoriteArticles",(function(){return n})),e(t.exports,"addToFavoriteArticles",(function(){return o})),e(t.exports,"removeFromFavoriteArticles",(function(){return a}));i("b7ONl");function n(){return JSON.parse(localStorage.getItem("favoriteArticles"))}function o(t){var e=n();null===e?e=[t]:e.push(t),localStorage.setItem("favoriteArticles",JSON.stringify(e))}function a(t){var e=n(),r=0;e.map((function(e,n){e.uri.slice(38,e.uri.length)===t&&(r=n)})),e.splice(r,1),localStorage.setItem("favoriteArticles",JSON.stringify(e))}})),i.register("dv3BY",(function(t,e){document.querySelector("#favorite-galery-section")}))}();
//# sourceMappingURL=index.6b393e2d.js.map
