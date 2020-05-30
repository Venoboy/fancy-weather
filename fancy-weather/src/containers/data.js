export const data = {
  baseUrl: 'http://api.weatherapi.com/v1',
  currentWeatherPath: '/current.json',
  forecastPath: '/forecast.json',
  apiKey: '9b8d0760195b44a394b102256202605',
  days: 1,
  query: 'Minsk',
  tempSwitcher: 'C',
};


const getData = async (query, type = 'current') => {
  let path;
  const currentDaysCount = 1;
  const forecastDaysCount = 3;
  data.query = query;
  if (type === 'forecast') {
    path = data.forecastPath;
    data.days = forecastDaysCount;
  } else {
    path = data.currentWeatherPath;
    data.days = currentDaysCount;
  }
  const weatherPromise = await fetch(`${data.baseUrl}${path}?key=${data.apiKey}&q=${data.query}&days=${data.days}`);
  return weatherPromise.json();
};

export default getData;
