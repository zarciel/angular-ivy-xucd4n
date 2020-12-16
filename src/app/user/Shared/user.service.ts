import {Injectable} from '@angular/core'

@Injectable()
export class UserService{
  getEvents(){
    return EVENTS
  }
}

const EVENT [
  {
    name = 'Bond',
    nickname = '007',
    country = 'UK',
  },
  {
        name = 'Arnold',
    nickname = 'Terminator',
    country = 'USA',
  };
]