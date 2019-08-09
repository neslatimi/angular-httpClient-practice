import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {
  title = 'Users Table';
  userList: User[] = [];
  userSubscription: Subscription;
  changeCounter: number = 0;
  display = 'none';
  userID: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


  openModal(user: User) {
    console.log(user)
    this.display = 'block';
    this.userID = user
  }

  onDelete(user: User) {
    user = this.userID
    console.log(user)
    this.userService.remove(user.id).subscribe(
      response => {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.changeCounter++;
        this.onCloseHandled()
      },
      error => console.error(error)
    )
  }
  onCloseHandled() {
    this.display = 'none';
  }


}