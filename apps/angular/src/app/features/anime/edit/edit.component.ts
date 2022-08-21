import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '@js-camp/core/models/anime';
import { AnimeManagement, AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Observable, switchMap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

/** Edit anime data. */
@UntilDestroy()
@Component({
  selector: 'camp-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent {
  /** Anime management data. */
  public readonly animeData$: Observable<AnimeManagement>;

  private readonly animeId: Anime['id'] = Number(this.route.snapshot.paramMap.get('animeId'));

  public constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    if (isNaN(this.animeId)) {
      throw new Error('Invalid anime id.');
    }
    this.animeData$ = route.params.pipe(
      switchMap(params => animeService.getManageInformationAnime(params['animeId'])),
    );
  }

  /**
   * Handle submit edit form.
   * @param animeData Anime put data.
   */
  public onFormSubmit(animeData: AnimeManagementPost): void {
    this.animeService.putAnimeById(this.animeId, animeData).pipe(untilDestroyed(this))
      .subscribe();
  }
}
