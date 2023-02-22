import { getPopularNews, getNewsBySearch } from './api';
import {
  addToFavoriteArticles,
  getFavoriteArticles,
  removeFromFavoriteArticles,
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
      <input type="submit" class="favorite-cards__remove-btn" value="Add to favorite">
        <a class="favorite-cards__image-link" >
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
            item.published_date)
          }</p>
          <a class="favorite-cards__link" href="${item.url}">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  newsCards.insertAdjacentHTML('beforeend', markup);
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

function isMedia(item) {
  if (item.media) {
    // console.log(item.media);
    return item.media.map(el => el['media-metadata'][2].url);
  } else if (item.multimedia) {
    return item.multimedia[2].url;
  }

  return '/image-not-found.584be82b.jpg';
}

function onSearch(e) {
  e.preventDefault();

  const inputValue = e.target.value;

  if (!inputValue) {
    resetMarkup();
    return;
  }

  const currentDate = localStorage.getItem('CURRENT_DATA');
  console.log(currentDate);
  function changeDate(date) {
    const dateParts = date.split("/");
    const year = dateParts[2].toString();
    const month = dateParts[1].toString();
    const day = dateParts[0].toString();
    const fullData = [year, month, day].join("");
    // const fullFulldata = fullData.split('""');
    return fullData;

  }
  const clickCurrentDay = changeDate(currentDate);
  console.log(clickCurrentDay);

  const apiKey = 'ItcTRzMEchmrtb2N2HI5uMgEjAjMlgCo';
  // const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=${apiKey}`;
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&begin_date=20120101&end_date=${clickCurrentDay}&api-key=${apiKey}`;

  https: function searchNews() {
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

function generateCardsMurkupForInput(cardsArray) {
  const markup = cardsArray
    .map(
      item => `<li class="favorite-cards__item" id="${item.uri}">
      <input type="submit" class="favorite-cards__remove-btn" value="Add to favorite">
        <a class="favorite-cards__image-link" >
          <img
            class="favorite-cards__img"
            src="https://www.nytimes.com/${isMedia(item)}"
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
          <p class="favorite-cards__date">${item.pub_date}</p>
          <a class="favorite-cards__link" href="${item.web_url}">
            Read more
          </a>
        </div>
      </li>`
    )
    .join('');
  newsCards.insertAdjacentHTML('beforeend', markup);
}

export { generateCardsMurkup };
