import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AnimalService } from '../../../services/animal.service';


@Component({
  selector: 'app-new-animal-modal',
  templateUrl: './new-animal-modal.component.html',
  styleUrl: './new-animal-modal.component.scss'
})
export class NewAnimalModalComponent {

  formData: any = {
    name: '', // Animal Name
    numeration: '',
    breed: '', // Breed
    gender: '', // Gender
    purity: '', // Purity
    birthDate: '', // Date of Birth
    father: '', // Father
    mother: '', // Mother
    rdg: '', // RDC
    series: '', // Series
    lastCalving: '' // Last Calving
  };

  constructor(private dialogRef: MatDialogRef<NewAnimalModalComponent>, private animalService: AnimalService) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const animalData = {
      name: this.formData.name,
      numeration: this.formData.numeration,
      age: this.calculateAge(this.formData.birthDate),
      serie: this.formData.series || '',
      breed: this.formData.breed || '',
      purity: this.formData.purity || '',
      RDG: this.formData.rdg || '',
      sex: this.formData.gender || '',
      lastBreeding: this.formData.lastCalving || null,
      birthDate: this.formData.birthDate || '',
      motherName: this.formData.mother || '',
      fatherName: this.formData.father || '',
      registeredWithGovernment: false, // Setando padrão como false
      receiveNotifications: false,    // Setando padrão como false
      imageUrl: '' // Caso não tenha imagem, enviando string vazia
    };

    console.log('Enviando payload:', animalData);

    this.animalService.addAnimal(animalData).subscribe({
      next: (response) => {
        console.log('Animal adicionado com sucesso:', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Erro ao adicionar animal:', error);
      }
    });
  }

  private calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    return today.getFullYear() - birth.getFullYear();
  }
}
