import { Component } from '@angular/core';
import { IPets } from '../pets/petsInterface';
import { PetsService } from '../PetsService';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  addForm: FormGroup;
  constructor(private petsService : PetsService, private router: Router)
  { this.addForm = new FormGroup({
    petId: new FormControl(null),
    petName: new FormControl(''),
    petCode: new FormControl(''),
    petFurColor: new FormControl(''),
    petType: new FormControl(''),
    petCountry: new FormControl('')
  })};

  addNewPet(): void {
    const pet: IPets = this.addForm.value;
    console.log(pet);
    this.petsService.addPet(pet).subscribe(() =>
    this.router.navigate(['pets']))
  
  }
}

