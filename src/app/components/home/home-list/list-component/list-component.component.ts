import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditAnimalModalComponent } from '../../../modal/edit-animal-modal/edit-animal-modal.component';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListComponentComponent {
  selectedItems: any[] = [];


  displayedColumns: string[] = [
    'select',
    'numero',
    'serie',
    'nome',
    'raca',
    'pureza',
    'rdc',
    'sexo',
    'pai',
    'mae',
    'dataNascimento',
    'ultimaParicao',
    'menu',
  ];

  dataSource = [
    {
      numero: '123456789',
      serie: '123456789',
      nome: 'Bernadete',
      raca: 'Brangus',
      pureza: 'Exemplo',
      rdc: 'AFDCJ',
      sexo: 'Fêmea',
      pai: 'Hereford',
      mae: 'Hereford',
      dataNascimento: '12 de abril 2023',
      ultimaParicao: '10 de abril 2024',
    },
    {
      numero: '987654321',
      serie: '987654321',
      nome: 'Joana',
      raca: 'Angus',
      pureza: 'Puro',
      rdc: 'DFGJK',
      sexo: 'Fêmea',
      pai: 'Hereford',
      mae: 'Hereford',
      dataNascimento: '10 de janeiro 2023',
      ultimaParicao: '15 de março 2024',
    },
  ];

  constructor(private router: Router, public dialog: MatDialog) {}

  toggleSelection(row: any, event: any) {
    if (event.checked) {
      this.selectedItems.push(row);
    } else {
      this.selectedItems = this.selectedItems.filter(item => item !== row);
    }
  }

  navigateToDetails(row: any): void {
    this.router.navigate(['/details-screen'], { queryParams: { id: row.id } });
  }

  openNewAnimalModal(): void {
    this.dialog.open(EditAnimalModalComponent, {
      width: '40rem',
    });
  }
}
