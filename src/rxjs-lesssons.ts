import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search');
//
//   if (!search) {
//     observer.error('Element does not exist on the page');
//     return;
//   }
//
//   search.addEventListener('input', event => {
//     observer.next(event);
//   });
// });

const search$: Observable<Event> = fromEvent<Event>(
  document.getElementById('search'),
  'input'
);

search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(500),
  map(value => value.length > 3 ? value : ''),
  distinctUntilChanged(),
).subscribe(value => {
  console.log(value);
});

