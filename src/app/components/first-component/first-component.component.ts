import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Yasmin';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  pets = { pet1: 'Frida', pet2: 'Vênus' };

  constructor() {}

  ngOnInit(): void {}
}
