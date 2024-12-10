import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-animal-modal',
  templateUrl: './new-animal-modal.component.html',
  styleUrl: './new-animal-modal.component.scss'
})
export class NewAnimalModalComponent {

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

  constructor(private dialogRef: MatDialogRef<NewAnimalModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Form Data:', this.formData);
    this.dialogRef.close();
  }
}
