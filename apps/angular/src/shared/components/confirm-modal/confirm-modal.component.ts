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
  styleUrls: ['./confirm-modal.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA) protected data: DialogData,
    private readonly dialog: MatDialog,
  ) {}

  /** Handle action ok click. */
  public onSubmitClick(): void {
    this.data.handleAction();
    this.closeModal();
  }

  /** Close modal when click cancel. */
  public closeModal(): void {
    this.dialog.closeAll();
  }
}
