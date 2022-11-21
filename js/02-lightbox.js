import { galleryItems } from "./gallery-items.js";

const galleryDiv = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`
  )
  .join("");

galleryDiv.innerHTML = gallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});