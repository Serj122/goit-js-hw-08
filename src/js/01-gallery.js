// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);

galleryContainer.innerHTML = galleryCards;
galleryContainer.addEventListener('click', onSmallImageClick);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
         />
        </a>
        `
    )
    .join('');
}

function onSmallImageClick(evt) {
  evt.preventDefault();

  const isImage = evt.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
