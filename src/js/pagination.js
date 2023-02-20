const pg = document.getElementById('pagination-js');
const btnNextPg = document.querySelector('button.next-page');
const btnPrevPg = document.querySelector('button.prew-page');

let windowWidth = 0;
let wetherPosition = 0;
let updateRemoveItems;
setTimeout(() => {
  updateRemoveItems = deleteItems.slice(8);
}, 1500);
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
    e.target.classList.contains('prev-page') ||
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
  switch (valuePage.curPage) {
    case 1:
      getPopularRender();
      break;
    case 2:
      sliceItems = deleteItems.slice(0, 8);
      updateRemoveItems = deleteItems.slice(8);

      const markup2 = render(sliceItems, windowWidth);

      newsList.innerHTML = markup2;
      getWetherPosition();

      break;
    case 3:
      const markup3 = render(updateRemoveItems, windowWidth);
      newsList.innerHTML = markup3;
      getWetherPosition();
      break;
  }
  window.scrollTo(0, 0);
});
/*-- test-gitKostya --*/
