import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';

import { AnimeService } from '../../../../core/services/anime.service';
import { HOME_ROUTE } from '../../auth/register/register.component';

/** Add a new anime. */
@UntilDestroy()
@Component({
  selector: 'camp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {
  public constructor(private readonly animeService: AnimeService, private readonly router: Router) {}

  /**
   * Handle submit edit form.
   * @param animeData Anime put data.
   */
  public onFormSubmit(animeData: AnimeManagementPost): void {
    this.animeService
      .postAnime(animeData)
      .pipe(
        tap(() => this.router.navigate([HOME_ROUTE])),
        untilDestroyed(this),
      )
      .subscribe();
  }
}
