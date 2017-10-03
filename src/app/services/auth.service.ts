import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MdSnackBar} from '@angular/material';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;


  constructor
  (public afAuth:AngularFireAuth,
   private router: Router, private _flashMessagesService: FlashMessagesService,
   public snackBar: MdSnackBar) {
    this.user = afAuth.authState;
   }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        
        this.snackBar.open('Logged in successfully',"any" ,  {
          duration: 4000, 
        });


        this.router.navigate(['/']);
      })
      .catch(err => {
        this._flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/login']);
      });
  }


  register(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.snackBar.open('Registered successfully',"any" ,  {
          duration: 4000, 
        });


        this.router.navigate(['/']);
      })
      .catch(err => {
        this.snackBar.open(err.message,"any" ,  {
          duration: 4000, 
        });

        this.router.navigate(['/register']);
      });    
  }


  logout() {
    this.afAuth
      .auth
      .signOut();
      
      this.snackBar.open("Successfully logged out","any" ,  {
        duration: 4000, 
      });

      this.router.navigate(['/login']);



  }




}
