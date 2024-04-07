const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const photoFullContainer = document.querySelector('.big-picture');
const commentContainer = photoFullContainer.querySelector('.social__comments');
const commentTemplate = commentContainer.querySelector('.social__comment');
const commentSocialCount = photoFullContainer.querySelector('.social__comment-count');
const commentLoader = photoFullContainer.querySelector('.social__comments-loader');


const rendeNextComments = () => {
  const commentFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const currentComment = commentTemplate.cloneNode(true);

    currentComment.querySelector('.social__picture').src = comment.avatar;
    currentComment.querySelector('.social__picture').alt = comment.name;
    currentComment.querySelector('.social__text').textContent = comment.message;

    commentFragment.appendChild(currentComment);
  });

  commentContainer.appendChild(commentFragment);
  commentSocialCount.querySelector('.social__comment-shown-count').textContent = renderedCommentsLength;
  commentSocialCount.querySelector('.social__comment-total-count').textContent = comments.length;

  if (renderedCommentsLength >= comments.length) {
    commentLoader.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  commentContainer.innerHTML = '';
  commentLoader.classList.remove('hidden');
  commentLoader.removeEventListener('click', rendeNextComments);
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  rendeNextComments();

  commentLoader.addEventListener('click', rendeNextComments);

};

export {renderComments, clearComments};
