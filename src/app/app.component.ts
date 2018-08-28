import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private swUpdate: SwUpdate,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (environment.production) {

      // check service worker to see if new version of app is available
      if (this.swUpdate.isEnabled) {

        this.swUpdate.available.subscribe(() => {

          const snackBarRef = this.snackBar.open('New version available', 'Load New Version');

          snackBarRef.onAction().subscribe(
            () => {
              location.reload();
            }
          );

        });
      }
    }
  }
}


