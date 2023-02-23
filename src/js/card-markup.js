import { removeFromFavoriteArticles, addToReadingNews } from './localStorage';
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
          <button type="button" class="favorite-cards__remove-btn
          id="${item.uri.slice(38, item.uri.length)}">
          Remove from favorite
          <svg class="favorite-cards__heart-icon" width="32" height="32">
            <use href="/sprite-full.e7f74a66.svg#heart-full"></use>
          </svg>
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
          <a class="favorite-cards__link" href="${item.url}">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  if (newsItemsMarkup !== '') {
    markupList.innerHTML = newsItemsMarkup;
    markupList.addEventListener('click', deleteCard);
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
  createNewsMarkup(getFavoriteArticles());
}

markupList.addEventListener('click', goToRead);

function findIdNews() {
  const finded = newsAll.find(option => option.uri == idNews);
  addToReadingNews(finded);
}

function goToRead(e) {
  if (e.target.nodeName === 'A') {
    idNews = e.target.parentElement.id;
    window.location.href = e.target.href;
    findIdNews();
  }
}
