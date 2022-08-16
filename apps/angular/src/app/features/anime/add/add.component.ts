import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

/** Add a new anime. */
@Component({
  selector: 'camp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {
  private readonly addForm = this.formBuilder.group({

  })

  public constructor(
    private readonly formBuilder: FormBuilder,
  ) {}
}
