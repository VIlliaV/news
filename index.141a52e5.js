const t=document.querySelectorAll(".menu_link_tel");t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();const e=document.querySelector(".active-tel");e&&e.classList.remove("active-tel"),this.classList.add("active-tel"),window.location.href=this.getAttribute("href")}))}));const e=window.location.pathname;t.forEach((function(t){t.getAttribute("href")===e&&t.classList.add("active-tel")}));const n=document.querySelectorAll(".menu_link_tel");n.forEach((t=>{t.href===window.location.href&&(t.classList.add("active-tel"),t.style.color="#fff"),t.addEventListener("click",(e=>{e.preventDefault(),n.forEach((t=>{t.classList.remove("active-tel"),t.style.color=""})),t.classList.add("active-tel"),t.style.color="#fff",window.location.href=t.href}))}));const r=document.querySelector("#icon-search_desk"),a=document.querySelector(".search-box");r.addEventListener("click",(()=>{if(window.innerWidth<=766)if(a.classList.toggle("active"),a.classList.contains("active")){a.style.width="0",a.style.display="block";a.offsetWidth;a.style.width="180px",a.style.height="31px",a.style.position="inherit",a.focus()}else a.style.width="0",a.style.transform=translateX(0),a.style.display="none",a.blur()}));const o=document.querySelector(".search"),i=document.querySelector(".search-box");o.addEventListener("click",(()=>{i.classList.toggle("active-input"),o.classList.toggle("active-input")}));async function s(t){const e=await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${t}.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX`);if(!e.ok){return new Error("Something went wrong 404")}return(await e.json()).results}async function c(){return await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((t=>{if(!t.ok)throw new Error("Something went wrong 404");return t.json()})).then((t=>t.results))}const l=document.querySelector("#favorite-galery-section");function u(){return JSON.parse(localStorage.getItem("favoriteArticles"))}function d(){0===(u()||{}).length&&(l.innerHTML='<img\n    class="not-found__img"\n    src="/image-not-found.584be82b.jpg"\n    alt="Something went wrong"\n  />')}function f(t){let e=u();null===e?e=[t]:e.push(t),localStorage.setItem("favoriteArticles",JSON.stringify(e))}let h=[],m=[];const g=document.querySelector(".favorite-cards");function v(){f(m.find((t=>t.uri==h)))}function w(t){const e=t.map((t=>{return`<li class="favorite-cards__item" id="${t.uri}">\n      <input type="submit" class="favorite-cards__remove-btn" value="${function(t){const e=u();if(e){for(let n=0;n<e.length;n+=1)if(e[n].uri===t)return result="Remove from favorite";return result="Add to favorite"}return result="Add to favorite"}(t.uri)}">\n        <a class="favorite-cards__image-link" target="_blank" href="${t.url}">\n          <img\n            class="favorite-cards__img"\n            src="${function(t){if(t.media)return t.media.map((t=>t["media-metadata"][2].url));if(t.multimedia)return t.multimedia[2].url;return"/image-not-found.584be82b.jpg"}(t)}"\n            alt="${t.per_facet}"\n          />\n          <p class="favorite-cards__category">${e=t.subsection,e||"Other..."}</p>\n        </a>\n        <h2 class="favorite-cards__news-title">${t.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${function(t){return t.length>110?t.substring(0,110)+"...":t}(t.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(t){const[e,n,r]=t.split("-");return`${r}/${n}/${e}`}(t.published_date)}</p>\n          <a class="favorite-cards__link" href="${t.url}" target="_blank">\n            Read more\n          </a>\n        </div>\n      </li>`;var e})).join("");g.innerHTML=e}window.addEventListener("load",(()=>{c().then((t=>{w(t),m=t})).catch((t=>console.log(t)))})),g.addEventListener("click",(function(t){"INPUT"===t.target.nodeName&&(t.preventDefault(),h=t.target.parentElement.id,"Add to favorite"===t.target.value?(t.target.value="Remove from favorite",v()):(t.target.value="Add to favorite",function(t){let e=u(),n=0;e.map(((e,r)=>{e.uri.slice(38,e.uri.length)===t&&(n=r)})),e.splice(n,1),localStorage.setItem("favoriteArticles",JSON.stringify(e)),d()}(h.slice(0,h.length-1)),createNewsMarkup(u())))}));const y=document.querySelectorAll(".menu_item"),b=localStorage.getItem("activeLink");if(document.querySelector(".logo").addEventListener("click",(()=>{localStorage.setItem("activeLink","/index.html")})),b){document.querySelector(`.menu_link[href="${b}"]`).parentElement.classList.add("active")}y.forEach((function(t){t.addEventListener("click",(function(t){y.forEach((function(t){t.classList.remove("active")})),this.classList.add("active");const e=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",e)}))}));var p=localStorage.getItem("colorState")||"#fff",S=localStorage.getItem("toggleState")||"off",k=document.querySelector('.toggle input[type="checkbox"]'),T=document.getElementById("myElement"),C=document.getElementsByTagName("body")[0],M=document.getElementById("dark"),D=document.getElementById("light"),L=document.getElementById("dark_tab"),E=document.getElementById("light_tab"),_=document.querySelectorAll(".menu_link"),x=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),P=document.getElementsByTagName("input")[0],q=document.querySelector(".search-box");function U(){k.checked?(C.style.backgroundColor="#2E2E2E",C.style.color="#fff",T.style.color="#fff",p="#2E2E2E",D.style.color="#5F6775",M.style.color="#4B48DB",E.style.color="#5F6775",L.style.color="#4B48DB",E.style.stroke="#5F6775",L.style.border="#4B48DB",_.forEach((function(t){t.classList.add("color-switch")})),x.classList.add("dark-border"),P.classList.add("background-color-search"),q.classList.add("dark-border-search")):(C.style.backgroundColor="#fff",C.style.color="#000",T.style.color="#000",p="#fff",D.style.color="#4B48DB",M.style.color="#5F6775",E.style.color="#4B48DB",L.style.color="#5F6775",E.style.stroke="#4B48DB",L.style.border="#4B48DB",_.forEach((function(t){t.classList.remove("color-switch")})),x.classList.remove("dark-border"),x.classList.remove("white-border"),P.classList.remove("background-color-search"),q.classList.remove("dark-border-search")),localStorage.setItem("colorState",p),localStorage.setItem("toggleState",k.checked?"on":"off")}"#2E2E2E"===p?(k.checked=!0,U()):k.checked=!1,k.checked="on"===S,k.addEventListener("click",U);const W=document.querySelector(".month__data"),N=document.querySelector(".day"),Y=document.querySelector(".month__arrow--prev"),B=document.querySelector(".month__arrow--next"),O=document.querySelector(".calendar__input"),$=document.querySelector(".picker"),A=document.querySelector(".calendar__down"),F=document.querySelector(".calendar__up"),j=document.querySelector(".calendar__icon--start");let H=new Date,I=H.getFullYear(),G=H.getMonth(),z=H.getDate(),R="";const Q=["January","February","March","April","May","June","July","August","September","October","November","December"];function X(){let t=new Date(I,G,0).getDay(),e=new Date(I,G+1,0).getDate(),n=new Date(I,G,0).getDate(),r=new Date(I,G,e).getDay(),a="";for(let e=t;e>0;e-=1)a+=`<li class="day__item inactive--prev">${n-e+1}</li>`;for(let t=1;t<=e;t+=1)a+=`<li class="day__item">${t}</li>`;for(let t=r;t<7;t+=1)a+=`<li class="day__item inactive--next">${t-r+1}</li>`;W.innerText=`${Q[G]} ${I}`,N.innerHTML=a}function J(t,e,n){return O.attributes[2].textContent=`${n.toString().padStart(2,"0")}/${(e+1).toString().padStart(2,"0")}/${t}`,R=O.attributes[2].textContent,$.classList.add("hidden"),A.classList.remove("hidden"),F.classList.add("hidden"),O.style.backgroundColor="#ffffff",j.style.fill="#4440f6",A.style.fill="#a2a2a2",R}O.addEventListener("click",(()=>{$.classList.toggle("hidden"),A.classList.toggle("hidden"),F.classList.toggle("hidden"),$.classList.contains("hidden")||(O.style.backgroundColor="#4440f6",F.style.fill="#ffffff",j.style.fill="#ffffff")})),X(),Y.addEventListener("click",(()=>{G-=1,G<0||G>11?(H=new Date(I,G,(new Date).getDate()),I=H.getFullYear(),G=H.getMonth()):H=new Date,X()})),B.addEventListener("click",(()=>{G+=1,G<0||G>11?(H=new Date(I,G,(new Date).getDate()),I=H.getFullYear(),console.log(I),G=H.getMonth()):H=new Date,X()})),N.addEventListener("click",(t=>{if("LI"===t.target.nodeName)return t.target.classList.contains("inactive--prev")?(z=+t.target.textContent,J(I,G-1,z)):t.target.classList.contains("inactive--next")?(z=+t.target.textContent,J(I,G+1,z)):(z=+t.target.textContent,J(I,G,z))}));const K=document.querySelector(".categoryBtns-wrapper"),Z=document.querySelector("#myDropdown"),V=document.querySelector("#othersButton"),tt=document.querySelector(".otherBtn-wrapper"),et=document.querySelector("#othersButton span");(async function(){return await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((t=>{if(!t.ok)throw new Error("Something went wrong 404");return t.json()})).then((t=>t.results))})().then((t=>t.map((t=>t.display_name)))).then((t=>(t.sort((()=>Math.random()-.5)).slice(0,6).forEach((t=>{const e=document.createElement("button");e.classList.add("filter-category__item-bt"),e.textContent=t,K.appendChild(e)})),t))).then((t=>{const e=t.sort((()=>Math.random()-.5)).slice(0,13),n=document.querySelector(".sections-list");e.forEach((t=>{const e=document.createElement("li");e.textContent=t,e.classList.add("sections-listItem"),n.appendChild(e)}))})).catch((t=>(console.error(t),[]))),V.addEventListener("click",(()=>{Z.classList.toggle("hidden"),V.classList.toggle("is-open")})),tt.addEventListener("click",(t=>{"LI"===t.target.tagName&&(et.innerText=t.target.innerText,Z.classList.toggle("hidden"))})),window.addEventListener("resize",(function(){window.innerWidth>=320&&window.innerWidth<768?et.innerText="Categories":et.innerText="Others"}));const nt=document.querySelector(".categoryBtns-wrapper"),rt=document.querySelector(".sections-list");function at(t){const e=encodeURIComponent(t.target.innerText.toLowerCase());console.log(e),s(e).then((t=>{console.log(t),w(t),newsAll=t}))}nt.addEventListener("click",at),rt.addEventListener("click",at);const ot=window.location.pathname,it=document.querySelector(`.menu_list-tel li a[href="${ot}"]`),st=it?it.parentNode:null;document.getElementsByTagName("body")[0];function ct(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ut(t){return ct(1,arguments),t instanceof Date||"object"===lt(t)&&"[object Date]"===Object.prototype.toString.call(t)}function dt(t){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t){ct(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===dt(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function ht(t){if(ct(1,arguments),!ut(t)&&"number"!=typeof t)return!1;var e=ft(t);return!isNaN(Number(e))}function mt(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function gt(t,e){ct(2,arguments);var n=ft(t).getTime(),r=mt(e);return new Date(n+r)}function vt(t,e){ct(2,arguments);var n=mt(e);return gt(t,-n)}st&&(st.style.backgroundColor="#4440f6");function wt(t){ct(1,arguments);var e=ft(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/864e5)+1}function yt(t){ct(1,arguments);var e=1,n=ft(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function bt(t){ct(1,arguments);var e=ft(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=yt(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=yt(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function pt(t){ct(1,arguments);var e=bt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=yt(n);return r}function St(t){ct(1,arguments);var e=ft(t),n=yt(e).getTime()-pt(e).getTime();return Math.round(n/6048e5)+1}var kt={};function Tt(){return kt}function Ct(t,e){var n,r,a,o,i,s,c,l;ct(1,arguments);var u=Tt(),d=mt(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:u.weekStartsOn)&&void 0!==r?r:null===(c=u.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=ft(t),h=f.getUTCDay(),m=(h<d?7:0)+h-d;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function Mt(t,e){var n,r,a,o,i,s,c,l;ct(1,arguments);var u=ft(t),d=u.getUTCFullYear(),f=Tt(),h=mt(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(d+1,0,h),m.setUTCHours(0,0,0,0);var g=Ct(m,e),v=new Date(0);v.setUTCFullYear(d,0,h),v.setUTCHours(0,0,0,0);var w=Ct(v,e);return u.getTime()>=g.getTime()?d+1:u.getTime()>=w.getTime()?d:d-1}function Dt(t,e){var n,r,a,o,i,s,c,l;ct(1,arguments);var u=Tt(),d=mt(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:u.firstWeekContainsDate)&&void 0!==r?r:null===(c=u.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=Mt(t,e),h=new Date(0);h.setUTCFullYear(f,0,d),h.setUTCHours(0,0,0,0);var m=Ct(h,e);return m}function Lt(t,e){ct(1,arguments);var n=ft(t),r=Ct(n,e).getTime()-Dt(n,e).getTime();return Math.round(r/6048e5)+1}function Et(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var _t={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Et("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Et(n+1,2)},d:function(t,e){return Et(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return Et(t.getUTCHours()%12||12,e.length)},H:function(t,e){return Et(t.getUTCHours(),e.length)},m:function(t,e){return Et(t.getUTCMinutes(),e.length)},s:function(t,e){return Et(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Et(Math.floor(r*Math.pow(10,n-3)),e.length)}},xt="midnight",Pt="noon",qt="morning",Ut="afternoon",Wt="evening",Nt="night";function Yt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+Et(o,2)}function Bt(t,e){return t%60==0?(t>0?"-":"+")+Et(Math.abs(t)/60,2):Ot(t,e)}function Ot(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Et(Math.floor(a/60),2)+n+Et(a%60,2)}var $t={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return _t.y(t,e)},Y:function(t,e,n,r){var a=Mt(t,r),o=a>0?a:1-a;return"YY"===e?Et(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Et(o,e.length)},R:function(t,e){return Et(bt(t),e.length)},u:function(t,e){return Et(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Et(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Et(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return _t.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Et(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=Lt(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Et(a,e.length)},I:function(t,e,n){var r=St(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Et(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):_t.d(t,e)},D:function(t,e,n){var r=wt(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Et(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Et(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Et(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Et(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?Pt:0===a?xt:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?Wt:a>=12?Ut:a>=4?qt:Nt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return _t.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):_t.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Et(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Et(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):_t.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):_t.s(t,e)},S:function(t,e){return _t.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Bt(a);case"XXXX":case"XX":return Ot(a);default:return Ot(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Bt(a);case"xxxx":case"xx":return Ot(a);default:return Ot(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Yt(a,":");default:return"GMT"+Ot(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Yt(a,":");default:return"GMT"+Ot(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Et(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Et((r._originalDate||t).getTime(),e.length)}},At=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Ft=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},jt={p:Ft,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return At(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",At(a,e)).replace("{{time}}",Ft(o,e))}};function Ht(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var It=["D","DD"],Gt=["YY","YYYY"];function zt(t){return-1!==It.indexOf(t)}function Rt(t){return-1!==Gt.indexOf(t)}function Qt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jt=function(t,e,n){var r,a=Xt[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Kt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var Zt={date:Kt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Kt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Kt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Vt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function te(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function ee(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(c)?re(c,(function(t){return t.test(s)})):ne(c,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(s.length);return{value:i,rest:u}}}function ne(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function re(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var ae,oe={code:"en-US",formatDistance:Jt,formatLong:Zt,formatRelative:function(t,e,n,r){return Vt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:te({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:te({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:te({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:te({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:te({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(ae={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(ae.matchPattern);if(!n)return null;var r=n[0],a=t.match(ae.parsePattern);if(!a)return null;var o=ae.valueCallback?ae.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:ee({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ee({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ee({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ee({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},ie=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,se=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ce=/^'([^]*?)'?$/,le=/''/g,ue=/[a-zA-Z]/;function de(t,e,n){var r,a,o,i,s,c,l,u,d,f,h,m,g,v,w,y,b,p;ct(2,arguments);var S=String(e),k=Tt(),T=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:oe,C=mt(null!==(o=null!==(i=null!==(s=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(l=n.locale)||void 0===l||null===(u=l.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==s?s:k.firstWeekContainsDate)&&void 0!==i?i:null===(d=k.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(C>=1&&C<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var M=mt(null!==(h=null!==(m=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(w=n.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:k.weekStartsOn)&&void 0!==m?m:null===(b=k.locale)||void 0===b||null===(p=b.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==h?h:0);if(!(M>=0&&M<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!T.localize)throw new RangeError("locale must contain localize property");if(!T.formatLong)throw new RangeError("locale must contain formatLong property");var D=ft(t);if(!ht(D))throw new RangeError("Invalid time value");var L=Ht(D),E=vt(D,L),_={firstWeekContainsDate:C,weekStartsOn:M,locale:T,_originalDate:D},x=S.match(se).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,jt[e])(t,T.formatLong):t})).join("").match(ie).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return fe(r);var o=$t[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!Rt(r)||Qt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!zt(r)||Qt(r,e,String(t)),o(E,r,T.localize,_);if(a.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return x}function fe(t){var e=t.match(ce);return e?e[1].replace(le,"'"):t}!async function(){navigator.geolocation&&await navigator.geolocation.getCurrentPosition((({coords:{latitude:t,longitude:e}})=>{(async function(t,e){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&appid=8af80306c215ce6fbaa948ab6db624b1&units=metric`;try{const t=await fetch(n);return await t.json()}catch(t){console.log(t)}})(t,e).then((t=>{me(t)}))}))}();const he=document.querySelector(".weather");function me(t){const e=t.dt,n=de(new Date(1e3*e),"dd LLL y"),r=t.name,a=Math.round(t.main.temp),o=de(new Date(t.dt),"eee"),i=t.weather[0].main,s=`<div class="weather__info">\n    <span class="weather__deg">${a}&deg;</span>\n    <div class="weather__geo">\n      <span class="weather__value">${i}</span>\n      <p class="weather__location">\n      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none"><path fill="#fff" d="M13.5 1.688a9.292 9.292 0 0 0-9.281 9.28 9.187 9.187 0 0 0 1.87 5.57s.253.333.294.38l7.117 8.395 7.12-8.398c.037-.045.291-.377.291-.377l.001-.003a9.185 9.185 0 0 0 1.87-5.566A9.292 9.292 0 0 0 13.5 1.688Zm0 12.656a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"/></svg>\n\n        <span class="weather__city">${r}</span>\n      </p>\n    </div>\n  </div>\n  <img\n    src="https://openweathermap.org/img/w/${t.weather[0].icon}.png"\n    alt="${i}"\n    class="weather__img"\n  />\n  <div class="weather__date">\n    <p class="weather__day">${o}</p>\n    <p class="weather__year">${n}</p>\n  </div>\n  <a\n    href="https://weather.com/uk-UA/weather/tenday/l/874007233ad152f9a0541234e94fc0722a06a81db728ad9e08be04b58fbe18fa"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >`;he.innerHTML=s}const ge=document.getElementById("pagination-js"),ve=document.querySelector("button.next-page"),we=document.querySelector("button.prew-page");let ye,be=0,pe=0;function Se(t){t.classList.contains("prew-page")?(ke.curPage--,Se(),ve.disabled=!1):t.classList.contains("next-page")&&(ke.curPage++,ke.curPage===ke.totalPages?ve.disabled=!0:ve.disabled=!1,we.disabled=!1),Te()}({pagination:document.querySelector(".pagination")}).pagination.addEventListener("click",(t=>{(t.target.classList.contains("next-page")||t.target.classList.contains("button-next"))&&(ke.curPage+=1),(t.target.classList.contains("prew-page")||t.target.classList.contains("button-prew"))&&(ke.curPage-=1),ye=null,window.innerWidth<768&&(be=4,pe=-1),window.innerWidth>768&&window.innerWidth<1280&&(be=7,pe=0),window.innerWidth>=1280&&(be=8,pe=1),window.scrollTo(0,0)})),document.querySelector(".pagination-page-container").addEventListener("click",(function(t){Se(t.target)}));const ke={curPage:1,numLinksTwoSide:1,totalPages:3};function Te(){const{totalPages:t,curPage:e,numLinksTwoSide:n}=ke,r=n+4;let a="",o="",i='<li class="pg-item"><a class="pg-link">...</a></li>',s=0;const c=e-n,l=e+n;let u="";for(let n=1;n<=t;n++)u=n===e?"active":"",t>=2*r-1?c>3&&l<t-3+1?n>=c&&n<=l&&(o+=Ce(n,u)):e<r&&n<=r||e>t-r&&n>=t-r+1||n===t||1===n?a+=Ce(n,u):(s++,1===s&&(a+=i)):a+=Ce(n,u);o?(o=Ce(1)+i+o+i+Ce(t),ge.innerHTML=o):ge.innerHTML=a}function Ce(t,e=""){return` <li class="pg-item ${e}" data-page="${t}">\n        <a class="pg-link" href="#">${t}</a>\n    </li>`}ge.addEventListener("click",(t=>{if(t.target.dataset.page){const e=parseInt(t.target.dataset.page,10);ke.curPage=e,Te(),handleButtonLeft(),handleButtonRight()}}));
//# sourceMappingURL=index.141a52e5.js.map
