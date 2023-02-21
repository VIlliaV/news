import { getPopularNews } from '../js/api';

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
    .map(({ media, title, abstract, published_date, url }) => {
      let imgUrl = media[0]['media-metadata'][2]['url'];
      return `<li class="favorite-cards__item">
          <div class="favorite-cards__image-cont" href="">
            <img
              class="favorite-cards__img"
              src="${imgUrl}"
              alt="asia-businesswoman"
            />
            <p class="favorite-cards__job-src">Job searching</p>
            <button class="favorite-cards__remove-btn">
              Remove from favorite
              <svg class="favorite-cards__heart-icon" width="32" height="32">
                <use href="images/sprite-full.svg#heart-full"></use>
              </svg>
            </button>
          </div>
          <h2 class="favorite-cards__news-title">
          ${title}
          </h2>
          <p class="favorite-cards__dicription">
            ${textCropping(abstract)}
          </p>
          <div class="favorite-cards__bottom">
            <p class="favorite-cards__date">${published_date}</p>
            <a class="favorite-cards__link" href="${url}">Read more</a>
          </div>
        </li>`;
    })
    .join('');
}

function textCropping(text) {
  let result;
  if (text.length > 150) {
    text = text.slice(0, 150);
    result = text + '...';
  } else {
    result = text;
  }
  return result;
}

function appendCardsMurkup(cards) {
  newsCards.insertAdjacentHTML('beforeend', generateCardsMurkup(cards));
}
