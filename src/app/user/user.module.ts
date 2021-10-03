import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';






@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ]

})
export class UserModule { }
