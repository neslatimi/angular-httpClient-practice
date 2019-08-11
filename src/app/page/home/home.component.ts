import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUser: any = 0;
  listUserActive: any = 0;
  sumBalance:number=0;
  appleLover:number=0;
  bananaLover:number=0;
  strawberryLover:number=0;


  constructor(private userService: UserService) {
    this.numberOfUser();
    this.numberOfActive();
    this.totalBalance();
    this.fruitLovers();

  }
  ngOnInit() { 
    
  }

  numberOfUser() {
    this.userService.getAll().subscribe(users => {
      this.listUser = users
    })
  }

  numberOfActive() {
    this.userService.getAll().subscribe(users => {
      users.forEach(item => {
        if (item.isActive === true) {
          this.listUserActive++
        }
      })
    });
  }

  totalBalance(){
    this.userService.getAll().subscribe(users=>{
      users.forEach(item=>{
        if(item.balance!==undefined){
          this.sumBalance+=parseInt(item.balance.replace('$','').replace(',',''))
        }
      })
    })
  }

  fruitLovers(){
    this.userService.getAll().subscribe(users => {
      users.forEach(item => {
        if (item.favoriteFruit === "apple") {
          this.appleLover++
        }else if (item.favoriteFruit==="banana"){
          this.bananaLover++
        }else if (item.favoriteFruit==="strawberry"){
          this.strawberryLover++
        }
      })
    });
  }
}