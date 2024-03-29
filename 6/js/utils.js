const checkStringLength = (string = '', maxLength = 1) => string.length <= maxLength;

const getRandomNumber = (from, before) => {
  const lower = Math.ceil(Math.min(from, before));
  const upper = Math.floor(Math.max(from, before));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.lengt >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const incrementCounter = (() => {
  let count = 1;
  return () => count++;
});

const renderPack = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(makeElement(item)));
  container.appendChild(fragment);
};

export {
  getRandomNumber,
  getRandomArrayElement,
  incrementCounter,
  renderPack
};

