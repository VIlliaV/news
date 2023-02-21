import { favoriteGallerySection } from './favorite';

export function whenNotFoundMarkup() {
  const notFoundImage = `<img
    class="not-found__img"
    src="/image-not-found.584be82b.jpg"
    alt="Something went wrong"
  />`;
  favoriteGallerySection.innerHTML = notFoundImage;
}
