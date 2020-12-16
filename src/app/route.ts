import { Routes } from "@angular/router";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserComponent } from "./user/user.component";

export const appRoutes: Routes = [
  { path: "users", component: UserComponent },
  { path: "user/:id", component: UserDetailsComponent },
  { path: "", redirectTo: "/users", pathMatch: "full" }
];
