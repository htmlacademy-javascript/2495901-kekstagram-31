import {createPhotos} from './create-photo.js';
import {renderThumbnails} from './render-photo.js';

const photos = createPhotos();

renderThumbnails(photos);

//const photoContainer = document.querySelector('.pictures');
const photoFullContainer = document.querySelector('.big-picture');
const photoFullImg = photoFullContainer.querySelector('.big-picture__img').querySelector('img');
const photoFullButtonClosed = photoFullContainer.querySelector('.big-picture__cancel');

const likesCount = photoFullContainer.querySelector('.likes-count');

const commentContainer = photoFullContainer.querySelector('.social__comments');
const commentTemplate = commentContainer.querySelector('.social__comment');
const commentSocialCaption = photoFullContainer.querySelector('.social__caption');
const commentSocialCount = photoFullContainer.querySelector('.social__comment-count');
const commentLoader = photoFullContainer.querySelector('.social__comments-loader');

// const photoFullCommentShowCount = photoFullContainer.querySelector('.social__comment-shown-count');
// const photoFullCommentTotalCount = photoFullContainer.querySelector('.social__comment-total-count');


const openFullPhoto = (photoId) => {
  const photoCurrent = photos.find((photo) => photo.id === Number(photoId));
  const commentFragment = document.createDocumentFragment();

};


photoContainer.addEventListener('click', (evt) => {
  const currentPhotoNode = evt.target.closest('.picture');

  if (currentPhotoNode) {
    photoFullContainer.classList.remove('hidden');
  }
  photoFullImg.src = photos[0].url;
  likesCount.textContent = photos[0].likes;
  photoFullCommentShowCount.textContent = commentTemplate.length;
  photoFullCommentTotalCount.textContent = photos[0].commens.length;

});


