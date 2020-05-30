import animationPlayer from './helpers/animationPlayer';
import langSelector from './components/pageComponents/langSelect/langSelect';
import temperatureSwitcher from './components/pageComponents/temperatureSwitcher/temperatureSwitcher';
import render from './components/presentational/render/render';
import search from './components/pageComponents/search/search';
import getIP from './helpers/getIP';
import switchTemperature from './components/pageComponents/temperatureSwitcher/switchTemperature';

const themeSwitcher = document.querySelector('.theme-switcher');

animationPlayer(false);
themeSwitcher.onclick = () => {
  animationPlayer(true);
};

// backgroundSwitcher('fire');
langSelector();
temperatureSwitcher();
search();
switchTemperature();

getIP.then((result) => render(result.ip));
