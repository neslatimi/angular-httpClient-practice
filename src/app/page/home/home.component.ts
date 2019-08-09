import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userSubscription: Subscription;
  
  constructor(  private userService: UserService) { }

  ngOnInit() {}
  
  numberOfUser(){
   return this.userService.getAll().subscribe(
     // users=>users.length
    )}
 


  }

     
  


