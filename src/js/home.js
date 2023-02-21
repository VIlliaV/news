import { getPopularNews } from './api';

const newsCards = document.querySelector('.favorite-cards');

window.addEventListener('load', () => {
  getPopularNews()
    .then(data => {
      generateCardsMurkup(data);
      // console.log(newsCards);
    })
    .catch(err => console.log(err));
});

function generateCardsMurkup(cardsArray) {
  const markup = cardsArray
    .map(
      item => `<li class="favorite-cards__item" id="${item.id}">
      <input type="submit" class="favorite-cards__remove-btn" value="Add to favorite">
        <a class="favorite-cards__image-link" >
          <img
            class="favorite-cards__img"
            src="${item.media.map(el => el['media-metadata'][2].url)}"
            alt="${item.per_facet}"
          />
          <p class="favorite-cards__category">${addDefaultText(
            item.subsection
          )}</p>
          

        </a>
        <h2 class="favorite-cards__news-title">${item.title}
        </h2>
        <p class="favorite-cards__dicription">
        ${limitText(item.abstract)}
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
  newsCards.innerHTML = markup;
}

function addDefaultText(text) {
  if (text) {
    return text;
  } else {
    return 'Other...';
  }
}

function limitText(text) {
  if (text.length > 110) {
    return text.substring(0, 110) + '...';
  } else {
    return text;
  }
}
function reformatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}

// function textCropping(text) {
//   let result;
//   if (text.length > 150) {
//     text = text.slice(0, 150);
//     result = text + '...';
//   } else {
//     result = text;
//   }
//   return result;
// }

// function appendCardsMurkup(cards) {

// }

newsCards.addEventListener('click', onAddNews);
let targetArray = [];

function onAddNews(e) {
  if (e.target.nodeName === 'INPUT') {
    e.preventDefault();
    const text = 'Add to favorite';
    if (e.target.value === text) {
      e.target.value = 'Remove from favorite';
      targetArray.push(e.target.parentElement);
      localStorage.setItem('fav', targetArray.map());
      // console.log(targetArray);
    } else e.target.value = text;
  }
}
