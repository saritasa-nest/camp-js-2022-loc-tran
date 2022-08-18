import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudioDto } from '@js-camp/core/dtos/studio.dto';
import { StudioMapper } from '@js-camp/core/mappers/studio.mapper';
import { Pagination } from '@js-camp/core/models/pagination';
import { Studio, StudioPost } from '@js-camp/core/models/studio';
import { Observable, map } from 'rxjs';

import { AppConfigService } from './app-config.service';

const STUDIO_URL = '/api/v1/anime/studios/';

/** Handle studio data. */
@Injectable({
  providedIn: 'root',
})
export class StudioService {
  private studioApiAddress = new URL(STUDIO_URL, this.appConfig.apiUrl);

  public constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfigService,
  ) {}

  /**
   * Get studios.
   * @param search Search key for studios.
   */
  public getStudios(search = ''): Observable<readonly Studio[]> {
    return this.http
      .get<Pagination<StudioDto>>(this.studioApiAddress.href, {
      params: { search },
    })
      .pipe(
        map(paginationStudio =>
          paginationStudio.results.map(studioDto =>
            StudioMapper.fromDto(studioDto))),
      );
  }

  /**
   * Add new studio.
   * @param studio New studio to add.
   */
  public postStudio(studio: StudioPost): Observable<Studio> {
    return this.http
      .post<StudioDto>(this.studioApiAddress.href, StudioMapper.toPostDto(studio))
      .pipe(map(studioDto => StudioMapper.fromDto(studioDto)));
  }
}
