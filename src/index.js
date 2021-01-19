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



checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    localStorage.setItem('Theme', " ")
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK)
    localStorage.removeItem('Theme')
  }
})

 if (localStorage.getItem("Theme")) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
