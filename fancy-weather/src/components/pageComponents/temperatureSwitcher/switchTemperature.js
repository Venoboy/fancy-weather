import { data } from '../../../containers/data';

const toggle = document.querySelector('.toggle');
const temperatureFields = document.querySelectorAll('.temperature');
const feels = document.querySelector('.feels');

const switchTemperature = () => {
  toggle.onclick = (e) => {
    const label = e.target.getAttribute('for');
    if (label === 'tempC') {
      data.tempSwitcher = 'C';
      localStorage.setItem('tempSwitcher', 'C');
      feels.innerText = ((feels.innerText - 32) * (5 / 9)).toFixed(0);
      [...temperatureFields].forEach((field) => {
        const current = field;
        current.innerText = ((field.innerText - 32) * (5 / 9)).toFixed(0);
      });
    } else if (label === 'tempF') {
      data.tempSwitcher = 'F';
      localStorage.setItem('tempSwitcher', 'F');
      feels.innerText = (feels.innerText * (9 / 5) + 32).toFixed(0);
      [...temperatureFields].forEach((field) => {
        const current = field;
        current.innerText = (field.innerText * (9 / 5) + 32).toFixed(0);
      });
    }
  };
};

export default switchTemperature;
