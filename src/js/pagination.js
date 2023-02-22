const pg = document.getElementById('pagination-js');
const btnNextPg = document.querySelector('button.next-page');
const btnPrevPg = document.querySelector('button.prew-page');

let windowWidth = 0;
let wetherPosition = 0;
let updateRemoveItems;
// setTimeout(() => {
//   updateRemoveItems = deleteItems.slice(8);
// }, 1500);
let sliceItems;
const refs = {
  pagination: document.querySelector('.pagination'),
};

refs.pagination.addEventListener('click', e => {
  if (
    e.target.classList.contains('next-page') ||
    e.target.classList.contains('button-next')
  ) {
    valuePage.curPage += 1;
  }
  if (
    e.target.classList.contains('prew-page') ||
    e.target.classList.contains('button-prew')
  ) {
    valuePage.curPage -= 1;
  }
  sliceItems = null;
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }
  window.scrollTo(0, 0);
});
//add button action//
document
  .querySelector('.pagination-page-container')
  .addEventListener('click', function (e) {
    switchButton(e.target);
  });

function switchButton(element) {
  if (element.classList.contains('prew-page')) {
    valuePage.curPage--;
    switchButton();
    btnNextPg.disabled = false;
  } else if (element.classList.contains('next-page')) {
    valuePage.curPage++;
    switchButtonRight();
    btnPrevPg.disabled = false;
  }
  pagination();
}
function switchButtonLeft() {
  if (valuePage.curPage === 1) {
    btnPrevPg.disabled = true;
  } else {
    btnPrevPg.disabled = false;
  }
}
function switchButtonRight() {
  if (valuePage.curPage === valuePage.totalPages) {
    btnNextPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
  }
}

//render//
function render(data, number) {
  let filtredArr = getFiltredArr(data, number);
  return filtredArr.map(elem => {
    let opacity = '';
    let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
    let check = checkLokalStorage(elem, localArr);
    if (check === true) {
      opacity = 'opacity';
    }
    let mediaElem = elem.media;
    let mediaUrl =
      'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c';
    if (mediaElem.length !== 0) {
      mediaUrl = mediaElem[0]['media-metadata'][2].url;
    }
  });
}
//add filter//
function getFiltredArr(value, number) {
  return value.slice(0, number);
}

function dateNews(data) {
  return data.split('').splice(0, 10).join('').replaceAll('-', '/');
}

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 3,
};

pagination();

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);
    handleButtonLeft();
    handleButtonRight();
  }
});
//buttom dynamic pagin//
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4;

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
  let countTruncate = 0;

  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}

function renderPage(index, active = '') {
  return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}
