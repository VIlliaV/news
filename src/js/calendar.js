const currentDate = document.querySelector('.month__data');
const daysTag = document.querySelector('.day');
const prevIcon = document.querySelector('.month__arrow--prev');
const nextIcon = document.querySelector('.month__arrow--next');
const inputEl = document.querySelector('.calendar__input');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function renderCalendar() {
  let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let liTag = '';

  for (let i = firstDayofMonth; i > 0; i -= 1) {
    liTag += `<li class="day-item inactive">${
      lastDateofLastMonth - i + 1
    }</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i += 1) {
    liTag += `<li class="day-item">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 7; i += 1) {
    liTag += `<li class="day-item inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();

prevIcon.addEventListener('click', () => {
  currMonth = currMonth - 1;
  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

nextIcon.addEventListener('click', () => {
  currMonth = currMonth + 1;
  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

function getDate() {
        daysTag.addEventListener('click', e => {
                console.log(typeof currMonth.toString());
                console.log(typeof e.target.textContent);
    inputEl.attributes[2].textContent = `${e.target.textContent.padStart(
      2,
      '0'
    )}/${(currMonth + 1).toString().padStart(2, '0')}/${currYear}`;
    console.log(currMonth, currYear);
  });
}

getDate();
