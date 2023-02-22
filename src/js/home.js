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
      <input type="submit" class="favorite-cards__remove-btn" value="${onLoadFavorits(
        item.uri
      )}">
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
  if (e.target.nodeName === 'INPUT') {
    e.preventDefault();
    idNews = e.target.parentElement.id;
    if (e.target.value === 'Add to favorite') {
      e.target.value = 'Remove from favorite';
      findIdNews();
    } else {
      e.target.value = 'Add to favorite';
      deleteCard();
    }
  }
}

function deleteCard(event) {
  const uriIdClean = idNews.slice(0, idNews.length - 1);
  removeFromFavoriteArticles(uriIdClean);
  createNewsMarkup(getFavoriteArticles());
}

function onLoadFavorits(item) {
  const localRead = getFavoriteArticles();
  // console.log(localRead);
  if (localRead) {
    for (let i = 0; i < localRead.length; i += 1) {
      console.log(i);
      console.log(localRead[i].uri);
      console.log(item);
      console.log(localRead[i].uri === item);
      if (localRead[i].uri === item) {
        return (result = 'Remove from favorite');
      }
    }
    return (result = 'Add to favorite');
  }
  return (result = 'Add to favorite');
}

function isMedia(item) {
  if (item.media) {
    // console.log(item.media);
    return item.media.map(el => el['media-metadata'][2].url);
  } else if (item.multimedia) {
    return item.multimedia[2].url;
  }

  return '/image-not-found.584be82b.jpg';
}

export { generateCardsMurkup };
