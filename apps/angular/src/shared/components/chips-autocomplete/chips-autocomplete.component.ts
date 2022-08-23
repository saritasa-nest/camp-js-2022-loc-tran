import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, debounceTime, startWith, switchMap, map, of, combineLatestWith, tap, Subject } from 'rxjs';

import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

/** Chips autocomplete reused component. */
@UntilDestroy()
@Component({
  selector: 'camp-chips-autocomplete',
  styleUrls: ['./chips-autocomplete.css'],
  templateUrl: './chips-autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsAutocompleteComponent<T> implements OnInit {
  /** Title of chips autocomplete. */
  @Input() public title = '';

  /** Placeholder of chips autocomplete. */
  @Input() public placeholder = '';

  /** Current items. One item is one chip. */
  @Input() public currentItems = new FormControl<readonly T[] | null>([]);

  /** Get item data. */
  @Input() public getItem: (key: string) => Observable<readonly T[]> = () => of();

  /** Post item data. */
  @Input() public postItem: (itemName: string) => Observable<T> = () => of();

  /** Specify 1 item. */
  @Input() public trackItemBy: (item: T) => string | number = () => '';

  /** Get display name of item. */
  @Input() public getItemName: (item: T) => string = () => '';

  @ViewChild('itemInput')
  private itemInput = {} as ElementRef;

  /** Separator keys codes of input. */
  protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  /** Filtered items to display in autocomplete. */
  protected readonly filteredItem$: Observable<readonly T[]>;

  private readonly addItemToCurrentItems$ = new Subject<string>();

  private readonly postItem$ = new Subject<string>();

  /** Control for item searching. */
  protected readonly itemControl = new FormControl<string>('');

  public constructor(
    private readonly dialog: MatDialog,
  ) {
    this.filteredItem$ = this.itemControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      switchMap(searchKey => this.getItem(searchKey ?? '')),
      map(items => (items ? this.filterItem(items) : [])),
    );
  }

  /** @inheritdoc */
  public ngOnInit(): void {

    this.postItem$
      .pipe(
        switchMap(itemName =>
          this.postItem(itemName)),
        tap(newItem => {
          this.addItemToCurrentItems$.next(this.getItemName(newItem));
        }),
        untilDestroyed(this),
      )
      .subscribe();

    this.addItemToCurrentItems$
      .pipe(
        switchMap(itemName =>
          this.getItem(itemName)
            .pipe(combineLatestWith(of(itemName)))),
        tap(([items, itemName]) => {
          const newItem = items.find(
            item => this.getItemName(item).toLowerCase() === itemName.toLowerCase(),
          );
          if (newItem === undefined) {
            this.addNewItem(itemName);
          } else {
            this.currentItems.setValue([
              ...(this.currentItems.value ?? []),
              newItem,
            ]);
            this.itemControl.setValue('');
            this.itemInput.nativeElement.value = '';
          }
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  /**
   * Remove item from anime.
   * @param item Item to remove.
   */
  public removeItem(item: T): void {
    if (this.currentItems.value === null) {
      return;
    }
    this.currentItems.setValue(
      this.currentItems.value.filter(
        removeItem => this.trackItemBy(removeItem) !== this.trackItemBy(item),
      ),
    );
  }

  /**
   * Add new genre to anime.
   * @param event Event of adding genre.
   */
  public inputItem(event: MatChipInputEvent): void {
    this.addItemToCurrentItems$.next(event.value);
  }

  /**
   * Add selected genre to current items.
   * @param event Event of select genre.
   */
  public selectItem(event: MatAutocompleteSelectedEvent): void {
    this.addItemToCurrentItems$.next(event.option.value);
  }

  private addNewItem(itemName: string): void {
    if (itemName === '') {
      return;
    }
    this.dialog.open(ConfirmModalComponent, {
      data: {
        handleAction: () => this.postItem$.next(itemName),
        title: `Add new ${this.title}`,
        message: `Add ${itemName} to ${this.title} list?`,
      },
    });
  }

  private filterItem(items: readonly T[]): readonly T[] {
    const existedItems = this.currentItems.value?.map(item =>
      this.getItemName(item));
    if (existedItems === undefined) {
      return items;
    }
    return items.filter(
      item => !existedItems.includes(this.getItemName(item)),
    );
  }
}
