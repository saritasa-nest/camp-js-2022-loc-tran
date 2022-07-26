import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AnimeDto } from '@js-camp/core/dtos/anime.dto';
import { PaginationDto } from '@js-camp/core/dtos/pagination.dto';
import { paginationMapper } from '@js-camp/core/mappers/pagination.mapper';
import { AnimeMapper } from '@js-camp/core/mappers/anime.mapper';
import { Anime } from '@js-camp/core/models/anime';
import { Pagination } from '@js-camp/core/models/pagination';

import { environment } from '../../environments/environment';

const ANIME_URL = '/api/v1/anime/anime/';

/** Anime service. */
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = environment.apiUrl + ANIME_URL;

  public constructor(private http: HttpClient) {}

  /** Get Anime data. */
  public getAnime(): Observable<Pagination<Anime>> {
    return this.http.get<PaginationDto<AnimeDto>>(this.apiUrl)
      .pipe(map(pagination => paginationMapper.fromDto(pagination, AnimeMapper.fromDto)));
  }
}
