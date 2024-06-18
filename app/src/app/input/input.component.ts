import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarIconComponent } from '../star-icon/star-icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, StarIconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  labelValue: string = "Naam:";
  showLabel: boolean = false;
  inputValue = "";
}
