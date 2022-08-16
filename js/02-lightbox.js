import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);
const galleryList = (acc, { preview, original, description }) => {
  return (acc +
    `<li>
  <a class = "gallery__item" href = "${original}">
  <img class = "gallery__image"
      src = "${preview}"
      alt = "${description}" />
  </a>
  </li>`);
};

const galleryCards = galleryItems.reduce(galleryList, "");
const items = document.querySelector(".gallery");
items.insertAdjacentHTML("afterbegin", galleryCards);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
