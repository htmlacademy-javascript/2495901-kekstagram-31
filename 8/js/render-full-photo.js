import {createPhotos} from './create-photo.js';
import {renderThumbnails} from './render-photo.js';
import {renderComments, clearComments} from './render-comments.js';

const photos = createPhotos();
renderThumbnails(photos);

const photoFullContainer = document.querySelector('.big-picture');
const photoFullImg = photoFullContainer.querySelector('.big-picture__img').querySelector('img');
const photoFullButtonClose = photoFullContainer.querySelector('.big-picture__cancel');

const likesCount = photoFullContainer.querySelector('.likes-count');
const commentSocialCaption = photoFullContainer.querySelector('.social__caption');

const onPhotoFullKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoFull();
  }
};

function openPhotoFull (evt) {
  const currentPhotoNode = evt.target.closest('.picture');

  if (currentPhotoNode) {
    evt.preventDefault();
    photoFullContainer.classList.remove('hidden');
    document.addEventListener('keydown', onPhotoFullKeyDown);
    photoFullButtonClose.addEventListener('click', closePhotoFull);
  }
  document.body.classList.add('modal-open');
}

function closePhotoFull () {
  clearComments();

  photoFullContainer.classList.add('hidden');
  document.removeEventListener('keydown', onPhotoFullKeyDown);
  photoFullButtonClose.removeEventListener('click', closePhotoFull);
  document.body.classList.remove('modal-open');
}


const renderPhotoFullById = (photoId) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(photoId));
  photoFullImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentSocialCaption.textContent = currentPhoto.description;

  renderComments(currentPhoto.commens);
};

function addClicKEvent(containerPhotos, functionOpenPhotoFull, functionRenderPhotoFullById) {
  containerPhotos.addEventListener('click', (evt) => {
    const currentPhotoNode = evt.target.closest('.picture');
    functionOpenPhotoFull(evt);
    functionRenderPhotoFullById(currentPhotoNode.dataset.id);
  });
}

export {addClicKEvent, openPhotoFull, renderPhotoFullById};


