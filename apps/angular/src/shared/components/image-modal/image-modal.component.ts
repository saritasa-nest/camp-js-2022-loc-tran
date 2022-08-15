import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Pop up for full size image. */
@Component({
  selector: 'camp-image-modal',
  templateUrl: './image-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageModalComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) protected imageUrl: string) {}
}
