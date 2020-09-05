import { fromEvent, interval } from "rxjs";
import { map, reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acum, act) => {
  return acum + act;
};

const total = numbers.reduce(totalReducer, 0);

console.log("total_arr", total);

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("Complete"),
  });
