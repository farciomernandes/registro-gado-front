import { Component, Inject } from '@angular/core';
import { NewAnimalModalComponent } from '../new-animal-modal/new-animal-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimalService } from '../../../services/animal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-animal-modal',
  templateUrl: './edit-animal-modal.component.html',
  styleUrl: './edit-animal-modal.component.scss'
})
export class EditAnimalModalComponent {
  constructor(
    private dialogRef: MatDialogRef<EditAnimalModalComponent>,
    private animalService: AnimalService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formData = { ...data };
  }

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
    if (!this.data?.id) {
      this.toastr.error('ID do animal não informado.', 'Erro');
      return;
    }

    this.animalService.editAnimal(this.data.id, this.formData).subscribe({
      next: () => {
        this.toastr.success('Animal editado com sucesso!');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
