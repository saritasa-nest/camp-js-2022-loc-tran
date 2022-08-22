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
import { map, Observable, switchMap } from 'rxjs';

import { AnimeManagementDto } from '@js-camp/core/dtos/animeManagement.dto';
import { AnimeManagementMapper } from '@js-camp/core/mappers/animeManagement.mapper';
import {
  AnimeManagement,
  AnimeManagementPost,
} from '@js-camp/core/models/animeManagement';

import { S3UploadDto } from '@js-camp/core/dtos/S3Upload.dto';

import { AppConfigService } from './app-config.service';
import { S3CloudService } from './s3-cloud.service';

const ANIME_URL = '/anime/anime/';
const S3_URL = '/s3direct/get_params/';

/** Anime service. */
@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private readonly animeApiAddress = new URL(this.appConfig.apiUrl + ANIME_URL);
  private readonly s3ApiAddress = new URL(this.appConfig.apiUrl + S3_URL);

  public constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfigService,
    private readonly s3CloudService: S3CloudService,
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

  /**
   * Post new anime.
   * @param animeData Data of new anime.
   */
  public postAnime(
    animeData: AnimeManagementPost,
  ): Observable<AnimeManagement> {
    return this.http
      .post<AnimeManagementDto>(`${this.animeApiAddress.href}`, {
      ...AnimeManagementMapper.toPostDto(animeData),
    })
      .pipe(map(animeDataDto => AnimeManagementMapper.fromDto(animeDataDto)));
  }

  /**
   * Put edited anime.
   * @param id Id of anime.
   * @param animeData Data of edited anime.
   */
  public putAnimeById(
    id: Anime['id'],
    animeData: AnimeManagementPost,
  ): Observable<AnimeManagement> {
    return this.http
      .put<AnimeManagementDto>(`${this.animeApiAddress.href}${id}/`, {
      ...AnimeManagementMapper.toPostDto(animeData),
    })
      .pipe(map(animeDataDto => AnimeManagementMapper.fromDto(animeDataDto)));
  }

  /**
   * Post anime poster to s3 cloud.
   * @param image Image file.
   */
  public postAnimePoster(image: File): Observable<string> {
    return this.http
      .post<S3UploadDto>(`${this.s3ApiAddress}`, {
      dest: 'anime_images',
      filename: image.name,
    })
      .pipe(
        switchMap(s3UploadData =>
          this.s3CloudService.upLoadImage(s3UploadData, image)),
      );
  }
}
