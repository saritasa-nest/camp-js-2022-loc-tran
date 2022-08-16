import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/** Add a new anime. */
@Component({
  selector: 'camp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {


  public constructor() {}
}
