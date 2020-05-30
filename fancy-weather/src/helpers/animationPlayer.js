const animationPlayer = (isRunning) => {
  const shape = document.querySelectorAll('.shape');
  if (isRunning) {
    shape.forEach((elem) => {
      elem.style.animationPlayState = 'running';
    });
  } else {
    shape.forEach((elem) => {
      elem.style.animationPlayState = 'paused';
    });
  }
};

export default animationPlayer;
