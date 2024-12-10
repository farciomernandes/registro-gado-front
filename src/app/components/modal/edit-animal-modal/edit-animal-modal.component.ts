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

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close();
  }
}
