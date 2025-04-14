import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AnimalService } from '../../../services/animal.service';
import { ToastService } from '../../../services/toastService';


@Component({
  selector: 'app-new-animal-modal',
  templateUrl: './new-animal-modal.component.html',
  styleUrl: './new-animal-modal.component.scss'
})
export class NewAnimalModalComponent implements OnInit {

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

  maleNames: string[] = []
  femaleNames: string[] = []

  animal: any[] = [];

  constructor(private dialogRef: MatDialogRef<NewAnimalModalComponent>, private animalService: AnimalService, private toastService: ToastService) { }

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAnimals().subscribe(
      (data) => {
        const maleNamesData = data
          .filter(animal => animal.sex === 'M')
          .map(animal => animal.name)

        const femaleNamesData = data
          .filter(animal => animal.sex === 'F')
          .map(animal => animal.name)

        this.maleNames = maleNamesData;
        this.femaleNames = femaleNamesData;
      },
      (error) => {
        console.error('Erro ao carregar os animais:', error); // Adicione este log para erros
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.clearValidationErrors();
    const hasErrors = this.validateForm();

    if (hasErrors) {
      return;
    }

    const formattedBirthDate = new Date(this.formData.birthDate).toISOString().split('T')[0];

    const age = this.calculateAge(formattedBirthDate);

    console.log('Idade calculada para enviar:', age);

    console.log('Data de nascimento formatada:', formattedBirthDate);

    // Verifique o valor da idade calculada
    console.log('Idade calculada:', age);

    const animalData = {
      name: this.formData.name,
      numeration: this.formData.numeration,
      age: age, // Usa a idade calculada com a data formatada
      serie: this.formData.series || '', // Pode ser vazio
      breed: this.formData.breed || '', // Pode ser vazio
      purity: this.formData.purity || '', // Pode ser vazio
      RDG: this.formData.rdg || '', // Pode ser vazio
      sex: this.formData.gender || '', // Pode ser vazio
      lastBreeding: this.formData.lastCalving || null, // Pode ser vazio
      birthDate: formattedBirthDate, // Usa a data formatada aqui
      motherName: this.formData.mother || '', // Pode ser vazio
      fatherName: this.formData.father || '', // Pode ser vazio
      registeredWithGovernment: false, // Setando padrão como false
      receiveNotifications: false,    // Setando padrão como false
      imageUrl: '' // Caso não tenha imagem, enviando string vazia
    };

    console.log('Enviando payload:', animalData);

    this.animalService.addAnimal(animalData).subscribe({
      next: (response) => {
        console.log('Animal adicionado com sucesso:', response);
        this.dialogRef.close();
        this.toastService.success('Animal cadastrado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao adicionar animal:', error);

        const errorMessage = error?.error?.message || 'Erro ao cadastrar o animal.';
        this.toastService.error(errorMessage);
      }
    });
  }

  private validateForm(): boolean {
    const errors: { [key: string]: string } = {};
    const requiredFields = [
      { key: 'name', label: 'Nome do Animal' },
      { key: 'numeration', label: 'Numeração' },
      { key: 'birthDate', label: 'Data de Nascimento' },
      { key: 'breed', label: 'Raça' },
      { key: 'gender', label: 'Sexo' },
      { key: 'purity', label: 'Pureza' },
      { key: 'rdg', label: 'RDG' },
      { key: 'series', label: 'Série' },

    ];

    requiredFields.forEach(field => {
      if (!this.formData[field.key]) {
        errors[field.key] = `${field.label} é obrigatório.`;
      }
    });

    // Verificação para campos opcionais:
    if (this.formData.birthDate && isNaN(new Date(this.formData.birthDate).getTime())) {
      errors['birthDate'] = 'Data de nascimento inválida.';
    }

    this.formData.validationErrors = errors;
    return Object.keys(errors).length > 0;
  }

  private clearValidationErrors(): void {
    this.formData.validationErrors = {};
  }

  private calculateAge(birthDate: string): number {
    console.log('Data recebida para calcular idade:', birthDate); // Verifique se a data está sendo recebida corretamente

    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) {
      console.error('Data de nascimento inválida');
      return 0; // Retorna 0 se a data não for válida
    }

    const today = new Date();
    let ageInYears = today.getFullYear() - birth.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    // Verifica se o aniversário já passou este ano
    if (todayMonth < birth.getMonth() || (todayMonth === birth.getMonth() && todayDay < birth.getDate())) {
      ageInYears--; // Subtrai um ano se o aniversário ainda não aconteceu
    }

    // Se o animal for menor de 1 ano, calcula a idade em meses
    if (ageInYears < 1) {
      const months = today.getMonth() - birth.getMonth() + (today.getFullYear() - birth.getFullYear()) * 12;
      console.log('Idade em meses:', months); // Log para depuração
      return months; // Retorna a idade em meses
    }

    console.log('Idade calculada em anos:', ageInYears); // Verifique se a idade foi calculada corretamente
    return ageInYears;
  }
}
