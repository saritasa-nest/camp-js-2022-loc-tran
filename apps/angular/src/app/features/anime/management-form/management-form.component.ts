import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import { Studio } from '@js-camp/core/models/animeDetail';
import {
  AnimeManagement,
  RatingType,
} from '@js-camp/core/models/animeManagement';
import { Genre } from '@js-camp/core/models/genre';
import { AnimeService } from 'apps/angular/src/core/services/anime.service';
import { Observable } from 'rxjs';

/** Anime management form. */
@Component({
  selector: 'camp-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementFormComponent implements OnInit {
  /** Anime data for initial form data. */
  @Input() public animeData: AnimeManagement | null = null;

  protected readonly genres$: Observable<readonly Genre[]>;

  protected animeStatus = Object.values(AnimeStatus);

  protected animeType = Object.values(AnimeType);

  protected animeRating = Object.values(RatingType);

  protected genreInput = new FormControl('');

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
    studios: new FormControl<readonly Studio[]>([]),
    genres: new FormControl<readonly Genre[]>([]),
  });

  public constructor(private animeService: AnimeService) {
    this.genres$ = animeService.getGenres();
  }

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
   * Remove genre from anime.
   * @param genre Genre object to remove.
   */
  public removeGenre(genre: Genre): void {
    console.log(genre);
  }

  /**
   * Add new genre to anime.
   * @param event Event of adding genre.
   */
  public addGenre(event: MatChipInputEvent): void {
    console.log(event);
  }

  /**
   * Add new genre to anime.
   * @param event Event of adding genre.
   */
  public selectedGenre(event: MatAutocompleteSelectedEvent): void {
    console.log(event);
  }
}
