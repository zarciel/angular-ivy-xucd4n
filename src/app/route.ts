import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserComponent } from "./user/user.component";

export const appRoutes: Routes = [
  { path: "user", component: AppComponent },
  { path: "user/:id", component: UserDetailsComponent },
  { path: "", redirectTo: "/user", pathMatch: "full" }
];
