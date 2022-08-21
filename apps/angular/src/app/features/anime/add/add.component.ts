import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimeManagementPost } from '@js-camp/core/models/animeManagement';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AnimeService } from '../../../../core/services/anime.service';

/** Add a new anime. */
@UntilDestroy()
@Component({
  selector: 'camp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {
  public constructor(private readonly animeService: AnimeService) {}

  /**
   * Handle submit edit form.
   * @param animeData Anime put data.
   */
  public onFormSubmit(animeData: AnimeManagementPost): void {
    this.animeService
      .postAnime(animeData)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
