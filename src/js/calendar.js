const currentDate = document.querySelector('.month__data');
const daysTag = document.querySelector('.day');
const prevIcon = document.querySelector('.month__arrow--prev');
const nextIcon = document.querySelector('.month__arrow--next');
const inputEl = document.querySelector('.calendar__input');
const dataEl = document.querySelector('.calendar__text');
const pickerEl = document.querySelector('.picker');
const iconDownEl = document.querySelector('.calendar__down');
const iconUpEl = document.querySelector('.calendar__up');
const iconStartEl = document.querySelector('.calendar__icon--start');
const bodyEl = document.querySelector('body');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();
let selectData = '';

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
  iconDownEl.classList.toggle('hidden');
  iconUpEl.classList.toggle('hidden');
  if (!pickerEl.classList.contains('hidden')) {
    inputEl.classList.add('calendar__open');
    iconUpEl.classList.add('calendar__open');
    iconStartEl.classList.add('calendar__open');
  }
});
 
// bodyEl.addEventListener('click', (e) => {
//    console.log(e);
//    pickerEl.classList.add('hidden');
//  });

function renderCalendar() {
  let firstDayofMonth = new Date(currYear, currMonth, 0).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
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
    console.log(currYear);
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

daysTag.addEventListener('click', e => {
  //  e.target.style.backgroundColor = '#4440f6';
  //  e.target.style.borderRadius = '50%';
  //  e.target.style.color = '#ffffff';
  if (e.target.nodeName !== 'LI') {
    return;
  }
  if (e.target.classList.contains('inactive--prev')) {
    currDay = +e.target.textContent;
    console.log(currYear, currMonth, currDay);
    return getDate(currYear, currMonth - 1, currDay);
  }
  if (e.target.classList.contains('inactive--next')) {
    currDay = +e.target.textContent;
    return getDate(currYear, currMonth + 1, currDay);
  } else currDay = +e.target.textContent;
  return getDate(currYear, currMonth, currDay);
});

function getDate(currYear, currMonth, currDay) {
  if (currMonth === -1) {
    currMonth = 11;
    currYear = currYear - 1;
  }

  if (currMonth === 12) {
    currMonth = 0;
    currYear = currYear + 1;
  }
  dataEl.textContent = `${currDay.toString().padStart(2, '0')}/${(currMonth + 1)
    .toString()
    .padStart(2, '0')}/${currYear}`;

  selectData = dataEl.textContent;
  pickerEl.classList.add('hidden');
  iconDownEl.classList.remove('hidden');
  iconUpEl.classList.add('hidden');

  // inputEl.style.backgroundColor = '#ffffff';
  // iconStartEl.style.fill = '#4440f6';
  // iconDownEl.style.fill = '#a2a2a2';
  inputEl.classList.remove('calendar__open');
  iconUpEl.classList.remove('calendar__open');
  iconStartEl.classList.remove('calendar__open');
  localStorage.setItem('CURRENT_DATA', JSON.stringify(selectData));
  return selectData;
}

export { selectData };
