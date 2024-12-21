import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrl: './family-tree.component.scss'
})
export class FamilyTreeComponent {
  id: string | null = null;
  animal: any = null;

  father: any = null;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'] ?? '';
      if (this.id) {
        this.loadAnimalDetails(this.id);
      }
    });
  }

  loadAnimalDetails(id: string): void {
    this.animalService.getAnimalById(id).subscribe(
      (data) => {
        this.animal = data;

        // Verifica se `fatherId` existe antes de tentar carregar os detalhes do pai
        if (this.animal?.fatherId) {
          this.loadFatherDetails(this.animal.fatherId);
        } else {
          console.warn('O animal não possui fatherId.');
        }
      },
      (error) => {
        console.error('Erro ao buscar os dados do animal:', error);
      }
    );
  }

  loadFatherDetails(id: string): void {
    this.animalService.getAnimalById(id).subscribe(
      (data) => {
        this.father = data;
        console.log('Dados do pai:', this.father);
      },
      (error) => {
        console.error('Erro ao buscar os dados do pai:', error);
      }
    );
  }

  get firstName(): string {
    return this.animal?.name?.split(' ')[0] || '';
  }
}
