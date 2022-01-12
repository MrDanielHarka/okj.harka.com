import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: any = [
    { name: 'József', age: 19, job: 'Fejlesztő' },
    { name: 'Sára', age: 26, job: 'Író' },
    { name: 'Dániel', age: 28, job: 'Fordító' },
  ];

  headers: any = [
    { key: 'name', label: 'Név' },
    { key: 'age', label: 'Kor' },
    { key: 'job', label: 'Foglalkozás' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
