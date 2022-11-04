import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  //requisições do banco ficam aqui
  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
