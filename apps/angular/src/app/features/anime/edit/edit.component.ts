import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';

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
  public readonly detail$: Observable<AnimeDetail>;

  public constructor(private animeService: AnimeService, private route: ActivatedRoute) {
    this.detail$ = route.params.pipe(
      switchMap(params => animeService.getAnimeById(params['animeId'])),
    );
  }
}
