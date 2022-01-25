import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' },
      { id: 11, name: 'Huni' },
      { id: 12, name: 'Yone' },
      { id: 13, name: 'Yasuo' },
      { id: 14, name: 'Jax' },
      { id: 15, name: 'Lee sin' },
      { id: 16, name: 'Ezreal' },
      { id: 17, name: 'Stone' },
      { id: 18, name: 'Gwen' },
      { id: 19, name: 'Renekton' },
      { id: 20, name: 'Tristana' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
