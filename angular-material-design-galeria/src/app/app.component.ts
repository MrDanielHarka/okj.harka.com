import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-design-kepnezegeto';
  // activeLink = this.links[0];
  currentLink = 0;

  links = [
    {
      title: 'Pörgős szoknya',
      url: 'assets/sara1.jpg',
    },
    {
      title: 'Rúzsos száj',
      url: 'assets/sara2.jpg',
    },
    {
      title: 'Falusi utca',
      url: 'assets/sara3.jpg',
    },
    {
      title: 'Mona Lisa',
      url: 'assets/sara4.jpg',
    },
    {
      title: 'Mars bolygó',
      url: 'assets/sara5.jpg',
    },
  ];

  activeLink = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentLink - index) < 5;
  }
}
