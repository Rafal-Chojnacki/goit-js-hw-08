// Add imports above this line
import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery')
const items = []
for (const image of galleryItems) {
  const item = document.createElement('li')
  item.insertAdjacentHTML("beforeend", `
  <div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>` );
  items.push(item)
};
gallery.append(...items)


let lightbox = new SimpleLightbox('.gallery a', 
{
  captionDelay: 250,
  captionsData: "alt"
});