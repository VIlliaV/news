var e=localStorage.getItem("colorState")||"#fff",t=localStorage.getItem("toggleState")||"off",o=document.querySelector('.toggle input[type="checkbox"]'),r=document.getElementById("myElement"),n=document.getElementsByTagName("body")[0],c=document.getElementById("dark"),a=document.getElementById("light"),l=document.getElementById("dark_tab"),s=document.getElementById("light_tab"),i=document.querySelectorAll(".menu_link"),d=(document.querySelectorAll(".menu_item"),document.getElementsByTagName("header")[0]),m=document.getElementsByTagName("input")[0],u=document.querySelector(".search-box");function f(){o.checked?(n.style.backgroundColor="#2E2E2E",n.style.color="#fff",r.style.color="#fff",e="#2E2E2E",a.style.color="#5F6775",c.style.color="#4B48DB",s.style.color="#5F6775",l.style.color="#4B48DB",s.style.stroke="#5F6775",l.style.border="#4B48DB",i.forEach((function(e){e.classList.add("color-switch")})),d.classList.add("dark-border"),m.classList.add("background-color-search"),u.classList.add("dark-border-search")):(n.style.backgroundColor="#fff",n.style.color="#000",r.style.color="#000",e="#fff",a.style.color="#4B48DB",c.style.color="#5F6775",s.style.color="#4B48DB",l.style.color="#5F6775",s.style.stroke="#4B48DB",l.style.border="#4B48DB",i.forEach((function(e){e.classList.remove("color-switch")})),d.classList.remove("dark-border"),d.classList.remove("white-border"),m.classList.remove("background-color-search"),u.classList.remove("dark-border-search")),localStorage.setItem("colorState",e),localStorage.setItem("toggleState",o.checked?"on":"off")}"#2E2E2E"===e?(o.checked=!0,f()):o.checked=!1,o.checked="on"===t,o.addEventListener("click",f);const y=document.querySelectorAll(".menu_item"),g=localStorage.getItem("activeLink");if(document.querySelector(".logo").addEventListener("click",(()=>{localStorage.setItem("activeLink","/index.html")})),g){document.querySelector(`.menu_link[href="${g}"]`).parentElement.classList.add("active")}y.forEach((function(e){e.addEventListener("click",(function(e){y.forEach((function(e){e.classList.remove("active")})),this.classList.add("active");const t=this.querySelector("a").getAttribute("href");localStorage.setItem("activeLink",t)}))}));const h=document.querySelector(".js-open-menu"),v=document.querySelector(".js-close-menu"),b=document.querySelector(".js-menu-container");document.querySelector(".list-news");h.addEventListener("click",(()=>{b.classList.remove("hidden"),document.body.style.overflow="hidden"})),v.addEventListener("click",(()=>{b.classList.add("hidden"),document.body.style.overflow="auto"}));const k=window.location.pathname,E=document.querySelector(`.menu_list-tel li a[href="${k}"]`),_=E?E.parentNode:null;document.getElementsByTagName("body")[0];function p(e){const t=e.map((e=>{return`<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="${e.url}">\n          <img\n            class="favorite-cards__img"\n            src="${e.media.map((e=>e["media-metadata"][2].url))}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${t=e.subsection,t||"Other..."}</p>\n          <button type="button" class="favorite-cards__remove-btn id="remove-btn">\n            Remove from favorite\n            <svg class="favorite-cards__heart-icon" width="32" height="32">\n              <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n            </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${function(e){return e.length>110?e.substring(0,110)+"...":e}(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,o,r]=e.split("-");return`${r}/${o}/${t}`}(e.published_date)}</p>\n          <a class="favorite-cards__link" href="${e.url}">\n            Read more\n          </a>\n        </div>\n      </li>`;var t})).join("");S.innerHTML=t}_&&(_.style.backgroundColor="#4440f6");const S=document.querySelector("#favorite-list"),L=document.querySelector("#favorite-galery-section");!async function(){await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((e=>{if(!e.ok)throw L.innerHTML='<img\n    class="not-found__img"\n    src="/image-not-found.584be82b.jpg"\n    alt="Something went wrong"\n  />',new Error("Something went wrong 404");return e.json()})).then((e=>{p(e.results)}))}(),S.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&(e.preventDefault(),alert("News Delete!!!"))}));
//# sourceMappingURL=favorite.7cd6f435.js.map
