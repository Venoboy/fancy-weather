import getImageName from '../../../helpers/image/getImageName';
import setImagePic from '../../../helpers/image/setImagePic';
import { data } from '../../../containers/data';

const forecastTemps = document.querySelectorAll('.forecast-temperature');
const forecastPics = document.querySelectorAll('.forecast-pic');

const renderForecast = (weatherObj) => {
  const forecastObj = weatherObj;
  [...forecastTemps].forEach((elem, index) => {
    const day = elem;
    if (data.tempSwitcher === 'C') {
      day.innerText = forecastObj.forecast.forecastday[index].day.avgtemp_c.toFixed(0);
    } else {
      day.innerText = forecastObj.forecast.forecastday[index].day.avgtemp_f.toFixed(0);
    }
  });

  [...forecastPics].forEach((elem, index) => {
    const pic = elem;
    const conditionCode = forecastObj.forecast.forecastday[index].day.condition.code;
    const imageName = getImageName(conditionCode);
    setImagePic(pic, imageName);
  });
};

export default renderForecast;
