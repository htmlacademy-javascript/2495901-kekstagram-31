import {addClicKEvent, openPhotoFull, renderPhotoFullById} from './render-full-photo.js';

addClicKEvent(document.querySelector('.pictures'), openPhotoFull, renderPhotoFullById);
