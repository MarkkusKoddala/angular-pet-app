import { NgModule } from "@angular/core";
import { EditPetComponent } from "./edit-pet/edit-pet.component";
import { AddPetComponent } from "./add-pet/add-pet.component";
import { PetListComponent } from "./pets/pets-list.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./login/login.authguard";

const appRoute: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'pets', component: PetListComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditPetComponent, canActivate: [AuthGuard] },
  {path: 'add', component: AddPetComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute),
  ],
  exports: [
    RouterModule
  ]

})
export class RouteModule{

}