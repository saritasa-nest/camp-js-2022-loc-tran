import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from '@js-camp/core/models/selectOption';

/** Reuse select option. */
@Component({
  selector: 'camp-select',
  templateUrl: './select.component.html',
  styleUrls: [],
})
export class SelectComponent {
  /** Options for select component. */
  @Input() public options: readonly SelectOption[] = [{ title: 'option1', value: '1' }];

  /** Title for select component. */
  @Input() public title = 'Select option';

  /** TODO. */
  @Output() public selectedValue = new EventEmitter<string>();

  /**
   * Function track by value for options.
   * @param index Index of current option.
   * @param option Value of current option.
   */
  public trackByOptionValue(index: number, option: SelectOption): string {
    return option.value;
  }

  /**
   * Get the new value of selection and emit it.
   * @param newValue New value after changed.
   */
  public onValueChange(newValue: string): void {
    this.selectedValue.emit(newValue);
  }
}
