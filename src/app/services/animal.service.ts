import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = `${environment.apiUrl}/animals`;

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
