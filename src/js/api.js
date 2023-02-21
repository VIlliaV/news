const KEY = 'api-key=iQPZlbRhGEGKM4smMiUCFTOlyGy9K2EX';
// console.log('🚀 ~ KEY:', KEY);

const CAREGORY_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?${KEY}`;
const SEARCH_BY_CAREGORY_URL =
  'https://api.nytimes.com/svc/news/v3/content/all/';
const MOST_POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;
const SEARCH_BY_WORD_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${KEY}&sort=relevance`;

function fixDate(date) {
  let day = date.split('.');
  if (Number(day[0]) < Number(day[2])) return day.reverse().join('');
  return day.join('');
}

async function getNewsBySearch(word, page = 1, date = 20100101) {
  let begin_date = 0;
  let end_date = 0;

  if (date === 20100101) {
    begin_date = date;
    end_date = fixDate(new Date().toLocaleDateString());
  } else {
    begin_date = fixDate(date);
    end_date = begin_date;
  }

  const newsJson = await fetch(
    `${SEARCH_BY_WORD_URL}&q=${word}&page=${page}&begin_date=${begin_date}&end_date=${end_date}`
  );
  if (!newsJson.ok) {
    const err = new Error('Something went wrong 404');
    return err;
  }
  const news = await newsJson.json();
  //  console.log(news.response.docs);
  return news.response.docs;
}

async function getCategory() {
  const categories = await fetch(`${CAREGORY_URL}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Something went wrong 404');
      }
      return resp.json();
    })
    .then(categories => {
      //      console.log(categories.results);
      return categories.results;
    });
  return categories;
}

async function getNewsByCategory(category) {
  const resp = await fetch(`${SEARCH_BY_CAREGORY_URL}${category}.json?${KEY}`);
  if (!resp.ok) {
    const err = new Error('Something went wrong 404');
    return err;
  }
  const categories = await resp.json();
  //  console.log(categories.results);
  return categories.results;
}

// import { createNewsMarkup } from './card-markup';
// import { whenNotFoundMarkup } from './not-found-markup';

async function getPopularNews() {
  const news = await fetch(`${MOST_POPULAR_NEWS_URL}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Something went wrong 404');
      }
      return resp.json();
    })
    .then(resp => {
      //      console.log(resp.results);
      return resp.results;
    });
  return news;
}

export { getCategory, getNewsByCategory, getPopularNews, getNewsBySearch };
