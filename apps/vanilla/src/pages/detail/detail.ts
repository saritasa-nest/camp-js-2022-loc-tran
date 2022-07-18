import { renderHeader } from '../../script/renderToUI';
import { getAnimeById } from '../../services/fetchAnime';

renderHeader();
console.log(await getAnimeById('5876'))
