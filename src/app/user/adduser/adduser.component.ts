import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findAllUsers();
  }

  findAllUsers(){
    this.userService.getAllUsers().subscribe((res: any) => {
      if(res.success == true) {
        this.users = res.data;
      } else {
        console.log("Error: could not get all users");
      }
    })
  }

}
