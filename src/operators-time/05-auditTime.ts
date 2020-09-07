import { fromEvent } from "rxjs";
import { auditTime, sample, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x})=> ({x})),
    tap(val => console.log('tap', val)),
    auditTime(1000)
)
.subscribe(
    console.log
);

