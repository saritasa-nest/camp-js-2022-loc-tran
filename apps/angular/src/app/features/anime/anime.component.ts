import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Anime page. */
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeComponent {}
