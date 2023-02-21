import { listNews } from './open_window';
const newsList = document.getElementById('newsList');
let readMoreId = JSON.parse(localStorage.getItem('readMoreLocal')) || [];

function addReadMore(event) {
  const readMore = event.target.closest('.item-news__info-link');
  if (!readMore) return;

  const read = {
    uri: readMore.nextElementSibling.textContent,
    date: readMore.parentNode.firstElementChild.innerText,
    img: readMore.parentNode.parentNode.querySelector('img').src,
    title: readMore.parentNode.parentNode.querySelector('h3').innerText,
    description: readMore.parentNode.parentNode.querySelector('p').innerText,
    link: readMore.parentNode.children[1].href,
    category:
      readMore.parentNode.parentNode.querySelector('.category').innerText,
    dayRead: new Date().toLocaleDateString('en-US'),
  };

  if (readMoreId.some(item => item.uri === read.uri)) {
    return;
  }

  readMoreId.push(read);
  localStorage.setItem('readMoreLocal', JSON.stringify(readMoreId));
  readMore.parentNode.parentNode.parentNode.classList.add('opacity');
}

newsList.addEventListener('click', addReadMore);
