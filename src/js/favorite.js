import { createNewsMarkup } from './card-markup';
import { whenNotFoundMarkup } from './not-found-markup';

const KEY = 'api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX';
const MOST_POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

export const markupList = document.querySelector('#favorite-list');
export const favoriteGallerySection = document.querySelector(
  '#favorite-galery-section'
);

export async function getPopularNews() {
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

markupList.addEventListener('click', onDeleteNews);

function onDeleteNews(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.preventDefault();
    alert('News Delete!!!');
  }
}
