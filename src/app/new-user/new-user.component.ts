import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService,
             private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.userService.create(this.user).subscribe(
      user =>{this.user=new User();
             this.router.navigateByUrl("/table")}
    );
  }
 /* onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.addnewUser(this.newUser).subscribe(
      response => {
        this.newUser = new User();
        this.router.navigateByUrl("/users")
      },
      err => console.error(err),
    )
  }
*/
}
