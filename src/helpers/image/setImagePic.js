const setImagePic = (domImg, imageName) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const path = require(`./../../assets/img/weather/64x64/day/${imageName}.png`);
  const domImage = domImg;
  domImage.src = path.default;
};

export default setImagePic;
