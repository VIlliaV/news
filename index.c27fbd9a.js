function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=window.location.pathname,o=document.getElementById("mob-home-link"),r=document.getElementById("mob-favorite-link"),a=document.getElementById("mob-read-link");"/index.html"===n?o.classList.add("mob-menu__active-item"):"/favorite.html"===n?r.classList.add("mob-menu__active-item"):"/read.html"===n&&a.classList.add("mob-menu__active-item");const c=document.querySelectorAll(".menu_link_tel");c.forEach((e=>{e.href===window.location.href&&(e.classList.add("active-tel"),e.style.color="#fff"),e.addEventListener("click",(t=>{t.preventDefault(),c.forEach((e=>{e.classList.remove("active-tel"),e.style.color=""})),e.classList.add("active-tel"),e.style.color="#fff",window.location.href=e.href}))}));const s=document.querySelector("#icon-search_desk"),i=document.querySelector(".search-box");s.addEventListener("click",(()=>{if(window.innerWidth<=766)if(i.classList.toggle("active"),i.classList.contains("active")){i.style.width="0",i.style.display="block";i.offsetWidth;i.style.width="180px",i.style.height="31px",i.style.position="inherit",i.focus()}else i.style.width="0",i.style.transform=translateX(0),i.style.display="none",i.blur()}));const l=document.querySelector(".search"),d=document.querySelector(".search-box");l.addEventListener("click",(()=>{d.classList.toggle("active-input"),l.classList.toggle("active-input")}));async function u(e){const t=await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${e}.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX`).then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results));return localStorage.setItem("openedNews",JSON.stringify(t)),t}async function m(){const e=await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results));return localStorage.setItem("openedNews",JSON.stringify(e)),e}function f(){return JSON.parse(localStorage.getItem("openedNews"))}const h=document.querySelector("#favorite-galery-section");function g(){return JSON.parse(localStorage.getItem("favoriteArticles"))}function y(){0===(g()||{}).length&&(h.innerHTML='<img\n    class="not-found__img"\n    src="/image-not-found.584be82b.jpg"\n    alt="Something went wrong"\n  />')}function p(e){let t=g();null===t?t=[e]:t.push(e),localStorage.setItem("favoriteArticles",JSON.stringify(t))}function v(e){let t=g(),n=0;t.map(((t,o)=>{t.uri.slice(38,t.uri.length)===e&&(n=o)})),t.splice(n,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)),y()}var _,w=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,L=/^0o[0-7]+$/i,E=parseInt,k="object"==typeof t&&t&&t.Object===Object&&t,q="object"==typeof self&&self&&self.Object===Object&&self,$=k||q||Function("return this")(),x=Object.prototype.toString,B=Math.max,C=Math.min,T=function(){return $.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==x.call(e)}(e))return NaN;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=S.test(e);return n||L.test(e)?E(e.slice(2),n?2:8):b.test(e)?NaN:+e}_=function(e,t,n){var o,r,a,c,s,i,l=0,d=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,a=r;return o=r=void 0,l=t,c=e.apply(a,n)}function h(e){return l=e,s=setTimeout(y,t),d?f(e):c}function g(e){var n=e-i;return void 0===i||n>=t||n<0||u&&e-l>=a}function y(){var e=T();if(g(e))return p(e);s=setTimeout(y,function(e){var n=t-(e-i);return u?C(n,a-(e-l)):n}(e))}function p(e){return s=void 0,m&&o?f(e):(o=r=void 0,c)}function v(){var e=T(),n=g(e);if(o=arguments,r=this,i=e,n){if(void 0===s)return h(i);if(u)return s=setTimeout(y,t),f(i)}return void 0===s&&(s=setTimeout(y,t)),c}return t=I(t)||0,D(n)&&(d=!!n.leading,a=(u="maxWait"in n)?B(I(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=i=r=s=void 0},v.flush=function(){return void 0===s?c:p(T())},v};let j=[],M=[];const N=document.querySelector(".favorite-cards");function A(){p(M.find((e=>e.uri==j)))}function O(e){const t=e.map((e=>`<li class="favorite-cards__item" id="${e.uri}">\n   \n        <a class="favorite-cards__image-link" target="_blank" href="${e.url}">\n          <img\n            class="favorite-cards__img"\n            src="${J(e)}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${F(e.subsection)}</p>\n             <button type="submit" class="favorite-cards__remove-btn"  id="${e.uri.slice(38,e.uri.length)}">\n             ${function(e){const t=g();if(t){for(let n=0;n<t.length;n+=1)if(t[n].uri===e)return'Remove from favorite<svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full" fill="var(--few)" style="stroke: var(--few)" ></use>\n          </svg>';return'Add to favorite<svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full" fill="transparent" style="stroke: var(--few)" ></use>\n          </svg>'}return'Add to favorite<svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full" fill="transparent" style="stroke: var(--few)" ></use>\n          </svg>'}(e.uri)}\n             \n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${R(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,n,o]=e.split("-");return`${o}/${n}/${t}`}(e.published_date)}</p><a class="favorite-cards__link" href="${e.url}" target="_blank">\n            Read more\n          </a>\n        </div>\n      </li>`)).join("");N.innerHTML=t}function F(e){return e||"Other..."}function R(e){return e.length>110?e.substring(0,110)+"...":e}function J(e){return e.media?e.media.map((e=>e["media-metadata"][2].url)):e.multimedia.length?"blog480"==e.multimedia[2].crop_name?`https://www.nytimes.com/${e.multimedia[2].url}`:e.multimedia[2].url:"./image-not-found.584be82b.jpg"}function G(){N.innerHTML=""}document.querySelector("[data-search]").addEventListener("input",e(_)((function(e){e.preventDefault();const t=e.target.value;if(!t)return void G();const n=function(e){const t=e.split("/"),n=t[2].split('"'),o=t[1],r=t[0].split('"');return[n[0],o,r[1]].join("")}(localStorage.getItem("CURRENT_DATA")||'"01/01/1997"');console.log(n);const o=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${t}&begin_date=${n}&end_date=${n}&api-key=ItcTRzMEchmrtb2N2HI5uMgEjAjMlgCo`;fetch(o).then((e=>e.json())).then((e=>e.response.docs)).catch((e=>{console.log(e)})).then((e=>{G(),function(e){const t=e.map((e=>`<li class="favorite-cards__item" id="${e.uri}">\n      <input type="submit" class="favorite-cards__remove-btn" value="Add to favorite">\n        <a class="favorite-cards__image-link" >\n          <img\n            class="favorite-cards__img"\n            src="${J(e)}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${F(e.subsection_name)}</p>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.headline.main}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${R(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,n,o]=e.split("-");return`${o.split("T")[0]}/${n}/${t}`}(e.pub_date)}</p>\n          <a class="favorite-cards__link" href="${e.web_url}">\n            Read more\n          </a>\n        </div>\n      </li>`)).join("");N.innerHTML=t}(e),console.log(e)})).catch((e=>console.log(e)))}),500)),window.addEventListener("load",(()=>{m().then((e=>{O(e),M=e})).catch((e=>console.log(e)))})),N.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&(e.preventDefault(),j=e.target.parentElement.parentElement.id,"Add to favorite"===e.target.firstChild.data.trim()?(e.target.firstChild.data="Remove from favorite",e.target.lastElementChild.lastElementChild.attributes.fill.textContent="#4b48db",A()):(e.target.firstChild.data="Add to favorite",e.target.lastElementChild.lastElementChild.attributes.fill.textContent="transparent",function(e){v(e.target.id)}(event)))}));const H=window.location.pathname,W=document.getElementById("home-link"),U=document.getElementById("favorite-link"),K=document.getElementById("read-link");"/index.html"===H?W.classList.add("active"):"/favorite.html"===H?U.classList.add("active"):"/read.html"===H&&K.classList.add("active");const Z=localStorage.getItem("colorState")||"#fff",P=localStorage.getItem("toggleState")||"off",X=document.querySelector('.toggle input[type="checkbox"]'),Q=document.getElementById("myElement"),Y=document.getElementsByTagName("body")[0],z=document.getElementById("dark"),V=document.getElementById("light"),ee=document.getElementById("dark_tab"),te=document.getElementById("light_tab"),ne=document.querySelectorAll(".menu_link"),oe=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),re=document.getElementsByTagName("input")[0],ae=document.querySelector(".search-box"),ce=document.querySelector(".mob-menu"),se=document.querySelectorAll(".mob-link-text"),ie=document.querySelector(".mob-logo"),le=document.querySelector(".mob-menu__x"),de=document.querySelector(".burger-icon");function ue(){X.checked?(ce.style.backgroundColor="#2E2E2E",se.forEach((e=>{e.style.color="#f4f4f4"})),ie.style.color="#f4f4f4",de.style.fill="#fff",le.style.fill="#fff",Y.style.backgroundColor="#2E2E2E",Y.style.color="#fff",Q.style.color="#fff",V.style.color="#5F6775",z.style.color="#4B48DB",te.style.color="#5F6775",ee.style.color="#4B48DB",te.style.stroke="#5F6775",ee.style.border="#4B48DB",ne.forEach((function(e){e.classList.add("color-switch")})),oe.classList.add("dark-border"),re.classList.add("background-color-search"),ae.classList.add("dark-border-search")):(ce.style.backgroundColor="#fff",se.forEach((e=>{e.style.color="#111321"})),ie.style.color="#111321",de.style.fill="#111321",le.style.fill="#111321",Y.style.backgroundColor="#fff",Y.style.color="#000",Q.style.color="#000",V.style.color="#4B48DB",z.style.color="#5F6775",te.style.color="#4B48DB",ee.style.color="#5F6775",te.style.stroke="#4B48DB",ee.style.border="#4B48DB",ne.forEach((function(e){e.classList.remove("color-switch")})),oe.classList.remove("dark-border"),oe.classList.remove("white-border"),re.classList.remove("background-color-search"),ae.classList.remove("dark-border-search")),localStorage.setItem("colorState",Z),localStorage.setItem("toggleState",X.checked?"on":"off")}"#2E2E2E"===Z?(X.checked=!0,ue()):X.checked=!1,X.checked="on"===P,X.addEventListener("click",ue);const me=document.querySelector(".month__data"),fe=document.querySelector(".day"),he=document.querySelector(".month__arrow--prev"),ge=document.querySelector(".month__arrow--next"),ye=document.querySelector(".calendar__input"),pe=document.querySelector(".calendar__text"),ve=document.querySelector(".picker"),_e=document.querySelector(".calendar__down"),we=document.querySelector(".calendar__up"),be=document.querySelector(".calendar__icon--start");let Se=new Date,Le=Se.getFullYear(),Ee=Se.getMonth(),ke=Se.getDate(),qe="";const $e=["January","February","March","April","May","June","July","August","September","October","November","December"];function xe(){let e=new Date(Le,Ee,0).getDay(),t=new Date(Le,Ee+1,0).getDate(),n=new Date(Le,Ee,0).getDate(),o=new Date(Le,Ee,t).getDay(),r="";for(let t=e;t>0;t-=1)r+=`<li class="day__item inactive--prev">${n-t+1}</li>`;for(let e=1;e<=t;e+=1)r+=`<li class="day__item">${e}</li>`;for(let e=o;e<7;e+=1)r+=`<li class="day__item inactive--next">${e-o+1}</li>`;me.innerText=`${$e[Ee]} ${Le}`,fe.innerHTML=r}function Be(e,t,n){return-1===t&&(t=11,e-=1),12===t&&(t=0,e+=1),pe.textContent=`${n.toString().padStart(2,"0")}/${(t+1).toString().padStart(2,"0")}/${e}`,qe=pe.textContent,ve.classList.add("hidden"),_e.classList.remove("hidden"),we.classList.add("hidden"),ye.classList.remove("calendar__open"),we.classList.remove("calendar__open"),be.classList.remove("calendar__open"),localStorage.setItem("CURRENT_DATA",JSON.stringify(qe)),qe}ye.addEventListener("click",(()=>{ve.classList.toggle("hidden"),_e.classList.toggle("hidden"),we.classList.toggle("hidden"),ve.classList.contains("hidden")||(ye.classList.add("calendar__open"),we.classList.add("calendar__open"),be.classList.add("calendar__open"))})),xe(),he.addEventListener("click",(()=>{Ee-=1,Ee<0||Ee>11?(Se=new Date(Le,Ee,(new Date).getDate()),Le=Se.getFullYear(),Ee=Se.getMonth()):Se=new Date,xe()})),ge.addEventListener("click",(()=>{Ee+=1,Ee<0||Ee>11?(Se=new Date(Le,Ee,(new Date).getDate()),Le=Se.getFullYear(),console.log(Le),Ee=Se.getMonth()):Se=new Date,xe()})),fe.addEventListener("click",(e=>{if("LI"===e.target.nodeName)return e.target.classList.contains("inactive--prev")?(ke=+e.target.textContent,console.log(Le,Ee,ke),Be(Le,Ee-1,ke)):e.target.classList.contains("inactive--next")?(ke=+e.target.textContent,Be(Le,Ee+1,ke)):(ke=+e.target.textContent,Be(Le,Ee,ke))}));const Ce=document.querySelector(".categoryBtns-wrapper"),Te=document.querySelector("#myDropdown"),De=document.querySelector("#othersButton"),Ie=document.querySelector(".otherBtn-wrapper"),je=document.querySelector("#othersButton span");(async function(){return await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results))})().then((e=>e.map((e=>e.display_name)))).then((e=>(e.sort((()=>Math.random()-.5)).slice(0,6).forEach((e=>{const t=document.createElement("button");t.classList.add("filter-category__item-bt"),t.textContent=e,Ce.appendChild(t)})),e))).then((e=>{const t=e.sort((()=>Math.random()-.5)).slice(0,13),n=document.querySelector(".sections-list");t.forEach((e=>{const t=document.createElement("li");t.textContent=e,t.classList.add("sections-listItem"),n.appendChild(t)}))})).catch((e=>(console.error(e),[]))),De.addEventListener("click",(()=>{Te.classList.toggle("hidden"),De.classList.toggle("is-open")})),Ie.addEventListener("click",(e=>{"LI"===e.target.tagName&&(je.innerText=e.target.innerText,Te.classList.toggle("hidden"))})),window.addEventListener("resize",(function(){window.innerWidth>=320&&window.innerWidth<768?je.innerText="Categories":je.innerText="Others"}));const Me=document.querySelector(".categoryBtns-wrapper"),Ne=document.querySelector(".sections-list");function Ae(e){const t=encodeURIComponent(e.target.innerText.toLowerCase());console.log(t),u(t).then((e=>{console.log(e),O(e),newsAll=e}))}Me.addEventListener("click",Ae),Ne.addEventListener("click",Ae);const Oe=window.location.pathname,Fe=document.querySelector(`.menu_list-tel li a[href="${Oe}"]`),Re=Fe?Fe.parentNode:null;document.getElementsByTagName("body")[0];Re&&(Re.style.backgroundColor="#4440f6");!async function(){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=8af80306c215ce6fbaa948ab6db624b1&units=metric"),t=await e.json();e.ok&&Ge(t)}catch(e){console.error(e)}}(),async function(){navigator.geolocation&&await navigator.geolocation.getCurrentPosition((({coords:{latitude:e,longitude:t}})=>{(async function(e,t){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=8af80306c215ce6fbaa948ab6db624b1&units=metric`;try{const e=await fetch(n);return await e.json()}catch(e){console.log(e)}})(e,t).then((e=>{Ge(e)}))}))}();document.querySelector(".weather");const Je=document.querySelector(".favorite-cards");function Ge(e){const t=e.dt,n=new Date(1e3*t),o=format(n,"dd LLL y"),r=e.name,a=Math.round(e.main.temp),c=format(new Date(e.dt),"eee"),s=e.weather[0].main,i=`<li class="favorite-cards__item weather" id=""><div class="weather__info">\n    <span class="weather__deg">${a}&deg;</span>\n    <div class="weather__geo">\n      <span class="weather__value">${s}</span>\n      <p class="weather__location">\n      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none"><path fill="#fff" d="M13.5 1.688a9.292 9.292 0 0 0-9.281 9.28 9.187 9.187 0 0 0 1.87 5.57s.253.333.294.38l7.117 8.395 7.12-8.398c.037-.045.291-.377.291-.377l.001-.003a9.185 9.185 0 0 0 1.87-5.566A9.292 9.292 0 0 0 13.5 1.688Zm0 12.656a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"/></svg>\n\n        <span class="weather__city">${r}</span>\n      </p>\n    </div>\n  </div>\n  <img\n    src="https://openweathermap.org/img/w/${e.weather[0].icon}.png"\n    alt="${s}"\n    class="weather__img"\n  />\n  <div class="weather__date">\n    <p class="weather__day">${c}</p>\n    <p class="weather__year">${o}</p>\n  </div>\n  <a\n    href="https://weather.com/uk-UA/weather/tenday/l/874007233ad152f9a0541234e94fc0722a06a81db728ad9e08be04b58fbe18fa"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  ></li>`;Je.insertAdjacentHTML("beforeend",i)}const He=document.querySelector(".favorite-cards__list"),We=document.querySelector(".pagination"),Ue=document.querySelector(".pagination__prev-btn"),Ke=document.querySelector(".pagination__next-btn");function Ze(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1200?8:e>=768?7:4}function Pe(e,t,n){const o=(e-1)*t,r=o+t;O(n.slice(o,r))}Ue.addEventListener("click",(()=>{const e=parseInt(We.querySelector(".active").textContent);if(1===e)return;const t=Ze(),n=f();We.querySelector(".active").classList.remove("active"),We.children[e-2].classList.add("active"),He.innerHTML="",Pe(e-1,t,n)})),Ke.addEventListener("click",(()=>{const e=parseInt(We.querySelector(".active").textContent);if(e===parseInt(We.lastElementChild.textContent))return;const t=Ze(),n=f();We.querySelector(".active").classList.remove("active"),We.children[e].classList.add("active"),He.innerHTML="",Pe(e+1,t,n)}));const Xe=document.querySelector(".js-open-menu"),Qe=document.querySelector(".js-close-menu"),Ye=document.querySelector(".js-menu-container"),ze=document.querySelector(".toggle_container"),Ve=document.querySelector("body");Xe.addEventListener("click",(()=>{Ye.classList.remove("is-hidden"),ze.classList.add("mob-swicher"),Ve.classList.add("no-scroll")})),Qe.addEventListener("click",(()=>{Ye.classList.add("is-hidden"),ze.classList.remove("mob-swicher"),Ve.classList.remove("no-scroll")}));const et={openSearchBtn:document.querySelector("#icon-search_desk"),searchInput:document.querySelector("#search-input")};et.openSearchBtn.addEventListener("click",(function(){et.searchInput.classList.toggle("search-box-short"),et.openSearchBtn.classList.toggle("search-icon-move")}));
//# sourceMappingURL=index.c27fbd9a.js.map
