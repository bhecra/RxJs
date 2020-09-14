import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pluck, switchMap } from "rxjs/operators";

const body = document.querySelector('body');
const input = document.createElement('input');
body.append(input);

/**
 * Helpers
 */

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck<KeyboardEvent, string>('target','value'),
    switchMap( txt => ajax.getJSON(url + txt))
).subscribe(console.log)
