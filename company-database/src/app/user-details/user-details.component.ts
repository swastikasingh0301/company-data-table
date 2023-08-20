import { Component, inject, OnInit } from '@angular/core';
import { EmployeesDataService } from '../company-database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  employeeData: any;
  constructor(
    private route: ActivatedRoute,
    private employeesDataService: EmployeesDataService = inject(EmployeesDataService)
  ) {}
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    this.employeeData = this.employeesDataService.getEmployeesDataById(Number(id))
  }
}
