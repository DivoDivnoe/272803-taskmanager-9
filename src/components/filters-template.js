const getFiltersTemplate = (items) => `
  <section class="main__filter filter container">
    ${items.map((filter, index) => `
    <input
      type="radio"
      id="filter__${filter.name}"
      class="filter__input visually-hidden"
      name="filter"
      checked=${!index}
      ${!filter.count() && `disabled`}
    />
    <label for="filter__${filter.name}" class="filter__label">
      ${filter.name} <span class="filter__${filter.name}-count">${filter.count()}</span></label
    >
    `).join(``)}
  </section>
`;

export default getFiltersTemplate;
