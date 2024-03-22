import {getDataArrayMiniatures} from './data';
import {
  getRandomNumber,
  getRandomArrayElement,
  incrementCounter
} from './utils';

const CONSTANTS = {
  MAX_NUMBER_OF_PHOTOS: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MIN_COMMENTS: 0,
  MAX_COMMENTS: 30,
  MIN_AVATAR_NUMBER: 1,
  MAX_AVATAR_NUMBER: 6
};

const {MESSAGES, NAMES} = getDataArrayMiniatures();


const countPhoto = incrementCounter();
const countComment = incrementCounter();

const createComment = () => {

  const id = countComment();
  return {
    id,
    avatar: `img/avatar-${getRandomNumber(CONSTANTS.MIN_AVATAR_NUMBER, CONSTANTS.MAX_AVATAR_NUMBER)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

const createPhoto = () => {
  const id = countPhoto();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: `Это фотография #${id}`,
    likes: getRandomNumber(CONSTANTS.MIN_LIKES, CONSTANTS.MAX_LIKES),
    commens: Array.from({length: getRandomNumber(CONSTANTS.MIN_COMMENTS, CONSTANTS.MAX_COMMENTS)}, createComment)
  };
};

const createPhotos = () => Array.from({length: CONSTANTS.MAX_NUMBER_OF_PHOTOS}, createPhoto);

export {createPhotos};
