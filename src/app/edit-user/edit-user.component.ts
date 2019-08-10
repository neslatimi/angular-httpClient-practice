import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { DataTableComponent } from '../page/data-table/data-table.component';
import { URLSearchParams } from 'url';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  //private sub: any;
  user: User;

  constructor(private ar: ActivatedRoute,
              private userService: UserService,
              private router: Router) { 
                this.ar.params.forEach(params=>{
                  this.id=params.id;
                  this.userService.getOne(this.id).subscribe(
                    user=>this.user=user
                  )
                })

  }

  ngOnInit() {

}

onSubmit(ev: Event): void {
  ev.preventDefault();
  this.userService.edit(this.user,this.id).subscribe(
   user=> {
     this.user=new User();
   this.router.navigateByUrl("/table")
   })
}

}
