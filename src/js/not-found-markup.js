import noImg from '../images/image-not-found.jpg

const favoriteGallerySection = document.querySelector(
  '#favorite-galery-section'
);

function whenNotFoundMarkup() {
  const notFoundImage = `<img
    class="not-found__img"
    src="${noImg}"
    alt="Something went wrong"
  />`;
  favoriteGallerySection.innerHTML = notFoundImage;
}

export { whenNotFoundMarkup };
