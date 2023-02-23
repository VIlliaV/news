import { getPopularNews } from './api';
import {
  addToFavoriteArticles,
  getFavoriteArticles,
  removeFromFavoriteArticles,
  checkLocalstorage,
} from './localStorage';

let idNews = [];
let newsAll = [];
const newsCards = document.querySelector('.favorite-cards');

window.addEventListener('load', () => {
  getPopularNews()
    .then(data => {
      generateCardsMurkup(data);
      newsAll = data;
      // onloadFavorits();
    })
    .catch(err => console.log(err));
});

function findIdNews() {
  const finded = newsAll.find(option => option.uri == idNews);
  addToFavoriteArticles(finded);
}

function generateCardsMurkup(cardsArray) {
  const markup = cardsArray
    .map(
      item => `<li class="favorite-cards__item" id="${item.uri}">
   
        <a class="favorite-cards__image-link" target="_blank" href="${
          item.url
        }">
          <img
            class="favorite-cards__img"
            src="${isMedia(item)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection
          )}</p>
             <button type="submit" class="favorite-cards__remove-btn"  id="${item.uri.slice(
               38,
               item.uri.length
             )}">
             ${onLoadFavorits(item.uri)}
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
        <div class="favorite-cards__bottom">
          <p class="favorite-cards__date">${reformatDate(
            item.published_date
          )}</p>
          <a class="favorite-cards__link" href="${item.url}" target="_blank">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  newsCards.innerHTML = markup;
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
function reformatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}

newsCards.addEventListener('click', onAddNews);

function onAddNews(e) {
  let resultMarkup = [];
  const svgUrl = document.querySelector('.favorite-cards__heart-icon');
  if (e.target.nodeName === 'BUTTON') {
    e.preventDefault();
    // console.dir(e.target.lastElementChild);
    console.dir(svgUrl.firstElementChild);
    idNews = e.target.parentElement.parentElement.id;
    if (e.target.firstChild.data.trim() === 'Add to favorite') {
      e.target.firstChild.data = `Remove from favorite`;
      svgUrl.firstElementChild.href.baseVal =
        '/sprite-full.e7f74a66.svg#heart-full';
      findIdNews();
    } else {
      e.target.firstChild.data = `Add to favorite`;
      svgUrl.firstElementChild.href.baseVal = '/sprite-full.e7f74a66.svg#heart';
      deleteCard(event);
    }
  }
}

function deleteCard(event) {
  const uriId = event.target.id;
  removeFromFavoriteArticles(uriId);
}

function onLoadFavorits(item) {
  const localRead = getFavoriteArticles();
  let result = [];
  if (localRead) {
    for (let i = 0; i < localRead.length; i += 1) {
      if (localRead[i].uri === item) {
        return (result = `Remove from favorite`);
      }
    }
    return (result = `Add to favorite`);
  }
  return (result = `Add to favorite`);
}

function isMedia(item) {
  if (item.media) {
    return item.media.map(el => el['media-metadata'][2].url);
  } else if (item.multimedia) {
    return item.multimedia[2].url;
  }

  return '/image-not-found.584be82b.jpg';
}

export { generateCardsMurkup };
