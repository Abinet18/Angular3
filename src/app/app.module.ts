import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { DbService } from './db.service';
import { ProfileComponent } from './profile.component';
import { ProfileGuard } from './profile.guard';
import { ErrorComponent } from './error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'profile/:id',component:ProfileComponent,canActivate:[ProfileGuard]},
      {path:'students',component:StudentsComponent},
      {path:'error',component:ErrorComponent}
    ])
  ],
  providers: [DbService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
