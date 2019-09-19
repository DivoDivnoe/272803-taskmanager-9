import createElement from './components/create-element';
import getMenuTemplate from './components/menu-template';
import getSearchTemplate from './components/search-temaplate';
import getFiltersTemplate from './components/filters-template';
import getContentTemplate from './components/content-template';
import createTasksArray from './mocks';
import createFilters from './components/create-filters';

const NUMBER_OF_TASKS = 7;

const tasks = createTasksArray(NUMBER_OF_TASKS);
const filters = createFilters(tasks);

document.addEventListener(`DOMContentLoaded`, () => {
  const menu = createElement(getMenuTemplate());
  const search = createElement(getSearchTemplate());
  const filter = createElement(getFiltersTemplate(filters));
  const content = createElement(getContentTemplate(tasks));

  const main = document.querySelector(`.main`);
  const controlSection = main.querySelector(`.main__control`);
  controlSection.appendChild(menu);

  [search, filter, content].forEach((item) => main.appendChild(item));
});
