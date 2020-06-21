import { data } from '../../../containers/data';

const city = document.querySelector('.city');
const country = document.querySelector('.country');
const condition = document.querySelector('.condition');
const feels = document.querySelector('.feels');
const temperature = document.querySelector('.current-temperature__value');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const latitudeDegrees = document.querySelector('.latitude-d');
const latitudeMinutes = document.querySelector('.latitude-m');
const longitudeDegrees = document.querySelector('.longitude-d');
const longitudeMinutes = document.querySelector('.longitude-m');

const renderCurrent = (weatherObj) => {
  const weather = weatherObj;
  city.innerText = weather.location.name;
  country.innerText = weather.location.country;
  condition.innerText = weather.current.condition.text;
  if (data.tempSwitcher === 'C') {
    feels.innerText = weather.current.feelslike_c.toFixed(0);
    temperature.innerText = weather.current.temp_c.toFixed(0);
  } else {
    feels.innerText = weather.current.feelslike_f.toFixed(0);
    temperature.innerText = weather.current.temp_f.toFixed(0);
  }

  wind.innerText = weather.current.wind_kph.toFixed(0);
  humidity.innerText = weather.current.humidity;

  const minutesInDegrees = 100;
  const latitude = Math.trunc(weather.location.lat);
  latitudeDegrees.innerText = latitude;
  latitudeMinutes.innerText = ((weather.location.lat - latitude) * minutesInDegrees).toFixed(0);
  const longitude = Math.trunc(weather.location.lon);
  longitudeDegrees.innerText = longitude;
  longitudeMinutes.innerText = ((weather.location.lon - longitude) * minutesInDegrees).toFixed(0);
};

export default renderCurrent;
