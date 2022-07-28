import { Component, Input } from '@angular/core';
import { SelectOption } from '@js-camp/core/models/selectOption';

/** Reuse select option. */
@Component({
  selector: 'camp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  /** Options for select component. */
  @Input() public options: readonly SelectOption[] = [{ title: 'option1', value: '1' }];

  /** Title for select component. */
  @Input() public title = 'Select option';

  constructor() {}

  ngOnInit(): void {}

  /**
   * Function track by value for options.
   * @param index Index of current option.
   * @param value Value of current option.
   */
  public trackByOptionValue(index: number, option: SelectOption): string {
    return option.value;
  }
}
