const FILTER = {
  ALL: `all`,
  OVERDUE: `overdue`,
  TODAY: `today`,
  FAVORITES: `favorites`,
  REPEATING: `repeating`,
  TAGS: `tags`,
  ARCHIVE: `archive`,
};

const counters = {
  [FILTER.ALL](tasks) {
    return tasks.length;
  },
  [FILTER.OVERDUE](tasks) {
    return tasks.filter((task) => task.dueDate < Date.now()).length;
  },
  [FILTER.TODAY]() {
    return 0;
  },
  [FILTER.FAVORITES](tasks) {
    return tasks.filter((task) => task.isFavorite).length;
  },
  [FILTER.REPEATING](tasks) {
    return tasks.filter((task) => task.repeatingDays.length).length;
  },
  [FILTER.TAGS](tasks) {
    return tasks.filter((task) => task.tags.length).length;
  },
  [FILTER.ARCHIVE](tasks) {
    return tasks.filter((task) => task.isArchive).length;
  }
};

const filtersNames = Object.values(FILTER);

const createFilters = (tasks) => {
  return filtersNames.map((name) => ({
    name,
    count: () => counters[name](tasks),
  }));
};

export default createFilters;
