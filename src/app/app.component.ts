import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div><a [routerLink]="['home']">Home</a>
                  <a [routerLink]="['students']">Students</a>
            </div>
            <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue=0;
  title = 'Parent';
}
