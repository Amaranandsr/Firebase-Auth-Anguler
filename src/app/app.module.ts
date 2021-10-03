import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Module
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseService } from './services/firebase.service';




//component






const firebaseConfig = {
  apiKey: "AIzaSyAQgn4qHPc23dQEZvg4OPpL-G910L_FSFw",
  authDomain: "wai-logistics.firebaseapp.com",
  projectId: "wai-logistics",
  storageBucket: "wai-logistics.appspot.com",
  messagingSenderId: "971914936934",
  appId: "1:971914936934:web:9b01d533a0f91540c323a7",
  measurementId: "G-YFQ46J6D78"
  };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
