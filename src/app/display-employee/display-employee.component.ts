import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee:Employee;
  @Output() empDetails:EventEmitter<Employee>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getEmployeeDetails(emp){
    this.empDetails.emit(emp);
  }

}
