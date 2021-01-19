import css from "./style.css";
import menu from './menu.json'
import tamplates from './tamplates/menu.hbs'
const checkbox = document.querySelector('.theme-switch__toggle')

const body = document.querySelector('body')

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const listItem = document.querySelector('.js-menu')
console.log(listItem);

const markup = tamplates(menu)
console.log(markup);

listItem.insertAdjacentHTML('beforeend', markup)

const themeSwitch = checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.classList.add(Theme.DARK)
    localStorage.setItem('Theme', DARK)
  } else {
    body.classList.remove(Theme.DARK)
    localStorage.removeItem('Theme')
  }
})

