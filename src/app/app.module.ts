import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PetListComponent } from 'src/app/pets/pets-list.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PetsService } from './PetsService';
import { HttpClientModule } from '@angular/common/http';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { LoginComponent } from './login/login.component';
import { RouteModule } from './app.route-module';
import { AuthGuard } from './login/login.authguard';


@NgModule({
  declarations: [PetListComponent, 
    AppComponent, 
    AddPetComponent, 
    EditPetComponent,
    LoginComponent],

  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouteModule],

  providers: [PetsService, AuthGuard],

  bootstrap: [AppComponent]
})

export class AppModule { }
