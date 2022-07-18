import { Detail } from '@js-camp/core/models/detail';

import { showImage } from './effect';

/**
 * Render anime detail to UI.
 * @param data Anime detail data.
 */
export function renderDetail(data: Detail): void {
  const media = document.querySelector('.detail__media');
  const image = document.createElement('img');
  image.classList.add('detail__media-image');
  image.src = data.image;
  image.addEventListener('click', showImage);
  media?.append(image);
  if (data.trailerYoutube !== null) {
    const video = document.createElement('iframe');
    video.classList.add('detail__media-video');
    video.src = `https://www.youtube.com/embed/${data.trailerYoutube}`;
    media?.append(video);
  }

  const information = document.querySelector('.detail__information');
  information?.append(createInformationRaw('English title: ', data.titleEnglish));
  information?.append(createInformationRaw('Japanese title: ', data.titleJapanese));
  information?.append(createInformationRaw('Type: ', data.type));
  information?.append(createInformationRaw('Status: ', data.status));
  information?.append(createInformationRaw('Airing: ', data.airing ? 'Yes' : 'No'));
  information?.append(createInformationRaw('Aired start date: ', data.aired.start.toLocaleString()));
  information?.append(createInformationRaw('Aired end date: ', data.aired.end.toLocaleString()));
  information?.append(createInformationRaw('Synopsis: ', data.synopsis));
  information?.append(createInformationRaw('Genres: ', data.genresData.map(genre => genre.name).join(', ')));
  information?.append(createInformationRaw('Studio: ', data.studiosData.map(studio => studio.name).join(', ')));
}

/**
 * Create one raw in the information of anime.
 * @param title Title of the information.
 * @param content Content of the information.
 */
function createInformationRaw(title: string, content: string): HTMLElement {
  const label = document.createElement('label');
  label.classList.add('detail__information-label');
  const titleNode = document.createElement('span');
  titleNode.classList.add('detail__information-title');
  titleNode.innerHTML = title;
  const contentNode = document.createElement('span');
  contentNode.classList.add('detail__information-text');
  contentNode.innerHTML = content;
  label.append(titleNode, contentNode);
  return label;
}
