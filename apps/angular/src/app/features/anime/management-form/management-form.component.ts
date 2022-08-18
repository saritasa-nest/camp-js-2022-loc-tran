import {
  ChangeDetectionStrategy,
  Component, Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  AnimeManagement,
  RatingType,
  SeasonType,
  SourceType,
} from '@js-camp/core/models/animeManagement';
import { Genre } from '@js-camp/core/models/genre';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  Observable,
} from 'rxjs';

import { Studio } from '@js-camp/core/models/studio';

import { StudioService } from '../../../../core/services/studio.service';

import { GenreService } from '../../../../core/services/genre.service';

/** Anime management form. */
@UntilDestroy()
@Component({
  selector: 'camp-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementFormComponent implements OnInit {
  /** Anime data for initial form data. */
  @Input() public animeData: AnimeManagement | null = null;

  /** Anime statuses. */
  protected animeStatus = Object.values(AnimeStatus);

  /** Anime types. */
  protected animeType = Object.values(AnimeType);

  /** Anime sources. */
  protected animeSource = Object.values(SourceType);

  /** Anime ratings. */
  protected animeRating = Object.values(RatingType);

  /** Anime seasons. */
  protected animeSeason = Object.values(SeasonType);

  /** Anime management form. */
  public managementForm = new FormGroup({
    titleEnglish: new FormControl<string>(''),
    titleJapanese: new FormControl<string>(''),
    image: new FormControl<string>(''),
    trailerYoutube: new FormControl<string>(''),
    type: new FormControl<string>(''),
    status: new FormControl<string>(''),
    source: new FormControl<string>(''),
    airing: new FormControl<boolean>(false),
    aired: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    rating: new FormControl<string>(''),
    season: new FormControl<string>(''),
    synopsis: new FormControl<string>(''),
    studiosData: new FormControl<readonly Studio[]>([]),
    genresData: new FormControl<readonly Genre[]>([]),
  });

  public constructor(
    private readonly dialog: MatDialog,
    private readonly genreService: GenreService,
    private readonly studioService: StudioService,
  ) { }

  /** @inheritdoc */
  public ngOnInit(): void {
    this.managementForm.patchValue({ ...this.animeData });
  }

  /**
   * Function track by for options.
   * @param value Option value.
   */
  public trackByOptionName(value: string): string {
    return value;
  }

  /**
   * Specify one item by id.
   * @param item Item in list.
   */
  public trackItemById(item: Genre | Studio): number {
    return item.id;
  }

  /**
   * Return item's name.
   * @param item Specific item.
   */
  public getItemName(item: Genre | Studio): string {
    return item.name;
  }

  /**
   * Get genre list by search key.
   * @param key Search keyword.
   */
  public getGenre(key: string): Observable<readonly Genre[]> {
    return this.genreService.getGenres(key);
  }

  /**
   * Post new genre.
   * @param genreName New genre's name.
   */
  public postGenre(genreName: string): Observable<Genre> {
    return this.genreService.postGenre({ name: genreName });
  }

  /**
   * Get studio list by search key.
   * @param key Search keyword.
   */
  public getStudio(key: string): Observable<readonly Studio[]> {
    return this.studioService.getStudios(key);
  }

  /**
   * Post new studio.
   * @param studioName New studio's name.
   */
  public postStudio(studioName: string): Observable<Studio> {
    return this.studioService.postStudio({ name: studioName });
  }
}
