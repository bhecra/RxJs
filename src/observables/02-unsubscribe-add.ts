
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: error => console.error(),
    complete: () => console.log('complete')
}

const intervalo$ = new Observable<number>(sub => {
    let count = 0;
    const interval = setInterval(() => {
        sub.next(count++);
        console.log(count);
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log("Terminó");
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
     .add(subs3)

setTimeout(() => {
    subs1.unsubscribe();
}, 3000)