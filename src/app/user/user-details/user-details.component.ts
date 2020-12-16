import { Component, OnInit } from '@angular/core';
import { UserService } from "../Shared/user.service";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }
event:any;
  ngOnInit() {
        this.event = this.userService.getEvents();
  }

}