import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'students',
  template: `
   <ul>
   <a style="display:block" *ngFor="let student of students"  [routerLink]="['/profile',student._id]">{{student.name}}</a>
   </ul>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
  students:Array<any>;
  constructor(private db:DbService) {

   }

  ngOnInit() {
    this.students=this.db.getData();
  }

}
