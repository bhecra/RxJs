import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8);

numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
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
  }
];

from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log);
