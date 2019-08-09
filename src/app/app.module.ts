import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import {FormsModule} from '@angular/forms';
import { DataTableComponent } from './page/data-table/data-table.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const appRoutes: Routes = [
 
  {
    //az üres a főoldal
    path:"",
    component:HomeComponent
  },
  {
    //az üres a főoldal
    path:"table",
    component:DataTableComponent
  },
  {
    path:"newUser",
    component:NewUserComponent
  },
  {
    path:"tableEdit/:id",
    component:EditUserComponent 
  },
   {
    path:"**",
    component:HomeComponent
  }
  

  
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DataTableComponent,
    NewUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
