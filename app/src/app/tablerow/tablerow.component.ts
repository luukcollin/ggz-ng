import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { TableRow } from '../models/table-row';

const DEFAULT_ROW_NAME = "default";
const DEFAULT_LIKE_AMOUNT = 0;

@Component({
  selector: 'app-tablerow',
  standalone: true,
  imports: [],
  templateUrl: './tablerow.component.html',
  styleUrl: './tablerow.component.scss'
})
export class TablerowComponent {
  @Input() row: TableRow = {id: -1,name: DEFAULT_ROW_NAME, likes: DEFAULT_LIKE_AMOUNT};
} 

/**
 *   constructor(private el: ElementRef){}

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = "white";
  }
 */