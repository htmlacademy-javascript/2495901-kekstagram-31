import {createPhotos} from './create-photo.js';
import {renderThumbnails} from './render-photo.js';

const photos = createPhotos();

renderThumbnails(photos);

const photoConteiner = document.querySelector('.pictures');
const photoFullContainer = document.querySelector('.big-picture');
const photoFullImg = photoFullContainer.querySelector('.big-picture__img').querySelector('img');
const photoFullLikeCount = photoFullContainer.querySelector('.likes-count');
const photoFullUlCount = document.querySelector('.social__comments').children;
const photoFullCommentShowCount = photoFullContainer.querySelector('.social__comment-shown-count');
const photoFullCommentTotalCount = photoFullContainer.querySelector('.social__comment-total-count');


const openFullPhoto = (photoId) => {
  const photoCurrent = photos.find((photo) => photo.id === Number(photoId));
  const commentFragment = document.createDocumentFragment();

};


photoConteiner.addEventListener('click', (evt) => {
  const currentPhotoNode = evt.target.closest('.picture');

  if (currentPhotoNode) {
    photoFullContainer.classList.remove('hidden');
  }
  photoFullImg.src = photos[0].url;
  photoFullLikeCount.textContent = photos[0].likes;
  photoFullCommentShowCount.textContent = photoFullUlCount.length;
  photoFullCommentTotalCount.textContent = photos[0].commens.length;

});


