/* eslint-disable jsdoc/require-jsdoc */
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
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsAutocompleteComponent<T> implements OnInit {
  /** Current items. One item is one chip. */
  @Input() public currentItems = new FormControl<readonly T[] | null>([]);

  /** Form control for input item. */
  @Input() public itemControl = new FormControl<string>('');

  @Input() public getItem: (key: string) => Observable<readonly T[]> = () => of();

  @Input() public postItem: (itemName: string) => Observable<T> = () => of();

  @Input() public trackItemBy: (item: T) => string | number = () => '';

  @Input() public getItemName: (item: T) => string = () => '';

  @ViewChild('itemInput')
  private itemInput = {} as ElementRef;

  protected readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  protected readonly filteredItem$: Observable<readonly T[]>;

  private readonly addItemToCurrentItems$ = new Subject<string>();

  private readonly postItem$ = new Subject<string>();

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
    this.dialog.open(ConfirmModalComponent, {
      data: () => {
        this.postItem$.next(itemName);
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
