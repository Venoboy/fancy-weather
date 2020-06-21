const langSelector = () => {
  const dropdown = document.querySelector('.language-switcher');
  dropdown.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if ([...dropdown.classList].includes('expanded')) {
      dropdown.classList.remove('expanded');
      const label = e.target.getAttribute('for');
      const currentVariant = document.getElementById(label);
      currentVariant.checked = true;
    } else {
      dropdown.classList.add('expanded');
    }
  };

  document.onclick = () => {
    dropdown.classList.remove('expanded');
  };
};

export default langSelector;
