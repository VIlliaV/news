// import { onAddNews } from './home';
import { removeFromFavoriteArticles, addToReadingNews } from './localStorage';
import { whenNotFoundMarkup } from './not-found-markup';
import { gerCurrentNews } from './api';
function getFavoriteArticles() {
  return JSON.parse(localStorage.getItem('favoriteArticles'));
}

let newsAll = [];
let idNews = [];

const markupList = document.querySelector('#favorite-list');
createNewsMarkup(getFavoriteArticles());

function createNewsMarkup(newsCard) {
  newsAll = newsCard;

  if (newsCard === null || newsCard.length === 0) {
    return whenNotFoundMarkup();
  }
  // console.log(newsCard);
  const newsItemsMarkup = newsCard
    .map(
      item => `<li class="favorite-cards__item">
        <a class="favorite-cards__image-link" href="${item.url}" target="_blank"
        rel="noopener noreferrer nofollow">
          <img
            class="favorite-cards__img" width="440"
            src="${getPhoto(item)}"
            alt="${item.per_facet}"
          
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection
          )}</p>
          <button type="button" class="favorite-cards__remove-btn
          id="${item.uri.slice(38, item.uri.length)}">
          ${onLoadFavorits(item.uri)}
          </button>
        </a>
        <h2 class="favorite-cards__news-title">${item.title}
        </h2>
        <p class="favorite-cards__dicription">
        ${limitText(item.abstract)}
        </p>
        <div class="favorite-cards__bottom" id="${item.uri}">
          <p class="favorite-cards__date">${reformatDate(
            item.published_date
          )}</p>
          <a class="favorite-cards__link" href="${item.url}" target="_blank"
          rel="noopener noreferrer nofollow">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  // if (newsItemsMarkup !== '') {
  markupList.innerHTML = newsItemsMarkup;
  markupList.addEventListener('click', onAddNews);
  // }
}

function onLoadFavorits(item) {
  const localRead = getFavoriteArticles();
  let result = [];
  if (localRead) {
    for (let i = 0; i < localRead.length; i += 1) {
      if (localRead[i].uri === item) {
        return (result = `Remove from favorite<svg class="favorite-cards__heart-icon" width="36" height="32">
            <path fill="var(--few)" style="stroke: var(--few)" d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">
          </svg>`);
      }
    }
    return (result = `Add to favorite<svg class="favorite-cards__heart-icon" width="36" height="32">
            <path fill="transparent" style="stroke: var(--few)"  d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">
          </svg>`);
  }
  return (result = `Add to favorite<svg class="favorite-cards__heart-icon" width="36" height="32">
            <path fill="transparent" style="stroke: var(--few)" d="M10.325 0.875c-1.472 0-2.738 1.197-3.325 2.447-0.587-1.25-1.854-2.447-3.325-2.447-2.029 0-3.675 1.647-3.675 3.675 0 4.127 4.163 5.209 7 9.289 2.682-4.055 7-5.294 7-9.289 0-2.029-1.647-3.675-3.675-3.675z">
          </svg>`);
}

function onAddNews(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.preventDefault();
    idNews = e.target.parentElement.parentElement.id;
    if (e.target.firstChild.data.trim() === 'Add to favorite') {
      e.target.firstChild.data = `Remove from favorite`;
      e.target.lastElementChild.lastElementChild.attributes.fill.textContent =
        '#4b48db';
      findIdNews();
    } else {
      e.target.firstChild.data = `Add to favorite`;
      e.target.lastElementChild.lastElementChild.attributes.fill.textContent =
        'transparent';
      deleteCard(event);
    }
  }
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

function deleteCard(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const uriId = event.target.attributes[2].nodeName;
  const uriIdClean = uriId.slice(0, uriId.length - 1);
  removeFromFavoriteArticles(uriIdClean);
}

// markupList.addEventListener('click', goToRead);

// function findIdNews() {
//   const finded = newsAll.find(option => option.uri == idNews);
//   addToFavoriteArticles(finded);
// }

// function goToRead(e) {
//   if (e.target.nodeName === 'A') {
//     idNews = e.target.parentElement.id;
//     window.location.href = e.target.href;
//     findIdNews();
//   }
// }
