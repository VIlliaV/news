import { gerCurrentNews } from './api.js';
import { generateCardsMurkup } from './home.js';

const newsCards = document.querySelector('.favorite-cards');
const pagination = document.querySelector('.pagination');
const prevBtn = document.querySelector('.pagination__prev-btn');
const nextBtn = document.querySelector('.pagination__next-btn');

// функция для получения текущей ширины экрана
function getWindowWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

// количество новостей на странице в зависимости от ширины экрана
function getCardsPerPage() {
  const windowWidth = getWindowWidth();
  if (windowWidth >= 1200) {
    return 8;
  } else if (windowWidth >= 768) {
    return 7;
  } else {
    return 4;
  }
}

// функция для отображения нужной страницы
function displayPage(pageNum, cardsPerPage, newsArray) {
  const startIndex = (pageNum - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const pageArray = newsArray.slice(startIndex, endIndex);
  generateCardsMurkup(pageArray);
}

// обработчик для кнопки "назад"
prevBtn.addEventListener('click', () => {
  const currentPage = parseInt(pagination.querySelector('.active').textContent);
  if (currentPage === 1) {
    return;
  }
  const cardsPerPage = getCardsPerPage();
  const newsArray = gerCurrentNews();
  pagination.querySelector('.active').classList.remove('active');
  pagination.children[currentPage - 2].classList.add('active');
  newsCards.innerHTML = '';
  displayPage(currentPage - 1, cardsPerPage, newsArray);
});

// обработчик для кнопки "вперед"
nextBtn.addEventListener('click', () => {
  const currentPage = parseInt(pagination.querySelector('.active').textContent);
  const totalPages = parseInt(pagination.lastElementChild.textContent);
  if (currentPage === totalPages) {
    return;
  }
  const cardsPerPage = getCardsPerPage();
  const newsArray = gerCurrentNews();
  pagination.querySelector('.active').classList.remove('active');
  pagination.children[currentPage].classList.add('active');
  newsCards.innerHTML = '';
  displayPage(currentPage + 1, cardsPerPage, newsArray);
});

// инициализация пагинации. создает разметку пагинации, включая кнопки "назад" и "вперед", список номеров страниц и активную страницу (первую страницу).//
//Затем она настраивает обработчики событий для каждой страницы и кнопок "назад" и "вперед".В обработчиках событий//
function initPagination() {
  const newsArray = gerCurrentNews();
  const cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(newsArray.length / cardsPerPage);
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = `
    <button class="pagination__prev-btn" disabled>
      <a class="clk btn-left"> <span class="i_prew">&#8249; Prew</span> </a>
    </button>
    <ul class="pagination__list">
      ${Array.from(
        { length: totalPages },
        (_, i) => `
        <li class="pagination__page-link ${i === 0 ? 'active' : ''}">
          <a class="clk">${i + 1}</a>
        </li>`
      ).join('')}
    </ul>
    <button class="pagination__next-btn">
      <a class="clk btn-right"> Next <span class="i_next">&#8250;</span> </a>
    </button>
  `;

  const pageLinks = paginationContainer.querySelectorAll(
    '.pagination__page-link'
  );
  const prevBtn = paginationContainer.querySelector('.pagination__prev-btn');
  const nextBtn = paginationContainer.querySelector('.pagination__next-btn');

  function setActivePage(target) {
    paginationContainer.querySelector('.active').classList.remove('active');
    target.classList.add('active');
  }

  function displayPage(pageNum) {
    const startIndex = (pageNum - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const pageArray = newsArray.slice(startIndex, endIndex);
    generateCardsMurkup(pageArray);
  }

  paginationContainer.addEventListener('click', event => {
    const target = event.target.closest('.pagination__page-link');
    if (!target) return;
    const currentPage = parseInt(
      paginationContainer.querySelector('.active').textContent
    );
    const pageNum = parseInt(target.textContent);
    if (pageNum === currentPage) return;
    setActivePage(target);
    newsCards.innerHTML = '';
    displayPage(pageNum);
    prevBtn.disabled = pageNum === 1;
    nextBtn.disabled = pageNum === totalPages;
  });

  prevBtn.addEventListener('click', () => {
    const currentPage = parseInt(
      paginationContainer.querySelector('.active').textContent
    );
    if (currentPage === 1) return;
    const pageNum = currentPage - 1;
    setActivePage(pageLinks[pageNum - 1]);
    newsCards.innerHTML = '';
    displayPage(pageNum);
    prevBtn.disabled = pageNum === 1;
    nextBtn.disabled = pageNum === totalPages;
  });

  nextBtn.addEventListener('click', () => {
    const currentPage = parseInt(
      paginationContainer.querySelector('.active').textContent
    );
    if (currentPage === totalPages) return;
    const pageNum = currentPage + 1;
    setActivePage(pageLinks[pageNum - 1]);
    newsCards.innerHTML = '';
    displayPage(pageNum);
    prevBtn.disabled = pageNum === 1;
    nextBtn.disabled = pageNum === totalPages;
  });

  displayPage(1);
  prevBtn.disabled = true;
  nextBtn.disabled = totalPages === 1;
}

initPagination();
