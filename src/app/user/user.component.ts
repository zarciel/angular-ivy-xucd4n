import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserService } from "./Shared/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  public listUser: user[];

  public events: any[];

  @Input() item: number;

  @Output() newItem = new EventEmitter<string>();

  ngOnInit() {
    this.listUser = new Array<user>();
    this.listUser.push(new user("nciolas", "zarciel", "fr"));
    this.events = this.userService.getEvents();
  }

  onAddUser() {
    this.listUser.push(
      new user(this.makeid(5), this.makeid(5), this.makeid(2))
    );
  }

  takeName(position: number) {
    if (position >= 0) {
      //  this.newItem = this.listUser[position].name;
      return this.listUser[position];
    } else {
      return "";
    }
  }

  onGetUserName() {
    this.newItem.emit(this.listUser[this.item].name);
  }

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /*numberOfRow() {
    this.listUser.length;
  }*/
}

class user {
  public name: string;
  public nickname: string;
  public country: string;

  constructor(name: string, nickname: string, country: string) {
    this.name = name;
    this.nickname = nickname;
    this.country = country;
  }
}
