import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = ['dog', 'cat', 'cow'];
  animalsProperty = [
    { name: 'frida', type: 'dog' },
    { name: 'Chico', type: 'Cat' },
    { name: 'mimosa', type: 'cow' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
