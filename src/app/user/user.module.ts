import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';









@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ]

})
export class UserModule { }
