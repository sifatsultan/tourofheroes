import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }
  createDb() {
    const heroes = [
      { Id: 11, Name: 'Hazrat Abu Bakr As Siddiq Radiallahu Anhu' },
      { Id: 12, Name: 'Hazrat Umar Bin Al Khattab Radiallahu Anhu' },
      { Id: 13, Name: 'Hazrat Usman Ibn Affan Radiallahu Anhu' },
      { Id: 14, Name: 'Hazrat Ali Radiallahu Anhu' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.Id)) + 1 : 11
  }
}
