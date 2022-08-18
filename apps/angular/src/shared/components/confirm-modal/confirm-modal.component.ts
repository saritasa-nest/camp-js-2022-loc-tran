import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

/** Dialog data pass into dialog. */
export interface DialogData {

  /** Handle action when click ok. */
  handleAction: Function;

  /** Title of dialog. */
  title: string;

  /** Message in dialog. */
  message: string;
}

/** Pop up for confirmation. */
@Component({
  selector: 'camp-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  public constructor(@Inject(MAT_DIALOG_DATA) protected data: DialogData, private readonly dialog: MatDialog) {}

  public onSubmitClick(): void {
    this.closeModal();
    this.data.handleAction();
  }

  public closeModal(): void {
    this.dialog.closeAll();
  }
}
