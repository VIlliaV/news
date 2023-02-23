function generateCardsMurkup(cardsArray) {
  return cardsArray
    .map(
      ({
        imgUrl,
  title,
  text,
  date,
  url,
      }) => {
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
            ${text}
          </p>
          <div class="favorite-cards__bottom">
            <p class="favorite-cards__date">${date}</p>
            <a class="favorite-cards__link" href="${url}">Read more</a>
          </div>
        </li>`;
      }
    )
    .join('');
}

export function appendCardsMurkup(cards) {
  newsCards.insertAdjacentHTML('beforeend', generateCardsMurkup(cards));
}



