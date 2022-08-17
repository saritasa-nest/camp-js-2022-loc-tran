import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import { Studio } from '@js-camp/core/models/animeDetail';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  AnimeManagement,
  RatingType,
} from '@js-camp/core/models/animeManagement';
import { Genre } from '@js-camp/core/models/genre';
import { AnimeService } from 'apps/angular/src/core/services/anime.service';
import {
  debounceTime,
  filter,
  map,
  Observable,
  ReplaySubject,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from 'apps/angular/src/shared/components/confirm-modal/confirm-modal.component';
import { GenreService } from 'apps/angular/src/core/services/genre.service';

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

  protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  protected animeStatus = Object.values(AnimeStatus);

  protected animeType = Object.values(AnimeType);

  protected animeRating = Object.values(RatingType);

  protected genreControl = new FormControl('');

  protected readonly filteredGenre$: Observable<readonly Genre[]>;

  private readonly genresSnapshot$ = new ReplaySubject<Genre>(1);

  private readonly postGenre$ = new Subject<string>();

  @ViewChild('genreInput')
  private genreInput = {} as ElementRef;

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
    genresData: new FormControl<readonly Genre[]>([]),
  });

  public constructor(
    private readonly animeService: AnimeService,
    private readonly dialog: MatDialog,
    private readonly genreService: GenreService,
  ) {
    this.filteredGenre$ = this.genreControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(searchKey => genreService.getGenres(searchKey ?? '')),
      map(genres => (genres ? this.filterGenre(genres) : [])),
    );
  }

  /** @inheritdoc */
  public ngOnInit(): void {
    // this.genreService
    //   .getGenres()
    //   .pipe(
    //     tap(genres => {
    //       this.genres = [...genres];
    //     }),
    //     untilDestroyed(this),
    //   )
    //   .subscribe();

    this.postGenre$
      .pipe(
        switchMap(genreName =>
          this.genreService.postGenre({
            name: genreName,
          })),
        tap(newGenre => {
          this.addGenreToAnime(newGenre.name);
        }),
        untilDestroyed(this),
      )
      .subscribe();

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
    if (this.managementForm.controls.genresData.value === null) {
      return;
    }
    this.managementForm.controls.genresData.setValue(
      this.managementForm.controls.genresData.value.filter(
        animeGenre => animeGenre.id !== genre.id,
      ),
    );
  }

  /**
   * Add new genre to anime.
   * @param event Event of adding genre.
   */
  public inputGenre(event: MatChipInputEvent): void {
    console.log('input')
    this.addGenreToAnime(event.value);
    this.genreControl.setValue('');
    this.genreInput.nativeElement.value = '';
  }

  /**
   * Add selected genre to anime.
   * @param event Event of select genre.
   */
  public selectGenre(event: MatAutocompleteSelectedEvent): void {
    console.log('select')
    this.addGenreToAnime(event.option.value)
    this.genreControl.setValue('');
    this.genreInput.nativeElement.value = '';
  }

  private addGenreToAnime(genreName: string): void {
    this.genreService
      .getGenres(genreName)
      .pipe(
        tap(genres => {
          const newGenre = genres.find(
            genre => genre.name.toLowerCase() === genreName.toLowerCase(),
          );
          if (newGenre === undefined) {
            this.addNewGenre(genreName);
          } else {
            this.managementForm.controls.genresData.setValue([
              ...(this.managementForm.controls.genresData.value ?? []),
              newGenre,
            ]);
          }
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  private addNewGenre(genreName: string): void {
    this.dialog.open(ConfirmModalComponent, {
      data: () => {
        this.postGenre$.next(genreName);
      },
    });
  }

  private filterGenre(genres: readonly Genre[]): readonly Genre[] {
    const existedGenres = this.managementForm.controls.genresData.value?.map(
      genre => genre.name,
    );
    if (existedGenres === undefined) {
      return genres;
    }
    return genres.filter(genre => !existedGenres.includes(genre.name));
  }

  public optionFocused() {
    console.log('focused');
  }
}
