import renderForecast from './renderForecast';
import renderCurrent from './renderCurrent';
import getData from '../../../containers/data';
import loadImageExternal from '../../../helpers/image/loadImageExternal';
import TimeHandler from '../../../helpers/TimeHandler';
import map from '../../pageComponents/map/map';
import BackgroundSwitcher from '../../pageComponents/backgroundSwitcher/BackgroundSwitcher';


const mainPic = document.querySelector('.weather-pic');
const wrapper = document.querySelector('.main-wrapper');

const getMainPic = (weatherObj) => {
  const iconPath = weatherObj.current.condition.icon.replace('64x64', '128x128');
  return loadImageExternal(iconPath, 'weather-pic');
};

const render = async (query) => {
  const currentWeather = await getData(query);
  if (currentWeather.error) {
    return null;
  }
  const timer = new TimeHandler(currentWeather.location.localtime);
  const backgroundSwitcher = new BackgroundSwitcher(`${timer.getQuery()} ${currentWeather.location.name}`);

  const [
    newMainPic,
    forecast,
    mapSetter,
    backgroundPath,
  ] = await Promise.allSettled([
    getMainPic(currentWeather),
    getData(query, 'forecast'),
    map(currentWeather),
    backgroundSwitcher.getBackgroundPath(),
  ]);
  const newBackgroundPic = await loadImageExternal(backgroundPath.value);
  backgroundSwitcher.setBackgroundPicture(newBackgroundPic.src);
  backgroundSwitcher.setButtonListener();

  renderCurrent(currentWeather);
  renderForecast(forecast.value);

  timer.setTime();

  mainPic.replaceWith(newMainPic.value);
  mapSetter.value();
  wrapper.style.display = 'flex';
  return null;
};

export default render;
