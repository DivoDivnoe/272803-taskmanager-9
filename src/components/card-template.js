import {Task} from '../mocks';

const getCardTemplate = (data) => {
  const date = new Date(data.dueDate);

  return `
  <article class="
    card card--${data.color}
    ${data.dueDate < Date.now() ? `card--deadline` : ``}
    ${Task.WEEK_DAYS.some((day) => data.repeatingDays[day]) ? `card--repeat` : ``}
  ">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">${data.description}</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${date.getDate()} ${Task.MONTHS[date.getMonth()]}</span>
                  <span class="card__time">${date.toLocaleTimeString(`en-US`, {hour: `2-digit`, minute: `2-digit`})}</span>
                </p>
              </div>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${[...data.tags].map((tag) => `
                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name">
                      #${tag}
                    </span>
                  </span>
                `).join(` `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
`;
};

export default getCardTemplate;
