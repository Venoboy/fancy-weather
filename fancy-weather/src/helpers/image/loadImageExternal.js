const loadImageExternal = async (src, className = '') => new Promise((resolve, reject) => {
  const image = new Image();
  image.onerror = (error) => reject(error);
  image.onload = () => resolve(image);
  image.className = className;
  image.src = src;
});


export default loadImageExternal;
