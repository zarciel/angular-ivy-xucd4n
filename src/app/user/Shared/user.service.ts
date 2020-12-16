import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  public getEvents() {
    return EVENTS;
  }

  public getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}
const EVENTS = [
  {
    id: 1,
    name: "Bond",
    nickname: "007",
    country: "UK"
  },
  {
    id: 2,
    name: "Arnold",
    nickname: "Terminator",
    country: "USA"
  }
];
