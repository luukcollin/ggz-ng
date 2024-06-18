import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TablerowComponent } from '../tablerow/tablerow.component';
import { TableRow } from '../models/table-row';

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
    
    //TODO sort rows by columnKey (asc | desc);
  }

  onRowClicked(table: TableRow){
    this.onElementClicked.emit(table.id);
  }

}
function compareRowsByName(a: TableRow, b: TableRow){
  return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
}

function compareRowsById(a: TableRow, b: TableRow){
  return a.id > b.id ? 1 : a.id === b.id ? 0 : -1;
}

function makeTableRows(amt: number){
  const result = [];
  for(let i = 0; i < amt; i++){
    const id = i+1;
    result.push(makeTableRow(id, `Kaas-${id}`))
  }
  return result;
}

function makeTableRow(id: number, name: string): TableRow {
  const likes = Math.floor(Math.random() * 100);
  return {id, name, likes}
}
