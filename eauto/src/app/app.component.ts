import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eauto';
  years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
  cars = [
    'Audi e-Torn',
    'BMV 330 PHEV',
    'BMV i3',
    'Ford Kuga PHEV',
    'Hyundai Kona EV',
    'Kia Niro EV',
    'Mercedes A250 EV',
    'Mercedes GLC300e PEV',
    'Mitsubishi Outlander PHEV',
    'Nissan Feaf',
    'Peugeot 208 Ev',
    'Renault Zoe',
    'Smart For Two EV',
    'Tesla Model 3',
    'Volswagen Golf',
    'Volswagen ID3',
    'Volswagen Passat',
    'Volswagen e-Up!',
    'Volvo XC40 PHEV',
    'Volvo XC60T8 PHEV',
  ];

  headers = ['Eladás éve', 'Elektromos', 'Hagyományos', 'E-autók aránya'];
  details2014 = ['2014', '100,060.00 db', '12.996,324.00 db', '0.7699%'];
  details2015 = ['2015', '193,493.00 db', '14,192,584.00 db', '1.3633%'];
  details2016 = ['2016', '222,619.00 db', '15,118,305.00 db', '1.4725%'];
  details2017 = ['2017', '306,143.00 db', '5,610,239.00 db', '5.4569%'];
  details2018 = ['2018', '386,347.00 db', '5,605,746.00 db', '6.8920%'];
  details2019 = ['2019', '564,206.00 db', '15,805,658.00 db', '3.5696%'];
  details2020 = ['2020', '1,367,138.00 db', '11,961,182.00 db', '11.4298%'];

  alert() {
    alert('Sikertelen adatbáziskapcsolat!');
  }
}
