
import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6]);

console.log('Inicio Obs');
obs$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log('Terminamos')
)
console.log('Final Obs');

