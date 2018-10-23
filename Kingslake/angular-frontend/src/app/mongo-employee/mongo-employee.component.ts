import { Component, OnInit } from '@angular/core';
import { Employee } from '../mongoEmployee';
import { MongodataService } from '../mongodata.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-mongo-employee',
  templateUrl: './mongo-employee.component.html',
  styleUrls: ['./mongo-employee.component.css'],
  providers: [MongodataService]
})
export class MongoEmployeeComponent implements OnInit {
  mongoEmployeeList: Employee[] = [];
  selectedEmployee: Employee;
  toggleForm: boolean = false;

  constructor( private mongodataService: MongodataService) { }

  getEmployees(){
    this.mongodataService.getEmployeeDetails()
      .subscribe( employees => {
        this.mongoEmployeeList = employees;
        console.log('data from dataservice: '+this.mongoEmployeeList[0].firstName);
      })
  }

  addEmployee(form){
    // console.log(form.value);
    let newEmployee: Employee = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      nic: form.value.nic
    }
    this.mongodataService.addEmployee(newEmployee)
      .subscribe( employee => {
        console.log(employee);
        this.getEmployees();
      })
  }

  editEmployee(form){
    let newEmployee: Employee = {
      _id: this.selectedEmployee._id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      nic: form.value.nic
    }
    this.mongodataService.updateEmployee(newEmployee)
      .subscribe( result => {
        console.log('Original Employee to be updated with old values: ' + result);
        this.getEmployees();
      });
      this.toggleForm = !this.toggleForm;
  }

  showEditForm(employee){
    this.selectedEmployee = employee;
    this.toggleForm = !this.toggleForm;
  }

  deleteEmployee(_id){
    this.mongodataService.deleteEmployee(_id)
      .subscribe( data => {
        console.log(data);
        if(data.n == 1){
          for(var i=0; i < this.mongoEmployeeList.length; i++){
            if(_id == this.mongoEmployeeList[i]._id){
              this.mongoEmployeeList.splice(i, 1);
            }
          }
        }
      })
  }

  ngOnInit() {
    this.getEmployees();
  }

}
