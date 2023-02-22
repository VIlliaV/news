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
checkLocalstorage();

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

function getReadingNews() {
  return JSON.parse(localStorage.getItem('ReadingNews'));
}

function addToReadingNews(item) {
  let readingNews = getReadingNews();
  if (readingNews === null) {
    readingNews = [{ readingNews, date: new Date().toLocaleDateString() }];
  } else {
    readingNews.push({ readingNews, date: new Date().toLocaleDateString() });
    localStorage.setItem('readingNews', JSON.stringify(favorite));
  }
}

function getDatesReadingNews() {
  let readingNews = getReadingNews();
  let data = readingNews.then(resp => {
    resp.reduse(
      acc,
      el => {
        if (acc.include(el.date)) {
          return;
        } else acc.push(el);
        return acc;
      },
      []
    );
  });
  return data;
}

function getReadingNewsByDate(date) {
  let readingNews = getReadingNews().then(resp => {
    resp.filter(news => news.date === date);
  });
  return readingNews;
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
};
