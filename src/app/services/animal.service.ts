import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = `${environment.apiUrl}/animal`;

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAnimalById( id: string ): Observable<any[]>{
    const url = `${this.apiUrl}/${id}`

    return this.http.get<any>(url);
  }

  addAnimal(animalData: any): Observable<any> {
    const payload = {
      ...animalData,
      registeredWithGovernment: false,
      receiveNotifications: false,
    };

    return this.http.post<any>(this.apiUrl, payload);
  }
}
