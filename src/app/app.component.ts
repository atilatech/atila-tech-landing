import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { merge, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  updateAvailable$: Observable<boolean>;
  closed$ = new Subject<void>();

  constructor(private swUpdate: SwUpdate) {
    this.updateAvailable$ = merge(
      of(false),
      this.swUpdate.available.pipe(map(() => true)),
      this.closed$.pipe(map(() => false)),
    );
  }

  activateUpdate() {
    if (environment.production) {
      this.swUpdate.activateUpdate().then(() => {
        location.reload(true);
      });
    }
  }


}
