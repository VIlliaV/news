import { getPopularNews } from './api';
import { whenNotFoundMarkup } from './not-found-markup';

function checkDarkTheme() {
  const theme = localStorage.getItem('ui-theme');
  if (theme !== null) {
    return true;
  } else {
    return false;
  }
}

function changeTheme() {
  const theme = checkDarkTheme('ui-theme');
  if (theme) {
    localStorage.removeItem('ui-theme');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}

function getFavoriteArticles() {
  return JSON.parse(localStorage.getItem('favoriteArticles'));
}
function checkLocalstorage() {
  let LocalstorageObjects = getFavoriteArticles() || {};
  if (LocalstorageObjects.length === 0) {
    whenNotFoundMarkup();
  }
}

function addToFavoriteArticles(item) {
  let favorite = getFavoriteArticles();
  if (favorite === null) {
    favorite = [item];
  } else {
    favorite.push(item);
  }
  localStorage.setItem('favoriteArticles', JSON.stringify(favorite));
}

function removeFromFavoriteArticles(itemId) {
  let favorite = getFavoriteArticles();
  let indexCard = 0;
  favorite.map((item, index) => {
    const cardId = item.uri.slice(38, item.uri.length);
    if (cardId === itemId) {
      indexCard = index;
    }
  });
  favorite.splice(indexCard, 1);
  localStorage.setItem('favoriteArticles', JSON.stringify(favorite));
  checkLocalstorage();
}

function testFavorite() {
  getPopularNews().then(resp => {
    localStorage.setItem('favoriteArticles', JSON.stringify(resp));
  });
}

async function testReding() {
  const news = await getPopularNews();
  for (elNews of news) {
    elNews.date = elNews.published_date;
  }
  localStorage.setItem('readingNews', JSON.stringify(news));
}

function getReadingNews() {
  return JSON.parse(localStorage.getItem('readingNews'));
}

function addToReadingNews(item) {
  const addNews = item;
  addNews.date = new Date().toLocaleDateString();
  let readingNews = getReadingNews();
  if (readingNews === null) {
    readingNews = [addNews];
  } else {
    readingNews.push(addNews);
  }
  localStorage.setItem('readingNews', JSON.stringify(readingNews));
}
// testFavorite();
function getDatesReadingNews() {
  let readingNews = getReadingNews();
  let arrDate = [];

  for (elNews of readingNews) {
    if (!arrDate.includes(elNews.date)) {
      arrDate.push(elNews.date);
    }
  }
  return arrDate;
}

function getReadingNewsByDate(date) {
  let readingNews = getReadingNews();
  return readingNews.filter(news => news.date === date);
}

export {
  checkDarkTheme,
  changeTheme,
  getFavoriteArticles,
  addToFavoriteArticles,
  removeFromFavoriteArticles,
  testFavorite,
  addToReadingNews,
  getDatesReadingNews,
  getReadingNewsByDate,
  testReding,
};
