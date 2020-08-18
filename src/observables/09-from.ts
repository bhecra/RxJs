
import { of, from, Observable, Observer, async } from 'rxjs';

const observer: Observer<any> = {
    next: (value)=> console.log(value),
    error: null,
    complete: ()=> console.log('Complete')
}

// const src$ = from([1,2,3,4,5]);
// const src$ = from('Christian');

const src$ = from(fetch('https://api.github.com/users/klerith'));
src$.subscribe( async (resp) => {
    const dataResponse = await resp.json();
    console.log(dataResponse);
});



