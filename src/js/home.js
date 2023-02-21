import { getPopularNews } from './api';

const newsCards = document.querySelector('.favorite-cards');

window.addEventListener('load', () => {
  getPopularNews()
    .then(data => {
      appendCardsMurkup(data);
      console.log(data);
    })
    .catch(err => console.log(err));
});

function generateCardsMurkup(cardsArray) {
  return cardsArray
    .map(
      item => `<li class="favorite-cards__item">
        <a class="favorite-cards__image-link" href="${item.url}">
          <img
            class="favorite-cards__img"
            src="${item.media.map(el => el['media-metadata'][2].url)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection
          )}</p>
          <button type="button" class="favorite-cards__remove-btn id="remove-btn">
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

// function textCropping(text) {
//   let result;
//   if (text.length > 150) {
//     text = text.slice(0, 150);
//     result = text + '...';
//   } else {
//     result = text;
//   }
//   return result;
// }

function appendCardsMurkup(cards) {
  newsCards.insertAdjacentHTML('beforeend', generateCardsMurkup(cards));
}
