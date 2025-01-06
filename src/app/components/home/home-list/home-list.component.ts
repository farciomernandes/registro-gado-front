import { Component } from '@angular/core';
import { NewAnimalModalComponent } from '../../modal/new-animal-modal/new-animal-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss'
})
export class HomeListComponent {
  constructor(public dialog: MatDialog) {}

  selectedSex: string = '';

  searchCriteria: { field: string; value: string } | null = null;

  onSearchCriteriaChange(criteria: { field: string; value: string }) {
    this.searchCriteria = criteria;
    console.log('Critério de busca atualizado:', this.searchCriteria);
  }

  openNewAnimalModal(): void {
    this.dialog.open(NewAnimalModalComponent, {
      width: '42rem',
    });
  }

  onSexChange(): void {
    if (!this.selectedSex || this.selectedSex === 'Todos') {
      this.searchCriteria = null;
    } else {
      this.searchCriteria = { field: 'sex', value: this.selectedSex };
    }
    console.log('Critério atualizado:', this.searchCriteria);
  }
}
