import { getPopularNews } from './api';
import { removeFromFavoriteArticles, testFavorite } from './localStorage';
console.log(testFavorite());
getPopularNews();

const markupList = document.querySelector('#favorite-list');

export function createNewsMarkup(newsCard) {
  const newsItemsMarkup = newsCard
    .map(
      item => `<li class="favorite-cards__item">
        <a class="favorite-cards__image-link" href="${item.url}">
          <img
            class="favorite-cards__img" width="440"
            src="${getPhoto(item)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection
          )}</p>
          ${buttonRemove}
        </a>
        <h2 class="favorite-cards__news-title">${item.title}
        </h2>
        <p class="favorite-cards__dicription">
        ${limitText(item.abstract)}
        </p>
        <div class="favorite-cards__bottom">
          <p class="favorite-cards__date">${reformatDate(
            item.published_date
          )}</p>
          <a class="favorite-cards__link" href="${item.url}">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  markupList.innerHTML = newsItemsMarkup;
}

function reformatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}

function addDefaultText(text) {
  if (text) {
    return text;
  } else {
    return 'Other...';
  }
}

function limitText(text) {
  if (text.length > 110) {
    return text.substring(0, 110) + '...';
  } else {
    return text;
  }
}

function getPhoto(item) {
  const photoUrl = item.media.map(el => el['media-metadata'][2].url);
  if (photoUrl.length === 0) {
    return '/image-not-found.584be82b.jpg';
  } else return photoUrl;
}

const buttonRemove = `<button type="button" class="favorite-cards__remove-btn id="remove-btn">
Remove from favorite
<svg class="favorite-cards__heart-icon" width="32" height="32">
  <use href="/sprite-full.e7f74a66.svg#heart-full"></use>
</svg>
</button>`;

export const buttonAdd = `<button type="button" class="favorite-cards__add-btn id="remove-btn">
Add to favorite
 <svg class="favorite-cards__heart-full-icon" width="32" height="32">
   <use href="/sprite-full.e7f74a66.svg#heart"></use>
 </svg>
 </button>`;

markupList.addEventListener('click', removeFromFavoriteArticles);

// function onDeleteNews(e) {
//   if (e.target.nodeName === 'BUTTON') {
//     e.preventDefault();
//     alert('News Delete!!!');
//   }
// }
