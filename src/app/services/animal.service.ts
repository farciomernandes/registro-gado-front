import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = `${environment.apiUrl}/animal`;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAnimalById(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/${id}`

    return this.http.get<any>(url);
  }

  addAnimal(animalData: any): Observable<any> {
    const payload = {
      ...animalData,
      registeredWithGovernment: false,
      receiveNotifications: false,
    };

    return this.http.post<any>(this.apiUrl, payload).pipe(
      catchError((error) => {
        let errorMessage = 'Erro ao cadastrar animal.';

        // Se for uma string vinda do back (texto puro)
        if (typeof error.error === 'string') {
          errorMessage = error.error;
        }

        // Se for um objeto com campo `message`
        if (typeof error.error === 'object' && error.error?.message) {
          errorMessage = error.error.message;
        }

        this.toastr.error(errorMessage, 'Erro');
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  editAnimal(id: string, animalData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.put<any>(url, animalData).pipe(
      catchError((error) => {
        let errorMessage = 'Erro ao editar animal.';

        if (typeof error.error === 'string') {
          errorMessage = error.error;
        }

        if (typeof error.error === 'object' && error.error?.message) {
          errorMessage = error.error.message;
        }

        this.toastr.error(errorMessage, 'Erro');
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  deleteAnimal(id: string) {
    const url = `${this.apiUrl}/${id}`

    const userConfirmed = confirm("Tem certeza que deseja deletar esse item?");
    if (!userConfirmed) {
      console.log('Ação de exclusão cancelada pelo usuário.');
      return;
    }

    return this.http.delete<any>(
      url
    ).pipe(
      catchError((error) => {
        console.log('Erro ao deletar o animal');
        alert('Erro ao deletar o animal. Tente novamente.');
        return throwError(() => new Error('Erro ao realizar a requisição DELETE'));
      })
    )
  }
}
