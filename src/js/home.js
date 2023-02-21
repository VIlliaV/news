import { getPopularNews } from './api';
import { addToFavoriteArticles, getFavoriteArticles } from './localStorage';
let idNews = [];
let newsAll = [];
const newsCards = document.querySelector('.favorite-cards');

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
            src="${item.media.map(el => el['media-metadata'][2].url)}"
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
          <a class="favorite-cards__link" href="${item.url}">
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
    } else e.target.value = 'Add to favorite';
  }
}

function readFromLocal(item) {
  const locals = getFavoriteArticles();
  locals.map(elem => {
    if (item.uri === elem.uri) {
      console.log('true');
    }
  });
}
