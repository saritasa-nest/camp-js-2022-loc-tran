import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { Observable, switchMap, tap } from 'rxjs';

import { ImageModalComponent } from '../../../../shared/components/image-modal/image-modal.component';

import { AnimeService } from '../../../../core/services/anime.service';

/** Display detail of anime. */
@Component({
  selector: 'camp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  /** Anime detail data. */
  public readonly detail$: Observable<AnimeDetail>;

  public constructor(
    route: ActivatedRoute,
    animeService: AnimeService,
    private readonly dialog: MatDialog,
  ) {
    this.detail$ = route.params.pipe(
      tap(params => {
        if (params['animeId'] === undefined) {
          throw (new Error('Invalid anime id'));
        }
      }),
      switchMap(params => animeService.getAnimeById(params['animeId'])),
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
}
