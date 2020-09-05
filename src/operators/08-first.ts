import { fromEvent, interval } from "rxjs";
import { first, map, reduce, scan, take, tap } from "rxjs/operators";

const clcik$ = fromEvent<MouseEvent>(document, 'click');

clcik$.pipe(
    tap<MouseEvent>(console.log),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})