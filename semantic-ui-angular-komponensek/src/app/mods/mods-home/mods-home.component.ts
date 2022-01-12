import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'Mi lenne ha itt egy kérdés lenne?',
      content: 'Itt pedig egy válasz.',
    },
    {
      title: 'Mi lenne ha itt is egy kérdés lenne?',
      content: 'Itt pedig egy válasz.',
    },
    {
      title: 'Mi lenne ha még itt is egy kérdés lenne?',
      content: 'Itt pedig egy válasz.',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
