import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';

import { AppConfigService } from './app-config.service';

const ANIME_URL = '/api/v1/anime/anime/';

/** Anime service. */
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = this.appConfig.apiUrl + ANIME_URL;

  public constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfigService,
  ) {}

  /** Get Anime data. */
  public getAnime(): Observable<readonly Anime[]> {
    return this.http
      .get<PaginationDto<AnimeDto>>(this.apiUrl)
      .pipe(
        map(
          pagination =>
            paginationMapper.fromDto(pagination, AnimeMapper.fromDto).results,
        ),
      );
  }
}
