// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);


galleryContainer.innerHTML = galleryCards;


function createGallery(items) {
    return items.map(({ preview, original, description }) => 
    
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
};

const lightbox = new SimpleLightbox('.gallery a', { 
    captionSelector:'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
 });