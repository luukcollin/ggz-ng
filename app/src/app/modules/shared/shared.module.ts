import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../services/poke.service';



@NgModule({

  imports: [
    CommonModule
  ],
  providers: [PokeService],
})
export class SharedModule { }
