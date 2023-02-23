import { getPopularNews, getNewsBySearch } from './api';
import { createWeatherCard, fetchWeatherByGeo } from './weather';
import {
  addToFavoriteArticles,
  getFavoriteArticles,
  removeFromFavoriteArticles,
  checkLocalstorage,
} from './localStorage';
import debounce from 'lodash.debounce';

let idNews = [];
let newsAll = [];
const newsCards = document.querySelector('.favorite-cards');
const inputSearch = document.querySelector('[data-search]');

inputSearch.addEventListener('input', debounce(onSearch, 500));

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

// fill = '#4b48da';style="fill: var(--color4, #4b48da)"

function generateCardsMurkup(cardsArray) {
  const markup = cardsArray
    .map((item, i) => {
      console.log(i);
      if (i !== 2) {
        return `<li class="favorite-cards__item" id="${item.uri}">
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
          )}</p><a class="favorite-cards__link" href="${
          item.url
        }" target="_blank">
            Read more
          </a>
        </div>
      </li>`;
      } else {
        createWeatherCard();
      }
    })
    .join('');
  // newsCards.insertAdjacentHTML('beforeend', markup);
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

function isMedia(item) {
  if (item.media && item.media.length !== 0) {
    return item.media.map(el => el['media-metadata'][2].url);
  } else if (!item.multimedia == '') {
    console.log(item.multimedia);
    if (item.multimedia[2].crop_name == 'blog480')
      return `https://www.nytimes.com/${item.multimedia[2].url}`;
    else return item.multimedia[2].url;
  }
  return '/main/src/images/asiabusinesswoman.jpg';
}

function onSearch(e) {
  e.preventDefault();
  const inputValue = e.target.value;
  e.target.value = '';
  if (!inputValue) {
    resetMarkup();
    return;
  }

  const currentDate = localStorage.getItem('CURRENT_DATA') || `"01/01/1997"`;

  function changeDate(date) {
    const dateParts = date.split('/');

    const year = dateParts[2].split('"');
    const month = dateParts[1];
    const day = dateParts[0].split('"');
    const fullData = [year[0], month, day[1]].join('');
    return fullData;
  }

  const clickCurrentDay = changeDate(currentDate);
  console.log(clickCurrentDay);

  const apiKey = 'ItcTRzMEchmrtb2N2HI5uMgEjAjMlgCo';
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&begin_date=${clickCurrentDay}&end_date=${clickCurrentDay}&api-key=${apiKey}`;

  function searchNews() {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        return data.response.docs;
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchNews()
    .then(data => {
      resetMarkup();
      generateCardsMurkupForInput(data);
      console.log(data);
    })
    .catch(err => console.log(err));
}

function resetMarkup() {
  newsCards.innerHTML = '';
}

function newDate(date) {
  const [year, month, other] = date.split('-');
  const day = other.split('T')[0];
  return `${day}/${month}/${year}`;
}

function generateCardsMurkupForInput(cardsArray) {
  const markup = cardsArray
    .map(
      item =>
        `<li class="favorite-cards__item" id="${item.uri}">
      <input type="submit" class="favorite-cards__remove-btn" value="Add to favorite">
        <a class="favorite-cards__image-link" >
          <img
            class="favorite-cards__img"
            src="${isMedia(item)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection_name
          )}</p>
        </a>
        <h2 class="favorite-cards__news-title">${item.headline.main}
        </h2>
        <p class="favorite-cards__dicription">
        ${limitText(item.abstract)}
        </p>
        <div class="favorite-cards__bottom">
          <p class="favorite-cards__date">${newDate(item.pub_date)}</p>
          <a class="favorite-cards__link" href="${item.web_url}">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  // newsCards.insertAdjacentHTML('beforeend', markup);
  newsCards.innerHTML = markup;
}

export { generateCardsMurkup, onLoadFavorits, onAddNews };
