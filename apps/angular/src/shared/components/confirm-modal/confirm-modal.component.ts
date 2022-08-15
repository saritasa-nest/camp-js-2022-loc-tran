import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Pop up for confirmation. */
@Component({
  selector: 'camp-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) protected handleAction: Function, private readonly dialog: MatDialog) {}

  public onSubmitClick(): void {
    this.closeModal();
    this.handleAction();
  }

  public closeModal(): void {
    this.dialog.closeAll();
  }
}
