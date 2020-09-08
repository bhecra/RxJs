import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { GithubUsers, GithubUsersResponse } from "../interfaces/github-users.interfaces";

const body = document.querySelector('body');

const input = document.createElement('input');
const oList = document.createElement('ol');
body.append(input, oList);

/**
 * Helpers
 */

 const showUsers = (users: GithubUsers[]) => {
    oList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = user.avatar_url;

        const anchor = document.createElement('a');

        anchor.href = user.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login+ ' ');
        li.append(anchor);

        oList.append(li);
    }
 }

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target','value'),
    map( txt => ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUsers[]>('items')
).subscribe(showUsers)

