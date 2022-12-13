import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // <-- add your animations here
    fadeInAnimation,
    // slider,
    // transformer,
    // stepper
  ],
})
export class AppComponent {
  title = 'angular-memories-app';
  // prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet &&
  //     outlet.activatedRouteData &&
  //     outlet.activatedRouteData['animation']
  //   );
  // }
}
