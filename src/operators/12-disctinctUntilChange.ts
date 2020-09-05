import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<number | string>(1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Spiderman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Batman",
  },
  {
    nombre: "Bomberman",
  },
  {
    nombre: "Spiderman",
  },
  {
    nombre: "Batman",
  },
  {
    nombre: "Bomberman",
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
