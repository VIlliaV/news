import {
  getDatesReadingNews,
  getReadingNewsByDate,
  testReding,
  getReadingNews,
} from './localStorage';

const readUlEl = document.getElementById('read-ul');
console.log(readUlEl);

//testReding();

console.log(getReadingNews());

console.log(getDatesReadingNews());
const arrOfDates = getDatesReadingNews();
for (date of arrOfDates) {
  const news = getReadingNewsByDate(date);
  generateCardsMarkup(news);
  console.table(date, news);
}

function generateCardsMarkup(cardsArray) {
  const markup = cardsArray.reduce((acc, item) => {
    acc += `<li class="favorite-cards__item" id="${item.uri}">
      <input type="submit" class="favorite-cards__remove-btn" value="${item.uri}">
        <a class="favorite-cards__image-link" target="_blank" href="${item.url}">
          <img
            class="favorite-cards__img"
            src="${item}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${item.subsection}</p>
        </a>
        <h2 class="favorite-cards__news-title">${item.title}
        </h2>
        <p class="favorite-cards__dicription">
        ${item.abstract}
        </p>
        <div class="favorite-cards__bottom">
          <p class="favorite-cards__date">${item.published_date}</p>
          <a class="favorite-cards__link" href="${item.url}" target="_blank">
            Read more
          </a>
        </div>
      </li>`;
    return acc;
  }, `<p class="list-by-date">new data news      ${cardsArray[0].date}</p>`);
  readUlEl.insertAdjacentHTML('beforeend', markup);
}
