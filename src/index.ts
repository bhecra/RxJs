
import { fromEvent, Observer } from 'rxjs';
import { map, pluck, mapTo, filter } from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: null,
    complete: () => console.log('Complete')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter( key => key === 'Enter')
)

keyup$.subscribe(val => console.log(val))





