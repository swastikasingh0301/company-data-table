import { Component, inject } from '@angular/core';
import employeeData from '../../assets/temp.json';
import { EmployeesDataInterface } from '../company-database';  
import {EmployeesDataService } from '../company-database.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal-component/modal-component.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Employees: EmployeesDataInterface[] = employeeData;
  title = 'company-database';
  tempSortArr: Array<any> = [];
  filteredEmployeeData: EmployeesDataInterface[] = [];
  employeesDataService: EmployeesDataService = inject(EmployeesDataService);
  isNameAsc = false;
  isEmailAsc = false;
  isCompanyAsc = false;
  constructor(private router: Router, private dialog: MatDialog){
    this.Employees = this.employeesDataService.getAllEmployeesData();
    this.filteredEmployeeData = this.Employees;
  }

  goToPage(pageName:string, id?:any, pageRoute?:string){
    id? this.router.navigate([`${pageName}/${id}/${pageRoute}`]) : this.router.navigate([`${pageName}`]);
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredEmployeeData = this.Employees;
    }

    this.filteredEmployeeData = this.Employees.filter(
      employeeData => employeeData?.name.toLowerCase().includes(text.toLowerCase()) ||
      employeeData?.email.toLowerCase().includes(text.toLowerCase()) ||
      employeeData?.company.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  sortEmployeeByNameAsc() {
    this.isNameAsc = true;
    this.filteredEmployeeData.sort((a, b) => (a.name > b.name)? 1 : -1)
  }

  sortEmployeeByNameDsc() {
    this.isNameAsc = false;
    this.filteredEmployeeData.sort((a, b) => (a.name > b.name)? -1 : 1)
  }

  sortEmployeeByEmailAsc() {
    this.isEmailAsc = true;
    this.filteredEmployeeData.sort((a, b) => (a.email > b.email)? 1 : -1)
  }

  sortEmployeeByEmailDsc() {
    this.isEmailAsc = false;
    this.filteredEmployeeData.sort((a, b) => (a.email > b.email)? -1 : 1)
  }

  sortEmployeeByCompanyAsc() {
    this.isCompanyAsc = true;
    this.filteredEmployeeData.sort((a, b) => (a.company.name > b.company.name)? 1 : -1)
  }

  sortEmployeeByCompanyDsc() {
    this.isCompanyAsc = false;
    this.filteredEmployeeData.sort((a, b) => (a.company.name > b.company.name)? -1 : 1)
  }


  openModal(employee:any) {
    const dlg = this.dialog.open(ModalComponent, {
      data: {title: 'Delete '+ employee.name, msg: 'Are you sure you want to delete '+ employee.name + '?'}
    });

    dlg.afterClosed().subscribe((whatever: boolean) => {
        if (whatever) {
          this.deleteRow(employee);
        }
    });
  }

  deleteRow(employee:any){
    const index = this.filteredEmployeeData.indexOf(employee);
    this.filteredEmployeeData.splice(index, 1);
  }
}
