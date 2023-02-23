// import { format } from 'date-fns';

const API_WETHER_KEY = '8af80306c215ce6fbaa948ab6db624b1';
const URL = 'https://api.openweathermap.org/data/2.5/weather?';

async function fetchWeather() {
  const url = `${URL}q=Kyiv&units=metric&appid=${API_WETHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      createWeatherCard(data);
    }

    // console.log(data);
    // return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchWeatherByGeo(lat, lon) {
  const url = `${URL}lat=${lat}&lon=${lon}&appid=${API_WETHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // if (response.ok) {
    //   createWeatherCard(data);
    // }
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getGeoposition() {
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        fetchWeatherByGeo(latitude, longitude).then(data => {
          //   createWeatherCard(data);
          //   console.log(data);
          createWeatherCard(data);
          //   return data;
        });
      }
    );
    // return;
  }

  //   return;
}

fetchWeather();

getGeoposition();

const weatherCard = document.querySelector('.weather');

function createWeatherCard(data) {
  //   console.log(data);
  //   const timestamp = 1645398199; // приклад Unix Timestamp
  //   const date = new Date(timestamp * 1000); // перетворюємо Unix Timestamp в мілісекунди
  //   const formattedDate = format(date, 'dd/MM/yyyy'); // форматуємо дату у потрібний формат за допомогою date-fns
  //   console.log(formattedDate); // повинно вивести 21/02/2022
  const timestamp = data.dt;
  const newDate = new Date(timestamp * 1000);
  const date = format(newDate, 'dd LLL y');
  const location = data.name;
  const temp = Math.round(data.main.temp);
  //   const date = format(new Date(data.dt), 'dd LLL y');
  const day = format(new Date(data.dt), 'eee');
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const card = `<div class="weather__info">
    <span class="weather__deg">${temp}&deg;</span>
    <div class="weather__geo">
      <span class="weather__value">${weatherStatus}</span>
      <p class="weather__location">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none"><path fill="#fff" d="M13.5 1.688a9.292 9.292 0 0 0-9.281 9.28 9.187 9.187 0 0 0 1.87 5.57s.253.333.294.38l7.117 8.395 7.12-8.398c.037-.045.291-.377.291-.377l.001-.003a9.185 9.185 0 0 0 1.87-5.566A9.292 9.292 0 0 0 13.5 1.688Zm0 12.656a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"/></svg>

        <span class="weather__city">${location}</span>
      </p>
    </div>
  </div>
  <img
    src="https://openweathermap.org/img/w/${weatherIcon}.png"
    alt="${weatherStatus}"
    class="weather__img"
  />
  <div class="weather__date">
    <p class="weather__day">${day}</p>
    <p class="weather__year">${date}</p>
  </div>
  <a
    href="https://weather.com/uk-UA/weather/tenday/l/874007233ad152f9a0541234e94fc0722a06a81db728ad9e08be04b58fbe18fa"
    class="weather__link"
    target="_blank"
    rel="noreferrer noopener"
    >weather for week</a
  >`;

  weatherCard.innerHTML = card;
}
// console.log('hi');

export { createWeatherCard };

// <svg>
//   <use href="./src/images/location.svg"></use>
// </svg>;

// <img src="../images/location.svg" alt="location">
