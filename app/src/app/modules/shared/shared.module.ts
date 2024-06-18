import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../services/poke.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [PokeService],
})
export class SharedModule { }
