import {createPhotos} from './create-photo.js';
import {renderThumbnails} from './render-photo.js';

const photos = createPhotos();
renderThumbnails(photos);

const photoFullContainer = document.querySelector('.big-picture');
const photoFullImg = photoFullContainer.querySelector('.big-picture__img').querySelector('img');
const photoFullButtonClose = photoFullContainer.querySelector('.big-picture__cancel');

const likesCount = photoFullContainer.querySelector('.likes-count');

const commentContainer = photoFullContainer.querySelector('.social__comments');
const commentTemplate = commentContainer.querySelector('.social__comment');
const commentSocialCaption = photoFullContainer.querySelector('.social__caption');
const commentSocialCount = photoFullContainer.querySelector('.social__comment-count');
const commentLoader = photoFullContainer.querySelector('.social__comments-loader');

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
  photoFullContainer.classList.add('hidden');
  document.removeEventListener('keydown', onPhotoFullKeyDown);
  photoFullButtonClose.removeEventListener('click', closePhotoFull);
  document.body.classList.remove('modal-open');
}

const renderPhotoFullById = (photoId) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(photoId));
  const commentFragment = document.createDocumentFragment();

  photoFullImg.src = currentPhoto.url;

  likesCount.textContent = currentPhoto.likes;
  commentContainer.innerHTML = '';

  currentPhoto.commens.forEach((comment) => {
    const currentComment = commentTemplate.cloneNode(true);

    currentComment.querySelector('.social__picture').src = comment.avatar;
    currentComment.querySelector('.social__picture').alt = comment.name;
    currentComment.querySelector('.social__text').textContent = comment.message;

    commentFragment.appendChild(currentComment);
  });

  commentContainer.appendChild(commentFragment);
  commentSocialCaption.textContent = currentPhoto.description;

  commentSocialCount.querySelector('.social__comment-shown-count').textContent = commentContainer.childElementCount;
  commentSocialCount.querySelector('.social__comment-total-count').textContent = currentPhoto.commens.length;

  commentSocialCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

function addClicKEvent(photoContainer1, openPhotoFull1, renderPhotoFullById1) {
  photoContainer1.addEventListener('click', (evt) => {
    const currentPhotoNode = evt.target.closest('.picture');
    openPhotoFull1(evt);
    renderPhotoFullById1(currentPhotoNode.dataset.id);
  });
}

export {addClicKEvent, openPhotoFull, renderPhotoFullById};


