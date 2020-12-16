import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserComponent } from "./user/user.component";
import { UserService } from "./user/Shared/user.service";
import { UserDetailsComponent } from './user/user-details/user-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, UserComponent, UserDetailsComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
