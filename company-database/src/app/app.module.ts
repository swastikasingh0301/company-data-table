import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal-component/modal-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { EditCreateComponent } from './edit-create/edit-create.component';
import { FormsModule } from '@angular/forms';
// import {MatDialogModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserDetailsComponent},
  { path: 'users/:id/edit', component:EditCreateComponent},
  { path: 'create', component:EditCreateComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    UserDetailsComponent,
    HomeComponent,
    EditCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule
  ],
  exports: [
    ModalComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
