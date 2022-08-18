import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { AnimeDetailDto } from '@js-camp/core/dtos/animeDetail.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { DetailMapper } from '@js-camp/core/mappers/detail.mapper';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { Pagination } from '@js-camp/core/models/pagination';
import { map, Observable } from 'rxjs';

import { AnimeManagementDto } from '@js-camp/core/dtos/animeManagement.dto';
import { AnimeManagementMapper } from '@js-camp/core/mappers/animeManagement.mapper';
import { AnimeManagement } from '@js-camp/core/models/animeManagement';

import { AppConfigService } from './app-config.service';

const ANIME_URL = '/api/v1/anime/anime/';

/** Anime service. */
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animeApiAddress = new URL(ANIME_URL, this.appConfig.apiUrl);

  public constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfigService,
  ) {}

  /**
   * Get anime data.
   * @param params Query params.
   */
  public getAnime(
    params: HttpParams = new HttpParams(),
  ): Observable<Pagination<Anime>> {
    return this.http
      .get<PaginationDto<AnimeDto>>(this.animeApiAddress.href, { params })
      .pipe(
        map(pagination =>
          paginationMapper.fromDto(pagination, AnimeMapper.fromDto)),
      );
  }

  /**
   * Get anime detail by Id.
   * @param id Id of anime.
   */
  public getAnimeById(id: AnimeDetail['id']): Observable<AnimeDetail> {
    return this.http
      .get<AnimeDetailDto>(`${this.animeApiAddress.href}${id}/`)
      .pipe(map(animeDetailDto => DetailMapper.fromDto(animeDetailDto)));
  }

  /**
   * Get anime management detail for editor.
   * @param id Id of anime.
   */
  public getManageInformationAnime(id: string): Observable<AnimeManagement> {
    return this.http
      .get<AnimeManagementDto>(`${this.animeApiAddress.href}${id}/`)
      .pipe(
        map(animeManagementDto =>
          AnimeManagementMapper.fromDto(animeManagementDto)),
      );
  }

  /**
   * Delete anime by id.
   * @param id Id of anime.
   */
  public deleteAnimeById(id: number): Observable<null> {
    return this.http
      .delete(`${this.animeApiAddress.href}${id}/`)
      .pipe(map(() => null));
  }
}
