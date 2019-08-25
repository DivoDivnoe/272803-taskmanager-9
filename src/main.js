import createElement from './components/create-element';
import {
  getContentTemplate,
  getMenuTemplate,
  getSearchTemplate,
  getFiltersTemplate
} from './components/templates';

document.addEventListener(`DOMContentLoaded`, () => {
  const menu = createElement(getMenuTemplate());
  const search = createElement(getSearchTemplate());
  const filter = createElement(getFiltersTemplate());
  const content = createElement(getContentTemplate());

  const main = document.querySelector(`.main`);
  const controlSection = main.querySelector(`.main__control`);
  controlSection.appendChild(menu);

  [search, filter, content].forEach((item) => main.appendChild(item));
});
