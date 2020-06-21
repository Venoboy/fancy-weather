import animationPlayer from '../../../helpers/animationPlayer';
import loadImageExternal from '../../../helpers/image/loadImageExternal';

const id = 'pM05ikNn6SMYyuQlXdUpMEvBRzCoGGuepU1TC4MfCfg';

class BackgroundSwitcher {
  constructor(query) {
    this.query = query;
  }

  getBackgroundPath = async () => {
    const width = document.body.clientWidth;
    const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&w=${width}&query=${this.query}&client_id=${id}`);
    const backObj = await response.json();
    // eslint-disable-next-line no-console
    console.log('Image api query: ', this.query);
    return backObj.urls.custom;
  };

  setBackgroundPicture = (url) => {
    document.body.style.transition = 'none';
    document.body.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center / cover fixed, url("${url}") 0 -100vh / cover fixed no-repeat, black`;
    setTimeout(() => {
      document.body.style.transition = 'all .2s ease-in';
      document.body.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center / cover fixed, url("${url}") center / cover fixed no-repeat, black`;
    }, 30);
  };

  setButtonListener = () => {
    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.onclick = async () => {
      animationPlayer(true);
      const path = await this.getBackgroundPath();
      const newBackgroundPic = await loadImageExternal(path);
      this.setBackgroundPicture(newBackgroundPic.src);
      animationPlayer(false);
    };
  };
}

export default BackgroundSwitcher;
