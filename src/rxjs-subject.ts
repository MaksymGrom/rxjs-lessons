import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

const subject = new ReplaySubject<number>(2);

subject.next(1);
subject.next(2);

console.log('before 1 subs');

subject.subscribe(val => {
  console.log('first', val);
});
console.log('after 1 subs');
subject.next(3);
console.log('before 2 subs');
subject.subscribe(val => {
  console.log('second', val);
});
console.log('after 2 subs');
subject.next(4);

subject.subscribe(val => {
  console.log('third', val);
});
