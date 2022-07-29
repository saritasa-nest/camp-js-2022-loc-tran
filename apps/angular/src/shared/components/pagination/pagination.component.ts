import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/** Pagination for table. */
@Component({
  selector: 'camp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {

  /** Number of items. */
  @Input() public length: number | undefined = 0;

  /** Number of pages. */
  @Input() public pageSize = 25;

  /** Page index of paginator. */
  @Input() public pageIndex = 0;

  /** Page event contain current pagination state. */
  @Output() public paginationEvent = new EventEmitter<PageEvent>();

  /** Page event for pagination. */
  public pageEvent: PageEvent = new PageEvent();

  /** Page size options. */
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  /**
   * Handle pagination change and emit the status.
   * @param event Page event of pagination.
   */
  public onPaginationChange(event: PageEvent): void {
    this.paginationEvent.emit(event);
  }
}
