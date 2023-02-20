const currentDate = document.querySelector('.month__data');
const daysTag = document.querySelector('.day');
const prevIcon = document.querySelector('.month__arrow--prev');
const nextIcon = document.querySelector('.month__arrow--next');
const inputEl = document.querySelector('.calendar__input');
const pickerEl = document.querySelector('.picker');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();

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

inputEl.addEventListener('click', () => {
pickerEl.classList.toggle('hidden');
})

function renderCalendar() {
  let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();
  console.log(firstDayofMonth);
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  console.log(lastDateofMonth);
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  console.log(lastDateofLastMonth);
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  console.log(lastDayofMonth);
  let liTag = '';

  for (let i = firstDayofMonth; i > 0; i -= 1) {
    liTag += `<li class="day__item inactive--prev">${
      lastDateofLastMonth - i + 1
    }</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i += 1) {
    liTag += `<li class="day__item">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 7; i += 1) {
    liTag += `<li class="day__item inactive--next">${
      i - lastDayofMonth + 1
    }</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}
renderCalendar();

prevIcon.addEventListener('click', () => {
  console.log(currDay);
  currMonth = currMonth - 1;
  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth, new Date().getDate());
    console.log(new Date().getDate());
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

daysTag.addEventListener('click', e => {
  if (e.target.classList.contains('inactive--prev')) {
    currDay = +e.target.textContent;
    return getDate(currYear, currMonth-1, currDay);
  }
  if (e.target.classList.contains('inactive--next')) {
    currDay = +e.target.textContent;
    return getDate(currYear, currMonth+1, currDay);
  } else currDay = +e.target.textContent;
pickerEl.classList.toggle('hidden');
  return getDate(currYear, currMonth, currDay);
});


function getDate(currYear, currMonth, currDay) {
  inputEl.attributes[2].textContent = `${currDay
    .toString()
    .padStart(2, '0')}/${(currMonth + 1)
    .toString()
    .padStart(2, '0')}/${currYear}`;
}

