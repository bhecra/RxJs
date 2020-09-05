
import { fromEvent, Observer, range } from 'rxjs';
import { map, pluck, mapTo, filter, tap } from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: null,
    complete: () => console.log('Complete')
}

const numeros$ = range(1,5);

numeros$.pipe(
    tap(observer)
)
.subscribe(val => console.log(val))





