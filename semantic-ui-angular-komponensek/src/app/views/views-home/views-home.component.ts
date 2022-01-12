import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22,
      label: 'Felhasználó',
    },
    {
      value: 250_000,
      label: 'Bevétel',
    },
    {
      value: 50,
      label: 'Értékelés',
    },
  ];

  items = [
    {
      image: 'https://okj.harka.com/img/jozsef.jpg',
      title: 'Bíró József',
      description: 'Zseni csávó.',
    },
    {
      image: 'https://sara.harka.com/img/sara-harka.jpg',
      title: 'Harka Sára',
      description: 'Zseni csaj.',
    },
    {
      image: 'https://daniel.harka.com/img/daniel-harka.jpg',
      title: 'Harka Dániel',
      description: 'Zseni én.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
