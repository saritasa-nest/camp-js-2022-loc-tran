/** Zoom in image. */
export function showImage(): void {
  const image = document.querySelector('.detail__media-image');
  const backdrop = document.querySelector('.backdrop');
  backdrop?.classList.add('show');
  image?.classList.add('zoom-in');
}

/** Zoom out image. */
export function minimizeImage(): void {
  const image = document.querySelector('.detail__media-image');
  const backdrop = document.querySelector('.backdrop');
  backdrop?.classList.remove('show');
  image?.classList.remove('zoom-in');
}
