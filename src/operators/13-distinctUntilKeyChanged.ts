import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe(console.log);
