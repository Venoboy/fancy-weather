import render from '../../presentational/render/render';


const form = document.querySelector('.form');
const formField = document.querySelector('.form__field');

const search = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    render(formField.value);
  };
};

export default search;
