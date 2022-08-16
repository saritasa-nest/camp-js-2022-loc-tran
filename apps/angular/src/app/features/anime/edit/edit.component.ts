import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { AnimeManagement } from '@js-camp/core/models/animeManagement';

import { Observable, switchMap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

/** Edit anime data. */
@Component({
  selector: 'camp-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent {
  /** Stream for anime detail. */
  public readonly animeData$: Observable<AnimeManagement>;

  public constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    this.animeData$ = route.params.pipe(
      switchMap(params => animeService.getManageInformationAnime(params['animeId'])),
    );
  }
}
