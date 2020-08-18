
import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: ()=> console.log('complete')
}
const src$ = interval(1000);
const timer$ = timer(2000);
const timer2$ = timer(2000, 1000);

const activateDate = new Date();
activateDate.setSeconds(activateDate.getSeconds() + 5);
const timer3$ = timer(activateDate);
console.log('Inicio');
// src$.subscribe(observer);
timer3$.subscribe(observer);
console.log('Fin');
// timer$.subscribe(observer);


