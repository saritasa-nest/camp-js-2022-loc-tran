import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
import { MatDialog } from '@angular/material/dialog';
import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import {
  AnimeManagement,
  RatingType,
  SeasonType,
  SourceType,
} from '@js-camp/core/models/animeManagement';
import {
  combineLatestWith,
  debounceTime, map,
  Observable, of, startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Genre } from '@js-camp/core/models/genre';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AnimeService } from '../../../../core/services/anime.service';
import { GenreService } from '../../../../core/services/genre.service';
import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal.component';
import { Studio } from '@js-camp/core/models/studio';
import { StudioService } from 'apps/angular/src/core/services/studio.service';

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

  protected animeSource = Object.values(SourceType);

  protected animeRating = Object.values(RatingType);

  protected animeSeason = Object.values(SeasonType);

  protected readonly filteredGenre$: Observable<readonly Genre[]>;

  protected genreControl = new FormControl('');

  private readonly postGenre$ = new Subject<string>();

  private readonly addGenreToAnime$ = new Subject<string>();

  protected readonly filteredStudio$: Observable<readonly Studio[]>;

  protected studioControl = new FormControl('');

  private readonly postStudio$ = new Subject<string>();

  private readonly addStudioToAnime$ = new Subject<string>();

  @ViewChild('genreInput')
  private genreInput = {} as ElementRef;

  @ViewChild('studioInput')
  private studioInput = {} as ElementRef;

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
  ) {
    this.filteredGenre$ = this.genreControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      switchMap(searchKey => genreService.getGenres(searchKey ?? '')),
      map(genres => (genres ? this.filterGenre(genres) : [])),
    );

    this.filteredStudio$ = this.studioControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      switchMap(searchKey => studioService.getStudios(searchKey ?? '')),
      map(studios => (studios ? this.filterStudio(studios) : [])),
    );
  }

  /** @inheritdoc */
  public ngOnInit(): void {
    this.postGenre$
      .pipe(
        switchMap(genreName =>
          this.genreService.postGenre({
            name: genreName,
          })),
        tap(newGenre => {
          this.addGenreToAnime$.next(newGenre.name);
        }),
        untilDestroyed(this),
      )
      .subscribe();

    this.managementForm.patchValue({ ...this.animeData });

    this.addGenreToAnime$
      .pipe(
        switchMap(genreName =>
          this.genreService
            .getGenres(genreName)
            .pipe(combineLatestWith(of(genreName)))),
        tap(([genres, genreName]) => {
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
            this.genreControl.setValue('');
            this.genreInput.nativeElement.value = '';
          }
        }),
        untilDestroyed(this),
      )
      .subscribe();

    this.postStudio$
      .pipe(
        switchMap(studioName =>
          this.studioService.postStudio({
            name: studioName,
          })),
        tap(newStudio => {
          this.addStudioToAnime$.next(newStudio.name);
        }),
        untilDestroyed(this),
      )
      .subscribe();

    this.managementForm.patchValue({ ...this.animeData });

    this.addStudioToAnime$
      .pipe(
        switchMap(studioName =>
          this.studioService
            .getStudios(studioName)
            .pipe(combineLatestWith(of(studioName)))),
        tap(([studios, studioName]) => {
          const newStudio = studios.find(
            studio => studio.name.toLowerCase() === studioName.toLowerCase(),
          );
          if (newStudio === undefined) {
            this.addNewStudio(studioName);
          } else {
            this.managementForm.controls.studiosData.setValue([
              ...(this.managementForm.controls.studiosData.value ?? []),
              newStudio,
            ]);
            this.studioControl.setValue('');
            this.studioInput.nativeElement.value = '';
          }
        }),
        untilDestroyed(this),
      )
      .subscribe();
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
    this.addGenreToAnime$.next(event.value);
  }

  /**
   * Add selected genre to anime.
   * @param event Event of select genre.
   */
  public selectGenre(event: MatAutocompleteSelectedEvent): void {
    this.addGenreToAnime$.next(event.option.value);
  }

  /**
 * Remove studio from anime.
 * @param studio Studio object to remove.
 */
  public removeStudio(studio: Studio): void {
    if (this.managementForm.controls.studiosData.value === null) {
      return;
    }
    this.managementForm.controls.studiosData.setValue(
      this.managementForm.controls.studiosData.value.filter(
        animeStudio => animeStudio.id !== studio.id,
      ),
    );
  }

  /**
 * Add new studio to anime.
 * @param event Event of adding studio.
 */
  public inputStudio(event: MatChipInputEvent): void {
    this.addStudioToAnime$.next(event.value);
  }

  /**
   * Add selected studio to anime.
   * @param event Event of select studio.
   */
  public selectStudio(event: MatAutocompleteSelectedEvent): void {
    this.addStudioToAnime$.next(event.option.value);
  }

  private addNewGenre(genreName: string): void {
    this.dialog.open(ConfirmModalComponent, {
      data: () => {
        this.postGenre$.next(genreName);
      },
    });
  }

  private addNewStudio(studioName: string): void {
    this.dialog.open(ConfirmModalComponent, {
      data: () => {
        this.postStudio$.next(studioName);
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

  private filterStudio(studios: readonly Studio[]): readonly Studio[] {
    const existedStudios = this.managementForm.controls.studiosData.value?.map(
      studio => studio.name,
    );
    if (existedStudios === undefined) {
      return studios;
    }
    return studios.filter(studio => !existedStudios.includes(studio.name));
  }
}
