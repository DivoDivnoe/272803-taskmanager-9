import getCardTemplate from './card-template';
import getCardFormTemplate from './card-form-template';
import getLoadMoreButtonTemplate from './loadmore-button-template';
import createTasksArray from '../mocks';

const NUMBER_OF_TASKS = 7;

const getContentTemplate = () => `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
      ${getCardFormTemplate()}
      ${createTasksArray(NUMBER_OF_TASKS)
        .map((item) => getCardTemplate(item))
        .join(``)}
    </div>
    ${getLoadMoreButtonTemplate()}
  </section>
`;

export default getContentTemplate;
