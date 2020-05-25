import animationPlayer from './helpers/animationPlayer';
import langSelector from './components/langSelect/langSelect';
import temperatureSwitcher from './components/temperatureSwitcher/temperatureSwitcher';

const themeSwitcher = document.querySelector('.theme-switcher');

animationPlayer(false);
themeSwitcher.onclick = () => {
  animationPlayer(true);
};

langSelector();
temperatureSwitcher();
