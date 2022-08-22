import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { map, Observable, switchMap, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal.component';
import { ImageModalComponent } from '../../../../shared/components/image-modal/image-modal.component';
import { AnimeService } from '../../../../core/services/anime.service';
import { HOME_ROUTE } from '../../auth/register/register.component';

export const DETAIL_ROUTE = `${HOME_ROUTE}/detail`;

/** Display detail of anime. */
@UntilDestroy()
@Component({
  selector: 'camp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  /** Anime detail data. */
  protected readonly detail$: Observable<AnimeDetail>;

  /** Anime id. */
  protected readonly animeId$: Observable<number>;

  public constructor(
    route: ActivatedRoute,
    private readonly animeService: AnimeService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
  ) {
    this.animeId$ = route.params.pipe(
      map(params => Number(params['animeId'])),
      tap(animeId => {
        if (isNaN(animeId)) {
          throw new Error('Invalid anime id');
        }
      }),
    );
    this.detail$ = this.animeId$.pipe(
      switchMap(animeId => animeService.getAnimeById(animeId)),
    );
  }

  /**
   * Open full size image.
   * @param imageUrl Image link.
   */
  public showFullSizeImage(imageUrl: string): void {
    this.dialog.open(ImageModalComponent, {
      data: imageUrl,
    });
  }

  /**
   * Delete an anime.
   * @param event Click event of delete button.
   * @param animeId Id of anime.
   */
  public onDeleteAnime(event: Event, animeId: number): void {
    event.stopPropagation();
    this.dialog.open(ConfirmModalComponent, {
      data: {
        handleAction: () => {
          this.animeService
            .deleteAnimeById(animeId)
            .pipe(
              tap(() => this.router.navigate([HOME_ROUTE])),
              untilDestroyed(this),
            )
            .subscribe();
        },
        title: 'Delete anime',
        message: 'This anime will be removed. Are you sure?',
      },
    });
  }
}
