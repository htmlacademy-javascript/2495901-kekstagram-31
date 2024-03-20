const checkStringLength = (string = '', maxLength = 1) => string.length <= maxLength;


const isPalindrome = (string) => {
  if (!string) {
    return false;
  }
  string = string.replaceAll(' ', '').toUpperCase();

  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const getRandomNumber = (from, before) => {
  const lower = Math.ceil(Math.min(from, before));
  const upper = Math.floor(Math.max(from, before));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const incrementCounter = (() => {
  let count = 1;
  return function() {
    return count++;
  };
});

export {getRandomNumber};
export {getRandomArrayElement};
export {incrementCounter};
