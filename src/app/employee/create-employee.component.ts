import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee={
    id:null,
    name:null,
    gender:null,
    email:'',
    phoneNumber:null,
    contactPreference:null,
    dateOfBirth:null,
    department:null,
    photoPath:null,
    isActive:null 
  };
  datePickerBSConfig: Partial<BsDatepickerConfig>;
  gender = "male";
  department = 1;
  showPhoto:boolean=false;
  departments: Department[] = [
    { id: 1, name: "HR" },
    { id: 2, name: "Help Desk" },
    { id: 3, name: "Pay Roll" },
    { id: 4, name: "IT" }
  ];
  constructor() {
    this.datePickerBSConfig = Object.assign({},
      {
        containerClass: 'theme-red',
        minDate:new Date(2018,0,2),
        maxDate:new Date(2018,11,30),
        showWeekNumbers:false
      });
  }

  ngOnInit() {
  }

  createEmployee(empForm: Employee): void {
    console.log(empForm);
  }

  togglePhotoPreview(){
    this.showPhoto=!this.showPhoto;
  }
}
