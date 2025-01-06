import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditAnimalModalComponent } from '../../modal/edit-animal-modal/edit-animal-modal.component';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListComponentComponent implements OnChanges {
  @Input() searchCriteria: { field: string; value: string } | null = null;
  selectedItems: any[] = [];

  displayedColumns = [
    'select',
    'numeration',
    'serie',
    'name',
    'breed',
    'purity',
    'registered_with_government',
    'sex',
    'father',
    'mother',
    'birthDate',
    'last_breeding',
    'menu'
  ];

  originalDataSource: any[] = [];

  dataSource: any[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private animalService: AnimalService
  ) {}

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalService.getAnimals().subscribe(
      (data) => {
        console.log('Dados carregados da API:', data); // Adicione este log
        this.originalDataSource = data;
        this.dataSource = [...this.originalDataSource];
      },
      (error) => {
        console.error('Erro ao carregar os animais:', error); // Adicione este log para erros
      }
    );
  }

  toggleSelection(row: any, event: any) {
    if (event.checked) {
      this.selectedItems.push(row);
    } else {
      this.selectedItems = this.selectedItems.filter((item) => item !== row);
    }
  }

  navigateToDetails(row: any): void {
    this.router.navigate(['/details-screen'], { queryParams: { id: row.id } });
  }

  openNewAnimalModal(): void {
    this.dialog.open(EditAnimalModalComponent, {
      width: '42rem',
    });
  }

  onSearchCriteriaChange(criteria: { field: string; value: string }) {
    const { field, value } = criteria;

    if (!value || !field) {
      this.dataSource = [...this.originalDataSource];
      return;
    }

    this.dataSource = this.originalDataSource.filter((item) =>
      item[field]?.toString().toLowerCase().includes(value.toLowerCase())
    );
  }

  ngOnChanges() {
    if (this.searchCriteria) {
      const { field, value } = this.searchCriteria;

      if (!value) {
        this.dataSource = [...this.originalDataSource];
        return;
      }

      this.dataSource = this.originalDataSource.filter((item) => {
        if (!field) {
          return Object.values(item).some((val) =>
            val?.toString().toLowerCase().includes(value.toLowerCase())
          );
        }

        return item[field as keyof typeof item]
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    }
  }

  deleteAnimal(id: string) {
    this.animalService.deleteAnimal(id)?.subscribe({
      next: () => {
        alert('Animal excluído com sucesso!');
        this.loadAnimals();
      },
      error: () => alert('Erro ao excluir o animal.')
    });
  }
}
