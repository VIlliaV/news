!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var c={id:e,exports:{}};return o[e]=c,t.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=c);var a=localStorage.getItem("colorState")||"#fff",n=localStorage.getItem("toggleState")||"off",l=document.querySelector('.toggle input[type="checkbox"]'),s=document.getElementById("myElement"),i=document.getElementsByTagName("body")[0],d=document.getElementById("dark"),u=document.getElementById("light"),f=document.getElementById("dark_tab"),m=document.getElementById("light_tab"),g=document.querySelectorAll(".menu_link"),v=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),h=document.getElementsByTagName("input")[0],y=document.querySelector(".search-box");function b(){l.checked?(i.style.backgroundColor="#2E2E2E",i.style.color="#fff",s.style.color="#fff",a="#2E2E2E",u.style.color="#5F6775",d.style.color="#4B48DB",m.style.color="#5F6775",f.style.color="#4B48DB",m.style.stroke="#5F6775",f.style.border="#4B48DB",g.forEach((function(e){e.classList.add("color-switch")})),v.classList.add("dark-border"),h.classList.add("background-color-search"),y.classList.add("dark-border-search")):(i.style.backgroundColor="#fff",i.style.color="#000",s.style.color="#000",a="#fff",u.style.color="#4B48DB",d.style.color="#5F6775",m.style.color="#4B48DB",f.style.color="#5F6775",m.style.stroke="#4B48DB",f.style.border="#4B48DB",g.forEach((function(e){e.classList.remove("color-switch")})),v.classList.remove("dark-border"),v.classList.remove("white-border"),h.classList.remove("background-color-search"),y.classList.remove("dark-border-search")),localStorage.setItem("colorState",a),localStorage.setItem("toggleState",l.checked?"on":"off")}"#2E2E2E"===a?(l.checked=!0,b()):l.checked=!1,l.checked="on"===n,l.addEventListener("click",b);var _=document.querySelectorAll(".menu_item"),p=localStorage.getItem("activeLink");(document.querySelector(".logo").addEventListener("click",(function(){localStorage.setItem("activeLink","/index.html")})),p)&&document.querySelector('.menu_link[href="'.concat(p,'"]')).parentElement.classList.add("active");_.forEach((function(e){e.addEventListener("click",(function(e){_.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");var t=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",t)}))}));var k=window.location.pathname,E=document.querySelector('.menu_list-tel li a[href="'.concat(k,'"]')),B=E?E.parentNode:null;document.getElementsByTagName("body")[0];B&&(B.style.backgroundColor="#4440f6");var S=c("1t1Wn"),L=c("UL92Z");function w(){return JSON.parse(localStorage.getItem("favoriteArticles"))}var I=document.querySelector("#favorite-list");function q(t){var o=t.map((function(t){return'<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="'.concat(t.url,'">\n          <img\n            class="favorite-cards__img" width="440"\n            src="').concat(function(e){var t=e.media.map((function(e){return e["media-metadata"][2].url}));return 0===t.length?"/image-not-found.584be82b.jpg":t}(t),'"\n            alt="').concat(t.per_facet,'"\n          />\n          <p class="favorite-cards__category">').concat((l=t.subsection,l||"Other..."),'</p>\n          <button type="button" class="favorite-cards__remove-btn\n          id="').concat(t.uri.slice(38,t.uri.length),'">\n          Remove from favorite\n          <svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n          </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">').concat(t.title,'\n        </h2>\n        <p class="favorite-cards__dicription">\n        ').concat(function(e){return e.length>110?e.substring(0,110)+"...":e}(t.abstract),'\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">').concat((o=t.published_date,r=e(S)(o.split("-"),3),c=r[0],a=r[1],n=r[2],"".concat(n,"/").concat(a,"/").concat(c)),'</p>\n          <a class="favorite-cards__link" href="').concat(t.url,'">\n            Read more\n          </a>\n        </div>\n      </li>');var o,r,c,a,n,l})).join("");""!==o&&(I.innerHTML=o,I.addEventListener("click",N))}function N(e){if(e.preventDefault(),"BUTTON"===e.target.nodeName){var t=e.target.attributes[2].nodeName,o=t.slice(0,t.length-1);(0,L.removeFromFavoriteArticles)(o),q(w())}}q(w())}();
//# sourceMappingURL=favorite.f1af6916.js.map