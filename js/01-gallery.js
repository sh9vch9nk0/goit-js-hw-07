import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
  )
  .join("");


gallery.insertAdjacentHTML("beforeend", galleryList);
gallery.addEventListener("click", openImg);

let picture;

function openImg(event) {
  event.preventDefault();
  if (event.target.nodeName === "DIV") {
    return;
  }
  picture = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source} width="80%" style="margin: auto; display: block"> 
    </div>
`);

  picture.show();
  document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (event.key === "Escape") {
    picture.close();
    document.removeEventListener("keydown", closeModal);
  }
}