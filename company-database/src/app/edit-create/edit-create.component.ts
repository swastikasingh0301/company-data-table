import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { EmployeesDataService } from '../company-database.service';


@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.scss']
})
export class EditCreateComponent implements OnInit {
 
  submitted = false;
   
  employeeData: any = {
    name: '',
    email: '',
    company:{
      name:''
    },
    address:{
      street: '',
      suite: '',
      city: '',
      state: '',
      zipcode:''
    },
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeesDataService: EmployeesDataService = inject(EmployeesDataService)
  ) {}
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.employeeData = this.employeesDataService.getEmployeesDataById(Number(id));
    }
  }

  submitForm() {
    this.employeesDataService.submitApplication(this.employeeData.name,  this.employeeData.company.name, this.employeeData.email)
    this.goToPage('home')
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
