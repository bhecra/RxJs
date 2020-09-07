import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromesa = fetch(url);

/**
 * Fetch Api
 */
// fetchPromesa
//   .then(handleErrors)
//   .then((resp) => resp.json())
//   .then((data) => console.log("data:", data))
//   .catch(console.warn);

/**
 * Petición Ajax
 */

const handleCatchError = (err: AjaxError) => {
  console.warn("error en:", err.message);
  return of([]);
};

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(handleCatchError)
  )
  .subscribe((users) => console.log("users:", users));
