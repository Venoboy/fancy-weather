const animationPlayer = (isRunning) => {
  const shape = document.querySelectorAll('.shape');
  if (isRunning) {
    shape.forEach((elem) => {
      const currentElem = elem;
      currentElem.style.animationPlayState = 'running';
    });
  } else {
    shape.forEach((elem) => {
      const currentElem = elem;
      currentElem.style.animationPlayState = 'paused';
    });
  }
};

export default animationPlayer;
