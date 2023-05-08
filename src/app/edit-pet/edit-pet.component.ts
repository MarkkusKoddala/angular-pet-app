import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPets } from '../pets/petsInterface';
import { PetsService } from '../PetsService';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent {
  pet : IPets[] = []
  petId: any;
  editForm: FormGroup;
  userToken : any;
  errorMessage  = '';

  constructor(private routePara: ActivatedRoute, private petsService: PetsService, private route: Router, private loginService : LoginService) {
    this.editForm = new FormGroup({
    petId: new FormControl(''),
    petName: new FormControl(''),
    petCode: new FormControl(''),
    petFurColor: new FormControl(''),
    petType: new FormControl(''),
    petCountry: new FormControl(''),
  })
  this.errorMessage = '';
  this.userToken = loginService.user.token;
  }

  updatePet(){
    this.petsService.updatePet(this.petId, this.userToken, this.editForm.value).subscribe( 
      result => {console.log(result)
      this.route.navigate(["/pets"])
    }, error => {this.errorMessage = error;})}

  ngOnInit(): void{
     this.petId = +this.routePara.snapshot.params['id'];
    let pet = this.petsService.getPetById(this.petId).subscribe((pet: any) => {
      this.editForm = new FormGroup({
        petId: new FormControl(pet['petCode']),
        petName: new FormControl(pet['petName']),
        petCode: new FormControl(pet['petCode']),
        petFurColor: new FormControl(pet['petFurColor']),
        petType: new FormControl(pet['petType']),
        petCountry: new FormControl(pet['petCountry'])
      })
    })}
  }
