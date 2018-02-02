import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from './db.service';
import { Router,ActivatedRoute } from '@angular/router';


@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private db:DbService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
        if(next.params.id==null || this.db.getStudentData(next.params.id)==null)
        {
          console.log('error');
          this.router.navigate(['/error']);
          return false;
        }        
    return true;
  }
}
