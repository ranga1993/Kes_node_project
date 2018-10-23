import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';
import { MongoEmployeeComponent } from './mongo-employee/mongo-employee.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MongoEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
