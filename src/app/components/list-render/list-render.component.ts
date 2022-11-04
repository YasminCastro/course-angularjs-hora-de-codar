import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = ['dog', 'cat', 'cow'];
  animalsProperty: Animal[] = [
    { name: 'frida', type: 'dog', age: 5 },
    { name: 'Chico', type: 'Cat', age: 3 },
    { name: 'mimosa', type: 'cow', age: 4 },
  ];

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet tem ${animal.age} anos de idade`;
  }

  removeAnimal(animal: Animal) {
    this.animalsProperty = this.listService.remove(
      this.animalsProperty,
      animal
    );
  }
}
