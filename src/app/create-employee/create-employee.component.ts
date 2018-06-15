import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  showPhoto:boolean=false;
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
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
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

  togglePhotoPreview() {
    this.showPhoto = !this.showPhoto;
  } 

}
