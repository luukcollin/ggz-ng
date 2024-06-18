import { TableRow } from "../models/table-row";

export function compareRowsByName(a: TableRow, b: TableRow){
    return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
  }
  
  export function compareRowsById(a: TableRow, b: TableRow){
    return a.id > b.id ? 1 : a.id === b.id ? 0 : -1;
  }
  
  export function makeTableRows(amt: number){
    const result = [];
    for(let i = 0; i < amt; i++){
      const id = i+1;
      result.push(makeTableRow(id, `Kaas-${id}`))
    }
    return result;
  }
  
  export function makeTableRow(id: number, name: string): TableRow {
    const likes = Math.floor(Math.random() * 100);
    return {id, name, likes}
  }
  