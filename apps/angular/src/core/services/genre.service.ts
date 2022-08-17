import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenreDto } from '@js-camp/core/dtos/genre.dto';
import { GenreMapper } from '@js-camp/core/mappers/genre.mapper';
import { Genre, GenrePost } from '@js-camp/core/models/genre';
import { Pagination } from '@js-camp/core/models/pagination';
import { Observable, map } from 'rxjs';

import { AppConfigService } from './app-config.service';

const GENRE_URL = '/api/v1/anime/genres/';

/** Service for genres.. */
@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private genreApiAddress = new URL(GENRE_URL, this.appConfig.apiUrl);

  public constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfigService,
  ) {}

  /**
   * Get genres.
   * @param search Search key for genres.
   */
  public getGenres(search = ''): Observable<readonly Genre[]> {
    return this.http
      .get<Pagination<GenreDto>>(this.genreApiAddress.href, {
      params: { search },
    })
      .pipe(
        map(paginationGenre =>
          paginationGenre.results.map(genreDto =>
            GenreMapper.fromDto(genreDto))),
      );
  }

  /**
   * Add new genre.
   * @param genre New Genre to add.
   */
  public postGenre(genre: GenrePost): Observable<Genre> {
    return this.http
      .post<GenreDto>(this.genreApiAddress.href, GenreMapper.toPostDto(genre))
      .pipe(map(genreDto => GenreMapper.fromDto(genreDto)));
  }
}
