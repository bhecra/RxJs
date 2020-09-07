import { fromEvent } from "rxjs";
import { pluck, sampleTime, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(3000),
    map(({x, y}) => ({x, y})),
)
.subscribe(console.log);

