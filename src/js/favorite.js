const KEY = 'api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX';
const MOST_POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

const markupList = document.querySelector('#favorite-list');
const favoriteGallerySection = document.querySelector(
  '#favorite-galery-section'
);

async function getPopularNews() {
  const news = await fetch(`${MOST_POPULAR_NEWS_URL}`)
    .then(resp => {
      if (!resp.ok) {
        whenNotFoundMarkup();
        throw new Error('Something went wrong 404');
      }
      return resp.json();
    })
    .then(resp => {
      createNewsMarkup(resp.results);
    });
  return news;
}
getPopularNews();

function createNewsMarkup(newsCard) {
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
        <p class="favorite-cards__date">${reformatDate(item.published_date)}</p>
        <a class="favorite-cards__link" href="${item.url}">
          Read more
        </a>
      </div>
    </li>`
    )
    .join('');
  markupList.innerHTML = newsItemsMarkup;
}

function whenNotFoundMarkup() {
  const notFoundImage = `<img
  class="not-found__img"
  src="/image-not-found.584be82b.jpg"
  alt="Something went wrong"
/>`;
  favoriteGallerySection.innerHTML = notFoundImage;
}

function reformatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}

markupList.addEventListener('click', onDeleteNews);

function onDeleteNews(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.preventDefault();
    alert('News Delete!!!');
  }
}
