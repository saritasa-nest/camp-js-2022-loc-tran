import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeDetail } from '@js-camp/core/models/animeDetail';
import { Observable, switchMap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';

/** Display detail of anime. */
@Component({
  selector: 'camp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  /** Stream for anime detail. */
  public readonly detail$: Observable<AnimeDetail>;

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly animeService: AnimeService,
    private readonly location: Location,
  ) {
    this.detail$ = route.params.pipe(
      switchMap(params => animeService.getAnimeById(params['animeId'])),
    );
  }

  /** Go to previous page. */
  public backClicked(): void {
    this.location.back();
  }
}
