import getCardTemplate from './card-template';
import getCardFormTemplate from './card-form-template';
import getLoadMoreButtonTemplate from './loadmore-button-template';

const getContentTemplate = (tasks) => `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
      ${getCardFormTemplate()}
      ${tasks
        .map((item) => getCardTemplate(item))
        .join(``)}
    </div>
    ${getLoadMoreButtonTemplate()}
  </section>
`;

export default getContentTemplate;
