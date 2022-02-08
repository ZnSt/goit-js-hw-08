// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const divRefs = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

divRefs.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
