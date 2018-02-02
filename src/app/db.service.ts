import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  students:Array<any>;

  constructor() {
    this.students=[
      {_id:1,name:'Abinet Debele',stuID:'985914',email:'adebele@mum.edu'},
      {_id:2,name:'John Doe',stuID:'985915',email:'johndoe@mum.edu'},
      {_id:3,name:'Daniel Drek',stuID:'985916',email:'ddrek@mum.edu'}
    ]
   }
   getData()
   {
     return this.students;
   }
   getStudentData(id)
   {
     for(let student of this.students)
     {
        if(student._id==id)
        {
          return student;
        }
     }
     return null;
   }

}
