function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("7rYDH",(function(t,n){e(t.exports,"getCategory",(function(){return a})),e(t.exports,"getNewsByCategory",(function(){return c})),e(t.exports,"getPopularNews",(function(){return u})),o("fA1qS"),o("18kHv");const r="api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX";console.log("🚀 ~ KEY:",r);const i=`https://api.nytimes.com/svc/news/v3/content/section-list.json?${r}`,s=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${r}`;async function a(){return await fetch(`${i}`).then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results))}async function c(e){const t=await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${e}.json?${r}`);if(!t.ok){return new Error("Something went wrong 404")}return(await t.json()).results}async function u(){return await fetch(`${s}`).then((e=>{if(!e.ok)throw new Error("Something went wrong 404");return e.json()})).then((e=>e.results))}})),o.register("fA1qS",(function(e,t){var n=o("31u3U");function r(){return JSON.parse(localStorage.getItem("favoriteArticles"))}const i=document.querySelector("#favorite-list");function s(e){const t=e.map((e=>{return`<li class="favorite-cards__item">\n        <a class="favorite-cards__image-link" href="${e.url}">\n          <img\n            class="favorite-cards__img" width="440"\n            src="${function(e){const t=e.media.map((e=>e["media-metadata"][2].url));return 0===t.length?"/image-not-found.584be82b.jpg":t}(e)}"\n            alt="${e.per_facet}"\n          />\n          <p class="favorite-cards__category">${t=e.subsection,t||"Other..."}</p>\n          <button type="button" class="favorite-cards__remove-btn\n          id="${e.uri.slice(38,e.uri.length)}">\n          Remove from favorite\n          <svg class="favorite-cards__heart-icon" width="32" height="32">\n            <use href="/sprite-full.e7f74a66.svg#heart-full"></use>\n          </svg>\n          </button>\n        </a>\n        <h2 class="favorite-cards__news-title">${e.title}\n        </h2>\n        <p class="favorite-cards__dicription">\n        ${function(e){return e.length>110?e.substring(0,110)+"...":e}(e.abstract)}\n        </p>\n        <div class="favorite-cards__bottom">\n          <p class="favorite-cards__date">${function(e){const[t,n,r]=e.split("-");return`${r}/${n}/${t}`}(e.published_date)}</p>\n          <a class="favorite-cards__link" href="${e.url}">\n            Read more\n          </a>\n        </div>\n      </li>`;var t})).join("");i.innerHTML=t}s(r()),i.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=e.target.attributes[2].nodeName,o=t.slice(0,t.length-1);(0,n.removeFromFavoriteArticles)(o),s(r())}))})),o.register("31u3U",(function(t,n){e(t.exports,"getFavoriteArticles",(function(){return i})),e(t.exports,"addToFavoriteArticles",(function(){return a})),e(t.exports,"removeFromFavoriteArticles",(function(){return c}));o("7rYDH");var r=o("18kHv");function i(){return JSON.parse(localStorage.getItem("favoriteArticles"))}function s(){0===i().length&&(0,r.whenNotFoundMarkup)()}function a(e){let t=i();null===t?t=[e]:t.push(e),localStorage.setItem("favoriteArticles",JSON.stringify(t))}function c(e){let t=i(),n=0;t.map(((t,r)=>{t.uri.slice(38,t.uri.length)===e&&(n=r)})),t.splice(n,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)),s()}s()})),o.register("18kHv",(function(t,n){e(t.exports,"whenNotFoundMarkup",(function(){return o}));const r=document.querySelector("#favorite-galery-section");function o(){r.innerHTML='<img\n    class="not-found__img"\n    src="/image-not-found.584be82b.jpg"\n    alt="Something went wrong"\n  />'}}));
//# sourceMappingURL=index.195fb4b9.js.map