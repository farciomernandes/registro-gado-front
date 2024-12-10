import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-animal-modal',
  templateUrl: './new-animal-modal.component.html',
  styleUrl: './new-animal-modal.component.scss'
})
export class NewAnimalModalComponent {

  constructor(private dialogRef: MatDialogRef<NewAnimalModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close();
  }
}
