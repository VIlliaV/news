!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=window.location.pathname,c=document.getElementById("home-link"),l=document.getElementById("favorite-link"),s=document.getElementById("read-link");"/index.html"===a?c.classList.add("active"):"/favorite.html"===a?l.classList.add("active"):"/read.html"===a&&s.classList.add("active");var i=localStorage.getItem("colorState")||"#fff",d=localStorage.getItem("toggleState")||"off",u=document.querySelector('.toggle input[type="checkbox"]'),m=document.getElementById("myElement"),f=document.getElementsByTagName("body")[0],h=document.getElementById("dark"),g=document.getElementById("light"),v=document.getElementById("dark_tab"),y=document.getElementById("light_tab"),b=document.querySelectorAll(".menu_link"),p=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),_=document.getElementsByTagName("input")[0],E=document.querySelector(".search-box"),k=document.querySelector(".search"),L=document.querySelector(".mob-menu"),B=document.querySelectorAll(".mob-link-text"),S=document.querySelector(".mob-logo"),w=document.querySelector(".mob-menu__x"),q=document.querySelector(".burger-icon"),I=document.querySelector(".disappearing___title");function N(){u.checked?(L.style.backgroundColor="#2E2E2E",B.forEach((function(e){e.style.color="#f4f4f4"})),S.style.color="#f4f4f4",q.style.fill="#fff",w.style.fill="#fff",I.style.color="#fff",k.classList.remove("search-icon-move-black"),k.classList.add("search-icon-move-wight"),f.style.backgroundColor="#2E2E2E",f.style.color="#fff",m.style.color="#fff",i="#2E2E2E",g.style.color="#5F6775",h.style.color="#4B48DB",y.style.color="#5F6775",v.style.color="#4B48DB",y.style.stroke="#5F6775",v.style.border="#4B48DB",b.forEach((function(e){e.classList.add("color-switch")})),p.classList.add("dark-border"),_.classList.add("background-color-search"),E.classList.add("dark-border-search")):(L.style.backgroundColor="#fff",B.forEach((function(e){e.style.color="#111321"})),S.style.color="#111321",q.style.fill="#111321",w.style.fill="#111321",I.style.color="#000",k.classList.add("search-icon-move-black"),k.classList.remove("search-icon-move-wight"),f.style.backgroundColor="#fff",f.style.color="#000",m.style.color="#000",i="#fff",g.style.color="#4B48DB",h.style.color="#5F6775",y.style.color="#4B48DB",v.style.color="#5F6775",y.style.stroke="#4B48DB",v.style.border="#4B48DB",b.forEach((function(e){e.classList.remove("color-switch")})),p.classList.remove("dark-border"),p.classList.remove("white-border"),_.classList.remove("background-color-search"),E.classList.remove("dark-border-search")),localStorage.setItem("colorState",i),localStorage.setItem("toggleState",u.checked?"on":"off")}"#2E2E2E"===i?(u.checked=!0,N()):u.checked=!1,u.checked="on"===d,u.addEventListener("click",N);var C=window.location.pathname,x=document.getElementById("mob-home-link"),T=document.getElementById("mob-favorite-link"),D=document.getElementById("mob-read-link");"/index.html"===C?x.classList.add("mob-menu__active-item"):"/favorite.html"===C?T.classList.add("mob-menu__active-item"):"/read.html"===C&&D.classList.add("mob-menu__active-item");var A=document.querySelector(".js-open-menu"),F=document.querySelector(".js-close-menu"),M=document.querySelector(".js-menu-container"),O=document.querySelector(".toggle_container"),R=document.querySelector("body");A.addEventListener("click",(function(){M.classList.remove("is-hidden"),O.classList.add("mob-swicher"),R.classList.add("no-scroll")})),F.addEventListener("click",(function(){M.classList.add("is-hidden"),O.classList.remove("mob-swicher"),R.classList.remove("no-scroll")}));var j=window.location.pathname,U=document.querySelector('.menu_list-tel li a[href="'.concat(j,'"]')),z=U?U.parentNode:null;document.getElementsByTagName("body")[0];z&&(z.style.backgroundColor="#4440f6");var H={openSearchBtn:document.querySelector("#icon-search_desk"),searchInput:document.querySelector("#search-input"),searchIcon:document.querySelector(".search"),mobMenu:document.querySelector(".mob-menu")};H.openSearchBtn.addEventListener("click",(function(){H.searchInput.classList.toggle("search-box-short"),H.openSearchBtn.classList.toggle("search-icon-move"),"background-color: rgb(46, 46, 46);"===H.mobMenu.attributes.style.nodeValue&&H.searchIcon.classList.toggle("search-icon-move-wight")}));var J=n("1t1Wn"),V=n("UL92Z"),W=n("dv3BY");function Y(){return JSON.parse(localStorage.getItem("favoriteArticles"))}n("b7ONl");var Z=[],G=[],K=document.querySelector("#favorite-list");function P(e){"BUTTON"===e.target.nodeName&&(e.preventDefault(),G=e.target.parentElement.parentElement.id,"Add to favorite"===e.target.firstChild.data.trim()?(e.target.firstChild.data="Remove from favorite",e.target.lastElementChild.lastElementChild.attributes.fill.textContent="#4b48db",Q()):(e.target.firstChild.data="Add to favorite",e.target.lastElementChild.lastElementChild.attributes.fill.textContent="transparent",function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;var t=e.target.attributes[2].nodeName,o=t.slice(0,t.length-1);(0,V.removeFromFavoriteArticles)(o)}(event)))}function Q(){var e=Z.find((function(e){return e.uri==G}));(0,V.addToReadingNews)(e)}!function(t){if(Z=t,null===t||0===t.length)return(0,W.whenNotFoundMarkup)();var o=t.map((function(t){return'<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="'.concat(t.url,'">\n          <img\n            class="favorite-cards__img" width="440"\n            src="').concat(function(e){var t=e.media.map((function(e){return e["media-metadata"][2].url}));return 0===t.length?"/image-not-found.584be82b.jpg":t}(t),'"\n            alt="').concat(t.per_facet,'"\n          \n          />\n          <p class="favorite-cards__category">').concat((l=t.subsection,l||"Other..."),'</p>\n          <button type="button" class="favorite-cards__remove-btn\n          id="').concat(t.uri.slice(38,t.uri.length),'">\n          ').concat(function(e){var t=Y();if(t){for(var o=0;o<t.length;o+=1)if(t[o].uri===e)return'Remove from favorite<svg class="favorite-cards__heart-icon" width="36" height="32">\n            <path fill="var(--few)" style="stroke: var(--few)" d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">\n          </svg>';return'Add to favorite<svg class="favorite-cards__heart-icon" width="36" height="32">\n            <path fill="transparent" style="stroke: var(--few)"  d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">\n          </svg>'}return'Add to favorite<svg class="favorite-cards__heart-icon" width="36" height="32">\n            <path fill="transparent" style="stroke: var(--few)" d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">\n          </svg>'}(t.uri),'\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">').concat(t.title,'\n        </h2>\n        <p class="favorite-cards__dicription">\n        ').concat(function(e){return e.length>110?e.substring(0,110)+"...":e}(t.abstract),'\n        </p>\n        <div class="favorite-cards__bottom" id="').concat(t.uri,'">\n          <p class="favorite-cards__date">').concat((o=t.published_date,r=e(J)(o.split("-"),3),n=r[0],a=r[1],c=r[2],"".concat(c,"/").concat(a,"/").concat(n)),'</p>\n          <a class="favorite-cards__link" href="').concat(t.url,'">\n            Read more\n          </a>\n        </div>\n      </li>');var o,r,n,a,c,l})).join("");K.innerHTML=o,K.addEventListener("click",P)}(Y()),K.addEventListener("click",(function(e){"A"===e.target.nodeName&&(G=e.target.parentElement.id,window.location.href=e.target.href,Q())}))}();
//# sourceMappingURL=favorite.734cd7bc.js.map
