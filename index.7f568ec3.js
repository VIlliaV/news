async function e(){return await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX").then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results))}const t=document.querySelector(".favorite-cards");window.addEventListener("load",(()=>{e().then((e=>{var n;n=e,t.insertAdjacentHTML("beforeend",n.map((e=>{return`<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="${e.url}">\n          <img\n            class="favorite-cards__img"\n            src="${e.media.map((e=>e["media-metadata"][2].url))}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${t=e.subsection,t||"Other..."}</p>\n          <button type="button" class="favorite-cards__remove-btn id="remove-btn">\n            Remove from favorite\n            <svg class="favorite-cards__heart-icon" width="32" height="32">\n              <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n            </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${function(e){return e.length>110?e.substring(0,110)+"...":e}(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,n,a]=e.split("-");return`${a}/${n}/${t}`}(e.published_date)}</p>\n          <a class="favorite-cards__link" href="${e.url}">\n            Read more\n          </a>\n        </div>\n      </li>`;var t})).join("")),console.log(e)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.7f568ec3.js.map