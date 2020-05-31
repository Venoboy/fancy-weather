/* eslint-disable no-undef */

let myMap;

const map = (weather) => {
  const { lat } = weather.location;
  const { lon } = weather.location;
  const init = () => {
    if (!myMap) {
      myMap = new ymaps.Map('map', {
        center: [lat, lon],
        zoom: 10,
      });
      myMap.geoObjects.add(new ymaps.Placemark([lat, lon]));
    }
    return myMap;
  };
  const setCenter = () => {
    myMap.setCenter([lat, lon]);
    myMap.geoObjects.add(new ymaps.Placemark([lat, lon]));
  };
  return new Promise((resolve) => {
    ymaps.ready(resolve(myMap ? setCenter : init));
  });
};

export default map;
