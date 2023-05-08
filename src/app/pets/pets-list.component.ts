import { Component, Input, OnInit } from "@angular/core";
import { IPets } from "./petsInterface";
import { PetsService } from "../PetsService";
import { Router} from "@angular/router";



@Component({
  selector: 'pet-list',
  templateUrl: './pets-list.component.html'
})

export class PetListComponent implements OnInit {

  pets: IPets[] = [];
  clonedPets: IPets [] = [];
  currentSort : string;

  constructor(private petsService: PetsService, private router: Router) {
    this.currentSort = 'default';
   }

  ngOnInit(): void {
    this.petsService.getPets().subscribe(
      (pets: IPets[]) => {
        this.pets = pets;
        this.clonedPets = pets.slice();
      }, (error) => console.log(error)
    );
  }

  sort(column: any, sortType: string) {
    if (this.currentSort === 'default') {
      this.currentSort = 'desc';
    } else if (this.currentSort === 'desc') {
      this.currentSort = 'asc';
    } else {
      this.currentSort = 'default';
      this.pets = this.clonedPets.slice();
      return;
    }
  
    if (sortType === "string"){
      this.pets.sort((a, b) => {
        const petA= a[column].toUpperCase();
        const petB= b[column].toUpperCase();
        if (petA < petB) {
          return this.currentSort === 'asc' ? -1 : 1;
        }
        if (petA > petB) {
          return this.currentSort === 'asc' ? 1 : -1;
        }
        return 0;
      });
    } else {
      this.pets.sort((a,b) => {
        const petACode = parseInt(a[column]);
        const petBCode = parseInt(b[column]);
        return this.currentSort === 'asc' ? petACode - petBCode : petBCode - petACode;
      })
    }
  }

}
