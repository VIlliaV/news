!function(){function t(t){return t&&t.__esModule?t.default:t}var e=localStorage.getItem("colorState")||"#fff",r=localStorage.getItem("toggleState")||"off",n=document.querySelector('.toggle input[type="checkbox"]'),o=document.getElementById("myElement"),a=document.getElementsByTagName("body")[0],c=document.getElementById("dark"),i=document.getElementById("light"),s=document.querySelectorAll(".menu_link"),u=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),l=document.getElementsByTagName("input")[0],h=document.querySelector(".search-box");function f(){n.checked?(a.style.backgroundColor="#2E2E2E",a.style.color="#fff",o.style.color="#fff",e="#2E2E2E",i.style.color="#5F6775",c.style.color="#4B48DB",s.forEach((function(t){t.classList.add("color-switch")})),u.classList.add("dark-border"),l.classList.add("background-color-search"),h.classList.add("dark-border-search")):(a.style.backgroundColor="#fff",a.style.color="#000",o.style.color="#000",e="#fff",i.style.color="#4B48DB",c.style.color="#5F6775",s.forEach((function(t){t.classList.remove("color-switch")})),u.classList.remove("white-border"),l.classList.remove("background-color-search"),h.classList.remove("dark-border-search")),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",n.checked?"on":"off")}"#2E2E2E"===e?(n.checked=!0,f()):n.checked=!1,n.checked="on"===r,n.addEventListener("click",f);var p=document.querySelectorAll("li"),d=localStorage.getItem("activeLink");d&&document.querySelector('a[href="'.concat(d,'"]')).parentElement.classList.add("active");p.forEach((function(t){t.addEventListener("click",(function(t){p.forEach((function(t){t.classList.remove("active")})),this.classList.add("active");var e=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",e)}))}));var y={};function v(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void r(t)}i.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){v(a,n,o,c,i,"next",t)}function i(t){v(a,n,o,c,i,"throw",t)}c(void 0)}))}};var g={},m=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new O(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(I([])));E&&E!==r&&n.call(E,a)&&(w=E);var L=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,c,i){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=m,s(L,"constructor",m),s(m,"constructor",g),g.displayName=s(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,i,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(L),s(L,i,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(g);try{regeneratorRuntime=m}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=m:Function("r","regeneratorRuntime = r")(m)}var w="8af80306c215ce6fbaa948ab6db624b1",b="https://api.openweathermap.org/data/2.5/weather?";function E(){return L.apply(this,arguments)}function L(){return(L=t(y)(t(g).mark((function e(){var r,n,o;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(b,"q=London&units=metric&appid=").concat(w),t.prev=1,t.next=4,fetch(r);case 4:return n=t.sent,t.next=7,n.json();case 7:return o=t.sent,n.ok&&j(o),t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function _(t,e){return k.apply(this,arguments)}function k(){return(k=t(y)(t(g).mark((function e(r,n){var o,a,c;return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(b,"lat=").concat(r,"&lon=").concat(n,"&appid=").concat(w,"&units=metric"),t.prev=1,t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,a.ok&&j(c),t.abrupt("return",c);case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function x(){return(x=t(y)(t(g).mark((function e(){return t(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!navigator.geolocation){t.next=6;break}return t.next=3,navigator.geolocation.getCurrentPosition((function(t){var e=t.coords;_(e.latitude,e.longitude).then((function(t){return console.log(t),t}))}));case 3:return t.abrupt("return");case 6:E();case 7:return t.abrupt("return");case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}E(),function(){x.apply(this,arguments)}();var S=document.querySelector(".weather");function j(t){console.log(t);var e=t.name,r=Math.round(t.main.temp),n=t.dt,o=t.weather[0].main,a=t.weather[0].icon,c='<div class="weather__info">\n    <span class="weather__deg">'.concat(r,'</span>\n    <div class="weather__geo">\n      <span class="weather__value">').concat(o,'</span>\n      <p class="weather__location">\n        <svg>\n          <use href="./images/sprite-full.svg#geo"></use>\n        </svg>\n        <span class="weather__city">').concat(e,'</span>\n      </p>\n    </div>\n  </div>\n  <img\n    src="https://openweathermap.org/img/w/').concat(a,'.png"\n    alt="').concat(o,'"\n    class="weather__img"\n  />\n  <div class="weather__date">\n    <p class="weather__day">').concat(n,'</p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >');S.innerHTML=c}}();
//# sourceMappingURL=favorite.53d8feec.js.map
