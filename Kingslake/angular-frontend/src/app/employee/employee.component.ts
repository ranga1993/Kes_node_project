import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DataService]
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[]=[];
  selectedEmployee: Employee;
  toggleForm: boolean = false;
 
  constructor(private dataService: DataService) { }

  getEmployees(){
    this.dataService.getEmployeeDetails()
      .subscribe( employees => {
        this.employeeList = employees;
        // console.log('data from dataservice: ' + this.employeeList[0].name);
      })
  }

  addEmployee(form){
    // console.log(form.value);
    let newEmployee = {
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.dataService.addEmployee(newEmployee)
      .subscribe( employee => {
        console.log(employee);
        this.getEmployees();
      })
  }

  deleteEmployee(id){
    this.dataService.deleteEmployee(id)
      .subscribe( data => {
        console.log(data);
        if(data.affectedRows == 1){
          for(var i=0; i < this.employeeList.length; i++){
            if(id == this.employeeList[i].id){
              this.employeeList.splice(i, 1);
            }
          }
        }
      })
  }

  editEmployee(form){
    let newEmployee = {
      id :this.selectedEmployee.id,
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.dataService.updateEmployee(newEmployee)
      .subscribe( result => {
        console.log('Original item to be updated with old values: ' + result);
        this.getEmployees();
      });
      this.toggleForm = !this.toggleForm;
  }

  showEditForm(employee){
    this.selectedEmployee = employee;
    this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {
    this.getEmployees();
  }

}
