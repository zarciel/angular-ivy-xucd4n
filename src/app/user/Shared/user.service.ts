import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  public getEvents() {
    return EVENTS;
  }
}
const EVENTS = [
  {
    name: "Bond",
    nickname: "007",
    country: "UK"
  },
  {
    name: "Arnold",
    nickname: "Terminator",
    country: "USA"
  }
];
