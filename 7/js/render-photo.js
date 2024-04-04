const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoConteiner = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  const photoImage = photoElement.querySelector('.picture__img');
  photoElement.dataset.id = photo.id;
  photoImage.src = photo.url;
  photoImage.alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.commens.length;
  return photoElement;
};

export const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => fragment.appendChild(createThumbnail(photo)));
  photoConteiner.appendChild(fragment);
};

export {photoConteiner};


