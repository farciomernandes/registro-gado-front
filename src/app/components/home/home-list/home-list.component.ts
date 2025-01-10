import { Component, OnInit } from '@angular/core';
import { NewAnimalModalComponent } from '../../modal/new-animal-modal/new-animal-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.scss'
})
export class HomeListComponent implements OnInit{
  constructor(public dialog: MatDialog, private animalService: AnimalService) {}

  selectedSex: string = '';
  purities: string[] = []
  selectedPurity: string = '';

  searchCriteria: { field: string; value: string } | null = null;

  ngOnInit(): void {
    this.fetchPurities();
  }

  fetchPurities(): void {
    this.animalService.getAnimals().subscribe(
      (animals) => {
        this.purities = [...new Set(animals.map((animal) => animal.purity))].filter(Boolean);
        console.log('Purezas disponíveis:', this.purities);
      },
      (error) => {
        console.error('Erro ao buscar purezas:', error);
      }
    );
  }

  onPurityChange(): void {
    if (!this.selectedPurity) {
      this.searchCriteria = null;
    } else {
      this.searchCriteria = { field: 'purity', value: this.selectedPurity };
    }
    console.log('Critério de pureza atualizado:', this.searchCriteria);
  }

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
