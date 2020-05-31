const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateWeek = document.querySelector('.date-week');
const dateDay = document.querySelector('.date-day');
const dateMonth = document.querySelector('.date-month');
const dateHours = document.querySelector('.date-hours');
const dateMinutes = document.querySelector('.date-minutes');
const dateSeconds = document.querySelector('.date-seconds');
const day1Week = document.querySelector('.day1-week');
const day2Week = document.querySelector('.day2-week');
const day3Week = document.querySelector('.day3-week');
let interval = null;


class TimeHandler {
  constructor(localtime) {
    this.localtime = localtime;
    this.locationDate = new Date(Date.parse(this.localtime));
  }

  timer = () => {
    const userDate = new Date();

    let seconds = userDate.getSeconds();
    seconds = (seconds - 10) < 0 ? `0${seconds}` : seconds;
    let minutes = userDate.getMinutes();
    minutes = (minutes - 10) < 0 ? `0${minutes}` : minutes;
    dateMinutes.innerText = minutes;
    dateSeconds.innerText = seconds;
    let hours = this.locationDate.getHours();
    hours = (hours - 10) < 0 ? `0${hours}` : hours;
    dateHours.innerText = hours;
  };

  setDate = () => {
    dateWeek.innerText = weekDays[this.locationDate.getDay()];
    dateDay.innerText = this.locationDate.getDate();
    dateMonth.innerText = months[this.locationDate.getMonth()];
    day1Week.innerText = weekDaysFull[this.locationDate.getDay()];
    const daysInWeek = 7;
    day2Week.innerText = weekDaysFull[(this.locationDate.getDay() + 1) % daysInWeek];
    day3Week.innerText = weekDaysFull[(this.locationDate.getDay() + 2) % daysInWeek];
  };

  setTime = () => {
    this.setDate();
    clearInterval(interval);
    interval = setInterval(() => {
      this.timer();
    }, 1000);
  };

  getQuery = () => {
    const queryArr = [];
    const month = this.locationDate.getMonth();
    const hour = this.locationDate.getHours();

    if (month === 11 || month < 2) {
      queryArr.push('winter');
    } else if (month > 1 && month < 5) {
      queryArr.push('spring');
    } else if (month > 4 && month < 8) {
      queryArr.push('summer');
    } else if (month > 7 && month < 11) {
      queryArr.push('autumn');
    }

    if (hour < 6) {
      queryArr.push('night');
    } else if (hour > 5 && hour < 12) {
      queryArr.push('morning');
    } else if (hour > 11 && hour < 18) {
      queryArr.push('day');
    } else if (hour > 17) {
      queryArr.push('evening');
    }

    return queryArr.join(' ');
  };
}

export default TimeHandler;
