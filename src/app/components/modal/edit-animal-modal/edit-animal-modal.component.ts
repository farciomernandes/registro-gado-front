import { Component } from '@angular/core';
import { NewAnimalModalComponent } from '../new-animal-modal/new-animal-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-animal-modal',
  templateUrl: './edit-animal-modal.component.html',
  styleUrl: './edit-animal-modal.component.scss'
})
export class EditAnimalModalComponent {
  constructor(private dialogRef: MatDialogRef<NewAnimalModalComponent>) {}

  formData: any = {
    name: '', // Animal Name
    breed: '', // Breed
    gender: '', // Gender
    purity: '', // Purity
    birthDate: '', // Date of Birth
    father: '', // Father
    mother: '', // Mother
    rdc: '', // RDC
    series: '', // Series
    lastCalving: '' // Last Calving
  };

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Form Data:', this.formData);
    this.dialogRef.close();
  }
}
