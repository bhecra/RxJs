import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap( ()=> console.log('antes del skip')),
    skip(1),
    tap( ()=> console.log('despues del skip'))
)

counter$.pipe(
    takeUntil(clickBtn$)
)
    .subscribe({
        next: val=> console.log('next:', val),
        complete: ()=> console.log('complete')
    })