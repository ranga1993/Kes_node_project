import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MongodataService {

  constructor(private http: Http) { }

  getEmployeeDetails(){
    return this.http.get('http://localhost:3000/mongoapi/get_employees')
      .map( res => res.json());
  }

  addEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/mongoapi/add_employee', newEmployee, { headers: headers })
      .map( res =>res.json());
  }

  updateEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/mongoapi/update_employee/' + newEmployee._id, newEmployee, { headers: headers })
      .map( res => res.json());
  }

  deleteEmployee(_id){
    return this.http.delete('http://localhost:3000/mongoapi/delete_employee/' + _id)
      .map( res => res.json());
  }
}
