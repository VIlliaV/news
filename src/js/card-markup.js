import { markupList } from './favorite';

export function createNewsMarkup(newsCard) {
  const newsItemsMarkup = newsCard
    .map(
      item => `<li class="favorite-cards__item">
        <a class="favorite-cards__image-link" href="${item.url}">
          <img
            class="favorite-cards__img"
            src="${item.media.map(el => el['media-metadata'][2].url)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${item.subsection}</p>
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
        ${item.abstract}
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
  markupList.innerHTML = newsItemsMarkup;
}

function reformatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}
