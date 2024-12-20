import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditAnimalModalComponent } from '../../components/modal/edit-animal-modal/edit-animal-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrl: './details-screen.component.scss'
})
export class DetailsScreenComponent {
  id: string = '';
  animal: any = null;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'] ?? ''; // Valor padrão se id for null
      if (this.id) {
        this.loadAnimalDetails(this.id);
      }
    });
  }

  loadAnimalDetails(id: string): void {
    this.animalService.getAnimalById(id).subscribe(
      (data) => {
        this.animal = data;
        console.log('Dados do animal:', this.animal);
      },
      (error) => {
        console.error('Erro ao buscar os dados do animal:', error);
      }
    );
  }

  openNewAnimalModal(): void {
    this.dialog.open(EditAnimalModalComponent, {
      width: '40rem',
    });
  }

  deleteAnimal(): void {
    if (this.id) {
      this.animalService.deleteAnimal(this.id)?.subscribe({
        next: () => {
          alert('Animal excluído com sucesso!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro ao excluir o animal:', err);
          alert('Erro ao excluir o animal.');
        }
      });
    } else {
      alert('ID do animal não encontrado!');
    }
  }
}
