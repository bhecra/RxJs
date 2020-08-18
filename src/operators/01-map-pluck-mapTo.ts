
import { fromEvent, Observer } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'
const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: null,
    complete: () => console.log('Complete')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);
const keyupMapTo$ = keyup$.pipe(
    mapTo(true)
);


keyup$.subscribe(val => console.log(val))
keyupCode$.subscribe(val => console.log('map',val))
keyupPluck$.subscribe(val => console.log('pluck',val))
keyupMapTo$.subscribe(val => console.log('mapTo',val))




