import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { MyTableComponent } from './my-table/my-table.component';
import { PokeService } from './services/poke.service';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { DatePipe, JsonPipe } from '@angular/common';
import { ShufflePipe } from '../pipes/shuffle.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { StarIconComponent } from './star-icon/star-icon.component';
import { BehaviorSubject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, MyTableComponent, DatePipe, JsonPipe, ShufflePipe, HighlightDirective, StarIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private searchQ$ = new BehaviorSubject<string>("");
  b = new Date()

  selectedElementId : number | undefined = undefined;
  visibleData = "";
  constructor(private pokeService: PokeService){
    this.searchQ$.pipe(debounceTime(250)).subscribe((searchQ) => {
      console.log(`actual searchQ ${searchQ}}`)
      
    });
  }

  searchQChanged(_: Event){
    const searchQ = (<HTMLInputElement> document.getElementById('searchQ-input')).value;
    console.warn("Filtering items based on " +searchQ)
    this.searchQ$.next(searchQ);
  
  }

  async fetchData(){
    const getRequest = await this.pokeService.getData(); //async
    getRequest.subscribe((value) => 
      this.visibleData = JSON.stringify(value)
  )
}

  printClickedElement(event: number){
    this.selectedElementId = event;
    console.warn("Clicked on elem with id: " + event)
  }

}
