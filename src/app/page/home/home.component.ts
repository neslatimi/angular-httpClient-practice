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
  ngOnInit() { }

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








  /////////////////////////////////////////////////
  /*allData: any;
  Count: number = 0;
  activeUserCount: number = 0;
  notactiveUserCount: number = 0;
  balance: number = 0;
  fruitCounter: number = 0;
  Fruits: string[] = [];
  FruitArray: number[] = [];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getAll().subscribe(
      response => {
        this.allData = response
      },
      err => console.error(err)
    );
  
  }
  
  countUser() {
    for (let i = 0; i < this.allData.length; i += 1) {
      this.Count += 1;
    }
    return this.Count;
  }
  countActiveUser() {
    for (let i = 0; i < this.allData.length; i += 1) {
      if (this.allData[i].isActive) {
        this.activeUserCount++;
      }
    }
    return this.activeUserCount;
  }
  countNotActiveUser() {
    this.notactiveUserCount = this.Count - this.activeUserCount
    return this.notactiveUserCount
  }
  sumBalance() {
    for (let i = 0; i < this.allData.length; i += 1) {
      if (this.allData[i].balance !== undefined) {
        this.balance += parseInt(this.allData[i].balance.replace('$', '').replace(',', ''))
      }
    }
    return this.balance;
  }
  countAppleLover() {
    for (let i = 0; i < this.allData.length; i += 1) {
      if ((this.Fruits.indexOf(this.allData[i].favoriteFruit)) == -1
        && this.allData[i].favoriteFruit !== undefined) {
        this.Fruits.push(this.allData[i].favoriteFruit)
      }
    }
    console.log(this.Fruits);
    for (let j = 0; j < this.Fruits.length; j += 1) {
  
      for (let i = 0; i < this.allData.length; i += 1) {
        if (this.allData[i].favoriteFruit === this.Fruits[j]) {
          this.fruitCounter++;
        }
      }
      this.FruitArray.push(this.fruitCounter)
      this.fruitCounter = 0;
    }
    return this.Fruits;
  }*/

}






