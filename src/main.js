import createElement from './components/create-element';
import getMenuTemplate from './components/menu-template';
import getSearchTemplate from './components/search-temaplate';
import getFiltersTemplate from './components/filters-template';
import getContentTemplate from './components/content-template';

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
