
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: error => console.error(),
    complete: () => console.log('complete')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalID);
    }
})

/**
 * 1- Casteo múltiple
 * 2- también es un observer
 * 3- Next, error, complete
 */
const subject$ = new Subject();

const intervalSubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer); 
const subs2 = subject$.subscribe(observer); 
//const subs2 = intervalo$.subscribe(rnd => console.log('sub2', rnd)); 
//const subs2 = intervalo$.subscribe(rnd => console.log('sub2', rnd)); 

setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();

},3500)