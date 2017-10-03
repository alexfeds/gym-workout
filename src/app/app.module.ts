import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

import { sideBySidePipe } from './pipes/sidebyside';

//Angular Material Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdTooltipModule,
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
//AngularFire Import
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import 'hammerjs';
//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryComponent } from './components/history/history.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogComponent } from './components/log/log.component';
import { BicepsMenuComponent } from './components/biceps/biceps-menu/biceps-menu.component';
import { BicepsBenchComponent } from './components/biceps/biceps-bench/biceps-bench.component';
//Service Imports
import { AuthService } from './services/auth.service';
import { BicepsService } from './services/biceps.service';
import { GrabTextService } from './services/grab-text.service';







const appRoutes: Routes= [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'history', component:HistoryComponent},
  {path:'log', component:LogComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'exercise', component:ExerciseComponent},
  {path:'profile', component:ProfileComponent},
  {path:'biceps-menu', component:BicepsMenuComponent},
  {path:'biceps-bench', component:BicepsBenchComponent}
];


export const firebaseConfig = {
  apiKey: "AIzaSyBVTslbswugu3zvuQm9LSB8G5Tt7zeIKLs",
  authDomain: "gym-workout-2d253.firebaseapp.com",
  databaseURL: "https://gym-workout-2d253.firebaseio.com",
  storageBucket: "gym-workout-2d253.appspot.com",
  messagingSenderId: "446222598700"
};



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    ExerciseComponent,
    NavbarComponent,
    FooterComponent,
    HistoryComponent,
    RegisterComponent,
    LoginComponent,
    LogComponent,
    BicepsMenuComponent,
    BicepsBenchComponent,
    sideBySidePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdTooltipModule,
    FlexLayoutModule,
    HttpModule,
    CdkTableModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    GrabTextService,
    BicepsService,
    FlashMessagesModule,
    MdListModule,
    MdCardModule,
    MdButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
