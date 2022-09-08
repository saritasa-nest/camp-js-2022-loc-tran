import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { StudioDto } from '@js-camp/core/dtos/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';
import { Studio, StudioPost } from '@js-camp/core/models/studio';

import { http } from '..';

const STUDIO_URL = 'anime/studios/';

export namespace StudiosService {

  /** Fetches a list of studios. */
  export async function fetchStudios(): Promise<Studio[]> {
    const { data } = await http.get<PaginationDto<StudioDto>>(STUDIO_URL);
    return data.results.map(dto => StudioMapper.fromDto(dto));
  }

  /**
   * Fetches studios by search key.
   * @param key Search key.
   */
  export async function getStudiosByKey(key: string): Promise<Studio[]> {
    const { data } = await http.get<PaginationDto<StudioDto>>(STUDIO_URL, {
      params: {
        search: key,
      },
    });
    return data.results.map(dto => StudioMapper.fromDto(dto));
  }

  /**
   * Add new studio.
   * @param studioPost Studio post data.
   */
  export async function addStudio(studioPost: StudioPost): Promise<Studio> {
    const { data } = await http.post<StudioDto>(STUDIO_URL, {
      name: studioPost.name,
    });
    return StudioMapper.fromDto(data);
  }
}
