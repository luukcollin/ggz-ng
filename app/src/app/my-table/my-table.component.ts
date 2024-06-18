import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TablerowComponent } from '../tablerow/tablerow.component';
import { TableRow } from '../models/table-row';
import { makeTableRows, compareRowsByName, compareRowsById } from '../helpers/table-helpers';

type SortOrder = "asc" | "desc";
interface SortingConfig {
  columnKey: string;
  order: SortOrder;
}

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [TablerowComponent],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.scss'
})

export class MyTableComponent {
  @Output() onElementClicked = new EventEmitter<number>();
  @Input() selectedElement?: number;
  sortingConfig: SortingConfig = {columnKey: "id", order: "asc"};
  columnNames: string[] = ["id", "name", "likes"];
  rows: TableRow[] =  makeTableRows(100);

  onColumnClicked(columnKey: string){
    const changeSortDirection = this.sortingConfig.columnKey === columnKey;
    if(!changeSortDirection){
      this.sortingConfig.columnKey = columnKey;
      if(columnKey === "name") this.rows = this.rows.sort(compareRowsByName)
      if(columnKey === "id") this.rows = this.rows.sort(compareRowsById)
    } else {
      this.rows = this.rows.reverse();
    }
  }

  onRowClicked(table: TableRow){
    this.onElementClicked.emit(table.id);
  }
}
