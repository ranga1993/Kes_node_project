import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';
import { MongoEmployeeComponent } from './mongo-employee/mongo-employee.component';
import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
    {path: 'sql', component: EmployeeComponent},
    {path: 'mongo', component: MongoEmployeeComponent}
];

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
