import defaultImg from '../../assets/img/bg 3.png';

const messageField = document.querySelector('.message');

const loadImageExternal = async (src, className = '') => new Promise((resolve) => {
  const image = new Image();
  image.onerror = () => {
    image.src = defaultImg;
    messageField.innerText = 'Background image error';
    resolve(image);
  };
  image.onload = () => resolve(image);
  image.className = className;
  image.src = src;
});


export default loadImageExternal;
