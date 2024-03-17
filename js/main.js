const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Артём',
  'Мария',
  'Санёк',
  'Виктор',
  'Юлия',
  'Лолита',
  'Пётр',
];

const MAX_NUMBER_OF_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

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

const countPhoto = incrementCounter();
const countComment = incrementCounter();

const createPhoto = () => {
  const id = countPhoto();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: `Это фотография #${id}`,
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    commens: Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

const createComment = () => {

  const id = countComment();
  return {
    id,
    avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

const photos = Array.from({length: MAX_NUMBER_OF_PHOTOS}, createPhoto);
console.log(photos);
