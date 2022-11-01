import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent implements OnInit {
  canShow1 = false;
  canShow2 = true;

  name = 'Yasmin';

  constructor() {}

  ngOnInit(): void {}
}
