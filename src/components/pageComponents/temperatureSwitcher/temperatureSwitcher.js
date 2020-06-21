const temperatureSwitcher = () => {
  const st = {};
  let choice = 'C';

  st.flap = document.querySelector('#flap');
  st.toggle = document.querySelector('.toggle');
  st.content = document.querySelector('.content');

  st.choice1 = document.querySelector('#tempF');
  st.choice2 = document.querySelector('#tempC');

  st.toggle.style.transition = 'none';
  st.flap.style.transition = 'none';
  st.content.style.transition = 'none';
  if (localStorage.getItem('tempSwitcher') === 'F') {
    st.choice1.checked = true;
    choice = 'F';
  }

  st.flap.addEventListener('transitionend', () => {
    if (st.choice1.checked) {
      st.toggle.style.transform = 'rotateY(-15deg)';
      setTimeout(() => {
        st.toggle.style.transform = '';
      }, 400);
    } else {
      st.toggle.style.transform = 'rotateY(15deg)';
      setTimeout(() => {
        st.toggle.style.transform = '';
      }, 400);
    }
  });

  st.clickHandler = (e) => {
    if (e.target.tagName === 'LABEL') {
      setTimeout(() => {
        st.flap.children[0].textContent = e.target.textContent;
      }, 250);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st[choice === 'F' ? 'choice1' : 'choice2'].value;
    setTimeout(() => {
      st.toggle.style.transition = 'transform cubic-bezier(0, 0, 0.30, 2) .4s, box-shadow .4s';
      st.flap.style.transition = 'transform cubic-bezier(0.4, 0, 0.2, 1) .5s';
      st.content.style.transition = 'transform 0s linear .25s';
    }, 0);
  });

  document.addEventListener('click', (e) => st.clickHandler(e));
};

export default temperatureSwitcher;
