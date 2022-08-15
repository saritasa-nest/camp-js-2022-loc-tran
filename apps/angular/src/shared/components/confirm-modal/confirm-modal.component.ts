import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Pop up for confirmation. */
@Component({
  selector: 'camp-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) protected onSubmit: Function) {}
}
