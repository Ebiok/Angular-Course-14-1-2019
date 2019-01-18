import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map } from 'rxjs/operators';

let target = document.querySelector('#target');

let now = new Observable<Date>((observer: Observer<Date>)=>{
    setInterval(()=>{
        observer.next(new Date());
    }, 1000);
});

let subscription = now.pipe(
    map(date=>{
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes();
        let seconds = date.getUTCSeconds();

        let hoursString = hours > 9 ? hours:`0${hours}`;
        let minutesString = minutes > 9 ? minutes:`0${minutes}`;
        let secondsString = seconds > 9 ? seconds:`0${seconds}`;

        return `${hoursString}:${minutesString}:${secondsString}`
    })
).subscribe(
    dateString => target.textContent = dateString
);

setTimeout(()=>subscription.unsubscribe(),10000);