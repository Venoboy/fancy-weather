export const data = {
  baseUrl: 'https://api.weatherapi.com/v1',
  currentWeatherPath: '/current.json',
  forecastPath: '/forecast.json',
  apiKey: '9b8d0760195b44a394b102256202605',
  days: 1,
  query: 'Minsk',
  tempSwitcher: '',
};

const messageField = document.querySelector('.message');

const getData = async (query, type = 'current') => {
  let path;
  let result;
  const currentDaysCount = 1;
  const forecastDaysCount = 3;
  data.tempSwitcher = localStorage.getItem('tempSwitcher') || 'C';
  data.query = query;
  if (type === 'forecast') {
    path = data.forecastPath;
    data.days = forecastDaysCount;
  } else {
    path = data.currentWeatherPath;
    data.days = currentDaysCount;
  }
  try {
    messageField.innerText = null;
    const weatherPromise = await fetch(`${data.baseUrl}${path}?key=${data.apiKey}&q=${data.query}&days=${data.days}`);
    result = await weatherPromise.json();
    if (weatherPromise.status !== 200) {
      messageField.innerText = result.error.message;
    }
  } catch (e) {
    messageField.innerText = e.message;
  }
  return result;
};

export default getData;
