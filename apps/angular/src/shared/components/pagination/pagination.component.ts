import { Component, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/** Pagination for table. */
@Component({
  selector: 'camp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {

  /** Number of items. */
  @Input() public length = 0;

  /** Number of pages. */
  @Input() public pageSize = 5;

  /** Page event for pagination. */
  public pageEvent: PageEvent = new PageEvent();

  /** Page size options. */
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  /** Init function. */
  public ngOnInit(): void {}

}
