import { Injectable } from "@angular/core";
import { IPets } from "./pets/petsInterface";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from "@angular/compiler";
import { LoginService } from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class PetsService{

  constructor(private http: HttpClient, private loginService : LoginService) {}

  getPets(): Observable<IPets[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginService.user.token}`
      })
    };
    return this.http.get<IPets[]>(`http://localhost:8080/api/getpetlist`, httpOptions);
  }
  

  addPet(pet: IPets): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginService.user.token}`
      })
    };
    return this.http.post('http://localhost:8080/api/addpet', pet, httpOptions);
}


  getPetById(petId : number): Observable <IPets[]> {
    return this.http.get<IPets[]> (`http://localhost:8080/api/pet/${petId}`)
  }

  updatePet(petId: number, token: string, pet: IPets): Observable<IPets> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.put<IPets>(`http://localhost:8080/api/pet/${petId}`, pet, httpOptions);
  }
  
  
  
}