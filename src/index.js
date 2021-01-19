import css from "./style.css";
import menu from './menu.json'
import tamplates from './tamplates/menu.hbs'


const listItem = document.querySelector('.js-menu')
  console.log(listItem);

const markup = tamplates(menu)
console.log(markup);

listItem.insertAdjacentHTML('beforeend',markup)