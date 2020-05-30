import renderForecast from './renderForecast';
import renderCurrent from './renderCurrent';
import getData from '../../../containers/data';
import loadImageExternal from '../../../helpers/image/loadImageExternal';
import TimeHandler from '../../../helpers/TimeHandler';
import map from '../../pageComponents/map/map';
import BackgroundSwitcher from '../../pageComponents/backgroundSwitcher/backgroundSwitcher';


const mainPic = document.querySelector('.weather-pic');

const getMainPic = (weatherObj) => {
  const iconPath = weatherObj.current.condition.icon.replace('64x64', '128x128');
  return loadImageExternal(iconPath, 'weather-pic');
};

const render = async (query) => {
  const currentWeather = await getData(query);
  const backgroundSwitcher = new BackgroundSwitcher(currentWeather.location.name);

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

  const timer = new TimeHandler(currentWeather.location.localtime);
  timer.setTime();

  mainPic.replaceWith(newMainPic.value);
  mapSetter.value();
};

export default render;
