import { format } from 'date-fns';

const API_WETHER_KEY = '8af80306c215ce6fbaa948ab6db624b1';
const URL = 'https://api.openweathermap.org/data/2.5/weather?';

async function fetchWeather() {
  //   weatherCard.innerHTML = `<div class="weather__loading">
  //   <img src="../images/loading.gif" alt="loading...">

  //     <div>`;
  const url = `${URL}q=London&units=metric&appid=${API_WETHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      createWeatherCard(data);
    }
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchWeatherByGeo(lat, lon) {
  //   weatherCard.innerHTML = `<div class="weather__loading">
  // <img src="../images/loading.gif" alt="loading...">

  //     div>`;
  const url = `${URL}lat=${lat}&lon=${lon}&appid=${API_WETHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      createWeatherCard(data);
    }
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
          console.log(data);
          return data;
        });
      }
    );
    return;
  } else {
    fetchWeather();
  }
  return;
}

fetchWeather();

getGeoposition();

const weatherCard = document.querySelector('.weather');

function createWeatherCard(data) {
  console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  // const feelsLike = Math.round(data.main.feels_like);
  const day = data.dt;
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const card = `<div class="weather__info">
    <span class="weather__deg">${temp}</span>
    <div class="weather__geo">
      <span class="weather__value">${weatherStatus}</span>
      <p class="weather__location">
        <svg>
          <use href="./images/sprite-full.svg#geo"></use>
        </svg>
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
    <p class="weather__year"></p>
  </div>
  <a
    href="https://sinoptik.ua/"
    class="weather__link"
    target="_blank"
    rel="noreferrer noopener"
    >weather for week</a
  >`;

  weatherCard.innerHTML = card;
}
