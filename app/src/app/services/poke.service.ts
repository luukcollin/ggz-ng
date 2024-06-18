import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) { }

   async getData(){
    const endpoint = "https://pokeapi.co/api/v2/pokemon/ditto"
    return this.httpClient.get(endpoint)
  }
}
