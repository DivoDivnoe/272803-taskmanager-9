import {getRandomNumber, getRandomBoolean, getRandomSign} from './utils';

const MAX_NUM_OF_TAGS = 3;
const MILLISECONDS_IN_DAY = 7 * 24 * 60 * 60 * 60;

const Task = {
  DESCRIPTIONS: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  WEEK_DAYS: [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`],
  TAGS: [`homework`, `theory`, `practice`, `intensive`, `keks`],
  COLORS: [`black`, `yellow`, `blue`, `green`, `pink`],
};

const {DESCRIPTIONS, WEEK_DAYS, TAGS, COLORS} = Task;

const createTask = () => ({
  description: DESCRIPTIONS[getRandomNumber(DESCRIPTIONS.length)],
  dueDate: new Date().getTime() + getRandomSign() * MILLISECONDS_IN_DAY,
  tags: TAGS.sort(() => Math.random() - 0.5)
            .slice(0, getRandomNumber(MAX_NUM_OF_TAGS + 1)),
  color: COLORS[getRandomNumber(COLORS.length)],
  repeatingDays: WEEK_DAYS.reduce((acc, cur) => Object.assign(acc, {[cur]: getRandomBoolean()}), {}),
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean(),
});

const createTasksArray = (length) => Array.from({length}, () => createTask());

export default createTasksArray;
