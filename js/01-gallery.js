import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);
const galleryList = (acc, { preview, original, description }) => {
  return (acc +
    `<div class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}" />
  </a>
  </div>`);
};

const galleryCards = galleryItems.reduce(galleryList, "");
const items = document.querySelector(".gallery");
items.insertAdjacentHTML("afterbegin", galleryCards);
items.addEventListener("click", clickImage);

function clickImage(event) {
  const image = event.target.classList.contains("gallery__image");
  if (!image) return;

  event.preventDefault();

  const modal = basicLightbox.create(
    `<div class="modal">
    <img src = "${event.target.dataset.source}"/>
    </div>`,
    {
      closable: true,
      onShow: (instance) => {
        instance.element().addEventListener("click", (e) => {
          if (e.target.nodeName === "IMG") {
            instance.close();
          }
        });
      },
    }
  );

  modal.show();

  if (event.target.nodeName === "IMG") {
    document.addEventListener("keydown", pressEsc);
  }

  function pressEsc(event) {
    if (event.code === "Escape") {
      modal.close();
      document.removeEventListener("keydown", pressEsc);
    }
  }
}

