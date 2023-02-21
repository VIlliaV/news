import { getPopularNews } from './api';

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
  const position = favorite.findIndex(option => (option.id = itemId));
  favorite.splice(position, 1);
  localStorage.setItem('favoriteArticles', JSON.stringify(favorite));
}

function testFavorite() {
  getPopularNews().then(resp => {
    localStorage.setItem('favoriteArticles', JSON.stringify(resp));
  });
}

function addToReadingNews(item) {
  let readingNews = getReadingNews();
  if (readingNews === null) {
    favorite = [{ readingNews, date: new Date().toLocaleDateString() }];
  } else {
    favorite.push({ readingNews, data: new Date().toLocaleDateString() });
    localStorage.setItem('favoriteArticles', JSON.stringify(favorite));
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
    resp.filter(news => news.data === date);
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
