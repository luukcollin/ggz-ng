import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { MyTableComponent } from './my-table/my-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, MyTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedElementId : number | undefined = undefined
  printClickedElement(event: number){
    this.selectedElementId = event;
    console.warn("Clicked on elem with id: " + event)
  }

}
