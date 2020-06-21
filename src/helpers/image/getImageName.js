import conditions from './weather_conditions';

const getImageName = (code) => {
  const currentEl = conditions.find((elem) => elem.code === code);
  return currentEl.icon;
};

export default getImageName;
