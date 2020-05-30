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
    }
    return myMap;
  };
  const setCenter = () => {
    myMap.setCenter([lat, lon]);
  };
  return new Promise((resolve) => {
    ymaps.ready(resolve(myMap ? setCenter : init));
  });
};

export default map;
