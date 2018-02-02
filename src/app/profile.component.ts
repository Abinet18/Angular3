import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      Name:{{student.name}}, userId : {{student.stuID}} , Email:{{student.email}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  student:any;
  constructor(private db:DbService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.student=this.db.getStudentData(params.id);
      })
    
  }

}
