var e=localStorage.getItem("colorState")||"#fff",t=localStorage.getItem("toggleState")||"off",o=document.querySelector('.toggle input[type="checkbox"]'),r=document.getElementById("myElement"),n=document.getElementsByTagName("body")[0],c=document.getElementById("dark"),a=document.getElementById("light"),l=document.getElementById("dark_tab"),s=document.getElementById("light_tab"),i=document.querySelectorAll(".menu_link"),d=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),u=document.getElementsByTagName("input")[0],m=document.querySelector(".search-box");function f(){o.checked?(n.style.backgroundColor="#2E2E2E",n.style.color="#fff",r.style.color="#fff",e="#2E2E2E",a.style.color="#5F6775",c.style.color="#4B48DB",s.style.color="#5F6775",l.style.color="#4B48DB",s.style.stroke="#5F6775",l.style.border="#4B48DB",i.forEach((function(e){e.classList.add("color-switch")})),d.classList.add("dark-border"),u.classList.add("background-color-search"),m.classList.add("dark-border-search")):(n.style.backgroundColor="#fff",n.style.color="#000",r.style.color="#000",e="#fff",a.style.color="#4B48DB",c.style.color="#5F6775",s.style.color="#4B48DB",l.style.color="#5F6775",s.style.stroke="#4B48DB",l.style.border="#4B48DB",i.forEach((function(e){e.classList.remove("color-switch")})),d.classList.remove("dark-border"),d.classList.remove("white-border"),u.classList.remove("background-color-search"),m.classList.remove("dark-border-search")),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",o.checked?"on":"off")}"#2E2E2E"===e?(o.checked=!0,f()):o.checked=!1,o.checked="on"===t,o.addEventListener("click",f);const g=document.querySelectorAll(".menu_item"),h=localStorage.getItem("activeLink");if(document.querySelector(".logo").addEventListener("click",(()=>{localStorage.setItem("activeLink","/index.html")})),h){document.querySelector(`.menu_link[href="${h}"]`).parentElement.classList.add("active")}g.forEach((function(e){e.addEventListener("click",(function(e){g.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");const t=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",t)}))}));const y=window.location.pathname,v=document.querySelector(`.menu_list-tel li a[href="${y}"]`),b=v?v.parentNode:null;document.getElementsByTagName("body")[0];b&&(b.style.backgroundColor="#4440f6");const _=document.querySelector("#favorite-galery-section");function k(){return JSON.parse(localStorage.getItem("favoriteArticles"))}function S(){0===(k()||{}).length&&(_.innerHTML='<img\n    class="not-found__img"\n    src="/image-not-found.584be82b.jpg"\n    alt="Something went wrong"\n  />')}function E(e){let t=k(),o=0;t.map(((t,r)=>{t.uri.slice(38,t.uri.length)===e&&(o=r)})),t.splice(o,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)),S()}function p(){return JSON.parse(localStorage.getItem("favoriteArticles"))}S();const B=document.querySelector("#favorite-list");function L(e){const t=e.map((e=>{return`<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="${e.url}">\n          <img\n            class="favorite-cards__img" width="440"\n            src="${function(e){const t=e.media.map((e=>e["media-metadata"][2].url));return 0===t.length?"/image-not-found.584be82b.jpg":t}(e)}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${t=e.subsection,t||"Other..."}</p>\n          <button type="button" class="favorite-cards__remove-btn\n          id="${e.uri.slice(38,e.uri.length)}">\n          Remove from favorite\n          <svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n          </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${function(e){return e.length>110?e.substring(0,110)+"...":e}(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,o,r]=e.split("-");return`${r}/${o}/${t}`}(e.published_date)}</p>\n          <a class="favorite-cards__link" href="${e.url}">\n            Read more\n          </a>\n        </div>\n      </li>`;var t})).join("");""!==t&&(B.innerHTML=t,B.addEventListener("click",I))}function I(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=e.target.attributes[2].nodeName;E(t.slice(0,t.length-1)),L(p())}L(p());
//# sourceMappingURL=favorite.c5cbb539.js.map