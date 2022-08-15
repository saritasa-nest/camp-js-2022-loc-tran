import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { AnimeDetailDto } from '@js-camp/core/dtos/animeDetail.dto';
import { DetailMapper } from '@js-camp/core/mappers/detail.mapper';

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
  public getAnimeById(id: string): Observable<AnimeDetail> {
    return this.http
      .get<AnimeDetailDto>(`${this.animeApiAddress}${id}/`)
      .pipe(map(animeDetailDto => DetailMapper.fromDto(animeDetailDto)));
  }

  /**
   * Delete anime by id.
   * @param id Id of anime.
   */
  public deleteAnimeById(id: number): Observable<null> {
    return this.http
      .delete(`${this.animeApiAddress.href}${id}/`).pipe(map(() => null));
  }
}
