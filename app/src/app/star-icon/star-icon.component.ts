import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  standalone: true,
  imports: [],
  templateUrl: './star-outline.svg',
  styleUrl: './star-icon.component.scss'
})
export class StarIconComponent {
  @HostBinding("style.fill") get backgroundColor () {
    if(this.length < 4) return "orange"
    if(this.length <= 7) return "yellow"
    return "green"
  }
 @Input() length: number = 0;
}
