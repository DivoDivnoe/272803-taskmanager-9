const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomBoolean = () => Math.random() >= 0.5;
const getRandomSign = () => {
  const signs = [-1, 1];

  return signs[getRandomNumber(signs.length)];
};

export {getRandomNumber, getRandomBoolean, getRandomSign};
