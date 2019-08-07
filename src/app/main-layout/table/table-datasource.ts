import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  name: string;
  surname: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, name: 'Hydrogen', surname: 'Aydrogen'},
  {id: 2, name: 'Helium', surname: 'Hydrogen'},
  {id: 3, name: 'Lithium', surname: 'Hydrogen'},
  {id: 4, name: 'Beryllium', surname: 'Hydrogen'},
  {id: 5, name: 'Boron', surname: 'Hydrogen'},
  {id: 6, name: 'Carbon', surname: 'Hydrogen'},
  {id: 7, name: 'Nitrogen', surname: 'Hydrogen'},
  {id: 8, name: 'Oxygen', surname: 'Hydrogen'}, 
  {id: 9, name: 'Fluorine', surname: 'Hydrogen'},
  {id: 10, name: 'Neon', surname: 'Hydrogen'},
  {id: 11, name: 'Sodium', surname: 'Hydrogen'},
  {id: 12, name: 'Magnesium', surname: 'Hydrogen'},
  {id: 13, name: 'Aluminum', surname: 'Hydrogen'},
  {id: 14, name: 'Silicon', surname: 'Hydrogen'},
  {id: 15, name: 'Phosphorus', surname: 'Hydrogen'},
  {id: 16, name: 'Sulfur', surname: 'Hydrogen'},
  {id: 17, name: 'Chlorine', surname: 'Hydrogen'},
  {id: 18, name: 'Argon', surname: 'Hydrogen'},
  {id: 19, name: 'Potassium', surname: 'Hydrogen'},
  {id: 20, name: 'Calcium', surname: 'Zydrogen'},
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'surname': return compare(a.surname, b.surname, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
